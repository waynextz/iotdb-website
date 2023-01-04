(window.webpackJsonp=window.webpackJsonp||[]).push([[508],{911:function(e,t,s){"use strict";s.r(t);var a=s(19),n=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"ttl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ttl"}},[e._v("#")]),e._v(" TTL")]),e._v(" "),t("p",[e._v("IoTDB supports storage-level TTL settings, which means it is able to delete old data automatically and periodically. The benefit of using TTL is that hopefully you can control the total disk space usage and prevent the machine from running out of disks. Moreover, the query performance may downgrade as the total number of files goes up and the memory usage also increase as there are more files. Timely removing such files helps to keep at a high query performance level and reduce memory usage.")]),e._v(" "),t("p",[e._v("The default unit of TTL is milliseconds. If the time precision in the configuration file changes to another, the TTL is still set to milliseconds.")]),e._v(" "),t("h2",{attrs:{id:"set-ttl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set-ttl"}},[e._v("#")]),e._v(" Set TTL")]),e._v(" "),t("p",[e._v("The SQL Statement for setting TTL is as follow:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("IoTDB> set ttl to root.ln 3600000\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("This example means that for data in "),t("code",[e._v("root.ln")]),e._v(", only 3600000 ms, that is, the latest 1 hour will remain, the older one is removed or made invisible.")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("IoTDB> set ttl to root.sgcc.** 3600000\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("It supports setting TTL for databases in a path. This example represents setting TTL for all databases in the "),t("code",[e._v("root.sgcc")]),e._v(" path.")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("IoTDB> set ttl to root.** 3600000\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("This example represents setting TTL for all databases.")]),e._v(" "),t("h2",{attrs:{id:"unset-ttl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#unset-ttl"}},[e._v("#")]),e._v(" Unset TTL")]),e._v(" "),t("p",[e._v("To unset TTL, we can use follwing SQL statement:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("IoTDB> unset ttl to root.ln\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("After unset TTL, all data will be accepted in "),t("code",[e._v("root.ln")]),e._v(".")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("IoTDB> unset ttl to root.sgcc.**\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("Unset the TTL setting for all databases in the "),t("code",[e._v("root.sgcc")]),e._v(" path.")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("IoTDB> unset ttl to root.**\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("Unset the TTL setting for all databases.")]),e._v(" "),t("h2",{attrs:{id:"show-ttl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#show-ttl"}},[e._v("#")]),e._v(" Show TTL")]),e._v(" "),t("p",[e._v("To Show TTL, we can use following SQL statement:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("IoTDB> SHOW ALL TTL\nIoTDB> SHOW TTL ON StorageGroupNames\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("p",[e._v("The SHOW ALL TTL example gives the TTL for all databases.\nThe SHOW TTL ON root.ln,root.sgcc,root.DB example shows the TTL for the three storage\ngroups specified.\nNote: the TTL for databases that do not have a TTL set will display as null.")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("IoTDB> show all ttl\n+----------+-------+\n| database|ttl(ms)|\n+---------+-------+\n|  root.ln|3600000|\n|root.sgcc|   null|\n|  root.DB|3600000|\n+----------+-------+\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);