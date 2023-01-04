(window.webpackJsonp=window.webpackJsonp||[]).push([[495],{899:function(t,e,n){"use strict";n.r(e);var s=n(19),a=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"_1-purpose"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-purpose"}},[t._v("#")]),t._v(" 1. Purpose")]),t._v(" "),e("p",[t._v("This document describes how to install and start IoTDB Cluster (1.0.0).")]),t._v(" "),e("h1",{attrs:{id:"_2-prerequisites"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-prerequisites"}},[t._v("#")]),t._v(" 2. Prerequisites")]),t._v(" "),e("ol",[e("li",[t._v("JDK>=1.8.")]),t._v(" "),e("li",[t._v("Max open file 65535.")]),t._v(" "),e("li",[t._v("Disable the swap memory.")]),t._v(" "),e("li",[t._v("Ensure that data/confignode directory has been cleared when starting ConfigNode for the first time,\nand data/datanode directory has been cleared when starting DataNode for the first time")]),t._v(" "),e("li",[t._v("Turn off the firewall of the server if the entire cluster is in a trusted environment.")]),t._v(" "),e("li",[t._v("By default, IoTDB Cluster will use ports 10710, 10720 for the ConfigNode and\n6667, 10730, 10740, 10750 and 10760 for the DataNode.\nPlease make sure those ports are not occupied, or you will modify the ports in configuration files.")])]),t._v(" "),e("h1",{attrs:{id:"_3-get-the-installation-package"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-get-the-installation-package"}},[t._v("#")]),t._v(" 3. Get the Installation Package")]),t._v(" "),e("p",[t._v("You can either download the binary release files (see Chap 3.1) or compile with source code (see Chap 3.2).")]),t._v(" "),e("h2",{attrs:{id:"_3-1-download-the-binary-distribution"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-download-the-binary-distribution"}},[t._v("#")]),t._v(" 3.1 Download the binary distribution")]),t._v(" "),e("ol",[e("li",[t._v("Open our website "),e("a",{attrs:{href:"https://iotdb.apache.org/Download/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Download Page"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("li",[t._v("Download the binary distribution.")]),t._v(" "),e("li",[t._v("Decompress to get the apache-iotdb-1.0.0-all-bin directory.")])]),t._v(" "),e("h2",{attrs:{id:"_3-2-compile-with-source-code"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-compile-with-source-code"}},[t._v("#")]),t._v(" 3.2 Compile with source code")]),t._v(" "),e("h3",{attrs:{id:"_3-2-1-download-the-source-code"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-1-download-the-source-code"}},[t._v("#")]),t._v(" 3.2.1 Download the source code")]),t._v(" "),e("p",[e("strong",[t._v("Git")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git clone https://github.com/apache/iotdb.git\ngit checkout v1.0.0\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[e("strong",[t._v("Website")])]),t._v(" "),e("ol",[e("li",[t._v("Open our website "),e("a",{attrs:{href:"https://iotdb.apache.org/Download/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Download Page"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("li",[t._v("Download the source code.")]),t._v(" "),e("li",[t._v("Decompress to get the apache-iotdb-1.0.0 directory.")])]),t._v(" "),e("h3",{attrs:{id:"_3-2-2-compile-source-code"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2-compile-source-code"}},[t._v("#")]),t._v(" 3.2.2 Compile source code")]),t._v(" "),e("p",[t._v("Under the source root folder:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("mvn clean package -pl distribution -am -DskipTests\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("Then you will get the binary distribution under\n"),e("strong",[t._v("distribution/target/apache-iotdb-1.0.0-SNAPSHOT-all-bin/apache-iotdb-1.0.0-SNAPSHOT-all-bin")]),t._v(".")]),t._v(" "),e("h1",{attrs:{id:"_4-binary-distribution-content"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-binary-distribution-content"}},[t._v("#")]),t._v(" 4. Binary Distribution Content")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[e("strong",[t._v("Folder")])]),t._v(" "),e("th",[e("strong",[t._v("Description")])])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("conf")]),t._v(" "),e("td",[t._v("Configuration files folder, contains configuration files of ConfigNode, DataNode, JMX and logback")])]),t._v(" "),e("tr",[e("td",[t._v("data")]),t._v(" "),e("td",[t._v("Data files folder, contains data files of ConfigNode and DataNode")])]),t._v(" "),e("tr",[e("td",[t._v("lib")]),t._v(" "),e("td",[t._v("Jar files folder")])]),t._v(" "),e("tr",[e("td",[t._v("licenses")]),t._v(" "),e("td",[t._v("Licenses files folder")])]),t._v(" "),e("tr",[e("td",[t._v("logs")]),t._v(" "),e("td",[t._v("Logs files folder, contains logs files of ConfigNode and DataNode")])]),t._v(" "),e("tr",[e("td",[t._v("sbin")]),t._v(" "),e("td",[t._v("Shell files folder, contains start/stop/remove shell of ConfigNode and DataNode, cli shell")])]),t._v(" "),e("tr",[e("td",[t._v("tools")]),t._v(" "),e("td",[t._v("System tools")])])])]),t._v(" "),e("h1",{attrs:{id:"_5-cluster-installation-and-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-cluster-installation-and-configuration"}},[t._v("#")]),t._v(" 5. Cluster Installation and Configuration")]),t._v(" "),e("h2",{attrs:{id:"_5-1-cluster-installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-cluster-installation"}},[t._v("#")]),t._v(" 5.1 Cluster Installation")]),t._v(" "),e("p",[e("code",[t._v("apache-iotdb-1.0.0-SNAPSHOT-all-bin")]),t._v(" contains both the ConfigNode and the DataNode.\nPlease deploy the files to all servers of your target cluster.\nA best practice is deploying the files into the same directory in all servers.")]),t._v(" "),e("p",[t._v("If you want to try the cluster mode on one server, please read\n"),e("a",{attrs:{href:"https://iotdb.apache.org/UserGuide/Master/QuickStart/ClusterQuickStart.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cluster Quick Start"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"_5-2-cluster-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-cluster-configuration"}},[t._v("#")]),t._v(" 5.2 Cluster Configuration")]),t._v(" "),e("p",[t._v("We need to modify the configurations on each server.\nTherefore, login each server and switch the working directory to "),e("code",[t._v("apache-iotdb-1.0.0-SNAPSHOT-all-bin")]),t._v(".\nThe configuration files are stored in the "),e("code",[t._v("./conf")]),t._v(" directory.")]),t._v(" "),e("p",[t._v("For all ConfigNode servers, we need to modify the common configuration (see Chap 5.2.1)\nand ConfigNode configuration (see Chap 5.2.2).")]),t._v(" "),e("p",[t._v("For all DataNode servers, we need to modify the common configuration (see Chap 5.2.1)\nand DataNode configuration (see Chap 5.2.3).")]),t._v(" "),e("h3",{attrs:{id:"_5-2-1-common-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-1-common-configuration"}},[t._v("#")]),t._v(" 5.2.1 Common configuration")]),t._v(" "),e("p",[t._v("Open the common configuration file ./conf/iotdb-common.properties,\nand set the following parameters base on the\n"),e("a",{attrs:{href:"https://iotdb.apache.org/UserGuide/Master/Cluster/Deployment-Recommendation.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Deployment Recommendation"),e("OutboundLink")],1),t._v(":")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[e("strong",[t._v("Configuration")])]),t._v(" "),e("th",[e("strong",[t._v("Description")])]),t._v(" "),e("th",[e("strong",[t._v("Default")])])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("cluster_name")]),t._v(" "),e("td",[t._v("Cluster name for which the Node to join in")]),t._v(" "),e("td",[t._v("defaultCluster")])]),t._v(" "),e("tr",[e("td",[t._v("config_node_consensus_protocol_class")]),t._v(" "),e("td",[t._v("Consensus protocol of ConfigNode")]),t._v(" "),e("td",[t._v("org.apache.iotdb.consensus.ratis.RatisConsensus")])]),t._v(" "),e("tr",[e("td",[t._v("schema_replication_factor")]),t._v(" "),e("td",[t._v("Schema replication factor, no more than DataNode number")]),t._v(" "),e("td",[t._v("1")])]),t._v(" "),e("tr",[e("td",[t._v("schema_region_consensus_protocol_class")]),t._v(" "),e("td",[t._v("Consensus protocol of schema replicas")]),t._v(" "),e("td",[t._v("org.apache.iotdb.consensus.ratis.RatisConsensus")])]),t._v(" "),e("tr",[e("td",[t._v("data_replication_factor")]),t._v(" "),e("td",[t._v("Data replication factor, no more than DataNode number")]),t._v(" "),e("td",[t._v("1")])]),t._v(" "),e("tr",[e("td",[t._v("data_region_consensus_protocol_class")]),t._v(" "),e("td",[t._v("Consensus protocol of data replicas. Note that RatisConsensus currently does not support multiple data directories")]),t._v(" "),e("td",[t._v("org.apache.iotdb.consensus.iot.IoTConsensus")])])])]),t._v(" "),e("p",[e("strong",[t._v("Notice: The preceding configuration parameters cannot be changed after the cluster is started. Ensure that the common configurations of all Nodes are the same. Otherwise, the Nodes cannot be started.")])]),t._v(" "),e("h3",{attrs:{id:"_5-2-2-confignode-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-2-confignode-configuration"}},[t._v("#")]),t._v(" 5.2.2 ConfigNode configuration")]),t._v(" "),e("p",[t._v("Open the ConfigNode configuration file ./conf/iotdb-confignode.properties,\nand set the following parameters based on the IP address and available port of the server or VM:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[e("strong",[t._v("Configuration")])]),t._v(" "),e("th",[e("strong",[t._v("Description")])]),t._v(" "),e("th",[e("strong",[t._v("Default")])]),t._v(" "),e("th",[e("strong",[t._v("Usage")])])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("cn_internal_address")]),t._v(" "),e("td",[t._v("Internal rpc service address of ConfigNode")]),t._v(" "),e("td",[t._v("127.0.0.1")]),t._v(" "),e("td",[t._v("Set to the IPV4 address or domain name of the server")])]),t._v(" "),e("tr",[e("td",[t._v("cn_internal_port")]),t._v(" "),e("td",[t._v("Internal rpc service port of ConfigNode")]),t._v(" "),e("td",[t._v("10710")]),t._v(" "),e("td",[t._v("Set to any unoccupied port")])]),t._v(" "),e("tr",[e("td",[t._v("cn_consensus_port")]),t._v(" "),e("td",[t._v("ConfigNode replication consensus protocol communication port")]),t._v(" "),e("td",[t._v("10720")]),t._v(" "),e("td",[t._v("Set to any unoccupied port")])]),t._v(" "),e("tr",[e("td",[t._v("cn_target_config_node_list")]),t._v(" "),e("td",[t._v("ConfigNode address to which the node is connected when it is registered to the cluster. Note that Only one ConfigNode can be configured.")]),t._v(" "),e("td",[t._v("127.0.0.1:10710")]),t._v(" "),e("td",[t._v("For Seed-ConfigNode, set to its own cn_internal_address:cn_internal_port; For other ConfigNodes, set to other one running ConfigNode's cn_internal_address:cn_internal_port")])])])]),t._v(" "),e("p",[e("strong",[t._v("Notice: The preceding configuration parameters cannot be changed after the node is started. Ensure that all ports are not occupied. Otherwise, the Node cannot be started.")])]),t._v(" "),e("h3",{attrs:{id:"_5-2-3-datanode-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-3-datanode-configuration"}},[t._v("#")]),t._v(" 5.2.3 DataNode configuration")]),t._v(" "),e("p",[t._v("Open the DataNode configuration file ./conf/iotdb-datanode.properties,\nand set the following parameters based on the IP address and available port of the server or VM:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[e("strong",[t._v("Configuration")])]),t._v(" "),e("th",[e("strong",[t._v("Description")])]),t._v(" "),e("th",[e("strong",[t._v("Default")])]),t._v(" "),e("th",[e("strong",[t._v("Usage")])])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("dn_rpc_address")]),t._v(" "),e("td",[t._v("Client RPC Service address")]),t._v(" "),e("td",[t._v("127.0.0.1")]),t._v(" "),e("td",[t._v("Set to the IPV4 address or domain name of the server")])]),t._v(" "),e("tr",[e("td",[t._v("dn_rpc_port")]),t._v(" "),e("td",[t._v("Client RPC Service port")]),t._v(" "),e("td",[t._v("6667")]),t._v(" "),e("td",[t._v("Set to any unoccupied port")])]),t._v(" "),e("tr",[e("td",[t._v("dn_internal_address")]),t._v(" "),e("td",[t._v("Control flow address of DataNode inside cluster")]),t._v(" "),e("td",[t._v("127.0.0.1")]),t._v(" "),e("td",[t._v("Set to the IPV4 address or domain name of the server")])]),t._v(" "),e("tr",[e("td",[t._v("dn_internal_port")]),t._v(" "),e("td",[t._v("Control flow port of DataNode inside cluster")]),t._v(" "),e("td",[t._v("10730")]),t._v(" "),e("td",[t._v("Set to any unoccupied port")])]),t._v(" "),e("tr",[e("td",[t._v("dn_mpp_data_exchange_port")]),t._v(" "),e("td",[t._v("Data flow port of DataNode inside cluster")]),t._v(" "),e("td",[t._v("10740")]),t._v(" "),e("td",[t._v("Set to any unoccupied port")])]),t._v(" "),e("tr",[e("td",[t._v("dn_data_region_consensus_port")]),t._v(" "),e("td",[t._v("Data replicas communication port for consensus")]),t._v(" "),e("td",[t._v("10750")]),t._v(" "),e("td",[t._v("Set to any unoccupied port")])]),t._v(" "),e("tr",[e("td",[t._v("dn_schema_region_consensus_port")]),t._v(" "),e("td",[t._v("Schema replicas communication port for consensus")]),t._v(" "),e("td",[t._v("10760")]),t._v(" "),e("td",[t._v("Set to any unoccupied port")])]),t._v(" "),e("tr",[e("td",[t._v("dn_target_config_node_list")]),t._v(" "),e("td",[t._v("Running ConfigNode of the Cluster")]),t._v(" "),e("td",[t._v("127.0.0.1:10710")]),t._v(" "),e("td",[t._v('Set to any running ConfigNode\'s cn_internal_address:cn_internal_port. You can set multiple values, separate them with commas(",")')])])])]),t._v(" "),e("p",[e("strong",[t._v("Notice: The preceding configuration parameters cannot be changed after the node is started. Ensure that all ports are not occupied. Otherwise, the Node cannot be started.")])]),t._v(" "),e("h1",{attrs:{id:"_6-cluster-operation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-cluster-operation"}},[t._v("#")]),t._v(" 6. Cluster Operation")]),t._v(" "),e("h2",{attrs:{id:"_6-1-starting-the-cluster"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-starting-the-cluster"}},[t._v("#")]),t._v(" 6.1 Starting the cluster")]),t._v(" "),e("p",[t._v("This section describes how to start a cluster that includes several ConfigNodes and DataNodes.\nThe cluster can provide services only by starting at least one ConfigNode\nand no less than the number of data/schema_replication_factor DataNodes.")]),t._v(" "),e("p",[t._v("The total process are three steps:")]),t._v(" "),e("ul",[e("li",[t._v("Start the Seed-ConfigNode")]),t._v(" "),e("li",[t._v("Add ConfigNode (Optional)")]),t._v(" "),e("li",[t._v("Add DataNode")])]),t._v(" "),e("h3",{attrs:{id:"_6-1-1-start-the-seed-confignode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-1-start-the-seed-confignode"}},[t._v("#")]),t._v(" 6.1.1 Start the Seed-ConfigNode")]),t._v(" "),e("p",[e("strong",[t._v("The first Node started in the cluster must be ConfigNode. The first started ConfigNode must follow the tutorial in this section.")])]),t._v(" "),e("p",[t._v("The first ConfigNode to start is the Seed-ConfigNode, which marks the creation of the new cluster.\nBefore start the Seed-ConfigNode, please open the common configuration file ./conf/iotdb-common.properties and check the following parameters:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[e("strong",[t._v("Configuration")])]),t._v(" "),e("th",[e("strong",[t._v("Check")])])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("cluster_name")]),t._v(" "),e("td",[t._v("Is set to the expected name")])]),t._v(" "),e("tr",[e("td",[t._v("config_node_consensus_protocol_class")]),t._v(" "),e("td",[t._v("Is set to the expected consensus protocol")])]),t._v(" "),e("tr",[e("td",[t._v("schema_replication_factor")]),t._v(" "),e("td",[t._v("Is set to the expected schema replication count")])]),t._v(" "),e("tr",[e("td",[t._v("schema_region_consensus_protocol_class")]),t._v(" "),e("td",[t._v("Is set to the expected consensus protocol")])]),t._v(" "),e("tr",[e("td",[t._v("data_replication_factor")]),t._v(" "),e("td",[t._v("Is set to the expected data replication count")])]),t._v(" "),e("tr",[e("td",[t._v("data_region_consensus_protocol_class")]),t._v(" "),e("td",[t._v("Is set to the expected consensus protocol")])])])]),t._v(" "),e("p",[e("strong",[t._v("Notice:")]),t._v(" Please set these parameters carefully based on the "),e("a",{attrs:{href:"https://iotdb.apache.org/UserGuide/Master/Cluster/Deployment-Recommendation.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Deployment Recommendation"),e("OutboundLink")],1),t._v(".\nThese parameters are not modifiable after the Node first startup.")]),t._v(" "),e("p",[t._v("Then open its configuration file ./conf/iotdb-confignode.properties and check the following parameters:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[e("strong",[t._v("Configuration")])]),t._v(" "),e("th",[e("strong",[t._v("Check")])])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("cn_internal_address")]),t._v(" "),e("td",[t._v("Is set to the IPV4 address or domain name of the server")])]),t._v(" "),e("tr",[e("td",[t._v("cn_internal_port")]),t._v(" "),e("td",[t._v("The port isn't occupied")])]),t._v(" "),e("tr",[e("td",[t._v("cn_consensus_port")]),t._v(" "),e("td",[t._v("The port isn't occupied")])]),t._v(" "),e("tr",[e("td",[t._v("cn_target_config_node_list")]),t._v(" "),e("td",[t._v("Is set to its own internal communication address, which is cn_internal_address:cn_internal_port")])])])]),t._v(" "),e("p",[t._v("After checking, you can run the startup script on the server:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# Linux foreground\nbash ./sbin/start-confignode.sh\n\n# Linux background\nnohup bash ./sbin/start-confignode.sh >/dev/null 2>&1 &\n\n# Windows\n.\\sbin\\start-confignode.bat\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br")])]),e("p",[t._v("For more details about other configuration parameters of ConfigNode, see the\n"),e("a",{attrs:{href:"https://iotdb.apache.org/UserGuide/Master/Reference/ConfigNode-Config-Manual.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ConfigNode Configurations"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"_6-1-2-add-more-confignodes-optional"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-2-add-more-confignodes-optional"}},[t._v("#")]),t._v(" 6.1.2 Add more ConfigNodes (Optional)")]),t._v(" "),e("p",[e("strong",[t._v("The ConfigNode who isn't the first one started must follow the tutorial in this section.")])]),t._v(" "),e("p",[t._v("You can add more ConfigNodes to the cluster to ensure high availability of ConfigNodes.\nA common configuration is to add extra two ConfigNodes to make the cluster has three ConfigNodes.")]),t._v(" "),e("p",[t._v("Ensure that all configuration parameters in the ./conf/iotdb-common.properites are the same as those in the Seed-ConfigNode;\notherwise, it may fail to start or generate runtime errors.\nTherefore, please check the following parameters in common configuration file:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[e("strong",[t._v("Configuration")])]),t._v(" "),e("th",[e("strong",[t._v("Check")])])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("cluster_name")]),t._v(" "),e("td",[t._v("Is consistent with the Seed-ConfigNode")])]),t._v(" "),e("tr",[e("td",[t._v("config_node_consensus_protocol_class")]),t._v(" "),e("td",[t._v("Is consistent with the Seed-ConfigNode")])]),t._v(" "),e("tr",[e("td",[t._v("schema_replication_factor")]),t._v(" "),e("td",[t._v("Is consistent with the Seed-ConfigNode")])]),t._v(" "),e("tr",[e("td",[t._v("schema_region_consensus_protocol_class")]),t._v(" "),e("td",[t._v("Is consistent with the Seed-ConfigNode")])]),t._v(" "),e("tr",[e("td",[t._v("data_replication_factor")]),t._v(" "),e("td",[t._v("Is consistent with the Seed-ConfigNode")])]),t._v(" "),e("tr",[e("td",[t._v("data_region_consensus_protocol_class")]),t._v(" "),e("td",[t._v("Is consistent with the Seed-ConfigNode")])])])]),t._v(" "),e("p",[t._v("Then, please open its configuration file ./conf/iotdb-confignode.properties and check the following parameters:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[e("strong",[t._v("Configuration")])]),t._v(" "),e("th",[e("strong",[t._v("Check")])])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("cn_internal_address")]),t._v(" "),e("td",[t._v("Is set to the IPV4 address or domain name of the server")])]),t._v(" "),e("tr",[e("td",[t._v("cn_internal_port")]),t._v(" "),e("td",[t._v("The port isn't occupied")])]),t._v(" "),e("tr",[e("td",[t._v("cn_consensus_port")]),t._v(" "),e("td",[t._v("The port isn't occupied")])]),t._v(" "),e("tr",[e("td",[t._v("cn_target_config_node_list")]),t._v(" "),e("td",[t._v("Is set to the internal communication address of an other running ConfigNode. The internal communication address of the seed ConfigNode is recommended.")])])])]),t._v(" "),e("p",[t._v("After checking, you can run the startup script on the server:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# Linux foreground\nbash ./sbin/start-confignode.sh\n\n# Linux background\nnohup bash ./sbin/start-confignode.sh >/dev/null 2>&1 &\n\n# Windows\n.\\sbin\\start-confignode.bat\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br")])]),e("p",[t._v("For more details about other configuration parameters of ConfigNode, see the\n"),e("a",{attrs:{href:"https://iotdb.apache.org/UserGuide/Master/Reference/ConfigNode-Config-Manual.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ConfigNode Configurations"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"_6-1-3-start-datanode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-3-start-datanode"}},[t._v("#")]),t._v(" 6.1.3 Start DataNode")]),t._v(" "),e("p",[e("strong",[t._v("Before adding DataNodes, ensure that there exists at least one ConfigNode is running in the cluster.")])]),t._v(" "),e("p",[t._v("You can add any number of DataNodes to the cluster.\nBefore adding a new DataNode,")]),t._v(" "),e("p",[t._v("please open its common configuration file ./conf/iotdb-common.properties and check the following parameters:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[e("strong",[t._v("Configuration")])]),t._v(" "),e("th",[e("strong",[t._v("Check")])])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("cluster_name")]),t._v(" "),e("td",[t._v("Is consistent with the Seed-ConfigNode")])])])]),t._v(" "),e("p",[t._v("Then open its configuration file ./conf/iotdb-datanode.properties and check the following parameters:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[e("strong",[t._v("Configuration")])]),t._v(" "),e("th",[e("strong",[t._v("Check")])])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("dn_rpc_address")]),t._v(" "),e("td",[t._v("Is set to the IPV4 address or domain name of the server")])]),t._v(" "),e("tr",[e("td",[t._v("dn_rpc_port")]),t._v(" "),e("td",[t._v("The port isn't occupied")])]),t._v(" "),e("tr",[e("td",[t._v("dn_internal_address")]),t._v(" "),e("td",[t._v("Is set to the IPV4 address or domain name of the server")])]),t._v(" "),e("tr",[e("td",[t._v("dn_internal_port")]),t._v(" "),e("td",[t._v("The port isn't occupied")])]),t._v(" "),e("tr",[e("td",[t._v("dn_mpp_data_exchange_port")]),t._v(" "),e("td",[t._v("The port isn't occupied")])]),t._v(" "),e("tr",[e("td",[t._v("dn_data_region_consensus_port")]),t._v(" "),e("td",[t._v("The port isn't occupied")])]),t._v(" "),e("tr",[e("td",[t._v("dn_schema_region_consensus_port")]),t._v(" "),e("td",[t._v("The port isn't occupied")])]),t._v(" "),e("tr",[e("td",[t._v("dn_target_config_node_list")]),t._v(" "),e("td",[t._v("Is set to the internal communication address of other running ConfigNodes. The internal communication address of the seed ConfigNode is recommended.")])])])]),t._v(" "),e("p",[t._v("After checking, you can run the startup script on the server:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# Linux foreground\nbash ./sbin/start-datanode.sh\n\n# Linux background\nnohup bash ./sbin/start-datanode.sh >/dev/null 2>&1 &\n\n# Windows\n.\\sbin\\start-datanode.bat\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br")])]),e("p",[t._v("For more details about other configuration parameters of DataNode, see the\n"),e("a",{attrs:{href:"https://iotdb.apache.org/UserGuide/Master/Reference/DataNode-Config-Manual.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("DataNode Configurations"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[e("strong",[t._v("Notice: The cluster can provide services only if the number of its DataNodes is no less than the number of replicas(max{schema_replication_factor, data_replication_factor}).")])]),t._v(" "),e("h2",{attrs:{id:"_6-2-start-cli"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-start-cli"}},[t._v("#")]),t._v(" 6.2 Start Cli")]),t._v(" "),e("p",[t._v("If the cluster is in local environment, you can directly run the Cli startup script in the ./sbin directory:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# Linux\n./sbin/start-cli.sh\n\n# Windows\n.\\sbin\\start-cli.bat\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("p",[t._v("If you want to use the Cli to connect to a cluster in the production environment,\nPlease read the "),e("a",{attrs:{href:"https://iotdb.apache.org/UserGuide/Master/QuickStart/Command-Line-Interface.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cli manual"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"_6-3-verify-cluster"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-verify-cluster"}},[t._v("#")]),t._v(" 6.3 Verify Cluster")]),t._v(" "),e("p",[t._v("Use a 3C3D(3 ConfigNodes and 3 DataNodes) as an example.\nAssumed that the IP addresses of the 3 ConfigNodes are 192.168.1.10, 192.168.1.11 and 192.168.1.12, and the default ports 10710 and 10720 are used.\nAssumed that the IP addresses of the 3 DataNodes are 192.168.1.20, 192.168.1.21 and 192.168.1.22, and the default ports 6667, 10730, 10740, 10750 and 10760 are used.")]),t._v(" "),e("p",[t._v("After starting the cluster successfully according to chapter 6.1, you can run the "),e("code",[t._v("show cluster details")]),t._v(" command on the Cli, and you will see the following results:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("IoTDB> show cluster details\n+------+----------+-------+---------------+------------+-------------------+------------+-------+-------+-------------------+-----------------+\n|NodeID|  NodeType| Status|InternalAddress|InternalPort|ConfigConsensusPort|  RpcAddress|RpcPort|MppPort|SchemaConsensusPort|DataConsensusPort|\n+------+----------+-------+---------------+------------+-------------------+------------+-------+-------+-------------------+-----------------+\n|     0|ConfigNode|Running|   192.168.1.10|       10710|              10720|            |       |       |                   |                 |\n|     2|ConfigNode|Running|   192.168.1.11|       10710|              10720|            |       |       |                   |                 |\n|     3|ConfigNode|Running|   192.168.1.12|       10710|              10720|            |       |       |                   |                 |\n|     1|  DataNode|Running|   192.168.1.20|       10730|                   |192.168.1.20|   6667|  10740|              10750|            10760|\n|     4|  DataNode|Running|   192.168.1.21|       10730|                   |192.168.1.21|   6667|  10740|              10750|            10760|\n|     5|  DataNode|Running|   192.168.1.22|       10730|                   |192.168.1.22|   6667|  10740|              10750|            10760|\n+------+----------+-------+---------------+------------+-------------------+------------+-------+-------+-------------------+-----------------+\nTotal line number = 6\nIt costs 0.012s\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br")])]),e("p",[t._v("If the status of all Nodes is "),e("strong",[t._v("Running")]),t._v(", the cluster deployment is successful.\nOtherwise, read the run logs of the Node that fails to start and\ncheck the corresponding configuration parameters.")]),t._v(" "),e("h2",{attrs:{id:"_6-4-stop-iotdb"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-stop-iotdb"}},[t._v("#")]),t._v(" 6.4 Stop IoTDB")]),t._v(" "),e("p",[t._v("This section describes how to manually shut down the ConfigNode or DataNode process of the IoTDB.")]),t._v(" "),e("h3",{attrs:{id:"_6-4-1-stop-confignode-by-script"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-1-stop-confignode-by-script"}},[t._v("#")]),t._v(" 6.4.1 Stop ConfigNode by script")]),t._v(" "),e("p",[t._v("Run the stop ConfigNode script:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# Linux\n./sbin/stop-confignode.sh\n\n# Windows\n.\\sbin\\stop-confignode.bat\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("h3",{attrs:{id:"_6-4-2-stop-datanode-by-script"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-2-stop-datanode-by-script"}},[t._v("#")]),t._v(" 6.4.2 Stop DataNode by script")]),t._v(" "),e("p",[t._v("Run the stop DataNode script:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# Linux\n./sbin/stop-datanode.sh\n\n# Windows\n.\\sbin\\stop-datanode.bat\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("h3",{attrs:{id:"_6-4-3-kill-node-process"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-3-kill-node-process"}},[t._v("#")]),t._v(" 6.4.3 Kill Node process")]),t._v(" "),e("p",[t._v("Get the process number of the Node:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("jps\n\n# or\n\nps aux | grep iotdb\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("p",[t._v("Kill the process：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("kill -9 <pid>\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[e("strong",[t._v("Notice Some ports require root access, in which case use sudo")])]),t._v(" "),e("h2",{attrs:{id:"_6-5-shrink-the-cluster"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-5-shrink-the-cluster"}},[t._v("#")]),t._v(" 6.5 Shrink the Cluster")]),t._v(" "),e("p",[t._v("This section describes how to remove ConfigNode or DataNode from the cluster.")]),t._v(" "),e("h3",{attrs:{id:"_6-5-1-remove-confignode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-5-1-remove-confignode"}},[t._v("#")]),t._v(" 6.5.1 Remove ConfigNode")]),t._v(" "),e("p",[t._v("Before removing a ConfigNode, ensure that there is at least one active ConfigNode in the cluster after the removal.\nRun the remove-confignode script on an active ConfigNode:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# Linux\n# Remove the ConfigNode with confignode_id\n./sbin/remove-confignode.sh <confignode_id>\n\n# Remove the ConfigNode with address:port\n./sbin/remove-confignode.sh <cn_internal_address>:<cn_internal_port>\n\n\n# Windows\n# Remove the ConfigNode with confignode_id\n.\\sbin\\remove-confignode.bat <confignode_id>\n\n# Remove the ConfigNode with address:port\n.\\sbin\\remove-confignode.bat <cn_internal_address>:<cn_internal_portcn_internal_port>\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br")])]),e("h3",{attrs:{id:"_6-5-2-remove-datanode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-5-2-remove-datanode"}},[t._v("#")]),t._v(" 6.5.2 Remove DataNode")]),t._v(" "),e("p",[t._v("Before removing a DataNode, ensure that the cluster has at least the number of data/schema replicas DataNodes.\nRun the remove-datanode script on an active DataNode:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# Linux\n# Remove the DataNode with datanode_id\n./sbin/remove-datanode.sh <datanode_id>\n\n# Remove the DataNode with rpc address:port\n./sbin/remove-datanode.sh <dn_rpc_address>:<dn_rpc_port>\n\n\n# Windows\n# Remove the DataNode with datanode_id\n.\\sbin\\remove-datanode.bat <datanode_id>\n\n# Remove the DataNode with rpc address:port\n.\\sbin\\remove-datanode.bat <dn_rpc_address>:<dn_rpc_port>\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br")])]),e("h1",{attrs:{id:"_7-faq"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-faq"}},[t._v("#")]),t._v(" 7. FAQ")]),t._v(" "),e("p",[t._v("See "),e("a",{attrs:{href:"https://iotdb.apache.org/UserGuide/Master/FAQ/FAQ-for-cluster-setup.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("FAQ"),e("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=a.exports}}]);