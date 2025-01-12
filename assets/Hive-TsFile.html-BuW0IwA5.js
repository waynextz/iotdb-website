import{_ as s,c as a,b as n,o as i}from"./app-CNiZnG3t.js";const l={};function t(d,e){return i(),a("div",null,e[0]||(e[0]=[n(`<h1 id="apache-hive-tsfile" tabindex="-1"><a class="header-anchor" href="#apache-hive-tsfile"><span>Apache Hive(TsFile)</span></a></h1><h2 id="什么是-tsfile-的-hive-连接器" tabindex="-1"><a class="header-anchor" href="#什么是-tsfile-的-hive-连接器"><span>什么是 TsFile 的 Hive 连接器</span></a></h2><p>TsFile 的 Hive 连接器实现了对 Hive 读取外部 Tsfile 类型的文件格式的支持，<br> 使用户能够通过 Hive 操作 Tsfile。</p><p>有了这个连接器，用户可以</p><ul><li>将单个 Tsfile 文件加载进 Hive，不论文件是存储在本地文件系统或者是 HDFS 中</li><li>将某个特定目录下的所有文件加载进 Hive，不论文件是存储在本地文件系统或者是 HDFS 中</li><li>使用 HQL 查询 tsfile</li><li>到现在为止，写操作在 hive-connector 中还没有被支持。所以，HQL 中的 insert 操作是不被允许的</li></ul><h2 id="系统环境要求" tabindex="-1"><a class="header-anchor" href="#系统环境要求"><span>系统环境要求</span></a></h2><table><thead><tr><th>Hadoop Version</th><th>Hive Version</th><th>Java Version</th><th>TsFile</th></tr></thead><tbody><tr><td><code>2.7.3</code> or <code>3.2.1</code></td><td><code>2.3.6</code> or <code>3.1.2</code></td><td><code>1.8</code></td><td><code>1.0.0+</code></td></tr></tbody></table><h2 id="数据类型对应关系" tabindex="-1"><a class="header-anchor" href="#数据类型对应关系"><span>数据类型对应关系</span></a></h2><table><thead><tr><th>TsFile 数据类型</th><th>Hive 数据类型</th></tr></thead><tbody><tr><td>BOOLEAN</td><td>Boolean</td></tr><tr><td>INT32</td><td>INT</td></tr><tr><td>INT64</td><td>BIGINT</td></tr><tr><td>FLOAT</td><td>Float</td></tr><tr><td>DOUBLE</td><td>Double</td></tr><tr><td>TEXT</td><td>STRING</td></tr></tbody></table><h2 id="为-hive-添加依赖-jar-包" tabindex="-1"><a class="header-anchor" href="#为-hive-添加依赖-jar-包"><span>为 Hive 添加依赖 jar 包</span></a></h2><p>为了在 Hive 中使用 Tsfile 的 hive 连接器，我们需要把 hive 连接器的 jar 导入进 hive。</p><p>从 <a href="https://github.com/apache/iotdb" target="_blank" rel="noopener noreferrer">https://github.com/apache/iotdb</a>下载完 iotdb 后，你可以使用 <code>mvn clean package -pl iotdb-connector/hive-connector -am -Dmaven.test.skip=true -P get-jar-with-dependencies</code>命令得到一个 <code>hive-connector-X.X.X-SNAPSHOT-jar-with-dependencies.jar</code>。</p><p>然后在 hive 的命令行中，使用<code>add jar XXX</code>命令添加依赖。例如：</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#61AFEF;">hive</span><span style="color:#ABB2BF;">&gt; </span><span style="color:#98C379;">add</span><span style="color:#98C379;"> jar</span><span style="color:#98C379;"> /Users/hive/iotdb/hive-connector/target/hive-connector-1.0.0-jar-with-dependencies.jar</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">Added</span><span style="color:#ABB2BF;"> [/Users/hive/iotdb/hive-connector/target/hive-connector-1.0.0-jar-with-dependencies.jar] to class path</span></span>
<span class="line"><span style="color:#61AFEF;">Added</span><span style="color:#98C379;"> resources:</span><span style="color:#ABB2BF;"> [/Users/hive/iotdb/hive-connector/target/hive-connector-1.0.0-jar-with-dependencies.jar]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建-tsfile-backed-的-hive-表" tabindex="-1"><a class="header-anchor" href="#创建-tsfile-backed-的-hive-表"><span>创建 Tsfile-backed 的 Hive 表</span></a></h2><p>为了创建一个 Tsfile-backed 的表，需要将<code>serde</code>指定为<code>org.apache.iotdb.hive.TsFileSerDe</code>，<br> 将<code>inputformat</code>指定为<code>org.apache.iotdb.hive.TSFHiveInputFormat</code>，<br> 将<code>outputformat</code>指定为<code>org.apache.iotdb.hive.TSFHiveOutputFormat</code>。</p><p>同时要提供一个只包含两个字段的 Schema，这两个字段分别是<code>time_stamp</code>和<code>sensor_id</code>。<br><code>time_stamp</code>代表的是时间序列的时间值，<code>sensor_id</code>是你想要从 tsfile 文件中提取出来分析的传感器名称，比如说<code>sensor_1</code>。<br> 表的名字可以是 hive 所支持的任何表名。</p><p>需要提供一个路径供 hive-connector 从其中拉取最新的数据。</p><p>这个路径必须是一个指定的文件夹，这个文件夹可以在你的本地文件系统上，也可以在 HDFS 上，如果你启动了 Hadoop 的话。<br> 如果是本地文件系统，要以这样的形式<code>file:///data/data/sequence/root.baic2.WWS.leftfrontdoor/</code></p><p>最后需要在<code>TBLPROPERTIES</code>里指明<code>device_id</code></p><p>例如：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>CREATE EXTERNAL TABLE IF NOT EXISTS only_sensor_1(</span></span>
<span class="line"><span>  time_stamp TIMESTAMP,</span></span>
<span class="line"><span>  sensor_1 BIGINT)</span></span>
<span class="line"><span>ROW FORMAT SERDE &#39;org.apache.iotdb.hive.TsFileSerDe&#39;</span></span>
<span class="line"><span>STORED AS</span></span>
<span class="line"><span>  INPUTFORMAT &#39;org.apache.iotdb.hive.TSFHiveInputFormat&#39;</span></span>
<span class="line"><span>  OUTPUTFORMAT &#39;org.apache.iotdb.hive.TSFHiveOutputFormat&#39;</span></span>
<span class="line"><span>LOCATION &#39;/data/data/sequence/root.baic2.WWS.leftfrontdoor/&#39;</span></span>
<span class="line"><span>TBLPROPERTIES (&#39;device_id&#39;=&#39;root.baic2.WWS.leftfrontdoor.plc1&#39;);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子里，我们从<code>/data/data/sequence/root.baic2.WWS.leftfrontdoor/</code>中拉取<code>root.baic2.WWS.leftfrontdoor.plc1.sensor_1</code>的数据。<br> 这个表可能产生如下描述：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>hive&gt; describe only_sensor_1;</span></span>
<span class="line"><span>OK</span></span>
<span class="line"><span>time_stamp          	timestamp              	from deserializer</span></span>
<span class="line"><span>sensor_1            	bigint              	from deserializer</span></span>
<span class="line"><span>Time taken: 0.053 seconds, Fetched: 2 row(s)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>到目前为止，Tsfile-backed 的表已经可以像 hive 中其他表一样被操作了。</p><h2 id="从-tsfile-backed-的-hive-表中查询" tabindex="-1"><a class="header-anchor" href="#从-tsfile-backed-的-hive-表中查询"><span>从 Tsfile-backed 的 Hive 表中查询</span></a></h2><p>在做任何查询之前，我们需要通过如下命令，在 hive 中设置<code>hive.input.format</code>：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>hive&gt; set hive.input.format=org.apache.hadoop.hive.ql.io.HiveInputFormat;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>现在，我们已经在 hive 中有了一个名为<code>only_sensor_1</code>的外部表。<br> 我们可以使用 HQL 做任何查询来分析其中的数据。</p><p>例如：</p><h3 id="选择查询语句示例" tabindex="-1"><a class="header-anchor" href="#选择查询语句示例"><span>选择查询语句示例</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>hive&gt; select * from only_sensor_1 limit 10;</span></span>
<span class="line"><span>OK</span></span>
<span class="line"><span>1	1000000</span></span>
<span class="line"><span>2	1000001</span></span>
<span class="line"><span>3	1000002</span></span>
<span class="line"><span>4	1000003</span></span>
<span class="line"><span>5	1000004</span></span>
<span class="line"><span>6	1000005</span></span>
<span class="line"><span>7	1000006</span></span>
<span class="line"><span>8	1000007</span></span>
<span class="line"><span>9	1000008</span></span>
<span class="line"><span>10	1000009</span></span>
<span class="line"><span>Time taken: 1.464 seconds, Fetched: 10 row(s)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="聚合查询语句示例" tabindex="-1"><a class="header-anchor" href="#聚合查询语句示例"><span>聚合查询语句示例</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>hive&gt; select count(*) from only_sensor_1;</span></span>
<span class="line"><span>WARNING: Hive-on-MR is deprecated in Hive 2 and may not be available in the future versions. Consider using a different execution engine (i.e. spark, tez) or using Hive 1.X releases.</span></span>
<span class="line"><span>Query ID = jackietien_20191016202416_d1e3e233-d367-4453-b39a-2aac9327a3b6</span></span>
<span class="line"><span>Total jobs = 1</span></span>
<span class="line"><span>Launching Job 1 out of 1</span></span>
<span class="line"><span>Number of reduce tasks determined at compile time: 1</span></span>
<span class="line"><span>In order to change the average load for a reducer (in bytes):</span></span>
<span class="line"><span>  set hive.exec.reducers.bytes.per.reducer=&lt;number&gt;</span></span>
<span class="line"><span>In order to limit the maximum number of reducers:</span></span>
<span class="line"><span>  set hive.exec.reducers.max=&lt;number&gt;</span></span>
<span class="line"><span>In order to set a constant number of reducers:</span></span>
<span class="line"><span>  set mapreduce.job.reduces=&lt;number&gt;</span></span>
<span class="line"><span>Job running in-process (local Hadoop)</span></span>
<span class="line"><span>2019-10-16 20:24:18,305 Stage-1 map = 0%,  reduce = 0%</span></span>
<span class="line"><span>2019-10-16 20:24:27,443 Stage-1 map = 100%,  reduce = 100%</span></span>
<span class="line"><span>Ended Job = job_local867757288_0002</span></span>
<span class="line"><span>MapReduce Jobs Launched:</span></span>
<span class="line"><span>Stage-Stage-1:  HDFS Read: 0 HDFS Write: 0 SUCCESS</span></span>
<span class="line"><span>Total MapReduce CPU Time Spent: 0 msec</span></span>
<span class="line"><span>OK</span></span>
<span class="line"><span>1000000</span></span>
<span class="line"><span>Time taken: 11.334 seconds, Fetched: 1 row(s)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,34)]))}const c=s(l,[["render",t],["__file","Hive-TsFile.html.vue"]]),o=JSON.parse('{"path":"/zh/UserGuide/V1.2.x/Ecosystem-Integration/Hive-TsFile.html","title":"Apache Hive(TsFile)","lang":"zh-CN","frontmatter":{"description":"Apache Hive(TsFile) 什么是 TsFile 的 Hive 连接器 TsFile 的 Hive 连接器实现了对 Hive 读取外部 Tsfile 类型的文件格式的支持， 使用户能够通过 Hive 操作 Tsfile。 有了这个连接器，用户可以 将单个 Tsfile 文件加载进 Hive，不论文件是存储在本地文件系统或者是 HDFS 中 ...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.2.x/Ecosystem-Integration/Hive-TsFile.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.2.x/Ecosystem-Integration/Hive-TsFile.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Apache Hive(TsFile)"}],["meta",{"property":"og:description","content":"Apache Hive(TsFile) 什么是 TsFile 的 Hive 连接器 TsFile 的 Hive 连接器实现了对 Hive 读取外部 Tsfile 类型的文件格式的支持， 使用户能够通过 Hive 操作 Tsfile。 有了这个连接器，用户可以 将单个 Tsfile 文件加载进 Hive，不论文件是存储在本地文件系统或者是 HDFS 中 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-08-12T04:20:54.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-12T04:20:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Apache Hive(TsFile)\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-12T04:20:54.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"什么是 TsFile 的 Hive 连接器","slug":"什么是-tsfile-的-hive-连接器","link":"#什么是-tsfile-的-hive-连接器","children":[]},{"level":2,"title":"系统环境要求","slug":"系统环境要求","link":"#系统环境要求","children":[]},{"level":2,"title":"数据类型对应关系","slug":"数据类型对应关系","link":"#数据类型对应关系","children":[]},{"level":2,"title":"为 Hive 添加依赖 jar 包","slug":"为-hive-添加依赖-jar-包","link":"#为-hive-添加依赖-jar-包","children":[]},{"level":2,"title":"创建 Tsfile-backed 的 Hive 表","slug":"创建-tsfile-backed-的-hive-表","link":"#创建-tsfile-backed-的-hive-表","children":[]},{"level":2,"title":"从 Tsfile-backed 的 Hive 表中查询","slug":"从-tsfile-backed-的-hive-表中查询","link":"#从-tsfile-backed-的-hive-表中查询","children":[{"level":3,"title":"选择查询语句示例","slug":"选择查询语句示例","link":"#选择查询语句示例","children":[]},{"level":3,"title":"聚合查询语句示例","slug":"聚合查询语句示例","link":"#聚合查询语句示例","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1723436454000,"contributors":[{"name":"W1y1r","username":"W1y1r","email":"150988475+W1y1r@users.noreply.github.com","commits":1,"url":"https://github.com/W1y1r"},{"name":"Lei","username":"Lei","email":"33376433+LeiRui@users.noreply.github.com","commits":1,"url":"https://github.com/Lei"},{"name":"wanghui42","username":"wanghui42","email":"105700158+wanghui42@users.noreply.github.com","commits":1,"url":"https://github.com/wanghui42"},{"name":"Haonan","username":"Haonan","email":"hhaonan@outlook.com","commits":1,"url":"https://github.com/Haonan"},{"name":"CritasWang","username":"CritasWang","email":"critas@outlook.com","commits":1,"url":"https://github.com/CritasWang"}]},"readingTime":{"minutes":3.57,"words":1070},"filePathRelative":"zh/UserGuide/V1.2.x/Ecosystem-Integration/Hive-TsFile.md","localizedDate":"2023年7月10日","autoDesc":true}');export{c as comp,o as data};
