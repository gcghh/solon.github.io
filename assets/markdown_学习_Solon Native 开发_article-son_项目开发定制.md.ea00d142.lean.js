import{_ as s,v as a,b as n,R as l}from"./chunks/framework.caa0fbaf.js";const i=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/学习/Solon Native 开发/article-son/项目开发定制.md","filePath":"markdown/学习/Solon Native 开发/article-son/项目开发定制.md"}'),o={name:"markdown/学习/Solon Native 开发/article-son/项目开发定制.md"},p=l(`<p>关于第三方框架的情况：</p><ul><li>A：完全不支持（比如内部有动态编译或字节码类）</li><li>B：支持，但是需要自己实验后加很多配置 <ul><li>&quot;mysql-connector-java:5.x&quot; 属于这种情况</li></ul></li><li>C：支持，只需要自己再补点配置 <ul><li>&quot;mysql-connector-java:8.x&quot; 属于这种情况</li></ul></li><li>D：完全支持（一般自己带了 native-image 元信息配置的）</li></ul><h3 id="_1、项目定制" tabindex="-1">1、项目定制 <a class="header-anchor" href="#_1、项目定制" aria-label="Permalink to &quot;1、项目定制&quot;">​</a></h3><p>项目定制，一般是处理 &quot;B&quot; 和 &quot;C&quot; 两种情况，以及自己项目中一些特殊的使用。基本原则就是：</p><ul><li>所有反射，需要申明登记</li><li>所有资源，需要申明登记</li></ul><p>这里讲的项目定制，全是基于 <a href="/article/499.html">solon.aot</a> 提供的 &quot;RuntimeNativeRegistrar&quot; 接口完成上面两件事情。</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">RuntimeNativeRegistrar</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">register</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">AopContext</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">context</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">RuntimeNativeMetadata</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">metadata</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="_2、定制示例-demo4013-wood-native" tabindex="-1">2、定制示例 <a href="https://gitee.com/noear/solon-examples/tree/main/4.Solon-Data/demo4013-wood_native" target="_blank" rel="noreferrer">demo4013-wood_native</a> ： <a class="header-anchor" href="#_2、定制示例-demo4013-wood-native" aria-label="Permalink to &quot;2、定制示例 [demo4013-wood_native](https://gitee.com/noear/solon-examples/tree/main/4.Solon-Data/demo4013-wood_native) ：&quot;">​</a></h3><p>这个示例，只需要增加 &quot;mysql-connector-java:8.x&quot; 的资源登记：</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Component</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">RuntimeNativeRegistrarImpl</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">implements</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">RuntimeNativeRegistrar</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Override</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">register</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">AopContext</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">context</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">RuntimeNativeMetadata</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">metadata</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        metadata</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">registerResourceInclude</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">com.mysql.jdbc.LocalizedErrorMessages.properties</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="_3、定制示例-nginxwebui" tabindex="-1">3、定制示例 <a href="https://gitee.com/noear_admin/nginxWebUI/tree/solon-native/" target="_blank" rel="noreferrer">nginxWebUI</a>： <a class="header-anchor" href="#_3、定制示例-nginxwebui" aria-label="Permalink to &quot;3、定制示例 [nginxWebUI](https://gitee.com/noear_admin/nginxWebUI/tree/solon-native/)：&quot;">​</a></h3><p>这个示例就复杂一些，是已有项目改造过来，大约花费了大半天：</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Component</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">RuntimeNativeRegistrarImpl</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">implements</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">RuntimeNativeRegistrar</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Override</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">register</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">AopContext</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">context</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">RuntimeNativeMetadata</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">metadata</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        metadata</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">registerResourceInclude</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">acme.zip</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        metadata</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">registerResourceInclude</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">banner.txt</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        metadata</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">registerResourceInclude</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mime.types</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        metadata</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">registerResourceInclude</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">nginx.conf</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        metadata</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">registerResourceInclude</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">messages_en_US.properties</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        metadata</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">registerResourceInclude</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">messages.properties</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        metadata</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">registerSerialization</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">JSONConverter</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">class</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        metadata</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">registerSerialization</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">AsycPack</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">class</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        metadata</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">registerSerialization</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">JsonResult</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">class</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        metadata</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">registerSerialization</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Server</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">class</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getPackage</span><span style="color:#89DDFF;">());</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        metadata</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">registerReflection</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ProviderFactory</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">class</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">  MemberCategory</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">INVOKE_DECLARED_METHODS</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        metadata</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">registerReflection</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">BufferedImage</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">class</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">  MemberCategory</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">INVOKE_DECLARED_CONSTRUCTORS</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                MemberCategory</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">INVOKE_DECLARED_METHODS</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        metadata</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">registerReflection</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">JSONConverter</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">class</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> MemberCategory</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">INVOKE_DECLARED_CONSTRUCTORS</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                MemberCategory</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">INVOKE_DECLARED_METHODS</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,13),e=[p];function t(r,c,D,y,F,A){return a(),n("div",null,e)}const d=s(o,[["render",t]]);export{i as __pageData,d as default};
