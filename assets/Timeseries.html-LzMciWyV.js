import{_ as r,c as o,b as n,d as t,e as s,a as i,w as l,r as d,o as u}from"./app-D8GMfgiK.js";const c={};function p(m,e){const a=d("RouteLink");return u(),o("div",null,[e[6]||(e[6]=n(`<h1 id="timeseries-management" tabindex="-1"><a class="header-anchor" href="#timeseries-management"><span>Timeseries Management</span></a></h1><h2 id="create-timeseries" tabindex="-1"><a class="header-anchor" href="#create-timeseries"><span>Create Timeseries</span></a></h2><p>According to the storage model selected before, we can create corresponding timeseries in the two storage groups respectively. The SQL statements for creating timeseries are as follows:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB &gt; create timeseries root.ln.wf01.wt01.status with datatype=BOOLEAN,encoding=PLAIN</span>
<span class="line">IoTDB &gt; create timeseries root.ln.wf01.wt01.temperature with datatype=FLOAT,encoding=RLE</span>
<span class="line">IoTDB &gt; create timeseries root.ln.wf02.wt02.hardware with datatype=TEXT,encoding=PLAIN</span>
<span class="line">IoTDB &gt; create timeseries root.ln.wf02.wt02.status with datatype=BOOLEAN,encoding=PLAIN</span>
<span class="line">IoTDB &gt; create timeseries root.sgcc.wf03.wt01.status with datatype=BOOLEAN,encoding=PLAIN</span>
<span class="line">IoTDB &gt; create timeseries root.sgcc.wf03.wt01.temperature with datatype=FLOAT,encoding=RLE</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>From v0.13, you can use a simplified version of the SQL statements to create timeseries:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB &gt; create timeseries root.ln.wf01.wt01.status BOOLEAN encoding=PLAIN</span>
<span class="line">IoTDB &gt; create timeseries root.ln.wf01.wt01.temperature FLOAT encoding=RLE</span>
<span class="line">IoTDB &gt; create timeseries root.ln.wf02.wt02.hardware TEXT encoding=PLAIN</span>
<span class="line">IoTDB &gt; create timeseries root.ln.wf02.wt02.status BOOLEAN encoding=PLAIN</span>
<span class="line">IoTDB &gt; create timeseries root.sgcc.wf03.wt01.status BOOLEAN encoding=PLAIN</span>
<span class="line">IoTDB &gt; create timeseries root.sgcc.wf03.wt01.temperature FLOAT encoding=RLE</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Notice that when in the CREATE TIMESERIES statement the encoding method conflicts with the data type, the system gives the corresponding error prompt as shown below:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB &gt; create timeseries root.ln.wf02.wt02.status WITH DATATYPE=BOOLEAN, ENCODING=TS_2DIFF</span>
<span class="line">error: encoding TS_2DIFF does not support BOOLEAN</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,8)),t("p",null,[e[1]||(e[1]=s("Please refer to ")),i(a,{to:"/UserGuide/V0.13.x/Data-Concept/Encoding.html"},{default:l(()=>e[0]||(e[0]=[s("Encoding")])),_:1}),e[2]||(e[2]=s(" for correspondence between data type and encoding."))]),e[7]||(e[7]=n(`<h2 id="create-aligned-timeseries" tabindex="-1"><a class="header-anchor" href="#create-aligned-timeseries"><span>Create Aligned Timeseries</span></a></h2><p>The SQL statement for creating a group of timeseries are as follows:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; CREATE ALIGNED TIMESERIES root.ln.wf01.GPS(latitude FLOAT encoding=PLAIN compressor=SNAPPY, longitude FLOAT encoding=PLAIN compressor=SNAPPY)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>You can set different datatype, encoding, and compression for the timeseries in a group of aligned timeseries</p><p>It is not currently supported to set an alias, tag, and attribute for aligned timeseries.</p><h2 id="delete-timeseries" tabindex="-1"><a class="header-anchor" href="#delete-timeseries"><span>Delete Timeseries</span></a></h2><p>To delete the timeseries we created before, we are able to use <code>DELETE TimeSeries &lt;PathPattern&gt;</code> statement.</p><p>The usage are as follows:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; delete timeseries root.ln.wf01.wt01.status</span>
<span class="line">IoTDB&gt; delete timeseries root.ln.wf01.wt01.temperature, root.ln.wf02.wt02.hardware</span>
<span class="line">IoTDB&gt; delete timeseries root.ln.wf02.*</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="show-timeseries" tabindex="-1"><a class="header-anchor" href="#show-timeseries"><span>Show Timeseries</span></a></h2><ul><li><p>SHOW LATEST? TIMESERIES pathPattern? whereClause? limitClause?</p><p>There are four optional clauses added in SHOW TIMESERIES, return information of time series</p></li></ul><p>Timeseries information includes: timeseries path, alias of measurement, storage group it belongs to, data type, encoding type, compression type, tags and attributes.</p><p>The default size of result set is 10000000. To query more child paths, please use <code>limit</code> and <code>offset</code>.</p><p>Examples:</p><ul><li><p>SHOW TIMESERIES</p><p>presents all timeseries information in JSON form</p></li><li><p>SHOW TIMESERIES &lt;<code>PathPattern</code>&gt;</p><p>returns all timeseries information matching the given &lt;<code>PathPattern</code>&gt;. SQL statements are as follows:</p></li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show timeseries root.**</span>
<span class="line">IoTDB&gt; show timeseries root.ln.**</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>The results are shown below respectively:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-------------------------------+--------+-------------+--------+--------+-----------+-------------------------------------------+--------------------------------------------------------+--------+-------------------+</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>SHOW TIMESERIES LIMIT INT OFFSET INT</p><p>returns all the timeseries information start from the offset and limit the number of series returned. For example,</p></li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">show timeseries root.ln.** limit 10 offset 10</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li><p>SHOW LATEST TIMESERIES</p><p>all the returned timeseries information should be sorted in descending order of the last timestamp of timeseries</p></li></ul><p>It is worth noting that when the queried path does not exist, the system will return no timeseries.</p><h2 id="count-timeseries" tabindex="-1"><a class="header-anchor" href="#count-timeseries"><span>Count Timeseries</span></a></h2><p>IoTDB is able to use <code>COUNT TIMESERIES &lt;Path&gt;</code> to count the number of timeseries matching the path. SQL statements are as follows:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB &gt; COUNT TIMESERIES root.**</span>
<span class="line">IoTDB &gt; COUNT TIMESERIES root.ln.**</span>
<span class="line">IoTDB &gt; COUNT TIMESERIES root.ln.*.*.status</span>
<span class="line">IoTDB &gt; COUNT TIMESERIES root.ln.wf01.wt01.status</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Besides, <code>LEVEL</code> could be defined to show count the number of timeseries of each node at the given level in current Metadata Tree. This could be used to query the number of sensors under each device. The grammar is: <code>COUNT TIMESERIES &lt;Path&gt; GROUP BY LEVEL=&lt;INTEGER&gt;</code>.</p><p>For example, if there are several timeseries (use <code>show timeseries</code> to show all timeseries):</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-------------------------------+--------+-------------+--------+--------+-----------+-------------------------------------------+--------------------------------------------------------+--------+-------------------+</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then the Metadata Tree will be as below:</p><center><img style="width:100%;max-width:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/github/69792176-1718f400-1201-11ea-861a-1a83c07ca144.jpg"></center><p>As can be seen, <code>root</code> is considered as <code>LEVEL=0</code>. So when you enter statements such as:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB &gt; COUNT TIMESERIES root.** GROUP BY LEVEL=1</span>
<span class="line">IoTDB &gt; COUNT TIMESERIES root.ln.** GROUP BY LEVEL=2</span>
<span class="line">IoTDB &gt; COUNT TIMESERIES root.ln.wf01.* GROUP BY LEVEL=2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You will get following results:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+------------+-----+</span>
<span class="line">|      column|count|</span>
<span class="line">+------------+-----+</span>
<span class="line">|   root.sgcc|    2|</span>
<span class="line">|root.turbine|    1|</span>
<span class="line">|     root.ln|    4|</span>
<span class="line">+------------+-----+</span>
<span class="line">Total line number = 3</span>
<span class="line">It costs 0.002s</span>
<span class="line"></span>
<span class="line">+------------+-----+</span>
<span class="line">|      column|count|</span>
<span class="line">+------------+-----+</span>
<span class="line">|root.ln.wf02|    2|</span>
<span class="line">|root.ln.wf01|    2|</span>
<span class="line">+------------+-----+</span>
<span class="line">Total line number = 2</span>
<span class="line">It costs 0.002s</span>
<span class="line"></span>
<span class="line">+------------+-----+</span>
<span class="line">|      column|count|</span>
<span class="line">+------------+-----+</span>
<span class="line">|root.ln.wf01|    2|</span>
<span class="line">+------------+-----+</span>
<span class="line">Total line number = 1</span>
<span class="line">It costs 0.002s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Note: The path of timeseries is just a filter condition, which has no relationship with the definition of level.</p></blockquote><h2 id="tag-and-attribute-management" tabindex="-1"><a class="header-anchor" href="#tag-and-attribute-management"><span>Tag and Attribute Management</span></a></h2><p>We can also add an alias, extra tag and attribute information while creating one timeseries.</p><p>The differences between tag and attribute are:</p><ul><li>Tag could be used to query the path of timeseries, we will maintain an inverted index in memory on the tag: Tag -&gt; Timeseries</li><li>Attribute could only be queried by timeseries path : Timeseries -&gt; Attribute</li></ul><p>The SQL statements for creating timeseries with extra tag and attribute information are extended as follows:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">create timeseries root.turbine.d1.s1(temprature) with datatype=FLOAT, encoding=RLE, compression=SNAPPY tags(tag1=v1, tag2=v2) attributes(attr1=v1, attr2=v2)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>The <code>temprature</code> in the brackets is an alias for the sensor <code>s1</code>. So we can use <code>temprature</code> to replace <code>s1</code> anywhere.</p>`,42)),t("blockquote",null,[t("p",null,[e[4]||(e[4]=s("IoTDB also supports ")),i(a,{to:"/UserGuide/V0.13.x/Query-Data/Select-Expression.html#use-alias"},{default:l(()=>e[3]||(e[3]=[s("using AS function")])),_:1}),e[5]||(e[5]=s(" to set alias. The difference between the two is: the alias set by the AS function is used to replace the whole time series name, temporary and not bound with the time series; while the alias mentioned above is only used as the alias of the sensor, which is bound with it and can be used equivalent to the original sensor name."))])]),e[8]||(e[8]=n(`<blockquote><p>Notice that the size of the extra tag and attribute information shouldn&#39;t exceed the <code>tag_attribute_total_size</code>.</p></blockquote><p>We can update the tag information after creating it as following:</p><ul><li>Rename the tag/attribute key</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">ALTER timeseries root.turbine.d1.s1 RENAME tag1 TO newTag1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>reset the tag/attribute value</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">ALTER timeseries root.turbine.d1.s1 SET newTag1=newV1, attr1=newV1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>delete the existing tag/attribute</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">ALTER timeseries root.turbine.d1.s1 DROP tag1, tag2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>add new tags</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">ALTER timeseries root.turbine.d1.s1 ADD TAGS tag3=v3, tag4=v4</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>add new attributes</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">ALTER timeseries root.turbine.d1.s1 ADD ATTRIBUTES attr3=v3, attr4=v4</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>upsert alias, tags and attributes</li></ul><blockquote><p>add alias or a new key-value if the alias or key doesn&#39;t exist, otherwise, update the old one with new value.</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">ALTER timeseries root.turbine.d1.s1 UPSERT ALIAS=newAlias TAGS(tag3=v3, tag4=v4) ATTRIBUTES(attr3=v3, attr4=v4)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>show timeseries using tags</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SHOW TIMESERIES (&lt;\`PathPattern\`&gt;)? WhereClause</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>returns all the timeseries information that satisfy the where condition and match the pathPattern. SQL statements are as follows:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">ALTER timeseries root.ln.wf02.wt02.hardware ADD TAGS unit=c</span>
<span class="line">ALTER timeseries root.ln.wf02.wt02.status ADD TAGS description=test1</span>
<span class="line">show timeseries root.ln.** where unit=c</span>
<span class="line">show timeseries root.ln.** where description contains &#39;test1&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The results are shown below respectly:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+--------------------------+-----+-------------+--------+--------+-----------+------------+----------+--------+-------------------+</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Notice that, we only support one condition in the where clause. Either it&#39;s an equal filter or it is an <code>contains</code> filter. In both case, the property in the where condition must be a tag.</p></blockquote>`,22))])}const g=r(c,[["render",p],["__file","Timeseries.html.vue"]]),h=JSON.parse('{"path":"/UserGuide/V0.13.x/Operate-Metadata/Timeseries.html","title":"Timeseries Management","lang":"en-US","frontmatter":{"description":"Timeseries Management Create Timeseries According to the storage model selected before, we can create corresponding timeseries in the two storage groups respectively. The SQL st...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Operate-Metadata/Timeseries.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V0.13.x/Operate-Metadata/Timeseries.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Timeseries Management"}],["meta",{"property":"og:description","content":"Timeseries Management Create Timeseries According to the storage model selected before, we can create corresponding timeseries in the two storage groups respectively. The SQL st..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Timeseries Management\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Create Timeseries","slug":"create-timeseries","link":"#create-timeseries","children":[]},{"level":2,"title":"Create Aligned Timeseries","slug":"create-aligned-timeseries","link":"#create-aligned-timeseries","children":[]},{"level":2,"title":"Delete Timeseries","slug":"delete-timeseries","link":"#delete-timeseries","children":[]},{"level":2,"title":"Show Timeseries","slug":"show-timeseries","link":"#show-timeseries","children":[]},{"level":2,"title":"Count Timeseries","slug":"count-timeseries","link":"#count-timeseries","children":[]},{"level":2,"title":"Tag and Attribute Management","slug":"tag-and-attribute-management","link":"#tag-and-attribute-management","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":5.21,"words":1564},"filePathRelative":"UserGuide/V0.13.x/Operate-Metadata/Timeseries.md","localizedDate":"July 10, 2023","autoDesc":true}');export{g as comp,h as data};
