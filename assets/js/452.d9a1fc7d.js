(window.webpackJsonp=window.webpackJsonp||[]).push([[452],{912:function(e,t,a){"use strict";a.r(t);var r=a(49),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"data-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-type"}},[e._v("#")]),e._v(" Data Type")]),e._v(" "),a("p",[e._v("IoTDB supports six data types in total:")]),e._v(" "),a("ul",[a("li",[e._v("BOOLEAN (Boolean)")]),e._v(" "),a("li",[e._v("INT32 (Integer)")]),e._v(" "),a("li",[e._v("INT64 (Long Integer)")]),e._v(" "),a("li",[e._v("FLOAT (Single Precision Floating Point)")]),e._v(" "),a("li",[e._v("DOUBLE (Double Precision Floating Point)")]),e._v(" "),a("li",[e._v("TEXT (String).")])]),e._v(" "),a("p",[e._v("The time series of "),a("strong",[e._v("FLOAT")]),e._v(" and "),a("strong",[e._v("DOUBLE")]),e._v(" type can specify (MAX_POINT_NUMBER, see "),a("RouterLink",{attrs:{to:"/UserGuide/Master/Master/Master/Master/Master/Master/Master/Master/V0.8.x/5-IoTDB SQL Documentation/1-IoTDB Query Statement.html"}},[e._v("this page")]),e._v(" for more information on how to specify), which is the number of digits after the decimal point of the floating point number, if the encoding method is "),a("RouterLink",{attrs:{to:"/UserGuide/Master/Master/Master/Master/Master/Master/Master/Master/V0.8.x/2-Concept Key Concepts and Terminology/3-Encoding.html"}},[e._v("RLE")]),e._v(" or "),a("RouterLink",{attrs:{to:"/UserGuide/Master/Master/Master/Master/Master/Master/Master/Master/V0.8.x/2-Concept Key Concepts and Terminology/3-Encoding.html"}},[e._v("TS_2DIFF")]),e._v(" (Refer to "),a("RouterLink",{attrs:{to:"/UserGuide/Master/Master/Master/Master/Master/Master/Master/Master/V0.8.x/5-IoTDB SQL Documentation/1-IoTDB Query Statement.html"}},[e._v("Create Timeseries Statement")]),e._v(" for more information on how to specify). If MAX_POINT_NUMBER is not specified, the system will use "),a("RouterLink",{attrs:{to:"/UserGuide/Master/Master/Master/Master/Master/Master/Master/Master/V0.8.x/4-Deployment and Management/2-Configuration.html"}},[e._v("float_precision")]),e._v(" in the configuration file "),a("code",[e._v("tsfile-format.properties")]),e._v(".")],1),e._v(" "),a("ul",[a("li",[e._v("For Float data value, The data range is (-Integer.MAX_VALUE, Integer.MAX_VALUE), rather than Float.MAX_VALUE, and the max_point_number is 19, it is because of the limition of function Math.round(float) in Java.")]),e._v(" "),a("li",[e._v("For Double data value, The data range is (-Long.MAX_VALUE, Long.MAX_VALUE), rather than Double.MAX_VALUE, and the max_point_number is 19, it is because of the limition of function Math.round(double) in Java (Long.MAX_VALUE=9.22E18).")])]),e._v(" "),a("p",[e._v("When the data type of data input by the user in the system does not correspond to the data type of the time series, the system will report type errors. As shown below, the second-order difference encoding does not support the Boolean type:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("IoTDB> create timeseries root.ln.wf02.wt02.status WITH DATATYPE=BOOLEAN, ENCODING=TS_2DIFF\nerror: encoding TS_2DIFF does not support BOOLEAN\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])])])}),[],!1,null,null,null);t.default=s.exports}}]);