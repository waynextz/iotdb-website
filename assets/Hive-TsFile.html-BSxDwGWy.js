import{_ as a,c as s,b as n,o as i}from"./app-CLygX6ac.js";const t={};function l(o,e){return i(),s("div",null,e[0]||(e[0]=[n(`<h1 id="apache-hive-tsfile" tabindex="-1"><a class="header-anchor" href="#apache-hive-tsfile"><span>Apache Hive(TsFile)</span></a></h1><h2 id="about-hive-tsfile-connector" tabindex="-1"><a class="header-anchor" href="#about-hive-tsfile-connector"><span>About Hive-TsFile-Connector</span></a></h2><p>Hive-TsFile-Connector implements the support of Hive for external data sources of Tsfile type. This enables users to operate TsFile by Hive.</p><p>With this connector, you can</p><ul><li>Load a single TsFile, from either the local file system or hdfs, into hive</li><li>Load all files in a specific directory, from either the local file system or hdfs, into hive</li><li>Query the tsfile through HQL.</li><li>As of now, the write operation is not supported in hive-connector. So, insert operation in HQL is not allowed while operating tsfile through hive.</li></ul><h2 id="system-requirements" tabindex="-1"><a class="header-anchor" href="#system-requirements"><span>System Requirements</span></a></h2><table><thead><tr><th>Hadoop Version</th><th>Hive Version</th><th>Java Version</th><th>TsFile</th></tr></thead><tbody><tr><td><code>2.7.3</code> or <code>3.2.1</code></td><td><code>2.3.6</code> or <code>3.1.2</code></td><td><code>1.8</code></td><td><code>1.0.0</code></td></tr></tbody></table><blockquote><p>Note: For more information about how to download and use TsFile, please see the following link: <a href="https://github.com/apache/iotdb/tree/master/tsfile" target="_blank" rel="noopener noreferrer">https://github.com/apache/iotdb/tree/master/tsfile</a>.</p></blockquote><h2 id="data-type-correspondence" tabindex="-1"><a class="header-anchor" href="#data-type-correspondence"><span>Data Type Correspondence</span></a></h2><table><thead><tr><th>TsFile data type</th><th>Hive field type</th></tr></thead><tbody><tr><td>BOOLEAN</td><td>Boolean</td></tr><tr><td>INT32</td><td>INT</td></tr><tr><td>INT64</td><td>BIGINT</td></tr><tr><td>FLOAT</td><td>Float</td></tr><tr><td>DOUBLE</td><td>Double</td></tr><tr><td>TEXT</td><td>STRING</td></tr></tbody></table><h2 id="add-dependency-for-hive" tabindex="-1"><a class="header-anchor" href="#add-dependency-for-hive"><span>Add Dependency For Hive</span></a></h2><p>To use hive-connector in hive, we should add the hive-connector jar into hive.</p><p>After downloading the code of iotdb from <a href="https://github.com/apache/iotdb" target="_blank" rel="noopener noreferrer">https://github.com/apache/iotdb</a>, you can use the command of <code>mvn clean package -pl iotdb-connector/hive-connector -am -Dmaven.test.skip=true -P get-jar-with-dependencies</code> to get a <code>hive-connector-X.X.X-jar-with-dependencies.jar</code>.</p><p>Then in hive, use the command of <code>add jar XXX</code> to add the dependency. For example:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>hive&gt; add jar /Users/hive/iotdb/hive-connector/target/hive-connector-1.0.0-jar-with-dependencies.jar;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Added [/Users/hive/iotdb/hive-connector/target/hive-connector-1.0.0-jar-with-dependencies.jar] to class path</span></span>
<span class="line"><span>Added resources: [/Users/hive/iotdb/hive-connector/target/hive-connector-1.0.0-jar-with-dependencies.jar]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="create-tsfile-backed-hive-tables" tabindex="-1"><a class="header-anchor" href="#create-tsfile-backed-hive-tables"><span>Create Tsfile-backed Hive tables</span></a></h2><p>To create a Tsfile-backed table, specify the <code>serde</code> as <code>org.apache.iotdb.hive.TsFileSerDe</code>,<br> specify the <code>inputformat</code> as <code>org.apache.iotdb.hive.TSFHiveInputFormat</code>,<br> and the <code>outputformat</code> as <code>org.apache.iotdb.hive.TSFHiveOutputFormat</code>.</p><p>Also provide a schema which only contains two fields: <code>time_stamp</code> and <code>sensor_id</code> for the table.<br><code>time_stamp</code> is the time value of the time series<br> and <code>sensor_id</code> is the sensor name to extract from the tsfile to hive such as <code>sensor_1</code>.<br> The name of the table can be any valid table names in hive.</p><p>Also a location provided for hive-connector to pull the most current data for the table.</p><p>The location should be a specific directory on your local file system or HDFS to set up Hadoop.<br> If it is in your local file system, the location should look like <code>file:///data/data/sequence/root.baic2.WWS.leftfrontdoor/</code></p><p>Last, set the <code>device_id</code> in <code>TBLPROPERTIES</code> to the device name you want to analyze.</p><p>For example:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>CREATE EXTERNAL TABLE IF NOT EXISTS only_sensor_1(</span></span>
<span class="line"><span>  time_stamp TIMESTAMP,</span></span>
<span class="line"><span>  sensor_1 BIGINT)</span></span>
<span class="line"><span>ROW FORMAT SERDE &#39;org.apache.iotdb.hive.TsFileSerDe&#39;</span></span>
<span class="line"><span>STORED AS</span></span>
<span class="line"><span>  INPUTFORMAT &#39;org.apache.iotdb.hive.TSFHiveInputFormat&#39;</span></span>
<span class="line"><span>  OUTPUTFORMAT &#39;org.apache.iotdb.hive.TSFHiveOutputFormat&#39;</span></span>
<span class="line"><span>LOCATION &#39;/data/data/sequence/root.baic2.WWS.leftfrontdoor/&#39;</span></span>
<span class="line"><span>TBLPROPERTIES (&#39;device_id&#39;=&#39;root.baic2.WWS.leftfrontdoor.plc1&#39;);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In this example, the data of <code>root.baic2.WWS.leftfrontdoor.plc1.sensor_1</code> is pulled from the directory of <code>/data/data/sequence/root.baic2.WWS.leftfrontdoor/</code>.<br> This table results in a description as below:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>hive&gt; describe only_sensor_1;</span></span>
<span class="line"><span>OK</span></span>
<span class="line"><span>time_stamp          	timestamp              	from deserializer</span></span>
<span class="line"><span>sensor_1            	bigint              	from deserializer</span></span>
<span class="line"><span>Time taken: 0.053 seconds, Fetched: 2 row(s)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>At this point, the Tsfile-backed table can be worked with in Hive like any other table.</p><h2 id="query-from-tsfile-backed-hive-tables" tabindex="-1"><a class="header-anchor" href="#query-from-tsfile-backed-hive-tables"><span>Query from TsFile-backed Hive tables</span></a></h2><p>Before we do any queries, we should set the <code>hive.input.format</code> in hive by executing the following command.</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>hive&gt; set hive.input.format=org.apache.hadoop.hive.ql.io.HiveInputFormat;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Now, we already have an external table named <code>only_sensor_1</code> in hive.<br> We can use any query operations through HQL to analyse it.</p><p>For example:</p><h3 id="select-clause-example" tabindex="-1"><a class="header-anchor" href="#select-clause-example"><span>Select Clause Example</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>hive&gt; select * from only_sensor_1 limit 10;</span></span>
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
<span class="line"><span>Time taken: 1.464 seconds, Fetched: 10 row(s)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="aggregate-clause-example" tabindex="-1"><a class="header-anchor" href="#aggregate-clause-example"><span>Aggregate Clause Example</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>hive&gt; select count(*) from only_sensor_1;</span></span>
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
<span class="line"><span>Time taken: 11.334 seconds, Fetched: 1 row(s)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,35)]))}const d=a(t,[["render",l],["__file","Hive-TsFile.html.vue"]]),c=JSON.parse('{"path":"/UserGuide/V2.0.1/Tree/Ecosystem-Integration/Hive-TsFile.html","title":"Apache Hive(TsFile)","lang":"en-US","frontmatter":{"description":"Apache Hive(TsFile) About Hive-TsFile-Connector Hive-TsFile-Connector implements the support of Hive for external data sources of Tsfile type. This enables users to operate TsFi...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V2.0.1/Tree/Ecosystem-Integration/Hive-TsFile.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V2.0.1/Tree/Ecosystem-Integration/Hive-TsFile.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Apache Hive(TsFile)"}],["meta",{"property":"og:description","content":"Apache Hive(TsFile) About Hive-TsFile-Connector Hive-TsFile-Connector implements the support of Hive for external data sources of Tsfile type. This enables users to operate TsFi..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-13T04:33:18.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-13T04:33:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Apache Hive(TsFile)\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-13T04:33:18.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"About Hive-TsFile-Connector","slug":"about-hive-tsfile-connector","link":"#about-hive-tsfile-connector","children":[]},{"level":2,"title":"System Requirements","slug":"system-requirements","link":"#system-requirements","children":[]},{"level":2,"title":"Data Type Correspondence","slug":"data-type-correspondence","link":"#data-type-correspondence","children":[]},{"level":2,"title":"Add Dependency For Hive","slug":"add-dependency-for-hive","link":"#add-dependency-for-hive","children":[]},{"level":2,"title":"Create Tsfile-backed Hive tables","slug":"create-tsfile-backed-hive-tables","link":"#create-tsfile-backed-hive-tables","children":[]},{"level":2,"title":"Query from TsFile-backed Hive tables","slug":"query-from-tsfile-backed-hive-tables","link":"#query-from-tsfile-backed-hive-tables","children":[{"level":3,"title":"Select Clause Example","slug":"select-clause-example","link":"#select-clause-example","children":[]},{"level":3,"title":"Aggregate Clause Example","slug":"aggregate-clause-example","link":"#aggregate-clause-example","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1734064398000,"contributors":[{"name":"majialin","username":"majialin","email":"107627937+mal117@users.noreply.github.com","commits":1,"url":"https://github.com/majialin"},{"name":"W1y1r","username":"W1y1r","email":"150988475+W1y1r@users.noreply.github.com","commits":2,"url":"https://github.com/W1y1r"},{"name":"Lei","username":"Lei","email":"33376433+LeiRui@users.noreply.github.com","commits":1,"url":"https://github.com/Lei"},{"name":"CritasWang","username":"CritasWang","email":"critas@outlook.com","commits":1,"url":"https://github.com/CritasWang"}]},"readingTime":{"minutes":2.87,"words":861},"filePathRelative":"UserGuide/V2.0.1/Tree/Ecosystem-Integration/Hive-TsFile.md","localizedDate":"July 10, 2023","autoDesc":true}');export{d as comp,c as data};
