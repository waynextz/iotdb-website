import{_ as n,o as s,c as a,a as e,f as t}from"./app-316684ed.js";const o={},p=t(`<h2 id="聚合结果过滤" tabindex="-1"><a class="header-anchor" href="#聚合结果过滤" aria-hidden="true">#</a> 聚合结果过滤</h2><p>如果想对聚合查询的结果进行过滤，可以在 <code>GROUP BY</code> 子句之后使用 <code>HAVING</code> 子句。</p><p><strong>注意：</strong></p><ol><li><p><code>HAVING</code>子句中的过滤条件必须由聚合值构成，原始序列不能单独出现。</p><p>下列使用方式是不正确的：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token keyword">group</span> <span class="token keyword">by</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">1</span>ms<span class="token punctuation">)</span> <span class="token keyword">having</span> <span class="token function">sum</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span> <span class="token operator">&gt;</span> s1
<span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token keyword">group</span> <span class="token keyword">by</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">1</span>ms<span class="token punctuation">)</span> <span class="token keyword">having</span> s1 <span class="token operator">&gt;</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>对<code>GROUP BY LEVEL</code>结果进行过滤时，<code>SELECT</code>和<code>HAVING</code>中出现的PATH只能有一级。</p><p>下列使用方式是不正确的：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token keyword">group</span> <span class="token keyword">by</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">1</span>ms<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">level</span><span class="token operator">=</span><span class="token number">1</span> <span class="token keyword">having</span> <span class="token function">sum</span><span class="token punctuation">(</span>d1<span class="token punctuation">.</span>s1<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1</span>
<span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span>d1<span class="token punctuation">.</span>s1<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token keyword">group</span> <span class="token keyword">by</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">1</span>ms<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">level</span><span class="token operator">=</span><span class="token number">1</span> <span class="token keyword">having</span> <span class="token function">sum</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p><strong>SQL 示例：</strong></p><ul><li><p><strong>示例 1：</strong></p><p>对于以下聚合结果进行过滤：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+---------------------+---------------------+
|                         Time|count(root.test.*.s1)|count(root.test.*.s2)|
+-----------------------------+---------------------+---------------------+
|1970-01-01T08:00:00.001+08:00|                    4|                    4|
|1970-01-01T08:00:00.003+08:00|                    1|                    0|
|1970-01-01T08:00:00.005+08:00|                    2|                    4|
|1970-01-01T08:00:00.007+08:00|                    3|                    2|
|1970-01-01T08:00:00.009+08:00|                    4|                    4|
+-----------------------------+---------------------+---------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code> <span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token keyword">group</span> <span class="token keyword">by</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">2</span>ms<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">level</span><span class="token operator">=</span><span class="token number">1</span> <span class="token keyword">having</span> <span class="token function">count</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">2</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+---------------------+
|                         Time|count(root.test.*.s1)|
+-----------------------------+---------------------+
|1970-01-01T08:00:00.001+08:00|                    4|
|1970-01-01T08:00:00.005+08:00|                    2|
|1970-01-01T08:00:00.009+08:00|                    4|
+-----------------------------+---------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>示例 2：</strong></p><p>对于以下聚合结果进行过滤：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+-------------+---------+---------+
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code> <span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">count</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token keyword">group</span> <span class="token keyword">by</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">2</span>ms<span class="token punctuation">)</span> <span class="token keyword">having</span> <span class="token function">count</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1</span> align <span class="token keyword">by</span> device<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+-------------+---------+---------+
|                         Time|       Device|count(s1)|count(s2)|
+-----------------------------+-------------+---------+---------+
|1970-01-01T08:00:00.001+08:00|root.test.sg1|        1|        2|
|1970-01-01T08:00:00.005+08:00|root.test.sg1|        1|        2|
|1970-01-01T08:00:00.009+08:00|root.test.sg1|        2|        2|
|1970-01-01T08:00:00.001+08:00|root.test.sg2|        2|        2|
|1970-01-01T08:00:00.005+08:00|root.test.sg2|        1|        2|
|1970-01-01T08:00:00.009+08:00|root.test.sg2|        2|        2|
+-----------------------------+-------------+---------+---------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,6);function c(i,l){return s(),a("div",null,[e(`

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
