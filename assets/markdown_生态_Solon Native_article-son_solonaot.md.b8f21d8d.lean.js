import{_ as s,v as a,b as n,R as o}from"./chunks/framework.caa0fbaf.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/生态/Solon Native/article-son/solonaot.md","filePath":"markdown/生态/Solon Native/article-son/solonaot.md"}'),t={name:"markdown/生态/Solon Native/article-son/solonaot.md"},e=o(`<p><mark>此插件，由社区成员（馒头虫/飘虫，读钓）贡献</mark></p><div class="language-xml"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dependency</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">org.noear</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">solon.aot</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dependency</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h4 id="_1、描述" tabindex="-1">1、描述 <a class="header-anchor" href="#_1、描述" aria-label="Permalink to &quot;1、描述&quot;">​</a></h4><p>基础扩展插件。是 Java Aot 的 Solon 增强形式。借用 solon 运行时容器收集信息，并生成 Aot 代理类（用于在原生运行时下替代 Asm 代理类）及各种原生元信信配置文件：</p><table><thead><tr><th>文件</th><th>说明</th></tr></thead><tbody><tr><td>&quot;$$SolonAotProxy&quot; class</td><td>用于替代 Asm 的代理类</td></tr><tr><td>native-image.properties</td><td>原生镜像编译参数配置</td></tr><tr><td>proxy-config.json</td><td>Jdk 代理接口申明配置</td></tr><tr><td>reflect-config.json</td><td>反射申明配置</td></tr><tr><td>resource-config.json</td><td>资源申明配置</td></tr><tr><td>serialization-config.json</td><td>序列化类申明配置</td></tr><tr><td>solon-resource.json</td><td>Solon 资源申明配置</td></tr></tbody></table><h4 id="_2、应用示例" tabindex="-1">2、应用示例 <a class="header-anchor" href="#_2、应用示例" aria-label="Permalink to &quot;2、应用示例&quot;">​</a></h4><p>生产项目往往依赖大量的第三方框架，要实现原生编译是个麻烦的事情。只是自动生成 Aot 代理类及各种原生元信信配置文件，仍然是不够的。还有无法自动触及的地方，需要项目定制。</p><p>&quot;solon.aot&quot; 的 RuntimeNativeRegistrar 接口，为项目定制提供了友好的接口。</p><p>例：</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Component</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">RuntimeNativeRegistrarImpl</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">implements</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">RuntimeNativeRegistrar</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Override</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">register</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">AopContext</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">context</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">RuntimeNativeMetadata</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">metadata</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        metadata</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">registerResourceInclude</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">com.mysql.jdbc.LocalizedErrorMessages.properties</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>更多使用，可以查看 RuntimeNativeMetadata 提供的各种接口。</p><h4 id="_3、演示项目" tabindex="-1">3、演示项目： <a class="header-anchor" href="#_3、演示项目" aria-label="Permalink to &quot;3、演示项目：&quot;">​</a></h4><ul><li><a href="https://gitee.com/noear/solon-native-example" target="_blank" rel="noreferrer">https://gitee.com/noear/solon-native-example</a></li><li><a href="https://gitee.com/noear/solon-examples/tree/main/4.Solon-Data/demo4013-wood_native" target="_blank" rel="noreferrer">https://gitee.com/noear/solon-examples/tree/main/4.Solon-Data/demo4013-wood_native</a></li><li><a href="https://gitee.com/noear_admin/nginxWebUI/tree/solon-native/" target="_blank" rel="noreferrer">https://gitee.com/noear_admin/nginxWebUI/tree/solon-native/</a></li></ul>`,13),l=[e];function p(r,c,i,d,y,D){return a(),n("div",null,l)}const C=s(t,[["render",p]]);export{A as __pageData,C as default};
