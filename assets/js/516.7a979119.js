(window.webpackJsonp=window.webpackJsonp||[]).push([[516],{920:function(e,t,r){"use strict";r.r(t);var s=r(19),a=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"nifi-iotdb-bundle"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nifi-iotdb-bundle"}},[e._v("#")]),e._v(" nifi-iotdb-bundle")]),e._v(" "),t("h2",{attrs:{id:"apache-nifi-introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#apache-nifi-introduction"}},[e._v("#")]),e._v(" Apache NiFi Introduction")]),e._v(" "),t("p",[e._v("Apache NiFi is an easy to use, powerful, and reliable system to process and distribute data.")]),e._v(" "),t("p",[e._v("Apache NiFi supports powerful and scalable directed graphs of data routing, transformation, and system mediation logic.")]),e._v(" "),t("p",[e._v("Apache NiFi includes the following capabilities:")]),e._v(" "),t("ul",[t("li",[e._v("Browser-based user interface\n"),t("ul",[t("li",[e._v("Seamless experience for design, control, feedback, and monitoring")])])]),e._v(" "),t("li",[e._v("Data provenance tracking\n"),t("ul",[t("li",[e._v("Complete lineage of information from beginning to end")])])]),e._v(" "),t("li",[e._v("Extensive configuration\n"),t("ul",[t("li",[e._v("Loss-tolerant and guaranteed delivery")]),e._v(" "),t("li",[e._v("Low latency and high throughput")]),e._v(" "),t("li",[e._v("Dynamic prioritization")]),e._v(" "),t("li",[e._v("Runtime modification of flow configuration")]),e._v(" "),t("li",[e._v("Back pressure control")])])]),e._v(" "),t("li",[e._v("Extensible design\n"),t("ul",[t("li",[e._v("Component architecture for custom Processors and Services")]),e._v(" "),t("li",[e._v("Rapid development and iterative testing")])])]),e._v(" "),t("li",[e._v("Secure communication\n"),t("ul",[t("li",[e._v("HTTPS with configurable authentication strategies")]),e._v(" "),t("li",[e._v("Multi-tenant authorization and policy management")]),e._v(" "),t("li",[e._v("Standard protocols for encrypted communication including TLS and SSH")])])])]),e._v(" "),t("h2",{attrs:{id:"putiotdbrecord"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#putiotdbrecord"}},[e._v("#")]),e._v(" PutIoTDBRecord")]),e._v(" "),t("p",[e._v("This is a processor that reads the content of the incoming FlowFile as individual records using the configured 'Record Reader' and writes them to Apache IoTDB using native interface.")]),e._v(" "),t("h3",{attrs:{id:"properties-of-putiotdbrecord"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#properties-of-putiotdbrecord"}},[e._v("#")]),e._v(" Properties of PutIoTDBRecord")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("property")]),e._v(" "),t("th",[e._v("description")]),e._v(" "),t("th",[e._v("default value")]),e._v(" "),t("th",[e._v("necessary")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("Host")]),e._v(" "),t("td",[e._v("The host of IoTDB.")]),e._v(" "),t("td",[e._v("null")]),e._v(" "),t("td",[e._v("true")])]),e._v(" "),t("tr",[t("td",[e._v("Port")]),e._v(" "),t("td",[e._v("The port of IoTDB.")]),e._v(" "),t("td",[e._v("6667")]),e._v(" "),t("td",[e._v("true")])]),e._v(" "),t("tr",[t("td",[e._v("Username")]),e._v(" "),t("td",[e._v("Username to access the IoTDB.")]),e._v(" "),t("td",[e._v("null")]),e._v(" "),t("td",[e._v("true")])]),e._v(" "),t("tr",[t("td",[e._v("Password")]),e._v(" "),t("td",[e._v("Password to access the IoTDB.")]),e._v(" "),t("td",[e._v("null")]),e._v(" "),t("td",[e._v("true")])]),e._v(" "),t("tr",[t("td",[e._v("Prefix")]),e._v(" "),t("td",[e._v("The Prefix begin with root. that will be add to the tsName in data.  "),t("br"),e._v(" It can be updated by expression language.")]),e._v(" "),t("td",[e._v("null")]),e._v(" "),t("td",[e._v("true")])]),e._v(" "),t("tr",[t("td",[e._v("Record Reader")]),e._v(" "),t("td",[e._v("Specifies the type of Record Reader controller service to use "),t("br"),e._v("for parsing the incoming data and determining the schema.")]),e._v(" "),t("td",[e._v("null")]),e._v(" "),t("td",[e._v("true")])]),e._v(" "),t("tr",[t("td",[e._v("Schema")]),e._v(" "),t("td",[e._v("The schema that IoTDB needs doesn't support good by NiFi."),t("br"),e._v("Therefore, you can define the schema here. "),t("br"),e._v("Besides, you can set encoding type and compression type by this method."),t("br"),e._v("If you don't set this property, the inferred schema will be used."),t("br"),e._v(" It can be updated by expression language.")]),e._v(" "),t("td",[e._v("null")]),e._v(" "),t("td",[e._v("false")])]),e._v(" "),t("tr",[t("td",[e._v("Aligned")]),e._v(" "),t("td",[e._v("Whether using aligned interface?  It can be updated by expression language.")]),e._v(" "),t("td",[e._v("false")]),e._v(" "),t("td",[e._v("false")])]),e._v(" "),t("tr",[t("td",[e._v("MaxRowNumber")]),e._v(" "),t("td",[e._v("Specifies the max row number of each tablet.  It can be updated by expression language.")]),e._v(" "),t("td",[e._v("1024")]),e._v(" "),t("td",[e._v("false")])])])]),e._v(" "),t("h3",{attrs:{id:"inferred-schema-of-flowfile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#inferred-schema-of-flowfile"}},[e._v("#")]),e._v(" Inferred Schema of Flowfile")]),e._v(" "),t("p",[e._v("There are a couple of rules about flowfile:")]),e._v(" "),t("ol",[t("li",[e._v("The flowfile can be read by "),t("code",[e._v("Record Reader")]),e._v(".")]),e._v(" "),t("li",[e._v("The schema of flowfile must contain a field "),t("code",[e._v("Time")]),e._v(", and it must be the first.")]),e._v(" "),t("li",[e._v("The data type of time must be "),t("code",[e._v("STRING")]),e._v(" or "),t("code",[e._v("LONG")]),e._v(".")]),e._v(" "),t("li",[e._v("Fields excepted time must start with "),t("code",[e._v("root.")]),e._v(".")]),e._v(" "),t("li",[e._v("The supported data types are "),t("code",[e._v("INT")]),e._v(", "),t("code",[e._v("LONG")]),e._v(", "),t("code",[e._v("FLOAT")]),e._v(", "),t("code",[e._v("DOUBLE")]),e._v(", "),t("code",[e._v("BOOLEAN")]),e._v(", "),t("code",[e._v("TEXT")]),e._v(".")])]),e._v(" "),t("h3",{attrs:{id:"convert-schema-by-property"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#convert-schema-by-property"}},[e._v("#")]),e._v(" Convert Schema by property")]),e._v(" "),t("p",[e._v("As mentioned above, converting schema by property which is more flexible and stronger than inferred schema.")]),e._v(" "),t("p",[e._v("The structure of property "),t("code",[e._v("Schema")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\t"),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"timeType"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"LONG"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\t"),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"fields"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"tsName"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"s1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"dataType"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"INT32"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"encoding"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"RLE"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"compressionType"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"GZIP"')]),e._v("\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"tsName"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"s2"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"dataType"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"INT64"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"encoding"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"RLE"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"compressionType"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"GZIP"')]),e._v("\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br")])]),t("p",[t("strong",[e._v("Note")])]),e._v(" "),t("ol",[t("li",[e._v("The first column must be "),t("code",[e._v("Time")]),e._v(". The rest must be arranged in the same order as in "),t("code",[e._v("field")]),e._v(" of JSON.")]),e._v(" "),t("li",[e._v("The JSON of schema must contain "),t("code",[e._v("timeType")]),e._v(" and "),t("code",[e._v("fields")]),e._v(".")]),e._v(" "),t("li",[e._v("There are only two options "),t("code",[e._v("LONG")]),e._v(" and "),t("code",[e._v("STRING")]),e._v(" for "),t("code",[e._v("timeType")]),e._v(".")]),e._v(" "),t("li",[e._v("The columns "),t("code",[e._v("tsName")]),e._v(" and "),t("code",[e._v("dataType")]),e._v(" must be set.")]),e._v(" "),t("li",[e._v("The property "),t("code",[e._v("Prefix")]),e._v(" will be added to tsName as the field name when add data to IoTDB.")]),e._v(" "),t("li",[e._v("The supported "),t("code",[e._v("dataTypes")]),e._v(" are "),t("code",[e._v("INT32")]),e._v(", "),t("code",[e._v("INT64")]),e._v(", "),t("code",[e._v("FLOAT")]),e._v(", "),t("code",[e._v("DOUBLE")]),e._v(", "),t("code",[e._v("BOOLEAN")]),e._v(", "),t("code",[e._v("TEXT")]),e._v(".")]),e._v(" "),t("li",[e._v("The supported "),t("code",[e._v("encoding")]),e._v(" are "),t("code",[e._v("PLAIN")]),e._v(", "),t("code",[e._v("DICTIONARY")]),e._v(", "),t("code",[e._v("RLE")]),e._v(", "),t("code",[e._v("DIFF")]),e._v(", "),t("code",[e._v("TS_2DIFF")]),e._v(", "),t("code",[e._v("BITMAP")]),e._v(", "),t("code",[e._v("GORILLA_V1")]),e._v(", "),t("code",[e._v("REGULAR")]),e._v(", "),t("code",[e._v("GORILLA")]),e._v(".")]),e._v(" "),t("li",[e._v("The supported "),t("code",[e._v("compressionType")]),e._v(" are "),t("code",[e._v("UNCOMPRESSED")]),e._v(", "),t("code",[e._v("SNAPPY")]),e._v(", "),t("code",[e._v("GZIP")]),e._v(", "),t("code",[e._v("LZO")]),e._v(", "),t("code",[e._v("SDT")]),e._v(", "),t("code",[e._v("PAA")]),e._v(", "),t("code",[e._v("PLA")]),e._v(", "),t("code",[e._v("LZ4")]),e._v(".")])]),e._v(" "),t("h2",{attrs:{id:"relationships"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#relationships"}},[e._v("#")]),e._v(" Relationships")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("relationship")]),e._v(" "),t("th",[e._v("description")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("success")]),e._v(" "),t("td",[e._v("Data can be written correctly or flow file is empty.")])]),e._v(" "),t("tr",[t("td",[e._v("failure")]),e._v(" "),t("td",[e._v("The shema or flow file is abnormal.")])])])]),e._v(" "),t("h2",{attrs:{id:"queryiotdbrecord"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#queryiotdbrecord"}},[e._v("#")]),e._v(" QueryIoTDBRecord")]),e._v(" "),t("p",[e._v("This is a processor that reads the sql query from the incoming FlowFile and using it to query the result from IoTDB using native interface. Then it use the configured 'Record Writer' to generate the flowfile")]),e._v(" "),t("h3",{attrs:{id:"properties-of-queryiotdbrecord"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#properties-of-queryiotdbrecord"}},[e._v("#")]),e._v(" Properties of QueryIoTDBRecord")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("property")]),e._v(" "),t("th",[e._v("description")]),e._v(" "),t("th",[e._v("default value")]),e._v(" "),t("th",[e._v("necessary")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("Host")]),e._v(" "),t("td",[e._v("The host of IoTDB.")]),e._v(" "),t("td",[e._v("null")]),e._v(" "),t("td",[e._v("true")])]),e._v(" "),t("tr",[t("td",[e._v("Port")]),e._v(" "),t("td",[e._v("The port of IoTDB.")]),e._v(" "),t("td",[e._v("6667")]),e._v(" "),t("td",[e._v("true")])]),e._v(" "),t("tr",[t("td",[e._v("Username")]),e._v(" "),t("td",[e._v("Username to access the IoTDB.")]),e._v(" "),t("td",[e._v("null")]),e._v(" "),t("td",[e._v("true")])]),e._v(" "),t("tr",[t("td",[e._v("Password")]),e._v(" "),t("td",[e._v("Password to access the IoTDB.")]),e._v(" "),t("td",[e._v("null")]),e._v(" "),t("td",[e._v("true")])]),e._v(" "),t("tr",[t("td",[e._v("Record Writer")]),e._v(" "),t("td",[e._v("Specifies the Controller Service to use for writing results to a FlowFile. The Record Writer may use Inherit Schema to emulate the inferred schema behavior, i.e. An explicit schema need not be defined in the writer, and will be supplied by the same logic used to infer the schema from the column types.")]),e._v(" "),t("td",[e._v("null")]),e._v(" "),t("td",[e._v("true")])]),e._v(" "),t("tr",[t("td",[e._v("iotdb-query")]),e._v(" "),t("td",[e._v("The IoTDB query to execute. "),t("bbr",[e._v(" Note: If there are incoming connections, then the query is created from incoming FlowFile's content otherwise\"it is created from this property.")])],1),e._v(" "),t("td",[e._v("null")]),e._v(" "),t("td",[e._v("false")])]),e._v(" "),t("tr",[t("td",[e._v("iotdb-query-chunk-size")]),e._v(" "),t("td",[e._v("Chunking can be used to return results in a stream of smaller batches (each has a partial results up to a chunk size) rather than as a single response. Chunking queries can return an unlimited number of rows. Note: Chunking is enable when result chunk size is greater than 0")]),e._v(" "),t("td",[e._v("0")]),e._v(" "),t("td",[e._v("false")])])])]),e._v(" "),t("h2",{attrs:{id:"relationships-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#relationships-2"}},[e._v("#")]),e._v(" Relationships")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("relationship")]),e._v(" "),t("th",[e._v("description")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("success")]),e._v(" "),t("td",[e._v("Data can be written correctly or flow file is empty.")])]),e._v(" "),t("tr",[t("td",[e._v("failure")]),e._v(" "),t("td",[e._v("The shema or flow file is abnormal.")])])])])])}),[],!1,null,null,null);t.default=a.exports}}]);