import{_ as s,c as a,b as n,o as t}from"./app-W3EENNaa.js";const l={};function i(o,e){return t(),a("div",null,e[0]||(e[0]=[n(`<h1 id="maintenance-command" tabindex="-1"><a class="header-anchor" href="#maintenance-command"><span>Maintenance Command</span></a></h1><h2 id="flush" tabindex="-1"><a class="header-anchor" href="#flush"><span>FLUSH</span></a></h2><p>Persist all the data points in the memory table of the database to the disk, and seal the data file. In cluster mode, we provide commands to persist the specified database cache of local node and persist the specified database cache of the cluster.</p><p>Note: This command does not need to be invoked manually by the client. IoTDB has WAL to ensure data security<br> and IoTDB will flush when appropriate.<br> Frequently call flush can result in small data files that degrade query performance.</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line">IoTDB<span class="token operator">&gt;</span> FLUSH </span>
<span class="line">IoTDB<span class="token operator">&gt;</span> FLUSH <span class="token keyword">ON</span> <span class="token keyword">LOCAL</span></span>
<span class="line">IoTDB<span class="token operator">&gt;</span> FLUSH <span class="token keyword">ON</span> CLUSTER</span>
<span class="line">IoTDB<span class="token operator">&gt;</span> FLUSH root<span class="token punctuation">.</span>ln</span>
<span class="line">IoTDB<span class="token operator">&gt;</span> FLUSH root<span class="token punctuation">.</span>sg1<span class="token punctuation">,</span>root<span class="token punctuation">.</span>sg2 <span class="token keyword">ON</span> <span class="token keyword">LOCAL</span></span>
<span class="line">IoTDB<span class="token operator">&gt;</span> FLUSH root<span class="token punctuation">.</span>sg1<span class="token punctuation">,</span>root<span class="token punctuation">.</span>sg2 <span class="token keyword">ON</span> CLUSTER</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="clear-cache" tabindex="-1"><a class="header-anchor" href="#clear-cache"><span>CLEAR CACHE</span></a></h2><p>Clear the cache of chunk, chunk metadata and timeseries metadata to release the memory footprint. In cluster mode, we provide commands to clear local node cache and clear the cluster cache.</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line">IoTDB<span class="token operator">&gt;</span> CLEAR CACHE</span>
<span class="line">IoTDB<span class="token operator">&gt;</span> CLEAR CACHE <span class="token keyword">ON</span> <span class="token keyword">LOCAL</span></span>
<span class="line">IoTDB<span class="token operator">&gt;</span> CLEAR CACHE <span class="token keyword">ON</span> CLUSTER</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="set-system-to-readonly-running" tabindex="-1"><a class="header-anchor" href="#set-system-to-readonly-running"><span>SET SYSTEM TO READONLY / RUNNING</span></a></h2><p>Manually set IoTDB system to running, read-only mode. In cluster mode, we provide commands to set the local node status and set the cluster status, valid for the entire cluster by default.</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line">IoTDB<span class="token operator">&gt;</span> <span class="token keyword">SET</span> SYSTEM <span class="token keyword">TO</span> RUNNING</span>
<span class="line">IoTDB<span class="token operator">&gt;</span> <span class="token keyword">SET</span> SYSTEM <span class="token keyword">TO</span> READONLY <span class="token keyword">ON</span> <span class="token keyword">LOCAL</span></span>
<span class="line">IoTDB<span class="token operator">&gt;</span> <span class="token keyword">SET</span> SYSTEM <span class="token keyword">TO</span> READONLY <span class="token keyword">ON</span> CLUSTER</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="kill-query" tabindex="-1"><a class="header-anchor" href="#kill-query"><span>Kill Query</span></a></h2><p>IoTDB supports setting session connection timeouts and query timeouts, and also allows to stop the executing query manually.</p><h3 id="session-timeout" tabindex="-1"><a class="header-anchor" href="#session-timeout"><span>Session timeout</span></a></h3><p>Session timeout controls when idle sessions are closed. An idle session is one that had not initiated any query or non-query operations for a period of time.</p><p>Session timeout is disabled by default and can be set using the <code>dn_session_timeout_threshold</code> parameter in IoTDB configuration file.</p><h3 id="query-timeout" tabindex="-1"><a class="header-anchor" href="#query-timeout"><span>Query timeout</span></a></h3><p>For queries that take too long to execute, IoTDB will forcibly interrupt the query and throw a timeout exception, as shown in the figure:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line">IoTDB<span class="token operator">&gt;</span> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">;</span></span>
<span class="line">Msg: <span class="token number">701</span> <span class="token keyword">Current</span> query <span class="token operator">is</span> <span class="token keyword">time</span> <span class="token keyword">out</span><span class="token punctuation">,</span> please <span class="token keyword">check</span> your statement <span class="token operator">or</span> <span class="token keyword">modify</span> timeout parameter<span class="token punctuation">.</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>The default timeout of a query is 60000 ms，which can be customized in the configuration file through the <code>query_timeout_threshold</code> parameter.</p><p>If you use JDBC or Session, we also support setting a timeout for a single query（Unit: ms）：</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">IoTDBStatement</span><span class="token punctuation">)</span> statement<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">executeQuery</span><span class="token punctuation">(</span><span class="token class-name">String</span> sql<span class="token punctuation">,</span> <span class="token keyword">long</span> timeoutInMS<span class="token punctuation">)</span></span>
<span class="line">session<span class="token punctuation">.</span><span class="token function">executeQueryStatement</span><span class="token punctuation">(</span><span class="token class-name">String</span> sql<span class="token punctuation">,</span> <span class="token keyword">long</span> timeout<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>If the timeout parameter is not configured or with a negative number, the default timeout time will be used.<br> If value 0 is used, timeout function will be disabled.</p></blockquote><h3 id="query-abort" tabindex="-1"><a class="header-anchor" href="#query-abort"><span>Query abort</span></a></h3><p>In addition to waiting for the query to time out passively, IoTDB also supports stopping the query actively:</p><h4 id="kill-specific-query" tabindex="-1"><a class="header-anchor" href="#kill-specific-query"><span>Kill specific query</span></a></h4><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">KILL</span> QUERY <span class="token operator">&lt;</span>queryId<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>You can kill the specified query by specifying <code>queryId</code>. <code>queryId</code> is a string, so you need to put quotes around it.</p><p>To get the executing <code>queryId</code>，you can use the <a href="#show-queries">show queries</a> command, which will show the list of all executing queries.</p><h5 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h5><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">kill</span> query <span class="token string">&#39;20221205_114444_00003_5&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="kill-all-queries" tabindex="-1"><a class="header-anchor" href="#kill-all-queries"><span>Kill all queries</span></a></h4><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">KILL</span> <span class="token keyword">ALL</span> QUERIES</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Kill all queries on all DataNodes.</p><h2 id="show-queries" tabindex="-1"><a class="header-anchor" href="#show-queries"><span>SHOW QUERIES</span></a></h2><p>This command is used to display all ongoing queries, here are usage scenarios：</p><ul><li>When you want to kill a query, you need to get the queryId of it</li><li>Verify that a query has been killed after killing</li></ul><h3 id="grammar" tabindex="-1"><a class="header-anchor" href="#grammar"><span>Grammar</span></a></h3><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">SHOW</span> QUERIES <span class="token operator">|</span> <span class="token punctuation">(</span>QUERY PROCESSLIST<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">[</span><span class="token keyword">WHERE</span> whereCondition<span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">[</span><span class="token keyword">ORDER</span> <span class="token keyword">BY</span> sortKey {<span class="token keyword">ASC</span> <span class="token operator">|</span> <span class="token keyword">DESC</span>}<span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">[</span><span class="token keyword">LIMIT</span> rowLimit<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token keyword">OFFSET</span> rowOffset<span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Note：</p><ul><li>Compatibility with old syntax <code>show query processlist</code></li><li>When using WHERE clause, ensure that target columns of filter are existed in the result set</li><li>When using ORDER BY clause, ensure that sortKeys are existed in the result set</li></ul><h3 id="resultset" tabindex="-1"><a class="header-anchor" href="#resultset"><span>ResultSet</span></a></h3><p>Time：Start time of query，DataType is <code>INT64</code><br> QueryId：Cluster - level unique query identifier，DataType is <code>TEXT</code>, format is <code>yyyyMMdd_HHmmss_index_dataNodeId</code><br> DataNodeId：DataNode which do execution of query，DataType is <code>INT32</code><br> ElapsedTime：Execution time of query (Imperfectly accurate)，<code>second</code> for unit，DataType is <code>FLOAT</code><br> Statement：Origin string of query，DataType is <code>TEXT</code></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+-----------------------+----------+-----------+------------+</span>
<span class="line">|                         Time|                QueryId|DataNodeId|ElapsedTime|   Statement|</span>
<span class="line">+-----------------------------+-----------------------+----------+-----------+------------+</span>
<span class="line">|2022-12-30T13:26:47.260+08:00|20221230_052647_00005_1|         1|      0.019|show queries|</span>
<span class="line">+-----------------------------+-----------------------+----------+-----------+------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Note：</p><ul><li>Result set is arranged in Time ASC as default, use ORDER BY clause if you want to sort it by other keys.</li></ul><h3 id="sql-example" tabindex="-1"><a class="header-anchor" href="#sql-example"><span>SQL Example</span></a></h3><h4 id="example1-obtain-all-current-queries-whose-execution-time-is-longer-than-30-seconds" tabindex="-1"><a class="header-anchor" href="#example1-obtain-all-current-queries-whose-execution-time-is-longer-than-30-seconds"><span>Example1：Obtain all current queries whose execution time is longer than 30 seconds</span></a></h4><p>SQL string：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">SHOW</span> QUERIES <span class="token keyword">WHERE</span> ElapsedTime <span class="token operator">&gt;</span> <span class="token number">30</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>SQL result：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+-----------------------+----------+-----------+-----------------------------+</span>
<span class="line">|                         Time|                QueryId|DataNodeId|ElapsedTime|                    Statement|</span>
<span class="line">+-----------------------------+-----------------------+----------+-----------+-----------------------------+</span>
<span class="line">|2022-12-05T11:44:44.515+08:00|20221205_114444_00002_2|         2|     31.111|     select * from root.test1|</span>
<span class="line">+-----------------------------+-----------------------+----------+-----------+-----------------------------+</span>
<span class="line">|2022-12-05T11:44:45.515+08:00|20221205_114445_00003_2|         2|     30.111|     select * from root.test2|</span>
<span class="line">+-----------------------------+-----------------------+----------+-----------+-----------------------------+</span>
<span class="line">|2022-12-05T11:44:43.515+08:00|20221205_114443_00001_3|         3|     32.111|        select * from root.**|</span>
<span class="line">+-----------------------------+-----------------------+----------+-----------+-----------------------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example2-obtain-the-top5-queries-in-the-current-execution-time" tabindex="-1"><a class="header-anchor" href="#example2-obtain-the-top5-queries-in-the-current-execution-time"><span>Example2：Obtain the Top5 queries in the current execution time</span></a></h4><p>SQL string：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">SHOW</span> QUERIES <span class="token keyword">limit</span> <span class="token number">5</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Equivalent to</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">SHOW</span> QUERIES <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> ElapsedTime <span class="token keyword">DESC</span> <span class="token keyword">limit</span> <span class="token number">5</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>SQL result：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+-----------------------+----------+-----------+-----------------------------+</span>
<span class="line">|                         Time|                QueryId|DataNodeId|ElapsedTime|                    Statement|</span>
<span class="line">+-----------------------------+-----------------------+----------+-----------+-----------------------------+</span>
<span class="line">|2022-12-05T11:44:44.515+08:00|20221205_114444_00003_5|         5|     31.111|     select * from root.test1|</span>
<span class="line">+-----------------------------+-----------------------+----------+-----------+-----------------------------+</span>
<span class="line">|2022-12-05T11:44:45.515+08:00|20221205_114445_00003_2|         2|     30.111|     select * from root.test2|</span>
<span class="line">+-----------------------------+-----------------------+----------+-----------+-----------------------------+</span>
<span class="line">|2022-12-05T11:44:46.515+08:00|20221205_114446_00003_3|         3|     29.111|     select * from root.test3|</span>
<span class="line">+-----------------------------+-----------------------+----------+-----------+-----------------------------+</span>
<span class="line">|2022-12-05T11:44:47.515+08:00|20221205_114447_00003_2|         2|     28.111|     select * from root.test4|</span>
<span class="line">+-----------------------------+-----------------------+----------+-----------+-----------------------------+</span>
<span class="line">|2022-12-05T11:44:48.515+08:00|20221205_114448_00003_4|         4|     27.111|     select * from root.test5|</span>
<span class="line">+-----------------------------+-----------------------+----------+-----------+-----------------------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,59)]))}const p=s(l,[["render",i],["__file","Maintenance-Command.html.vue"]]),d=JSON.parse('{"path":"/UserGuide/V1.1.x/Maintenance-Tools/Maintenance-Command.html","title":"Maintenance Command","lang":"en-US","frontmatter":{"description":"Maintenance Command FLUSH Persist all the data points in the memory table of the database to the disk, and seal the data file. In cluster mode, we provide commands to persist th...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/Maintenance-Tools/Maintenance-Command.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.1.x/Maintenance-Tools/Maintenance-Command.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Maintenance Command"}],["meta",{"property":"og:description","content":"Maintenance Command FLUSH Persist all the data points in the memory table of the database to the disk, and seal the data file. In cluster mode, we provide commands to persist th..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Maintenance Command\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"FLUSH","slug":"flush","link":"#flush","children":[]},{"level":2,"title":"CLEAR CACHE","slug":"clear-cache","link":"#clear-cache","children":[]},{"level":2,"title":"SET SYSTEM TO READONLY / RUNNING","slug":"set-system-to-readonly-running","link":"#set-system-to-readonly-running","children":[]},{"level":2,"title":"Kill Query","slug":"kill-query","link":"#kill-query","children":[{"level":3,"title":"Session timeout","slug":"session-timeout","link":"#session-timeout","children":[]},{"level":3,"title":"Query timeout","slug":"query-timeout","link":"#query-timeout","children":[]},{"level":3,"title":"Query abort","slug":"query-abort","link":"#query-abort","children":[]}]},{"level":2,"title":"SHOW QUERIES","slug":"show-queries","link":"#show-queries","children":[{"level":3,"title":"Grammar","slug":"grammar","link":"#grammar","children":[]},{"level":3,"title":"ResultSet","slug":"resultset","link":"#resultset","children":[]},{"level":3,"title":"SQL Example","slug":"sql-example","link":"#sql-example","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":3.24,"words":972},"filePathRelative":"UserGuide/V1.1.x/Maintenance-Tools/Maintenance-Command.md","localizedDate":"July 10, 2023","autoDesc":true}');export{p as comp,d as data};
