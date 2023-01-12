(window.webpackJsonp=window.webpackJsonp||[]).push([[247],{647:function(e,t,n){"use strict";n.r(t);var s=n(19),r=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"performance-tracing-tool"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#performance-tracing-tool"}},[e._v("#")]),e._v(" Performance Tracing Tool")]),e._v(" "),t("p",[e._v("IoTDB supports the use of "),t("code",[e._v("TRACING")]),e._v(" statements to enable and disable performance tracing of query statements, which is disabled by default. Users can use performance tracking tool to analyze potential performance problems in some queries. By default, the log files for performance tracing are stored in the directory "),t("code",[e._v("./data/tracing")]),e._v(".")]),e._v(" "),t("p",[e._v("Turn on Tracing：")]),e._v(" "),t("p",[t("code",[e._v("IoTDB> TRACING ON")])]),e._v(" "),t("p",[e._v("Turn off Tracing：")]),e._v(" "),t("p",[t("code",[e._v("IoTDB> TRACING OFF")])]),e._v(" "),t("p",[e._v("Since the cost of an IoTDB query mainly depends on the number of time series queried, the number of tsfile files accessed, the total number of chunks to be scanned, and the average size of each chunk (the number of data points contained in the chunk). Therefore, the current performance analysis includes the following contents:")]),e._v(" "),t("ul",[t("li",[e._v("Start time")]),e._v(" "),t("li",[e._v("Query statement")]),e._v(" "),t("li",[e._v("Number of series paths")]),e._v(" "),t("li",[e._v("Number of sequence files")]),e._v(" "),t("li",[e._v("Statistics of each sequence file")]),e._v(" "),t("li",[e._v("Number of unSequence files")]),e._v(" "),t("li",[e._v("Statistics of each unSequence file")]),e._v(" "),t("li",[e._v("Number of chunks")]),e._v(" "),t("li",[e._v("Average size of chunks")]),e._v(" "),t("li",[e._v("Total cost time")])]),e._v(" "),t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),t("p",[e._v("For example, execute "),t("code",[e._v("select * from root")]),e._v(", the contents of the tracing log file will include the following contents:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Query Id: 2 - Start time: 2020-06-28 10:53:54.727\nQuery Id: 2 - Query Statement: select * from root\nQuery Id: 2 - Number of series paths: 3\nQuery Id: 2 - Number of sequence files: 1\nQuery Id: 2 - SeqFile_1603336100446-1-0.tsfile root.sg.d1[1, 10000]\nQuery Id: 2 - Number of unsequence files: 1\nQuery Id: 2 - UnSeqFile_1603354798303-2-0.tsfile root.sg.d1[9, 1000]\nQuery Id: 2 - Number of chunks: 3\nQuery Id: 2 - Average size of chunks: 4113\nQuery Id: 2 - Total cost time: 11ms\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br")])]),t("p",[e._v("In order to avoid disordered output information caused by multiple queries being executed at the same time, the Query ID is added before each output information. Users can use "),t("code",[e._v('grep "Query ID: 2" tracing.txt')]),e._v(" to extract all tracing information of one query.")])])}),[],!1,null,null,null);t.default=r.exports}}]);