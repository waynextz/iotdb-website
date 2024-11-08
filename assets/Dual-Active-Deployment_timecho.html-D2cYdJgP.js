import{_ as l,c as r,b as n,d as a,e as t,a as s,w as o,r as d,o as c}from"./app-D8GMfgiK.js";const p={};function h(m,e){const i=d("RouteLink");return c(),r("div",null,[e[9]||(e[9]=n('<h1 id="dual-active-deployment" tabindex="-1"><a class="header-anchor" href="#dual-active-deployment"><span>Dual Active Deployment</span></a></h1><h2 id="what-is-a-double-active-version" tabindex="-1"><a class="header-anchor" href="#what-is-a-double-active-version"><span>What is a double active version?</span></a></h2><p>Dual active usually refers to two independent machines (or clusters) that perform real-time mirror synchronization. Their configurations are completely independent and can simultaneously receive external writes. Each independent machine (or cluster) can synchronize the data written to itself to another machine (or cluster), and the data of the two machines (or clusters) can achieve final consistency.</p><ul><li>Two standalone machines (or clusters) can form a high availability group: when one of the standalone machines (or clusters) stops serving, the other standalone machine (or cluster) will not be affected. When the single machine (or cluster) that stopped the service is restarted, another single machine (or cluster) will synchronize the newly written data. Business can be bound to two standalone machines (or clusters) for read and write operations, thereby achieving high availability.</li><li>The dual active deployment scheme allows for high availability with fewer than 3 physical nodes and has certain advantages in deployment costs. At the same time, the physical supply isolation of two sets of single machines (or clusters) can be achieved through the dual ring network of power and network, ensuring the stability of operation.</li><li>At present, the dual active capability is a feature of the enterprise version.</li></ul><figure><img src="https://alioss.timecho.com/docs/img/20240731104336.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="note" tabindex="-1"><a class="header-anchor" href="#note"><span>Note</span></a></h2>',6)),a("ol",null,[e[2]||(e[2]=n(`<li><p>It is recommended to prioritize using <code>hostname</code> for IP configuration during deployment to avoid the problem of database failure caused by modifying the host IP in the later stage. To set the hostname, you need to configure <code>/etc/hosts</code> on the target server. If the local IP is 192.168.1.3 and the hostname is iotdb-1, you can use the following command to set the server&#39;s hostname and configure IoTDB&#39;s <code>cn_internal-address</code> and<code> dn_internal-address</code> using the hostname.</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line">echo &quot;192.168.1.3  iotdb-1&quot; &gt;&gt; /etc/hosts </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>Some parameters cannot be modified after the first startup, please refer to the &quot;Installation Steps&quot; section below to set them.</p></li>`,2)),a("li",null,[a("p",null,[e[1]||(e[1]=t("Recommend deploying a monitoring panel, which can monitor important operational indicators and keep track of database operation status at any time. The monitoring panel can be obtained by contacting the business department. The steps for deploying the monitoring panel can be referred to ")),s(i,{to:"/UserGuide/latest/Deployment-and-Maintenance/Monitoring-panel-deployment.html"},{default:o(()=>e[0]||(e[0]=[t("Monitoring Panel Deployment")])),_:1})])])]),e[10]||(e[10]=n('<h2 id="installation-steps" tabindex="-1"><a class="header-anchor" href="#installation-steps"><span>Installation Steps</span></a></h2><p>Taking the dual active version IoTDB built by two single machines A and B as an example, the IP addresses of A and B are 192.168.1.3 and 192.168.1.4, respectively. Here, we use hostname to represent different hosts. The plan is as follows:</p><table><thead><tr><th>Machine</th><th>Machine IP</th><th>Host Name</th></tr></thead><tbody><tr><td>A</td><td>192.168.1.3</td><td>iotdb-1</td></tr><tr><td>B</td><td>192.168.1.4</td><td>iotdb-2</td></tr></tbody></table><h3 id="step1-install-two-independent-iotdbs-separately" tabindex="-1"><a class="header-anchor" href="#step1-install-two-independent-iotdbs-separately"><span>Step1：Install Two Independent IoTDBs Separately</span></a></h3>',4)),a("p",null,[e[5]||(e[5]=t("Install IoTDB on two machines separately, and refer to the deployment documentation for the standalone version ")),s(i,{to:"/UserGuide/latest/Deployment-and-Maintenance/Stand-Alone-Deployment_timecho.html"},{default:o(()=>e[3]||(e[3]=[t("Stand-Alone Deployment")])),_:1}),e[6]||(e[6]=t("，The deployment document for the cluster version can be referred to ")),s(i,{to:"/UserGuide/latest/Deployment-and-Maintenance/Cluster-Deployment_timecho.html"},{default:o(()=>e[4]||(e[4]=[t("Cluster Deployment")])),_:1}),e[7]||(e[7]=t("。")),e[8]||(e[8]=a("strong",null,"It is recommended that the configurations of clusters A and B remain consistent to achieve the best dual active effect",-1))]),e[11]||(e[11]=n(`<h3 id="step2-create-a-aata-synchronization-task-on-machine-a-to-machine-b" tabindex="-1"><a class="header-anchor" href="#step2-create-a-aata-synchronization-task-on-machine-a-to-machine-b"><span>Step2：Create A Aata Synchronization Task On Machine A To Machine B</span></a></h3><ul><li><p>Create a data synchronization process on machine A, where the data on machine A is automatically synchronized to machine B. Use the cli tool in the sbin directory to connect to the IoTDB database on machine A:</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line">./sbin/start-cli.sh  -h iotdb-1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>Create and start the data synchronization command with the following SQL:</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line">create pipe AB</span>
<span class="line">with source (</span>
<span class="line">&#39;source.forwarding-pipe-requests&#39; = &#39;false&#39; </span>
<span class="line">)</span>
<span class="line">with sink (</span>
<span class="line">&#39;sink&#39;=&#39;iotdb-thrift-sink&#39;,</span>
<span class="line">&#39;sink.ip&#39;=&#39;iotdb-2&#39;,</span>
<span class="line">&#39;sink.port&#39;=&#39;6667&#39;</span>
<span class="line">)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Note: To avoid infinite data loops, it is necessary to set the parameter <code>source.forwarding pipe questions</code> on both A and B to <code>false</code>, indicating that data transmitted from another pipe will not be forwarded.</p></li></ul><h3 id="step3-create-a-data-synchronization-task-on-machine-b-to-machine-a" tabindex="-1"><a class="header-anchor" href="#step3-create-a-data-synchronization-task-on-machine-b-to-machine-a"><span>Step3：Create A Data Synchronization Task On Machine B To Machine A</span></a></h3><ul><li><p>Create a data synchronization process on machine B, where the data on machine B is automatically synchronized to machine A. Use the cli tool in the sbin directory to connect to the IoTDB database on machine B</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line">./sbin/start-cli.sh  -h iotdb-2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Create and start the pipe with the following SQL:</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line">create pipe BA</span>
<span class="line">with source (</span>
<span class="line">&#39;source.forwarding-pipe-requests&#39; = &#39;false&#39; </span>
<span class="line">)</span>
<span class="line">with sink (</span>
<span class="line">&#39;sink&#39;=&#39;iotdb-thrift-sink&#39;,</span>
<span class="line">&#39;sink.ip&#39;=&#39;iotdb-1&#39;,</span>
<span class="line">&#39;sink.port&#39;=&#39;6667&#39;</span>
<span class="line">)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Note: To avoid infinite data loops, it is necessary to set the parameter <code>source. forwarding pipe questions</code> on both A and B to <code>false</code> , indicating that data transmitted from another pipe will not be forwarded.</p></li></ul><h3 id="step4-validate-deployment" tabindex="-1"><a class="header-anchor" href="#step4-validate-deployment"><span>Step4：Validate Deployment</span></a></h3><p>After the above data synchronization process is created, the dual active cluster can be started.</p><h4 id="check-the-running-status-of-the-cluster" tabindex="-1"><a class="header-anchor" href="#check-the-running-status-of-the-cluster"><span>Check the running status of the cluster</span></a></h4><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line">#Execute the show cluster command on two nodes respectively to check the status of IoTDB service</span>
<span class="line">show  cluster</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Machine A</strong>:</p><figure><img src="https://alioss.timecho.com/docs/img/双活-A.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>Machine B</strong>:</p><figure><img src="https://alioss.timecho.com/docs/img/双活-B.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Ensure that every Configurable Node and DataNode is in the Running state.</p><h4 id="check-synchronization-status" tabindex="-1"><a class="header-anchor" href="#check-synchronization-status"><span>Check synchronization status</span></a></h4><ul><li>Check the synchronization status on machine A</li></ul><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line">show pipes</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="https://alioss.timecho.com/docs/img/show pipes-A.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>Check the synchronization status on machine B</li></ul><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line">show pipes</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="https://alioss.timecho.com/docs/img/show pipes-B.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Ensure that every pipe is in the RUNNING state.</p><h3 id="step5-stop-dual-active-version-iotdb" tabindex="-1"><a class="header-anchor" href="#step5-stop-dual-active-version-iotdb"><span>Step5：Stop Dual Active Version IoTDB</span></a></h3><ul><li><p>Execute the following command on machine A:</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">./sbin/start-cli.sh -h iotdb-1  #Log in to CLI</span>
<span class="line">IoTDB&gt; stop pipe AB             #Stop the data synchronization process</span>
<span class="line">./sbin/stop-standalone.sh       #Stop database service</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Execute the following command on machine B:</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">./sbin/start-cli.sh -h iotdb-2  #Log in to CLI</span>
<span class="line">IoTDB&gt; stop pipe BA             #Stop the data synchronization process</span>
<span class="line">./sbin/stop-standalone.sh       #Stop database service</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,23))])}const v=l(p,[["render",h],["__file","Dual-Active-Deployment_timecho.html.vue"]]),g=JSON.parse('{"path":"/UserGuide/latest/Deployment-and-Maintenance/Dual-Active-Deployment_timecho.html","title":"Dual Active Deployment","lang":"en-US","frontmatter":{"description":"Dual Active Deployment What is a double active version? Dual active usually refers to two independent machines (or clusters) that perform real-time mirror synchronization. Their...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/latest/Deployment-and-Maintenance/Dual-Active-Deployment_timecho.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/latest/Deployment-and-Maintenance/Dual-Active-Deployment_timecho.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Dual Active Deployment"}],["meta",{"property":"og:description","content":"Dual Active Deployment What is a double active version? Dual active usually refers to two independent machines (or clusters) that perform real-time mirror synchronization. Their..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alioss.timecho.com/docs/img/20240731104336.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-21T03:21:20.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-21T03:21:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Dual Active Deployment\\",\\"image\\":[\\"https://alioss.timecho.com/docs/img/20240731104336.png\\",\\"https://alioss.timecho.com/docs/img/%E5%8F%8C%E6%B4%BB-A.png\\",\\"https://alioss.timecho.com/docs/img/%E5%8F%8C%E6%B4%BB-B.png\\",\\"https://alioss.timecho.com/docs/img/show%20pipes-A.png\\",\\"https://alioss.timecho.com/docs/img/show%20pipes-B.png\\"],\\"dateModified\\":\\"2024-08-21T03:21:20.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"What is a double active version?","slug":"what-is-a-double-active-version","link":"#what-is-a-double-active-version","children":[]},{"level":2,"title":"Note","slug":"note","link":"#note","children":[]},{"level":2,"title":"Installation Steps","slug":"installation-steps","link":"#installation-steps","children":[{"level":3,"title":"Step1：Install Two Independent IoTDBs Separately","slug":"step1-install-two-independent-iotdbs-separately","link":"#step1-install-two-independent-iotdbs-separately","children":[]},{"level":3,"title":"Step2：Create A Aata Synchronization Task On Machine A To Machine B","slug":"step2-create-a-aata-synchronization-task-on-machine-a-to-machine-b","link":"#step2-create-a-aata-synchronization-task-on-machine-a-to-machine-b","children":[]},{"level":3,"title":"Step3：Create A Data Synchronization Task On Machine B To Machine A","slug":"step3-create-a-data-synchronization-task-on-machine-b-to-machine-a","link":"#step3-create-a-data-synchronization-task-on-machine-b-to-machine-a","children":[]},{"level":3,"title":"Step4：Validate Deployment","slug":"step4-validate-deployment","link":"#step4-validate-deployment","children":[]},{"level":3,"title":"Step5：Stop Dual Active Version IoTDB","slug":"step5-stop-dual-active-version-iotdb","link":"#step5-stop-dual-active-version-iotdb","children":[]}]}],"git":{"createdTime":1722396633000,"updatedTime":1724210480000,"contributors":[{"name":"majialin","email":"107627937+mal117@users.noreply.github.com","commits":2}]},"readingTime":{"minutes":3.44,"words":1033},"filePathRelative":"UserGuide/latest/Deployment-and-Maintenance/Dual-Active-Deployment_timecho.md","localizedDate":"July 31, 2024","autoDesc":true}');export{v as comp,g as data};
