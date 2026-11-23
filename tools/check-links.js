const fs=require("fs"),path=require("path");const OUT=require("path").resolve(__dirname,"../public");
const files=[];(function w(d){for(const f of fs.readdirSync(d)){const p=path.join(d,f);fs.statSync(p).isDirectory()?w(p):p.endsWith(".html")&&files.push(p)}})(OUT);
let bad=0,checked=0;const re=/(?:href|src)="([^"#?]+)[^"]*"/g;
for(const f of files){const h=fs.readFileSync(f,"utf8");let m;while((m=re.exec(h))){const u=m[1];if(/^(https?:|mailto:|data:)/.test(u)||u==="")continue;checked++;
 const t0=u.startsWith("/")?path.join(OUT,u):path.resolve(path.dirname(f),u);const t=[t0,t0+".html",path.join(t0,"index.html")].find(x=>fs.existsSync(x)&&(fs.statSync(x).isFile()))||t0;if(!fs.existsSync(t)||!fs.statSync(t).isFile()){bad++;if(bad<15)console.log("BROKEN",path.relative(OUT,f),"->",u)}}}
console.log(files.length,"pages,",checked,"local links,",bad,"broken");
/* affiliate check: every link to a partner platform (and every /go/ redirect) must carry our affiliate code.
   The code of each platform is read from PLATFORMS in src/data.js (query string or /t/ path of its url). */
{const vm=require("vm"),c={};vm.createContext(c);vm.runInContext(fs.readFileSync(path.join(__dirname,"../src/data.js"),"utf8").replace(/\bconst |\blet /g,"var "),c);
 const AFF={};for(const p of Object.values(c.PLATFORMS||{})){if(!p.url)continue;const u=new URL(p.url);const host=u.hostname.replace(/^www\./,"");const mark=u.search?u.search.slice(1).split("&")[0]:u.pathname;if(mark&&mark!=="/")AFF[host]=mark}
 let ok=0,miss=0;const hosts=Object.keys(AFF);const chk=(u,where)=>{let h;try{h=new URL(u).hostname.replace(/^www\./,"")}catch(e){return}const d=hosts.find(x=>h===x||h.endsWith("."+x));if(!d)return;if(u.includes(AFF[d]))ok++;else{miss++;if(miss<15)console.log("NO AFFILIATE CODE",where,"->",u)}};
 const ra=/<a\b[^>]*\bhref="(https?:\/\/[^"]+)"/g;for(const f of files){const h=fs.readFileSync(f,"utf8");let m;while((m=ra.exec(h)))chk(m[1].replace(/&amp;/g,"&"),path.relative(OUT,f))}
 const rd=path.join(OUT,"_redirects");if(fs.existsSync(rd))for(const l of fs.readFileSync(rd,"utf8").split("\n"))if(l.startsWith("/go/"))chk(l.split(/\s+/)[1],"_redirects "+l.split(/\s+/)[0]);
 console.log(ok,"affiliate links OK,",miss,"without affiliate code");if(miss)process.exitCode=1;}
