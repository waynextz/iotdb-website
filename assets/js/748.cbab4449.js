(window.webpackJsonp=window.webpackJsonp||[]).push([[748],{1149:function(s,t,a){"use strict";a.r(t);var n=a(19),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"标识符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#标识符"}},[s._v("#")]),s._v(" 标识符")]),s._v(" "),t("h2",{attrs:{id:"使用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用场景"}},[s._v("#")]),s._v(" 使用场景")]),s._v(" "),t("p",[s._v("在 IoTDB 中，触发器名称、UDF函数名、元数据模板名称、用户与角色名、连续查询标识、Pipe、PipeSink、键值对中的键和值、别名等可以作为标识符。")]),s._v(" "),t("h2",{attrs:{id:"约束"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#约束"}},[s._v("#")]),s._v(" 约束")]),s._v(" "),t("p",[s._v("请注意，此处约束是标识符的通用约束，具体标识符可能还附带其它约束条件，如用户名限制字符数大于等于4，更严格的约束请参考具体标识符相关的说明文档。")]),s._v(" "),t("p",[t("strong",[s._v("标识符命名有以下约束：")])]),s._v(" "),t("ul",[t("li",[t("p",[s._v("不使用反引号括起的标识符中，允许出现以下字符：")]),s._v(" "),t("ul",[t("li",[s._v("[ 0-9 a-z A-Z _ ] （字母，数字，下划线）")]),s._v(" "),t("li",[s._v("['\\u2E80'..'\\u9FFF'] （UNICODE 中文字符）")])])]),s._v(" "),t("li",[t("p",[s._v("标识符允许使用数字开头、不使用反引号括起的标识符不能全部为数字。")])]),s._v(" "),t("li",[t("p",[s._v("标识符是大小写敏感的。")])]),s._v(" "),t("li",[t("p",[s._v("标识符允许为关键字。")])])]),s._v(" "),t("p",[t("strong",[s._v("如果出现如下情况，标识符需要使用反引号进行引用：")])]),s._v(" "),t("ul",[t("li",[s._v("标识符包含不允许的特殊字符。")]),s._v(" "),t("li",[s._v("标识符为实数。")])]),s._v(" "),t("h2",{attrs:{id:"如何在反引号引起的标识符中使用引号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何在反引号引起的标识符中使用引号"}},[s._v("#")]),s._v(" 如何在反引号引起的标识符中使用引号")]),s._v(" "),t("p",[t("strong",[s._v("在反引号引起的标识符中可以直接使用单引号和双引号。")])]),s._v(" "),t("p",[t("strong",[s._v("在用反引号引用的标识符中，可以通过双写反引号的方式使用反引号，即 ` 可以表示为 ``")]),s._v("，示例如下：")]),s._v(" "),t("div",{staticClass:"language-SQL line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建模板 t1`t")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("schema")]),s._v(" template "),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("t1``t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("temperature "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FLOAT")]),s._v(" encoding"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("RLE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("status")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BOOLEAN")]),s._v(" encoding"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("PLAIN compression"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("SNAPPY"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建模板 t1't\"t")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("schema")]),s._v(" template "),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("t1't\"t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("temperature "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FLOAT")]),s._v(" encoding"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("RLE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("status")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BOOLEAN")]),s._v(" encoding"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("PLAIN compression"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("SNAPPY"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h2",{attrs:{id:"特殊情况示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#特殊情况示例"}},[s._v("#")]),s._v(" 特殊情况示例")]),s._v(" "),t("p",[s._v("需要使用反引号进行引用的部分情况示例：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("触发器名称出现上述特殊情况时需使用反引号引用：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建触发器 alert.`listener-sg1d1s1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TRIGGER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("alert.``listener-sg1d1s1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AFTER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s1\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'org.apache.iotdb.db.engine.trigger.example.AlertListener'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'lo'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'0'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hi'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'100.0'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("UDF 名称出现上述特殊情况时需使用反引号引用：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建名为 111 的 UDF，111 为实数，所以需要用反引号引用。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FUNCTION")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("111"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'org.apache.iotdb.udf.UDTFExample'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("元数据模板名称出现上述特殊情况时需使用反引号引用：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建名为 111 的元数据模板，111 为实数，需要用反引号引用。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("schema")]),s._v(" template "),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("111"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("temperature "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FLOAT")]),s._v(" encoding"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("RLE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("status")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BOOLEAN")]),s._v(" encoding"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("PLAIN compression"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("SNAPPY"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("用户名、角色名出现上述特殊情况时需使用反引号引用，同时无论是否使用反引号引用，用户名、角色名中均不允许出现空格，具体请参考权限管理章节中的说明。")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建用户 special`user.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("special``user."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'write_pwd'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建角色 111")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" ROLE "),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("111"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("连续查询标识出现上述特殊情况时需使用反引号引用：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建连续查询 test.cq")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" CONTINUOUS QUERY "),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("test.cq"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BEGIN")]),s._v(" \n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" max_value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("temperature"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" temperature_max \n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ln"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" \n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("END")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("Pipe、PipeSink 名称出现上述特殊情况时需使用反引号引用：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建 PipeSink test.*1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" PIPESINK "),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("test.*1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" IoTDB "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ip'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'输入你的IP'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建 Pipe test.*2")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" PIPE "),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("test.*2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("test.*1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v("yyyy"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("mm"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("dd HH:MM:SS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'SyncDelOp'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'true'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("Select 子句中可以结果集中的值指定别名，别名可以被定义为字符串或者标识符，示例如下：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" s1 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" temperature"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" s2 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" speed "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ln"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wf01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wt01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 表头如下所示")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-----------------------------+-----------+-----+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("                         "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Time")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("temperature"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("speed"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-----------------------------+-----------+-----+")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("用于表示键值对，键值对的键和值可以被定义成常量（包括字符串）或者标识符，具体请参考键值对章节。")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);