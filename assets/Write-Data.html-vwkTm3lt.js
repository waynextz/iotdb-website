import{_ as i,c as p,d as e,e as n,a as t,w as o,b as l,r,o as c}from"./app-Y2-ILDda.js";const u={};function d(m,s){const a=r("RouteLink");return c(),p("div",null,[s[19]||(s[19]=e("h1",{id:"insert",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#insert"},[e("span",null,"INSERT")])],-1)),e("p",null,[s[4]||(s[4]=n("IoTDB provides users with a variety of ways to insert real-time data, such as directly inputting ")),t(a,{to:"/UserGuide/V0.13.x/Reference/SQL-Reference.html"},{default:o(()=>s[0]||(s[0]=[n("INSERT SQL statement")])),_:1}),s[5]||(s[5]=n(" in ")),t(a,{to:"/UserGuide/V0.13.x/QuickStart/Command-Line-Interface.html"},{default:o(()=>s[1]||(s[1]=[n("Client/Shell tools")])),_:1}),s[6]||(s[6]=n(", or using ")),t(a,{to:"/UserGuide/V0.13.x/API/Programming-JDBC.html"},{default:o(()=>s[2]||(s[2]=[n("Java JDBC")])),_:1}),s[7]||(s[7]=n(" to perform single or batch execution of ")),t(a,{to:"/UserGuide/V0.13.x/Reference/SQL-Reference.html"},{default:o(()=>s[3]||(s[3]=[n("INSERT SQL statement")])),_:1}),s[8]||(s[8]=n("."))]),e("p",null,[s[10]||(s[10]=n("This section mainly introduces the use of ")),t(a,{to:"/UserGuide/V0.13.x/Reference/SQL-Reference.html"},{default:o(()=>s[9]||(s[9]=[n("INSERT SQL statement")])),_:1}),s[11]||(s[11]=n(" for real-time data import in the scenario."))]),s[20]||(s[20]=e("h2",{id:"use-of-insert-statements",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#use-of-insert-statements"},[e("span",null,"Use of INSERT Statements")])],-1)),e("p",null,[s[15]||(s[15]=n("The ")),t(a,{to:"/UserGuide/V0.13.x/Reference/SQL-Reference.html"},{default:o(()=>s[12]||(s[12]=[n("INSERT SQL statement")])),_:1}),s[16]||(s[16]=n(" statement is used to insert data into one or more specified timeseries created. For each point of data inserted, it consists of a ")),t(a,{to:"/UserGuide/V0.13.x/Data-Concept/Data-Model-and-Terminology.html"},{default:o(()=>s[13]||(s[13]=[n("timestamp")])),_:1}),s[17]||(s[17]=n(" and a sensor acquisition value (see ")),t(a,{to:"/UserGuide/V0.13.x/Data-Concept/Data-Type.html"},{default:o(()=>s[14]||(s[14]=[n("Data Type")])),_:1}),s[18]||(s[18]=n(")."))]),s[21]||(s[21]=l(`<p>In the scenario of this section, take two timeseries <code>root.ln.wf02.wt02.status</code> and <code>root.ln.wf02.wt02.hardware</code> as an example, and their data types are BOOLEAN and TEXT, respectively.</p><p>The sample code for single column data insertion is as follows:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB &gt; insert into root.ln.wf02.wt02(timestamp,status) values(1,true)</span>
<span class="line">IoTDB &gt; insert into root.ln.wf02.wt02(timestamp,hardware) values(1, &#39;v1&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>The above example code inserts the long integer timestamp and the value &quot;true&quot; into the timeseries <code>root.ln.wf02.wt02.status</code> and inserts the long integer timestamp and the value &quot;v1&quot; into the timeseries <code>root.ln.wf02.wt02.hardware</code>. When the execution is successful, cost time is shown to indicate that the data insertion has been completed.</p><blockquote><p>Note: In IoTDB, TEXT type data can be represented by single and double quotation marks. The insertion statement above uses double quotation marks for TEXT type data. The following example will use single quotation marks for TEXT type data.</p></blockquote><p>The INSERT statement can also support the insertion of multi-column data at the same time point. The sample code of inserting the values of the two timeseries at the same time point &#39;2&#39; is as follows:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line">IoTDB <span class="token operator">&gt;</span> <span class="token keyword">insert</span> <span class="token keyword">into</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">(</span><span class="token keyword">timestamp</span><span class="token punctuation">,</span> <span class="token keyword">status</span><span class="token punctuation">,</span> hardware<span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&#39;v2&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>In addition, The INSERT statement support insert multi-rows at once. The sample code of inserting two rows as follows:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line">IoTDB <span class="token operator">&gt;</span> <span class="token keyword">insert</span> <span class="token keyword">into</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">(</span><span class="token keyword">timestamp</span><span class="token punctuation">,</span> <span class="token keyword">status</span><span class="token punctuation">,</span> hardware<span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&#39;v3&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token string">&#39;v4&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>After inserting the data, we can simply query the inserted data using the SELECT statement:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line">IoTDB <span class="token operator">&gt;</span> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;</span> <span class="token number">5</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>The result is shown below. The query result shows that the insertion statements of single column and multi column data are performed correctly.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+--------------------------+------------------------+</span>
<span class="line">|                         Time|root.ln.wf02.wt02.hardware|root.ln.wf02.wt02.status|</span>
<span class="line">+-----------------------------+--------------------------+------------------------+</span>
<span class="line">|1970-01-01T08:00:00.001+08:00|                        v1|                    true|</span>
<span class="line">|1970-01-01T08:00:00.002+08:00|                        v2|                   false|</span>
<span class="line">|1970-01-01T08:00:00.003+08:00|                        v3|                   false|</span>
<span class="line">|1970-01-01T08:00:00.004+08:00|                        v4|                    true|</span>
<span class="line">+-----------------------------+--------------------------+------------------------+</span>
<span class="line">Total line number = 4</span>
<span class="line">It costs 0.004s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In addition, we can omit the timestamp column, and the system will use the current system timestamp as the timestamp of the data point. The sample code is as follows:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line">IoTDB <span class="token operator">&gt;</span> <span class="token keyword">insert</span> <span class="token keyword">into</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">(</span><span class="token keyword">status</span><span class="token punctuation">,</span> hardware<span class="token punctuation">)</span> <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&#39;v2&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>Note:</strong> Timestamps must be specified when inserting multiple rows of data in a SQL.</p><h2 id="insert-data-into-aligned-timeseries" tabindex="-1"><a class="header-anchor" href="#insert-data-into-aligned-timeseries"><span>Insert Data Into Aligned Timeseries</span></a></h2><p>To insert data into a group of aligned time series, we only need to add the <code>ALIGNED</code> keyword in SQL, and others are similar.</p><p>The sample code is as follows:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line">IoTDB <span class="token operator">&gt;</span> <span class="token keyword">create</span> aligned timeseries root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1<span class="token punctuation">(</span>s1 INT32<span class="token punctuation">,</span> s2 <span class="token keyword">DOUBLE</span><span class="token punctuation">)</span></span>
<span class="line">IoTDB <span class="token operator">&gt;</span> <span class="token keyword">insert</span> <span class="token keyword">into</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1<span class="token punctuation">(</span><span class="token keyword">time</span><span class="token punctuation">,</span> s1<span class="token punctuation">,</span> s2<span class="token punctuation">)</span> aligned <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">IoTDB <span class="token operator">&gt;</span> <span class="token keyword">insert</span> <span class="token keyword">into</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1<span class="token punctuation">(</span><span class="token keyword">time</span><span class="token punctuation">,</span> s1<span class="token punctuation">,</span> s2<span class="token punctuation">)</span> aligned <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span></span>
<span class="line">IoTDB <span class="token operator">&gt;</span> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The result is shown below. The query result shows that the insertion statements are performed correctly.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+--------------+--------------+</span>
<span class="line">|                         Time|root.sg1.d2.s1|root.sg1.d2.s2|</span>
<span class="line">+-----------------------------+--------------+--------------+</span>
<span class="line">|1970-01-01T08:00:00.001+08:00|             1|           1.0|</span>
<span class="line">|1970-01-01T08:00:00.002+08:00|             2|           2.0|</span>
<span class="line">|1970-01-01T08:00:00.003+08:00|             3|           3.0|</span>
<span class="line">+-----------------------------+--------------+--------------+</span>
<span class="line">Total line number = 3</span>
<span class="line">It costs 0.004s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22))])}const v=i(u,[["render",d],["__file","Write-Data.html.vue"]]),h=JSON.parse('{"path":"/UserGuide/V0.13.x/Write-And-Delete-Data/Write-Data.html","title":"INSERT","lang":"en-US","frontmatter":{"description":"INSERT IoTDB provides users with a variety of ways to insert real-time data, such as directly inputting in , or using to perform single or batch execution of . This section main...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Write-And-Delete-Data/Write-Data.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V0.13.x/Write-And-Delete-Data/Write-Data.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"INSERT"}],["meta",{"property":"og:description","content":"INSERT IoTDB provides users with a variety of ways to insert real-time data, such as directly inputting in , or using to perform single or batch execution of . This section main..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"INSERT\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Use of INSERT Statements","slug":"use-of-insert-statements","link":"#use-of-insert-statements","children":[]},{"level":2,"title":"Insert Data Into Aligned Timeseries","slug":"insert-data-into-aligned-timeseries","link":"#insert-data-into-aligned-timeseries","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":2.45,"words":734},"filePathRelative":"UserGuide/V0.13.x/Write-And-Delete-Data/Write-Data.md","localizedDate":"July 10, 2023","autoDesc":true}');export{v as comp,h as data};
