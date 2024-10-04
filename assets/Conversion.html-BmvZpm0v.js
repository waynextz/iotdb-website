import{_ as n,c as e,b as t,o as a}from"./app-W3EENNaa.js";const l={};function i(o,s){return a(),e("div",null,s[0]||(s[0]=[t(`<h1 id="data-type-conversion-function" tabindex="-1"><a class="header-anchor" href="#data-type-conversion-function"><span>Data Type Conversion Function</span></a></h1><p>The IoTDB currently supports 6 data types, including INT32, INT64 ,FLOAT, DOUBLE, BOOLEAN, TEXT. When we query or evaluate data, we may need to convert data types, such as TEXT to INT32, or improve the accuracy of the data, such as FLOAT to DOUBLE. Therefore, IoTDB supports the use of cast functions to convert data types.</p><table><thead><tr><th>Function Name</th><th>Required Attributes</th><th>Output Series Data Type</th><th>Series Data Type Description</th></tr></thead><tbody><tr><td>CAST</td><td><code>type</code>: the type of the output data point, it can only be INT32 / INT64 / FLOAT / DOUBLE / BOOLEAN / TEXT</td><td>Determined by the required attribute <code>type</code></td><td>Converts data to the type specified by the <code>type</code> argument.</td></tr></tbody></table><h4 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h4><ol><li>The value of type BOOLEAN is <code>true</code>, when data is converted to BOOLEAN if INT32 and INT64 are not 0, FLOAT and DOUBLE are not 0.0, TEXT is not empty string or &quot;false&quot;, otherwise <code>false</code>.</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show timeseries root.sg.d1.*;</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>The value of type INT32, INT64, FLOAT, DOUBLE are 1 or 1.0 and TEXT is &quot;true&quot;, when BOOLEAN data is true, otherwise 0, 0.0 or &quot;false&quot;.</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; select cast(s6, &#39;type&#39;=&#39;INT32&#39;), cast(s6, &#39;type&#39;=&#39;INT64&#39;), cast(s6, &#39;type&#39;=&#39;FLOAT&#39;), cast(s6, &#39;type&#39;=&#39;DOUBLE&#39;), cast(s6, &#39;type&#39;=&#39;TEXT&#39;) from root.sg.d1;</span>
<span class="line">+-----------------------------+-----------------------------------+-----------------------------------+-----------------------------------+------------------------------------+----------------------------------+</span>
<span class="line">|                         Time|cast(root.sg.d1.s6, &quot;type&quot;=&quot;INT32&quot;)|cast(root.sg.d1.s6, &quot;type&quot;=&quot;INT64&quot;)|cast(root.sg.d1.s6, &quot;type&quot;=&quot;FLOAT&quot;)|cast(root.sg.d1.s6, &quot;type&quot;=&quot;DOUBLE&quot;)|cast(root.sg.d1.s6, &quot;type&quot;=&quot;TEXT&quot;)|</span>
<span class="line">+-----------------------------+-----------------------------------+-----------------------------------+-----------------------------------+------------------------------------+----------------------------------+</span>
<span class="line">|1970-01-01T08:00:00.001+08:00|                                  0|                                  0|                                0.0|                                 0.0|                             false|</span>
<span class="line">|1970-01-01T08:00:00.002+08:00|                                  1|                                  1|                                1.0|                                 1.0|                              true|</span>
<span class="line">|1970-01-01T08:00:00.003+08:00|                                  1|                                  1|                                1.0|                                 1.0|                              true|</span>
<span class="line">+-----------------------------+-----------------------------------+-----------------------------------+-----------------------------------+------------------------------------+----------------------------------+</span>
<span class="line">Total line number = 3</span>
<span class="line">It costs 0.016s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>When TEXT is converted to INT32, INT64, or FLOAT, the TEXT is first converted to DOUBLE and then to the corresponding type, which may cause loss of precision. It will skip directly if the data can not be converted.</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; select cast(s5, &#39;type&#39;=&#39;INT32&#39;), cast(s5, &#39;type&#39;=&#39;INT64&#39;), cast(s5, &#39;type&#39;=&#39;FLOAT&#39;) from root.sg.d1;</span>
<span class="line">+----+-----------------------------------+-----------------------------------+-----------------------------------+</span>
<span class="line">|Time|cast(root.sg.d1.s5, &quot;type&quot;=&quot;INT32&quot;)|cast(root.sg.d1.s5, &quot;type&quot;=&quot;INT64&quot;)|cast(root.sg.d1.s5, &quot;type&quot;=&quot;FLOAT&quot;)|</span>
<span class="line">+----+-----------------------------------+-----------------------------------+-----------------------------------+</span>
<span class="line">+----+-----------------------------------+-----------------------------------+-----------------------------------+</span>
<span class="line">Empty set.</span>
<span class="line">It costs 0.005s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax"><span>Syntax</span></a></h4><p>Example data:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; select text from root.test;</span>
<span class="line">+-----------------------------+--------------+</span>
<span class="line">|                         Time|root.test.text|</span>
<span class="line">+-----------------------------+--------------+</span>
<span class="line">|1970-01-01T08:00:00.001+08:00|           1.1|</span>
<span class="line">|1970-01-01T08:00:00.002+08:00|             1|</span>
<span class="line">|1970-01-01T08:00:00.003+08:00|   hello world|</span>
<span class="line">|1970-01-01T08:00:00.004+08:00|         false|</span>
<span class="line">+-----------------------------+--------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> cast<span class="token punctuation">(</span><span class="token keyword">text</span><span class="token punctuation">,</span> <span class="token string">&#39;type&#39;</span><span class="token operator">=</span><span class="token string">&#39;BOOLEAN&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> cast<span class="token punctuation">(</span><span class="token keyword">text</span><span class="token punctuation">,</span> <span class="token string">&#39;type&#39;</span><span class="token operator">=</span><span class="token string">&#39;INT32&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> cast<span class="token punctuation">(</span><span class="token keyword">text</span><span class="token punctuation">,</span> <span class="token string">&#39;type&#39;</span><span class="token operator">=</span><span class="token string">&#39;INT64&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> cast<span class="token punctuation">(</span><span class="token keyword">text</span><span class="token punctuation">,</span> <span class="token string">&#39;type&#39;</span><span class="token operator">=</span><span class="token string">&#39;FLOAT&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> cast<span class="token punctuation">(</span><span class="token keyword">text</span><span class="token punctuation">,</span> <span class="token string">&#39;type&#39;</span><span class="token operator">=</span><span class="token string">&#39;DOUBLE&#39;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Result:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+--------------------------------------+------------------------------------+------------------------------------+------------------------------------+-------------------------------------+</span>
<span class="line">|                         Time|cast(root.test.text, &quot;type&quot;=&quot;BOOLEAN&quot;)|cast(root.test.text, &quot;type&quot;=&quot;INT32&quot;)|cast(root.test.text, &quot;type&quot;=&quot;INT64&quot;)|cast(root.test.text, &quot;type&quot;=&quot;FLOAT&quot;)|cast(root.test.text, &quot;type&quot;=&quot;DOUBLE&quot;)|</span>
<span class="line">+-----------------------------+--------------------------------------+------------------------------------+------------------------------------+------------------------------------+-------------------------------------+</span>
<span class="line">|1970-01-01T08:00:00.001+08:00|                                  true|                                   1|                                   1|                                 1.1|                                  1.1|</span>
<span class="line">|1970-01-01T08:00:00.002+08:00|                                  true|                                   1|                                   1|                                 1.0|                                  1.0|</span>
<span class="line">|1970-01-01T08:00:00.003+08:00|                                  true|                                null|                                null|                                null|                                 null|</span>
<span class="line">|1970-01-01T08:00:00.004+08:00|                                 false|                                null|                                null|                                null|                                 null|</span>
<span class="line">+-----------------------------+--------------------------------------+------------------------------------+------------------------------------+------------------------------------+-------------------------------------+</span>
<span class="line">Total line number = 4</span>
<span class="line">It costs 0.078s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17)]))}const r=n(l,[["render",i],["__file","Conversion.html.vue"]]),c=JSON.parse('{"path":"/UserGuide/V1.1.x/Operators-Functions/Conversion.html","title":"Data Type Conversion Function","lang":"en-US","frontmatter":{"description":"Data Type Conversion Function The IoTDB currently supports 6 data types, including INT32, INT64 ,FLOAT, DOUBLE, BOOLEAN, TEXT. When we query or evaluate data, we may need to con...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/Operators-Functions/Conversion.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.1.x/Operators-Functions/Conversion.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Data Type Conversion Function"}],["meta",{"property":"og:description","content":"Data Type Conversion Function The IoTDB currently supports 6 data types, including INT32, INT64 ,FLOAT, DOUBLE, BOOLEAN, TEXT. When we query or evaluate data, we may need to con..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Data Type Conversion Function\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":2.7,"words":811},"filePathRelative":"UserGuide/V1.1.x/Operators-Functions/Conversion.md","localizedDate":"July 10, 2023","autoDesc":true}');export{r as comp,c as data};
