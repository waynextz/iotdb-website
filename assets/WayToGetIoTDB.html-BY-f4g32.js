import{_ as e,c as n,b as a,o}from"./app-C-0rb--l.js";const l={};function t(i,s){return o(),n("div",null,s[0]||(s[0]=[a(`<h2 id="way-to-get-iotdb-binary-files" tabindex="-1"><a class="header-anchor" href="#way-to-get-iotdb-binary-files"><span>Way to get IoTDB binary files</span></a></h2><p>IoTDB provides you three installation methods, you can refer to the following suggestions, choose one of them:</p><ul><li>Installation from source code. If you need to modify the code yourself, you can use this method.</li><li>Installation from binary files. Download the binary files from the official website. This is the recommended method, in which you will get a binary released package which is out-of-the-box.</li><li>Using Docker：The path to the dockerfile is <a href="https://github.com/apache/iotdb/blob/master/docker/Dockerfile" target="_blank" rel="noopener noreferrer">https://github.com/apache/iotdb/blob/master/docker/Dockerfile</a></li></ul><h3 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites"><span>Prerequisites</span></a></h3><p>To use IoTDB, you need to have:</p><ol><li>Java &gt;= 1.8 (Please make sure the environment path has been set)</li><li>Maven &gt;= 3.6 (Optional)</li><li>Set the max open files num as 65535 to avoid &quot;too many open files&quot; problem.</li></ol><blockquote><p>Note: If you don&#39;t have maven installed, you should replace &#39;mvn&#39; in the following commands with &#39;mvnw&#39; or &#39;mvnw.cmd&#39;.</p><h3 id="installation-from-binary-files" tabindex="-1"><a class="header-anchor" href="#installation-from-binary-files"><span>Installation from binary files</span></a></h3></blockquote><p>You can download the binary file from:<br><a href="https://iotdb.apache.org/Download/" target="_blank" rel="noopener noreferrer">Download page</a></p><h3 id="installation-from-source-code" tabindex="-1"><a class="header-anchor" href="#installation-from-source-code"><span>Installation from source code</span></a></h3><p>You can get the released source code from <a href="https://iotdb.apache.org/Download/" target="_blank" rel="noopener noreferrer">https://iotdb.apache.org/Download/</a>, or from the git repository <a href="https://github.com/apache/iotdb/tree/master" target="_blank" rel="noopener noreferrer">https://github.com/apache/iotdb/tree/master</a><br> You can download the source code from:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>git clone https://github.com/apache/iotdb.git</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>After that, go to the root path of IoTDB. If you want to build the version that we have released, you need to create and check out a new branch by command <code>git checkout -b my_{project.version} v{project.version}</code>. E.g., you want to build the version <code>0.12.4</code>, you can execute this command to make it:</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#ABB2BF;">&gt; git checkout -b my_0.12.4 v0.12.4</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Then you can execute this command to build the version that you want:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>&gt; mvn clean package -DskipTests</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Then the binary version (including both server and client) can be found at <strong>distribution/target/apache-iotdb-{project.version}-bin.zip</strong></p><blockquote><p>NOTE: Directories &quot;thrift/target/generated-sources/thrift&quot; and &quot;antlr/target/generated-sources/antlr4&quot; need to be added to sources roots to avoid compilation errors in IDE.</p></blockquote><p>If you would like to build the IoTDB server, you can run the following command under the root path of iotdb:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>&gt; mvn clean package -pl server -am -DskipTests</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>After build, the IoTDB server will be at the folder &quot;server/target/iotdb-server-{project.version}&quot;.</p><p>If you would like to build a module, you can execute command <code>mvn clean package -pl {module.name} -am -DskipTests</code> under the root path of IoTDB.<br> If you need the jar with dependencies, you can add parameter <code>-P get-jar-with-dependencies</code> after the command. E.g., If you need the jar of jdbc with dependencies, you can execute this command:</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#ABB2BF;">&gt; mvn clean package -pl jdbc -am -DskipTests -P get-jar-with-dependencies</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Then you can find it under the path <code>{module.name}/target</code>.</p><h3 id="installation-by-docker" tabindex="-1"><a class="header-anchor" href="#installation-by-docker"><span>Installation by Docker</span></a></h3><p>Apache IoTDB&#39; Docker image is released on <a href="https://hub.docker.com/r/apache/iotdb" target="_blank" rel="noopener noreferrer">https://hub.docker.com/r/apache/iotdb</a><br> Add environments of docker to update the configurations of Apache IoTDB.</p><h4 id="have-a-try" tabindex="-1"><a class="header-anchor" href="#have-a-try"><span>Have a try</span></a></h4><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># get IoTDB official image</span></span>
<span class="line"><span style="color:#61AFEF;">docker</span><span style="color:#98C379;"> pull</span><span style="color:#98C379;"> apache/iotdb:1.1.0-standalone</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># create docker bridge network</span></span>
<span class="line"><span style="color:#61AFEF;">docker</span><span style="color:#98C379;"> network</span><span style="color:#98C379;"> create</span><span style="color:#D19A66;"> --driver=bridge</span><span style="color:#D19A66;"> --subnet=172.18.0.0/16</span><span style="color:#D19A66;"> --gateway=172.18.0.1</span><span style="color:#98C379;"> iotdb</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># create docker container</span></span>
<span class="line"><span style="color:#61AFEF;">docker</span><span style="color:#98C379;"> run</span><span style="color:#D19A66;"> -d</span><span style="color:#D19A66;"> --name</span><span style="color:#98C379;"> iotdb-service</span><span style="color:#56B6C2;"> \\</span></span>
<span class="line"><span style="color:#D19A66;">              --hostname</span><span style="color:#98C379;"> iotdb-service</span><span style="color:#56B6C2;"> \\</span></span>
<span class="line"><span style="color:#D19A66;">              --network</span><span style="color:#98C379;"> iotdb</span><span style="color:#56B6C2;"> \\</span></span>
<span class="line"><span style="color:#D19A66;">              --ip</span><span style="color:#D19A66;"> 172.18.0.6</span><span style="color:#56B6C2;"> \\</span></span>
<span class="line"><span style="color:#D19A66;">              -p</span><span style="color:#98C379;"> 6667:6667</span><span style="color:#56B6C2;"> \\</span></span>
<span class="line"><span style="color:#D19A66;">              -e</span><span style="color:#98C379;"> cn_internal_address=iotdb-service</span><span style="color:#56B6C2;"> \\</span></span>
<span class="line"><span style="color:#D19A66;">              -e</span><span style="color:#98C379;"> cn_target_config_node_list=iotdb-service:10710</span><span style="color:#56B6C2;"> \\</span></span>
<span class="line"><span style="color:#D19A66;">              -e</span><span style="color:#98C379;"> cn_internal_port=</span><span style="color:#D19A66;">10710</span><span style="color:#56B6C2;"> \\</span></span>
<span class="line"><span style="color:#D19A66;">              -e</span><span style="color:#98C379;"> cn_consensus_port=</span><span style="color:#D19A66;">10720</span><span style="color:#56B6C2;"> \\</span></span>
<span class="line"><span style="color:#D19A66;">              -e</span><span style="color:#98C379;"> dn_rpc_address=iotdb-service</span><span style="color:#56B6C2;"> \\</span></span>
<span class="line"><span style="color:#D19A66;">              -e</span><span style="color:#98C379;"> dn_internal_address=iotdb-service</span><span style="color:#56B6C2;"> \\</span></span>
<span class="line"><span style="color:#D19A66;">              -e</span><span style="color:#98C379;"> dn_target_config_node_list=iotdb-service:10710</span><span style="color:#56B6C2;"> \\</span></span>
<span class="line"><span style="color:#D19A66;">              -e</span><span style="color:#98C379;"> dn_mpp_data_exchange_port=</span><span style="color:#D19A66;">10740</span><span style="color:#56B6C2;"> \\</span></span>
<span class="line"><span style="color:#D19A66;">              -e</span><span style="color:#98C379;"> dn_schema_region_consensus_port=</span><span style="color:#D19A66;">10750</span><span style="color:#56B6C2;"> \\</span></span>
<span class="line"><span style="color:#D19A66;">              -e</span><span style="color:#98C379;"> dn_data_region_consensus_port=</span><span style="color:#D19A66;">10760</span><span style="color:#56B6C2;"> \\</span></span>
<span class="line"><span style="color:#D19A66;">              -e</span><span style="color:#98C379;"> dn_rpc_port=</span><span style="color:#D19A66;">6667</span><span style="color:#56B6C2;"> \\</span></span>
<span class="line"><span style="color:#98C379;">              apache/iotdb:1.1.0-standalone</span><span style="color:#ABB2BF;">              </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># execute SQL</span></span>
<span class="line"><span style="color:#61AFEF;">docker</span><span style="color:#98C379;"> exec</span><span style="color:#D19A66;"> -ti</span><span style="color:#98C379;"> iotdb-service</span><span style="color:#98C379;"> /iotdb/sbin/start-cli.sh</span><span style="color:#D19A66;"> -h</span><span style="color:#98C379;"> iotdb-service</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>External access：</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># &lt;IP Address/hostname&gt; is the real IP or domain address rather than the one in docker network, could be 127.0.0.1 within the computer.</span></span>
<span class="line"><span style="color:#E06C75;">$IOTDB_HOME</span><span style="color:#ABB2BF;">/sbin/start-cli.sh -h &lt;IP Address/hostname&gt; -p 6667</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>Notice：The confignode service would fail when restarting this container if the IP Adress of the container has been changed.</p><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># docker-compose-standalone.yml</span></span>
<span class="line"><span style="color:#E06C75;">version</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;3&quot;</span></span>
<span class="line"><span style="color:#E06C75;">services</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;">  iotdb-service</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;">    image</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">apache/iotdb:1.1.0-standalone</span></span>
<span class="line"><span style="color:#E06C75;">    hostname</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">iotdb-service</span></span>
<span class="line"><span style="color:#E06C75;">    container_name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">iotdb-service</span></span>
<span class="line"><span style="color:#E06C75;">    ports</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#98C379;">&quot;6667:6667&quot;</span></span>
<span class="line"><span style="color:#E06C75;">    environment</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#98C379;">cn_internal_address=iotdb-service</span></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#98C379;">cn_internal_port=10710</span></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#98C379;">cn_consensus_port=10720</span></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#98C379;">cn_target_config_node_list=iotdb-service:10710</span></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#98C379;">dn_rpc_address=iotdb-service</span></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#98C379;">dn_internal_address=iotdb-service</span></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#98C379;">dn_rpc_port=6667</span></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#98C379;">dn_mpp_data_exchange_port=10740</span></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#98C379;">dn_schema_region_consensus_port=10750</span></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#98C379;">dn_data_region_consensus_port=10760</span></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#98C379;">dn_target_config_node_list=iotdb-service:10710</span></span>
<span class="line"><span style="color:#E06C75;">    volumes</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">        - </span><span style="color:#98C379;">./data:/iotdb/data</span></span>
<span class="line"><span style="color:#ABB2BF;">        - </span><span style="color:#98C379;">./logs:/iotdb/logs</span></span>
<span class="line"><span style="color:#E06C75;">    networks</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;">      iotdb</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;">        ipv4_address</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">172.18.0.6</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">networks</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;">  iotdb</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;">    external</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="deploy-cluster" tabindex="-1"><a class="header-anchor" href="#deploy-cluster"><span>deploy cluster</span></a></h4><p>Until now, we support host and overlay networks but haven&#39;t supported bridge networks on multiple computers.<br> Overlay networks see <a href="https://github.com/apache/iotdb/tree/master/docker/src/main/DockerCompose/docker-compose-cluster-1c2d.yml" target="_blank" rel="noopener noreferrer">1C2D</a> and here are the configurations and operation steps to start an IoTDB cluster with docker using host networks。</p><p>Suppose that there are three computers of iotdb-1, iotdb-2 and iotdb-3. We called them nodes.<br> Here is the docker-compose file of iotdb-2, as the sample:</p><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#E06C75;">version</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;3&quot;</span></span>
<span class="line"><span style="color:#E06C75;">services</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;">  iotdb-confignode</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;">    image</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">apache/iotdb:1.1.0-confignode</span></span>
<span class="line"><span style="color:#E06C75;">    container_name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">iotdb-confignode</span></span>
<span class="line"><span style="color:#E06C75;">    environment</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#98C379;">cn_internal_address=iotdb-2</span></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#98C379;">cn_target_config_node_list=iotdb-1:10710</span></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#98C379;">cn_internal_port=10710</span></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#98C379;">cn_consensus_port=10720</span></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#98C379;">schema_replication_factor=3</span></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#98C379;">schema_region_consensus_protocol_class=org.apache.iotdb.consensus.ratis.RatisConsensus</span></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#98C379;">config_node_consensus_protocol_class=org.apache.iotdb.consensus.ratis.RatisConsensus</span></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#98C379;">data_replication_factor=3</span></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#98C379;">data_region_consensus_protocol_class=org.apache.iotdb.consensus.iot.IoTConsensus</span></span>
<span class="line"><span style="color:#E06C75;">    volumes</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#98C379;">/etc/hosts:/etc/hosts:ro</span></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#98C379;">./data/confignode:/iotdb/data</span></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#98C379;">./logs/confignode:/iotdb/logs</span></span>
<span class="line"><span style="color:#E06C75;">    network_mode</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;host&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">  iotdb-datanode</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;">    image</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">apache/iotdb:1.1.0-datanode</span></span>
<span class="line"><span style="color:#E06C75;">    container_name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">iotdb-datanode</span></span>
<span class="line"><span style="color:#E06C75;">    environment</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#98C379;">dn_rpc_address=iotdb-2</span></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#98C379;">dn_internal_address=iotdb-2</span></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#98C379;">dn_target_config_node_list=iotdb-1:10710</span></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#98C379;">data_replication_factor=3</span></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#98C379;">dn_rpc_port=6667</span></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#98C379;">dn_mpp_data_exchange_port=10740</span></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#98C379;">dn_schema_region_consensus_port=10750</span></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#98C379;">dn_data_region_consensus_port=10760</span></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#98C379;">data_region_consensus_protocol_class=org.apache.iotdb.consensus.iot.IoTConsensus</span></span>
<span class="line"><span style="color:#ABB2BF;">       - </span><span style="color:#98C379;">schema_replication_factor=3</span></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#98C379;">schema_region_consensus_protocol_class=org.apache.iotdb.consensus.ratis.RatisConsensus</span></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#98C379;">config_node_consensus_protocol_class=org.apache.iotdb.consensus.ratis.RatisConsensus</span></span>
<span class="line"><span style="color:#E06C75;">    volumes</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#98C379;">/etc/hosts:/etc/hosts:ro</span></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#98C379;">./data/datanode:/iotdb/data/</span></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#98C379;">./logs/datanode:/iotdb/logs/</span></span>
<span class="line"><span style="color:#E06C75;">    network_mode</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;host&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Notice：</p><ol><li>The <code>dn_target_config_node_list</code> of three nodes must the same and it is the first starting node of <code>iotdb-1</code> with the cn_internal_port of 10710。</li><li>In this docker-compose file，<code>iotdb-2</code> should be replace with the real IP or hostname of each node to generate docker compose files in the other nodes.</li><li>The services would talk with each other, so they need map the /etc/hosts file or add the <code>extra_hosts</code> to the docker compose file.</li><li>We must start the IoTDB services of <code>iotdb-1</code> first at the first time of starting.</li><li>Stop and remove all the IoTDB services and clean up the <code>data</code> and <code>logs</code> directories of the 3 nodes，then start the cluster again.</li></ol><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration"><span>Configuration</span></a></h2><p>All configuration files are in the directory of <code>conf</code>.<br> The elements of environment in docker-compose file is the configurations of IoTDB.<br> If you&#39;d changed the configurations files in conf, please map the directory of <code>conf</code> in docker-compose file.</p><h3 id="log-level" tabindex="-1"><a class="header-anchor" href="#log-level"><span>log level</span></a></h3><p>The conf directory contains log configuration files, namely logback-confignode.xml and logback-datanode.xml.</p><h3 id="memory-set" tabindex="-1"><a class="header-anchor" href="#memory-set"><span>memory set</span></a></h3><p>The conf directory contains memory configuration files, namely <a href="http://confignode-env.sh" target="_blank" rel="noopener noreferrer">confignode-env.sh</a> and <a href="http://datanode-env.sh" target="_blank" rel="noopener noreferrer">datanode-env.sh</a>. JVM heap size uses MAX_HEAP_SIZE and HEAP_NEWSIZE, and JVM direct memroy uses MAX_DIRECT_MEMORY_SIZE. e.g. <code>MAX_HEAP_SIZE=8G, HEAP_NEWSIZE=8G, MAX_DIRECT_MEMORY_SIZE=2G</code></p><h2 id="upgrade-iotdb" tabindex="-1"><a class="header-anchor" href="#upgrade-iotdb"><span>upgrade IoTDB</span></a></h2><ol><li>Downloads the newer IoTDB docker image from docker hub</li><li>Update the image of docker-compose file</li><li>Stop the IoTDB docker containers with the commands of docker stop and docker rm.</li><li>Start IoTDB with <code>docker-compose -f docker-compose-standalone.yml up -d</code></li></ol><h2 id="boot-automatically" tabindex="-1"><a class="header-anchor" href="#boot-automatically"><span>boot automatically</span></a></h2><ol><li>Add <code>restart: always</code> to every service of IoTDB in docker-compose file</li><li>Set docker service to boot automatically<br> e.g. in CentOS: <code>systemctl enable docker</code></li></ol>`,47)]))}const c=e(l,[["render",t],["__file","WayToGetIoTDB.html.vue"]]),p=JSON.parse('{"path":"/UserGuide/V1.1.x/QuickStart/WayToGetIoTDB.html","title":"","lang":"en-US","frontmatter":{"description":"Way to get IoTDB binary files IoTDB provides you three installation methods, you can refer to the following suggestions, choose one of them: Installation from source code. If yo...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/QuickStart/WayToGetIoTDB.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.1.x/QuickStart/WayToGetIoTDB.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"Way to get IoTDB binary files IoTDB provides you three installation methods, you can refer to the following suggestions, choose one of them: Installation from source code. If yo..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-18T04:24:04.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-18T04:24:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-18T04:24:04.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Way to get IoTDB binary files","slug":"way-to-get-iotdb-binary-files","link":"#way-to-get-iotdb-binary-files","children":[{"level":3,"title":"Prerequisites","slug":"prerequisites","link":"#prerequisites","children":[]},{"level":3,"title":"Installation from source code","slug":"installation-from-source-code","link":"#installation-from-source-code","children":[]},{"level":3,"title":"Installation by Docker","slug":"installation-by-docker","link":"#installation-by-docker","children":[]}]},{"level":2,"title":"Configuration","slug":"configuration","link":"#configuration","children":[{"level":3,"title":"log level","slug":"log-level","link":"#log-level","children":[]},{"level":3,"title":"memory set","slug":"memory-set","link":"#memory-set","children":[]}]},{"level":2,"title":"upgrade IoTDB","slug":"upgrade-iotdb","link":"#upgrade-iotdb","children":[]},{"level":2,"title":"boot automatically","slug":"boot-automatically","link":"#boot-automatically","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1710735844000,"contributors":[{"name":"changxue2022","username":"changxue2022","email":"115675618+changxue2022@users.noreply.github.com","commits":1,"url":"https://github.com/changxue2022"},{"name":"CritasWang","username":"CritasWang","email":"critas@outlook.com","commits":1,"url":"https://github.com/CritasWang"}]},"readingTime":{"minutes":4.15,"words":1245},"filePathRelative":"UserGuide/V1.1.x/QuickStart/WayToGetIoTDB.md","localizedDate":"July 10, 2023","autoDesc":true}');export{c as comp,p as data};
