import{_ as a,c as t,b as n,o as l}from"./app-CLygX6ac.js";const e={};function o(p,s){return l(),t("div",null,s[0]||(s[0]=[n(`<h1 id="apache-spark-iotdb" tabindex="-1"><a class="header-anchor" href="#apache-spark-iotdb"><span>Apache Spark(IoTDB)</span></a></h1><h2 id="版本支持" tabindex="-1"><a class="header-anchor" href="#版本支持"><span>版本支持</span></a></h2><p>支持的 Spark 与 Scala 版本如下：</p><table><thead><tr><th>Spark 版本</th><th>Scala 版本</th></tr></thead><tbody><tr><td><code>2.4.0-latest</code></td><td><code>2.11, 2.12</code></td></tr></tbody></table><h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h2><ol><li>当前版本的 <code>spark-iotdb-connector</code> 支持 <code>2.11</code> 与 <code>2.12</code> 两个版本的 Scala，暂不支持 <code>2.13</code> 版本。</li><li><code>spark-iotdb-connector</code> 支持在 Java、Scala 版本的 Spark 与 PySpark 中使用。</li></ol><h2 id="部署" tabindex="-1"><a class="header-anchor" href="#部署"><span>部署</span></a></h2><p><code>spark-iotdb-connector</code> 总共有两个使用场景，分别为 IDE 开发与 spark-shell 调试。</p><h3 id="ide-开发" tabindex="-1"><a class="header-anchor" href="#ide-开发"><span>IDE 开发</span></a></h3><p>在 IDE 开发时，只需要在 <code>pom.xml</code> 文件中添加以下依赖即可：</p><div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">dependency</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">      &lt;</span><span style="color:#E06C75;">groupId</span><span style="color:#ABB2BF;">&gt;org.apache.iotdb&lt;/</span><span style="color:#E06C75;">groupId</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">      &lt;!-- spark-iotdb-connector_2.11 or spark-iotdb-connector_2.13 --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">      &lt;</span><span style="color:#E06C75;">artifactId</span><span style="color:#ABB2BF;">&gt;spark-iotdb-connector_2.12.10&lt;/</span><span style="color:#E06C75;">artifactId</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">      &lt;</span><span style="color:#E06C75;">version</span><span style="color:#ABB2BF;">&gt;\${iotdb.version}&lt;/</span><span style="color:#E06C75;">version</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;/</span><span style="color:#E06C75;">dependency</span><span style="color:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="spark-shell-调试" tabindex="-1"><a class="header-anchor" href="#spark-shell-调试"><span><code>spark-shell</code> 调试</span></a></h3><p>如果需要在 <code>spark-shell</code> 中使用 <code>spark-iotdb-connetcor</code>，需要先在官网下载 <code>with-dependencies</code> 版本的 jar 包。然后再将 jar 包拷贝到 <code>\${SPARK_HOME}/jars</code> 目录中即可。<br> 执行以下命令即可：</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#61AFEF;">cp</span><span style="color:#98C379;"> spark-iotdb-connector_2.12.10-</span><span style="color:#ABB2BF;">\${</span><span style="color:#E06C75;">iotdb</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">version</span><span style="color:#ABB2BF;">}</span><span style="color:#98C379;">.jar</span><span style="color:#E06C75;"> $SPARK_HOME</span><span style="color:#98C379;">/jars/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>此外，为了保证 spark 能使用 JDBC 和 IoTDB 连接，需要进行如下操作:</p><p>运行如下命令来编译 IoTDB-JDBC 连接器：</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#61AFEF;">mvn</span><span style="color:#98C379;"> clean</span><span style="color:#98C379;"> package</span><span style="color:#D19A66;"> -pl</span><span style="color:#98C379;"> iotdb-client/jdbc</span><span style="color:#D19A66;"> -am</span><span style="color:#D19A66;"> -DskipTests</span><span style="color:#D19A66;"> -P</span><span style="color:#98C379;"> get-jar-with-dependencies</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>编译后的 jar 包在如下目录中：</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#E06C75;">$IoTDB_HOME</span><span style="color:#ABB2BF;">/iotdb-client/jdbc/target/iotdb-jdbc-{</span><span style="color:#61AFEF;">version}-SNAPSHOT-jar-with-dependencies.jar</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>最后再将 jar 包拷贝到 <code>\${SPARK_HOME}/jars</code> 目录中即可。执行以下命令即可：</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#61AFEF;">cp</span><span style="color:#98C379;"> iotdb-jdbc-{version}-SNAPSHOT-jar-with-dependencies.jar</span><span style="color:#E06C75;"> $SPARK_HOME</span><span style="color:#98C379;">/jars/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h3><table><thead><tr><th>参数</th><th>描述</th><th>默认值</th><th>使用范围</th><th>能否为空</th></tr></thead><tbody><tr><td>url</td><td>指定 IoTDB 的 JDBC 的 URL</td><td>null</td><td>read、write</td><td>false</td></tr><tr><td>user</td><td>IoTDB 的用户名</td><td>root</td><td>read、write</td><td>true</td></tr><tr><td>password</td><td>IoTDB 的密码</td><td>root</td><td>read、write</td><td>true</td></tr><tr><td>sql</td><td>用于指定查询的 SQL 语句</td><td>null</td><td>read</td><td>true</td></tr><tr><td>numPartition</td><td>在 read 中用于指定 DataFrame 的分区数，在 write 中用于设置写入并发数</td><td>1</td><td>read、write</td><td>true</td></tr><tr><td>lowerBound</td><td>查询的起始时间戳（包含）</td><td>0</td><td>read</td><td>true</td></tr><tr><td>upperBound</td><td>查询的结束时间戳（包含）</td><td>0</td><td>read</td><td>true</td></tr></tbody></table><h3 id="从-iotdb-读取数据" tabindex="-1"><a class="header-anchor" href="#从-iotdb-读取数据"><span>从 IoTDB 读取数据</span></a></h3><p>以下是一个示例，演示如何从 IoTDB 中读取数据成为 DataFrame。</p><div class="language-scala line-numbers-mode" data-highlighter="shiki" data-ext="scala" data-title="scala" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> org.apache.iotdb.spark.db._</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">val</span><span style="color:#E06C75;"> df</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> spark.read.format(</span><span style="color:#98C379;">&quot;org.apache.iotdb.spark.db&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">  .option(</span><span style="color:#98C379;">&quot;user&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;root&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">  .option(</span><span style="color:#98C379;">&quot;password&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;root&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">  .option(</span><span style="color:#98C379;">&quot;url&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;jdbc:iotdb://127.0.0.1:6667/&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">  .option(</span><span style="color:#98C379;">&quot;sql&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;select ** from root&quot;</span><span style="color:#ABB2BF;">) </span><span style="color:#7F848E;font-style:italic;">// 查询 SQL</span></span>
<span class="line"><span style="color:#ABB2BF;">  .option(</span><span style="color:#98C379;">&quot;lowerBound&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;0&quot;</span><span style="color:#ABB2BF;">) </span><span style="color:#7F848E;font-style:italic;">// 时间戳下界</span></span>
<span class="line"><span style="color:#ABB2BF;">  .option(</span><span style="color:#98C379;">&quot;upperBound&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;100000000&quot;</span><span style="color:#ABB2BF;">) </span><span style="color:#7F848E;font-style:italic;">// 时间戳上界</span></span>
<span class="line"><span style="color:#ABB2BF;">  .option(</span><span style="color:#98C379;">&quot;numPartition&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;5&quot;</span><span style="color:#ABB2BF;">) </span><span style="color:#7F848E;font-style:italic;">// 分区数</span></span>
<span class="line"><span style="color:#ABB2BF;">  .load</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">df.printSchema()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">df.show()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="将数据写入-iotdb" tabindex="-1"><a class="header-anchor" href="#将数据写入-iotdb"><span>将数据写入 IoTDB</span></a></h3><p>以下是一个示例，演示如何将数据写入 IoTDB。</p><div class="language-scala line-numbers-mode" data-highlighter="shiki" data-ext="scala" data-title="scala" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 构造窄表数据</span></span>
<span class="line"><span style="color:#C678DD;">val</span><span style="color:#E06C75;"> df</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> spark.createDataFrame(</span><span style="color:#E5C07B;">List</span><span style="color:#ABB2BF;">(</span></span>
<span class="line"><span style="color:#ABB2BF;">  (</span><span style="color:#D19A66;">1L</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;root.test.d0&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">1L</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">1.0F</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">1.0D</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;hello&quot;</span><span style="color:#ABB2BF;">),</span></span>
<span class="line"><span style="color:#ABB2BF;">  (</span><span style="color:#D19A66;">2L</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;root.test.d0&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">2L</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">2.0F</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">2.0D</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">false</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;world&quot;</span><span style="color:#ABB2BF;">)))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">val</span><span style="color:#E06C75;"> dfWithColumn</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> df.withColumnRenamed(</span><span style="color:#98C379;">&quot;_1&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;Time&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">  .withColumnRenamed(</span><span style="color:#98C379;">&quot;_2&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;Device&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">  .withColumnRenamed(</span><span style="color:#98C379;">&quot;_3&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;s0&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">  .withColumnRenamed(</span><span style="color:#98C379;">&quot;_4&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;s1&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">  .withColumnRenamed(</span><span style="color:#98C379;">&quot;_5&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;s2&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">  .withColumnRenamed(</span><span style="color:#98C379;">&quot;_6&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;s3&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">  .withColumnRenamed(</span><span style="color:#98C379;">&quot;_7&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;s4&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">  .withColumnRenamed(</span><span style="color:#98C379;">&quot;_8&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;s5&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 写入窄表数据</span></span>
<span class="line"><span style="color:#ABB2BF;">dfWithColumn</span></span>
<span class="line"><span style="color:#ABB2BF;">  .write</span></span>
<span class="line"><span style="color:#ABB2BF;">  .format(</span><span style="color:#98C379;">&quot;org.apache.iotdb.spark.db&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">  .option(</span><span style="color:#98C379;">&quot;url&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;jdbc:iotdb://127.0.0.1:6667/&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">  .save</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 构造宽表数据</span></span>
<span class="line"><span style="color:#C678DD;">val</span><span style="color:#E06C75;"> df</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> spark.createDataFrame(</span><span style="color:#E5C07B;">List</span><span style="color:#ABB2BF;">(</span></span>
<span class="line"><span style="color:#ABB2BF;">  (</span><span style="color:#D19A66;">1L</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">1L</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">1.0F</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">1.0D</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;hello&quot;</span><span style="color:#ABB2BF;">),</span></span>
<span class="line"><span style="color:#ABB2BF;">  (</span><span style="color:#D19A66;">2L</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">2L</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">2.0F</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">2.0D</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">false</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;world&quot;</span><span style="color:#ABB2BF;">)))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">val</span><span style="color:#E06C75;"> dfWithColumn</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> df.withColumnRenamed(</span><span style="color:#98C379;">&quot;_1&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;Time&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">  .withColumnRenamed(</span><span style="color:#98C379;">&quot;_2&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;root.test.d0.s0&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">  .withColumnRenamed(</span><span style="color:#98C379;">&quot;_3&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;root.test.d0.s1&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">  .withColumnRenamed(</span><span style="color:#98C379;">&quot;_4&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;root.test.d0.s2&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">  .withColumnRenamed(</span><span style="color:#98C379;">&quot;_5&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;root.test.d0.s3&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">  .withColumnRenamed(</span><span style="color:#98C379;">&quot;_6&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;root.test.d0.s4&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">  .withColumnRenamed(</span><span style="color:#98C379;">&quot;_7&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;root.test.d0.s5&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 写入宽表数据</span></span>
<span class="line"><span style="color:#ABB2BF;">dfWithColumn.write.format(</span><span style="color:#98C379;">&quot;org.apache.iotdb.spark.db&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">  .option(</span><span style="color:#98C379;">&quot;url&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;jdbc:iotdb://127.0.0.1:6667/&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">  .option(</span><span style="color:#98C379;">&quot;numPartition&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;10&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">  .save</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="宽表与窄表转换" tabindex="-1"><a class="header-anchor" href="#宽表与窄表转换"><span>宽表与窄表转换</span></a></h3><p>以下是如何转换宽表与窄表的示例：</p><ul><li>从宽到窄</li></ul><div class="language-scala line-numbers-mode" data-highlighter="shiki" data-ext="scala" data-title="scala" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> org.apache.iotdb.spark.db._</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">val</span><span style="color:#E06C75;"> wide_df</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> spark.read.format(</span><span style="color:#98C379;">&quot;org.apache.iotdb.spark.db&quot;</span><span style="color:#ABB2BF;">).option(</span><span style="color:#98C379;">&quot;url&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;jdbc:iotdb://127.0.0.1:6667/&quot;</span><span style="color:#ABB2BF;">).option(</span><span style="color:#98C379;">&quot;sql&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;select * from root.** where time &lt; 1100 and time &gt; 1000&quot;</span><span style="color:#ABB2BF;">).load</span></span>
<span class="line"><span style="color:#C678DD;">val</span><span style="color:#E06C75;"> narrow_df</span><span style="color:#56B6C2;"> =</span><span style="color:#E5C07B;"> Transformer</span><span style="color:#ABB2BF;">.toNarrowForm(spark, wide_df)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>从窄到宽</li></ul><div class="language-scala line-numbers-mode" data-highlighter="shiki" data-ext="scala" data-title="scala" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> org.apache.iotdb.spark.db._</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">val</span><span style="color:#E06C75;"> wide_df</span><span style="color:#56B6C2;"> =</span><span style="color:#E5C07B;"> Transformer</span><span style="color:#ABB2BF;">.toWideForm(spark, narrow_df)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="宽表与窄表" tabindex="-1"><a class="header-anchor" href="#宽表与窄表"><span>宽表与窄表</span></a></h2><p>以下 TsFile 结构为例：TsFile 模式中有三个度量：状态，温度和硬件。 这三种测量的基本信息如下：</p><table><thead><tr><th>名称</th><th>类型</th><th>编码</th></tr></thead><tbody><tr><td>状态</td><td>Boolean</td><td>PLAIN</td></tr><tr><td>温度</td><td>Float</td><td>RLE</td></tr><tr><td>硬件</td><td>Text</td><td>PLAIN</td></tr></tbody></table><p>TsFile 中的现有数据如下：</p><ul><li><code>d1:root.ln.wf01.wt01</code></li><li><code>d2:root.ln.wf02.wt02</code></li></ul><table><thead><tr><th>time</th><th>d1.status</th><th>time</th><th>d1.temperature</th><th>time</th><th>d2.hardware</th><th>time</th><th>d2.status</th></tr></thead><tbody><tr><td>1</td><td>True</td><td>1</td><td>2.2</td><td>2</td><td>&quot;aaa&quot;</td><td>1</td><td>True</td></tr><tr><td>3</td><td>True</td><td>2</td><td>2.2</td><td>4</td><td>&quot;bbb&quot;</td><td>2</td><td>False</td></tr><tr><td>5</td><td>False</td><td>3</td><td>2.1</td><td>6</td><td>&quot;ccc&quot;</td><td>4</td><td>True</td></tr></tbody></table><p>宽（默认）表形式如下：</p><table><thead><tr><th>Time</th><th>root.ln.wf02.wt02.temperature</th><th>root.ln.wf02.wt02.status</th><th>root.ln.wf02.wt02.hardware</th><th>root.ln.wf01.wt01.temperature</th><th>root.ln.wf01.wt01.status</th><th>root.ln.wf01.wt01.hardware</th></tr></thead><tbody><tr><td>1</td><td>null</td><td>true</td><td>null</td><td>2.2</td><td>true</td><td>null</td></tr><tr><td>2</td><td>null</td><td>false</td><td>aaa</td><td>2.2</td><td>null</td><td>null</td></tr><tr><td>3</td><td>null</td><td>null</td><td>null</td><td>2.1</td><td>true</td><td>null</td></tr><tr><td>4</td><td>null</td><td>true</td><td>bbb</td><td>null</td><td>null</td><td>null</td></tr><tr><td>5</td><td>null</td><td>null</td><td>null</td><td>null</td><td>false</td><td>null</td></tr><tr><td>6</td><td>null</td><td>null</td><td>ccc</td><td>null</td><td>null</td><td>null</td></tr></tbody></table><p>你还可以使用窄表形式，如下所示：</p><table><thead><tr><th>Time</th><th>Device</th><th>status</th><th>hardware</th><th>temperature</th></tr></thead><tbody><tr><td>1</td><td>root.ln.wf02.wt01</td><td>true</td><td>null</td><td>2.2</td></tr><tr><td>1</td><td>root.ln.wf02.wt02</td><td>true</td><td>null</td><td>null</td></tr><tr><td>2</td><td>root.ln.wf02.wt01</td><td>null</td><td>null</td><td>2.2</td></tr><tr><td>2</td><td>root.ln.wf02.wt02</td><td>false</td><td>aaa</td><td>null</td></tr><tr><td>3</td><td>root.ln.wf02.wt01</td><td>true</td><td>null</td><td>2.1</td></tr><tr><td>4</td><td>root.ln.wf02.wt02</td><td>true</td><td>bbb</td><td>null</td></tr><tr><td>5</td><td>root.ln.wf02.wt01</td><td>false</td><td>null</td><td>null</td></tr><tr><td>6</td><td>root.ln.wf02.wt02</td><td>null</td><td>ccc</td><td>null</td></tr></tbody></table>`,46)]))}const d=a(e,[["render",o],["__file","Spark-IoTDB.html.vue"]]),c=JSON.parse('{"path":"/zh/UserGuide/V1.3.0-2/Ecosystem-Integration/Spark-IoTDB.html","title":"Apache Spark(IoTDB)","lang":"zh-CN","frontmatter":{"description":"Apache Spark(IoTDB) 版本支持 支持的 Spark 与 Scala 版本如下： 注意事项 当前版本的 spark-iotdb-connector 支持 2.11 与 2.12 两个版本的 Scala，暂不支持 2.13 版本。 spark-iotdb-connector 支持在 Java、Scala 版本的 Spark 与 PySpa...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.3.0-2/Ecosystem-Integration/Spark-IoTDB.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.3.0-2/Ecosystem-Integration/Spark-IoTDB.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Apache Spark(IoTDB)"}],["meta",{"property":"og:description","content":"Apache Spark(IoTDB) 版本支持 支持的 Spark 与 Scala 版本如下： 注意事项 当前版本的 spark-iotdb-connector 支持 2.11 与 2.12 两个版本的 Scala，暂不支持 2.13 版本。 spark-iotdb-connector 支持在 Java、Scala 版本的 Spark 与 PySpa..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-11T11:01:16.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-11T11:01:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Apache Spark(IoTDB)\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-11T11:01:16.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"版本支持","slug":"版本支持","link":"#版本支持","children":[]},{"level":2,"title":"注意事项","slug":"注意事项","link":"#注意事项","children":[]},{"level":2,"title":"部署","slug":"部署","link":"#部署","children":[{"level":3,"title":"IDE 开发","slug":"ide-开发","link":"#ide-开发","children":[]},{"level":3,"title":"spark-shell 调试","slug":"spark-shell-调试","link":"#spark-shell-调试","children":[]}]},{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"从 IoTDB 读取数据","slug":"从-iotdb-读取数据","link":"#从-iotdb-读取数据","children":[]},{"level":3,"title":"将数据写入 IoTDB","slug":"将数据写入-iotdb","link":"#将数据写入-iotdb","children":[]},{"level":3,"title":"宽表与窄表转换","slug":"宽表与窄表转换","link":"#宽表与窄表转换","children":[]}]},{"level":2,"title":"宽表与窄表","slug":"宽表与窄表","link":"#宽表与窄表","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1731322876000,"contributors":[{"name":"W1y1r","username":"W1y1r","email":"150988475+W1y1r@users.noreply.github.com","commits":2,"url":"https://github.com/W1y1r"},{"name":"Peng Junzhi","username":"Peng Junzhi","email":"78788603+Pengzna@users.noreply.github.com","commits":1,"url":"https://github.com/Peng Junzhi"},{"name":"CritasWang","username":"CritasWang","email":"critas@outlook.com","commits":3,"url":"https://github.com/CritasWang"}]},"readingTime":{"minutes":3.61,"words":1083},"filePathRelative":"zh/UserGuide/V1.3.0-2/Ecosystem-Integration/Spark-IoTDB.md","localizedDate":"2023年7月10日","autoDesc":true}');export{d as comp,c as data};
