import{_ as s,c as n,b as a,o as i}from"./app-D8GMfgiK.js";const t={};function l(r,e){return i(),n("div",null,e[0]||(e[0]=[a(`<h2 id="集群搭建示例" tabindex="-1"><a class="header-anchor" href="#集群搭建示例"><span>集群搭建示例</span></a></h2><h3 id="前提条件" tabindex="-1"><a class="header-anchor" href="#前提条件"><span>前提条件</span></a></h3><p>如果您在使用 Windows 系统，请安装 MinGW，WSL 或者 git bash。</p><h3 id="_1-节点-1-副本分布式搭建示例" tabindex="-1"><a class="header-anchor" href="#_1-节点-1-副本分布式搭建示例"><span>1 节点 1 副本分布式搭建示例</span></a></h3><h4 id="源码编译" tabindex="-1"><a class="header-anchor" href="#源码编译"><span>源码编译：</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">mvn clean package -DskipTests</span>
<span class="line">chmod -R 777 ./cluster/target/</span>
<span class="line">nohup ./cluster/target/iotdb-cluster-0.13.0-SNAPSHOT/sbin/start-node.sh &gt;/dev/null 2&gt;&amp;1 &amp;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用官网发布版本" tabindex="-1"><a class="header-anchor" href="#使用官网发布版本"><span>使用官网发布版本：</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">curl -O https://downloads.apache.org/iotdb/0.12.1/apache-iotdb-0.12.1-cluster-bin.zip</span>
<span class="line">unzip apache-iotdb-0.12.1-cluster-bin.zip</span>
<span class="line">cd apache-iotdb-0.12.1-cluster-bin</span>
<span class="line">sed -i -e &#39;s/^seed_nodes=127.0.0.1:9003,127.0.0.1:9005,127.0.0.1:9007$/seed_nodes=127.0.0.1:9003/g&#39; conf/iotdb-cluster.properties</span>
<span class="line">sed -i -e &#39;s/^default_replica_num=3$/default_replica_num=1/g&#39; conf/iotdb-cluster.properties</span>
<span class="line">nohup ./sbin/start-node.sh &gt;/dev/null 2&gt;&amp;1 &amp;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="单机部署-3-节点-1-副本示例" tabindex="-1"><a class="header-anchor" href="#单机部署-3-节点-1-副本示例"><span>单机部署 3 节点 1 副本示例</span></a></h3><h4 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h4><p>通过自己修改配置来处理端口和文件目录冲突，可以在一台机器上启动多个实例。</p><p><strong>节点1</strong>:<strong>(默认)</strong></p><p><em><strong>iotdb-cluster.properties</strong></em></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">seed_nodes = 127.0.0.1:9003,127.0.0.1:9005,127.0.0.1:9007</span>
<span class="line">default_replica_num = 1</span>
<span class="line">internal_meta_port = 9003</span>
<span class="line">internal_data_port = 40010</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>iotdb-engine.properties</strong></em></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">rpc_port=6667</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>节点2</strong>:</p><p><em><strong>iotdb-cluster.properties</strong></em></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">seed_nodes = 127.0.0.1:9003,127.0.0.1:9005,127.0.0.1:9007</span>
<span class="line">default_replica_num = 1</span>
<span class="line">internal_meta_port = 9005</span>
<span class="line">internal_data_port = 40012</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>iotdb-engine.properties</strong></em></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">rpc_port=6669</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>节点3</strong>:</p><p><em><strong>iotdb-cluster.properties</strong></em></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">seed_nodes = 127.0.0.1:9003,127.0.0.1:9005,127.0.0.1:9007</span>
<span class="line">default_replica_num = 1</span>
<span class="line">internal_meta_port = 9007</span>
<span class="line">internal_data_port = 40014</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>iotdb-engine.properties</strong></em></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">rpc_port=6671</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="源码编译-1" tabindex="-1"><a class="header-anchor" href="#源码编译-1"><span>源码编译：</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">mvn clean package -DskipTests</span>
<span class="line">chmod -R 777 ./cluster/target/</span>
<span class="line">nohup ./cluster/target/iotdb-cluster-0.13.0-SNAPSHOT/sbin/start-node.sh ./cluster/target/test-classes/node1conf/ &gt;/dev/null 2&gt;&amp;1 &amp;</span>
<span class="line">nohup ./cluster/target/iotdb-cluster-0.13.0-SNAPSHOT/sbin/start-node.sh ./cluster/target/test-classes/node2conf/ &gt;/dev/null 2&gt;&amp;1 &amp;</span>
<span class="line">nohup ./cluster/target/iotdb-cluster-0.13.0-SNAPSHOT/sbin/start-node.sh ./cluster/target/test-classes/node3conf/ &gt;/dev/null 2&gt;&amp;1 &amp;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用官网发布版本-1" tabindex="-1"><a class="header-anchor" href="#使用官网发布版本-1"><span>使用官网发布版本:</span></a></h4><p>下载发布版本:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">curl -O https://downloads.apache.org/iotdb/0.12.1/apache-iotdb-0.12.1-cluster-bin.zip</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>解压压缩包:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">unzip apache-iotdb-0.12.1-cluster-bin.zip</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>进入IoTDB集群根目录:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">cd apache-iotdb-0.12.1-cluster-bin</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>设置 default_replica_num = 1:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">sed -i -e &#39;s/^default_replica_num=3$/default_replica_num=1/g&#39; conf/iotdb-cluster.properties</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>为节点2，节点3创建conf_dir:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">cp -r conf node2_confcp -r conf node3_conf</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>解决端口和文件目录冲突:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">sed -i -e &#39;s/^internal_meta_port=9003$/internal_meta_port=9005/g&#39; -e &#39;s/^internal_data_port=40010$/internal_data_port=40012/g&#39; node2_conf/iotdb-cluster.properties</span>
<span class="line">sed -i -e &#39;s/^internal_meta_port=9003$/internal_meta_port=9007/g&#39; -e &#39;s/^internal_data_port=40010$/internal_data_port=40014/g&#39; node3_conf/iotdb-cluster.properties</span>
<span class="line">sed -i -e &#39;s/^rpc_port=6667$/rpc_port=6669/g&#39; -e node2_conf/iotdb-engine.properties</span>
<span class="line">sed -i -e &#39;s/^rpc_port=6667$/rpc_port=6671/g&#39; -e node3_conf/iotdb-engine.properties</span>
<span class="line">sed -i -e &#39;s/^# data_dirs=data\\/data$/data_dirs=node2\\/data/g&#39; -e &#39;s/^# wal_dir=data\\/wal$/wal_dir=node2\\/wal/g&#39; -e &#39;s/^# tracing_dir=data\\/tracing$/tracing_dir=node2\\/tracing/g&#39; -e &#39;s/^# system_dir=data\\/system$/system_dir=node2\\/system/g&#39; -e &#39;s/^# udf_root_dir=ext\\/udf$/udf_root_dir=node2\\/ext\\/udf/g&#39; -e &#39;s/^# index_root_dir=data\\/index$/index_root_dir=node2\\/index/g&#39; node2_conf/iotdb-engine.properties</span>
<span class="line">sed -i -e &#39;s/^# data_dirs=data\\/data$/data_dirs=node3\\/data/g&#39; -e &#39;s/^# wal_dir=data\\/wal$/wal_dir=node3\\/wal/g&#39; -e &#39;s/^# tracing_dir=data\\/tracing$/tracing_dir=node3\\/tracing/g&#39; -e &#39;s/^# system_dir=data\\/system$/system_dir=node3\\/system/g&#39; -e &#39;s/^# udf_root_dir=ext\\/udf$/udf_root_dir=node3\\/ext\\/udf/g&#39; -e &#39;s/^# index_root_dir=data\\/index$/index_root_dir=node3\\/index/g&#39; node3_conf/iotdb-engine.properties</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>你可以自己修改配置项而不使用“sed”命令</strong></p><p>根据配置文件路径启动三个节点:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">nohup ./sbin/start-node.sh &gt;/dev/null 2&gt;&amp;1 &amp;nohup ./sbin/start-node.sh ./node2_conf/ &gt;/dev/null 2&gt;&amp;1 &amp;nohup ./sbin/start-node.sh ./node3_conf/ &gt;/dev/null 2&gt;&amp;1 &amp;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_3-节点-3-副本分布式搭建示例" tabindex="-1"><a class="header-anchor" href="#_3-节点-3-副本分布式搭建示例"><span>3 节点 3 副本分布式搭建示例</span></a></h3><p>假设我们需要在三个物理节点上部署分布式 IoTDB，这三个节点分别为 A, B 和 C，其公网 ip 分别为 A_public_IP*, <em>B_public_IP</em>, and <em>C_public_IP</em>，私网 ip 分别为 <em>A_private_IP</em>, <em>B_private_IP</em>, and <em>C_private_IP</em>.</p><p>注：如果没有公网 ip 或者私网 ip 则两者<strong>设置成一致</strong>即可，只需要保证客户端能够访问到服务端即可。 私网ip对应iotdb-cluster.properties中的<code>internal_ip</code>配置项，公网ip对应iotdb-engine.properties中的<code>rpc_address</code>配置项。</p><h4 id="配置-1" tabindex="-1"><a class="header-anchor" href="#配置-1"><span>配置</span></a></h4><p><strong>节点A</strong>:</p><p><em><strong>iotdb-cluster.properties</strong></em></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">seed_nodes = A_private_Ip:9003,B_private_Ip:9003,C_private_Ip:9003</span>
<span class="line">default_replica_num = 3</span>
<span class="line">internal_meta_port = 9003</span>
<span class="line">internal_data_port = 40010</span>
<span class="line">internal_ip = A_private_Ip</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>iotdb-engine.properties</strong></em></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">rpc_port = 6667</span>
<span class="line">rpc_address = A_public_ip </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>节点B</strong>:</p><p><em><strong>iotdb-cluster.properties</strong></em></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">seed_nodes = A_private_Ip:9003,B_private_Ip:9003,C_private_Ip:9003</span>
<span class="line">default_replica_num = 3</span>
<span class="line">internal_meta_port = 9003</span>
<span class="line">internal_data_port = 40010</span>
<span class="line">internal_ip = B_private_Ip</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>iotdb-engine.properties</strong></em></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">rpc_port = 6667</span>
<span class="line">rpc_address = B_public_ip </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>节点C</strong>:</p><p><em><strong>iotdb-cluster.properties</strong></em></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">seed_nodes = A_private_Ip:9003,B_private_Ip:9003,C_private_Ip:9003</span>
<span class="line">default_replica_num = 3</span>
<span class="line">internal_meta_port = 9003</span>
<span class="line">internal_data_port = 40010</span>
<span class="line">internal_ip = C_private_Ip</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>iotdb-engine.properties</strong></em></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">rpc_port = 6667</span>
<span class="line">rpc_address = C_public_ip </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="启动iotdb集群" tabindex="-1"><a class="header-anchor" href="#启动iotdb集群"><span>启动IoTDB集群</span></a></h4><p>以下为操作步骤：</p><ul><li><p>使用 <code>mvn clean package -pl cluster -am -DskipTests</code> 编译分布式模块或直接到 <a href="https://iotdb.apache.org/Download/" target="_blank" rel="noopener noreferrer">官网</a> 下载最新版本。</p></li><li><p>保证三个节点的 6567, 6667, 9003, 9004, 40010, 40011 和 31999 端口是开放的。</p></li><li><p>将包上传到所有的服务器上。</p></li><li><p>修改配置项。</p></li><li><p>在 3 个节点上分别运行 sh sbin/start-node.sh 即可（后台运行也可）。</p></li></ul><h4 id="源码编译-2" tabindex="-1"><a class="header-anchor" href="#源码编译-2"><span>源码编译：</span></a></h4><p><strong>在三个节点上分别执行操作</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">mvn clean package -DskipTests</span>
<span class="line">chmod -R 777 ./cluster/target/</span>
<span class="line">cd cluster/target/iotdb-cluster-0.13.0-SNAPSHOT/</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用官网发布版本-2" tabindex="-1"><a class="header-anchor" href="#使用官网发布版本-2"><span>使用官网发布版本:</span></a></h4><p><strong>在三个节点上分别执行操作</strong></p><p>下载发布版本:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">curl -O https://downloads.apache.org/iotdb/0.12.4/apache-iotdb-0.12.4-cluster-bin.zip</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>解压压缩包:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">unzip apache-iotdb-0.12.4-cluster-bin.zip</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>进入IoTDB集群根目录:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">cd apache-iotdb-0.12.4-cluster-bin</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>设置 default_replica_num = 3: 配置文件中默认为3，无需修改</p><p>设置 internal_ip = 节点的私有ip (以192.168.1.1为例)</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">sed -i -e &#39;s/^internal_ip=127.0.0.1$/internal_ip=192.168.1.1/g&#39; conf/iotdb-cluster.properties</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>设置 seed_node = A_private_Ip:9003,B_private_Ip:9003,C_private_Ip:9003 (三个节点ip分别为192.168.1.1,192.168.1.2,192.168.1.3为例)</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">sed -i -e &#39;s/^seed_nodes=127.0.0.1:9003,127.0.0.1:9005,127.0.0.1:9007$/seed_nodes=192.168.1.1:9003,192.168.1.2:9003,192.168.1.3:9003/g&#39; conf/iotdb-cluster.properties</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>设置 rpc_address = 节点的公有ip (以192.168.1.1为例)</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">sed -i -e &#39;s/^rpc_address=127.0.0.1$/rpc_address=192.168.1.1/g&#39; conf/iotdb-engine.properties</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>你可以自己修改配置项而不使用“sed”命令</strong></p><p>根据配置文件路径启动三个节点:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">nohup ./sbin/start-node.sh &gt;/dev/null 2&gt;&amp;1 &amp;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,87)]))}const p=s(t,[["render",l],["__file","Cluster-Setup-Example.html.vue"]]),c=JSON.parse('{"path":"/zh/UserGuide/V0.13.x/Cluster/Cluster-Setup-Example.html","title":"","lang":"zh-CN","frontmatter":{"description":"集群搭建示例 前提条件 如果您在使用 Windows 系统，请安装 MinGW，WSL 或者 git bash。 1 节点 1 副本分布式搭建示例 源码编译： 使用官网发布版本： 单机部署 3 节点 1 副本示例 配置 通过自己修改配置来处理端口和文件目录冲突，可以在一台机器上启动多个实例。 节点1:(默认) iotdb-cluster.propert...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V0.13.x/Cluster/Cluster-Setup-Example.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Cluster/Cluster-Setup-Example.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"集群搭建示例 前提条件 如果您在使用 Windows 系统，请安装 MinGW，WSL 或者 git bash。 1 节点 1 副本分布式搭建示例 源码编译： 使用官网发布版本： 单机部署 3 节点 1 副本示例 配置 通过自己修改配置来处理端口和文件目录冲突，可以在一台机器上启动多个实例。 节点1:(默认) iotdb-cluster.propert..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"集群搭建示例","slug":"集群搭建示例","link":"#集群搭建示例","children":[{"level":3,"title":"前提条件","slug":"前提条件","link":"#前提条件","children":[]},{"level":3,"title":"1 节点 1 副本分布式搭建示例","slug":"_1-节点-1-副本分布式搭建示例","link":"#_1-节点-1-副本分布式搭建示例","children":[]},{"level":3,"title":"单机部署 3 节点 1 副本示例","slug":"单机部署-3-节点-1-副本示例","link":"#单机部署-3-节点-1-副本示例","children":[]},{"level":3,"title":"3 节点 3 副本分布式搭建示例","slug":"_3-节点-3-副本分布式搭建示例","link":"#_3-节点-3-副本分布式搭建示例","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":4.21,"words":1262},"filePathRelative":"zh/UserGuide/V0.13.x/Cluster/Cluster-Setup-Example.md","localizedDate":"2023年7月10日","autoDesc":true}');export{p as comp,c as data};
