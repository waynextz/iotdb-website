import{_ as e,c as o,b as n,d as p,e as a,a as t,f as r,r as c,o as B}from"./app-CNiZnG3t.js";const i={};function y(A,s){const l=c("RouteLink");return B(),o("div",null,[s[3]||(s[3]=n('<h1 id="having-子句" tabindex="-1"><a class="header-anchor" href="#having-子句"><span>HAVING 子句</span></a></h1><h2 id="_1-语法概览" tabindex="-1"><a class="header-anchor" href="#_1-语法概览"><span>1 语法概览</span></a></h2><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">HAVING</span><span style="color:#ABB2BF;"> booleanExpression</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_1-1-having-子句" tabindex="-1"><a class="header-anchor" href="#_1-1-having-子句"><span>1.1 HAVING 子句</span></a></h3><p>用于在数据分组聚合(GROUP BY)完成后，对聚合结果进行筛选。</p><h4 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h4><ul><li>就语法而言，<code>HAVING</code>子句与<code>WHERE</code>子句相同，WHERE子句在分组聚合之前对数据进行过滤，HAVING子句是对分组聚合后的结果进行过滤。</li></ul><h2 id="_2-示例数据" tabindex="-1"><a class="header-anchor" href="#_2-示例数据"><span>2 示例数据</span></a></h2>',8)),p("p",null,[s[1]||(s[1]=a("在")),t(l,{to:"/zh/UserGuide/V2.0.1/Table/Basic-Concept/Sample-Data.html"},{default:r(()=>s[0]||(s[0]=[a("示例数据页面")])),_:1}),s[2]||(s[2]=a("中，包含了用于构建表结构和插入数据的SQL语句，下载并在IoTDB CLI中执行这些语句，即可将数据导入IoTDB，您可以使用这些数据来测试和执行示例中的SQL语句，并获得相应的结果。"))]),s[4]||(s[4]=n(`<h4 id="示例-1-过滤计数低于特定值的设备" tabindex="-1"><a class="header-anchor" href="#示例-1-过滤计数低于特定值的设备"><span>示例 1：过滤计数低于特定值的设备</span></a></h4><p>查询将计算 <code>table1</code> 表中每个 <code>device_id</code> 的条目数，并过滤掉那些计数低于 5 的设备。</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">SELECT</span><span style="color:#ABB2BF;"> device_id, </span><span style="color:#56B6C2;">COUNT</span><span style="color:#ABB2BF;">(*)</span></span>
<span class="line"><span style="color:#C678DD;">  FROM</span><span style="color:#ABB2BF;"> table1</span></span>
<span class="line"><span style="color:#C678DD;">  GROUP BY</span><span style="color:#ABB2BF;"> device_id</span></span>
<span class="line"><span style="color:#C678DD;">  HAVING</span><span style="color:#56B6C2;"> COUNT</span><span style="color:#ABB2BF;">(*) </span><span style="color:#56B6C2;">&gt;=</span><span style="color:#D19A66;"> 5</span><span style="color:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果如下：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#ABB2BF;">+</span><span style="color:#7F848E;font-style:italic;">---------+-----+</span></span>
<span class="line"><span style="color:#ABB2BF;">|device_id|_col1|</span></span>
<span class="line"><span style="color:#ABB2BF;">+</span><span style="color:#7F848E;font-style:italic;">---------+-----+</span></span>
<span class="line"><span style="color:#ABB2BF;">|      </span><span style="color:#D19A66;">100</span><span style="color:#ABB2BF;">|    </span><span style="color:#D19A66;">8</span><span style="color:#ABB2BF;">|</span></span>
<span class="line"><span style="color:#ABB2BF;">|      </span><span style="color:#D19A66;">101</span><span style="color:#ABB2BF;">|   </span><span style="color:#D19A66;">10</span><span style="color:#ABB2BF;">|</span></span>
<span class="line"><span style="color:#ABB2BF;">+</span><span style="color:#7F848E;font-style:italic;">---------+-----+</span></span>
<span class="line"><span style="color:#ABB2BF;">Total </span><span style="color:#C678DD;">line</span><span style="color:#C678DD;"> number</span><span style="color:#56B6C2;"> =</span><span style="color:#D19A66;"> 2</span></span>
<span class="line"><span style="color:#ABB2BF;">It costs </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">.063s</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="示例-2-计算每个设备的每小时平均温度并过滤" tabindex="-1"><a class="header-anchor" href="#示例-2-计算每个设备的每小时平均温度并过滤"><span>示例 2：计算每个设备的每小时平均温度并过滤</span></a></h3><p>查询将计算 <code>table1</code> 表中每个设备每小时的平均温度，并过滤掉那些平均温度低于 27.2 的设备。</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">SELECT</span><span style="color:#ABB2BF;"> date_bin(1h, </span><span style="color:#C678DD;">time</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">as</span><span style="color:#ABB2BF;"> hour_time, device_id, </span><span style="color:#56B6C2;">AVG</span><span style="color:#ABB2BF;">(temperature) </span><span style="color:#C678DD;">as</span><span style="color:#ABB2BF;"> avg_temp</span></span>
<span class="line"><span style="color:#C678DD;">  FROM</span><span style="color:#ABB2BF;"> table1</span></span>
<span class="line"><span style="color:#C678DD;">  GROUP BY</span><span style="color:#ABB2BF;"> date_bin(1h, </span><span style="color:#C678DD;">time</span><span style="color:#ABB2BF;">), device_id</span></span>
<span class="line"><span style="color:#C678DD;">  HAVING</span><span style="color:#56B6C2;"> AVG</span><span style="color:#ABB2BF;">(temperature) </span><span style="color:#56B6C2;">&gt;=</span><span style="color:#D19A66;"> 85</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果如下：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#ABB2BF;">+</span><span style="color:#7F848E;font-style:italic;">-----------------------------+---------+--------+</span></span>
<span class="line"><span style="color:#ABB2BF;">|                    hour_time|device_id|avg_temp|</span></span>
<span class="line"><span style="color:#ABB2BF;">+</span><span style="color:#7F848E;font-style:italic;">-----------------------------+---------+--------+</span></span>
<span class="line"><span style="color:#ABB2BF;">|</span><span style="color:#D19A66;">2024</span><span style="color:#ABB2BF;">-</span><span style="color:#D19A66;">11</span><span style="color:#ABB2BF;">-29T18:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">000</span><span style="color:#ABB2BF;">+</span><span style="color:#D19A66;">08</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">|      </span><span style="color:#D19A66;">100</span><span style="color:#ABB2BF;">|    </span><span style="color:#D19A66;">90</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">|</span></span>
<span class="line"><span style="color:#ABB2BF;">|</span><span style="color:#D19A66;">2024</span><span style="color:#ABB2BF;">-</span><span style="color:#D19A66;">11</span><span style="color:#ABB2BF;">-28T08:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">000</span><span style="color:#ABB2BF;">+</span><span style="color:#D19A66;">08</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">|      </span><span style="color:#D19A66;">100</span><span style="color:#ABB2BF;">|    </span><span style="color:#D19A66;">85</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">|</span></span>
<span class="line"><span style="color:#ABB2BF;">|</span><span style="color:#D19A66;">2024</span><span style="color:#ABB2BF;">-</span><span style="color:#D19A66;">11</span><span style="color:#ABB2BF;">-28T10:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">000</span><span style="color:#ABB2BF;">+</span><span style="color:#D19A66;">08</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">|      </span><span style="color:#D19A66;">100</span><span style="color:#ABB2BF;">|    </span><span style="color:#D19A66;">85</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">|</span></span>
<span class="line"><span style="color:#ABB2BF;">|</span><span style="color:#D19A66;">2024</span><span style="color:#ABB2BF;">-</span><span style="color:#D19A66;">11</span><span style="color:#ABB2BF;">-28T11:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">000</span><span style="color:#ABB2BF;">+</span><span style="color:#D19A66;">08</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">|      </span><span style="color:#D19A66;">100</span><span style="color:#ABB2BF;">|    </span><span style="color:#D19A66;">88</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">|</span></span>
<span class="line"><span style="color:#ABB2BF;">|</span><span style="color:#D19A66;">2024</span><span style="color:#ABB2BF;">-</span><span style="color:#D19A66;">11</span><span style="color:#ABB2BF;">-26T13:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">000</span><span style="color:#ABB2BF;">+</span><span style="color:#D19A66;">08</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">|      </span><span style="color:#D19A66;">100</span><span style="color:#ABB2BF;">|    </span><span style="color:#D19A66;">90</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">|</span></span>
<span class="line"><span style="color:#ABB2BF;">|</span><span style="color:#D19A66;">2024</span><span style="color:#ABB2BF;">-</span><span style="color:#D19A66;">11</span><span style="color:#ABB2BF;">-30T09:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">000</span><span style="color:#ABB2BF;">+</span><span style="color:#D19A66;">08</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">|      </span><span style="color:#D19A66;">101</span><span style="color:#ABB2BF;">|    </span><span style="color:#D19A66;">90</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">|</span></span>
<span class="line"><span style="color:#ABB2BF;">|</span><span style="color:#D19A66;">2024</span><span style="color:#ABB2BF;">-</span><span style="color:#D19A66;">11</span><span style="color:#ABB2BF;">-30T14:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">000</span><span style="color:#ABB2BF;">+</span><span style="color:#D19A66;">08</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">|      </span><span style="color:#D19A66;">101</span><span style="color:#ABB2BF;">|    </span><span style="color:#D19A66;">90</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">|</span></span>
<span class="line"><span style="color:#ABB2BF;">|</span><span style="color:#D19A66;">2024</span><span style="color:#ABB2BF;">-</span><span style="color:#D19A66;">11</span><span style="color:#ABB2BF;">-29T10:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">000</span><span style="color:#ABB2BF;">+</span><span style="color:#D19A66;">08</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">|      </span><span style="color:#D19A66;">101</span><span style="color:#ABB2BF;">|    </span><span style="color:#D19A66;">85</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">|</span></span>
<span class="line"><span style="color:#ABB2BF;">|</span><span style="color:#D19A66;">2024</span><span style="color:#ABB2BF;">-</span><span style="color:#D19A66;">11</span><span style="color:#ABB2BF;">-27T16:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">000</span><span style="color:#ABB2BF;">+</span><span style="color:#D19A66;">08</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">|      </span><span style="color:#D19A66;">101</span><span style="color:#ABB2BF;">|    </span><span style="color:#D19A66;">85</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">|</span></span>
<span class="line"><span style="color:#ABB2BF;">+</span><span style="color:#7F848E;font-style:italic;">-----------------------------+---------+--------+</span></span>
<span class="line"><span style="color:#ABB2BF;">Total </span><span style="color:#C678DD;">line</span><span style="color:#C678DD;"> number</span><span style="color:#56B6C2;"> =</span><span style="color:#D19A66;"> 9</span></span>
<span class="line"><span style="color:#ABB2BF;">It costs </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">.079s</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10))])}const F=e(i,[["render",y],["__file","Having-Clause.html.vue"]]),D=JSON.parse('{"path":"/zh/UserGuide/V2.0.1/Table/SQL-Manual/Having-Clause.html","title":"HAVING 子句","lang":"zh-CN","frontmatter":{"description":"HAVING 子句 1 语法概览 1.1 HAVING 子句 用于在数据分组聚合(GROUP BY)完成后，对聚合结果进行筛选。 注意事项 就语法而言，HAVING子句与WHERE子句相同，WHERE子句在分组聚合之前对数据进行过滤，HAVING子句是对分组聚合后的结果进行过滤。 2 示例数据 在中，包含了用于构建表结构和插入数据的SQL语句，下载并在...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V2.0.1/Table/SQL-Manual/Having-Clause.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V2.0.1/Table/SQL-Manual/Having-Clause.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"HAVING 子句"}],["meta",{"property":"og:description","content":"HAVING 子句 1 语法概览 1.1 HAVING 子句 用于在数据分组聚合(GROUP BY)完成后，对聚合结果进行筛选。 注意事项 就语法而言，HAVING子句与WHERE子句相同，WHERE子句在分组聚合之前对数据进行过滤，HAVING子句是对分组聚合后的结果进行过滤。 2 示例数据 在中，包含了用于构建表结构和插入数据的SQL语句，下载并在..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-01-03T10:29:25.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-03T10:29:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HAVING 子句\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-01-03T10:29:25.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1 语法概览","slug":"_1-语法概览","link":"#_1-语法概览","children":[{"level":3,"title":"1.1 HAVING 子句","slug":"_1-1-having-子句","link":"#_1-1-having-子句","children":[]}]},{"level":2,"title":"2 示例数据","slug":"_2-示例数据","link":"#_2-示例数据","children":[{"level":3,"title":"示例 2：计算每个设备的每小时平均温度并过滤","slug":"示例-2-计算每个设备的每小时平均温度并过滤","link":"#示例-2-计算每个设备的每小时平均温度并过滤","children":[]}]}],"git":{"createdTime":1735900165000,"updatedTime":1735900165000,"contributors":[{"name":"W1y1r","username":"W1y1r","email":"150988475+W1y1r@users.noreply.github.com","commits":1,"url":"https://github.com/W1y1r"}]},"readingTime":{"minutes":1.81,"words":544},"filePathRelative":"zh/UserGuide/V2.0.1/Table/SQL-Manual/Having-Clause.md","localizedDate":"2025年1月3日","autoDesc":true}');export{F as comp,D as data};
