(window.webpackJsonp=window.webpackJsonp||[]).push([[439],{840:function(e,t,s){"use strict";s.r(t);var r=s(19),a=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"memory-estimation-tool"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#memory-estimation-tool"}},[e._v("#")]),e._v(" Memory Estimation Tool")]),e._v(" "),t("h1",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),t("p",[e._v("This tool calculates the minimum memory for writing to meet specific workload through a number of parameters input by users. (Memory in IoTDB is divided into three parts: write memory, read memory and reserve memory. Write memory is used for data write allocation. The ratio of the three can be set in the configuration file) The unit of result is in GB.")]),e._v(" "),t("h1",{attrs:{id:"input-parameters"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#input-parameters"}},[e._v("#")]),e._v(" Input parameters")]),e._v(" "),t("p",[e._v("When using this tool, the parameters needed to be input are as follows:\n"),t("table",[t("tr",[t("td",[e._v("Parameter")]),e._v(" "),t("td",[e._v("Parameter Description")]),e._v(" "),t("td",[e._v("Example")]),e._v(" "),t("td",[e._v("Necessary")])]),e._v(" "),t("tr",[t("td",[e._v("-sg | --storagegroup <storage group number>")]),e._v(" "),t("td",[e._v("storage group number")]),e._v(" "),t("td",[e._v("-sg 20")]),e._v(" "),t("td",[e._v("true")])]),e._v(" "),t("tr",[t("td",[e._v("-ts | --timeseries <total timeseries number>")]),e._v(" "),t("td",[e._v("total timeseries number")]),e._v(" "),t("td",[e._v("-ts 10000")]),e._v(" "),t("td",[e._v("true")])]),e._v(" "),t("tr",[t("td",[e._v("-mts | --maxtimeseries <max timeseries>")]),e._v(" "),t("td",[e._v("maximum number of timeseries among storage groups.If the time series are evenly distributed in the storage group, this parameter may not be set.")]),e._v(" "),t("td",[e._v("-mts 10000")]),e._v(" "),t("td",[e._v("false")])])])]),e._v(" "),t("p",[e._v("In memory estimation, if the calculation takes a long time, the tool will show the running progress below, which is convenient for users to master the progress.")]),e._v(" "),t("h1",{attrs:{id:"usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),t("p",[e._v("Users can use the tool using scripts under the ``IOTDB_HOME/bin`folder.\nFor Linux and Mac OS X users:")]),e._v(" "),t("ul",[t("li",[e._v("Assume that there are 20 storage groups, 10w timeseries and timeseries are evenly distributed in the storage groups:")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("  Shell >$IOTDB_HOME/bin/memory-tool.sh calmem -sg 20 -ts 100000\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("ul",[t("li",[e._v("Assume that there are 20 storage groups, 10w timeseries and maximum timeseries number among storage groups is 50000:")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("  Shell >$IOTDB_HOME/bin/memory-tool.sh calmem -sg 20 -ts 100000 -tsm -50000\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("For Windows users:")]),e._v(" "),t("ul",[t("li",[e._v("Assume that there are 20 storage groups, 10w timeseries and timeseries are evenly distributed in the storage groups:")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("  Shell >$IOTDB_HOME\\bin\\memory-tool.bat calmem -sg 20 -ts 100000\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("ul",[t("li",[e._v("Assume that there are 20 storage groups, 10w timeseries and maximum timeseries number among storage groups is 50000:")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("  Shell >$IOTDB_HOME\\bin\\memory-tool.bat calmem -sg 20 -ts 100000 -tsm -50000\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])])])}),[],!1,null,null,null);t.default=a.exports}}]);