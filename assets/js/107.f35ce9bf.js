(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{715:function(s,t,a){"use strict";a.r(t);var n=a(82),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"syntax-conventions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax-conventions"}},[s._v("#")]),s._v(" Syntax Conventions")]),s._v(" "),a("h2",{attrs:{id:"double-quotes-backquotes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#double-quotes-backquotes"}},[s._v("#")]),s._v(' Double-quotes (") & Backquotes (`)')]),s._v(" "),a("p",[s._v("Strings quoted in double-quotes and backquotes are interpreted as identifiers (ID), and the quoted strings generally contain special characters. It should be noted that the quoted strings cannot contain "),a("code",[s._v(".")]),s._v(" characters.")]),s._v(" "),a("p",[s._v("The definition of identifier (ID) is:")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("ID\n    : NAME_CHAR"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\"'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\"'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\"\"'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\"'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'`'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'`'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'``'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'`'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nfragment NAME_CHAR\n    : "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'A'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Z'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'z'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'0'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'9'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'_'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("':'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'#'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'$'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'}'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" CN_CHAR\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nfragment CN_CHAR\n    : "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\u2E80'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\u9FFF'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("p",[s._v("Usages of identifiers:")]),s._v(" "),a("ul",[a("li",[s._v("The names of "),a("code",[s._v("TRIGGER")]),s._v(", "),a("code",[s._v("FUNCTION")]),s._v("(UDF), "),a("code",[s._v("CONTINUOUS QUERY")]),s._v(", "),a("code",[s._v("USER")]),s._v(", "),a("code",[s._v("ROLE")]),s._v(", etc.")]),s._v(" "),a("li",[s._v("In time series paths: In addition to the beginning level of the time series ("),a("code",[s._v("root")]),s._v(") and the storage group level, other levels also support strings quoted by  ` or "),a("code",[s._v('"')]),s._v(" as their names.")])]),s._v(" "),a("p",[s._v("Examples:")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FUNCTION")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"udfname:""actual-name"""')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'org.apache.iotdb.db.query.udf.example.Counter'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# "udfname:""actual-name""" will be parsed as udfname:"actual-name"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FUNCTION")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("udfname:actual"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'org.apache.iotdb.db.query.udf.example.Counter'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# `udfname:actual-name` will be parsed as udfname:actual-name")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" TIMESERIES root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("s1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("s2"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("s3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("c "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" DATATYPE"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("INT32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("ENCODING"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("RLE\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# root.a.b.`s1+s2/s3`.c will be parsed as root.a.b.s1+s2/s3.c")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"single-quotes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#single-quotes"}},[s._v("#")]),s._v(" Single-quotes (')")]),s._v(" "),a("p",[s._v("The literal value of a string can only be represented by a string quoted by "),a("code",[s._v("'")]),s._v(" characters.")]),s._v(" "),a("p",[s._v("The definition of string literal ("),a("code",[s._v("STRING_LITERAL")]),s._v(") is:")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("STRING_LITERAL\n    : "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\''")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\'\\''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\''")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("Usages of string literals:")]),s._v(" "),a("ul",[a("li",[s._v("Values of  "),a("code",[s._v("TEXT")]),s._v(" type data in "),a("code",[s._v("INSERT")]),s._v(" or "),a("code",[s._v("SELECT")]),s._v(" statements")]),s._v(" "),a("li",[s._v("Full Java class names in UDF and trigger management statements")]),s._v(" "),a("li",[s._v("Attribute fields (including attribute keys and attribute values) in UDF / trigger execution or management statements")]),s._v(" "),a("li",[s._v("File paths in "),a("code",[s._v("LOAD")]),s._v(" / "),a("code",[s._v("REMOVE")]),s._v(" / "),a("code",[s._v("SETTLE")]),s._v(" statements")]),s._v(" "),a("li",[s._v("Password fields in user management statements")])]),s._v(" "),a("p",[s._v("Examples:")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("my"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("udf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" s2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'key'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'value'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TRIGGER")]),s._v(" trigger_name BEFORE "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("s1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("s2"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("s3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("c "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'org.apache.iotdb.db.engine.trigger.example.Counter'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("my"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'my-pass''word'''")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# The password is my-pass'word'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"learn-more"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#learn-more"}},[s._v("#")]),s._v(" Learn More")]),s._v(" "),a("p",[s._v("Please read the lexical and grammar description files in our code repository:")]),s._v(" "),a("p",[s._v("Lexical file: "),a("code",[s._v("antlr/src/main/antlr4/org/apache/iotdb/db/qp/sql/IoTDBSqlLexer.g4")])]),s._v(" "),a("p",[s._v("Grammer file: "),a("code",[s._v("antlr/src/main/antlr4/org/apache/iotdb/db/qp/sql/IoTDBSqlParser.g4")])])])}),[],!1,null,null,null);t.default=e.exports}}]);