import{_ as s,v as a,b as n,R as p}from"./chunks/framework.caa0fbaf.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/云生态/常见问答与分享/article-son/问题有多个ip时指定哪个注册.md","filePath":"markdown/云生态/常见问答与分享/article-son/问题有多个ip时指定哪个注册.md"}'),o={name:"markdown/云生态/常见问答与分享/article-son/问题有多个ip时指定哪个注册.md"},l=p(`<p>有时想服务器会有多张网卡，还可能同时有 ipv4 和 ipv6 的地址。服务注册时需要指定具体ip：</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">server.host</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">168.12.1.3</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#//或者具体信号分别指定</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">server.http.host</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">168.12.1.3</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">server.socket.host</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">168.12.1.3</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">server.websocket.host</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">168.12.1.3</span><span style="color:#89DDFF;">&quot;</span></span></code></pre></div><p>更多配置参考：<a href="/article/174.html">《应用常用配置说明》</a></p>`,3),e=[l];function t(c,r,i,D,y,F){return a(),n("div",null,e)}const h=s(o,[["render",t]]);export{d as __pageData,h as default};
