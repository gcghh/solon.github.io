import{_ as s,v as n,b as a,R as l}from"./chunks/framework.caa0fbaf.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/生态/Solon Web/article-son/solonsessionstateredisson.md","filePath":"markdown/生态/Solon Web/article-son/solonsessionstateredisson.md"}'),o={name:"markdown/生态/Solon Web/article-son/solonsessionstateredisson.md"},p=l(`<div class="language-xml"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dependency</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">org.noear</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">solon.sessionstate.redisson</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dependency</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h4 id="_1、描述" tabindex="-1">1、描述 <a class="header-anchor" href="#_1、描述" aria-label="Permalink to &quot;1、描述&quot;">​</a></h4><p>基础扩展插件，为 Solon Web 提供分布式会话状态支持。例如：管理后台要做集群，此时会话需要共享（插件：solon.sessionstate.jwt，也适合这种场景）。</p><h4 id="_2、配置参考" tabindex="-1">2、配置参考 <a class="header-anchor" href="#_2、配置参考" aria-label="Permalink to &quot;2、配置参考&quot;">​</a></h4><div class="language-yml"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">#超时配置。单位秒（可不配，默认：7200）</span></span>
<span class="line"><span style="color:#F07178;">server.session.timeout</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7200</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#可共享域配置（可不配，默认当前服务域名；多系统共享时要配置）</span></span>
<span class="line"><span style="color:#F07178;">server.session.state.domain</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">solon.noear.org</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#redis 连接地址</span></span>
<span class="line"><span style="color:#F07178;">server.session.state.redis.server</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">redis.io:6379</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#redis 连接密码</span></span>
<span class="line"><span style="color:#F07178;">server.session.state.redis.password</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1234</span></span>
<span class="line"><span style="color:#F07178;">server.session.state.redis.db</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">31</span></span></code></pre></div><h4 id="_3、代码应用" tabindex="-1">3、代码应用 <a class="header-anchor" href="#_3、代码应用" aria-label="Permalink to &quot;3、代码应用&quot;">​</a></h4><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Controller</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">DemoController</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Mapping</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/test</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">Context</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">ctx</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">//获取会话</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">long</span><span style="color:#A6ACCD;"> user_id </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> ctx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sessionAsLong</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">user_id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0L</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#A6ACCD;">        ctx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sessionSet</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">user_id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1001L</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//更多接口，可参考 SessionState 定义</span></span></code></pre></div>`,7),e=[p];function t(c,r,y,i,D,F){return n(),a("div",null,e)}const d=s(o,[["render",t]]);export{A as __pageData,d as default};
