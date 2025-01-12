import{_ as e,c as l,b as a,o}from"./app-CNiZnG3t.js";const n={};function t(r,s){return o(),l("div",null,s[0]||(s[0]=[a(`<h1 id="null-value-filter" tabindex="-1"><a class="header-anchor" href="#null-value-filter"><span>Null Value Filter</span></a></h1><p>In practical application, users may want to filter some rows with null values in the query result set. In IoTDB, the <code>WITHOUT NULL</code> clause can be used to filter null values in the result set. There are two filtering strategies: <code>WITHOUT NULL ANY</code>和<code>WITHOUT NULL ALL</code>. In addition, the <code>WITHOUT NULL</code> clause supports specifying the corresponding columns for filtering.</p><blockquote><p>WITHOUT NULL ANY: if one of the columns in the specified column set is null, the conditions are met for filtering.</p><p>WITHOUT NULL ALL: if all columns in the specified column set are null, the conditions are met for filtering.</p></blockquote><h2 id="don-t-specify-columns" tabindex="-1"><a class="header-anchor" href="#don-t-specify-columns"><span>Don&#39;t specify columns</span></a></h2><blockquote><p>By default, it is effective for all columns in the result set. That is the specified column set includes all columns in the result set.</p></blockquote><ol><li>In the following query, if any column of one row in the result set is null, the row will be filtered out. That is the result set obtained does not contain any null values.</li></ol><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> * </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">ln</span><span style="color:#ABB2BF;">.** </span><span style="color:#C678DD;">where</span><span style="color:#C678DD;"> time</span><span style="color:#56B6C2;"> &lt;=</span><span style="color:#D19A66;"> 2017</span><span style="color:#ABB2BF;">-</span><span style="color:#D19A66;">11</span><span style="color:#ABB2BF;">-01T00:</span><span style="color:#D19A66;">01</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">00</span><span style="color:#C678DD;"> WITHOUT</span><span style="color:#C678DD;"> NULL</span><span style="color:#ABB2BF;"> ANY</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="2"><li>In the following query, if all columns of one row in the result set are null, the row will be filtered out.</li></ol><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> * </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">ln</span><span style="color:#ABB2BF;">.** </span><span style="color:#C678DD;">where</span><span style="color:#C678DD;"> group by</span><span style="color:#ABB2BF;"> ([</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">,</span><span style="color:#D19A66;">10</span><span style="color:#ABB2BF;">), 2ms) </span><span style="color:#C678DD;">WITHOUT</span><span style="color:#C678DD;"> NULL</span><span style="color:#ABB2BF;"> ALL</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="specify-columns" tabindex="-1"><a class="header-anchor" href="#specify-columns"><span>Specify columns</span></a></h2><blockquote><p>take effect only for the specified column set</p></blockquote><p>Use the <code>WITHOUT NULL</code> clause to filter the null value of the specified column in the result set. The following are some examples and descriptions:</p><blockquote><p>Note that if the specified column does not exist in the current metadata, it will be filtered directly, which is consistent with the output result of the current query.<br> If the specified column exists but does not match the column name output from the result set, an error will be reported: <code>The without null columns don&#39;t match the columns queried.If has alias, please use the alias.</code></p></blockquote><p>For examples:</p><ol><li>In <code>without null</code> specified column set, <code>root.test.sg1.s1</code> column exists in the current metadata,<code>root.test.sg1.usag</code> column does not exist in the current metadata. The function of the <code>without null</code> clause in the following query is equivalent to without null all(s1).</li></ol><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> * </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">test</span><span style="color:#ABB2BF;">.sg1 </span><span style="color:#C678DD;">without</span><span style="color:#C678DD;"> null</span><span style="color:#ABB2BF;"> all (s1, usag)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="2"><li>In <code>without null</code> specified column set, <code>root.test.sg1.s2</code> column exists in the current metadata, but doesn&#39;t exist in the result set of the query. So it will report an error: <code>The without null columns don&#39;t match the columns queried.If has alias, please use the alias.</code></li></ol><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> s1 + s2, s1 - s2, s1 * s2, s1 / s2, s1 % s2 </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">test</span><span style="color:#ABB2BF;">.sg1 </span><span style="color:#C678DD;">without</span><span style="color:#C678DD;"> null</span><span style="color:#ABB2BF;"> all (s1+s2, s2)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="raw-data-query" tabindex="-1"><a class="header-anchor" href="#raw-data-query"><span>Raw data query</span></a></h3><ol><li>If the column <code>root.ln.sg1.s1</code> of one row in the result set of the query is null, the row will be filtered out.</li></ol><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> * </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">ln</span><span style="color:#ABB2BF;">.sg1 </span><span style="color:#C678DD;">WITHOUT</span><span style="color:#C678DD;"> NULL</span><span style="color:#ABB2BF;"> ANY(s1)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="2"><li>If at least one column in <code>root.ln.sg1.s1</code> and <code>root.ln.sg1.s2</code> of one row is null in the result set of the query, the row will be filtered out.</li></ol><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> * </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">ln</span><span style="color:#ABB2BF;">.sg1 </span><span style="color:#C678DD;">WITHOUT</span><span style="color:#C678DD;"> NULL</span><span style="color:#ABB2BF;"> ANY(s1, s2)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="3"><li>If both <code>root.ln.sg1.s1</code> and <code>root.ln.sg1.s2</code> columns of one row are null in the result set of the query, the row will be filtered out.</li></ol><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> * </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">ln</span><span style="color:#ABB2BF;">.sg1 </span><span style="color:#C678DD;">WITHOUT</span><span style="color:#C678DD;"> NULL</span><span style="color:#ABB2BF;"> ALL(s1, s2)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="with-expression-query" tabindex="-1"><a class="header-anchor" href="#with-expression-query"><span>With expression query</span></a></h3><p>specified columns can be expression</p><ol><li>If both <code>s2+s4</code> and <code>s2</code> columns of one row are null in the result set of the query, the row will be filtered out.</li></ol><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> s2, - s2, s4, + s4, s2 + s4, s2 - s4, s2 * s4, s2 / s4, s2 % s4 </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">test</span><span style="color:#ABB2BF;">.sg1 </span><span style="color:#C678DD;">without</span><span style="color:#C678DD;"> null</span><span style="color:#ABB2BF;"> all (s2+s4, s2)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="2"><li>If at least one column in <code>s2+s4</code> and <code>s2</code> of one row is null in the result set of the query, the row will be filtered out.</li></ol><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> s2, - s2, s4, + s4, s2 + s4, s2 - s4, s2 * s4, s2 / s4, s2 % s4 </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">test</span><span style="color:#ABB2BF;">.sg1 </span><span style="color:#C678DD;">without</span><span style="color:#C678DD;"> null</span><span style="color:#ABB2BF;"> any (s2+s4, s2)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="with-alias-query" tabindex="-1"><a class="header-anchor" href="#with-alias-query"><span>With alias query</span></a></h3><p>specified columns can be alias</p><ol><li>If both <code>t2</code> and <code>t1</code> aliases of one row are null in the result set of the query, the row will be filtered out.</li></ol><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> s2 </span><span style="color:#C678DD;">as</span><span style="color:#ABB2BF;"> t1, - s2, s4, + s4, s2 + s4 </span><span style="color:#C678DD;">as</span><span style="color:#ABB2BF;"> t2, s2 - s4, s2 * s4, s2 / s4, s2 % s4 </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">test</span><span style="color:#ABB2BF;">.sg1 </span><span style="color:#C678DD;">without</span><span style="color:#C678DD;"> null</span><span style="color:#ABB2BF;"> all (t2, t1)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> s1, </span><span style="color:#56B6C2;">sin</span><span style="color:#ABB2BF;">(s2) + </span><span style="color:#56B6C2;">cos</span><span style="color:#ABB2BF;">(s2) </span><span style="color:#C678DD;">as</span><span style="color:#ABB2BF;"> t1, </span><span style="color:#56B6C2;">cos</span><span style="color:#ABB2BF;">(</span><span style="color:#56B6C2;">sin</span><span style="color:#ABB2BF;">(s2 + s4) + s2) </span><span style="color:#C678DD;">as</span><span style="color:#ABB2BF;"> t2 </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">test</span><span style="color:#ABB2BF;">.sg1 </span><span style="color:#C678DD;">without</span><span style="color:#C678DD;"> null</span><span style="color:#ABB2BF;"> all (t1, t2)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="2"><li>When you specify aliases in the column set that queried, if you use the original name of the column with an alias in the column set specified without null, an error will be reported：<code>The without null columns don&#39;t match the columns queried.If has alias, please use the alias.</code> For example, <code>tan(s1)</code> and <code>t</code> columns are used at the same time in the following query.</li></ol><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> s1 </span><span style="color:#C678DD;">as</span><span style="color:#ABB2BF;"> d, </span><span style="color:#56B6C2;">sin</span><span style="color:#ABB2BF;">(s1), </span><span style="color:#56B6C2;">cos</span><span style="color:#ABB2BF;">(s1), </span><span style="color:#56B6C2;">tan</span><span style="color:#ABB2BF;">(s1) </span><span style="color:#C678DD;">as</span><span style="color:#ABB2BF;"> t, s2 </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">test</span><span style="color:#ABB2BF;">.sg1 </span><span style="color:#C678DD;">without</span><span style="color:#C678DD;"> null</span><span style="color:#ABB2BF;"> all(d,  </span><span style="color:#56B6C2;">tan</span><span style="color:#ABB2BF;">(s1), t) </span><span style="color:#C678DD;">limit</span><span style="color:#D19A66;"> 5</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="with-function-query" tabindex="-1"><a class="header-anchor" href="#with-function-query"><span>With function query</span></a></h3><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> s1, </span><span style="color:#56B6C2;">sin</span><span style="color:#ABB2BF;">(s2) + </span><span style="color:#56B6C2;">cos</span><span style="color:#ABB2BF;">(s2), </span><span style="color:#56B6C2;">cos</span><span style="color:#ABB2BF;">(</span><span style="color:#56B6C2;">sin</span><span style="color:#ABB2BF;">(s2 + s4) + s2) </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">test</span><span style="color:#ABB2BF;">.sg1 </span><span style="color:#C678DD;">without</span><span style="color:#C678DD;"> null</span><span style="color:#ABB2BF;"> all (</span><span style="color:#56B6C2;">sin</span><span style="color:#ABB2BF;">(s2) + </span><span style="color:#56B6C2;">cos</span><span style="color:#ABB2BF;">(s2), </span><span style="color:#56B6C2;">cos</span><span style="color:#ABB2BF;">(</span><span style="color:#56B6C2;">sin</span><span style="color:#ABB2BF;">(s2 + s4) + s2))</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="align-by-device-query" tabindex="-1"><a class="header-anchor" href="#align-by-device-query"><span>Align by device query</span></a></h3><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#56B6C2;"> last_value</span><span style="color:#ABB2BF;">(*) </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">test</span><span style="color:#ABB2BF;">.sg1 </span><span style="color:#C678DD;">group by</span><span style="color:#ABB2BF;">([</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">,</span><span style="color:#D19A66;">10</span><span style="color:#ABB2BF;">), 2ms) </span><span style="color:#C678DD;">without</span><span style="color:#C678DD;"> null</span><span style="color:#ABB2BF;"> all(</span><span style="color:#56B6C2;">last_value</span><span style="color:#ABB2BF;">(s2), </span><span style="color:#56B6C2;">last_value</span><span style="color:#ABB2BF;">(s3)) align </span><span style="color:#C678DD;">by</span><span style="color:#ABB2BF;"> device</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Examples of results are as follows：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>IoTDB&gt; select last_value(*) from root.sg1.* group by([1,10), 2ms) without null all(last_value(s2), last_value(s3)) align by device</span></span>
<span class="line"><span>+-----------------------------+-----------+--------------+--------------+--------------+</span></span>
<span class="line"><span>|                         Time|     Device|last_value(s1)|last_value(s2)|last_value(s3)|</span></span>
<span class="line"><span>+-----------------------------+-----------+--------------+--------------+--------------+</span></span>
<span class="line"><span>|1970-01-01T08:00:00.001+08:00|root.sg1.d1|           1.0|           2.0|          null|</span></span>
<span class="line"><span>|1970-01-01T08:00:00.003+08:00|root.sg1.d1|           3.0|           4.0|          null|</span></span>
<span class="line"><span>|1970-01-01T08:00:00.001+08:00|root.sg1.d2|           1.0|           1.0|           1.0|</span></span>
<span class="line"><span>+-----------------------------+-----------+--------------+--------------+--------------+</span></span>
<span class="line"><span>Total line number = 3</span></span>
<span class="line"><span>It costs 0.007s</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The specified column name corresponds to the column name of the output result. At present, the <code>without null</code> clause doesn&#39;t support specifying a column of a device. If you do, an error will be reported: <code>The without null columns don&#39;t match the columns queried.If has alias, please use the alias.</code> For example, in the following query example, it is not supported to filter the row with column <code>last_value(root.sg1.d1.s3)</code> that is null.</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#56B6C2;"> last_value</span><span style="color:#ABB2BF;">(*) </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">test</span><span style="color:#ABB2BF;">.sg1 </span><span style="color:#C678DD;">group by</span><span style="color:#ABB2BF;">([</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">,</span><span style="color:#D19A66;">10</span><span style="color:#ABB2BF;">), 2ms) </span><span style="color:#C678DD;">without</span><span style="color:#C678DD;"> null</span><span style="color:#ABB2BF;"> all(</span><span style="color:#56B6C2;">last_value</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">\`root.sg1.d1.s3\`</span><span style="color:#ABB2BF;">)) align </span><span style="color:#C678DD;">by</span><span style="color:#ABB2BF;"> device</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="aggregation-query" tabindex="-1"><a class="header-anchor" href="#aggregation-query"><span>Aggregation query</span></a></h3><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#56B6C2;"> avg</span><span style="color:#ABB2BF;">(s4), </span><span style="color:#56B6C2;">sum</span><span style="color:#ABB2BF;">(s2) </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">test</span><span style="color:#ABB2BF;">.sg1 </span><span style="color:#C678DD;">group by</span><span style="color:#ABB2BF;"> ([</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">,</span><span style="color:#D19A66;">10</span><span style="color:#ABB2BF;">), 2ms) </span><span style="color:#C678DD;">without</span><span style="color:#C678DD;"> null</span><span style="color:#ABB2BF;"> all(</span><span style="color:#56B6C2;">sum</span><span style="color:#ABB2BF;">(s2))</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#56B6C2;"> avg</span><span style="color:#ABB2BF;">(s4), </span><span style="color:#56B6C2;">sum</span><span style="color:#ABB2BF;">(s2), </span><span style="color:#56B6C2;">count</span><span style="color:#ABB2BF;">(s3) </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">test</span><span style="color:#ABB2BF;">.sg1 </span><span style="color:#C678DD;">group by</span><span style="color:#ABB2BF;"> ([</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">,</span><span style="color:#D19A66;">10</span><span style="color:#ABB2BF;">), 2ms) </span><span style="color:#C678DD;">without</span><span style="color:#C678DD;"> null</span><span style="color:#ABB2BF;"> all(</span><span style="color:#56B6C2;">avg</span><span style="color:#ABB2BF;">(s4), </span><span style="color:#56B6C2;">sum</span><span style="color:#ABB2BF;">(s2))</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="specify-full-path-columns" tabindex="-1"><a class="header-anchor" href="#specify-full-path-columns"><span>Specify full path columns</span></a></h3><p>Assuming that the output results of the following query are listed as <code>root.test.sg1.s2</code>, <code>root.test.sg1.s3</code>, <code>root.test.sg2.s2</code> and <code>root.test.sg2.s3</code>, you can specify the corresponding columns with full pathname for filtering, such as the following example:</p><ol><li>If both <code>root.test.sg1.s2</code> and <code>root.test.sg2.s3</code> columns of one row are null in the result set of the query, the row will be filtered out.</li></ol><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> s2, s3 </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">test</span><span style="color:#ABB2BF;">.** </span><span style="color:#C678DD;">without</span><span style="color:#C678DD;"> null</span><span style="color:#ABB2BF;"> all(</span><span style="color:#98C379;">\`root.test.sg1.s2\`</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">\`root.test.sg2.s3\`</span><span style="color:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="2"><li>If <code>root.test.sg1.s2</code>, <code>root.test.sg1.s3</code> and <code>root.test.sg2.s3</code> columns of one row are null in the result set of the query, the row will be filtered out.</li></ol><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> s2, s3 </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">test</span><span style="color:#ABB2BF;">.** </span><span style="color:#C678DD;">without</span><span style="color:#C678DD;"> null</span><span style="color:#ABB2BF;"> all(</span><span style="color:#98C379;">\`root.test.sg1.s2\`</span><span style="color:#ABB2BF;">, s3)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="aligned-timeseries-query" tabindex="-1"><a class="header-anchor" href="#aligned-timeseries-query"><span>Aligned Timeseries Query</span></a></h3><ol><li>You can specify the <code>without null</code> column name as the aligned timeseries column name.</li></ol><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">CREATE</span><span style="color:#ABB2BF;"> ALIGNED TIMESERIES </span><span style="color:#D19A66;">root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">test</span><span style="color:#ABB2BF;">.sg3(s5 INT32, s6 </span><span style="color:#C678DD;">BOOLEAN</span><span style="color:#ABB2BF;">, s7 DOUBLE, s8 INT32)</span></span>
<span class="line"><span style="color:#C678DD;">select</span><span style="color:#D19A66;"> sg1</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">s1</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">sg1</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">s2</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">sg2</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">s3</span><span style="color:#ABB2BF;">, sg3.* </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">test</span><span style="color:#C678DD;"> without</span><span style="color:#C678DD;"> null</span><span style="color:#ABB2BF;"> all (</span><span style="color:#D19A66;">sg3</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">s5</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">sg3</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">s6</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">sg2</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">s3</span><span style="color:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,58)]))}const c=e(n,[["render",t],["__file","Without-Null.html.vue"]]),i=JSON.parse(`{"path":"/UserGuide/V0.13.x/Query-Data/Without-Null.html","title":"Null Value Filter","lang":"en-US","frontmatter":{"description":"Null Value Filter In practical application, users may want to filter some rows with null values in the query result set. In IoTDB, the WITHOUT NULL clause can be used to filter ...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Query-Data/Without-Null.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V0.13.x/Query-Data/Without-Null.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Null Value Filter"}],["meta",{"property":"og:description","content":"Null Value Filter In practical application, users may want to filter some rows with null values in the query result set. In IoTDB, the WITHOUT NULL clause can be used to filter ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Null Value Filter\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Don't specify columns","slug":"don-t-specify-columns","link":"#don-t-specify-columns","children":[]},{"level":2,"title":"Specify columns","slug":"specify-columns","link":"#specify-columns","children":[{"level":3,"title":"Raw data query","slug":"raw-data-query","link":"#raw-data-query","children":[]},{"level":3,"title":"With expression query","slug":"with-expression-query","link":"#with-expression-query","children":[]},{"level":3,"title":"With alias query","slug":"with-alias-query","link":"#with-alias-query","children":[]},{"level":3,"title":"With function query","slug":"with-function-query","link":"#with-function-query","children":[]},{"level":3,"title":"Align by device query","slug":"align-by-device-query","link":"#align-by-device-query","children":[]},{"level":3,"title":"Aggregation query","slug":"aggregation-query","link":"#aggregation-query","children":[]},{"level":3,"title":"Specify full path columns","slug":"specify-full-path-columns","link":"#specify-full-path-columns","children":[]},{"level":3,"title":"Aligned Timeseries Query","slug":"aligned-timeseries-query","link":"#aligned-timeseries-query","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","username":"CritasWang","email":"critas@outlook.com","commits":1,"url":"https://github.com/CritasWang"}]},"readingTime":{"minutes":4.55,"words":1364},"filePathRelative":"UserGuide/V0.13.x/Query-Data/Without-Null.md","localizedDate":"July 10, 2023","autoDesc":true}`);export{c as comp,i as data};
