import{_ as t,c as s,b as n,o as a}from"./app-CRFlbjpx.js";const o={};function l(i,e){return a(),s("div",null,e[0]||(e[0]=[n(`<h2 id="selector-functions" tabindex="-1"><a class="header-anchor" href="#selector-functions"><span>Selector Functions</span></a></h2><p>Currently, IoTDB supports the following selector functions:</p><table><thead><tr><th>Function Name</th><th>Allowed Input Series Data Types</th><th>Required Attributes</th><th>Output Series Data Type</th><th>Description</th></tr></thead><tbody><tr><td>TOP_K</td><td>INT32 / INT64 / FLOAT / DOUBLE / TEXT</td><td><code>k</code>: the maximum number of selected data points, must be greater than 0 and less than or equal to 1000</td><td>Same type as the input series</td><td>Returns <code>k</code> data points with the largest values in a time series.</td></tr><tr><td>BOTTOM_K</td><td>INT32 / INT64 / FLOAT / DOUBLE / TEXT</td><td><code>k</code>: the maximum number of selected data points, must be greater than 0 and less than or equal to 1000</td><td>Same type as the input series</td><td>Returns <code>k</code> data points with the smallest values in a time series.</td></tr></tbody></table><p>Example：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> s1<span class="token punctuation">,</span> top_k<span class="token punctuation">(</span>s1<span class="token punctuation">,</span> <span class="token string">&#39;k&#39;</span><span class="token operator">=</span><span class="token string">&#39;2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> bottom_k<span class="token punctuation">(</span>s1<span class="token punctuation">,</span> <span class="token string">&#39;k&#39;</span><span class="token operator">=</span><span class="token string">&#39;2&#39;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d2 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&gt;</span> <span class="token number">2020</span><span class="token operator">-</span><span class="token number">12</span><span class="token operator">-</span><span class="token number">10</span>T20:<span class="token number">36</span>:<span class="token number">15.530</span><span class="token operator">+</span><span class="token number">08</span>:<span class="token number">00</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Result：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+--------------------+------------------------------+---------------------------------+</span>
<span class="line">|                         Time|      root.sg1.d2.s1|top_k(root.sg1.d2.s1, &quot;k&quot;=&quot;2&quot;)|bottom_k(root.sg1.d2.s1, &quot;k&quot;=&quot;2&quot;)|</span>
<span class="line">+-----------------------------+--------------------+------------------------------+---------------------------------+</span>
<span class="line">|2020-12-10T20:36:15.531+08:00| 1531604122307244742|           1531604122307244742|                             null|</span>
<span class="line">|2020-12-10T20:36:15.532+08:00|-7426070874923281101|                          null|                             null|</span>
<span class="line">|2020-12-10T20:36:15.533+08:00|-7162825364312197604|          -7162825364312197604|                             null|</span>
<span class="line">|2020-12-10T20:36:15.534+08:00|-8581625725655917595|                          null|             -8581625725655917595|</span>
<span class="line">|2020-12-10T20:36:15.535+08:00|-7667364751255535391|                          null|             -7667364751255535391|</span>
<span class="line">+-----------------------------+--------------------+------------------------------+---------------------------------+</span>
<span class="line">Total line number = 5</span>
<span class="line">It costs 0.006s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7)]))}const r=t(o,[["render",l],["__file","Selection.html.vue"]]),c=JSON.parse('{"path":"/UserGuide/V1.1.x/Operators-Functions/Selection.html","title":"","lang":"en-US","frontmatter":{"description":"Selector Functions Currently, IoTDB supports the following selector functions: Example： Result：","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/Operators-Functions/Selection.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.1.x/Operators-Functions/Selection.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"Selector Functions Currently, IoTDB supports the following selector functions: Example： Result："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Selector Functions","slug":"selector-functions","link":"#selector-functions","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.08,"words":324},"filePathRelative":"UserGuide/V1.1.x/Operators-Functions/Selection.md","localizedDate":"July 10, 2023","autoDesc":true}');export{r as comp,c as data};
