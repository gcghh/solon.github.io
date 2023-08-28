import{_ as s,v as a,b as n,R as l}from"./chunks/framework.caa0fbaf.js";const i=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/学习/Solon 开发之准备/article-son/二、本地事件总线.md","filePath":"markdown/学习/Solon 开发之准备/article-son/二、本地事件总线.md"}'),p={name:"markdown/学习/Solon 开发之准备/article-son/二、本地事件总线.md"},o=l(`<p>有应用生命周期，便会有基于时机点的扩展。有时机点便有事件，有事件便要有事件总线。应用在各个时机点上，通过事件总线进行事件分发，由订阅者进行扩展。</p><p>Solon 内核，自带了一个基于强类型的本地事件总线：</p><ul><li>强类型事件</li><li>基于发布/订阅模型</li><li>可传导异常，进而支持事务回滚</li></ul><p>目前事件总线的主要使用场景：</p><h3 id="_1、应用生命周期的分发" tabindex="-1">1、应用生命周期的分发 <a class="header-anchor" href="#_1、应用生命周期的分发" aria-label="Permalink to &quot;1、应用生命周期的分发&quot;">​</a></h3><p>这也是事件总线最初的使用场景。说是分发，其实使用时主要是订阅：</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">EventBus</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">subscribe</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">AppLoadEndEvent</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">class</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> event</span><span style="color:#C792EA;">-&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">   log</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">info</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">应用启动完成了</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">});</span></span></code></pre></div><h3 id="_2、全局未处理异常的分发" tabindex="-1">2、全局未处理异常的分发 <a class="header-anchor" href="#_2、全局未处理异常的分发" aria-label="Permalink to &quot;2、全局未处理异常的分发&quot;">​</a></h3><p>总会有些异常不方便上抛。比如，定时任务的调度器，调度异常时：要么记日志，要么借事件总线分发异常，由订阅者处理。此场景不可乱用，仅作全局“不好处理”的异常的分发。</p><h3 id="_3、用户层面的应用-自定义事件" tabindex="-1">3、用户层面的应用（自定义事件） <a class="header-anchor" href="#_3、用户层面的应用-自定义事件" aria-label="Permalink to &quot;3、用户层面的应用（自定义事件）&quot;">​</a></h3><h4 id="_1-定义强类型的事件模型-约束性强" tabindex="-1">1）定义强类型的事件模型（约束性强） <a class="header-anchor" href="#_1-定义强类型的事件模型-约束性强" aria-label="Permalink to &quot;1）定义强类型的事件模型（约束性强）&quot;">​</a></h4><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Getter</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">HelloEvent</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> name</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">HelloEvent</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">name</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> name</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h4 id="_2-订阅或监听事件" tabindex="-1">2）订阅或监听事件 <a class="header-anchor" href="#_2-订阅或监听事件" aria-label="Permalink to &quot;2）订阅或监听事件&quot;">​</a></h4><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//注解模式</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Component</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">HelloEventListener</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">implements</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">EventListener</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">HelloEvent</span><span style="color:#89DDFF;">&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Override</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">onEvent</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">HelloEvent</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">event</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">throws</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Throwable</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getName</span><span style="color:#89DDFF;">());</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//手动模式</span></span>
<span class="line"><span style="color:#A6ACCD;">EventBus</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">subscribe</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">HelloEvent</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">class</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> event</span><span style="color:#C792EA;">-&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getName</span><span style="color:#89DDFF;">());</span></span>
<span class="line"><span style="color:#89DDFF;">});</span></span></code></pre></div><p>支持继承关系，比如通过超类订阅全局的异常：</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">EventBus</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">subscribe</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Throwable</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">class</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> event</span><span style="color:#C792EA;">-&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">   event</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">printStackTrace</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#89DDFF;">});</span></span></code></pre></div><h4 id="_3-发布事件" tabindex="-1">3）发布事件 <a class="header-anchor" href="#_3-发布事件" aria-label="Permalink to &quot;3）发布事件&quot;">​</a></h4><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">ProxyComponent</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">DemoService</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">hello</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">name</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">//同步发布事件</span></span>
<span class="line"><span style="color:#A6ACCD;">        EventBus</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">HelloEvent</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">//异步发布事件（一般不推荐）//不能传导异常（不能做事务传播）</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">//EventBus.pushAsync(new HelloEvent(name));</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,18),e=[o];function t(c,r,y,D,A,F){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{i as __pageData,d as default};
