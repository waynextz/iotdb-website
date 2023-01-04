(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{440:function(e,t,s){"use strict";s.r(t);var n=s(19),a=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"communication-service-protocol"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#communication-service-protocol"}},[e._v("#")]),e._v(" Communication Service protocol")]),e._v(" "),t("h2",{attrs:{id:"thrift-rpc-interface"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#thrift-rpc-interface"}},[e._v("#")]),e._v(" Thrift rpc interface")]),e._v(" "),t("h3",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" introduction")]),e._v(" "),t("p",[e._v("Thrift is a remote procedure call software framework for the development of extensible and cross-language services.\nIt combines a powerful software stack and code generation engine,\nIn order to build seamlessly integrated and efficient services among programming languages ​​such as C++, Java, Go, Python, PHP, Ruby, Erlang, Perl, Haskell, C#, Cocoa, JavaScript, Node.js, Smalltalk, and OCaml.")]),e._v(" "),t("p",[e._v("IoTDB server and client use thrift for communication. In actual use, it is recommended to use the native client package provided by IoTDB:\nSession or Session Pool. If you have special needs, you can also program directly against the RPC interface")]),e._v(" "),t("p",[e._v("The default IoTDB server uses port 6667 as the RPC communication port, you can modify the configuration item")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("rpc_port=6667\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("to change the default thrift port")]),e._v(" "),t("h3",{attrs:{id:"rpc-interface"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rpc-interface"}},[e._v("#")]),e._v(" rpc interface")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// open a session\nTSOpenSessionResp openSession(1:TSOpenSessionReq req);\n\n// close a session\nTSStatus closeSession(1:TSCloseSessionReq req);\n\n// run an SQL statement in batch\nTSExecuteStatementResp executeStatement(1:TSExecuteStatementReq req);\n\n// execute SQL statement in batch\nTSStatus executeBatchStatement(1:TSExecuteBatchStatementReq req);\n\n// execute query SQL statement\nTSExecuteStatementResp executeQueryStatement(1:TSExecuteStatementReq req);\n\n// execute insert, delete and update SQL statement \nTSExecuteStatementResp executeUpdateStatement(1:TSExecuteStatementReq req);\n\n// fetch next query result\nTSFetchResultsResp fetchResults(1:TSFetchResultsReq req)\n\n// fetch meta data\nTSFetchMetadataResp fetchMetadata(1:TSFetchMetadataReq req)\n\n// cancel a query \nTSStatus cancelOperation(1:TSCancelOperationReq req);\n\n// close a query dataset\nTSStatus closeOperation(1:TSCloseOperationReq req);\n\n// get time zone\nTSGetTimeZoneResp getTimeZone(1:i64 sessionId);\n\n// set time zone\nTSStatus setTimeZone(1:TSSetTimeZoneReq req);\n\n// get server's properties\nServerProperties getProperties();\n\n// CREATE DATABASE\nTSStatus setStorageGroup(1:i64 sessionId, 2:string storageGroup);\n\n// create timeseries\nTSStatus createTimeseries(1:TSCreateTimeseriesReq req);\n\n// create multi timeseries\nTSStatus createMultiTimeseries(1:TSCreateMultiTimeseriesReq req);\n\n// delete timeseries\nTSStatus deleteTimeseries(1:i64 sessionId, 2:list<string> path)\n\n// delete sttorage groups\nTSStatus deleteStorageGroups(1:i64 sessionId, 2:list<string> storageGroup);\n\n// insert record\nTSStatus insertRecord(1:TSInsertRecordReq req);\n\n// insert record in string format\nTSStatus insertStringRecord(1:TSInsertStringRecordReq req);\n\n// insert tablet\nTSStatus insertTablet(1:TSInsertTabletReq req);\n\n// insert tablets in batch\nTSStatus insertTablets(1:TSInsertTabletsReq req);\n\n// insert records in batch\nTSStatus insertRecords(1:TSInsertRecordsReq req);\n\n// insert records of one device\nTSStatus insertRecordsOfOneDevice(1:TSInsertRecordsOfOneDeviceReq req);\n\n// insert records in batch as string format\nTSStatus insertStringRecords(1:TSInsertStringRecordsReq req);\n\n// test the latency of innsert tablet，caution：no data will be inserted, only for test latency\nTSStatus testInsertTablet(1:TSInsertTabletReq req);\n\n// test the latency of innsert tablets，caution：no data will be inserted, only for test latency\nTSStatus testInsertTablets(1:TSInsertTabletsReq req);\n\n// test the latency of innsert record，caution：no data will be inserted, only for test latency\nTSStatus testInsertRecord(1:TSInsertRecordReq req);\n\n// test the latency of innsert record in string format，caution：no data will be inserted, only for test latency\nTSStatus testInsertStringRecord(1:TSInsertStringRecordReq req);\n\n// test the latency of innsert records，caution：no data will be inserted, only for test latency\nTSStatus testInsertRecords(1:TSInsertRecordsReq req);\n\n// test the latency of innsert records of one device，caution：no data will be inserted, only for test latency\nTSStatus testInsertRecordsOfOneDevice(1:TSInsertRecordsOfOneDeviceReq req);\n\n// test the latency of innsert records in string formate，caution：no data will be inserted, only for test latency\nTSStatus testInsertStringRecords(1:TSInsertStringRecordsReq req);\n\n// delete data\nTSStatus deleteData(1:TSDeleteDataReq req);\n\n// execute raw data query\nTSExecuteStatementResp executeRawDataQuery(1:TSRawDataQueryReq req);\n\n// request a statement id from server\ni64 requestStatementId(1:i64 sessionId);\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br"),t("span",{staticClass:"line-number"},[e._v("19")]),t("br"),t("span",{staticClass:"line-number"},[e._v("20")]),t("br"),t("span",{staticClass:"line-number"},[e._v("21")]),t("br"),t("span",{staticClass:"line-number"},[e._v("22")]),t("br"),t("span",{staticClass:"line-number"},[e._v("23")]),t("br"),t("span",{staticClass:"line-number"},[e._v("24")]),t("br"),t("span",{staticClass:"line-number"},[e._v("25")]),t("br"),t("span",{staticClass:"line-number"},[e._v("26")]),t("br"),t("span",{staticClass:"line-number"},[e._v("27")]),t("br"),t("span",{staticClass:"line-number"},[e._v("28")]),t("br"),t("span",{staticClass:"line-number"},[e._v("29")]),t("br"),t("span",{staticClass:"line-number"},[e._v("30")]),t("br"),t("span",{staticClass:"line-number"},[e._v("31")]),t("br"),t("span",{staticClass:"line-number"},[e._v("32")]),t("br"),t("span",{staticClass:"line-number"},[e._v("33")]),t("br"),t("span",{staticClass:"line-number"},[e._v("34")]),t("br"),t("span",{staticClass:"line-number"},[e._v("35")]),t("br"),t("span",{staticClass:"line-number"},[e._v("36")]),t("br"),t("span",{staticClass:"line-number"},[e._v("37")]),t("br"),t("span",{staticClass:"line-number"},[e._v("38")]),t("br"),t("span",{staticClass:"line-number"},[e._v("39")]),t("br"),t("span",{staticClass:"line-number"},[e._v("40")]),t("br"),t("span",{staticClass:"line-number"},[e._v("41")]),t("br"),t("span",{staticClass:"line-number"},[e._v("42")]),t("br"),t("span",{staticClass:"line-number"},[e._v("43")]),t("br"),t("span",{staticClass:"line-number"},[e._v("44")]),t("br"),t("span",{staticClass:"line-number"},[e._v("45")]),t("br"),t("span",{staticClass:"line-number"},[e._v("46")]),t("br"),t("span",{staticClass:"line-number"},[e._v("47")]),t("br"),t("span",{staticClass:"line-number"},[e._v("48")]),t("br"),t("span",{staticClass:"line-number"},[e._v("49")]),t("br"),t("span",{staticClass:"line-number"},[e._v("50")]),t("br"),t("span",{staticClass:"line-number"},[e._v("51")]),t("br"),t("span",{staticClass:"line-number"},[e._v("52")]),t("br"),t("span",{staticClass:"line-number"},[e._v("53")]),t("br"),t("span",{staticClass:"line-number"},[e._v("54")]),t("br"),t("span",{staticClass:"line-number"},[e._v("55")]),t("br"),t("span",{staticClass:"line-number"},[e._v("56")]),t("br"),t("span",{staticClass:"line-number"},[e._v("57")]),t("br"),t("span",{staticClass:"line-number"},[e._v("58")]),t("br"),t("span",{staticClass:"line-number"},[e._v("59")]),t("br"),t("span",{staticClass:"line-number"},[e._v("60")]),t("br"),t("span",{staticClass:"line-number"},[e._v("61")]),t("br"),t("span",{staticClass:"line-number"},[e._v("62")]),t("br"),t("span",{staticClass:"line-number"},[e._v("63")]),t("br"),t("span",{staticClass:"line-number"},[e._v("64")]),t("br"),t("span",{staticClass:"line-number"},[e._v("65")]),t("br"),t("span",{staticClass:"line-number"},[e._v("66")]),t("br"),t("span",{staticClass:"line-number"},[e._v("67")]),t("br"),t("span",{staticClass:"line-number"},[e._v("68")]),t("br"),t("span",{staticClass:"line-number"},[e._v("69")]),t("br"),t("span",{staticClass:"line-number"},[e._v("70")]),t("br"),t("span",{staticClass:"line-number"},[e._v("71")]),t("br"),t("span",{staticClass:"line-number"},[e._v("72")]),t("br"),t("span",{staticClass:"line-number"},[e._v("73")]),t("br"),t("span",{staticClass:"line-number"},[e._v("74")]),t("br"),t("span",{staticClass:"line-number"},[e._v("75")]),t("br"),t("span",{staticClass:"line-number"},[e._v("76")]),t("br"),t("span",{staticClass:"line-number"},[e._v("77")]),t("br"),t("span",{staticClass:"line-number"},[e._v("78")]),t("br"),t("span",{staticClass:"line-number"},[e._v("79")]),t("br"),t("span",{staticClass:"line-number"},[e._v("80")]),t("br"),t("span",{staticClass:"line-number"},[e._v("81")]),t("br"),t("span",{staticClass:"line-number"},[e._v("82")]),t("br"),t("span",{staticClass:"line-number"},[e._v("83")]),t("br"),t("span",{staticClass:"line-number"},[e._v("84")]),t("br"),t("span",{staticClass:"line-number"},[e._v("85")]),t("br"),t("span",{staticClass:"line-number"},[e._v("86")]),t("br"),t("span",{staticClass:"line-number"},[e._v("87")]),t("br"),t("span",{staticClass:"line-number"},[e._v("88")]),t("br"),t("span",{staticClass:"line-number"},[e._v("89")]),t("br"),t("span",{staticClass:"line-number"},[e._v("90")]),t("br"),t("span",{staticClass:"line-number"},[e._v("91")]),t("br"),t("span",{staticClass:"line-number"},[e._v("92")]),t("br"),t("span",{staticClass:"line-number"},[e._v("93")]),t("br"),t("span",{staticClass:"line-number"},[e._v("94")]),t("br"),t("span",{staticClass:"line-number"},[e._v("95")]),t("br"),t("span",{staticClass:"line-number"},[e._v("96")]),t("br"),t("span",{staticClass:"line-number"},[e._v("97")]),t("br"),t("span",{staticClass:"line-number"},[e._v("98")]),t("br"),t("span",{staticClass:"line-number"},[e._v("99")]),t("br"),t("span",{staticClass:"line-number"},[e._v("100")]),t("br"),t("span",{staticClass:"line-number"},[e._v("101")]),t("br"),t("span",{staticClass:"line-number"},[e._v("102")]),t("br"),t("span",{staticClass:"line-number"},[e._v("103")]),t("br"),t("span",{staticClass:"line-number"},[e._v("104")]),t("br")])]),t("h3",{attrs:{id:"idl-file-path"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#idl-file-path"}},[e._v("#")]),e._v(" IDL file path")]),e._v(" "),t("p",[e._v('IDL file path is "thrift/src/main/thrift/rpc.thrift" which includes interface and struct')]),e._v(" "),t("h3",{attrs:{id:"target-file-path"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#target-file-path"}},[e._v("#")]),e._v(" target file path")]),e._v(" "),t("p",[e._v('We will use thrift compile IDL file in mvn Compilation, in which generate target .class file\ntarget file path is "thrift/target/classes/org/apache/iotdb/service/rpc/thrift"')])])}),[],!1,null,null,null);t.default=a.exports}}]);