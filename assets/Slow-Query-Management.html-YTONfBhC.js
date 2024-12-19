import{_ as t,c as a,b as o,o as n}from"./app-C-0rb--l.js";const i={};function r(s,e){return n(),a("div",null,e[0]||(e[0]=[o('<h1 id="慢查询管理" tabindex="-1"><a class="header-anchor" href="#慢查询管理"><span>慢查询管理</span></a></h1><p>IoTDB 会将慢查询输出到单独的日志文件 log_datanode_slow_sql.log 中，并记录其执行耗时。</p><h2 id="配置慢查询的阈值" tabindex="-1"><a class="header-anchor" href="#配置慢查询的阈值"><span>配置慢查询的阈值</span></a></h2><p>IoTDB 在 <code>iotdb-system.properties</code> 提供了 <code>slow_query_threshold</code> 配置项，单位是毫秒，默认是30秒，超过此参数指定的阈值，便会被判断为慢查询，待其查询执行结束后，将其记录在 log_datanode_slow_sql.log 中。</p><h2 id="慢查询日志示例" tabindex="-1"><a class="header-anchor" href="#慢查询日志示例"><span>慢查询日志示例</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>2023-07-31 20:15:00,533 [pool-27-IoTDB-ClientRPC-Processor-1$20230731_121500_00003_1] INFO  o.a.i.d.q.p.Coordinator:225 - Cost: 42593 ms, sql is select * from root.db.**</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>',6)]))}const m=t(i,[["render",r],["__file","Slow-Query-Management.html.vue"]]),c=JSON.parse('{"path":"/zh/UserGuide/V2.0.1/Tree/Deployment-and-Maintenance/Slow-Query-Management.html","title":"慢查询管理","lang":"zh-CN","frontmatter":{"description":"慢查询管理 IoTDB 会将慢查询输出到单独的日志文件 log_datanode_slow_sql.log 中，并记录其执行耗时。 配置慢查询的阈值 IoTDB 在 iotdb-system.properties 提供了 slow_query_threshold 配置项，单位是毫秒，默认是30秒，超过此参数指定的阈值，便会被判断为慢查询，待其查询执行结...","head":[["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V2.0.1/Tree/Deployment-and-Maintenance/Slow-Query-Management.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"慢查询管理"}],["meta",{"property":"og:description","content":"慢查询管理 IoTDB 会将慢查询输出到单独的日志文件 log_datanode_slow_sql.log 中，并记录其执行耗时。 配置慢查询的阈值 IoTDB 在 iotdb-system.properties 提供了 slow_query_threshold 配置项，单位是毫秒，默认是30秒，超过此参数指定的阈值，便会被判断为慢查询，待其查询执行结..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-13T04:33:18.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-13T04:33:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"慢查询管理\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-13T04:33:18.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"配置慢查询的阈值","slug":"配置慢查询的阈值","link":"#配置慢查询的阈值","children":[]},{"level":2,"title":"慢查询日志示例","slug":"慢查询日志示例","link":"#慢查询日志示例","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1734064398000,"contributors":[{"name":"majialin","username":"majialin","email":"107627937+mal117@users.noreply.github.com","commits":1,"url":"https://github.com/majialin"},{"name":"W1y1r","username":"W1y1r","email":"150988475+W1y1r@users.noreply.github.com","commits":1,"url":"https://github.com/W1y1r"},{"name":"shuwenwei","username":"shuwenwei","email":"55970239+shuwenwei@users.noreply.github.com","commits":1,"url":"https://github.com/shuwenwei"},{"name":"Jackie Tien","username":"Jackie Tien","email":"jackietien97@gmail.com","commits":1,"url":"https://github.com/Jackie Tien"},{"name":"CritasWang","username":"CritasWang","email":"critas@outlook.com","commits":1,"url":"https://github.com/CritasWang"}]},"readingTime":{"minutes":0.8,"words":241},"filePathRelative":"zh/UserGuide/V2.0.1/Tree/Deployment-and-Maintenance/Slow-Query-Management.md","localizedDate":"2023年7月10日","autoDesc":true}');export{m as comp,c as data};
