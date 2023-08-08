import{_ as l,r as i,o as p,c as r,a as d,d as s,e,b as a,w as t,f as o}from"./app-d2093efc.js";const c={},u=s("h1",{id:"delete",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#delete","aria-hidden":"true"},"#"),e(" DELETE")],-1),m=o(`<h2 id="delete-single-timeseries" tabindex="-1"><a class="header-anchor" href="#delete-single-timeseries" aria-hidden="true">#</a> Delete Single Timeseries</h2><p>Taking ln Group as an example, there exists such a usage scenario:</p><p>The wf02 plant&#39;s wt02 device has many segments of errors in its power supply status before 2017-11-01 16:26:00, and the data cannot be analyzed correctly. The erroneous data affected the correlation analysis with other devices. At this point, the data before this time point needs to be deleted. The SQL statement for this operation is</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">delete</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">.</span><span class="token keyword">status</span> <span class="token keyword">where</span> <span class="token keyword">time</span><span class="token operator">&lt;=</span><span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T16:<span class="token number">26</span>:<span class="token number">00</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>In case we hope to merely delete the data before 2017-11-01 16:26:00 in the year of 2017, The SQL statement is:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">delete</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">.</span><span class="token keyword">status</span> <span class="token keyword">where</span> <span class="token keyword">time</span><span class="token operator">&gt;=</span><span class="token number">2017</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">00</span>:<span class="token number">00</span> <span class="token operator">and</span> <span class="token keyword">time</span><span class="token operator">&lt;=</span><span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T16:<span class="token number">26</span>:<span class="token number">00</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>IoTDB supports to delete a range of timeseries points. Users can write SQL expressions as follows to specify the delete interval:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">delete</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">.</span><span class="token keyword">status</span> <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;</span> <span class="token number">10</span>
<span class="token keyword">delete</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">.</span><span class="token keyword">status</span> <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">10</span>
<span class="token keyword">delete</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">.</span><span class="token keyword">status</span> <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;</span> <span class="token number">20</span> <span class="token operator">and</span> <span class="token keyword">time</span> <span class="token operator">&gt;</span> <span class="token number">10</span>
<span class="token keyword">delete</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">.</span><span class="token keyword">status</span> <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">20</span> <span class="token operator">and</span> <span class="token keyword">time</span> <span class="token operator">&gt;=</span> <span class="token number">10</span>
<span class="token keyword">delete</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">.</span><span class="token keyword">status</span> <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&gt;</span> <span class="token number">20</span>
<span class="token keyword">delete</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">.</span><span class="token keyword">status</span> <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&gt;=</span> <span class="token number">20</span>
<span class="token keyword">delete</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">.</span><span class="token keyword">status</span> <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">=</span> <span class="token number">20</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Please pay attention that multiple intervals connected by &quot;OR&quot; expression are not supported in delete statement:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>delete from root.ln.wf02.wt02.status where time &gt; 4 or time &lt; 0
Msg: 303: Check metadata error: For delete statement, where clause can only contain atomic
expressions like : time &gt; XXX, time &lt;= XXX, or two atomic expressions connected by &#39;AND&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If no &quot;where&quot; clause specified in a delete statement, all the data in a timeseries will be deleted.</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">delete</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">.</span><span class="token keyword">status</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="delete-multiple-timeseries" tabindex="-1"><a class="header-anchor" href="#delete-multiple-timeseries" aria-hidden="true">#</a> Delete Multiple Timeseries</h2>`,13),k=o(`<div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">delete</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T16:<span class="token number">26</span>:<span class="token number">00</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>or</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">delete</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T16:<span class="token number">26</span>:<span class="token number">00</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>It should be noted that when the deleted path does not exist, IoTDB will not prompt that the path does not exist, but that the execution is successful, because SQL is a declarative programming method. Unless it is a syntax error, insufficient permissions and so on, it is not considered an error, as shown below:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; delete from root.ln.wf03.wt02.status where time &lt; now()
Msg: The statement is executed successfully.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="delete-time-partition-experimental" tabindex="-1"><a class="header-anchor" href="#delete-time-partition-experimental" aria-hidden="true">#</a> Delete Time Partition (experimental)</h2><p>You may delete all data in a time partition of a database using the following grammar:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DELETE</span> <span class="token keyword">PARTITION</span> root<span class="token punctuation">.</span>ln <span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The <code>0,1,2</code> above is the id of the partition that is to be deleted, you can find it from the IoTDB<br> data folders or convert a timestamp manually to an id using <code>timestamp / partitionInterval </code> (flooring), and the <code>partitionInterval</code> should be in your config (if time-partitioning is<br> supported in your version).</p><p>Please notice that this function is experimental and mainly for development, please use it with care.</p><h2 id="time-to-live-ttl" tabindex="-1"><a class="header-anchor" href="#time-to-live-ttl" aria-hidden="true">#</a> Time-to-live (TTL)</h2><p>IoTDB supports storage-level TTL settings, which means it is able to delete old data automatically and periodically. The benefit of using TTL is that hopefully you can control the total disk space usage and prevent the machine from running out of disks. Moreover, the query performance may downgrade as the total number of files goes up and the memory usage also increase as there are more files. Timely removing such files helps to keep at a high query performance level and reduce memory usage.</p><p>The default unit of TTL is milliseconds. If the time precision in the configuration file changes to another, the TTL is still set to milliseconds.</p><h3 id="set-ttl" tabindex="-1"><a class="header-anchor" href="#set-ttl" aria-hidden="true">#</a> Set TTL</h3><p>The SQL Statement for setting TTL is as follow:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; set ttl to root.ln 3600000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This example means that for data in <code>root.ln</code>, only 3600000 ms, that is, the latest 1 hour will remain, the older one is removed or made invisible.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; set ttl to root.sgcc.** 3600000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>It supports setting TTL for databases in a path. This example represents setting TTL for all databases in the <code>root.sgcc</code> path.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; set ttl to root.** 3600000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This example represents setting TTL for all databases.</p><h3 id="unset-ttl" tabindex="-1"><a class="header-anchor" href="#unset-ttl" aria-hidden="true">#</a> Unset TTL</h3><p>To unset TTL, we can use follwing SQL statement:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; unset ttl to root.ln
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>After unset TTL, all data will be accepted in <code>root.ln</code>.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; unset ttl to root.sgcc.**
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Unset the TTL setting for all databases in the <code>root.sgcc</code> path.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; unset ttl to root.**
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Unset the TTL setting for all databases.</p><h3 id="show-ttl" tabindex="-1"><a class="header-anchor" href="#show-ttl" aria-hidden="true">#</a> Show TTL</h3><p>To Show TTL, we can use following SQL statement:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; SHOW ALL TTL
IoTDB&gt; SHOW TTL ON StorageGroupNames
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>The SHOW ALL TTL example gives the TTL for all databases.<br> The SHOW TTL ON root.ln,root.sgcc,root.DB example shows the TTL for the three storage<br> groups specified.<br> Note: the TTL for databases that do not have a TTL set will display as null.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show all ttl
+----------+-------+
| database|ttl(ms)|
+---------+-------+
|  root.ln|3600000|
|root.sgcc|   null|
|  root.DB|3600000|
+----------+-------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,34);function h(v,b){const n=i("RouterLink");return p(),r("div",null,[d(`

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

`),u,s("p",null,[e("Users can delete data that meet the deletion condition in the specified timeseries by using the "),a(n,{to:"/UserGuide/V1.2.x/Reference/SQL-Reference.html"},{default:t(()=>[e("DELETE statement")]),_:1}),e(". When deleting data, users can select one or more timeseries paths, prefix paths, or paths with star to delete data within a certain time interval.")]),s("p",null,[e("In a JAVA programming environment, you can use the "),a(n,{to:"/UserGuide/V1.2.x/API/Programming-JDBC.html"},{default:t(()=>[e("Java JDBC")]),_:1}),e(" to execute single or batch UPDATE statements.")]),m,s("p",null,[e("If both the power supply status and hardware version of the ln group wf02 plant wt02 device before 2017-11-01 16:26:00 need to be deleted, "),a(n,{to:"/UserGuide/V1.2.x/Basic-Concept/Data-Model-and-Terminology.html"},{default:t(()=>[e("the prefix path with broader meaning or the path with star")]),_:1}),e(" can be used to delete the data. The SQL statement for this operation is:")]),k])}const g=l(c,[["render",h],["__file","Delete-Data.html.vue"]]);export{g as default};
