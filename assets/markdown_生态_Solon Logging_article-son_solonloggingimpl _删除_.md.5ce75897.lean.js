import{_ as s,v as a,b as n,R as l}from"./chunks/framework.caa0fbaf.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/生态/Solon Logging/article-son/solonloggingimpl [删除].md","filePath":"markdown/生态/Solon Logging/article-son/solonloggingimpl [删除].md"}'),o={name:"markdown/生态/Solon Logging/article-son/solonloggingimpl [删除].md"},p=l(`<div class="language-xml"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dependency</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">org.noear</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">solon.logging.impl</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dependency</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h4 id="_1、介绍" tabindex="-1">1、介绍 <a class="header-anchor" href="#_1、介绍" aria-label="Permalink to &quot;1、介绍&quot;">​</a></h4><p>日志扩展插件，提供了 slf4j 接口的适配能力。一般做为分布式日志服务的slf4j适配器，比如 <a href="/article/family-water-solon-plugin.html">water-solon-plugin</a>，就是借助此插件对接自己的分布式日志服务。（v1.11.4 后标为弃用；由 solon.logging.simple 接替）</p><h4 id="_2、配置示例" tabindex="-1">2、配置示例 <a class="header-anchor" href="#_2、配置示例" aria-label="Permalink to &quot;2、配置示例&quot;">​</a></h4><p>日志等级的优先顺序：appender &gt; logger &gt; root。具体配置示例：</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">solon.app</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">demoapp</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 以下为默认值，可以都不加(支持&quot;云端配置服务&quot;进行配置，支持写到&quot;云端日志服务&quot;)</span></span>
<span class="line"><span style="color:#F07178;">solon.logging.appender</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">console</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">level</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">TRACE</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">cloud</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">level</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INFO</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 记录器级别的配置示例</span></span>
<span class="line"><span style="color:#F07178;">solon.logging.logger</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">root</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#默认记录器配置</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">level</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">TRACE</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">com.zaxxer.hikari</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">level</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">WARN</span></span></code></pre></div><h4 id="_3、使用示例" tabindex="-1">3、使用示例 <a class="header-anchor" href="#_3、使用示例" aria-label="Permalink to &quot;3、使用示例&quot;">​</a></h4><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Slf4j</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Controller</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">DemoController</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Mapping</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/hello</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">hello</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        log</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">info</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello world!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h4 id="_4、转发内核的日志到-slf4j-如果有需要" tabindex="-1">4、转发内核的日志到 Slf4j（如果有需要） <a class="header-anchor" href="#_4、转发内核的日志到-slf4j-如果有需要" aria-label="Permalink to &quot;4、转发内核的日志到 Slf4j（如果有需要）&quot;">​</a></h4><p>比如，应用启动时的日志、一些插件注册的日志</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">App</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">String</span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">args</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">throws</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Exception</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        Solon</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">start</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">App</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">class</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> args</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> x </span><span style="color:#C792EA;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">//转发日志到 Slf4j 接口</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">//</span></span>
<span class="line"><span style="color:#A6ACCD;">            LogUtil</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">globalSet</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">LogUtilToSlf4j</span><span style="color:#89DDFF;">());</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">//v1.10.11 后支持</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">});</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,11),e=[p];function t(c,r,y,D,F,i){return a(),n("div",null,e)}const g=s(o,[["render",t]]);export{A as __pageData,g as default};
