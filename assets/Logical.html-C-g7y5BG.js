import{_ as e,o as t,c as a,e as o}from"./app-DxurNv9d.js";const r={},s=o(`<h1 id="logical-operators" tabindex="-1"><a class="header-anchor" href="#logical-operators"><span>Logical Operators</span></a></h1><h2 id="unary-logical-operators" tabindex="-1"><a class="header-anchor" href="#unary-logical-operators"><span>Unary Logical Operators</span></a></h2><p>Supported operator <code>!</code></p><p>Supported input data types: <code>BOOLEAN</code></p><p>Output data type: <code>BOOLEAN</code></p><p>Hint: the priority of <code>!</code> is the same as <code>-</code>. Remember to use brackets to modify priority.</p><h2 id="binary-logical-operators" tabindex="-1"><a class="header-anchor" href="#binary-logical-operators"><span>Binary Logical Operators</span></a></h2><p>Supported operators AND:<code>and</code>,<code>&amp;</code>, <code>&amp;&amp;</code>; OR:<code>or</code>,<code>|</code>,<code>||</code></p><p>Supported input data types: <code>BOOLEAN</code></p><p>Output data type: <code>BOOLEAN</code></p><p>Note: Only when the left operand and the right operand under a certain timestamp are both <code>BOOLEAN</code> type, the binary logic operation will have an output value.</p><p><strong>Example:</strong></p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> a <span class="token operator">&gt;</span> <span class="token number">10</span><span class="token punctuation">,</span> a <span class="token operator">&lt;=</span> b<span class="token punctuation">,</span> <span class="token operator">!</span><span class="token punctuation">(</span>a <span class="token operator">&lt;=</span> b<span class="token punctuation">)</span><span class="token punctuation">,</span> a <span class="token operator">&gt;</span> <span class="token number">10</span> <span class="token operator">&amp;&amp;</span> a <span class="token operator">&gt;</span> b <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行结果</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; select a, b, a &gt; 10, a &lt;= b, !(a &lt;= b), a &gt; 10 &amp;&amp; a &gt; b from root.test;
+-----------------------------+-----------+-----------+----------------+--------------------------+---------------------------+------------------------------------------------+
|                         Time|root.test.a|root.test.b|root.test.a &gt; 10|root.test.a &lt;= root.test.b|!root.test.a &lt;= root.test.b|(root.test.a &gt; 10) &amp; (root.test.a &gt; root.test.b)|
+-----------------------------+-----------+-----------+----------------+--------------------------+---------------------------+------------------------------------------------+
|1970-01-01T08:00:00.001+08:00|         23|       10.0|            true|                     false|                       true|                                            true|
|1970-01-01T08:00:00.002+08:00|         33|       21.0|            true|                     false|                       true|                                            true|
|1970-01-01T08:00:00.004+08:00|         13|       15.0|            true|                      true|                      false|                                           false|
|1970-01-01T08:00:00.005+08:00|         26|        0.0|            true|                     false|                       true|                                            true|
|1970-01-01T08:00:00.008+08:00|          1|       22.0|           false|                      true|                      false|                                           false|
|1970-01-01T08:00:00.010+08:00|         23|       12.0|            true|                     false|                       true|                                            true|
+-----------------------------+-----------+-----------+----------------+--------------------------+---------------------------+------------------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),n=[s];function p(i,l){return t(),a("div",null,n)}const d=e(r,[["render",p],["__file","Logical.html.vue"]]),u=JSON.parse('{"path":"/UserGuide/V1.0.x/Operators-Functions/Logical.html","title":"Logical Operators","lang":"en-US","frontmatter":{"description":"Logical Operators Unary Logical Operators Supported operator ! Supported input data types: BOOLEAN Output data type: BOOLEAN Hint: the priority of ! is the same as -. Remember t...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/Operators-Functions/Logical.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.0.x/Operators-Functions/Logical.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Logical Operators"}],["meta",{"property":"og:description","content":"Logical Operators Unary Logical Operators Supported operator ! Supported input data types: BOOLEAN Output data type: BOOLEAN Hint: the priority of ! is the same as -. Remember t..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Logical Operators\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Unary Logical Operators","slug":"unary-logical-operators","link":"#unary-logical-operators","children":[]},{"level":2,"title":"Binary Logical Operators","slug":"binary-logical-operators","link":"#binary-logical-operators","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.06,"words":319},"filePathRelative":"UserGuide/V1.0.x/Operators-Functions/Logical.md","localizedDate":"July 10, 2023","autoDesc":true}');export{d as comp,u as data};
