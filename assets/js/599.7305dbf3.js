(window.webpackJsonp=window.webpackJsonp||[]).push([[599],{1003:function(s,t,a){"use strict";a.r(t);var e=a(19),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"identifier"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#identifier"}},[s._v("#")]),s._v(" Identifier")]),s._v(" "),t("h2",{attrs:{id:"usage-scenarios"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-scenarios"}},[s._v("#")]),s._v(" Usage scenarios")]),s._v(" "),t("p",[s._v("Certain objects within IoTDB, including "),t("code",[s._v("TRIGGER")]),s._v(", "),t("code",[s._v("FUNCTION")]),s._v("(UDF), "),t("code",[s._v("CONTINUOUS QUERY")]),s._v(", "),t("code",[s._v("SCHEMA TEMPLATE")]),s._v(", "),t("code",[s._v("USER")]),s._v(", "),t("code",[s._v("ROLE")]),s._v(","),t("code",[s._v("Pipe")]),s._v(","),t("code",[s._v("PipeSink")]),s._v(","),t("code",[s._v("alias")]),s._v(" and other object names are known as identifiers.")]),s._v(" "),t("h2",{attrs:{id:"constraints"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#constraints"}},[s._v("#")]),s._v(" Constraints")]),s._v(" "),t("p",[s._v("Below are basic constraints of identifiers, specific identifiers may have other constraints, for example, "),t("code",[s._v("user")]),s._v(" should consists of more than 4 characters.")]),s._v(" "),t("ul",[t("li",[s._v("Permitted characters in unquoted identifiers:\n"),t("ul",[t("li",[s._v("[0-9 a-z A-Z _ ] (letters, digits and underscore)")]),s._v(" "),t("li",[s._v("['\\u2E80'..'\\u9FFF'] (UNICODE Chinese characters)")])])]),s._v(" "),t("li",[s._v("Identifiers may begin with a digit, unquoted identifiers can not be a real number.")]),s._v(" "),t("li",[s._v("Identifiers are case sensitive.")]),s._v(" "),t("li",[s._v("Key words can be used as an identifier.")])]),s._v(" "),t("p",[t("strong",[s._v("You need to quote the identifier with back quote(`) in the following cases:")])]),s._v(" "),t("ul",[t("li",[s._v("Identifier contains special characters.")]),s._v(" "),t("li",[s._v("Identifier that is a real number.")])]),s._v(" "),t("h2",{attrs:{id:"how-to-use-quotations-marks-in-quoted-identifiers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-quotations-marks-in-quoted-identifiers"}},[s._v("#")]),s._v(" How to use quotations marks in quoted identifiers")]),s._v(" "),t("p",[t("code",[s._v("'")]),s._v(" and "),t("code",[s._v('"')]),s._v(" can be used directly in quoted identifiers.")]),s._v(" "),t("p",[s._v("` may be written as `` in quoted  identifiers. See the example below:")]),s._v(" "),t("div",{staticClass:"language-SQL line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# create template t1't\"t")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("schema")]),s._v(" template "),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("t1't\"t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("temperature "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FLOAT")]),s._v(" encoding"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("RLE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("status")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BOOLEAN")]),s._v(" encoding"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("PLAIN compression"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("SNAPPY"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# create template t1`t")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("schema")]),s._v(" template "),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("t1``t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("temperature "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FLOAT")]),s._v(" encoding"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("RLE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("status")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BOOLEAN")]),s._v(" encoding"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("PLAIN compression"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("SNAPPY"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h2",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[s._v("#")]),s._v(" Examples")]),s._v(" "),t("p",[s._v("Examples of case in which quoted identifier is used ：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("Trigger name should be quoted in cases described above ：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# create trigger named alert.`listener-sg1d1s1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TRIGGER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("alert.``listener-sg1d1s1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AFTER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s1\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'org.apache.iotdb.db.engine.trigger.example.AlertListener'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'lo'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'0'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hi'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'100.0'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("UDF name should be quoted in cases described above ：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# create a funciton named 111, 111 is a real number.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FUNCTION")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("111"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'org.apache.iotdb.udf.UDTFExample'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("Template name should be quoted in cases described above ：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# create a template named 111, 111 is a real number.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("schema")]),s._v(" template "),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("111"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("temperature "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FLOAT")]),s._v(" encoding"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("RLE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("status")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BOOLEAN")]),s._v(" encoding"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("PLAIN compression"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("SNAPPY"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("User and Role name should be quoted in cases described above, blank space is not allow in User and Role name whether quoted or not ：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# create user special`user.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("special``user."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'write_pwd'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# create role 111")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" ROLE "),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("111"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("Continuous query name should be quoted in cases described above ：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# create continuous query test.cq")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" CONTINUOUS QUERY "),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("test.cq"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BEGIN")]),s._v(" \n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" max_value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("temperature"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" temperature_max \n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ln"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" \n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("END")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("Pipe、PipeSink should be quoted in cases described above ：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# create PipeSink test.*1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" PIPESINK "),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("test.*1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" IoTDB "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ip'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'输入你的IP'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# create Pipe test.*2")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" PIPE "),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("test.*2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("test.*1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v("yyyy"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("mm"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("dd HH:MM:SS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'SyncDelOp'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'true'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])])]),s._v(" "),t("li",[t("p",[t("code",[s._v("AS")]),s._v(" function provided by IoTDB can assign an alias to time series selected in query. Alias can be constant(including string) or identifier.")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" s1 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" temperature"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" s2 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" speed "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ln"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wf01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wt01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Header of result dataset")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-----------------------------+-----------|-----+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("                         "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Time")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("temperature"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("speed"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-----------------------------+-----------|-----+")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("The key/value of an attribute can be String Literal and identifier, more details can be found at "),t("strong",[s._v("key-value pair")]),s._v(" part.")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);