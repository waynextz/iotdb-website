import{_ as e,c as o,b as a,o as n}from"./app-C-0rb--l.js";const r={};function i(l,t){return n(),o("div",null,t[0]||(t[0]=[a('<h1 id="集群相关概念" tabindex="-1"><a class="header-anchor" href="#集群相关概念"><span>集群相关概念</span></a></h1><p>下图展示了一个常见的 IoTDB 3C3D1A（3 个 ConfigNode、3 个 DataNode 和 1 个 AINode）的集群部署模式：<br><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/Common-Concepts_01.png"></p><p>其中包括了 IoTDB 集群使用中用户常接触到的几个概念，包括：</p><ul><li><strong>节点</strong>（ConfigNode、DataNode、AINode）；</li><li><strong>槽</strong>（SchemaSlot、DataSlot）；</li><li><strong>Region</strong>（SchemaRegion、DataRegion）；</li><li><em><strong>副本组</strong></em>。</li></ul><p>下文将重点对以上概念进行介绍。</p><h2 id="节点" tabindex="-1"><a class="header-anchor" href="#节点"><span>节点</span></a></h2><p>IoTDB 集群包括三种节点（进程），<strong>ConfigNode</strong>（管理节点），<strong>DataNode</strong>（数据节点）和 <strong>AINode</strong>（分析节点），如下所示：</p><ul><li><strong>ConfigNode</strong>：存储集群的配置信息、数据库的元数据、时间序列元数据和数据的路由信息，监控集群节点并实施负载均衡，所有 ConfigNode 之间互为全量备份，如上图中的 ConfigNode-1，ConfigNode-2 和 ConfigNode-3 所示。ConfigNode 不直接接收客户端读写请求，它会通过一系列<a href="https://iotdb.apache.org/zh/UserGuide/latest/Technical-Insider/Cluster-data-partitioning.html" target="_blank" rel="noopener noreferrer">负载均衡算法</a>对集群中元数据和数据的分布提供指导。</li><li><strong>DataNode</strong>：负责时间序列元数据和数据的读写，每个 DataNode 都能接收客户端读写请求并提供相应服务，如上图中的 DataNode-1，DataNode-2 和 DataNode-3 所示。接收客户端读写请求时，若 DataNode 缓存有对应的路由信息，它能直接在本地执行或是转发这些请求；否则它会向 ConfigNode 询问并缓存路由信息，以加速后续请求的服务效率。</li><li><strong>AINode</strong>：负责与 ConfigNode 和 DataNode 交互来扩展 IoTDB 集群对时间序列进行智能分析的能力，支持从外部引入已有机器学习模型进行注册，并使用注册的模型在指定时序数据上通过简单 SQL 语句完成时序分析任务的过程，将模型的创建、管理及推理融合在数据库引擎中。目前已提供常见时序分析场景（例如预测与异常检测）的机器学习算法或自研模型。</li></ul><h2 id="槽" tabindex="-1"><a class="header-anchor" href="#槽"><span>槽</span></a></h2><p>IoTDB 内部将元数据和数据划分成多个更小的、更易于管理的单元，每个单元称为一个<strong>槽</strong>。槽是一个逻辑概念，在 IoTDB 集群中，<strong>元数据槽</strong>和<strong>数据槽</strong>定义如下：</p><ul><li><strong>元数据槽</strong>（SchemaSlot）：一部分元数据集合，元数据槽总数固定，默认数量为 1000，IoTDB 使用哈希算法将所有设备均匀地分配到这些元数据槽中。</li><li><strong>数据槽</strong>（DataSlot）：一部分数据集合，在元数据槽的基础上，将对应设备的数据按时间范围划分为数据槽，默认的时间范围为 7 天。</li></ul><h2 id="region" tabindex="-1"><a class="header-anchor" href="#region"><span>Region</span></a></h2><p>在 IoTDB 中，元数据和数据被复制到各个 DataNode 以获得集群高可用性。然而以槽为粒度进行复制会增加集群管理成本、降低写入吞吐。因此 IoTDB 引入 <strong>Region</strong> 这一概念，将元数据槽和数据槽分别分配给 SchemaRegion 和 DataRegion 后，以 Region 为单位进行复制。<strong>SchemRegion</strong> 和 <strong>DataRegion</strong> 的详细定义如下：</p><ul><li><strong>SchemaRegion</strong>：元数据存储和复制的基本单元，集群每个数据库的所有元数据槽会被均匀分配给该数据库的所有 SchemaRegion。拥有相同 RegionID 的 SchemaRegion 互为副本，如上图中 SchemaRegion-1 拥有三个副本，分别放置于 DataNode-1，DataNode-2 和 DataNode-3。</li><li><strong>DataRegion</strong>：数据存储和复制的基本单元，集群每个数据库的所有数据槽会被均匀分配给该数据库的所有 DataRegion。拥有相同 RegionID 的 DataRegion 互为副本，如上图中 DataRegion-2 拥有两个副本，分别放置于 DataNode-1 和 DataNode-2。</li></ul><h2 id="副本组" tabindex="-1"><a class="header-anchor" href="#副本组"><span>副本组</span></a></h2><p>Region 的副本对集群的容灾能力至关重要。对于每个 Region 的所有副本，它们的角色分为 <strong>leader</strong> 和 <strong>follower</strong>，共同提供读写服务。不同架构下的副本组配置推荐如下：</p><table><thead><tr><th style="text-align:center;">类别</th><th style="text-align:center;">配置项</th><th style="text-align:center;">单机推荐配置</th><th style="text-align:center;">分布式推荐配置</th></tr></thead><tbody><tr><td style="text-align:center;">元数据</td><td style="text-align:center;">schema_replication_factor</td><td style="text-align:center;">1</td><td style="text-align:center;">3</td></tr><tr><td style="text-align:center;">数据</td><td style="text-align:center;">data_replication_factor</td><td style="text-align:center;">1</td><td style="text-align:center;">2</td></tr></tbody></table>',17)]))}const g=e(r,[["render",i],["__file","Cluster-Concept.html.vue"]]),d=JSON.parse('{"path":"/zh/UserGuide/V1.3.0-2/Basic-Concept/Cluster-Concept.html","title":"集群相关概念","lang":"zh-CN","frontmatter":{"description":"集群相关概念 下图展示了一个常见的 IoTDB 3C3D1A（3 个 ConfigNode、3 个 DataNode 和 1 个 AINode）的集群部署模式： 其中包括了 IoTDB 集群使用中用户常接触到的几个概念，包括： 节点（ConfigNode、DataNode、AINode）； 槽（SchemaSlot、DataSlot）； Region（...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.3.0-2/Basic-Concept/Cluster-Concept.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.3.0-2/Basic-Concept/Cluster-Concept.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"集群相关概念"}],["meta",{"property":"og:description","content":"集群相关概念 下图展示了一个常见的 IoTDB 3C3D1A（3 个 ConfigNode、3 个 DataNode 和 1 个 AINode）的集群部署模式： 其中包括了 IoTDB 集群使用中用户常接触到的几个概念，包括： 节点（ConfigNode、DataNode、AINode）； 槽（SchemaSlot、DataSlot）； Region（..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-26T10:53:01.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-26T10:53:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"集群相关概念\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-26T10:53:01.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"节点","slug":"节点","link":"#节点","children":[]},{"level":2,"title":"槽","slug":"槽","link":"#槽","children":[]},{"level":2,"title":"Region","slug":"region","link":"#region","children":[]},{"level":2,"title":"副本组","slug":"副本组","link":"#副本组","children":[]}],"git":{"createdTime":1732597948000,"updatedTime":1732618381000,"contributors":[{"name":"W1y1r","username":"W1y1r","email":"150988475+W1y1r@users.noreply.github.com","commits":1,"url":"https://github.com/W1y1r"},{"name":"Yongzao","username":"Yongzao","email":"yongzao@apache.org","commits":1,"url":"https://github.com/Yongzao"}]},"readingTime":{"minutes":3.77,"words":1131},"filePathRelative":"zh/UserGuide/V1.3.0-2/Basic-Concept/Cluster-Concept.md","localizedDate":"2024年11月26日","autoDesc":true}');export{g as comp,d as data};
