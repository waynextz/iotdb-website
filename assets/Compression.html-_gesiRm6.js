import{_ as l,c as r,b as i,d as t,e as o,a as n,w as s,r as m,o as p}from"./app-C6MIQYKi.js";const d={};function u(c,e){const a=m("RouteLink");return p(),r("div",null,[e[3]||(e[3]=i('<h2 id="压缩方式" tabindex="-1"><a class="header-anchor" href="#压缩方式"><span>压缩方式</span></a></h2><p>当时间序列写入并按照指定的类型编码为二进制数据后，IoTDB 会使用压缩技术对该数据进行压缩，进一步提升空间存储效率。虽然编码和压缩都旨在提升存储效率，但编码技术通常只适合特定的数据类型（如二阶差分编码只适合与 INT32 或者 INT64 编码，存储浮点数需要先将他们乘以 10m 以转换为整数），然后将它们转换为二进制流。压缩方式（SNAPPY）针对二进制流进行压缩，因此压缩方式的使用不再受数据类型的限制。</p><h3 id="基本压缩方式" tabindex="-1"><a class="header-anchor" href="#基本压缩方式"><span>基本压缩方式</span></a></h3><p>IoTDB 允许在创建一个时间序列的时候指定该列的压缩方式。现阶段 IoTDB 支持以下几种压缩方式：</p><ul><li>UNCOMPRESSED（不压缩）</li><li>SNAPPY 压缩</li><li>LZ4 压缩</li><li>GZIP 压缩</li></ul>',5)),t("p",null,[e[1]||(e[1]=o("压缩方式的指定语法详见本文 ")),n(a,{to:"/zh/UserGuide/V0.13.x/Reference/SQL-Reference.html"},{default:s(()=>e[0]||(e[0]=[o("SQL 参考文档")])),_:1}),e[2]||(e[2]=o("。"))]),e[4]||(e[4]=t("h3",{id:"压缩比统计信息",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#压缩比统计信息"},[t("span",null,"压缩比统计信息")])],-1)),e[5]||(e[5]=t("p",{memtable_flush_time:""},"压缩比统计信息文件：data/system/storage_groups/compression_ratio/Ratio-{ratio_sum}-",-1)),e[6]||(e[6]=t("ul",null,[t("li",null,"ratio_sum: memtable压缩比的总和"),t("li",null,"memtable_flush_time: memtable刷盘的总次数")],-1)),e[7]||(e[7]=t("p",null,[o("通过 "),t("code",null,"ratio_sum / memtable_flush_time"),o(" 可以计算出平均压缩比")],-1))])}const f=l(d,[["render",u],["__file","Compression.html.vue"]]),g=JSON.parse('{"path":"/zh/UserGuide/V0.13.x/Data-Concept/Compression.html","title":"","lang":"zh-CN","frontmatter":{"description":"压缩方式 当时间序列写入并按照指定的类型编码为二进制数据后，IoTDB 会使用压缩技术对该数据进行压缩，进一步提升空间存储效率。虽然编码和压缩都旨在提升存储效率，但编码技术通常只适合特定的数据类型（如二阶差分编码只适合与 INT32 或者 INT64 编码，存储浮点数需要先将他们乘以 10m 以转换为整数），然后将它们转换为二进制流。压缩方式（SNAP...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V0.13.x/Data-Concept/Compression.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Data-Concept/Compression.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"压缩方式 当时间序列写入并按照指定的类型编码为二进制数据后，IoTDB 会使用压缩技术对该数据进行压缩，进一步提升空间存储效率。虽然编码和压缩都旨在提升存储效率，但编码技术通常只适合特定的数据类型（如二阶差分编码只适合与 INT32 或者 INT64 编码，存储浮点数需要先将他们乘以 10m 以转换为整数），然后将它们转换为二进制流。压缩方式（SNAP..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"压缩方式","slug":"压缩方式","link":"#压缩方式","children":[{"level":3,"title":"基本压缩方式","slug":"基本压缩方式","link":"#基本压缩方式","children":[]},{"level":3,"title":"压缩比统计信息","slug":"压缩比统计信息","link":"#压缩比统计信息","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.37,"words":412},"filePathRelative":"zh/UserGuide/V0.13.x/Data-Concept/Compression.md","localizedDate":"2023年7月10日","autoDesc":true}');export{f as comp,g as data};
