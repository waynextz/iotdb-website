(window.webpackJsonp=window.webpackJsonp||[]).push([[2007],{2468:function(t,e,s){"use strict";s.r(e);var r=s(49),n=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"数据类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据类型"}},[t._v("#")]),t._v(" 数据类型")]),t._v(" "),s("p",[t._v("IoTDB支持:")]),t._v(" "),s("ul",[s("li",[t._v("BOOLEAN（布尔值）")]),t._v(" "),s("li",[t._v("INT32（整型）")]),t._v(" "),s("li",[t._v("INT64（长整型）")]),t._v(" "),s("li",[t._v("FLOAT（单精度浮点数）")]),t._v(" "),s("li",[t._v("DOUBLE（双精度浮点数）")]),t._v(" "),s("li",[t._v("TEXT（字符串）")])]),t._v(" "),s("p",[t._v("一共六种数据类型。")]),t._v(" "),s("p",[t._v("其中"),s("strong",[t._v("FLOAT")]),t._v("与"),s("strong",[t._v("DOUBLE")]),t._v("类型的序列，如果编码方式采用"),s("RouterLink",{attrs:{to:"/zh/UserGuide/Master/Master/V0.8.x/2-Concept Key Concepts and Terminology/3-Encoding.html"}},[t._v("RLE")]),t._v("或"),s("RouterLink",{attrs:{to:"/zh/UserGuide/Master/Master/V0.8.x/2-Concept Key Concepts and Terminology/3-Encoding.html"}},[t._v("TS_2DIFF")]),t._v("可以指定MAX_POINT_NUMBER，该项为浮点数的小数点后位数，具体指定方式请参见本文"),s("RouterLink",{attrs:{to:"/zh/UserGuide/Master/Master/V0.8.x/5-IoTDB SQL Documentation/1-IoTDB Query Statement.html"}},[t._v("第5.1节")]),t._v("，若不指定则系统会根据配置文件"),s("code",[t._v("tsfile-format.properties")]),t._v("文件中的"),s("RouterLink",{attrs:{to:"/zh/UserGuide/Master/Master/V0.8.x/4-Deployment and Management/2-Configuration.html"}},[t._v("float_precision项")]),t._v("配置。")],1),t._v(" "),s("p",[t._v("当系统中用户输入的数据类型与该时间序列的数据类型不对应时，系统会提醒类型错误，如下所示，二阶差分不支持布尔类型的编码：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("IoTDB> create timeseries root.ln.wf02.wt02.status WITH DATATYPE=BOOLEAN, ENCODING=TS_2DIFF\nerror: encoding TS_2DIFF does not support BOOLEAN\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);