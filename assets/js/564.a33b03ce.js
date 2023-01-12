(window.webpackJsonp=window.webpackJsonp||[]).push([[564],{966:function(t,s,a){"use strict";a.r(s);var e=a(19),v=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"arithmetic-operators-and-functions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#arithmetic-operators-and-functions"}},[t._v("#")]),t._v(" Arithmetic Operators and Functions")]),t._v(" "),s("h2",{attrs:{id:"arithmetic-operators"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#arithmetic-operators"}},[t._v("#")]),t._v(" Arithmetic Operators")]),t._v(" "),s("h3",{attrs:{id:"unary-arithmetic-operators"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unary-arithmetic-operators"}},[t._v("#")]),t._v(" Unary Arithmetic Operators")]),t._v(" "),s("p",[t._v("Supported operators: "),s("code",[t._v("+")]),t._v(", "),s("code",[t._v("-")])]),t._v(" "),s("p",[t._v("Supported input data types: "),s("code",[t._v("INT32")]),t._v(", "),s("code",[t._v("INT64")]),t._v(" and "),s("code",[t._v("FLOAT")])]),t._v(" "),s("p",[t._v("Output data type: consistent with the input data type")]),t._v(" "),s("h3",{attrs:{id:"binary-arithmetic-operators"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#binary-arithmetic-operators"}},[t._v("#")]),t._v(" Binary Arithmetic Operators")]),t._v(" "),s("p",[t._v("Supported operators: "),s("code",[t._v("+")]),t._v(", "),s("code",[t._v("-")]),t._v(", "),s("code",[t._v("*")]),t._v(", "),s("code",[t._v("/")]),t._v(", "),s("code",[t._v("%")])]),t._v(" "),s("p",[t._v("Supported input data types: "),s("code",[t._v("INT32")]),t._v(", "),s("code",[t._v("INT64")]),t._v(", "),s("code",[t._v("FLOAT")]),t._v(" and "),s("code",[t._v("DOUBLE")])]),t._v(" "),s("p",[t._v("Output data type: "),s("code",[t._v("DOUBLE")])]),t._v(" "),s("p",[t._v("Note: Only when the left operand and the right operand under a certain timestamp are not  "),s("code",[t._v("null")]),t._v(", the binary arithmetic operation will have an output value.")]),t._v(" "),s("h3",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" s1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" s1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" s2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" s2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" s1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" s2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" s1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" s2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" s1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" s2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" s1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" s2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" s1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" s2 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("d1\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("Result:")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("+-----------------------------+-------------+--------------+-------------+-------------+-----------------------------+-----------------------------+-----------------------------+-----------------------------+-----------------------------+\n|                         Time|root.sg.d1.s1|-root.sg.d1.s1|root.sg.d1.s2|root.sg.d1.s2|root.sg.d1.s1 + root.sg.d1.s2|root.sg.d1.s1 - root.sg.d1.s2|root.sg.d1.s1 * root.sg.d1.s2|root.sg.d1.s1 / root.sg.d1.s2|root.sg.d1.s1 % root.sg.d1.s2|\n+-----------------------------+-------------+--------------+-------------+-------------+-----------------------------+-----------------------------+-----------------------------+-----------------------------+-----------------------------+\n|1970-01-01T08:00:00.001+08:00|          1.0|          -1.0|          1.0|          1.0|                          2.0|                          0.0|                          1.0|                          1.0|                          0.0|\n|1970-01-01T08:00:00.002+08:00|          2.0|          -2.0|          2.0|          2.0|                          4.0|                          0.0|                          4.0|                          1.0|                          0.0|\n|1970-01-01T08:00:00.003+08:00|          3.0|          -3.0|          3.0|          3.0|                          6.0|                          0.0|                          9.0|                          1.0|                          0.0|\n|1970-01-01T08:00:00.004+08:00|          4.0|          -4.0|          4.0|          4.0|                          8.0|                          0.0|                         16.0|                          1.0|                          0.0|\n|1970-01-01T08:00:00.005+08:00|          5.0|          -5.0|          5.0|          5.0|                         10.0|                          0.0|                         25.0|                          1.0|                          0.0|\n+-----------------------------+-------------+--------------+-------------+-------------+-----------------------------+-----------------------------+-----------------------------+-----------------------------+-----------------------------+\nTotal line number = 5\nIt costs 0.014s\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])]),s("h2",{attrs:{id:"arithmetic-functions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#arithmetic-functions"}},[t._v("#")]),t._v(" Arithmetic Functions")]),t._v(" "),s("p",[t._v("Currently, IoTDB supports the following mathematical functions. The behavior of these mathematical functions is consistent with the behavior of these functions in the Java Math standard library.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Function Name")]),t._v(" "),s("th",[t._v("Allowed Input Series Data Types")]),t._v(" "),s("th",[t._v("Output Series Data Type")]),t._v(" "),s("th",[t._v("Corresponding Implementation in the Java Standard Library")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("SIN")]),t._v(" "),s("td",[t._v("INT32 / INT64 / FLOAT / DOUBLE")]),t._v(" "),s("td",[t._v("DOUBLE")]),t._v(" "),s("td",[t._v("Math#sin(double)")])]),t._v(" "),s("tr",[s("td",[t._v("COS")]),t._v(" "),s("td",[t._v("INT32 / INT64 / FLOAT / DOUBLE")]),t._v(" "),s("td",[t._v("DOUBLE")]),t._v(" "),s("td",[t._v("Math#cos(double)")])]),t._v(" "),s("tr",[s("td",[t._v("TAN")]),t._v(" "),s("td",[t._v("INT32 / INT64 / FLOAT / DOUBLE")]),t._v(" "),s("td",[t._v("DOUBLE")]),t._v(" "),s("td",[t._v("Math#tan(double)")])]),t._v(" "),s("tr",[s("td",[t._v("ASIN")]),t._v(" "),s("td",[t._v("INT32 / INT64 / FLOAT / DOUBLE")]),t._v(" "),s("td",[t._v("DOUBLE")]),t._v(" "),s("td",[t._v("Math#asin(double)")])]),t._v(" "),s("tr",[s("td",[t._v("ACOS")]),t._v(" "),s("td",[t._v("INT32 / INT64 / FLOAT / DOUBLE")]),t._v(" "),s("td",[t._v("DOUBLE")]),t._v(" "),s("td",[t._v("Math#acos(double)")])]),t._v(" "),s("tr",[s("td",[t._v("ATAN")]),t._v(" "),s("td",[t._v("INT32 / INT64 / FLOAT / DOUBLE")]),t._v(" "),s("td",[t._v("DOUBLE")]),t._v(" "),s("td",[t._v("Math#atan(double)")])]),t._v(" "),s("tr",[s("td",[t._v("SINH")]),t._v(" "),s("td",[t._v("INT32 / INT64 / FLOAT / DOUBLE")]),t._v(" "),s("td",[t._v("DOUBLE")]),t._v(" "),s("td",[t._v("Math#sinh(double)")])]),t._v(" "),s("tr",[s("td",[t._v("COSH")]),t._v(" "),s("td",[t._v("INT32 / INT64 / FLOAT / DOUBLE")]),t._v(" "),s("td",[t._v("DOUBLE")]),t._v(" "),s("td",[t._v("Math#cosh(double)")])]),t._v(" "),s("tr",[s("td",[t._v("TANH")]),t._v(" "),s("td",[t._v("INT32 / INT64 / FLOAT / DOUBLE")]),t._v(" "),s("td",[t._v("DOUBLE")]),t._v(" "),s("td",[t._v("Math#tanh(double)")])]),t._v(" "),s("tr",[s("td",[t._v("DEGREES")]),t._v(" "),s("td",[t._v("INT32 / INT64 / FLOAT / DOUBLE")]),t._v(" "),s("td",[t._v("DOUBLE")]),t._v(" "),s("td",[t._v("Math#toDegrees(double)")])]),t._v(" "),s("tr",[s("td",[t._v("RADIANS")]),t._v(" "),s("td",[t._v("INT32 / INT64 / FLOAT / DOUBLE")]),t._v(" "),s("td",[t._v("DOUBLE")]),t._v(" "),s("td",[t._v("Math#toRadians(double)")])]),t._v(" "),s("tr",[s("td",[t._v("ABS")]),t._v(" "),s("td",[t._v("INT32 / INT64 / FLOAT / DOUBLE")]),t._v(" "),s("td",[t._v("Same type as the input series")]),t._v(" "),s("td",[t._v("Math#abs(int) / Math#abs(long) /Math#abs(float) /Math#abs(double)")])]),t._v(" "),s("tr",[s("td",[t._v("SIGN")]),t._v(" "),s("td",[t._v("INT32 / INT64 / FLOAT / DOUBLE")]),t._v(" "),s("td",[t._v("DOUBLE")]),t._v(" "),s("td",[t._v("Math#signum(double)")])]),t._v(" "),s("tr",[s("td",[t._v("CEIL")]),t._v(" "),s("td",[t._v("INT32 / INT64 / FLOAT / DOUBLE")]),t._v(" "),s("td",[t._v("DOUBLE")]),t._v(" "),s("td",[t._v("Math#ceil(double)")])]),t._v(" "),s("tr",[s("td",[t._v("FLOOR")]),t._v(" "),s("td",[t._v("INT32 / INT64 / FLOAT / DOUBLE")]),t._v(" "),s("td",[t._v("DOUBLE")]),t._v(" "),s("td",[t._v("Math#floor(double)")])]),t._v(" "),s("tr",[s("td",[t._v("ROUND")]),t._v(" "),s("td",[t._v("INT32 / INT64 / FLOAT / DOUBLE")]),t._v(" "),s("td",[t._v("DOUBLE")]),t._v(" "),s("td",[t._v("Math#rint(double)")])]),t._v(" "),s("tr",[s("td",[t._v("EXP")]),t._v(" "),s("td",[t._v("INT32 / INT64 / FLOAT / DOUBLE")]),t._v(" "),s("td",[t._v("DOUBLE")]),t._v(" "),s("td",[t._v("Math#exp(double)")])]),t._v(" "),s("tr",[s("td",[t._v("LN")]),t._v(" "),s("td",[t._v("INT32 / INT64 / FLOAT / DOUBLE")]),t._v(" "),s("td",[t._v("DOUBLE")]),t._v(" "),s("td",[t._v("Math#log(double)")])]),t._v(" "),s("tr",[s("td",[t._v("LOG10")]),t._v(" "),s("td",[t._v("INT32 / INT64 / FLOAT / DOUBLE")]),t._v(" "),s("td",[t._v("DOUBLE")]),t._v(" "),s("td",[t._v("Math#log10(double)")])]),t._v(" "),s("tr",[s("td",[t._v("SQRT")]),t._v(" "),s("td",[t._v("INT32 / INT64 / FLOAT / DOUBLE")]),t._v(" "),s("td",[t._v("DOUBLE")]),t._v(" "),s("td",[t._v("Math#sqrt(double)")])])])]),t._v(" "),s("p",[t._v("Example:")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" s1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tan"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sg1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("d1 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("limit")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("offset")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("Result:")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("+-----------------------------+-------------------+-------------------+--------------------+-------------------+\n|                         Time|     root.sg1.d1.s1|sin(root.sg1.d1.s1)| cos(root.sg1.d1.s1)|tan(root.sg1.d1.s1)|\n+-----------------------------+-------------------+-------------------+--------------------+-------------------+\n|2020-12-10T17:11:49.037+08:00|7360723084922759782| 0.8133527237573284|  0.5817708713544664| 1.3980636773094157|\n|2020-12-10T17:11:49.038+08:00|4377791063319964531|-0.8938962705202537|  0.4482738644511651| -1.994085181866842|\n|2020-12-10T17:11:49.039+08:00|7972485567734642915| 0.9627757585308978|-0.27030138509681073|-3.5618602479083545|\n|2020-12-10T17:11:49.040+08:00|2508858212791964081|-0.6073417341629443| -0.7944406950452296| 0.7644897069734913|\n|2020-12-10T17:11:49.041+08:00|2817297431185141819|-0.8419358900502509| -0.5395775727782725| 1.5603611649667768|\n+-----------------------------+-------------------+-------------------+--------------------+-------------------+\nTotal line number = 5\nIt costs 0.008s\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])])])}),[],!1,null,null,null);s.default=v.exports}}]);