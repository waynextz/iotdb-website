import{_ as a,c as o,b as n,d as i,e as t,a as s,w as l,r as p,o as d}from"./app-DLxi_e3x.js";const u={};function c(h,e){const r=p("RouteLink");return d(),o("div",null,[e[3]||(e[3]=n(`<h1 id="虚拟存储组" tabindex="-1"><a class="header-anchor" href="#虚拟存储组"><span>虚拟存储组</span></a></h1><h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景"><span>背景</span></a></h2><p>存储组由用户显示指定，使用语句&quot;SET STORAGE GROUP TO&quot;来指定存储组，每一个存储组有一个对应的 StorageGroupProcessor</p><p>为了确保最终一致性，每一个存储组有一个数据插入锁（排它锁）来同步每一次插入操作。<br> 所以服务端数据写入的并行度为存储组的数量。</p><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题"><span>问题</span></a></h2><p>从背景中可知，IoTDB数据写入的并行度为 max(客户端数量，服务端数据写入的并行度)，也就是max(客户端数量，存储组数量)</p><p>在生产实践中，存储组的概念往往与特定真实世界实体相关（例如工厂，地点，国家等）。<br> 因此存储组的数量可能会比较小，这会导致IoTDB写入并行度不足。即使我们开再多的客户端写入线程，也无法走出这种困境。</p><h2 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案"><span>解决方案</span></a></h2><p>我们的方案是将一个存储组下的设备分为若干个设备组（称为虚拟存储组），将同步粒度从存储组级别改为虚拟存储组粒度。</p><p>更具体的，我们使用哈希将设备分到不同的虚拟存储组下，例如：<br> 对于一个名为&quot;root.sg.d&quot;的设备（假设其存储组为&quot;<a href="http://root.sg" target="_blank" rel="noopener noreferrer">root.sg</a>&quot;），它属于的虚拟存储组为&quot;<a href="http://root.sg" target="_blank" rel="noopener noreferrer">root.sg</a>.[hash(&quot;root.sg.d&quot;) mod num_of_virtual_storage_group]&quot;</p><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2><p>通过改变如下配置来设置每一个存储组下虚拟存储组的数量：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">virtual_storage_group_num</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>推荐值为[virtual storage group number] = [CPU core number] / [user-defined storage group number]</p>`,14)),i("p",null,[e[1]||(e[1]=t("参考")),s(r,{to:"/zh/UserGuide/V0.13.x/Reference/Config-Manual.html"},{default:l(()=>e[0]||(e[0]=[t("配置手册")])),_:1}),e[2]||(e[2]=t("以获取更多信息。"))])])}const m=a(u,[["render",c],["__file","VirtualStorageGroup.html.vue"]]),f=JSON.parse('{"path":"/zh/UserGuide/V0.13.x/Data-Modeling/VirtualStorageGroup.html","title":"虚拟存储组","lang":"zh-CN","frontmatter":{"description":"虚拟存储组 背景 存储组由用户显示指定，使用语句\\"SET STORAGE GROUP TO\\"来指定存储组，每一个存储组有一个对应的 StorageGroupProcessor 为了确保最终一致性，每一个存储组有一个数据插入锁（排它锁）来同步每一次插入操作。 所以服务端数据写入的并行度为存储组的数量。 问题 从背景中可知，IoTDB数据写入的并行度为 m...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V0.13.x/Data-Modeling/VirtualStorageGroup.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Data-Modeling/VirtualStorageGroup.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"虚拟存储组"}],["meta",{"property":"og:description","content":"虚拟存储组 背景 存储组由用户显示指定，使用语句\\"SET STORAGE GROUP TO\\"来指定存储组，每一个存储组有一个对应的 StorageGroupProcessor 为了确保最终一致性，每一个存储组有一个数据插入锁（排它锁）来同步每一次插入操作。 所以服务端数据写入的并行度为存储组的数量。 问题 从背景中可知，IoTDB数据写入的并行度为 m..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"虚拟存储组\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"背景","slug":"背景","link":"#背景","children":[]},{"level":2,"title":"问题","slug":"问题","link":"#问题","children":[]},{"level":2,"title":"解决方案","slug":"解决方案","link":"#解决方案","children":[]},{"level":2,"title":"使用方法","slug":"使用方法","link":"#使用方法","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.75,"words":524},"filePathRelative":"zh/UserGuide/V0.13.x/Data-Modeling/VirtualStorageGroup.md","localizedDate":"2023年7月10日","autoDesc":true}');export{m as comp,f as data};
