import{_ as l,r as t,o as d,c as i,a as c,d as s,e as n,b as a,w as o,f as p}from"./app-F10OrnbD.js";const u={},k=s("h1",{id:"集群版",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#集群版","aria-hidden":"true"},"#"),n(" 集群版")],-1),b=s("br",null,null,-1),m=s("br",null,null,-1),h=s("h2",{id:"_1-安装部署",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_1-安装部署","aria-hidden":"true"},"#"),n(" 1. 安装部署")],-1),x=s("p",null,"我们将以最小的改动，启动一个含有3个 ConfigNode 和3个DataNode(3C3D)集群：",-1),v=s("ul",null,[s("li",null,"数据/元数据副本数为1"),s("li",null,"集群名称为defaultCluster"),s("li",null,"Confignode JVM 的最大堆内存配置为机器内存的 1/4"),s("li",null,"Datanode JVM 的最大堆内存配置为机器内存的 1/4")],-1),g=s("code",null,"/data/iotdb",-1),f=s("br",null,null,-1),_=p('<table><thead><tr><th>节点IP</th><th style="text-align:left;">192.168.132.10</th><th style="text-align:left;">192.168.132.11</th><th style="text-align:left;">192.168.132.12</th></tr></thead><tbody><tr><td>服务</td><td style="text-align:left;">ConfigNode</td><td style="text-align:left;">ConfigNode</td><td style="text-align:left;">ConfigNode</td></tr><tr><td>服务</td><td style="text-align:left;">DataNode</td><td style="text-align:left;">DataNode</td><td style="text-align:left;">DataNode</td></tr></tbody></table><p>端口占用：</p><table><thead><tr><th>服务</th><th>ConfigNode</th><th>DataNode</th></tr></thead><tbody><tr><td>端口</td><td>10710, 10720</td><td>6667, 10730, 10740, 10750, 10760</td></tr></tbody></table><p><strong>说明：</strong></p><ul><li>可以使用<code>IP地址</code>或者<code>机器名/域名</code>来安装配置 IoTDB 集群，本文以IP地址为例。如果使用<code>机器名/域名</code>，则需要配置<code>/etc/hosts</code>。</li><li>JVM堆内存配置: <code>confignode-env.sh</code> 和 <code>datanode-env.sh</code> 内配置<code>MAX_HEAP_SIZE</code>, 建议设置值大于等于1G。ConfigNode 1~2G就足够了，DataNode的内存配置则要取决于数据接入的数据量和查询数据量。</li></ul><h3 id="_1-1-下载安装包" tabindex="-1"><a class="header-anchor" href="#_1-1-下载安装包" aria-hidden="true">#</a> 1.1 下载安装包</h3>',6),N={href:"https://iotdb.apache.org/Download/",target:"_blank",rel:"noopener noreferrer"},y=s("code",null,"/data/iotdb",-1),D=s("br",null,null,-1),I=p(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/data/iotdb/
├── conf    <span class="token comment"># 配置文件</span>
├── lib     <span class="token comment"># jar library</span>
├── sbin    <span class="token comment"># 启动/停止等脚本</span>
└── tools   <span class="token comment"># 其他工具</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-修改节点配置文件" tabindex="-1"><a class="header-anchor" href="#_1-2-修改节点配置文件" aria-hidden="true">#</a> 1.2. 修改节点配置文件</h3><p>配置文件在 <code>/data/iotdb/conf</code>目录下。<br> 按照下表修改相应的配置文件：</p><table><thead><tr><th>配置</th><th style="text-align:left;">配置项</th><th>IP:192.168.132.10</th><th>IP:192.168.132.11</th><th style="text-align:left;">IP:192.168.132.12</th></tr></thead><tbody><tr><td>iotdb-confignode.properties</td><td style="text-align:left;">cn_internal_address</td><td>192.168.132.10</td><td>192.168.132.11</td><td style="text-align:left;">192.168.132.12</td></tr><tr><td></td><td style="text-align:left;">cn_target_config_node_list</td><td>192.168.132.10:10710</td><td>192.168.132.10:10710</td><td style="text-align:left;">192.168.132.10:10710</td></tr><tr><td>iotdb-datanode.properties</td><td style="text-align:left;">dn_rpc_address</td><td>192.168.132.10</td><td>192.168.132.11</td><td style="text-align:left;">192.168.132.12</td></tr><tr><td></td><td style="text-align:left;">dn_internal_address</td><td>192.168.132.10</td><td>192.168.132.11</td><td style="text-align:left;">192.168.132.12</td></tr><tr><td></td><td style="text-align:left;">dn_target_config_node_list</td><td>192.168.132.10:10710</td><td>192.168.132.10:10710</td><td style="text-align:left;">192.168.132.10:10710</td></tr></tbody></table><p><strong>注意：</strong><br> 我们推荐所有节点的 iotdb-common.properties 和 JVM 的内存配置是一致的。</p><h3 id="_1-3-启动集群" tabindex="-1"><a class="header-anchor" href="#_1-3-启动集群" aria-hidden="true">#</a> 1.3. 启动集群</h3><p>启动集群前，需保证配置正确，保证 IoTDB 安装目录下没有数据(<code>data</code>目录)。</p><h4 id="_1-3-1-启动第一个节点" tabindex="-1"><a class="header-anchor" href="#_1-3-1-启动第一个节点" aria-hidden="true">#</a> 1.3.1. 启动第一个节点</h4><p>即上面表格中<code>cn_target_config_node_list</code>配置的节点。<br> 登录该节点 192.168.132.10，执行下面命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /data/iotdb
<span class="token comment"># 启动 ConfigNode 和 DataNode 服务</span>
sbin/start-standalone.sh
    
<span class="token comment"># 查看 DataNode 日志以确定启动成功</span>
<span class="token function">tail</span> <span class="token parameter variable">-f</span> logs/log_datanode_all.log
<span class="token comment"># 期望看见类似下方的日志</span>
<span class="token comment"># 2023-07-21 20:26:01,881 [main] INFO  o.a.i.db.service.DataNode:192 - Congratulation, IoTDB DataNode is set up successfully. Now, enjoy yourself!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果没有看到上面所说的日志或者看到了 Exception，那么代表启动失败了。请查看 <code>/data/iotdb/logs</code> 目录内的<code>log_confignode_all.log</code> 和 <code>log_datanode_all.log</code> 日志文件。</p><p><strong>注意</strong>：</p><ul><li>要保证第一个节点启动成功后，再启动其他节点。确切的说，要先保证第一个 ConfigNode 服务启动成功，即<code>cn_target_config_node_list</code>配置的节点。</li><li>如果启动失败，需要<a href="#%E3%80%90%E9%99%84%E5%BD%95%E3%80%91%E6%B8%85%E7%90%86%E7%8E%AF%E5%A2%83">清理环境</a>后，再次启动。</li><li>ConfigNode 和 DataNode 服务都可以单独启动:</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 单独启动 ConfigNode， 后台启动</span>
sbin/start-confignode.sh <span class="token parameter variable">-d</span>
<span class="token comment"># 单独启动 DataNode，后台启动</span>
sbin/start-datanode.sh <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-3-2-启动其他两个节点的-confignode-和-datanode" tabindex="-1"><a class="header-anchor" href="#_1-3-2-启动其他两个节点的-confignode-和-datanode" aria-hidden="true">#</a> 1.3.2. 启动其他两个节点的 ConfigNode 和 DataNode</h4><p>在节点 192.168.132.11 和 192.168.132.12 两个节点上分别执行：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /data/iotdb
<span class="token comment"># 启动 ConfigNode 和 DataNode 服务</span>
sbin/start-standalone.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果启动失败，需要在所有节点执行<a href="#%E3%80%90%E9%99%84%E5%BD%95%E3%80%91%E6%B8%85%E7%90%86%E7%8E%AF%E5%A2%83">清理环境</a>后，然后从启动第一个节点开始，再重新执行一次。</p><h4 id="_1-3-3-检验集群状态" tabindex="-1"><a class="header-anchor" href="#_1-3-3-检验集群状态" aria-hidden="true">#</a> 1.3.3. 检验集群状态</h4><p>在任意节点上，在 Cli 执行 <code>show cluster</code>:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/data/iotdb/sbin/start-cli.sh <span class="token parameter variable">-h</span> <span class="token number">192.168</span>.132.10
IoTDB<span class="token operator">&gt;</span>show cluster<span class="token punctuation">;</span>
<span class="token comment"># 示例结果如下：</span>
+------+----------+-------+---------------+------------+-------+---------+
<span class="token operator">|</span>NodeID<span class="token operator">|</span>  NodeType<span class="token operator">|</span> Status<span class="token operator">|</span>InternalAddress<span class="token operator">|</span>InternalPort<span class="token operator">|</span>Version<span class="token operator">|</span>BuildInfo<span class="token operator">|</span>
+------+----------+-------+---------------+------------+-------+---------+
<span class="token operator">|</span>     <span class="token number">0</span><span class="token operator">|</span>ConfigNode<span class="token operator">|</span>Running<span class="token operator">|</span> <span class="token number">192.168</span>.132.10<span class="token operator">|</span>       <span class="token number">10710</span><span class="token operator">|</span><span class="token number">1</span>.x.x  <span class="token operator">|</span>  xxxxxxx<span class="token operator">|</span>
<span class="token operator">|</span>     <span class="token number">1</span><span class="token operator">|</span>  DataNode<span class="token operator">|</span>Running<span class="token operator">|</span> <span class="token number">192.168</span>.132.10<span class="token operator">|</span>       <span class="token number">10730</span><span class="token operator">|</span><span class="token number">1</span>.x.x  <span class="token operator">|</span>  xxxxxxx<span class="token operator">|</span>
<span class="token operator">|</span>     <span class="token number">2</span><span class="token operator">|</span>ConfigNode<span class="token operator">|</span>Running<span class="token operator">|</span> <span class="token number">192.168</span>.132.11<span class="token operator">|</span>       <span class="token number">10710</span><span class="token operator">|</span><span class="token number">1</span>.x.x  <span class="token operator">|</span>  xxxxxxx<span class="token operator">|</span>
<span class="token operator">|</span>     <span class="token number">3</span><span class="token operator">|</span>  DataNode<span class="token operator">|</span>Running<span class="token operator">|</span> <span class="token number">192.168</span>.132.11<span class="token operator">|</span>       <span class="token number">10730</span><span class="token operator">|</span><span class="token number">1</span>.x.x  <span class="token operator">|</span>  xxxxxxx<span class="token operator">|</span>
<span class="token operator">|</span>     <span class="token number">4</span><span class="token operator">|</span>ConfigNode<span class="token operator">|</span>Running<span class="token operator">|</span> <span class="token number">192.168</span>.132.12<span class="token operator">|</span>       <span class="token number">10710</span><span class="token operator">|</span><span class="token number">1</span>.x.x  <span class="token operator">|</span>  xxxxxxx<span class="token operator">|</span>
<span class="token operator">|</span>     <span class="token number">5</span><span class="token operator">|</span>  DataNode<span class="token operator">|</span>Running<span class="token operator">|</span> <span class="token number">192.168</span>.132.12<span class="token operator">|</span>       <span class="token number">10730</span><span class="token operator">|</span><span class="token number">1</span>.x.x  <span class="token operator">|</span>  xxxxxxx<span class="token operator">|</span>
+------+----------+-------+---------------+------------+--------------+---------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>说明：</strong><br><code>start-cli.sh -h</code> 后指定的IP地址，可以是任意一个 DataNode 的IP地址。</p><h3 id="【附录】清理环境" tabindex="-1"><a class="header-anchor" href="#【附录】清理环境" aria-hidden="true">#</a> 【附录】清理环境</h3><p>在所有节点执行：</p><ol><li>结束 ConfigNode 和 DataNode 进程。</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1. 停止 ConfigNode 和 DataNode 服务</span>
sbin/stop-standalone.sh

<span class="token comment"># 2. 检查是否还有进程残留</span>
jps
<span class="token comment"># 或者</span>
<span class="token function">ps</span> -ef<span class="token operator">|</span>gerp iotdb

<span class="token comment"># 3. 如果有进程残留，则手动kill</span>
<span class="token function">kill</span> <span class="token parameter variable">-9</span> <span class="token operator">&lt;</span>pid<span class="token operator">&gt;</span>
<span class="token comment"># 如果确定机器上仅有1个iotdb，可以使用下面命令清理残留进程</span>
<span class="token function">ps</span> -ef<span class="token operator">|</span><span class="token function">grep</span> iotdb<span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token function">grep</span><span class="token operator">|</span><span class="token function">tr</span> <span class="token parameter variable">-s</span> <span class="token string">&#39;  &#39;</span> <span class="token string">&#39; &#39;</span> <span class="token operator">|</span><span class="token function">cut</span> <span class="token parameter variable">-d</span> <span class="token string">&#39; &#39;</span> -f2<span class="token operator">|</span><span class="token function">xargs</span> <span class="token function">kill</span> <span class="token parameter variable">-9</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>删除 data 和 logs 目录。</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /data/iotdb
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> data logs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：删除 data 目录是必要的，删除 logs 目录是为了纯净日志，非必需。</p><h2 id="_2-集群扩容" tabindex="-1"><a class="header-anchor" href="#_2-集群扩容" aria-hidden="true">#</a> 2. 集群扩容</h2><p>扩容方式与上方启动其他节点相同。也就是，在要添加的节点上，下载IoTDB的安装包，解压，修改配置，然后启动。这里要添加节点的IP为 <code>192.168.132.13</code><br><strong>注意：</strong></p><ul><li>扩容的节点必须是干净的节点，不能有数据(也就是<code>data</code>目录)</li><li>iotdb-common.properties中的<code>cluster_name</code>的配置必须和已有集群一致。</li><li><code>cn_target_config_node_list</code> 和 <code>dn_target_config_node_list</code>的配置必须和已有集群一致。</li><li>原有数据不会移动到新节点，新创建的元数据分区和数据分区很可能在新的节点。</li></ul><h3 id="_2-1-修改配置" tabindex="-1"><a class="header-anchor" href="#_2-1-修改配置" aria-hidden="true">#</a> 2.1. 修改配置</h3><p>按照下表修改相应的配置文件：</p><table><thead><tr><th>配置</th><th style="text-align:left;">配置项</th><th style="text-align:left;">IP:192.168.132.13</th></tr></thead><tbody><tr><td>iotdb-confignode.properties</td><td style="text-align:left;">cn_internal_address</td><td style="text-align:left;">192.168.132.13</td></tr><tr><td></td><td style="text-align:left;">cn_target_config_node_list</td><td style="text-align:left;">192.168.132.10:10710</td></tr><tr><td>iotdb-datanode.properties</td><td style="text-align:left;">dn_rpc_address</td><td style="text-align:left;">192.168.132.13</td></tr><tr><td></td><td style="text-align:left;">dn_internal_address</td><td style="text-align:left;">192.168.132.13</td></tr><tr><td></td><td style="text-align:left;">dn_target_config_node_list</td><td style="text-align:left;">192.168.132.10:10710</td></tr></tbody></table><h3 id="_2-2-扩容" tabindex="-1"><a class="header-anchor" href="#_2-2-扩容" aria-hidden="true">#</a> 2.2. 扩容</h3><p>在新增节点<code>192.168.132.13</code>上，执行：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /data/iotdb
<span class="token comment"># 启动 ConfigNode 和 DataNode 服务</span>
sbin/start-standalone.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-验证扩容结果" tabindex="-1"><a class="header-anchor" href="#_2-3-验证扩容结果" aria-hidden="true">#</a> 2.3. 验证扩容结果</h3><p>在 Cli 执行 <code>show cluster</code>，结果如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/data/iotdb/sbin/start-cli.sh <span class="token parameter variable">-h</span> <span class="token number">192.168</span>.132.10
IoTDB<span class="token operator">&gt;</span>show cluster<span class="token punctuation">;</span>
<span class="token comment"># 示例结果如下：</span>
+------+----------+-------+---------------+------------+-------+---------+
<span class="token operator">|</span>NodeID<span class="token operator">|</span>  NodeType<span class="token operator">|</span> Status<span class="token operator">|</span>InternalAddress<span class="token operator">|</span>InternalPort<span class="token operator">|</span>Version<span class="token operator">|</span>BuildInfo<span class="token operator">|</span>
+------+----------+-------+---------------+------------+-------+---------+
<span class="token operator">|</span>     <span class="token number">0</span><span class="token operator">|</span>ConfigNode<span class="token operator">|</span>Running<span class="token operator">|</span> <span class="token number">192.168</span>.132.10<span class="token operator">|</span>       <span class="token number">10710</span><span class="token operator">|</span><span class="token number">1</span>.x.x  <span class="token operator">|</span>  xxxxxxx<span class="token operator">|</span>
<span class="token operator">|</span>     <span class="token number">1</span><span class="token operator">|</span>  DataNode<span class="token operator">|</span>Running<span class="token operator">|</span> <span class="token number">192.168</span>.132.10<span class="token operator">|</span>       <span class="token number">10730</span><span class="token operator">|</span><span class="token number">1</span>.x.x  <span class="token operator">|</span>  xxxxxxx<span class="token operator">|</span>
<span class="token operator">|</span>     <span class="token number">2</span><span class="token operator">|</span>ConfigNode<span class="token operator">|</span>Running<span class="token operator">|</span> <span class="token number">192.168</span>.132.11<span class="token operator">|</span>       <span class="token number">10710</span><span class="token operator">|</span><span class="token number">1</span>.x.x  <span class="token operator">|</span>  xxxxxxx<span class="token operator">|</span>
<span class="token operator">|</span>     <span class="token number">3</span><span class="token operator">|</span>  DataNode<span class="token operator">|</span>Running<span class="token operator">|</span> <span class="token number">192.168</span>.132.11<span class="token operator">|</span>       <span class="token number">10730</span><span class="token operator">|</span><span class="token number">1</span>.x.x  <span class="token operator">|</span>  xxxxxxx<span class="token operator">|</span>
<span class="token operator">|</span>     <span class="token number">4</span><span class="token operator">|</span>ConfigNode<span class="token operator">|</span>Running<span class="token operator">|</span> <span class="token number">192.168</span>.132.12<span class="token operator">|</span>       <span class="token number">10710</span><span class="token operator">|</span><span class="token number">1</span>.x.x  <span class="token operator">|</span>  xxxxxxx<span class="token operator">|</span>
<span class="token operator">|</span>     <span class="token number">5</span><span class="token operator">|</span>  DataNode<span class="token operator">|</span>Running<span class="token operator">|</span> <span class="token number">192.168</span>.132.12<span class="token operator">|</span>       <span class="token number">10730</span><span class="token operator">|</span><span class="token number">1</span>.x.x  <span class="token operator">|</span>  xxxxxxx<span class="token operator">|</span>
<span class="token operator">|</span>     <span class="token number">6</span><span class="token operator">|</span>ConfigNode<span class="token operator">|</span>Running<span class="token operator">|</span> <span class="token number">192.168</span>.132.13<span class="token operator">|</span>       <span class="token number">10710</span><span class="token operator">|</span><span class="token number">1</span>.x.x  <span class="token operator">|</span>  xxxxxxx<span class="token operator">|</span>
<span class="token operator">|</span>     <span class="token number">7</span><span class="token operator">|</span>  DataNode<span class="token operator">|</span>Running<span class="token operator">|</span> <span class="token number">192.168</span>.132.13<span class="token operator">|</span>       <span class="token number">10730</span><span class="token operator">|</span><span class="token number">1</span>.x.x  <span class="token operator">|</span>  xxxxxxx<span class="token operator">|</span>
+------+----------+-------+---------------+------------+-------+---------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-集群缩容" tabindex="-1"><a class="header-anchor" href="#_3-集群缩容" aria-hidden="true">#</a> 3. 集群缩容</h2><p><strong>注意:</strong></p><ul><li>可以在任何一个集群内的节点上，执行缩容操作。</li><li>集群内的任意节点都可以被缩容。但是存留的 DataNode 服务不能小于副本数设置。</li><li>请耐心等待缩容脚本执行结束，并仔细阅读日志说明，尤其是结束前的指南说明。</li></ul><h3 id="_3-1-缩容一个-confignode" tabindex="-1"><a class="header-anchor" href="#_3-1-缩容一个-confignode" aria-hidden="true">#</a> 3.1 缩容一个 ConfigNode</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /data/iotdb
<span class="token comment"># 方式一：使用 ip:port 移除</span>
sbin/remove-confignode.sh <span class="token number">192.168</span>.132.13:10710

<span class="token comment"># 方式二：使用节点编号移除, \`show cluster\`中的 NodeID </span>
sbin/remove-confignode.sh <span class="token number">6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-缩容一个-datanode" tabindex="-1"><a class="header-anchor" href="#_3-2-缩容一个-datanode" aria-hidden="true">#</a> 3.2 缩容一个 DataNode</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /data/iotdb
<span class="token comment"># 方式一：使用 ip:port 移除</span>
sbin/remove-datanode.sh <span class="token number">192.168</span>.132.13:6667

<span class="token comment"># 方式二：使用节点编号移除, \`show cluster\`中的 NodeID</span>
sbin/remove-confignode.sh <span class="token number">7</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-验证缩容结果" tabindex="-1"><a class="header-anchor" href="#_3-3-验证缩容结果" aria-hidden="true">#</a> 3.3 验证缩容结果</h3><p>在 Cli 执行 <code>show cluster</code>，结果如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>+------+----------+-------+---------------+------------+-------+---------+
<span class="token operator">|</span>NodeID<span class="token operator">|</span>  NodeType<span class="token operator">|</span> Status<span class="token operator">|</span>InternalAddress<span class="token operator">|</span>InternalPort<span class="token operator">|</span>Version<span class="token operator">|</span>BuildInfo<span class="token operator">|</span>
+------+----------+-------+---------------+------------+-------+---------+
<span class="token operator">|</span>     <span class="token number">0</span><span class="token operator">|</span>ConfigNode<span class="token operator">|</span>Running<span class="token operator">|</span> <span class="token number">192.168</span>.132.10<span class="token operator">|</span>       <span class="token number">10710</span><span class="token operator">|</span><span class="token number">1</span>.x.x  <span class="token operator">|</span>  xxxxxxx<span class="token operator">|</span>
<span class="token operator">|</span>     <span class="token number">1</span><span class="token operator">|</span>  DataNode<span class="token operator">|</span>Running<span class="token operator">|</span> <span class="token number">192.168</span>.132.10<span class="token operator">|</span>       <span class="token number">10730</span><span class="token operator">|</span><span class="token number">1</span>.x.x  <span class="token operator">|</span>  xxxxxxx<span class="token operator">|</span>
<span class="token operator">|</span>     <span class="token number">2</span><span class="token operator">|</span>ConfigNode<span class="token operator">|</span>Running<span class="token operator">|</span> <span class="token number">192.168</span>.132.11<span class="token operator">|</span>       <span class="token number">10710</span><span class="token operator">|</span><span class="token number">1</span>.x.x  <span class="token operator">|</span>  xxxxxxx<span class="token operator">|</span>
<span class="token operator">|</span>     <span class="token number">3</span><span class="token operator">|</span>  DataNode<span class="token operator">|</span>Running<span class="token operator">|</span> <span class="token number">192.168</span>.132.11<span class="token operator">|</span>       <span class="token number">10730</span><span class="token operator">|</span><span class="token number">1</span>.x.x  <span class="token operator">|</span>  xxxxxxx<span class="token operator">|</span>
<span class="token operator">|</span>     <span class="token number">4</span><span class="token operator">|</span>ConfigNode<span class="token operator">|</span>Running<span class="token operator">|</span> <span class="token number">192.168</span>.132.12<span class="token operator">|</span>       <span class="token number">10710</span><span class="token operator">|</span><span class="token number">1</span>.x.x  <span class="token operator">|</span>  xxxxxxx<span class="token operator">|</span>
<span class="token operator">|</span>     <span class="token number">5</span><span class="token operator">|</span>  DataNode<span class="token operator">|</span>Running<span class="token operator">|</span> <span class="token number">192.168</span>.132.12<span class="token operator">|</span>       <span class="token number">10730</span><span class="token operator">|</span><span class="token number">1</span>.x.x  <span class="token operator">|</span>  xxxxxxx<span class="token operator">|</span>
+------+----------+-------+---------------+------------+-------+---------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,51);function C(E,R){const e=t("RouterLink"),r=t("ExternalLinkIcon");return d(),i("div",null,[c(`

    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at
    
        http://www.apache.org/licenses/LICENSE-2.0
    
    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.

`),k,s("p",null,[n("本文将简单介绍 IoTDB 集群的安装配置、扩容和缩容等常规操作。"),b,n(" 遇到问题可以看:"),m,a(e,{to:"/zh/UserGuide/V1.0.x/FAQ/Frequently-asked-questions.html"},{default:o(()=>[n("FAQ")]),_:1})]),h,x,v,s("p",null,[n("假设有3台物理机(下面称节点)，操作系统为Linux，并且已经安装配置好了JAVA环境(具体见"),a(e,{to:"/zh/UserGuide/V1.0.x/QuickStart/QuickStart.html"},{default:o(()=>[n("单机版对安装环境说明")]),_:1}),n(")，安装目录均为"),g,n("。"),f,n(" IP地址和服务角色分配如下：")]),_,s("p",null,[n("在每个节点，将安装包"),s("a",N,[n("下载"),a(r)]),n("后，解压到安装目录，这里为"),y,n("。"),D,n(" 目录结构:")]),I])}const A=l(u,[["render",C],["__file","ClusterQuickStart.html.vue"]]);export{A as default};
