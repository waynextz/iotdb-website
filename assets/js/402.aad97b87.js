(window.webpackJsonp=window.webpackJsonp||[]).push([[402],{804:function(s,e,t){"use strict";t.r(e);var a=t(19),n=Object(a.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"string-processing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#string-processing"}},[s._v("#")]),s._v(" String Processing")]),s._v(" "),e("h2",{attrs:{id:"regexmatch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#regexmatch"}},[s._v("#")]),s._v(" RegexMatch")]),s._v(" "),e("h3",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[s._v("#")]),s._v(" Usage")]),s._v(" "),e("p",[s._v("The function is used to fetch matched contents from text with given regular expression.")]),s._v(" "),e("p",[e("strong",[s._v("Name:")]),s._v(" REGEXMATCH")]),s._v(" "),e("p",[e("strong",[s._v("Input Series:")]),s._v(" Only support a single input series. The data type is TEXT.")]),s._v(" "),e("p",[e("strong",[s._v("Parameter:")])]),s._v(" "),e("ul",[e("li",[e("code",[s._v("regex")]),s._v(": The regular expression to match in the text. All grammars supported by Java are acceptable,\nfor example, "),e("code",[s._v("\\d+\\.\\d+\\.\\d+\\.\\d+")]),s._v(" is expected to match any IPv4 addresses.")]),s._v(" "),e("li",[e("code",[s._v("group")]),s._v(": The wanted group index in the matched result.\nReference to java.util.regex, group 0 is the whole pattern and\nthe next ones are numbered with the appearance order of left parentheses.\nFor example, the groups in "),e("code",[s._v("A(B(CD))")]),s._v(" are: 0-"),e("code",[s._v("A(B(CD))")]),s._v(", 1-"),e("code",[s._v("B(CD)")]),s._v(", 2-"),e("code",[s._v("CD")]),s._v(".")])]),s._v(" "),e("p",[e("strong",[s._v("Output Series:")]),s._v(" Output a single series. The type is TEXT.")]),s._v(" "),e("p",[e("strong",[s._v("Note:")]),s._v(" Those points with null values or not matched with the given pattern will not return any results.")]),s._v(" "),e("h3",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[s._v("#")]),s._v(" Examples")]),s._v(" "),e("p",[s._v("Input series:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("+-----------------------------+-------------------------------+\n|                         Time|                root.test.d1.s1|\n+-----------------------------+-------------------------------+\n|2021-01-01T00:00:01.000+08:00|        [192.168.0.1] [SUCCESS]|\n|2021-01-01T00:00:02.000+08:00|       [192.168.0.24] [SUCCESS]|\n|2021-01-01T00:00:03.000+08:00|           [192.168.0.2] [FAIL]|\n|2021-01-01T00:00:04.000+08:00|        [192.168.0.5] [SUCCESS]|\n|2021-01-01T00:00:05.000+08:00|      [192.168.0.124] [SUCCESS]|\n+-----------------------------+-------------------------------+\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("p",[s._v("SQL for query:")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" regexmatch"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"regex"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\\d+\\.\\d+\\.\\d+\\.\\d+"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"group"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("test"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("Output series:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('+-----------------------------+----------------------------------------------------------------------+\n|                         Time|regexmatch(root.test.d1.s1, "regex"="\\d+\\.\\d+\\.\\d+\\.\\d+", "group"="0")|\n+-----------------------------+----------------------------------------------------------------------+\n|2021-01-01T00:00:01.000+08:00|                                                           192.168.0.1|\n|2021-01-01T00:00:02.000+08:00|                                                          192.168.0.24|\n|2021-01-01T00:00:03.000+08:00|                                                           192.168.0.2|\n|2021-01-01T00:00:04.000+08:00|                                                           192.168.0.5|\n|2021-01-01T00:00:05.000+08:00|                                                         192.168.0.124|\n+-----------------------------+----------------------------------------------------------------------+\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("h2",{attrs:{id:"regexreplace"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#regexreplace"}},[s._v("#")]),s._v(" RegexReplace")]),s._v(" "),e("h3",{attrs:{id:"usage-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage-2"}},[s._v("#")]),s._v(" Usage")]),s._v(" "),e("p",[s._v("The function is used to replace the specific regular expression matches with given string.")]),s._v(" "),e("p",[e("strong",[s._v("Name:")]),s._v(" REGEXREPLACE")]),s._v(" "),e("p",[e("strong",[s._v("Input Series:")]),s._v(" Only support a single input series. The data type is TEXT.")]),s._v(" "),e("p",[e("strong",[s._v("Parameter:")])]),s._v(" "),e("ul",[e("li",[e("code",[s._v("regex")]),s._v(": The target regular expression to be replaced. All grammars supported by Java are acceptable.")]),s._v(" "),e("li",[e("code",[s._v("replace")]),s._v(": The string to be put on and back reference notes in Java is also supported,\nfor example, '$1' refers to group 1 in the "),e("code",[s._v("regex")]),s._v(" which will be filled with corresponding matched results.")]),s._v(" "),e("li",[e("code",[s._v("limit")]),s._v(": The number of matches to be replaced which should be an integer no less than -1,\ndefault to -1 which means all matches will be replaced.")]),s._v(" "),e("li",[e("code",[s._v("offset")]),s._v(": The number of matches to be skipped, which means the first "),e("code",[s._v("offset")]),s._v(" matches will not be replaced, default to 0.")]),s._v(" "),e("li",[e("code",[s._v("reverse")]),s._v(": Whether to count all the matches reversely, default to 'false'.")])]),s._v(" "),e("p",[e("strong",[s._v("Output Series:")]),s._v(" Output a single series. The type is TEXT.")]),s._v(" "),e("h3",{attrs:{id:"examples-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples-2"}},[s._v("#")]),s._v(" Examples")]),s._v(" "),e("p",[s._v("Input series:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("+-----------------------------+-------------------------------+\n|                         Time|                root.test.d1.s1|\n+-----------------------------+-------------------------------+\n|2021-01-01T00:00:01.000+08:00|        [192.168.0.1] [SUCCESS]|\n|2021-01-01T00:00:02.000+08:00|       [192.168.0.24] [SUCCESS]|\n|2021-01-01T00:00:03.000+08:00|           [192.168.0.2] [FAIL]|\n|2021-01-01T00:00:04.000+08:00|        [192.168.0.5] [SUCCESS]|\n|2021-01-01T00:00:05.000+08:00|      [192.168.0.124] [SUCCESS]|\n+-----------------------------+-------------------------------+\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("p",[s._v("SQL for query:")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" regexreplace"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"regex"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"192\\.168\\.0\\.(\\d+)"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"replace"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cluster-$1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"limit"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("test"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("Output series:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('+-----------------------------+-----------------------------------------------------------+\n|                         Time|regexreplace(root.test.d1.s1, "regex"="192\\.168\\.0\\.(\\d+)",|\n|                             |                       "replace"="cluster-$1", "limit"="1")|\n+-----------------------------+-----------------------------------------------------------+\n|2021-01-01T00:00:01.000+08:00|                                      [cluster-1] [SUCCESS]|\n|2021-01-01T00:00:02.000+08:00|                                     [cluster-24] [SUCCESS]|\n|2021-01-01T00:00:03.000+08:00|                                         [cluster-2] [FAIL]|\n|2021-01-01T00:00:04.000+08:00|                                      [cluster-5] [SUCCESS]|\n|2021-01-01T00:00:05.000+08:00|                                    [cluster-124] [SUCCESS]|\n+-----------------------------+-----------------------------------------------------------+\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("h2",{attrs:{id:"regexsplit"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#regexsplit"}},[s._v("#")]),s._v(" RegexSplit")]),s._v(" "),e("h3",{attrs:{id:"usage-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage-3"}},[s._v("#")]),s._v(" Usage")]),s._v(" "),e("p",[s._v("The function is used to split text with given regular expression and return specific element.")]),s._v(" "),e("p",[e("strong",[s._v("Name:")]),s._v(" REGEXSPLIT")]),s._v(" "),e("p",[e("strong",[s._v("Input Series:")]),s._v(" Only support a single input series. The data type is TEXT.")]),s._v(" "),e("p",[e("strong",[s._v("Parameter:")])]),s._v(" "),e("ul",[e("li",[e("code",[s._v("regex")]),s._v(": The regular expression used to split the text.\nAll grammars supported by Java are acceptable, for example, "),e("code",[s._v("['\"]")]),s._v(" is expected to match "),e("code",[s._v("'")]),s._v(" and "),e("code",[s._v('"')]),s._v(".")]),s._v(" "),e("li",[e("code",[s._v("index")]),s._v(": The wanted index of elements in the split result.\nIt should be an integer no less than -1, default to -1 which means the length of the result array is returned\nand any non-negative integer is used to fetch the text of the specific index starting from 0.")])]),s._v(" "),e("p",[e("strong",[s._v("Output Series:")]),s._v(" Output a single series. The type is INT32 when "),e("code",[s._v("index")]),s._v(" is -1 and TEXT when it's an valid index.")]),s._v(" "),e("p",[e("strong",[s._v("Note:")]),s._v(" When "),e("code",[s._v("index")]),s._v(" is out of the range of the result array, for example "),e("code",[s._v("0,1,2")]),s._v(" split with "),e("code",[s._v(",")]),s._v(" and "),e("code",[s._v("index")]),s._v(" is set to 3,\nno result are returned for that record.")]),s._v(" "),e("h3",{attrs:{id:"examples-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples-3"}},[s._v("#")]),s._v(" Examples")]),s._v(" "),e("p",[s._v("Input series:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("+-----------------------------+---------------+\n|                         Time|root.test.d1.s1|\n+-----------------------------+---------------+\n|2021-01-01T00:00:01.000+08:00|      A,B,A+,B-|\n|2021-01-01T00:00:02.000+08:00|      A,A+,A,B+|\n|2021-01-01T00:00:03.000+08:00|         B+,B,B|\n|2021-01-01T00:00:04.000+08:00|      A+,A,A+,A|\n|2021-01-01T00:00:05.000+08:00|       A,B-,B,B|\n+-----------------------------+---------------+\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("p",[s._v("SQL for query:")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" regexsplit"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"regex"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('","')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"index"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("test"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("Output series:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('+-----------------------------+------------------------------------------------------+\n|                         Time|regexsplit(root.test.d1.s1, "regex"=",", "index"="-1")|\n+-----------------------------+------------------------------------------------------+\n|2021-01-01T00:00:01.000+08:00|                                                     4|\n|2021-01-01T00:00:02.000+08:00|                                                     4|\n|2021-01-01T00:00:03.000+08:00|                                                     3|\n|2021-01-01T00:00:04.000+08:00|                                                     4|\n|2021-01-01T00:00:05.000+08:00|                                                     4|\n+-----------------------------+------------------------------------------------------+\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("p",[s._v("Another SQL for query:")]),s._v(" "),e("p",[s._v("SQL for query:")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" regexsplit"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"regex"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('","')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"index"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("test"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("Output series:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('+-----------------------------+-----------------------------------------------------+\n|                         Time|regexsplit(root.test.d1.s1, "regex"=",", "index"="3")|\n+-----------------------------+-----------------------------------------------------+\n|2021-01-01T00:00:01.000+08:00|                                                   B-|\n|2021-01-01T00:00:02.000+08:00|                                                   B+|\n|2021-01-01T00:00:04.000+08:00|                                                    A|\n|2021-01-01T00:00:05.000+08:00|                                                    B|\n+-----------------------------+-----------------------------------------------------+\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("h2",{attrs:{id:"strreplace"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#strreplace"}},[s._v("#")]),s._v(" StrReplace")]),s._v(" "),e("h3",{attrs:{id:"usage-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage-4"}},[s._v("#")]),s._v(" Usage")]),s._v(" "),e("p",[s._v("The function is used to replace the specific substring with given string.")]),s._v(" "),e("p",[e("strong",[s._v("Name:")]),s._v(" STRREPLACE")]),s._v(" "),e("p",[e("strong",[s._v("Input Series:")]),s._v(" Only support a single input series. The data type is TEXT.")]),s._v(" "),e("p",[e("strong",[s._v("Parameter:")])]),s._v(" "),e("ul",[e("li",[e("code",[s._v("target")]),s._v(": The target substring to be replaced.")]),s._v(" "),e("li",[e("code",[s._v("replace")]),s._v(": The string to be put on.")]),s._v(" "),e("li",[e("code",[s._v("limit")]),s._v(": The number of matches to be replaced which should be an integer no less than -1,\ndefault to -1 which means all matches will be replaced.")]),s._v(" "),e("li",[e("code",[s._v("offset")]),s._v(": The number of matches to be skipped, which means the first "),e("code",[s._v("offset")]),s._v(" matches will not be replaced, default to 0.")]),s._v(" "),e("li",[e("code",[s._v("reverse")]),s._v(": Whether to count all the matches reversely, default to 'false'.")])]),s._v(" "),e("p",[e("strong",[s._v("Output Series:")]),s._v(" Output a single series. The type is TEXT.")]),s._v(" "),e("h3",{attrs:{id:"examples-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples-4"}},[s._v("#")]),s._v(" Examples")]),s._v(" "),e("p",[s._v("Input series:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("+-----------------------------+---------------+\n|                         Time|root.test.d1.s1|\n+-----------------------------+---------------+\n|2021-01-01T00:00:01.000+08:00|      A,B,A+,B-|\n|2021-01-01T00:00:02.000+08:00|      A,A+,A,B+|\n|2021-01-01T00:00:03.000+08:00|         B+,B,B|\n|2021-01-01T00:00:04.000+08:00|      A+,A,A+,A|\n|2021-01-01T00:00:05.000+08:00|       A,B-,B,B|\n+-----------------------------+---------------+\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("p",[s._v("SQL for query:")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" strreplace"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"target"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('","')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"replace"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"limit"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("test"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("Output series:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('+-----------------------------+-----------------------------------------+\n|                         Time|strreplace(root.test.d1.s1, "target"=",",|\n|                             |              "replace"="/", "limit"="2")|\n+-----------------------------+-----------------------------------------+\n|2021-01-01T00:00:01.000+08:00|                                A/B/A+,B-|\n|2021-01-01T00:00:02.000+08:00|                                A/A+/A,B+|\n|2021-01-01T00:00:03.000+08:00|                                   B+/B/B|\n|2021-01-01T00:00:04.000+08:00|                                A+/A/A+,A|\n|2021-01-01T00:00:05.000+08:00|                                 A/B-/B,B|\n+-----------------------------+-----------------------------------------+\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("p",[s._v("Another SQL for query:")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" strreplace"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"target"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('","')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"replace"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"limit"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"offset"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"reverse"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"true"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("test"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("Output series:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('+-----------------------------+-----------------------------------------------------+\n|                         Time|strreplace(root.test.d1.s1, "target"=",", "replace"= | \n|                             |    "|", "limit"="1", "offset"="1", "reverse"="true")|\n+-----------------------------+-----------------------------------------------------+\n|2021-01-01T00:00:01.000+08:00|                                            A,B/A+,B-|\n|2021-01-01T00:00:02.000+08:00|                                            A,A+/A,B+|\n|2021-01-01T00:00:03.000+08:00|                                               B+/B,B|\n|2021-01-01T00:00:04.000+08:00|                                            A+,A/A+,A|\n|2021-01-01T00:00:05.000+08:00|                                             A,B-/B,B|\n+-----------------------------+-----------------------------------------------------+\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);