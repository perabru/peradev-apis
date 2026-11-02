"""Regenerate exact editorial cards. Requires Pillow and DejaVu Sans fonts."""
from pathlib import Path
import json
from PIL import Image, ImageDraw, ImageFont

HERE = Path(__file__).resolve().parent
FONT_DIR = Path('/usr/share/fonts/truetype/dejavu')
BG, INK, GREEN, MUTED, PANEL = '#101819', '#F5F7EF', '#C6F36B', '#A9BAB1', '#1D2B29'
def font(size, bold=False, mono=False):
    name = 'DejaVuSansMono.ttf' if mono else ('DejaVuSans-Bold.ttf' if bold else 'DejaVuSans.ttf')
    return ImageFont.truetype(str(FONT_DIR / name), size)

def text(draw, xy, value, size=36, color=INK, bold=False, mono=False):
    draw.text(xy, value, font=font(size,bold,mono), fill=color, spacing=12)

def base(page, label):
    im = Image.new('RGB',(1080,1350),BG)
    d = ImageDraw.Draw(im)
    for x in range(660,1080,48):
        for y in range(110,420,48): d.ellipse((x,y,x+3,y+3),fill='#2A3934')
    d.ellipse((72,73,111,119),fill=GREEN)
    d.ellipse((79,61,104,83),fill=GREEN)
    d.line((96,64,101,51),fill=GREEN,width=5)
    text(d,(130,65),'PeraDev',42,bold=True)
    d.rounded_rectangle((72,154,380,205),radius=25,outline='#50623E',width=2)
    text(d,(96,164),label,23,GREEN,bold=True)
    d.line((72,1218,1008,1218),fill='#35453D',width=2)
    text(d,(72,1250),'APIs úteis. Código aberto.',25,MUTED)
    text(d,(912,1246),f'{page}/3',28,GREEN,mono=True)
    return im,d

im,d=base(1,'API 001  /  NODE.JS')
text(d,(67,268),'Organize',102,bold=True)
text(d,(67,387),'tarefas.',120,GREEN,bold=True)
text(d,(72,570),'Uma API REST pequena,',37)
text(d,(72,623),'com recursos de verdade.',37)
d.rounded_rectangle((72,742,1008,1094),radius=28,fill=PANEL)
for i,(verb,detail) in enumerate([('POST','Crie tarefas'),('GET','Busque e filtre'),('PATCH','Atualize o que mudou'),('DELETE','Exclua quando precisar')]):
    y=773+i*75
    text(d,(104,y),verb,30,GREEN,mono=True)
    text(d,(310,y),detail,31)
text(d,(72,1139),'Persistência em arquivo · Zero dependências',28,MUTED)
im.save(HERE/'01-capa.jpg',quality=95,subsampling=0)

im,d=base(2,'NA PRÁTICA')
text(d,(68,265),'Uma chamada.',79,bold=True)
text(d,(68,362),'Tarefa criada.',79,GREEN,bold=True)
d.rounded_rectangle((72,502,1008,754),radius=25,fill=PANEL)
text(d,(104,528),'POST /tasks',32,GREEN,mono=True)
text(d,(104,586),'{\n  "title": "Estudar APIs",\n  "priority": "high"\n}',30,mono=True)
d.rounded_rectangle((72,794,1008,1095),radius=25,fill=PANEL)
text(d,(104,820),'201 Created',32,GREEN,mono=True)
response=json.loads((HERE/'example-response.json').read_text())
excerpt={k:response[k] for k in ['title','priority','done']}
text(d,(104,880),json.dumps(excerpt,ensure_ascii=False,indent=2),30,mono=True)
text(d,(72,1137),'Resposta resumida. A API também retorna UUID e datas.',25,MUTED)
im.save(HERE/'02-exemplo.jpg',quality=95,subsampling=0)

im,d=base(3,'TESTE NO SEU COMPUTADOR')
text(d,(68,263),'Clone.',100,bold=True)
text(d,(68,375),'Execute.',100,GREEN,bold=True)
text(d,(68,487),'Aprenda.',100,bold=True)
d.rounded_rectangle((72,671,1008,926),radius=25,fill=PANEL)
text(d,(104,704),'git clone ' + chr(92),29,GREEN,mono=True)
text(d,(104,764),'https://github.com/perabru/peradev-apis.git',27,mono=True)
text(d,(104,844),'cd peradev-apis/apis/001-task-api',27,mono=True)
text(d,(104,886),'npm start',29,GREEN,mono=True)
text(d,(72,980),'Docs: 127.0.0.1:3000/docs',30)
text(d,(72,1034),'Testes: npm test',30)
text(d,(72,1106),'Node.js 22+ · Execução local',28,MUTED)
text(d,(72,1154),'github.com/perabru/peradev-apis',28,GREEN,bold=True)
im.save(HERE/'03-execute.jpg',quality=95,subsampling=0)
print('3 cards JPEG 1080 × 1350 gerados.')
