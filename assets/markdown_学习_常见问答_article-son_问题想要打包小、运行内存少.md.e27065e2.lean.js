import{_ as a,v as e,b as i,R as l}from"./chunks/framework.caa0fbaf.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/学习/常见问答/article-son/问题想要打包小、运行内存少.md","filePath":"markdown/学习/常见问答/article-son/问题想要打包小、运行内存少.md"}'),t={name:"markdown/学习/常见问答/article-son/问题想要打包小、运行内存少.md"},r=l('<p>很多人都想要应用的内存更少，一个服务器能部署更多的应用。这需要多个方面的努力（就像接力赛）：</p><h3 id="起跑棒" tabindex="-1">起跑棒 <a class="header-anchor" href="#起跑棒" aria-label="Permalink to &quot;起跑棒&quot;">​</a></h3><p>使用 solon 能让内存节省 1/2 - 1/3。给了一个很好的内存“低值”，“高值”靠下面两棒了。</p><ul><li>一般来讲。开发时多注意些，开发完后都是能保持节省 1/2 - 1/3 的水准。</li></ul><h3 id="第二棒-靠架构师的选择" tabindex="-1">第二棒（靠架构师的选择） <a class="header-anchor" href="#第二棒-靠架构师的选择" aria-label="Permalink to &quot;第二棒（靠架构师的选择）&quot;">​</a></h3><p>选择较小的、省内存的第三方框架。选择合适的、克制的。</p><ul><li>比如，HikariCP 会小些</li><li>比如，HikariCP 4.x 比 5.x 会小些</li><li>比如，mysql-connector 5.x 会比 8.x 小些</li><li>比如：okhttp 3.x 比 4.x 会小些</li></ul><p>话又说回来，小不是唯一原则。合适，才重最要。</p><h3 id="第三棒-靠程序员写" tabindex="-1">第三棒（靠程序员写） <a class="header-anchor" href="#第三棒-靠程序员写" aria-label="Permalink to &quot;第三棒（靠程序员写）&quot;">​</a></h3><p>开发时，节省内存</p><ul><li>比如，不断的创建连接池（内容就会不断涨，直到挂掉）</li><li>比如，文件流读到内存（比较吃内存）</li></ul><h3 id="最后棒-看运行" tabindex="-1">最后棒（看运行） <a class="header-anchor" href="#最后棒-看运行" aria-label="Permalink to &quot;最后棒（看运行）&quot;">​</a></h3><p>在相同请求量下，响应越快，越省内存。上下文数据的内存占用时间少，内存的复用性更高。</p><ul><li>如果并发请求量非常大，就别记较内存了</li></ul>',14),o=[r];function n(s,_,d,h,c,p){return e(),i("div",null,o)}const x=a(t,[["render",n]]);export{m as __pageData,x as default};
