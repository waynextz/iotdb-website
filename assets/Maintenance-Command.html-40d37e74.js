import{_ as e,o as a,c as s,a as n,f as t}from"./app-181aa290.js";const o={},i=t(`<h1 id="maintenance-command" tabindex="-1"><a class="header-anchor" href="#maintenance-command" aria-hidden="true">#</a> Maintenance Command</h1><h2 id="flush" tabindex="-1"><a class="header-anchor" href="#flush" aria-hidden="true">#</a> FLUSH</h2><p>Persist all the data points in the memory table of the storage group to the disk, and seal the data file.</p><p>Note: This command does not need to be invoked manually by the client. IoTDB has WAL to ensure data security<br> and IoTDB will flush when appropriate.<br> Frequently call flush can result in small data files that degrade query performance.</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>IoTDB<span class="token operator">&gt;</span> FLUSH 
IoTDB<span class="token operator">&gt;</span> FLUSH root<span class="token punctuation">.</span>ln
IoTDB<span class="token operator">&gt;</span> FLUSH root<span class="token punctuation">.</span>sg1<span class="token punctuation">,</span>root<span class="token punctuation">.</span>sg2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="merge" tabindex="-1"><a class="header-anchor" href="#merge" aria-hidden="true">#</a> MERGE</h2><p>Execute Level Compaction and unsequence Compaction task. Currently IoTDB supports the following two types of SQL to manually trigger the compaction process of data files:</p><ul><li><code>MERGE</code> Execute the level compaction first and then execute the unsequence compaction. In unsequence compaction process, this command is executed very fast by rewriting the overlapped Chunks only, while there is some redundant data on the disk eventually.</li><li><code>FULL MERGE</code> Execute the level compaction first and then execute the unsequence compaction. In unsequence compaction process, this command is executed slow due to it takes more time to rewrite all data in overlapped files. However, there won&#39;t be any redundant data on the disk eventually.</li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>IoTDB<span class="token operator">&gt;</span> <span class="token keyword">MERGE</span>
IoTDB<span class="token operator">&gt;</span> <span class="token keyword">FULL</span> <span class="token keyword">MERGE</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="clear-cache" tabindex="-1"><a class="header-anchor" href="#clear-cache" aria-hidden="true">#</a> CLEAR CACHE</h2><p>Clear the cache of chunk, chunk metadata and timeseries metadata to release the memory footprint.</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>IoTDB<span class="token operator">&gt;</span> CLEAR CACHE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="set-ststem-to-readonly-writable" tabindex="-1"><a class="header-anchor" href="#set-ststem-to-readonly-writable" aria-hidden="true">#</a> SET STSTEM TO READONLY / WRITABLE</h2><p>Manually set IoTDB system to read-only or writable mode.</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>IoTDB<span class="token operator">&gt;</span> <span class="token keyword">SET</span> SYSTEM <span class="token keyword">TO</span> READONLY
IoTDB<span class="token operator">&gt;</span> <span class="token keyword">SET</span> SYSTEM <span class="token keyword">TO</span> WRITABLE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="schema-snapshot" tabindex="-1"><a class="header-anchor" href="#schema-snapshot" aria-hidden="true">#</a> SCHEMA SNAPSHOT</h2><p>To speed up restarting of IoTDB, users can create snapshot of schema and avoid recovering schema from mlog file. This feature doesn&#39;t support scenarios involving Schema Template, Tag/Attribute, or Aligned Timeseries.</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>IoTDB<span class="token operator">&gt;</span> <span class="token keyword">CREATE</span> <span class="token keyword">SNAPSHOT</span> <span class="token keyword">FOR</span> <span class="token keyword">SCHEMA</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="timeout" tabindex="-1"><a class="header-anchor" href="#timeout" aria-hidden="true">#</a> Timeout</h2><p>IoTDB supports session and query level timeout.</p><h3 id="session-timeout" tabindex="-1"><a class="header-anchor" href="#session-timeout" aria-hidden="true">#</a> Session timeout</h3><p>Session timeout controls when idle sessions are closed. An idle session is one that had not initiated any query or non-query operations for a period of time.</p><p>Session timeout is disabled by default and can be set using the <code>session_timeout_threshold</code> parameter in IoTDB configuration file.</p><h3 id="query-timeout" tabindex="-1"><a class="header-anchor" href="#query-timeout" aria-hidden="true">#</a> Query timeout</h3><p>For queries that take too long to execute, IoTDB will forcibly interrupt the query and throw a timeout exception, as shown in the figure:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>IoTDB<span class="token operator">&gt;</span> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">;</span>
Msg: <span class="token number">701</span> <span class="token keyword">Current</span> query <span class="token operator">is</span> <span class="token keyword">time</span> <span class="token keyword">out</span><span class="token punctuation">,</span> please <span class="token keyword">check</span> your statement <span class="token operator">or</span> <span class="token keyword">modify</span> timeout parameter<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>The default timeout of a query is 60000 ms，which can be customized in the configuration file through the <code>query_timeout_threshold</code> parameter.</p><p>If you use JDBC or Session, we also support setting a timeout for a single query（Unit: ms）：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">IoTDBStatement</span><span class="token punctuation">)</span> statement<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">executeQuery</span><span class="token punctuation">(</span><span class="token class-name">String</span> sql<span class="token punctuation">,</span> <span class="token keyword">long</span> timeoutInMS<span class="token punctuation">)</span>
session<span class="token punctuation">.</span><span class="token function">executeQueryStatement</span><span class="token punctuation">(</span><span class="token class-name">String</span> sql<span class="token punctuation">,</span> <span class="token keyword">long</span> timeout<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>If the timeout parameter is not configured or with a negative number, the default timeout time will be used.<br> If value 0 is used, timeout function will be disabled.</p></blockquote><h3 id="query-abort" tabindex="-1"><a class="header-anchor" href="#query-abort" aria-hidden="true">#</a> Query abort</h3><p>In addition to waiting for the query to time out passively, IoTDB also supports stopping the query actively:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">KILL</span> QUERY <span class="token operator">&lt;</span>queryId<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You can abort the specified query by specifying <code>queryId</code>. If <code>queryId</code> is not specified, all executing queries will be killed.</p><p>To get the executing <code>queryId</code>，you can use the <code>show query processlist</code> command，which will show the list of all executing queries，with the following result set：</p><table><thead><tr><th>Time</th><th>queryId</th><th>statement</th></tr></thead><tbody><tr><td></td><td></td><td></td></tr></tbody></table><p>The maximum display length of statement is 64 characters. For statements with more than 64 characters, the intercepted part will be displayed.</p>`,37);function r(l,d){return a(),s("div",null,[n(`

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

`),i])}const p=e(o,[["render",r],["__file","Maintenance-Command.html.vue"]]);export{p as default};
