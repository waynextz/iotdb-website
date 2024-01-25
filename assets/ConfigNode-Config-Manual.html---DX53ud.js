import{_ as i,r,o as a,c as d,a as s,d as t,e,b as o,f as n}from"./app-F10OrnbD.js";const c={},f=n('<h1 id="confignode-configuration" tabindex="-1"><a class="header-anchor" href="#confignode-configuration" aria-hidden="true">#</a> ConfigNode Configuration</h1><p>IoTDB ConfigNode files are under <code>conf</code>.</p><ul><li><p><code>confignode-env.sh/bat</code>：Environment configurations, in which we could set the memory allocation of ConfigNode.</p></li><li><p><code>iotdb-confignode.properties</code>：IoTDB ConfigNode system configurations.</p></li></ul>',3),g={id:"environment-configuration-file-confignode-env-sh-bat",tabindex:"-1"},y=t("a",{class:"header-anchor",href:"#environment-configuration-file-confignode-env-sh-bat","aria-hidden":"true"},"#",-1),h={href:"http://confignode-env.sh/bat%EF%BC%89",target:"_blank",rel:"noopener noreferrer"},x=n('<p>The environment configuration file is mainly used to configure the Java environment related parameters when ConfigNode is running, such as JVM related configuration. This part of the configuration is passed to the JVM when the ConfigNode starts.</p><p>The details of each parameter are as follows:</p><ul><li>MEMORY_SIZE</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">MEMORY_SIZE</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">The memory size that IoTDB ConfigNode will use when startup</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">The default is three-tenths of the memory, with a maximum of 16G.</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>ON_HEAP_MEMORY</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">ON_HEAP_MEMORY</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">The heap memory size that IoTDB ConfigNode can use, Former Name: MAX_HEAP_SIZE</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">Calculate based on MEMORY_SIZE.</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>OFF_HEAP_MEMORY</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">OFF_HEAP_MEMORY</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">The direct memory that IoTDB ConfigNode can use, Former Name: MAX_DIRECT_MEMORY_SIZE</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">Calculate based on MEMORY_SIZE.</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><h2 id="confignode-configuration-file-iotdb-confignode-properties" tabindex="-1"><a class="header-anchor" href="#confignode-configuration-file-iotdb-confignode-properties" aria-hidden="true">#</a> ConfigNode Configuration File (iotdb-confignode.properties)</h2><p>The global configuration of cluster is in ConfigNode.</p><h3 id="config-node-rpc-configuration" tabindex="-1"><a class="header-anchor" href="#config-node-rpc-configuration" aria-hidden="true">#</a> Config Node RPC Configuration</h3><ul><li>cn_internal_address</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">cn_internal_address</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">ConfigNode internal service address</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">127.0.0.1</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">Only allowed to be modified in first start up</td></tr></tbody></table><ul><li>cn_internal_port</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">cn_internal_port</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">ConfigNode internal service port</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">Short Int : [0,65535]</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">10710</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">Only allowed to be modified in first start up</td></tr></tbody></table><h3 id="consensus" tabindex="-1"><a class="header-anchor" href="#consensus" aria-hidden="true">#</a> Consensus</h3><ul><li>cn_consensus_port</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">cn_consensus_port</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">ConfigNode data Consensus Port</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">Short Int : [0,65535]</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">10720</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">Only allowed to be modified in first start up</td></tr></tbody></table><h3 id="target-config-nodes" tabindex="-1"><a class="header-anchor" href="#target-config-nodes" aria-hidden="true">#</a> Target Config Nodes</h3><ul><li>cn_seed_config_node</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">cn_seed_config_node</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">Target ConfigNode address, for current ConfigNode to join the cluster</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">127.0.0.1:10710</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">Only allowed to be modified in first start up</td></tr></tbody></table><h3 id="directory-configuration" tabindex="-1"><a class="header-anchor" href="#directory-configuration" aria-hidden="true">#</a> Directory configuration</h3><ul><li>cn_system_dir</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">cn_system_dir</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">ConfigNode system data dir</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">data/system（Windows：data\\system）</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>cn_consensus_dir</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">cn_consensus_dir</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">ConfigNode Consensus protocol data dir</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">data/confignode/consensus（Windows：data\\confignode\\consensus）</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><h3 id="thrift-rpc-configuration" tabindex="-1"><a class="header-anchor" href="#thrift-rpc-configuration" aria-hidden="true">#</a> Thrift RPC configuration</h3><ul><li>cn_rpc_thrift_compression_enable</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">cn_rpc_thrift_compression_enable</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">Whether enable thrift&#39;s compression (using GZIP).</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">Boolean</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>cn_rpc_thrift_compression_enable</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">cn_rpc_thrift_compression_enable</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">Whether enable thrift&#39;s compression (using GZIP).</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">Boolean</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>cn_rpc_advanced_compression_enable</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">cn_rpc_advanced_compression_enable</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">Whether enable thrift&#39;s advanced compression.</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">Boolean</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>cn_rpc_max_concurrent_client_num</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">cn_rpc_max_concurrent_client_num</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">Max concurrent rpc connections</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">Short Int : [0,65535]</td></tr><tr><td style="text-align:center;">Description</td><td style="text-align:left;">65535</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>cn_thrift_max_frame_size</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">cn_thrift_max_frame_size</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">Max size of bytes of each thrift RPC request/response</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">Long</td></tr><tr><td style="text-align:center;">Unit</td><td style="text-align:left;">Byte</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">536870912</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>cn_thrift_init_buffer_size</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">cn_thrift_init_buffer_size</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">Initial size of bytes of buffer that thrift used</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">long</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">1024</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>cn_connection_timeout_ms</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">cn_connection_timeout_ms</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">Thrift socket and connection timeout between nodes</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">int</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">60000</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>cn_selector_thread_nums_of_client_manager</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">cn_selector_thread_nums_of_client_manager</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">selector thread (TAsyncClientManager) nums for async thread in a clientManager</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">int</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">1</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>cn_core_client_count_for_each_node_in_client_manager</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">cn_core_client_count_for_each_node_in_client_manager</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">Number of core clients routed to each node in a ClientManager</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">int</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">200</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>cn_max_client_count_for_each_node_in_client_manager</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">cn_max_client_count_for_each_node_in_client_manager</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">Number of max clients routed to each node in a ClientManager</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">int</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">300</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><h3 id="metric-configuration" tabindex="-1"><a class="header-anchor" href="#metric-configuration" aria-hidden="true">#</a> Metric Configuration</h3>',48);function u(_,b){const l=r("ExternalLinkIcon");return a(),d("div",null,[s(`

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

`),f,t("h2",g,[y,e(" Environment Configuration File（"),t("a",h,[e("confignode-env.sh/bat）"),o(l)])]),x])}const p=i(c,[["render",u],["__file","ConfigNode-Config-Manual.html.vue"]]);export{p as default};
