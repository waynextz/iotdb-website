import{_ as e,o as a,c as t,e as s}from"./app-CQeJnOJS.js";const n={},i=s(`<h2 id="最新点查询" tabindex="-1"><a class="header-anchor" href="#最新点查询"><span>最新点查询</span></a></h2><p>最新点查询是时序数据库 Apache IoTDB 中提供的一种特殊查询。它返回指定时间序列中时间戳最大的数据点，即一条序列的最新状态。</p><p>在物联网数据分析场景中，此功能尤为重要。为了满足了用户对设备实时监控的需求，Apache IoTDB 对最新点查询进行了<strong>缓存优化</strong>，能够提供毫秒级的返回速度。</p><h3 id="相关配置项" tabindex="-1"><a class="header-anchor" href="#相关配置项"><span>相关配置项</span></a></h3><p>IoTDB 在 <code>iotdb-common.properties</code> 中提供了 <code>enable_last_cache</code> 和 <code>schema_memory_proportion</code> 两个配置参数，分别用于开启/关闭最新点缓存，以及控制打开最新点缓存后的内存占用。</p><h4 id="enable-last-cache" tabindex="-1"><a class="header-anchor" href="#enable-last-cache"><span>enable_last_cache</span></a></h4><p><code>enable_last_cache</code> 为 <code>true</code> 时，开启最新点缓存；为 <code>false</code> 时，关闭最新点缓存。</p><h4 id="schema-memory-proportion" tabindex="-1"><a class="header-anchor" href="#schema-memory-proportion"><span>schema_memory_proportion</span></a></h4><p>指定了 SchemaRegion, SchemaCache 以及 PartitionCache的内存分配比例，最新点缓存在 SchemaCache 中，所以可以通过调整这个参数，达到调整最新点缓存内存占用的效果。<br> 默认为 <code>5:4:1</code>，即最新点缓存所在的 SchemaCache，占用元数据内存的 40%。</p><h3 id="sql-语法" tabindex="-1"><a class="header-anchor" href="#sql-语法"><span>SQL 语法：</span></a></h3><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token keyword">last</span> <span class="token operator">&lt;</span>Path<span class="token operator">&gt;</span> <span class="token punctuation">[</span>COMMA <span class="token operator">&lt;</span>Path<span class="token operator">&gt;</span><span class="token punctuation">]</span><span class="token operator">*</span> <span class="token keyword">from</span> <span class="token operator">&lt;</span> PrefixPath <span class="token operator">&gt;</span> <span class="token punctuation">[</span>COMMA <span class="token operator">&lt;</span> PrefixPath <span class="token operator">&gt;</span><span class="token punctuation">]</span><span class="token operator">*</span> <span class="token operator">&lt;</span>whereClause<span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token keyword">ORDER</span> <span class="token keyword">BY</span> TIMESERIES <span class="token punctuation">(</span><span class="token keyword">DESC</span> <span class="token operator">|</span> <span class="token keyword">ASC</span><span class="token punctuation">)</span>?<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其含义是： 查询时间序列 prefixPath.path 中最近时间戳的数据。</p><ul><li><p><code>whereClause</code> 中当前只支持时间过滤条件，任何其他过滤条件都将会返回异常。当缓存的最新点不满足过滤条件时，IoTDB 需要从存储中获取结果，此时性能将会有所下降。</p></li><li><p>结果集为四列的结构：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+----+----------+-----+--------+
|Time|timeseries|value|dataType|
+----+----------+-----+--------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>可以使用 <code>ORDER BY TIMESERIES (DESC | ASC)</code> 指定结果集按照序列名降序/升序排列。</p></li></ul><p><strong>示例 1：</strong> 查询 root.ln.wf01.wt01.status 的最新数据点</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; select last status from root.ln.wf01.wt01
+-----------------------------+------------------------+-----+--------+
|                         Time|              timeseries|value|dataType|
+-----------------------------+------------------------+-----+--------+
|2017-11-07T23:59:00.000+08:00|root.ln.wf01.wt01.status|false| BOOLEAN|
+-----------------------------+------------------------+-----+--------+
Total line number = 1
It costs 0.000s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong> 查询 root.ln.wf01.wt01 下 status，temperature 时间戳大于等于 2017-11-07T23:50:00 的最新数据点。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; select last status, temperature from root.ln.wf01.wt01 where time &gt;= 2017-11-07T23:50:00
+-----------------------------+-----------------------------+---------+--------+
|                         Time|                   timeseries|    value|dataType|
+-----------------------------+-----------------------------+---------+--------+
|2017-11-07T23:59:00.000+08:00|     root.ln.wf01.wt01.status|    false| BOOLEAN|
|2017-11-07T23:59:00.000+08:00|root.ln.wf01.wt01.temperature|21.067368|  DOUBLE|
+-----------------------------+-----------------------------+---------+--------+
Total line number = 2
It costs 0.002s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong> 查询 root.ln.wf01.wt01 下所有序列的最新数据点，并按照序列名降序排列。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; select last * from root.ln.wf01.wt01 order by timeseries desc;
+-----------------------------+-----------------------------+---------+--------+
|                         Time|                   timeseries|    value|dataType|
+-----------------------------+-----------------------------+---------+--------+
|2017-11-07T23:59:00.000+08:00|root.ln.wf01.wt01.temperature|21.067368|  DOUBLE|
|2017-11-07T23:59:00.000+08:00|     root.ln.wf01.wt01.status|    false| BOOLEAN|
+-----------------------------+-----------------------------+---------+--------+
Total line number = 2
It costs 0.002s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),o=[i];function l(r,c){return a(),t("div",null,o)}const p=e(n,[["render",l],["__file","Last-Query.html.vue"]]),m=JSON.parse('{"path":"/zh/UserGuide/V1.1.x/Query-Data/Last-Query.html","title":"","lang":"zh-CN","frontmatter":{"description":"最新点查询 最新点查询是时序数据库 Apache IoTDB 中提供的一种特殊查询。它返回指定时间序列中时间戳最大的数据点，即一条序列的最新状态。 在物联网数据分析场景中，此功能尤为重要。为了满足了用户对设备实时监控的需求，Apache IoTDB 对最新点查询进行了缓存优化，能够提供毫秒级的返回速度。 相关配置项 IoTDB 在 iotdb-comm...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.1.x/Query-Data/Last-Query.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/Query-Data/Last-Query.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"最新点查询 最新点查询是时序数据库 Apache IoTDB 中提供的一种特殊查询。它返回指定时间序列中时间戳最大的数据点，即一条序列的最新状态。 在物联网数据分析场景中，此功能尤为重要。为了满足了用户对设备实时监控的需求，Apache IoTDB 对最新点查询进行了缓存优化，能够提供毫秒级的返回速度。 相关配置项 IoTDB 在 iotdb-comm..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-31T13:49:08.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-31T13:49:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-31T13:49:08.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"最新点查询","slug":"最新点查询","link":"#最新点查询","children":[{"level":3,"title":"相关配置项","slug":"相关配置项","link":"#相关配置项","children":[]},{"level":3,"title":"SQL 语法：","slug":"sql-语法","link":"#sql-语法","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1690811348000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1},{"name":"Jackie Tien","email":"jackietien97@gmail.com","commits":1}]},"readingTime":{"minutes":2.35,"words":705},"filePathRelative":"zh/UserGuide/V1.1.x/Query-Data/Last-Query.md","localizedDate":"2023年7月10日","autoDesc":true}');export{p as comp,m as data};
