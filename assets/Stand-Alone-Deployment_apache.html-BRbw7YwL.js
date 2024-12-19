import{_ as o,c as l,d as t,e as n,a as i,f as r,b as a,r as d,o as c}from"./app-C-0rb--l.js";const p={};function h(g,e){const s=d("RouteLink");return c(),l("div",null,[e[4]||(e[4]=t("h1",{id:"stand-alone-deployment",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#stand-alone-deployment"},[t("span",null,"Stand-Alone Deployment")])],-1)),e[5]||(e[5]=t("h2",{id:"matters-needing-attention",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#matters-needing-attention"},[t("span",null,"Matters Needing Attention")])],-1)),t("ol",null,[t("li",null,[t("p",null,[e[1]||(e[1]=n("Before installation, ensure that the system is complete by referring to ")),i(s,{to:"/UserGuide/latest/Deployment-and-Maintenance/Environment-Requirements.html"},{default:r(()=>e[0]||(e[0]=[n("System configuration")])),_:1}),e[2]||(e[2]=n("."))])]),e[3]||(e[3]=a('<li><p>It is recommended to prioritize using &#39;hostname&#39; for IP configuration during deployment, which can avoid the problem of modifying the host IP in the later stage and causing the database to fail to start. To set the host name, you need to configure/etc/hosts on the target server. For example, if the local IP is 192.168.1.3 and the host name is iotdb-1, you can use the following command to set the server&#39;s host name and configure IoTDB&#39;s&#39; cn_internal-address&#39; using the host name dn_internal_address、dn_rpc_address。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#56B6C2;">echo</span><span style="color:#98C379;"> &quot;192.168.1.3  iotdb-1&quot;</span><span style="color:#ABB2BF;"> &gt;&gt; </span><span style="color:#98C379;">/etc/hosts</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>Some parameters cannot be modified after the first startup. Please refer to the &quot;Parameter Configuration&quot; section below for settings.</p></li><li><p>Whether in linux or windows, ensure that the IoTDB installation path does not contain Spaces and Chinese characters to avoid software exceptions.</p></li><li><p>Please note that when installing and deploying IoTDB, it is necessary to use the same user for operations. You can:</p></li>',4))]),e[6]||(e[6]=a(`<ul><li>Using root user (recommended): Using root user can avoid issues such as permissions.</li><li>Using a fixed non root user: <ul><li>Using the same user operation: Ensure that the same user is used for start, stop and other operations, and do not switch users.</li><li>Avoid using sudo: Try to avoid using sudo commands as they execute commands with root privileges, which may cause confusion or security issues.</li></ul></li></ul><h2 id="installation-steps" tabindex="-1"><a class="header-anchor" href="#installation-steps"><span>Installation Steps</span></a></h2><h3 id="_1、unzip-the-installation-package-and-enter-the-installation-directory" tabindex="-1"><a class="header-anchor" href="#_1、unzip-the-installation-package-and-enter-the-installation-directory"><span>1、Unzip the installation package and enter the installation directory</span></a></h3><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#61AFEF;">unzip</span><span style="color:#98C379;">  apache-iotdb-{version}-all-bin.zip</span></span>
<span class="line"><span style="color:#56B6C2;">cd</span><span style="color:#98C379;">  apache-iotdb-{version}-all-bin</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、parameter-configuration" tabindex="-1"><a class="header-anchor" href="#_2、parameter-configuration"><span>2、Parameter Configuration</span></a></h3><h4 id="environment-script-configuration" tabindex="-1"><a class="header-anchor" href="#environment-script-configuration"><span>Environment Script Configuration</span></a></h4><ul><li>./conf/confignode-env.sh (./conf/confignode-env.bat) configuration</li></ul><table><thead><tr><th style="text-align:center;"><strong>Configuration</strong></th><th style="text-align:center;"><strong>Description</strong></th><th style="text-align:center;"><strong>Default</strong></th><th style="text-align:center;"><strong>Recommended value</strong></th><th style="text-align:center;">Note</th></tr></thead><tbody><tr><td style="text-align:center;">MEMORY_SIZE</td><td style="text-align:center;">The total amount of memory that IoTDB ConfigNode nodes can use</td><td style="text-align:center;">empty</td><td style="text-align:center;">Can be filled in as needed, and the system will allocate memory based on the filled in values</td><td style="text-align:center;">Restarting the service takes effect</td></tr></tbody></table><ul><li>./conf/datanode-env.sh (./conf/datanode-env.bat) configuration</li></ul><table><thead><tr><th style="text-align:center;"><strong>Configuration</strong></th><th style="text-align:center;"><strong>Description</strong></th><th style="text-align:center;"><strong>Default</strong></th><th style="text-align:center;"><strong>Recommended value</strong></th><th style="text-align:center;"><strong>Note</strong></th></tr></thead><tbody><tr><td style="text-align:center;">MEMORY_SIZE</td><td style="text-align:center;">The total amount of memory that IoTDB DataNode nodes can use</td><td style="text-align:center;">empty</td><td style="text-align:center;">Can be filled in as needed, and the system will allocate memory based on the filled in values</td><td style="text-align:center;">Restarting the service takes effect</td></tr></tbody></table><h4 id="system-general-configuration" tabindex="-1"><a class="header-anchor" href="#system-general-configuration"><span>System General Configuration</span></a></h4><p>Open the general configuration file (./conf/iotdb-system. properties file) and set the following parameters:</p><table><thead><tr><th style="text-align:center;"><strong>Configuration</strong></th><th style="text-align:center;"><strong>Description</strong></th><th style="text-align:center;"><strong>Default</strong></th><th style="text-align:center;"><strong>Recommended value</strong></th><th style="text-align:center;">Note</th></tr></thead><tbody><tr><td style="text-align:center;">cluster_name</td><td style="text-align:center;">Cluster Name</td><td style="text-align:center;">defaultCluster</td><td style="text-align:center;">The cluster name can be set as needed, and if there are no special needs, the default can be kept</td><td style="text-align:center;">Cannot be modified after initial startup</td></tr><tr><td style="text-align:center;">schema_replication_factor</td><td style="text-align:center;">Number of metadata replicas, set to 1 for the standalone version here</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td style="text-align:center;">Default 1, cannot be modified after the first startup</td></tr><tr><td style="text-align:center;">data_replication_factor</td><td style="text-align:center;">Number of data replicas, set to 1 for the standalone version here</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td style="text-align:center;">Default 1, cannot be modified after the first startup</td></tr></tbody></table><h4 id="confignode-configuration" tabindex="-1"><a class="header-anchor" href="#confignode-configuration"><span>ConfigNode Configuration</span></a></h4><p>Open the ConfigNode configuration file (./conf/iotdb-system. properties file) and set the following parameters:</p><table><thead><tr><th style="text-align:center;"><strong>Configuration</strong></th><th style="text-align:center;"><strong>Description</strong></th><th style="text-align:center;"><strong>Default</strong></th><th style="text-align:center;"><strong>Recommended value</strong></th><th style="text-align:center;">Note</th></tr></thead><tbody><tr><td style="text-align:center;">cn_internal_address</td><td style="text-align:center;">The address used by ConfigNode for communication within the cluster</td><td style="text-align:center;">127.0.0.1</td><td style="text-align:center;">The IPV4 address or host name of the server where it is located, and it is recommended to use host name</td><td style="text-align:center;">Cannot be modified after initial startup</td></tr><tr><td style="text-align:center;">cn_internal_port</td><td style="text-align:center;">The port used by ConfigNode for communication within the cluster</td><td style="text-align:center;">10710</td><td style="text-align:center;">10710</td><td style="text-align:center;">Cannot be modified after initial startup</td></tr><tr><td style="text-align:center;">cn_consensus_port</td><td style="text-align:center;">The port used for ConfigNode replica group consensus protocol communication</td><td style="text-align:center;">10720</td><td style="text-align:center;">10720</td><td style="text-align:center;">Cannot be modified after initial startup</td></tr><tr><td style="text-align:center;">cn_seed_config_node</td><td style="text-align:center;">The address of the ConfigNode that the node connects to when registering to join the cluster, cn_internal_address:cn_internal_port</td><td style="text-align:center;">127.0.0.1:10710</td><td style="text-align:center;">cn_internal_address:cn_internal_port</td><td style="text-align:center;">Cannot be modified after initial startup</td></tr></tbody></table><h4 id="datanode-configuration" tabindex="-1"><a class="header-anchor" href="#datanode-configuration"><span>DataNode Configuration</span></a></h4><p>Open the DataNode configuration file (./conf/iotdb-system. properties file) and set the following parameters:</p><table><thead><tr><th style="text-align:center;"><strong>Configuration</strong></th><th style="text-align:center;"><strong>Description</strong></th><th style="text-align:center;"><strong>Default</strong></th><th style="text-align:center;"><strong>Recommended value</strong></th><th style="text-align:left;"><strong>Note</strong></th></tr></thead><tbody><tr><td style="text-align:center;">dn_rpc_address</td><td style="text-align:center;">The address of the client RPC service</td><td style="text-align:center;">0.0.0.0</td><td style="text-align:center;">The IPV4 address or host name of the server where it is located, and it is recommended to use host name</td><td style="text-align:left;">Restarting the service takes effect</td></tr><tr><td style="text-align:center;">dn_rpc_port</td><td style="text-align:center;">The port of the client RPC service</td><td style="text-align:center;">6667</td><td style="text-align:center;">6667</td><td style="text-align:left;">Restarting the service takes effect</td></tr><tr><td style="text-align:center;">dn_internal_address</td><td style="text-align:center;">The address used by DataNode for communication within the cluster</td><td style="text-align:center;">127.0.0.1</td><td style="text-align:center;">The IPV4 address or host name of the server where it is located, and it is recommended to use host name</td><td style="text-align:left;">Cannot be modified after initial startup</td></tr><tr><td style="text-align:center;">dn_internal_port</td><td style="text-align:center;">The port used by DataNode for communication within the cluster</td><td style="text-align:center;">10730</td><td style="text-align:center;">10730</td><td style="text-align:left;">Cannot be modified after initial startup</td></tr><tr><td style="text-align:center;">dn_mpp_data_exchange_port</td><td style="text-align:center;">The port used by DataNode to receive data streams</td><td style="text-align:center;">10740</td><td style="text-align:center;">10740</td><td style="text-align:left;">Cannot be modified after initial startup</td></tr><tr><td style="text-align:center;">dn_data_region_consensus_port</td><td style="text-align:center;">The port used by DataNode for data replica consensus protocol communication</td><td style="text-align:center;">10750</td><td style="text-align:center;">10750</td><td style="text-align:left;">Cannot be modified after initial startup</td></tr><tr><td style="text-align:center;">dn_schema_region_consensus_port</td><td style="text-align:center;">The port used by DataNode for metadata replica consensus protocol communication</td><td style="text-align:center;">10760</td><td style="text-align:center;">10760</td><td style="text-align:left;">Cannot be modified after initial startup</td></tr><tr><td style="text-align:center;">dn_seed_config_node</td><td style="text-align:center;">The ConfigNode address that the node connects to when registering to join the cluster, i.e. cn_internal-address: cn_internal_port</td><td style="text-align:center;">127.0.0.1:10710</td><td style="text-align:center;">cn_internal_address:cn_internal_port</td><td style="text-align:left;">Cannot be modified after initial startup</td></tr></tbody></table><blockquote><p>❗️Attention: Editors such as VSCode Remote do not have automatic configuration saving function. Please ensure that the modified files are saved persistently, otherwise the configuration items will not take effect</p></blockquote><h3 id="_3、start-confignode" tabindex="-1"><a class="header-anchor" href="#_3、start-confignode"><span>3、Start ConfigNode</span></a></h3><p>Enter the sbin directory of iotdb and start confignode</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#61AFEF;">./start-confignode.sh</span><span style="color:#D19A66;">    -d</span><span style="color:#7F848E;font-style:italic;">      #The &quot;- d&quot; parameter will start in the background</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>If the startup fails, please refer to <a href="#common-questions">Common Questions</a>.</p><h3 id="_4、start-datanode" tabindex="-1"><a class="header-anchor" href="#_4、start-datanode"><span>4、Start DataNode</span></a></h3><p>Enter the sbin directory of iotdb and start datanode:</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#56B6C2;">cd</span><span style="color:#98C379;"> sbin</span></span>
<span class="line"><span style="color:#61AFEF;">./start-datanode.sh</span><span style="color:#D19A66;">   -d</span><span style="color:#7F848E;font-style:italic;">   #The &quot;- d&quot; parameter will start in the background</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5、verify-deployment" tabindex="-1"><a class="header-anchor" href="#_5、verify-deployment"><span>5、Verify Deployment</span></a></h3><p>Can be executed directly/ Cli startup script in sbin directory:</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#61AFEF;">./start-cli.sh</span><span style="color:#D19A66;">  -h</span><span style="color:#98C379;">  ip</span><span style="color:#ABB2BF;">(l</span><span style="color:#98C379;">ocal</span><span style="color:#98C379;"> IP</span><span style="color:#98C379;"> or</span><span style="color:#98C379;"> domain</span><span style="color:#98C379;"> name</span><span style="color:#ABB2BF;">)  </span><span style="color:#D19A66;">-p</span><span style="color:#98C379;">  port</span><span style="color:#ABB2BF;">(</span><span style="color:#61AFEF;">6667</span><span style="color:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>After successful startup, the following interface will appear displaying successful installation of IOTDB.</p><figure><img src="https://alioss.timecho.com/docs/img/开源版启动成功.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>After the successful installation interface appears, use the <code>show cluster</code> command to check the service running status</p><p>When the status is all running, it indicates that the service has started successfully</p><figure><img src="https://alioss.timecho.com/docs/img/开源-单机show.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>The appearance of &#39;Activated (W)&#39; indicates passive activation, indicating that this Config Node does not have a license file (or has not issued the latest license file with a timestamp). At this point, it is recommended to check if the license file has been placed in the license folder. If not, please place the license file. If a license file already exists, it may be due to inconsistency between the license file of this node and the information of other nodes. Please contact Timecho staff to reapply.</p></blockquote><h2 id="common-questions" tabindex="-1"><a class="header-anchor" href="#common-questions"><span>Common Questions</span></a></h2><ol><li><p>Confignode failed to start</p><p>Step 1: Please check the startup log to see if any parameters that cannot be changed after the first startup have been modified.</p><p>Step 2: Please check the startup log for any other abnormalities. If there are any abnormal phenomena in the log, please contact Timecho Technical Support personnel for consultation on solutions.</p><p>Step 3: If it is the first deployment or data can be deleted, you can also clean up the environment according to the following steps, redeploy, and restart.</p><p>Step 4: Clean up the environment:</p><p>a. Terminate all ConfigNode Node and DataNode processes.</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#7F848E;font-style:italic;">  # 1. Stop the ConfigNode and DataNode services</span></span>
<span class="line"><span style="color:#61AFEF;">  sbin/stop-standalone.sh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  # 2. Check for any remaining processes</span></span>
<span class="line"><span style="color:#61AFEF;">  jps</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  # Or</span></span>
<span class="line"><span style="color:#61AFEF;">  ps</span><span style="color:#D19A66;"> -ef</span><span style="color:#ABB2BF;">|</span><span style="color:#61AFEF;">gerp</span><span style="color:#98C379;"> iotdb</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  # 3. If there are any remaining processes, manually kill the</span></span>
<span class="line"><span style="color:#56B6C2;">  kill</span><span style="color:#D19A66;"> -9</span><span style="color:#ABB2BF;"> &lt;</span><span style="color:#98C379;">pi</span><span style="color:#ABB2BF;">d&gt;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  # If you are sure there is only one iotdb on the machine, you can use the following command to clean up residual processes</span></span>
<span class="line"><span style="color:#61AFEF;">  ps</span><span style="color:#D19A66;"> -ef</span><span style="color:#ABB2BF;">|</span><span style="color:#61AFEF;">grep</span><span style="color:#98C379;"> iotdb</span><span style="color:#ABB2BF;">|</span><span style="color:#61AFEF;">grep</span><span style="color:#D19A66;"> -v</span><span style="color:#98C379;"> grep</span><span style="color:#ABB2BF;">|</span><span style="color:#61AFEF;">tr</span><span style="color:#D19A66;"> -s</span><span style="color:#98C379;"> &#39;  &#39;</span><span style="color:#98C379;"> &#39; &#39;</span><span style="color:#ABB2BF;"> |</span><span style="color:#61AFEF;">cut</span><span style="color:#D19A66;"> -d</span><span style="color:#98C379;"> &#39; &#39;</span><span style="color:#D19A66;"> -f2</span><span style="color:#ABB2BF;">|</span><span style="color:#61AFEF;">xargs</span><span style="color:#98C379;"> kill</span><span style="color:#D19A66;"> -9</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>b. Delete the data and logs directories.</p><p>Explanation: Deleting the data directory is necessary, deleting the logs directory is for clean logs and is not mandatory.</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#56B6C2;">  cd</span><span style="color:#98C379;"> /data/iotdb</span></span>
<span class="line"><span style="color:#61AFEF;">  rm</span><span style="color:#D19A66;"> -rf</span><span style="color:#98C379;"> data</span><span style="color:#98C379;"> logs</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,38))])}const m=o(p,[["render",h],["__file","Stand-Alone-Deployment_apache.html.vue"]]),y=JSON.parse(`{"path":"/UserGuide/latest/Deployment-and-Maintenance/Stand-Alone-Deployment_apache.html","title":"Stand-Alone Deployment","lang":"en-US","frontmatter":{"description":"Stand-Alone Deployment Matters Needing Attention Before installation, ensure that the system is complete by referring to . It is recommended to prioritize using 'hostname' for I...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/latest/Deployment-and-Maintenance/Stand-Alone-Deployment_apache.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/latest/Deployment-and-Maintenance/Stand-Alone-Deployment_apache.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Stand-Alone Deployment"}],["meta",{"property":"og:description","content":"Stand-Alone Deployment Matters Needing Attention Before installation, ensure that the system is complete by referring to . It is recommended to prioritize using 'hostname' for I..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alioss.timecho.com/docs/img/%E5%BC%80%E6%BA%90%E7%89%88%E5%90%AF%E5%8A%A8%E6%88%90%E5%8A%9F.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-08T12:05:25.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-08T12:05:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Stand-Alone Deployment\\",\\"image\\":[\\"https://alioss.timecho.com/docs/img/%E5%BC%80%E6%BA%90%E7%89%88%E5%90%AF%E5%8A%A8%E6%88%90%E5%8A%9F.png\\",\\"https://alioss.timecho.com/docs/img/%E5%BC%80%E6%BA%90-%E5%8D%95%E6%9C%BAshow.jpeg\\"],\\"dateModified\\":\\"2024-12-08T12:05:25.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Matters Needing Attention","slug":"matters-needing-attention","link":"#matters-needing-attention","children":[]},{"level":2,"title":"Installation Steps","slug":"installation-steps","link":"#installation-steps","children":[{"level":3,"title":"1、Unzip the installation package and enter the installation directory","slug":"_1、unzip-the-installation-package-and-enter-the-installation-directory","link":"#_1、unzip-the-installation-package-and-enter-the-installation-directory","children":[]},{"level":3,"title":"2、Parameter Configuration","slug":"_2、parameter-configuration","link":"#_2、parameter-configuration","children":[]},{"level":3,"title":"3、Start ConfigNode","slug":"_3、start-confignode","link":"#_3、start-confignode","children":[]},{"level":3,"title":"4、Start DataNode","slug":"_4、start-datanode","link":"#_4、start-datanode","children":[]},{"level":3,"title":"5、Verify Deployment","slug":"_5、verify-deployment","link":"#_5、verify-deployment","children":[]}]},{"level":2,"title":"Common Questions","slug":"common-questions","link":"#common-questions","children":[]}],"git":{"createdTime":1718979523000,"updatedTime":1733659525000,"contributors":[{"name":"W1y1r","username":"W1y1r","email":"150988475+W1y1r@users.noreply.github.com","commits":8,"url":"https://github.com/W1y1r"},{"name":"石林松","username":"石林松","email":"50943998+shi10lin0s@users.noreply.github.com","commits":2,"url":"https://github.com/石林松"},{"name":"majialin","username":"majialin","email":"107627937+mal117@users.noreply.github.com","commits":5,"url":"https://github.com/majialin"},{"name":"shuwenwei","username":"shuwenwei","email":"55970239+shuwenwei@users.noreply.github.com","commits":1,"url":"https://github.com/shuwenwei"}]},"readingTime":{"minutes":4.75,"words":1426},"filePathRelative":"UserGuide/latest/Deployment-and-Maintenance/Stand-Alone-Deployment_apache.md","localizedDate":"June 21, 2024","autoDesc":true}`);export{m as comp,y as data};
