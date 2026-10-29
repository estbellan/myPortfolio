import assert from "node:assert/strict";
import {readFile, access} from "node:fs/promises";
import {runInNewContext} from "node:vm";
import path from "node:path";

const home=await readFile("index.html","utf8");
const casePage=await readFile("case-study.html","utf8");
const projectJs=await readFile("js/selected-work.js","utf8");
const css=await readFile("css/selected-work.css","utf8");

assert.ok(home.includes('id="work"'),"Missing work section");
assert.ok(home.includes('id="contact"'),"Missing contact section");
assert.ok(casePage.includes('id="case-root"'),"Missing case content");
assert.ok(css.includes('.work-grid'),"Missing work grid styles");

const caseIds=[...home.matchAll(/case-study\.html\?id=([a-z0-9-]+)/g)].map(x=>x[1]);
const obj=runInNewContext(projectJs+"\n;Object.keys(CASES)",{document:{addEventListener(){}},URLSearchParams});
for(const id of caseIds) assert.ok(obj.includes(id),"Missing case study: "+id);
assert.equal(caseIds.length,4,"Expected four featured case studies");

for(const [file,html] of [["index.html",home],["case-study.html",casePage]]){
  const attrs=[...html.matchAll(/(?:src|href)="([^"]+)"/g)].map(x=>x[1]);
  for(const raw of attrs){
    if(raw.startsWith("#")||raw.startsWith("https://")||raw.startsWith("mailto:"))continue;
    const target=raw.split("?")[0].split("#")[0];
    assert.ok(target&&!target.startsWith("/"),"Invalid local link in "+file+": "+raw);
    await access(path.resolve(target));
  }
}
for(const banned of ["wakerift","agrostock","vwfs","volkswagen"]){
  assert.ok(!home.toLowerCase().includes(banned),"Private/client material reference in home: "+banned);
}
console.log("Portfolio smoke checks passed: "+caseIds.length+" cases, local links and assets present.");