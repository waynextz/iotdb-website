import{_ as o,r as i,o as p,c as l,a as c,d as t,e as n,b as e,w as a,f as r}from"./app-2905306e.js";const u={},d=t("h1",{id:"insert",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#insert","aria-hidden":"true"},"#"),n(" INSERT")],-1),m=t("p",null,"Writing a repeat timestamp covers the original timestamp data, which can be regarded as updated data.",-1),k=t("h2",{id:"use-of-insert-statements",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#use-of-insert-statements","aria-hidden":"true"},"#"),n(" Use of INSERT Statements")],-1),h=r(`<p>In the scenario of this section, take two timeseries <code>root.ln.wf02.wt02.status</code> and <code>root.ln.wf02.wt02.hardware</code> as an example, and their data types are BOOLEAN and TEXT, respectively.</p><p>The sample code for single column data insertion is as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB &gt; insert into root.ln.wf02.wt02(timestamp,status) values(1,true)
IoTDB &gt; insert into root.ln.wf02.wt02(timestamp,hardware) values(1, &#39;v1&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>The above example code inserts the long integer timestamp and the value &quot;true&quot; into the timeseries <code>root.ln.wf02.wt02.status</code> and inserts the long integer timestamp and the value &quot;v1&quot; into the timeseries <code>root.ln.wf02.wt02.hardware</code>. When the execution is successful, cost time is shown to indicate that the data insertion has been completed.</p><blockquote><p>Note: In IoTDB, TEXT type data can be represented by single and double quotation marks. The insertion statement above uses double quotation marks for TEXT type data. The following example will use single quotation marks for TEXT type data.</p></blockquote><p>The INSERT statement can also support the insertion of multi-column data at the same time point. The sample code of inserting the values of the two timeseries at the same time point &#39;2&#39; is as follows:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>IoTDB <span class="token operator">&gt;</span> <span class="token keyword">insert</span> <span class="token keyword">into</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">(</span><span class="token keyword">timestamp</span><span class="token punctuation">,</span> <span class="token keyword">status</span><span class="token punctuation">,</span> hardware<span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&#39;v2&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>In addition, The INSERT statement support insert multi-rows at once. The sample code of inserting two rows as follows:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>IoTDB <span class="token operator">&gt;</span> <span class="token keyword">insert</span> <span class="token keyword">into</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">(</span><span class="token keyword">timestamp</span><span class="token punctuation">,</span> <span class="token keyword">status</span><span class="token punctuation">,</span> hardware<span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&#39;v3&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token string">&#39;v4&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>After inserting the data, we can simply query the inserted data using the SELECT statement:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>IoTDB <span class="token operator">&gt;</span> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;</span> <span class="token number">5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The result is shown below. The query result shows that the insertion statements of single column and multi column data are performed correctly.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+--------------------------+------------------------+
|                         Time|root.ln.wf02.wt02.hardware|root.ln.wf02.wt02.status|
+-----------------------------+--------------------------+------------------------+
|1970-01-01T08:00:00.001+08:00|                        v1|                    true|
|1970-01-01T08:00:00.002+08:00|                        v2|                   false|
|1970-01-01T08:00:00.003+08:00|                        v3|                   false|
|1970-01-01T08:00:00.004+08:00|                        v4|                    true|
+-----------------------------+--------------------------+------------------------+
Total line number = 4
It costs 0.004s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In addition, we can omit the timestamp column, and the system will use the current system timestamp as the timestamp of the data point. The sample code is as follows:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>IoTDB <span class="token operator">&gt;</span> <span class="token keyword">insert</span> <span class="token keyword">into</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">(</span><span class="token keyword">status</span><span class="token punctuation">,</span> hardware<span class="token punctuation">)</span> <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&#39;v2&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Note:</strong> Timestamps must be specified when inserting multiple rows of data in a SQL.</p><h2 id="insert-data-into-aligned-timeseries" tabindex="-1"><a class="header-anchor" href="#insert-data-into-aligned-timeseries" aria-hidden="true">#</a> Insert Data Into Aligned Timeseries</h2><p>To insert data into a group of aligned time series, we only need to add the <code>ALIGNED</code> keyword in SQL, and others are similar.</p><p>The sample code is as follows:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>IoTDB <span class="token operator">&gt;</span> <span class="token keyword">create</span> aligned timeseries root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1<span class="token punctuation">(</span>s1 INT32<span class="token punctuation">,</span> s2 <span class="token keyword">DOUBLE</span><span class="token punctuation">)</span>
IoTDB <span class="token operator">&gt;</span> <span class="token keyword">insert</span> <span class="token keyword">into</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1<span class="token punctuation">(</span><span class="token keyword">time</span><span class="token punctuation">,</span> s1<span class="token punctuation">,</span> s2<span class="token punctuation">)</span> aligned <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
IoTDB <span class="token operator">&gt;</span> <span class="token keyword">insert</span> <span class="token keyword">into</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1<span class="token punctuation">(</span><span class="token keyword">time</span><span class="token punctuation">,</span> s1<span class="token punctuation">,</span> s2<span class="token punctuation">)</span> aligned <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
IoTDB <span class="token operator">&gt;</span> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The result is shown below. The query result shows that the insertion statements are performed correctly.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+--------------+--------------+
|                         Time|root.sg1.d2.s1|root.sg1.d2.s2|
+-----------------------------+--------------+--------------+
|1970-01-01T08:00:00.001+08:00|             1|           1.0|
|1970-01-01T08:00:00.002+08:00|             2|           2.0|
|1970-01-01T08:00:00.003+08:00|             3|           3.0|
+-----------------------------+--------------+--------------+
Total line number = 3
It costs 0.004s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22);function v(w,g){const s=i("RouterLink");return p(),l("div",null,[c(`

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

`),d,t("p",null,[n("IoTDB provides users with a variety of ways to insert real-time data, such as directly inputting "),e(s,{to:"/UserGuide/V1.0.x/Reference/SQL-Reference.html"},{default:a(()=>[n("INSERT SQL statement")]),_:1}),n(" in "),e(s,{to:"/UserGuide/V1.0.x/QuickStart/Command-Line-Interface.html"},{default:a(()=>[n("Client/Shell tools")]),_:1}),n(", or using "),e(s,{to:"/UserGuide/V1.0.x/API/Programming-JDBC.html"},{default:a(()=>[n("Java JDBC")]),_:1}),n(" to perform single or batch execution of "),e(s,{to:"/UserGuide/V1.0.x/Reference/SQL-Reference.html"},{default:a(()=>[n("INSERT SQL statement")]),_:1}),n(".")]),t("p",null,[n("NOTE： This section mainly introduces the use of "),e(s,{to:"/UserGuide/V1.0.x/Reference/SQL-Reference.html"},{default:a(()=>[n("INSERT SQL statement")]),_:1}),n(" for real-time data import in the scenario.")]),m,k,t("p",null,[n("The "),e(s,{to:"/UserGuide/V1.0.x/Reference/SQL-Reference.html"},{default:a(()=>[n("INSERT SQL statement")]),_:1}),n(" statement is used to insert data into one or more specified timeseries created. For each point of data inserted, it consists of a "),e(s,{to:"/UserGuide/V1.0.x/Data-Concept/Data-Model-and-Terminology.html"},{default:a(()=>[n("timestamp")]),_:1}),n(" and a sensor acquisition value (see "),e(s,{to:"/UserGuide/V1.0.x/Data-Concept/Data-Type.html"},{default:a(()=>[n("Data Type")]),_:1}),n(").")]),h])}const b=o(u,[["render",v],["__file","Write-Data.html.vue"]]);export{b as default};
