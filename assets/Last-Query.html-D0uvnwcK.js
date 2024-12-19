import{_ as s,c as a,b as t,o as n}from"./app-C-0rb--l.js";const r={};function i(l,e){return n(),a("div",null,e[0]||(e[0]=[t(`<h1 id="last-query" tabindex="-1"><a class="header-anchor" href="#last-query"><span>Last Query</span></a></h1><p>The last query is a special query provided in the time series database Apache IoTDB. The last query returns the data point with the largest timestamp in the time series, that is, the latest state of a sequence. Users can specify the last query through <code>select last</code>. It is especially important in IoT data analysis scenarios as the latest point data characterizes the current state. In order to provide a millisecond-level return speed, Apache IoTDB optimizes the cache for the last query to meet users&#39; performance requirements for real-time monitoring of devices.</p><p>The last query is to return the most recent data point of the given timeseries in a three column format.</p><p>The SQL statement is defined as:</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#C678DD;"> last</span><span style="color:#56B6C2;"> &lt;</span><span style="color:#C678DD;">Path</span><span style="color:#56B6C2;">&gt;</span><span style="color:#E06C75;"> [COMMA &lt;Path&gt;]</span><span style="color:#ABB2BF;">* </span><span style="color:#C678DD;">from</span><span style="color:#56B6C2;"> &lt;</span><span style="color:#ABB2BF;"> PrefixPath </span><span style="color:#56B6C2;">&gt;</span><span style="color:#E06C75;"> [COMMA &lt; PrefixPath &gt;]</span><span style="color:#ABB2BF;">* </span><span style="color:#56B6C2;">&lt;</span><span style="color:#ABB2BF;">WhereClause</span><span style="color:#56B6C2;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>which means: Query and return the last data points of timeseries prefixPath.path.</p><p>Only time filter with &#39;&gt;&#39; or &#39;&gt;=&#39; is supported in &lt;WhereClause&gt;. Any other filters given in the &lt;WhereClause&gt; will give an exception.</p><p>The result will be returned in a four column table format.</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>| Time | timeseries | value | dataType |</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>Note:</strong> The <code>value</code> colum will always return the value as <code>string</code> and thus also has <code>TSDataType.TEXT</code>. Therefore the colum <code>dataType</code> is returned also which contains the <em>real</em> type how the value should be interpreted.</p><p><strong>Example 1:</strong> get the last point of root.ln.wf01.wt01.status:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>IoTDB&gt; select last status from root.ln.wf01.wt01</span></span>
<span class="line"><span>+-----------------------------+------------------------+-----+--------+</span></span>
<span class="line"><span>|                         Time|              timeseries|value|dataType|</span></span>
<span class="line"><span>+-----------------------------+------------------------+-----+--------+</span></span>
<span class="line"><span>|2017-11-07T23:59:00.000+08:00|root.ln.wf01.wt01.status|false| BOOLEAN|</span></span>
<span class="line"><span>+-----------------------------+------------------------+-----+--------+</span></span>
<span class="line"><span>Total line number = 1</span></span>
<span class="line"><span>It costs 0.000s</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Example 2:</strong> get the last status and temperature points of root.ln.wf01.wt01, whose timestamp larger or equal to 2017-11-07T23:50:00。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>IoTDB&gt; select last status, temperature from root.ln.wf01.wt01 where time &gt;= 2017-11-07T23:50:00</span></span>
<span class="line"><span>+-----------------------------+-----------------------------+---------+--------+</span></span>
<span class="line"><span>|                         Time|                   timeseries|    value|dataType|</span></span>
<span class="line"><span>+-----------------------------+-----------------------------+---------+--------+</span></span>
<span class="line"><span>|2017-11-07T23:59:00.000+08:00|     root.ln.wf01.wt01.status|    false| BOOLEAN|</span></span>
<span class="line"><span>|2017-11-07T23:59:00.000+08:00|root.ln.wf01.wt01.temperature|21.067368|  DOUBLE|</span></span>
<span class="line"><span>+-----------------------------+-----------------------------+---------+--------+</span></span>
<span class="line"><span>Total line number = 2</span></span>
<span class="line"><span>It costs 0.002s</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14)]))}const p=s(r,[["render",i],["__file","Last-Query.html.vue"]]),c=JSON.parse('{"path":"/UserGuide/V0.13.x/Query-Data/Last-Query.html","title":"Last Query","lang":"en-US","frontmatter":{"description":"Last Query The last query is a special query provided in the time series database Apache IoTDB. The last query returns the data point with the largest timestamp in the time seri...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Query-Data/Last-Query.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V0.13.x/Query-Data/Last-Query.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Last Query"}],["meta",{"property":"og:description","content":"Last Query The last query is a special query provided in the time series database Apache IoTDB. The last query returns the data point with the largest timestamp in the time seri..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Last Query\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","username":"CritasWang","email":"critas@outlook.com","commits":1,"url":"https://github.com/CritasWang"}]},"readingTime":{"minutes":1.44,"words":433},"filePathRelative":"UserGuide/V0.13.x/Query-Data/Last-Query.md","localizedDate":"July 10, 2023","autoDesc":true}');export{p as comp,c as data};
