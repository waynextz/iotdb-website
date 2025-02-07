import{_ as o,c as r,d as a,e,a as t,f as l,b as i,r as p,o as d}from"./app-DE_BslX7.js";const c={};function m(u,s){const n=p("RouteLink");return d(),r("div",null,[s[19]||(s[19]=a("h1",{id:"insert",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#insert"},[a("span",null,"INSERT")])],-1)),a("p",null,[s[4]||(s[4]=e("IoTDB provides users with a variety of ways to insert real-time data, such as directly inputting ")),t(n,{to:"/UserGuide/V0.13.x/Reference/SQL-Reference.html"},{default:l(()=>s[0]||(s[0]=[e("INSERT SQL statement")])),_:1}),s[5]||(s[5]=e(" in ")),t(n,{to:"/UserGuide/V0.13.x/QuickStart/Command-Line-Interface.html"},{default:l(()=>s[1]||(s[1]=[e("Client/Shell tools")])),_:1}),s[6]||(s[6]=e(", or using ")),t(n,{to:"/UserGuide/V0.13.x/API/Programming-JDBC.html"},{default:l(()=>s[2]||(s[2]=[e("Java JDBC")])),_:1}),s[7]||(s[7]=e(" to perform single or batch execution of ")),t(n,{to:"/UserGuide/V0.13.x/Reference/SQL-Reference.html"},{default:l(()=>s[3]||(s[3]=[e("INSERT SQL statement")])),_:1}),s[8]||(s[8]=e("."))]),a("p",null,[s[10]||(s[10]=e("This section mainly introduces the use of ")),t(n,{to:"/UserGuide/V0.13.x/Reference/SQL-Reference.html"},{default:l(()=>s[9]||(s[9]=[e("INSERT SQL statement")])),_:1}),s[11]||(s[11]=e(" for real-time data import in the scenario."))]),s[20]||(s[20]=a("h2",{id:"use-of-insert-statements",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#use-of-insert-statements"},[a("span",null,"Use of INSERT Statements")])],-1)),a("p",null,[s[15]||(s[15]=e("The ")),t(n,{to:"/UserGuide/V0.13.x/Reference/SQL-Reference.html"},{default:l(()=>s[12]||(s[12]=[e("INSERT SQL statement")])),_:1}),s[16]||(s[16]=e(" statement is used to insert data into one or more specified timeseries created. For each point of data inserted, it consists of a ")),t(n,{to:"/UserGuide/V0.13.x/Data-Concept/Data-Model-and-Terminology.html"},{default:l(()=>s[13]||(s[13]=[e("timestamp")])),_:1}),s[17]||(s[17]=e(" and a sensor acquisition value (see ")),t(n,{to:"/UserGuide/V0.13.x/Data-Concept/Data-Type.html"},{default:l(()=>s[14]||(s[14]=[e("Data Type")])),_:1}),s[18]||(s[18]=e(")."))]),s[21]||(s[21]=i(`<p><strong>Schema-less writing</strong>: When metadata is not defined, data can be directly written through an insert statement, and the required metadata will be automatically identified and registered in the storage group, achieving automatic modeling.</p><p>In the scenario of this section, take two timeseries <code>root.ln.wf02.wt02.status</code> and <code>root.ln.wf02.wt02.hardware</code> as an example, and their data types are BOOLEAN and TEXT, respectively.</p><p>The sample code for single column data insertion is as follows:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>IoTDB &gt; insert into root.ln.wf02.wt02(timestamp,status) values(1,true)</span></span>
<span class="line"><span>IoTDB &gt; insert into root.ln.wf02.wt02(timestamp,hardware) values(1, &#39;v1&#39;)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>The above example code inserts the long integer timestamp and the value &quot;true&quot; into the timeseries <code>root.ln.wf02.wt02.status</code> and inserts the long integer timestamp and the value &quot;v1&quot; into the timeseries <code>root.ln.wf02.wt02.hardware</code>. When the execution is successful, cost time is shown to indicate that the data insertion has been completed.</p><blockquote><p>Note: In IoTDB, TEXT type data can be represented by single and double quotation marks. The insertion statement above uses double quotation marks for TEXT type data. The following example will use single quotation marks for TEXT type data.</p></blockquote><p>The INSERT statement can also support the insertion of multi-column data at the same time point. The sample code of inserting the values of the two timeseries at the same time point &#39;2&#39; is as follows:</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#ABB2BF;">IoTDB </span><span style="color:#56B6C2;">&gt;</span><span style="color:#C678DD;"> insert into</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">ln</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wf02</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wt02</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">timestamp</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">status</span><span style="color:#ABB2BF;">, hardware) </span><span style="color:#C678DD;">VALUES</span><span style="color:#ABB2BF;"> (</span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">, false, </span><span style="color:#98C379;">&#39;v2&#39;</span><span style="color:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>In addition, The INSERT statement support insert multi-rows at once. The sample code of inserting two rows as follows:</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#ABB2BF;">IoTDB </span><span style="color:#56B6C2;">&gt;</span><span style="color:#C678DD;"> insert into</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">ln</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wf02</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wt02</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">timestamp</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">status</span><span style="color:#ABB2BF;">, hardware) </span><span style="color:#C678DD;">VALUES</span><span style="color:#ABB2BF;"> (</span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">, false, </span><span style="color:#98C379;">&#39;v3&#39;</span><span style="color:#ABB2BF;">),(</span><span style="color:#D19A66;">4</span><span style="color:#ABB2BF;">, true, </span><span style="color:#98C379;">&#39;v4&#39;</span><span style="color:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>After inserting the data, we can simply query the inserted data using the SELECT statement:</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#ABB2BF;">IoTDB </span><span style="color:#56B6C2;">&gt;</span><span style="color:#C678DD;"> select</span><span style="color:#ABB2BF;"> * </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">ln</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wf02</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wt02</span><span style="color:#C678DD;"> where</span><span style="color:#C678DD;"> time</span><span style="color:#56B6C2;"> &lt;</span><span style="color:#D19A66;"> 5</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>The result is shown below. The query result shows that the insertion statements of single column and multi column data are performed correctly.</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>+-----------------------------+--------------------------+------------------------+</span></span>
<span class="line"><span>|                         Time|root.ln.wf02.wt02.hardware|root.ln.wf02.wt02.status|</span></span>
<span class="line"><span>+-----------------------------+--------------------------+------------------------+</span></span>
<span class="line"><span>|1970-01-01T08:00:00.001+08:00|                        v1|                    true|</span></span>
<span class="line"><span>|1970-01-01T08:00:00.002+08:00|                        v2|                   false|</span></span>
<span class="line"><span>|1970-01-01T08:00:00.003+08:00|                        v3|                   false|</span></span>
<span class="line"><span>|1970-01-01T08:00:00.004+08:00|                        v4|                    true|</span></span>
<span class="line"><span>+-----------------------------+--------------------------+------------------------+</span></span>
<span class="line"><span>Total line number = 4</span></span>
<span class="line"><span>It costs 0.004s</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In addition, we can omit the timestamp column, and the system will use the current system timestamp as the timestamp of the data point. The sample code is as follows:</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#ABB2BF;">IoTDB </span><span style="color:#56B6C2;">&gt;</span><span style="color:#C678DD;"> insert into</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">ln</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wf02</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wt02</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">status</span><span style="color:#ABB2BF;">, hardware) </span><span style="color:#C678DD;">values</span><span style="color:#ABB2BF;"> (false, </span><span style="color:#98C379;">&#39;v2&#39;</span><span style="color:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>Note:</strong> Timestamps must be specified when inserting multiple rows of data in a SQL.</p><h2 id="insert-data-into-aligned-timeseries" tabindex="-1"><a class="header-anchor" href="#insert-data-into-aligned-timeseries"><span>Insert Data Into Aligned Timeseries</span></a></h2><p>To insert data into a group of aligned time series, we only need to add the <code>ALIGNED</code> keyword in SQL, and others are similar.</p><p>The sample code is as follows:</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#ABB2BF;">IoTDB </span><span style="color:#56B6C2;">&gt;</span><span style="color:#C678DD;"> create</span><span style="color:#ABB2BF;"> aligned timeseries </span><span style="color:#D19A66;">root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sg1</span><span style="color:#ABB2BF;">.d1(s1 INT32, s2 DOUBLE)</span></span>
<span class="line"><span style="color:#ABB2BF;">IoTDB </span><span style="color:#56B6C2;">&gt;</span><span style="color:#C678DD;"> insert into</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sg1</span><span style="color:#ABB2BF;">.d1(</span><span style="color:#C678DD;">time</span><span style="color:#ABB2BF;">, s1, s2) aligned </span><span style="color:#C678DD;">values</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">IoTDB </span><span style="color:#56B6C2;">&gt;</span><span style="color:#C678DD;"> insert into</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sg1</span><span style="color:#ABB2BF;">.d1(</span><span style="color:#C678DD;">time</span><span style="color:#ABB2BF;">, s1, s2) aligned </span><span style="color:#C678DD;">values</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">), (</span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">IoTDB </span><span style="color:#56B6C2;">&gt;</span><span style="color:#C678DD;"> select</span><span style="color:#ABB2BF;"> * </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sg1</span><span style="color:#ABB2BF;">.d1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The result is shown below. The query result shows that the insertion statements are performed correctly.</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>+-----------------------------+--------------+--------------+</span></span>
<span class="line"><span>|                         Time|root.sg1.d2.s1|root.sg1.d2.s2|</span></span>
<span class="line"><span>+-----------------------------+--------------+--------------+</span></span>
<span class="line"><span>|1970-01-01T08:00:00.001+08:00|             1|           1.0|</span></span>
<span class="line"><span>|1970-01-01T08:00:00.002+08:00|             2|           2.0|</span></span>
<span class="line"><span>|1970-01-01T08:00:00.003+08:00|             3|           3.0|</span></span>
<span class="line"><span>+-----------------------------+--------------+--------------+</span></span>
<span class="line"><span>Total line number = 3</span></span>
<span class="line"><span>It costs 0.004s</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23))])}const y=o(c,[["render",m],["__file","Write-Data.html.vue"]]),h=JSON.parse('{"path":"/UserGuide/V0.13.x/Write-And-Delete-Data/Write-Data.html","title":"INSERT","lang":"en-US","frontmatter":{"description":"INSERT IoTDB provides users with a variety of ways to insert real-time data, such as directly inputting in , or using to perform single or batch execution of . This section main...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Write-And-Delete-Data/Write-Data.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V0.13.x/Write-And-Delete-Data/Write-Data.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"INSERT"}],["meta",{"property":"og:description","content":"INSERT IoTDB provides users with a variety of ways to insert real-time data, such as directly inputting in , or using to perform single or batch execution of . This section main..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-27T01:37:46.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-27T01:37:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"INSERT\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-27T01:37:46.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Use of INSERT Statements","slug":"use-of-insert-statements","link":"#use-of-insert-statements","children":[]},{"level":2,"title":"Insert Data Into Aligned Timeseries","slug":"insert-data-into-aligned-timeseries","link":"#insert-data-into-aligned-timeseries","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1735263466000,"contributors":[{"name":"W1y1r","username":"W1y1r","email":"150988475+W1y1r@users.noreply.github.com","commits":1,"url":"https://github.com/W1y1r"},{"name":"CritasWang","username":"CritasWang","email":"critas@outlook.com","commits":1,"url":"https://github.com/CritasWang"}]},"readingTime":{"minutes":2.56,"words":768},"filePathRelative":"UserGuide/V0.13.x/Write-And-Delete-Data/Write-Data.md","localizedDate":"July 10, 2023","autoDesc":true}');export{y as comp,h as data};
