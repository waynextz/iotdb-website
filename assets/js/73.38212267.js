(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{1235:function(t,e,a){"use strict";a.r(e);var i=a(83),l=Object(i.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"auto-create-metadata"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#auto-create-metadata"}},[t._v("#")]),t._v(" Auto create metadata")]),t._v(" "),a("p",[t._v("Automatically creating schema means creating time series based on the characteristics of written data in case time series haven't defined by users themselves.\nThis function can not only solve the problem that entities and measurements are difficult to predict and model in advance under massive time series scenarios,\nbut also provide users with an out-of-the-box writing experience.")]),t._v(" "),a("h2",{attrs:{id:"auto-create-storage-group-metadata"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#auto-create-storage-group-metadata"}},[t._v("#")]),t._v(" Auto create storage group metadata")]),t._v(" "),a("ul",[a("li",[t._v("enable_auto_create_schema")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("enable_auto_create_schema")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("whether creating schema automatically is enabled")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("true")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("After restarting system")])])])]),t._v(" "),a("ul",[a("li",[t._v("default_storage_group_level")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("default_storage_group_level")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Specify which level storage group is in the time series, the default level is 1 (root is on level 0)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("int")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("1")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Only allowed to be modified in first start up")])])])]),t._v(" "),a("p",[t._v("Illustrated as the following figure:")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("When default_storage_group_level=1, root.turbine1 and root.turbine2 will be set as storage group.")])]),t._v(" "),a("li",[a("p",[t._v("When default_storage_group_level=2, root.turbine1.d1, root.turbine1.d2, root.turbine2.d1 and root.turbine2.d2 will be set as storage group.")])])]),t._v(" "),a("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Data%20Concept/Auto-Create-MetaData/auto_create_sg_example.png?raw=true",alt:"auto create storage group example"}}),t._v(" "),a("h2",{attrs:{id:"auto-create-time-series-metadata-specify-data-type-in-the-frontend"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#auto-create-time-series-metadata-specify-data-type-in-the-frontend"}},[t._v("#")]),t._v(" Auto create time series metadata(specify data type in the frontend)")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Users should specify data type when writing:")]),t._v(" "),a("ul",[a("li",[t._v("insertTablet method in Session module.")]),t._v(" "),a("li",[t._v("insert method using TSDataType in Session module."),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("public void insertRecord(String deviceId, long time, List<String> measurements, List<TSDataType> types, Object... values);\npublic void insertRecords(List<String> deviceIds, List<Long> times, List<List<String>> measurementsList, List<List<TSDataType>> typesList, List<List<Object>> valuesList);\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])]),t._v(" "),a("li",[t._v("......")])])]),t._v(" "),a("li",[a("p",[t._v("Efficient, time series are auto created when inserting data.")])])]),t._v(" "),a("h2",{attrs:{id:"auto-create-time-series-metadata-infer-data-type-in-the-backend"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#auto-create-time-series-metadata-infer-data-type-in-the-backend"}},[t._v("#")]),t._v(" Auto create time series metadata(infer data type in the backend)")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Just pass string, and the database will infer the data type:")]),t._v(" "),a("ul",[a("li",[t._v("insert command in CLI module.")]),t._v(" "),a("li",[t._v("insert method without using TSDataType in Session module."),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("public void insertRecord(String deviceId, long time, List<String> measurements, List<TSDataType> types, List<Object> values);\npublic void insertRecords(List<String> deviceIds, List<Long> times, List<List<String>> measurementsList, List<List<String>> valuesList);\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])]),t._v(" "),a("li",[t._v("......")])])]),t._v(" "),a("li",[a("p",[t._v("Since type inference will increase the writing time, the efficiency of auto creating time series metadata through type inference is lower than that of auto creating time series metadata through specifying data type. We recommend users choose specifying data type in the frontend when possible.")])])]),t._v(" "),a("h3",{attrs:{id:"type-inference"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type-inference"}},[t._v("#")]),t._v(" Type inference")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Data(String Format)")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Format Type")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("iotdb-engine.properties")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Default")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("boolean_string_infer_type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("BOOLEAN")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("integer")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("integer_string_infer_type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("FLOAT")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("17000000（integer > 2^24）")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("integer")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("long_string_infer_type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("DOUBLE")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("1.2")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("floating")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("floating_string_infer_type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("FLOAT")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("NaN")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("nan")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("nan_string_infer_type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("DOUBLE")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("'I am text'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("text")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("x")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("x")])])])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Data types can be configured as BOOLEAN, INT32, INT64, FLOAT, DOUBLE, TEXT.")])]),t._v(" "),a("li",[a("p",[t._v("long_string_infer_type is used to avoid precision loss caused by using integer_string_infer_type=FLOAT to infer num > 2^24.")])])]),t._v(" "),a("h3",{attrs:{id:"encoding-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#encoding-type"}},[t._v("#")]),t._v(" Encoding Type")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Data Type")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("iotdb-engine.properties")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Default")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("BOOLEAN")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("default_boolean_encoding")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("RLE")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("INT32")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("default_int32_encoding")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("RLE")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("INT64")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("default_int64_encoding")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("RLE")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("FLOAT")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("default_float_encoding")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("GORILLA")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("DOUBLE")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("default_double_encoding")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("GORILLA")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("TEXT")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("default_text_encoding")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("PLAIN")])])])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Encoding types can be configured as PLAIN, RLE, TS_2DIFF, GORILLA, DICTIONARY.")])]),t._v(" "),a("li",[a("p",[t._v("The corresponding relationship between data types and encoding types is detailed in "),a("RouterLink",{attrs:{to:"/UserGuide/Master/Data-Concept/Encoding.html"}},[t._v("Encoding")]),t._v(".")],1)])])])}),[],!1,null,null,null);e.default=l.exports}}]);