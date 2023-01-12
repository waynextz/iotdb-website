(window.webpackJsonp=window.webpackJsonp||[]).push([[846],{1247:function(e,t,s){"use strict";s.r(t);var v=s(19),_=Object(v.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"加载外部tsfile文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#加载外部tsfile文件"}},[e._v("#")]),e._v(" 加载外部tsfile文件")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#%E7%AC%AC6%E7%AB%A0-%E7%B3%BB%E7%BB%9F%E5%B7%A5%E5%85%B7"}},[e._v("第6章: 系统工具")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#%E5%8A%A0%E8%BD%BD%E5%A4%96%E9%83%A8tsfile%E6%96%87%E4%BB%B6"}},[e._v("加载外部tsfile文件")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#%E4%BB%8B%E7%BB%8D"}},[e._v("介绍")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#%E4%BD%BF%E7%94%A8%E6%96%B9%E5%BC%8F"}},[e._v("使用方式")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#%E5%8A%A0%E8%BD%BDtsfile%E6%96%87%E4%BB%B6"}},[e._v("加载tsfile文件")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#%E5%88%A0%E9%99%A4tsfile%E6%96%87%E4%BB%B6"}},[e._v("删除tsfile文件")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#%E7%A7%BB%E5%87%BAtsfile%E6%96%87%E4%BB%B6%E8%87%B3%E6%8C%87%E5%AE%9A%E7%9B%AE%E5%BD%95"}},[e._v("移出tsfile文件至指定目录")])])])])]),e._v(" "),t("h1",{attrs:{id:"介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[e._v("#")]),e._v(" 介绍")]),e._v(" "),t("p",[e._v("加载外部tsfile文件工具允许用户向正在运行中的Apache IoTDB中加载、删除或移出tsfile文件。")]),e._v(" "),t("h1",{attrs:{id:"使用方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用方式"}},[e._v("#")]),e._v(" 使用方式")]),e._v(" "),t("p",[e._v("用户通过Cli工具或JDBC向Apache IoTDB系统发送指定命令实现文件加载的功能。")]),e._v(" "),t("h2",{attrs:{id:"加载tsfile文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#加载tsfile文件"}},[e._v("#")]),e._v(" 加载tsfile文件")]),e._v(" "),t("p",[e._v("加载tsfile文件的指令为："),t("code",[e._v('load "<path/dir>" [true/false] [storage group level]')])]),e._v(" "),t("p",[e._v("该指令有两种用法：")]),e._v(" "),t("ol",[t("li",[e._v("通过指定文件路径(绝对路径)加载单tsfile文件。")])]),e._v(" "),t("p",[e._v("第二个参数表示待加载的tsfile文件的路径，其中文件名称需要符合tsfile的命名规范，即"),t("code",[e._v("{systemTime}-{versionNum}-{mergeNum}.tsfile")]),e._v("。第三、四个参数为可选项。当待加载的tsfile文件中时间序列对应的元数据不存在时，用户可以选择是否自动创建schema，参数为true表示自动创建schema，相反false表示不创建，缺省时默认创建schema。当tsfile对应的存储组不存在时，用户可以通过第四个参数来制定存储组的级别，默认为"),t("code",[e._v("iotdb-engine.properties")]),e._v("中设置的级别。若待加载的tsfile文件对应的"),t("code",[e._v(".resource")]),e._v("文件存在，会被一并加载至Apache IoTDB数据文件的目录和引擎中，否则将通过tsfile文件重新生成对应的"),t("code",[e._v(".resource")]),e._v("文件，即加载的tsfile文件所对应的"),t("code",[e._v(".resource")]),e._v("文件不是必要的。")]),e._v(" "),t("p",[e._v("示例：")]),e._v(" "),t("ul",[t("li",[e._v("load "),t("code",[e._v('"/Users/Desktop/data/1575028885956-101-0.tsfile"')])]),e._v(" "),t("li",[e._v("load "),t("code",[e._v('"/Users/Desktop/data/1575028885956-101-0.tsfile" false')])]),e._v(" "),t("li",[e._v("load "),t("code",[e._v('"/Users/Desktop/data/1575028885956-101-0.tsfile" true')])]),e._v(" "),t("li",[e._v("load "),t("code",[e._v('"/Users/Desktop/data/1575028885956-101-0.tsfile" true 1')])])]),e._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[e._v("通过指定文件夹路径(绝对路径)批量加载文件。")])]),e._v(" "),t("p",[e._v("第二个参数表示待加载的tsfile文件的路径，其中文件名称需要符合tsfile的命名规范，即"),t("code",[e._v("{systemTime}-{versionNum}-{mergeNum}.tsfile")]),e._v("。第三、四个参数为可选项。当待加载的tsfile文件中时间序列对应的元数据不存在时，用户可以选择是否自动创建schema，参数为true表示自动创建schema，相反false表示不创建，缺省时默认创建schema。当tsfile对应的存储组不存在时，用户可以通过第四个参数来制定存储组的级别，默认为"),t("code",[e._v("iotdb-engine.properties")]),e._v("中设置的级别。若待加载文件对应的"),t("code",[e._v(".resource")]),e._v("文件存在，则会一并加载至Apache IoTDB数据文件目录和引擎中，否则将通过tsfile文件重新生成对应的"),t("code",[e._v(".resource")]),e._v("文件，即加载的tsfile文件所对应的"),t("code",[e._v(".resource")]),e._v("文件不是必要的。")]),e._v(" "),t("p",[e._v("示例：")]),e._v(" "),t("ul",[t("li",[e._v("load "),t("code",[e._v('"/Users/Desktop/data"')])]),e._v(" "),t("li",[e._v("load "),t("code",[e._v('"/Users/Desktop/data" false')])]),e._v(" "),t("li",[e._v("load "),t("code",[e._v('"/Users/Desktop/data" true')])]),e._v(" "),t("li",[e._v("load "),t("code",[e._v('"/Users/Desktop/data" true 1')])])]),e._v(" "),t("h2",{attrs:{id:"删除tsfile文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除tsfile文件"}},[e._v("#")]),e._v(" 删除tsfile文件")]),e._v(" "),t("p",[e._v("删除tsfile文件的指令为："),t("code",[e._v('remove "<path>"')])]),e._v(" "),t("p",[e._v("该指令通过指定文件路径删除tsfile文件，具体做法是将该tsfile和其对应的"),t("code",[e._v(".resource")]),e._v("和"),t("code",[e._v(".modification")]),e._v("文件全部删除。")]),e._v(" "),t("p",[e._v("示例：")]),e._v(" "),t("ul",[t("li",[t("code",[e._v('remove "root.vehicle/1575028885956-101-0.tsfile"')])]),e._v(" "),t("li",[t("code",[e._v('remove "1575028885956-101-0.tsfile"')])])]),e._v(" "),t("h2",{attrs:{id:"移出tsfile文件至指定目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#移出tsfile文件至指定目录"}},[e._v("#")]),e._v(" 移出tsfile文件至指定目录")]),e._v(" "),t("p",[e._v("移出tsfile文件的指令为："),t("code",[e._v('remove "<path>" "<dir>"')])]),e._v(" "),t("p",[e._v("该指令将指定路径的tsfile文件移动至目标文件夹(绝对路径)中，具体做法是在引擎中移除该tsfile，并将该tsfile文件和其对应的"),t("code",[e._v(".resource")]),e._v("文件移动到目标文件夹下")]),e._v(" "),t("p",[e._v("示例：")]),e._v(" "),t("ul",[t("li",[t("code",[e._v('move "root.vehicle/1575029224130-101-0.tsfile" "/data/data/tmp"')])]),e._v(" "),t("li",[t("code",[e._v('move "1575029224130-101-0.tsfile" "/data/data/tmp"')])])])])}),[],!1,null,null,null);t.default=_.exports}}]);