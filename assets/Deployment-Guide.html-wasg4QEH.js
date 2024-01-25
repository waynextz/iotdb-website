import{_ as o,r as s,o as l,c,a as h,d as e,e as t,b as d,w as r,f as n}from"./app-F10OrnbD.js";const u={},b=e("h1",{id:"部署指导",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#部署指导","aria-hidden":"true"},"#"),t(" 部署指导")],-1),g=e("h2",{id:"单机版部署",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#单机版部署","aria-hidden":"true"},"#"),t(" 单机版部署")],-1),v=e("h3",{id:"安装环境",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装环境","aria-hidden":"true"},"#"),t(" 安装环境")],-1),p=e("p",null,"安装前需要保证设备上配有 JDK>=1.8 的运行环境，并配置好 JAVA_HOME 环境变量。",-1),_=e("p",null,"设置最大文件打开数为 65535。",-1),m=e("h3",{id:"安装步骤",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装步骤","aria-hidden":"true"},"#"),t(" 安装步骤")],-1),f=e("p",null,"IoTDB 支持多种安装途径。用户可以使用三种方式对 IoTDB 进行安装——下载二进制可运行程序、使用源码、使用 docker 镜像。",-1),N=e("li",null,[e("p",null,"使用源码：您可以从代码仓库下载源码并编译，具体编译方法见下方。")],-1),x={href:"https://iotdb.apache.org/Download/",target:"_blank",rel:"noopener noreferrer"},C={href:"https://github.com/apache/iotdb/blob/master/docker/src/main",target:"_blank",rel:"noopener noreferrer"},D=n(`<h3 id="软件目录结构" tabindex="-1"><a class="header-anchor" href="#软件目录结构" aria-hidden="true">#</a> 软件目录结构</h3><ul><li>sbin 启动和停止脚本目录</li><li>conf 配置文件目录</li><li>tools 系统工具目录</li><li>lib 依赖包目录</li></ul><h3 id="iotdb-试用" tabindex="-1"><a class="header-anchor" href="#iotdb-试用" aria-hidden="true">#</a> IoTDB 试用</h3><p>用户可以根据以下操作对 IoTDB 进行简单的试用，若以下操作均无误，则说明 IoTDB 安装成功。</p><h4 id="启动-iotdb" tabindex="-1"><a class="header-anchor" href="#启动-iotdb" aria-hidden="true">#</a> 启动 IoTDB</h4><p>IoTDB 是一个基于分布式系统的数据库。要启动 IoTDB ，你可以先启动单机版（一个 ConfigNode 和一个 DataNode）来检查安装。</p><p>用户可以使用 sbin 文件夹下的 start-standalone 脚本启动 IoTDB。</p><p>Linux 系统与 MacOS 系统启动命令如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt; bash sbin/start-standalone.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Windows 系统启动命令如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt; sbin\\start-standalone.bat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="集群版部署" tabindex="-1"><a class="header-anchor" href="#集群版部署" aria-hidden="true">#</a> 集群版部署</h2><p>以本地环境为例，演示 IoTDB 集群的启动、扩容与缩容。</p><p><strong>注意：本文档为使用本地不同端口，进行伪分布式环境部署的教程，仅用于练习。在真实环境部署时，一般不需要修改节点端口，仅需配置节点 IPV4 地址或域名即可。</strong></p><h3 id="_1-准备启动环境" tabindex="-1"><a class="header-anchor" href="#_1-准备启动环境" aria-hidden="true">#</a> 1. 准备启动环境</h3><p>解压 apache-iotdb-1.0.0-all-bin.zip 至 cluster0 目录。</p><h3 id="_2-启动最小集群" tabindex="-1"><a class="header-anchor" href="#_2-启动最小集群" aria-hidden="true">#</a> 2. 启动最小集群</h3><p>在 Linux 环境中，部署 1 个 ConfigNode 和 1 个 DataNode（1C1D）集群版，默认 1 副本：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./cluster0/sbin/start-confignode.sh
./cluster0/sbin/start-datanode.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-验证最小集群" tabindex="-1"><a class="header-anchor" href="#_3-验证最小集群" aria-hidden="true">#</a> 3. 验证最小集群</h3><ul><li>最小集群启动成功，启动 Cli 进行验证：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./cluster0/sbin/start-cli.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,22),I={href:"https://iotdb.apache.org/zh/UserGuide/Master/Maintenance-Tools/Maintenance-Command.html#%E6%9F%A5%E7%9C%8B%E5%85%A8%E9%83%A8%E8%8A%82%E7%82%B9%E4%BF%A1%E6%81%AF",target:"_blank",rel:"noopener noreferrer"},S=e("br",null,null,-1),P=n(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show cluster details
+------+----------+-------+---------------+------------+-------------------+----------+-------+--------+-------------------+-----------------+
|NodeID|  NodeType| Status|InternalAddress|InternalPort|ConfigConsensusPort|RpcAddress|RpcPort|MppPort |SchemaConsensusPort|DataConsensusPort|
+------+----------+-------+---------------+------------+-------------------+----------+-------+--------+-------------------+-----------------+
|     0|ConfigNode|Running|      127.0.0.1|       10710|              10720|          |       |        |                   |                 |
|     1|  DataNode|Running|      127.0.0.1|       10730|                   | 127.0.0.1|   6667|   10740|              10750|            10760|
+------+----------+-------+---------------+------------+-------------------+----------+-------+--------+-------------------+-----------------+
Total line number = 2
It costs 0.242s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-准备扩容环境" tabindex="-1"><a class="header-anchor" href="#_4-准备扩容环境" aria-hidden="true">#</a> 4. 准备扩容环境</h3><p>解压 apache-iotdb-1.0.0-all-bin.zip 至 cluster1 目录和 cluster2 目录</p><h3 id="_5-修改节点配置文件" tabindex="-1"><a class="header-anchor" href="#_5-修改节点配置文件" aria-hidden="true">#</a> 5. 修改节点配置文件</h3><p>对于 cluster1 目录：</p><ul><li>修改 ConfigNode 配置：</li></ul><table><thead><tr><th><strong>配置项</strong></th><th><strong>值</strong></th></tr></thead><tbody><tr><td>cn_internal_address</td><td>127.0.0.1</td></tr><tr><td>cn_internal_port</td><td>10711</td></tr><tr><td>cn_consensus_port</td><td>10721</td></tr><tr><td>cn_target_config_node_list</td><td>127.0.0.1:10710</td></tr></tbody></table><ul><li>修改 DataNode 配置：</li></ul><table><thead><tr><th><strong>配置项</strong></th><th><strong>值</strong></th></tr></thead><tbody><tr><td>dn_rpc_address</td><td>127.0.0.1</td></tr><tr><td>dn_rpc_port</td><td>6668</td></tr><tr><td>dn_internal_address</td><td>127.0.0.1</td></tr><tr><td>dn_internal_port</td><td>10731</td></tr><tr><td>dn_mpp_data_exchange_port</td><td>10741</td></tr><tr><td>dn_schema_region_consensus_port</td><td>10751</td></tr><tr><td>dn_data_region_consensus_port</td><td>10761</td></tr><tr><td>dn_target_config_node_list</td><td>127.0.0.1:10710</td></tr></tbody></table><p>对于 cluster2 目录：</p><ul><li>修改 ConfigNode 配置：</li></ul><table><thead><tr><th><strong>配置项</strong></th><th><strong>值</strong></th></tr></thead><tbody><tr><td>cn_internal_address</td><td>127.0.0.1</td></tr><tr><td>cn_internal_port</td><td>10712</td></tr><tr><td>cn_consensus_port</td><td>10722</td></tr><tr><td>cn_target_config_node_list</td><td>127.0.0.1:10710</td></tr></tbody></table><ul><li>修改 DataNode 配置：</li></ul><table><thead><tr><th><strong>配置项</strong></th><th><strong>值</strong></th></tr></thead><tbody><tr><td>dn_rpc_address</td><td>127.0.0.1</td></tr><tr><td>dn_rpc_port</td><td>6669</td></tr><tr><td>dn_internal_address</td><td>127.0.0.1</td></tr><tr><td>dn_internal_port</td><td>10732</td></tr><tr><td>dn_mpp_data_exchange_port</td><td>10742</td></tr><tr><td>dn_schema_region_consensus_port</td><td>10752</td></tr><tr><td>dn_data_region_consensus_port</td><td>10762</td></tr><tr><td>dn_target_config_node_list</td><td>127.0.0.1:10710</td></tr></tbody></table><h3 id="_6-集群扩容" tabindex="-1"><a class="header-anchor" href="#_6-集群扩容" aria-hidden="true">#</a> 6. 集群扩容</h3><p>将集群扩容至 3 个 ConfigNode 和 3 个 DataNode（3C3D）集群版，<br> 指令执行顺序为先启动 ConfigNode，再启动 DataNode：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./cluster1/sbin/start-confignode.sh
./cluster2/sbin/start-confignode.sh
./cluster1/sbin/start-datanode.sh
./cluster2/sbin/start-datanode.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-验证扩容结果" tabindex="-1"><a class="header-anchor" href="#_7-验证扩容结果" aria-hidden="true">#</a> 7. 验证扩容结果</h3><p>在 Cli 执行 <code>show cluster details</code>，结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show cluster details
+------+----------+-------+---------------+------------+-------------------+----------+-------+-------+-------------------+-----------------+
|NodeID|  NodeType| Status|InternalAddress|InternalPort|ConfigConsensusPort|RpcAddress|RpcPort|MppPort|SchemaConsensusPort|DataConsensusPort|
+------+----------+-------+---------------+------------+-------------------+----------+-------+-------+-------------------+-----------------+
|     0|ConfigNode|Running|      127.0.0.1|       10710|              10720|          |       |       |                   |                 |
|     2|ConfigNode|Running|      127.0.0.1|       10711|              10721|          |       |       |                   |                 |
|     3|ConfigNode|Running|      127.0.0.1|       10712|              10722|          |       |       |                   |                 |
|     1|  DataNode|Running|      127.0.0.1|       10730|                   | 127.0.0.1|   6667|  10740|              10750|            10760|
|     4|  DataNode|Running|      127.0.0.1|       10731|                   | 127.0.0.1|   6668|  10741|              10751|            10761|
|     5|  DataNode|Running|      127.0.0.1|       10732|                   | 127.0.0.1|   6669|  10742|              10752|            10762|
+------+----------+-------+---------------+------------+-------------------+----------+-------+-------+-------------------+-----------------+
Total line number = 6
It costs 0.012s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-集群缩容" tabindex="-1"><a class="header-anchor" href="#_8-集群缩容" aria-hidden="true">#</a> 8. 集群缩容</h3><ul><li>缩容一个 ConfigNode：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 使用 ip:port 移除
./cluster0/sbin/remove-confignode.sh 127.0.0.1:10711

# 使用节点编号移除
./cluster0/sbin/remove-confignode.sh 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>缩容一个 DataNode：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 使用 ip:port 移除
./cluster0/sbin/remove-datanode.sh 127.0.0.1:6668

# 使用节点编号移除
./cluster0/sbin/remove-confignode.sh 4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-验证缩容结果" tabindex="-1"><a class="header-anchor" href="#_9-验证缩容结果" aria-hidden="true">#</a> 9. 验证缩容结果</h3><p>在 Cli 执行 <code>show cluster details</code>，结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show cluster details
+------+----------+-------+---------------+------------+-------------------+----------+-------+-------+-------------------+-----------------+
|NodeID|  NodeType| Status|InternalAddress|InternalPort|ConfigConsensusPort|RpcAddress|RpcPort|MppPort|SchemaConsensusPort|DataConsensusPort|
+------+----------+-------+---------------+------------+-------------------+----------+-------+-------+-------------------+-----------------+
|     0|ConfigNode|Running|      127.0.0.1|       10710|              10720|          |       |       |                   |                 |
|     3|ConfigNode|Running|      127.0.0.1|       10712|              10722|          |       |       |                   |                 |
|     1|  DataNode|Running|      127.0.0.1|       10730|                   | 127.0.0.1|   6667|  10740|              10750|            10760|
|     5|  DataNode|Running|      127.0.0.1|       10732|                   | 127.0.0.1|   6669|  10742|              10752|            10762|
+------+----------+-------+---------------+------------+-------------------+----------+-------+-------+-------------------+-----------------+
Total line number = 4
It costs 0.005s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="手动部署" tabindex="-1"><a class="header-anchor" href="#手动部署" aria-hidden="true">#</a> 手动部署</h2><h3 id="前置检查" tabindex="-1"><a class="header-anchor" href="#前置检查" aria-hidden="true">#</a> 前置检查</h3><ol><li>JDK&gt;=1.8 的运行环境，并配置好 JAVA_HOME 环境变量。</li><li>设置最大文件打开数为 65535。</li><li>关闭交换内存。</li><li>首次启动ConfigNode节点时，确保已清空ConfigNode节点的data/confignode目录；首次启动DataNode节点时，确保已清空DataNode节点的data/datanode目录。</li><li>如果整个集群处在可信环境下，可以关闭机器上的防火墙选项。</li><li>在集群默认配置中，ConfigNode 会占用端口 10710 和 10720，DataNode 会占用端口 6667、10730、10740、10750 和 10760，<br> 请确保这些端口未被占用，或者手动修改配置文件中的端口配置。</li></ol><h3 id="安装包获取" tabindex="-1"><a class="header-anchor" href="#安装包获取" aria-hidden="true">#</a> 安装包获取</h3><p>你可以选择下载二进制文件（见 3.1）或从源代码编译（见 3.2）。</p><h4 id="下载二进制文件" tabindex="-1"><a class="header-anchor" href="#下载二进制文件" aria-hidden="true">#</a> 下载二进制文件</h4>`,34),T={href:"https://iotdb.apache.org/Download/",target:"_blank",rel:"noopener noreferrer"},y=e("li",null,"下载 IoTDB 1.0.0 版本的二进制文件。",-1),R=e("li",null,"解压得到 apache-iotdb-1.0.0-all-bin 目录。",-1),w=n(`<h4 id="使用源码编译" tabindex="-1"><a class="header-anchor" href="#使用源码编译" aria-hidden="true">#</a> 使用源码编译</h4><h5 id="下载源码" tabindex="-1"><a class="header-anchor" href="#下载源码" aria-hidden="true">#</a> 下载源码</h5><p><strong>Git</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git clone https://github.com/apache/iotdb.git
git checkout v1.0.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>官网下载</strong></p>`,5),A={href:"https://iotdb.apache.org/Download/",target:"_blank",rel:"noopener noreferrer"},B=e("li",null,"下载 IoTDB 1.0.0 版本的源码。",-1),k=e("li",null,"解压得到 apache-iotdb-1.0.0 目录。",-1),L=n(`<h5 id="编译源码" tabindex="-1"><a class="header-anchor" href="#编译源码" aria-hidden="true">#</a> 编译源码</h5><p>在 IoTDB 源码根目录下:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mvn clean package -pl distribution -am -DskipTests
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>编译成功后，可在目录<br><strong>distribution/target/apache-iotdb-1.0.0-SNAPSHOT-all-bin/apache-iotdb-1.0.0-SNAPSHOT-all-bin</strong><br> 找到集群版本的二进制文件。</p><h3 id="安装包说明" tabindex="-1"><a class="header-anchor" href="#安装包说明" aria-hidden="true">#</a> 安装包说明</h3><p>打开 apache-iotdb-1.0.0-SNAPSHOT-all-bin，可见以下目录：</p><table><thead><tr><th><strong>目录</strong></th><th><strong>说明</strong></th></tr></thead><tbody><tr><td>conf</td><td>配置文件目录，包含 ConfigNode、DataNode、JMX 和 logback 等配置文件</td></tr><tr><td>data</td><td>数据文件目录，包含 ConfigNode 和 DataNode 的数据文件</td></tr><tr><td>lib</td><td>库文件目录</td></tr><tr><td>licenses</td><td>证书文件目录</td></tr><tr><td>logs</td><td>日志文件目录，包含 ConfigNode 和 DataNode 的日志文件</td></tr><tr><td>sbin</td><td>脚本目录，包含 ConfigNode 和 DataNode 的启停移除脚本，以及 Cli 的启动脚本等</td></tr><tr><td>tools</td><td>系统工具目录</td></tr></tbody></table><h3 id="集群安装配置" tabindex="-1"><a class="header-anchor" href="#集群安装配置" aria-hidden="true">#</a> 集群安装配置</h3><h4 id="集群安装" tabindex="-1"><a class="header-anchor" href="#集群安装" aria-hidden="true">#</a> 集群安装</h4><p><code>apache-iotdb-1.0.0-SNAPSHOT-all-bin</code> 包含 ConfigNode 和 DataNode，<br> 请将安装包部署于你目标集群的所有机器上，推荐将安装包部署于所有服务器的相同目录下。</p>`,10),E=e("br",null,null,-1),M={href:"https://iotdb.apache.org/zh/UserGuide/Master/QuickStart/ClusterQuickStart.html",target:"_blank",rel:"noopener noreferrer"},V=n('<h4 id="集群配置" tabindex="-1"><a class="header-anchor" href="#集群配置" aria-hidden="true">#</a> 集群配置</h4><p>接下来需要修改每个服务器上的配置文件，登录服务器，<br> 并将工作路径切换至 <code>apache-iotdb-1.0.0-SNAPSHOT-all-bin</code>，<br> 配置文件在 <code>./conf</code> 目录内。</p><p>对于所有部署 ConfigNode 的服务器，需要修改通用配置（见 5.2.1）和 ConfigNode 配置（见 5.2.2）。</p><p>对于所有部署 DataNode 的服务器，需要修改通用配置（见 5.2.1）和 DataNode 配置（见 5.2.3）。</p><h5 id="通用配置" tabindex="-1"><a class="header-anchor" href="#通用配置" aria-hidden="true">#</a> 通用配置</h5>',5),O=e("br",null,null,-1),G={href:"https://iotdb.apache.org/zh/UserGuide/Master/Cluster/Deployment-Recommendation.html",target:"_blank",rel:"noopener noreferrer"},z=e("br",null,null,-1),U=n('<table><thead><tr><th><strong>配置项</strong></th><th><strong>说明</strong></th><th><strong>默认</strong></th></tr></thead><tbody><tr><td>cluster_name</td><td>节点希望加入的集群的名称</td><td>defaultCluster</td></tr><tr><td>config_node_consensus_protocol_class</td><td>ConfigNode 使用的共识协议</td><td>org.apache.iotdb.consensus.ratis.RatisConsensus</td></tr><tr><td>schema_replication_factor</td><td>元数据副本数，DataNode 数量不应少于此数目</td><td>1</td></tr><tr><td>schema_region_consensus_protocol_class</td><td>元数据副本组的共识协议</td><td>org.apache.iotdb.consensus.ratis.RatisConsensus</td></tr><tr><td>data_replication_factor</td><td>数据副本数，DataNode 数量不应少于此数目</td><td>1</td></tr><tr><td>data_region_consensus_protocol_class</td><td>数据副本组的共识协议。注：RatisConsensus 目前不支持多数据目录</td><td>org.apache.iotdb.consensus.iot.IoTConsensus</td></tr></tbody></table><p><strong>注意：上述配置项在集群启动后即不可更改，且务必保证所有节点的通用配置完全一致，否则节点无法启动。</strong></p><h5 id="confignode-配置" tabindex="-1"><a class="header-anchor" href="#confignode-配置" aria-hidden="true">#</a> ConfigNode 配置</h5><p>打开 ConfigNode 配置文件 ./conf/iotdb-confignode.properties，根据服务器/虚拟机的 IP 地址和可用端口，设置以下参数：</p><table><thead><tr><th><strong>配置项</strong></th><th><strong>说明</strong></th><th><strong>默认</strong></th><th><strong>用法</strong></th></tr></thead><tbody><tr><td>cn_internal_address</td><td>ConfigNode 在集群内部通讯使用的地址</td><td>127.0.0.1</td><td>设置为服务器的 IPV4 地址或域名</td></tr><tr><td>cn_internal_port</td><td>ConfigNode 在集群内部通讯使用的端口</td><td>10710</td><td>设置为任意未占用端口</td></tr><tr><td>cn_consensus_port</td><td>ConfigNode 副本组共识协议通信使用的端口</td><td>10720</td><td>设置为任意未占用端口</td></tr><tr><td>cn_target_config_node_list</td><td>节点注册加入集群时连接的 ConfigNode 的地址。注：只能配置一个</td><td>127.0.0.1:10710</td><td>对于 Seed-ConfigNode，设置为自己的 cn_internal_address:cn_internal_port；对于其它 ConfigNode，设置为另一个正在运行的 ConfigNode 的 cn_internal_address:cn_internal_port</td></tr></tbody></table><p><strong>注意：上述配置项在节点启动后即不可更改，且务必保证所有端口均未被占用，否则节点无法启动。</strong></p><h5 id="datanode-配置" tabindex="-1"><a class="header-anchor" href="#datanode-配置" aria-hidden="true">#</a> DataNode 配置</h5><p>打开 DataNode 配置文件 ./conf/iotdb-datanode.properties，根据服务器/虚拟机的 IP 地址和可用端口，设置以下参数：</p><table><thead><tr><th><strong>配置项</strong></th><th><strong>说明</strong></th><th><strong>默认</strong></th><th><strong>用法</strong></th></tr></thead><tbody><tr><td>dn_rpc_address</td><td>客户端 RPC 服务的地址</td><td>127.0.0.1</td><td>设置为服务器的 IPV4 地址或域名</td></tr><tr><td>dn_rpc_port</td><td>客户端 RPC 服务的端口</td><td>6667</td><td>设置为任意未占用端口</td></tr><tr><td>dn_internal_address</td><td>DataNode 在集群内部接收控制流使用的地址</td><td>127.0.0.1</td><td>设置为服务器的 IPV4 地址或域名</td></tr><tr><td>dn_internal_port</td><td>DataNode 在集群内部接收控制流使用的端口</td><td>10730</td><td>设置为任意未占用端口</td></tr><tr><td>dn_mpp_data_exchange_port</td><td>DataNode 在集群内部接收数据流使用的端口</td><td>10740</td><td>设置为任意未占用端口</td></tr><tr><td>dn_data_region_consensus_port</td><td>DataNode 的数据副本间共识协议通信的端口</td><td>10750</td><td>设置为任意未占用端口</td></tr><tr><td>dn_schema_region_consensus_port</td><td>DataNode 的元数据副本间共识协议通信的端口</td><td>10760</td><td>设置为任意未占用端口</td></tr><tr><td>dn_target_config_node_list</td><td>集群中正在运行的 ConfigNode 地址</td><td>127.0.0.1:10710</td><td>设置为任意正在运行的 ConfigNode 的 cn_internal_address:cn_internal_port，可设置多个，用逗号（&quot;,&quot;）隔开</td></tr></tbody></table><p><strong>注意：上述配置项在节点启动后即不可更改，且务必保证所有端口均未被占用，否则节点无法启动。</strong></p><h3 id="集群操作" tabindex="-1"><a class="header-anchor" href="#集群操作" aria-hidden="true">#</a> 集群操作</h3><h4 id="启动集群" tabindex="-1"><a class="header-anchor" href="#启动集群" aria-hidden="true">#</a> 启动集群</h4><p>本小节描述如何启动包括若干 ConfigNode 和 DataNode 的集群。<br> 集群可以提供服务的标准是至少启动一个 ConfigNode 且启动 不小于（数据/元数据）副本个数 的 DataNode。</p><p>总体启动流程分为三步：</p><ol><li>启动种子 ConfigNode</li><li>增加 ConfigNode（可选）</li><li>增加 DataNode</li></ol><h5 id="启动-seed-confignode" tabindex="-1"><a class="header-anchor" href="#启动-seed-confignode" aria-hidden="true">#</a> 启动 Seed-ConfigNode</h5><p><strong>集群第一个启动的节点必须是 ConfigNode，第一个启动的 ConfigNode 必须遵循本小节教程。</strong></p><p>第一个启动的 ConfigNode 是 Seed-ConfigNode，标志着新集群的创建。<br> 在启动 Seed-ConfigNode 前，请打开通用配置文件 ./conf/iotdb-common.properties，并检查如下参数：</p><table><thead><tr><th><strong>配置项</strong></th><th><strong>检查</strong></th></tr></thead><tbody><tr><td>cluster_name</td><td>已设置为期望的集群名称</td></tr><tr><td>config_node_consensus_protocol_class</td><td>已设置为期望的共识协议</td></tr><tr><td>schema_replication_factor</td><td>已设置为期望的元数据副本数</td></tr><tr><td>schema_region_consensus_protocol_class</td><td>已设置为期望的共识协议</td></tr><tr><td>data_replication_factor</td><td>已设置为期望的数据副本数</td></tr><tr><td>data_region_consensus_protocol_class</td><td>已设置为期望的共识协议</td></tr></tbody></table>',19),W=e("strong",null,"注意：",-1),F={href:"https://iotdb.apache.org/zh/UserGuide/Master/Cluster/Deployment-Recommendation.html",target:"_blank",rel:"noopener noreferrer"},H=n(`<p>接着请打开它的配置文件 ./conf/iotdb-confignode.properties，并检查如下参数：</p><table><thead><tr><th><strong>配置项</strong></th><th><strong>检查</strong></th></tr></thead><tbody><tr><td>cn_internal_address</td><td>已设置为服务器的 IPV4 地址或域名</td></tr><tr><td>cn_internal_port</td><td>该端口未被占用</td></tr><tr><td>cn_consensus_port</td><td>该端口未被占用</td></tr><tr><td>cn_target_config_node_list</td><td>已设置为自己的内部通讯地址，即 cn_internal_address:cn_internal_port</td></tr></tbody></table><p>检查完毕后，即可在服务器上运行启动脚本：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Linux 前台启动
bash ./sbin/start-confignode.sh

# Linux 后台启动
nohup bash ./sbin/start-confignode.sh &gt;/dev/null 2&gt;&amp;1 &amp;

# Windows
.\\sbin\\start-confignode.bat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),q=e("br",null,null,-1),Q=n(`<h5 id="增加更多-confignode-可选" tabindex="-1"><a class="header-anchor" href="#增加更多-confignode-可选" aria-hidden="true">#</a> 增加更多 ConfigNode（可选）</h5><p><strong>只要不是第一个启动的 ConfigNode 就必须遵循本小节教程。</strong></p><p>可向集群添加更多 ConfigNode，以保证 ConfigNode 的高可用。常用的配置为额外增加两个 ConfigNode，使集群共有三个 ConfigNode。</p><p>新增的 ConfigNode 需要保证 ./conf/iotdb-common.properites 中的所有配置参数与 Seed-ConfigNode 完全一致，否则可能启动失败或产生运行时错误。<br> 因此，请着重检查通用配置文件中的以下参数：</p><table><thead><tr><th><strong>配置项</strong></th><th><strong>检查</strong></th></tr></thead><tbody><tr><td>cluster_name</td><td>与 Seed-ConfigNode 保持一致</td></tr><tr><td>config_node_consensus_protocol_class</td><td>与 Seed-ConfigNode 保持一致</td></tr><tr><td>schema_replication_factor</td><td>与 Seed-ConfigNode 保持一致</td></tr><tr><td>schema_region_consensus_protocol_class</td><td>与 Seed-ConfigNode 保持一致</td></tr><tr><td>data_replication_factor</td><td>与 Seed-ConfigNode 保持一致</td></tr><tr><td>data_region_consensus_protocol_class</td><td>与 Seed-ConfigNode 保持一致</td></tr></tbody></table><p>接着请打开它的配置文件 ./conf/iotdb-confignode.properties，并检查以下参数：</p><table><thead><tr><th><strong>配置项</strong></th><th><strong>检查</strong></th></tr></thead><tbody><tr><td>cn_internal_address</td><td>已设置为服务器的 IPV4 地址或域名</td></tr><tr><td>cn_internal_port</td><td>该端口未被占用</td></tr><tr><td>cn_consensus_port</td><td>该端口未被占用</td></tr><tr><td>cn_target_config_node_list</td><td>已设置为另一个正在运行的 ConfigNode 的内部通讯地址，推荐使用 Seed-ConfigNode 的内部通讯地址</td></tr></tbody></table><p>检查完毕后，即可在服务器上运行启动脚本：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Linux 前台启动
bash ./sbin/start-confignode.sh

# Linux 后台启动
nohup bash ./sbin/start-confignode.sh &gt;/dev/null 2&gt;&amp;1 &amp;

# Windows
.\\sbin\\start-confignode.bat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),J=e("br",null,null,-1),K=n(`<h5 id="增加-datanode" tabindex="-1"><a class="header-anchor" href="#增加-datanode" aria-hidden="true">#</a> 增加 DataNode</h5><p><strong>确保集群已有正在运行的 ConfigNode 后，才能开始增加 DataNode。</strong></p><p>可以向集群中添加任意个 DataNode。<br> 在添加新的 DataNode 前，请先打开通用配置文件 ./conf/iotdb-common.properties 并检查以下参数：</p><table><thead><tr><th><strong>配置项</strong></th><th><strong>检查</strong></th></tr></thead><tbody><tr><td>cluster_name</td><td>与 Seed-ConfigNode 保持一致</td></tr></tbody></table><p>接着打开它的配置文件 ./conf/iotdb-datanode.properties 并检查以下参数：</p><table><thead><tr><th><strong>配置项</strong></th><th><strong>检查</strong></th></tr></thead><tbody><tr><td>dn_rpc_address</td><td>已设置为服务器的 IPV4 地址或域名</td></tr><tr><td>dn_rpc_port</td><td>该端口未被占用</td></tr><tr><td>dn_internal_address</td><td>已设置为服务器的 IPV4 地址或域名</td></tr><tr><td>dn_internal_port</td><td>该端口未被占用</td></tr><tr><td>dn_mpp_data_exchange_port</td><td>该端口未被占用</td></tr><tr><td>dn_data_region_consensus_port</td><td>该端口未被占用</td></tr><tr><td>dn_schema_region_consensus_port</td><td>该端口未被占用</td></tr><tr><td>dn_target_config_node_list</td><td>已设置为正在运行的 ConfigNode 的内部通讯地址，推荐使用 Seed-ConfigNode 的内部通讯地址</td></tr></tbody></table><p>检查完毕后，即可在服务器上运行启动脚本：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Linux 前台启动
bash ./sbin/start-datanode.sh

# Linux 后台启动
nohup bash ./sbin/start-datanode.sh &gt;/dev/null 2&gt;&amp;1 &amp;

# Windows
.\\sbin\\start-datanode.bat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),Y=e("br",null,null,-1),j=n(`<p><strong>注意：当且仅当集群拥有不少于副本个数（max{schema_replication_factor, data_replication_factor}）的 DataNode 后，集群才可以提供服务</strong></p><h4 id="启动-cli" tabindex="-1"><a class="header-anchor" href="#启动-cli" aria-hidden="true">#</a> 启动 Cli</h4><p>若搭建的集群仅用于本地调试，可直接执行 ./sbin 目录下的 Cli 启动脚本：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Linux
./sbin/start-cli.sh

# Windows
.\\sbin\\start-cli.bat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),X=e("br",null,null,-1),Z={href:"https://iotdb.apache.org/zh/UserGuide/Master/QuickStart/Command-Line-Interface.html",target:"_blank",rel:"noopener noreferrer"},$=n(`<h4 id="验证集群" tabindex="-1"><a class="header-anchor" href="#验证集群" aria-hidden="true">#</a> 验证集群</h4><p>以在6台服务器上启动的3C3D（3个ConfigNode 和 3个DataNode）集群为例，<br> 这里假设3个ConfigNode的IP地址依次为192.168.1.10、192.168.1.11、192.168.1.12，且3个ConfigNode启动时均使用了默认的端口10710与10720；<br> 3个DataNode的IP地址依次为192.168.1.20、192.168.1.21、192.168.1.22，且3个DataNode启动时均使用了默认的端口6667、10730、10740、10750与10760。</p><p>当按照6.1步骤成功启动集群后，在 Cli 执行 <code>show cluster details</code>，看到的结果应当如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show cluster details
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>若所有节点的状态均为 <strong>Running</strong>，则说明集群部署成功；<br> 否则，请阅读启动失败节点的运行日志，并检查对应的配置参数。</p><h4 id="停止-iotdb-进程" tabindex="-1"><a class="header-anchor" href="#停止-iotdb-进程" aria-hidden="true">#</a> 停止 IoTDB 进程</h4><p>本小节描述如何手动关闭 IoTDB 的 ConfigNode 或 DataNode 进程。</p><h5 id="使用脚本停止-confignode" tabindex="-1"><a class="header-anchor" href="#使用脚本停止-confignode" aria-hidden="true">#</a> 使用脚本停止 ConfigNode</h5><p>执行停止 ConfigNode 脚本：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Linux
./sbin/stop-confignode.sh

# Windows
.\\sbin\\stop-confignode.bat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="使用脚本停止-datanode" tabindex="-1"><a class="header-anchor" href="#使用脚本停止-datanode" aria-hidden="true">#</a> 使用脚本停止 DataNode</h5><p>执行停止 DataNode 脚本：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Linux
./sbin/stop-datanode.sh

# Windows
.\\sbin\\stop-datanode.bat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="停止节点进程" tabindex="-1"><a class="header-anchor" href="#停止节点进程" aria-hidden="true">#</a> 停止节点进程</h5><p>首先获取节点的进程号：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>jps

# 或

ps aux | grep iotdb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结束进程：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kill -9 &lt;pid&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>注意：有些端口的信息需要 root 权限才能获取，在此情况下请使用 sudo</strong></p><h4 id="集群缩容" tabindex="-1"><a class="header-anchor" href="#集群缩容" aria-hidden="true">#</a> 集群缩容</h4><p>本小节描述如何将 ConfigNode 或 DataNode 移出集群。</p><h5 id="移除-confignode" tabindex="-1"><a class="header-anchor" href="#移除-confignode" aria-hidden="true">#</a> 移除 ConfigNode</h5><p>在移除 ConfigNode 前，请确保移除后集群至少还有一个活跃的 ConfigNode。<br> 在活跃的 ConfigNode 上执行 remove-confignode 脚本：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Linux
## 根据 confignode_id 移除节点
./sbin/remove-confignode.sh &lt;confignode_id&gt;

## 根据 ConfigNode 内部通讯地址和端口移除节点
./sbin/remove-confignode.sh &lt;cn_internal_address&gt;:&lt;cn_internal_port&gt;


# Windows
## 根据 confignode_id 移除节点
.\\sbin\\remove-confignode.bat &lt;confignode_id&gt;

## 根据 ConfigNode 内部通讯地址和端口移除节点
.\\sbin\\remove-confignode.bat &lt;cn_internal_address&gt;:&lt;cn_internal_port&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="移除-datanode" tabindex="-1"><a class="header-anchor" href="#移除-datanode" aria-hidden="true">#</a> 移除 DataNode</h5><p>在移除 DataNode 前，请确保移除后集群至少还有不少于（数据/元数据）副本个数的 DataNode。<br> 在活跃的 DataNode 上执行 remove-datanode 脚本：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Linux
## 根据 datanode_id 移除节点
./sbin/remove-datanode.sh &lt;datanode_id&gt;

## 根据 DataNode RPC 服务地址和端口移除节点
./sbin/remove-datanode.sh &lt;dn_rpc_address&gt;:&lt;dn_rpc_port&gt;


# Windows
## 根据 datanode_id 移除节点
.\\sbin\\remove-datanode.bat &lt;datanode_id&gt;

## 根据 DataNode RPC 服务地址和端口移除节点
.\\sbin\\remove-datanode.bat &lt;dn_rpc_address&gt;:&lt;dn_rpc_port&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h3>`,28);function ee(te,de){const i=s("RouterLink"),a=s("ExternalLinkIcon");return l(),c("div",null,[h(`

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

`),b,g,e("p",null,[t("本文将介绍关于 IoTDB 使用的基本流程，如果需要更多信息，请浏览我们官网的 "),d(i,{to:"/zh/UserGuide/latest/IoTDB-Introduction/What-is-IoTDB.html"},{default:r(()=>[t("指引")]),_:1}),t(".")]),v,p,_,m,f,e("ul",null,[N,e("li",null,[e("p",null,[t("二进制可运行程序：请从 "),e("a",x,[t("下载"),d(a)]),t(" 页面下载最新的安装包，解压后即完成安装。")])]),e("li",null,[e("p",null,[t("使用 Docker 镜像：dockerfile 文件位于"),e("a",C,[t("github"),d(a)])])])]),D,e("ul",null,[e("li",null,[t("在 Cli 执行 "),e("a",I,[t("show cluster details"),d(a)]),S,t(" 指令，结果如下所示：")])]),P,e("ol",null,[e("li",null,[t("打开官网"),e("a",T,[t("Download Page"),d(a)]),t("。")]),y,R]),w,e("ol",null,[e("li",null,[t("打开官网"),e("a",A,[t("Download Page"),d(a)]),t("。")]),B,k]),L,e("p",null,[t("如果你希望先在一台服务器上尝试部署 IoTDB 集群，请参考"),E,e("a",M,[t("Cluster Quick Start"),d(a)]),t("。")]),V,e("p",null,[t("打开通用配置文件 ./conf/iotdb-common.properties，"),O,t(" 可根据 "),e("a",G,[t("部署推荐"),d(a)]),z,t(" 设置以下参数：")]),U,e("p",null,[W,t(" 请根据"),e("a",F,[t("部署推荐"),d(a)]),t("配置合适的通用参数，这些参数在首次配置后即不可修改。")]),H,e("p",null,[t("ConfigNode 的其它配置参数可参考"),q,d(i,{to:"/zh/UserGuide/latest/Reference/ConfigNode-Config-Manual.html"},{default:r(()=>[t("ConfigNode 配置参数")]),_:1}),t("。")]),Q,e("p",null,[t("ConfigNode 的其它配置参数可参考"),J,d(i,{to:"/zh/UserGuide/latest/Reference/ConfigNode-Config-Manual.html"},{default:r(()=>[t("ConfigNode 配置参数")]),_:1}),t("。")]),K,e("p",null,[t("DataNode 的其它配置参数可参考"),Y,d(i,{to:"/zh/UserGuide/latest/Reference/DataNode-Config-Manual.html"},{default:r(()=>[t("DataNode配置参数")]),_:1}),t(" 。")]),j,e("p",null,[t("若希望通过 Cli 连接生产环境的集群，"),X,t(" 请阅读 "),e("a",Z,[t("Cli 使用手册"),d(a)]),t("。")]),$,e("p",null,[t("请参考 "),d(i,{to:"/zh/UserGuide/latest/FAQ/Frequently-asked-questions.html#%E5%88%86%E5%B8%83%E5%BC%8F%E9%83%A8%E7%BD%B2-faq"},{default:r(()=>[t("分布式部署FAQ")]),_:1})])])}const ae=o(u,[["render",ee],["__file","Deployment-Guide.html.vue"]]);export{ae as default};
