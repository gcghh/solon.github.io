import{_ as l,v as i,b as o,R as e}from"./chunks/framework.caa0fbaf.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/学习/常见问答/article-son/日志Solon v230 更新说明.md","filePath":"markdown/学习/常见问答/article-son/日志Solon v230 更新说明.md"}'),t={name:"markdown/学习/常见问答/article-son/日志Solon v230 更新说明.md"},s=e("<p>本次为中版本更新，<strong>大家注意一下日志体系的级升</strong>！</p><ul><li>升级 <mark>日志体系到 slf4j 2.x（如果冲突，排除旧的 1.x）!!!</mark></li><li>新增 solon.docs 插件!!!</li><li>新增 solon-swagger2-knife4j 插件!!!</li><li>新增 zipkin-solon-cloud-plugin 插件</li><li>新增 etcd-solon-cloud-plugin 插件</li><li>新增 fastmybatis-solon-plugin 插件</li><li>弃用 <code>@Dao</code> <code>@Repository</code> <code>@Service</code> （改由 <code>@ProxyComponent</code> 替代）</li><li>增加 ProxyUtil::attach(ctx,clz,obj,handler) 接口</li><li>增加 aot 对 methodWrap 参数的自动登记处理</li><li>修复 AopContext::getWrapsOfType 返回结果失真的问题</li><li>调整 mybatis 按包名扫描只对 <code>@Mapper</code> 注解的接口有效（避免其它接口误扫）</li><li>slf4j 升为 2.0.7</li><li>log4j2 升为 2.20.0（基于 slf4j 2.x）</li><li>logback 升为 1.3.7（基于 slf4j 2.x）</li><li>sqltoy 升为 5.2.48</li><li>mybatis-flex 升为 1.2.9</li><li>beetlsql 升为 3.23.1-RELEASE</li><li>wood 升为 1.1.2</li><li>redisx 升为 1.4.8</li><li>water 升为 2.11.0</li><li>protobuf 升为 3.22.3</li><li>jackson 升为 2.14.3</li><li>dubbo3 升为 3.2.1</li><li>grpc 升为 1.54.1</li><li>zookeeper 升为 3.7.1</li><li>nacos2-client 升为 2.2.2</li><li>nacos1-client 升为 1.4.5</li><li>jaeger 升为 1.8.1</li></ul>",2),a=[s];function n(r,c,d,p,_,m){return i(),o("div",null,a)}const g=l(t,[["render",n]]);export{u as __pageData,g as default};
