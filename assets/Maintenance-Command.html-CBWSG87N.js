import{_ as a,c as s,b as n,o as t}from"./app-C6MIQYKi.js";const o={};function i(l,e){return t(),s("div",null,e[0]||(e[0]=[n(`<h1 id="maintenance-command" tabindex="-1"><a class="header-anchor" href="#maintenance-command"><span>Maintenance Command</span></a></h1><h2 id="flush" tabindex="-1"><a class="header-anchor" href="#flush"><span>FLUSH</span></a></h2><p>Persist all the data points in the memory table of the storage group to the disk, and seal the data file.</p><p>Note: This command does not need to be invoked manually by the client. IoTDB has WAL to ensure data security<br> and IoTDB will flush when appropriate.<br> Frequently call flush can result in small data files that degrade query performance.</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line">IoTDB<span class="token operator">&gt;</span> FLUSH </span>
<span class="line">IoTDB<span class="token operator">&gt;</span> FLUSH root<span class="token punctuation">.</span>ln</span>
<span class="line">IoTDB<span class="token operator">&gt;</span> FLUSH root<span class="token punctuation">.</span>sg1<span class="token punctuation">,</span>root<span class="token punctuation">.</span>sg2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="merge" tabindex="-1"><a class="header-anchor" href="#merge"><span>MERGE</span></a></h2><p>Execute Level Compaction and unsequence Compaction task. Currently IoTDB supports the following two types of SQL to manually trigger the compaction process of data files:</p><ul><li><code>MERGE</code> Execute the level compaction first and then execute the unsequence compaction. In unsequence compaction process, this command is executed very fast by rewriting the overlapped Chunks only, while there is some redundant data on the disk eventually.</li><li><code>FULL MERGE</code> Execute the level compaction first and then execute the unsequence compaction. In unsequence compaction process, this command is executed slow due to it takes more time to rewrite all data in overlapped files. However, there won&#39;t be any redundant data on the disk eventually.</li></ul><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line">IoTDB<span class="token operator">&gt;</span> <span class="token keyword">MERGE</span></span>
<span class="line">IoTDB<span class="token operator">&gt;</span> <span class="token keyword">FULL</span> <span class="token keyword">MERGE</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="clear-cache" tabindex="-1"><a class="header-anchor" href="#clear-cache"><span>CLEAR CACHE</span></a></h2><p>Clear the cache of chunk, chunk metadata and timeseries metadata to release the memory footprint.</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line">IoTDB<span class="token operator">&gt;</span> CLEAR CACHE</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="set-system-to-readonly-writable" tabindex="-1"><a class="header-anchor" href="#set-system-to-readonly-writable"><span>SET SYSTEM TO READONLY / WRITABLE</span></a></h2><p>Manually set IoTDB system to read-only or writable mode.</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line">IoTDB<span class="token operator">&gt;</span> <span class="token keyword">SET</span> SYSTEM <span class="token keyword">TO</span> READONLY</span>
<span class="line">IoTDB<span class="token operator">&gt;</span> <span class="token keyword">SET</span> SYSTEM <span class="token keyword">TO</span> WRITABLE</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="schema-snapshot" tabindex="-1"><a class="header-anchor" href="#schema-snapshot"><span>SCHEMA SNAPSHOT</span></a></h2><p>To speed up restarting of IoTDB, users can create snapshot of schema and avoid recovering schema from mlog file. This feature doesn&#39;t support scenarios involving Schema Template, Tag/Attribute, or Aligned Timeseries.</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line">IoTDB<span class="token operator">&gt;</span> <span class="token keyword">CREATE</span> <span class="token keyword">SNAPSHOT</span> <span class="token keyword">FOR</span> <span class="token keyword">SCHEMA</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="timeout" tabindex="-1"><a class="header-anchor" href="#timeout"><span>Timeout</span></a></h2><p>IoTDB supports session and query level timeout.</p><h3 id="session-timeout" tabindex="-1"><a class="header-anchor" href="#session-timeout"><span>Session timeout</span></a></h3><p>Session timeout controls when idle sessions are closed. An idle session is one that had not initiated any query or non-query operations for a period of time.</p><p>Session timeout is disabled by default and can be set using the <code>session_timeout_threshold</code> parameter in IoTDB configuration file.</p><h3 id="query-timeout" tabindex="-1"><a class="header-anchor" href="#query-timeout"><span>Query timeout</span></a></h3><p>For queries that take too long to execute, IoTDB will forcibly interrupt the query and throw a timeout exception, as shown in the figure:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line">IoTDB<span class="token operator">&gt;</span> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">;</span></span>
<span class="line">Msg: <span class="token number">701</span> <span class="token keyword">Current</span> query <span class="token operator">is</span> <span class="token keyword">time</span> <span class="token keyword">out</span><span class="token punctuation">,</span> please <span class="token keyword">check</span> your statement <span class="token operator">or</span> <span class="token keyword">modify</span> timeout parameter<span class="token punctuation">.</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>The default timeout of a query is 60000 ms，which can be customized in the configuration file through the <code>query_timeout_threshold</code> parameter.</p><p>If you use JDBC or Session, we also support setting a timeout for a single query（Unit: ms）：</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">IoTDBStatement</span><span class="token punctuation">)</span> statement<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">executeQuery</span><span class="token punctuation">(</span><span class="token class-name">String</span> sql<span class="token punctuation">,</span> <span class="token keyword">long</span> timeoutInMS<span class="token punctuation">)</span></span>
<span class="line">session<span class="token punctuation">.</span><span class="token function">executeQueryStatement</span><span class="token punctuation">(</span><span class="token class-name">String</span> sql<span class="token punctuation">,</span> <span class="token keyword">long</span> timeout<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>If the timeout parameter is not configured or with a negative number, the default timeout time will be used.<br> If value 0 is used, timeout function will be disabled.</p></blockquote><h3 id="query-abort" tabindex="-1"><a class="header-anchor" href="#query-abort"><span>Query abort</span></a></h3><p>In addition to waiting for the query to time out passively, IoTDB also supports stopping the query actively:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">KILL</span> QUERY <span class="token operator">&lt;</span>queryId<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>You can abort the specified query by specifying <code>queryId</code>. If <code>queryId</code> is not specified, all executing queries will be killed.</p><p>To get the executing <code>queryId</code>，you can use the <code>show query processlist</code> command，which will show the list of all executing queries，with the following result set：</p><table><thead><tr><th>Time</th><th>queryId</th><th>statement</th></tr></thead><tbody><tr><td></td><td></td><td></td></tr></tbody></table><p>The maximum display length of statement is 64 characters. For statements with more than 64 characters, the intercepted part will be displayed.</p>`,37)]))}const p=a(o,[["render",i],["__file","Maintenance-Command.html.vue"]]),c=JSON.parse('{"path":"/UserGuide/V0.13.x/Maintenance-Tools/Maintenance-Command.html","title":"Maintenance Command","lang":"en-US","frontmatter":{"description":"Maintenance Command FLUSH Persist all the data points in the memory table of the storage group to the disk, and seal the data file. Note: This command does not need to be invoke...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Maintenance-Tools/Maintenance-Command.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V0.13.x/Maintenance-Tools/Maintenance-Command.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Maintenance Command"}],["meta",{"property":"og:description","content":"Maintenance Command FLUSH Persist all the data points in the memory table of the storage group to the disk, and seal the data file. Note: This command does not need to be invoke..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-07T08:05:06.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-07T08:05:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Maintenance Command\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-07T08:05:06.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"FLUSH","slug":"flush","link":"#flush","children":[]},{"level":2,"title":"MERGE","slug":"merge","link":"#merge","children":[]},{"level":2,"title":"CLEAR CACHE","slug":"clear-cache","link":"#clear-cache","children":[]},{"level":2,"title":"SET SYSTEM TO READONLY / WRITABLE","slug":"set-system-to-readonly-writable","link":"#set-system-to-readonly-writable","children":[]},{"level":2,"title":"SCHEMA SNAPSHOT","slug":"schema-snapshot","link":"#schema-snapshot","children":[]},{"level":2,"title":"Timeout","slug":"timeout","link":"#timeout","children":[{"level":3,"title":"Session timeout","slug":"session-timeout","link":"#session-timeout","children":[]},{"level":3,"title":"Query timeout","slug":"query-timeout","link":"#query-timeout","children":[]},{"level":3,"title":"Query abort","slug":"query-abort","link":"#query-abort","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1699344306000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1},{"name":"Itami Sho","email":"42286868+MiniSho@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.24,"words":672},"filePathRelative":"UserGuide/V0.13.x/Maintenance-Tools/Maintenance-Command.md","localizedDate":"July 10, 2023","autoDesc":true}');export{p as comp,c as data};
