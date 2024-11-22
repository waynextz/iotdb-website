import{_ as s,c as n,b as a,o as i}from"./app-Y2-ILDda.js";const t={};function l(r,e){return i(),n("div",null,e[0]||(e[0]=[a('<h2 id="session-and-tsfile-api" tabindex="-1"><a class="header-anchor" href="#session-and-tsfile-api"><span>Session And TsFile API</span></a></h2><p>在使用Session、TsFIle API时，如果您调用的方法需要以字符串形式传入物理量（measurement）、设备（device）、数据库（database）、路径（path）等参数，<strong>请保证所传入字符串与使用 SQL 语句时的写法一致</strong>，下面是一些帮助您理解的例子。具体代码示例可以参考：<code>example/session/src/main/java/org/apache/iotdb/SyntaxConventionRelatedExample.java</code></p><ol><li>以创建时间序列 createTimeseries 为例：</li></ol><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre><code><span class="line">public void createTimeseries(</span>\n<span class="line">    String path,</span>\n<span class="line">    TSDataType dataType,</span>\n<span class="line">    TSEncoding encoding,</span>\n<span class="line">    CompressionType compressor)</span>\n<span class="line">    throws IoTDBConnectionException, StatementExecutionException;</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果您希望创建时间序列 <code>root.sg.a，root.sg.`a.``&quot;b`，root.sg.`111`</code>，您使用的 SQL 语句应该如下所示：</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">create timeseries root.sg.a with datatype=FLOAT,encoding=PLAIN,compressor=SNAPPY;</span>\n<span class="line"></span>\n<span class="line"># 路径结点名中包含特殊字符，时间序列各结点为[&quot;root&quot;,&quot;sg&quot;,&quot;a.`\\&quot;b&quot;]</span>\n<span class="line">create timeseries root.sg.`a.``&quot;b` with datatype=FLOAT,encoding=PLAIN,compressor=SNAPPY;</span>\n<span class="line"></span>\n<span class="line"># 路径结点名为实数</span>\n<span class="line">create timeseries root.sg.`111` with datatype=FLOAT,encoding=PLAIN,compressor=SNAPPY;</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>您在调用 createTimeseries 方法时，应该按照如下方法赋值 path 字符串，保证 path 字符串内容与使用 SQL 时一致：</p><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre><code><span class="line">// 时间序列 root.sg.a</span>\n<span class="line">String path = &quot;root.sg.a&quot;;</span>\n<span class="line"></span>\n<span class="line">// 时间序列 root.sg.`a``&quot;b`</span>\n<span class="line">String path = &quot;root.sg.`a``\\&quot;b`&quot;;</span>\n<span class="line"></span>\n<span class="line">// 时间序列 root.sg.`111`</span>\n<span class="line">String path = &quot;root.sg.`111`&quot;;</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>以插入数据 insertRecord 为例：</li></ol><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre><code><span class="line">public void insertRecord(</span>\n<span class="line">    String deviceId,</span>\n<span class="line">    long time,</span>\n<span class="line">    List&lt;String&gt; measurements,</span>\n<span class="line">    List&lt;TSDataType&gt; types,</span>\n<span class="line">    Object... values)</span>\n<span class="line">    throws IoTDBConnectionException, StatementExecutionException;</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果您希望向时间序列 <code>root.sg.a，root.sg.`a.``&quot;b`，root.sg.`111`</code> 中插入数据，您使用的 SQL 语句应该如下所示：</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">insert into root.sg(timestamp, a, `a.``&quot;b`, `111`) values (1, 2, 2, 2);</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>您在调用 insertRecord 方法时，应该按照如下方法赋值 deviceId 和 measurements：</p><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre><code><span class="line">// deviceId 为 root.sg</span>\n<span class="line">String deviceId = &quot;root.sg&quot;;</span>\n<span class="line"></span>\n<span class="line">// measurements</span>\n<span class="line">String[] measurements = new String[]{&quot;a&quot;, &quot;`a.``\\&quot;b`&quot;, &quot;`111`&quot;};</span>\n<span class="line">List&lt;String&gt; measurementList = Arrays.asList(measurements);</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>以查询数据 executeRawDataQuery 为例：</li></ol><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre><code><span class="line">public SessionDataSet executeRawDataQuery(</span>\n<span class="line">    List&lt;String&gt; paths, </span>\n<span class="line">    long startTime, </span>\n<span class="line">    long endTime)</span>\n<span class="line">    throws StatementExecutionException, IoTDBConnectionException;</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果您希望查询时间序列<code>root.sg.a，root.sg.`a.``&quot;b`，root.sg.`111`</code>的数据，您使用的 SQL 语句应该如下所示：</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">select a from root.sg</span>\n<span class="line"></span>\n<span class="line"># 路径结点名中包含特殊字符</span>\n<span class="line">select `a.``&quot;b` from root.sg;</span>\n<span class="line"></span>\n<span class="line"># 路径结点名为实数</span>\n<span class="line">select `111` from root.sg</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>您在调用 executeRawDataQuery 方法时，应该按照如下方法赋值 paths：</p><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre><code><span class="line">// paths</span>\n<span class="line">String[] paths = new String[]{&quot;root.sg.a&quot;, &quot;root.sg.`a.``\\&quot;b`&quot;, &quot;root.sg.`111`&quot;};</span>\n<span class="line">List&lt;String&gt; pathList = Arrays.asList(paths);</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',20)]))}const o=s(t,[["render",l],["__file","Session-And-TsFile-API.html.vue"]]),c=JSON.parse('{"path":"/zh/UserGuide/V1.1.x/Syntax-Conventions/Session-And-TsFile-API.html","title":"","lang":"zh-CN","frontmatter":{"description":"Session And TsFile API 在使用Session、TsFIle API时，如果您调用的方法需要以字符串形式传入物理量（measurement）、设备（device）、数据库（database）、路径（path）等参数，请保证所传入字符串与使用 SQL 语句时的写法一致，下面是一些帮助您理解的例子。具体代码示例可以参考：example/...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.1.x/Syntax-Conventions/Session-And-TsFile-API.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/Syntax-Conventions/Session-And-TsFile-API.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"Session And TsFile API 在使用Session、TsFIle API时，如果您调用的方法需要以字符串形式传入物理量（measurement）、设备（device）、数据库（database）、路径（path）等参数，请保证所传入字符串与使用 SQL 语句时的写法一致，下面是一些帮助您理解的例子。具体代码示例可以参考：example/..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-28T10:43:40.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-28T10:43:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-28T10:43:40.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Session And TsFile API","slug":"session-and-tsfile-api","link":"#session-and-tsfile-api","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1690541020000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1},{"name":"wanghui42","email":"105700158+wanghui42@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.15,"words":645},"filePathRelative":"zh/UserGuide/V1.1.x/Syntax-Conventions/Session-And-TsFile-API.md","localizedDate":"2023年7月10日","autoDesc":true}');export{o as comp,c as data};
