import{_ as e,o as t,c as a,a as i,f as n}from"./app-d415a090.js";const o={},s=n('<h1 id="data-partitioning-load-balancing" tabindex="-1"><a class="header-anchor" href="#data-partitioning-load-balancing" aria-hidden="true">#</a> Data Partitioning &amp; Load Balancing</h1><p>IoTDB manages metadata and data based on data partitions (DataRegion), dividing the data from both the sequence and time dimensions.</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/分区槽与数据分区.png?raw=true"><h2 id="partition-slots" tabindex="-1"><a class="header-anchor" href="#partition-slots" aria-hidden="true">#</a> Partition Slots</h2><p>A sequence partition slot combined with a time partition slot can generate a data partition (when the sequence slot has corresponding data under that time slot).</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/SeriesPartitionSlot.png?raw=true"><h3 id="sequence-partition-slots" tabindex="-1"><a class="header-anchor" href="#sequence-partition-slots" aria-hidden="true">#</a> Sequence Partition Slots</h3><p>Each database holds a fixed number of sequence partition slots, with the default set to 1000. Every time series managed by the database is allocated to a unique sequence partition slot using a partitioning algorithm (usually some hash method).</p><h3 id="time-partition-slots" tabindex="-1"><a class="header-anchor" href="#time-partition-slots" aria-hidden="true">#</a> Time Partition Slots</h3><p>Every time series will continuously produce data. If all the data from a time series is stored on one node continuously, the newly added DataNode in the cluster might not be effectively utilized.</p><p>Time partition slots slice the time-series data from the time dimension (typically, one time partition per day), making the time-series data storage in the cluster easy to manage.</p><h2 id="metadata-partitioning" tabindex="-1"><a class="header-anchor" href="#metadata-partitioning" aria-hidden="true">#</a> Metadata Partitioning</h2><p>The metadata partition management of a single database, following a specific load balancing strategy, assigns all sequence slots to the corresponding SchemaRegionGroup, further horizontally scaling within the cluster.</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/SchemaRegion.png?raw=true"><h2 id="data-partitioning" tabindex="-1"><a class="header-anchor" href="#data-partitioning" aria-hidden="true">#</a> Data Partitioning</h2><p>It follows a certain load balancing strategy, dividing time and sequence partition slots, and allocating them to the relevant DataRegionGroup, further allowing horizontal scaling in the cluster.</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/DataRegion.png?raw=true"><h2 id="load-balancing" tabindex="-1"><a class="header-anchor" href="#load-balancing" aria-hidden="true">#</a> Load Balancing</h2><p>When the cluster&#39;s capacity remains unchanged, data will be evenly distributed across all nodes to utilize storage and computational resources effectively.</p><p>Also, during cluster expansion, the system automatically increases the number of regions to fully exploit the computational resources of all nodes without manual intervention. Such dynamic expansion enhances the cluster&#39;s performance and scalability, making the system more flexible and efficient.</p>',20);function r(l,d){return t(),a("div",null,[i(`

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

`),s])}const c=e(o,[["render",r],["__file","Cluster-data-partitioning.html.vue"]]);export{c as default};
