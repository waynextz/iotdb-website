import{_ as r,c as d,b as s,d as l,e as n,a as t,w as i,r as o,o as u}from"./app-DLxi_e3x.js";const c={};function p(v,e){const a=o("RouteLink");return u(),d("div",null,[e[6]||(e[6]=s(`<h2 id="时间序列管理" tabindex="-1"><a class="header-anchor" href="#时间序列管理"><span>时间序列管理</span></a></h2><h3 id="创建时间序列" tabindex="-1"><a class="header-anchor" href="#创建时间序列"><span>创建时间序列</span></a></h3><p>根据建立的数据模型，我们可以分别在两个存储组中创建相应的时间序列。创建时间序列的 SQL 语句如下所示：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB &gt; create timeseries root.ln.wf01.wt01.status with datatype=BOOLEAN,encoding=PLAIN</span>
<span class="line">IoTDB &gt; create timeseries root.ln.wf01.wt01.temperature with datatype=FLOAT,encoding=RLE</span>
<span class="line">IoTDB &gt; create timeseries root.ln.wf02.wt02.hardware with datatype=TEXT,encoding=PLAIN</span>
<span class="line">IoTDB &gt; create timeseries root.ln.wf02.wt02.status with datatype=BOOLEAN,encoding=PLAIN</span>
<span class="line">IoTDB &gt; create timeseries root.sgcc.wf03.wt01.status with datatype=BOOLEAN,encoding=PLAIN</span>
<span class="line">IoTDB &gt; create timeseries root.sgcc.wf03.wt01.temperature with datatype=FLOAT,encoding=RLE</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从 v0.13 起，可以使用简化版的 SQL 语句创建时间序列：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB &gt; create timeseries root.ln.wf01.wt01.status BOOLEAN encoding=PLAIN</span>
<span class="line">IoTDB &gt; create timeseries root.ln.wf01.wt01.temperature FLOAT encoding=RLE</span>
<span class="line">IoTDB &gt; create timeseries root.ln.wf02.wt02.hardware TEXT encoding=PLAIN</span>
<span class="line">IoTDB &gt; create timeseries root.ln.wf02.wt02.status BOOLEAN encoding=PLAIN</span>
<span class="line">IoTDB &gt; create timeseries root.sgcc.wf03.wt01.status BOOLEAN encoding=PLAIN</span>
<span class="line">IoTDB &gt; create timeseries root.sgcc.wf03.wt01.temperature FLOAT encoding=RLE</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意的是，当创建时间序列时指定的编码方式与数据类型不对应时，系统会给出相应的错误提示，如下所示：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; create timeseries root.ln.wf02.wt02.status WITH DATATYPE=BOOLEAN, ENCODING=TS_2DIFF</span>
<span class="line">error: encoding TS_2DIFF does not support BOOLEAN</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,8)),l("p",null,[e[1]||(e[1]=n("详细的数据类型与编码方式的对应列表请参见 ")),t(a,{to:"/zh/UserGuide/V0.13.x/Data-Concept/Encoding.html"},{default:i(()=>e[0]||(e[0]=[n("编码方式")])),_:1}),e[2]||(e[2]=n("。"))]),e[7]||(e[7]=s(`<h3 id="创建对齐时间序列" tabindex="-1"><a class="header-anchor" href="#创建对齐时间序列"><span>创建对齐时间序列</span></a></h3><p>创建一组对齐时间序列的SQL语句如下所示：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; CREATE ALIGNED TIMESERIES root.ln.wf01.GPS(latitude FLOAT encoding=PLAIN compressor=SNAPPY, longitude FLOAT encoding=PLAIN compressor=SNAPPY) </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>一组对齐序列中的序列可以有不同的数据类型、编码方式以及压缩方式。</p><p>对齐的时间序列暂不支持设置别名、标签、属性。</p><h3 id="删除时间序列" tabindex="-1"><a class="header-anchor" href="#删除时间序列"><span>删除时间序列</span></a></h3><p>我们可以使用<code>DELETE TimeSeries &lt;PathPattern&gt;</code>语句来删除我们之前创建的时间序列。SQL 语句如下所示：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; delete timeseries root.ln.wf01.wt01.status</span>
<span class="line">IoTDB&gt; delete timeseries root.ln.wf01.wt01.temperature, root.ln.wf02.wt02.hardware</span>
<span class="line">IoTDB&gt; delete timeseries root.ln.wf02.*</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看时间序列" tabindex="-1"><a class="header-anchor" href="#查看时间序列"><span>查看时间序列</span></a></h3><ul><li><p>SHOW LATEST? TIMESERIES pathPattern? whereClause? limitClause?</p><p>SHOW TIMESERIES 中可以有四种可选的子句，查询结果为这些时间序列的所有信息</p></li></ul><p>时间序列信息具体包括：时间序列路径名，存储组，Measurement 别名，数据类型，编码方式，压缩方式，属性和标签。</p><p>查询结果集的大小默认为 10000000，如需查询更多信息，请使用<code>limit</code>和<code>offset</code>。</p><p>示例：</p><ul><li><p>SHOW TIMESERIES</p><p>展示系统中所有的时间序列信息</p></li><li><p>SHOW TIMESERIES &lt;<code>Path</code>&gt;</p><p>返回给定路径的下的所有时间序列信息。其中 <code>Path</code> 需要为一个时间序列路径或路径模式。例如，分别查看<code>root</code>路径和<code>root.ln</code>路径下的时间序列，SQL 语句如下所示：</p></li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show timeseries root.**</span>
<span class="line">IoTDB&gt; show timeseries root.ln.**</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果分别为：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-------------------------------+--------+-------------+--------+--------+-----------+-------------------------------------------+--------------------------------------------------------+--------+-------------------+</span>
<span class="line">|                     timeseries|   alias|storage group|dataType|encoding|compression|                                       tags|                                              attributes|deadband|deadband parameters|</span>
<span class="line">+-------------------------------+--------+-------------+--------+--------+-----------+-------------------------------------------+--------------------------------------------------------+--------+-------------------+</span>
<span class="line">|root.sgcc.wf03.wt01.temperature|    null|    root.sgcc|   FLOAT|     RLE|     SNAPPY|                                       null|                                                    null|    null|               null|</span>
<span class="line">|     root.sgcc.wf03.wt01.status|    null|    root.sgcc| BOOLEAN|   PLAIN|     SNAPPY|                                       null|                                                    null|    null|               null|</span>
<span class="line">|             root.turbine.d1.s1|newAlias| root.turbine|   FLOAT|     RLE|     SNAPPY|{&quot;newTag1&quot;:&quot;newV1&quot;,&quot;tag4&quot;:&quot;v4&quot;,&quot;tag3&quot;:&quot;v3&quot;}|{&quot;attr2&quot;:&quot;v2&quot;,&quot;attr1&quot;:&quot;newV1&quot;,&quot;attr4&quot;:&quot;v4&quot;,&quot;attr3&quot;:&quot;v3&quot;}|    null|               null|</span>
<span class="line">|     root.ln.wf02.wt02.hardware|    null|      root.ln|    TEXT|   PLAIN|     SNAPPY|                                       null|                                                    null|    null|               null|</span>
<span class="line">|       root.ln.wf02.wt02.status|    null|      root.ln| BOOLEAN|   PLAIN|     SNAPPY|                                       null|                                                    null|    null|               null|</span>
<span class="line">|  root.ln.wf01.wt01.temperature|    null|      root.ln|   FLOAT|     RLE|     SNAPPY|                                       null|                                                    null|    null|               null|</span>
<span class="line">|       root.ln.wf01.wt01.status|    null|      root.ln| BOOLEAN|   PLAIN|     SNAPPY|                                       null|                                                    null|    null|               null|</span>
<span class="line">+-------------------------------+--------+-------------+--------+--------+-----------+-------------------------------------------+--------------------------------------------------------+--------+-------------------+</span>
<span class="line">Total line number = 7</span>
<span class="line">It costs 0.016s</span>
<span class="line"></span>
<span class="line">+-----------------------------+-----+-------------+--------+--------+-----------+----+----------+--------+-------------------+</span>
<span class="line">|                   timeseries|alias|storage group|dataType|encoding|compression|tags|attributes|deadband|deadband parameters|</span>
<span class="line">+-----------------------------+-----+-------------+--------+--------+-----------+----+----------+--------+-------------------+</span>
<span class="line">|   root.ln.wf02.wt02.hardware| null|      root.ln|    TEXT|   PLAIN|     SNAPPY|null|      null|    null|               null|</span>
<span class="line">|     root.ln.wf02.wt02.status| null|      root.ln| BOOLEAN|   PLAIN|     SNAPPY|null|      null|    null|               null|</span>
<span class="line">|root.ln.wf01.wt01.temperature| null|      root.ln|   FLOAT|     RLE|     SNAPPY|null|      null|    null|               null|</span>
<span class="line">|     root.ln.wf01.wt01.status| null|      root.ln| BOOLEAN|   PLAIN|     SNAPPY|null|      null|    null|               null|</span>
<span class="line">+-----------------------------+-----+-------------+--------+--------+-----------+----+----------+--------+-------------------+</span>
<span class="line">Total line number = 4</span>
<span class="line">It costs 0.004s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>SHOW TIMESERIES LIMIT INT OFFSET INT</p><p>只返回从指定下标开始的结果，最大返回条数被 LIMIT 限制，用于分页查询。例如：</p></li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">show timeseries root.ln.** limit 10 offset 10</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li><p>SHOW LATEST TIMESERIES</p><p>表示查询出的时间序列需要按照最近插入时间戳降序排列</p></li></ul><p>需要注意的是，当查询路径不存在时，系统会返回 0 条时间序列。</p><h3 id="统计时间序列总数" tabindex="-1"><a class="header-anchor" href="#统计时间序列总数"><span>统计时间序列总数</span></a></h3><p>IoTDB 支持使用<code>COUNT TIMESERIES&lt;Path&gt;</code>来统计一条路径中的时间序列个数。SQL 语句如下所示：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB &gt; COUNT TIMESERIES root.**</span>
<span class="line">IoTDB &gt; COUNT TIMESERIES root.ln.**</span>
<span class="line">IoTDB &gt; COUNT TIMESERIES root.ln.*.*.status</span>
<span class="line">IoTDB &gt; COUNT TIMESERIES root.ln.wf01.wt01.status</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除此之外，还可以通过定义<code>LEVEL</code>来统计指定层级下的时间序列个数。这条语句可以用来统计每一个设备下的传感器数量，语法为：<code>COUNT TIMESERIES &lt;Path&gt; GROUP BY LEVEL=&lt;INTEGER&gt;</code>。</p><p>例如有如下时间序列（可以使用<code>show timeseries</code>展示所有时间序列）：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-------------------------------+--------+-------------+--------+--------+-----------+-------------------------------------------+--------------------------------------------------------+--------+-------------------+</span>
<span class="line">|                     timeseries|   alias|storage group|dataType|encoding|compression|                                       tags|                                              attributes|deadband|deadband parameters|</span>
<span class="line">+-------------------------------+--------+-------------+--------+--------+-----------+-------------------------------------------+--------------------------------------------------------+--------+-------------------+</span>
<span class="line">|root.sgcc.wf03.wt01.temperature|    null|    root.sgcc|   FLOAT|     RLE|     SNAPPY|                                       null|                                                    null|    null|               null|</span>
<span class="line">|     root.sgcc.wf03.wt01.status|    null|    root.sgcc| BOOLEAN|   PLAIN|     SNAPPY|                                       null|                                                    null|    null|               null|</span>
<span class="line">|             root.turbine.d1.s1|newAlias| root.turbine|   FLOAT|     RLE|     SNAPPY|{&quot;newTag1&quot;:&quot;newV1&quot;,&quot;tag4&quot;:&quot;v4&quot;,&quot;tag3&quot;:&quot;v3&quot;}|{&quot;attr2&quot;:&quot;v2&quot;,&quot;attr1&quot;:&quot;newV1&quot;,&quot;attr4&quot;:&quot;v4&quot;,&quot;attr3&quot;:&quot;v3&quot;}|    null|               null|</span>
<span class="line">|     root.ln.wf02.wt02.hardware|    null|      root.ln|    TEXT|   PLAIN|     SNAPPY|                               {&quot;unit&quot;:&quot;c&quot;}|                                                    null|    null|               null|</span>
<span class="line">|       root.ln.wf02.wt02.status|    null|      root.ln| BOOLEAN|   PLAIN|     SNAPPY|                    {&quot;description&quot;:&quot;test1&quot;}|                                                    null|    null|               null|</span>
<span class="line">|  root.ln.wf01.wt01.temperature|    null|      root.ln|   FLOAT|     RLE|     SNAPPY|                                       null|                                                    null|    null|               null|</span>
<span class="line">|       root.ln.wf01.wt01.status|    null|      root.ln| BOOLEAN|   PLAIN|     SNAPPY|                                       null|                                                    null|    null|               null|</span>
<span class="line">+-------------------------------+--------+-------------+--------+--------+-----------+-------------------------------------------+--------------------------------------------------------+--------+-------------------+</span>
<span class="line">Total line number = 7</span>
<span class="line">It costs 0.004s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么 Metadata Tree 如下所示：</p><img style="width:100%;max-width:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/github/69792176-1718f400-1201-11ea-861a-1a83c07ca144.jpg"><p>可以看到，<code>root</code>被定义为<code>LEVEL=0</code>。那么当你输入如下语句时：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB &gt; COUNT TIMESERIES root.** GROUP BY LEVEL=1</span>
<span class="line">IoTDB &gt; COUNT TIMESERIES root.ln.** GROUP BY LEVEL=2</span>
<span class="line">IoTDB &gt; COUNT TIMESERIES root.ln.wf01.* GROUP BY LEVEL=2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你将得到以下结果：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; COUNT TIMESERIES root.** GROUP BY LEVEL=1</span>
<span class="line">+------------+-----+</span>
<span class="line">|      column|count|</span>
<span class="line">+------------+-----+</span>
<span class="line">|   root.sgcc|    2|</span>
<span class="line">|root.turbine|    1|</span>
<span class="line">|     root.ln|    4|</span>
<span class="line">+------------+-----+</span>
<span class="line">Total line number = 3</span>
<span class="line">It costs 0.002s</span>
<span class="line"></span>
<span class="line">IoTDB &gt; COUNT TIMESERIES root.ln.** GROUP BY LEVEL=2</span>
<span class="line">+------------+-----+</span>
<span class="line">|      column|count|</span>
<span class="line">+------------+-----+</span>
<span class="line">|root.ln.wf02|    2|</span>
<span class="line">|root.ln.wf01|    2|</span>
<span class="line">+------------+-----+</span>
<span class="line">Total line number = 2</span>
<span class="line">It costs 0.002s</span>
<span class="line"></span>
<span class="line">IoTDB &gt; COUNT TIMESERIES root.ln.wf01.* GROUP BY LEVEL=2</span>
<span class="line">+------------+-----+</span>
<span class="line">|      column|count|</span>
<span class="line">+------------+-----+</span>
<span class="line">|root.ln.wf01|    2|</span>
<span class="line">+------------+-----+</span>
<span class="line">Total line number = 1</span>
<span class="line">It costs 0.002s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意：时间序列的路径只是过滤条件，与 level 的定义无关。</p></blockquote><h3 id="标签点管理" tabindex="-1"><a class="header-anchor" href="#标签点管理"><span>标签点管理</span></a></h3><p>我们可以在创建时间序列的时候，为它添加别名和额外的标签和属性信息。</p><p>标签和属性的区别在于：</p><ul><li>标签可以用来查询时间序列路径，会在内存中维护标点到时间序列路径的倒排索引：标签 -&gt; 时间序列路径</li><li>属性只能用时间序列路径来查询：时间序列路径 -&gt; 属性</li></ul><p>所用到的扩展的创建时间序列的 SQL 语句如下所示：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">create timeseries root.turbine.d1.s1(temprature) with datatype=FLOAT, encoding=RLE, compression=SNAPPY tags(tag1=v1, tag2=v2) attributes(attr1=v1, attr2=v2)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>括号里的<code>temprature</code>是<code>s1</code>这个传感器的别名。<br> 我们可以在任何用到<code>s1</code>的地方，将其用<code>temprature</code>代替，这两者是等价的。</p>`,41)),l("blockquote",null,[l("p",null,[e[4]||(e[4]=n("IoTDB 同时支持在查询语句中 ")),t(a,{to:"/zh/UserGuide/V0.13.x/Query-Data/Select-Expression.html#%E4%BD%BF%E7%94%A8%E5%88%AB%E5%90%8D"},{default:i(()=>e[3]||(e[3]=[n("使用 AS 函数")])),_:1}),e[5]||(e[5]=n(" 设置别名。二者的区别在于：AS 函数设置的别名用于替代整条时间序列名，且是临时的，不与时间序列绑定；而上文中的别名只作为传感器的别名，与其绑定且可与原传感器名等价使用。"))])]),e[8]||(e[8]=s(`<blockquote><p>注意：额外的标签和属性信息总的大小不能超过<code>tag_attribute_total_size</code>.</p></blockquote><ul><li><p>标签点属性更新<br> 创建时间序列后，我们也可以对其原有的标签点属性进行更新，主要有以下六种更新方式：</p></li><li><p>重命名标签或属性</p></li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">ALTER timeseries root.turbine.d1.s1 RENAME tag1 TO newTag1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>重新设置标签或属性的值</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">ALTER timeseries root.turbine.d1.s1 SET newTag1=newV1, attr1=newV1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>删除已经存在的标签或属性</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">ALTER timeseries root.turbine.d1.s1 DROP tag1, tag2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>添加新的标签</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">ALTER timeseries root.turbine.d1.s1 ADD TAGS tag3=v3, tag4=v4</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>添加新的属性</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">ALTER timeseries root.turbine.d1.s1 ADD ATTRIBUTES attr3=v3, attr4=v4</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>更新插入别名，标签和属性</li></ul><blockquote><p>如果该别名，标签或属性原来不存在，则插入，否则，用新值更新原来的旧值</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">ALTER timeseries root.turbine.d1.s1 UPSERT ALIAS=newAlias TAGS(tag2=newV2, tag3=v3) ATTRIBUTES(attr3=v3, attr4=v4)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>使用标签作为过滤条件查询时间序列</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">* SHOW TIMESERIES (&lt;\`PathPattern\`&gt;)? WhereClause</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>返回给定路径的下的所有满足条件的时间序列信息，SQL 语句如下所示：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">ALTER timeseries root.ln.wf02.wt02.hardware ADD TAGS unit=c</span>
<span class="line">ALTER timeseries root.ln.wf02.wt02.status ADD TAGS description=test1</span>
<span class="line">show timeseries root.ln.** where unit=c</span>
<span class="line">show timeseries root.ln.** where description contains &#39;test1&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果分别为：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+--------------------------+-----+-------------+--------+--------+-----------+------------+----------+--------+-------------------+</span>
<span class="line">|                timeseries|alias|storage group|dataType|encoding|compression|        tags|attributes|deadband|deadband parameters|</span>
<span class="line">+--------------------------+-----+-------------+--------+--------+-----------+------------+----------+--------+-------------------+</span>
<span class="line">|root.ln.wf02.wt02.hardware| null|      root.ln|    TEXT|   PLAIN|     SNAPPY|{&quot;unit&quot;:&quot;c&quot;}|      null|    null|               null|</span>
<span class="line">+--------------------------+-----+-------------+--------+--------+-----------+------------+----------+--------+-------------------+</span>
<span class="line">Total line number = 1</span>
<span class="line">It costs 0.005s</span>
<span class="line"></span>
<span class="line">+------------------------+-----+-------------+--------+--------+-----------+-----------------------+----------+--------+-------------------+</span>
<span class="line">|              timeseries|alias|storage group|dataType|encoding|compression|                   tags|attributes|deadband|deadband parameters|</span>
<span class="line">+------------------------+-----+-------------+--------+--------+-----------+-----------------------+----------+--------+-------------------+</span>
<span class="line">|root.ln.wf02.wt02.status| null|      root.ln| BOOLEAN|   PLAIN|     SNAPPY|{&quot;description&quot;:&quot;test1&quot;}|      null|    null|               null|</span>
<span class="line">+------------------------+-----+-------------+--------+--------+-----------+-----------------------+----------+--------+-------------------+</span>
<span class="line">Total line number = 1</span>
<span class="line">It costs 0.004s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意，现在我们只支持一个查询条件，要么是等值条件查询，要么是包含条件查询。当然 where 子句中涉及的必须是标签值，而不能是属性值。</p></blockquote>`,21))])}const b=r(c,[["render",p],["__file","Timeseries.html.vue"]]),g=JSON.parse('{"path":"/zh/UserGuide/V0.13.x/Operate-Metadata/Timeseries.html","title":"","lang":"zh-CN","frontmatter":{"description":"时间序列管理 创建时间序列 根据建立的数据模型，我们可以分别在两个存储组中创建相应的时间序列。创建时间序列的 SQL 语句如下所示： 从 v0.13 起，可以使用简化版的 SQL 语句创建时间序列： 需要注意的是，当创建时间序列时指定的编码方式与数据类型不对应时，系统会给出相应的错误提示，如下所示： 详细的数据类型与编码方式的对应列表请参见 。 创建对...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V0.13.x/Operate-Metadata/Timeseries.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Operate-Metadata/Timeseries.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"时间序列管理 创建时间序列 根据建立的数据模型，我们可以分别在两个存储组中创建相应的时间序列。创建时间序列的 SQL 语句如下所示： 从 v0.13 起，可以使用简化版的 SQL 语句创建时间序列： 需要注意的是，当创建时间序列时指定的编码方式与数据类型不对应时，系统会给出相应的错误提示，如下所示： 详细的数据类型与编码方式的对应列表请参见 。 创建对..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"时间序列管理","slug":"时间序列管理","link":"#时间序列管理","children":[{"level":3,"title":"创建时间序列","slug":"创建时间序列","link":"#创建时间序列","children":[]},{"level":3,"title":"创建对齐时间序列","slug":"创建对齐时间序列","link":"#创建对齐时间序列","children":[]},{"level":3,"title":"删除时间序列","slug":"删除时间序列","link":"#删除时间序列","children":[]},{"level":3,"title":"查看时间序列","slug":"查看时间序列","link":"#查看时间序列","children":[]},{"level":3,"title":"统计时间序列总数","slug":"统计时间序列总数","link":"#统计时间序列总数","children":[]},{"level":3,"title":"标签点管理","slug":"标签点管理","link":"#标签点管理","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":6.96,"words":2087},"filePathRelative":"zh/UserGuide/V0.13.x/Operate-Metadata/Timeseries.md","localizedDate":"2023年7月10日","autoDesc":true}');export{b as comp,g as data};
