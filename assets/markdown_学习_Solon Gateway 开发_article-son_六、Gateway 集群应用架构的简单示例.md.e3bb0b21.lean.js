import{_ as a,v as e,b as t,R as o}from"./chunks/framework.caa0fbaf.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/学习/Solon Gateway 开发/article-son/六、Gateway 集群应用架构的简单示例.md","filePath":"markdown/学习/Solon Gateway 开发/article-son/六、Gateway 集群应用架构的简单示例.md"}'),n={name:"markdown/学习/Solon Gateway 开发/article-son/六、Gateway 集群应用架构的简单示例.md"},s=o('<p>网关是个抽象概念，不同人或不同场景都会有差别。总体来说，只要经过“它”了，它就可以是一个关。Solon 的 Gateway 类本质是一个 Handler 接口实现，可以做为分布式节点上的“关”，也可以是服务本地的“关”。</p><h3 id="_1、k8s-ingress-controller-推荐" tabindex="-1">1、k8s / ingress controller [推荐] <a class="header-anchor" href="#_1、k8s-ingress-controller-推荐" aria-label="Permalink to &quot;1、k8s / ingress controller [推荐]&quot;">​</a></h3><ul><li>域服务之间的交互，尽可能采用分布式事件总线</li><li>Gateway 采用本地模式（网关插件可以复用）</li></ul><img src="https://solon.noear.org/img/5f29f8dbe3f841d795d520a72ac40bd8.png" width="500"><h3 id="_2、apisix-推荐" tabindex="-1">2、apisix [推荐] <a class="header-anchor" href="#_2、apisix-推荐" aria-label="Permalink to &quot;2、apisix [推荐]&quot;">​</a></h3><p>相对于上个方案，增加了一个分布式注册与发现服务，让 apisix 可以获取服务集群信息。（其实，上面方案也会需要 “分布式注册与发现服务”；只是有一部分可被 k8s sev name 替代）</p><img src="https://solon.noear.org/img/1385d1dbf1b64336ac37b98116941f74.png" width="500"><h3 id="_3、nginx" tabindex="-1">3、nginx <a class="header-anchor" href="#_3、nginx" aria-label="Permalink to &quot;3、nginx&quot;">​</a></h3><p>这个方案，之前可能是比较经典的。</p><img src="https://solon.noear.org/img/27470a7b2c3f45ccbaf975f7e6cf658e.png" width="600">',10),r=[s];function i(l,c,_,d,h,p){return e(),t("div",null,r)}const f=a(n,[["render",i]]);export{m as __pageData,f as default};
