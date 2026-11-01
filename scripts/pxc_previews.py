# Upscale Pixel Composer thumbnails (nearest-neighbor) and build a contact sheet.
import sys, os, json, math
from PIL import Image, ImageSequence, ImageDraw, ImageFont
src, out, items_json = sys.argv[1:4]
items = json.load(open(items_json)); os.makedirs(out, exist_ok=True)
def slug(s): return ''.join(ch if ch.isalnum() else '-' for ch in s.lower()).strip('-').replace('--','-')
def up(im, size=256):
    k = max(1, size // max(im.size)); return im.resize((im.width*k, im.height*k), Image.NEAREST)
for i in items:
    d = os.path.join(src, i['dir']); s = slug(i['dir'])
    if i['gif']:
        g = Image.open(os.path.join(d, 'thumbnail.gif')); frames, durs = [], []
        for f in ImageSequence.Iterator(g):
            frames.append(up(f.convert('RGBA'))); durs.append(f.info.get('duration', g.info.get('duration', 100)))
        frames[0].save(os.path.join(out, s + '.gif'), save_all=True, append_images=frames[1:], duration=durs, loop=0, disposal=2, optimize=True)
    up(Image.open(os.path.join(d, 'thumbnail.png')).convert('RGBA')).save(os.path.join(out, s + '.png'), optimize=True)
# contact sheet: 12 cols, 128px tiles + label
cols, T, L = 12, 128, 18
rows = math.ceil(len(items) / cols)
try: font = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', 11)
except Exception: font = ImageFont.load_default()
sheet = Image.new('RGBA', (cols*(T+8)+8, rows*(T+L+8)+8), (24, 24, 30, 255)); dr = ImageDraw.Draw(sheet)
for n, i in enumerate(items):
    im = Image.open(os.path.join(src, i['dir'], 'thumbnail.png')).convert('RGBA')
    k = max(1, T // max(im.size)); im = im.resize((im.width*k, im.height*k), Image.NEAREST)
    if max(im.size) > T: im.thumbnail((T, T), Image.NEAREST)
    x = 8 + (n % cols)*(T+8); y = 8 + (n // cols)*(T+L+8)
    sheet.alpha_composite(im, (x + (T-im.width)//2, y + (T-im.height)//2))
    name = i['dir'] if len(i['dir']) <= 20 else i['dir'][:19] + '…'
    dr.text((x + T//2, y + T + 3), name, fill=(220, 220, 230, 255), font=font, anchor='mt')
sheet.save(os.path.join(out, 'contact-sheet.png'), optimize=True)
print('ok', len(items))
