#!/usr/bin/env python3
import http.server,json,os,pathlib,shutil,subprocess,tempfile,threading,time,webbrowser
ROOT=pathlib.Path(__file__).resolve().parent
os.chdir(ROOT)
NODE=shutil.which('node') or str(pathlib.Path.home()/'.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node')
LOCK=threading.Lock()
class Handler(http.server.SimpleHTTPRequestHandler):
 def do_POST(self):
  if self.path!='/export': self.send_error(404);return
  if self.headers.get('Origin') not in (None,'http://127.0.0.1:8765'):self.send_error(403);return
  if not LOCK.acquire(False):self.reply(409,{'error':'An export is already running. Please wait.'});return
  jobfile=None
  try:
   n=int(self.headers.get('Content-Length','0'))
   if n<1 or n>8000:raise ValueError('Invalid request size.')
   c=json.loads(self.rfile.read(n))
   if c.get('version')!=1 or c.get('type') not in [a['id'] for a in json.loads((ROOT/'library.json').read_text())['animations']] or c.get('speed') not in [.5,1,2] or c.get('cycles') not in [2,3,4] or not isinstance(c.get('amplitude'),(int,float)) or not 20<=c['amplitude']<=100 or not isinstance(c.get('caption'),str) or len(c['caption'])>180:raise ValueError('Invalid animation settings.')
   if c.get('theme','dark') not in ['light','dark']:raise ValueError('Invalid theme.')
   (ROOT/'exports').mkdir(exist_ok=True)
   name=f"{c['type']}-{time.time_ns()}.mp4"
   with tempfile.NamedTemporaryFile(mode='w',suffix='.json',delete=False) as f:json.dump(c,f);jobfile=f.name
   result=subprocess.run([NODE,str(ROOT/'render.cjs'),jobfile,str(ROOT/'exports'/name)],capture_output=True,text=True,timeout=600)
   if result.returncode:raise RuntimeError(result.stderr[-1500:])
   self.reply(200,{'url':'/exports/'+name})
  except Exception as e:self.reply(500,{'error':str(e)})
  finally:
   if jobfile:os.unlink(jobfile)
   LOCK.release()
 def reply(self,status,data):
  body=json.dumps(data).encode();self.send_response(status);self.send_header('Content-Type','application/json');self.send_header('Content-Length',str(len(body)));self.end_headers();self.wfile.write(body)
if __name__=='__main__':
 server=http.server.ThreadingHTTPServer(('127.0.0.1',8765),Handler)
 print('SciSims Animation Lab: http://127.0.0.1:8765 — leave this window open. Control-C stops it.',flush=True)
 if '--no-open' not in __import__('sys').argv:webbrowser.open('http://127.0.0.1:8765')
 server.serve_forever()
