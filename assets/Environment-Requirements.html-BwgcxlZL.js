import{_ as e,c as t,b as n,o as a}from"./app-C-0rb--l.js";const o={};function i(l,s){return a(),t("div",null,s[0]||(s[0]=[n(`<h1 id="system-requirements" tabindex="-1"><a class="header-anchor" href="#system-requirements"><span>System Requirements</span></a></h1><h2 id="disk-array" tabindex="-1"><a class="header-anchor" href="#disk-array"><span>Disk Array</span></a></h2><h3 id="configuration-suggestions" tabindex="-1"><a class="header-anchor" href="#configuration-suggestions"><span>Configuration Suggestions</span></a></h3><p>IoTDB has no strict operation requirements on disk array configuration. It is recommended to use multiple disk arrays to store IoTDB data to achieve the goal of concurrent writing to multiple disk arrays. For configuration, refer to the following suggestions:</p><ol><li>Physical environment<br> System disk: You are advised to use two disks as Raid1, considering only the space occupied by the operating system itself, and do not reserve system disk space for the IoTDB<br> Data disk：<br> Raid is recommended to protect data on disks<br> It is recommended to provide multiple disks (1-6 disks) or disk groups for the IoTDB. (It is not recommended to create a disk array for all disks, as this will affect the maximum performance of the IoTDB.)</li><li>Virtual environment<br> You are advised to mount multiple hard disks (1-6 disks).</li></ol><h3 id="configuration-example" tabindex="-1"><a class="header-anchor" href="#configuration-example"><span>Configuration Example</span></a></h3><ul><li>Example 1: Four 3.5-inch hard disks</li></ul><p>Only a few hard disks are installed on the server. Configure Raid5 directly.<br> The recommended configurations are as follows:</p><table><thead><tr><th><strong>Use classification</strong></th><th><strong>Raid type</strong></th><th><strong>Disk number</strong></th><th><strong>Redundancy</strong></th><th><strong>Available capacity</strong></th></tr></thead><tbody><tr><td>system/data disk</td><td>RAID5</td><td>4</td><td>1</td><td>3</td></tr></tbody></table><ul><li>Example 2: Twelve 3.5-inch hard disks</li></ul><p>The server is configured with twelve 3.5-inch disks.<br> Two disks are recommended as Raid1 system disks. The two data disks can be divided into two Raid5 groups. Each group of five disks can be used as four disks.<br> The recommended configurations are as follows:</p><table><thead><tr><th><strong>Use classification</strong></th><th><strong>Raid type</strong></th><th><strong>Disk number</strong></th><th><strong>Redundancy</strong></th><th><strong>Available capacity</strong></th></tr></thead><tbody><tr><td>system disk</td><td>RAID1</td><td>2</td><td>1</td><td>1</td></tr><tr><td>data disk</td><td>RAID5</td><td>5</td><td>1</td><td>4</td></tr><tr><td>data disk</td><td>RAID5</td><td>5</td><td>1</td><td>4</td></tr></tbody></table><ul><li>Example 3:24 2.5-inch disks</li></ul><p>The server is configured with 24 2.5-inch disks.<br> Two disks are recommended as Raid1 system disks. The last two disks can be divided into three Raid5 groups. Each group of seven disks can be used as six disks. The remaining block can be idle or used to store pre-write logs.<br> The recommended configurations are as follows:</p><table><thead><tr><th><strong>Use classification</strong></th><th><strong>Raid type</strong></th><th><strong>Disk number</strong></th><th><strong>Redundancy</strong></th><th><strong>Available capacity</strong></th></tr></thead><tbody><tr><td>system disk</td><td>RAID1</td><td>2</td><td>1</td><td>1</td></tr><tr><td>data disk</td><td>RAID5</td><td>7</td><td>1</td><td>6</td></tr><tr><td>data disk</td><td>RAID5</td><td>7</td><td>1</td><td>6</td></tr><tr><td>data disk</td><td>RAID5</td><td>7</td><td>1</td><td>6</td></tr><tr><td>data disk</td><td>NoRaid</td><td>1</td><td>0</td><td>1</td></tr></tbody></table><h2 id="operating-system" tabindex="-1"><a class="header-anchor" href="#operating-system"><span>Operating System</span></a></h2><h3 id="version-requirements" tabindex="-1"><a class="header-anchor" href="#version-requirements"><span>Version Requirements</span></a></h3><p>IoTDB supports operating systems such as Linux, Windows, and MacOS, while the enterprise version supports domestic CPUs such as Loongson, Phytium, and Kunpeng. It also supports domestic server operating systems such as Neokylin, KylinOS, UOS, and Linx.</p><h3 id="disk-partition" tabindex="-1"><a class="header-anchor" href="#disk-partition"><span>Disk Partition</span></a></h3><ul><li>The default standard partition mode is recommended. LVM extension and hard disk encryption are not recommended.</li><li>The system disk needs only the space used by the operating system, and does not need to reserve space for the IoTDB.</li><li>Each disk group corresponds to only one partition. Data disks (with multiple disk groups, corresponding to raid) do not need additional partitions. All space is used by the IoTDB.<br> The following table lists the recommended disk partitioning methods.</li></ul><table><tbody><tr><th>Disk classification</th><th>Disk set</th><th>Drive</th><th>Capacity</th><th>File system type</th></tr><tr><td rowspan="2">System disk</td><td rowspan="2">Disk group0</td><td>/boot</td><td>1GB</td><td>Acquiesce</td></tr><tr><td>/</td><td>Remaining space of the disk group</td><td>Acquiesce</td></tr><tr><td rowspan="3">Data disk</td><td>Disk set1</td><td>/data1</td><td>Full space of disk group1</td><td>Acquiesce</td></tr><tr><td>Disk set2</td><td>/data2</td><td>Full space of disk group2</td><td>Acquiesce</td></tr><tr><td colspan="4">......</td></tr></tbody></table> ### Network Configuration <ol><li>Disable the firewall</li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># View firewall</span></span>
<span class="line"><span style="color:#61AFEF;">systemctl</span><span style="color:#98C379;"> status</span><span style="color:#98C379;"> firewalld</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># Disable firewall</span></span>
<span class="line"><span style="color:#61AFEF;">systemctl</span><span style="color:#98C379;"> stop</span><span style="color:#98C379;"> firewalld</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># Disable firewall permanently</span></span>
<span class="line"><span style="color:#61AFEF;">systemctl</span><span style="color:#98C379;"> disable</span><span style="color:#98C379;"> firewalld</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>Ensure that the required port is not occupied</li></ol><p>(1) Check the ports occupied by the cluster: In the default cluster configuration, ConfigNode occupies ports 10710 and 10720, and DataNode occupies ports 6667, 10730, 10740, 10750, 10760, 9090, 9190, and 3000. Ensure that these ports are not occupied. Check methods are as follows:</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#61AFEF;">lsof</span><span style="color:#D19A66;"> -i:6667</span><span style="color:#98C379;"> or</span><span style="color:#98C379;"> netstat</span><span style="color:#D19A66;"> -tunp</span><span style="color:#ABB2BF;"> | </span><span style="color:#61AFEF;">grep</span><span style="color:#D19A66;"> 6667</span></span>
<span class="line"><span style="color:#61AFEF;">lsof</span><span style="color:#D19A66;"> -i:10710</span><span style="color:#98C379;"> or</span><span style="color:#98C379;"> netstat</span><span style="color:#D19A66;"> -tunp</span><span style="color:#ABB2BF;"> | </span><span style="color:#61AFEF;">grep</span><span style="color:#D19A66;"> 10710</span></span>
<span class="line"><span style="color:#61AFEF;">lsof</span><span style="color:#D19A66;"> -i:10720</span><span style="color:#98C379;"> or</span><span style="color:#98C379;"> netstat</span><span style="color:#D19A66;"> -tunp</span><span style="color:#ABB2BF;"> | </span><span style="color:#61AFEF;">grep</span><span style="color:#D19A66;"> 10720</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># If the command outputs, the port is occupied.</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(2) Checking the port occupied by the cluster deployment tool: When using the cluster management tool opskit to install and deploy the cluster, enable the SSH remote connection service configuration and open port 22.</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#61AFEF;">yum</span><span style="color:#98C379;"> install</span><span style="color:#98C379;"> openssh-server</span><span style="color:#7F848E;font-style:italic;"> # Install the ssh service</span></span>
<span class="line"><span style="color:#61AFEF;">systemctl</span><span style="color:#98C379;"> start</span><span style="color:#98C379;"> sshd</span><span style="color:#7F848E;font-style:italic;"> # Enable port 22</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>Ensure that servers are connected to each other</li></ol><h3 id="other-configuration" tabindex="-1"><a class="header-anchor" href="#other-configuration"><span>Other Configuration</span></a></h3><ol><li>Disable the system swap memory</li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#56B6C2;">echo</span><span style="color:#98C379;"> &quot;vm.swappiness = 0&quot;</span><span style="color:#ABB2BF;">&gt;&gt; </span><span style="color:#98C379;">/etc/sysctl.conf</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># The swapoff -a and swapon -a commands are executed together to dump the data in swap back to memory and to empty the data in swap.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># Do not omit the swappiness setting and just execute swapoff -a; Otherwise, swap automatically opens again after the restart, making the operation invalid.</span></span>
<span class="line"><span style="color:#61AFEF;">swapoff</span><span style="color:#D19A66;"> -a</span><span style="color:#ABB2BF;"> &amp;&amp; </span><span style="color:#61AFEF;">swapon</span><span style="color:#D19A66;"> -a</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># Make the configuration take effect without restarting.</span></span>
<span class="line"><span style="color:#61AFEF;">sysctl</span><span style="color:#D19A66;"> -p</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># Check memory allocation, expecting swap to be 0</span></span>
<span class="line"><span style="color:#61AFEF;">free</span><span style="color:#D19A66;"> -m</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>Set the maximum number of open files to 65535 to avoid the error of &quot;too many open files&quot;.</li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># View current restrictions</span></span>
<span class="line"><span style="color:#56B6C2;">ulimit</span><span style="color:#D19A66;"> -n</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># Temporary changes</span></span>
<span class="line"><span style="color:#56B6C2;">ulimit</span><span style="color:#D19A66;"> -n</span><span style="color:#D19A66;"> 65535</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># Permanent modification</span></span>
<span class="line"><span style="color:#56B6C2;">echo</span><span style="color:#98C379;"> &quot;* soft nofile 65535&quot;</span><span style="color:#ABB2BF;"> &gt;&gt;  </span><span style="color:#98C379;">/etc/security/limits.conf</span></span>
<span class="line"><span style="color:#56B6C2;">echo</span><span style="color:#98C379;"> &quot;* hard nofile 65535&quot;</span><span style="color:#ABB2BF;"> &gt;&gt;  </span><span style="color:#98C379;">/etc/security/limits.conf</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># View after exiting the current terminal session, expect to display 65535</span></span>
<span class="line"><span style="color:#56B6C2;">ulimit</span><span style="color:#D19A66;"> -n</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="software-dependence" tabindex="-1"><a class="header-anchor" href="#software-dependence"><span>Software Dependence</span></a></h2><p>Install the Java runtime environment (Java version &gt;= 1.8). Ensure that jdk environment variables are set. (It is recommended to deploy JDK17 for V1.3.2.2 or later. In some scenarios, the performance of JDK of earlier versions is compromised, and Datanodes cannot be stopped.)</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># The following is an example of installing in centos7 using JDK-17:</span></span>
<span class="line"><span style="color:#61AFEF;">tar</span><span style="color:#D19A66;"> -zxvf</span><span style="color:#98C379;"> JDk-17_linux-x64_bin.tar</span><span style="color:#7F848E;font-style:italic;"> # Decompress the JDK file</span></span>
<span class="line"><span style="color:#61AFEF;">Vim</span><span style="color:#98C379;"> ~/.bashrc</span><span style="color:#7F848E;font-style:italic;"> # Configure the JDK environment</span></span>
<span class="line"><span style="color:#ABB2BF;">{   </span><span style="color:#C678DD;">export</span><span style="color:#E06C75;"> JAVA_HOME</span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;">/</span><span style="color:#E06C75;">usr</span><span style="color:#ABB2BF;">/</span><span style="color:#E06C75;">lib</span><span style="color:#ABB2BF;">/</span><span style="color:#E06C75;">jvm</span><span style="color:#ABB2BF;">/</span><span style="color:#E06C75;">jdk-17</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">0</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">9</span></span>
<span class="line"><span style="color:#C678DD;">    export</span><span style="color:#E06C75;"> PATH</span><span style="color:#56B6C2;">=</span><span style="color:#E06C75;">$JAVA_HOME</span><span style="color:#ABB2BF;">/</span><span style="color:#E06C75;">bin</span><span style="color:#ABB2BF;">:</span><span style="color:#E06C75;">$PATH</span></span>
<span class="line"><span style="color:#ABB2BF;">} </span><span style="color:#7F848E;font-style:italic;"># Add JDK environment variables</span></span>
<span class="line"><span style="color:#56B6C2;">source</span><span style="color:#98C379;"> ~/.bashrc</span><span style="color:#7F848E;font-style:italic;"> # The configuration takes effect</span></span>
<span class="line"><span style="color:#61AFEF;">java</span><span style="color:#D19A66;"> -version</span><span style="color:#7F848E;font-style:italic;"> # Check the JDK environment</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,38)]))}const d=e(o,[["render",i],["__file","Environment-Requirements.html.vue"]]),p=JSON.parse('{"path":"/UserGuide/V2.0.1/Table/Deployment-and-Maintenance/Environment-Requirements.html","title":"System Requirements","lang":"en-US","frontmatter":{"description":"System Requirements Disk Array Configuration Suggestions IoTDB has no strict operation requirements on disk array configuration. It is recommended to use multiple disk arrays to...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V2.0.1/Table/Deployment-and-Maintenance/Environment-Requirements.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V2.0.1/Table/Deployment-and-Maintenance/Environment-Requirements.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"System Requirements"}],["meta",{"property":"og:description","content":"System Requirements Disk Array Configuration Suggestions IoTDB has no strict operation requirements on disk array configuration. It is recommended to use multiple disk arrays to..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-16T14:58:01.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-16T14:58:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"System Requirements\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-16T14:58:01.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Disk Array","slug":"disk-array","link":"#disk-array","children":[{"level":3,"title":"Configuration Suggestions","slug":"configuration-suggestions","link":"#configuration-suggestions","children":[]},{"level":3,"title":"Configuration Example","slug":"configuration-example","link":"#configuration-example","children":[]}]},{"level":2,"title":"Operating System","slug":"operating-system","link":"#operating-system","children":[{"level":3,"title":"Version Requirements","slug":"version-requirements","link":"#version-requirements","children":[]},{"level":3,"title":"Disk Partition","slug":"disk-partition","link":"#disk-partition","children":[]},{"level":3,"title":"Other Configuration","slug":"other-configuration","link":"#other-configuration","children":[]}]},{"level":2,"title":"Software Dependence","slug":"software-dependence","link":"#software-dependence","children":[]}],"git":{"createdTime":1718785922000,"updatedTime":1734361081000,"contributors":[{"name":"Mister-Hope","username":"Mister-Hope","email":"mister-hope@outlook.com","commits":1,"url":"https://github.com/Mister-Hope"},{"name":"majialin","username":"majialin","email":"107627937+mal117@users.noreply.github.com","commits":2,"url":"https://github.com/majialin"},{"name":"W1y1r","username":"W1y1r","email":"150988475+W1y1r@users.noreply.github.com","commits":2,"url":"https://github.com/W1y1r"},{"name":"石林松","username":"石林松","email":"50943998+shi10lin0s@users.noreply.github.com","commits":1,"url":"https://github.com/石林松"}]},"readingTime":{"minutes":3.75,"words":1125},"filePathRelative":"UserGuide/V2.0.1/Table/Deployment-and-Maintenance/Environment-Requirements.md","localizedDate":"June 19, 2024","autoDesc":true}');export{d as comp,p as data};
