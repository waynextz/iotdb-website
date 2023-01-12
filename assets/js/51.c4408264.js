(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{457:function(t,e,a){"use strict";a.r(e);var i=a(19),n=Object(i.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"background"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#background"}},[t._v("#")]),t._v(" Background")]),t._v(" "),e("p",[t._v("When IoTDB service is started, metadata information is organized by loading log file "),e("code",[t._v("mlog.bin")]),t._v(" and the results are held\nin memory for a long time. As metadata continues to grow, memory continues to grow. In order to support the controllable\nfluctuation in the massive metadata scenario, we provide a metadata storage type based on rocksDB.")]),t._v(" "),e("h1",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),e("p",[t._v("Firstly, you should package "),e("strong",[t._v("schema-engine-rocksdb")]),t._v(" by the following command:")]),t._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("mvn clean package "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-pl")]),t._v(" schema-engine-rocksdb "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-am")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-DskipTests")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("After that, you can get a "),e("strong",[t._v("conf")]),t._v(" directory and a "),e("strong",[t._v("lib")]),t._v(" directory in\nschema-engine-rocksdb/target/schema-engine-rocksdb. Copy the file in the conf directory to the conf directory of server,\nand copy the files in the lib directory to the lib directory of server.")]),t._v(" "),e("p",[t._v("Then, open the "),e("strong",[t._v("iotdb-datanode.properties")]),t._v(" in the conf directory of server, and set the "),e("code",[t._v("schema_engine_mode")]),t._v(" to\nRocksdb_based. Restart the IoTDB, the system will use "),e("code",[t._v("RSchemaRegion")]),t._v(" to manage the metadata.")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("####################\n### Schema Engine Configuration\n####################\n# Choose the mode of schema engine. The value could be Memory,Schema_File and Rocksdb_based. If the provided value doesn't match any pre-defined value, Memory mode will be used as default.\n# Datatype: string\nschema_engine_mode=Rocksdb_based\n\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br")])]),e("p",[t._v("When rocksdb is specified as the metadata storage type, configuration parameters of rocksDB are open to the public as file. You can modify the configuration file "),e("code",[t._v("schema-rocksdb.properties")]),t._v(" to adjust parameters according to your own requirements, such as block cache.  If there is no special requirement, use the default value.")]),t._v(" "),e("h1",{attrs:{id:"function-support"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#function-support"}},[t._v("#")]),t._v(" Function Support")]),t._v(" "),e("p",[t._v("The module is still being improved, and some functions are not supported at the moment. The function modules are supported as follows:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("function")]),t._v(" "),e("th",{staticStyle:{"text-align":"right"}},[t._v("support")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("timeseries addition and deletion")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("yes")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("query the wildcard path(* and **)")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("yes")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("tag addition and deletion")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("yes")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("aligned timeseries")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("yes")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("wildcard node name(*)")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("no")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("meta template")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("no")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("tag index")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("no")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("continuous query")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("no")])])])]),t._v(" "),e("h1",{attrs:{id:"appendix-interface-support"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#appendix-interface-support"}},[t._v("#")]),t._v(" Appendix: Interface support")]),t._v(" "),e("p",[t._v("The external interface, that is, the client can sense, related SQL is not supported;")]),t._v(" "),e("p",[t._v("The internal interface, that is, the invocation logic of other modules within the service, has no direct dependence on the external SQL;")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("interface")]),t._v(" "),e("th",{staticStyle:{"text-align":"right"}},[t._v("type")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("support")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("comment")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("createTimeseries")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("external")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("createAlignedTimeSeries")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("external")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("showTimeseries")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("external")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("part of the support")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("not support LATEST")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("changeAlias")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("external")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("upsertTagsAndAttributes")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("external")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("addAttributes")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("external")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("addTags")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("external")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("dropTagsOrAttributes")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("external")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("setTagsOrAttributesValue")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("external")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("renameTagOrAttributeKey")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("external")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("*template")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("external")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("no")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("*trigger")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("external")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("no")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("deleteSchemaRegion")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("internal")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("autoCreateDeviceMNode")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("internal")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("no")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("isPathExist")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("internal")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("getAllTimeseriesCount")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("internal")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("getDevicesNum")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("internal")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("getNodesCountInGivenLevel")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("internal")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("conditional support")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("path does not support wildcard")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("getMeasurementCountGroupByLevel")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("internal")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("getNodesListInGivenLevel")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("internal")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("conditional support")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("path does not support wildcard")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("getChildNodePathInNextLevel")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("internal")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("conditional support")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("path does not support wildcard")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("getChildNodeNameInNextLevel")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("internal")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("conditional support")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("path does not support wildcard")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("getBelongedDevices")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("internal")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("getMatchedDevices")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("internal")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("getMeasurementPaths")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("internal")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("getMeasurementPathsWithAlias")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("internal")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("getAllMeasurementByDevicePath")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("internal")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("getDeviceNode")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("internal")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("getMeasurementMNodes")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("internal")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("getSeriesSchemasAndReadLockDevice")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("internal")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})])])])])}),[],!1,null,null,null);e.default=n.exports}}]);