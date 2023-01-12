(window.webpackJsonp=window.webpackJsonp||[]).push([[1195],{1598:function(t,e,a){"use strict";a.r(e);var l=a(19),_=Object(l.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"datanode-配置参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#datanode-配置参数"}},[t._v("#")]),t._v(" DataNode 配置参数")]),t._v(" "),e("p",[t._v("IoTDB DataNode 与 Standalone 模式共用一套配置文件，均位于 IoTDB 安装目录："),e("code",[t._v("conf")]),t._v("文件夹下。")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("datanode-env.sh/bat")]),t._v("：环境配置项的配置文件，可以配置 DataNode 的内存大小。")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("iotdb-datanode.properties")]),t._v("：IoTDB DataNode 和单机版的配置文件。")])])]),t._v(" "),e("h2",{attrs:{id:"热修改配置项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#热修改配置项"}},[t._v("#")]),t._v(" 热修改配置项")]),t._v(" "),e("p",[t._v("为方便用户使用，IoTDB 为用户提供了热修改功能，即在系统运行过程中修改 "),e("code",[t._v("iotdb-datanode.properties")]),t._v(" 和 "),e("code",[t._v("iotdb-common.properties")]),t._v(" 中部分配置参数并即时应用到系统中。下面介绍的参数中，改后 生效方式为"),e("code",[t._v("热加载")]),t._v("\n的均为支持热修改的配置参数。")]),t._v(" "),e("p",[t._v("通过 Session 或 Cli 发送 "),e("code",[t._v("load configuration")]),t._v(" 命令（SQL）至 IoTDB 可触发配置热加载。")]),t._v(" "),e("h2",{attrs:{id:"环境配置项-datanode-env-sh-bat"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#环境配置项-datanode-env-sh-bat"}},[t._v("#")]),t._v(" 环境配置项（datanode-env.sh/bat）")]),t._v(" "),e("p",[t._v("环境配置项主要用于对 DataNode 运行的 Java 环境相关参数进行配置，如 JVM 相关配置。DataNode/Standalone 启动时，此部分配置会被传给 JVM，详细配置项说明如下：")]),t._v(" "),e("ul",[e("li",[t._v("MAX_HEAP_SIZE")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("MAX_HEAP_SIZE")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("IoTDB 能使用的最大堆内存大小")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("取决于操作系统和机器配置。在 Linux 或 MacOS 系统下默认为机器内存的四分之一。在 Windows 系统下，32 位系统的默认值是 512M，64 位系统默认值是 2G。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务生效")])])])]),t._v(" "),e("ul",[e("li",[t._v("HEAP_NEWSIZE")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("HEAP_NEWSIZE")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("IoTDB 启动时分配的最小堆内存大小")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("取决于操作系统和机器配置。在 Linux 或 MacOS 系统下默认值为机器 CPU 核数乘以 100M 的值与 MAX_HEAP_SIZE 四分之一这二者的最小值。在 Windows 系统下，32 位系统的默认值是 512M，64 位系统默认值是 2G。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务生效")])])])]),t._v(" "),e("ul",[e("li",[t._v("MAX_DIRECT_MEMORY_SIZE")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("MAX_DIRECT_MEMORY_SIZE")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("IoTDB 能使用的最大堆外内存大小")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("默认与最大堆内存相等")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务生效")])])])]),t._v(" "),e("ul",[e("li",[t._v("JMX_LOCAL")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("JMX_LOCAL")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("JMX 监控模式，配置为 true 表示仅允许本地监控，设置为 false 的时候表示允许远程监控。如想在本地通过网络连接JMX Service，比如nodeTool.sh会尝试连接127.0.0.1:31999，请将JMX_LOCAL设置为false。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("枚举 String : “true”, “false”")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("true")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务生效")])])])]),t._v(" "),e("ul",[e("li",[t._v("JMX_PORT")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("JMX_PORT")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("JMX 监听端口。请确认该端口是不是系统保留端口并且未被占用。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Short Int: [0,65535]")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("31999")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务生效")])])])]),t._v(" "),e("h2",{attrs:{id:"系统配置项-iotdb-datanode-properties"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#系统配置项-iotdb-datanode-properties"}},[t._v("#")]),t._v(" 系统配置项（iotdb-datanode.properties）")]),t._v(" "),e("p",[t._v("系统配置项是 IoTDB DataNode/Standalone 运行的核心配置，它主要用于设置 DataNode/Standalone 数据库引擎的参数。")]),t._v(" "),e("h3",{attrs:{id:"data-node-rpc-服务配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data-node-rpc-服务配置"}},[t._v("#")]),t._v(" Data Node RPC 服务配置")]),t._v(" "),e("ul",[e("li",[t._v("dn_rpc_address")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("dn_rpc_address")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("客户端 RPC 服务监听地址")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("127.0.0.1")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务生效")])])])]),t._v(" "),e("ul",[e("li",[t._v("dn_rpc_port")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("dn_rpc_port")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Client RPC 服务监听端口")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Short Int : [0,65535]")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("6667")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务生效")])])])]),t._v(" "),e("ul",[e("li",[t._v("dn_internal_address")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("dn_internal_address")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("DataNode 内网通信地址")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("127.0.0.1")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务生效")])])])]),t._v(" "),e("ul",[e("li",[t._v("dn_internal_port")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("dn_internal_port")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("DataNode 内网通信端口")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("int")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("10730")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务生效")])])])]),t._v(" "),e("ul",[e("li",[t._v("dn_mpp_data_exchange_port")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("dn_mpp_data_exchange_port")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("MPP 数据交换端口")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("int")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("10740")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务生效")])])])]),t._v(" "),e("ul",[e("li",[t._v("dn_schema_region_consensus_port")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("dn_schema_region_consensus_port")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("DataNode 元数据副本的共识协议通信端口")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("int")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("10750")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务生效")])])])]),t._v(" "),e("ul",[e("li",[t._v("dn_data_region_consensus_port")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("dn_data_region_consensus_port")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("DataNode 数据副本的共识协议通信端口")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("int")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("10760")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务生效")])])])]),t._v(" "),e("ul",[e("li",[t._v("dn_join_cluster_retry_interval_ms")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("dn_join_cluster_retry_interval_ms")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("DataNode 再次重试加入集群等待时间")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("long")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("5000")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务生效")])])])]),t._v(" "),e("h3",{attrs:{id:"目标-config-nodes-配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#目标-config-nodes-配置"}},[t._v("#")]),t._v(" 目标 Config Nodes 配置")]),t._v(" "),e("ul",[e("li",[t._v("dn_target_config_node_list")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("dn_target_config_node_list")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("ConfigNode 地址，DataNode 启动时通过此地址加入集群")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("127.0.0.1:10710")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务生效")])])])]),t._v(" "),e("h3",{attrs:{id:"连接配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#连接配置"}},[t._v("#")]),t._v(" 连接配置")]),t._v(" "),e("ul",[e("li",[t._v("dn_session_timeout_threshold")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("dn_session_timeout_threshold")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("最大的会话空闲时间")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("int")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("0")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务生效")])])])]),t._v(" "),e("ul",[e("li",[t._v("dn_rpc_thrift_compression_enable")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("dn_rpc_thrift_compression_enable")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("是否启用 thrift 的压缩机制")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务生效")])])])]),t._v(" "),e("ul",[e("li",[t._v("dn_rpc_advanced_compression_enable")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("dn_rpc_advanced_compression_enable")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("是否启用 thrift 的自定制压缩机制")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务生效")])])])]),t._v(" "),e("ul",[e("li",[t._v("dn_rpc_selector_thread_count")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("rpc_selector_thread_count")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("rpc 选择器线程数量")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("int")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("1")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务生效")])])])]),t._v(" "),e("ul",[e("li",[t._v("dn_rpc_min_concurrent_client_num")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("rpc_min_concurrent_client_num")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("最小连接数")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Short Int : [0,65535]")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("1")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务生效")])])])]),t._v(" "),e("ul",[e("li",[t._v("dn_rpc_max_concurrent_client_num")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("dn_rpc_max_concurrent_client_num")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("最大连接数")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Short Int : [0,65535]")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("65535")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务生效")])])])]),t._v(" "),e("ul",[e("li",[t._v("dn_thrift_max_frame_size")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("dn_thrift_max_frame_size")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("RPC 请求/响应的最大字节数")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("long")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("536870912 （默认值512MB，应大于等于 512 * 1024 * 1024)")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务生效")])])])]),t._v(" "),e("ul",[e("li",[t._v("dn_thrift_init_buffer_size")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("dn_thrift_init_buffer_size")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("字节数")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("long")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("1024")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务生效")])])])]),t._v(" "),e("ul",[e("li",[t._v("dn_core_client_count_for_each_node_in_client_manager")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("dn_core_client_count_for_each_node_in_client_manager")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("单 ClientManager 中路由到每个节点的核心 Client 个数")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("int")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("200")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务生效")])])])]),t._v(" "),e("ul",[e("li",[t._v("dn_max_client_count_for_each_node_in_client_manager")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("dn_max_client_count_for_each_node_in_client_manager")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("单 ClientManager 中路由到每个节点的最大 Client 个数")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("int")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("300")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务生效")])])])]),t._v(" "),e("h3",{attrs:{id:"目录配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#目录配置"}},[t._v("#")]),t._v(" 目录配置")]),t._v(" "),e("ul",[e("li",[t._v("dn_system_dir")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("dn_system_dir")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("IoTDB 元数据存储路径，默认存放在和 sbin 目录同级的 data 目录下。相对路径的起始目录与操作系统相关，建议使用绝对路径。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data/datanode/system（Windows：data\\datanode\\system）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("热加载")])])])]),t._v(" "),e("ul",[e("li",[t._v("dn_data_dirs")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("dn_data_dirs")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("IoTDB 数据存储路径，默认存放在和 sbin 目录同级的 data 目录下。相对路径的起始目录与操作系统相关，建议使用绝对路径。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data/datanode/data（Windows：data\\datanode\\data）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("热加载")])])])]),t._v(" "),e("ul",[e("li",[t._v("dn_multi_dir_strategy")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("dn_multi_dir_strategy")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("IoTDB 在 data_dirs 中为 TsFile 选择目录时采用的策略。可使用简单类名或类名全称。系统提供以下三种策略："),e("br"),t._v("1. SequenceStrategy：IoTDB 按顺序选择目录，依次遍历 data_dirs 中的所有目录，并不断轮循；"),e("br"),t._v("2. MaxDiskUsableSpaceFirstStrategy：IoTDB 优先选择 data_dirs 中对应磁盘空余空间最大的目录；"),e("br"),t._v("3. MinFolderOccupiedSpaceFirstStrategy：IoTDB 优先选择 data_dirs 中已使用空间最小的目录；"),e("br"),t._v("4. UserDefineStrategyPackage（用户自定义策略）"),e("br"),t._v("您可以通过以下方法完成用户自定义策略："),e("br"),t._v("1. 继承 org.apache.iotdb.db.conf.directories.strategy 类并实现自身的 Strategy 方法；"),e("br"),t._v("2. 将实现的类的完整类名（包名加类名，UserDefineStrategyPackage）填写到该配置项；"),e("br"),t._v("3. 将该类 jar 包添加到工程中。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("MaxDiskUsableSpaceFirstStrategy")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("热加载")])])])]),t._v(" "),e("ul",[e("li",[t._v("dn_wal_dir")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("dn_wal_dir")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("IoTDB 写前日志存储路径，默认存放在和 sbin 目录同级的 data 目录下。相对路径的起始目录与操作系统相关，建议使用绝对路径。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data/datanode/wal（Windows：data\\datanode\\wal）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("热加载")])])])]),t._v(" "),e("ul",[e("li",[t._v("dn_tracing_dir")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("dn_tracing_dir")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("IoTDB 追踪根目录路径，默认存放在和 sbin 目录同级的 data 目录下。相对路径的起始目录与操作系统相关，建议使用绝对路径。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("datanode/tracing")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("热加载")])])])]),t._v(" "),e("ul",[e("li",[t._v("dn_sync_dir")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("dn_sync_dir")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("IoTDB sync 存储路径，默认存放在和 sbin 目录同级的 data 目录下。相对路径的起始目录与操作系统相关，建议使用绝对路径。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data/datanode/sync")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("热加载")])])])]),t._v(" "),e("h3",{attrs:{id:"metric-配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#metric-配置"}},[t._v("#")]),t._v(" Metric 配置")]),t._v(" "),e("h2",{attrs:{id:"开启-gc-日志"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开启-gc-日志"}},[t._v("#")]),t._v(" 开启 GC 日志")]),t._v(" "),e("p",[t._v('GC 日志默认是关闭的。为了性能调优，用户可能会需要收集 GC 信息。\n若要打开 GC 日志，则需要在启动 IoTDB Server 的时候加上"printgc"参数：')]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("nohup")]),t._v(" sbin/start-datanode.sh printgc "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/dev/null "),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("2")]),t._v(">")]),e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("&1")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("或者")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("sbin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("start-datanode.bat printgc\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("GC 日志会被存储在"),e("code",[t._v("IOTDB_HOME/logs/gc.log")]),t._v(". 至多会存储 10 个 gc.log 文件，每个文件最多 10MB。")])])}),[],!1,null,null,null);e.default=_.exports}}]);