import{_ as s,v as a,b as n,R as l}from"./chunks/framework.caa0fbaf.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/学习/Solon 开发之插件/article-son/六、插件开发时的注入依赖链.md","filePath":"markdown/学习/Solon 开发之插件/article-son/六、插件开发时的注入依赖链.md"}'),p={name:"markdown/学习/Solon 开发之插件/article-son/六、插件开发时的注入依赖链.md"},e=l(`<p>在某些插件开发时，可能会涉及到比较复杂的 Bean 的依赖关系。</p><h3 id="_1、补几个知识点" tabindex="-1">1、补几个知识点 <a class="header-anchor" href="#_1、补几个知识点" aria-label="Permalink to &quot;1、补几个知识点&quot;">​</a></h3><table><thead><tr><th>注入</th><th>真实的触发时机</th><th>备注</th></tr></thead><tbody><tr><td><code>List&lt;Bean&gt;</code> beans [不支持注入]</td><td>是在所有 bean 扫描全完成后</td><td>此时，才算把 beans 都收集完</td></tr><tr><td><code>Map&lt;String,Bean&gt;</code> beans [不支持注入]</td><td>是在所有 bean 扫描全完成后</td><td>此时，才算把 beans 都收集完</td></tr><tr><td><code>@Inject(required = false) Bean</code> bean</td><td>是在所有 bean 扫描全完成后</td><td>此时，才能确定真的有没有</td></tr><tr><td><code>@Condition(onMissingBean=Bean.class)</code></td><td>是在所有 bean 扫描全完成后</td><td>此时，才能确定真的有没有</td></tr></tbody></table><p>想要获取 Bean 集合？</p><p><strong>订阅获取：（目标产生一个，实时获取一下）</strong></p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//订阅与异步的区别：订阅获取一批，异步只获取一个</span></span>
<span class="line"><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">subBeansOfType</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">DataSource</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">class</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> bean</span><span style="color:#C792EA;">-&gt;</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">});</span></span>
<span class="line"><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">subWarpsOfType</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">DataSource</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">class</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> wrap</span><span style="color:#C792EA;">-&gt;</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">});</span></span></code></pre></div><p><strong>批量获取：（通过容器的生命周期事件）</strong></p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//如果要做集合注入，行为就会补安排到容器的 lifecycle 事件</span></span>
<span class="line"><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">lifecycle</span><span style="color:#89DDFF;">((</span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    ctx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getBeansOfType</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">DataSource</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">class</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    ctx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getWrapsOfType</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">DataSource</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">class</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">});</span></span></code></pre></div><h3 id="_2、solon-容器的运行特点" tabindex="-1">2、Solon 容器的运行特点 <a class="header-anchor" href="#_2、solon-容器的运行特点" aria-label="Permalink to &quot;2、Solon 容器的运行特点&quot;">​</a></h3><ul><li>(3) 扫描注入时，目标有即同步注入，没有时则订阅注入</li></ul><h3 id="_3、要建立异步的注入依赖链" tabindex="-1">3、要建立异步的注入依赖链 <a class="header-anchor" href="#_3、要建立异步的注入依赖链" aria-label="Permalink to &quot;3、要建立异步的注入依赖链&quot;">​</a></h3><p>Bean 的注入，有时候会是很复杂的交差关系图。“异步依赖链” 便是这图中的线。开发插件时，经常会出现：</p><ul><li>他有，你才有</li><li>你有，她才有</li><li>她有，我才有</li></ul><p>需要建立 “异步依赖链”，来形成这个关系图：</p><ul><li>我需要你，则订阅你（即异步获取，有则立即回调，无则订阅回调）</li><li>你需要他，则订阅他</li></ul><p>下面，演示个简单 “异步依赖链”（只多了一级）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">public class XPluginImpl implements Plugin {</span></span>
<span class="line"><span style="color:#A6ACCD;">    @Override</span></span>
<span class="line"><span style="color:#A6ACCD;">    public void start(AopContext context) {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        //订阅 ds bean</span></span>
<span class="line"><span style="color:#A6ACCD;">        context.subWrapsOfType(DataSource.class, bw -&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            //如果来了，则登记到管理器</span></span>
<span class="line"><span style="color:#A6ACCD;">            MybatisManager.regIfAbsent(bw);</span></span>
<span class="line"><span style="color:#A6ACCD;">        });</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        //注入 bean of ds（我需要被注入）</span></span>
<span class="line"><span style="color:#A6ACCD;">        context.beanInjectorAdd(Db.class, (varH, anno) -&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            //请求注入来了。但是 ds 不一定已存存在的</span></span>
<span class="line"><span style="color:#A6ACCD;">            injectorAddDo(varH, anno.value());</span></span>
<span class="line"><span style="color:#A6ACCD;">        });</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    //注入请求处理</span></span>
<span class="line"><span style="color:#A6ACCD;">    private void injectorAddDo(VarHolder varH, String dsName){</span></span>
<span class="line"><span style="color:#A6ACCD;">        //这里要用异步获取（你需要有他）//他有，你有，我才有</span></span>
<span class="line"><span style="color:#A6ACCD;">        varH.context().getWrapAsync(dsName, (dsBw) -&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (dsBw.raw() instanceof DataSource) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                //确保有登记过</span></span>
<span class="line"><span style="color:#A6ACCD;">                MybatisManager.regIfAbsent(bw);</span></span>
<span class="line"><span style="color:#A6ACCD;">                inject0(varH, dsBw);</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        });</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    //执行注入</span></span>
<span class="line"><span style="color:#A6ACCD;">    private void inject0(VarHolder varH, BeanWrap dsBw){</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (varH.getType().isInterface()) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            Object mapper = MybatisManager.get(dsBw).getMapper(varH.getType());</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            varH.setValue(mapper);</span></span>
<span class="line"><span style="color:#A6ACCD;">            return;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#A6ACCD;">        ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>希望对插件开发的同学，有开拓思路上的参考。</p><h3 id="_4、-编程模型" tabindex="-1">4、“编程模型” <a class="header-anchor" href="#_4、-编程模型" aria-label="Permalink to &quot;4、“编程模型”&quot;">​</a></h3><p>相对来讲，solon 的插件 spi 是一种“编程模型”，原则上它是提倡“手动”编码的。“支持“注解”与“手动”两种模式并重” 也是solon的重要特性之一。</p>`,20),o=[e];function t(c,r,i,A,C,D){return a(),n("div",null,o)}const F=s(p,[["render",t]]);export{d as __pageData,F as default};
