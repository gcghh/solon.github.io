import{_ as s,v as n,b as a,R as l}from"./chunks/framework.caa0fbaf.js";const i=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/云生态/Solon Cloud Config/article-son/consul-solon-cloud-plugin.md","filePath":"markdown/云生态/Solon Cloud Config/article-son/consul-solon-cloud-plugin.md"}'),o={name:"markdown/云生态/Solon Cloud Config/article-son/consul-solon-cloud-plugin.md"},p=l(`<p><mark>此插件，由社区成员（夜の孤城）贡献</mark></p><div class="language-xml"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dependency</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">org.noear</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">consul-solon-cloud-plugin</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dependency</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h4 id="_1、描述" tabindex="-1">1、描述 <a class="header-anchor" href="#_1、描述" aria-label="Permalink to &quot;1、描述&quot;">​</a></h4><p>分布式扩展插件。基于 consul 适配的 solon cloud 插件。提供配置服务、注册与发现服务。</p><h4 id="_2、能力支持" tabindex="-1">2、能力支持 <a class="header-anchor" href="#_2、能力支持" aria-label="Permalink to &quot;2、能力支持&quot;">​</a></h4><table><thead><tr><th>云端能力接口</th><th>说明</th><th>备注</th></tr></thead><tbody><tr><td>CloudConfigService</td><td>云端配置服务</td><td>不支持 namespace；支持 group</td></tr><tr><td>CloudDiscoveryService</td><td>云端注册与发现服务</td><td>不支持 namespace；支持 group</td></tr></tbody></table><h4 id="_3、配置示例" tabindex="-1">3、配置示例 <a class="header-anchor" href="#_3、配置示例" aria-label="Permalink to &quot;3、配置示例&quot;">​</a></h4><div class="language-yml"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">solon.app</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">demoapp</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">group</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">demo</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">solon.cloud.consul</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">server</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">localhost</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">           </span><span style="color:#676E95;font-style:italic;">#consul 服务地址</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">config</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">load</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">demoapp.yml</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">              </span><span style="color:#676E95;font-style:italic;">#加载配置到应用属性（多个以&quot;,&quot;隔开）</span></span></code></pre></div><p>更丰富的配置：</p><div class="language-yml"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">solon.app</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">demoapp</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">group</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">demo</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">                   </span><span style="color:#676E95;font-style:italic;">#添加应用元信息（可选）</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">version</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">v1.0.2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">author</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">noear</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">tags</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">aaa,bbb,ccc</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">     </span><span style="color:#676E95;font-style:italic;">#添加应用标签（可选）</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">solon.cloud.consul</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">server</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">localhost</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">           </span><span style="color:#676E95;font-style:italic;">#consul 服务地址</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">username</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">password</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">config</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">load</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">demoapp.yml</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">              </span><span style="color:#676E95;font-style:italic;">#加载配置到应用属性（多个以&quot;,&quot;隔开）</span></span></code></pre></div><p>提醒：通过 &quot;...config.load&quot; 加载的配置，会进入 Solon.cfg() 可使用 @Inject 注入</p><h4 id="_4、代码应用" tabindex="-1">4、代码应用 <a class="header-anchor" href="#_4、代码应用" aria-label="Permalink to &quot;4、代码应用&quot;">​</a></h4><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">DemoApp</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">String</span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">args</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">//启动时，服务会自动注册</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">SolonApp</span><span style="color:#A6ACCD;"> app </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Solon</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">start</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">DemoApp</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">class</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> args</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Slf4j</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Controller</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">DemoController</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//配置服务的功能（注解模式） //只有接收实体为单例，才能用 autoRefreshed</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">CloudConfig</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">demoTitle</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">autoRefreshed</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true)</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> demoTitle</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#89DDFF;">     </span><span style="color:#676E95;font-style:italic;">//配置服务的功能（注解模式）</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">CloudConfig</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">demoDb</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">DbContext</span><span style="color:#A6ACCD;"> demoDb</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">NamiClient</span><span style="color:#A6ACCD;">            </span><span style="color:#676E95;font-style:italic;">//RPC服务发现的功能（注解模式）</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">RockService</span><span style="color:#A6ACCD;"> rockService</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Mapping</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">//配置服务：使用配置的数据库上下文进行查询</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">Map</span><span style="color:#A6ACCD;"> map </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> demoDb</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">table</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">water_reg_service</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">limit</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">selectMap</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">*</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">//Rpc发现服务：调用Rpc接口</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">AppModel</span><span style="color:#A6ACCD;"> app </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> rockService</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getAppById</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">12</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//配置订阅：关注配置的实时更新</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">CloudConfig</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">demoDb</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">TestConfigHandler</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">implements</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CloudConfigHandler</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Override</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">handler</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">Config</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">config</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h4 id="_5、演示项目" tabindex="-1">5、演示项目 <a class="header-anchor" href="#_5、演示项目" aria-label="Permalink to &quot;5、演示项目&quot;">​</a></h4><ul><li><a href="https://gitee.com/noear/solon-examples/tree/main/9.Solon-Cloud/demo9022-config-discovery_consul" target="_blank" rel="noreferrer">https://gitee.com/noear/solon-examples/tree/main/9.Solon-Cloud/demo9022-config-discovery_consul</a></li></ul>`,15),e=[p];function t(c,r,D,y,F,C){return n(),a("div",null,e)}const u=s(o,[["render",t]]);export{i as __pageData,u as default};
