(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{521:function(e,t,n){"use strict";n.r(t);var o=n(49),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"data-type"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#data-type"}},[e._v("#")]),e._v(" Data Type")]),e._v(" "),n("p",[e._v("IoTDB supports six data types in total:")]),e._v(" "),n("ul",[n("li",[e._v("BOOLEAN (Boolean)")]),e._v(" "),n("li",[e._v("INT32 (Integer)")]),e._v(" "),n("li",[e._v("INT64 (Long Integer)")]),e._v(" "),n("li",[e._v("FLOAT (Single Precision Floating Point)")]),e._v(" "),n("li",[e._v("DOUBLE (Double Precision Floating Point)")]),e._v(" "),n("li",[e._v("TEXT (String).")])]),e._v(" "),n("p",[e._v("The time series of "),n("strong",[e._v("FLOAT")]),e._v(" and "),n("strong",[e._v("DOUBLE")]),e._v(" type can specify (MAX_POINT_NUMBER, see "),n("RouterLink",{attrs:{to:"/UserGuide/Master/5-Operation Manual/4-SQL Reference.html"}},[e._v("this page")]),e._v(" for more information on how to specify), which is the number of digits after the decimal point of the floating point number, if the encoding method is "),n("RouterLink",{attrs:{to:"/UserGuide/Master/2-Concept/3-Encoding.html"}},[e._v("RLE")]),e._v(" or "),n("RouterLink",{attrs:{to:"/UserGuide/Master/2-Concept/3-Encoding.html"}},[e._v("TS_2DIFF")]),e._v(" (Refer to "),n("RouterLink",{attrs:{to:"/UserGuide/Master/5-Operation Manual/4-SQL Reference.html"}},[e._v("Create Timeseries Statement")]),e._v(" for more information on how to specify). If MAX_POINT_NUMBER is not specified, the system will use "),n("RouterLink",{attrs:{to:"/UserGuide/Master/3-Server/4-Config Manual.html"}},[e._v("float_precision")]),e._v(" in the configuration file "),n("code",[e._v("iotdb-engine.properties")]),e._v(".")],1),e._v(" "),n("ul",[n("li",[e._v("For Float data value, The data range is (-Integer.MAX_VALUE, Integer.MAX_VALUE), rather than Float.MAX_VALUE, and the max_point_number is 19, it is because of the limition of function Math.round(float) in Java.")]),e._v(" "),n("li",[e._v("For Double data value, The data range is (-Long.MAX_VALUE, Long.MAX_VALUE), rather than Double.MAX_VALUE, and the max_point_number is 19, it is because of the limition of function Math.round(double) in Java (Long.MAX_VALUE=9.22E18).")])]),e._v(" "),n("p",[e._v("When the data type of data input by the user in the system does not correspond to the data type of the time series, the system will report type errors. As shown below, the second-order difference encoding does not support the Boolean type:")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("IoTDB> create timeseries root.ln.wf02.wt02.status WITH DATATYPE=BOOLEAN, ENCODING=TS_2DIFF\nerror: encoding TS_2DIFF does not support BOOLEAN\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br")])])])}),[],!1,null,null,null);t.default=i.exports}}]);