import{_ as n,c as e,b as a,o as l}from"./app-BhWenZFe.js";const i={};function t(p,s){return l(),e("div",null,s[0]||(s[0]=[a(`<h1 id="node-js-native-api" tabindex="-1"><a class="header-anchor" href="#node-js-native-api"><span>Node.js Native API</span></a></h1><p>Apache IoTDB uses Thrift as a cross-language RPC-framework so access to IoTDB can be achieved through the interfaces provided by Thrift.<br> This document will introduce how to generate a native Node.js interface that can be used to access IoTDB.</p><h2 id="dependents" tabindex="-1"><a class="header-anchor" href="#dependents"><span>Dependents</span></a></h2><ul><li>JDK &gt;= 1.8</li><li>Node.js &gt;= 16.0.0</li><li>Linux、Macos or like unix</li><li>Windows+bash</li></ul><h2 id="generate-the-node-js-native-interface" tabindex="-1"><a class="header-anchor" href="#generate-the-node-js-native-interface"><span>Generate the Node.js native interface</span></a></h2><ol><li>Find the <code>pom.xml</code> file in the root directory of the IoTDB source code folder.</li><li>Open the <code>pom.xml</code> file and find the following content:<div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#ABB2BF;">                         &lt;</span><span style="color:#E06C75;">execution</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">                             &lt;</span><span style="color:#E06C75;">id</span><span style="color:#ABB2BF;">&gt;generate-thrift-sources-python&lt;/</span><span style="color:#E06C75;">id</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">                             &lt;</span><span style="color:#E06C75;">phase</span><span style="color:#ABB2BF;">&gt;generate-sources&lt;/</span><span style="color:#E06C75;">phase</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">                             &lt;</span><span style="color:#E06C75;">goals</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">                                 &lt;</span><span style="color:#E06C75;">goal</span><span style="color:#ABB2BF;">&gt;compile&lt;/</span><span style="color:#E06C75;">goal</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">                             &lt;/</span><span style="color:#E06C75;">goals</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">                             &lt;</span><span style="color:#E06C75;">configuration</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">                                 &lt;</span><span style="color:#E06C75;">generator</span><span style="color:#ABB2BF;">&gt;py&lt;/</span><span style="color:#E06C75;">generator</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">                                 &lt;</span><span style="color:#E06C75;">outputDirectory</span><span style="color:#ABB2BF;">&gt;\${project.build.directory}/generated-sources-python/&lt;/</span><span style="color:#E06C75;">outputDirectory</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">                             &lt;/</span><span style="color:#E06C75;">configuration</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">                         &lt;/</span><span style="color:#E06C75;">execution</span><span style="color:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>Duplicate this block and change the <code>id</code>, <code>generator</code> and <code>outputDirectory</code> to this:<div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#ABB2BF;">                         &lt;</span><span style="color:#E06C75;">execution</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">                             &lt;</span><span style="color:#E06C75;">id</span><span style="color:#ABB2BF;">&gt;generate-thrift-sources-nodejs&lt;/</span><span style="color:#E06C75;">id</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">                             &lt;</span><span style="color:#E06C75;">phase</span><span style="color:#ABB2BF;">&gt;generate-sources&lt;/</span><span style="color:#E06C75;">phase</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">                             &lt;</span><span style="color:#E06C75;">goals</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">                                 &lt;</span><span style="color:#E06C75;">goal</span><span style="color:#ABB2BF;">&gt;compile&lt;/</span><span style="color:#E06C75;">goal</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">                             &lt;/</span><span style="color:#E06C75;">goals</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">                             &lt;</span><span style="color:#E06C75;">configuration</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">                                 &lt;</span><span style="color:#E06C75;">generator</span><span style="color:#ABB2BF;">&gt;js:node&lt;/</span><span style="color:#E06C75;">generator</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">                                 &lt;</span><span style="color:#E06C75;">outputDirectory</span><span style="color:#ABB2BF;">&gt;\${project.build.directory}/generated-sources-nodejs/&lt;/</span><span style="color:#E06C75;">outputDirectory</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">                             &lt;/</span><span style="color:#E06C75;">configuration</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">                         &lt;/</span><span style="color:#E06C75;">execution</span><span style="color:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>In the root directory of the IoTDB source code folder，run <code>mvn clean generate-sources</code>.</li></ol><p>This command will automatically delete the files in <code>iotdb/iotdb-protocol/thrift/target</code> and <code>iotdb/iotdb-protocol/thrift-commons/target</code>, and repopulate the folder with the newly generated files.<br> The newly generated JavaScript sources will be located in <code>iotdb/iotdb-protocol/thrift/target/generated-sources-nodejs</code> in the various modules of the <code>iotdb-protocol</code> module.</p><h2 id="using-the-node-js-native-interface" tabindex="-1"><a class="header-anchor" href="#using-the-node-js-native-interface"><span>Using the Node.js native interface</span></a></h2><p>Simply copy the files in <code>iotdb/iotdb-protocol/thrift/target/generated-sources-nodejs/</code> and <code>iotdb/iotdb-protocol/thrift-commons/target/generated-sources-nodejs/</code> into your project.</p><h2 id="rpc-interface" tabindex="-1"><a class="header-anchor" href="#rpc-interface"><span>rpc interface</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>// open a session</span></span>
<span class="line"><span>TSOpenSessionResp openSession(1:TSOpenSessionReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// close a session</span></span>
<span class="line"><span>TSStatus closeSession(1:TSCloseSessionReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// run an SQL statement in batch</span></span>
<span class="line"><span>TSExecuteStatementResp executeStatement(1:TSExecuteStatementReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// execute SQL statement in batch</span></span>
<span class="line"><span>TSStatus executeBatchStatement(1:TSExecuteBatchStatementReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// execute query SQL statement</span></span>
<span class="line"><span>TSExecuteStatementResp executeQueryStatement(1:TSExecuteStatementReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// execute insert, delete and update SQL statement </span></span>
<span class="line"><span>TSExecuteStatementResp executeUpdateStatement(1:TSExecuteStatementReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// fetch next query result</span></span>
<span class="line"><span>TSFetchResultsResp fetchResults(1:TSFetchResultsReq req)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// fetch meta data</span></span>
<span class="line"><span>TSFetchMetadataResp fetchMetadata(1:TSFetchMetadataReq req)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// cancel a query </span></span>
<span class="line"><span>TSStatus cancelOperation(1:TSCancelOperationReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// close a query dataset</span></span>
<span class="line"><span>TSStatus closeOperation(1:TSCloseOperationReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// get time zone</span></span>
<span class="line"><span>TSGetTimeZoneResp getTimeZone(1:i64 sessionId);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// set time zone</span></span>
<span class="line"><span>TSStatus setTimeZone(1:TSSetTimeZoneReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// get server&#39;s properties</span></span>
<span class="line"><span>ServerProperties getProperties();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// CREATE DATABASE</span></span>
<span class="line"><span>TSStatus setStorageGroup(1:i64 sessionId, 2:string storageGroup);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// create timeseries</span></span>
<span class="line"><span>TSStatus createTimeseries(1:TSCreateTimeseriesReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// create multi timeseries</span></span>
<span class="line"><span>TSStatus createMultiTimeseries(1:TSCreateMultiTimeseriesReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// delete timeseries</span></span>
<span class="line"><span>TSStatus deleteTimeseries(1:i64 sessionId, 2:list&lt;string&gt; path)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// delete sttorage groups</span></span>
<span class="line"><span>TSStatus deleteStorageGroups(1:i64 sessionId, 2:list&lt;string&gt; storageGroup);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// insert record</span></span>
<span class="line"><span>TSStatus insertRecord(1:TSInsertRecordReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// insert record in string format</span></span>
<span class="line"><span>TSStatus insertStringRecord(1:TSInsertStringRecordReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// insert tablet</span></span>
<span class="line"><span>TSStatus insertTablet(1:TSInsertTabletReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// insert tablets in batch</span></span>
<span class="line"><span>TSStatus insertTablets(1:TSInsertTabletsReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// insert records in batch</span></span>
<span class="line"><span>TSStatus insertRecords(1:TSInsertRecordsReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// insert records of one device</span></span>
<span class="line"><span>TSStatus insertRecordsOfOneDevice(1:TSInsertRecordsOfOneDeviceReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// insert records in batch as string format</span></span>
<span class="line"><span>TSStatus insertStringRecords(1:TSInsertStringRecordsReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// test the latency of innsert tablet，caution：no data will be inserted, only for test latency</span></span>
<span class="line"><span>TSStatus testInsertTablet(1:TSInsertTabletReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// test the latency of innsert tablets，caution：no data will be inserted, only for test latency</span></span>
<span class="line"><span>TSStatus testInsertTablets(1:TSInsertTabletsReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// test the latency of innsert record，caution：no data will be inserted, only for test latency</span></span>
<span class="line"><span>TSStatus testInsertRecord(1:TSInsertRecordReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// test the latency of innsert record in string format，caution：no data will be inserted, only for test latency</span></span>
<span class="line"><span>TSStatus testInsertStringRecord(1:TSInsertStringRecordReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// test the latency of innsert records，caution：no data will be inserted, only for test latency</span></span>
<span class="line"><span>TSStatus testInsertRecords(1:TSInsertRecordsReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// test the latency of innsert records of one device，caution：no data will be inserted, only for test latency</span></span>
<span class="line"><span>TSStatus testInsertRecordsOfOneDevice(1:TSInsertRecordsOfOneDeviceReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// test the latency of innsert records in string formate，caution：no data will be inserted, only for test latency</span></span>
<span class="line"><span>TSStatus testInsertStringRecords(1:TSInsertStringRecordsReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// delete data</span></span>
<span class="line"><span>TSStatus deleteData(1:TSDeleteDataReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// execute raw data query</span></span>
<span class="line"><span>TSExecuteStatementResp executeRawDataQuery(1:TSRawDataQueryReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// request a statement id from server</span></span>
<span class="line"><span>i64 requestStatementId(1:i64 sessionId);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11)]))}const c=n(i,[["render",t],["__file","Programming-NodeJS-Native-API.html.vue"]]),o=JSON.parse('{"path":"/UserGuide/V2.0.1/Tree/API/Programming-NodeJS-Native-API.html","title":"Node.js Native API","lang":"en-US","frontmatter":{"description":"Node.js Native API Apache IoTDB uses Thrift as a cross-language RPC-framework so access to IoTDB can be achieved through the interfaces provided by Thrift. This document will in...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V2.0.1/Tree/API/Programming-NodeJS-Native-API.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V2.0.1/Tree/API/Programming-NodeJS-Native-API.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Node.js Native API"}],["meta",{"property":"og:description","content":"Node.js Native API Apache IoTDB uses Thrift as a cross-language RPC-framework so access to IoTDB can be achieved through the interfaces provided by Thrift. This document will in..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-13T04:33:18.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-13T04:33:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Node.js Native API\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-13T04:33:18.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Dependents","slug":"dependents","link":"#dependents","children":[]},{"level":2,"title":"Generate the Node.js native interface","slug":"generate-the-node-js-native-interface","link":"#generate-the-node-js-native-interface","children":[]},{"level":2,"title":"Using the Node.js native interface","slug":"using-the-node-js-native-interface","link":"#using-the-node-js-native-interface","children":[]},{"level":2,"title":"rpc interface","slug":"rpc-interface","link":"#rpc-interface","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1734064398000,"contributors":[{"name":"majialin","username":"majialin","email":"107627937+mal117@users.noreply.github.com","commits":1,"url":"https://github.com/majialin"},{"name":"W1y1r","username":"W1y1r","email":"150988475+W1y1r@users.noreply.github.com","commits":1,"url":"https://github.com/W1y1r"},{"name":"Christofer Dutz","username":"Christofer Dutz","email":"christofer.dutz@c-ware.de","commits":1,"url":"https://github.com/Christofer Dutz"},{"name":"CritasWang","username":"CritasWang","email":"critas@outlook.com","commits":2,"url":"https://github.com/CritasWang"}]},"readingTime":{"minutes":2.68,"words":803},"filePathRelative":"UserGuide/V2.0.1/Tree/API/Programming-NodeJS-Native-API.md","localizedDate":"July 10, 2023","autoDesc":true}');export{c as comp,o as data};
