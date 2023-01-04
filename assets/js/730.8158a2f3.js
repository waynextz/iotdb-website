(window.webpackJsonp=window.webpackJsonp||[]).push([[730],{1134:function(s,a,t){"use strict";t.r(a);var n=t(19),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"查询结果分页"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询结果分页"}},[s._v("#")]),s._v(" 查询结果分页")]),s._v(" "),a("p",[s._v("当查询结果集数据量很大，放在一个页面不利于显示，可以使用  "),a("code",[s._v("LIMIT/SLIMIT")]),s._v(" 子句和 "),a("code",[s._v("OFFSET/SOFFSET")]),s._v("子句进行分页控制。")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("LIMIT")]),s._v(" 和 "),a("code",[s._v("SLIMIT")]),s._v(" 子句用于控制查询结果的行数和列数。")]),s._v(" "),a("li",[a("code",[s._v("OFFSET")]),s._v(" 和 "),a("code",[s._v("SOFFSET")]),s._v(" 子句用于控制结果显示的起始位置。")])]),s._v(" "),a("h2",{attrs:{id:"按行分页"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#按行分页"}},[s._v("#")]),s._v(" 按行分页")]),s._v(" "),a("p",[s._v("用户可以通过 "),a("code",[s._v("LIMIT")]),s._v(" 和 "),a("code",[s._v("OFFSET")]),s._v(" 子句控制查询结果的行数，"),a("code",[s._v("LIMIT rowLimit")]),s._v(" 指定查询结果的行数，"),a("code",[s._v("OFFSET rowOffset")]),s._v(" 指定查询结果显示的起始行位置。")]),s._v(" "),a("p",[s._v("注意：")]),s._v(" "),a("ul",[a("li",[s._v("当 "),a("code",[s._v("rowOffset")]),s._v(" 超过结果集的大小时，返回空结果集。")]),s._v(" "),a("li",[s._v("当 "),a("code",[s._v("rowLimit")]),s._v(" 超过结果集的大小时，返回所有查询结果。")]),s._v(" "),a("li",[s._v("当 "),a("code",[s._v("rowLimit")]),s._v(" 和 "),a("code",[s._v("rowOffset")]),s._v(" 不是正整数，或超过 "),a("code",[s._v("INT32")]),s._v(" 允许的最大值时，系统将提示错误。")])]),s._v(" "),a("p",[s._v("我们将通过以下示例演示如何使用 "),a("code",[s._v("LIMIT")]),s._v(" 和 "),a("code",[s._v("OFFSET")]),s._v(" 子句。")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("示例 1：")]),s._v(" 基本的 "),a("code",[s._v("LIMIT")]),s._v(" 子句")])]),s._v(" "),a("p",[s._v("SQL 语句：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("status")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" temperature "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ln"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wf01"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wt01 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("limit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("含义：")]),s._v(" "),a("p",[s._v("所选设备为 ln 组 wf01 工厂 wt01 设备； 选择的时间序列是“状态”和“温度”。 SQL 语句要求返回查询结果的前 10 行。")]),s._v(" "),a("p",[s._v("结果如下所示：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("+-----------------------------+------------------------+-----------------------------+\n|                         Time|root.ln.wf01.wt01.status|root.ln.wf01.wt01.temperature|\n+-----------------------------+------------------------+-----------------------------+\n|2017-11-01T00:00:00.000+08:00|                    true|                        25.96|\n|2017-11-01T00:01:00.000+08:00|                    true|                        24.36|\n|2017-11-01T00:02:00.000+08:00|                   false|                        20.09|\n|2017-11-01T00:03:00.000+08:00|                   false|                        20.18|\n|2017-11-01T00:04:00.000+08:00|                   false|                        21.13|\n|2017-11-01T00:05:00.000+08:00|                   false|                        22.72|\n|2017-11-01T00:06:00.000+08:00|                   false|                        20.71|\n|2017-11-01T00:07:00.000+08:00|                   false|                        21.45|\n|2017-11-01T00:08:00.000+08:00|                   false|                        22.58|\n|2017-11-01T00:09:00.000+08:00|                   false|                        20.98|\n+-----------------------------+------------------------+-----------------------------+\nTotal line number = 10\nIt costs 0.000s\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("ul",[a("li",[a("strong",[s._v("示例 2：")]),s._v(" 带 "),a("code",[s._v("OFFSET")]),s._v(" 的 "),a("code",[s._v("LIMIT")]),s._v(" 子句")])]),s._v(" "),a("p",[s._v("SQL 语句：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("status")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" temperature "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ln"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wf01"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wt01 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("limit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("offset")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("含义：")]),s._v(" "),a("p",[s._v("所选设备为 ln 组 wf01 工厂 wt01 设备； 选择的时间序列是“状态”和“温度”。 SQL 语句要求返回查询结果的第 3 至 7 行（第一行编号为 0 行）。")]),s._v(" "),a("p",[s._v("结果如下所示：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("+-----------------------------+------------------------+-----------------------------+\n|                         Time|root.ln.wf01.wt01.status|root.ln.wf01.wt01.temperature|\n+-----------------------------+------------------------+-----------------------------+\n|2017-11-01T00:03:00.000+08:00|                   false|                        20.18|\n|2017-11-01T00:04:00.000+08:00|                   false|                        21.13|\n|2017-11-01T00:05:00.000+08:00|                   false|                        22.72|\n|2017-11-01T00:06:00.000+08:00|                   false|                        20.71|\n|2017-11-01T00:07:00.000+08:00|                   false|                        21.45|\n+-----------------------------+------------------------+-----------------------------+\nTotal line number = 5\nIt costs 0.342s\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("ul",[a("li",[a("strong",[s._v("示例 3：")]),s._v(" "),a("code",[s._v("LIMIT")]),s._v(" 子句与 "),a("code",[s._v("WHERE")]),s._v(" 子句结合")])]),s._v(" "),a("p",[s._v("SQL 语句：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("status")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("temperature "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ln"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wf01"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wt01 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v("T00:"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("05")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00.000")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v("T00:"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00.000")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("limit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("offset")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("含义：")]),s._v(" "),a("p",[s._v("所选设备为 ln 组 wf01 工厂 wt01 设备； 选择的时间序列是“状态”和“温度”。 SQL 语句要求返回时间“ 2017-11-01T00：05：00.000”和“ 2017-11-01T00：12：00.000”之间的状态和温度传感器值的第 3 至 4 行（第一行） 编号为第 0 行）。")]),s._v(" "),a("p",[s._v("结果如下所示：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("+-----------------------------+------------------------+-----------------------------+\n|                         Time|root.ln.wf01.wt01.status|root.ln.wf01.wt01.temperature|\n+-----------------------------+------------------------+-----------------------------+\n|2017-11-01T00:03:00.000+08:00|                   false|                        20.18|\n|2017-11-01T00:04:00.000+08:00|                   false|                        21.13|\n|2017-11-01T00:05:00.000+08:00|                   false|                        22.72|\n|2017-11-01T00:06:00.000+08:00|                   false|                        20.71|\n|2017-11-01T00:07:00.000+08:00|                   false|                        21.45|\n+-----------------------------+------------------------+-----------------------------+\nTotal line number = 5\nIt costs 0.000s\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("ul",[a("li",[a("strong",[s._v("示例 4：")]),s._v(" "),a("code",[s._v("LIMIT")]),s._v(" 子句与 "),a("code",[s._v("GROUP BY")]),s._v(" 子句组合")])]),s._v(" "),a("p",[s._v("SQL 语句：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("status")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" max_value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("temperature"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ln"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wf01"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wt01 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("group")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v("T00:"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("07")]),s._v("T23:"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("limit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("offset")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("含义：")]),s._v(" "),a("p",[s._v("SQL 语句子句要求返回查询结果的第 3 至 6 行（第一行编号为 0 行）。")]),s._v(" "),a("p",[s._v("结果如下所示：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("+-----------------------------+-------------------------------+----------------------------------------+\n|                         Time|count(root.ln.wf01.wt01.status)|max_value(root.ln.wf01.wt01.temperature)|\n+-----------------------------+-------------------------------+----------------------------------------+\n|2017-11-04T00:00:00.000+08:00|                           1440|                                    26.0|\n|2017-11-05T00:00:00.000+08:00|                           1440|                                    26.0|\n|2017-11-06T00:00:00.000+08:00|                           1440|                                   25.99|\n|2017-11-07T00:00:00.000+08:00|                           1380|                                    26.0|\n+-----------------------------+-------------------------------+----------------------------------------+\nTotal line number = 4\nIt costs 0.016s\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h2",{attrs:{id:"按列分页"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#按列分页"}},[s._v("#")]),s._v(" 按列分页")]),s._v(" "),a("p",[s._v("用户可以通过 "),a("code",[s._v("SLIMIT")]),s._v(" 和 "),a("code",[s._v("SOFFSET")]),s._v(" 子句控制查询结果的列数，"),a("code",[s._v("SLIMIT seriesLimit")]),s._v(" 指定查询结果的列数，"),a("code",[s._v("SOFFSET seriesOffset")]),s._v(" 指定查询结果显示的起始列位置。")]),s._v(" "),a("p",[s._v("注意：")]),s._v(" "),a("ul",[a("li",[s._v("仅用于控制值列，对时间列和设备列无效。")]),s._v(" "),a("li",[s._v("当 "),a("code",[s._v("seriesOffset")]),s._v(" 超过结果集的大小时，返回空结果集。")]),s._v(" "),a("li",[s._v("当 "),a("code",[s._v("seriesLimit")]),s._v(" 超过结果集的大小时，返回所有查询结果。")]),s._v(" "),a("li",[s._v("当 "),a("code",[s._v("seriesLimit")]),s._v(" 和 "),a("code",[s._v("seriesOffset")]),s._v(" 不是正整数，或超过 "),a("code",[s._v("INT32")]),s._v(" 允许的最大值时，系统将提示错误。")])]),s._v(" "),a("p",[s._v("我们将通过以下示例演示如何使用 "),a("code",[s._v("SLIMIT")]),s._v(" 和 "),a("code",[s._v("SOFFSET")]),s._v(" 子句。")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("示例 1：")]),s._v(" 基本的 "),a("code",[s._v("SLIMIT")]),s._v(" 子句")])]),s._v(" "),a("p",[s._v("SQL 语句：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ln"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wf01"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wt01 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v("T00:"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("05")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00.000")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v("T00:"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00.000")]),s._v(" slimit "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("含义：")]),s._v(" "),a("p",[s._v('所选设备为 ln 组 wf01 工厂 wt01 设备； 所选时间序列是该设备下的第二列，即温度。 SQL 语句要求在"2017-11-01T00:05:00.000"和"2017-11-01T00:12:00.000"的时间点之间选择温度传感器值。')]),s._v(" "),a("p",[s._v("结果如下所示：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("+-----------------------------+-----------------------------+\n|                         Time|root.ln.wf01.wt01.temperature|\n+-----------------------------+-----------------------------+\n|2017-11-01T00:06:00.000+08:00|                        20.71|\n|2017-11-01T00:07:00.000+08:00|                        21.45|\n|2017-11-01T00:08:00.000+08:00|                        22.58|\n|2017-11-01T00:09:00.000+08:00|                        20.98|\n|2017-11-01T00:10:00.000+08:00|                        25.52|\n|2017-11-01T00:11:00.000+08:00|                        22.91|\n+-----------------------------+-----------------------------+\nTotal line number = 6\nIt costs 0.000s\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("ul",[a("li",[a("strong",[s._v("示例 2：")]),s._v(" 带 "),a("code",[s._v("SOFFSET")]),s._v(" 的 "),a("code",[s._v("SLIMIT")]),s._v(" 子句")])]),s._v(" "),a("p",[s._v("SQL 语句：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ln"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wf01"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wt01 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v("T00:"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("05")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00.000")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v("T00:"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00.000")]),s._v(" slimit "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" soffset "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("含义：")]),s._v(" "),a("p",[s._v('所选设备为 ln 组 wf01 工厂 wt01 设备； 所选时间序列是该设备下的第一列，即电源状态。 SQL 语句要求在" 2017-11-01T00:05:00.000"和"2017-11-01T00:12:00.000"的时间点之间选择状态传感器值。')]),s._v(" "),a("p",[s._v("结果如下所示：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("+-----------------------------+------------------------+\n|                         Time|root.ln.wf01.wt01.status|\n+-----------------------------+------------------------+\n|2017-11-01T00:06:00.000+08:00|                   false|\n|2017-11-01T00:07:00.000+08:00|                   false|\n|2017-11-01T00:08:00.000+08:00|                   false|\n|2017-11-01T00:09:00.000+08:00|                   false|\n|2017-11-01T00:10:00.000+08:00|                    true|\n|2017-11-01T00:11:00.000+08:00|                   false|\n+-----------------------------+------------------------+\nTotal line number = 6\nIt costs 0.003s\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("ul",[a("li",[a("strong",[s._v("示例 3：")]),s._v(" "),a("code",[s._v("SLIMIT")]),s._v(" 子句与 "),a("code",[s._v("GROUP BY")]),s._v(" 子句结合")])]),s._v(" "),a("p",[s._v("SQL 语句：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" max_value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ln"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wf01"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wt01 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("group")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v("T00:"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("07")]),s._v("T23:"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" slimit "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" soffset "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("含义：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("+-----------------------------+-----------------------------------+\n|                         Time|max_value(root.ln.wf01.wt01.status)|\n+-----------------------------+-----------------------------------+\n|2017-11-01T00:00:00.000+08:00|                               true|\n|2017-11-02T00:00:00.000+08:00|                               true|\n|2017-11-03T00:00:00.000+08:00|                               true|\n|2017-11-04T00:00:00.000+08:00|                               true|\n|2017-11-05T00:00:00.000+08:00|                               true|\n|2017-11-06T00:00:00.000+08:00|                               true|\n|2017-11-07T00:00:00.000+08:00|                               true|\n+-----------------------------+-----------------------------------+\nTotal line number = 7\nIt costs 0.000s\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("ul",[a("li",[a("strong",[s._v("示例 4：")]),s._v(" "),a("code",[s._v("SLIMIT")]),s._v(" 子句与 "),a("code",[s._v("LIMIT")]),s._v(" 子句结合")])]),s._v(" "),a("p",[s._v("SQL 语句：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ln"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wf01"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wt01 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("limit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("offset")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" slimit "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" soffset "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("含义：")]),s._v(" "),a("p",[s._v("所选设备为 ln 组 wf01 工厂 wt01 设备； 所选时间序列是此设备下的第 0 列至第 1 列（第一列编号为第 0 列）。 SQL 语句子句要求返回查询结果的第 100 至 109 行（第一行编号为 0 行）。")]),s._v(" "),a("p",[s._v("结果如下所示：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("+-----------------------------+-----------------------------+------------------------+\n|                         Time|root.ln.wf01.wt01.temperature|root.ln.wf01.wt01.status|\n+-----------------------------+-----------------------------+------------------------+\n|2017-11-01T01:40:00.000+08:00|                        21.19|                   false|\n|2017-11-01T01:41:00.000+08:00|                        22.79|                   false|\n|2017-11-01T01:42:00.000+08:00|                        22.98|                   false|\n|2017-11-01T01:43:00.000+08:00|                        21.52|                   false|\n|2017-11-01T01:44:00.000+08:00|                        23.45|                    true|\n|2017-11-01T01:45:00.000+08:00|                        24.06|                    true|\n|2017-11-01T01:46:00.000+08:00|                         22.6|                   false|\n|2017-11-01T01:47:00.000+08:00|                        23.78|                    true|\n|2017-11-01T01:48:00.000+08:00|                        24.72|                    true|\n|2017-11-01T01:49:00.000+08:00|                        24.68|                    true|\n+-----------------------------+-----------------------------+------------------------+\nTotal line number = 10\nIt costs 0.009s\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);