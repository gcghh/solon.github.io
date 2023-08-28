import{_ as s,v as a,b as n,R as l}from"./chunks/framework.caa0fbaf.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/学习/Solon 开发之配置/article-son/三、应用配置引用 maven、gradle 里的变量.md","filePath":"markdown/学习/Solon 开发之配置/article-son/三、应用配置引用 maven、gradle 里的变量.md"}'),p={name:"markdown/学习/Solon 开发之配置/article-son/三、应用配置引用 maven、gradle 里的变量.md"},o=l(`<p>这是编译工具的功能。通过 resources 处理配置，添加需要被渲染的资源：</p><h3 id="_1、配置参考" tabindex="-1">1、配置参考 <a class="header-anchor" href="#_1、配置参考" aria-label="Permalink to &quot;1、配置参考&quot;">​</a></h3><ul><li>maven</li></ul><div class="language-xml"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">properties</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">demo.env</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">local</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">demo.env</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">properties</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">build</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">resources</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">resource</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">directory</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">src/main/resources</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">directory</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">filtering</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">true</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">filtering</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">includes</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">include</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">*.yml</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">include</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">includes</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">resource</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">resource</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">directory</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">src/main/resources</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">directory</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">filtering</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">false</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">filtering</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">excludes</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">exclude</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">*.yml</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">exclude</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">excludes</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">resource</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">resources</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">build</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>当有 &quot;resource&quot; 配置时，需要把所有资源都包括进去。</p><ul><li>gradle</li></ul><div class="language-gradle"><button title="Copy Code" class="copy"></button><span class="lang">gradle</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">def demo_env = &quot;local&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">processResources {</span></span>
<span class="line"><span style="color:#A6ACCD;">    expand(project.properties)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h3 id="_2、引用方式" tabindex="-1">2、引用方式 <a class="header-anchor" href="#_2、引用方式" aria-label="Permalink to &quot;2、引用方式&quot;">​</a></h3><ul><li>yaml</li></ul><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">solon.env</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> @</span><span style="color:#C3E88D;">demo.env@</span></span></code></pre></div><ul><li>properties</li></ul><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C3E88D;">solon.env=\${demo.env}</span></span></code></pre></div>`,12),e=[o];function t(c,r,D,F,y,i){return a(),n("div",null,e)}const A=s(p,[["render",t]]);export{d as __pageData,A as default};
