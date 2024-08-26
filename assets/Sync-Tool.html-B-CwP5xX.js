import{_ as e,o as n,c as a,e as s}from"./app-CQeJnOJS.js";const t={},i=s(`<h1 id="tsfile-同步" tabindex="-1"><a class="header-anchor" href="#tsfile-同步"><span>TsFile 同步</span></a></h1><h2 id="_1-介绍" tabindex="-1"><a class="header-anchor" href="#_1-介绍"><span>1.介绍</span></a></h2><p>同步工具是持续将边缘端（发送端） IoTDB 中的时间序列数据上传并加载至云端（接收端） IoTDB 的套件工具。</p><p>IoTDB 同步工具内嵌于 IoTDB 引擎，与下游接收端相连，下游支持 IoTDB（单机/集群）。</p><p>可以在发送端使用 SQL 命令来启动或者关闭一个同步任务，并且可以随时查看同步任务的状态。在接收端，您可以通过设置 IP 白名单来规定准入 IP 地址范围。</p><h2 id="_2-模型定义" tabindex="-1"><a class="header-anchor" href="#_2-模型定义"><span>2.模型定义</span></a></h2><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/System-Tools/Sync-Tool/pipe2.png?raw=true" alt="pipe2.png" tabindex="0" loading="lazy"><figcaption>pipe2.png</figcaption></figure><p>TsFile 同步工具实现了数据从 &quot;流入-&gt; IoTDB -&gt;流出&quot; 的闭环。假设目前有两台机器A和B都安装了IoTDB，希望将 A 上的数据不断同步至 B 中。为了更好地描述这个过程，我们引入以下概念。</p><ul><li>Pipe <ul><li>指一次同步任务，在上述案例中，我们可以看作在 A 和 B 之间有一根数据流管道连接了 A 和 B。</li><li>一个正常运行的 Pipe 有两种状态：RUNNING 表示正在向接收端同步数据，STOP 表示暂停向接收端同步数据。</li></ul></li><li>PipeSink <ul><li>指接收端，在上述案例中，PipeSink 即是 B 这台机器。PipeSink 的类型目前仅支持 IoTDB，即接收端为 B 上安装的 IoTDB 实例。</li></ul></li></ul><h2 id="_3-注意事项" tabindex="-1"><a class="header-anchor" href="#_3-注意事项"><span>3.注意事项</span></a></h2><ul><li>同步工具的发送端目前仅支持 IoTDB 1.0 版本<strong>单数据副本配置</strong>，接收端支持 IoTDB 1.0 版本任意配置。</li><li>当有一个或多个发送端指向一个接收端时，这些发送端和接收端各自的设备路径集合之间应当没有交集，否则可能产生不可预料错误 <ul><li>例如：当发送端A包括路径<code>root.sg.d.s</code>，发送端B也包括路径<code>root.sg.d.s</code>，当发送端A删除<code>root.sg</code> database 时将也会在接收端删除所有B在接收端的<code>root.sg.d.s</code>中存放的数据。</li></ul></li><li>两个“端”之间目前不支持相互同步。</li><li>同步工具仅同步数据写入，若接收端未创建 database，自动创建与发送端同级 database。当前版本删除操作不保证被同步，不支持 TTL 的设置、Trigger、CQ 等其他操作的同步。 <ul><li>若在发送端设置了 TTL，则启动 Pipe 时候 IoTDB 中所有未过期的数据以及未来所有的数据写入和删除都会被同步至接收端</li></ul></li><li>对同步任务进行操作时，需保证 <code>SHOW DATANODES</code> 中所有处于 Running 状态的 DataNode 节点均可连通，否则将执行失败。</li></ul><h2 id="_4-快速上手" tabindex="-1"><a class="header-anchor" href="#_4-快速上手"><span>4.快速上手</span></a></h2><p>在发送端和接收端执行如下语句即可快速开始两个 IoTDB 之间的数据同步，完整的 SQL 语句和配置事项请查看<code>配置参数</code>和<code>SQL</code>两节，更多使用范例请参考<code>使用范例</code>节。</p><ul><li>启动发送端 IoTDB 与接收端 IoTDB</li><li>创建接收端为 IoTDB 类型的 Pipe Sink</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; CREATE PIPESINK my_iotdb AS IoTDB (ip=&#39;接收端IP&#39;, port=&#39;接收端端口&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>创建同步任务Pipe（请确保接收端 IoTDB 已经启动）</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; CREATE PIPE my_pipe TO my_iotdb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>开始同步任务</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; START PIPE my_pipe
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>显示所有同步任务状态</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; SHOW PIPES
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>暂停任务</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; STOP PIPE my_pipe
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>继续被暂停的任务</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; START PIPE my_pipe
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>关闭任务（状态信息将被删除）</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; DROP PIPE my_pipe
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_5-配置参数" tabindex="-1"><a class="header-anchor" href="#_5-配置参数"><span>5.配置参数</span></a></h2><p>所有参数修改均在<code>$IOTDB_HOME$/conf/iotdb-common.properties</code>中，所有修改完成之后执行<code>load configuration</code>之后即可立刻生效。</p><h3 id="_5-1发送端相关" tabindex="-1"><a class="header-anchor" href="#_5-1发送端相关"><span>5.1发送端相关</span></a></h3><table><thead><tr><th><strong>参数名</strong></th><th><strong>max_number_of_sync_file_retry</strong></th></tr></thead><tbody><tr><td>描述</td><td>发送端同步文件到接收端失败时的最大重试次数</td></tr><tr><td>类型</td><td>Int : [0,2147483647]</td></tr><tr><td>默认值</td><td>5</td></tr></tbody></table><h3 id="_5-2接收端相关" tabindex="-1"><a class="header-anchor" href="#_5-2接收端相关"><span>5.2接收端相关</span></a></h3><table><thead><tr><th><strong>参数名</strong></th><th><strong>ip_white_list</strong></th></tr></thead><tbody><tr><td>描述</td><td>设置同步功能发送端 IP 地址的白名单，以网段的形式表示，多个网段之间用逗号分隔。发送端向接收端同步数据时，只有当该发送端 IP 地址处于该白名单设置的网段范围内，接收端才允许同步操作。如果白名单为空，则接收端不允许任何发送端同步数据。默认接收端拒绝除了本地以外的全部 IP 的同步请求。 对该参数进行配置时，需要保证发送端所有 DataNode 地址均被覆盖。</td></tr><tr><td>类型</td><td>String</td></tr><tr><td>默认值</td><td>127.0.0.1/32</td></tr></tbody></table><h2 id="_6-sql" tabindex="-1"><a class="header-anchor" href="#_6-sql"><span>6.SQL</span></a></h2><h3 id="show-pipesinktype" tabindex="-1"><a class="header-anchor" href="#show-pipesinktype"><span>SHOW PIPESINKTYPE</span></a></h3><ul><li>显示当前所能支持的 PipeSink 类型。</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; SHOW PIPESINKTYPE
IoTDB&gt;
+-----+
| type|
+-----+
|IoTDB|
+-----+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="create-pipesink" tabindex="-1"><a class="header-anchor" href="#create-pipesink"><span>CREATE PIPESINK</span></a></h3><ul><li>创建接收端为 IoTDB 类型的 PipeSink，其中IP和port是可选参数。当接收端为集群时，填写任意一个 DataNode 的 <code>rpc_address</code> 与 <code>rpc_port</code>。</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; CREATE PIPESINK &lt;PipeSinkName&gt; AS IoTDB [(ip=&#39;127.0.0.1&#39;,port=6667);]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="drop-pipesink" tabindex="-1"><a class="header-anchor" href="#drop-pipesink"><span>DROP PIPESINK</span></a></h3><ul><li>删除 PipeSink。当 PipeSink 正在被同步任务使用时，无法删除 PipeSink。</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; DROP PIPESINK &lt;PipeSinkName&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="show-pipesink" tabindex="-1"><a class="header-anchor" href="#show-pipesink"><span>SHOW PIPESINK</span></a></h3><ul><li>显示当前所有 PipeSink 定义，结果集有三列，分别表示 PipeSink 的名字，PipeSink 的类型，PipeSink 的属性。</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; SHOW PIPESINKS
IoTDB&gt; SHOW PIPESINK [PipeSinkName]
IoTDB&gt; 
+-----------+-----+------------------------+
|       name| type|              attributes|
+-----------+-----+------------------------+
|my_pipesink|IoTDB|ip=&#39;127.0.0.1&#39;,port=6667|
+-----------+-----+------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="create-pipe" tabindex="-1"><a class="header-anchor" href="#create-pipe"><span>CREATE PIPE</span></a></h3><ul><li>创建同步任务 <ul><li>其中 select 语句目前仅支持<code>**</code>（即所有序列中的数据），from 语句目前仅支持<code>root</code>，where语句仅支持指定 time 的起始时间。起始时间的指定形式可以是 yyyy-mm-dd HH:MM:SS或时间戳。</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; CREATE PIPE my_pipe TO my_iotdb [FROM (select ** from root WHERE time&gt;=yyyy-mm-dd HH:MM:SS)]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="stop-pipe" tabindex="-1"><a class="header-anchor" href="#stop-pipe"><span>STOP PIPE</span></a></h3><ul><li>暂停任务</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; STOP PIPE &lt;PipeName&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="start-pipe" tabindex="-1"><a class="header-anchor" href="#start-pipe"><span>START PIPE</span></a></h3><ul><li>开始任务</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; START PIPE &lt;PipeName&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="drop-pipe" tabindex="-1"><a class="header-anchor" href="#drop-pipe"><span>DROP PIPE</span></a></h3><ul><li>关闭任务（状态信息可被删除）</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; DROP PIPE &lt;PipeName&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="show-pipe" tabindex="-1"><a class="header-anchor" href="#show-pipe"><span>SHOW PIPE</span></a></h3><blockquote><p>该指令在发送端和接收端均可执行</p></blockquote><ul><li><p>显示所有同步任务状态</p><ul><li><p><code>create time</code>：Pipe 的创建时间</p></li><li><p><code>name</code>：Pipe 的名字</p></li><li><p><code>role</code>：当前 IoTDB 在 Pipe 中的角色，可能有两种角色：</p><ul><li>sender，当前 IoTDB 为同步发送端</li><li>receiver，当前 IoTDB 为同步接收端</li></ul></li><li><p><code>remote</code>：Pipe的对端信息</p><ul><li>当 role 为 sender 时，这一字段值为 PipeSink 名称</li><li>当 role 为 receiver 时，这一字段值为发送端 IP</li></ul></li><li><p><code>status</code>：Pipe状态</p></li><li><p><code>attributes</code>：Pipe属性</p><ul><li>当 role 为 sender 时，这一字段值为 Pipe 的同步起始时间和是否同步删除操作</li><li>当 role 为 receiver 时，这一字段值为当前 DataNode 上创建的同步连接对应的存储组名称</li></ul></li><li><p><code>message</code>：Pipe运行信息，当 Pipe 正常运行时，这一字段通常为NORMAL，当出现异常时，可能出现两种状态：</p><ul><li>WARN 状态，这表明发生了数据丢失或者其他错误，但是 Pipe 会保持运行</li><li>ERROR 状态，这表明出现了网络连接正常但数据无法传输的问题，例如发送端 IP 不在接收端白名单中，或是发送端与接收端版本不兼容</li><li>当出现 ERROR 状态时，建议 STOP PIPE 后查看 DataNode 日志，检查接收端配置或网络情况后重新 START PIPE</li></ul></li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; SHOW PIPES
IoTDB&gt;
+-----------------------+--------+--------+-------------+---------+------------------------------------+-------+
|            create time|   name |    role|       remote|   status|                          attributes|message|
+-----------------------+--------+--------+-------------+---------+------------------------------------+-------+
|2022-03-30T20:58:30.689|my_pipe1|  sender|  my_pipesink|     STOP|SyncDelOp=false,DataStartTimestamp=0| NORMAL|
+-----------------------+--------+--------+-------------+---------+------------------------------------+-------+ 
|2022-03-31T12:55:28.129|my_pipe2|receiver|192.168.11.11|  RUNNING|             Database=&#39;root.vehicle&#39;| NORMAL|
+-----------------------+--------+--------+-------------+---------+------------------------------------+-------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>显示指定同步任务状态，当未指定PipeName时，与<code>SHOW PIPES</code>等效</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; SHOW PIPE [PipeName]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_7-使用示例" tabindex="-1"><a class="header-anchor" href="#_7-使用示例"><span>7.使用示例</span></a></h2><h3 id="目标" tabindex="-1"><a class="header-anchor" href="#目标"><span>目标</span></a></h3><ul><li>创建一个从边端 IoTDB 到 云端 IoTDB 的 同步工作</li><li>边端希望同步从2022年3月30日0时之后的数据</li><li>边端不希望同步所有的删除操作</li><li>云端 IoTDB 仅接受来自边端的 IoTDB 的数据</li></ul><h3 id="接收端操作" tabindex="-1"><a class="header-anchor" href="#接收端操作"><span>接收端操作</span></a></h3><p><code>vi conf/iotdb-common.properties</code> 配置云端参数，将白名单设置为仅接收来自 IP 为 192.168.0.1 的边端的数据</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>####################
### PIPE Server Configuration
####################
# White IP list of Sync client.
# Please use the form of network segment to present the range of IP, for example: 192.168.0.0/16
# If there are more than one IP segment, please separate them by commas
# The default is to allow all IP to sync
# Datatype: String
ip_white_list=192.168.0.1/32
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="发送端操作" tabindex="-1"><a class="header-anchor" href="#发送端操作"><span>发送端操作</span></a></h3><p>创建云端 PipeSink，指定类型为 IoTDB，指定云端 IP 地址为 192.168.0.1，指定云端的 PipeServer 服务端口为6667</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; CREATE PIPESINK my_iotdb AS IoTDB (ip=&#39;192.168.0.1&#39;,port=6667)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建Pipe，指定连接到my_iotdb的PipeSink，在WHREE子句中输入开始时间点2022年3月30日0时。以下两条执行语句等价。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; CREATE PIPE p TO my_iotdb FROM (select ** from root where time&gt;=2022-03-30 00:00:00)
IoTDB&gt; CREATE PIPE p TO my_iotdb FROM (select ** from root where time&gt;= 1648569600000)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>启动Pipe</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; START PIPE p
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>显示同步任务状态</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; SHOW PIPE p
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="结果验证" tabindex="-1"><a class="header-anchor" href="#结果验证"><span>结果验证</span></a></h3><p>在发送端执行以下 SQL</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> root<span class="token punctuation">.</span>vehicle<span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> TIMESERIES root<span class="token punctuation">.</span>vehicle<span class="token punctuation">.</span>d0<span class="token punctuation">.</span>s0 <span class="token keyword">WITH</span> DATATYPE<span class="token operator">=</span>INT32<span class="token punctuation">,</span> ENCODING<span class="token operator">=</span>RLE<span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> TIMESERIES root<span class="token punctuation">.</span>vehicle<span class="token punctuation">.</span>d0<span class="token punctuation">.</span>s1 <span class="token keyword">WITH</span> DATATYPE<span class="token operator">=</span><span class="token keyword">TEXT</span><span class="token punctuation">,</span> ENCODING<span class="token operator">=</span>PLAIN<span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> TIMESERIES root<span class="token punctuation">.</span>vehicle<span class="token punctuation">.</span>d1<span class="token punctuation">.</span>s2 <span class="token keyword">WITH</span> DATATYPE<span class="token operator">=</span><span class="token keyword">FLOAT</span><span class="token punctuation">,</span> ENCODING<span class="token operator">=</span>RLE<span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> TIMESERIES root<span class="token punctuation">.</span>vehicle<span class="token punctuation">.</span>d1<span class="token punctuation">.</span>s3 <span class="token keyword">WITH</span> DATATYPE<span class="token operator">=</span><span class="token keyword">BOOLEAN</span><span class="token punctuation">,</span> ENCODING<span class="token operator">=</span>PLAIN<span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> root<span class="token punctuation">.</span>vehicle<span class="token punctuation">.</span>d0<span class="token punctuation">(</span><span class="token keyword">timestamp</span><span class="token punctuation">,</span>s0<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> root<span class="token punctuation">.</span>vehicle<span class="token punctuation">.</span>d0<span class="token punctuation">(</span><span class="token keyword">timestamp</span><span class="token punctuation">,</span>s0<span class="token punctuation">,</span>s1<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">12</span><span class="token punctuation">,</span><span class="token string">&#39;12&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> root<span class="token punctuation">.</span>vehicle<span class="token punctuation">.</span>d0<span class="token punctuation">(</span><span class="token keyword">timestamp</span><span class="token punctuation">,</span>s1<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;14&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> root<span class="token punctuation">.</span>vehicle<span class="token punctuation">.</span>d1<span class="token punctuation">(</span><span class="token keyword">timestamp</span><span class="token punctuation">,</span>s2<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">16.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> root<span class="token punctuation">.</span>vehicle<span class="token punctuation">.</span>d1<span class="token punctuation">(</span><span class="token keyword">timestamp</span><span class="token punctuation">,</span>s2<span class="token punctuation">,</span>s3<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">18.0</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> root<span class="token punctuation">.</span>vehicle<span class="token punctuation">.</span>d1<span class="token punctuation">(</span><span class="token keyword">timestamp</span><span class="token punctuation">,</span>s3<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
flush<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在发送端和接受端执行查询，可查询到相同的结果</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; select ** from root.vehicle
+-----------------------------+------------------+------------------+------------------+------------------+
|             Time|root.vehicle.d0.s0|root.vehicle.d0.s1|root.vehicle.d1.s3|root.vehicle.d1.s2|
+-----------------------------+------------------+------------------+------------------+------------------+
|2022-04-03T20:08:17.127+08:00|        10|       null|       null|       null|
|2022-04-03T20:08:17.358+08:00|        12|        12|       null|       null|
|2022-04-03T20:08:17.393+08:00|       null|        14|       null|       null|
|2022-04-03T20:08:17.538+08:00|       null|       null|       null|       16.0|
|2022-04-03T20:08:17.753+08:00|       null|       null|       true|       18.0|
|2022-04-03T20:08:18.263+08:00|       null|       null|       false|       null|
+-----------------------------+------------------+------------------+------------------+------------------+
Total line number = 6
It costs 0.134s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-常见问题" tabindex="-1"><a class="header-anchor" href="#_8-常见问题"><span>8.常见问题</span></a></h2><ul><li>执行 <code>CREATE PIPESINK demo as IoTDB</code> 提示 <code>PIPESINK [demo] already exists in IoTDB.</code><ul><li>原因：当前 PipeSink 已存在</li><li>解决方案：删除 PipeSink 后重新创建</li></ul></li><li>执行 <code>DROP PIPESINK pipesinkName</code> 提示 <code>Can not drop PIPESINK [demo], because PIPE [mypipe] is using it.</code><ul><li>原因：不允许删除有正在运行的PIPE所使用的 PipeSink</li><li>解决方案：在发送端执行 <code>SHOW PIPE</code>，停止使用该 PipeSink 的 PIPE</li></ul></li><li>执行 <code>CREATE PIPE p to demo</code> 提示 <code>PIPE [p] is STOP, please retry after drop it.</code><ul><li>原因：当前 Pipe 已存在</li><li>解决方案：删除 Pipe 后重新创建</li></ul></li><li>执行 <code>CREATE PIPE p to demo</code>提示 <code>Fail to create PIPE [p] because Connection refused on DataNode: {id=2, internalEndPoint=TEndPoint(ip:127.0.0.1, port:10732)}.</code><ul><li>原因：存在状态为 Running 的 DataNode 无法连通</li><li>解决方案：执行 <code>SHOW DATANODES</code> 语句，检查无法连通的 DataNode 网络，或等待其状态变为 Unknown 后重新执行语句。</li></ul></li><li>执行 <code>START PIPE p</code> 提示 <code>Fail to start PIPE [p] because Connection refused on DataNode: {id=2, internalEndPoint=TEndPoint(ip:127.0.0.1, port:10732)}.</code><ul><li>原因：存在状态为 Running 的 DataNode 无法连通</li><li>解决方案：执行 <code>SHOW DATANODES</code> 语句，检查无法连通的 DataNode 网络，或等待其状态变为 Unknown 后重新执行语句。</li></ul></li><li>执行 <code>STOP PIPE p</code> 提示 <code>Fail to stop PIPE [p] because Connection refused on DataNode: {id=2, internalEndPoint=TEndPoint(ip:127.0.0.1, port:10732)}.</code><ul><li>原因：存在状态为 Running 的 DataNode 无法连通</li><li>解决方案：执行 <code>SHOW DATANODES</code> 语句，检查无法连通的 DataNode 网络，或等待其状态变为 Unknown 后重新执行语句。</li></ul></li><li>执行 <code>DROP PIPE p</code> 提示 <code>Fail to DROP_PIPE because Fail to drop PIPE [p] because Connection refused on DataNode: {id=2, internalEndPoint=TEndPoint(ip:127.0.0.1, port:10732)}. Please execute [DROP PIPE p] later to retry.</code><ul><li>原因：存在状态为 Running 的 DataNode 无法连通，Pipe 已在部分节点上被删除，状态被置为 <em><strong>DROP</strong></em>。</li><li>解决方案：执行 <code>SHOW DATANODES</code> 语句，检查无法连通的 DataNode 网络，或等待其状态变为 Unknown 后重新执行语句。</li></ul></li><li>运行时日志提示 <code>org.apache.iotdb.commons.exception.IoTDBException: root.** already been created as database</code><ul><li>原因：同步工具试图在接收端自动创建发送端的Database，属于正常现象</li><li>解决方案：无需干预</li></ul></li></ul>`,86),l=[i];function o(p,d){return n(),a("div",null,l)}const r=e(t,[["render",o],["__file","Sync-Tool.html.vue"]]),u=JSON.parse('{"path":"/zh/UserGuide/V1.0.x/Edge-Cloud-Collaboration/Sync-Tool.html","title":"TsFile 同步","lang":"zh-CN","frontmatter":{"description":"TsFile 同步 1.介绍 同步工具是持续将边缘端（发送端） IoTDB 中的时间序列数据上传并加载至云端（接收端） IoTDB 的套件工具。 IoTDB 同步工具内嵌于 IoTDB 引擎，与下游接收端相连，下游支持 IoTDB（单机/集群）。 可以在发送端使用 SQL 命令来启动或者关闭一个同步任务，并且可以随时查看同步任务的状态。在接收端，您可以...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.0.x/Edge-Cloud-Collaboration/Sync-Tool.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/Edge-Cloud-Collaboration/Sync-Tool.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"TsFile 同步"}],["meta",{"property":"og:description","content":"TsFile 同步 1.介绍 同步工具是持续将边缘端（发送端） IoTDB 中的时间序列数据上传并加载至云端（接收端） IoTDB 的套件工具。 IoTDB 同步工具内嵌于 IoTDB 引擎，与下游接收端相连，下游支持 IoTDB（单机/集群）。 可以在发送端使用 SQL 命令来启动或者关闭一个同步任务，并且可以随时查看同步任务的状态。在接收端，您可以..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alioss.timecho.com/docs/img/UserGuide/System-Tools/Sync-Tool/pipe2.png?raw=true"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"TsFile 同步\\",\\"image\\":[\\"https://alioss.timecho.com/docs/img/UserGuide/System-Tools/Sync-Tool/pipe2.png?raw=true\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1.介绍","slug":"_1-介绍","link":"#_1-介绍","children":[]},{"level":2,"title":"2.模型定义","slug":"_2-模型定义","link":"#_2-模型定义","children":[]},{"level":2,"title":"3.注意事项","slug":"_3-注意事项","link":"#_3-注意事项","children":[]},{"level":2,"title":"4.快速上手","slug":"_4-快速上手","link":"#_4-快速上手","children":[]},{"level":2,"title":"5.配置参数","slug":"_5-配置参数","link":"#_5-配置参数","children":[{"level":3,"title":"5.1发送端相关","slug":"_5-1发送端相关","link":"#_5-1发送端相关","children":[]},{"level":3,"title":"5.2接收端相关","slug":"_5-2接收端相关","link":"#_5-2接收端相关","children":[]}]},{"level":2,"title":"6.SQL","slug":"_6-sql","link":"#_6-sql","children":[{"level":3,"title":"SHOW PIPESINKTYPE","slug":"show-pipesinktype","link":"#show-pipesinktype","children":[]},{"level":3,"title":"CREATE PIPESINK","slug":"create-pipesink","link":"#create-pipesink","children":[]},{"level":3,"title":"DROP PIPESINK","slug":"drop-pipesink","link":"#drop-pipesink","children":[]},{"level":3,"title":"SHOW PIPESINK","slug":"show-pipesink","link":"#show-pipesink","children":[]},{"level":3,"title":"CREATE PIPE","slug":"create-pipe","link":"#create-pipe","children":[]},{"level":3,"title":"STOP PIPE","slug":"stop-pipe","link":"#stop-pipe","children":[]},{"level":3,"title":"START PIPE","slug":"start-pipe","link":"#start-pipe","children":[]},{"level":3,"title":"DROP PIPE","slug":"drop-pipe","link":"#drop-pipe","children":[]},{"level":3,"title":"SHOW PIPE","slug":"show-pipe","link":"#show-pipe","children":[]}]},{"level":2,"title":"7.使用示例","slug":"_7-使用示例","link":"#_7-使用示例","children":[{"level":3,"title":"目标","slug":"目标","link":"#目标","children":[]},{"level":3,"title":"接收端操作","slug":"接收端操作","link":"#接收端操作","children":[]},{"level":3,"title":"发送端操作","slug":"发送端操作","link":"#发送端操作","children":[]},{"level":3,"title":"结果验证","slug":"结果验证","link":"#结果验证","children":[]}]},{"level":2,"title":"8.常见问题","slug":"_8-常见问题","link":"#_8-常见问题","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":9.68,"words":2904},"filePathRelative":"zh/UserGuide/V1.0.x/Edge-Cloud-Collaboration/Sync-Tool.md","localizedDate":"2023年7月10日","autoDesc":true}');export{r as comp,u as data};
