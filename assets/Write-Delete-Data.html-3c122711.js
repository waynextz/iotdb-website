import{_ as i,r as p,o as l,c as r,a as c,d as s,e,b as a,w as t,f as o}from"./app-316684ed.js";const d={},u=s("h1",{id:"write-delete-data",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#write-delete-data","aria-hidden":"true"},"#"),e(" Write & Delete Data")],-1),m=s("h2",{id:"cli-insert",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#cli-insert","aria-hidden":"true"},"#"),e(" CLI INSERT")],-1),k=s("p",null,"Writing a repeat timestamp covers the original timestamp data, which can be regarded as updated data.",-1),h=s("h3",{id:"use-of-insert-statements",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#use-of-insert-statements","aria-hidden":"true"},"#"),e(" Use of INSERT Statements")],-1),v=o(`<p>In the scenario of this section, take two timeseries <code>root.ln.wf02.wt02.status</code> and <code>root.ln.wf02.wt02.hardware</code> as an example, and their data types are BOOLEAN and TEXT, respectively.</p><p>The sample code for single column data insertion is as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB &gt; insert into root.ln.wf02.wt02(timestamp,status) values(1,true)
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Note:</strong> Timestamps must be specified when inserting multiple rows of data in a SQL.</p><h3 id="insert-data-into-aligned-timeseries" tabindex="-1"><a class="header-anchor" href="#insert-data-into-aligned-timeseries" aria-hidden="true">#</a> Insert Data Into Aligned Timeseries</h3><p>To insert data into a group of aligned time series, we only need to add the <code>ALIGNED</code> keyword in SQL, and others are similar.</p><p>The sample code is as follows:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>IoTDB <span class="token operator">&gt;</span> <span class="token keyword">create</span> aligned timeseries root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1<span class="token punctuation">(</span>s1 INT32<span class="token punctuation">,</span> s2 <span class="token keyword">DOUBLE</span><span class="token punctuation">)</span>
IoTDB <span class="token operator">&gt;</span> <span class="token keyword">insert</span> <span class="token keyword">into</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1<span class="token punctuation">(</span><span class="token keyword">time</span><span class="token punctuation">,</span> s1<span class="token punctuation">,</span> s2<span class="token punctuation">)</span> aligned <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
IoTDB <span class="token operator">&gt;</span> <span class="token keyword">insert</span> <span class="token keyword">into</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1<span class="token punctuation">(</span><span class="token keyword">time</span><span class="token punctuation">,</span> s1<span class="token punctuation">,</span> s2<span class="token punctuation">)</span> aligned <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
IoTDB <span class="token operator">&gt;</span> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The result is shown below. The query result shows that the insertion statements are performed correctly.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+--------------+--------------+
|                         Time|root.sg1.d1.s1|root.sg1.d1.s2|
+-----------------------------+--------------+--------------+
|1970-01-01T08:00:00.001+08:00|             1|           1.0|
|1970-01-01T08:00:00.002+08:00|             2|           2.0|
|1970-01-01T08:00:00.003+08:00|             3|           3.0|
+-----------------------------+--------------+--------------+
Total line number = 3
It costs 0.004s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="native-api-write" tabindex="-1"><a class="header-anchor" href="#native-api-write" aria-hidden="true">#</a> NATIVE API WRITE</h2><p>The Native API ( Session ) is the most widely used series of APIs of IoTDB, including multiple APIs, adapted to different data collection scenarios, with high performance and multi-language support.</p><h3 id="multi-language-api-write" tabindex="-1"><a class="header-anchor" href="#multi-language-api-write" aria-hidden="true">#</a> Multi-language API write</h3><h4 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java</h4>`,26),w=s("br",null,null,-1),b=s("h4",{id:"python",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#python","aria-hidden":"true"},"#"),e(" Python")],-1),f=s("h4",{id:"c",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#c","aria-hidden":"true"},"#"),e(" C++")],-1),g=s("h4",{id:"go",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#go","aria-hidden":"true"},"#"),e(" Go")],-1),y=s("h2",{id:"rest-api-write",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-write","aria-hidden":"true"},"#"),e(" REST API WRITE")],-1),T=o(`<p>Example：</p><div class="language-JSON line-numbers-mode" data-ext="JSON"><pre class="language-JSON"><code>{
      &quot;timestamps&quot;: [
            1,
            2,
            3
      ],
      &quot;measurements&quot;: [
            &quot;temperature&quot;,
            &quot;status&quot;
      ],
      &quot;data_types&quot;: [
            &quot;FLOAT&quot;,
            &quot;BOOLEAN&quot;
      ],
      &quot;values&quot;: [
            [
                  1.1,
                  2.2,
                  3.3
            ],
            [
                  false,
                  true,
                  true
            ]
      ],
      &quot;is_aligned&quot;: false,
      &quot;device&quot;: &quot;root.ln.wf01.wt01&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mqtt-write" tabindex="-1"><a class="header-anchor" href="#mqtt-write" aria-hidden="true">#</a> MQTT WRITE</h2>`,3),I=s("h2",{id:"batch-data-load",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#batch-data-load","aria-hidden":"true"},"#"),e(" BATCH DATA LOAD")],-1),x=s("p",null,"In different scenarios, the IoTDB provides a variety of methods for importing data in batches. This section describes the two most common methods for importing data in CSV format and TsFile format.",-1),q=s("h3",{id:"tsfile-batch-load",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#tsfile-batch-load","aria-hidden":"true"},"#"),e(" TsFile Batch Load")],-1),_=s("h3",{id:"csv-batch-load",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#csv-batch-load","aria-hidden":"true"},"#"),e(" CSV Batch Load")],-1),S=s("h2",{id:"delete",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#delete","aria-hidden":"true"},"#"),e(" DELETE")],-1),D=o(`<h3 id="delete-single-timeseries" tabindex="-1"><a class="header-anchor" href="#delete-single-timeseries" aria-hidden="true">#</a> Delete Single Timeseries</h3><p>Taking ln Group as an example, there exists such a usage scenario:</p><p>The wf02 plant&#39;s wt02 device has many segments of errors in its power supply status before 2017-11-01 16:26:00, and the data cannot be analyzed correctly. The erroneous data affected the correlation analysis with other devices. At this point, the data before this time point needs to be deleted. The SQL statement for this operation is</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">delete</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">.</span><span class="token keyword">status</span> <span class="token keyword">where</span> <span class="token keyword">time</span><span class="token operator">&lt;=</span><span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T16:<span class="token number">26</span>:<span class="token number">00</span><span class="token punctuation">;</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="delete-multiple-timeseries" tabindex="-1"><a class="header-anchor" href="#delete-multiple-timeseries" aria-hidden="true">#</a> Delete Multiple Timeseries</h3>`,13),A=o(`<div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">delete</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T16:<span class="token number">26</span>:<span class="token number">00</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>or</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">delete</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T16:<span class="token number">26</span>:<span class="token number">00</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>It should be noted that when the deleted path does not exist, IoTDB will not prompt that the path does not exist, but that the execution is successful, because SQL is a declarative programming method. Unless it is a syntax error, insufficient permissions and so on, it is not considered an error, as shown below:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; delete from root.ln.wf03.wt02.status where time &lt; now()
Msg: The statement is executed successfully.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="delete-time-partition-experimental" tabindex="-1"><a class="header-anchor" href="#delete-time-partition-experimental" aria-hidden="true">#</a> Delete Time Partition (experimental)</h3><p>You may delete all data in a time partition of a database using the following grammar:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DELETE</span> <span class="token keyword">PARTITION</span> root<span class="token punctuation">.</span>ln <span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The <code>0,1,2</code> above is the id of the partition that is to be deleted, you can find it from the IoTDB<br> data folders or convert a timestamp manually to an id using <code>timestamp / partitionInterval </code> (flooring), and the <code>partitionInterval</code> should be in your config (if time-partitioning is<br> supported in your version).</p><p>Please notice that this function is experimental and mainly for development, please use it with care.</p>`,10);function L(E,B){const n=p("RouterLink");return l(),r("div",null,[c(`

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

`),u,m,s("p",null,[e("IoTDB provides users with a variety of ways to insert real-time data, such as directly inputting "),a(n,{to:"/UserGuide/Master/Reference/SQL-Reference.html"},{default:t(()=>[e("INSERT SQL statement")]),_:1}),e(" in "),a(n,{to:"/UserGuide/Master/QuickStart/Command-Line-Interface.html"},{default:t(()=>[e("Client/Shell tools")]),_:1}),e(", or using "),a(n,{to:"/UserGuide/Master/API/Programming-JDBC.html"},{default:t(()=>[e("Java JDBC")]),_:1}),e(" to perform single or batch execution of "),a(n,{to:"/UserGuide/Master/Reference/SQL-Reference.html"},{default:t(()=>[e("INSERT SQL statement")]),_:1}),e(".")]),s("p",null,[e("NOTE： This section mainly introduces the use of "),a(n,{to:"/UserGuide/Master/Reference/SQL-Reference.html"},{default:t(()=>[e("INSERT SQL statement")]),_:1}),e(" for real-time data import in the scenario.")]),k,h,s("p",null,[e("The "),a(n,{to:"/UserGuide/Master/Reference/SQL-Reference.html"},{default:t(()=>[e("INSERT SQL statement")]),_:1}),e(" statement is used to insert data into one or more specified timeseries created. For each point of data inserted, it consists of a "),a(n,{to:"/UserGuide/Master/Basic-Concept/Data-Model-and-Terminology.html"},{default:t(()=>[e("timestamp")]),_:1}),e(" and a sensor acquisition value (see "),a(n,{to:"/UserGuide/Master/Basic-Concept/Data-Type.html"},{default:t(()=>[e("Data Type")]),_:1}),e(").")]),v,s("p",null,[e("Before writing via the Java API, you need to establish a connection, refer to "),a(n,{to:"/UserGuide/Master/API/Programming-Java-Native-API.html"},{default:t(()=>[e("Java Native API")]),_:1}),e("."),w,e(" then refer to "),a(n,{to:"/UserGuide/Master/API/Programming-Java-Native-API.html#insert"},{default:t(()=>[e(" JAVA Data Manipulation Interface (DML) ")]),_:1})]),b,s("p",null,[e("Refer to "),a(n,{to:"/UserGuide/Master/API/Programming-Python-Native-API.html#insert"},{default:t(()=>[e(" Python Data Manipulation Interface (DML) ")]),_:1})]),f,s("p",null,[e("Refer to "),a(n,{to:"/UserGuide/Master/API/Programming-Cpp-Native-API.html#insert"},{default:t(()=>[e(" C++ Data Manipulation Interface (DML) ")]),_:1})]),g,s("p",null,[e("Refer to "),a(n,{to:"/UserGuide/Master/API/Programming-Go-Native-API.html"},{default:t(()=>[e("Go Native API")]),_:1})]),y,s("p",null,[e("Refer to "),a(n,{to:"/UserGuide/Master/API/RestServiceV1.html#inserttablet"},{default:t(()=>[e("insertTablet (v1)")]),_:1}),e(" or "),a(n,{to:"/UserGuide/Master/API/RestServiceV2.html#inserttablet"},{default:t(()=>[e("insertTablet (v2)")]),_:1})]),T,s("p",null,[e("Refer to "),a(n,{to:"/UserGuide/Master/API/Programming-MQTT.html#built-in-mqtt-service"},{default:t(()=>[e("Built-in MQTT Service")]),_:1})]),I,x,q,s("p",null,[e("TsFile is the file format of time series used in IoTDB. You can directly import one or more TsFile files with time series into another running IoTDB instance through tools such as CLI. For details, see "),a(n,{to:"/UserGuide/Master/Tools-System/Import-Export-Tool.html"},{default:t(()=>[e("Import-Export-Tool")]),_:1}),e(".")]),_,s("p",null,[e("CSV stores table data in plain text. You can write multiple formatted data into a CSV file and import the data into the IoTDB in batches. Before importing data, you are advised to create the corresponding metadata in the IoTDB. Don't worry if you forget to create one, the IoTDB can automatically infer the data in the CSV to its corresponding data type, as long as you have a unique data type for each column. In addition to a single file, the tool supports importing multiple CSV files as folders and setting optimization parameters such as time precision. For details, see "),a(n,{to:"/UserGuide/Master/Tools-System/Import-Export-Tool.html"},{default:t(()=>[e("Import-Export-Tool")]),_:1}),e(".")]),S,s("p",null,[e("Users can delete data that meet the deletion condition in the specified timeseries by using the "),a(n,{to:"/UserGuide/Master/Reference/SQL-Reference.html"},{default:t(()=>[e("DELETE statement")]),_:1}),e(". When deleting data, users can select one or more timeseries paths, prefix paths, or paths with star to delete data within a certain time interval.")]),s("p",null,[e("In a JAVA programming environment, you can use the "),a(n,{to:"/UserGuide/Master/API/Programming-JDBC.html"},{default:t(()=>[e("Java JDBC")]),_:1}),e(" to execute single or batch UPDATE statements.")]),D,s("p",null,[e("If both the power supply status and hardware version of the ln group wf02 plant wt02 device before 2017-11-01 16:26:00 need to be deleted, "),a(n,{to:"/UserGuide/Master/Basic-Concept/Data-Model-and-Terminology.html"},{default:t(()=>[e("the prefix path with broader meaning or the path with star")]),_:1}),e(" can be used to delete the data. The SQL statement for this operation is:")]),A])}const P=i(d,[["render",L],["__file","Write-Delete-Data.html.vue"]]);export{P as default};
