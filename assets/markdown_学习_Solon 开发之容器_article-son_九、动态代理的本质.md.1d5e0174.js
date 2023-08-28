import{_ as s,v as n,b as a,R as l}from"./chunks/framework.caa0fbaf.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/学习/Solon 开发之容器/article-son/九、动态代理的本质.md","filePath":"markdown/学习/Solon 开发之容器/article-son/九、动态代理的本质.md"}'),p={name:"markdown/学习/Solon 开发之容器/article-son/九、动态代理的本质.md"},o=l(`<p>在 Java 里动态代理，主要分：接口动态代理 和 类动态代理。因为它的代理类都是动态创建的，所以名字里会带上“动态”。</p><p>官网的有些地方叫“代理”，也有些地方叫“动态代理”。都是一个意思。</p><h3 id="_1、接口动态代理" tabindex="-1">1、接口动态代理 <a class="header-anchor" href="#_1、接口动态代理" aria-label="Permalink to &quot;1、接口动态代理&quot;">​</a></h3><p>这是 jdk 直接支持的能力。内在的原理是：框架会动态生成目标接口的一个代理类（即接口的实现类）并返回，使用者在调用接口的函数时，实际上调用的是这个代理类的函数，而代理类又把数据转给了调用处理器接口。</p><p>而整个过程的感受是调用目标接口，最终到了 InvocationHandler 的实现类上：</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//1. 定义目标接口</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">UserService</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">addUser</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">userId</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">userName</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//=&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//2. 通过JDK接口，获得一个代理实例</span></span>
<span class="line"><span style="color:#C792EA;">UserService</span><span style="color:#A6ACCD;"> userService </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Proxy</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getProxy</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">UserService</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">class</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">InvocationHandlerImpl</span><span style="color:#89DDFF;">());</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//生成的 UserService 代理类，差不多是这个样子：</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">UserService$Proxy</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">implements</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">UserService</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">final</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">InvocationHandler</span><span style="color:#A6ACCD;"> handler</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">final</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Method</span><span style="color:#A6ACCD;"> addUser2</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//示意一下，别太计较它哪来的</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> UserService$</span><span style="color:#82AAFF;">Proxy</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">InvocationHandler</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">handler</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">handler </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> handler</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Override</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">addUser</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">userId</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">userName</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">        handler</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">invoke</span><span style="color:#89DDFF;">(this,</span><span style="color:#A6ACCD;"> addUser2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Object</span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;">(userId</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> userName</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//在调用 userService 时，本质是调用 UserService$Proxy 的函数，最终又是转发到 InvocationHandler 的实现类上。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//=&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//3. 实现调用处理器接口</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">InvocationHandlerImpl</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">implements</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">InvocationHandler</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Object</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">invoke</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">Object</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">proxy</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Method</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">method</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Object</span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">args</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">throws</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Throwable</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">//...</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p><mark>一般，接口动态代理是为了：转发处理。</mark></p><h3 id="_2、类动态代理" tabindex="-1">2、类动态代理 <a class="header-anchor" href="#_2、类动态代理" aria-label="Permalink to &quot;2、类动态代理&quot;">​</a></h3><p>类的动态代理，略麻烦些，一般是要借助字符码工具框架（Solon 用的是 ASM）。内在的原理倒是相差不大：框架会动态生成目标类的一个代理类（一个重写了所有函数的子类）并返回，使用者在调用目标类的函数时，实际上调用的是这个代理类的函数，而代理类又把数据转给了调用处理器接口。调用处理器在处理时，会附加上别的处理。</p><p>而整个过程的感受是调用目标类，可以附加上很多拦截处理：</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//1. 定义目标类</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">UserService</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">addUser</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">userId</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">userName</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">//..</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//=&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//2. 通过框架接口，获得一个代理实例（::注意这里的区别！） </span></span>
<span class="line"><span style="color:#C792EA;">UserService</span><span style="color:#A6ACCD;"> userService </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">UserService</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">userService </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> AsmProxy</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getProxy</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">UserService</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">class</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">AsmInvocationHandlerImpl</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">userService</span><span style="color:#89DDFF;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//生成的 UserService 代理类，差不多是这个样子：</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">UserService$AsmProxy</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">UserService</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">final</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">AsmInvocationHandler</span><span style="color:#A6ACCD;"> handler</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">final</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Method</span><span style="color:#A6ACCD;"> addUser2</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//示意一下，别太计较它哪来的</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> UserService$</span><span style="color:#82AAFF;">Proxy</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">AsmInvocationHandler</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">handler</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">handler </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> handler</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Override</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">addUser</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">userId</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">userName</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">        handler</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">invoke</span><span style="color:#89DDFF;">(this,</span><span style="color:#A6ACCD;"> addUser2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Object</span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;">(userId</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> userName</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//本质还是调用 UserService$AsmProxy 的函数，最终也是转发到 InvocationHandler 的实现类上。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//=&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//3. 实现调用处理器接口</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">AsmInvocationHandlerImpl</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">implements</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">InvocationHandler</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//::注意这里的区别</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">final</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Object</span><span style="color:#A6ACCD;"> target</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">AsmInvocationHandlerImpl</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">Object</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">target</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">target </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> target</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Object</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">invoke</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">Object</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">proxy</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Method</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">method</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Object</span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">args</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">throws</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Throwable</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">//::注意这里的区别</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">MethodWrap</span><span style="color:#A6ACCD;"> methodWrap </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> MethodWrap</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">method</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">//MethodWrap 内部对各种拦截器做了封装处理</span></span>
<span class="line"><span style="color:#A6ACCD;">        methodWrap</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">invoke</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">target</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> args</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p><mark>一般，类动态代理是为了：拦截并附加处理。</mark></p><h3 id="_3、关于-solon-的类代理情况与-函数环绕拦截" tabindex="-1">3、关于 Solon 的类代理情况与“函数环绕拦截” <a class="header-anchor" href="#_3、关于-solon-的类代理情况与-函数环绕拦截" aria-label="Permalink to &quot;3、关于 Solon 的类代理情况与“函数环绕拦截”&quot;">​</a></h3><p>对 Solon 来讲，只要一个函数反射后再经 MethodWrap 执行的，就是被代理了。所有的“函数环绕拦截”处理就封装在 MethodWrap 里面。</p><ul><li>@Controller、@Remoting 注解的类</li></ul><p>这两个注解类，没有 ASM 的类代码，但是它们的 Method 会转为 MethodWrap ，并包装成 Action 注册到路由器。即它们是经 MethodWrap 再调用的。所以它们有代理能力，支持“函数环绕拦截”。</p><ul><li>@ProxyComponent 注解的类</li></ul><p>它注解的类，都会被动态代理。跟上面原理分析的一样，也支持“函数环绕拦截”。</p><ul><li>有克制的拦截</li></ul><p>Solon 不支持表达式的随意拦截，必须以注解为“切点”进行显示拦截。<mark>所以 Solon 不用为所有的 Bean 增加代理能力，按需添加即可</mark>。</p>`,20),e=[o];function t(c,r,y,A,C,D){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{F as __pageData,d as default};
