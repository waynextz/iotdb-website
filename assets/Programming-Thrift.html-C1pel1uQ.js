import{_ as n,c as a,b as e,o as i}from"./app-C-0rb--l.js";const l={};function p(t,s){return i(),a("div",null,s[0]||(s[0]=[e(`<h2 id="通信服务协议" tabindex="-1"><a class="header-anchor" href="#通信服务协议"><span>通信服务协议</span></a></h2><h3 id="thrift-rpc-接口" tabindex="-1"><a class="header-anchor" href="#thrift-rpc-接口"><span>Thrift rpc 接口</span></a></h3><h4 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h4><p>Thrift 是一个远程方法调用软件框架，用来进行可扩展且跨语言的服务的开发。<br> 它结合了功能强大的软件堆栈和代码生成引擎，<br> 以构建在 C++, Java, Go,Python, PHP, Ruby, Erlang, Perl, Haskell, C#, Cocoa, JavaScript, Node.js, Smalltalk, and OCaml 这些编程语言间无缝结合的、高效的服务。</p><p>IoTDB 服务端和客户端之间使用 thrift 进行通信，实际使用中建议使用 IoTDB 提供的原生客户端封装：<br> Session 或 Session Pool。如有特殊需要，您也可以直接针对 RPC 接口进行编程</p><p>默认 IoTDB 服务端使用 6667 端口作为 RPC 通信端口，可修改配置项中的</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>rpc_port=6667</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>更改默认接口</p><h4 id="rpc-接口" tabindex="-1"><a class="header-anchor" href="#rpc-接口"><span>rpc 接口</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>// 打开一个 session</span></span>
<span class="line"><span>TSOpenSessionResp openSession(1:TSOpenSessionReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 关闭一个 session</span></span>
<span class="line"><span>TSStatus closeSession(1:TSCloseSessionReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 执行一条 SQL 语句</span></span>
<span class="line"><span>TSExecuteStatementResp executeStatement(1:TSExecuteStatementReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 批量执行 SQL 语句</span></span>
<span class="line"><span>TSStatus executeBatchStatement(1:TSExecuteBatchStatementReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 执行查询 SQL 语句</span></span>
<span class="line"><span>TSExecuteStatementResp executeQueryStatement(1:TSExecuteStatementReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 执行插入、删除 SQL 语句</span></span>
<span class="line"><span>TSExecuteStatementResp executeUpdateStatement(1:TSExecuteStatementReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 向服务器取下一批查询结果</span></span>
<span class="line"><span>TSFetchResultsResp fetchResults(1:TSFetchResultsReq req)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 获取元数据</span></span>
<span class="line"><span>TSFetchMetadataResp fetchMetadata(1:TSFetchMetadataReq req)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 取消某次查询操作</span></span>
<span class="line"><span>TSStatus cancelOperation(1:TSCancelOperationReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 关闭查询操作数据集，释放资源</span></span>
<span class="line"><span>TSStatus closeOperation(1:TSCloseOperationReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 获取时区信息</span></span>
<span class="line"><span>TSGetTimeZoneResp getTimeZone(1:i64 sessionId);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 设置时区</span></span>
<span class="line"><span>TSStatus setTimeZone(1:TSSetTimeZoneReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 获取服务端配置</span></span>
<span class="line"><span>ServerProperties getProperties();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 设置存储组</span></span>
<span class="line"><span>TSStatus setStorageGroup(1:i64 sessionId, 2:string storageGroup);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建时间序列</span></span>
<span class="line"><span>TSStatus createTimeseries(1:TSCreateTimeseriesReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建多条时间序列</span></span>
<span class="line"><span>TSStatus createMultiTimeseries(1:TSCreateMultiTimeseriesReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 删除时间序列</span></span>
<span class="line"><span>TSStatus deleteTimeseries(1:i64 sessionId, 2:list&lt;string&gt; path)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 删除存储组</span></span>
<span class="line"><span>TSStatus deleteStorageGroups(1:i64 sessionId, 2:list&lt;string&gt; storageGroup);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 按行插入数据</span></span>
<span class="line"><span>TSStatus insertRecord(1:TSInsertRecordReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 按 String 格式插入一条数据</span></span>
<span class="line"><span>TSStatus insertStringRecord(1:TSInsertStringRecordReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 按列插入数据</span></span>
<span class="line"><span>TSStatus insertTablet(1:TSInsertTabletReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 按列批量插入数据</span></span>
<span class="line"><span>TSStatus insertTablets(1:TSInsertTabletsReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 按行批量插入数据</span></span>
<span class="line"><span>TSStatus insertRecords(1:TSInsertRecordsReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 按行批量插入同属于某个设备的数据</span></span>
<span class="line"><span>TSStatus insertRecordsOfOneDevice(1:TSInsertRecordsOfOneDeviceReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 按 String 格式批量按行插入数据</span></span>
<span class="line"><span>TSStatus insertStringRecords(1:TSInsertStringRecordsReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 测试按列插入数据的延迟，注意：该接口不真实插入数据，只用来测试网络延迟</span></span>
<span class="line"><span>TSStatus testInsertTablet(1:TSInsertTabletReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 测试批量按列插入数据的延迟，注意：该接口不真实插入数据，只用来测试网络延迟</span></span>
<span class="line"><span>TSStatus testInsertTablets(1:TSInsertTabletsReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 测试按行插入数据的延迟，注意：该接口不真实插入数据，只用来测试网络延迟</span></span>
<span class="line"><span>TSStatus testInsertRecord(1:TSInsertRecordReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 测试按 String 格式按行插入数据的延迟，注意：该接口不真实插入数据，只用来测试网络延迟</span></span>
<span class="line"><span>TSStatus testInsertStringRecord(1:TSInsertStringRecordReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 测试按行插入数据的延迟，注意：该接口不真实插入数据，只用来测试网络延迟</span></span>
<span class="line"><span>TSStatus testInsertRecords(1:TSInsertRecordsReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 测试按行批量插入同属于某个设备的数据的延迟，注意：该接口不真实插入数据，只用来测试网络延迟</span></span>
<span class="line"><span>TSStatus testInsertRecordsOfOneDevice(1:TSInsertRecordsOfOneDeviceReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 测试按 String 格式批量按行插入数据的延迟，注意：该接口不真实插入数据，只用来测试网络延迟</span></span>
<span class="line"><span>TSStatus testInsertStringRecords(1:TSInsertStringRecordsReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 删除数据</span></span>
<span class="line"><span>TSStatus deleteData(1:TSDeleteDataReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 执行原始数据查询</span></span>
<span class="line"><span>TSExecuteStatementResp executeRawDataQuery(1:TSRawDataQueryReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 向服务器申请一个查询语句 ID</span></span>
<span class="line"><span>i64 requestStatementId(1:i64 sessionId);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="idl-定义文件位置" tabindex="-1"><a class="header-anchor" href="#idl-定义文件位置"><span>IDL 定义文件位置</span></a></h4><p>IDL 定义文件的路径是 thrift/src/main/thrift/rpc.thrift，其中包括了结构体定义与函数定义</p><h4 id="生成文件位置" tabindex="-1"><a class="header-anchor" href="#生成文件位置"><span>生成文件位置</span></a></h4><p>在 mvn 编译过程中，会调用 thrift 编译 IDL 文件，生成最终的。class 文件<br> 生成的文件夹路径为 thrift/target/classes/org/apache/iotdb/service/rpc/thrift</p>`,14)]))}const c=n(l,[["render",p],["__file","Programming-Thrift.html.vue"]]),d=JSON.parse('{"path":"/zh/UserGuide/V0.13.x/API/Programming-Thrift.html","title":"","lang":"zh-CN","frontmatter":{"description":"通信服务协议 Thrift rpc 接口 简介 Thrift 是一个远程方法调用软件框架，用来进行可扩展且跨语言的服务的开发。 它结合了功能强大的软件堆栈和代码生成引擎， 以构建在 C++, Java, Go,Python, PHP, Ruby, Erlang, Perl, Haskell, C#, Cocoa, JavaScript, Node.js...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V0.13.x/API/Programming-Thrift.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/API/Programming-Thrift.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"通信服务协议 Thrift rpc 接口 简介 Thrift 是一个远程方法调用软件框架，用来进行可扩展且跨语言的服务的开发。 它结合了功能强大的软件堆栈和代码生成引擎， 以构建在 C++, Java, Go,Python, PHP, Ruby, Erlang, Perl, Haskell, C#, Cocoa, JavaScript, Node.js..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"通信服务协议","slug":"通信服务协议","link":"#通信服务协议","children":[{"level":3,"title":"Thrift rpc 接口","slug":"thrift-rpc-接口","link":"#thrift-rpc-接口","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","username":"CritasWang","email":"critas@outlook.com","commits":1,"url":"https://github.com/CritasWang"}]},"readingTime":{"minutes":3.55,"words":1065},"filePathRelative":"zh/UserGuide/V0.13.x/API/Programming-Thrift.md","localizedDate":"2023年7月10日","autoDesc":true}');export{c as comp,d as data};
