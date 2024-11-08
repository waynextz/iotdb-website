import{_ as s,c as a,b as n,o as i}from"./app-CRFlbjpx.js";const t={};function l(r,e){return i(),a("div",null,e[0]||(e[0]=[n(`<h2 id="hive-tsfile" tabindex="-1"><a class="header-anchor" href="#hive-tsfile"><span>Hive-TsFile</span></a></h2><h3 id="about-hive-tsfile-connector" tabindex="-1"><a class="header-anchor" href="#about-hive-tsfile-connector"><span>About Hive-TsFile-Connector</span></a></h3><p>Hive-TsFile-Connector implements the support of Hive for external data sources of Tsfile type. This enables users to operate TsFile by Hive.</p><p>With this connector, you can</p><ul><li>Load a single TsFile, from either the local file system or hdfs, into hive</li><li>Load all files in a specific directory, from either the local file system or hdfs, into hive</li><li>Query the tsfile through HQL.</li><li>As of now, the write operation is not supported in hive-connector. So, insert operation in HQL is not allowed while operating tsfile through hive.</li></ul><h3 id="system-requirements" tabindex="-1"><a class="header-anchor" href="#system-requirements"><span>System Requirements</span></a></h3><table><thead><tr><th>Hadoop Version</th><th>Hive Version</th><th>Java Version</th><th>TsFile</th></tr></thead><tbody><tr><td><code>2.7.3</code> or <code>3.2.1</code></td><td><code>2.3.6</code> or <code>3.1.2</code></td><td><code>1.8</code></td><td><code>1.0.0</code></td></tr></tbody></table><blockquote><p>Note: For more information about how to download and use TsFile, please see the following link: <a href="https://github.com/apache/iotdb/tree/master/tsfile" target="_blank" rel="noopener noreferrer">https://github.com/apache/iotdb/tree/master/tsfile</a>.</p></blockquote><h3 id="data-type-correspondence" tabindex="-1"><a class="header-anchor" href="#data-type-correspondence"><span>Data Type Correspondence</span></a></h3><table><thead><tr><th>TsFile data type</th><th>Hive field type</th></tr></thead><tbody><tr><td>BOOLEAN</td><td>Boolean</td></tr><tr><td>INT32</td><td>INT</td></tr><tr><td>INT64</td><td>BIGINT</td></tr><tr><td>FLOAT</td><td>Float</td></tr><tr><td>DOUBLE</td><td>Double</td></tr><tr><td>TEXT</td><td>STRING</td></tr></tbody></table><h3 id="add-dependency-for-hive" tabindex="-1"><a class="header-anchor" href="#add-dependency-for-hive"><span>Add Dependency For Hive</span></a></h3><p>To use hive-connector in hive, we should add the hive-connector jar into hive.</p><p>After downloading the code of iotdb from <a href="https://github.com/apache/iotdb" target="_blank" rel="noopener noreferrer">https://github.com/apache/iotdb</a>, you can use the command of <code>mvn clean package -pl hive-connector -am -Dmaven.test.skip=true -P get-jar-with-dependencies</code> to get a <code>hive-connector-X.X.X-jar-with-dependencies.jar</code>.</p><p>Then in hive, use the command of <code>add jar XXX</code> to add the dependency. For example:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">hive&gt; add jar /Users/hive/iotdb/hive-connector/target/hive-connector-1.0.0-jar-with-dependencies.jar;</span>
<span class="line"></span>
<span class="line">Added [/Users/hive/iotdb/hive-connector/target/hive-connector-1.0.0-jar-with-dependencies.jar] to class path</span>
<span class="line">Added resources: [/Users/hive/iotdb/hive-connector/target/hive-connector-1.0.0-jar-with-dependencies.jar]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="create-tsfile-backed-hive-tables" tabindex="-1"><a class="header-anchor" href="#create-tsfile-backed-hive-tables"><span>Create Tsfile-backed Hive tables</span></a></h3><p>To create a Tsfile-backed table, specify the <code>serde</code> as <code>org.apache.iotdb.hive.TsFileSerDe</code>,<br> specify the <code>inputformat</code> as <code>org.apache.iotdb.hive.TSFHiveInputFormat</code>,<br> and the <code>outputformat</code> as <code>org.apache.iotdb.hive.TSFHiveOutputFormat</code>.</p><p>Also provide a schema which only contains two fields: <code>time_stamp</code> and <code>sensor_id</code> for the table.<br><code>time_stamp</code> is the time value of the time series<br> and <code>sensor_id</code> is the sensor name to extract from the tsfile to hive such as <code>sensor_1</code>.<br> The name of the table can be any valid table names in hive.</p><p>Also a location provided for hive-connector to pull the most current data for the table.</p><p>The location should be a specific directory on your local file system or HDFS to set up Hadoop.<br> If it is in your local file system, the location should look like <code>file:///data/data/sequence/root.baic2.WWS.leftfrontdoor/</code></p><p>Last, set the <code>device_id</code> in <code>TBLPROPERTIES</code> to the device name you want to analyze.</p><p>For example:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">CREATE EXTERNAL TABLE IF NOT EXISTS only_sensor_1(</span>
<span class="line">  time_stamp TIMESTAMP,</span>
<span class="line">  sensor_1 BIGINT)</span>
<span class="line">ROW FORMAT SERDE &#39;org.apache.iotdb.hive.TsFileSerDe&#39;</span>
<span class="line">STORED AS</span>
<span class="line">  INPUTFORMAT &#39;org.apache.iotdb.hive.TSFHiveInputFormat&#39;</span>
<span class="line">  OUTPUTFORMAT &#39;org.apache.iotdb.hive.TSFHiveOutputFormat&#39;</span>
<span class="line">LOCATION &#39;/data/data/sequence/root.baic2.WWS.leftfrontdoor/&#39;</span>
<span class="line">TBLPROPERTIES (&#39;device_id&#39;=&#39;root.baic2.WWS.leftfrontdoor.plc1&#39;);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In this example, the data of <code>root.baic2.WWS.leftfrontdoor.plc1.sensor_1</code> is pulled from the directory of <code>/data/data/sequence/root.baic2.WWS.leftfrontdoor/</code>.<br> This table results in a description as below:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">hive&gt; describe only_sensor_1;</span>
<span class="line">OK</span>
<span class="line">time_stamp          	timestamp              	from deserializer</span>
<span class="line">sensor_1            	bigint              	from deserializer</span>
<span class="line">Time taken: 0.053 seconds, Fetched: 2 row(s)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>At this point, the Tsfile-backed table can be worked with in Hive like any other table.</p><h3 id="query-from-tsfile-backed-hive-tables" tabindex="-1"><a class="header-anchor" href="#query-from-tsfile-backed-hive-tables"><span>Query from TsFile-backed Hive tables</span></a></h3><p>Before we do any queries, we should set the <code>hive.input.format</code> in hive by executing the following command.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">hive&gt; set hive.input.format=org.apache.hadoop.hive.ql.io.HiveInputFormat;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Now, we already have an external table named <code>only_sensor_1</code> in hive.<br> We can use any query operations through HQL to analyse it.</p><p>For example:</p><h4 id="select-clause-example" tabindex="-1"><a class="header-anchor" href="#select-clause-example"><span>Select Clause Example</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">hive&gt; select * from only_sensor_1 limit 10;</span>
<span class="line">OK</span>
<span class="line">1	1000000</span>
<span class="line">2	1000001</span>
<span class="line">3	1000002</span>
<span class="line">4	1000003</span>
<span class="line">5	1000004</span>
<span class="line">6	1000005</span>
<span class="line">7	1000006</span>
<span class="line">8	1000007</span>
<span class="line">9	1000008</span>
<span class="line">10	1000009</span>
<span class="line">Time taken: 1.464 seconds, Fetched: 10 row(s)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="aggregate-clause-example" tabindex="-1"><a class="header-anchor" href="#aggregate-clause-example"><span>Aggregate Clause Example</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">hive&gt; select count(*) from only_sensor_1;</span>
<span class="line">WARNING: Hive-on-MR is deprecated in Hive 2 and may not be available in the future versions. Consider using a different execution engine (i.e. spark, tez) or using Hive 1.X releases.</span>
<span class="line">Query ID = jackietien_20191016202416_d1e3e233-d367-4453-b39a-2aac9327a3b6</span>
<span class="line">Total jobs = 1</span>
<span class="line">Launching Job 1 out of 1</span>
<span class="line">Number of reduce tasks determined at compile time: 1</span>
<span class="line">In order to change the average load for a reducer (in bytes):</span>
<span class="line">  set hive.exec.reducers.bytes.per.reducer=&lt;number&gt;</span>
<span class="line">In order to limit the maximum number of reducers:</span>
<span class="line">  set hive.exec.reducers.max=&lt;number&gt;</span>
<span class="line">In order to set a constant number of reducers:</span>
<span class="line">  set mapreduce.job.reduces=&lt;number&gt;</span>
<span class="line">Job running in-process (local Hadoop)</span>
<span class="line">2019-10-16 20:24:18,305 Stage-1 map = 0%,  reduce = 0%</span>
<span class="line">2019-10-16 20:24:27,443 Stage-1 map = 100%,  reduce = 100%</span>
<span class="line">Ended Job = job_local867757288_0002</span>
<span class="line">MapReduce Jobs Launched:</span>
<span class="line">Stage-Stage-1:  HDFS Read: 0 HDFS Write: 0 SUCCESS</span>
<span class="line">Total MapReduce CPU Time Spent: 0 msec</span>
<span class="line">OK</span>
<span class="line">1000000</span>
<span class="line">Time taken: 11.334 seconds, Fetched: 1 row(s)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,35)]))}const o=s(t,[["render",l],["__file","Hive-TsFile.html.vue"]]),c=JSON.parse('{"path":"/UserGuide/V1.0.x/Ecosystem-Integration/Hive-TsFile.html","title":"","lang":"en-US","frontmatter":{"description":"Hive-TsFile About Hive-TsFile-Connector Hive-TsFile-Connector implements the support of Hive for external data sources of Tsfile type. This enables users to operate TsFile by Hi...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/Ecosystem-Integration/Hive-TsFile.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.0.x/Ecosystem-Integration/Hive-TsFile.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"Hive-TsFile About Hive-TsFile-Connector Hive-TsFile-Connector implements the support of Hive for external data sources of Tsfile type. This enables users to operate TsFile by Hi..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Hive-TsFile","slug":"hive-tsfile","link":"#hive-tsfile","children":[{"level":3,"title":"About Hive-TsFile-Connector","slug":"about-hive-tsfile-connector","link":"#about-hive-tsfile-connector","children":[]},{"level":3,"title":"System Requirements","slug":"system-requirements","link":"#system-requirements","children":[]},{"level":3,"title":"Data Type Correspondence","slug":"data-type-correspondence","link":"#data-type-correspondence","children":[]},{"level":3,"title":"Add Dependency For Hive","slug":"add-dependency-for-hive","link":"#add-dependency-for-hive","children":[]},{"level":3,"title":"Create Tsfile-backed Hive tables","slug":"create-tsfile-backed-hive-tables","link":"#create-tsfile-backed-hive-tables","children":[]},{"level":3,"title":"Query from TsFile-backed Hive tables","slug":"query-from-tsfile-backed-hive-tables","link":"#query-from-tsfile-backed-hive-tables","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":2.86,"words":859},"filePathRelative":"UserGuide/V1.0.x/Ecosystem-Integration/Hive-TsFile.md","localizedDate":"July 10, 2023","autoDesc":true}');export{o as comp,c as data};
