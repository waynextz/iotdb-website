import{_ as n,c as r,d as e,e as o,a as i,w as l,b as p,r as s,o as h}from"./app-C6MIQYKi.js";const d={};function c(u,t){const a=s("RouteLink");return h(),r("div",null,[t[7]||(t[7]=e("h1",{id:"产品介绍",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#产品介绍"},[e("span",null,"产品介绍")])],-1)),t[8]||(t[8]=e("p",null,"Apache IoTDB 是一款低成本、高性能的物联网原生时序数据库。它可以解决企业组建物联网大数据平台管理时序数据时所遇到的应用场景复杂、数据体量大、采样频率高、数据乱序多、数据处理耗时长、分析需求多样、存储与运维成本高等多种问题。",-1)),e("ul",null,[t[2]||(t[2]=e("li",null,[e("p",null,[o("Github仓库链接："),e("a",{href:"https://github.com/apache/iotdb",target:"_blank",rel:"noopener noreferrer"},"https://github.com/apache/iotdb")])],-1)),t[3]||(t[3]=e("li",null,[e("p",null,[o("开源安装包下载："),e("a",{href:"https://iotdb.apache.org/zh/Download/",target:"_blank",rel:"noopener noreferrer"},"https://iotdb.apache.org/zh/Download/")])],-1)),e("li",null,[e("p",null,[t[1]||(t[1]=o("安装部署与使用文档：")),i(a,{to:"/zh/UserGuide/latest/QuickStart/QuickStart_apache.html"},{default:l(()=>t[0]||(t[0]=[o("快速上手")])),_:1})])])]),t[9]||(t[9]=p('<h2 id="产品体系" tabindex="-1"><a class="header-anchor" href="#产品体系"><span>产品体系</span></a></h2><p>IoTDB 体系由若干个组件构成，帮助用户高效地管理和分析物联网产生的海量时序数据。</p><div style="text-align:center;"><img src="https://alioss.timecho.com/docs/img/Introduction-zh-apache.png" alt="Introduction-zh-apache.png" style="width:90%;"></div><p>其中：</p><ol><li><strong>时序数据库（Apache IoTDB）</strong>：时序数据存储的核心组件，其能够为用户提供高压缩存储能力、丰富时序查询能力、实时流处理能力，同时具备数据的高可用和集群的高扩展性，并在安全层面提供全方位保障。同时 TimechoDB 还为用户提供多种应用工具，方便用户配置和管理系统；多语言API和外部系统应用集成能力，方便用户在 TimechoDB 基础上构建业务应用。</li><li><strong>时序数据标准文件格式（Apache TsFile）</strong>：该文件格式是一种专为时序数据设计的存储格式，可以高效地存储和查询海量时序数据。目前 IoTDB、AINode 等模块的底层存储文件均由 Apache TsFile 进行支撑。通过 TsFile，用户可以在采集、管理、应用&amp;分析阶段统一使用相同的文件格式进行数据管理，极大简化了数据采集到分析的整个流程，提高时序数据管理的效率和便捷度。</li><li><strong>时序模型训推一体化引擎（IoTDB AINode）</strong>：针对智能分析场景，IoTDB 提供 AINode 时序模型训推一体化引擎，它提供了一套完整的时序数据分析工具，底层为模型训练引擎，支持训练任务与数据管理，与包括机器学习、深度学习等。通过这些工具，用户可以对存储在 IoTDB 中的数据进行深入分析，挖掘出其中的价值。</li></ol><h2 id="产品特性" tabindex="-1"><a class="header-anchor" href="#产品特性"><span>产品特性</span></a></h2><p>Apache IoTDB 具备以下优势和特性：</p><ul><li><p>灵活的部署方式：支持云端一键部署、终端解压即用、终端-云端无缝连接（数据云端同步工具）</p></li><li><p>低硬件成本的存储解决方案：支持高压缩比的磁盘存储，无需区分历史库与实时库，数据统一管理</p></li><li><p>层级化的测点组织管理方式：支持在系统中根据设备实际层级关系进行建模，以实现与工业测点管理结构的对齐，同时支持针对层级结构的目录查看、检索等能力</p></li><li><p>高通量的数据读写：支持百万级设备接入、数据高速读写、乱序/多频采集等复杂工业读写场景</p></li><li><p>丰富的时间序列查询语义：支持时序数据原生计算引擎，支持查询时时间戳对齐，提供近百种内置聚合与时序计算函数，支持面向时序特征分析和AI能力</p></li><li><p>高可用的分布式系统：支持HA分布式架构，系统提供7*24小时不间断的实时数据库服务，一个物理节点宕机或网络故障，不会影响系统的正常运行；支持物理节点的增加、删除或过热，系统会自动进行计算/存储资源的负载均衡处理；支持异构环境，不同类型、不同性能的服务器可以组建集群，系统根据物理机的配置，自动负载均衡</p></li><li><p>极低的使用&amp;运维门槛：支持类 SQL 语言、提供多语言原生二次开发接口、具备控制台等完善的工具体系</p></li><li><p>丰富的生态环境对接：支持Hadoop、Spark等大数据生态系统组件对接，支持Grafana、Thingsboard、DataEase等设备管理和可视化工具</p></li></ul><h2 id="商业版本" tabindex="-1"><a class="header-anchor" href="#商业版本"><span>商业版本</span></a></h2><p>天谋科技在 Apache IoTDB 开源版本的基础上提供了原厂商业化产品 TimechoDB，为企业、商业客户提供企业级产品和服务，它可以解决企业组建物联网大数据平台管理时序数据时所遇到的应用场景复杂、数据体量大、采样频率高、数据乱序多、数据处理耗时长、分析需求多样、存储与运维成本高等多种问题。</p><p>天谋科技基于 TimechoDB 提供更多样的产品功能、更强大的性能和稳定性、更丰富的效能工具，并为用户提供全方位的企业服务，从而为商业化客户提供更强大的产品能力，和更优质的开发、运维、使用体验。</p>',11)),e("ul",null,[t[6]||(t[6]=e("li",null,[e("p",null,[o("天谋科技官网："),e("a",{href:"https://www.timecho.com/",target:"_blank",rel:"noopener noreferrer"},"https://www.timecho.com/")])],-1)),e("li",null,[e("p",null,[t[5]||(t[5]=o("TimechoDB 安装部署与使用文档：")),i(a,{to:"/zh/UserGuide/latest/QuickStart/QuickStart_timecho.html"},{default:l(()=>t[4]||(t[4]=[o("快速上手")])),_:1})])])])])}const g=n(d,[["render",c],["__file","IoTDB-Introduction_apache.html.vue"]]),I=JSON.parse('{"path":"/zh/UserGuide/latest/IoTDB-Introduction/IoTDB-Introduction_apache.html","title":"产品介绍","lang":"zh-CN","frontmatter":{"description":"产品介绍 Apache IoTDB 是一款低成本、高性能的物联网原生时序数据库。它可以解决企业组建物联网大数据平台管理时序数据时所遇到的应用场景复杂、数据体量大、采样频率高、数据乱序多、数据处理耗时长、分析需求多样、存储与运维成本高等多种问题。 Github仓库链接：https://github.com/apache/iotdb 开源安装包下载：htt...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/latest/IoTDB-Introduction/IoTDB-Introduction_apache.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/latest/IoTDB-Introduction/IoTDB-Introduction_apache.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"产品介绍"}],["meta",{"property":"og:description","content":"产品介绍 Apache IoTDB 是一款低成本、高性能的物联网原生时序数据库。它可以解决企业组建物联网大数据平台管理时序数据时所遇到的应用场景复杂、数据体量大、采样频率高、数据乱序多、数据处理耗时长、分析需求多样、存储与运维成本高等多种问题。 Github仓库链接：https://github.com/apache/iotdb 开源安装包下载：htt..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-27T04:04:40.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-27T04:04:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"产品介绍\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-27T04:04:40.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"产品体系","slug":"产品体系","link":"#产品体系","children":[]},{"level":2,"title":"产品特性","slug":"产品特性","link":"#产品特性","children":[]},{"level":2,"title":"商业版本","slug":"商业版本","link":"#商业版本","children":[]}],"git":{"createdTime":1727583586000,"updatedTime":1732680280000,"contributors":[{"name":"W1y1r","email":"150988475+W1y1r@users.noreply.github.com","commits":1},{"name":"Xinyi Zhao","email":"xinyizhao@XinyideMacBook-Pro.local","commits":1}]},"readingTime":{"minutes":4.68,"words":1403},"filePathRelative":"zh/UserGuide/latest/IoTDB-Introduction/IoTDB-Introduction_apache.md","localizedDate":"2024年9月29日","autoDesc":true}');export{g as comp,I as data};
