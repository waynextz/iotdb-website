(window.webpackJsonp=window.webpackJsonp||[]).push([[373],{833:function(e,s,t){"use strict";t.r(s);var a=t(49),n=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"programming-native-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#programming-native-api"}},[e._v("#")]),e._v(" Programming - Native API")]),e._v(" "),t("h2",{attrs:{id:"usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),t("h3",{attrs:{id:"dependencies"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dependencies"}},[e._v("#")]),e._v(" Dependencies")]),e._v(" "),t("ul",[t("li",[e._v("JDK >= 1.8")]),e._v(" "),t("li",[e._v("Maven >= 3.1")])]),e._v(" "),t("h3",{attrs:{id:"how-to-install-in-local-maven-repository"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-install-in-local-maven-repository"}},[e._v("#")]),e._v(" How to install in local maven repository")]),e._v(" "),t("p",[e._v("In root directory:")]),e._v(" "),t("blockquote",[t("p",[e._v("mvn clean install -pl session -am -DskipTests")])]),e._v(" "),t("h3",{attrs:{id:"using-iotdb-native-api-with-maven"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-iotdb-native-api-with-maven"}},[e._v("#")]),e._v(" Using IoTDB Native API with Maven")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<dependencies>\n    <dependency>\n      <groupId>org.apache.iotdb</groupId>\n      <artifactId>iotdb-session</artifactId>\n      <version>0.10.0</version>\n    </dependency>\n</dependencies>\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br")])]),t("h3",{attrs:{id:"examples-with-native-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples-with-native-api"}},[e._v("#")]),e._v(" Examples with Native API")]),e._v(" "),t("p",[e._v("Here we show the commonly used interfaces and their parameters in the Native API:")]),e._v(" "),t("h4",{attrs:{id:"run-the-native-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#run-the-native-api"}},[e._v("#")]),e._v(" Run the Native API")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Initialize a Session")]),e._v(" "),t("p",[e._v("Session(String host, int port)")]),e._v(" "),t("p",[e._v("Session(String host, String port, String username, String password)")]),e._v(" "),t("p",[e._v("Session(String host, int port, String username, String password)")])]),e._v(" "),t("li",[t("p",[e._v("Open a Session")]),e._v(" "),t("p",[e._v("​\tSession.open()")])]),e._v(" "),t("li",[t("p",[e._v("Close a Session")]),e._v(" "),t("p",[e._v("​\tSession.close()")])])]),e._v(" "),t("h4",{attrs:{id:"operations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#operations"}},[e._v("#")]),e._v(" Operations")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Set storage group")]),e._v(" "),t("p",[e._v("​\tTSStatus setStorageGroup(String storageGroupId)")])]),e._v(" "),t("li",[t("p",[e._v("Delete one or several storage groups")]),e._v(" "),t("p",[e._v("​\tTSStatus deleteStorageGroup(String storageGroup)")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("TSStatus deleteStorageGroups(List<String> storageGroups)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])])]),e._v(" "),t("li",[t("p",[e._v("Create one timeseries under a existing storage group")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("TSStatus createTimeseries(String path, TSDataType dataType, TSEncoding encoding, CompressionType compressor)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])])]),e._v(" "),t("li",[t("p",[e._v("Delete one or several timeseries")]),e._v(" "),t("p",[e._v("​\tTSStatus deleteTimeseries(String path)")]),e._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("TSStatus")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("deleteTimeseries")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("List")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v(" paths"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])])]),e._v(" "),t("li",[t("p",[e._v("Delete one or several timeseries before a certain timestamp")]),e._v(" "),t("p",[e._v("​\tTSStatus deleteData(String path, long time)")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("TSStatus deleteData(List<String> paths, long time)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])])]),e._v(" "),t("li",[t("p",[e._v("Insert data into existing timeseries in batch")]),e._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[e._v("\t"),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("TSStatus")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("insertInBatch")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("List")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v(" deviceIds"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("List")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Long")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v(" times"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("List")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("List")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v(" measurementsList"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("List")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("List")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v(" valuesList"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])])]),e._v(" "),t("li",[t("p",[e._v("Insert data into existing timeseries")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("\tTSStatus insert(String deviceId, long time, List<String> measurements, List<String> values)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])])]),e._v(" "),t("li",[t("p",[e._v("Batch insertion into timeseries")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("TSExecuteBatchStatementResp insertBatch(RowBatch rowBatch)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])])]),e._v(" "),t("li",[t("p",[e._v("Test Insert data into existing timeseries in batch. This method NOT insert data into database and server just return after accept the request, this method should be used to test other time cost in client")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("TSStatus testInsertInBatch(List<String> deviceIds, List<Long> times, List<List<String>> measurementsList, List<List<String>> valuesList)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])])]),e._v(" "),t("li",[t("p",[e._v("Insert data into existing timeseries. This method NOT insert data into database and server just return after accept the request, this method should be used to test other time cost in client")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("TSStatus testInsert(String deviceId, long time, List<String> measurements, List<String> values)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])])]),e._v(" "),t("li",[t("p",[e._v("Batch insertion into timeseries. This method NOT insert data into database and server just return after accept the request, this method should be used to test other time cost in client")]),e._v(" "),t("p",[e._v("​\tTSExecuteBatchStatementResp testInsertBatch(RowBatch rowBatch)")])])]),e._v(" "),t("h4",{attrs:{id:"sample-code"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sample-code"}},[e._v("#")]),e._v(" Sample code")]),e._v(" "),t("p",[e._v("To get more information of the following interfaces, please view session/src/main/java/org/apache/iotdb/session/Session.java")]),e._v(" "),t("p",[e._v("The sample code of using these interfaces is in example/session/src/main/java/org/apache/iotdb/SessionExample.java，which provides an example of how to open an IoTDB session, execute a batch insertion.")]),e._v(" "),t("h1",{attrs:{id:"session-pool-for-native-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#session-pool-for-native-api"}},[e._v("#")]),e._v(" Session Pool for Native API")]),e._v(" "),t("p",[e._v("We provided a connection pool (`SessionPool) for Native API.\nUsing the interface, you need to define the pool size.")]),e._v(" "),t("p",[e._v("If you can not get a session connection in 60 secondes, there is a warning log but the program will hang.")]),e._v(" "),t("p",[e._v("If a session has finished an operation, it will be put back to the pool automatically.\nIf a session connection is broken, the session will be removed automatically and the pool will try\nto create a new session and redo the operation.")]),e._v(" "),t("p",[e._v("For query operations:")]),e._v(" "),t("ol",[t("li",[e._v("When using SessionPool to query data, the result set is "),t("code",[e._v("SessionDataSetWrapper")]),e._v(";")]),e._v(" "),t("li",[e._v("Given a "),t("code",[e._v("SessionDataSetWrapper")]),e._v(", if you have not scanned all the data in it and stop to use it,\nyou have to call "),t("code",[e._v("SessionPool.closeResultSet(wrapper)")]),e._v(" manually;")]),e._v(" "),t("li",[e._v("When you call "),t("code",[e._v("hasNext()")]),e._v(" and "),t("code",[e._v("next()")]),e._v(" of a "),t("code",[e._v("SessionDataSetWrapper")]),e._v(" and there is an exception, then\nyou have to call "),t("code",[e._v("SessionPool.closeResultSet(wrapper)")]),e._v(" manually;")]),e._v(" "),t("li",[e._v("You can call "),t("code",[e._v("getColumnNames()")]),e._v(" of "),t("code",[e._v("SessionDataSetWrapper")]),e._v(" to get the column names of query result;")])]),e._v(" "),t("p",[e._v("Examples: "),t("code",[e._v("session/src/test/java/org/apache/iotdb/session/pool/SessionPoolTest.java")])])])}),[],!1,null,null,null);s.default=n.exports}}]);