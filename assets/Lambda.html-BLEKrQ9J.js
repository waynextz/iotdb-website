import{_ as n,c as e,b as a,o as l}from"./app-C-0rb--l.js";const t={};function p(r,s){return l(),e("div",null,s[0]||(s[0]=[a(`<h1 id="lambda-expression" tabindex="-1"><a class="header-anchor" href="#lambda-expression"><span>Lambda Expression</span></a></h1><h2 id="jexl-function" tabindex="-1"><a class="header-anchor" href="#jexl-function"><span>JEXL Function</span></a></h2><p>Java Expression Language (JEXL) is an expression language engine. We use JEXL to extend UDFs, which are implemented on the command line with simple lambda expressions. See the link for <a href="https://commons.apache.org/proper/commons-jexl/apidocs/org/apache/commons/jexl3/package-summary.html#customization" target="_blank" rel="noopener noreferrer">operators supported in jexl lambda expressions</a>.</p><table><thead><tr><th>Function Name</th><th>Allowed Input Series Data Types</th><th>Required Attributes</th><th>Output Series Data Type</th><th>Series Data Type Description</th></tr></thead><tbody><tr><td>JEXL</td><td>INT32 / INT64 / FLOAT / DOUBLE / TEXT / BOOLEAN</td><td><code>expr</code> is a lambda expression that supports standard one or multi arguments in the form <code>x -&gt; {...}</code> or <code>(x, y, z) -&gt; {...}</code>, e.g. <code> x -&gt; {x * 2}</code>, <code>(x, y, z) -&gt; {x + y * z}</code></td><td>INT32 / INT64 / FLOAT / DOUBLE / TEXT / BOOLEAN</td><td>Returns the input time series transformed by a lambda expression</td></tr></tbody></table><h4 id="demonstrate" tabindex="-1"><a class="header-anchor" href="#demonstrate"><span>Demonstrate</span></a></h4><p>Example data: <code>root.ln.wf01.wt01.temperature</code>, <code>root.ln.wf01.wt01.st</code>, <code>root.ln.wf01.wt01.str</code> a total of <code>11</code> data.</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>IoTDB&gt; select * from root.ln.wf01.wt01;</span></span>
<span class="line"><span>+-----------------------------+---------------------+--------------------+-----------------------------+</span></span>
<span class="line"><span>|                         Time|root.ln.wf01.wt01.str|root.ln.wf01.wt01.st|root.ln.wf01.wt01.temperature|</span></span>
<span class="line"><span>+-----------------------------+---------------------+--------------------+-----------------------------+</span></span>
<span class="line"><span>|1970-01-01T08:00:00.000+08:00|                  str|                10.0|                          0.0|</span></span>
<span class="line"><span>|1970-01-01T08:00:00.001+08:00|                  str|                20.0|                          1.0|</span></span>
<span class="line"><span>|1970-01-01T08:00:00.002+08:00|                  str|                30.0|                          2.0|</span></span>
<span class="line"><span>|1970-01-01T08:00:00.003+08:00|                  str|                40.0|                          3.0|</span></span>
<span class="line"><span>|1970-01-01T08:00:00.004+08:00|                  str|                50.0|                          4.0|</span></span>
<span class="line"><span>|1970-01-01T08:00:00.005+08:00|                  str|                60.0|                          5.0|</span></span>
<span class="line"><span>|1970-01-01T08:00:00.006+08:00|                  str|                70.0|                          6.0|</span></span>
<span class="line"><span>|1970-01-01T08:00:00.007+08:00|                  str|                80.0|                          7.0|</span></span>
<span class="line"><span>|1970-01-01T08:00:00.008+08:00|                  str|                90.0|                          8.0|</span></span>
<span class="line"><span>|1970-01-01T08:00:00.009+08:00|                  str|               100.0|                          9.0|</span></span>
<span class="line"><span>|1970-01-01T08:00:00.010+08:00|                  str|               110.0|                         10.0|</span></span>
<span class="line"><span>+-----------------------------+---------------------+--------------------+-----------------------------+</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Sql:</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> jexl(temperature, </span><span style="color:#98C379;">&#39;expr&#39;</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&#39;x -&gt; {x + x}&#39;</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">as</span><span style="color:#ABB2BF;"> jexl1, jexl(temperature, </span><span style="color:#98C379;">&#39;expr&#39;</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&#39;x -&gt; {x * 3}&#39;</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">as</span><span style="color:#ABB2BF;"> jexl2, jexl(temperature, </span><span style="color:#98C379;">&#39;expr&#39;</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&#39;x -&gt; {x * x}&#39;</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">as</span><span style="color:#ABB2BF;"> jexl3, jexl(temperature, </span><span style="color:#98C379;">&#39;expr&#39;</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&#39;x -&gt; {multiply(x, 100)}&#39;</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">as</span><span style="color:#ABB2BF;"> jexl4, jexl(temperature, st, </span><span style="color:#98C379;">&#39;expr&#39;</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&#39;(x, y) -&gt; {x + y}&#39;</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">as</span><span style="color:#ABB2BF;"> jexl5, jexl(temperature, st, str, </span><span style="color:#98C379;">&#39;expr&#39;</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&#39;(x, y, z) -&gt; {x + y + z}&#39;</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">as</span><span style="color:#ABB2BF;"> jexl6 </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">ln</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wf01</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wt01</span><span style="color:#ABB2BF;">;</span><span style="color:#98C379;">\`\`\`</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Result:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>+-----------------------------+-----+-----+-----+------+-----+--------+</span></span>
<span class="line"><span>|                         Time|jexl1|jexl2|jexl3| jexl4|jexl5|   jexl6|</span></span>
<span class="line"><span>+-----------------------------+-----+-----+-----+------+-----+--------+</span></span>
<span class="line"><span>|1970-01-01T08:00:00.000+08:00|  0.0|  0.0|  0.0|   0.0| 10.0| 10.0str|</span></span>
<span class="line"><span>|1970-01-01T08:00:00.001+08:00|  2.0|  3.0|  1.0| 100.0| 21.0| 21.0str|</span></span>
<span class="line"><span>|1970-01-01T08:00:00.002+08:00|  4.0|  6.0|  4.0| 200.0| 32.0| 32.0str|</span></span>
<span class="line"><span>|1970-01-01T08:00:00.003+08:00|  6.0|  9.0|  9.0| 300.0| 43.0| 43.0str|</span></span>
<span class="line"><span>|1970-01-01T08:00:00.004+08:00|  8.0| 12.0| 16.0| 400.0| 54.0| 54.0str|</span></span>
<span class="line"><span>|1970-01-01T08:00:00.005+08:00| 10.0| 15.0| 25.0| 500.0| 65.0| 65.0str|</span></span>
<span class="line"><span>|1970-01-01T08:00:00.006+08:00| 12.0| 18.0| 36.0| 600.0| 76.0| 76.0str|</span></span>
<span class="line"><span>|1970-01-01T08:00:00.007+08:00| 14.0| 21.0| 49.0| 700.0| 87.0| 87.0str|</span></span>
<span class="line"><span>|1970-01-01T08:00:00.008+08:00| 16.0| 24.0| 64.0| 800.0| 98.0| 98.0str|</span></span>
<span class="line"><span>|1970-01-01T08:00:00.009+08:00| 18.0| 27.0| 81.0| 900.0|109.0|109.0str|</span></span>
<span class="line"><span>|1970-01-01T08:00:00.010+08:00| 20.0| 30.0|100.0|1000.0|120.0|120.0str|</span></span>
<span class="line"><span>+-----------------------------+-----+-----+-----+------+-----+--------+</span></span>
<span class="line"><span>Total line number = 11</span></span>
<span class="line"><span>It costs 0.118s</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11)]))}const i=n(t,[["render",p],["__file","Lambda.html.vue"]]),c=JSON.parse('{"path":"/UserGuide/V1.1.x/Operators-Functions/Lambda.html","title":"Lambda Expression","lang":"en-US","frontmatter":{"description":"Lambda Expression JEXL Function Java Expression Language (JEXL) is an expression language engine. We use JEXL to extend UDFs, which are implemented on the command line with simp...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/Operators-Functions/Lambda.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.1.x/Operators-Functions/Lambda.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Lambda Expression"}],["meta",{"property":"og:description","content":"Lambda Expression JEXL Function Java Expression Language (JEXL) is an expression language engine. We use JEXL to extend UDFs, which are implemented on the command line with simp..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Lambda Expression\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"JEXL Function","slug":"jexl-function","link":"#jexl-function","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","username":"CritasWang","email":"critas@outlook.com","commits":1,"url":"https://github.com/CritasWang"}]},"readingTime":{"minutes":1.97,"words":590},"filePathRelative":"UserGuide/V1.1.x/Operators-Functions/Lambda.md","localizedDate":"July 10, 2023","autoDesc":true}');export{i as comp,c as data};
