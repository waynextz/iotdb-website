import{_ as s,c as a,b as e,o as t}from"./app-CRFlbjpx.js";const o={};function i(l,n){return t(),a("div",null,n[0]||(n[0]=[e(`<h2 id="way-to-get-iotdb-binary-files" tabindex="-1"><a class="header-anchor" href="#way-to-get-iotdb-binary-files"><span>Way to get IoTDB binary files</span></a></h2><p>IoTDB provides you three installation methods, you can refer to the following suggestions, choose one of them:</p><ul><li>Installation from source code. If you need to modify the code yourself, you can use this method.</li><li>Installation from binary files. Download the binary files from the official website. This is the recommended method, in which you will get a binary released package which is out-of-the-box.</li><li>Using Docker：The path to the dockerfile is <a href="https://github.com/apache/iotdb/blob/master/docker/Dockerfile" target="_blank" rel="noopener noreferrer">https://github.com/apache/iotdb/blob/master/docker/Dockerfile</a></li></ul><h3 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites"><span>Prerequisites</span></a></h3><p>To use IoTDB, you need to have:</p><ol><li>Java &gt;= 1.8 (Please make sure the environment path has been set)</li><li>Maven &gt;= 3.6 (Optional)</li><li>Set the max open files num as 65535 to avoid &quot;too many open files&quot; problem.</li></ol><blockquote><p>Note: If you don&#39;t have maven installed, you should replace &#39;mvn&#39; in the following commands with &#39;mvnw&#39; or &#39;mvnw.cmd&#39;.</p><h3 id="installation-from-binary-files" tabindex="-1"><a class="header-anchor" href="#installation-from-binary-files"><span>Installation from binary files</span></a></h3></blockquote><p>You can download the binary file from:<br><a href="https://iotdb.apache.org/Download/" target="_blank" rel="noopener noreferrer">Download page</a></p><h3 id="installation-from-source-code" tabindex="-1"><a class="header-anchor" href="#installation-from-source-code"><span>Installation from source code</span></a></h3><p>You can get the released source code from <a href="https://iotdb.apache.org/Download/" target="_blank" rel="noopener noreferrer">https://iotdb.apache.org/Download/</a>, or from the git repository <a href="https://github.com/apache/iotdb/tree/master" target="_blank" rel="noopener noreferrer">https://github.com/apache/iotdb/tree/master</a><br> You can download the source code from:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">git clone https://github.com/apache/iotdb.git</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>After that, go to the root path of IoTDB. If you want to build the version that we have released, you need to create and check out a new branch by command <code>git checkout -b my_{project.version} v{project.version}</code>. E.g., you want to build the version <code>0.12.4</code>, you can execute this command to make it:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token operator">&gt;</span> <span class="token function">git</span> checkout <span class="token parameter variable">-b</span> my_0.12.4 v0.12.4</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Then you can execute this command to build the version that you want:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&gt; mvn clean package -DskipTests</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Then the binary version (including both server and client) can be found at <strong>distribution/target/apache-iotdb-{project.version}-bin.zip</strong></p><blockquote><p>NOTE: Directories &quot;thrift/target/generated-sources/thrift&quot; and &quot;antlr/target/generated-sources/antlr4&quot; need to be added to sources roots to avoid compilation errors in IDE.</p></blockquote><p>If you would like to build the IoTDB server, you can run the following command under the root path of iotdb:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&gt; mvn clean package -pl server -am -DskipTests</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>After build, the IoTDB server will be at the folder &quot;server/target/iotdb-server-{project.version}&quot;.</p><p>If you would like to build a module, you can execute command <code>mvn clean package -pl {module.name} -am -DskipTests</code> under the root path of IoTDB.<br> If you need the jar with dependencies, you can add parameter <code>-P get-jar-with-dependencies</code> after the command. E.g., If you need the jar of jdbc with dependencies, you can execute this command:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token operator">&gt;</span> mvn clean package <span class="token parameter variable">-pl</span> jdbc <span class="token parameter variable">-am</span> <span class="token parameter variable">-DskipTests</span> <span class="token parameter variable">-P</span> get-jar-with-dependencies</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Then you can find it under the path <code>{module.name}/target</code>.</p><h3 id="installation-by-docker" tabindex="-1"><a class="header-anchor" href="#installation-by-docker"><span>Installation by Docker</span></a></h3><p>Apache IoTDB&#39; Docker image is released on <a href="https://hub.docker.com/r/apache/iotdb" target="_blank" rel="noopener noreferrer">https://hub.docker.com/r/apache/iotdb</a><br> Add environments of docker to update the configurations of Apache IoTDB.</p><h4 id="have-a-try" tabindex="-1"><a class="header-anchor" href="#have-a-try"><span>Have a try</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># get IoTDB official image</span></span>
<span class="line"><span class="token function">docker</span> pull apache/iotdb:1.0.1-standalone</span>
<span class="line"><span class="token comment"># create docker bridge network</span></span>
<span class="line"><span class="token function">docker</span> network create <span class="token parameter variable">--driver</span><span class="token operator">=</span>bridge <span class="token parameter variable">--subnet</span><span class="token operator">=</span><span class="token number">172.18</span>.0.0/16 <span class="token parameter variable">--gateway</span><span class="token operator">=</span><span class="token number">172.18</span>.0.1 iotdb</span>
<span class="line"><span class="token comment"># create docker container</span></span>
<span class="line"><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> iotdb-service <span class="token punctuation">\\</span></span>
<span class="line">              <span class="token parameter variable">--hostname</span> iotdb-service <span class="token punctuation">\\</span></span>
<span class="line">              <span class="token parameter variable">--network</span> iotdb <span class="token punctuation">\\</span></span>
<span class="line">              <span class="token parameter variable">--ip</span> <span class="token number">172.18</span>.0.6 <span class="token punctuation">\\</span></span>
<span class="line">              <span class="token parameter variable">-p</span> <span class="token number">6667</span>:6667 <span class="token punctuation">\\</span></span>
<span class="line">              <span class="token parameter variable">-e</span> <span class="token assign-left variable">cn_internal_address</span><span class="token operator">=</span>iotdb-service <span class="token punctuation">\\</span></span>
<span class="line">              <span class="token parameter variable">-e</span> <span class="token assign-left variable">cn_target_config_node_list</span><span class="token operator">=</span>iotdb-service:10710 <span class="token punctuation">\\</span></span>
<span class="line">              <span class="token parameter variable">-e</span> <span class="token assign-left variable">cn_internal_port</span><span class="token operator">=</span><span class="token number">10710</span> <span class="token punctuation">\\</span></span>
<span class="line">              <span class="token parameter variable">-e</span> <span class="token assign-left variable">cn_consensus_port</span><span class="token operator">=</span><span class="token number">10720</span> <span class="token punctuation">\\</span></span>
<span class="line">              <span class="token parameter variable">-e</span> <span class="token assign-left variable">dn_rpc_address</span><span class="token operator">=</span>iotdb-service <span class="token punctuation">\\</span></span>
<span class="line">              <span class="token parameter variable">-e</span> <span class="token assign-left variable">dn_internal_address</span><span class="token operator">=</span>iotdb-service <span class="token punctuation">\\</span></span>
<span class="line">              <span class="token parameter variable">-e</span> <span class="token assign-left variable">dn_target_config_node_list</span><span class="token operator">=</span>iotdb-service:10710 <span class="token punctuation">\\</span></span>
<span class="line">              <span class="token parameter variable">-e</span> <span class="token assign-left variable">dn_mpp_data_exchange_port</span><span class="token operator">=</span><span class="token number">10740</span> <span class="token punctuation">\\</span></span>
<span class="line">              <span class="token parameter variable">-e</span> <span class="token assign-left variable">dn_schema_region_consensus_port</span><span class="token operator">=</span><span class="token number">10750</span> <span class="token punctuation">\\</span></span>
<span class="line">              <span class="token parameter variable">-e</span> <span class="token assign-left variable">dn_data_region_consensus_port</span><span class="token operator">=</span><span class="token number">10760</span> <span class="token punctuation">\\</span></span>
<span class="line">              <span class="token parameter variable">-e</span> <span class="token assign-left variable">dn_rpc_port</span><span class="token operator">=</span><span class="token number">6667</span> <span class="token punctuation">\\</span></span>
<span class="line">              apache/iotdb:1.0.1-standalone              </span>
<span class="line"><span class="token comment"># execute SQL</span></span>
<span class="line"><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-ti</span> iotdb-service /iotdb/sbin/start-cli.sh <span class="token parameter variable">-h</span> iotdb-service</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>External access：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># &lt;IP Address/hostname&gt; is the real IP or domain address rather than the one in docker network, could be 127.0.0.1 within the computer.</span></span>
<span class="line"><span class="token variable">$IOTDB_HOME</span>/sbin/start-cli.sh <span class="token parameter variable">-h</span> <span class="token operator">&lt;</span>IP Address/hostname<span class="token operator">&gt;</span> <span class="token parameter variable">-p</span> <span class="token number">6667</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>Notice：The confignode service would fail when restarting this container if the IP Adress of the container has been changed.</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token comment"># docker-compose-standalone.yml</span></span>
<span class="line"><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span></span>
<span class="line"><span class="token key atrule">services</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">iotdb-service</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> apache/iotdb<span class="token punctuation">:</span>1.0.1<span class="token punctuation">-</span>standalone</span>
<span class="line">    <span class="token key atrule">hostname</span><span class="token punctuation">:</span> iotdb<span class="token punctuation">-</span>service</span>
<span class="line">    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> iotdb<span class="token punctuation">-</span>service</span>
<span class="line">    <span class="token key atrule">ports</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token string">&quot;6667:6667&quot;</span></span>
<span class="line">    <span class="token key atrule">environment</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> cn_internal_address=iotdb<span class="token punctuation">-</span>service</span>
<span class="line">      <span class="token punctuation">-</span> cn_internal_port=10710</span>
<span class="line">      <span class="token punctuation">-</span> cn_consensus_port=10720</span>
<span class="line">      <span class="token punctuation">-</span> cn_target_config_node_list=iotdb<span class="token punctuation">-</span>service<span class="token punctuation">:</span><span class="token number">10710</span></span>
<span class="line">      <span class="token punctuation">-</span> dn_rpc_address=iotdb<span class="token punctuation">-</span>service</span>
<span class="line">      <span class="token punctuation">-</span> dn_rpc_port=6667</span>
<span class="line">      <span class="token punctuation">-</span> dn_mpp_data_exchange_port=10740</span>
<span class="line">      <span class="token punctuation">-</span> dn_schema_region_consensus_port=10750</span>
<span class="line">      <span class="token punctuation">-</span> dn_data_region_consensus_port=10760</span>
<span class="line">      <span class="token punctuation">-</span> dn_target_config_node_list=iotdb<span class="token punctuation">-</span>service<span class="token punctuation">:</span><span class="token number">10710</span></span>
<span class="line">    <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token punctuation">-</span> ./data<span class="token punctuation">:</span>/iotdb/data</span>
<span class="line">        <span class="token punctuation">-</span> ./logs<span class="token punctuation">:</span>/iotdb/logs</span>
<span class="line">    <span class="token key atrule">networks</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">iotdb</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">ipv4_address</span><span class="token punctuation">:</span> 172.18.0.6</span>
<span class="line"></span>
<span class="line"><span class="token key atrule">networks</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">iotdb</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">external</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="deploy-cluster" tabindex="-1"><a class="header-anchor" href="#deploy-cluster"><span>deploy cluster</span></a></h4><p>Until now, we support host and overlay networks but haven&#39;t supported bridge networks on multiple computers.<br> Overlay networks see <a href="https://github.com/apache/iotdb/tree/master/docker/src/main/DockerCompose/docker-compose-cluster-1c2d.yml" target="_blank" rel="noopener noreferrer">1C2D</a> and here are the configurations and operation steps to start an IoTDB cluster with docker using host networks。</p><p>Suppose that there are three computers of iotdb-1, iotdb-2 and iotdb-3. We called them nodes.<br> Here is the docker-compose file of iotdb-2, as the sample:</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span></span>
<span class="line"><span class="token key atrule">services</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">iotdb-confignode</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> apache/iotdb<span class="token punctuation">:</span>1.0.1<span class="token punctuation">-</span>confignode</span>
<span class="line">    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> iotdb<span class="token punctuation">-</span>confignode1.0.1<span class="token punctuation">-</span></span>
<span class="line">    <span class="token key atrule">environment</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> cn_internal_address=iotdb<span class="token punctuation">-</span><span class="token number">2</span></span>
<span class="line">      <span class="token punctuation">-</span> cn_target_config_node_list=iotdb<span class="token punctuation">-</span>1<span class="token punctuation">:</span><span class="token number">10710</span></span>
<span class="line">      <span class="token punctuation">-</span> cn_internal_port=10710</span>
<span class="line">      <span class="token punctuation">-</span> cn_consensus_port=10720</span>
<span class="line">      <span class="token punctuation">-</span> schema_replication_factor=3</span>
<span class="line">      <span class="token punctuation">-</span> schema_region_consensus_protocol_class=org.apache.iotdb.consensus.ratis.RatisConsensus</span>
<span class="line">      <span class="token punctuation">-</span> config_node_consensus_protocol_class=org.apache.iotdb.consensus.ratis.RatisConsensus</span>
<span class="line">      <span class="token punctuation">-</span> data_replication_factor=3</span>
<span class="line">      <span class="token punctuation">-</span> data_region_consensus_protocol_class=org.apache.iotdb.consensus.iot.IoTConsensus</span>
<span class="line">    <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> /etc/hosts<span class="token punctuation">:</span>/etc/hosts<span class="token punctuation">:</span>ro</span>
<span class="line">      <span class="token punctuation">-</span> ./data/confignode<span class="token punctuation">:</span>/iotdb/data</span>
<span class="line">      <span class="token punctuation">-</span> ./logs/confignode<span class="token punctuation">:</span>/iotdb/logs</span>
<span class="line">    <span class="token key atrule">network_mode</span><span class="token punctuation">:</span> <span class="token string">&quot;host&quot;</span></span>
<span class="line"></span>
<span class="line">  <span class="token key atrule">iotdb-datanode</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> apache/iotdb<span class="token punctuation">:</span>1.0.1<span class="token punctuation">-</span>datanode</span>
<span class="line">    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> iotdb<span class="token punctuation">-</span>datanode</span>
<span class="line">    <span class="token key atrule">environment</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> dn_rpc_address=iotdb<span class="token punctuation">-</span><span class="token number">2</span></span>
<span class="line">      <span class="token punctuation">-</span> dn_internal_address=iotdb<span class="token punctuation">-</span><span class="token number">2</span></span>
<span class="line">      <span class="token punctuation">-</span> dn_target_config_node_list=iotdb<span class="token punctuation">-</span>1<span class="token punctuation">:</span><span class="token number">10710</span></span>
<span class="line">      <span class="token punctuation">-</span> data_replication_factor=3</span>
<span class="line">      <span class="token punctuation">-</span> dn_rpc_port=6667</span>
<span class="line">      <span class="token punctuation">-</span> dn_mpp_data_exchange_port=10740</span>
<span class="line">      <span class="token punctuation">-</span> dn_schema_region_consensus_port=10750</span>
<span class="line">      <span class="token punctuation">-</span> dn_data_region_consensus_port=10760</span>
<span class="line">      <span class="token punctuation">-</span> data_region_consensus_protocol_class=org.apache.iotdb.consensus.iot.IoTConsensus</span>
<span class="line">       <span class="token punctuation">-</span> schema_replication_factor=3</span>
<span class="line">      <span class="token punctuation">-</span> schema_region_consensus_protocol_class=org.apache.iotdb.consensus.ratis.RatisConsensus</span>
<span class="line">      <span class="token punctuation">-</span> config_node_consensus_protocol_class=org.apache.iotdb.consensus.ratis.RatisConsensus</span>
<span class="line">    <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> /etc/hosts<span class="token punctuation">:</span>/etc/hosts<span class="token punctuation">:</span>ro</span>
<span class="line">      <span class="token punctuation">-</span> ./data/datanode<span class="token punctuation">:</span>/iotdb/data/</span>
<span class="line">      <span class="token punctuation">-</span> ./logs/datanode<span class="token punctuation">:</span>/iotdb/logs/</span>
<span class="line">    <span class="token key atrule">network_mode</span><span class="token punctuation">:</span> <span class="token string">&quot;host&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Notice：</p><ol><li>The <code>dn_target_config_node_list</code> of three nodes must the same and it is the first starting node of <code>iotdb-1</code> with the cn_internal_port of 10710。</li><li>In this docker-compose file，<code>iotdb-2</code> should be replace with the real IP or hostname of each node to generate docker compose files in the other nodes.</li><li>The services would talk with each other, so they need map the /etc/hosts file or add the <code>extra_hosts</code> to the docker compose file.</li><li>We must start the IoTDB services of <code>iotdb-1</code> first at the first time of starting.</li><li>Stop and remove all the IoTDB services and clean up the <code>data</code> and <code>logs</code> directories of the 3 nodes，then start the cluster again.</li></ol><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration"><span>Configuration</span></a></h2><p>All configuration files are in the directory of <code>conf</code>.<br> The elements of environment in docker-compose file is the configurations of IoTDB.<br> If you&#39;d changed the configurations files in conf, please map the directory of <code>conf</code> in docker-compose file.</p><h3 id="log-level" tabindex="-1"><a class="header-anchor" href="#log-level"><span>log level</span></a></h3><p>The conf directory contains log configuration files, namely logback-confignode.xml and logback-datanode.xml.</p><h3 id="memory-set" tabindex="-1"><a class="header-anchor" href="#memory-set"><span>memory set</span></a></h3><p>The conf directory contains memory configuration files, namely <a href="http://confignode-env.sh" target="_blank" rel="noopener noreferrer">confignode-env.sh</a> and <a href="http://datanode-env.sh" target="_blank" rel="noopener noreferrer">datanode-env.sh</a>. JVM heap size uses MAX_HEAP_SIZE and HEAP_NEWSIZE, and JVM direct memroy uses MAX_DIRECT_MEMORY_SIZE. e.g. <code>MAX_HEAP_SIZE=8G, HEAP_NEWSIZE=8G, MAX_DIRECT_MEMORY_SIZE=2G</code></p><h2 id="upgrade-iotdb" tabindex="-1"><a class="header-anchor" href="#upgrade-iotdb"><span>upgrade IoTDB</span></a></h2><ol><li>Downloads the newer IoTDB docker image from docker hub</li><li>Update the image of docker-compose file</li><li>Stop the IoTDB docker containers with the commands of docker stop and docker rm.</li><li>Start IoTDB with <code>docker-compose -f docker-compose-standalone.yml up -d</code></li></ol><h2 id="boot-automatically" tabindex="-1"><a class="header-anchor" href="#boot-automatically"><span>boot automatically</span></a></h2><ol><li>Add <code>restart: always</code> to every service of IoTDB in docker-compose file</li><li>Set docker service to boot automatically<br> e.g. in CentOS: <code>systemctl enable docker</code></li></ol>`,47)]))}const c=s(o,[["render",i],["__file","WayToGetIoTDB.html.vue"]]),r=JSON.parse('{"path":"/UserGuide/V1.0.x/QuickStart/WayToGetIoTDB.html","title":"","lang":"en-US","frontmatter":{"description":"Way to get IoTDB binary files IoTDB provides you three installation methods, you can refer to the following suggestions, choose one of them: Installation from source code. If yo...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/QuickStart/WayToGetIoTDB.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.0.x/QuickStart/WayToGetIoTDB.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"Way to get IoTDB binary files IoTDB provides you three installation methods, you can refer to the following suggestions, choose one of them: Installation from source code. If yo..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-18T04:24:04.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-18T04:24:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-18T04:24:04.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Way to get IoTDB binary files","slug":"way-to-get-iotdb-binary-files","link":"#way-to-get-iotdb-binary-files","children":[{"level":3,"title":"Prerequisites","slug":"prerequisites","link":"#prerequisites","children":[]},{"level":3,"title":"Installation from source code","slug":"installation-from-source-code","link":"#installation-from-source-code","children":[]},{"level":3,"title":"Installation by Docker","slug":"installation-by-docker","link":"#installation-by-docker","children":[]}]},{"level":2,"title":"Configuration","slug":"configuration","link":"#configuration","children":[{"level":3,"title":"log level","slug":"log-level","link":"#log-level","children":[]},{"level":3,"title":"memory set","slug":"memory-set","link":"#memory-set","children":[]}]},{"level":2,"title":"upgrade IoTDB","slug":"upgrade-iotdb","link":"#upgrade-iotdb","children":[]},{"level":2,"title":"boot automatically","slug":"boot-automatically","link":"#boot-automatically","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1710735844000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1},{"name":"changxue2022","email":"115675618+changxue2022@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":4.14,"words":1242},"filePathRelative":"UserGuide/V1.0.x/QuickStart/WayToGetIoTDB.md","localizedDate":"July 10, 2023","autoDesc":true}');export{c as comp,r as data};
