import{_ as o,r as p,o as c,c as i,b as n,d as s,a as e,e as t}from"./app-DxurNv9d.js";const l={},r=t(`<h1 id="session-and-tsfile-api" tabindex="-1"><a class="header-anchor" href="#session-and-tsfile-api"><span>Session And TsFile API</span></a></h1><p>在使用Session、TsFIle API时，如果您调用的方法需要以字符串形式传入物理量（measurement）、设备（device）、数据库（database）、路径（path）等参数，<strong>请保证所传入字符串与使用 SQL 语句时的写法一致</strong>，下面是一些帮助您理解的例子。具体代码示例可以参考：<code>example/session/src/main/java/org/apache/iotdb/SyntaxConventionRelatedExample.java</code></p><ol><li>以创建时间序列 createTimeseries 为例：</li></ol><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">createTimeseries</span><span class="token punctuation">(</span>
    <span class="token class-name">String</span> path<span class="token punctuation">,</span>
    <span class="token class-name">TSDataType</span> dataType<span class="token punctuation">,</span>
    <span class="token class-name">TSEncoding</span> encoding<span class="token punctuation">,</span>
    <span class="token class-name">CompressionType</span> compressor<span class="token punctuation">)</span>
    <span class="token keyword">throws</span> <span class="token class-name">IoTDBConnectionException</span><span class="token punctuation">,</span> <span class="token class-name">StatementExecutionException</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),u={href:"http://root.sg",target:"_blank",rel:"noopener noreferrer"},d={href:"http://root.sg",target:"_blank",rel:"noopener noreferrer"},k=t(`<div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">create</span> timeseries root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>a <span class="token keyword">with</span> datatype<span class="token operator">=</span><span class="token keyword">FLOAT</span><span class="token punctuation">,</span>encoding<span class="token operator">=</span>PLAIN<span class="token punctuation">,</span>compressor<span class="token operator">=</span>SNAPPY<span class="token punctuation">;</span>

<span class="token comment"># 路径结点名中包含特殊字符，时间序列各结点为[&quot;root&quot;,&quot;sg&quot;,&quot;a.\`\\&quot;b&quot;]</span>
<span class="token keyword">create</span> timeseries root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>a.\`\`&quot;b<span class="token punctuation">\`</span></span> <span class="token keyword">with</span> datatype<span class="token operator">=</span><span class="token keyword">FLOAT</span><span class="token punctuation">,</span>encoding<span class="token operator">=</span>PLAIN<span class="token punctuation">,</span>compressor<span class="token operator">=</span>SNAPPY<span class="token punctuation">;</span>

<span class="token comment"># 路径结点名为实数</span>
<span class="token keyword">create</span> timeseries root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>111<span class="token punctuation">\`</span></span> <span class="token keyword">with</span> datatype<span class="token operator">=</span><span class="token keyword">FLOAT</span><span class="token punctuation">,</span>encoding<span class="token operator">=</span>PLAIN<span class="token punctuation">,</span>compressor<span class="token operator">=</span>SNAPPY<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>您在调用 createTimeseries 方法时，应该按照如下方法赋值 path 字符串，保证 path 字符串内容与使用 SQL 时一致：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// 时间序列 root.sg.a</span>
<span class="token class-name">String</span> path <span class="token operator">=</span> <span class="token string">&quot;root.sg.a&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 时间序列 root.sg.\`a\`\`&quot;b\`</span>
<span class="token class-name">String</span> path <span class="token operator">=</span> <span class="token string">&quot;root.sg.\`a\`\`\\&quot;b\`&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 时间序列 root.sg.\`111\`</span>
<span class="token class-name">String</span> path <span class="token operator">=</span> <span class="token string">&quot;root.sg.\`111\`&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>以插入数据 insertRecord 为例：</li></ol><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">insertRecord</span><span class="token punctuation">(</span>
    <span class="token class-name">String</span> deviceId<span class="token punctuation">,</span>
    <span class="token keyword">long</span> time<span class="token punctuation">,</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> measurements<span class="token punctuation">,</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TSDataType</span><span class="token punctuation">&gt;</span></span> types<span class="token punctuation">,</span>
    <span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> values<span class="token punctuation">)</span>
    <span class="token keyword">throws</span> <span class="token class-name">IoTDBConnectionException</span><span class="token punctuation">,</span> <span class="token class-name">StatementExecutionException</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),m={href:"http://root.sg",target:"_blank",rel:"noopener noreferrer"},v={href:"http://root.sg",target:"_blank",rel:"noopener noreferrer"},g=t('<div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">insert</span> <span class="token keyword">into</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">(</span><span class="token keyword">timestamp</span><span class="token punctuation">,</span> a<span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>a.``&quot;b<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>111<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>您在调用 insertRecord 方法时，应该按照如下方法赋值 deviceId 和 measurements：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// deviceId 为 root.sg</span>\n<span class="token class-name">String</span> deviceId <span class="token operator">=</span> <span class="token string">&quot;root.sg&quot;</span><span class="token punctuation">;</span>\n\n<span class="token comment">// measurements</span>\n<span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> measurements <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;`a.``\\&quot;b`&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;`111`&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> measurementList <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span>measurements<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>以查询数据 executeRawDataQuery 为例：</li></ol><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">SessionDataSet</span> <span class="token function">executeRawDataQuery</span><span class="token punctuation">(</span>\n    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> paths<span class="token punctuation">,</span> \n    <span class="token keyword">long</span> startTime<span class="token punctuation">,</span> \n    <span class="token keyword">long</span> endTime<span class="token punctuation">)</span>\n    <span class="token keyword">throws</span> <span class="token class-name">StatementExecutionException</span><span class="token punctuation">,</span> <span class="token class-name">IoTDBConnectionException</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',5),b={href:"http://root.sg",target:"_blank",rel:"noopener noreferrer"},h={href:"http://root.sg",target:"_blank",rel:"noopener noreferrer"},y=t('<div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> a <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg\n\n<span class="token comment"># 路径结点名中包含特殊字符</span>\n<span class="token keyword">select</span> <span class="token identifier"><span class="token punctuation">`</span>a.``&quot;b<span class="token punctuation">`</span></span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">;</span>\n\n<span class="token comment"># 路径结点名为实数</span>\n<span class="token keyword">select</span> <span class="token identifier"><span class="token punctuation">`</span>111<span class="token punctuation">`</span></span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>您在调用 executeRawDataQuery 方法时，应该按照如下方法赋值 paths：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// paths</span>\n<span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> paths <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token string">&quot;root.sg.a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;root.sg.`a.``\\&quot;b`&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;root.sg.`111`&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> pathList <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span>paths<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',3);function S(q,w){const a=p("ExternalLinkIcon");return c(),i("div",null,[r,n("p",null,[s("如果您希望创建时间序列 root.sg.a，"),n("a",u,[s("root.sg"),e(a)]),s('.`a.``"b`，'),n("a",d,[s("root.sg"),e(a)]),s(".`111`，您使用的 SQL 语句应该如下所示：")]),k,n("p",null,[s("如果您希望向时间序列 root.sg.a，"),n("a",m,[s("root.sg"),e(a)]),s('.`a.``"b`，'),n("a",v,[s("root.sg"),e(a)]),s(".`111`中插入数据，您使用的 SQL 语句应该如下所示：")]),g,n("p",null,[s("如果您希望查询时间序列 root.sg.a，"),n("a",b,[s("root.sg"),e(a)]),s('.`a.``"b`，'),n("a",h,[s("root.sg"),e(a)]),s(".`111`的数据，您使用的 SQL 语句应该如下所示：")]),y])}const x=o(l,[["render",S],["__file","Session-And-TsFile-API.html.vue"]]),f=JSON.parse('{"path":"/zh/UserGuide/V1.0.x/Syntax-Conventions/Session-And-TsFile-API.html","title":"Session And TsFile API","lang":"zh-CN","frontmatter":{"description":"Session And TsFile API 在使用Session、TsFIle API时，如果您调用的方法需要以字符串形式传入物理量（measurement）、设备（device）、数据库（database）、路径（path）等参数，请保证所传入字符串与使用 SQL 语句时的写法一致，下面是一些帮助您理解的例子。具体代码示例可以参考：example/...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.0.x/Syntax-Conventions/Session-And-TsFile-API.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/Syntax-Conventions/Session-And-TsFile-API.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Session And TsFile API"}],["meta",{"property":"og:description","content":"Session And TsFile API 在使用Session、TsFIle API时，如果您调用的方法需要以字符串形式传入物理量（measurement）、设备（device）、数据库（database）、路径（path）等参数，请保证所传入字符串与使用 SQL 语句时的写法一致，下面是一些帮助您理解的例子。具体代码示例可以参考：example/..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Session And TsFile API\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":2.15,"words":645},"filePathRelative":"zh/UserGuide/V1.0.x/Syntax-Conventions/Session-And-TsFile-API.md","localizedDate":"2023年7月10日","autoDesc":true}');export{x as comp,f as data};
