import{_ as e,c as d,b as r,o as a}from"./app-CNiZnG3t.js";const n={};function l(i,t){return a(),d("div",null,t[0]||(t[0]=[r(`<h1 id="集群搭建" tabindex="-1"><a class="header-anchor" href="#集群搭建"><span>集群搭建</span></a></h1><h2 id="集群设置" tabindex="-1"><a class="header-anchor" href="#集群设置"><span>集群设置</span></a></h2><p>你可以根据此文档启动IoTDB集群。</p><h3 id="安装环境" tabindex="-1"><a class="header-anchor" href="#安装环境"><span>安装环境</span></a></h3><p>为使用IoTDB，你首先需要:</p><ol><li><p>安装前需要保证设备上配有 JDK&gt;=1.8 的运行环境，并配置好 JAVA_HOME 环境变量。</p></li><li><p>设置最大文件打开数为 65535。</p></li></ol><h3 id="安装步骤" tabindex="-1"><a class="header-anchor" href="#安装步骤"><span>安装步骤</span></a></h3><p>IoTDB 支持多种安装途径。用户可以使用三种方式对 IoTDB 进行安装——下载二进制可运行程序、使用源码、使用 docker 镜像。</p><ul><li>使用源码：您可以从代码仓库下载源码并编译，具体编译方法见下方。</li><li>二进制可运行程序：请从 <a href="https://iotdb.apache.org/Download/" target="_blank" rel="noopener noreferrer">下载</a> 页面下载最新的安装包，解压后即完成安装。</li><li>使用 Docker 镜像：dockerfile 文件位于 <a href="https://github.com/apache/iotdb/blob/master/docker/src/main" target="_blank" rel="noopener noreferrer">github</a></li></ul><h4 id="源码编译" tabindex="-1"><a class="header-anchor" href="#源码编译"><span>源码编译</span></a></h4><p>下载源码:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>git clone https://github.com/apache/iotdb.git</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>默认分支为master分支，你可以切换到其他发布版本，例如：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>git checkout rel/0.12</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>在iotdb根目录下:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>&gt; mvn clean package -pl cluster -am -DskipTests</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>集群的二进制版本在目录 <strong>cluster/target/{iotdb-project.version}</strong> 下</p><h4 id="下载" tabindex="-1"><a class="header-anchor" href="#下载"><span>下载</span></a></h4><p>你可以直接下载二进制版本 <a href="https://iotdb.apache.org/Download/" target="_blank" rel="noopener noreferrer">Download Page</a></p><h3 id="文件目录" tabindex="-1"><a class="header-anchor" href="#文件目录"><span>文件目录</span></a></h3><p>完成IoTDB Cluster安装后，默认会在IoTDB Cluster的根目录下生成下列目录文件：</p><table><thead><tr><th><strong>目录</strong></th><th><strong>说明</strong></th></tr></thead><tbody><tr><td>conf</td><td>配置文件目录</td></tr><tr><td>data</td><td>默认数据文件目录，可通过修改配置文件修改位置</td></tr><tr><td>ext</td><td>默认udf目录，可通过修改配置文件修改位置</td></tr><tr><td>lib</td><td>库文件目录</td></tr><tr><td>logs</td><td>运行日志目录</td></tr><tr><td>sbin</td><td>可执行文件目录</td></tr><tr><td>tools</td><td>系统工具目录</td></tr></tbody></table><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h3><p>为方便 IoTDB Server 的配置与管理，IoTDB Server 为用户提供三种配置项，使得您可以在启动服务或服务运行时对其进行配置。</p><p>三种配置项的配置文件均位于 IoTDB 安装目录：<code>$IOTDB_HOME/conf</code>文件夹下，其中涉及 server 配置的共有 4 个文件，分别为：<code>iotdb-cluster.properties</code>、<code>iotdb-engine.properties</code>、<code>logback.xml</code> 和 <code>iotdb-env.sh</code>(Unix 系统）/<code>iotdb-env.bat</code>(Windows 系统）, 您可以通过更改其中的配置项对系统运行的相关配置项进行配置。</p><p>配置文件的说明如下：</p><ul><li><code>iotdb-env.sh</code>/<code>iotdb-env.bat</code>：环境配置项的默认配置文件。您可以在文件中配置 JAVA-JVM 的相关系统配置项。</li><li><code>iotdb-engine.properties</code>：IoTDB 引擎层系统配置项的默认配置文件。您可以在文件中配置 IoTDB 引擎运行时的相关参数。此外，用户可以在文件中配置 IoTDB 存储时 TsFile 文件的相关信息，如每次将内存中的数据写入到磁盘前的缓存大小 (<code>group_size_in_byte</code>)，内存中每个列打一次包的大小 (<code>page_size_in_byte</code>) 等。</li><li><code>logback.xml</code>: 日志配置文件，比如日志级别等。</li><li><code>iotdb-cluster.properties</code>: IoTDB 集群所需要的一些配置。</li></ul><p><code>iotdb-engine.properties</code>、<code>iotdb-env.sh</code>/<code>iotdb-env.bat</code> 两个配置文件详细说明请参考 <a href="https://github.com/apache/iotdb/blob/master/docs/zh/UserGuide/Appendix/Config-Manual.md" target="_blank" rel="noopener noreferrer">附录/配置手册</a>，与集群有关的配置项是在<code>iotdb-cluster.properties</code>文件中的，你可以直接查看 <a href="https://github.com/apache/iotdb/blob/master/cluster/src/assembly/resources/conf/iotdb-cluster.properties" target="_blank" rel="noopener noreferrer">配置文件</a> 中的注释，也可以参考 <a href="#%E9%9B%86%E7%BE%A4%E9%85%8D%E7%BD%AE%E9%A1%B9">Cluster Configuration</a>。</p><p>配置文件位于 <strong>{cluster_root_dir}/conf</strong>。</p><p><strong>你需要修改每个节点以下的配置项去启动你的IoTDB集群：</strong></p><ul><li><p>iotdb-engine.properties:</p><ul><li>rpc_address</li></ul><ul><li><p>rpc_port</p></li><li><p>base_dir</p></li><li><p>data_dirs</p></li><li><p>wal_dir</p></li></ul></li><li><p>iotdb-cluster.properties</p><ul><li><p>internal_ip</p></li><li><p>internal_meta_port</p></li><li><p>internal_data_port</p></li><li><p>cluster_info_public_port</p></li><li><p>seed_nodes</p></li><li><p>default_replica_num</p></li></ul></li></ul><h2 id="被覆盖的单机版选项" tabindex="-1"><a class="header-anchor" href="#被覆盖的单机版选项"><span>被覆盖的单机版选项</span></a></h2><p>iotdb-engines.properties 配置文件中的部分内容会不再生效：</p><ul><li><code>enable_auto_create_schema</code> 不再生效，并被视为<code>false</code>. 应使用 iotdb-cluster.properties 中的<br><code>enable_auto_create_schema</code> 来控制是否自动创建序列。</li><li><code>is_sync_enable</code> 不再生效，并被视为 <code>false</code>.</li></ul><h3 id="启动服务" tabindex="-1"><a class="header-anchor" href="#启动服务"><span>启动服务</span></a></h3><h4 id="启动集群" tabindex="-1"><a class="header-anchor" href="#启动集群"><span>启动集群</span></a></h4><p>您可以多节点部署或单机部署分布式集群，两者的主要区别是后者需要处理端口和文件目录的冲突，配置项含义请参考 <a href="https://github.com/apache/iotdb/blob/master/docs/zh/UserGuide/Cluster/Cluster-Setup.md#%E9%85%8D%E7%BD%AE%E9%A1%B9" target="_blank" rel="noopener noreferrer">配置项</a>。 启动其中一个节点的服务，需要执行如下命令：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span># Unix/OS X</span></span>
<span class="line"><span>&gt; nohup sbin/start-node.sh [printgc] [&lt;conf_path&gt;] &gt;/dev/null 2&gt;&amp;1 &amp;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Windows</span></span>
<span class="line"><span>&gt; sbin\\start-node.bat [printgc] [&lt;conf_path&gt;]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>printgc</code>表示在启动的时候，会开启 GC 日志。 <code>&lt;conf_path&gt;</code>使用<code>conf_path</code>文件夹里面的配置文件覆盖默认配置文件。GC 日志默认是关闭的。为了性能调优，用户可能会需要收集 GC 信息。GC 日志会被存储在<code>IOTDB_HOME/logs/</code>下面。</p><p><strong>如果你启动了所有seed节点，并且所有seed节点可以相互通信并没有ip地址/端口和文件目录的冲突，集群就成功启动了。</strong></p><h4 id="集群扩展" tabindex="-1"><a class="header-anchor" href="#集群扩展"><span>集群扩展</span></a></h4><p>在集群运行过程中，用户可以向集群中加入新的节点或者删除集群中已有节点。目前仅支持逐节点集群扩展操作，多节点的集群扩展可以转化为一系列单节点集群扩展操作来实现。集群只有在上一次集群扩展操作完成后才会接收新的集群扩展操作。</p><p><strong>在要加入集群的新节点上启动以下脚本进行增加节点操作：</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span># Unix/OS X</span></span>
<span class="line"><span>&gt; nohup sbin/add-node.sh [printgc] [&lt;conf_path&gt;] &gt;/dev/null 2&gt;&amp;1 &amp;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Windows</span></span>
<span class="line"><span>&gt; sbin\\add-node.bat [printgc] [&lt;conf_path&gt;]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>printgc</code>表示在启动的时候，会开启 GC 日志。 <code>&lt;conf_path&gt;</code>使用<code>conf_path</code>文件夹里面的配置文件覆盖默认配置文件。</p><p><strong>在任一集群中的节点上启动以下脚本进行删除节点操作：</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span># Unix/OS X</span></span>
<span class="line"><span>&gt; sbin/remove-node.sh &lt;internal_ip&gt; &lt;internal_meta_port&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Windows</span></span>
<span class="line"><span>&gt; sbin\\remove-node.bat &lt;internal_ip&gt; &lt;internal_meta_port&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>internal_ip</code>表示待删除节点的 IP 地址 <code>internal_meta_port</code>表示待删除节点的 meta 服务端口</p><h4 id="使用-cli-工具" tabindex="-1"><a class="header-anchor" href="#使用-cli-工具"><span>使用 Cli 工具</span></a></h4><p>安装环境请参考 <a href="https://github.com/apache/iotdb/blob/master/docs/zh/UserGuide/QuickStart/QuickStart.md" target="_blank" rel="noopener noreferrer">快速上手/安装环境章节</a>。你可以根据节点的rpc_address和rpc_port向任何节点发起连接。</p><h4 id="停止集群" tabindex="-1"><a class="header-anchor" href="#停止集群"><span>停止集群</span></a></h4><p>在任一机器上启动以下脚本进行停止所有运行在该机器上的节点服务操作：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span># Unix/OS X</span></span>
<span class="line"><span>&gt; sbin/stop-node.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Windows</span></span>
<span class="line"><span>&gt; sbin\\stop-node.bat</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="附录" tabindex="-1"><a class="header-anchor" href="#附录"><span>附录</span></a></h3><h4 id="集群配置项" tabindex="-1"><a class="header-anchor" href="#集群配置项"><span>集群配置项</span></a></h4><ul><li>internal_ip</li></ul><table><thead><tr><th>名字</th><th>internal_ip</th></tr></thead><tbody><tr><td>描述</td><td>IOTDB 集群各个节点之间内部通信的 IP 地址，比如心跳、snapshot 快照、raft log 等。<strong><code>internal_ip</code>是集群内部的私有ip</strong></td></tr><tr><td>类型</td><td>String</td></tr><tr><td>默认值</td><td>127.0.0.1</td></tr><tr><td>改后生效方式</td><td>重启服务生效，集群建立后不可再修改</td></tr></tbody></table><ul><li>internal_meta_port</li></ul><table><thead><tr><th>名字</th><th>internal_meta_port</th></tr></thead><tbody><tr><td>描述</td><td>IoTDB meta 服务端口，用于元数据组（又称集群管理组）通信，元数据组管理集群配置和存储组信息<strong>IoTDB 将为每个 meta 服务自动创建心跳端口。默认 meta 服务心跳端口为<code>internal_meta_port+1</code>，请确认这两个端口不是系统保留端口并且未被占用</strong></td></tr><tr><td>类型</td><td>Int32</td></tr><tr><td>默认值</td><td>9003</td></tr><tr><td>改后生效方式</td><td>重启服务生效，集群建立后不可再修改</td></tr></tbody></table><ul><li>internal_data_port</li></ul><table><thead><tr><th>名字</th><th>internal_data_port</th></tr></thead><tbody><tr><td>描述</td><td>IoTDB data 服务端口，用于数据组通信，数据组管理数据模式和数据的存储<strong>IoTDB 将为每个 data 服务自动创建心跳端口。默认的 data 服务心跳端口为<code>internal_data_port+1</code>。请确认这两个端口不是系统保留端口并且未被占用</strong></td></tr><tr><td>类型</td><td>Int32</td></tr><tr><td>默认值</td><td>40010</td></tr><tr><td>改后生效方式</td><td>重启服务生效，集群建立后不可再修改</td></tr></tbody></table><ul><li>cluster_info_public_port</li></ul><table><thead><tr><th>名字</th><th>cluster_info_public_port</th></tr></thead><tbody><tr><td>描述</td><td>用于查看集群信息（如数据分区）的 RPC 服务的接口</td></tr><tr><td>类型</td><td>Int32</td></tr><tr><td>默认值</td><td>6567</td></tr><tr><td>改后生效方式</td><td>重启服务生效</td></tr></tbody></table><ul><li>open_server_rpc_port</li></ul><table><thead><tr><th>名字</th><th>open_server_rpc_port</th></tr></thead><tbody><tr><td>描述</td><td>是否打开单机模块的 rpc port，用于调试模式，如果设置为 true，则单机模块的 rpc port 设置为<code>rpc_port (in iotdb-engines.properties) + 1</code></td></tr><tr><td>类型</td><td>Boolean</td></tr><tr><td>默认值</td><td>false</td></tr><tr><td>改后生效方式</td><td>重启服务生效，集群建立后不可再修改</td></tr></tbody></table><ul><li>seed_nodes</li></ul><table><thead><tr><th>名字</th><th>seed_nodes</th></tr></thead><tbody><tr><td>描述</td><td>集群中节点的地址（私有ip），<code>{IP/DOMAIN}:internal_meta_port</code>格式，用逗号分割；对于伪分布式模式，可以都填写<code>localhost</code>，或是<code>127.0.0.1</code> 或是混合填写，但是不能够出现真实的 ip 地址；对于分布式模式，支持填写 real ip 或是 hostname，但是不能够出现<code>localhost</code>或是<code>127.0.0.1</code>。当使用<code>start-node.sh(.bat)</code>启动节点时，此配置意味着形成初始群集的节点，每个节点的<code>seed_nodes</code>应该一致，否则群集将初始化失败；当使用<code>add-node.sh(.bat)</code>添加节点到集群中时，此配置项可以是集群中已经存在的任何节点，不需要是用<code>start-node.sh(bat)</code>构建初始集群的节点。</td></tr><tr><td>类型</td><td>String</td></tr><tr><td>默认值</td><td>127.0.0.1:9003,127.0.0.1:9005,127.0.0.1:9007</td></tr><tr><td>改后生效方式</td><td>重启服务生效</td></tr></tbody></table><ul><li>rpc_thrift_compression_enable</li></ul><table><thead><tr><th>名字</th><th>rpc_thrift_compression_enable</th></tr></thead><tbody><tr><td>描述</td><td>是否开启 thrift 压缩通信，<strong>注意这个参数要各个节点保持一致，也要与客户端保持一致，同时也要与<code>iotdb-engine.properties</code>中<code>rpc_thrift_compression_enable</code>参数保持一致</strong></td></tr><tr><td>类型</td><td>Boolean</td></tr><tr><td>默认值</td><td>false</td></tr><tr><td>改后生效方式</td><td>重启服务生效，需要整个集群同时更改</td></tr></tbody></table><ul><li>default_replica_num</li></ul><table><thead><tr><th>名字</th><th>default_replica_num</th></tr></thead><tbody><tr><td>描述</td><td>集群副本数</td></tr><tr><td>类型</td><td>Int32</td></tr><tr><td>默认值</td><td>3</td></tr><tr><td>改后生效方式</td><td>重启服务生效，集群建立后不可更改</td></tr></tbody></table><ul><li>multi_raft_factor</li></ul><table><thead><tr><th>名字</th><th>multi_raft_factor</th></tr></thead><tbody><tr><td>描述</td><td>每个数据组启动的 raft 组实例数量，默认每个数据组启动一个 raft 组</td></tr><tr><td>类型</td><td>Int32</td></tr><tr><td>默认值</td><td>1</td></tr><tr><td>改后生效方式</td><td>重启服务生效，集群建立后不可更改</td></tr></tbody></table><ul><li>cluster_name</li></ul><table><thead><tr><th>名字</th><th>cluster_name</th></tr></thead><tbody><tr><td>描述</td><td>集群名称，集群名称用以标识不同的集群，<strong>一个集群中所有节点的 cluster_name 都应相同</strong></td></tr><tr><td>类型</td><td>String</td></tr><tr><td>默认值</td><td>default</td></tr><tr><td>改后生效方式</td><td>重启服务生效</td></tr></tbody></table><ul><li>connection_timeout_ms</li></ul><table><thead><tr><th>名字</th><th>connection_timeout_ms</th></tr></thead><tbody><tr><td>描述</td><td>raft 节点间的 thrift 连接超时和 socket 超时时间，单位毫秒. <strong>对于发送心跳和投票请求的 thrift 连接的超时时间会被自动调整为 connection_timeout_ms 和 heartbeat_interval_ms 的最小值.</strong></td></tr><tr><td>类型</td><td>Int32</td></tr><tr><td>默认值</td><td>20000</td></tr><tr><td>改后生效方式</td><td>重启服务生效</td></tr></tbody></table><ul><li>heartbeat_interval_ms</li></ul><table><thead><tr><th>名字</th><th>heartbeat_interval_ms</th></tr></thead><tbody><tr><td>描述</td><td>领导者发送心跳广播的间隔时间，单位毫秒</td></tr><tr><td>类型</td><td>Int64</td></tr><tr><td>默认值</td><td>1000</td></tr><tr><td>改后生成方式</td><td>重启服务生效</td></tr></tbody></table><ul><li>election_timeout_ms</li></ul><table><thead><tr><th>名字</th><th>election_timeout_ms</th></tr></thead><tbody><tr><td>描述</td><td>跟随者的选举超时时间, 以及选举者等待投票的超时时间, 单位毫秒</td></tr><tr><td>类型</td><td>Int64</td></tr><tr><td>默认值</td><td>20000</td></tr><tr><td>改后生成方式</td><td>重启服务生效</td></tr></tbody></table><ul><li>read_operation_timeout_ms</li></ul><table><thead><tr><th>名字</th><th>read_operation_timeout_ms</th></tr></thead><tbody><tr><td>描述</td><td>读取操作超时时间，仅用于内部通信，不适用于整个操作，单位毫秒</td></tr><tr><td>类型</td><td>Int32</td></tr><tr><td>默认值</td><td>30000</td></tr><tr><td>改后生效方式</td><td>重启服务生效</td></tr></tbody></table><ul><li>write_operation_timeout_ms</li></ul><table><thead><tr><th>名字</th><th>write_operation_timeout_ms</th></tr></thead><tbody><tr><td>描述</td><td>写入操作超时时间，仅用于内部通信，不适用于整个操作，单位毫秒</td></tr><tr><td>类型</td><td>Int32</td></tr><tr><td>默认值</td><td>30000</td></tr><tr><td>改后生效方式</td><td>重启服务生效</td></tr></tbody></table><ul><li>min_num_of_logs_in_mem</li></ul><table><thead><tr><th>名字</th><th>min_num_of_logs_in_mem</th></tr></thead><tbody><tr><td>描述</td><td>删除日志操作执行后，内存中保留的最多的提交的日志的数量。增大这个值将减少在 CatchUp 使用快照的机会，但也会增加内存占用量</td></tr><tr><td>类型</td><td>Int32</td></tr><tr><td>默认值</td><td>100</td></tr><tr><td>改后生效方式</td><td>重启服务生效</td></tr></tbody></table><ul><li>max_num_of_logs_in_mem</li></ul><table><thead><tr><th>名字</th><th>max_num_of_logs_in_mem</th></tr></thead><tbody><tr><td>描述</td><td>当内存中已提交的日志条数达到这个值之后，就会触发删除日志的操作，增大这个值将减少在 CatchUp 使用快照的机会，但也会增加内存占用量</td></tr><tr><td>类型</td><td>Int32</td></tr><tr><td>默认值</td><td>1000</td></tr><tr><td>改后生效方式</td><td>重启服务生效</td></tr></tbody></table><ul><li>log_deletion_check_interval_second</li></ul><table><thead><tr><th>名字</th><th>log_deletion_check_interval_second</th></tr></thead><tbody><tr><td>描述</td><td>检查删除日志任务的时间间隔，每次删除日志任务将会把已提交日志超过 min_num_of_logs_in_mem 条的最老部分删除，单位秒</td></tr><tr><td>类型</td><td>Int32</td></tr><tr><td>默认值</td><td>60</td></tr><tr><td>改后生效方式</td><td>重启服务生效</td></tr></tbody></table><ul><li>enable_auto_create_schema</li></ul><table><thead><tr><th>名字</th><th>enable_auto_create_schema</th></tr></thead><tbody><tr><td>描述</td><td>是否支持自动创建 schema，<strong>这个值会覆盖<code>iotdb-engine.properties</code>中<code>enable_auto_create_schema</code>的配置</strong></td></tr><tr><td>类型</td><td>BOOLEAN</td></tr><tr><td>默认值</td><td>true</td></tr><tr><td>改后生效方式</td><td>重启服务生效</td></tr></tbody></table><ul><li>consistency_level</li></ul><table><thead><tr><th>名字</th><th>consistency_level</th></tr></thead><tbody><tr><td>描述</td><td>读一致性，目前支持 3 种一致性：strong、mid、weak。strong consistency 每次操作都会尝试与 Leader 同步以获取最新的数据，如果失败（超时），则直接向用户返回错误； mid consistency 每次操作将首先尝试与 Leader 进行同步，但是如果失败（超时），它将使用本地当前数据向用户提供服务； weak consistency 不会与 Leader 进行同步，而只是使用本地数据向用户提供服务</td></tr><tr><td>类型</td><td>strong、mid、weak</td></tr><tr><td>默认值</td><td>mid</td></tr><tr><td>改后生效方式</td><td>重启服务生效</td></tr></tbody></table><ul><li>is_enable_raft_log_persistence</li></ul><table><thead><tr><th>名字</th><th>is_enable_raft_log_persistence</th></tr></thead><tbody><tr><td>描述</td><td>是否开启 raft log 持久化</td></tr><tr><td>类型</td><td>BOOLEAN</td></tr><tr><td>默认值</td><td>true</td></tr><tr><td>改后生效方式</td><td>重启服务生效</td></tr></tbody></table>`,97)]))}const s=e(n,[["render",l],["__file","Cluster-Setup.html.vue"]]),c=JSON.parse('{"path":"/zh/UserGuide/V0.13.x/Cluster/Cluster-Setup.html","title":"集群搭建","lang":"zh-CN","frontmatter":{"description":"集群搭建 集群设置 你可以根据此文档启动IoTDB集群。 安装环境 为使用IoTDB，你首先需要: 安装前需要保证设备上配有 JDK>=1.8 的运行环境，并配置好 JAVA_HOME 环境变量。 设置最大文件打开数为 65535。 安装步骤 IoTDB 支持多种安装途径。用户可以使用三种方式对 IoTDB 进行安装——下载二进制可运行程序、使用源码、...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V0.13.x/Cluster/Cluster-Setup.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Cluster/Cluster-Setup.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"集群搭建"}],["meta",{"property":"og:description","content":"集群搭建 集群设置 你可以根据此文档启动IoTDB集群。 安装环境 为使用IoTDB，你首先需要: 安装前需要保证设备上配有 JDK>=1.8 的运行环境，并配置好 JAVA_HOME 环境变量。 设置最大文件打开数为 65535。 安装步骤 IoTDB 支持多种安装途径。用户可以使用三种方式对 IoTDB 进行安装——下载二进制可运行程序、使用源码、..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"集群搭建\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"集群设置","slug":"集群设置","link":"#集群设置","children":[{"level":3,"title":"安装环境","slug":"安装环境","link":"#安装环境","children":[]},{"level":3,"title":"安装步骤","slug":"安装步骤","link":"#安装步骤","children":[]},{"level":3,"title":"文件目录","slug":"文件目录","link":"#文件目录","children":[]},{"level":3,"title":"配置","slug":"配置","link":"#配置","children":[]}]},{"level":2,"title":"被覆盖的单机版选项","slug":"被覆盖的单机版选项","link":"#被覆盖的单机版选项","children":[{"level":3,"title":"启动服务","slug":"启动服务","link":"#启动服务","children":[]},{"level":3,"title":"附录","slug":"附录","link":"#附录","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","username":"CritasWang","email":"critas@outlook.com","commits":1,"url":"https://github.com/CritasWang"}]},"readingTime":{"minutes":10.7,"words":3211},"filePathRelative":"zh/UserGuide/V0.13.x/Cluster/Cluster-Setup.md","localizedDate":"2023年7月10日","autoDesc":true}');export{s as comp,c as data};
