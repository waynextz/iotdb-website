import{_ as a,c as e,b as n,o as l}from"./app-C-0rb--l.js";const o={};function t(p,s){return l(),e("div",null,s[0]||(s[0]=[n(`<h1 id="运维命令" tabindex="-1"><a class="header-anchor" href="#运维命令"><span>运维命令</span></a></h1><h2 id="flush" tabindex="-1"><a class="header-anchor" href="#flush"><span>FLUSH</span></a></h2><p>将指定 database 的内存缓存区 Memory Table 的数据持久化到磁盘上，并将数据文件封口。在集群模式下，我们提供了持久化本节点的指定 database 的缓存、持久化整个集群指定 database 的缓存命令。</p><p>注意：此命令客户端不需要手动调用，IoTDB 有 wal 保证数据安全，IoTDB 会选择合适的时机进行 flush。<br> 如果频繁调用 flush 会导致数据文件很小，降低查询性能。</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#ABB2BF;">IoTDB</span><span style="color:#56B6C2;">&gt;</span><span style="color:#ABB2BF;"> FLUSH </span></span>
<span class="line"><span style="color:#ABB2BF;">IoTDB</span><span style="color:#56B6C2;">&gt;</span><span style="color:#ABB2BF;"> FLUSH </span><span style="color:#C678DD;">ON</span><span style="color:#C678DD;"> LOCAL</span></span>
<span class="line"><span style="color:#ABB2BF;">IoTDB</span><span style="color:#56B6C2;">&gt;</span><span style="color:#ABB2BF;"> FLUSH </span><span style="color:#C678DD;">ON</span><span style="color:#ABB2BF;"> CLUSTER</span></span>
<span class="line"><span style="color:#ABB2BF;">IoTDB</span><span style="color:#56B6C2;">&gt;</span><span style="color:#ABB2BF;"> FLUSH </span><span style="color:#D19A66;">root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">ln</span></span>
<span class="line"><span style="color:#ABB2BF;">IoTDB</span><span style="color:#56B6C2;">&gt;</span><span style="color:#ABB2BF;"> FLUSH </span><span style="color:#D19A66;">root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sg1</span><span style="color:#ABB2BF;">,</span><span style="color:#D19A66;">root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sg2</span><span style="color:#C678DD;"> ON</span><span style="color:#C678DD;"> LOCAL</span></span>
<span class="line"><span style="color:#ABB2BF;">IoTDB</span><span style="color:#56B6C2;">&gt;</span><span style="color:#ABB2BF;"> FLUSH </span><span style="color:#D19A66;">root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sg1</span><span style="color:#ABB2BF;">,</span><span style="color:#D19A66;">root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sg2</span><span style="color:#C678DD;"> ON</span><span style="color:#ABB2BF;"> CLUSTER</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="clear-cache" tabindex="-1"><a class="header-anchor" href="#clear-cache"><span>CLEAR CACHE</span></a></h2><p>手动清除chunk, chunk metadata和timeseries metadata的缓存，在内存资源紧张时，可以通过此命令，释放查询时缓存所占的内存空间。在集群模式下，我们提供了清空本节点缓存、清空整个集群缓存命令。</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#ABB2BF;">IoTDB</span><span style="color:#56B6C2;">&gt;</span><span style="color:#C678DD;"> CLEAR</span><span style="color:#ABB2BF;"> CACHE</span></span>
<span class="line"><span style="color:#ABB2BF;">IoTDB</span><span style="color:#56B6C2;">&gt;</span><span style="color:#C678DD;"> CLEAR</span><span style="color:#ABB2BF;"> CACHE </span><span style="color:#C678DD;">ON</span><span style="color:#C678DD;"> LOCAL</span></span>
<span class="line"><span style="color:#ABB2BF;">IoTDB</span><span style="color:#56B6C2;">&gt;</span><span style="color:#C678DD;"> CLEAR</span><span style="color:#ABB2BF;"> CACHE </span><span style="color:#C678DD;">ON</span><span style="color:#ABB2BF;"> CLUSTER</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="set-system-to-readonly-running" tabindex="-1"><a class="header-anchor" href="#set-system-to-readonly-running"><span>SET SYSTEM TO READONLY / RUNNING</span></a></h2><p>手动设置系统为正常运行、只读状态。在集群模式下，我们提供了设置本节点状态、设置整个集群状态的命令，默认对整个集群生效。</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#ABB2BF;">IoTDB</span><span style="color:#56B6C2;">&gt;</span><span style="color:#C678DD;"> SET</span><span style="color:#C678DD;"> SYSTEM</span><span style="color:#C678DD;"> TO</span><span style="color:#ABB2BF;"> RUNNING</span></span>
<span class="line"><span style="color:#ABB2BF;">IoTDB</span><span style="color:#56B6C2;">&gt;</span><span style="color:#C678DD;"> SET</span><span style="color:#C678DD;"> SYSTEM</span><span style="color:#C678DD;"> TO</span><span style="color:#C678DD;"> READONLY</span><span style="color:#C678DD;"> ON</span><span style="color:#C678DD;"> LOCAL</span></span>
<span class="line"><span style="color:#ABB2BF;">IoTDB</span><span style="color:#56B6C2;">&gt;</span><span style="color:#C678DD;"> SET</span><span style="color:#C678DD;"> SYSTEM</span><span style="color:#C678DD;"> TO</span><span style="color:#C678DD;"> READONLY</span><span style="color:#C678DD;"> ON</span><span style="color:#ABB2BF;"> CLUSTER</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="终止查询" tabindex="-1"><a class="header-anchor" href="#终止查询"><span>终止查询</span></a></h2><p>IoTDB 支持设置 Session 连接超时和查询超时时间，并支持手动终止正在执行的查询。</p><h3 id="session-超时" tabindex="-1"><a class="header-anchor" href="#session-超时"><span>Session 超时</span></a></h3><p>Session 超时控制何时关闭空闲 Session。空闲 Session 指在一段时间内没有发起任何操作的 Session。</p><p>Session 超时默认未开启。可以在配置文件中通过 <code>dn_session_timeout_threshold</code> 参数进行配置。</p><h3 id="查询超时" tabindex="-1"><a class="header-anchor" href="#查询超时"><span>查询超时</span></a></h3><p>对于执行时间过长的查询，IoTDB 将强行中断该查询，并抛出超时异常，如下所示：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#ABB2BF;">IoTDB</span><span style="color:#56B6C2;">&gt;</span><span style="color:#C678DD;"> select</span><span style="color:#ABB2BF;"> * </span><span style="color:#C678DD;">from</span><span style="color:#C678DD;"> root</span><span style="color:#ABB2BF;">.**;</span></span>
<span class="line"><span style="color:#ABB2BF;">Msg: </span><span style="color:#D19A66;">701</span><span style="color:#ABB2BF;"> Current query </span><span style="color:#C678DD;">is</span><span style="color:#C678DD;"> time</span><span style="color:#C678DD;"> out</span><span style="color:#ABB2BF;">, please </span><span style="color:#C678DD;">check</span><span style="color:#ABB2BF;"> your </span><span style="color:#C678DD;">statement</span><span style="color:#C678DD;"> or</span><span style="color:#C678DD;"> modify</span><span style="color:#C678DD;"> timeout</span><span style="color:#ABB2BF;"> parameter.</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>系统默认的超时时间为 60000 ms，可以在配置文件中通过 <code>query_timeout_threshold</code> 参数进行自定义配置。</p><p>如果您使用 JDBC 或 Session，还支持对单个查询设置超时时间（单位为 ms）：</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#E06C75;">((IoTDBStatement) statement)</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">executeQuery</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">String</span><span style="color:#ABB2BF;"> sql, </span><span style="color:#C678DD;">long</span><span style="color:#ABB2BF;"> timeoutInMS)</span></span>
<span class="line"><span style="color:#E5C07B;">session</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">executeQueryStatement</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">String</span><span style="color:#ABB2BF;"> sql, </span><span style="color:#C678DD;">long</span><span style="color:#ABB2BF;"> timeout)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>如果不配置超时时间参数或将超时时间设置为负数，将使用服务器端默认的超时时间。<br> 如果超时时间设置为0，则会禁用超时功能。</p></blockquote><h3 id="查询终止" tabindex="-1"><a class="header-anchor" href="#查询终止"><span>查询终止</span></a></h3><p>尚未支持</p>`,25)]))}const c=a(o,[["render",t],["__file","Maintenance-Command.html.vue"]]),i=JSON.parse('{"path":"/zh/UserGuide/V1.0.x/Maintenance-Tools/Maintenance-Command.html","title":"运维命令","lang":"zh-CN","frontmatter":{"description":"运维命令 FLUSH 将指定 database 的内存缓存区 Memory Table 的数据持久化到磁盘上，并将数据文件封口。在集群模式下，我们提供了持久化本节点的指定 database 的缓存、持久化整个集群指定 database 的缓存命令。 注意：此命令客户端不需要手动调用，IoTDB 有 wal 保证数据安全，IoTDB 会选择合适的时机进行...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.0.x/Maintenance-Tools/Maintenance-Command.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/Maintenance-Tools/Maintenance-Command.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"运维命令"}],["meta",{"property":"og:description","content":"运维命令 FLUSH 将指定 database 的内存缓存区 Memory Table 的数据持久化到磁盘上，并将数据文件封口。在集群模式下，我们提供了持久化本节点的指定 database 的缓存、持久化整个集群指定 database 的缓存命令。 注意：此命令客户端不需要手动调用，IoTDB 有 wal 保证数据安全，IoTDB 会选择合适的时机进行..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"运维命令\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"FLUSH","slug":"flush","link":"#flush","children":[]},{"level":2,"title":"CLEAR CACHE","slug":"clear-cache","link":"#clear-cache","children":[]},{"level":2,"title":"SET SYSTEM TO READONLY / RUNNING","slug":"set-system-to-readonly-running","link":"#set-system-to-readonly-running","children":[]},{"level":2,"title":"终止查询","slug":"终止查询","link":"#终止查询","children":[{"level":3,"title":"Session 超时","slug":"session-超时","link":"#session-超时","children":[]},{"level":3,"title":"查询超时","slug":"查询超时","link":"#查询超时","children":[]},{"level":3,"title":"查询终止","slug":"查询终止","link":"#查询终止","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","username":"CritasWang","email":"critas@outlook.com","commits":1,"url":"https://github.com/CritasWang"}]},"readingTime":{"minutes":2.4,"words":720},"filePathRelative":"zh/UserGuide/V1.0.x/Maintenance-Tools/Maintenance-Command.md","localizedDate":"2023年7月10日","autoDesc":true}');export{c as comp,i as data};
