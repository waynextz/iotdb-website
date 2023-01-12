(window.webpackJsonp=window.webpackJsonp||[]).push([[322],{722:function(t,e,a){"use strict";a.r(e);var n=a(19),i=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"data-type"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data-type"}},[t._v("#")]),t._v(" Data Type")]),t._v(" "),e("h2",{attrs:{id:"basic-data-type"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#basic-data-type"}},[t._v("#")]),t._v(" Basic Data Type")]),t._v(" "),e("p",[t._v("IoTDB supports the following data types:")]),t._v(" "),e("ul",[e("li",[t._v("BOOLEAN (Boolean)")]),t._v(" "),e("li",[t._v("INT32 (Integer)")]),t._v(" "),e("li",[t._v("INT64 (Long Integer)")]),t._v(" "),e("li",[t._v("FLOAT (Single Precision Floating Point)")]),t._v(" "),e("li",[t._v("DOUBLE (Double Precision Floating Point)")]),t._v(" "),e("li",[t._v("TEXT (String)")])]),t._v(" "),e("p",[t._v("The time series of "),e("strong",[t._v("FLOAT")]),t._v(" and "),e("strong",[t._v("DOUBLE")]),t._v(" type can specify (MAX_POINT_NUMBER, see "),e("RouterLink",{attrs:{to:"/UserGuide/V0.13.x/Reference/SQL-Reference.html"}},[t._v("this page")]),t._v(" for more information on how to specify), which is the number of digits after the decimal point of the floating point number, if the encoding method is "),e("RouterLink",{attrs:{to:"/UserGuide/V0.13.x/Data-Concept/Encoding.html"}},[t._v("RLE")]),t._v(" or "),e("RouterLink",{attrs:{to:"/UserGuide/V0.13.x/Data-Concept/Encoding.html"}},[t._v("TS_2DIFF")]),t._v(". If MAX_POINT_NUMBER is not specified, the system will use "),e("RouterLink",{attrs:{to:"/UserGuide/V0.13.x/Reference/Config-Manual.html"}},[t._v("float_precision")]),t._v(" in the configuration file "),e("code",[t._v("iotdb-engine.properties")]),t._v(".")],1),t._v(" "),e("ul",[e("li",[t._v("For Float data value, The data range is (-Integer.MAX_VALUE, Integer.MAX_VALUE), rather than Float.MAX_VALUE, and the max_point_number is 19, caused by the limition of function Math.round(float) in Java.")]),t._v(" "),e("li",[t._v("For Double data value, The data range is (-Long.MAX_VALUE, Long.MAX_VALUE), rather than Double.MAX_VALUE, and the max_point_number is 19, caused by the limition of function Math.round(double) in Java (Long.MAX_VALUE=9.22E18).")])]),t._v(" "),e("p",[t._v("When the data type of data input by the user in the system does not correspond to the data type of the time series, the system will report type errors. As shown below, the second-order difference encoding does not support the Boolean type:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("IoTDB> create timeseries root.ln.wf02.wt02.status WITH DATATYPE=BOOLEAN, ENCODING=TS_2DIFF\nerror: encoding TS_2DIFF does not support BOOLEAN\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("h2",{attrs:{id:"timestamp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#timestamp"}},[t._v("#")]),t._v(" Timestamp")]),t._v(" "),e("p",[t._v("The timestamp is the time point at which data is produced. It includes absolute timestamps and relative timestamps")]),t._v(" "),e("h3",{attrs:{id:"absolute-timestamp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#absolute-timestamp"}},[t._v("#")]),t._v(" Absolute timestamp")]),t._v(" "),e("p",[t._v("Absolute timestamps in IoTDB are divided into two types: LONG and DATETIME (including DATETIME-INPUT and DATETIME-DISPLAY). When a user inputs a timestamp, he can use a LONG type timestamp or a DATETIME-INPUT type timestamp, and the supported formats of the DATETIME-INPUT type timestamp are shown in the table below:")]),t._v(" "),e("div",{staticStyle:{"text-align":"center"}},[e("p",[e("strong",[t._v("Supported formats of DATETIME-INPUT type timestamp")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Format")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("yyyy-MM-dd HH:mm:ss")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("yyyy/MM/dd HH:mm:ss")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("yyyy.MM.dd HH:mm:ss")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("yyyy-MM-dd HH:mm:ssZZ")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("yyyy/MM/dd HH:mm:ssZZ")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("yyyy.MM.dd HH:mm:ssZZ")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("yyyy/MM/dd HH:mm:ss.SSS")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("yyyy-MM-dd HH:mm:ss.SSS")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("yyyy.MM.dd HH:mm:ss.SSS")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("yyyy-MM-dd HH:mm:ss.SSSZZ")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("yyyy/MM/dd HH:mm:ss.SSSZZ")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("yyyy.MM.dd HH:mm:ss.SSSZZ")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("ISO8601 standard time format")])])])])]),t._v(" "),e("p",[t._v("IoTDB can support LONG types and DATETIME-DISPLAY types when displaying timestamps. The DATETIME-DISPLAY type can support user-defined time formats. The syntax of the custom time format is shown in the table below:")]),t._v(" "),e("div",{staticStyle:{"text-align":"center"}},[e("p",[e("strong",[t._v("The syntax of the custom time format")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Symbol")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Meaning")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Presentation")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Examples")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("G")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("era")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("era")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("era")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("C")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("century of era (>=0)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("20")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("year of era (>=0)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("year")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1996")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("x")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("weekyear")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("year")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1996")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("w")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("week of weekyear")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("27")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("e")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("day of week")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("2")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("E")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("day of week")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("text")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Tuesday; Tue")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("y")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("year")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("year")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1996")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("D")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("day of year")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("189")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("M")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("month of year")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("month")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("July; Jul; 07")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("d")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("day of month")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("10")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("a")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("halfday of day")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("text")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("PM")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("K")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("hour of halfday (0~11)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("0")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("h")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("clockhour of halfday (1~12)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("12")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("H")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("hour of day (0~23)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("0")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("k")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("clockhour of day (1~24)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("24")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("m")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("minute of hour")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("30")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("s")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("second of minute")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("55")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("S")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("fraction of second")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("millis")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("978")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("z")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("time zone")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("text")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Pacific Standard Time; PST")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Z")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("time zone offset/id")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("zone")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-0800; -08:00; America/Los_Angeles")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("'")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("escape for text")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("delimiter")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("''")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("single quote")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("literal")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("'")])])])])]),t._v(" "),e("h3",{attrs:{id:"relative-timestamp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#relative-timestamp"}},[t._v("#")]),t._v(" Relative timestamp")]),t._v(" "),e("p",[t._v("Relative time refers to the time relative to the server time "),e("code",[t._v("now()")]),t._v(" and "),e("code",[t._v("DATETIME")]),t._v(" time.")]),t._v(" "),e("p",[t._v("Syntax:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(" Duration = (Digit+ ('Y'|'MO'|'W'|'D'|'H'|'M'|'S'|'MS'|'US'|'NS'))+\n RelativeTime = (now() | DATETIME) ((+|-) Duration)+\n       \n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),t._v(" "),e("div",{staticStyle:{"text-align":"center"}},[e("p",[e("strong",[t._v("The syntax of the duration unit")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Symbol")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Meaning")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Presentation")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Examples")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("y")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("year")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1y=365 days")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1y")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("mo")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("month")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1mo=30 days")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1mo")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("w")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("week")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1w=7 days")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1w")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("d")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("day")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1d=1 day")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1d")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("h")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("hour")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1h=3600 seconds")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1h")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("m")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("minute")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1m=60 seconds")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1m")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("s")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("second")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1s=1 second")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1s")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("ms")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("millisecond")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1ms=1000_000 nanoseconds")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1ms")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("us")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("microsecond")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1us=1000 nanoseconds")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1us")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("ns")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("nanosecond")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1ns=1 nanosecond")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1ns")])])])])]),t._v(" "),e("p",[t._v("eg：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("now() - 1d2h //1 day and 2 hours earlier than the current server time\nnow() - 1w //1 week earlier than the current server time\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("blockquote",[e("p",[t._v("Note：There must be spaces on the left and right of '+' and '-'.")])])])}),[],!1,null,null,null);e.default=i.exports}}]);