import{_ as s,c as a,b as n,o as i}from"./app-CLygX6ac.js";const l={};function r(t,e){return i(),a("div",null,e[0]||(e[0]=[n(`<h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h2><p><strong>如何查询我的 IoTDB 版本</strong></p><p>有几种方法可以识别您使用的 IoTDB 版本：</p><ul><li>启动 IoTDB 的命令行界面：</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>&gt; ./start-cli.sh -p 6667 -pw root -u root -h localhost</span></span>
<span class="line"><span> _____       _________  ______   ______    </span></span>
<span class="line"><span>|_   _|     |  _   _  ||_   _ \`.|_   _ \\   </span></span>
<span class="line"><span>  | |   .--.|_/ | | \\_|  | | \`. \\ | |_) |  </span></span>
<span class="line"><span>  | | / .&#39;\`\\ \\  | |      | |  | | |  __&#39;.  </span></span>
<span class="line"><span> _| |_| \\__. | _| |_    _| |_.&#39; /_| |__) | </span></span>
<span class="line"><span>|_____|&#39;.__.&#39; |_____|  |______.&#39;|_______/  version x.x.x</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>检查 pom.xml 文件：</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>&lt;version&gt;x.x.x&lt;/version&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>使用 JDBC API:</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>String iotdbVersion = tsfileDatabaseMetadata.getDatabaseProductVersion();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>使用命令行接口：</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>IoTDB&gt; show version</span></span>
<span class="line"><span>show version</span></span>
<span class="line"><span>+---------------+</span></span>
<span class="line"><span>|version        |</span></span>
<span class="line"><span>+---------------+</span></span>
<span class="line"><span>|x.x.x          |</span></span>
<span class="line"><span>+---------------+</span></span>
<span class="line"><span>Total line number = 1</span></span>
<span class="line"><span>It costs 0.241s</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>在哪里可以找到 IoTDB 的日志</strong></p><p>假设您的根目录是：</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> pwd</span></span>
<span class="line"><span style="color:#61AFEF;">/workspace/iotdb</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> ls</span><span style="color:#D19A66;"> -l</span></span>
<span class="line"><span style="color:#61AFEF;">server/</span></span>
<span class="line"><span style="color:#61AFEF;">cli/</span></span>
<span class="line"><span style="color:#61AFEF;">pom.xml</span></span>
<span class="line"><span style="color:#61AFEF;">Readme.md</span></span>
<span class="line"><span style="color:#56B6C2;">...</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假如 <code>$IOTDB_HOME = /workspace/iotdb/server/target/iotdb-server-{project.version}</code></p><p>假如 <code>$IOTDB_CLI_HOME = /workspace/iotdb/cli/target/iotdb-cli-{project.version}</code></p><p>在默认的设置里，logs 文件夹会被存储在<code>IOTDB_HOME/logs</code>。您可以在<code>IOTDB_HOME/conf</code>目录下的<code>logback.xml</code>文件中修改日志的级别和日志的存储路径。</p><p><strong>在哪里可以找到 IoTDB 的数据文件</strong></p><p>在默认的设置里，数据文件（包含 TsFile，metadata，WAL）被存储在<code>IOTDB_HOME/data</code>文件夹。</p><p><strong>如何知道 IoTDB 中存储了多少时间序列</strong></p><p>使用 IoTDB 的命令行接口：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>IoTDB&gt; show timeseries root</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>在返回的结果里，会展示<code>Total timeseries number</code>，这个数据就是 IoTDB 中 timeseries 的数量。</p><p>在当前版本中，IoTDB 支持直接使用命令行接口查询时间序列的数量：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>IoTDB&gt; count timeseries root</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如果您使用的是 Linux 操作系统，您可以使用以下的 Shell 命令：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>&gt; grep &quot;0,root&quot; $IOTDB_HOME/data/system/schema/mlog.txt |  wc -l</span></span>
<span class="line"><span>&gt;   6</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>可以使用 Hadoop 和 Spark 读取 IoTDB 中的 TsFile 吗？</strong></p><p>是的。IoTDB 与开源生态紧密结合。IoTDB 支持 <a href="https://github.com/apache/iotdb/tree/master/hadoop" target="_blank" rel="noopener noreferrer">Hadoop</a>, <a href="https://github.com/apache/iotdb/tree/master/spark" target="_blank" rel="noopener noreferrer">Spark</a> 和 <a href="https://github.com/apache/iotdb/tree/master/grafana" target="_blank" rel="noopener noreferrer">Grafana</a> 可视化工具。</p><p><strong>IoTDB 如何处理重复的数据点</strong></p><p>一个数据点是由一个完整的时间序列路径（例如：<code>root.vehicle.d0.s0</code>) 和时间戳唯一标识的。如果您使用与现有点相同的路径和时间戳提交一个新点，那么 IoTDB 将更新这个点的值，而不是插入一个新点。</p><p><strong>我如何知道具体的 timeseries 的类型</strong></p><p>在 IoTDB 的命令行接口中使用 SQL <code>SHOW TIMESERIES &lt;timeseries path&gt;</code>:</p><p>例如：如果您想知道所有 timeseries 的类型 &lt;timeseries path&gt; 应该为 <code>root</code>。上面的 SQL 应该修改为：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>IoTDB&gt; show timeseries root</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如果您想查询一个指定的时间序列，您可以修改 &lt;timeseries path&gt; 为时间序列的完整路径。比如：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>IoTDB&gt; show timeseries root.fit.d1.s1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>您还可以在 timeseries 路径中使用通配符：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>IoTDB&gt; show timeseries root.fit.d1.*</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>如何更改 IoTDB 的客户端时间显示格式</strong></p><p>IoTDB 客户端默认显示的时间是人类可读的（比如：<code>1970-01-01T08:00:00.001</code>)，如果您想显示是时间戳或者其他可读格式，请在启动命令上添加参数<code>-disableISO8601</code>:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>&gt; $IOTDB_CLI_HOME/sbin/start-cli.sh -h 127.0.0.1 -p 6667 -u root -pw root -disableISO8601</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,42)]))}const d=s(l,[["render",r],["__file","Frequently-asked-questions.html.vue"]]),p=JSON.parse('{"path":"/zh/UserGuide/V0.13.x/Reference/Frequently-asked-questions.html","title":"","lang":"zh-CN","frontmatter":{"description":"常见问题 如何查询我的 IoTDB 版本 有几种方法可以识别您使用的 IoTDB 版本： 启动 IoTDB 的命令行界面： 检查 pom.xml 文件： 使用 JDBC API: 使用命令行接口： 在哪里可以找到 IoTDB 的日志 假设您的根目录是： 假如 $IOTDB_HOME = /workspace/iotdb/server/target/io...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V0.13.x/Reference/Frequently-asked-questions.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Reference/Frequently-asked-questions.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"常见问题 如何查询我的 IoTDB 版本 有几种方法可以识别您使用的 IoTDB 版本： 启动 IoTDB 的命令行界面： 检查 pom.xml 文件： 使用 JDBC API: 使用命令行接口： 在哪里可以找到 IoTDB 的日志 假设您的根目录是： 假如 $IOTDB_HOME = /workspace/iotdb/server/target/io..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"常见问题","slug":"常见问题","link":"#常见问题","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","username":"CritasWang","email":"critas@outlook.com","commits":1,"url":"https://github.com/CritasWang"}]},"readingTime":{"minutes":2.67,"words":801},"filePathRelative":"zh/UserGuide/V0.13.x/Reference/Frequently-asked-questions.md","localizedDate":"2023年7月10日","autoDesc":true}');export{d as comp,p as data};
