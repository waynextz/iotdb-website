(window.webpackJsonp=window.webpackJsonp||[]).push([[607],{1067:function(t,e,a){"use strict";a.r(e);var s=a(49),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"data-import"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-import"}},[t._v("#")]),t._v(" Data Import")]),t._v(" "),a("h2",{attrs:{id:"import-historical-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#import-historical-data"}},[t._v("#")]),t._v(" Import Historical Data")]),t._v(" "),a("p",[t._v("This feature is not supported in version 0.8.2.")]),t._v(" "),a("h2",{attrs:{id:"import-real-time-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#import-real-time-data"}},[t._v("#")]),t._v(" Import Real-time Data")]),t._v(" "),a("p",[t._v("IoTDB provides users with a variety of ways to insert real-time data, such as directly inputting "),a("RouterLink",{attrs:{to:"/UserGuide/Master/Master/Master/Master/Master/Master/V0.8.x/5-IoTDB SQL Documentation/1-IoTDB Query Statement.html"}},[t._v("INSERT SQL statement")]),t._v(" in Cli/Shell tools, or using "),a("RouterLink",{attrs:{to:"/UserGuide/Master/Master/Master/Master/Master/Master/V0.8.x/6-JDBC API/1-JDBC API.html"}},[t._v("Java JDBC")]),t._v(" to perform single or batch execution of "),a("RouterLink",{attrs:{to:"/UserGuide/Master/Master/Master/Master/Master/Master/V0.8.x/5-IoTDB SQL Documentation/1-IoTDB Query Statement.html"}},[t._v("INSERT SQL statement")]),t._v(".")],1),t._v(" "),a("p",[t._v("This section mainly introduces the use of "),a("RouterLink",{attrs:{to:"/UserGuide/Master/Master/Master/Master/Master/Master/V0.8.x/5-IoTDB SQL Documentation/1-IoTDB Query Statement.html"}},[t._v("INSERT SQL statement")]),t._v(" for real-time data import in the scenario. See Section 5.1 for a detailed syntax of "),a("RouterLink",{attrs:{to:"/UserGuide/Master/Master/Master/Master/Master/Master/V0.8.x/5-IoTDB SQL Documentation/1-IoTDB Query Statement.html"}},[t._v("INSERT SQL statement")]),t._v(".")],1),t._v(" "),a("h3",{attrs:{id:"use-of-insert-statements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-of-insert-statements"}},[t._v("#")]),t._v(" Use of INSERT Statements")]),t._v(" "),a("p",[t._v("The "),a("RouterLink",{attrs:{to:"/UserGuide/Master/Master/Master/Master/Master/Master/V0.8.x/5-IoTDB SQL Documentation/1-IoTDB Query Statement.html"}},[t._v("INSERT SQL statement")]),t._v(" statement can be used to insert data into one or more specified timeseries that have been created. For each point of data inserted, it consists of a "),a("RouterLink",{attrs:{to:"/UserGuide/Master/Master/Master/Master/Master/Master/V0.8.x/2-Concept Key Concepts and Terminology/1-Key Concepts and Terminology.html"}},[t._v("timestamp")]),t._v(" and a sensor acquisition value of a numerical type (see "),a("RouterLink",{attrs:{to:"/UserGuide/Master/Master/Master/Master/Master/Master/V0.8.x/2-Concept Key Concepts and Terminology/2-Data Type.html"}},[t._v("Data Type")]),t._v(").")],1),t._v(" "),a("p",[t._v("In the scenario of this section, take two timeseries "),a("code",[t._v("root.ln.wf02.wt02.status")]),t._v(" and "),a("code",[t._v("root.ln.wf02.wt02.hardware")]),t._v(" as an example, and their data types are BOOLEAN and TEXT, respectively.")]),t._v(" "),a("p",[t._v("The sample code for single column data insertion is as follows:")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('IoTDB > insert into root.ln.wf02.wt02(timestamp,status) values(1,true)\nIoTDB > insert into root.ln.wf02.wt02(timestamp,hardware) values(1, "v1")\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v('The above example code inserts the long integer timestamp and the value "true" into the timeseries '),a("code",[t._v("root.ln.wf02.wt02.status")]),t._v(' and inserts the long integer timestamp and the value "v1" into the timeseries '),a("code",[t._v("root.ln.wf02.wt02.hardware")]),t._v(". When the execution is successful, cost time is shown to indicate that the data insertion has been completed.")]),t._v(" "),a("blockquote",[a("p",[t._v("Note: In IoTDB, TEXT type data can be represented by single and double quotation marks. The insertion statement above uses double quotation marks for TEXT type data. The following example will use single quotation marks for TEXT type data.")])]),t._v(" "),a("p",[t._v("The INSERT statement can also support the insertion of multi-column data at the same time point.  The sample code of  inserting the values of the two timeseries at the same time point '2' is as follows:")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("IoTDB > insert into root.ln.wf02.wt02(timestamp, status, hardware) VALUES (2, false, 'v2')\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("After inserting the data, we can simply query the inserted data using the SELECT statement:")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("IoTDB > select * from root.ln.wf02 where time < 3\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("The result is shown below. From the query results, it can be seen that the insertion statements of single column and multi column data are performed correctly.")]),t._v(" "),a("center",[a("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51605021-c2ee1500-1f48-11e9-8f6b-ba9b48875a41.png"}})]),t._v(" "),a("h2",{attrs:{id:"error-handling-of-insert-statements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#error-handling-of-insert-statements"}},[t._v("#")]),t._v(" Error Handling of INSERT Statements")]),t._v(" "),a("p",[t._v("If the user inserts data into a non-existent timeseries, for example, execute the following commands:")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('IoTDB > insert into root.ln.wf02.wt02(timestamp, temperature) values(1,"v1")\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("Because "),a("code",[t._v("root.ln.wf02.wt02. temperature")]),t._v(" does not exist, the system will return the following ERROR information:")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Msg: Current deviceId[root.ln.wf02.wt02] does not contains measurement:temperature\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("If the data type inserted by the user is inconsistent with the corresponding data type of the timeseries, for example, execute the following command:")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("IoTDB > insert into root.ln.wf02.wt02(timestamp,hardware) values(1,100)\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("The system will return the following ERROR information:")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("error: The TEXT data type should be covered by \" or '\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])],1)}),[],!1,null,null,null);e.default=r.exports}}]);