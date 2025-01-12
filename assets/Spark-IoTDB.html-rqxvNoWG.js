import{_ as a,c as n,b as l,o}from"./app-CNiZnG3t.js";const t={};function e(p,s){return o(),n("div",null,s[0]||(s[0]=[l(`<h2 id="spark-iotdb" tabindex="-1"><a class="header-anchor" href="#spark-iotdb"><span>Spark-IoTDB</span></a></h2><h3 id="版本" tabindex="-1"><a class="header-anchor" href="#版本"><span>版本</span></a></h3><p>Spark和Java所需的版本如下：</p><table><thead><tr><th>Spark Version</th><th>Scala Version</th><th>Java Version</th><th>TsFile</th></tr></thead><tbody><tr><td><code>2.4.0-3.2.0</code></td><td><code>2.12</code></td><td><code>1.8</code></td><td><code>0.13.0</code></td></tr></tbody></table><h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意"><span>注意</span></a></h3><ol><li><p>Spark IoTDB Connector只支持<code>Spark 2.4.0</code>到<code>Spark 3.2.0</code>的<code>Scala 2.12</code>版本。<br> 如果需要对其他版本进行支持，可以通过修改源码中<code>spark-iotdb-connector</code>这个模块里面pom文件的Scala版本之后进行重新编译。</p></li><li><p>因为IoTDB与Spark的thrift版本有冲突，所以需要通过执行<code>rm -f $SPARK_HOME/jars/libthrift*</code>和<code>cp $IOTDB_HOME/lib/libthrift* $SPARK_HOME/jars/</code>这两个命令来解决。<br> 否则的话，就只能在IDE里面进行代码调试。而且如果你需要通过<code>spark-submit</code>命令提交任务的话，你打包时必须要带上依赖。</p></li></ol><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h3><p>mvn clean scala:compile compile install</p><h4 id="maven依赖" tabindex="-1"><a class="header-anchor" href="#maven依赖"><span>Maven依赖</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>    &lt;dependency&gt;</span></span>
<span class="line"><span>      &lt;groupId&gt;org.apache.iotdb&lt;/groupId&gt;</span></span>
<span class="line"><span>      &lt;artifactId&gt;spark-iotdb-connector&lt;/artifactId&gt;</span></span>
<span class="line"><span>      &lt;version&gt;0.13.0&lt;/version&gt;</span></span>
<span class="line"><span>    &lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="spark-shell用户指南" tabindex="-1"><a class="header-anchor" href="#spark-shell用户指南"><span>Spark-shell用户指南</span></a></h4><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#61AFEF;">spark-shell</span><span style="color:#D19A66;"> --jars</span><span style="color:#98C379;"> spark-iotdb-connector-0.13.0.jar,iotdb-jdbc-0.13.0-jar-with-dependencies.jar</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">import</span><span style="color:#98C379;"> org.apache.iotdb.spark.db._</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">val</span><span style="color:#98C379;"> df</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> spark.read.format</span><span style="color:#ABB2BF;">(</span><span style="color:#61AFEF;">&quot;org.apache.iotdb.spark.db&quot;</span><span style="color:#ABB2BF;">)</span><span style="color:#98C379;">.option</span><span style="color:#ABB2BF;">(</span><span style="color:#61AFEF;">&quot;url&quot;</span><span style="color:#61AFEF;">,</span><span style="color:#61AFEF;">&quot;jdbc:iotdb://127.0.0.1:6667/&quot;</span><span style="color:#ABB2BF;">)</span><span style="color:#98C379;">.option</span><span style="color:#ABB2BF;">(</span><span style="color:#61AFEF;">&quot;sql&quot;</span><span style="color:#61AFEF;">,</span><span style="color:#61AFEF;">&quot;select * from root&quot;</span><span style="color:#ABB2BF;">)</span><span style="color:#98C379;">.load</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">df.printSchema</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">df.show</span><span style="color:#ABB2BF;">()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要对rdd进行分区，可以执行以下操作</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#61AFEF;">spark-shell</span><span style="color:#D19A66;"> --jars</span><span style="color:#98C379;"> spark-iotdb-connector-0.13.0.jar,iotdb-jdbc-0.13.0-jar-with-dependencies.jar</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">import</span><span style="color:#98C379;"> org.apache.iotdb.spark.db._</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">val</span><span style="color:#98C379;"> df</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> spark.read.format</span><span style="color:#ABB2BF;">(</span><span style="color:#61AFEF;">&quot;org.apache.iotdb.spark.db&quot;</span><span style="color:#ABB2BF;">)</span><span style="color:#98C379;">.option</span><span style="color:#ABB2BF;">(</span><span style="color:#61AFEF;">&quot;url&quot;</span><span style="color:#61AFEF;">,</span><span style="color:#61AFEF;">&quot;jdbc:iotdb://127.0.0.1:6667/&quot;</span><span style="color:#ABB2BF;">)</span><span style="color:#98C379;">.option</span><span style="color:#ABB2BF;">(</span><span style="color:#61AFEF;">&quot;sql&quot;</span><span style="color:#61AFEF;">,</span><span style="color:#61AFEF;">&quot;select * from root&quot;</span><span style="color:#ABB2BF;">)</span><span style="color:#98C379;">.</span></span>
<span class="line"><span style="color:#61AFEF;">                        option(</span><span style="color:#61AFEF;">&quot;lowerBound&quot;</span><span style="color:#61AFEF;">,</span><span style="color:#ABB2BF;"> [lower </span><span style="color:#98C379;">bound</span><span style="color:#98C379;"> of</span><span style="color:#98C379;"> time</span><span style="color:#98C379;"> that</span><span style="color:#98C379;"> you</span><span style="color:#98C379;"> want</span><span style="color:#98C379;"> query</span><span style="color:#ABB2BF;">(</span><span style="color:#61AFEF;">include</span><span style="color:#ABB2BF;">)</span><span style="color:#98C379;">]</span><span style="color:#ABB2BF;">).option(</span><span style="color:#61AFEF;">&quot;upperBound&quot;</span><span style="color:#61AFEF;">,</span><span style="color:#ABB2BF;"> [upper </span><span style="color:#98C379;">bound</span><span style="color:#98C379;"> of</span><span style="color:#98C379;"> time</span><span style="color:#98C379;"> that</span><span style="color:#98C379;"> you</span><span style="color:#98C379;"> want</span><span style="color:#98C379;"> query</span><span style="color:#ABB2BF;">(</span><span style="color:#61AFEF;">include</span><span style="color:#ABB2BF;">)</span><span style="color:#98C379;">]</span><span style="color:#ABB2BF;">).</span></span>
<span class="line"><span style="color:#61AFEF;">                        option(</span><span style="color:#61AFEF;">&quot;numPartition&quot;</span><span style="color:#61AFEF;">,</span><span style="color:#ABB2BF;"> [the </span><span style="color:#98C379;">partition</span><span style="color:#98C379;"> number</span><span style="color:#98C379;"> you</span><span style="color:#98C379;"> want]</span><span style="color:#ABB2BF;">).load</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">df.printSchema</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">df.show</span><span style="color:#ABB2BF;">()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="模式推断" tabindex="-1"><a class="header-anchor" href="#模式推断"><span>模式推断</span></a></h4><p>以下TsFile结构为例：TsFile模式中有三个度量：状态，温度和硬件。 这三种测量的基本信息如下：</p><table><thead><tr><th>名称</th><th>类型</th><th>编码</th></tr></thead><tbody><tr><td>状态</td><td>Boolean</td><td>PLAIN</td></tr><tr><td>温度</td><td>Float</td><td>RLE</td></tr><tr><td>硬件</td><td>Text</td><td>PLAIN</td></tr></tbody></table><p>TsFile中的现有数据如下：</p><ul><li>d1:root.ln.wf01.wt01</li><li>d2:root.ln.wf02.wt02</li></ul><table><thead><tr><th>time</th><th>d1.status</th><th>time</th><th>d1.temperature</th><th>time</th><th>d2.hardware</th><th>time</th><th>d2.status</th></tr></thead><tbody><tr><td>1</td><td>True</td><td>1</td><td>2.2</td><td>2</td><td>&quot;aaa&quot;</td><td>1</td><td>True</td></tr><tr><td>3</td><td>True</td><td>2</td><td>2.2</td><td>4</td><td>&quot;bbb&quot;</td><td>2</td><td>False</td></tr><tr><td>5</td><td>False</td><td>3</td><td>2.1</td><td>6</td><td>&quot;ccc&quot;</td><td>4</td><td>True</td></tr></tbody></table><p>宽（默认）表形式如下：</p><table><thead><tr><th>time</th><th>root.ln.wf02.wt02.temperature</th><th>root.ln.wf02.wt02.status</th><th>root.ln.wf02.wt02.hardware</th><th>root.ln.wf01.wt01.temperature</th><th>root.ln.wf01.wt01.status</th><th>root.ln.wf01.wt01.hardware</th></tr></thead><tbody><tr><td>1</td><td>null</td><td>true</td><td>null</td><td>2.2</td><td>true</td><td>null</td></tr><tr><td>2</td><td>null</td><td>false</td><td>aaa</td><td>2.2</td><td>null</td><td>null</td></tr><tr><td>3</td><td>null</td><td>null</td><td>null</td><td>2.1</td><td>true</td><td>null</td></tr><tr><td>4</td><td>null</td><td>true</td><td>bbb</td><td>null</td><td>null</td><td>null</td></tr><tr><td>5</td><td>null</td><td>null</td><td>null</td><td>null</td><td>false</td><td>null</td></tr><tr><td>6</td><td>null</td><td>null</td><td>ccc</td><td>null</td><td>null</td><td>null</td></tr></tbody></table><p>你还可以使用窄表形式，如下所示：（您可以参阅第4部分，了解如何使用窄表形式）</p><table><thead><tr><th>时间</th><th>设备名</th><th>状态</th><th>硬件</th><th>温度</th></tr></thead><tbody><tr><td>1</td><td>root.ln.wf02.wt01</td><td>true</td><td>null</td><td>2.2</td></tr><tr><td>1</td><td>root.ln.wf02.wt02</td><td>true</td><td>null</td><td>null</td></tr><tr><td>2</td><td>root.ln.wf02.wt01</td><td>null</td><td>null</td><td>2.2</td></tr><tr><td>2</td><td>root.ln.wf02.wt02</td><td>false</td><td>aaa</td><td>null</td></tr><tr><td>3</td><td>root.ln.wf02.wt01</td><td>true</td><td>null</td><td>2.1</td></tr><tr><td>4</td><td>root.ln.wf02.wt02</td><td>true</td><td>bbb</td><td>null</td></tr><tr><td>5</td><td>root.ln.wf02.wt01</td><td>false</td><td>null</td><td>null</td></tr><tr><td>6</td><td>root.ln.wf02.wt02</td><td>null</td><td>ccc</td><td>null</td></tr></tbody></table><h4 id="在宽和窄表之间转换" tabindex="-1"><a class="header-anchor" href="#在宽和窄表之间转换"><span>在宽和窄表之间转换</span></a></h4><ul><li>从宽到窄</li></ul><div class="language-scala line-numbers-mode" data-highlighter="shiki" data-ext="scala" data-title="scala" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> org.apache.iotdb.spark.db._</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">val</span><span style="color:#E06C75;"> wide_df</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> spark.read.format(</span><span style="color:#98C379;">&quot;org.apache.iotdb.spark.db&quot;</span><span style="color:#ABB2BF;">).option(</span><span style="color:#98C379;">&quot;url&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;jdbc:iotdb://127.0.0.1:6667/&quot;</span><span style="color:#ABB2BF;">).option(</span><span style="color:#98C379;">&quot;sql&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;select * from root where time &lt; 1100 and time &gt; 1000&quot;</span><span style="color:#ABB2BF;">).load</span></span>
<span class="line"><span style="color:#C678DD;">val</span><span style="color:#E06C75;"> narrow_df</span><span style="color:#56B6C2;"> =</span><span style="color:#E5C07B;"> Transformer</span><span style="color:#ABB2BF;">.toNarrowForm(spark, wide_df)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>从窄到宽</li></ul><div class="language-scala line-numbers-mode" data-highlighter="shiki" data-ext="scala" data-title="scala" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> org.apache.iotdb.spark.db._</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">val</span><span style="color:#E06C75;"> wide_df</span><span style="color:#56B6C2;"> =</span><span style="color:#E5C07B;"> Transformer</span><span style="color:#ABB2BF;">.toWideForm(spark, narrow_df)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="java用户指南" tabindex="-1"><a class="header-anchor" href="#java用户指南"><span>Java用户指南</span></a></h4><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">import</span><span style="color:#E5C07B;"> org.apache.spark.sql.Dataset</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#E5C07B;"> org.apache.spark.sql.Row</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#E5C07B;"> org.apache.spark.sql.SparkSession</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#E5C07B;"> org.apache.iotdb.spark.db.*</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">public</span><span style="color:#C678DD;"> class</span><span style="color:#E5C07B;"> Example</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">  public</span><span style="color:#C678DD;"> static</span><span style="color:#C678DD;"> void</span><span style="color:#61AFEF;"> main</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">String</span><span style="color:#ABB2BF;">[] </span><span style="color:#E06C75;font-style:italic;">args</span><span style="color:#ABB2BF;">)</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E5C07B;">    SparkSession</span><span style="color:#E06C75;"> spark</span><span style="color:#56B6C2;"> =</span><span style="color:#E5C07B;"> SparkSession</span></span>
<span class="line"><span style="color:#ABB2BF;">        .</span><span style="color:#61AFEF;">builder</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">        .</span><span style="color:#61AFEF;">appName</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;Build a DataFrame from Scratch&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">        .</span><span style="color:#61AFEF;">master</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;local[*]&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">        .</span><span style="color:#61AFEF;">getOrCreate</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">    Dataset</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#E5C07B;">Row</span><span style="color:#ABB2BF;">&gt; </span><span style="color:#E06C75;">df</span><span style="color:#56B6C2;"> =</span><span style="color:#E5C07B;"> spark</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">read</span><span style="color:#ABB2BF;">().</span><span style="color:#61AFEF;">format</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;org.apache.iotdb.spark.db&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">        .</span><span style="color:#61AFEF;">option</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;url&quot;</span><span style="color:#ABB2BF;">,</span><span style="color:#98C379;">&quot;jdbc:iotdb://127.0.0.1:6667/&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">        .</span><span style="color:#61AFEF;">option</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;sql&quot;</span><span style="color:#ABB2BF;">,</span><span style="color:#98C379;">&quot;select * from root&quot;</span><span style="color:#ABB2BF;">).</span><span style="color:#61AFEF;">load</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">    df</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">printSchema</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">    df</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">show</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#E5C07B;">    Dataset</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#E5C07B;">Row</span><span style="color:#ABB2BF;">&gt; </span><span style="color:#E06C75;">narrowTable</span><span style="color:#56B6C2;"> =</span><span style="color:#E5C07B;"> Transformer</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">toNarrowForm</span><span style="color:#ABB2BF;">(spark, df);</span></span>
<span class="line"><span style="color:#E5C07B;">    narrowTable</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">show</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="写数据到iotdb" tabindex="-1"><a class="header-anchor" href="#写数据到iotdb"><span>写数据到IoTDB</span></a></h3><h4 id="用户指南" tabindex="-1"><a class="header-anchor" href="#用户指南"><span>用户指南</span></a></h4><div class="language-scala line-numbers-mode" data-highlighter="shiki" data-ext="scala" data-title="scala" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// import narrow table</span></span>
<span class="line"><span style="color:#C678DD;">val</span><span style="color:#E06C75;"> df</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> spark.createDataFrame(</span><span style="color:#E5C07B;">List</span><span style="color:#ABB2BF;">(</span></span>
<span class="line"><span style="color:#ABB2BF;">      (</span><span style="color:#D19A66;">1L</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;root.test.d0&quot;</span><span style="color:#ABB2BF;">,</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">1L</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">1.0F</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">1.0D</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;hello&quot;</span><span style="color:#ABB2BF;">),</span></span>
<span class="line"><span style="color:#ABB2BF;">      (</span><span style="color:#D19A66;">2L</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;root.test.d0&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">2L</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">2.0F</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">2.0D</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">false</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;world&quot;</span><span style="color:#ABB2BF;">)))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">val</span><span style="color:#E06C75;"> dfWithColumn</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> df.withColumnRenamed(</span><span style="color:#98C379;">&quot;_1&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;Time&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    .withColumnRenamed(</span><span style="color:#98C379;">&quot;_2&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;device_name&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    .withColumnRenamed(</span><span style="color:#98C379;">&quot;_3&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;s0&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    .withColumnRenamed(</span><span style="color:#98C379;">&quot;_4&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;s1&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    .withColumnRenamed(</span><span style="color:#98C379;">&quot;_5&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;s2&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    .withColumnRenamed(</span><span style="color:#98C379;">&quot;_6&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;s3&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    .withColumnRenamed(</span><span style="color:#98C379;">&quot;_7&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;s4&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    .withColumnRenamed(</span><span style="color:#98C379;">&quot;_8&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;s5&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">dfWithColumn</span></span>
<span class="line"><span style="color:#ABB2BF;">    .write</span></span>
<span class="line"><span style="color:#ABB2BF;">    .format(</span><span style="color:#98C379;">&quot;org.apache.iotdb.spark.db&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    .option(</span><span style="color:#98C379;">&quot;url&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;jdbc:iotdb://127.0.0.1:6667/&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    .save</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// import wide table</span></span>
<span class="line"><span style="color:#C678DD;">val</span><span style="color:#E06C75;"> df</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> spark.createDataFrame(</span><span style="color:#E5C07B;">List</span><span style="color:#ABB2BF;">(</span></span>
<span class="line"><span style="color:#ABB2BF;">      (</span><span style="color:#D19A66;">1L</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">1L</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">1.0F</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">1.0D</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;hello&quot;</span><span style="color:#ABB2BF;">),</span></span>
<span class="line"><span style="color:#ABB2BF;">      (</span><span style="color:#D19A66;">2L</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">2L</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">2.0F</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">2.0D</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">false</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;world&quot;</span><span style="color:#ABB2BF;">)))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">val</span><span style="color:#E06C75;"> dfWithColumn</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> df.withColumnRenamed(</span><span style="color:#98C379;">&quot;_1&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;Time&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    .withColumnRenamed(</span><span style="color:#98C379;">&quot;_2&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;root.test.d0.s0&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    .withColumnRenamed(</span><span style="color:#98C379;">&quot;_3&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;root.test.d0.s1&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    .withColumnRenamed(</span><span style="color:#98C379;">&quot;_4&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;root.test.d0.s2&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    .withColumnRenamed(</span><span style="color:#98C379;">&quot;_5&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;root.test.d0.s3&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    .withColumnRenamed(</span><span style="color:#98C379;">&quot;_6&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;root.test.d0.s4&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    .withColumnRenamed(</span><span style="color:#98C379;">&quot;_7&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;root.test.d0.s5&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">dfWithColumn.write.format(</span><span style="color:#98C379;">&quot;org.apache.iotdb.spark.db&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    .option(</span><span style="color:#98C379;">&quot;url&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;jdbc:iotdb://127.0.0.1:6667/&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">	.option(</span><span style="color:#98C379;">&quot;numPartition&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;10&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    .save</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="注意-1" tabindex="-1"><a class="header-anchor" href="#注意-1"><span>注意</span></a></h4><ol><li>无论dataframe中存放的是窄表还是宽表，都可以直接将数据写到IoTDB中。</li><li>numPartition参数是用来设置分区数，会在写入数据之前给dataframe进行重分区。每一个分区都会开启一个session进行数据的写入，来提高并发数。</li></ol>`,36)]))}const c=a(t,[["render",e],["__file","Spark-IoTDB.html.vue"]]),d=JSON.parse('{"path":"/zh/UserGuide/V0.13.x/Ecosystem-Integration/Spark-IoTDB.html","title":"","lang":"zh-CN","frontmatter":{"description":"Spark-IoTDB 版本 Spark和Java所需的版本如下： 注意 Spark IoTDB Connector只支持Spark 2.4.0到Spark 3.2.0的Scala 2.12版本。 如果需要对其他版本进行支持，可以通过修改源码中spark-iotdb-connector这个模块里面pom文件的Scala版本之后进行重新编译。 因为IoT...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V0.13.x/Ecosystem-Integration/Spark-IoTDB.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Ecosystem-Integration/Spark-IoTDB.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"Spark-IoTDB 版本 Spark和Java所需的版本如下： 注意 Spark IoTDB Connector只支持Spark 2.4.0到Spark 3.2.0的Scala 2.12版本。 如果需要对其他版本进行支持，可以通过修改源码中spark-iotdb-connector这个模块里面pom文件的Scala版本之后进行重新编译。 因为IoT..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Spark-IoTDB","slug":"spark-iotdb","link":"#spark-iotdb","children":[{"level":3,"title":"版本","slug":"版本","link":"#版本","children":[]},{"level":3,"title":"注意","slug":"注意","link":"#注意","children":[]},{"level":3,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":3,"title":"写数据到IoTDB","slug":"写数据到iotdb","link":"#写数据到iotdb","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","username":"CritasWang","email":"critas@outlook.com","commits":1,"url":"https://github.com/CritasWang"}]},"readingTime":{"minutes":3.35,"words":1004},"filePathRelative":"zh/UserGuide/V0.13.x/Ecosystem-Integration/Spark-IoTDB.md","localizedDate":"2023年7月10日","autoDesc":true}');export{c as comp,d as data};
