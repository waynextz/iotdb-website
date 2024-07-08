import{_ as d,r as n,o as s,c,b as a,d as e,a as t,w as p,e as r}from"./app-DxurNv9d.js";const l={},h=r('<h1 id="背景" tabindex="-1"><a class="header-anchor" href="#背景"><span>背景</span></a></h1><p>Database 由用户显示指定，使用语句&quot;CREATE DATABASE&quot;来指定 database，每一个 database 有多个对应的 data region</p><p>为了确保最终一致性，每一个 data region 有一个数据插入锁（排它锁）来同步每一次插入操作。<br> 所以服务端数据写入的并行度为 data region的数量。</p><h1 id="问题" tabindex="-1"><a class="header-anchor" href="#问题"><span>问题</span></a></h1><p>从背景中可知，IoTDB数据写入的并行度为 max(客户端数量，服务端数据写入的并行度)，也就是max(客户端数量，data region 数量)</p><p>在生产实践中，存储组的概念往往与特定真实世界实体相关（例如工厂，地点，国家等）。<br> 因此存储组的数量可能会比较小，这会导致IoTDB写入并行度不足。即使我们开再多的客户端写入线程，也无法走出这种困境。</p><h1 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案"><span>解决方案</span></a></h1><p>我们的方案是将一个存储组下的设备分为若干个设备组（称为 data region），将同步粒度从存储组级别改为 data region 粒度。</p>',8),g=a("br",null,null,-1),m={href:"http://root.sg",target:"_blank",rel:"noopener noreferrer"},u={href:"http://root.sg",target:"_blank",rel:"noopener noreferrer"},_=r(`<h1 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h1><p>通过改变如下配置来设置每一个 database 下 data region 的数量：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>data_region_num
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>推荐值为[data region number] = [CPU core number] / [user-defined database number]</p>`,4);function b(f,x){const o=n("ExternalLinkIcon"),i=n("RouteLink");return s(),c("div",null,[h,a("p",null,[e("更具体的，我们使用哈希将设备分到不同的 data region 下，例如："),g,e(' 对于一个名为"root.sg.d"的设备（假设其存储组为"'),a("a",m,[e("root.sg"),t(o)]),e('"），它属于的 data region 为"'),a("a",u,[e("root.sg"),t(o)]),e('.[hash("root.sg.d") mod num_of_data_region]"')]),_,a("p",null,[e("参考"),t(i,{to:"/zh/UserGuide/V1.0.x/Reference/DataNode-Config-Manual.html"},{default:p(()=>[e("配置手册")]),_:1}),e("以获取更多信息。")])])}const T=d(l,[["render",b],["__file","DataRegion.html.vue"]]),A=JSON.parse('{"path":"/zh/UserGuide/V1.0.x/Data-Modeling/DataRegion.html","title":"背景","lang":"zh-CN","frontmatter":{"description":"背景 Database 由用户显示指定，使用语句\\"CREATE DATABASE\\"来指定 database，每一个 database 有多个对应的 data region 为了确保最终一致性，每一个 data region 有一个数据插入锁（排它锁）来同步每一次插入操作。 所以服务端数据写入的并行度为 data region的数量。 问题 从背景中可知...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.0.x/Data-Modeling/DataRegion.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/Data-Modeling/DataRegion.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"背景"}],["meta",{"property":"og:description","content":"背景 Database 由用户显示指定，使用语句\\"CREATE DATABASE\\"来指定 database，每一个 database 有多个对应的 data region 为了确保最终一致性，每一个 data region 有一个数据插入锁（排它锁）来同步每一次插入操作。 所以服务端数据写入的并行度为 data region的数量。 问题 从背景中可知..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"背景\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.64,"words":491},"filePathRelative":"zh/UserGuide/V1.0.x/Data-Modeling/DataRegion.md","localizedDate":"2023年7月10日","autoDesc":true}');export{T as comp,A as data};
