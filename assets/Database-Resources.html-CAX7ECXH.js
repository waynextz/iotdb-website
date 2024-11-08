import{_ as d,c as e,b as a,o as r}from"./app-CRFlbjpx.js";const n={};function l(s,t){return r(),e("div",null,t[0]||(t[0]=[a('<h1 id="资源规划" tabindex="-1"><a class="header-anchor" href="#资源规划"><span>资源规划</span></a></h1><h2 id="cpu" tabindex="-1"><a class="header-anchor" href="#cpu"><span>CPU</span></a></h2><table style="text-align:center;"><tr><th rowspan="2">序列数（采集频率&lt;=1HZ）</th><th rowspan="2">CPU</th><th colspan="3">节点数</th></tr><tr><th>单机</th><th>双活</th><th>分布式</th></tr><tr><td>10W以内</td><td>2核-4核</td><td>1</td><td>2</td><td>3</td></tr><tr><td>30W以内</td><td>4核-8核</td><td>1</td><td>2</td><td>3</td></tr><tr><td>50W以内</td><td>8核-16核</td><td>1</td><td>2</td><td>3</td></tr><tr><td>100W以内</td><td>16核-32核</td><td>1</td><td>2</td><td>3</td></tr><tr><td>200w以内</td><td>32核-48核</td><td>1</td><td>2</td><td>3</td></tr><tr><td>1000w以内</td><td>48核</td><td>1</td><td>2</td><td>请联系天谋商务咨询</td></tr><tr><td>1000w以上</td><td colspan="4">请联系天谋商务咨询</td></tr></table><h2 id="内存" tabindex="-1"><a class="header-anchor" href="#内存"><span>内存</span></a></h2><table style="text-align:center;"><tr><th rowspan="2">序列数（采集频率&lt;=1HZ）</th><th rowspan="2">内存</th><th colspan="3">节点数</th></tr><tr><th>单机</th><th>双活</th><th>分布式</th></tr><tr><td>10W以内</td><td>4G-8G</td><td>1</td><td>2</td><td>3</td></tr><tr><td>30W以内</td><td>12G-32G</td><td>1</td><td>2</td><td>3</td></tr><tr><td>50W以内</td><td>24G-48G</td><td>1</td><td>2</td><td>3</td></tr><tr><td>100W以内</td><td>32G-96G</td><td>1</td><td>2</td><td>3</td></tr><tr><td>200w以内</td><td>64G-128G</td><td>1</td><td>2</td><td>3</td></tr><tr><td>1000w以内</td><td>128G</td><td>1</td><td>2</td><td>请联系天谋商务咨询</td></tr><tr><td>1000w以上</td><td colspan="4">请联系天谋商务咨询</td></tr></table><h2 id="存储-磁盘" tabindex="-1"><a class="header-anchor" href="#存储-磁盘"><span>存储(磁盘)</span></a></h2><h3 id="存储空间" tabindex="-1"><a class="header-anchor" href="#存储空间"><span>存储空间</span></a></h3><p>计算公式：测点数量 * 采样频率（Hz）* 每个数据点大小（Byte，不同数据类型不一样，见下表）</p><table style="text-align:center;"><tr><th colspan="4"> 数据点大小计算表 </th></tr><tr><td> 数据类型 </td><td>时间戳（字节）</td><td>值（字节）</td><td>数据点总大小（字节）</td></tr><tr><td>开关量（Boolean）</td><td>8</td><td>1</td><td>9</td></tr><tr><td>整型（INT32）/ 单精度浮点数（FLOAT）</td><td>8</td><td>4</td><td>12</td></tr><tr><td>长整型（INT64）/ 双精度浮点数（DOUBLE）</td><td>8</td><td>8</td><td>16</td></tr><tr><td>字符串（TEXT）</td><td>8</td><td>平均为a</td><td>8+a</td></tr></table><p>示例：1000设备，每个设备100 测点，共 100000 序列，INT32 类型。采样频率1Hz（每秒一次），存储1年，3副本。</p><ul><li>完整计算公式：1000设备 * 100测点 * 12字节每数据点 * 86400秒每天 * 365天每年 * 3副本/10压缩比=11T</li><li>简版计算公式：1000 * 100 * 12 * 86400 * 365 * 3 / 10 = 11T</li></ul><h3 id="存储配置" tabindex="-1"><a class="header-anchor" href="#存储配置"><span>存储配置</span></a></h3><p>1000w 点位以上或查询负载较大，推荐配置 SSD。</p><h2 id="网络-网卡" tabindex="-1"><a class="header-anchor" href="#网络-网卡"><span>网络（网卡）</span></a></h2><p>在写入吞吐不超过1000万点/秒时，需配置千兆网卡；当写入吞吐超过 1000万点/秒时，需配置万兆网卡。</p><table><thead><tr><th><strong>写入吞吐（数据点/秒）</strong></th><th><strong>网卡速率</strong></th></tr></thead><tbody><tr><td>&lt;1000万</td><td>1Gbps（千兆）</td></tr><tr><td>&gt;=1000万</td><td>10Gbps（万兆）</td></tr></tbody></table><h2 id="其他说明" tabindex="-1"><a class="header-anchor" href="#其他说明"><span>其他说明</span></a></h2><p>IoTDB 具有集群秒级扩容能力，扩容节点数据可不迁移，因此您无需担心按现有数据情况估算的集群能力有限，未来您可在需要扩容时为集群加入新的节点。</p>',18)]))}const o=d(n,[["render",l],["__file","Database-Resources.html.vue"]]),i=JSON.parse('{"path":"/zh/UserGuide/latest/Deployment-and-Maintenance/Database-Resources.html","title":"资源规划","lang":"zh-CN","frontmatter":{"description":"资源规划 CPU 内存 存储(磁盘) 存储空间 计算公式：测点数量 * 采样频率（Hz）* 每个数据点大小（Byte，不同数据类型不一样，见下表） 示例：1000设备，每个设备100 测点，共 100000 序列，INT32 类型。采样频率1Hz（每秒一次），存储1年，3副本。 完整计算公式：1000设备 * 100测点 * 12字节每数据点 * 86...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/latest/Deployment-and-Maintenance/Database-Resources.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/latest/Deployment-and-Maintenance/Database-Resources.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"资源规划"}],["meta",{"property":"og:description","content":"资源规划 CPU 内存 存储(磁盘) 存储空间 计算公式：测点数量 * 采样频率（Hz）* 每个数据点大小（Byte，不同数据类型不一样，见下表） 示例：1000设备，每个设备100 测点，共 100000 序列，INT32 类型。采样频率1Hz（每秒一次），存储1年，3副本。 完整计算公式：1000设备 * 100测点 * 12字节每数据点 * 86..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-08-22T08:23:47.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-22T08:23:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"资源规划\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-22T08:23:47.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"CPU","slug":"cpu","link":"#cpu","children":[]},{"level":2,"title":"内存","slug":"内存","link":"#内存","children":[]},{"level":2,"title":"存储(磁盘)","slug":"存储-磁盘","link":"#存储-磁盘","children":[{"level":3,"title":"存储空间","slug":"存储空间","link":"#存储空间","children":[]},{"level":3,"title":"存储配置","slug":"存储配置","link":"#存储配置","children":[]}]},{"level":2,"title":"网络（网卡）","slug":"网络-网卡","link":"#网络-网卡","children":[]},{"level":2,"title":"其他说明","slug":"其他说明","link":"#其他说明","children":[]}],"git":{"createdTime":1718194804000,"updatedTime":1724315027000,"contributors":[{"name":"majialin","email":"107627937+mal117@users.noreply.github.com","commits":7},{"name":"石林松","email":"50943998+shi10lin0s@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":3.13,"words":940},"filePathRelative":"zh/UserGuide/latest/Deployment-and-Maintenance/Database-Resources.md","localizedDate":"2024年6月12日","autoDesc":true}');export{o as comp,i as data};
