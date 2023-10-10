import{_ as n,o as s,c as a,a as e,f as t}from"./app-2905306e.js";const o={},p=t(`<h1 id="aggregate-result-filtering" tabindex="-1"><a class="header-anchor" href="#aggregate-result-filtering" aria-hidden="true">#</a> Aggregate Result Filtering</h1><p>If you want to filter the results of aggregate queries,<br> you can use the <code>HAVING</code> clause after the <code>GROUP BY</code> clause.</p><blockquote><p>NOTE：</p><p>1.The expression in HAVING clause must consist of aggregate values; the original sequence cannot appear alone.<br> The following usages are incorrect：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token keyword">group</span> <span class="token keyword">by</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">1</span>ms<span class="token punctuation">)</span> <span class="token keyword">having</span> <span class="token function">sum</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span> <span class="token operator">&gt;</span> s1
<span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token keyword">group</span> <span class="token keyword">by</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">1</span>ms<span class="token punctuation">)</span> <span class="token keyword">having</span> s1 <span class="token operator">&gt;</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>2.When filtering the <code>GROUP BY LEVEL</code> result, the PATH in <code>SELECT</code> and <code>HAVING</code> can only have one node.<br> The following usages are incorrect：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token keyword">group</span> <span class="token keyword">by</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">1</span>ms<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">level</span><span class="token operator">=</span><span class="token number">1</span> <span class="token keyword">having</span> <span class="token function">sum</span><span class="token punctuation">(</span>d1<span class="token punctuation">.</span>s1<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1</span>
<span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span>d1<span class="token punctuation">.</span>s1<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token keyword">group</span> <span class="token keyword">by</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">1</span>ms<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">level</span><span class="token operator">=</span><span class="token number">1</span> <span class="token keyword">having</span> <span class="token function">sum</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>Here are a few examples of using the &#39;HAVING&#39; clause to filter aggregate results.</p><p>Aggregation result 1：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+---------------------+---------------------+
|                         Time|count(root.test.*.s1)|count(root.test.*.s2)|
+-----------------------------+---------------------+---------------------+
|1970-01-01T08:00:00.001+08:00|                    4|                    4|
|1970-01-01T08:00:00.003+08:00|                    1|                    0|
|1970-01-01T08:00:00.005+08:00|                    2|                    4|
|1970-01-01T08:00:00.007+08:00|                    3|                    2|
|1970-01-01T08:00:00.009+08:00|                    4|                    4|
+-----------------------------+---------------------+---------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Aggregation result filtering query 1：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code> <span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token keyword">group</span> <span class="token keyword">by</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">2</span>ms<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">level</span><span class="token operator">=</span><span class="token number">1</span> <span class="token keyword">having</span> <span class="token function">count</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Filtering result 1：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+---------------------+
|                         Time|count(root.test.*.s1)|
+-----------------------------+---------------------+
|1970-01-01T08:00:00.001+08:00|                    4|
|1970-01-01T08:00:00.005+08:00|                    2|
|1970-01-01T08:00:00.009+08:00|                    4|
+-----------------------------+---------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Aggregation result 2：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+-------------+---------+---------+
|                         Time|       Device|count(s1)|count(s2)|
+-----------------------------+-------------+---------+---------+
|1970-01-01T08:00:00.001+08:00|root.test.sg1|        1|        2|
|1970-01-01T08:00:00.003+08:00|root.test.sg1|        1|        0|
|1970-01-01T08:00:00.005+08:00|root.test.sg1|        1|        2|
|1970-01-01T08:00:00.007+08:00|root.test.sg1|        2|        1|
|1970-01-01T08:00:00.009+08:00|root.test.sg1|        2|        2|
|1970-01-01T08:00:00.001+08:00|root.test.sg2|        2|        2|
|1970-01-01T08:00:00.003+08:00|root.test.sg2|        0|        0|
|1970-01-01T08:00:00.005+08:00|root.test.sg2|        1|        2|
|1970-01-01T08:00:00.007+08:00|root.test.sg2|        1|        1|
|1970-01-01T08:00:00.009+08:00|root.test.sg2|        2|        2|
+-----------------------------+-------------+---------+---------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Aggregation result filtering query 2：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code> <span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">count</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token keyword">group</span> <span class="token keyword">by</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">2</span>ms<span class="token punctuation">)</span> <span class="token keyword">having</span> <span class="token function">count</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1</span> align <span class="token keyword">by</span> device
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Filtering result 2：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+-------------+---------+---------+
|                         Time|       Device|count(s1)|count(s2)|
+-----------------------------+-------------+---------+---------+
|1970-01-01T08:00:00.001+08:00|root.test.sg1|        1|        2|
|1970-01-01T08:00:00.005+08:00|root.test.sg1|        1|        2|
|1970-01-01T08:00:00.009+08:00|root.test.sg1|        2|        2|
|1970-01-01T08:00:00.001+08:00|root.test.sg2|        2|        2|
|1970-01-01T08:00:00.005+08:00|root.test.sg2|        1|        2|
|1970-01-01T08:00:00.009+08:00|root.test.sg2|        2|        2|
+-----------------------------+-------------+---------+---------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16);function c(i,l){return s(),a("div",null,[e(`

    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at
    
        http://www.apache.org/licenses/LICENSE-2.0
    
    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.

`),p])}const r=n(o,[["render",c],["__file","Having-Condition.html.vue"]]);export{r as default};
