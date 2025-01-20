import{_ as e,c as s,b as a,o as l}from"./app-CLygX6ac.js";const n={};function d(r,t){return l(),s("div",null,t[0]||(t[0]=[a(`<h2 id="spark-tsfile" tabindex="-1"><a class="header-anchor" href="#spark-tsfile"><span>Spark-TsFile</span></a></h2><h3 id="about-spark-tsfile-connector" tabindex="-1"><a class="header-anchor" href="#about-spark-tsfile-connector"><span>About Spark-TsFile-Connector</span></a></h3><p>Spark-TsFile-Connector implements the support of Spark for external data sources of Tsfile type. This enables users to read, write and query Tsfile by Spark.</p><p>With this connector, you can</p><ul><li>load a single TsFile, from either the local file system or hdfs, into Spark</li><li>load all files in a specific directory, from either the local file system or hdfs, into Spark</li><li>write data from Spark into TsFile</li></ul><h3 id="system-requirements" tabindex="-1"><a class="header-anchor" href="#system-requirements"><span>System Requirements</span></a></h3><table><thead><tr><th style="text-align:center;">Spark Version</th><th style="text-align:center;">Scala Version</th><th style="text-align:center;">Java Version</th><th style="text-align:center;">TsFile</th></tr></thead><tbody><tr><td style="text-align:center;"><code>2.4.3</code></td><td style="text-align:center;"><code>2.11.8</code></td><td style="text-align:center;"><code>1.8</code></td><td style="text-align:center;"><code>0.13.0-SNAPSHOT</code></td></tr></tbody></table><blockquote><p>Note: For more information about how to download and use TsFile, please see the following link: <a href="https://github.com/apache/iotdb/tree/master/tsfile" target="_blank" rel="noopener noreferrer">https://github.com/apache/iotdb/tree/master/tsfile</a>.<br> Currently we only support spark version 2.4.3 and there are some known issue on 2.4.7, do no use it</p></blockquote><h3 id="quick-start" tabindex="-1"><a class="header-anchor" href="#quick-start"><span>Quick Start</span></a></h3><h4 id="local-mode" tabindex="-1"><a class="header-anchor" href="#local-mode"><span>Local Mode</span></a></h4><p>Start Spark with TsFile-Spark-Connector in local mode:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>./&lt;spark-shell-path&gt;  --jars  tsfile-spark-connector.jar,tsfile-{version}-jar-with-dependencies.jar,hadoop-tsfile-{version}-jar-with-dependencies.jar</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Note:</p><ul><li>&lt;spark-shell-path&gt; is the real path of your spark-shell.</li><li>Multiple jar packages are separated by commas without any spaces.</li><li>See <a href="https://github.com/apache/iotdb/tree/master/tsfile" target="_blank" rel="noopener noreferrer">https://github.com/apache/iotdb/tree/master/tsfile</a> for how to get TsFile.</li></ul><h4 id="distributed-mode" tabindex="-1"><a class="header-anchor" href="#distributed-mode"><span>Distributed Mode</span></a></h4><p>Start Spark with TsFile-Spark-Connector in distributed mode (That is, the spark cluster is connected by spark-shell):</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>. /&lt;spark-shell-path&gt;   --jars  tsfile-spark-connector.jar,tsfile-{version}-jar-with-dependencies.jar,hadoop-tsfile-{version}-jar-with-dependencies.jar  --master spark://ip:7077</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Note:</p><ul><li>&lt;spark-shell-path&gt; is the real path of your spark-shell.</li><li>Multiple jar packages are separated by commas without any spaces.</li><li>See <a href="https://github.com/apache/iotdb/tree/master/tsfile" target="_blank" rel="noopener noreferrer">https://github.com/apache/iotdb/tree/master/tsfile</a> for how to get TsFile.</li></ul><h3 id="data-type-correspondence" tabindex="-1"><a class="header-anchor" href="#data-type-correspondence"><span>Data Type Correspondence</span></a></h3><table><thead><tr><th>TsFile data type</th><th>SparkSQL data type</th></tr></thead><tbody><tr><td>BOOLEAN</td><td>BooleanType</td></tr><tr><td>INT32</td><td>IntegerType</td></tr><tr><td>INT64</td><td>LongType</td></tr><tr><td>FLOAT</td><td>FloatType</td></tr><tr><td>DOUBLE</td><td>DoubleType</td></tr><tr><td>TEXT</td><td>StringType</td></tr></tbody></table><h3 id="schema-inference" tabindex="-1"><a class="header-anchor" href="#schema-inference"><span>Schema Inference</span></a></h3><p>The way to display TsFile is dependent on the schema. Take the following TsFile structure as an example: There are three measurements in the TsFile schema: status, temperature, and hardware. The basic information of these three measurements is listed:</p><table><thead><tr><th>Name</th><th>Type</th><th>Encode</th></tr></thead><tbody><tr><td>status</td><td>Boolean</td><td>PLAIN</td></tr><tr><td>temperature</td><td>Float</td><td>RLE</td></tr><tr><td>hardware</td><td>Text</td><td>PLAIN</td></tr></tbody></table><p>The existing data in the TsFile are:</p><img width="519" alt="ST 1" src="https://alioss.timecho.com/docs/img/github/98197920-be9abc80-1f62-11eb-9efb-027f0590031c.png"><p>The corresponding SparkSQL table is:</p><table><thead><tr><th>time</th><th>root.ln.wf02.wt02.temperature</th><th>root.ln.wf02.wt02.status</th><th>root.ln.wf02.wt02.hardware</th><th>root.ln.wf01.wt01.temperature</th><th>root.ln.wf01.wt01.status</th><th>root.ln.wf01.wt01.hardware</th></tr></thead><tbody><tr><td>1</td><td>null</td><td>true</td><td>null</td><td>2.2</td><td>true</td><td>null</td></tr><tr><td>2</td><td>null</td><td>false</td><td>aaa</td><td>2.2</td><td>null</td><td>null</td></tr><tr><td>3</td><td>null</td><td>null</td><td>null</td><td>2.1</td><td>true</td><td>null</td></tr><tr><td>4</td><td>null</td><td>true</td><td>bbb</td><td>null</td><td>null</td><td>null</td></tr><tr><td>5</td><td>null</td><td>null</td><td>null</td><td>null</td><td>false</td><td>null</td></tr><tr><td>6</td><td>null</td><td>null</td><td>ccc</td><td>null</td><td>null</td><td>null</td></tr></tbody></table><p>You can also use narrow table form which as follows: (You can see part 6 about how to use narrow form)</p><table><thead><tr><th>time</th><th>device_name</th><th>status</th><th>hardware</th><th>temperature</th></tr></thead><tbody><tr><td>1</td><td>root.ln.wf02.wt01</td><td>true</td><td>null</td><td>2.2</td></tr><tr><td>1</td><td>root.ln.wf02.wt02</td><td>true</td><td>null</td><td>null</td></tr><tr><td>2</td><td>root.ln.wf02.wt01</td><td>null</td><td>null</td><td>2.2</td></tr><tr><td>2</td><td>root.ln.wf02.wt02</td><td>false</td><td>aaa</td><td>null</td></tr><tr><td>3</td><td>root.ln.wf02.wt01</td><td>true</td><td>null</td><td>2.1</td></tr><tr><td>4</td><td>root.ln.wf02.wt02</td><td>true</td><td>bbb</td><td>null</td></tr><tr><td>5</td><td>root.ln.wf02.wt01</td><td>false</td><td>null</td><td>null</td></tr><tr><td>6</td><td>root.ln.wf02.wt02</td><td>null</td><td>ccc</td><td>null</td></tr></tbody></table><h3 id="scala-api" tabindex="-1"><a class="header-anchor" href="#scala-api"><span>Scala API</span></a></h3><p>NOTE: Remember to assign necessary read and write permissions in advance.</p><ul><li>Example 1: read from the local file system</li></ul><div class="language-scala line-numbers-mode" data-highlighter="shiki" data-ext="scala" data-title="scala" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> org.apache.iotdb.spark.tsfile._</span></span>
<span class="line"><span style="color:#C678DD;">val</span><span style="color:#E06C75;"> wide_df</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> spark.read.tsfile(</span><span style="color:#98C379;">&quot;test.tsfile&quot;</span><span style="color:#ABB2BF;">)  </span></span>
<span class="line"><span style="color:#ABB2BF;">wide_df.show</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">val</span><span style="color:#E06C75;"> narrow_df</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> spark.read.tsfile(</span><span style="color:#98C379;">&quot;test.tsfile&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">)  </span></span>
<span class="line"><span style="color:#ABB2BF;">narrow_df.show</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Example 2: read from the hadoop file system</li></ul><div class="language-scala line-numbers-mode" data-highlighter="shiki" data-ext="scala" data-title="scala" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> org.apache.iotdb.spark.tsfile._</span></span>
<span class="line"><span style="color:#C678DD;">val</span><span style="color:#E06C75;"> wide_df</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> spark.read.tsfile(</span><span style="color:#98C379;">&quot;hdfs://localhost:9000/test.tsfile&quot;</span><span style="color:#ABB2BF;">) </span></span>
<span class="line"><span style="color:#ABB2BF;">wide_df.show</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">val</span><span style="color:#E06C75;"> narrow_df</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> spark.read.tsfile(</span><span style="color:#98C379;">&quot;hdfs://localhost:9000/test.tsfile&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">)  </span></span>
<span class="line"><span style="color:#ABB2BF;">narrow_df.show</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Example 3: read from a specific directory</li></ul><div class="language-scala line-numbers-mode" data-highlighter="shiki" data-ext="scala" data-title="scala" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> org.apache.iotdb.spark.tsfile._</span></span>
<span class="line"><span style="color:#C678DD;">val</span><span style="color:#E06C75;"> df</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> spark.read.tsfile(</span><span style="color:#98C379;">&quot;hdfs://localhost:9000/usr/hadoop&quot;</span><span style="color:#ABB2BF;">) </span></span>
<span class="line"><span style="color:#ABB2BF;">df.show</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Note 1: Global time ordering of all TsFiles in a directory is not supported now.</p><p>Note 2: Measurements of the same name should have the same schema.</p><ul><li>Example 4: query in wide form</li></ul><div class="language-scala line-numbers-mode" data-highlighter="shiki" data-ext="scala" data-title="scala" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> org.apache.iotdb.spark.tsfile._</span></span>
<span class="line"><span style="color:#C678DD;">val</span><span style="color:#E06C75;"> df</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> spark.read.tsfile(</span><span style="color:#98C379;">&quot;hdfs://localhost:9000/test.tsfile&quot;</span><span style="color:#ABB2BF;">) </span></span>
<span class="line"><span style="color:#ABB2BF;">df.createOrReplaceTempView(</span><span style="color:#98C379;">&quot;tsfile_table&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">val</span><span style="color:#E06C75;"> newDf</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> spark.sql(</span><span style="color:#98C379;">&quot;select * from tsfile_table where \`device_1.sensor_1\`&gt;0 and \`device_1.sensor_2\` &lt; 22&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">newDf.show</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-scala line-numbers-mode" data-highlighter="shiki" data-ext="scala" data-title="scala" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> org.apache.iotdb.spark.tsfile._</span></span>
<span class="line"><span style="color:#C678DD;">val</span><span style="color:#E06C75;"> df</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> spark.read.tsfile(</span><span style="color:#98C379;">&quot;hdfs://localhost:9000/test.tsfile&quot;</span><span style="color:#ABB2BF;">) </span></span>
<span class="line"><span style="color:#ABB2BF;">df.createOrReplaceTempView(</span><span style="color:#98C379;">&quot;tsfile_table&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">val</span><span style="color:#E06C75;"> newDf</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> spark.sql(</span><span style="color:#98C379;">&quot;select count(*) from tsfile_table&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">newDf.show</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Example 5: query in narrow form</li></ul><div class="language-scala line-numbers-mode" data-highlighter="shiki" data-ext="scala" data-title="scala" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> org.apache.iotdb.spark.tsfile._</span></span>
<span class="line"><span style="color:#C678DD;">val</span><span style="color:#E06C75;"> df</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> spark.read.tsfile(</span><span style="color:#98C379;">&quot;hdfs://localhost:9000/test.tsfile&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">) </span></span>
<span class="line"><span style="color:#ABB2BF;">df.createOrReplaceTempView(</span><span style="color:#98C379;">&quot;tsfile_table&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">val</span><span style="color:#E06C75;"> newDf</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> spark.sql(</span><span style="color:#98C379;">&quot;select * from tsfile_table where device_name = &#39;root.ln.wf02.wt02&#39; and temperature &gt; 5&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">newDf.show</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-scala line-numbers-mode" data-highlighter="shiki" data-ext="scala" data-title="scala" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> org.apache.iotdb.spark.tsfile._</span></span>
<span class="line"><span style="color:#C678DD;">val</span><span style="color:#E06C75;"> df</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> spark.read.tsfile(</span><span style="color:#98C379;">&quot;hdfs://localhost:9000/test.tsfile&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">) </span></span>
<span class="line"><span style="color:#ABB2BF;">df.createOrReplaceTempView(</span><span style="color:#98C379;">&quot;tsfile_table&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">val</span><span style="color:#E06C75;"> newDf</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> spark.sql(</span><span style="color:#98C379;">&quot;select count(*) from tsfile_table&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">newDf.show</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Example 6: write in wide form</li></ul><div class="language-scala line-numbers-mode" data-highlighter="shiki" data-ext="scala" data-title="scala" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// we only support wide_form table to write</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> org.apache.iotdb.spark.tsfile._</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">val</span><span style="color:#E06C75;"> df</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> spark.read.tsfile(</span><span style="color:#98C379;">&quot;hdfs://localhost:9000/test.tsfile&quot;</span><span style="color:#ABB2BF;">) </span></span>
<span class="line"><span style="color:#ABB2BF;">df.show</span></span>
<span class="line"><span style="color:#ABB2BF;">df.write.tsfile(</span><span style="color:#98C379;">&quot;hdfs://localhost:9000/output&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">val</span><span style="color:#E06C75;"> newDf</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> spark.read.tsfile(</span><span style="color:#98C379;">&quot;hdfs://localhost:9000/output&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">newDf.show</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Example 7: write in narrow form</li></ul><div class="language-scala line-numbers-mode" data-highlighter="shiki" data-ext="scala" data-title="scala" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// we only support wide_form table to write</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> org.apache.iotdb.spark.tsfile._</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">val</span><span style="color:#E06C75;"> df</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> spark.read.tsfile(</span><span style="color:#98C379;">&quot;hdfs://localhost:9000/test.tsfile&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">) </span></span>
<span class="line"><span style="color:#ABB2BF;">df.show</span></span>
<span class="line"><span style="color:#ABB2BF;">df.write.tsfile(</span><span style="color:#98C379;">&quot;hdfs://localhost:9000/output&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">val</span><span style="color:#E06C75;"> newDf</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> spark.read.tsfile(</span><span style="color:#98C379;">&quot;hdfs://localhost:9000/output&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">newDf.show</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Appendix A: Old Design of Schema Inference</p><p>The way to display TsFile is related to TsFile Schema. Take the following TsFile structure as an example: There are three measurements in the Schema of TsFile: status, temperature, and hardware. The basic info of these three Measurements is:</p><table><thead><tr><th>Name</th><th>Type</th><th>Encode</th></tr></thead><tbody><tr><td>status</td><td>Boolean</td><td>PLAIN</td></tr><tr><td>temperature</td><td>Float</td><td>RLE</td></tr><tr><td>hardware</td><td>Text</td><td>PLAIN</td></tr></tbody></table><p>The existing data in the file are:</p><img width="817" alt="ST 2" src="https://alioss.timecho.com/docs/img/github/98197948-cf4b3280-1f62-11eb-9c8c-c97d1adf032c.png"><p>A set of time-series data</p><p>There are two ways to show a set of time-series data:</p><ul><li>the default way</li></ul><p>Two columns are created to store the full path of the device: time(LongType) and delta_object(StringType).</p><ul><li><code>time</code> : Timestamp, LongType</li><li><code>delta_object</code> : Delta_object ID, StringType</li></ul><p>Next, a column is created for each Measurement to store the specific data. The SparkSQL table structure is:</p><table><thead><tr><th>time(LongType)</th><th>delta_object(StringType)</th><th>status(BooleanType)</th><th>temperature(FloatType)</th><th>hardware(StringType)</th></tr></thead><tbody><tr><td>1</td><td>root.ln.wf01.wt01</td><td>True</td><td>2.2</td><td>null</td></tr><tr><td>1</td><td>root.ln.wf02.wt02</td><td>True</td><td>null</td><td>null</td></tr><tr><td>2</td><td>root.ln.wf01.wt01</td><td>null</td><td>2.2</td><td>null</td></tr><tr><td>2</td><td>root.ln.wf02.wt02</td><td>False</td><td>null</td><td>&quot;aaa&quot;</td></tr><tr><td>2</td><td>root.sgcc.wf03.wt01</td><td>True</td><td>null</td><td>null</td></tr><tr><td>3</td><td>root.ln.wf01.wt01</td><td>True</td><td>2.1</td><td>null</td></tr><tr><td>3</td><td>root.sgcc.wf03.wt01</td><td>True</td><td>3.3</td><td>null</td></tr><tr><td>4</td><td>root.ln.wf01.wt01</td><td>null</td><td>2.0</td><td>null</td></tr><tr><td>4</td><td>root.ln.wf02.wt02</td><td>True</td><td>null</td><td>&quot;bbb&quot;</td></tr><tr><td>4</td><td>root.sgcc.wf03.wt01</td><td>True</td><td>null</td><td>null</td></tr><tr><td>5</td><td>root.ln.wf01.wt01</td><td>False</td><td>null</td><td>null</td></tr><tr><td>5</td><td>root.ln.wf02.wt02</td><td>False</td><td>null</td><td>null</td></tr><tr><td>5</td><td>root.sgcc.wf03.wt01</td><td>True</td><td>null</td><td>null</td></tr><tr><td>6</td><td>root.ln.wf02.wt02</td><td>null</td><td>null</td><td>&quot;ccc&quot;</td></tr><tr><td>6</td><td>root.sgcc.wf03.wt01</td><td>null</td><td>6.6</td><td>null</td></tr><tr><td>7</td><td>root.ln.wf01.wt01</td><td>True</td><td>null</td><td>null</td></tr><tr><td>8</td><td>root.ln.wf02.wt02</td><td>null</td><td>null</td><td>&quot;ddd&quot;</td></tr><tr><td>8</td><td>root.sgcc.wf03.wt01</td><td>null</td><td>8.8</td><td>null</td></tr><tr><td>9</td><td>root.sgcc.wf03.wt01</td><td>null</td><td>9.9</td><td>null</td></tr></tbody></table><ul><li>unfold delta_object column</li></ul><p>Expand the device column by &quot;.&quot; into multiple columns, ignoring the root directory &quot;root&quot;. Convenient for richer aggregation operations. To use this display way, the parameter &quot;delta_object_name&quot; is set in the table creation statement (refer to Example 5 in Section 5.1 of this manual), as in this example, parameter &quot;delta_object_name&quot; is set to &quot;root.device.turbine&quot;. The number of path layers needs to be one-to-one. At this point, one column is created for each layer of the device path except the &quot;root&quot; layer. The column name is the name in the parameter and the value is the name of the corresponding layer of the device. Next, one column is created for each Measurement to store the specific data.</p><p>Then SparkSQL Table Structure is as follows:</p><table><thead><tr><th>time(LongType)</th><th>group(StringType)</th><th>field(StringType)</th><th>device(StringType)</th><th>status(BooleanType)</th><th>temperature(FloatType)</th><th>hardware(StringType)</th></tr></thead><tbody><tr><td>1</td><td>ln</td><td>wf01</td><td>wt01</td><td>True</td><td>2.2</td><td>null</td></tr><tr><td>1</td><td>ln</td><td>wf02</td><td>wt02</td><td>True</td><td>null</td><td>null</td></tr><tr><td>2</td><td>ln</td><td>wf01</td><td>wt01</td><td>null</td><td>2.2</td><td>null</td></tr><tr><td>2</td><td>ln</td><td>wf02</td><td>wt02</td><td>False</td><td>null</td><td>&quot;aaa&quot;</td></tr><tr><td>2</td><td>sgcc</td><td>wf03</td><td>wt01</td><td>True</td><td>null</td><td>null</td></tr><tr><td>3</td><td>ln</td><td>wf01</td><td>wt01</td><td>True</td><td>2.1</td><td>null</td></tr><tr><td>3</td><td>sgcc</td><td>wf03</td><td>wt01</td><td>True</td><td>3.3</td><td>null</td></tr><tr><td>4</td><td>ln</td><td>wf01</td><td>wt01</td><td>null</td><td>2.0</td><td>null</td></tr><tr><td>4</td><td>ln</td><td>wf02</td><td>wt02</td><td>True</td><td>null</td><td>&quot;bbb&quot;</td></tr><tr><td>4</td><td>sgcc</td><td>wf03</td><td>wt01</td><td>True</td><td>null</td><td>null</td></tr><tr><td>5</td><td>ln</td><td>wf01</td><td>wt01</td><td>False</td><td>null</td><td>null</td></tr><tr><td>5</td><td>ln</td><td>wf02</td><td>wt02</td><td>False</td><td>null</td><td>null</td></tr><tr><td>5</td><td>sgcc</td><td>wf03</td><td>wt01</td><td>True</td><td>null</td><td>null</td></tr><tr><td>6</td><td>ln</td><td>wf02</td><td>wt02</td><td>null</td><td>null</td><td>&quot;ccc&quot;</td></tr><tr><td>6</td><td>sgcc</td><td>wf03</td><td>wt01</td><td>null</td><td>6.6</td><td>null</td></tr><tr><td>7</td><td>ln</td><td>wf01</td><td>wt01</td><td>True</td><td>null</td><td>null</td></tr><tr><td>8</td><td>ln</td><td>wf02</td><td>wt02</td><td>null</td><td>null</td><td>&quot;ddd&quot;</td></tr><tr><td>8</td><td>sgcc</td><td>wf03</td><td>wt01</td><td>null</td><td>8.8</td><td>null</td></tr><tr><td>9</td><td>sgcc</td><td>wf03</td><td>wt01</td><td>null</td><td>9.9</td><td>null</td></tr></tbody></table><p>TsFile-Spark-Connector displays one or more TsFiles as a table in SparkSQL By SparkSQL. It also allows users to specify a single directory or use wildcards to match multiple directories. If there are multiple TsFiles, the union of the measurements in all TsFiles will be retained in the table, and the measurement with the same name have the same data type by default. Note that if a situation with the same name but different data types exists, TsFile-Spark-Connector does not guarantee the correctness of the results.</p><p>The writing process is to write a DataFrame as one or more TsFiles. By default, two columns need to be included: time and delta_object. The rest of the columns are used as Measurement. If user wants to write the second table structure back to TsFile, user can set the &quot;delta_object_name&quot; parameter(refer to Section 5.1 of Section 5.1 of this manual).</p><p>Appendix B: Old Note<br> NOTE: Check the jar packages in the root directory of your Spark and replace libthrift-0.9.2.jar and libfb303-0.9.2.jar with libthrift-0.9.1.jar and libfb303-0.9.1.jar respectively.</p>`,69)]))}const i=e(n,[["render",d],["__file","Spark-TsFile.html.vue"]]),p=JSON.parse('{"path":"/UserGuide/V0.13.x/Ecosystem-Integration/Spark-TsFile.html","title":"","lang":"en-US","frontmatter":{"description":"Spark-TsFile About Spark-TsFile-Connector Spark-TsFile-Connector implements the support of Spark for external data sources of Tsfile type. This enables users to read, write and ...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Ecosystem-Integration/Spark-TsFile.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V0.13.x/Ecosystem-Integration/Spark-TsFile.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"Spark-TsFile About Spark-TsFile-Connector Spark-TsFile-Connector implements the support of Spark for external data sources of Tsfile type. This enables users to read, write and ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Spark-TsFile","slug":"spark-tsfile","link":"#spark-tsfile","children":[{"level":3,"title":"About Spark-TsFile-Connector","slug":"about-spark-tsfile-connector","link":"#about-spark-tsfile-connector","children":[]},{"level":3,"title":"System Requirements","slug":"system-requirements","link":"#system-requirements","children":[]},{"level":3,"title":"Quick Start","slug":"quick-start","link":"#quick-start","children":[]},{"level":3,"title":"Data Type Correspondence","slug":"data-type-correspondence","link":"#data-type-correspondence","children":[]},{"level":3,"title":"Schema Inference","slug":"schema-inference","link":"#schema-inference","children":[]},{"level":3,"title":"Scala API","slug":"scala-api","link":"#scala-api","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","username":"CritasWang","email":"critas@outlook.com","commits":1,"url":"https://github.com/CritasWang"}]},"readingTime":{"minutes":5.27,"words":1582},"filePathRelative":"UserGuide/V0.13.x/Ecosystem-Integration/Spark-TsFile.md","localizedDate":"July 10, 2023","autoDesc":true}');export{i as comp,p as data};
