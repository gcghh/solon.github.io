import{_ as s,v as a,b as n,R as l}from"./chunks/framework.caa0fbaf.js";const i=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/生态/Solon Data Sql/article-son/weed3-solon-plugin [弃用].md","filePath":"markdown/生态/Solon Data Sql/article-son/weed3-solon-plugin [弃用].md"}'),p={name:"markdown/生态/Solon Data Sql/article-son/weed3-solon-plugin [弃用].md"},o=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">//由 wood-solon-plugin  代替</span></span></code></pre></div><div class="language-xml"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dependency</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">org.noear</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">weed3-solon-plugin</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dependency</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h4 id="_1、描述" tabindex="-1">1、描述 <a class="header-anchor" href="#_1、描述" aria-label="Permalink to &quot;1、描述&quot;">​</a></h4><p>数据扩展插件，为 Solon Data 提供基于 Weed3 的框架适配，以提供ORM支持。（ Weed3 项目仓库： <a href="https://gitee.com/noear/weed3" target="_blank" rel="noreferrer">https://gitee.com/noear/weed3</a> ）</p><h4 id="_2、强调多数据源支持" tabindex="-1">2、强调多数据源支持 <a class="header-anchor" href="#_2、强调多数据源支持" aria-label="Permalink to &quot;2、强调多数据源支持&quot;">​</a></h4><ul><li>强调多数据源的配置。例：demo.db1...，demo.db2...</li><li>强调带 name 的 DataSource Bean</li><li>强调使用 @Db(&quot;name&quot;) 的数据源注解</li></ul><p>@Db 可注入类型：</p><table><thead><tr><th>支持类型</th><th>说明</th></tr></thead><tbody><tr><td>Mapper.class</td><td>注入 Mapper。例：<code>@Db(&quot;db1&quot;) UserMapper userMapper</code></td></tr><tr><td>DbContext</td><td>注入 DbContext。例：<code>@Db(&quot;db1&quot;) DbContext db1</code></td></tr></tbody></table><h4 id="_3、应用示例" tabindex="-1">3、应用示例 <a class="header-anchor" href="#_3、应用示例" aria-label="Permalink to &quot;3、应用示例&quot;">​</a></h4><ul><li>数据源配置</li></ul><div class="language-yml"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">demo.db1</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">schema</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rock</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">jdbcUrl</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">jdbc:mysql://localhost:3306/rock?useUnicode=true&amp;characterEncoding=utf8&amp;autoReconnect=true&amp;rewriteBatchedStatements=true</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">driverClassName</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">com.mysql.cj.jdbc.Driver</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">username</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">root</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">password</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">123456</span></span></code></pre></div><ul><li>代码应用</li></ul><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//启动应用</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">SolonMain</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">DemoApp</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">String</span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">args</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        Solon</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">start</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">DemoApp</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">class</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> args</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Solon</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">cfg</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">isDebugMode</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> Solon</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">cfg</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">isFilesMode</span><span style="color:#89DDFF;">())</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">                </span><span style="color:#676E95;font-style:italic;">//执行后打印sql</span></span>
<span class="line"><span style="color:#A6ACCD;">                WeedConfig</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onExecuteAft</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">cmd </span><span style="color:#C792EA;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                    System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[Weed3]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> cmd</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">text </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">\\r\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> cmd</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">paramMap</span><span style="color:#89DDFF;">());</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">});</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">});</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//配置数据源</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Configuration</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Config</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// typed=true，表示默认数据源。@Db 可不带名字注入 </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Bean</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">db1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">typed</span><span style="color:#89DDFF;">=true)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">DataSource</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">db1</span><span style="color:#89DDFF;">(@</span><span style="color:#C792EA;">Inject</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\${demo.db1}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">HikariDataSource</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">ds</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> ds</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Bean</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">db2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">DataSource</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">db1</span><span style="color:#89DDFF;">(@</span><span style="color:#C792EA;">Inject</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\${demo.db2}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">HikariDataSource</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">ds</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> ds</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//应用</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">ProxyComponent</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">AppService</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Db</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">AppMapper</span><span style="color:#A6ACCD;"> appMapper</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//xml sql mapper</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Db</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">BaseMapper</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">App</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> appBaseMapper</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//base mapper</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Db</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">DbContext</span><span style="color:#A6ACCD;"> db</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">//三种不同接口的样例</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">App</span><span style="color:#A6ACCD;"> app1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> appMapper</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getAppById</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">12</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">App</span><span style="color:#A6ACCD;"> app2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> appBaseMapper</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getById</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">12</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">App</span><span style="color:#A6ACCD;"> app3 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> db</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">table</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">app</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">whereEq</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">12</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">selectItem</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">*</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> App</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">class</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><ul><li>支持静态获取</li></ul><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//应用</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">ProxyComponent</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">AppService</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">DbContext</span><span style="color:#A6ACCD;"> db </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> WeedConfig</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">libOfDb</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">db1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">App</span><span style="color:#A6ACCD;"> app3 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> db</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">table</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">app</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">whereEq</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">12</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">selectItem</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">*</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> App</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">class</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p><strong>具体可参考：</strong></p><p><a href="https://gitee.com/noear/solon-examples/tree/main/4.Solon-Data/demo4011-weed" target="_blank" rel="noreferrer">https://gitee.com/noear/solon-examples/tree/main/4.Solon-Data/demo4011-weed</a></p>`,17),e=[o];function t(c,r,D,y,F,A){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{i as __pageData,d as default};
