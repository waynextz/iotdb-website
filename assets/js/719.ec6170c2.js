(window.webpackJsonp=window.webpackJsonp||[]).push([[719],{1120:function(s,t,n){"use strict";n.r(t);var a=n(19),e=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"时间序列处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#时间序列处理"}},[s._v("#")]),s._v(" 时间序列处理")]),s._v(" "),t("h2",{attrs:{id:"change-points"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#change-points"}},[s._v("#")]),s._v(" CHANGE_POINTS")]),s._v(" "),t("h3",{attrs:{id:"函数简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#函数简介"}},[s._v("#")]),s._v(" 函数简介")]),s._v(" "),t("p",[s._v("本函数用于去除输入序列中的连续相同值。如输入序列"),t("code",[s._v("1，1，2，2，3")]),s._v("输出序列为"),t("code",[s._v("1，2，3")]),s._v("。")]),s._v(" "),t("p",[t("strong",[s._v("函数名：")]),s._v(" CHANGE_POINTS")]),s._v(" "),t("p",[t("strong",[s._v("输入序列：")]),s._v(" 仅支持输入1个序列。")]),s._v(" "),t("p",[t("strong",[s._v("参数：")]),s._v(" 无")]),s._v(" "),t("h3",{attrs:{id:"使用示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用示例"}},[s._v("#")]),s._v(" 使用示例")]),s._v(" "),t("p",[s._v("原始数据：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("+-----------------------------+---------------------------+---------------------------+---------------------------+---------------------------+---------------------------+---------------------------+\n|                         Time|root.testChangePoints.d1.s1|root.testChangePoints.d1.s2|root.testChangePoints.d1.s3|root.testChangePoints.d1.s4|root.testChangePoints.d1.s5|root.testChangePoints.d1.s6|\n+-----------------------------+---------------------------+---------------------------+---------------------------+---------------------------+---------------------------+---------------------------+\n|1970-01-01T08:00:00.001+08:00|                       true|                          1|                          1|                        1.0|                        1.0|                     1test1|\n|1970-01-01T08:00:00.002+08:00|                       true|                          2|                          2|                        2.0|                        1.0|                     2test2|\n|1970-01-01T08:00:00.003+08:00|                      false|                          1|                          2|                        1.0|                        1.0|                     2test2|\n|1970-01-01T08:00:00.004+08:00|                       true|                          1|                          3|                        1.0|                        1.0|                     1test1|\n|1970-01-01T08:00:00.005+08:00|                       true|                          1|                          3|                        1.0|                        1.0|                     1test1|\n+-----------------------------+---------------------------+---------------------------+---------------------------+---------------------------+---------------------------+---------------------------+\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("用于查询的SQL语句：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" change_points"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" change_points"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" change_points"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" change_points"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s4"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" change_points"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s5"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" change_points"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s6"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("testChangePoints"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("输出序列：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("+-----------------------------+------------------------------------------+------------------------------------------+------------------------------------------+------------------------------------------+------------------------------------------+------------------------------------------+\n|                         Time|change_points(root.testChangePoints.d1.s1)|change_points(root.testChangePoints.d1.s2)|change_points(root.testChangePoints.d1.s3)|change_points(root.testChangePoints.d1.s4)|change_points(root.testChangePoints.d1.s5)|change_points(root.testChangePoints.d1.s6)|\n+-----------------------------+------------------------------------------+------------------------------------------+------------------------------------------+------------------------------------------+------------------------------------------+------------------------------------------+\n|1970-01-01T08:00:00.001+08:00|                                      true|                                         1|                                         1|                                       1.0|                                       1.0|                                    1test1|\n|1970-01-01T08:00:00.002+08:00|                                      null|                                         2|                                         2|                                       2.0|                                      null|                                    2test2|\n|1970-01-01T08:00:00.003+08:00|                                     false|                                         1|                                      null|                                       1.0|                                      null|                                      null|\n|1970-01-01T08:00:00.004+08:00|                                      true|                                      null|                                         3|                                      null|                                      null|                                    1test1|\n+-----------------------------+------------------------------------------+------------------------------------------+------------------------------------------+------------------------------------------+------------------------------------------+------------------------------------------+\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);