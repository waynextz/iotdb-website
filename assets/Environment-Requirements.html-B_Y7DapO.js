import{_ as t,c as s,b as n,o as i}from"./app-C6MIQYKi.js";const a={};function r(d,e){return i(),s("div",null,e[0]||(e[0]=[n(`<h1 id="system-requirements" tabindex="-1"><a class="header-anchor" href="#system-requirements"><span>System Requirements</span></a></h1><h2 id="disk-array" tabindex="-1"><a class="header-anchor" href="#disk-array"><span>Disk Array</span></a></h2><h3 id="configuration-suggestions" tabindex="-1"><a class="header-anchor" href="#configuration-suggestions"><span>Configuration Suggestions</span></a></h3><p>IoTDB has no strict operation requirements on disk array configuration. It is recommended to use multiple disk arrays to store IoTDB data to achieve the goal of concurrent writing to multiple disk arrays. For configuration, refer to the following suggestions:</p><ol><li>Physical environment<br> System disk: You are advised to use two disks as Raid1, considering only the space occupied by the operating system itself, and do not reserve system disk space for the IoTDB<br> Data disk：<br> Raid is recommended to protect data on disks<br> It is recommended to provide multiple disks (1-6 disks) or disk groups for the IoTDB. (It is not recommended to create a disk array for all disks, as this will affect the maximum performance of the IoTDB.)</li><li>Virtual environment<br> You are advised to mount multiple hard disks (1-6 disks).</li></ol><h3 id="configuration-example" tabindex="-1"><a class="header-anchor" href="#configuration-example"><span>Configuration Example</span></a></h3><ul><li>Example 1: Four 3.5-inch hard disks</li></ul><p>Only a few hard disks are installed on the server. Configure Raid5 directly.<br> The recommended configurations are as follows:</p><table><thead><tr><th><strong>Use classification</strong></th><th><strong>Raid type</strong></th><th><strong>Disk number</strong></th><th><strong>Redundancy</strong></th><th><strong>Available capacity</strong></th></tr></thead><tbody><tr><td>system/data disk</td><td>RAID5</td><td>4</td><td>1</td><td>3</td></tr></tbody></table><ul><li>Example 2: Twelve 3.5-inch hard disks</li></ul><p>The server is configured with twelve 3.5-inch disks.<br> Two disks are recommended as Raid1 system disks. The two data disks can be divided into two Raid5 groups. Each group of five disks can be used as four disks.<br> The recommended configurations are as follows:</p><table><thead><tr><th><strong>Use classification</strong></th><th><strong>Raid type</strong></th><th><strong>Disk number</strong></th><th><strong>Redundancy</strong></th><th><strong>Available capacity</strong></th></tr></thead><tbody><tr><td>system disk</td><td>RAID1</td><td>2</td><td>1</td><td>1</td></tr><tr><td>data disk</td><td>RAID5</td><td>5</td><td>1</td><td>4</td></tr><tr><td>data disk</td><td>RAID5</td><td>5</td><td>1</td><td>4</td></tr></tbody></table><ul><li>Example 3:24 2.5-inch disks</li></ul><p>The server is configured with 24 2.5-inch disks.<br> Two disks are recommended as Raid1 system disks. The last two disks can be divided into three Raid5 groups. Each group of seven disks can be used as six disks. The remaining block can be idle or used to store pre-write logs.<br> The recommended configurations are as follows:</p><table><thead><tr><th><strong>Use classification</strong></th><th><strong>Raid type</strong></th><th><strong>Disk number</strong></th><th><strong>Redundancy</strong></th><th><strong>Available capacity</strong></th></tr></thead><tbody><tr><td>system disk</td><td>RAID1</td><td>2</td><td>1</td><td>1</td></tr><tr><td>data disk</td><td>RAID5</td><td>7</td><td>1</td><td>6</td></tr><tr><td>data disk</td><td>RAID5</td><td>7</td><td>1</td><td>6</td></tr><tr><td>data disk</td><td>RAID5</td><td>7</td><td>1</td><td>6</td></tr><tr><td>data disk</td><td>NoRaid</td><td>1</td><td>0</td><td>1</td></tr></tbody></table><h2 id="operating-system" tabindex="-1"><a class="header-anchor" href="#operating-system"><span>Operating System</span></a></h2><h3 id="version-requirements" tabindex="-1"><a class="header-anchor" href="#version-requirements"><span>Version Requirements</span></a></h3><p>IoTDB supports operating systems such as Linux, Windows, and MacOS, while the enterprise version supports domestic CPUs such as Loongson, Phytium, and Kunpeng. It also supports domestic server operating systems such as Neokylin, KylinOS, UOS, and Linx.</p><h3 id="disk-partition" tabindex="-1"><a class="header-anchor" href="#disk-partition"><span>Disk Partition</span></a></h3><ul><li>The default standard partition mode is recommended. LVM extension and hard disk encryption are not recommended.</li><li>The system disk needs only the space used by the operating system, and does not need to reserve space for the IoTDB.</li><li>Each disk group corresponds to only one partition. Data disks (with multiple disk groups, corresponding to raid) do not need additional partitions. All space is used by the IoTDB.<br> The following table lists the recommended disk partitioning methods.</li></ul><table><tr><th>Disk classification</th><th>Disk set</th><th>Drive</th><th>Capacity</th><th>File system type</th></tr><tr><td rowspan="2">System disk</td><td rowspan="2">Disk group0</td><td>/boot</td><td>1GB</td><td>Acquiesce</td></tr><tr><td>/</td><td>Remaining space of the disk group</td><td>Acquiesce</td></tr><tr><td rowspan="3">Data disk</td><td>Disk set1</td><td>/data1</td><td>Full space of disk group1</td><td>Acquiesce</td></tr><tr><td>Disk set2</td><td>/data2</td><td>Full space of disk group2</td><td>Acquiesce</td></tr><tr><td colspan="4">......</td></tr></table> ### Network Configuration <ol><li>Disable the firewall</li></ol><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line"># View firewall</span>
<span class="line">systemctl status firewalld</span>
<span class="line"># Disable firewall</span>
<span class="line">systemctl stop firewalld</span>
<span class="line"># Disable firewall permanently</span>
<span class="line">systemctl disable firewalld</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>Ensure that the required port is not occupied</li></ol><p>(1) Check the ports occupied by the cluster: In the default cluster configuration, ConfigNode occupies ports 10710 and 10720, and DataNode occupies ports 6667, 10730, 10740, 10750, 10760, 9090, 9190, and 3000. Ensure that these ports are not occupied. Check methods are as follows:</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line">lsof -i:6667 or netstat -tunp | grep 6667</span>
<span class="line">lsof -i:10710 or netstat -tunp | grep 10710</span>
<span class="line">lsof -i:10720 or netstat -tunp | grep 10720</span>
<span class="line"># If the command outputs, the port is occupied.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(2) Checking the port occupied by the cluster deployment tool: When using the cluster management tool opskit to install and deploy the cluster, enable the SSH remote connection service configuration and open port 22.</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line">yum install openssh-server # Install the ssh service</span>
<span class="line">systemctl start sshd # Enable port 22</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>Ensure that servers are connected to each other</li></ol><h3 id="other-configuration" tabindex="-1"><a class="header-anchor" href="#other-configuration"><span>Other Configuration</span></a></h3><ol><li>Disable the system swap memory</li></ol><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line">echo &quot;vm.swappiness = 0&quot;&gt;&gt; /etc/sysctl.conf</span>
<span class="line"># The swapoff -a and swapon -a commands are executed together to dump the data in swap back to memory and to empty the data in swap.</span>
<span class="line"># Do not omit the swappiness setting and just execute swapoff -a; Otherwise, swap automatically opens again after the restart, making the operation invalid.</span>
<span class="line">swapoff -a &amp;&amp; swapon -a</span>
<span class="line"># Make the configuration take effect without restarting.</span>
<span class="line">sysctl -p</span>
<span class="line"># Check memory allocation, expecting swap to be 0</span>
<span class="line">free -m</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>Set the maximum number of open files to 65535 to avoid the error of &quot;too many open files&quot;.</li></ol><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line"># View current restrictions</span>
<span class="line">ulimit -n</span>
<span class="line"># Temporary changes</span>
<span class="line">ulimit -n 65535</span>
<span class="line"># Permanent modification</span>
<span class="line">echo &quot;* soft nofile 65535&quot; &gt;&gt;  /etc/security/limits.conf</span>
<span class="line">echo &quot;* hard nofile 65535&quot; &gt;&gt;  /etc/security/limits.conf</span>
<span class="line"># View after exiting the current terminal session, expect to display 65535</span>
<span class="line">ulimit -n</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="software-dependence" tabindex="-1"><a class="header-anchor" href="#software-dependence"><span>Software Dependence</span></a></h2><p>Install the Java runtime environment (Java version &gt;= 1.8). Ensure that jdk environment variables are set. (It is recommended to deploy JDK17 for V1.3.2.2 or later. In some scenarios, the performance of JDK of earlier versions is compromised, and Datanodes cannot be stopped.)</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line"># The following is an example of installing in centos7 using JDK-17:</span>
<span class="line">tar -zxvf JDk-17_linux-x64_bin.tar # Decompress the JDK file</span>
<span class="line">Vim ~/.bashrc # Configure the JDK environment</span>
<span class="line">{   export JAVA_HOME=/usr/lib/jvm/jdk-17.0.9</span>
<span class="line">    export PATH=$JAVA_HOME/bin:$PATH</span>
<span class="line">} # Add JDK environment variables</span>
<span class="line">source ~/.bashrc # The configuration takes effect</span>
<span class="line">java -version # Check the JDK environment</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,38)]))}const l=t(a,[["render",r],["__file","Environment-Requirements.html.vue"]]),c=JSON.parse('{"path":"/UserGuide/V1.3.0-2/Deployment-and-Maintenance/Environment-Requirements.html","title":"System Requirements","lang":"en-US","frontmatter":{"description":"System Requirements Disk Array Configuration Suggestions IoTDB has no strict operation requirements on disk array configuration. It is recommended to use multiple disk arrays to...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.3.0-2/Deployment-and-Maintenance/Environment-Requirements.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.3.0-2/Deployment-and-Maintenance/Environment-Requirements.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"System Requirements"}],["meta",{"property":"og:description","content":"System Requirements Disk Array Configuration Suggestions IoTDB has no strict operation requirements on disk array configuration. It is recommended to use multiple disk arrays to..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-11T11:01:16.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-11T11:01:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"System Requirements\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-11T11:01:16.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Disk Array","slug":"disk-array","link":"#disk-array","children":[{"level":3,"title":"Configuration Suggestions","slug":"configuration-suggestions","link":"#configuration-suggestions","children":[]},{"level":3,"title":"Configuration Example","slug":"configuration-example","link":"#configuration-example","children":[]}]},{"level":2,"title":"Operating System","slug":"operating-system","link":"#operating-system","children":[{"level":3,"title":"Version Requirements","slug":"version-requirements","link":"#version-requirements","children":[]},{"level":3,"title":"Disk Partition","slug":"disk-partition","link":"#disk-partition","children":[]},{"level":3,"title":"Other Configuration","slug":"other-configuration","link":"#other-configuration","children":[]}]},{"level":2,"title":"Software Dependence","slug":"software-dependence","link":"#software-dependence","children":[]}],"git":{"createdTime":1718785922000,"updatedTime":1731322876000,"contributors":[{"name":"W1y1r","email":"150988475+W1y1r@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":3.74,"words":1123},"filePathRelative":"UserGuide/V1.3.0-2/Deployment-and-Maintenance/Environment-Requirements.md","localizedDate":"June 19, 2024","autoDesc":true}');export{l as comp,c as data};
