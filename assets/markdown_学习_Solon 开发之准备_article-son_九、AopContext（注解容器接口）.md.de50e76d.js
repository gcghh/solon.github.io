import{_ as a,v as t,b as s,R as n}from"./chunks/framework.caa0fbaf.js";const D=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/学习/Solon 开发之准备/article-son/九、AopContext（注解容器接口）.md","filePath":"markdown/学习/Solon 开发之准备/article-son/九、AopContext（注解容器接口）.md"}'),e={name:"markdown/学习/Solon 开发之准备/article-son/九、AopContext（注解容器接口）.md"},l=n(`<p>AopContext 是 Solon 框架的核心组件，是 Ioc/Aop 特性实现载体；是热插拨特性的实现基础。</p><h3 id="_1、主要用途" tabindex="-1">1、主要用途 <a class="header-anchor" href="#_1、主要用途" aria-label="Permalink to &quot;1、主要用途&quot;">​</a></h3><ul><li>用于插件开发</li><li>提供手动操作容器提供便利</li></ul><h3 id="_2、三种获取方式" tabindex="-1">2、三种获取方式 <a class="header-anchor" href="#_2、三种获取方式" aria-label="Permalink to &quot;2、三种获取方式&quot;">​</a></h3><p>方式一：获取全局的（直接拿：Solon.context()）</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">DemoClass</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">UserService</span><span style="color:#A6ACCD;"> userService</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">demo</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        Solon</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">context</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">getBeanAsync</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">UserService</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">class</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> bean</span><span style="color:#C792EA;">-&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            userService </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> bean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">});</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>方式二：获取当前组件的（注入）</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Component</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">DemoComponent</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Inject</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">AopContext</span><span style="color:#A6ACCD;"> aopContext</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>方式三：获取当前插件的（生命周期开始处）</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">DemoPlugin</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">implements</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Plugin</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Override</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">start</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">AopContext</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">context</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">//...</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="_3、相关接口" tabindex="-1">3、相关接口 <a class="header-anchor" href="#_3、相关接口" aria-label="Permalink to &quot;3、相关接口&quot;">​</a></h3><table><thead><tr><th>接口</th><th>相关说明</th></tr></thead><tbody><tr><td>-beanBuilderAdd(anno, builder)</td><td>添加构建处理</td></tr><tr><td>-beanInjectorAdd(anno, injector)</td><td>添加注入处理</td></tr><tr><td>-beanExtractorAdd(anno, extractor)</td><td>添加提取处理</td></tr><tr><td>-beanAroundAdd(anno, interceptor, index)</td><td>添加环绕处理</td></tr><tr><td>-beanAroundGet(anno)</td><td>获取环绕处理</td></tr><tr><td></td><td></td></tr><tr><td>-beanScan(source)</td><td>扫描源下的所有 bean 及对应处理</td></tr><tr><td>-beanScan(basePackage)</td><td>扫描包下的所有 bean 及对应处理</td></tr><tr><td>-beanScan(classLoader, basePackage)</td><td>扫描包下的所有 bean 及对应处理</td></tr><tr><td>-beanMake(clz)-&gt;BeanWrap</td><td>制造 bean 及对应处理</td></tr><tr><td></td><td></td></tr><tr><td>-beanInject(bean)</td><td>为一个对象注入</td></tr><tr><td>-beanInject(varH, name)</td><td>尝试变量注入 字段或参数</td></tr><tr><td>-beanInject(varH, name, autoRefreshed)</td><td>尝试变量注入 字段或参数</td></tr><tr><td></td><td></td></tr><tr><td>-beanForeach(action:(name, wrap)-&gt;{})</td><td>遍历bean包装库</td></tr><tr><td>-beanForeach(action:(wrap)-&gt;{})</td><td>遍历bean包装库</td></tr><tr><td>-beanFind(action:(name, wrap)-&gt;bool)-&gt;List[BeanWrap]</td><td>查找bean包装库</td></tr><tr><td>-beanFind(action:(wrap)-&gt;bool)-&gt;List[BeanWrap]</td><td>查找bean包装库</td></tr><tr><td></td><td></td></tr><tr><td>-beanRegister(beanWrap, name, typed)</td><td>注册 beanWrap</td></tr><tr><td></td><td></td></tr><tr><td>-lifecycle(lifecycleBean)</td><td>添加生命周期bean（即获得容器的生命事件）</td></tr><tr><td>-lifecycle(index, lifecycleBean)</td><td>添加生命周期bean（即获得容器的生命事件）</td></tr><tr><td></td><td></td></tr><tr><td>-wrap(type, bean)-&gt;BeanWrap</td><td>包装 bean</td></tr><tr><td>-wrap(name, bean)-&gt;BeanWrap</td><td>包装 bean</td></tr><tr><td>-wrapAndPut(type)-&gt;BeanWrap</td><td>包装 bean 并推入容器</td></tr><tr><td>-wrapAndPut(type, bean)-&gt;BeanWrap</td><td>包装 bean 并推入容器</td></tr><tr><td></td><td></td></tr><tr><td>-putWrap(name, wrap)</td><td>存入到bean库</td></tr><tr><td>-putWrap(type, wrap)</td><td>存入到bean库</td></tr><tr><td>-hasWrap(nameOrType)</td><td>是否有bean包装</td></tr><tr><td>-getWrap(nameOrType)-&gt;BeanWrap</td><td>获取bean包装</td></tr><tr><td>-getWrapAsync(nameOrType, callback)</td><td>异步获取bean包装</td></tr><tr><td>-subWrapsOfType(baseType, callback)</td><td>订阅某类型的 Bean 包装</td></tr><tr><td></td><td></td></tr><tr><td>-getBean(name)-&gt;Object</td><td>获取 Bean</td></tr><tr><td>-getBean(type)-&gt;T</td><td>获取 Bean</td></tr><tr><td>-getBeansOfType(baseType)-&gt;List[T]</td><td>获取某类型的 Bean</td></tr><tr><td>-getBeanOrNew(type)</td><td>获取 Bean，或者新建</td></tr><tr><td>-getBeanAsync(name, callback)</td><td>异步获取 Bean</td></tr><tr><td>-getBeanAsync(type, callback)</td><td>异步获取 Bean</td></tr><tr><td>-subBeansOfType(baseType, callback)</td><td>订阅某类型的 Bean</td></tr></tbody></table><h3 id="_4、部分接口限制说明" tabindex="-1">4、部分接口限制说明 <a class="header-anchor" href="#_4、部分接口限制说明" aria-label="Permalink to &quot;4、部分接口限制说明&quot;">​</a></h3><ul><li>subBeansOfType、subWrapsOfType，</li></ul><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">仅对 </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Bean</span><span style="color:#A6ACCD;"> 或 </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Component</span><span style="color:#A6ACCD;"> 产生的 Bean 有效</span></span></code></pre></div><ul><li>beanExtractorAdd</li></ul><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">仅对 </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Component</span><span style="color:#A6ACCD;"> 产生的 Bean 有效</span></span></code></pre></div><ul><li>beanAroundAdd</li></ul><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">仅对 </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">ProxyComponent</span><span style="color:#A6ACCD;"> 产生的 Bean 有效，或者由 MethodWarp 代理的函数有效</span></span></code></pre></div>`,19),p=[l];function o(r,d,c,y,i,A){return t(),s("div",null,p)}const b=a(e,[["render",o]]);export{D as __pageData,b as default};
