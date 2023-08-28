import{_ as s,v as a,b as n,R as t}from"./chunks/framework.caa0fbaf.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/学习/Solon Web 开发/article-son/B、序列化输出（Json 等）.md","filePath":"markdown/学习/Solon Web 开发/article-son/B、序列化输出（Json 等）.md"}'),o={name:"markdown/学习/Solon Web 开发/article-son/B、序列化输出（Json 等）.md"},l=t(`<p>Solon Web 里，本身并没有序列化的概念，只有“渲染”的概念。包括后端视图模板也是“渲染”。序列化，更适合平常的概念。</p><h3 id="_1、目前适配的主要插件有" tabindex="-1">1、目前适配的主要插件有 <a class="header-anchor" href="#_1、目前适配的主要插件有" aria-label="Permalink to &quot;1、目前适配的主要插件有&quot;">​</a></h3><table><thead><tr><th>插件</th><th>适配框架</th><th>备注</th></tr></thead><tbody><tr><td>Json::</td><td></td><td></td></tr><tr><td><a href="/article/94.html">solon.serialization.snack3</a></td><td>snack3</td><td>solon-api 快捷组合包里，引用了此包</td></tr><tr><td><a href="/article/95.html">solon.serialization.fastjson</a></td><td>fastjson</td><td></td></tr><tr><td><a href="/article/276.html">solon.serialization.fastjson2</a></td><td>fastjson2</td><td></td></tr><tr><td><a href="/article/96.html">solon.serialization.jackson</a></td><td>jackson</td><td></td></tr><tr><td><a href="/article/97.html">solon.serialization.gson</a></td><td>gson</td><td></td></tr><tr><td>Hessian::</td><td></td><td></td></tr><tr><td><a href="/article/98.html">solon.serialization.hessian</a></td><td>hessian</td><td></td></tr><tr><td>protostuf::</td><td></td><td></td></tr><tr><td><a href="/article/99.html">solon.serialization.protostuff</a></td><td>protostuff</td><td></td></tr></tbody></table><h3 id="_2、序列化输出示例" tabindex="-1">2、序列化输出示例 <a class="header-anchor" href="#_2、序列化输出示例" aria-label="Permalink to &quot;2、序列化输出示例&quot;">​</a></h3><ul><li>Json 是默认的渲染格式</li></ul><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Controller</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">DemoController</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Mapping</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/test3/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">UseModel</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test3</span><span style="color:#89DDFF;">(@</span><span style="color:#C792EA;">Param</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">defaultValue</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">world</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">name</span><span style="color:#89DDFF;">){</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//接收请求name参数</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">//当返回是实体，默认会进行 json 序列化</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">UseModel</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> name</span><span style="color:#89DDFF;">);</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><ul><li>指定特殊的渲染格式</li></ul><p>由客户端通过 &quot;X-Serialization&quot; 头信息指定，一般是在RPC场景下使用</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">HttpUtils</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">http</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://localhpst:8080/user/getUser</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">param</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">userId</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">header</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">X-Serialization</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@protobuf</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">post</span><span style="color:#89DDFF;">();</span></span></code></pre></div>`,9),p=[l];function e(r,c,D,i,F,d){return a(),n("div",null,p)}const A=s(o,[["render",e]]);export{C as __pageData,A as default};
