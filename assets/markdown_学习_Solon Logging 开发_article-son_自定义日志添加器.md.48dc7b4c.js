import{_ as s,v as n,b as a,R as l}from"./chunks/framework.caa0fbaf.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/学习/Solon Logging 开发/article-son/自定义日志添加器.md","filePath":"markdown/学习/Solon Logging 开发/article-son/自定义日志添加器.md"}'),p={name:"markdown/学习/Solon Logging 开发/article-son/自定义日志添加器.md"},o=l(`<p>本案需要引入已适配的 slf4j 日志框架（<code>solon.logging.simple </code>或 <code>logback-solon-plugin</code> 或 <code>log4j-solon-plugin</code>）。</p><h3 id="_1、自定义添加器入门" tabindex="-1">1、自定义添加器入门 <a class="header-anchor" href="#_1、自定义添加器入门" aria-label="Permalink to &quot;1、自定义添加器入门&quot;">​</a></h3><ul><li>实现自定义添加器</li></ul><p>实现一个简单的日志添加器，并把将日志以json格式打印出来：</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">org</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">noear</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">solon</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">logging</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">event</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">AppenderBase</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//添加器实现类</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">JsonAppender</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">AppenderBase</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Override</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">LogEvent</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">logEvent</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[Json] </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> ONode</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stringfiy</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">logEvent</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><ul><li>增加配置</li></ul><p>增加一个自定义的添加器（名字：json；等级：INFO；类名：demo.log.JsonAppender ）</p><div class="language-yml"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">solon.logging.appender</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">json</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">level</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INFO</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">class</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">demo.log.JsonAppender</span></span></code></pre></div><h3 id="_2、高阶自定义添加器-将日志流转批并持久化" tabindex="-1">2、高阶自定义添加器，将日志流转批并持久化 <a class="header-anchor" href="#_2、高阶自定义添加器-将日志流转批并持久化" aria-label="Permalink to &quot;2、高阶自定义添加器，将日志流转批并持久化&quot;">​</a></h3><ul><li>实现用于持久化的添加器</li></ul><p>框架提供了高性能的流转批的添加器 “PersistentAppenderBase”，扩展一下实现持久化处理即可：</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//持久化添加器（实现了流转批的效果）//提供高性能支持</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">PersistentAppender</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">PersistentAppenderBase</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">LogService</span><span style="color:#A6ACCD;"> logService;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    public </span><span style="color:#FFCB6B;">PersistentAppender</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">//从容器里，手动获取日志服务</span></span>
<span class="line"><span style="color:#A6ACCD;">        Solon.</span><span style="color:#82AAFF;">context</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;">.</span><span style="color:#82AAFF;">getBeanAsync</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">LogService</span><span style="color:#A6ACCD;">.</span><span style="color:#A6ACCD;font-style:italic;">class</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">bean</span><span style="color:#A6ACCD;">-&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            logService </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> bean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">});</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Override</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">onEvents</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">List</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">LogEvent</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> list</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">//批量插到数据库去（或者批量提交到远程接口）</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">logService </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null){</span></span>
<span class="line"><span style="color:#A6ACCD;">            logService</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">insertList</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">list</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><ul><li>添加配置</li></ul><div class="language-yml"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">solon.logging.appender</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">persistent</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">level</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">TRACE</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">class</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">demo2010.dso.PersistentAppender</span></span></code></pre></div><ul><li>具体代码，参考这个示例：</li></ul><p><a href="https://gitee.com/noear/solon-examples/tree/main/2.Solon_Advanced/demo2010-logging_batch" target="_blank" rel="noreferrer">https://gitee.com/noear/solon-examples/tree/main/2.Solon_Advanced/demo2010-logging_batch</a></p>`,16),e=[o];function t(c,r,y,D,A,C){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{F as __pageData,d as default};
