import{_ as t,v as s,b as a,R as n}from"./chunks/framework.caa0fbaf.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/生态/Solon Test/article-son/solon-test-junit4.md","filePath":"markdown/生态/Solon Test/article-son/solon-test-junit4.md"}'),o={name:"markdown/生态/Solon Test/article-son/solon-test-junit4.md"},l=n(`<div class="language-xml"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dependency</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">org.noear</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">solon-test-junit4</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">scope</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">test</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">scope</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dependency</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h3 id="_1、描述" tabindex="-1">1、描述 <a class="header-anchor" href="#_1、描述" aria-label="Permalink to &quot;1、描述&quot;">​</a></h3><p>solon-test-junit4 是 Solon 的单元测试扩展插件。是基于 junit4 的适配，提供solon注入、http接口测试便利机制等等</p><p>主要扩展有：</p><table><thead><tr><th>扩展</th><th>说明</th></tr></thead><tbody><tr><td>SolonJUnit4ClassRunner 类</td><td>为 junit4 提供 Solon 的注入支持的运行类</td></tr><tr><td></td><td></td></tr><tr><td>HttpTester 类</td><td>用于 Http 测试的基类</td></tr><tr><td>@SolonTest 注解</td><td>用于指定 Solon 的启动主类。无此注解时，则以当前类为启动主类</td></tr><tr><td>@TestRollback 注解</td><td>用户测试时事务回滚用</td></tr><tr><td>@TestPropertySource 注解</td><td>用于指定测试所需的配置文件</td></tr></tbody></table><h3 id="_2、使用示例" tabindex="-1">2、使用示例 <a class="header-anchor" href="#_2、使用示例" aria-label="Permalink to &quot;2、使用示例&quot;">​</a></h3><ul><li><a href="/article/322.html">学习 / Solon Test 开发 / for JUnit4</a></li></ul>`,7),e=[l];function p(r,c,d,i,F,D){return s(),a("div",null,e)}const u=t(o,[["render",p]]);export{h as __pageData,u as default};
