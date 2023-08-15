import{_ as e,o as t,c as i,a,f as o}from"./app-d7e75f9d.js";const n={},l=o('<h1 id="cluster-concept" tabindex="-1"><a class="header-anchor" href="#cluster-concept" aria-hidden="true">#</a> Cluster Concept</h1><h2 id="basic-concepts-of-iotdb-cluster" tabindex="-1"><a class="header-anchor" href="#basic-concepts-of-iotdb-cluster" aria-hidden="true">#</a> Basic Concepts of IoTDB Cluster</h2><p>Apache IoTDB Cluster contains two types of nodes: ConfigNode and DataNode, each is a process that could be deployed independently.</p><p>An illustration of the cluster architecture：</p><img style="width:100%;max-width:500px;max-height:400px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Cluster/Architecture.png?raw=true"><p>ConfigNode is the control node of the cluster, which manages the cluster&#39;s node status, partition information, etc. All ConfigNodes in the cluster form a highly available group, which is fully replicated.</p><p>Notice：The replication factor of ConfigNode is all ConfigNodes that has joined the Cluster. Over half of the ConfigNodes is Running could the cluster work.</p><p>DataNode stores the data and schema of the cluster, which manages multiple data regions and schema regions. Data is a time-value pair, and schema is the path and data type of each time series.</p><p>Client could only connect to the DataNode for operation.</p><h3 id="concepts" tabindex="-1"><a class="header-anchor" href="#concepts" aria-hidden="true">#</a> Concepts</h3><table><thead><tr><th style="text-align:left;">Concept</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">ConfigNode</td><td style="text-align:left;">node role</td><td style="text-align:left;">Configuration node, which manages cluster node information and partition information, monitors cluster status and controls load balancing</td></tr><tr><td style="text-align:left;">DataNode</td><td style="text-align:left;">node role</td><td style="text-align:left;">Data node, which manages data and meta data</td></tr><tr><td style="text-align:left;">Database</td><td style="text-align:left;">meta data</td><td style="text-align:left;">Database, data are isolated physically from different databases</td></tr><tr><td style="text-align:left;">DeviceId</td><td style="text-align:left;">device id</td><td style="text-align:left;">The full path from root to the penultimate level in the metadata tree represents a device id</td></tr><tr><td style="text-align:left;">SeriesSlot</td><td style="text-align:left;">schema partition</td><td style="text-align:left;">Each database contains many SeriesSlots, the partition key being DeviceId</td></tr><tr><td style="text-align:left;">SchemaRegion</td><td style="text-align:left;">schema region</td><td style="text-align:left;">A collection of multiple SeriesSlots</td></tr><tr><td style="text-align:left;">SchemaRegionGroup</td><td style="text-align:left;">logical concept</td><td style="text-align:left;">The number of SchemaRegions contained in group is the number of schema replicas, it manages the same schema data, and back up each other</td></tr><tr><td style="text-align:left;">SeriesTimeSlot</td><td style="text-align:left;">data partition</td><td style="text-align:left;">The data of a time interval of SeriesSlot, a SeriesSlot contains multiple SeriesTimeSlots, the partition key being timestamp</td></tr><tr><td style="text-align:left;">DataRegion</td><td style="text-align:left;">data region</td><td style="text-align:left;">A collection of multiple SeriesTimeSlots</td></tr><tr><td style="text-align:left;">DataRegionGroup</td><td style="text-align:left;">logical concept</td><td style="text-align:left;">The number of DataRegions contained in group is the number of data replicas, it manages the same data, and back up each other</td></tr></tbody></table><h2 id="characteristics-of-cluster" tabindex="-1"><a class="header-anchor" href="#characteristics-of-cluster" aria-hidden="true">#</a> Characteristics of Cluster</h2><ul><li>Native Cluster Architecture <ul><li>All modules are designed for cluster.</li><li>Standalone is a special form of Cluster.</li></ul></li><li>High Scalability <ul><li>Support adding nodes in a few seconds without data migration.</li></ul></li><li>Massive Parallel Processing Architecture <ul><li>Adopt the MPP architecture and volcano module for data processing, which have high extensibility.</li></ul></li><li>Configurable Consensus Protocol <ul><li>We could adopt different consensus protocol for data replicas and schema replicas.</li></ul></li><li>Extensible Partition Strategy <ul><li>The cluster adopts the lookup table for data and schema partitions, which is flexible to extend.</li></ul></li><li>Built-in Metric Framework <ul><li>Monitor the status of each node in cluster.</li></ul></li></ul><h2 id="partitioning-strategy" tabindex="-1"><a class="header-anchor" href="#partitioning-strategy" aria-hidden="true">#</a> Partitioning Strategy</h2><p>The partitioning strategy partitions data and schema into different Regions, and allocates Regions to different DataNodes.</p><p>It is recommended to set 1 database, and the cluster will dynamically allocate resources according to the number of nodes and cores.</p><p>The database contains multiple SchemaRegions and DataRegions, which are managed by DataNodes.</p><ul><li>Schema partition strategy <ul><li>For a time series schema, the ConfigNode maps the device ID (full path from root to the penultimate tier node) into a SeriesSlot and allocate this SeriesSlot to a SchemaRegionGroup.</li></ul></li><li>Data partition strategy <ul><li>For a time series data point, the ConfigNode will map to a SeriesSlot according to the DeviceId, and then map it to a SeriesTimeSlot according to the timestamp, and allocate this SeriesTimeSlot to a DataRegionGroup.</li></ul></li></ul><p>IoTDB uses a slot-based partitioning strategy, so the size of the partition information is controllable and does not grow infinitely with the number of time series or devices.</p><p>Regions will be allocated to different DataNodes to avoid single point of failure, and the load balance of different DataNodes will be ensured when Regions are allocated.</p><h2 id="replication-strategy" tabindex="-1"><a class="header-anchor" href="#replication-strategy" aria-hidden="true">#</a> Replication Strategy</h2><p>The replication strategy replicates data in multiple replicas, which are copies of each other. Multiple copies can provide high-availability services together and tolerate the failure of some copies.</p><p>A region is the basic unit of replication. Multiple replicas of a region construct a high-availability RegionGroup.</p><ul><li>Replication and consensus <ul><li>ConfigNode Group: Consisting of all ConfigNodes.</li><li>SchemaRegionGroup: The cluster has multiple SchemaRegionGroups, and each SchemaRegionGroup has multiple SchemaRegions with the same id.</li><li>DataRegionGroup: The cluster has multiple DataRegionGroups, and each DataRegionGroup has multiple DataRegions with the same id.</li></ul></li></ul><p>An illustration of the partition allocation in cluster:</p><img style="width:100%;max-width:500px;max-height:500px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Cluster/Data-Partition.png?raw=true"><p>The figure contains 1 SchemaRegionGroup, and the schema_replication_factor is 3, so the 3 white SchemaRegion-0s form a replication group.</p><p>The figure contains 3 DataRegionGroups, and the data_replication_factor is 3, so there are 9 DataRegions in total.</p><h2 id="consensus-protocol-consistency-protocol" tabindex="-1"><a class="header-anchor" href="#consensus-protocol-consistency-protocol" aria-hidden="true">#</a> Consensus Protocol (Consistency Protocol)</h2><p>Among multiple Regions of each RegionGroup, consistency is guaranteed through a consensus protocol, which routes read and write requests to multiple replicas.</p><ul><li>Current supported consensus protocol <ul><li>SimpleConsensus：Provide strong consistency, could only be used when replica is 1, which is the empty implementation of the consensus protocol.</li><li>IoTConsensus：Provide eventual consistency, could be used in any number of replicas, 2 replicas could avoid single point failure, only for DataRegion, writings can be applied on each replica and replicated asynchronously to other replicas.</li><li>RatisConsensus：Provide Strong consistency, using raft consensus protocol, Could be used in any number of replicas, and could be used for any region groups.<br> Currently, DataRegion uses RatisConsensus does not support multiple data directories. This feature is planned to be supported in future releases.</li></ul></li></ul>',31);function s(r,c){return t(),i("div",null,[a(`

\`\`\`
Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied.  See the License for the
specific language governing permissions and limitations
under the License.
\`\`\`

`),l])}const h=e(n,[["render",s],["__file","Cluster-Concept.html.vue"]]);export{h as default};
