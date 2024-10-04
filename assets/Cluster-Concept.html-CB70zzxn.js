import{_ as e,c as a,b as i,o}from"./app-W3EENNaa.js";const l={};function s(n,t){return o(),a("div",null,t[0]||(t[0]=[i('<h2 id="basic-concepts-of-iotdb-cluster" tabindex="-1"><a class="header-anchor" href="#basic-concepts-of-iotdb-cluster"><span>Basic Concepts of IoTDB Cluster</span></a></h2><p>Apache IoTDB Cluster contains two types of nodes: ConfigNode and DataNode, each is a process that could be deployed independently.</p><p>An illustration of the cluster architecture：</p><img style="width:100%;max-width:500px;max-height:400px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Cluster/Architecture.png?raw=true"><p>ConfigNode is the control node of the cluster, which manages the cluster&#39;s node status, partition information, etc. All ConfigNodes in the cluster form a highly available group, which is fully replicated.</p><p>Notice：The replication factor of ConfigNode is all ConfigNodes that has joined the Cluster. Over half of the ConfigNodes is Running could the cluster work.</p><p>DataNode stores the data and schema of the cluster, which manages multiple data regions and schema regions. Data is a time-value pair, and schema is the path and data type of each time series.</p><p>Client could only connect to the DataNode for operation.</p><h3 id="concepts" tabindex="-1"><a class="header-anchor" href="#concepts"><span>Concepts</span></a></h3><table><thead><tr><th style="text-align:left;">Concept</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">ConfigNode</td><td style="text-align:left;">node role</td><td style="text-align:left;">Configuration node, which manages cluster node information and partition information, monitors cluster status and controls load balancing</td></tr><tr><td style="text-align:left;">DataNode</td><td style="text-align:left;">node role</td><td style="text-align:left;">Data node, which manages data and meta data</td></tr><tr><td style="text-align:left;">Database</td><td style="text-align:left;">meta data</td><td style="text-align:left;">Database, data are isolated physically from different databases</td></tr><tr><td style="text-align:left;">DeviceId</td><td style="text-align:left;">device id</td><td style="text-align:left;">The full path from root to the penultimate level in the metadata tree represents a device id</td></tr><tr><td style="text-align:left;">SeriesSlot</td><td style="text-align:left;">schema partition</td><td style="text-align:left;">Each database contains many SeriesSlots, the partition key being DeviceId</td></tr><tr><td style="text-align:left;">SchemaRegion</td><td style="text-align:left;">schema region</td><td style="text-align:left;">A collection of multiple SeriesSlots</td></tr><tr><td style="text-align:left;">SchemaRegionGroup</td><td style="text-align:left;">logical concept</td><td style="text-align:left;">The number of SchemaRegions contained in group is the number of schema replicas, it manages the same schema data, and back up each other</td></tr><tr><td style="text-align:left;">SeriesTimeSlot</td><td style="text-align:left;">data partition</td><td style="text-align:left;">The data of a time interval of SeriesSlot, a SeriesSlot contains multiple SeriesTimeSlots, the partition key being timestamp</td></tr><tr><td style="text-align:left;">DataRegion</td><td style="text-align:left;">data region</td><td style="text-align:left;">A collection of multiple SeriesTimeSlots</td></tr><tr><td style="text-align:left;">DataRegionGroup</td><td style="text-align:left;">logical concept</td><td style="text-align:left;">The number of DataRegions contained in group is the number of data replicas, it manages the same data, and back up each other</td></tr></tbody></table><h2 id="characteristics-of-cluster" tabindex="-1"><a class="header-anchor" href="#characteristics-of-cluster"><span>Characteristics of Cluster</span></a></h2><ul><li>Native Cluster Architecture <ul><li>All modules are designed for cluster.</li><li>Standalone is a special form of Cluster.</li></ul></li><li>High Scalability <ul><li>Support adding nodes in a few seconds without data migration.</li></ul></li><li>Massive Parallel Processing Architecture <ul><li>Adopt the MPP architecture and volcano module for data processing, which have high extensibility.</li></ul></li><li>Configurable Consensus Protocol <ul><li>We could adopt different consensus protocol for data replicas and schema replicas.</li></ul></li><li>Extensible Partition Strategy <ul><li>The cluster adopts the lookup table for data and schema partitions, which is flexible to extend.</li></ul></li><li>Built-in Metric Framework <ul><li>Monitor the status of each node in cluster.</li></ul></li></ul><h2 id="partitioning-strategy" tabindex="-1"><a class="header-anchor" href="#partitioning-strategy"><span>Partitioning Strategy</span></a></h2><p>The partitioning strategy partitions data and schema into different Regions, and allocates Regions to different DataNodes.</p><p>It is recommended to set 1 database, and the cluster will dynamically allocate resources according to the number of nodes and cores.</p><p>The database contains multiple SchemaRegions and DataRegions, which are managed by DataNodes.</p><ul><li>Schema partition strategy <ul><li>For a time series schema, the ConfigNode maps the device ID (full path from root to the penultimate tier node) into a SeriesSlot and allocate this SeriesSlot to a SchemaRegionGroup.</li></ul></li><li>Data partition strategy <ul><li>For a time series data point, the ConfigNode will map to a SeriesSlot according to the DeviceId, and then map it to a SeriesTimeSlot according to the timestamp, and allocate this SeriesTimeSlot to a DataRegionGroup.</li></ul></li></ul><p>IoTDB uses a slot-based partitioning strategy, so the size of the partition information is controllable and does not grow infinitely with the number of time series or devices.</p><p>Regions will be allocated to different DataNodes to avoid single point of failure, and the load balance of different DataNodes will be ensured when Regions are allocated.</p><h2 id="replication-strategy" tabindex="-1"><a class="header-anchor" href="#replication-strategy"><span>Replication Strategy</span></a></h2><p>The replication strategy replicates data in multiple replicas, which are copies of each other. Multiple copies can provide high-availability services together and tolerate the failure of some copies.</p><p>A region is the basic unit of replication. Multiple replicas of a region construct a high-availability RegionGroup.</p><ul><li>Replication and consensus <ul><li>ConfigNode Group: Consisting of all ConfigNodes.</li><li>SchemaRegionGroup: The cluster has multiple SchemaRegionGroups, and each SchemaRegionGroup has multiple SchemaRegions with the same id.</li><li>DataRegionGroup: The cluster has multiple DataRegionGroups, and each DataRegionGroup has multiple DataRegions with the same id.</li></ul></li></ul><p>An illustration of the partition allocation in cluster:</p><img style="width:100%;max-width:500px;max-height:500px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Cluster/Data-Partition.png?raw=true"><p>The figure contains 1 SchemaRegionGroup, and the schema_replication_factor is 3, so the 3 white SchemaRegion-0s form a replication group.</p><p>The figure contains 3 DataRegionGroups, and the data_replication_factor is 3, so there are 9 DataRegions in total.</p><h2 id="consensus-protocol-consistency-protocol" tabindex="-1"><a class="header-anchor" href="#consensus-protocol-consistency-protocol"><span>Consensus Protocol (Consistency Protocol)</span></a></h2><p>Among multiple Regions of each RegionGroup, consistency is guaranteed through a consensus protocol, which routes read and write requests to multiple replicas.</p><ul><li>Current supported consensus protocol <ul><li>SimpleConsensus：Provide strong consistency, could only be used when replica is 1, which is the empty implementation of the consensus protocol.</li><li>IoTConsensus：Provide eventual consistency, could be used in any number of replicas, 2 replicas could avoid single point failure, only for DataRegion, writings can be applied on each replica and replicated asynchronously to other replicas.</li><li>RatisConsensus：Provide Strong consistency, using raft consensus protocol, Could be used in any number of replicas, and could be used for any region groups.<br> Currently, DataRegion uses RatisConsensus does not support multiple data directories. This feature is planned to be supported in future releases.</li></ul></li></ul>',30)]))}const c=e(l,[["render",s],["__file","Cluster-Concept.html.vue"]]),d=JSON.parse('{"path":"/UserGuide/V1.1.x/Cluster/Cluster-Concept.html","title":"","lang":"en-US","frontmatter":{"description":"Basic Concepts of IoTDB Cluster Apache IoTDB Cluster contains two types of nodes: ConfigNode and DataNode, each is a process that could be deployed independently. An illustratio...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/Cluster/Cluster-Concept.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.1.x/Cluster/Cluster-Concept.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"Basic Concepts of IoTDB Cluster Apache IoTDB Cluster contains two types of nodes: ConfigNode and DataNode, each is a process that could be deployed independently. An illustratio..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Basic Concepts of IoTDB Cluster","slug":"basic-concepts-of-iotdb-cluster","link":"#basic-concepts-of-iotdb-cluster","children":[{"level":3,"title":"Concepts","slug":"concepts","link":"#concepts","children":[]}]},{"level":2,"title":"Characteristics of Cluster","slug":"characteristics-of-cluster","link":"#characteristics-of-cluster","children":[]},{"level":2,"title":"Partitioning Strategy","slug":"partitioning-strategy","link":"#partitioning-strategy","children":[]},{"level":2,"title":"Replication Strategy","slug":"replication-strategy","link":"#replication-strategy","children":[]},{"level":2,"title":"Consensus Protocol (Consistency Protocol)","slug":"consensus-protocol-consistency-protocol","link":"#consensus-protocol-consistency-protocol","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":3.34,"words":1001},"filePathRelative":"UserGuide/V1.1.x/Cluster/Cluster-Concept.md","localizedDate":"July 10, 2023","autoDesc":true}');export{c as comp,d as data};
