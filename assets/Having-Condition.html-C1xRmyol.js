import{_ as n,c as a,b as e,o as t}from"./app-DLxi_e3x.js";const p={};function o(l,s){return t(),a("div",null,s[0]||(s[0]=[e(`<h1 id="聚合结果过滤" tabindex="-1"><a class="header-anchor" href="#聚合结果过滤"><span>聚合结果过滤</span></a></h1><p>如果想对聚合查询的结果进行过滤，可以在 <code>GROUP BY</code> 子句之后使用 <code>HAVING</code> 子句。</p><p><strong>注意：</strong></p><ol><li><p><code>HAVING</code>子句中的过滤条件必须由聚合值构成，原始序列不能单独出现。</p><p>下列使用方式是不正确的：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token keyword">group</span> <span class="token keyword">by</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">1</span>ms<span class="token punctuation">)</span> <span class="token keyword">having</span> <span class="token function">sum</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span> <span class="token operator">&gt;</span> s1</span>
<span class="line"><span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token keyword">group</span> <span class="token keyword">by</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">1</span>ms<span class="token punctuation">)</span> <span class="token keyword">having</span> s1 <span class="token operator">&gt;</span> <span class="token number">1</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>对<code>GROUP BY LEVEL</code>结果进行过滤时，<code>SELECT</code>和<code>HAVING</code>中出现的PATH只能有一级。</p><p>下列使用方式是不正确的：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token keyword">group</span> <span class="token keyword">by</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">1</span>ms<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">level</span><span class="token operator">=</span><span class="token number">1</span> <span class="token keyword">having</span> <span class="token function">sum</span><span class="token punctuation">(</span>d1<span class="token punctuation">.</span>s1<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1</span></span>
<span class="line"><span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span>d1<span class="token punctuation">.</span>s1<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token keyword">group</span> <span class="token keyword">by</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">1</span>ms<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">level</span><span class="token operator">=</span><span class="token number">1</span> <span class="token keyword">having</span> <span class="token function">sum</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p><strong>SQL 示例：</strong></p><ul><li><p><strong>示例 1：</strong></p><p>对于以下聚合结果进行过滤：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+---------------------+---------------------+</span>
<span class="line">|                         Time|count(root.test.*.s1)|count(root.test.*.s2)|</span>
<span class="line">+-----------------------------+---------------------+---------------------+</span>
<span class="line">|1970-01-01T08:00:00.001+08:00|                    4|                    4|</span>
<span class="line">|1970-01-01T08:00:00.003+08:00|                    1|                    0|</span>
<span class="line">|1970-01-01T08:00:00.005+08:00|                    2|                    4|</span>
<span class="line">|1970-01-01T08:00:00.007+08:00|                    3|                    2|</span>
<span class="line">|1970-01-01T08:00:00.009+08:00|                    4|                    4|</span>
<span class="line">+-----------------------------+---------------------+---------------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"> <span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token keyword">group</span> <span class="token keyword">by</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">2</span>ms<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">level</span><span class="token operator">=</span><span class="token number">1</span> <span class="token keyword">having</span> <span class="token function">count</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>执行结果如下：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+---------------------+</span>
<span class="line">|                         Time|count(root.test.*.s1)|</span>
<span class="line">+-----------------------------+---------------------+</span>
<span class="line">|1970-01-01T08:00:00.001+08:00|                    4|</span>
<span class="line">|1970-01-01T08:00:00.005+08:00|                    2|</span>
<span class="line">|1970-01-01T08:00:00.009+08:00|                    4|</span>
<span class="line">+-----------------------------+---------------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>示例 2：</strong></p><p>对于以下聚合结果进行过滤：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+-------------+---------+---------+</span>
<span class="line">|                         Time|       Device|count(s1)|count(s2)|</span>
<span class="line">+-----------------------------+-------------+---------+---------+</span>
<span class="line">|1970-01-01T08:00:00.001+08:00|root.test.sg1|        1|        2|</span>
<span class="line">|1970-01-01T08:00:00.003+08:00|root.test.sg1|        1|        0|</span>
<span class="line">|1970-01-01T08:00:00.005+08:00|root.test.sg1|        1|        2|</span>
<span class="line">|1970-01-01T08:00:00.007+08:00|root.test.sg1|        2|        1|</span>
<span class="line">|1970-01-01T08:00:00.009+08:00|root.test.sg1|        2|        2|</span>
<span class="line">|1970-01-01T08:00:00.001+08:00|root.test.sg2|        2|        2|</span>
<span class="line">|1970-01-01T08:00:00.003+08:00|root.test.sg2|        0|        0|</span>
<span class="line">|1970-01-01T08:00:00.005+08:00|root.test.sg2|        1|        2|</span>
<span class="line">|1970-01-01T08:00:00.007+08:00|root.test.sg2|        1|        1|</span>
<span class="line">|1970-01-01T08:00:00.009+08:00|root.test.sg2|        2|        2|</span>
<span class="line">+-----------------------------+-------------+---------+---------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"> <span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">count</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token keyword">group</span> <span class="token keyword">by</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">2</span>ms<span class="token punctuation">)</span> <span class="token keyword">having</span> <span class="token function">count</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1</span> align <span class="token keyword">by</span> device<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>执行结果如下：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+-------------+---------+---------+</span>
<span class="line">|                         Time|       Device|count(s1)|count(s2)|</span>
<span class="line">+-----------------------------+-------------+---------+---------+</span>
<span class="line">|1970-01-01T08:00:00.001+08:00|root.test.sg1|        1|        2|</span>
<span class="line">|1970-01-01T08:00:00.005+08:00|root.test.sg1|        1|        2|</span>
<span class="line">|1970-01-01T08:00:00.009+08:00|root.test.sg1|        2|        2|</span>
<span class="line">|1970-01-01T08:00:00.001+08:00|root.test.sg2|        2|        2|</span>
<span class="line">|1970-01-01T08:00:00.005+08:00|root.test.sg2|        1|        2|</span>
<span class="line">|1970-01-01T08:00:00.009+08:00|root.test.sg2|        2|        2|</span>
<span class="line">+-----------------------------+-------------+---------+---------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,6)]))}const i=n(p,[["render",o],["__file","Having-Condition.html.vue"]]),r=JSON.parse('{"path":"/zh/UserGuide/V1.0.x/Query-Data/Having-Condition.html","title":"聚合结果过滤","lang":"zh-CN","frontmatter":{"description":"聚合结果过滤 如果想对聚合查询的结果进行过滤，可以在 GROUP BY 子句之后使用 HAVING 子句。 注意： HAVING子句中的过滤条件必须由聚合值构成，原始序列不能单独出现。 下列使用方式是不正确的： 对GROUP BY LEVEL结果进行过滤时，SELECT和HAVING中出现的PATH只能有一级。 下列使用方式是不正确的： SQL 示例：...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.0.x/Query-Data/Having-Condition.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/Query-Data/Having-Condition.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"聚合结果过滤"}],["meta",{"property":"og:description","content":"聚合结果过滤 如果想对聚合查询的结果进行过滤，可以在 GROUP BY 子句之后使用 HAVING 子句。 注意： HAVING子句中的过滤条件必须由聚合值构成，原始序列不能单独出现。 下列使用方式是不正确的： 对GROUP BY LEVEL结果进行过滤时，SELECT和HAVING中出现的PATH只能有一级。 下列使用方式是不正确的： SQL 示例：..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"聚合结果过滤\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":2.07,"words":621},"filePathRelative":"zh/UserGuide/V1.0.x/Query-Data/Having-Condition.md","localizedDate":"2023年7月10日","autoDesc":true}');export{i as comp,r as data};
