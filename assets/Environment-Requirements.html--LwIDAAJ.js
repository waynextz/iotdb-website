import{_ as a,c as n,b as t,o as l}from"./app-CNiZnG3t.js";const e={};function o(i,s){return l(),n("div",null,s[0]||(s[0]=[t(`<h1 id="系统配置" tabindex="-1"><a class="header-anchor" href="#系统配置"><span>系统配置</span></a></h1><h2 id="磁盘阵列" tabindex="-1"><a class="header-anchor" href="#磁盘阵列"><span>磁盘阵列</span></a></h2><h3 id="配置建议" tabindex="-1"><a class="header-anchor" href="#配置建议"><span>配置建议</span></a></h3><p>IoTDB对磁盘阵列配置没有严格运行要求，推荐使用多个磁盘阵列存储IoTDB的数据，以达到多个磁盘阵列并发写入的目标，配置可参考以下建议：</p><ol><li>物理环境<br> 系统盘：建议使用2块磁盘做Raid1，仅考虑操作系统自身所占空间即可，可以不为IoTDB预留系统盘空间<br> 数据盘<br> 建议做Raid，在磁盘维度进行数据保护<br> 建议为IoTDB提供多块磁盘（1-6块左右）或磁盘组（不建议将所有磁盘做成一个磁盘阵列，会影响 IoTDB的性能上限）</li><li>虚拟环境<br> 建议挂载多块硬盘（1-6块左右）</li><li>在部署 IoTDB 时，建议避免使用 NAS 等网络存储设备。</li></ol><h3 id="配置示例" tabindex="-1"><a class="header-anchor" href="#配置示例"><span>配置示例</span></a></h3><ul><li>示例1，4块3.5英寸硬盘</li></ul><p>因服务器安装的硬盘较少，直接做Raid5即可，无需其他配置。</p><p>推荐配置如下：</p><table><thead><tr><th><strong>使用分类</strong></th><th><strong>Raid类型</strong></th><th><strong>硬盘数量</strong></th><th><strong>冗余</strong></th><th><strong>可用容量</strong></th></tr></thead><tbody><tr><td>系统/数据盘</td><td>RAID5</td><td>4</td><td>允许坏1块</td><td>3</td></tr></tbody></table><ul><li>示例2，12块3.5英寸硬盘</li></ul><p>服务器配置12块3.5英寸盘。</p><p>前2块盘推荐Raid1作系统盘，2组数据盘可分为2组Raid5，每组5块盘实际可用4块。</p><p>推荐配置如下：</p><table><thead><tr><th><strong>使用分类</strong></th><th><strong>Raid类型</strong></th><th><strong>硬盘数量</strong></th><th><strong>冗余</strong></th><th><strong>可用容量</strong></th></tr></thead><tbody><tr><td>系统盘</td><td>RAID1</td><td>2</td><td>允许坏1块</td><td>1</td></tr><tr><td>数据盘</td><td>RAID5</td><td>5</td><td>允许坏1块</td><td>4</td></tr><tr><td>数据盘</td><td>RAID5</td><td>5</td><td>允许坏1块</td><td>4</td></tr></tbody></table><ul><li>示例3，24块2.5英寸盘</li></ul><p>服务器配置24块2.5英寸盘。</p><p>前2块盘推荐Raid1作系统盘，后面可分为3组Raid5，每组7块盘实际可用6块。剩余一块可闲置或存储写前日志使用。</p><p>推荐配置如下：</p><table><thead><tr><th><strong>使用分类</strong></th><th><strong>Raid类型</strong></th><th><strong>硬盘数量</strong></th><th><strong>冗余</strong></th><th><strong>可用容量</strong></th></tr></thead><tbody><tr><td>系统盘</td><td>RAID1</td><td>2</td><td>允许坏1块</td><td>1</td></tr><tr><td>数据盘</td><td>RAID5</td><td>7</td><td>允许坏1块</td><td>6</td></tr><tr><td>数据盘</td><td>RAID5</td><td>7</td><td>允许坏1块</td><td>6</td></tr><tr><td>数据盘</td><td>RAID5</td><td>7</td><td>允许坏1块</td><td>6</td></tr><tr><td>数据盘</td><td>NoRaid</td><td>1</td><td>损坏丢失</td><td>1</td></tr></tbody></table><h2 id="操作系统" tabindex="-1"><a class="header-anchor" href="#操作系统"><span>操作系统</span></a></h2><h3 id="版本要求" tabindex="-1"><a class="header-anchor" href="#版本要求"><span>版本要求</span></a></h3><p>IoTDB支持Linux、Windows、MacOS等操作系统，同时企业版支持龙芯、飞腾、鲲鹏等国产 CPU，支持中标麒麟、银河麒麟、统信、凝思等国产服务器操作系统。</p><h3 id="硬盘分区" tabindex="-1"><a class="header-anchor" href="#硬盘分区"><span>硬盘分区</span></a></h3><ul><li>建议使用默认的标准分区方式，不推荐LVM扩展和硬盘加密。</li><li>系统盘只需满足操作系统的使用空间即可，不需要为IoTDB预留空间。</li><li>每个硬盘组只对应一个分区即可，数据盘（里面有多个磁盘组，对应raid）不用再额外分区，所有空间给IoTDB使用。</li></ul><p>建议的磁盘分区方式如下表所示。</p><table><tbody><tr><th>硬盘分类</th><th>磁盘组</th><th>对应盘符</th><th>大小</th><th>文件系统类型</th></tr><tr><td rowspan="2">系统盘</td><td rowspan="2">磁盘组0</td><td>/boot</td><td>1GB</td><td>默认</td></tr><tr><td>/</td><td>磁盘组剩余全部空间</td><td>默认</td></tr><tr><td rowspan="3">数据盘</td><td>磁盘组1</td><td>/data1</td><td>磁盘组1全部空间</td><td>默认</td></tr><tr><td>磁盘组2</td><td>/data2</td><td>磁盘组2全部空间</td><td>默认</td></tr><tr><td colspan="4">......</td></tr></tbody></table><h3 id="网络配置" tabindex="-1"><a class="header-anchor" href="#网络配置"><span>网络配置</span></a></h3><ol><li>关闭防火墙</li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># 查看防火墙</span></span>
<span class="line"><span style="color:#61AFEF;">systemctl</span><span style="color:#98C379;"> status</span><span style="color:#98C379;"> firewalld</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 关闭防火墙</span></span>
<span class="line"><span style="color:#61AFEF;">systemctl</span><span style="color:#98C379;"> stop</span><span style="color:#98C379;"> firewalld</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 永久关闭防火墙</span></span>
<span class="line"><span style="color:#61AFEF;">systemctl</span><span style="color:#98C379;"> disable</span><span style="color:#98C379;"> firewalld</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>保证所需端口不被占用</li></ol><p>（1）集群占用端口的检查：在集群默认配置中，ConfigNode 会占用端口 10710 和 10720，DataNode 会占用端口 6667、10730、10740、10750 、10760、9090、9190、3000请确保这些端口未被占用。检查方式如下：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#61AFEF;">lsof</span><span style="color:#D19A66;"> -i:6667</span><span style="color:#98C379;">  或</span><span style="color:#98C379;">  netstat</span><span style="color:#D19A66;"> -tunp</span><span style="color:#ABB2BF;"> | </span><span style="color:#61AFEF;">grep</span><span style="color:#D19A66;"> 6667</span></span>
<span class="line"><span style="color:#61AFEF;">lsof</span><span style="color:#D19A66;"> -i:10710</span><span style="color:#98C379;">  或</span><span style="color:#98C379;">  netstat</span><span style="color:#D19A66;"> -tunp</span><span style="color:#ABB2BF;"> | </span><span style="color:#61AFEF;">grep</span><span style="color:#D19A66;"> 10710</span></span>
<span class="line"><span style="color:#61AFEF;">lsof</span><span style="color:#D19A66;"> -i:10720</span><span style="color:#98C379;">  或</span><span style="color:#98C379;">  netstat</span><span style="color:#D19A66;"> -tunp</span><span style="color:#ABB2BF;"> | </span><span style="color:#61AFEF;">grep</span><span style="color:#D19A66;"> 10720</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#如果命令有输出，则表示该端口已被占用。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）集群部署工具占用端口的检查：使用集群管理工具opskit安装部署集群时，需打开SSH远程连接服务配置，并开放22号端口。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#61AFEF;">yum</span><span style="color:#98C379;"> install</span><span style="color:#98C379;"> openssh-server</span><span style="color:#7F848E;font-style:italic;">            #安装ssh服务</span></span>
<span class="line"><span style="color:#61AFEF;">systemctl</span><span style="color:#98C379;"> start</span><span style="color:#98C379;"> sshd</span><span style="color:#7F848E;font-style:italic;">                  #启用22号端口</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>保证服务器之间的网络相互连通</li></ol><h3 id="其他配置" tabindex="-1"><a class="header-anchor" href="#其他配置"><span>其他配置</span></a></h3><ol><li>将系统 swap 优先级降至最低</li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#56B6C2;">echo</span><span style="color:#98C379;"> &quot;vm.swappiness = 0&quot;</span><span style="color:#ABB2BF;">&gt;&gt; </span><span style="color:#98C379;">/etc/sysctl.conf</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 一起执行 swapoff -a 和 swapon -a 命令是为了将 swap 里的数据转储回内存，并清空 swap 里的数据。</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 不可省略 swappiness 设置而只执行 swapoff -a；否则，重启后 swap 会再次自动打开，使得操作失效。</span></span>
<span class="line"><span style="color:#61AFEF;">swapoff</span><span style="color:#D19A66;"> -a</span><span style="color:#ABB2BF;"> &amp;&amp; </span><span style="color:#61AFEF;">swapon</span><span style="color:#D19A66;"> -a</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 在不重启的情况下使配置生效。</span></span>
<span class="line"><span style="color:#61AFEF;">sysctl</span><span style="color:#D19A66;"> -p</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># swap的已使用内存变为0</span></span>
<span class="line"><span style="color:#61AFEF;">free</span><span style="color:#D19A66;"> -m</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>设置系统最大打开文件数为 65535，以避免出现 &quot;太多的打开文件 &quot;的错误。</li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#7F848E;font-style:italic;">#查看当前限制</span></span>
<span class="line"><span style="color:#56B6C2;">ulimit</span><span style="color:#D19A66;"> -n</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 临时修改</span></span>
<span class="line"><span style="color:#56B6C2;">ulimit</span><span style="color:#D19A66;"> -n</span><span style="color:#D19A66;"> 65535</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 永久修改</span></span>
<span class="line"><span style="color:#56B6C2;">echo</span><span style="color:#98C379;"> &quot;* soft nofile 65535&quot;</span><span style="color:#ABB2BF;"> &gt;&gt;  </span><span style="color:#98C379;">/etc/security/limits.conf</span></span>
<span class="line"><span style="color:#56B6C2;">echo</span><span style="color:#98C379;"> &quot;* hard nofile 65535&quot;</span><span style="color:#ABB2BF;"> &gt;&gt;  </span><span style="color:#98C379;">/etc/security/limits.conf</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#退出当前终端会话后查看，预期显示65535</span></span>
<span class="line"><span style="color:#56B6C2;">ulimit</span><span style="color:#D19A66;"> -n</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="软件依赖" tabindex="-1"><a class="header-anchor" href="#软件依赖"><span>软件依赖</span></a></h2><p>安装 Java 运行环境 ，Java 版本 &gt;= 1.8，请确保已设置 jdk 环境变量。（V1.3.2.2 及之上版本推荐直接部署JDK17，老版本JDK部分场景下性能有问题，且datanode会出现stop不掉的问题）</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#7F848E;font-style:italic;"> #下面以在centos7，使用JDK-17安装为例：</span></span>
<span class="line"><span style="color:#61AFEF;"> tar</span><span style="color:#D19A66;">  -zxvf</span><span style="color:#98C379;">  jdk-17_linux-x64_bin.tar</span><span style="color:#7F848E;font-style:italic;">     #解压JDK文件</span></span>
<span class="line"><span style="color:#61AFEF;"> Vim</span><span style="color:#98C379;">  ~/.bashrc</span><span style="color:#7F848E;font-style:italic;">                           #配置JDK环境</span></span>
<span class="line"><span style="color:#ABB2BF;"> {  </span><span style="color:#C678DD;">export</span><span style="color:#E06C75;"> JAVA_HOME</span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;">/</span><span style="color:#E06C75;">usr</span><span style="color:#ABB2BF;">/</span><span style="color:#E06C75;">lib</span><span style="color:#ABB2BF;">/</span><span style="color:#E06C75;">jvm</span><span style="color:#ABB2BF;">/</span><span style="color:#E06C75;">jdk-17</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">0</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">9</span></span>
<span class="line"><span style="color:#C678DD;">    export</span><span style="color:#E06C75;"> PATH</span><span style="color:#56B6C2;">=</span><span style="color:#E06C75;">$JAVA_HOME</span><span style="color:#ABB2BF;">/</span><span style="color:#E06C75;">bin</span><span style="color:#ABB2BF;">:</span><span style="color:#E06C75;">$PATH</span><span style="color:#ABB2BF;">     </span></span>
<span class="line"><span style="color:#ABB2BF;"> }  </span><span style="color:#7F848E;font-style:italic;">#添加JDK环境变量</span></span>
<span class="line"><span style="color:#56B6C2;"> source</span><span style="color:#98C379;">  ~/.bashrc</span><span style="color:#7F848E;font-style:italic;">                        #配置环境生效</span></span>
<span class="line"><span style="color:#61AFEF;"> java</span><span style="color:#D19A66;"> -version</span><span style="color:#7F848E;font-style:italic;">                            #检查JDK环境</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,44)]))}const p=a(e,[["render",o],["__file","Environment-Requirements.html.vue"]]),d=JSON.parse('{"path":"/zh/UserGuide/V1.3.0-2/Deployment-and-Maintenance/Environment-Requirements.html","title":"系统配置","lang":"zh-CN","frontmatter":{"description":"系统配置 磁盘阵列 配置建议 IoTDB对磁盘阵列配置没有严格运行要求，推荐使用多个磁盘阵列存储IoTDB的数据，以达到多个磁盘阵列并发写入的目标，配置可参考以下建议： 物理环境 系统盘：建议使用2块磁盘做Raid1，仅考虑操作系统自身所占空间即可，可以不为IoTDB预留系统盘空间 数据盘 建议做Raid，在磁盘维度进行数据保护 建议为IoTDB提供多...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.3.0-2/Deployment-and-Maintenance/Environment-Requirements.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.3.0-2/Deployment-and-Maintenance/Environment-Requirements.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"系统配置"}],["meta",{"property":"og:description","content":"系统配置 磁盘阵列 配置建议 IoTDB对磁盘阵列配置没有严格运行要求，推荐使用多个磁盘阵列存储IoTDB的数据，以达到多个磁盘阵列并发写入的目标，配置可参考以下建议： 物理环境 系统盘：建议使用2块磁盘做Raid1，仅考虑操作系统自身所占空间即可，可以不为IoTDB预留系统盘空间 数据盘 建议做Raid，在磁盘维度进行数据保护 建议为IoTDB提供多..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-12-25T11:21:46.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-25T11:21:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"系统配置\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-25T11:21:46.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"磁盘阵列","slug":"磁盘阵列","link":"#磁盘阵列","children":[{"level":3,"title":"配置建议","slug":"配置建议","link":"#配置建议","children":[]},{"level":3,"title":"配置示例","slug":"配置示例","link":"#配置示例","children":[]}]},{"level":2,"title":"操作系统","slug":"操作系统","link":"#操作系统","children":[{"level":3,"title":"版本要求","slug":"版本要求","link":"#版本要求","children":[]},{"level":3,"title":"硬盘分区","slug":"硬盘分区","link":"#硬盘分区","children":[]},{"level":3,"title":"网络配置","slug":"网络配置","link":"#网络配置","children":[]},{"level":3,"title":"其他配置","slug":"其他配置","link":"#其他配置","children":[]}]},{"level":2,"title":"软件依赖","slug":"软件依赖","link":"#软件依赖","children":[]}],"git":{"createdTime":1718785922000,"updatedTime":1735125706000,"contributors":[{"name":"W1y1r","username":"W1y1r","email":"150988475+W1y1r@users.noreply.github.com","commits":4,"url":"https://github.com/W1y1r"},{"name":"Mister-Hope","username":"Mister-Hope","email":"mister-hope@outlook.com","commits":1,"url":"https://github.com/Mister-Hope"},{"name":"石林松","username":"石林松","email":"50943998+shi10lin0s@users.noreply.github.com","commits":1,"url":"https://github.com/石林松"},{"name":"majialin","username":"majialin","email":"107627937+mal117@users.noreply.github.com","commits":1,"url":"https://github.com/majialin"}]},"readingTime":{"minutes":5.08,"words":1523},"filePathRelative":"zh/UserGuide/V1.3.0-2/Deployment-and-Maintenance/Environment-Requirements.md","localizedDate":"2024年6月19日","autoDesc":true}');export{p as comp,d as data};
