import{_ as s,c as i,d as t,e as a,a as o,w as r,b as l,r as d,o as p}from"./app-CRFlbjpx.js";const u={};function h(c,e){const n=d("RouteLink");return p(),i("div",null,[e[3]||(e[3]=t("h1",{id:"introduction",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#introduction"},[t("span",null,"Introduction")])],-1)),e[4]||(e[4]=t("p",null,[a("IoTDB cluster version provides nodetool, a shell tool for users to monitor the working status of the specified cluster."),t("br"),a(" Users can obtain the status of the cluster by running a variety of instructions.")],-1)),e[5]||(e[5]=t("p",null,[a("The following describes the usage and examples of each instruction,"),t("br"),a(" where $IOTDB_CLUSTER_HOME indicates the path of the distributed IoTDB installation directory.")],-1)),e[6]||(e[6]=t("h1",{id:"prerequisites",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#prerequisites"},[t("span",null,"Prerequisites")])],-1)),t("p",null,[e[1]||(e[1]=a("To use the nodetool, you need to enable JMX service. Please refer to ")),o(n,{to:"/UserGuide/V0.13.x/Maintenance-Tools/JMX-Tool.html"},{default:r(()=>e[0]||(e[0]=[a("JMX tool")])),_:1}),e[2]||(e[2]=a(" for details."))]),e[7]||(e[7]=l(`<h1 id="instructions" tabindex="-1"><a class="header-anchor" href="#instructions"><span>Instructions</span></a></h1><h2 id="get-started" tabindex="-1"><a class="header-anchor" href="#get-started"><span>Get Started</span></a></h2><p>The nodetool shell tool startup script is located at $IOTDB_CLUSTER_HOME/sbin folder,<br> you can specify the IP address and port of the cluster during startup.</p><p>IP is the IP (or hostname) of the node that you expect to connect to,<br> and port is the JMX service port specified when the IoTDB cluster is started.</p><p>The default values are <code>127.0.0.1</code> and <code>31999</code>, respectively.</p><p>If you need to monitor the remote cluster or modify the JMX service port number,<br> set the actual IP and port with the <code>-h</code> and <code>-p</code> options.</p><p>When JMX authentication service is enabled, the username and password of JMX service should be specified.<br> The default values are <code>iotdb</code> and <code>passw!d</code>, respectively. Please use the start parameters <code>-u</code> and <code>-pw</code><br> to specify the username and password of the JMX service.</p><h2 id="explains" tabindex="-1"><a class="header-anchor" href="#explains"><span>Explains</span></a></h2><p>In a distributed system, a node is identified by node IP, metadata port, data port and cluster port &lt;IP:METAPORT:DATAPORT:CLUSTERPORT&gt;.</p><h3 id="show-the-ring-of-node" tabindex="-1"><a class="header-anchor" href="#show-the-ring-of-node"><span>Show The Ring Of Node</span></a></h3><p>Distributed IoTDB uses consistent hash to support data distribution.</p><p>You can know each node in the cluster by command <code>ring</code>, which prints node ring information.</p><p>1.Input</p><blockquote><p>ring</p></blockquote><p>2.Output</p><blockquote><p>The output is a multi-line string, and each line of string is a key value pair,<br> where the key represents the node identifier, and the value represents the node (IP:METAPORT:DATAPORT:CLUSTERPORT), the format is &lt;key -&gt; value&gt;.</p></blockquote><p>3.Examples</p><blockquote><p>Suppose that the current cluster runs on three nodes: 127.0.0.1:9003:40010:6667, 127.0.0.1:9005:40012:6668, and 127.0.0.1:9007:40014:6669.</p></blockquote><p>Examples of input instructions for different systems are as follows:</p><p>Linux and MacOS：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Shell &gt; ./sbin/nodetool.sh -h 127.0.0.1 -p 31999 ring</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Windows：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Shell &gt; .\\sbin\\nodetool.bat -h 127.0.0.1 -p 31999 ring</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Press enter to execute the command.</p><p>The output of the example instruction is as follows:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Node Identifier                                 Node </span>
<span class="line">330411070           -&gt;          127.0.0.1:9003:40010:6667</span>
<span class="line">330454032           -&gt;          127.0.0.1:9005:40012:6668 </span>
<span class="line">330496472           -&gt;          127.0.0.1:9007:40014:6669</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The above output shows that there are three nodes in the current cluster,<br> and the output results are ordered by their identifier ascendant.</p><h3 id="query-data-partition-and-metadata-partition" tabindex="-1"><a class="header-anchor" href="#query-data-partition-and-metadata-partition"><span>Query data partition and metadata partition</span></a></h3><p>The time series metadata of distributed iotdb is divided into multiple data groups according to their storage groups,<br> in which the storage group and data partition are many to one relationship.</p><p>That is, all metadata of a storage group only exists in the same data group,<br> and a data group may contain multiple storage groups.</p><p>The data is divided into multiple data groups according to its storage group and timestamp,<br> and the time partition granularity is decided by a configuration (currently unavailable).</p><p>The data partition is composed of several replica nodes to ensure high availability of data,<br> and one of the nodes plays the role of leader.</p><p>Through this instruction, the user can know the metadata of a certain path,<br> and the nodes under which the data is stored.</p><p>1.Input</p><blockquote><p>The instruction for querying data partition information is <code>partition</code>.<br> The parameters are described as follows:</p></blockquote><table><thead><tr><th>Parameter</th><th>Description</th><th>Examples</th></tr></thead><tbody><tr><td>-m</td><td>--metadata Query metadata partition, by default only query data partition</td><td>-m</td></tr><tr><td>-path</td><td>--path Required parameter, the path to be queried. If the path has no corresponding storage group, the query fails</td><td>-path root.guangzhou.d1</td></tr><tr><td>-st</td><td>--StartTime The system uses the current partition time by default</td><td>-st 1576724778159</td></tr><tr><td>-et</td><td>--EndTime It is used when querying data partition.<br>The end time is the current system time by default. <br> If the end time is less than the start time, the end time is the start time by default</td><td>-et 1576724778159</td></tr></tbody></table><p>2.Output</p><blockquote><p>The output is a multi-line string, and each line of string is a key-value pair, where the key represents the partition,<br> and the value represents the data group in the format of &lt; key -&gt; value&gt;.</p></blockquote><p>3.Examples</p><blockquote><p>Suppose that the current cluster runs on three nodes: 127.0.0.1:9003:40010:6667, 127.0.0.1:9005:40012:6668, and 127.0.0.1:9007:40014:6669.</p><p>The number of copies is 2 and there are 3 storage groups:{ root.beijing , root.shanghai , root.guangzhou}.</p></blockquote><ul><li>Partition of query data (default time range, time partition interval is one day)</li></ul><p>Linux and MacOS：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Shell &gt; ./sbin/nodetool.sh -h 127.0.0.1 -p 31999 partition -path root.guangzhou.d1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Windows：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Shell &gt; .\\sbin\\nodetool.bat -h 127.0.0.1 -p 31999 partition -path root.guangzhou.d1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Press enter to execute the command.</p><p>The output of the example instruction is as follows:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">DATA&lt;root.guangzhou.d1, 1576723735188, 1576723735188&gt;	-&gt;	[127.0.0.1:9003:40010:6667, 127.0.0.1:9005:40012:6668]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>Partition of query data (specified time range, time partition interval is one day)</li></ul><p>Linux and MacOS：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Shell &gt; ./sbin/nodetool.sh -h 127.0.0.1 -p 31999 partition -path root.guangzhou.d1 -st 1576624778159 -et 1576724778159</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Windows：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Shell &gt; .\\sbin\\nodetool.bat -h 127.0.0.1 -p 31999 partition -path root.guangzhou.d1 -st 1576624778159 -et 1576724778159</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Press enter to execute the command.</p><p>The output of the example instruction is as follows:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">DATA&lt;root.guangzhou.d1, 1576627200000, 1576713599999&gt;	-&gt;	[127.0.0.1:9007:40014:6669, 127.0.0.1:9003:40010:6667] </span>
<span class="line">DATA&lt;root.guangzhou.d1, 1576713600000, 1576724778159&gt;	-&gt;	[127.0.0.1:9003:40010:6667, 127.0.0.1:9005:40012:6668] </span>
<span class="line">DATA&lt;root.guangzhou.d1, 1576624778159, 1576627199999&gt;	-&gt;	[127.0.0.1:9005:40012:6668, 127.0.0.1:9007:40014:6669]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Query metadata partition</li></ul><p>Linux and MacOS：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Shell &gt; ./sbin/nodetool.sh -h 127.0.0.1 -p 31999 partition -path root.guangzhou.d1 -m</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Windows：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Shell &gt; .\\sbin\\nodetool.bat -h 127.0.0.1 -p 31999 partition -path root.guangzhou.d1 -m</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Press enter to execute the command.</p><p>The output of the example instruction is as follows:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">DATA&lt;root.guangzhou.d1, 1576723735188, 1576723735188&gt;	-&gt;	[127.0.0.1:9003:40010, 127.0.0.1:9004:40011]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>The above output shows that the data group to which root.guangzhou.d1 belongs contains two nodes,<br> of which 127.0.0.1:9003:40010 is the header node.</p><h3 id="query-the-number-of-slots-managed-by-the-node" tabindex="-1"><a class="header-anchor" href="#query-the-number-of-slots-managed-by-the-node"><span>Query the number of slots managed by the node</span></a></h3><p>Distributed IoTDB divides data into a fixed number of (10000 by default) slots,<br> and the leader of the cluster management group divides the slots among data groups.</p><p>Through this instruction, you can know the number of slots managed by each data group.</p><ol><li>Input</li></ol><blockquote><p>The command to query the data partition information corresponding to the node is <code>host</code>.</p><p>The parameters are described as follows:</p></blockquote><table><thead><tr><th>Parameter</th><th>Description</th><th>Examples</th></tr></thead><tbody><tr><td>-a or --all</td><td>Query the number of slots managed by all data groups. By default only data groups of the query node are shown</td><td>-a</td></tr></tbody></table><p>2.Output</p><blockquote><p>The output is a multi-line string, in which each line is a key-value pair, where the key represents the data group,<br> and the value represents the number of slots managed, and the format is &lt;key -&gt; value&gt;.</p></blockquote><p>3.Examples</p><blockquote><p>Suppose that the current cluster runs on three nodes: 127.0.0.1:9003:40010:6667, 127.0.0.1:9005:40012:6668, and 127.0.0.1:9007:40014:6669,<br> and the number of copies is 2.</p></blockquote><ul><li>Default Partition Group</li></ul><p>Linux and MacOS：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Shell &gt; ./sbin/nodetool.sh -h 127.0.0.1 -p 31999 host</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Windows：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Shell &gt; .\\sbin\\nodetool.bat -h 127.0.0.1 -p 31999 host</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Press enter to execute the command.</p><p>The output of the example instruction is as follows:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Raft group                                                 Slot Number</span>
<span class="line">(127.0.0.1:9003:40010:6667, 127.0.0.1:9005:40012:6668)      -&gt;                3333</span>
<span class="line">(127.0.0.1:9007:40014:6669, 127.0.0.1:9003:40010:6667)      -&gt;                3334</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>All Partition Groups</li></ul><p>Linux and MacOS：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Shell &gt; ./sbin/nodetool.sh -h 127.0.0.1 -p 31999 host -a</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Windows：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Shell &gt; .\\sbin\\nodetool.bat -h 127.0.0.1 -p 31999 host -a</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Press enter to execute the command.</p><p>The output of the example instruction is as follows:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Raft group                                                 Slot Number</span>
<span class="line">(127.0.0.1:9003:40010:6667, 127.0.0.1:9005:40012:6668)      -&gt;                3333</span>
<span class="line">(127.0.0.1:9005:40012:6668, 127.0.0.1:9007:40014:6669)      -&gt;                3333</span>
<span class="line">(127.0.0.1:9007:40014:6669, 127.0.0.1:9003:40010:6667)      -&gt;                3334 </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="query-node-status" tabindex="-1"><a class="header-anchor" href="#query-node-status"><span>Query node status</span></a></h3><p>Distributed IoTDB contains multiple nodes.<br> For any node, there is a possibility that it cannot provide services normally due to network or hardware problems.</p><p>Through this instruction, you can know the current status of all nodes in the cluster.</p><p>1.Input</p><blockquote><p>status</p></blockquote><p>2.Output</p><blockquote><p>The output is a multi-line string, where each line is a key-value pair, where the key represents the node (IP: METAPORT:DATAPORT),<br> the value indicates the status of the node, &quot;on&quot; is normal, &quot;off&quot; is abnormal, and the format is &lt; key -&gt; value&gt;.</p></blockquote><p>3.Examples</p><blockquote><p>Suppose that the current cluster runs on three nodes: 127.0.0.1:9003:40010:6667, 127.0.0.1:9005:40012:6668, and 127.0.0.1:9007:40014:6669,<br> and the number of copies is 2.</p></blockquote><p>Linux and MacOS：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Shell &gt; ./sbin/nodetool.sh -h 127.0.0.1 -p 31999 status</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Windows：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Shell &gt; .\\sbin\\nodetool.bat -h 127.0.0.1 -p 31999 status</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Press enter to execute the command.</p><p>The output of the example instruction is as follows:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Node                                Status </span>
<span class="line">127.0.0.1:9003:40010:6667          -&gt;        on </span>
<span class="line">127.0.0.1:9005:40012:6668          -&gt;        off</span>
<span class="line">127.0.0.1:9007:40014:6669          -&gt;        on </span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The above output indicates that 127.0.0.1:9003:40010:6667 nodes and 127.0.0.1:9007:40014:6669 nodes are in normal state,<br> and 127.0.0.1:9005:40012:6668 nodes cannot provide services.</p>`,108))])}const g=s(u,[["render",h],["__file","NodeTool.html.vue"]]),b=JSON.parse('{"path":"/UserGuide/V0.13.x/Maintenance-Tools/NodeTool.html","title":"Introduction","lang":"en-US","frontmatter":{"description":"Introduction IoTDB cluster version provides nodetool, a shell tool for users to monitor the working status of the specified cluster. Users can obtain the status of the cluster b...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Maintenance-Tools/NodeTool.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V0.13.x/Maintenance-Tools/NodeTool.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Introduction"}],["meta",{"property":"og:description","content":"Introduction IoTDB cluster version provides nodetool, a shell tool for users to monitor the working status of the specified cluster. Users can obtain the status of the cluster b..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Introduction\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Get Started","slug":"get-started","link":"#get-started","children":[]},{"level":2,"title":"Explains","slug":"explains","link":"#explains","children":[{"level":3,"title":"Show The Ring Of Node","slug":"show-the-ring-of-node","link":"#show-the-ring-of-node","children":[]},{"level":3,"title":"Query data partition and metadata partition","slug":"query-data-partition-and-metadata-partition","link":"#query-data-partition-and-metadata-partition","children":[]},{"level":3,"title":"Query the number of slots managed by the node","slug":"query-the-number-of-slots-managed-by-the-node","link":"#query-the-number-of-slots-managed-by-the-node","children":[]},{"level":3,"title":"Query node status","slug":"query-node-status","link":"#query-node-status","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":5.31,"words":1593},"filePathRelative":"UserGuide/V0.13.x/Maintenance-Tools/NodeTool.md","localizedDate":"July 10, 2023","autoDesc":true}');export{g as comp,b as data};
