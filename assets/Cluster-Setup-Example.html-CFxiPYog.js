import{_ as s,c as n,b as i,o as a}from"./app-W3EENNaa.js";const t={};function r(l,e){return a(),n("div",null,e[0]||(e[0]=[i(`<h2 id="prerequisite" tabindex="-1"><a class="header-anchor" href="#prerequisite"><span>Prerequisite</span></a></h2><p>Note: Please install MinGW or WSL or git bash if you are using Windows.</p><h2 id="example-of-distributed-configurations-for-1-node-and-1-replica" tabindex="-1"><a class="header-anchor" href="#example-of-distributed-configurations-for-1-node-and-1-replica"><span>Example of distributed configurations for 1 node and 1 replica</span></a></h2><h3 id="compile-from-source-code" tabindex="-1"><a class="header-anchor" href="#compile-from-source-code"><span>Compile from source code:</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">mvn clean package -DskipTests</span>
<span class="line">chmod -R 777 ./cluster/target/</span>
<span class="line">nohup ./cluster/target/iotdb-cluster-0.13.0-SNAPSHOT/sbin/start-node.sh &gt;/dev/null 2&gt;&amp;1 &amp;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="use-the-official-website-release-version" tabindex="-1"><a class="header-anchor" href="#use-the-official-website-release-version"><span>Use the official website release version:</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">curl -O https://downloads.apache.org/iotdb/0.12.1/apache-iotdb-0.12.1-cluster-bin.zip</span>
<span class="line">unzip apache-iotdb-0.12.1-cluster-bin.zip</span>
<span class="line">cd apache-iotdb-0.12.1-cluster-bin</span>
<span class="line">sed -i -e &#39;s/^seed_nodes=127.0.0.1:9003,127.0.0.1:9005,127.0.0.1:9007$/seed_nodes=127.0.0.1:9003/g&#39; conf/iotdb-cluster.properties</span>
<span class="line">sed -i -e &#39;s/^default_replica_num=3$/default_replica_num=1/g&#39; conf/iotdb-cluster.properties</span>
<span class="line">nohup ./sbin/start-node.sh &gt;/dev/null 2&gt;&amp;1 &amp;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="example-of-distributed-configurations-for-3-nodes-and-1-replica-on-a-single-machine" tabindex="-1"><a class="header-anchor" href="#example-of-distributed-configurations-for-3-nodes-and-1-replica-on-a-single-machine"><span>Example of distributed configurations for 3 nodes and 1 replica on a single machine</span></a></h2><h3 id="configurations" tabindex="-1"><a class="header-anchor" href="#configurations"><span>Configurations</span></a></h3><p>You can start multiple instances on a single machine by modifying the configurations yourself to handling port and file directory conflicts.</p><p><strong>Node1</strong>:<strong>(default)</strong></p><p><em><strong>iotdb-cluster.properties</strong></em></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">seed_nodes = 127.0.0.1:9003,127.0.0.1:9005,127.0.0.1:9007</span>
<span class="line">default_replica_num = 1</span>
<span class="line">internal_meta_port = 9003</span>
<span class="line">internal_data_port = 40010</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>iotdb-engine.properties</strong></em></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">rpc_port=6667</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>Node2</strong>:</p><p><em><strong>iotdb-cluster.properties</strong></em></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">seed_nodes = 127.0.0.1:9003,127.0.0.1:9005,127.0.0.1:9007</span>
<span class="line">default_replica_num = 1</span>
<span class="line">internal_meta_port = 9005</span>
<span class="line">internal_data_port = 40012</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>iotdb-engine.properties</strong></em></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">rpc_port=6669</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>Node3</strong>:</p><p><em><strong>iotdb-cluster.properties</strong></em></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">seed_nodes = 127.0.0.1:9003,127.0.0.1:9005,127.0.0.1:9007</span>
<span class="line">default_replica_num = 1</span>
<span class="line">internal_meta_port = 9007</span>
<span class="line">internal_data_port = 40014</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>iotdb-engine.properties</strong></em></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">rpc_port=6671</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="compile-from-source-code-1" tabindex="-1"><a class="header-anchor" href="#compile-from-source-code-1"><span>Compile from source code:</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">mvn clean package -DskipTests</span>
<span class="line">chmod -R 777 ./cluster/target/</span>
<span class="line">nohup ./cluster/target/iotdb-cluster-0.13.0-SNAPSHOT/sbin/start-node.sh ./cluster/target/test-classes/node1conf/ &gt;/dev/null 2&gt;&amp;1 &amp;</span>
<span class="line">nohup ./cluster/target/iotdb-cluster-0.13.0-SNAPSHOT/sbin/start-node.sh ./cluster/target/test-classes/node2conf/ &gt;/dev/null 2&gt;&amp;1 &amp;</span>
<span class="line">nohup ./cluster/target/iotdb-cluster-0.13.0-SNAPSHOT/sbin/start-node.sh ./cluster/target/test-classes/node3conf/ &gt;/dev/null 2&gt;&amp;1 &amp;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="use-the-official-website-release-version-1" tabindex="-1"><a class="header-anchor" href="#use-the-official-website-release-version-1"><span>Use the official website release version:</span></a></h3><p>Download the release version:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">curl -O https://downloads.apache.org/iotdb/0.12.1/apache-iotdb-0.12.1-cluster-bin.zip</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Unzip the package:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">unzip apache-iotdb-0.12.1-cluster-bin.zip</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Enter IoTDB cluster root directory:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">cd apache-iotdb-0.12.1-cluster-bin</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Set default_replica_num = 1:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">sed -i -e &#39;s/^default_replica_num=3$/default_replica_num=1/g&#39; conf/iotdb-cluster.properties</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Create conf_dir for node2 and node3:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">cp -r conf node2_conf</span>
<span class="line">cp -r conf node3_conf</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>Handle port and file directory conflicts:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">sed -i -e &#39;s/^internal_meta_port=9003$/internal_meta_port=9005/g&#39; -e &#39;s/^internal_data_port=40010$/internal_data_port=40012/g&#39; node2_conf/iotdb-cluster.properties</span>
<span class="line">sed -i -e &#39;s/^internal_meta_port=9003$/internal_meta_port=9007/g&#39; -e &#39;s/^internal_data_port=40010$/internal_data_port=40014/g&#39; node3_conf/iotdb-cluster.properties</span>
<span class="line">sed -i -e &#39;s/^rpc_port=6667$/rpc_port=6669/g&#39; -e node2_conf/iotdb-engine.properties</span>
<span class="line">sed -i -e &#39;s/^rpc_port=6667$/rpc_port=6671/g&#39; -e node3_conf/iotdb-engine.properties</span>
<span class="line">sed -i -e &#39;s/^# data_dirs=data\\/data$/data_dirs=node2\\/data/g&#39; -e &#39;s/^# wal_dir=data\\/wal$/wal_dir=node2\\/wal/g&#39; -e &#39;s/^# tracing_dir=data\\/tracing$/tracing_dir=node2\\/tracing/g&#39; -e &#39;s/^# system_dir=data\\/system$/system_dir=node2\\/system/g&#39; -e &#39;s/^# udf_root_dir=ext\\/udf$/udf_root_dir=node2\\/ext\\/udf/g&#39; -e &#39;s/^# index_root_dir=data\\/index$/index_root_dir=node2\\/index/g&#39; node2_conf/iotdb-engine.properties</span>
<span class="line">sed -i -e &#39;s/^# data_dirs=data\\/data$/data_dirs=node3\\/data/g&#39; -e &#39;s/^# wal_dir=data\\/wal$/wal_dir=node3\\/wal/g&#39; -e &#39;s/^# tracing_dir=data\\/tracing$/tracing_dir=node3\\/tracing/g&#39; -e &#39;s/^# system_dir=data\\/system$/system_dir=node3\\/system/g&#39; -e &#39;s/^# udf_root_dir=ext\\/udf$/udf_root_dir=node3\\/ext\\/udf/g&#39; -e &#39;s/^# index_root_dir=data\\/index$/index_root_dir=node3\\/index/g&#39; node3_conf/iotdb-engine.properties</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>You can modify the configuration items by yourself instead of using &quot;sed&quot; command</strong></p><p>Start the three nodes with their configurations:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">nohup ./sbin/start-node.sh &gt;/dev/null 2&gt;&amp;1 &amp;</span>
<span class="line">nohup ./sbin/start-node.sh ./node2_conf/ &gt;/dev/null 2&gt;&amp;1 &amp;</span>
<span class="line">nohup ./sbin/start-node.sh ./node3_conf/ &gt;/dev/null 2&gt;&amp;1 &amp;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="example-of-distributed-configurations-for-3-nodes-and-3-replicas" tabindex="-1"><a class="header-anchor" href="#example-of-distributed-configurations-for-3-nodes-and-3-replicas"><span>Example of distributed configurations for 3 nodes and 3 replicas</span></a></h2><p>Suppose we need to deploy the distributed IoTDB on three physical nodes, A, B, and C, whose public network IP is <em>A_public_IP</em>, <em>B_public_IP</em>, and <em>C_public_IP</em>, and private network IP is <em>A_private_IP</em>, <em>B_private_IP</em>, and <em>C_private_IP</em>.</p><p>Note: If there is no public network IP or private network IP, both can be <strong>set to the same</strong>, just need to ensure that the client can access the server. The private ip corresponds to configuration item<code>internal_ ip</code>in iotdb-cluster.properties, and the public ip corresponds to configuration item<code> rpc_ address</code> in iotdb-engine.properties.</p><h3 id="configurations-1" tabindex="-1"><a class="header-anchor" href="#configurations-1"><span>Configurations</span></a></h3><p><strong>NodeA</strong>:</p><p><em><strong>iotdb-cluster.properties</strong></em></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">seed_nodes = A_private_Ip:9003,B_private_Ip:9003,C_private_Ip:9003</span>
<span class="line">default_replica_num = 3</span>
<span class="line">internal_meta_port = 9003</span>
<span class="line">internal_data_port = 40010</span>
<span class="line">internal_ip = A_private_Ip</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>iotdb-engine.properties</strong></em></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">rpc_port = 6667</span>
<span class="line">rpc_address = A_public_ip </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>NodeB</strong>:</p><p><em><strong>iotdb-cluster.properties</strong></em></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">seed_nodes = A_private_Ip:9003,B_private_Ip:9003,C_private_Ip:9003</span>
<span class="line">default_replica_num = 3</span>
<span class="line">internal_meta_port = 9003</span>
<span class="line">internal_data_port = 40010</span>
<span class="line">internal_ip = B_private_Ip</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>iotdb-engine.properties</strong></em></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">rpc_port = 6667</span>
<span class="line">rpc_address = B_public_ip </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>NodeC</strong>:</p><p><em><strong>iotdb-cluster.properties</strong></em></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">seed_nodes = A_private_Ip:9003,B_private_Ip:9003,C_private_Ip:9003</span>
<span class="line">default_replica_num = 3</span>
<span class="line">internal_meta_port = 9003</span>
<span class="line">internal_data_port = 40010</span>
<span class="line">internal_ip = C_private_Ip</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>iotdb-engine.properties</strong></em></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">rpc_port = 6667</span>
<span class="line">rpc_address = C_public_ip </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="start-iotdb-cluster" tabindex="-1"><a class="header-anchor" href="#start-iotdb-cluster"><span>Start IoTDB cluster</span></a></h3><p>The operation steps are as follows:</p><ul><li><p>Use &#39;mvn clean package -pl cluster -am -DskipTests&#39; to compile the distributed module or directly go into the <a href="https://iotdb.apache.org/Download/" target="_blank" rel="noopener noreferrer">website</a> to download the latest version.</p></li><li><p>Make sure ports 6567, 6667, 9003, 9004, 40010, 40011 and 31999 are open on all three nodes.</p></li><li><p>Send the package to all servers.</p></li><li><p>Modify the configuration items.</p></li><li><p>Run sh sbin/start-node.sh on each of the three nodes (or run in the background).</p></li></ul><h3 id="compile-from-source-code-2" tabindex="-1"><a class="header-anchor" href="#compile-from-source-code-2"><span>Compile from source code:</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">mvn clean package -DskipTests</span>
<span class="line">chmod -R 777 ./cluster/target/</span>
<span class="line">cd cluster/target/iotdb-cluster-0.13.0-SNAPSHOT/</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="use-the-official-website-release-version-2" tabindex="-1"><a class="header-anchor" href="#use-the-official-website-release-version-2"><span>Use the official website release version:</span></a></h3><p>Download the release version:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">curl -O https://downloads.apache.org/iotdb/0.12.4/apache-iotdb-0.12.4-cluster-bin.zip</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Unzip the package:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">unzip apache-iotdb-0.12.4-cluster-bin.zip</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Enter IoTDB cluster root directory:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">cd apache-iotdb-0.12.4-cluster-bin</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Set default_replica_num = 3: default value of this configuration item is 3</p><p>Set internal_ip = private ip of node (e.g. 192.168.1.1)</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">sed -i -e &#39;s/^internal_ip=127.0.0.1$/internal_ip=192.168.1.1/g&#39; conf/iotdb-cluster.properties</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Set seed_node = A_private_Ip:9003,B_private_Ip:9003,C_private_Ip:9003 (e.g. private ip of all three nodes are 192.168.1.1,192.168.1.2,192.168.1.3)</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">sed -i -e &#39;s/^seed_nodes=127.0.0.1:9003,127.0.0.1:9005,127.0.0.1:9007$/seed_nodes=192.168.1.1:9003,192.168.1.2:9003,192.168.1.3:9003/g&#39; conf/iotdb-cluster.properties</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Set rpc_address = public ip of node (e.g. 192.168.1.1)</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">sed -i -e &#39;s/^rpc_address=127.0.0.1$/rpc_address=192.168.1.1/g&#39; conf/iotdb-engine.properties</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>You can modify the configuration items by yourself instead of using &quot;sed&quot; command</strong></p><p>Start the three nodes with their configurations:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">nohup ./sbin/start-node.sh &gt;/dev/null 2&gt;&amp;1 &amp;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,84)]))}const o=s(t,[["render",r],["__file","Cluster-Setup-Example.html.vue"]]),p=JSON.parse('{"path":"/UserGuide/V0.13.x/Cluster/Cluster-Setup-Example.html","title":"","lang":"en-US","frontmatter":{"description":"Prerequisite Note: Please install MinGW or WSL or git bash if you are using Windows. Example of distributed configurations for 1 node and 1 replica Compile from source code: Use...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Cluster/Cluster-Setup-Example.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V0.13.x/Cluster/Cluster-Setup-Example.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"Prerequisite Note: Please install MinGW or WSL or git bash if you are using Windows. Example of distributed configurations for 1 node and 1 replica Compile from source code: Use..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Prerequisite","slug":"prerequisite","link":"#prerequisite","children":[]},{"level":2,"title":"Example of distributed configurations for 1 node and 1 replica","slug":"example-of-distributed-configurations-for-1-node-and-1-replica","link":"#example-of-distributed-configurations-for-1-node-and-1-replica","children":[{"level":3,"title":"Compile from source code:","slug":"compile-from-source-code","link":"#compile-from-source-code","children":[]},{"level":3,"title":"Use the official website release version:","slug":"use-the-official-website-release-version","link":"#use-the-official-website-release-version","children":[]}]},{"level":2,"title":"Example of distributed configurations for 3 nodes and 1 replica on a single machine","slug":"example-of-distributed-configurations-for-3-nodes-and-1-replica-on-a-single-machine","link":"#example-of-distributed-configurations-for-3-nodes-and-1-replica-on-a-single-machine","children":[{"level":3,"title":"Configurations","slug":"configurations","link":"#configurations","children":[]},{"level":3,"title":"Compile from source code:","slug":"compile-from-source-code-1","link":"#compile-from-source-code-1","children":[]},{"level":3,"title":"Use the official website release version:","slug":"use-the-official-website-release-version-1","link":"#use-the-official-website-release-version-1","children":[]}]},{"level":2,"title":"Example of distributed configurations for 3 nodes and 3 replicas","slug":"example-of-distributed-configurations-for-3-nodes-and-3-replicas","link":"#example-of-distributed-configurations-for-3-nodes-and-3-replicas","children":[{"level":3,"title":"Configurations","slug":"configurations-1","link":"#configurations-1","children":[]},{"level":3,"title":"Start IoTDB cluster","slug":"start-iotdb-cluster","link":"#start-iotdb-cluster","children":[]},{"level":3,"title":"Compile from source code:","slug":"compile-from-source-code-2","link":"#compile-from-source-code-2","children":[]},{"level":3,"title":"Use the official website release version:","slug":"use-the-official-website-release-version-2","link":"#use-the-official-website-release-version-2","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":3.56,"words":1069},"filePathRelative":"UserGuide/V0.13.x/Cluster/Cluster-Setup-Example.md","localizedDate":"July 10, 2023","autoDesc":true}');export{o as comp,p as data};
