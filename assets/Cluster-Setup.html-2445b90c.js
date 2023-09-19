import{_ as d,r as a,o as i,c as s,a as l,d as e,e as t,b as o,f as r}from"./app-d415a090.js";const c={},h=r('<h1 id="_1-purpose" tabindex="-1"><a class="header-anchor" href="#_1-purpose" aria-hidden="true">#</a> 1. Purpose</h1><p>This document describes how to install and start IoTDB Cluster (1.0.0).</p><h1 id="_2-prerequisites" tabindex="-1"><a class="header-anchor" href="#_2-prerequisites" aria-hidden="true">#</a> 2. Prerequisites</h1><ol><li>JDK&gt;=1.8.</li><li>Max open file 65535.</li><li>Disable the swap memory.</li><li>Ensure that data/confignode directory has been cleared when starting ConfigNode for the first time,<br> and data/datanode directory has been cleared when starting DataNode for the first time</li><li>Turn off the firewall of the server if the entire cluster is in a trusted environment.</li><li>By default, IoTDB Cluster will use ports 10710, 10720 for the ConfigNode and<br> 6667, 10730, 10740, 10750 and 10760 for the DataNode.<br> Please make sure those ports are not occupied, or you will modify the ports in configuration files.</li></ol><h1 id="_3-get-the-installation-package" tabindex="-1"><a class="header-anchor" href="#_3-get-the-installation-package" aria-hidden="true">#</a> 3. Get the Installation Package</h1><p>You can either download the binary release files (see Chap 3.1) or compile with source code (see Chap 3.2).</p><h2 id="_3-1-download-the-binary-distribution" tabindex="-1"><a class="header-anchor" href="#_3-1-download-the-binary-distribution" aria-hidden="true">#</a> 3.1 Download the binary distribution</h2>',7),u={href:"https://iotdb.apache.org/Download/",target:"_blank",rel:"noopener noreferrer"},p=e("li",null,"Download the binary distribution.",-1),g=e("li",null,"Decompress to get the apache-iotdb-1.0.0-all-bin directory.",-1),f=r(`<h2 id="_3-2-compile-with-source-code" tabindex="-1"><a class="header-anchor" href="#_3-2-compile-with-source-code" aria-hidden="true">#</a> 3.2 Compile with source code</h2><h3 id="_3-2-1-download-the-source-code" tabindex="-1"><a class="header-anchor" href="#_3-2-1-download-the-source-code" aria-hidden="true">#</a> 3.2.1 Download the source code</h3><p><strong>Git</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git clone https://github.com/apache/iotdb.git
git checkout v1.0.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Website</strong></p>`,5),b={href:"https://iotdb.apache.org/Download/",target:"_blank",rel:"noopener noreferrer"},m=e("li",null,"Download the source code.",-1),_=e("li",null,"Decompress to get the apache-iotdb-1.0.0 directory.",-1),v=r(`<h3 id="_3-2-2-compile-source-code" tabindex="-1"><a class="header-anchor" href="#_3-2-2-compile-source-code" aria-hidden="true">#</a> 3.2.2 Compile source code</h3><p>Under the source root folder:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mvn clean package -pl distribution -am -DskipTests
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Then you will get the binary distribution under<br><strong>distribution/target/apache-iotdb-1.0.0-SNAPSHOT-all-bin/apache-iotdb-1.0.0-SNAPSHOT-all-bin</strong>.</p><h1 id="_4-binary-distribution-content" tabindex="-1"><a class="header-anchor" href="#_4-binary-distribution-content" aria-hidden="true">#</a> 4. Binary Distribution Content</h1><table><thead><tr><th><strong>Folder</strong></th><th><strong>Description</strong></th></tr></thead><tbody><tr><td>conf</td><td>Configuration files folder, contains configuration files of ConfigNode, DataNode, JMX and logback</td></tr><tr><td>data</td><td>Data files folder, contains data files of ConfigNode and DataNode</td></tr><tr><td>lib</td><td>Jar files folder</td></tr><tr><td>licenses</td><td>Licenses files folder</td></tr><tr><td>logs</td><td>Logs files folder, contains logs files of ConfigNode and DataNode</td></tr><tr><td>sbin</td><td>Shell files folder, contains start/stop/remove shell of ConfigNode and DataNode, cli shell</td></tr><tr><td>tools</td><td>System tools</td></tr></tbody></table><h1 id="_5-cluster-installation-and-configuration" tabindex="-1"><a class="header-anchor" href="#_5-cluster-installation-and-configuration" aria-hidden="true">#</a> 5. Cluster Installation and Configuration</h1><h2 id="_5-1-cluster-installation" tabindex="-1"><a class="header-anchor" href="#_5-1-cluster-installation" aria-hidden="true">#</a> 5.1 Cluster Installation</h2><p><code>apache-iotdb-1.0.0-SNAPSHOT-all-bin</code> contains both the ConfigNode and the DataNode.<br> Please deploy the files to all servers of your target cluster.<br> A best practice is deploying the files into the same directory in all servers.</p>`,9),N=e("br",null,null,-1),C={href:"https://iotdb.apache.org/UserGuide/Master/QuickStart/ClusterQuickStart.html",target:"_blank",rel:"noopener noreferrer"},x=r('<h2 id="_5-2-cluster-configuration" tabindex="-1"><a class="header-anchor" href="#_5-2-cluster-configuration" aria-hidden="true">#</a> 5.2 Cluster Configuration</h2><p>We need to modify the configurations on each server.<br> Therefore, login each server and switch the working directory to <code>apache-iotdb-1.0.0-SNAPSHOT-all-bin</code>.<br> The configuration files are stored in the <code>./conf</code> directory.</p><p>For all ConfigNode servers, we need to modify the common configuration (see Chap 5.2.1)<br> and ConfigNode configuration (see Chap 5.2.2).</p><p>For all DataNode servers, we need to modify the common configuration (see Chap 5.2.1)<br> and DataNode configuration (see Chap 5.2.3).</p><h3 id="_5-2-1-common-configuration" tabindex="-1"><a class="header-anchor" href="#_5-2-1-common-configuration" aria-hidden="true">#</a> 5.2.1 Common configuration</h3>',5),w=e("br",null,null,-1),y=e("br",null,null,-1),D={href:"https://iotdb.apache.org/UserGuide/Master/Cluster/Deployment-Recommendation.html",target:"_blank",rel:"noopener noreferrer"},S=r('<table><thead><tr><th><strong>Configuration</strong></th><th><strong>Description</strong></th><th><strong>Default</strong></th></tr></thead><tbody><tr><td>cluster_name</td><td>Cluster name for which the Node to join in</td><td>defaultCluster</td></tr><tr><td>config_node_consensus_protocol_class</td><td>Consensus protocol of ConfigNode</td><td>org.apache.iotdb.consensus.ratis.RatisConsensus</td></tr><tr><td>schema_replication_factor</td><td>Schema replication factor, no more than DataNode number</td><td>1</td></tr><tr><td>schema_region_consensus_protocol_class</td><td>Consensus protocol of schema replicas</td><td>org.apache.iotdb.consensus.ratis.RatisConsensus</td></tr><tr><td>data_replication_factor</td><td>Data replication factor, no more than DataNode number</td><td>1</td></tr><tr><td>data_region_consensus_protocol_class</td><td>Consensus protocol of data replicas. Note that RatisConsensus currently does not support multiple data directories</td><td>org.apache.iotdb.consensus.iot.IoTConsensus</td></tr></tbody></table><p><strong>Notice: The preceding configuration parameters cannot be changed after the cluster is started. Ensure that the common configurations of all Nodes are the same. Otherwise, the Nodes cannot be started.</strong></p><h3 id="_5-2-2-confignode-configuration" tabindex="-1"><a class="header-anchor" href="#_5-2-2-confignode-configuration" aria-hidden="true">#</a> 5.2.2 ConfigNode configuration</h3><p>Open the ConfigNode configuration file ./conf/iotdb-confignode.properties,<br> and set the following parameters based on the IP address and available port of the server or VM:</p><table><thead><tr><th><strong>Configuration</strong></th><th><strong>Description</strong></th><th><strong>Default</strong></th><th><strong>Usage</strong></th></tr></thead><tbody><tr><td>cn_internal_address</td><td>Internal rpc service address of ConfigNode</td><td>127.0.0.1</td><td>Set to the IPV4 address or domain name of the server</td></tr><tr><td>cn_internal_port</td><td>Internal rpc service port of ConfigNode</td><td>10710</td><td>Set to any unoccupied port</td></tr><tr><td>cn_consensus_port</td><td>ConfigNode replication consensus protocol communication port</td><td>10720</td><td>Set to any unoccupied port</td></tr><tr><td>cn_target_config_node_list</td><td>ConfigNode address to which the node is connected when it is registered to the cluster. Note that Only one ConfigNode can be configured.</td><td>127.0.0.1:10710</td><td>For Seed-ConfigNode, set to its own cn_internal_address:cn_internal_port; For other ConfigNodes, set to other one running ConfigNode&#39;s cn_internal_address:cn_internal_port</td></tr></tbody></table><p><strong>Notice: The preceding configuration parameters cannot be changed after the node is started. Ensure that all ports are not occupied. Otherwise, the Node cannot be started.</strong></p><h3 id="_5-2-3-datanode-configuration" tabindex="-1"><a class="header-anchor" href="#_5-2-3-datanode-configuration" aria-hidden="true">#</a> 5.2.3 DataNode configuration</h3><p>Open the DataNode configuration file ./conf/iotdb-datanode.properties,<br> and set the following parameters based on the IP address and available port of the server or VM:</p><table><thead><tr><th><strong>Configuration</strong></th><th><strong>Description</strong></th><th><strong>Default</strong></th><th><strong>Usage</strong></th></tr></thead><tbody><tr><td>dn_rpc_address</td><td>Client RPC Service address</td><td>127.0.0.1</td><td>Set to the IPV4 address or domain name of the server</td></tr><tr><td>dn_rpc_port</td><td>Client RPC Service port</td><td>6667</td><td>Set to any unoccupied port</td></tr><tr><td>dn_internal_address</td><td>Control flow address of DataNode inside cluster</td><td>127.0.0.1</td><td>Set to the IPV4 address or domain name of the server</td></tr><tr><td>dn_internal_port</td><td>Control flow port of DataNode inside cluster</td><td>10730</td><td>Set to any unoccupied port</td></tr><tr><td>dn_mpp_data_exchange_port</td><td>Data flow port of DataNode inside cluster</td><td>10740</td><td>Set to any unoccupied port</td></tr><tr><td>dn_data_region_consensus_port</td><td>Data replicas communication port for consensus</td><td>10750</td><td>Set to any unoccupied port</td></tr><tr><td>dn_schema_region_consensus_port</td><td>Schema replicas communication port for consensus</td><td>10760</td><td>Set to any unoccupied port</td></tr><tr><td>dn_target_config_node_list</td><td>Running ConfigNode of the Cluster</td><td>127.0.0.1:10710</td><td>Set to any running ConfigNode&#39;s cn_internal_address:cn_internal_port. You can set multiple values, separate them with commas(&quot;,&quot;)</td></tr></tbody></table><p><strong>Notice: The preceding configuration parameters cannot be changed after the node is started. Ensure that all ports are not occupied. Otherwise, the Node cannot be started.</strong></p><h1 id="_6-cluster-operation" tabindex="-1"><a class="header-anchor" href="#_6-cluster-operation" aria-hidden="true">#</a> 6. Cluster Operation</h1><h2 id="_6-1-starting-the-cluster" tabindex="-1"><a class="header-anchor" href="#_6-1-starting-the-cluster" aria-hidden="true">#</a> 6.1 Starting the cluster</h2><p>This section describes how to start a cluster that includes several ConfigNodes and DataNodes.<br> The cluster can provide services only by starting at least one ConfigNode<br> and no less than the number of data/schema_replication_factor DataNodes.</p><p>The total process are three steps:</p><ul><li>Start the Seed-ConfigNode</li><li>Add ConfigNode (Optional)</li><li>Add DataNode</li></ul><h3 id="_6-1-1-start-the-seed-confignode" tabindex="-1"><a class="header-anchor" href="#_6-1-1-start-the-seed-confignode" aria-hidden="true">#</a> 6.1.1 Start the Seed-ConfigNode</h3><p><strong>The first Node started in the cluster must be ConfigNode. The first started ConfigNode must follow the tutorial in this section.</strong></p><p>The first ConfigNode to start is the Seed-ConfigNode, which marks the creation of the new cluster.<br> Before start the Seed-ConfigNode, please open the common configuration file ./conf/iotdb-common.properties and check the following parameters:</p><table><thead><tr><th><strong>Configuration</strong></th><th><strong>Check</strong></th></tr></thead><tbody><tr><td>cluster_name</td><td>Is set to the expected name</td></tr><tr><td>config_node_consensus_protocol_class</td><td>Is set to the expected consensus protocol</td></tr><tr><td>schema_replication_factor</td><td>Is set to the expected schema replication count</td></tr><tr><td>schema_region_consensus_protocol_class</td><td>Is set to the expected consensus protocol</td></tr><tr><td>data_replication_factor</td><td>Is set to the expected data replication count</td></tr><tr><td>data_region_consensus_protocol_class</td><td>Is set to the expected consensus protocol</td></tr></tbody></table>',19),I=e("strong",null,"Notice:",-1),k={href:"https://iotdb.apache.org/UserGuide/Master/Cluster/Deployment-Recommendation.html",target:"_blank",rel:"noopener noreferrer"},T=e("br",null,null,-1),R=r(`<p>Then open its configuration file ./conf/iotdb-confignode.properties and check the following parameters:</p><table><thead><tr><th><strong>Configuration</strong></th><th><strong>Check</strong></th></tr></thead><tbody><tr><td>cn_internal_address</td><td>Is set to the IPV4 address or domain name of the server</td></tr><tr><td>cn_internal_port</td><td>The port isn&#39;t occupied</td></tr><tr><td>cn_consensus_port</td><td>The port isn&#39;t occupied</td></tr><tr><td>cn_target_config_node_list</td><td>Is set to its own internal communication address, which is cn_internal_address:cn_internal_port</td></tr></tbody></table><p>After checking, you can run the startup script on the server:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Linux foreground
bash ./sbin/start-confignode.sh

# Linux background
nohup bash ./sbin/start-confignode.sh &gt;/dev/null 2&gt;&amp;1 &amp;

# Windows
.\\sbin\\start-confignode.bat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),P=e("br",null,null,-1),A={href:"https://iotdb.apache.org/UserGuide/Master/Reference/ConfigNode-Config-Manual.html",target:"_blank",rel:"noopener noreferrer"},L=r(`<h3 id="_6-1-2-add-more-confignodes-optional" tabindex="-1"><a class="header-anchor" href="#_6-1-2-add-more-confignodes-optional" aria-hidden="true">#</a> 6.1.2 Add more ConfigNodes (Optional)</h3><p><strong>The ConfigNode who isn&#39;t the first one started must follow the tutorial in this section.</strong></p><p>You can add more ConfigNodes to the cluster to ensure high availability of ConfigNodes.<br> A common configuration is to add extra two ConfigNodes to make the cluster has three ConfigNodes.</p><p>Ensure that all configuration parameters in the ./conf/iotdb-common.properites are the same as those in the Seed-ConfigNode;<br> otherwise, it may fail to start or generate runtime errors.<br> Therefore, please check the following parameters in common configuration file:</p><table><thead><tr><th><strong>Configuration</strong></th><th><strong>Check</strong></th></tr></thead><tbody><tr><td>cluster_name</td><td>Is consistent with the Seed-ConfigNode</td></tr><tr><td>config_node_consensus_protocol_class</td><td>Is consistent with the Seed-ConfigNode</td></tr><tr><td>schema_replication_factor</td><td>Is consistent with the Seed-ConfigNode</td></tr><tr><td>schema_region_consensus_protocol_class</td><td>Is consistent with the Seed-ConfigNode</td></tr><tr><td>data_replication_factor</td><td>Is consistent with the Seed-ConfigNode</td></tr><tr><td>data_region_consensus_protocol_class</td><td>Is consistent with the Seed-ConfigNode</td></tr></tbody></table><p>Then, please open its configuration file ./conf/iotdb-confignode.properties and check the following parameters:</p><table><thead><tr><th><strong>Configuration</strong></th><th><strong>Check</strong></th></tr></thead><tbody><tr><td>cn_internal_address</td><td>Is set to the IPV4 address or domain name of the server</td></tr><tr><td>cn_internal_port</td><td>The port isn&#39;t occupied</td></tr><tr><td>cn_consensus_port</td><td>The port isn&#39;t occupied</td></tr><tr><td>cn_target_config_node_list</td><td>Is set to the internal communication address of an other running ConfigNode. The internal communication address of the seed ConfigNode is recommended.</td></tr></tbody></table><p>After checking, you can run the startup script on the server:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Linux foreground
bash ./sbin/start-confignode.sh

# Linux background
nohup bash ./sbin/start-confignode.sh &gt;/dev/null 2&gt;&amp;1 &amp;

# Windows
.\\sbin\\start-confignode.bat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),O=e("br",null,null,-1),B={href:"https://iotdb.apache.org/UserGuide/Master/Reference/ConfigNode-Config-Manual.html",target:"_blank",rel:"noopener noreferrer"},F=r(`<h3 id="_6-1-3-start-datanode" tabindex="-1"><a class="header-anchor" href="#_6-1-3-start-datanode" aria-hidden="true">#</a> 6.1.3 Start DataNode</h3><p><strong>Before adding DataNodes, ensure that there exists at least one ConfigNode is running in the cluster.</strong></p><p>You can add any number of DataNodes to the cluster.<br> Before adding a new DataNode,</p><p>please open its common configuration file ./conf/iotdb-common.properties and check the following parameters:</p><table><thead><tr><th><strong>Configuration</strong></th><th><strong>Check</strong></th></tr></thead><tbody><tr><td>cluster_name</td><td>Is consistent with the Seed-ConfigNode</td></tr></tbody></table><p>Then open its configuration file ./conf/iotdb-datanode.properties and check the following parameters:</p><table><thead><tr><th><strong>Configuration</strong></th><th><strong>Check</strong></th></tr></thead><tbody><tr><td>dn_rpc_address</td><td>Is set to the IPV4 address or domain name of the server</td></tr><tr><td>dn_rpc_port</td><td>The port isn&#39;t occupied</td></tr><tr><td>dn_internal_address</td><td>Is set to the IPV4 address or domain name of the server</td></tr><tr><td>dn_internal_port</td><td>The port isn&#39;t occupied</td></tr><tr><td>dn_mpp_data_exchange_port</td><td>The port isn&#39;t occupied</td></tr><tr><td>dn_data_region_consensus_port</td><td>The port isn&#39;t occupied</td></tr><tr><td>dn_schema_region_consensus_port</td><td>The port isn&#39;t occupied</td></tr><tr><td>dn_target_config_node_list</td><td>Is set to the internal communication address of other running ConfigNodes. The internal communication address of the seed ConfigNode is recommended.</td></tr></tbody></table><p>After checking, you can run the startup script on the server:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Linux foreground
bash ./sbin/start-datanode.sh

# Linux background
nohup bash ./sbin/start-datanode.sh &gt;/dev/null 2&gt;&amp;1 &amp;

# Windows
.\\sbin\\start-datanode.bat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),M=e("br",null,null,-1),V={href:"https://iotdb.apache.org/UserGuide/Master/Reference/DataNode-Config-Manual.html",target:"_blank",rel:"noopener noreferrer"},U=r(`<p><strong>Notice: The cluster can provide services only if the number of its DataNodes is no less than the number of replicas(max{schema_replication_factor, data_replication_factor}).</strong></p><h2 id="_6-2-start-cli" tabindex="-1"><a class="header-anchor" href="#_6-2-start-cli" aria-hidden="true">#</a> 6.2 Start Cli</h2><p>If the cluster is in local environment, you can directly run the Cli startup script in the ./sbin directory:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Linux
./sbin/start-cli.sh

# Windows
.\\sbin\\start-cli.bat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),E=e("br",null,null,-1),W={href:"https://iotdb.apache.org/UserGuide/Master/QuickStart/Command-Line-Interface.html",target:"_blank",rel:"noopener noreferrer"},G=r(`<h2 id="_6-3-verify-cluster" tabindex="-1"><a class="header-anchor" href="#_6-3-verify-cluster" aria-hidden="true">#</a> 6.3 Verify Cluster</h2><p>Use a 3C3D(3 ConfigNodes and 3 DataNodes) as an example.<br> Assumed that the IP addresses of the 3 ConfigNodes are 192.168.1.10, 192.168.1.11 and 192.168.1.12, and the default ports 10710 and 10720 are used.<br> Assumed that the IP addresses of the 3 DataNodes are 192.168.1.20, 192.168.1.21 and 192.168.1.22, and the default ports 6667, 10730, 10740, 10750 and 10760 are used.</p><p>After starting the cluster successfully according to chapter 6.1, you can run the <code>show cluster details</code> command on the Cli, and you will see the following results:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show cluster details
+------+----------+-------+---------------+------------+-------------------+------------+-------+-------+-------------------+-----------------+
|NodeID|  NodeType| Status|InternalAddress|InternalPort|ConfigConsensusPort|  RpcAddress|RpcPort|MppPort|SchemaConsensusPort|DataConsensusPort|
+------+----------+-------+---------------+------------+-------------------+------------+-------+-------+-------------------+-----------------+
|     0|ConfigNode|Running|   192.168.1.10|       10710|              10720|            |       |       |                   |                 |
|     2|ConfigNode|Running|   192.168.1.11|       10710|              10720|            |       |       |                   |                 |
|     3|ConfigNode|Running|   192.168.1.12|       10710|              10720|            |       |       |                   |                 |
|     1|  DataNode|Running|   192.168.1.20|       10730|                   |192.168.1.20|   6667|  10740|              10750|            10760|
|     4|  DataNode|Running|   192.168.1.21|       10730|                   |192.168.1.21|   6667|  10740|              10750|            10760|
|     5|  DataNode|Running|   192.168.1.22|       10730|                   |192.168.1.22|   6667|  10740|              10750|            10760|
+------+----------+-------+---------------+------------+-------------------+------------+-------+-------+-------------------+-----------------+
Total line number = 6
It costs 0.012s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If the status of all Nodes is <strong>Running</strong>, the cluster deployment is successful.<br> Otherwise, read the run logs of the Node that fails to start and<br> check the corresponding configuration parameters.</p><h2 id="_6-4-stop-iotdb" tabindex="-1"><a class="header-anchor" href="#_6-4-stop-iotdb" aria-hidden="true">#</a> 6.4 Stop IoTDB</h2><p>This section describes how to manually shut down the ConfigNode or DataNode process of the IoTDB.</p><h3 id="_6-4-1-stop-confignode-by-script" tabindex="-1"><a class="header-anchor" href="#_6-4-1-stop-confignode-by-script" aria-hidden="true">#</a> 6.4.1 Stop ConfigNode by script</h3><p>Run the stop ConfigNode script:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Linux
./sbin/stop-confignode.sh

# Windows
.\\sbin\\stop-confignode.bat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-4-2-stop-datanode-by-script" tabindex="-1"><a class="header-anchor" href="#_6-4-2-stop-datanode-by-script" aria-hidden="true">#</a> 6.4.2 Stop DataNode by script</h3><p>Run the stop DataNode script:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Linux
./sbin/stop-datanode.sh

# Windows
.\\sbin\\stop-datanode.bat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-4-3-kill-node-process" tabindex="-1"><a class="header-anchor" href="#_6-4-3-kill-node-process" aria-hidden="true">#</a> 6.4.3 Kill Node process</h3><p>Get the process number of the Node:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>jps

# or

ps aux | grep iotdb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Kill the process：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kill -9 &lt;pid&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Notice Some ports require root access, in which case use sudo</strong></p><h2 id="_6-5-shrink-the-cluster" tabindex="-1"><a class="header-anchor" href="#_6-5-shrink-the-cluster" aria-hidden="true">#</a> 6.5 Shrink the Cluster</h2><p>This section describes how to remove ConfigNode or DataNode from the cluster.</p><h3 id="_6-5-1-remove-confignode" tabindex="-1"><a class="header-anchor" href="#_6-5-1-remove-confignode" aria-hidden="true">#</a> 6.5.1 Remove ConfigNode</h3><p>Before removing a ConfigNode, ensure that there is at least one active ConfigNode in the cluster after the removal.<br> Run the remove-confignode script on an active ConfigNode:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Linux
# Remove the ConfigNode with confignode_id
./sbin/remove-confignode.sh &lt;confignode_id&gt;

# Remove the ConfigNode with address:port
./sbin/remove-confignode.sh &lt;cn_internal_address&gt;:&lt;cn_internal_port&gt;


# Windows
# Remove the ConfigNode with confignode_id
.\\sbin\\remove-confignode.bat &lt;confignode_id&gt;

# Remove the ConfigNode with address:port
.\\sbin\\remove-confignode.bat &lt;cn_internal_address&gt;:&lt;cn_internal_portcn_internal_port&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-5-2-remove-datanode" tabindex="-1"><a class="header-anchor" href="#_6-5-2-remove-datanode" aria-hidden="true">#</a> 6.5.2 Remove DataNode</h3><p>Before removing a DataNode, ensure that the cluster has at least the number of data/schema replicas DataNodes.<br> Run the remove-datanode script on an active DataNode:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Linux
# Remove the DataNode with datanode_id
./sbin/remove-datanode.sh &lt;datanode_id&gt;

# Remove the DataNode with rpc address:port
./sbin/remove-datanode.sh &lt;dn_rpc_address&gt;:&lt;dn_rpc_port&gt;


# Windows
# Remove the DataNode with datanode_id
.\\sbin\\remove-datanode.bat &lt;datanode_id&gt;

# Remove the DataNode with rpc address:port
.\\sbin\\remove-datanode.bat &lt;dn_rpc_address&gt;:&lt;dn_rpc_port&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_7-faq" tabindex="-1"><a class="header-anchor" href="#_7-faq" aria-hidden="true">#</a> 7. FAQ</h1>`,28),q={href:"https://iotdb.apache.org/UserGuide/Master/FAQ/FAQ-for-cluster-setup.html",target:"_blank",rel:"noopener noreferrer"};function Q(Y,H){const n=a("ExternalLinkIcon");return i(),s("div",null,[l(`

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

`),h,e("ol",null,[e("li",null,[t("Open our website "),e("a",u,[t("Download Page"),o(n)]),t(".")]),p,g]),f,e("ol",null,[e("li",null,[t("Open our website "),e("a",b,[t("Download Page"),o(n)]),t(".")]),m,_]),v,e("p",null,[t("If you want to try the cluster mode on one server, please read"),N,e("a",C,[t("Cluster Quick Start"),o(n)]),t(".")]),x,e("p",null,[t("Open the common configuration file ./conf/iotdb-common.properties,"),w,t(" and set the following parameters base on the"),y,e("a",D,[t("Deployment Recommendation"),o(n)]),t(":")]),S,e("p",null,[I,t(" Please set these parameters carefully based on the "),e("a",k,[t("Deployment Recommendation"),o(n)]),t("."),T,t(" These parameters are not modifiable after the Node first startup.")]),R,e("p",null,[t("For more details about other configuration parameters of ConfigNode, see the"),P,e("a",A,[t("ConfigNode Configurations"),o(n)]),t(".")]),L,e("p",null,[t("For more details about other configuration parameters of ConfigNode, see the"),O,e("a",B,[t("ConfigNode Configurations"),o(n)]),t(".")]),F,e("p",null,[t("For more details about other configuration parameters of DataNode, see the"),M,e("a",V,[t("DataNode Configurations"),o(n)]),t(".")]),U,e("p",null,[t("If you want to use the Cli to connect to a cluster in the production environment,"),E,t(" Please read the "),e("a",W,[t("Cli manual"),o(n)]),t(".")]),G,e("p",null,[t("See "),e("a",q,[t("FAQ"),o(n)])])])}const J=d(c,[["render",Q],["__file","Cluster-Setup.html.vue"]]);export{J as default};
