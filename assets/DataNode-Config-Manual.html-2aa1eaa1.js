import{_ as n,r as a,o as r,c as i,a as s,d as t,e,b as g,f as l}from"./app-2905306e.js";const y={},o=l('<h2 id="datanode-配置参数" tabindex="-1"><a class="header-anchor" href="#datanode-配置参数" aria-hidden="true">#</a> DataNode 配置参数</h2><p>IoTDB DataNode 与 Standalone 模式共用一套配置文件，均位于 IoTDB 安装目录：<code>conf</code>文件夹下。</p><ul><li><p><code>datanode-env.sh/bat</code>：环境配置项的配置文件，可以配置 DataNode 的内存大小。</p></li><li><p><code>iotdb-datanode.properties</code>：IoTDB DataNode 和单机版的配置文件。</p></li></ul><h3 id="热修改配置项" tabindex="-1"><a class="header-anchor" href="#热修改配置项" aria-hidden="true">#</a> 热修改配置项</h3><p>为方便用户使用，IoTDB 为用户提供了热修改功能，即在系统运行过程中修改 <code>iotdb-datanode.properties</code> 和 <code>iotdb-common.properties</code> 中部分配置参数并即时应用到系统中。下面介绍的参数中，改后 生效方式为<code>热加载</code><br> 的均为支持热修改的配置参数。</p><p>通过 Session 或 Cli 发送 <code>load configuration</code> 命令（SQL）至 IoTDB 可触发配置热加载。</p>',6),c={id:"环境配置项-datanode-env-sh-bat",tabindex:"-1"},x=t("a",{class:"header-anchor",href:"#环境配置项-datanode-env-sh-bat","aria-hidden":"true"},"#",-1),h={href:"http://datanode-env.sh/bat%EF%BC%89",target:"_blank",rel:"noopener noreferrer"},_=l(`<p>环境配置项主要用于对 DataNode 运行的 Java 环境相关参数进行配置，如 JVM 相关配置。DataNode/Standalone 启动时，此部分配置会被传给 JVM，详细配置项说明如下：</p><ul><li>MAX_HEAP_SIZE</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">MAX_HEAP_SIZE</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">IoTDB 能使用的最大堆内存大小</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">取决于操作系统和机器配置。在 Linux 或 MacOS 系统下默认为机器内存的四分之一。在 Windows 系统下，32 位系统的默认值是 512M，64 位系统默认值是 2G。</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><ul><li>HEAP_NEWSIZE</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">HEAP_NEWSIZE</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">IoTDB 启动时分配的最小堆内存大小</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">取决于操作系统和机器配置。在 Linux 或 MacOS 系统下默认值为机器 CPU 核数乘以 100M 的值与 MAX_HEAP_SIZE 四分之一这二者的最小值。在 Windows 系统下，32 位系统的默认值是 512M，64 位系统默认值是 2G。</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><ul><li>MAX_DIRECT_MEMORY_SIZE</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">MAX_DIRECT_MEMORY_SIZE</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">IoTDB 能使用的最大堆外内存大小</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">默认与最大堆内存相等</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><ul><li>JMX_LOCAL</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">JMX_LOCAL</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">JMX 监控模式，配置为 true 表示仅允许本地监控，设置为 false 的时候表示允许远程监控。如想在本地通过网络连接JMX Service，比如nodeTool.sh会尝试连接127.0.0.1:31999，请将JMX_LOCAL设置为false。</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">枚举 String : “true”, “false”</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><ul><li>JMX_PORT</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">JMX_PORT</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">JMX 监听端口。请确认该端口是不是系统保留端口并且未被占用。</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">Short Int: [0,65535]</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">31999</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><h3 id="系统配置项-iotdb-datanode-properties" tabindex="-1"><a class="header-anchor" href="#系统配置项-iotdb-datanode-properties" aria-hidden="true">#</a> 系统配置项（iotdb-datanode.properties）</h3><p>系统配置项是 IoTDB DataNode/Standalone 运行的核心配置，它主要用于设置 DataNode/Standalone 数据库引擎的参数。</p><h4 id="data-node-rpc-服务配置" tabindex="-1"><a class="header-anchor" href="#data-node-rpc-服务配置" aria-hidden="true">#</a> Data Node RPC 服务配置</h4><ul><li>dn_rpc_address</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">dn_rpc_address</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">客户端 RPC 服务监听地址</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">127.0.0.1</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><ul><li>dn_rpc_port</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">dn_rpc_port</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">Client RPC 服务监听端口</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">Short Int : [0,65535]</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">6667</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><ul><li>dn_internal_address</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">dn_internal_address</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">DataNode 内网通信地址</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">string</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">127.0.0.1</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><ul><li>dn_internal_port</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">dn_internal_port</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">DataNode 内网通信端口</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">int</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">10730</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><ul><li>dn_mpp_data_exchange_port</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">dn_mpp_data_exchange_port</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">MPP 数据交换端口</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">int</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">10740</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><ul><li>dn_schema_region_consensus_port</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">dn_schema_region_consensus_port</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">DataNode 元数据副本的共识协议通信端口</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">int</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">10750</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><ul><li>dn_data_region_consensus_port</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">dn_data_region_consensus_port</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">DataNode 数据副本的共识协议通信端口</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">int</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">10760</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><ul><li>dn_join_cluster_retry_interval_ms</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">dn_join_cluster_retry_interval_ms</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">DataNode 再次重试加入集群等待时间</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">long</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">5000</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><h4 id="目标-config-nodes-配置" tabindex="-1"><a class="header-anchor" href="#目标-config-nodes-配置" aria-hidden="true">#</a> 目标 Config Nodes 配置</h4><ul><li>dn_target_config_node_list</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">dn_target_config_node_list</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">ConfigNode 地址，DataNode 启动时通过此地址加入集群</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">127.0.0.1:10710</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><h4 id="连接配置" tabindex="-1"><a class="header-anchor" href="#连接配置" aria-hidden="true">#</a> 连接配置</h4><ul><li>dn_session_timeout_threshold</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">dn_session_timeout_threshold</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">最大的会话空闲时间</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">int</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">0</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><ul><li>dn_rpc_thrift_compression_enable</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">dn_rpc_thrift_compression_enable</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">是否启用 thrift 的压缩机制</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">Boolean</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><ul><li>dn_rpc_advanced_compression_enable</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">dn_rpc_advanced_compression_enable</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">是否启用 thrift 的自定制压缩机制</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">Boolean</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><ul><li>dn_rpc_selector_thread_count</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">rpc_selector_thread_count</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">rpc 选择器线程数量</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">int</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">1</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><ul><li>dn_rpc_min_concurrent_client_num</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">rpc_min_concurrent_client_num</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">最小连接数</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">Short Int : [0,65535]</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">1</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><ul><li>dn_rpc_max_concurrent_client_num</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">dn_rpc_max_concurrent_client_num</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">最大连接数</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">Short Int : [0,65535]</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">65535</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><ul><li>dn_thrift_max_frame_size</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">dn_thrift_max_frame_size</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">RPC 请求/响应的最大字节数</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">long</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">536870912 （默认值512MB，应大于等于 512 * 1024 * 1024)</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><ul><li>dn_thrift_init_buffer_size</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">dn_thrift_init_buffer_size</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">字节数</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">long</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">1024</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><ul><li>dn_core_client_count_for_each_node_in_client_manager</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">dn_core_client_count_for_each_node_in_client_manager</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">单 ClientManager 中路由到每个节点的核心 Client 个数</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">int</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">200</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><ul><li>dn_max_client_count_for_each_node_in_client_manager</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">dn_max_client_count_for_each_node_in_client_manager</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">单 ClientManager 中路由到每个节点的最大 Client 个数</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">int</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">300</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><h4 id="目录配置" tabindex="-1"><a class="header-anchor" href="#目录配置" aria-hidden="true">#</a> 目录配置</h4><ul><li>dn_system_dir</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">dn_system_dir</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">IoTDB 元数据存储路径，默认存放在和 sbin 目录同级的 data 目录下。相对路径的起始目录与操作系统相关，建议使用绝对路径。</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">data/datanode/system（Windows：data\\datanode\\system）</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">热加载</td></tr></tbody></table><ul><li>dn_data_dirs</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">dn_data_dirs</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">IoTDB 数据存储路径，默认存放在和 sbin 目录同级的 data 目录下。相对路径的起始目录与操作系统相关，建议使用绝对路径。</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">data/datanode/data（Windows：data\\datanode\\data）</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">热加载</td></tr></tbody></table><ul><li>dn_multi_dir_strategy</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">dn_multi_dir_strategy</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">IoTDB 在 data_dirs 中为 TsFile 选择目录时采用的策略。可使用简单类名或类名全称。系统提供以下三种策略：<br>1. SequenceStrategy：IoTDB 按顺序选择目录，依次遍历 data_dirs 中的所有目录，并不断轮循；<br>2. MaxDiskUsableSpaceFirstStrategy：IoTDB 优先选择 data_dirs 中对应磁盘空余空间最大的目录；<br>3. MinFolderOccupiedSpaceFirstStrategy：IoTDB 优先选择 data_dirs 中已使用空间最小的目录；<br>4. UserDefineStrategyPackage（用户自定义策略）<br>您可以通过以下方法完成用户自定义策略：<br>1. 继承 org.apache.iotdb.db.conf.directories.strategy 类并实现自身的 Strategy 方法；<br>2. 将实现的类的完整类名（包名加类名，UserDefineStrategyPackage）填写到该配置项；<br>3. 将该类 jar 包添加到工程中。</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">SequenceStrategy</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">热加载</td></tr></tbody></table><ul><li>dn_wal_dirs</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">dn_wal_dirs</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">IoTDB 写前日志存储路径，默认存放在和 sbin 目录同级的 data 目录下。相对路径的起始目录与操作系统相关，建议使用绝对路径。</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">data/datanode/wal（Windows：data\\datanode\\wal）</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">热加载</td></tr></tbody></table><ul><li>dn_tracing_dir</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">dn_tracing_dir</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">IoTDB 追踪根目录路径，默认存放在和 sbin 目录同级的 data 目录下。相对路径的起始目录与操作系统相关，建议使用绝对路径。</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">datanode/tracing</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">热加载</td></tr></tbody></table><ul><li>dn_sync_dir</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">dn_sync_dir</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">IoTDB sync 存储路径，默认存放在和 sbin 目录同级的 data 目录下。相对路径的起始目录与操作系统相关，建议使用绝对路径。</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">data/datanode/sync</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">热加载</td></tr></tbody></table><h4 id="metric-配置" tabindex="-1"><a class="header-anchor" href="#metric-配置" aria-hidden="true">#</a> Metric 配置</h4><h3 id="开启-gc-日志" tabindex="-1"><a class="header-anchor" href="#开启-gc-日志" aria-hidden="true">#</a> 开启 GC 日志</h3><p>GC 日志默认是关闭的。为了性能调优，用户可能会需要收集 GC 信息。<br> 若要打开 GC 日志，则需要在启动 IoTDB Server 的时候加上&quot;printgc&quot;参数：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">nohup</span> sbin/start-datanode.sh printgc <span class="token operator">&gt;</span>/dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>sbin<span class="token punctuation">\\</span>start-datanode.bat printgc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>GC 日志会被存储在<code>IOTDB_HOME/logs/gc.log</code>. 至多会存储 10 个 gc.log 文件，每个文件最多 10MB。</p>`,74);function f(b,u){const d=a("ExternalLinkIcon");return r(),i("div",null,[s(`

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

`),o,t("h3",c,[x,e(" 环境配置项（"),t("a",h,[e("datanode-env.sh/bat）"),g(d)])]),_])}const m=n(y,[["render",f],["__file","DataNode-Config-Manual.html.vue"]]);export{m as default};
