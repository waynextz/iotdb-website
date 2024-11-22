import{_ as s,c as a,b as t,o as p}from"./app-Y2-ILDda.js";const e={};function o(l,n){return p(),a("div",null,n[0]||(n[0]=[t(`<h2 id="spark-iotdb" tabindex="-1"><a class="header-anchor" href="#spark-iotdb"><span>Spark-IoTDB</span></a></h2><h3 id="版本" tabindex="-1"><a class="header-anchor" href="#版本"><span>版本</span></a></h3><p>Spark和Java所需的版本如下：</p><table><thead><tr><th>Spark Version</th><th>Scala Version</th><th>Java Version</th><th>TsFile</th></tr></thead><tbody><tr><td><code>2.4.0-3.2.0</code></td><td><code>2.12</code></td><td><code>1.8</code></td><td><code>0.13.0</code></td></tr></tbody></table><h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意"><span>注意</span></a></h3><ol><li><p>Spark IoTDB Connector只支持<code>Spark 2.4.0</code>到<code>Spark 3.2.0</code>的<code>Scala 2.12</code>版本。<br> 如果需要对其他版本进行支持，可以通过修改源码中<code>spark-iotdb-connector</code>这个模块里面pom文件的Scala版本之后进行重新编译。</p></li><li><p>因为IoTDB与Spark的thrift版本有冲突，所以需要通过执行<code>rm -f $SPARK_HOME/jars/libthrift*</code>和<code>cp $IOTDB_HOME/lib/libthrift* $SPARK_HOME/jars/</code>这两个命令来解决。<br> 否则的话，就只能在IDE里面进行代码调试。而且如果你需要通过<code>spark-submit</code>命令提交任务的话，你打包时必须要带上依赖。</p></li></ol><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h3><p>mvn clean scala:compile compile install</p><h4 id="maven依赖" tabindex="-1"><a class="header-anchor" href="#maven依赖"><span>Maven依赖</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">    &lt;dependency&gt;</span>
<span class="line">      &lt;groupId&gt;org.apache.iotdb&lt;/groupId&gt;</span>
<span class="line">      &lt;artifactId&gt;spark-iotdb-connector&lt;/artifactId&gt;</span>
<span class="line">      &lt;version&gt;0.13.0&lt;/version&gt;</span>
<span class="line">    &lt;/dependency&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="spark-shell用户指南" tabindex="-1"><a class="header-anchor" href="#spark-shell用户指南"><span>Spark-shell用户指南</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">spark-shell <span class="token parameter variable">--jars</span> spark-iotdb-connector-0.13.0.jar,iotdb-jdbc-0.13.0-jar-with-dependencies.jar</span>
<span class="line"></span>
<span class="line"><span class="token function">import</span> org.apache.iotdb.spark.db._</span>
<span class="line"></span>
<span class="line">val <span class="token function">df</span> <span class="token operator">=</span> spark.read.format<span class="token punctuation">(</span><span class="token string">&quot;org.apache.iotdb.spark.db&quot;</span><span class="token punctuation">)</span>.option<span class="token punctuation">(</span><span class="token string">&quot;url&quot;</span>,<span class="token string">&quot;jdbc:iotdb://127.0.0.1:6667/&quot;</span><span class="token punctuation">)</span>.option<span class="token punctuation">(</span><span class="token string">&quot;sql&quot;</span>,<span class="token string">&quot;select * from root&quot;</span><span class="token punctuation">)</span>.load</span>
<span class="line"></span>
<span class="line">df.printSchema<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">df.show<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要对rdd进行分区，可以执行以下操作</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">spark-shell <span class="token parameter variable">--jars</span> spark-iotdb-connector-0.13.0.jar,iotdb-jdbc-0.13.0-jar-with-dependencies.jar</span>
<span class="line"></span>
<span class="line"><span class="token function">import</span> org.apache.iotdb.spark.db._</span>
<span class="line"></span>
<span class="line">val <span class="token function">df</span> <span class="token operator">=</span> spark.read.format<span class="token punctuation">(</span><span class="token string">&quot;org.apache.iotdb.spark.db&quot;</span><span class="token punctuation">)</span>.option<span class="token punctuation">(</span><span class="token string">&quot;url&quot;</span>,<span class="token string">&quot;jdbc:iotdb://127.0.0.1:6667/&quot;</span><span class="token punctuation">)</span>.option<span class="token punctuation">(</span><span class="token string">&quot;sql&quot;</span>,<span class="token string">&quot;select * from root&quot;</span><span class="token punctuation">)</span>.</span>
<span class="line">                        option<span class="token punctuation">(</span><span class="token string">&quot;lowerBound&quot;</span>, <span class="token punctuation">[</span>lower bound of <span class="token function">time</span> that you want query<span class="token punctuation">(</span>include<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>.option<span class="token punctuation">(</span><span class="token string">&quot;upperBound&quot;</span>, <span class="token punctuation">[</span>upper bound of <span class="token function">time</span> that you want query<span class="token punctuation">(</span>include<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>.</span>
<span class="line">                        option<span class="token punctuation">(</span><span class="token string">&quot;numPartition&quot;</span>, <span class="token punctuation">[</span>the partition number you want<span class="token punctuation">]</span><span class="token punctuation">)</span>.load</span>
<span class="line"></span>
<span class="line">df.printSchema<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">df.show<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="模式推断" tabindex="-1"><a class="header-anchor" href="#模式推断"><span>模式推断</span></a></h4><p>以下TsFile结构为例：TsFile模式中有三个度量：状态，温度和硬件。 这三种测量的基本信息如下：</p><table><thead><tr><th>名称</th><th>类型</th><th>编码</th></tr></thead><tbody><tr><td>状态</td><td>Boolean</td><td>PLAIN</td></tr><tr><td>温度</td><td>Float</td><td>RLE</td></tr><tr><td>硬件</td><td>Text</td><td>PLAIN</td></tr></tbody></table><p>TsFile中的现有数据如下：</p><ul><li>d1:root.ln.wf01.wt01</li><li>d2:root.ln.wf02.wt02</li></ul><table><thead><tr><th>time</th><th>d1.status</th><th>time</th><th>d1.temperature</th><th>time</th><th>d2.hardware</th><th>time</th><th>d2.status</th></tr></thead><tbody><tr><td>1</td><td>True</td><td>1</td><td>2.2</td><td>2</td><td>&quot;aaa&quot;</td><td>1</td><td>True</td></tr><tr><td>3</td><td>True</td><td>2</td><td>2.2</td><td>4</td><td>&quot;bbb&quot;</td><td>2</td><td>False</td></tr><tr><td>5</td><td>False</td><td>3</td><td>2.1</td><td>6</td><td>&quot;ccc&quot;</td><td>4</td><td>True</td></tr></tbody></table><p>宽（默认）表形式如下：</p><table><thead><tr><th>time</th><th>root.ln.wf02.wt02.temperature</th><th>root.ln.wf02.wt02.status</th><th>root.ln.wf02.wt02.hardware</th><th>root.ln.wf01.wt01.temperature</th><th>root.ln.wf01.wt01.status</th><th>root.ln.wf01.wt01.hardware</th></tr></thead><tbody><tr><td>1</td><td>null</td><td>true</td><td>null</td><td>2.2</td><td>true</td><td>null</td></tr><tr><td>2</td><td>null</td><td>false</td><td>aaa</td><td>2.2</td><td>null</td><td>null</td></tr><tr><td>3</td><td>null</td><td>null</td><td>null</td><td>2.1</td><td>true</td><td>null</td></tr><tr><td>4</td><td>null</td><td>true</td><td>bbb</td><td>null</td><td>null</td><td>null</td></tr><tr><td>5</td><td>null</td><td>null</td><td>null</td><td>null</td><td>false</td><td>null</td></tr><tr><td>6</td><td>null</td><td>null</td><td>ccc</td><td>null</td><td>null</td><td>null</td></tr></tbody></table><p>你还可以使用窄表形式，如下所示：（您可以参阅第4部分，了解如何使用窄表形式）</p><table><thead><tr><th>时间</th><th>设备名</th><th>状态</th><th>硬件</th><th>温度</th></tr></thead><tbody><tr><td>1</td><td>root.ln.wf02.wt01</td><td>true</td><td>null</td><td>2.2</td></tr><tr><td>1</td><td>root.ln.wf02.wt02</td><td>true</td><td>null</td><td>null</td></tr><tr><td>2</td><td>root.ln.wf02.wt01</td><td>null</td><td>null</td><td>2.2</td></tr><tr><td>2</td><td>root.ln.wf02.wt02</td><td>false</td><td>aaa</td><td>null</td></tr><tr><td>3</td><td>root.ln.wf02.wt01</td><td>true</td><td>null</td><td>2.1</td></tr><tr><td>4</td><td>root.ln.wf02.wt02</td><td>true</td><td>bbb</td><td>null</td></tr><tr><td>5</td><td>root.ln.wf02.wt01</td><td>false</td><td>null</td><td>null</td></tr><tr><td>6</td><td>root.ln.wf02.wt02</td><td>null</td><td>ccc</td><td>null</td></tr></tbody></table><h4 id="在宽和窄表之间转换" tabindex="-1"><a class="header-anchor" href="#在宽和窄表之间转换"><span>在宽和窄表之间转换</span></a></h4><ul><li>从宽到窄</li></ul><div class="language-scala line-numbers-mode" data-highlighter="prismjs" data-ext="scala" data-title="scala"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>iotdb<span class="token punctuation">.</span>spark<span class="token punctuation">.</span>db<span class="token punctuation">.</span></span>_</span>
<span class="line"></span>
<span class="line"><span class="token keyword">val</span> wide_df <span class="token operator">=</span> spark<span class="token punctuation">.</span>read<span class="token punctuation">.</span>format<span class="token punctuation">(</span><span class="token string">&quot;org.apache.iotdb.spark.db&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>option<span class="token punctuation">(</span><span class="token string">&quot;url&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;jdbc:iotdb://127.0.0.1:6667/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>option<span class="token punctuation">(</span><span class="token string">&quot;sql&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;select * from root.** where time &lt; 1100 and time &gt; 1000&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>load</span>
<span class="line"><span class="token keyword">val</span> narrow_df <span class="token operator">=</span> Transformer<span class="token punctuation">.</span>toNarrowForm<span class="token punctuation">(</span>spark<span class="token punctuation">,</span> wide_df<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>从窄到宽</li></ul><div class="language-scala line-numbers-mode" data-highlighter="prismjs" data-ext="scala" data-title="scala"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>iotdb<span class="token punctuation">.</span>spark<span class="token punctuation">.</span>db<span class="token punctuation">.</span></span>_</span>
<span class="line"></span>
<span class="line"><span class="token keyword">val</span> wide_df <span class="token operator">=</span> Transformer<span class="token punctuation">.</span>toWideForm<span class="token punctuation">(</span>spark<span class="token punctuation">,</span> narrow_df<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="java用户指南" tabindex="-1"><a class="header-anchor" href="#java用户指南"><span>Java用户指南</span></a></h4><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>spark<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">Dataset</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>spark<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">Row</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>spark<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">SparkSession</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>iotdb<span class="token punctuation">.</span>spark<span class="token punctuation">.</span>db<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">SparkSession</span> spark <span class="token operator">=</span> <span class="token class-name">SparkSession</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">appName</span><span class="token punctuation">(</span><span class="token string">&quot;Build a DataFrame from Scratch&quot;</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">master</span><span class="token punctuation">(</span><span class="token string">&quot;local[*]&quot;</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">getOrCreate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token class-name">Dataset</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Row</span><span class="token punctuation">&gt;</span></span> df <span class="token operator">=</span> spark<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;org.apache.iotdb.spark.db&quot;</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">option</span><span class="token punctuation">(</span><span class="token string">&quot;url&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;jdbc:iotdb://127.0.0.1:6667/&quot;</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">option</span><span class="token punctuation">(</span><span class="token string">&quot;sql&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;select * from root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    df<span class="token punctuation">.</span><span class="token function">printSchema</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    df<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token class-name">Dataset</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Row</span><span class="token punctuation">&gt;</span></span> narrowTable <span class="token operator">=</span> <span class="token class-name">Transformer</span><span class="token punctuation">.</span><span class="token function">toNarrowForm</span><span class="token punctuation">(</span>spark<span class="token punctuation">,</span> df<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    narrowTable<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="写数据到iotdb" tabindex="-1"><a class="header-anchor" href="#写数据到iotdb"><span>写数据到IoTDB</span></a></h3><h4 id="用户指南" tabindex="-1"><a class="header-anchor" href="#用户指南"><span>用户指南</span></a></h4><div class="language-scala line-numbers-mode" data-highlighter="prismjs" data-ext="scala" data-title="scala"><pre><code><span class="line"><span class="token comment">// import narrow table</span></span>
<span class="line"><span class="token keyword">val</span> df <span class="token operator">=</span> spark<span class="token punctuation">.</span>createDataFrame<span class="token punctuation">(</span>List<span class="token punctuation">(</span></span>
<span class="line">      <span class="token punctuation">(</span><span class="token number">1L</span><span class="token punctuation">,</span> <span class="token string">&quot;root.test.d0&quot;</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1L</span><span class="token punctuation">,</span> <span class="token number">1.0F</span><span class="token punctuation">,</span> <span class="token number">1.0D</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">(</span><span class="token number">2L</span><span class="token punctuation">,</span> <span class="token string">&quot;root.test.d0&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2L</span><span class="token punctuation">,</span> <span class="token number">2.0F</span><span class="token punctuation">,</span> <span class="token number">2.0D</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&quot;world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">val</span> dfWithColumn <span class="token operator">=</span> df<span class="token punctuation">.</span>withColumnRenamed<span class="token punctuation">(</span><span class="token string">&quot;_1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Time&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span>withColumnRenamed<span class="token punctuation">(</span><span class="token string">&quot;_2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;device_name&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span>withColumnRenamed<span class="token punctuation">(</span><span class="token string">&quot;_3&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;s0&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span>withColumnRenamed<span class="token punctuation">(</span><span class="token string">&quot;_4&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;s1&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span>withColumnRenamed<span class="token punctuation">(</span><span class="token string">&quot;_5&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;s2&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span>withColumnRenamed<span class="token punctuation">(</span><span class="token string">&quot;_6&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;s3&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span>withColumnRenamed<span class="token punctuation">(</span><span class="token string">&quot;_7&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;s4&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span>withColumnRenamed<span class="token punctuation">(</span><span class="token string">&quot;_8&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;s5&quot;</span><span class="token punctuation">)</span></span>
<span class="line">dfWithColumn</span>
<span class="line">    <span class="token punctuation">.</span>write</span>
<span class="line">    <span class="token punctuation">.</span>format<span class="token punctuation">(</span><span class="token string">&quot;org.apache.iotdb.spark.db&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span>option<span class="token punctuation">(</span><span class="token string">&quot;url&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;jdbc:iotdb://127.0.0.1:6667/&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span>save</span>
<span class="line">    </span>
<span class="line"><span class="token comment">// import wide table</span></span>
<span class="line"><span class="token keyword">val</span> df <span class="token operator">=</span> spark<span class="token punctuation">.</span>createDataFrame<span class="token punctuation">(</span>List<span class="token punctuation">(</span></span>
<span class="line">      <span class="token punctuation">(</span><span class="token number">1L</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1L</span><span class="token punctuation">,</span> <span class="token number">1.0F</span><span class="token punctuation">,</span> <span class="token number">1.0D</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">(</span><span class="token number">2L</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2L</span><span class="token punctuation">,</span> <span class="token number">2.0F</span><span class="token punctuation">,</span> <span class="token number">2.0D</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&quot;world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">val</span> dfWithColumn <span class="token operator">=</span> df<span class="token punctuation">.</span>withColumnRenamed<span class="token punctuation">(</span><span class="token string">&quot;_1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Time&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span>withColumnRenamed<span class="token punctuation">(</span><span class="token string">&quot;_2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;root.test.d0.s0&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span>withColumnRenamed<span class="token punctuation">(</span><span class="token string">&quot;_3&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;root.test.d0.s1&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span>withColumnRenamed<span class="token punctuation">(</span><span class="token string">&quot;_4&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;root.test.d0.s2&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span>withColumnRenamed<span class="token punctuation">(</span><span class="token string">&quot;_5&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;root.test.d0.s3&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span>withColumnRenamed<span class="token punctuation">(</span><span class="token string">&quot;_6&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;root.test.d0.s4&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span>withColumnRenamed<span class="token punctuation">(</span><span class="token string">&quot;_7&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;root.test.d0.s5&quot;</span><span class="token punctuation">)</span></span>
<span class="line">dfWithColumn<span class="token punctuation">.</span>write<span class="token punctuation">.</span>format<span class="token punctuation">(</span><span class="token string">&quot;org.apache.iotdb.spark.db&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span>option<span class="token punctuation">(</span><span class="token string">&quot;url&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;jdbc:iotdb://127.0.0.1:6667/&quot;</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">.</span>option<span class="token punctuation">(</span><span class="token string">&quot;numPartition&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;10&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span>save</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="注意-1" tabindex="-1"><a class="header-anchor" href="#注意-1"><span>注意</span></a></h4><ol><li>无论dataframe中存放的是窄表还是宽表，都可以直接将数据写到IoTDB中。</li><li>numPartition参数是用来设置分区数，会在写入数据之前给dataframe进行重分区。每一个分区都会开启一个session进行数据的写入，来提高并发数。</li></ol>`,36)]))}const i=s(e,[["render",o],["__file","Spark-IoTDB.html.vue"]]),u=JSON.parse('{"path":"/zh/UserGuide/V1.1.x/Ecosystem-Integration/Spark-IoTDB.html","title":"","lang":"zh-CN","frontmatter":{"description":"Spark-IoTDB 版本 Spark和Java所需的版本如下： 注意 Spark IoTDB Connector只支持Spark 2.4.0到Spark 3.2.0的Scala 2.12版本。 如果需要对其他版本进行支持，可以通过修改源码中spark-iotdb-connector这个模块里面pom文件的Scala版本之后进行重新编译。 因为IoT...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.1.x/Ecosystem-Integration/Spark-IoTDB.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/Ecosystem-Integration/Spark-IoTDB.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"Spark-IoTDB 版本 Spark和Java所需的版本如下： 注意 Spark IoTDB Connector只支持Spark 2.4.0到Spark 3.2.0的Scala 2.12版本。 如果需要对其他版本进行支持，可以通过修改源码中spark-iotdb-connector这个模块里面pom文件的Scala版本之后进行重新编译。 因为IoT..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Spark-IoTDB","slug":"spark-iotdb","link":"#spark-iotdb","children":[{"level":3,"title":"版本","slug":"版本","link":"#版本","children":[]},{"level":3,"title":"注意","slug":"注意","link":"#注意","children":[]},{"level":3,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":3,"title":"写数据到IoTDB","slug":"写数据到iotdb","link":"#写数据到iotdb","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":3.35,"words":1004},"filePathRelative":"zh/UserGuide/V1.1.x/Ecosystem-Integration/Spark-IoTDB.md","localizedDate":"2023年7月10日","autoDesc":true}');export{i as comp,u as data};
