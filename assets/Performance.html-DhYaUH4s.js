import{_ as e,o as t,c as a,e as r}from"./app-CQeJnOJS.js";const o={},n=r('<h1 id="performance" tabindex="-1"><a class="header-anchor" href="#performance"><span>Performance</span></a></h1><p>This chapter introduces the performance characteristics of IoTDB from the perspectives of database connection, database read and write performance, and storage performance.<br> The test tool uses IoTDBBenchmark, an open source time series database benchmark tool.</p><h2 id="database-connection" tabindex="-1"><a class="header-anchor" href="#database-connection"><span>Database connection</span></a></h2><ul><li>Support high concurrent connections, a single server can support tens of thousands of concurrent connections per second.</li></ul><h2 id="read-and-write-performance" tabindex="-1"><a class="header-anchor" href="#read-and-write-performance"><span>Read and write performance</span></a></h2><ul><li>It has the characteristics of high write throughput, a single core can handle more than tens of thousands of write requests per second, and the write performance of a single server can reach tens of millions of points per second; the cluster can be linearly scaled, and the write performance of the cluster can reach hundreds of millions points/second.</li><li>It has the characteristics of high query throughput and low query latency, a single server supports tens of millions of points/second query throughput, and can aggregate tens of billions of data points in milliseconds.</li><li></li></ul><h2 id="storage-performance" tabindex="-1"><a class="header-anchor" href="#storage-performance"><span>Storage performance</span></a></h2><ul><li>Supports the storage of massive data, with the storage and processing capabilities of PB-level data.</li><li>Support high compression ratio, lossless compression can reach 20 times compression ratio, lossy compression can reach 100 times compression ratio.</li></ul>',8),c=[n];function s(i,p){return t(),a("div",null,c)}const d=e(o,[["render",s],["__file","Performance.html.vue"]]),h=JSON.parse('{"path":"/UserGuide/latest/IoTDB-Introduction/Performance.html","title":"Performance","lang":"en-US","frontmatter":{"description":"Performance This chapter introduces the performance characteristics of IoTDB from the perspectives of database connection, database read and write performance, and storage perfo...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/latest/IoTDB-Introduction/Performance.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/latest/IoTDB-Introduction/Performance.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Performance"}],["meta",{"property":"og:description","content":"Performance This chapter introduces the performance characteristics of IoTDB from the perspectives of database connection, database read and write performance, and storage perfo..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-17T06:56:46.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-17T06:56:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Performance\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-17T06:56:46.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Database connection","slug":"database-connection","link":"#database-connection","children":[]},{"level":2,"title":"Read and write performance","slug":"read-and-write-performance","link":"#read-and-write-performance","children":[]},{"level":2,"title":"Storage performance","slug":"storage-performance","link":"#storage-performance","children":[]}],"git":{"createdTime":1690884908000,"updatedTime":1705474606000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.01,"words":304},"filePathRelative":"UserGuide/latest/IoTDB-Introduction/Performance.md","localizedDate":"August 1, 2023","autoDesc":true}');export{d as comp,h as data};
