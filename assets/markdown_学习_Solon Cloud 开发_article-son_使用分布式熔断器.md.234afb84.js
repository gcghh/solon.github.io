import{_ as s,v as a,b as n,R as l}from"./chunks/framework.caa0fbaf.js";const i=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/学习/Solon Cloud 开发/article-son/使用分布式熔断器.md","filePath":"markdown/学习/Solon Cloud 开发/article-son/使用分布式熔断器.md"}'),o={name:"markdown/学习/Solon Cloud 开发/article-son/使用分布式熔断器.md"},p=l(`<p><a href="/article/family-solon-cloud-breaker">生态 / Solon Cloud Breaker [传送]</a></p><h3 id="_1、情况简介" tabindex="-1">1、情况简介 <a class="header-anchor" href="#_1、情况简介" aria-label="Permalink to &quot;1、情况简介&quot;">​</a></h3><p>使用分布式熔断器进行限流控制（目前适配有：sentinel, guava, semaphore 三个插件）</p><h3 id="_2、添加配置-此配置可通过配置服务-动态更新" tabindex="-1">2、添加配置（此配置可通过配置服务，动态更新） <a class="header-anchor" href="#_2、添加配置-此配置可通过配置服务-动态更新" aria-label="Permalink to &quot;2、添加配置（此配置可通过配置服务，动态更新）&quot;">​</a></h3><div class="language-yml"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">solon.cloud.local</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">breaker</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">root</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#默认100 (Qps100 或 信号量为100；视插件而定)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">main</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">150</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#此配置可以放到配置中心，例：</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#solon.cloud.water:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#    server: &quot;waterapi:9371&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#    config.load: &quot;breaker.yml&quot;</span></span></code></pre></div><h3 id="_3、通过注解-添加埋点" tabindex="-1">3、通过注解，添加埋点 <a class="header-anchor" href="#_3、通过注解-添加埋点" aria-label="Permalink to &quot;3、通过注解，添加埋点&quot;">​</a></h3><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//此处的注解埋点，名称与配置的断路器名称须一一对应</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">CloudBreaker</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//没有专门的阀值配置，默认使用 root 的值</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Controller</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">BreakerController</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Mapping</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/breaker</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">breaker</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="_4、手动模式埋点" tabindex="-1">4、手动模式埋点 <a class="header-anchor" href="#_4、手动模式埋点" aria-label="Permalink to &quot;4、手动模式埋点&quot;">​</a></h3><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">BreakerFilter</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">implements</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Filter</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Override</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">doFilter</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">Context</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">ctx</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">FilterChain</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">chain</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">throws</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Throwable</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">CloudClient</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">breaker</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            chain</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">doFilter</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">//此处的埋点，名称与配置的断路器名称须一一对应</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;font-style:italic;">try</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">AutoCloseable</span><span style="color:#A6ACCD;"> entry </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> CloudClient</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">breaker</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">entry</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">main</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                chain</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">doFilter</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">catch</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">BreakerException</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">ex</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;font-style:italic;">throw</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">IllegalStateException</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Request capacity exceeds limit</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p><strong>代码演示：</strong></p><p><a href="https://gitee.com/noear/solon-examples/tree/main/9.Solon-Cloud" target="_blank" rel="noreferrer">https://gitee.com/noear/solon-examples/tree/main/9.Solon-Cloud</a></p>`,11),e=[p];function t(c,r,y,D,C,F){return a(),n("div",null,e)}const d=s(o,[["render",t]]);export{i as __pageData,d as default};
