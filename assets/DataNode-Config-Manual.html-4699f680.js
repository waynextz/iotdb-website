import{_ as a,r,o as i,c as d,a as s,d as t,e,b as o,f as l}from"./app-d415a090.js";const c={},y=l('<h1 id="datanode-configuration-parameters" tabindex="-1"><a class="header-anchor" href="#datanode-configuration-parameters" aria-hidden="true">#</a> DataNode Configuration Parameters</h1><p>We use the same configuration files for IoTDB DataNode and Standalone version, all under the <code>conf</code>.</p><ul><li><p><code>datanode-env.sh/bat</code>：Environment configurations, in which we could set the memory allocation of DataNode and Standalone.</p></li><li><p><code>iotdb-datanode.properties</code>：IoTDB DataNode system configurations.</p></li></ul><h2 id="hot-modification-configuration" tabindex="-1"><a class="header-anchor" href="#hot-modification-configuration" aria-hidden="true">#</a> Hot Modification Configuration</h2><p>For the convenience of users, IoTDB provides users with hot modification function, that is, modifying some configuration parameters in <code>iotdb-datanode.properties</code> and <code>iotdb-common.properties</code> during the system operation and applying them to the system immediately.<br> In the parameters described below, these parameters whose way of <code>Effective</code> is <code>hot-load</code> support hot modification.</p><p>Trigger way: The client sends the command(sql) <code>load configuration</code> to the IoTDB server.</p>',6),g={id:"environment-configuration-file-datanode-env-sh-bat",tabindex:"-1"},f=t("a",{class:"header-anchor",href:"#environment-configuration-file-datanode-env-sh-bat","aria-hidden":"true"},"#",-1),h={href:"http://datanode-env.sh/bat%EF%BC%89",target:"_blank",rel:"noopener noreferrer"},x=l('<p>The environment configuration file is mainly used to configure the Java environment related parameters when DataNode is running, such as JVM related configuration. This part of the configuration is passed to the JVM when the DataNode starts.</p><p>The details of each parameter are as follows:</p><ul><li>MAX_HEAP_SIZE</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">MAX_HEAP_SIZE</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">The maximum heap memory size that IoTDB can use</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">On Linux or MacOS, the default is one quarter of the memory. On Windows, the default value for 32-bit systems is 512M, and the default for 64-bit systems is 2G.</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>HEAP_NEWSIZE</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">HEAP_NEWSIZE</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">The minimum heap memory size that IoTDB will use when startup</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">On Linux or MacOS, the default is min{cores * 100M, one quarter of MAX_HEAP_SIZE}. On Windows, the default value for 32-bit systems is 512M, and the default for 64-bit systems is 2G.</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>MAX_DIRECT_MEMORY_SIZE</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">MAX_DIRECT_MEMORY_SIZE</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">The max direct memory that IoTDB could use</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">Equal to the MAX_HEAP_SIZE</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>JMX_LOCAL</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">JMX_LOCAL</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">JMX monitoring mode, configured as yes to allow only local monitoring, no to allow remote monitoring</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">Enum String: &quot;true&quot;, &quot;false&quot;</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>JMX_PORT</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">JMX_PORT</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">JMX listening port. Please confirm that the port is not a system reserved port and is not occupied</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">Short Int: [0,65535]</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">31999</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>JMX_IP</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">JMX_IP</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">JMX listening address. Only take effect if JMX_LOCAL=false. 0.0.0.0 is never allowed</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">127.0.0.1</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><h2 id="jmx-authorization" tabindex="-1"><a class="header-anchor" href="#jmx-authorization" aria-hidden="true">#</a> JMX Authorization</h2><p>We <strong>STRONGLY RECOMMENDED</strong> you CHANGE the PASSWORD for the JMX remote connection.</p><p>The user and passwords are in ${IOTDB_CONF}/conf/jmx.password.</p><p>The permission definitions are in ${IOTDB_CONF}/conf/jmx.access.</p><h2 id="datanode-standalone-configuration-file-iotdb-datanode-properties" tabindex="-1"><a class="header-anchor" href="#datanode-standalone-configuration-file-iotdb-datanode-properties" aria-hidden="true">#</a> DataNode/Standalone Configuration File (iotdb-datanode.properties)</h2><h3 id="data-node-rpc-configuration" tabindex="-1"><a class="header-anchor" href="#data-node-rpc-configuration" aria-hidden="true">#</a> Data Node RPC Configuration</h3><ul><li>dn_rpc_address</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">dn_rpc_address</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">The client rpc service listens on the address.</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">127.0.0.1</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>dn_rpc_port</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">dn_rpc_port</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">The client rpc service listens on the port.</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">Short Int : [0,65535]</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">6667</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>dn_internal_address</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">dn_internal_address</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">DataNode internal service host/IP</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">string</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">127.0.0.1</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>dn_internal_port</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">dn_internal_port</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">DataNode internal service port</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">int</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">10730</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>dn_mpp_data_exchange_port</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">mpp_data_exchange_port</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">MPP data exchange port</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">int</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">10740</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>dn_schema_region_consensus_port</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">dn_schema_region_consensus_port</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">DataNode Schema replica communication port for consensus</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">int</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">10750</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>dn_data_region_consensus_port</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">dn_data_region_consensus_port</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">DataNode Data replica communication port for consensus</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">int</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">10760</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>dn_join_cluster_retry_interval_ms</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">dn_join_cluster_retry_interval_ms</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">The time of data node waiting for the next retry to join into the cluster</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">long</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">5000</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><h3 id="target-config-nodes" tabindex="-1"><a class="header-anchor" href="#target-config-nodes" aria-hidden="true">#</a> Target Config Nodes</h3><ul><li>dn_target_config_node_list</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">dn_target_config_node_list</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">ConfigNode Address for DataNode to join cluster</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">127.0.0.1:10710</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><h3 id="connection-configuration" tabindex="-1"><a class="header-anchor" href="#connection-configuration" aria-hidden="true">#</a> Connection Configuration</h3><ul><li>dn_rpc_thrift_compression_enable</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">dn_rpc_thrift_compression_enable</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">Whether enable thrift&#39;s compression (using GZIP).</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">Boolean</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>dn_rpc_advanced_compression_enable</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">dn_rpc_advanced_compression_enable</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">Whether enable thrift&#39;s advanced compression.</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">Boolean</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>dn_rpc_selector_thread_count</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">dn_rpc_selector_thread_count</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">The number of rpc selector thread.</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">int</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>dn_rpc_min_concurrent_client_num</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">dn_rpc_min_concurrent_client_num</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">Minimum concurrent rpc connections</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">Short Int : [0,65535]</td></tr><tr><td style="text-align:center;">Description</td><td style="text-align:left;">1</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>dn_rpc_max_concurrent_client_num</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">dn_rpc_max_concurrent_client_num</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">Max concurrent rpc connections</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">Short Int : [0,65535]</td></tr><tr><td style="text-align:center;">Description</td><td style="text-align:left;">65535</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>dn_thrift_max_frame_size</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">dn_thrift_max_frame_size</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">Max size of bytes of each thrift RPC request/response</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">Long</td></tr><tr><td style="text-align:center;">Unit</td><td style="text-align:left;">Byte</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">536870912</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>dn_thrift_init_buffer_size</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">dn_thrift_init_buffer_size</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">Initial size of bytes of buffer that thrift used</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">long</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">1024</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>dn_core_client_count_for_each_node_in_client_manager</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">dn_core_client_count_for_each_node_in_client_manager</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">Number of core clients routed to each node in a ClientManager</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">int</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">200</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>dn_max_client_count_for_each_node_in_client_manager</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">dn_max_client_count_for_each_node_in_client_manager</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">Number of max clients routed to each node in a ClientManager</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">int</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">300</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><h3 id="dictionary-configuration" tabindex="-1"><a class="header-anchor" href="#dictionary-configuration" aria-hidden="true">#</a> Dictionary Configuration</h3><ul><li>dn_system_dir</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">dn_system_dir</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">The directories of system files. It is recommended to use an absolute path.</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">data/datanode/system (Windows: data\\datanode\\system)</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>dn_data_dirs</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">dn_data_dirs</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">The directories of data files. Multiple directories are separated by comma. The starting directory of the relative path is related to the operating system. It is recommended to use an absolute path. If the path does not exist, the system will automatically create it.</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">String[]</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">data/datanode/data (Windows: data\\datanode\\data)</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">hot-load</td></tr></tbody></table><ul><li>dn_multi_dir_strategy</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">dn_multi_dir_strategy</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">IoTDB&#39;s strategy for selecting directories for TsFile in tsfile_dir. You can use a simple class name or a full name of the class. The system provides the following three strategies: <br>1. SequenceStrategy: IoTDB selects the directory from tsfile_dir in order, traverses all the directories in tsfile_dir in turn, and keeps counting;<br>2. MaxDiskUsableSpaceFirstStrategy: IoTDB first selects the directory with the largest free disk space in tsfile_dir;<br>3. MinFolderOccupiedSpaceFirstStrategy: IoTDB prefers the directory with the least space used in tsfile_dir;<br>4. UserDfineStrategyPackage (user-defined policy)<br>You can complete a user-defined policy in the following ways:<br>1. Inherit the cn.edu.tsinghua.iotdb.conf.directories.strategy.DirectoryStrategy class and implement its own Strategy method;<br>2. Fill in the configuration class with the full class name of the implemented class (package name plus class name, UserDfineStrategyPackage);<br>3. Add the jar file to the project.</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">MaxDiskUsableSpaceFirstStrategy</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">hot-load</td></tr></tbody></table><ul><li>dn_consensus_dir</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">dn_consensus_dir</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">The directories of consensus files. It is recommended to use an absolute path.</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">data/datanode/consensus</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>dn_wal_dir</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">dn_wal_dir</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">Write Ahead Log storage path. It is recommended to use an absolute path.</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">data/datanode/wal</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>dn_tracing_dir</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">dn_tracing_dir</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">The tracing root directory path. It is recommended to use an absolute path.</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">datanode/tracing</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>dn_sync_dir</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">dn_sync_dir</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">The directories of sync files. It is recommended to use an absolute path.</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">data/datanode/sync</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><h3 id="metric-configuration" tabindex="-1"><a class="header-anchor" href="#metric-configuration" aria-hidden="true">#</a> Metric Configuration</h3><h2 id="enable-gc-log" tabindex="-1"><a class="header-anchor" href="#enable-gc-log" aria-hidden="true">#</a> Enable GC log</h2><p>GC log is off by default.<br> For performance tuning, you may want to collect the GC info.</p><p>To enable GC log, just add a parameter &quot;printgc&quot; when you start the DataNode.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">nohup</span> sbin/start-datanode.sh printgc <span class="token operator">&gt;</span>/dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Or</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>sbin\\start-datanode.bat printgc\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>GC log is stored at <code>IOTDB_HOME/logs/gc.log</code>.<br> There will be at most 10 gc.log.* files and each one can reach to 10MB.</p>',81);function u(p,m){const n=r("ExternalLinkIcon");return i(),d("div",null,[s(`

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

`),y,t("h2",g,[f,e(" Environment Configuration File（"),t("a",h,[e("datanode-env.sh/bat）"),o(n)])]),x])}const b=a(c,[["render",u],["__file","DataNode-Config-Manual.html.vue"]]);export{b as default};
