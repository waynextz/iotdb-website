import{_ as n,c as a,b as e,o as t}from"./app-CRFlbjpx.js";const p={};function o(l,s){return t(),a("div",null,s[0]||(s[0]=[e(`<h1 id="node-name-in-path" tabindex="-1"><a class="header-anchor" href="#node-name-in-path"><span>Node Name in Path</span></a></h1><p>Node name is a special identifier, it can also be wildcard <code>*</code> and <code>**</code>. When creating timeseries, node name can not be wildcard. In query statment, you can use wildcard to match one or more nodes of path.</p><h2 id="wildcard" tabindex="-1"><a class="header-anchor" href="#wildcard"><span>Wildcard</span></a></h2><p><code>*</code> represents one node. For example, <code>root.vehicle.*.sensor1</code> represents a 4-node path which is prefixed with <code>root.vehicle</code> and suffixed with <code>sensor1</code>.</p><p><code>**</code> represents (<code>*</code>)+, which is one or more nodes of <code>*</code>. For example, <code>root.vehicle.device1.**</code> represents all paths prefixed by <code>root.vehicle.device1</code> with nodes num greater than or equal to 4, like <code>root.vehicle.device1.*</code>, <code>root.vehicle.device1.*.*</code>, <code>root.vehicle.device1.*.*.*</code>, etc; <code>root.vehicle.**.sensor1</code> represents a path which is prefixed with <code>root.vehicle</code> and suffixed with <code>sensor1</code> and has at least 4 nodes.</p><p>As <code>*</code> can also be used in expressions of select clause to represent multiplication, below are examples to help you better understand the usage of <code>* </code>:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token comment"># create timeseries root.sg.\`a*b\`</span></span>
<span class="line"><span class="token keyword">create</span> timeseries root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>a*b<span class="token punctuation">\`</span></span> <span class="token keyword">with</span> datatype<span class="token operator">=</span><span class="token keyword">FLOAT</span><span class="token punctuation">,</span>encoding<span class="token operator">=</span>PLAIN<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># As described in Identifier part, a*b should be quoted.</span></span>
<span class="line"><span class="token comment"># &quot;create timeseries root.sg.a*b with datatype=FLOAT,encoding=PLAIN&quot; is wrong. </span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># create timeseries root.sg.a</span></span>
<span class="line"><span class="token keyword">create</span> timeseries root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>a <span class="token keyword">with</span> datatype<span class="token operator">=</span><span class="token keyword">FLOAT</span><span class="token punctuation">,</span>encoding<span class="token operator">=</span>PLAIN<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># create timeseries root.sg.b</span></span>
<span class="line"><span class="token keyword">create</span> timeseries root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>b <span class="token keyword">with</span> datatype<span class="token operator">=</span><span class="token keyword">FLOAT</span><span class="token punctuation">,</span>encoding<span class="token operator">=</span>PLAIN<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># query data of root.sg.\`a*b\`</span></span>
<span class="line"><span class="token keyword">select</span> <span class="token identifier"><span class="token punctuation">\`</span>a*b<span class="token punctuation">\`</span></span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg</span>
<span class="line"><span class="token comment"># Header of result dataset</span></span>
<span class="line"><span class="token operator">|</span><span class="token keyword">Time</span><span class="token operator">|</span>root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>a<span class="token operator">*</span>b<span class="token operator">|</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># multiplication of root.sg.a and root.sg.b</span></span>
<span class="line"><span class="token keyword">select</span> a<span class="token operator">*</span>b <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg</span>
<span class="line"><span class="token comment"># Header of result dataset</span></span>
<span class="line"><span class="token operator">|</span><span class="token keyword">Time</span><span class="token operator">|</span>root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>a <span class="token operator">*</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>b<span class="token operator">|</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="identifier" tabindex="-1"><a class="header-anchor" href="#identifier"><span>Identifier</span></a></h2><p>When node name is not wildcard, it is a identifier, which means the constraints on it is the same as described in Identifier part.</p><ul><li>Create timeseries statement:</li></ul><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token comment"># Node name contains special characters like \` and .,all nodes of this timeseries are: [&quot;root&quot;,&quot;sg&quot;,&quot;www.\`baidu.com&quot;]</span></span>
<span class="line"><span class="token keyword">create</span> timeseries root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>www.\`\`baidu.com<span class="token punctuation">\`</span></span><span class="token punctuation">.</span>a <span class="token keyword">with</span> datatype<span class="token operator">=</span><span class="token keyword">FLOAT</span><span class="token punctuation">,</span>encoding<span class="token operator">=</span>PLAIN<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Node name is a real number.</span></span>
<span class="line"><span class="token keyword">create</span> timeseries root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>111<span class="token punctuation">\`</span></span> <span class="token keyword">with</span> datatype<span class="token operator">=</span><span class="token keyword">FLOAT</span><span class="token punctuation">,</span>encoding<span class="token operator">=</span>PLAIN<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>After executing above statments, execute &quot;show timeseries&quot;，below is the result：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token operator">+</span><span class="token comment">---------------------------+-----+-------------+--------+--------+-----------+----+----------+</span></span>
<span class="line"><span class="token operator">|</span>                 timeseries<span class="token operator">|</span>alias<span class="token operator">|</span><span class="token keyword">database</span><span class="token operator">|</span>dataType<span class="token operator">|</span>encoding<span class="token operator">|</span>compression<span class="token operator">|</span>tags<span class="token operator">|</span>attributes<span class="token operator">|</span></span>
<span class="line"><span class="token operator">+</span><span class="token comment">---------------------------+-----+-------------+--------+--------+-----------+----+----------+</span></span>
<span class="line"><span class="token operator">|</span>            root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>111<span class="token punctuation">\`</span></span><span class="token punctuation">.</span>a<span class="token operator">|</span> <span class="token boolean">null</span><span class="token operator">|</span>      root<span class="token punctuation">.</span>sg<span class="token operator">|</span>   <span class="token keyword">FLOAT</span><span class="token operator">|</span>   PLAIN<span class="token operator">|</span>     SNAPPY<span class="token operator">|</span><span class="token boolean">null</span><span class="token operator">|</span>      <span class="token boolean">null</span><span class="token operator">|</span></span>
<span class="line"><span class="token operator">|</span>root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>www.\`\`baidu.com<span class="token punctuation">\`</span></span><span class="token punctuation">.</span>a<span class="token operator">|</span> <span class="token boolean">null</span><span class="token operator">|</span>      root<span class="token punctuation">.</span>sg<span class="token operator">|</span>   <span class="token keyword">FLOAT</span><span class="token operator">|</span>   PLAIN<span class="token operator">|</span>     SNAPPY<span class="token operator">|</span><span class="token boolean">null</span><span class="token operator">|</span>      <span class="token boolean">null</span><span class="token operator">|</span></span>
<span class="line"><span class="token operator">+</span><span class="token comment">---------------------------+-----+-------------+--------+--------+-----------+----+----------+</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Insert statment:</li></ul><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token comment"># Node name contains special characters like . and \`</span></span>
<span class="line"><span class="token keyword">insert</span> <span class="token keyword">into</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>www.\`\`baidu.com<span class="token punctuation">\`</span></span><span class="token punctuation">(</span><span class="token keyword">timestamp</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Node name is a real number.</span></span>
<span class="line"><span class="token keyword">insert</span> <span class="token keyword">into</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">(</span><span class="token keyword">timestamp</span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">\`</span>111<span class="token punctuation">\`</span></span><span class="token punctuation">)</span> <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Query statement:</li></ul><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token comment"># Node name contains special characters like . and \`</span></span>
<span class="line"><span class="token keyword">select</span> a <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>www.\`\`baidu.com<span class="token punctuation">\`</span></span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Node name is a real number.</span></span>
<span class="line"><span class="token keyword">select</span> <span class="token identifier"><span class="token punctuation">\`</span>111<span class="token punctuation">\`</span></span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Results:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token comment"># select a from root.sg.\`www.\`\`baidu.com\`</span></span>
<span class="line"><span class="token operator">+</span><span class="token comment">-----------------------------+---------------------------+</span></span>
<span class="line"><span class="token operator">|</span>                         <span class="token keyword">Time</span><span class="token operator">|</span>root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>www.\`\`baidu.com<span class="token punctuation">\`</span></span><span class="token punctuation">.</span>a<span class="token operator">|</span></span>
<span class="line"><span class="token operator">+</span><span class="token comment">-----------------------------+---------------------------+</span></span>
<span class="line"><span class="token operator">|</span><span class="token number">1970</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span>T08:<span class="token number">00</span>:<span class="token number">00.001</span><span class="token operator">+</span><span class="token number">08</span>:<span class="token number">00</span><span class="token operator">|</span>                        <span class="token number">2.0</span><span class="token operator">|</span></span>
<span class="line"><span class="token operator">+</span><span class="token comment">-----------------------------+---------------------------+</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># select \`111\` from root.sg</span></span>
<span class="line"><span class="token operator">+</span><span class="token comment">-----------------------------+-----------+</span></span>
<span class="line"><span class="token operator">|</span>                         <span class="token keyword">Time</span><span class="token operator">|</span>root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span><span class="token number">111</span><span class="token operator">|</span></span>
<span class="line"><span class="token operator">+</span><span class="token comment">-----------------------------+-----------+</span></span>
<span class="line"><span class="token operator">|</span><span class="token number">1970</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span>T08:<span class="token number">00</span>:<span class="token number">00.001</span><span class="token operator">+</span><span class="token number">08</span>:<span class="token number">00</span><span class="token operator">|</span>        <span class="token number">2.0</span><span class="token operator">|</span></span>
<span class="line"><span class="token operator">+</span><span class="token comment">-----------------------------+-----------+</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19)]))}const i=n(p,[["render",o],["__file","NodeName-In-Path.html.vue"]]),r=JSON.parse('{"path":"/UserGuide/V1.1.x/Syntax-Conventions/NodeName-In-Path.html","title":"Node Name in Path","lang":"en-US","frontmatter":{"description":"Node Name in Path Node name is a special identifier, it can also be wildcard * and **. When creating timeseries, node name can not be wildcard. In query statment, you can use wi...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/Syntax-Conventions/NodeName-In-Path.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.1.x/Syntax-Conventions/NodeName-In-Path.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Node Name in Path"}],["meta",{"property":"og:description","content":"Node Name in Path Node name is a special identifier, it can also be wildcard * and **. When creating timeseries, node name can not be wildcard. In query statment, you can use wi..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Node Name in Path\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Wildcard","slug":"wildcard","link":"#wildcard","children":[]},{"level":2,"title":"Identifier","slug":"identifier","link":"#identifier","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.87,"words":562},"filePathRelative":"UserGuide/V1.1.x/Syntax-Conventions/NodeName-In-Path.md","localizedDate":"July 10, 2023","autoDesc":true}');export{i as comp,r as data};
