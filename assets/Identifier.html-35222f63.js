import{_ as s,o as n,c as e,a,f as t}from"./app-d415a090.js";const i={},o=t(`<h1 id="identifier" tabindex="-1"><a class="header-anchor" href="#identifier" aria-hidden="true">#</a> Identifier</h1><h2 id="usage-scenarios" tabindex="-1"><a class="header-anchor" href="#usage-scenarios" aria-hidden="true">#</a> Usage scenarios</h2><p>Certain objects within IoTDB, including <code>TRIGGER</code>, <code>FUNCTION</code>(UDF), <code>CONTINUOUS QUERY</code>, <code>SCHEMA TEMPLATE</code>, <code>USER</code>, <code>ROLE</code>,<code>Pipe</code>,<code>PipeSink</code>,<code>alias</code> and other object names are known as identifiers.</p><h2 id="constraints" tabindex="-1"><a class="header-anchor" href="#constraints" aria-hidden="true">#</a> Constraints</h2><p>Below are basic constraints of identifiers, specific identifiers may have other constraints, for example, <code>user</code> should consists of more than 4 characters.</p><ul><li>Permitted characters in unquoted identifiers: <ul><li>[0-9 a-z A-Z _ ] (letters, digits and underscore)</li><li>[&#39;\\u2E80&#39;..&#39;\\u9FFF&#39;] (UNICODE Chinese characters)</li></ul></li><li>Identifiers may begin with a digit, unquoted identifiers can not be a real number.</li><li>Identifiers are case sensitive.</li><li>Key words can be used as an identifier.</li></ul><p><strong>You need to quote the identifier with back quote(\`) in the following cases:</strong></p><ul><li>Identifier contains special characters.</li><li>Identifier that is a real number.</li></ul><h2 id="how-to-use-quotations-marks-in-quoted-identifiers" tabindex="-1"><a class="header-anchor" href="#how-to-use-quotations-marks-in-quoted-identifiers" aria-hidden="true">#</a> How to use quotations marks in quoted identifiers</h2><p><code>&#39;</code> and <code>&quot;</code> can be used directly in quoted identifiers.</p><p>\` may be written as \`\` in quoted identifiers. See the example below:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># create template t1&#39;t&quot;t</span>
<span class="token keyword">create</span> <span class="token keyword">schema</span> template <span class="token identifier"><span class="token punctuation">\`</span>t1&#39;t&quot;t<span class="token punctuation">\`</span></span> 
<span class="token punctuation">(</span>temperature <span class="token keyword">FLOAT</span> encoding<span class="token operator">=</span>RLE<span class="token punctuation">,</span> <span class="token keyword">status</span> <span class="token keyword">BOOLEAN</span> encoding<span class="token operator">=</span>PLAIN compression<span class="token operator">=</span>SNAPPY<span class="token punctuation">)</span>

<span class="token comment"># create template t1\`t</span>
<span class="token keyword">create</span> <span class="token keyword">schema</span> template <span class="token identifier"><span class="token punctuation">\`</span>t1\`\`t<span class="token punctuation">\`</span></span> 
<span class="token punctuation">(</span>temperature <span class="token keyword">FLOAT</span> encoding<span class="token operator">=</span>RLE<span class="token punctuation">,</span> <span class="token keyword">status</span> <span class="token keyword">BOOLEAN</span> encoding<span class="token operator">=</span>PLAIN compression<span class="token operator">=</span>SNAPPY<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Examples of case in which quoted identifier is used ：</p><ul><li><p>Trigger name should be quoted in cases described above ：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># create trigger named alert.\`listener-sg1d1s1</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TRIGGER</span> <span class="token identifier"><span class="token punctuation">\`</span>alert.\`\`listener-sg1d1s1<span class="token punctuation">\`</span></span>
<span class="token keyword">AFTER</span> <span class="token keyword">INSERT</span>
<span class="token keyword">ON</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1<span class="token punctuation">.</span>s1
<span class="token keyword">AS</span> <span class="token string">&#39;org.apache.iotdb.db.storageengine.trigger.example.AlertListener&#39;</span>
<span class="token keyword">WITH</span> <span class="token punctuation">(</span>
  <span class="token string">&#39;lo&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">,</span> 
  <span class="token string">&#39;hi&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;100.0&#39;</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>UDF name should be quoted in cases described above ：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># create a funciton named 111, 111 is a real number.</span>
<span class="token keyword">CREATE</span> <span class="token keyword">FUNCTION</span> <span class="token identifier"><span class="token punctuation">\`</span>111<span class="token punctuation">\`</span></span> <span class="token keyword">AS</span> <span class="token string">&#39;org.apache.iotdb.udf.UDTFExample&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Template name should be quoted in cases described above ：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># create a template named 111, 111 is a real number.</span>
<span class="token keyword">create</span> <span class="token keyword">schema</span> template <span class="token identifier"><span class="token punctuation">\`</span>111<span class="token punctuation">\`</span></span> 
<span class="token punctuation">(</span>temperature <span class="token keyword">FLOAT</span> encoding<span class="token operator">=</span>RLE<span class="token punctuation">,</span> <span class="token keyword">status</span> <span class="token keyword">BOOLEAN</span> encoding<span class="token operator">=</span>PLAIN compression<span class="token operator">=</span>SNAPPY<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>User and Role name should be quoted in cases described above, blank space is not allow in User and Role name whether quoted or not ：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># create user special\`user.</span>
<span class="token keyword">CREATE</span> <span class="token keyword">USER</span> <span class="token identifier"><span class="token punctuation">\`</span>special\`\`user.<span class="token punctuation">\`</span></span> <span class="token string">&#39;write_pwd&#39;</span>

<span class="token comment"># create role 111</span>
<span class="token keyword">CREATE</span> ROLE <span class="token identifier"><span class="token punctuation">\`</span>111<span class="token punctuation">\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Continuous query name should be quoted in cases described above ：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># create continuous query test.cq</span>
<span class="token keyword">CREATE</span> CONTINUOUS QUERY <span class="token identifier"><span class="token punctuation">\`</span>test.cq<span class="token punctuation">\`</span></span> 
<span class="token keyword">BEGIN</span> 
  <span class="token keyword">SELECT</span> max_value<span class="token punctuation">(</span>temperature<span class="token punctuation">)</span> 
  <span class="token keyword">INTO</span> temperature_max 
  <span class="token keyword">FROM</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">.</span><span class="token operator">*</span> 
  <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> <span class="token keyword">time</span><span class="token punctuation">(</span><span class="token number">10</span>s<span class="token punctuation">)</span> 
<span class="token keyword">END</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Pipe、PipeSink should be quoted in cases described above ：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># create PipeSink test.*1</span>
<span class="token keyword">CREATE</span> PIPESINK <span class="token identifier"><span class="token punctuation">\`</span>test.*1<span class="token punctuation">\`</span></span> <span class="token keyword">AS</span> IoTDB <span class="token punctuation">(</span><span class="token string">&#39;ip&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;输入你的IP&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># create Pipe test.*2</span>
<span class="token keyword">CREATE</span> PIPE <span class="token identifier"><span class="token punctuation">\`</span>test.*2<span class="token punctuation">\`</span></span> <span class="token keyword">TO</span> <span class="token identifier"><span class="token punctuation">\`</span>test.*1<span class="token punctuation">\`</span></span> <span class="token keyword">FROM</span> 
<span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token operator">*</span><span class="token operator">*</span> <span class="token keyword">from</span> root <span class="token keyword">WHERE</span> <span class="token keyword">time</span><span class="token operator">&gt;=</span>yyyy<span class="token operator">-</span>mm<span class="token operator">-</span>dd HH:MM:SS<span class="token punctuation">)</span> <span class="token keyword">WITH</span> <span class="token string">&#39;SyncDelOp&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;true&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>AS</code> function provided by IoTDB can assign an alias to time series selected in query. Alias can be constant(including string) or identifier.</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> s1 <span class="token keyword">as</span> temperature<span class="token punctuation">,</span> s2 <span class="token keyword">as</span> speed <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01<span class="token punctuation">;</span>

<span class="token comment"># Header of result dataset</span>
<span class="token operator">+</span><span class="token comment">-----------------------------+-----------|-----+</span>
<span class="token operator">|</span>                         <span class="token keyword">Time</span><span class="token operator">|</span>temperature<span class="token operator">|</span>speed<span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-----------------------------+-----------|-----+</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>The key/value of an attribute can be String Literal and identifier, more details can be found at <strong>key-value pair</strong> part.</p></li></ul>`,15);function p(c,l){return n(),e("div",null,[a(`

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

`),o])}const d=s(i,[["render",p],["__file","Identifier.html.vue"]]);export{d as default};
