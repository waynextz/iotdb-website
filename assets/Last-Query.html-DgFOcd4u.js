import{_ as s,c as t,b as a,o as n}from"./app-CRFlbjpx.js";const i={};function l(r,e){return n(),t("div",null,e[0]||(e[0]=[a(`<h1 id="last-query" tabindex="-1"><a class="header-anchor" href="#last-query"><span>Last Query</span></a></h1><p>The last query is a special type of query in Apache IoTDB. It returns the data point with the largest timestamp of the specified time series. In other word, it returns the latest state of a time series. This feature is especially important in IoT data analysis scenarios. To meet the performance requirement of real-time device monitoring systems, Apache IoTDB caches the latest values of all time series to achieve microsecond read latency.</p><p>The last query is to return the most recent data point of the given timeseries in a three column format.</p><p>The SQL syntax is defined as:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> <span class="token keyword">last</span> <span class="token operator">&lt;</span>Path<span class="token operator">&gt;</span> <span class="token punctuation">[</span>COMMA <span class="token operator">&lt;</span>Path<span class="token operator">&gt;</span><span class="token punctuation">]</span><span class="token operator">*</span> <span class="token keyword">from</span> <span class="token operator">&lt;</span> PrefixPath <span class="token operator">&gt;</span> <span class="token punctuation">[</span>COMMA <span class="token operator">&lt;</span> PrefixPath <span class="token operator">&gt;</span><span class="token punctuation">]</span><span class="token operator">*</span> <span class="token operator">&lt;</span>WhereClause<span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token keyword">ORDER</span> <span class="token keyword">BY</span> TIMESERIES <span class="token punctuation">(</span><span class="token keyword">DESC</span> <span class="token operator">|</span> <span class="token keyword">ASC</span><span class="token punctuation">)</span>?<span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>which means: Query and return the last data points of timeseries prefixPath.path.</p><ul><li><p>Only time filter is supported in &lt;WhereClause&gt;. Any other filters given in the &lt;WhereClause&gt; will give an exception. When the cached most recent data point does not satisfy the criterion specified by the filter, IoTDB will have to get the result from the external storage, which may cause a decrease in performance.</p></li><li><p>The result will be returned in a four column table format.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">| Time | timeseries | value | dataType |</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>Note:</strong> The <code>value</code> colum will always return the value as <code>string</code> and thus also has <code>TSDataType.TEXT</code>. Therefore, the column <code>dataType</code> is returned also which contains the <em>real</em> type how the value should be interpreted.</p></li><li><p>We can use <code>ORDER BY TIMESERIES (DESC | ASC)</code> to specify that the result set is sorted in descending/ascending order by timeseries name.</p></li></ul><p><strong>Example 1:</strong> get the last point of root.ln.wf01.wt01.status:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; select last status from root.ln.wf01.wt01</span>
<span class="line">+-----------------------------+------------------------+-----+--------+</span>
<span class="line">|                         Time|              timeseries|value|dataType|</span>
<span class="line">+-----------------------------+------------------------+-----+--------+</span>
<span class="line">|2017-11-07T23:59:00.000+08:00|root.ln.wf01.wt01.status|false| BOOLEAN|</span>
<span class="line">+-----------------------------+------------------------+-----+--------+</span>
<span class="line">Total line number = 1</span>
<span class="line">It costs 0.000s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Example 2:</strong> get the last status and temperature points of root.ln.wf01.wt01, whose timestamp larger or equal to 2017-11-07T23:50:00。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; select last status, temperature from root.ln.wf01.wt01 where time &gt;= 2017-11-07T23:50:00</span>
<span class="line">+-----------------------------+-----------------------------+---------+--------+</span>
<span class="line">|                         Time|                   timeseries|    value|dataType|</span>
<span class="line">+-----------------------------+-----------------------------+---------+--------+</span>
<span class="line">|2017-11-07T23:59:00.000+08:00|     root.ln.wf01.wt01.status|    false| BOOLEAN|</span>
<span class="line">|2017-11-07T23:59:00.000+08:00|root.ln.wf01.wt01.temperature|21.067368|  DOUBLE|</span>
<span class="line">+-----------------------------+-----------------------------+---------+--------+</span>
<span class="line">Total line number = 2</span>
<span class="line">It costs 0.002s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Example 3:</strong> get the last points of all sensor in root.ln.wf01.wt01, and order the result by the timeseries column desc</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; select last * from root.ln.wf01.wt01 order by timeseries desc;</span>
<span class="line">+-----------------------------+-----------------------------+---------+--------+</span>
<span class="line">|                         Time|                   timeseries|    value|dataType|</span>
<span class="line">+-----------------------------+-----------------------------+---------+--------+</span>
<span class="line">|2017-11-07T23:59:00.000+08:00|root.ln.wf01.wt01.temperature|21.067368|  DOUBLE|</span>
<span class="line">|2017-11-07T23:59:00.000+08:00|     root.ln.wf01.wt01.status|    false| BOOLEAN|</span>
<span class="line">+-----------------------------+-----------------------------+---------+--------+</span>
<span class="line">Total line number = 2</span>
<span class="line">It costs 0.002s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13)]))}const p=s(i,[["render",l],["__file","Last-Query.html.vue"]]),c=JSON.parse('{"path":"/UserGuide/V1.0.x/Query-Data/Last-Query.html","title":"Last Query","lang":"en-US","frontmatter":{"description":"Last Query The last query is a special type of query in Apache IoTDB. It returns the data point with the largest timestamp of the specified time series. In other word, it return...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/Query-Data/Last-Query.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.0.x/Query-Data/Last-Query.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Last Query"}],["meta",{"property":"og:description","content":"Last Query The last query is a special type of query in Apache IoTDB. It returns the data point with the largest timestamp of the specified time series. In other word, it return..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Last Query\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.77,"words":531},"filePathRelative":"UserGuide/V1.0.x/Query-Data/Last-Query.md","localizedDate":"July 10, 2023","autoDesc":true}');export{p as comp,c as data};
