const fs=require("fs"),path=require("path");const OUT=require("path").resolve(__dirname,"../public");
const files=[];(function w(d){for(const f of fs.readdirSync(d)){const p=path.join(d,f);fs.statSync(p).isDirectory()?w(p):p.endsWith(".html")&&files.push(p)}})(OUT);
let bad=0,checked=0;const re=/(?:href|src)="([^"#?]+)[^"]*"/g;
for(const f of files){const h=fs.readFileSync(f,"utf8");let m;while((m=re.exec(h))){const u=m[1];if(/^(https?:|mailto:|data:)/.test(u)||u==="")continue;checked++;
 const t0=u.startsWith("/")?path.join(OUT,u):path.resolve(path.dirname(f),u);const t=[t0,t0+".html",path.join(t0,"index.html")].find(x=>fs.existsSync(x)&&(fs.statSync(x).isFile()))||t0;if(!fs.existsSync(t)||!fs.statSync(t).isFile()){bad++;if(bad<15)console.log("BROKEN",path.relative(OUT,f),"->",u)}}}
console.log(files.length,"pages,",checked,"local links,",bad,"broken");
