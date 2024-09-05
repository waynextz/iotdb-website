import{_ as n,c as a,b as e,o as t}from"./app-DLxi_e3x.js";const l={};function i(o,s){return t(),a("div",null,s[0]||(s[0]=[e(`<h2 id="数据类型转换" tabindex="-1"><a class="header-anchor" href="#数据类型转换"><span>数据类型转换</span></a></h2><h3 id="cast" tabindex="-1"><a class="header-anchor" href="#cast"><span>CAST</span></a></h3><h4 id="函数简介" tabindex="-1"><a class="header-anchor" href="#函数简介"><span>函数简介</span></a></h4><p>当前IoTDB支持6种数据类型，其中包括INT32、INT64、FLOAT、DOUBLE、BOOLEAN以及TEXT。当我们对数据进行查询或者计算时可能需要进行数据类型的转换， 比如说将TEXT转换为INT32，或者提高数据精度，比如说将FLOAT转换为DOUBLE。所以，IoTDB支持使用cast函数对数据类型进行转换。</p><table><thead><tr><th>函数名</th><th>必要的属性参数</th><th>输出序列类型</th><th>功能类型</th></tr></thead><tbody><tr><td>CAST</td><td><code>type</code>:输出的数据点的类型，只能是 INT32 / INT64 / FLOAT / DOUBLE / BOOLEAN / TEXT</td><td>由输入属性参数<code>type</code>决定</td><td>将数据转换为<code>type</code>参数指定的类型。</td></tr></tbody></table><h4 id="类型转换说明" tabindex="-1"><a class="header-anchor" href="#类型转换说明"><span>类型转换说明</span></a></h4><p>1.当INT32、INT64类型的值不为0时，FLOAT与DOUBLE类型的值不为0.0时，TEXT类型不为空字符串或者&quot;false&quot;时，转换为BOOLEAN类型时值为true，否则为false。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show timeseries root.sg.d1.*;</span>
<span class="line">+-------------+-----+-------------+--------+--------+-----------+----+----------+</span>
<span class="line">|   timeseries|alias|     database|dataType|encoding|compression|tags|attributes|</span>
<span class="line">+-------------+-----+-------------+--------+--------+-----------+----+----------+</span>
<span class="line">|root.sg.d1.s3| null|      root.sg|   FLOAT|     RLE|     SNAPPY|null|      null|</span>
<span class="line">|root.sg.d1.s4| null|      root.sg|  DOUBLE|     RLE|     SNAPPY|null|      null|</span>
<span class="line">|root.sg.d1.s5| null|      root.sg|    TEXT|   PLAIN|     SNAPPY|null|      null|</span>
<span class="line">|root.sg.d1.s6| null|      root.sg| BOOLEAN|     RLE|     SNAPPY|null|      null|</span>
<span class="line">|root.sg.d1.s1| null|      root.sg|   INT32|     RLE|     SNAPPY|null|      null|</span>
<span class="line">|root.sg.d1.s2| null|      root.sg|   INT64|     RLE|     SNAPPY|null|      null|</span>
<span class="line">+-------------+-----+-------------+--------+--------+-----------+----+----------+</span>
<span class="line">Total line number = 6</span>
<span class="line">It costs 0.006s</span>
<span class="line">IoTDB&gt; select * from root.sg.d1;</span>
<span class="line">+-----------------------------+-------------+-------------+-------------+-------------+-------------+-------------+</span>
<span class="line">|                         Time|root.sg.d1.s3|root.sg.d1.s4|root.sg.d1.s5|root.sg.d1.s6|root.sg.d1.s1|root.sg.d1.s2|</span>
<span class="line">+-----------------------------+-------------+-------------+-------------+-------------+-------------+-------------+</span>
<span class="line">|1970-01-01T08:00:00.001+08:00|          1.1|          1.1|         test|        false|            1|            1|</span>
<span class="line">|1970-01-01T08:00:00.002+08:00|         -2.2|         -2.2|        false|         true|           -2|           -2|</span>
<span class="line">|1970-01-01T08:00:00.003+08:00|          0.0|          0.0|         true|         true|            0|            0|</span>
<span class="line">+-----------------------------+-------------+-------------+-------------+-------------+-------------+-------------+</span>
<span class="line">Total line number = 3</span>
<span class="line">It costs 0.009s</span>
<span class="line">IoTDB&gt; select cast(s1, &#39;type&#39;=&#39;BOOLEAN&#39;), cast(s2, &#39;type&#39;=&#39;BOOLEAN&#39;), cast(s3, &#39;type&#39;=&#39;BOOLEAN&#39;), cast(s4, &#39;type&#39;=&#39;BOOLEAN&#39;), cast(s5, &#39;type&#39;=&#39;BOOLEAN&#39;) from root.sg.d1;</span>
<span class="line">+-----------------------------+-------------------------------------+-------------------------------------+-------------------------------------+-------------------------------------+-------------------------------------+</span>
<span class="line">|                         Time|cast(root.sg.d1.s1, &quot;type&quot;=&quot;BOOLEAN&quot;)|cast(root.sg.d1.s2, &quot;type&quot;=&quot;BOOLEAN&quot;)|cast(root.sg.d1.s3, &quot;type&quot;=&quot;BOOLEAN&quot;)|cast(root.sg.d1.s4, &quot;type&quot;=&quot;BOOLEAN&quot;)|cast(root.sg.d1.s5, &quot;type&quot;=&quot;BOOLEAN&quot;)|</span>
<span class="line">+-----------------------------+-------------------------------------+-------------------------------------+-------------------------------------+-------------------------------------+-------------------------------------+</span>
<span class="line">|1970-01-01T08:00:00.001+08:00|                                 true|                                 true|                                 true|                                 true|                                 true|</span>
<span class="line">|1970-01-01T08:00:00.002+08:00|                                 true|                                 true|                                 true|                                 true|                                false|</span>
<span class="line">|1970-01-01T08:00:00.003+08:00|                                false|                                false|                                false|                                false|                                 true|</span>
<span class="line">+-----------------------------+-------------------------------------+-------------------------------------+-------------------------------------+-------------------------------------+-------------------------------------+</span>
<span class="line">Total line number = 3</span>
<span class="line">It costs 0.012s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.当BOOLEAN类型的值为true时，转换为INT32与INT64类型的值为1，转换为FLOAT或者DOUBLE类型时值为1.0，转换为TEXT类型时值为&quot;true&quot;。当BOOLEAN类型的值为false时，转换为INT32与INT64类型的值为0，转换为FLOAT或者DOUBLE类型时值为0.0，转换为TEXT类型时值为&quot;false&quot;。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; select cast(s6, &#39;type&#39;=&#39;INT32&#39;), cast(s6, &#39;type&#39;=&#39;INT64&#39;), cast(s6, &#39;type&#39;=&#39;FLOAT&#39;), cast(s6, &#39;type&#39;=&#39;DOUBLE&#39;), cast(s6, &#39;type&#39;=&#39;TEXT&#39;) from root.sg.d1;</span>
<span class="line">+-----------------------------+-----------------------------------+-----------------------------------+-----------------------------------+------------------------------------+----------------------------------+</span>
<span class="line">|                         Time|cast(root.sg.d1.s6, &quot;type&quot;=&quot;INT32&quot;)|cast(root.sg.d1.s6, &quot;type&quot;=&quot;INT64&quot;)|cast(root.sg.d1.s6, &quot;type&quot;=&quot;FLOAT&quot;)|cast(root.sg.d1.s6, &quot;type&quot;=&quot;DOUBLE&quot;)|cast(root.sg.d1.s6, &quot;type&quot;=&quot;TEXT&quot;)|</span>
<span class="line">+-----------------------------+-----------------------------------+-----------------------------------+-----------------------------------+------------------------------------+----------------------------------+</span>
<span class="line">|1970-01-01T08:00:00.001+08:00|                                  0|                                  0|                                0.0|                                 0.0|                             false|</span>
<span class="line">|1970-01-01T08:00:00.002+08:00|                                  1|                                  1|                                1.0|                                 1.0|                              true|</span>
<span class="line">|1970-01-01T08:00:00.003+08:00|                                  1|                                  1|                                1.0|                                 1.0|                              true|</span>
<span class="line">+-----------------------------+-----------------------------------+-----------------------------------+-----------------------------------+------------------------------------+----------------------------------+</span>
<span class="line">Total line number = 3</span>
<span class="line">It costs 0.016s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.当TEXT类型转换为INT32、INT64、FLOAT类型时，会先将TEXT类型的数据转换为DOUBLE类型，然后再转换为对应的类型，此时可能会存在损失精度的问题。如果无法转换的话则直接跳过。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; select cast(s5, &#39;type&#39;=&#39;INT32&#39;), cast(s5, &#39;type&#39;=&#39;INT64&#39;), cast(s5, &#39;type&#39;=&#39;FLOAT&#39;) from root.sg.d1;</span>
<span class="line">+----+-----------------------------------+-----------------------------------+-----------------------------------+</span>
<span class="line">|Time|cast(root.sg.d1.s5, &quot;type&quot;=&quot;INT32&quot;)|cast(root.sg.d1.s5, &quot;type&quot;=&quot;INT64&quot;)|cast(root.sg.d1.s5, &quot;type&quot;=&quot;FLOAT&quot;)|</span>
<span class="line">+----+-----------------------------------+-----------------------------------+-----------------------------------+</span>
<span class="line">+----+-----------------------------------+-----------------------------------+-----------------------------------+</span>
<span class="line">Empty set.</span>
<span class="line">It costs 0.009s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h4><p>测试数据：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; select text from root.test;</span>
<span class="line">+-----------------------------+--------------+</span>
<span class="line">|                         Time|root.test.text|</span>
<span class="line">+-----------------------------+--------------+</span>
<span class="line">|1970-01-01T08:00:00.001+08:00|           1.1|</span>
<span class="line">|1970-01-01T08:00:00.002+08:00|             1|</span>
<span class="line">|1970-01-01T08:00:00.003+08:00|   hello world|</span>
<span class="line">|1970-01-01T08:00:00.004+08:00|         false|</span>
<span class="line">+-----------------------------+--------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL语句：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> cast<span class="token punctuation">(</span><span class="token keyword">text</span><span class="token punctuation">,</span> <span class="token string">&#39;type&#39;</span><span class="token operator">=</span><span class="token string">&#39;BOOLEAN&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> cast<span class="token punctuation">(</span><span class="token keyword">text</span><span class="token punctuation">,</span> <span class="token string">&#39;type&#39;</span><span class="token operator">=</span><span class="token string">&#39;INT32&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> cast<span class="token punctuation">(</span><span class="token keyword">text</span><span class="token punctuation">,</span> <span class="token string">&#39;type&#39;</span><span class="token operator">=</span><span class="token string">&#39;INT64&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> cast<span class="token punctuation">(</span><span class="token keyword">text</span><span class="token punctuation">,</span> <span class="token string">&#39;type&#39;</span><span class="token operator">=</span><span class="token string">&#39;FLOAT&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> cast<span class="token punctuation">(</span><span class="token keyword">text</span><span class="token punctuation">,</span> <span class="token string">&#39;type&#39;</span><span class="token operator">=</span><span class="token string">&#39;DOUBLE&#39;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>结果：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+--------------------------------------+------------------------------------+------------------------------------+------------------------------------+-------------------------------------+</span>
<span class="line">|                         Time|cast(root.test.text, &quot;type&quot;=&quot;BOOLEAN&quot;)|cast(root.test.text, &quot;type&quot;=&quot;INT32&quot;)|cast(root.test.text, &quot;type&quot;=&quot;INT64&quot;)|cast(root.test.text, &quot;type&quot;=&quot;FLOAT&quot;)|cast(root.test.text, &quot;type&quot;=&quot;DOUBLE&quot;)|</span>
<span class="line">+-----------------------------+--------------------------------------+------------------------------------+------------------------------------+------------------------------------+-------------------------------------+</span>
<span class="line">|1970-01-01T08:00:00.001+08:00|                                  true|                                   1|                                   1|                                 1.1|                                  1.1|</span>
<span class="line">|1970-01-01T08:00:00.002+08:00|                                  true|                                   1|                                   1|                                 1.0|                                  1.0|</span>
<span class="line">|1970-01-01T08:00:00.003+08:00|                                  true|                                null|                                null|                                null|                                 null|</span>
<span class="line">|1970-01-01T08:00:00.004+08:00|                                 false|                                null|                                null|                                null|                                 null|</span>
<span class="line">+-----------------------------+--------------------------------------+------------------------------------+------------------------------------+------------------------------------+-------------------------------------+</span>
<span class="line">Total line number = 4</span>
<span class="line">It costs 0.078s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19)]))}const c=n(l,[["render",i],["__file","Conversion.html.vue"]]),r=JSON.parse('{"path":"/zh/UserGuide/V1.1.x/Operators-Functions/Conversion.html","title":"","lang":"zh-CN","frontmatter":{"description":"数据类型转换 CAST 函数简介 当前IoTDB支持6种数据类型，其中包括INT32、INT64、FLOAT、DOUBLE、BOOLEAN以及TEXT。当我们对数据进行查询或者计算时可能需要进行数据类型的转换， 比如说将TEXT转换为INT32，或者提高数据精度，比如说将FLOAT转换为DOUBLE。所以，IoTDB支持使用cast函数对数据类型进行转...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.1.x/Operators-Functions/Conversion.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/Operators-Functions/Conversion.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"数据类型转换 CAST 函数简介 当前IoTDB支持6种数据类型，其中包括INT32、INT64、FLOAT、DOUBLE、BOOLEAN以及TEXT。当我们对数据进行查询或者计算时可能需要进行数据类型的转换， 比如说将TEXT转换为INT32，或者提高数据精度，比如说将FLOAT转换为DOUBLE。所以，IoTDB支持使用cast函数对数据类型进行转..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"数据类型转换","slug":"数据类型转换","link":"#数据类型转换","children":[{"level":3,"title":"CAST","slug":"cast","link":"#cast","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":3.3,"words":989},"filePathRelative":"zh/UserGuide/V1.1.x/Operators-Functions/Conversion.md","localizedDate":"2023年7月10日","autoDesc":true}');export{c as comp,r as data};
