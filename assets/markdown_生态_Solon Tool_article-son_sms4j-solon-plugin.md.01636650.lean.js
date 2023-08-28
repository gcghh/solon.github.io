import{_ as s,v as a,b as n,R as l}from"./chunks/framework.caa0fbaf.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/生态/Solon Tool/article-son/sms4j-solon-plugin.md","filePath":"markdown/生态/Solon Tool/article-son/sms4j-solon-plugin.md"}'),p={name:"markdown/生态/Solon Tool/article-son/sms4j-solon-plugin.md"},o=l(`<p><mark>此插件，由社区成员（风）贡献</mark></p><div class="language-xml"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dependency</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">org.dromara.sms4j</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">sms4j-solon-plugin</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">version</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">2.1.0</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">version</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dependency</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h4 id="_1、描述" tabindex="-1">1、描述 <a class="header-anchor" href="#_1、描述" aria-label="Permalink to &quot;1、描述&quot;">​</a></h4><p>短信发送工具 sms4j（<a href="https://gitee.com/dromara/sms4j" target="_blank" rel="noreferrer">代码仓库</a>）的适配插件。SMS4J 为短信聚合框架，帮您轻松集成多家短信服务，解决接入多个短信SDK的繁琐流程。 目前已接入数家常见的短信服务商，后续将会继续集成。目前已支持厂商有：</p><ul><li>阿里云国内短信</li><li>腾讯云国内短信</li><li>华为云国内短信</li><li>京东云国内短信</li><li>容联云国内短信</li><li>亿美软通国内短信</li><li>天翼云短信</li><li>合一短信</li><li>云片短信</li></ul><h4 id="_2、配置示例" tabindex="-1">2、配置示例 <a class="header-anchor" href="#_2、配置示例" aria-label="Permalink to &quot;2、配置示例&quot;">​</a></h4><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">sms</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#F07178;">alibaba</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#89DDFF;">     </span><span style="color:#676E95;font-style:italic;">#阿里云的accessKey</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#F07178;">accessKeyId</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">您的accessKey</span></span>
<span class="line"><span style="color:#89DDFF;">     </span><span style="color:#676E95;font-style:italic;">#阿里云的accessKeySecret</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#F07178;">accessKeySecret</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">您的accessKeySecret</span></span>
<span class="line"><span style="color:#89DDFF;">     </span><span style="color:#676E95;font-style:italic;">#短信签名</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#F07178;">signature</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">测试签名</span></span>
<span class="line"><span style="color:#89DDFF;">     </span><span style="color:#676E95;font-style:italic;">#模板ID 用于发送固定模板短信使用</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#F07178;">templateId</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">SMS_215125134</span></span>
<span class="line"><span style="color:#89DDFF;">     </span><span style="color:#676E95;font-style:italic;">#模板变量 上述模板的变量</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#F07178;">templateName</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">code</span></span>
<span class="line"><span style="color:#89DDFF;">     </span><span style="color:#676E95;font-style:italic;">#请求地址 默认为dysmsapi.aliyuncs.com 如无特殊改变可以不用设置</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#F07178;">requestUrl</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dysmsapi.aliyuncs.com</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#F07178;">huawei</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#89DDFF;">     </span><span style="color:#676E95;font-style:italic;">#华为短信appKey</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#F07178;">appKey</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">5N6fvXXXX920HaWhVXXXXXX7fYa</span></span>
<span class="line"><span style="color:#89DDFF;">     </span><span style="color:#676E95;font-style:italic;">#华为短信appSecret</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#F07178;">app-secret</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Wujt7EYzZTBXXXXXXEhSP6XXXX</span></span>
<span class="line"><span style="color:#89DDFF;">     </span><span style="color:#676E95;font-style:italic;">#短信签名</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#F07178;">signature</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">华为短信测试</span></span>
<span class="line"><span style="color:#89DDFF;">     </span><span style="color:#676E95;font-style:italic;">#通道号</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#F07178;">sender</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8823040504797</span></span>
<span class="line"><span style="color:#89DDFF;">     </span><span style="color:#676E95;font-style:italic;">#模板ID 如果使用自定义模板发送方法可不设定</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#F07178;">template-id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">acXXXXXXXXc274b2a8263479b954c1ab5</span></span>
<span class="line"><span style="color:#89DDFF;">     </span><span style="color:#676E95;font-style:italic;">#华为回调地址，如不需要可不设置或为空</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#F07178;">statusCallBack</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">#华为分配的app请求地址</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#F07178;">url</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://XXXXX.cn-north-4.XXXXXXXX.com:443</span></span></code></pre></div><h4 id="_3、代码应用" tabindex="-1">3、代码应用 <a class="header-anchor" href="#_3、代码应用" aria-label="Permalink to &quot;3、代码应用&quot;">​</a></h4><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Mapping</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/test</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Controller</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">SmsController</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Mapping</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/sms</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">testSendSms</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">phone</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">code</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#676E95;font-style:italic;">//阿里云向此手机号发送短信</span></span>
<span class="line"><span style="color:#A6ACCD;">        SmsFactory</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createSmsBlend</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">SupplierType</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ALIBABA</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">sendMessage</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">phone</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">code</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">//华为短信向此手机号发送短信</span></span>
<span class="line"><span style="color:#A6ACCD;">        SmsFactory</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createSmsBlend</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">SupplierType</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">HUAWEI</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">sendMessage</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">phone</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">code</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>启动代码，从浏览器访问 <code>http://localhost:8080/test/sms?phone=18888888888&amp;code=123456</code> 等待手机收到短信</p>`,10),e=[o];function t(c,r,y,D,F,i){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{A as __pageData,d as default};
