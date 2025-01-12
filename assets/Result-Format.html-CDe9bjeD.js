import{_ as e,c as n,b as a,o as l}from"./app-CNiZnG3t.js";const t={};function i(p,s){return l(),n("div",null,s[0]||(s[0]=[a(`<h2 id="查询结果集格式" tabindex="-1"><a class="header-anchor" href="#查询结果集格式"><span>查询结果集格式</span></a></h2><p>在 IoTDB 中，查询结果集默认按照时间对齐，同时支持另外两种结果返回形式：</p><ul><li>设备时间对齐 <code>align by device</code></li><li>时序不对齐 <code>disable align</code></li></ul><p>注意：对齐方式子句只能用于查询语句句尾。</p><h3 id="按设备对齐" tabindex="-1"><a class="header-anchor" href="#按设备对齐"><span>按设备对齐</span></a></h3><p>在 <code>align by device</code> 对齐方式下，设备名会单独作为一列出现。如果 select 子句中有 <code>n</code> 列，最终结果就会有该 <code>n + 2</code> 列（时间列和设备名字列）。</p><p>SQL 形如：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> * </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">ln</span><span style="color:#ABB2BF;">.** </span><span style="color:#C678DD;">where</span><span style="color:#C678DD;"> time</span><span style="color:#56B6C2;"> &lt;=</span><span style="color:#D19A66;"> 2017</span><span style="color:#ABB2BF;">-</span><span style="color:#D19A66;">11</span><span style="color:#ABB2BF;">-01T00:</span><span style="color:#D19A66;">01</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;"> align </span><span style="color:#C678DD;">by</span><span style="color:#ABB2BF;"> device</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>结果如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>+-----------------------------+-----------------+-----------+------+--------+</span></span>
<span class="line"><span>|                         Time|           Device|temperature|status|hardware|</span></span>
<span class="line"><span>+-----------------------------+-----------------+-----------+------+--------+</span></span>
<span class="line"><span>|2017-11-01T00:00:00.000+08:00|root.ln.wf01.wt01|      25.96|  true|    null|</span></span>
<span class="line"><span>|2017-11-01T00:01:00.000+08:00|root.ln.wf01.wt01|      24.36|  true|    null|</span></span>
<span class="line"><span>|1970-01-01T08:00:00.001+08:00|root.ln.wf02.wt02|       null|  true|      v1|</span></span>
<span class="line"><span>|1970-01-01T08:00:00.002+08:00|root.ln.wf02.wt02|       null| false|      v2|</span></span>
<span class="line"><span>|2017-11-01T00:00:00.000+08:00|root.ln.wf02.wt02|       null|  true|      v2|</span></span>
<span class="line"><span>|2017-11-01T00:01:00.000+08:00|root.ln.wf02.wt02|       null|  true|      v2|</span></span>
<span class="line"><span>+-----------------------------+-----------------+-----------+------+--------+</span></span>
<span class="line"><span>Total line number = 6</span></span>
<span class="line"><span>It costs 0.012s</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="时序不对齐" tabindex="-1"><a class="header-anchor" href="#时序不对齐"><span>时序不对齐</span></a></h3><p>在 <code>disable align</code> 对齐方式下，如果 select 子句中有 <code>n</code> 列，最终结果就会有该 <code>n * 2</code> 列（时间序列的时间和值）。</p><p>注：时序不对齐方式不能用于聚合查询、空值填充，但可使用 Limit 和 Offset 语句进行分页。</p><p>SQL 形如：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> * </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">ln</span><span style="color:#ABB2BF;">.** </span><span style="color:#C678DD;">where</span><span style="color:#C678DD;"> time</span><span style="color:#56B6C2;"> &lt;=</span><span style="color:#D19A66;"> 2017</span><span style="color:#ABB2BF;">-</span><span style="color:#D19A66;">11</span><span style="color:#ABB2BF;">-01T00:</span><span style="color:#D19A66;">01</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">00</span><span style="color:#C678DD;"> disable</span><span style="color:#ABB2BF;"> align</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>结果如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>+-----------------------------+--------------------------+-----------------------------+------------------------+-----------------------------+-----------------------------+-----------------------------+------------------------+</span></span>
<span class="line"><span>|                         Time|root.ln.wf02.wt02.hardware|                         Time|root.ln.wf02.wt02.status|                         Time|root.ln.wf01.wt01.temperature|                         Time|root.ln.wf01.wt01.status|</span></span>
<span class="line"><span>+-----------------------------+--------------------------+-----------------------------+------------------------+-----------------------------+-----------------------------+-----------------------------+------------------------+</span></span>
<span class="line"><span>|1970-01-01T08:00:00.001+08:00|                        v1|1970-01-01T08:00:00.001+08:00|                    true|2017-11-01T00:00:00.000+08:00|                        25.96|2017-11-01T00:00:00.000+08:00|                    true|</span></span>
<span class="line"><span>|1970-01-01T08:00:00.002+08:00|                        v2|1970-01-01T08:00:00.002+08:00|                   false|2017-11-01T00:01:00.000+08:00|                        24.36|2017-11-01T00:01:00.000+08:00|                    true|</span></span>
<span class="line"><span>|2017-11-01T00:00:00.000+08:00|                        v2|2017-11-01T00:00:00.000+08:00|                    true|                         null|                         null|                         null|                    null|</span></span>
<span class="line"><span>|2017-11-01T00:01:00.000+08:00|                        v2|2017-11-01T00:01:00.000+08:00|                    true|                         null|                         null|                         null|                    null|</span></span>
<span class="line"><span>+-----------------------------+--------------------------+-----------------------------+------------------------+-----------------------------+-----------------------------+-----------------------------+------------------------+</span></span>
<span class="line"><span>Total line number = 4</span></span>
<span class="line"><span>It costs 0.018s</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17)]))}const r=e(t,[["render",i],["__file","Result-Format.html.vue"]]),c=JSON.parse('{"path":"/zh/UserGuide/V0.13.x/Query-Data/Result-Format.html","title":"","lang":"zh-CN","frontmatter":{"description":"查询结果集格式 在 IoTDB 中，查询结果集默认按照时间对齐，同时支持另外两种结果返回形式： 设备时间对齐 align by device 时序不对齐 disable align 注意：对齐方式子句只能用于查询语句句尾。 按设备对齐 在 align by device 对齐方式下，设备名会单独作为一列出现。如果 select 子句中有 n 列，最终结...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V0.13.x/Query-Data/Result-Format.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Query-Data/Result-Format.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"查询结果集格式 在 IoTDB 中，查询结果集默认按照时间对齐，同时支持另外两种结果返回形式： 设备时间对齐 align by device 时序不对齐 disable align 注意：对齐方式子句只能用于查询语句句尾。 按设备对齐 在 align by device 对齐方式下，设备名会单独作为一列出现。如果 select 子句中有 n 列，最终结..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"查询结果集格式","slug":"查询结果集格式","link":"#查询结果集格式","children":[{"level":3,"title":"按设备对齐","slug":"按设备对齐","link":"#按设备对齐","children":[]},{"level":3,"title":"时序不对齐","slug":"时序不对齐","link":"#时序不对齐","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","username":"CritasWang","email":"critas@outlook.com","commits":1,"url":"https://github.com/CritasWang"}]},"readingTime":{"minutes":1.84,"words":553},"filePathRelative":"zh/UserGuide/V0.13.x/Query-Data/Result-Format.md","localizedDate":"2023年7月10日","autoDesc":true}');export{r as comp,c as data};
