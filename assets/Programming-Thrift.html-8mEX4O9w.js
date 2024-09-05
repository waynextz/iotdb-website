import{_ as n,c as s,b as a,o as i}from"./app-DLxi_e3x.js";const t={};function l(r,e){return i(),s("div",null,e[0]||(e[0]=[a(`<h1 id="communication-service-protocol" tabindex="-1"><a class="header-anchor" href="#communication-service-protocol"><span>Communication Service protocol</span></a></h1><h2 id="thrift-rpc-interface" tabindex="-1"><a class="header-anchor" href="#thrift-rpc-interface"><span>Thrift rpc interface</span></a></h2><h3 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction"><span>introduction</span></a></h3><p>Thrift is a remote procedure call software framework for the development of extensible and cross-language services.<br> It combines a powerful software stack and code generation engine,<br> In order to build seamlessly integrated and efficient services among programming languages ​​such as C++, Java, Go, Python, PHP, Ruby, Erlang, Perl, Haskell, C#, Cocoa, JavaScript, Node.js, Smalltalk, and OCaml.</p><p>IoTDB server and client use thrift for communication. In actual use, it is recommended to use the native client package provided by IoTDB:<br> Session or Session Pool. If you have special needs, you can also program directly against the RPC interface</p><p>The default IoTDB server uses port 6667 as the RPC communication port, you can modify the configuration item</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">rpc_port=6667</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>to change the default thrift port</p><h3 id="rpc-interface" tabindex="-1"><a class="header-anchor" href="#rpc-interface"><span>rpc interface</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">// open a session</span>
<span class="line">TSOpenSessionResp openSession(1:TSOpenSessionReq req);</span>
<span class="line"></span>
<span class="line">// close a session</span>
<span class="line">TSStatus closeSession(1:TSCloseSessionReq req);</span>
<span class="line"></span>
<span class="line">// run an SQL statement in batch</span>
<span class="line">TSExecuteStatementResp executeStatement(1:TSExecuteStatementReq req);</span>
<span class="line"></span>
<span class="line">// execute SQL statement in batch</span>
<span class="line">TSStatus executeBatchStatement(1:TSExecuteBatchStatementReq req);</span>
<span class="line"></span>
<span class="line">// execute query SQL statement</span>
<span class="line">TSExecuteStatementResp executeQueryStatement(1:TSExecuteStatementReq req);</span>
<span class="line"></span>
<span class="line">// execute insert, delete and update SQL statement </span>
<span class="line">TSExecuteStatementResp executeUpdateStatement(1:TSExecuteStatementReq req);</span>
<span class="line"></span>
<span class="line">// fetch next query result</span>
<span class="line">TSFetchResultsResp fetchResults(1:TSFetchResultsReq req)</span>
<span class="line"></span>
<span class="line">// fetch meta data</span>
<span class="line">TSFetchMetadataResp fetchMetadata(1:TSFetchMetadataReq req)</span>
<span class="line"></span>
<span class="line">// cancel a query </span>
<span class="line">TSStatus cancelOperation(1:TSCancelOperationReq req);</span>
<span class="line"></span>
<span class="line">// close a query dataset</span>
<span class="line">TSStatus closeOperation(1:TSCloseOperationReq req);</span>
<span class="line"></span>
<span class="line">// get time zone</span>
<span class="line">TSGetTimeZoneResp getTimeZone(1:i64 sessionId);</span>
<span class="line"></span>
<span class="line">// set time zone</span>
<span class="line">TSStatus setTimeZone(1:TSSetTimeZoneReq req);</span>
<span class="line"></span>
<span class="line">// get server&#39;s properties</span>
<span class="line">ServerProperties getProperties();</span>
<span class="line"></span>
<span class="line">// set storage group</span>
<span class="line">TSStatus setStorageGroup(1:i64 sessionId, 2:string storageGroup);</span>
<span class="line"></span>
<span class="line">// create timeseries</span>
<span class="line">TSStatus createTimeseries(1:TSCreateTimeseriesReq req);</span>
<span class="line"></span>
<span class="line">// create multi timeseries</span>
<span class="line">TSStatus createMultiTimeseries(1:TSCreateMultiTimeseriesReq req);</span>
<span class="line"></span>
<span class="line">// delete timeseries</span>
<span class="line">TSStatus deleteTimeseries(1:i64 sessionId, 2:list&lt;string&gt; path)</span>
<span class="line"></span>
<span class="line">// delete sttorage groups</span>
<span class="line">TSStatus deleteStorageGroups(1:i64 sessionId, 2:list&lt;string&gt; storageGroup);</span>
<span class="line"></span>
<span class="line">// insert record</span>
<span class="line">TSStatus insertRecord(1:TSInsertRecordReq req);</span>
<span class="line"></span>
<span class="line">// insert record in string format</span>
<span class="line">TSStatus insertStringRecord(1:TSInsertStringRecordReq req);</span>
<span class="line"></span>
<span class="line">// insert tablet</span>
<span class="line">TSStatus insertTablet(1:TSInsertTabletReq req);</span>
<span class="line"></span>
<span class="line">// insert tablets in batch</span>
<span class="line">TSStatus insertTablets(1:TSInsertTabletsReq req);</span>
<span class="line"></span>
<span class="line">// insert records in batch</span>
<span class="line">TSStatus insertRecords(1:TSInsertRecordsReq req);</span>
<span class="line"></span>
<span class="line">// insert records of one device</span>
<span class="line">TSStatus insertRecordsOfOneDevice(1:TSInsertRecordsOfOneDeviceReq req);</span>
<span class="line"></span>
<span class="line">// insert records in batch as string format</span>
<span class="line">TSStatus insertStringRecords(1:TSInsertStringRecordsReq req);</span>
<span class="line"></span>
<span class="line">// test the latency of innsert tablet，caution：no data will be inserted, only for test latency</span>
<span class="line">TSStatus testInsertTablet(1:TSInsertTabletReq req);</span>
<span class="line"></span>
<span class="line">// test the latency of innsert tablets，caution：no data will be inserted, only for test latency</span>
<span class="line">TSStatus testInsertTablets(1:TSInsertTabletsReq req);</span>
<span class="line"></span>
<span class="line">// test the latency of innsert record，caution：no data will be inserted, only for test latency</span>
<span class="line">TSStatus testInsertRecord(1:TSInsertRecordReq req);</span>
<span class="line"></span>
<span class="line">// test the latency of innsert record in string format，caution：no data will be inserted, only for test latency</span>
<span class="line">TSStatus testInsertStringRecord(1:TSInsertStringRecordReq req);</span>
<span class="line"></span>
<span class="line">// test the latency of innsert records，caution：no data will be inserted, only for test latency</span>
<span class="line">TSStatus testInsertRecords(1:TSInsertRecordsReq req);</span>
<span class="line"></span>
<span class="line">// test the latency of innsert records of one device，caution：no data will be inserted, only for test latency</span>
<span class="line">TSStatus testInsertRecordsOfOneDevice(1:TSInsertRecordsOfOneDeviceReq req);</span>
<span class="line"></span>
<span class="line">// test the latency of innsert records in string formate，caution：no data will be inserted, only for test latency</span>
<span class="line">TSStatus testInsertStringRecords(1:TSInsertStringRecordsReq req);</span>
<span class="line"></span>
<span class="line">// delete data</span>
<span class="line">TSStatus deleteData(1:TSDeleteDataReq req);</span>
<span class="line"></span>
<span class="line">// execute raw data query</span>
<span class="line">TSExecuteStatementResp executeRawDataQuery(1:TSRawDataQueryReq req);</span>
<span class="line"></span>
<span class="line">// request a statement id from server</span>
<span class="line">i64 requestStatementId(1:i64 sessionId);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="idl-file-path" tabindex="-1"><a class="header-anchor" href="#idl-file-path"><span>IDL file path</span></a></h3><p>IDL file path is &quot;thrift/src/main/thrift/rpc.thrift&quot; which includes interface and struct</p><h3 id="target-file-path" tabindex="-1"><a class="header-anchor" href="#target-file-path"><span>target file path</span></a></h3><p>We will use thrift compile IDL file in mvn Compilation, in which generate target .class file<br> target file path is &quot;thrift/target/classes/org/apache/iotdb/service/rpc/thrift&quot;</p>`,14)]))}const d=n(t,[["render",l],["__file","Programming-Thrift.html.vue"]]),p=JSON.parse('{"path":"/UserGuide/V0.13.x/API/Programming-Thrift.html","title":"Communication Service protocol","lang":"en-US","frontmatter":{"description":"Communication Service protocol Thrift rpc interface introduction Thrift is a remote procedure call software framework for the development of extensible and cross-language servic...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/API/Programming-Thrift.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V0.13.x/API/Programming-Thrift.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Communication Service protocol"}],["meta",{"property":"og:description","content":"Communication Service protocol Thrift rpc interface introduction Thrift is a remote procedure call software framework for the development of extensible and cross-language servic..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Communication Service protocol\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Thrift rpc interface","slug":"thrift-rpc-interface","link":"#thrift-rpc-interface","children":[{"level":3,"title":"introduction","slug":"introduction","link":"#introduction","children":[]},{"level":3,"title":"rpc interface","slug":"rpc-interface","link":"#rpc-interface","children":[]},{"level":3,"title":"IDL file path","slug":"idl-file-path","link":"#idl-file-path","children":[]},{"level":3,"title":"target file path","slug":"target-file-path","link":"#target-file-path","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":2.43,"words":729},"filePathRelative":"UserGuide/V0.13.x/API/Programming-Thrift.md","localizedDate":"July 10, 2023","autoDesc":true}');export{d as comp,p as data};
