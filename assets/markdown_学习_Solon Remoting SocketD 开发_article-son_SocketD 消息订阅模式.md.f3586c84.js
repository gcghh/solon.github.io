import{_ as s,v as n,b as a,R as l}from"./chunks/framework.caa0fbaf.js";const i=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/学习/Solon Remoting SocketD 开发/article-son/SocketD 消息订阅模式.md","filePath":"markdown/学习/Solon Remoting SocketD 开发/article-son/SocketD 消息订阅模式.md"}'),p={name:"markdown/学习/Solon Remoting SocketD 开发/article-son/SocketD 消息订阅模式.md"},o=l(`<p><strong>本案以简单的消息订阅模式为例演示：（即等着你给我来信，例如配置服务的变更通知）</strong></p><h3 id="_1、服务端" tabindex="-1">1、服务端 <a class="header-anchor" href="#_1、服务端" aria-label="Permalink to &quot;1、服务端&quot;">​</a></h3><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//启动服务端</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ServerApp</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">String</span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">args</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">//启动Solon容器（SocketD bean&amp;plugin 由solon容器管理）</span></span>
<span class="line"><span style="color:#A6ACCD;">        Solon</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">start</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ServerApp</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">class</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> args</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> app </span><span style="color:#C792EA;">-&gt;</span><span style="color:#A6ACCD;"> app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">enableSocketD</span><span style="color:#89DDFF;">(true));</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//定义一个给所有会话广播的工具</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">SessionUtil</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">broadcast</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">Message</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">message</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">Session</span><span style="color:#A6ACCD;"> session </span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#A6ACCD;"> SessionManager</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">socket</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">getOpenSessions</span><span style="color:#89DDFF;">()){</span></span>
<span class="line"><span style="color:#A6ACCD;">            session</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">send</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">message</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">broadcast</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">message</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">Session</span><span style="color:#A6ACCD;"> session </span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#A6ACCD;"> SessionManager</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">socket</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">getOpenSessions</span><span style="color:#89DDFF;">()){</span></span>
<span class="line"><span style="color:#A6ACCD;">            session</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">send</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">message</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//在需要的地方，进行广播（例如：配置服务的更新通知）</span></span>
<span class="line"><span style="color:#A6ACCD;">SessionUtil</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">broadcast</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello client!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span></code></pre></div><h3 id="_2、客户端" tabindex="-1">2、客户端 <a class="header-anchor" href="#_2、客户端" aria-label="Permalink to &quot;2、客户端&quot;">​</a></h3><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//启动客户端</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ClientApp</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">String</span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">args</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">throws</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Throwable</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">//启动Solon容器（SocketD bean&amp;plugin 由solon容器管理）</span></span>
<span class="line"><span style="color:#A6ACCD;">        Solon</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">start</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ClientApp</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">class</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> args</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">ClientEndpoint</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">uri</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">tcp://localhost:28080</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ClientListener</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">implements</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Listener</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Override</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">onMessage</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">Session</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">session</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Message</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">message</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">//收到消息，业务处理</span></span>
<span class="line"><span style="color:#A6ACCD;">        System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">客户端：我收到了：</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> message</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,5),e=[o];function t(c,r,D,y,A,C){return n(),a("div",null,e)}const E=s(p,[["render",t]]);export{i as __pageData,E as default};
