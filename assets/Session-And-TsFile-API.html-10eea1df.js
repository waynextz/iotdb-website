import{_ as e,o as i,c as n,a as s,f as a}from"./app-2905306e.js";const t={},d=a('<h2 id="session-and-tsfile-api" tabindex="-1"><a class="header-anchor" href="#session-and-tsfile-api" aria-hidden="true">#</a> Session And TsFile API</h2><p>在使用Session、TsFIle API时，如果您调用的方法需要以字符串形式传入物理量（measurement）、设备（device）、数据库（database）、路径（path）等参数，<strong>请保证所传入字符串与使用 SQL 语句时的写法一致</strong>，下面是一些帮助您理解的例子。具体代码示例可以参考：<code>example/session/src/main/java/org/apache/iotdb/SyntaxConventionRelatedExample.java</code></p><ol><li>以创建时间序列 createTimeseries 为例：</li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public void createTimeseries(\n    String path,\n    TSDataType dataType,\n    TSEncoding encoding,\n    CompressionType compressor)\n    throws IoTDBConnectionException, StatementExecutionException;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果您希望创建时间序列 <code>root.sg.a，root.sg.`a.``&quot;b`，root.sg.`111`</code>，您使用的 SQL 语句应该如下所示：</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>create timeseries root.sg.a with datatype=FLOAT,encoding=PLAIN,compressor=SNAPPY;\n\n# 路径结点名中包含特殊字符，时间序列各结点为[&quot;root&quot;,&quot;sg&quot;,&quot;a.`\\&quot;b&quot;]\ncreate timeseries root.sg.`a.``&quot;b` with datatype=FLOAT,encoding=PLAIN,compressor=SNAPPY;\n\n# 路径结点名为实数\ncreate timeseries root.sg.`111` with datatype=FLOAT,encoding=PLAIN,compressor=SNAPPY;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>您在调用 createTimeseries 方法时，应该按照如下方法赋值 path 字符串，保证 path 字符串内容与使用 SQL 时一致：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>// 时间序列 root.sg.a\nString path = &quot;root.sg.a&quot;;\n\n// 时间序列 root.sg.`a``&quot;b`\nString path = &quot;root.sg.`a``\\&quot;b`&quot;;\n\n// 时间序列 root.sg.`111`\nString path = &quot;root.sg.`111`&quot;;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>以插入数据 insertRecord 为例：</li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public void insertRecord(\n    String deviceId,\n    long time,\n    List&lt;String&gt; measurements,\n    List&lt;TSDataType&gt; types,\n    Object... values)\n    throws IoTDBConnectionException, StatementExecutionException;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果您希望向时间序列 <code>root.sg.a，root.sg.`a.``&quot;b`，root.sg.`111`</code> 中插入数据，您使用的 SQL 语句应该如下所示：</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>insert into root.sg(timestamp, a, `a.``&quot;b`, `111`) values (1, 2, 2, 2);\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>您在调用 insertRecord 方法时，应该按照如下方法赋值 deviceId 和 measurements：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>// deviceId 为 root.sg\nString deviceId = &quot;root.sg&quot;;\n\n// measurements\nString[] measurements = new String[]{&quot;a&quot;, &quot;`a.``\\&quot;b`&quot;, &quot;`111`&quot;};\nList&lt;String&gt; measurementList = Arrays.asList(measurements);\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>以查询数据 executeRawDataQuery 为例：</li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public SessionDataSet executeRawDataQuery(\n    List&lt;String&gt; paths, \n    long startTime, \n    long endTime)\n    throws StatementExecutionException, IoTDBConnectionException;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果您希望查询时间序列<code>root.sg.a，root.sg.`a.``&quot;b`，root.sg.`111`</code>的数据，您使用的 SQL 语句应该如下所示：</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>select a from root.sg\n\n# 路径结点名中包含特殊字符\nselect `a.``&quot;b` from root.sg;\n\n# 路径结点名为实数\nselect `111` from root.sg\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>您在调用 executeRawDataQuery 方法时，应该按照如下方法赋值 paths：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>// paths\nString[] paths = new String[]{&quot;root.sg.a&quot;, &quot;root.sg.`a.``\\&quot;b`&quot;, &quot;root.sg.`111`&quot;};\nList&lt;String&gt; pathList = Arrays.asList(paths);\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',20);function r(o,l){return i(),n("div",null,[s(`

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

`),d])}const u=e(t,[["render",r],["__file","Session-And-TsFile-API.html.vue"]]);export{u as default};
