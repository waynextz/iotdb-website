import{_ as e,o as a,c as n,a as s,f as t}from"./app-d2093efc.js";const o={},i=t(`<h1 id="maintenance-command" tabindex="-1"><a class="header-anchor" href="#maintenance-command" aria-hidden="true">#</a> Maintenance Command</h1><h2 id="flush" tabindex="-1"><a class="header-anchor" href="#flush" aria-hidden="true">#</a> FLUSH</h2><p>Persist all the data points in the memory table of the database to the disk, and seal the data file. In cluster mode, we provide commands to persist the specified database cache of local node and persist the specified database cache of the cluster.</p><p>Note: This command does not need to be invoked manually by the client. IoTDB has WAL to ensure data security<br> and IoTDB will flush when appropriate.<br> Frequently call flush can result in small data files that degrade query performance.</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>IoTDB<span class="token operator">&gt;</span> FLUSH 
IoTDB<span class="token operator">&gt;</span> FLUSH <span class="token keyword">ON</span> <span class="token keyword">LOCAL</span>
IoTDB<span class="token operator">&gt;</span> FLUSH <span class="token keyword">ON</span> CLUSTER
IoTDB<span class="token operator">&gt;</span> FLUSH root<span class="token punctuation">.</span>ln
IoTDB<span class="token operator">&gt;</span> FLUSH root<span class="token punctuation">.</span>sg1<span class="token punctuation">,</span>root<span class="token punctuation">.</span>sg2 <span class="token keyword">ON</span> <span class="token keyword">LOCAL</span>
IoTDB<span class="token operator">&gt;</span> FLUSH root<span class="token punctuation">.</span>sg1<span class="token punctuation">,</span>root<span class="token punctuation">.</span>sg2 <span class="token keyword">ON</span> CLUSTER
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="clear-cache" tabindex="-1"><a class="header-anchor" href="#clear-cache" aria-hidden="true">#</a> CLEAR CACHE</h2><p>Clear the cache of chunk, chunk metadata and timeseries metadata to release the memory footprint. In cluster mode, we provide commands to clear local node cache and clear the cluster cache.</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>IoTDB<span class="token operator">&gt;</span> CLEAR CACHE
IoTDB<span class="token operator">&gt;</span> CLEAR CACHE <span class="token keyword">ON</span> <span class="token keyword">LOCAL</span>
IoTDB<span class="token operator">&gt;</span> CLEAR CACHE <span class="token keyword">ON</span> CLUSTER
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="set-system-to-readonly-running" tabindex="-1"><a class="header-anchor" href="#set-system-to-readonly-running" aria-hidden="true">#</a> SET SYSTEM TO READONLY / RUNNING</h2><p>Manually set IoTDB system to running, read-only mode. In cluster mode, we provide commands to set the local node status and set the cluster status, valid for the entire cluster by default.</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>IoTDB<span class="token operator">&gt;</span> <span class="token keyword">SET</span> SYSTEM <span class="token keyword">TO</span> RUNNING
IoTDB<span class="token operator">&gt;</span> <span class="token keyword">SET</span> SYSTEM <span class="token keyword">TO</span> READONLY <span class="token keyword">ON</span> <span class="token keyword">LOCAL</span>
IoTDB<span class="token operator">&gt;</span> <span class="token keyword">SET</span> SYSTEM <span class="token keyword">TO</span> READONLY <span class="token keyword">ON</span> CLUSTER
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="kill-query" tabindex="-1"><a class="header-anchor" href="#kill-query" aria-hidden="true">#</a> Kill Query</h2><p>IoTDB supports setting session connection timeouts and query timeouts, and also allows to stop the executing query manually.</p><h3 id="session-timeout" tabindex="-1"><a class="header-anchor" href="#session-timeout" aria-hidden="true">#</a> Session timeout</h3><p>Session timeout controls when idle sessions are closed. An idle session is one that had not initiated any query or non-query operations for a period of time.</p><p>Session timeout is disabled by default and can be set using the <code>dn_session_timeout_threshold</code> parameter in IoTDB configuration file.</p><h3 id="query-timeout" tabindex="-1"><a class="header-anchor" href="#query-timeout" aria-hidden="true">#</a> Query timeout</h3><p>For queries that take too long to execute, IoTDB will forcibly interrupt the query and throw a timeout exception, as shown in the figure:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>IoTDB<span class="token operator">&gt;</span> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">;</span>
Msg: <span class="token number">701</span> <span class="token keyword">Current</span> query <span class="token operator">is</span> <span class="token keyword">time</span> <span class="token keyword">out</span><span class="token punctuation">,</span> please <span class="token keyword">check</span> your statement <span class="token operator">or</span> <span class="token keyword">modify</span> timeout parameter<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>The default timeout of a query is 60000 ms，which can be customized in the configuration file through the <code>query_timeout_threshold</code> parameter.</p><p>If you use JDBC or Session, we also support setting a timeout for a single query（Unit: ms）：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">IoTDBStatement</span><span class="token punctuation">)</span> statement<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">executeQuery</span><span class="token punctuation">(</span><span class="token class-name">String</span> sql<span class="token punctuation">,</span> <span class="token keyword">long</span> timeoutInMS<span class="token punctuation">)</span>
session<span class="token punctuation">.</span><span class="token function">executeQueryStatement</span><span class="token punctuation">(</span><span class="token class-name">String</span> sql<span class="token punctuation">,</span> <span class="token keyword">long</span> timeout<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>If the timeout parameter is not configured or with a negative number, the default timeout time will be used.<br> If value 0 is used, timeout function will be disabled.</p></blockquote><h3 id="query-abort" tabindex="-1"><a class="header-anchor" href="#query-abort" aria-hidden="true">#</a> Query abort</h3><p>Not supported yet</p>`,25);function r(l,c){return a(),n("div",null,[s(`

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

`),i])}const d=e(o,[["render",r],["__file","Maintenance-Command.html.vue"]]);export{d as default};
