import{_ as t,c as a,b as n,o as l}from"./app-C6MIQYKi.js";const r={};function i(s,e){return l(),a("div",null,e[0]||(e[0]=[n(`<h2 id="数据存活时间-ttl" tabindex="-1"><a class="header-anchor" href="#数据存活时间-ttl"><span>数据存活时间（TTL）</span></a></h2><p>IoTDB 支持对存储组级别设置数据存活时间（TTL），这使得 IoTDB 可以定期、自动地删除一定时间之前的数据。合理使用 TTL<br> 可以帮助您控制 IoTDB 占用的总磁盘空间以避免出现磁盘写满等异常。并且，随着文件数量的增多，查询性能往往随之下降，<br> 内存占用也会有所提高。及时地删除一些较老的文件有助于使查询性能维持在一个较高的水平和减少内存资源的占用。</p><h3 id="设置-ttl" tabindex="-1"><a class="header-anchor" href="#设置-ttl"><span>设置 TTL</span></a></h3><p>设置 TTL 的 SQL 语句如下所示：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; set ttl to root.ln 3600000</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>这个例子表示在<code>root.ln</code>存储组中，只有最近一个小时的数据将会保存，旧数据会被移除或不可见。</p><h3 id="取消-ttl" tabindex="-1"><a class="header-anchor" href="#取消-ttl"><span>取消 TTL</span></a></h3><p>取消 TTL 的 SQL 语句如下所示：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; unset ttl to root.ln</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>取消设置 TTL 后，存储组<code>root.ln</code>中所有的数据都会被保存。</p><h3 id="显示-ttl" tabindex="-1"><a class="header-anchor" href="#显示-ttl"><span>显示 TTL</span></a></h3><p>显示 TTL 的 SQL 语句如下所示：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; SHOW ALL TTL</span>
<span class="line">IoTDB&gt; SHOW TTL ON StorageGroupNames</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>SHOW ALL TTL 这个例子会给出所有存储组的 TTL。<br> SHOW TTL ON root.group1,root.group2,root.group3 这个例子会显示指定的三个存储组的 TTL。<br> 注意：没有设置 TTL 的存储组的 TTL 将显示为 null。</p>`,14)]))}const d=t(r,[["render",i],["__file","TTL.html.vue"]]),p=JSON.parse('{"path":"/zh/UserGuide/V0.13.x/Operate-Metadata/TTL.html","title":"","lang":"zh-CN","frontmatter":{"description":"数据存活时间（TTL） IoTDB 支持对存储组级别设置数据存活时间（TTL），这使得 IoTDB 可以定期、自动地删除一定时间之前的数据。合理使用 TTL 可以帮助您控制 IoTDB 占用的总磁盘空间以避免出现磁盘写满等异常。并且，随着文件数量的增多，查询性能往往随之下降， 内存占用也会有所提高。及时地删除一些较老的文件有助于使查询性能维持在一个较高...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V0.13.x/Operate-Metadata/TTL.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Operate-Metadata/TTL.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"数据存活时间（TTL） IoTDB 支持对存储组级别设置数据存活时间（TTL），这使得 IoTDB 可以定期、自动地删除一定时间之前的数据。合理使用 TTL 可以帮助您控制 IoTDB 占用的总磁盘空间以避免出现磁盘写满等异常。并且，随着文件数量的增多，查询性能往往随之下降， 内存占用也会有所提高。及时地删除一些较老的文件有助于使查询性能维持在一个较高..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"数据存活时间（TTL）","slug":"数据存活时间-ttl","link":"#数据存活时间-ttl","children":[{"level":3,"title":"设置 TTL","slug":"设置-ttl","link":"#设置-ttl","children":[]},{"level":3,"title":"取消 TTL","slug":"取消-ttl","link":"#取消-ttl","children":[]},{"level":3,"title":"显示 TTL","slug":"显示-ttl","link":"#显示-ttl","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.48,"words":444},"filePathRelative":"zh/UserGuide/V0.13.x/Operate-Metadata/TTL.md","localizedDate":"2023年7月10日","autoDesc":true}');export{d as comp,p as data};
