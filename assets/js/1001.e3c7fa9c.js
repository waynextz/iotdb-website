(window.webpackJsonp=window.webpackJsonp||[]).push([[1001],{1405:function(s,t,a){"use strict";a.r(t);var n=a(19),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"m4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#m4"}},[s._v("#")]),s._v(" M4")]),s._v(" "),t("h3",{attrs:{id:"m4-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#m4-2"}},[s._v("#")]),s._v(" M4")]),s._v(" "),t("h4",{attrs:{id:"函数简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#函数简介"}},[s._v("#")]),s._v(" 函数简介")]),s._v(" "),t("p",[s._v("本函数使用 MAC (merging all chunks) 方法执行M4聚合查询。")]),s._v(" "),t("p",[t("strong",[s._v("函数名：")]),s._v(" M4")]),s._v(" "),t("p",[t("strong",[s._v("输入序列：")]),s._v(" 仅支持单个输入序列，类型为 INT32 / INT64 / FLOAT / DOUBLE。")]),s._v(" "),t("p",[t("strong",[s._v("参数：")])]),s._v(" "),t("ul",[t("li",[t("code",[s._v("tqs")]),s._v(": 查询的开始时间（含）。")]),s._v(" "),t("li",[t("code",[s._v("tqe")]),s._v(": 查询的结束时间（不含）。")]),s._v(" "),t("li",[t("code",[s._v("w")]),s._v(": M4聚合中的时间跨度数量。")])]),s._v(" "),t("p",[t("strong",[s._v("输出序列：")]),s._v(" 每个时间跨度的首、尾、最小和最大值。")]),s._v(" "),t("p",[t("code",[s._v("[tqs+(tqe-tqs)/w*(i-1),tqs+(tqe-tqs)/w*i), i=1,...,w.")])]),s._v(" "),t("p",[t("strong",[s._v("说明：")])]),s._v(" "),t("ul",[t("li",[s._v("函数当前仅适用于 "),t("code",[s._v("research/M4-visualization")]),s._v(" 分支。")]),s._v(" "),t("li",[s._v("输入参数需确保 "),t("code",[s._v("(tqe-tqs)")]),s._v(" 是 "),t("code",[s._v("w")]),s._v(" 的倍数。")]),s._v(" "),t("li",[s._v("查询时需在 where 语句后添加 "),t("code",[s._v("time>=tqs and time<tqe")]),s._v("。")])]),s._v(" "),t("h4",{attrs:{id:"使用示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用示例"}},[s._v("#")]),s._v(" 使用示例")]),s._v(" "),t("p",[s._v("输入序列:")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("+-----------------------------+------------------+\n|                         Time|root.vehicle.d0.s0|\n+-----------------------------+------------------+\n|1970-01-01T08:00:00.001+08:00|               5.0|\n|1970-01-01T08:00:00.002+08:00|              15.0|\n|1970-01-01T08:00:00.005+08:00|              10.0|\n|1970-01-01T08:00:00.008+08:00|               8.0|\n|1970-01-01T08:00:00.010+08:00|              20.0|\n|1970-01-01T08:00:00.020+08:00|              20.0|\n|1970-01-01T08:00:00.025+08:00|               8.0|\n|1970-01-01T08:00:00.027+08:00|              20.0|\n|1970-01-01T08:00:00.030+08:00|              40.0|\n|1970-01-01T08:00:00.033+08:00|               9.0|\n|1970-01-01T08:00:00.035+08:00|              10.0|\n|1970-01-01T08:00:00.040+08:00|              20.0|\n|1970-01-01T08:00:00.045+08:00|              30.0|\n|1970-01-01T08:00:00.052+08:00|               8.0|\n|1970-01-01T08:00:00.054+08:00|              18.0|\n|1970-01-01T08:00:00.120+08:00|               8.0|\n+-----------------------------+------------------+\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br")])]),t("p",[s._v("用于查询的 SQL 语句:")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" M4"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'tqs'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'0'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'tqe'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'100'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'w'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'4'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("vehicle"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d0 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("输出序列:")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('+-----------------------------+----------------------------------------------------------------------------------+\n|                         Time|                           M4(root.vehicle.d0.s0, "tqs"="0", "tqe"="100", "w"="4")|\n+-----------------------------+----------------------------------------------------------------------------------+\n|1970-01-01T08:00:00.000+08:00|  FirstPoint=(1,5.0), LastPoint=(20,20.0), BottomPoint=(1,5.0), TopPoint=(10,20.0)|\n|1970-01-01T08:00:00.025+08:00|FirstPoint=(25,8.0), LastPoint=(45,30.0), BottomPoint=(25,8.0), TopPoint=(30,40.0)|\n|1970-01-01T08:00:00.050+08:00|FirstPoint=(52,8.0), LastPoint=(54,18.0), BottomPoint=(52,8.0), TopPoint=(54,18.0)|\n|1970-01-01T08:00:00.075+08:00|                                                                             empty|\n+-----------------------------+----------------------------------------------------------------------------------+\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);