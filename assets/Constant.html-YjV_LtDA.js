import{_ as t,c as n,b as s,o as a}from"./app-W3EENNaa.js";const i={};function o(r,e){return a(),n("div",null,e[0]||(e[0]=[s(`<h1 id="constant-timeseries-generating-functions" tabindex="-1"><a class="header-anchor" href="#constant-timeseries-generating-functions"><span>Constant Timeseries Generating Functions</span></a></h1><p>The constant timeseries generating function is used to generate a timeseries in which the values of all data points are the same.</p><p>The constant timeseries generating function accepts one or more timeseries inputs, and the timestamp set of the output data points is the union of the timestamp sets of the input timeseries.</p><p>Currently, IoTDB supports the following constant timeseries generating functions:</p><table><thead><tr><th>Function Name</th><th>Required Attributes</th><th>Output Series Data Type</th><th>Description</th></tr></thead><tbody><tr><td>CONST</td><td><code>value</code>: the value of the output data point <br><code>type</code>: the type of the output data point, it can only be INT32 / INT64 / FLOAT / DOUBLE / BOOLEAN / TEXT</td><td>Determined by the required attribute <code>type</code></td><td>Output the user-specified constant timeseries according to the attributes <code>value</code> and <code>type</code>.</td></tr><tr><td>PI</td><td>None</td><td>DOUBLE</td><td>Data point value: a <code>double</code> value of <code>π</code>, the ratio of the circumference of a circle to its diameter, which is equals to <code>Math.PI</code> in the <em>Java Standard Library</em>.</td></tr><tr><td>E</td><td>None</td><td>DOUBLE</td><td>Data point value: a <code>double</code> value of <code>e</code>, the base of the natural logarithms, which is equals to <code>Math.E</code> in the <em>Java Standard Library</em>.</td></tr></tbody></table><p>Example:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> s1<span class="token punctuation">,</span> s2<span class="token punctuation">,</span> const<span class="token punctuation">(</span>s1<span class="token punctuation">,</span> <span class="token string">&#39;value&#39;</span><span class="token operator">=</span><span class="token string">&#39;1024&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;type&#39;</span><span class="token operator">=</span><span class="token string">&#39;INT64&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> pi<span class="token punctuation">(</span>s2<span class="token punctuation">)</span><span class="token punctuation">,</span> e<span class="token punctuation">(</span>s1<span class="token punctuation">,</span> s2<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1<span class="token punctuation">;</span> </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Result:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">select s1, s2, const(s1, &#39;value&#39;=&#39;1024&#39;, &#39;type&#39;=&#39;INT64&#39;), pi(s2), e(s1, s2) from root.sg1.d1; </span>
<span class="line">+-----------------------------+--------------+--------------+-----------------------------------------------------+------------------+---------------------------------+</span>
<span class="line">|                         Time|root.sg1.d1.s1|root.sg1.d1.s2|const(root.sg1.d1.s1, &quot;value&quot;=&quot;1024&quot;, &quot;type&quot;=&quot;INT64&quot;)|pi(root.sg1.d1.s2)|e(root.sg1.d1.s1, root.sg1.d1.s2)|</span>
<span class="line">+-----------------------------+--------------+--------------+-----------------------------------------------------+------------------+---------------------------------+</span>
<span class="line">|1970-01-01T08:00:00.000+08:00|           0.0|           0.0|                                                 1024| 3.141592653589793|                2.718281828459045|</span>
<span class="line">|1970-01-01T08:00:00.001+08:00|           1.0|          null|                                                 1024|              null|                2.718281828459045|</span>
<span class="line">|1970-01-01T08:00:00.002+08:00|           2.0|          null|                                                 1024|              null|                2.718281828459045|</span>
<span class="line">|1970-01-01T08:00:00.003+08:00|          null|           3.0|                                                 null| 3.141592653589793|                2.718281828459045|</span>
<span class="line">|1970-01-01T08:00:00.004+08:00|          null|           4.0|                                                 null| 3.141592653589793|                2.718281828459045|</span>
<span class="line">+-----------------------------+--------------+--------------+-----------------------------------------------------+------------------+---------------------------------+</span>
<span class="line">Total line number = 5</span>
<span class="line">It costs 0.005s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9)]))}const l=t(i,[["render",o],["__file","Constant.html.vue"]]),p=JSON.parse('{"path":"/UserGuide/V1.1.x/Operators-Functions/Constant.html","title":"Constant Timeseries Generating Functions","lang":"en-US","frontmatter":{"description":"Constant Timeseries Generating Functions The constant timeseries generating function is used to generate a timeseries in which the values of all data points are the same. The co...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/Operators-Functions/Constant.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.1.x/Operators-Functions/Constant.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Constant Timeseries Generating Functions"}],["meta",{"property":"og:description","content":"Constant Timeseries Generating Functions The constant timeseries generating function is used to generate a timeseries in which the values of all data points are the same. The co..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Constant Timeseries Generating Functions\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.4,"words":419},"filePathRelative":"UserGuide/V1.1.x/Operators-Functions/Constant.md","localizedDate":"July 10, 2023","autoDesc":true}');export{l as comp,p as data};
