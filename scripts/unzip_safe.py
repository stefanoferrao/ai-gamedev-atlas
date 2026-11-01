# Extrai zips com segurança (sem path traversal), corrige nomes GBK e remove o zip. Uso: python3 -I unzip_safe.py arquivo.zip...
import zipfile, sys, os
for z in sys.argv[1:]:
    dst = os.path.join(os.path.dirname(z), os.path.basename(z)[:-4].replace('\u200b','').strip())
    with zipfile.ZipFile(z) as f:
        for i in f.infolist():
            n = i.filename
            if not (i.flag_bits & 0x800):
                try: n = n.encode('cp437').decode('gbk')
                except Exception: pass
            n = n.replace('\\','/')
            if n.startswith('/') or '..' in n.split('/') or n.startswith('__MACOSX') or n.endswith('.DS_Store'): continue
            p = os.path.join(dst, n)
            if i.is_dir(): os.makedirs(p, exist_ok=True); continue
            os.makedirs(os.path.dirname(p), exist_ok=True)
            with f.open(i) as s, open(p,'wb') as d: d.write(s.read())
    os.remove(z); print(dst, sum(len(fs) for _,_,fs in os.walk(dst)))
