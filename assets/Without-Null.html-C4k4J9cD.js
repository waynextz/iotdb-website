import{_ as l,c as a,b as o,o as e}from"./app-CNiZnG3t.js";const n={};function t(p,s){return e(),a("div",null,s[0]||(s[0]=[o(`<h2 id="结果集空值过滤" tabindex="-1"><a class="header-anchor" href="#结果集空值过滤"><span>结果集空值过滤</span></a></h2><p>在实际应用中，用户可能希望对查询的结果集中某些存在空值的行进行过滤。在 IoTDB 中，可以使用 <code>WITHOUT NULL</code> 子句对结果集中的空值进行过滤，有两种过滤策略：<code>WITHOUT NULL ANY</code>和<code>WITHOUT NULL ALL</code>。不仅如此， <code>WITHOUT NULL</code> 子句支持指定相应列进行过滤。</p><blockquote><p>WITHOUT NULL ANY: 指定的列集中，存在一列为NULL,则满足条件进行过滤</p><p>WITHOUT NULL ALL: 指定的列集中，所有列都为NULL,才满足条件进行过滤</p></blockquote><h3 id="不指定列" tabindex="-1"><a class="header-anchor" href="#不指定列"><span>不指定列</span></a></h3><blockquote><p>默认就是对结果集中的所有列生效，即指定的列集为结果集中的所有列</p></blockquote><ol><li>在下列查询中，如果结果集中某一行任意一列为 null，则过滤掉该行；即获得的结果集不包含任何空值。</li></ol><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> * </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">ln</span><span style="color:#ABB2BF;">.** </span><span style="color:#C678DD;">where</span><span style="color:#C678DD;"> time</span><span style="color:#56B6C2;"> &lt;=</span><span style="color:#D19A66;"> 2017</span><span style="color:#ABB2BF;">-</span><span style="color:#D19A66;">11</span><span style="color:#ABB2BF;">-01T00:</span><span style="color:#D19A66;">01</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">00</span><span style="color:#C678DD;"> WITHOUT</span><span style="color:#C678DD;"> NULL</span><span style="color:#ABB2BF;"> ANY</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="2"><li>在下列查询中，如果结果集的某一行所有列都为 null，则过滤掉该行；即获得的结果集不包含所有值都为 null 的行。</li></ol><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> * </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">ln</span><span style="color:#ABB2BF;">.** </span><span style="color:#C678DD;">where</span><span style="color:#C678DD;"> group by</span><span style="color:#ABB2BF;"> ([</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">,</span><span style="color:#D19A66;">10</span><span style="color:#ABB2BF;">), 2ms) </span><span style="color:#C678DD;">WITHOUT</span><span style="color:#C678DD;"> NULL</span><span style="color:#ABB2BF;"> ALL</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="指定列" tabindex="-1"><a class="header-anchor" href="#指定列"><span>指定列</span></a></h3><blockquote><p>只对指定的列集生效</p></blockquote><p>使用 <code>WITHOUT NULL</code>子句对结果集中指定列名的空值进行过滤，下面是一些例子及其说明:</p><blockquote><p>注意，如果指定的列在当前元数据里不存在则会直接过滤掉，这与目前查询列的输出结果是一致的;<br> 如果指定的列存在，但与结果集中输出的列名不匹配，则会报错: <code>The without null columns don&#39;t match the columns queried.If has alias, please use the alias.</code></p></blockquote><p>比如下面的例子</p><ol><li>比如<code>without null</code>指定的列集中<code>root.test.sg1.s1</code>列在元数据中存在，<code>root.test.sg1.usag</code>列在元数据不存在，则下面查询的without null子句的作用相当于without null all(s1)</li></ol><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> * </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">test</span><span style="color:#ABB2BF;">.sg1 </span><span style="color:#C678DD;">without</span><span style="color:#C678DD;"> null</span><span style="color:#ABB2BF;"> all (s1, usag)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="2"><li>比如<code>without null</code>指定的列集中<code>root.test.sg1.s2</code>列在元数据中存在，但查询的结果集中输出列不包括，所以会报错:<code>The without null columns don&#39;t match the columns queried.If has alias, please use the alias.</code></li></ol><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> s1 + s2, s1 - s2, s1 * s2, s1 / s2, s1 % s2 </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">test</span><span style="color:#ABB2BF;">.sg1 </span><span style="color:#C678DD;">without</span><span style="color:#C678DD;"> null</span><span style="color:#ABB2BF;"> all (s1+s2, s2)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="原始数据查询" tabindex="-1"><a class="header-anchor" href="#原始数据查询"><span>原始数据查询</span></a></h4><ol><li>如果查询的结果集中, root.ln.sg1.s1这一列如果为null,则过滤掉该行</li></ol><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> * </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">ln</span><span style="color:#ABB2BF;">.sg1 </span><span style="color:#C678DD;">WITHOUT</span><span style="color:#C678DD;"> NULL</span><span style="color:#ABB2BF;"> ANY(s1)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="2"><li>如果查询的结果集中, root.ln.sg1.s1和root.ln.sg1.s2中只要存在至少一列为null,则过滤掉该行</li></ol><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> * </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">ln</span><span style="color:#ABB2BF;">.sg1 </span><span style="color:#C678DD;">WITHOUT</span><span style="color:#C678DD;"> NULL</span><span style="color:#ABB2BF;"> ANY(s1, s2)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="3"><li>如果查询的结果集中, 只要root.ln.sg1.s1和root.ln.sg1.s2这两列都为null,则过滤掉该行</li></ol><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> * </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">ln</span><span style="color:#ABB2BF;">.sg1 </span><span style="color:#C678DD;">WITHOUT</span><span style="color:#C678DD;"> NULL</span><span style="color:#ABB2BF;"> ALL(s1, s2)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="带表达式查询" tabindex="-1"><a class="header-anchor" href="#带表达式查询"><span>带表达式查询</span></a></h4><p>指定的列可以为表达式</p><ol><li>计算s2+s4和s2这两列是否都为null,如果是则过滤</li></ol><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> s2, - s2, s4, + s4, s2 + s4, s2 - s4, s2 * s4, s2 / s4, s2 % s4 </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">test</span><span style="color:#ABB2BF;">.sg1 </span><span style="color:#C678DD;">without</span><span style="color:#C678DD;"> null</span><span style="color:#ABB2BF;"> all (s2+s4, s2)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="2"><li>计算s2+s4和s2这两列是否至少有一列为null,如果是则过滤</li></ol><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> s2, - s2, s4, + s4, s2 + s4, s2 - s4, s2 * s4, s2 / s4, s2 % s4 </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">test</span><span style="color:#ABB2BF;">.sg1 </span><span style="color:#C678DD;">without</span><span style="color:#C678DD;"> null</span><span style="color:#ABB2BF;"> any (s2+s4, s2)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="别名" tabindex="-1"><a class="header-anchor" href="#别名"><span>别名</span></a></h4><p>指定的列可以为别名</p><ol><li>计算t2和t1这两列是否都为null,如果是则过滤</li></ol><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> s2 </span><span style="color:#C678DD;">as</span><span style="color:#ABB2BF;"> t1, - s2, s4, + s4, s2 + s4 </span><span style="color:#C678DD;">as</span><span style="color:#ABB2BF;"> t2, s2 - s4, s2 * s4, s2 / s4, s2 % s4 </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">test</span><span style="color:#ABB2BF;">.sg1 </span><span style="color:#C678DD;">without</span><span style="color:#C678DD;"> null</span><span style="color:#ABB2BF;"> all (t2, t1)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> s1, </span><span style="color:#56B6C2;">sin</span><span style="color:#ABB2BF;">(s2) + </span><span style="color:#56B6C2;">cos</span><span style="color:#ABB2BF;">(s2) </span><span style="color:#C678DD;">as</span><span style="color:#ABB2BF;"> t1, </span><span style="color:#56B6C2;">cos</span><span style="color:#ABB2BF;">(</span><span style="color:#56B6C2;">sin</span><span style="color:#ABB2BF;">(s2 + s4) + s2) </span><span style="color:#C678DD;">as</span><span style="color:#ABB2BF;"> t2 </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">test</span><span style="color:#ABB2BF;">.sg1 </span><span style="color:#C678DD;">without</span><span style="color:#C678DD;"> null</span><span style="color:#ABB2BF;"> all (t1, t2)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="2"><li>当你指定了别名，如果在without null指定的列集中再使用原始列名，则会报错：<code>The without null columns don&#39;t match the columns queried.If has alias, please use the alias.</code> 比如下面同时使用了tan(s1)和t</li></ol><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> s1 </span><span style="color:#C678DD;">as</span><span style="color:#ABB2BF;"> d, </span><span style="color:#56B6C2;">sin</span><span style="color:#ABB2BF;">(s1), </span><span style="color:#56B6C2;">cos</span><span style="color:#ABB2BF;">(s1), </span><span style="color:#56B6C2;">tan</span><span style="color:#ABB2BF;">(s1) </span><span style="color:#C678DD;">as</span><span style="color:#ABB2BF;"> t, s2 </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">test</span><span style="color:#ABB2BF;">.sg1 </span><span style="color:#C678DD;">without</span><span style="color:#C678DD;"> null</span><span style="color:#ABB2BF;"> all(d,  </span><span style="color:#56B6C2;">tan</span><span style="color:#ABB2BF;">(s1), t) </span><span style="color:#C678DD;">limit</span><span style="color:#D19A66;"> 5</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="带函数查询" tabindex="-1"><a class="header-anchor" href="#带函数查询"><span>带函数查询</span></a></h4><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> s1, </span><span style="color:#56B6C2;">sin</span><span style="color:#ABB2BF;">(s2) + </span><span style="color:#56B6C2;">cos</span><span style="color:#ABB2BF;">(s2), </span><span style="color:#56B6C2;">cos</span><span style="color:#ABB2BF;">(</span><span style="color:#56B6C2;">sin</span><span style="color:#ABB2BF;">(s2 + s4) + s2) </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">test</span><span style="color:#ABB2BF;">.sg1 </span><span style="color:#C678DD;">without</span><span style="color:#C678DD;"> null</span><span style="color:#ABB2BF;"> all (</span><span style="color:#56B6C2;">sin</span><span style="color:#ABB2BF;">(s2) + </span><span style="color:#56B6C2;">cos</span><span style="color:#ABB2BF;">(s2), </span><span style="color:#56B6C2;">cos</span><span style="color:#ABB2BF;">(</span><span style="color:#56B6C2;">sin</span><span style="color:#ABB2BF;">(s2 + s4) + s2))</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="按设备对齐查询" tabindex="-1"><a class="header-anchor" href="#按设备对齐查询"><span>按设备对齐查询</span></a></h4><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#56B6C2;"> last_value</span><span style="color:#ABB2BF;">(*) </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">test</span><span style="color:#ABB2BF;">.sg1 </span><span style="color:#C678DD;">group by</span><span style="color:#ABB2BF;">([</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">,</span><span style="color:#D19A66;">10</span><span style="color:#ABB2BF;">), 2ms) </span><span style="color:#C678DD;">without</span><span style="color:#C678DD;"> null</span><span style="color:#ABB2BF;"> all(</span><span style="color:#56B6C2;">last_value</span><span style="color:#ABB2BF;">(s2), </span><span style="color:#56B6C2;">last_value</span><span style="color:#ABB2BF;">(s3)) align </span><span style="color:#C678DD;">by</span><span style="color:#ABB2BF;"> device</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>结果示例如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>IoTDB&gt; select last_value(*) from root.sg1.* group by([1,10), 2ms) without null all(last_value(s2), last_value(s3)) align by device</span></span>
<span class="line"><span>+-----------------------------+-----------+--------------+--------------+--------------+</span></span>
<span class="line"><span>|                         Time|     Device|last_value(s1)|last_value(s2)|last_value(s3)|</span></span>
<span class="line"><span>+-----------------------------+-----------+--------------+--------------+--------------+</span></span>
<span class="line"><span>|1970-01-01T08:00:00.001+08:00|root.sg1.d1|           1.0|           2.0|          null|</span></span>
<span class="line"><span>|1970-01-01T08:00:00.003+08:00|root.sg1.d1|           3.0|           4.0|          null|</span></span>
<span class="line"><span>|1970-01-01T08:00:00.001+08:00|root.sg1.d2|           1.0|           1.0|           1.0|</span></span>
<span class="line"><span>+-----------------------------+-----------+--------------+--------------+--------------+</span></span>
<span class="line"><span>Total line number = 3</span></span>
<span class="line"><span>It costs 0.007s</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>指定的列名是与输出结果的列名对应，目前<code>without null</code>子句不支持指定某设备的某列，会报错:<code>The without null columns don&#39;t match the columns queried.If has alias, please use the alias.</code> 比如下面这个查询例子,指定last_value(root.sg1.d1.s3)为null的行进行过滤，目前是不支持的。</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#56B6C2;"> last_value</span><span style="color:#ABB2BF;">(*) </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">test</span><span style="color:#ABB2BF;">.sg1 </span><span style="color:#C678DD;">group by</span><span style="color:#ABB2BF;">([</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">,</span><span style="color:#D19A66;">10</span><span style="color:#ABB2BF;">), 2ms) </span><span style="color:#C678DD;">without</span><span style="color:#C678DD;"> null</span><span style="color:#ABB2BF;"> all(</span><span style="color:#56B6C2;">last_value</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">\`root.sg1.d1.s3\`</span><span style="color:#ABB2BF;">)) align </span><span style="color:#C678DD;">by</span><span style="color:#ABB2BF;"> device</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="聚合查询" tabindex="-1"><a class="header-anchor" href="#聚合查询"><span>聚合查询</span></a></h4><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#56B6C2;"> avg</span><span style="color:#ABB2BF;">(s4), </span><span style="color:#56B6C2;">sum</span><span style="color:#ABB2BF;">(s2) </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">test</span><span style="color:#ABB2BF;">.sg1 </span><span style="color:#C678DD;">group by</span><span style="color:#ABB2BF;"> ([</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">,</span><span style="color:#D19A66;">10</span><span style="color:#ABB2BF;">), 2ms) </span><span style="color:#C678DD;">without</span><span style="color:#C678DD;"> null</span><span style="color:#ABB2BF;"> all(</span><span style="color:#56B6C2;">sum</span><span style="color:#ABB2BF;">(s2))</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#56B6C2;"> avg</span><span style="color:#ABB2BF;">(s4), </span><span style="color:#56B6C2;">sum</span><span style="color:#ABB2BF;">(s2), </span><span style="color:#56B6C2;">count</span><span style="color:#ABB2BF;">(s3) </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">test</span><span style="color:#ABB2BF;">.sg1 </span><span style="color:#C678DD;">group by</span><span style="color:#ABB2BF;"> ([</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">,</span><span style="color:#D19A66;">10</span><span style="color:#ABB2BF;">), 2ms) </span><span style="color:#C678DD;">without</span><span style="color:#C678DD;"> null</span><span style="color:#ABB2BF;"> all(</span><span style="color:#56B6C2;">avg</span><span style="color:#ABB2BF;">(s4), </span><span style="color:#56B6C2;">sum</span><span style="color:#ABB2BF;">(s2))</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="指定全路径列名" tabindex="-1"><a class="header-anchor" href="#指定全路径列名"><span>指定全路径列名</span></a></h4><p>假设下面的查询输出的结果列为&quot;root.test.sg1.s2&quot;, &quot;root.test.sg1.s3&quot;, &quot;root.test.sg2.s2&quot;, &quot;root.test.sg2.s3&quot;四个，可以使用全路径名指定相应列进行过滤，比如下面的例子：</p><ol><li>指定<code>root.test.sg1.s2</code>, <code>root.test.sg2.s3</code>两列都为null则过滤</li></ol><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> s2, s3 </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">test</span><span style="color:#ABB2BF;">.** </span><span style="color:#C678DD;">without</span><span style="color:#C678DD;"> null</span><span style="color:#ABB2BF;"> all(</span><span style="color:#98C379;">\`root.test.sg1.s2\`</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">\`root.test.sg2.s3\`</span><span style="color:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="2"><li>指定<code>root.test.sg1.s2</code>, <code>root.test.sg1.s3</code>, <code>root.test.sg2.s3</code>三列都为null则过滤</li></ol><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> s2, s3 </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">test</span><span style="color:#ABB2BF;">.** </span><span style="color:#C678DD;">without</span><span style="color:#C678DD;"> null</span><span style="color:#ABB2BF;"> all(</span><span style="color:#98C379;">\`root.test.sg1.s2\`</span><span style="color:#ABB2BF;">, s3)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="对齐序列查询" tabindex="-1"><a class="header-anchor" href="#对齐序列查询"><span>对齐序列查询</span></a></h4><ol><li>可以指定<code>without null</code> 子句后的列名为对齐序列列名</li></ol><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">CREATE</span><span style="color:#ABB2BF;"> ALIGNED TIMESERIES </span><span style="color:#D19A66;">root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">test</span><span style="color:#ABB2BF;">.sg3(s5 INT32, s6 </span><span style="color:#C678DD;">BOOLEAN</span><span style="color:#ABB2BF;">, s7 DOUBLE, s8 INT32)</span></span>
<span class="line"><span style="color:#C678DD;">select</span><span style="color:#D19A66;"> sg1</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">s1</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">sg1</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">s2</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">sg2</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">s3</span><span style="color:#ABB2BF;">, sg3.* </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">test</span><span style="color:#C678DD;"> without</span><span style="color:#C678DD;"> null</span><span style="color:#ABB2BF;"> all (</span><span style="color:#D19A66;">sg3</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">s5</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">sg3</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">s6</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">sg2</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">s3</span><span style="color:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,58)]))}const c=l(n,[["render",t],["__file","Without-Null.html.vue"]]),i=JSON.parse('{"path":"/zh/UserGuide/V0.13.x/Query-Data/Without-Null.html","title":"","lang":"zh-CN","frontmatter":{"description":"结果集空值过滤 在实际应用中，用户可能希望对查询的结果集中某些存在空值的行进行过滤。在 IoTDB 中，可以使用 WITHOUT NULL 子句对结果集中的空值进行过滤，有两种过滤策略：WITHOUT NULL ANY和WITHOUT NULL ALL。不仅如此， WITHOUT NULL 子句支持指定相应列进行过滤。 WITHOUT NULL ANY...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V0.13.x/Query-Data/Without-Null.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Query-Data/Without-Null.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"结果集空值过滤 在实际应用中，用户可能希望对查询的结果集中某些存在空值的行进行过滤。在 IoTDB 中，可以使用 WITHOUT NULL 子句对结果集中的空值进行过滤，有两种过滤策略：WITHOUT NULL ANY和WITHOUT NULL ALL。不仅如此， WITHOUT NULL 子句支持指定相应列进行过滤。 WITHOUT NULL ANY..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"结果集空值过滤","slug":"结果集空值过滤","link":"#结果集空值过滤","children":[{"level":3,"title":"不指定列","slug":"不指定列","link":"#不指定列","children":[]},{"level":3,"title":"指定列","slug":"指定列","link":"#指定列","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","username":"CritasWang","email":"critas@outlook.com","commits":1,"url":"https://github.com/CritasWang"}]},"readingTime":{"minutes":4.98,"words":1493},"filePathRelative":"zh/UserGuide/V0.13.x/Query-Data/Without-Null.md","localizedDate":"2023年7月10日","autoDesc":true}');export{c as comp,i as data};
