import{_ as s,v as n,b as a,R as l}from"./chunks/framework.caa0fbaf.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/生态/Solon Data NoSql/article-son/redisson-solon-plugin.md","filePath":"markdown/生态/Solon Data NoSql/article-son/redisson-solon-plugin.md"}'),o={name:"markdown/生态/Solon Data NoSql/article-son/redisson-solon-plugin.md"},p=l(`<p><mark>此插件，由社区成员（Sorghum）贡献</mark></p><div class="language-xml"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dependency</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">org.noear</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">redisson-solon-plugin</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dependency</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h4 id="_1、描述" tabindex="-1">1、描述 <a class="header-anchor" href="#_1、描述" aria-label="Permalink to &quot;1、描述&quot;">​</a></h4><p>数据扩展插件，基于 redisson 封装（<a href="https://github.com/redisson/redisson" target="_blank" rel="noreferrer">代码仓库</a>），为 Solon Data 提供了 redis 的操作能力扩展。<mark>（v2.3.1 之后支持）</mark></p><p>//这个插件，主要是为构建客户端提供小便利。其实也可以不用适配，直接使用。</p><h4 id="_2、配置示例" tabindex="-1">2、配置示例 <a class="header-anchor" href="#_2、配置示例" aria-label="Permalink to &quot;2、配置示例&quot;">​</a></h4><p>配置分格有两种：1，将配置内容独立为一个文件；2，将配置做为主配置的内容（注意 &quot;|&quot; 符号）。具体的配置内容，参考官网内容（<a href="https://github.com/redisson/redisson/wiki/Table-of-Content" target="_blank" rel="noreferrer">https://github.com/redisson/redisson/wiki/Table-of-Content</a>）。</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">redis.ds1</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">file</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">classpath:redisson.yml</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">redis.ds2</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">config</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">|</span></span>
<span class="line"><span style="color:#C3E88D;">    singleServerConfig:</span></span>
<span class="line"><span style="color:#C3E88D;">      password: &quot;123456&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">      address: &quot;redis://localhost:6379&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">      database: 0</span></span></code></pre></div><h4 id="_3、应用示例" tabindex="-1">3、应用示例 <a class="header-anchor" href="#_3、应用示例" aria-label="Permalink to &quot;3、应用示例&quot;">​</a></h4><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Configuration</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Config</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Bean</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">value</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">redisDs1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">typed</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">RedissonClient</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">demo1</span><span style="color:#89DDFF;">(@</span><span style="color:#C792EA;">Inject</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\${redis.ds1}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">RedissonSupplier</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">supplier</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> supplier</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Bean</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">redisDs2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">RedissonClient</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">demo2</span><span style="color:#89DDFF;">(@</span><span style="color:#C792EA;">Inject</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\${redis.ds2}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">RedissonSupplier</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">supplier</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> supplier</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Component</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">DemoService</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Inject</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//@Inject(&quot;redisDs1&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">RedissonClient</span><span style="color:#A6ACCD;"> demo1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Inject</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">redisDs2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">RedissonClient</span><span style="color:#A6ACCD;"> demo2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h4 id="_4、二次应用" tabindex="-1">4、二次应用 <a class="header-anchor" href="#_4、二次应用" aria-label="Permalink to &quot;4、二次应用&quot;">​</a></h4><p>可以借用 RedissonClient，再加工别的服务。相当于用一份 redis 配置，做更多的事</p><ul><li>结合 <a href="/article/236.html">org.noear:solon.cache.redisson</a> 插件，创建缓存服务</li></ul><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Configuration</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Config</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Bean</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">CacheService</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">demo2</span><span style="color:#89DDFF;">(@</span><span style="color:#C792EA;">Inject</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">RedissonClient</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">client</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">RedissonCacheService</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">client</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">30</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><ul><li>结合 <a href="https://gitee.com/dromara/sa-token/tree/dev/sa-token-plugin/sa-token-redisson-jackson2" target="_blank" rel="noreferrer">cn.dev33:sa-token-redisson-jackson2</a> 插件，创建 sa-token dao</li></ul><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Configuration</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Config</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Bean</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">SaTokenDao</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">saTokenDaoInit</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">RedissonClient</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">redissonClient</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">SaTokenDaoRedissonJackson</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">redissonClient</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h4 id="_4、参考示例" tabindex="-1">4、参考示例 <a class="header-anchor" href="#_4、参考示例" aria-label="Permalink to &quot;4、参考示例&quot;">​</a></h4><p><a href="https://gitee.com/noear/solon-examples/tree/main/4.Solon-Data/demo4101-redisson" target="_blank" rel="noreferrer">https://gitee.com/noear/solon-examples/tree/main/4.Solon-Data/demo4101-redisson</a></p>`,18),e=[p];function t(r,c,D,y,i,C){return n(),a("div",null,e)}const d=s(o,[["render",t]]);export{A as __pageData,d as default};
