(window.webpackJsonp=window.webpackJsonp||[]).push([[1527],{1986:function(t,e,a){"use strict";a.r(e);var s=a(49),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"ddl-数据定义语言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ddl-数据定义语言"}},[t._v("#")]),t._v(" DDL (数据定义语言)")]),t._v(" "),a("h2",{attrs:{id:"创建存储组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建存储组"}},[t._v("#")]),t._v(" 创建存储组")]),t._v(" "),a("p",[t._v("我们可以根据存储模型建立相应的存储组。创建存储组的SQL语句如下所示：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("IoTDB > set storage group to root.ln\nIoTDB > set storage group to root.sgcc\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("根据以上两条SQL语句，我们可以创建出两个存储组。")]),t._v(" "),a("p",[t._v("需要注意的是，当系统中已经存在某个存储组或存储组的父亲节点或者孩子节点被设置为存储组的情况下，用户不可创建存储组。例如在已经有"),a("code",[t._v("root.ln")]),t._v("和"),a("code",[t._v("root.sgcc")]),t._v("这两个存储组的情况下，创建"),a("code",[t._v("root.ln.wf01")]),t._v("存储组是不可行的。系统将给出相应的错误提示，如下所示：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("IoTDB> set storage group to root.ln.wf01\nMsg: org.apache.iotdb.exception.MetadataErrorException: org.apache.iotdb.exception.PathErrorException: The prefix of root.ln.wf01 has been set to the storage group.\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h2",{attrs:{id:"查看存储组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看存储组"}},[t._v("#")]),t._v(" 查看存储组")]),t._v(" "),a("p",[t._v("在存储组创建后，我们可以使用"),a("RouterLink",{attrs:{to:"/zh/UserGuide/Master/Master/Master/Master/Master/Master/Master/Master/Master/5-Operation Manual/4-SQL Reference.html"}},[t._v("SHOW STORAGE GROUP")]),t._v("语句来查看所有的存储组，SQL语句如下所示：")],1),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("IoTDB> show storage group\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("执行结果为：\n"),a("center",[a("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51577338-84c70600-1ef4-11e9-9dab-605b32c02836.jpg"}})])],1),t._v(" "),a("h2",{attrs:{id:"创建时间序列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建时间序列"}},[t._v("#")]),t._v(" 创建时间序列")]),t._v(" "),a("p",[t._v("根据建立的数据模型，我们可以分别在两个存储组中创建相应的时间序列。创建时间序列的SQL语句如下所示：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("IoTDB > create timeseries root.ln.wf01.wt01.status with datatype=BOOLEAN,encoding=PLAIN\nIoTDB > create timeseries root.ln.wf01.wt01.temperature with datatype=FLOAT,encoding=RLE\nIoTDB > create timeseries root.ln.wf02.wt02.hardware with datatype=TEXT,encoding=PLAIN\nIoTDB > create timeseries root.ln.wf02.wt02.status with datatype=BOOLEAN,encoding=PLAIN\nIoTDB > create timeseries root.sgcc.wf03.wt01.status with datatype=BOOLEAN,encoding=PLAIN\nIoTDB > create timeseries root.sgcc.wf03.wt01.temperature with datatype=FLOAT,encoding=RLE\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("需要注意的是，当创建时间序列时指定的编码方式与数据类型不对应时，系统会给出相应的错误提示，如下所示：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("IoTDB> create timeseries root.ln.wf02.wt02.status WITH DATATYPE=BOOLEAN, ENCODING=TS_2DIFF\nerror: encoding TS_2DIFF does not support BOOLEAN\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("详细的数据类型与编码方式的对应列表请参见"),a("RouterLink",{attrs:{to:"/zh/UserGuide/Master/Master/Master/Master/Master/Master/Master/Master/Master/2-Concept/3-Encoding.html"}},[t._v("编码方式")]),t._v("。")],1),t._v(" "),a("h2",{attrs:{id:"查看时间序列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看时间序列"}},[t._v("#")]),t._v(" 查看时间序列")]),t._v(" "),a("p",[t._v("目前，IoTDB支持两种查看时间序列的方式：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("SHOW TIMESERIES语句以JSON形式展示系统中所有的时间序列信息")])]),t._v(" "),a("li",[a("p",[t._v("SHOW TIMESERIES <"),a("code",[t._v("Path")]),t._v(">语句以表格的形式返回给定路径的下的所有时间序列信息及时间序列总数。时间序列信息具体包括：时间序列路径名，数据类型，编码类型。其中，"),a("code",[t._v("Path")]),t._v("需要为一个前缀路径、带星路径或时间序列路径。例如，分别查看"),a("code",[t._v("root")]),t._v("路径和"),a("code",[t._v("root.ln")]),t._v("路径下的时间序列，SQL语句如下所示：")])])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("IoTDB> show timeseries root\nIoTDB> show timeseries root.ln\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("执行结果分别为：")]),t._v(" "),a("center",[a("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51577347-8db7d780-1ef4-11e9-91d6-764e58c10e94.jpg"}})]),t._v(" "),a("center",[a("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51577359-97413f80-1ef4-11e9-8c10-53b291fc10a5.jpg"}})]),t._v(" "),a("p",[t._v("需要注意的是，当查询路径不存在时，系统会返回0条时间序列。")]),t._v(" "),a("h2",{attrs:{id:"统计时间序列总数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#统计时间序列总数"}},[t._v("#")]),t._v(" 统计时间序列总数")]),t._v(" "),a("p",[t._v("IoTDB支持使用"),a("code",[t._v("COUNT TIMESERIES<Path>")]),t._v("来统计一条路径中的时间序列个数。SQL语句如下所示：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("IoTDB > COUNT TIMESERIES root\nIoTDB > COUNT TIMESERIES root.ln\nIoTDB > COUNT TIMESERIES root.ln.*.*.status\nIoTDB > COUNT TIMESERIES root.ln.wf01.wt01.status\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("除此之外，还可以通过定义"),a("code",[t._v("LEVEL")]),t._v("来统计指定层级下的时间序列个数。这条语句可以用来统计每一个设备下的传感器数量，语法为："),a("code",[t._v("COUNT TIMESERIES <Path> GROUP BY LEVEL=<INTEGER>")]),t._v("。")]),t._v(" "),a("p",[t._v("例如有如下时间序列（可以使用"),a("code",[t._v("show timeseries")]),t._v("展示所有时间序列）：")]),t._v(" "),a("center",[a("img",{staticStyle:{width:"100%","max-width":"800px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/19167280/69792072-cdc8a480-1200-11ea-8cec-321fef618a12.png"}})]),t._v(" "),a("p",[t._v("那么Metadata Tree如下所示：")]),t._v(" "),a("center",[a("img",{staticStyle:{width:"100%","max-width":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/19167280/69792176-1718f400-1201-11ea-861a-1a83c07ca144.jpg"}})]),t._v(" "),a("p",[t._v("可以看到，"),a("code",[t._v("root")]),t._v("被定义为"),a("code",[t._v("LEVEL=0")]),t._v("。那么当你输入如下语句时：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("IoTDB > COUNT TIMESERIES root GROUP BY LEVEL=1\nIoTDB > COUNT TIMESERIES root.ln GROUP BY LEVEL=2\nIoTDB > COUNT TIMESERIES root.ln.wf01 GROUP BY LEVEL=2\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("你将得到以下结果：\n"),a("center",[a("img",{staticStyle:{width:"100%","max-width":"800px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/19167280/69792071-cb664a80-1200-11ea-8386-02dd12046c4b.png"}})])],1),t._v(" "),a("blockquote",[a("p",[t._v("注意：时间序列的路径只是过滤条件，与level的定义无关。")])]),t._v(" "),a("h2",{attrs:{id:"统计节点数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#统计节点数"}},[t._v("#")]),t._v(" 统计节点数")]),t._v(" "),a("p",[t._v("IoTDB支持使用"),a("code",[t._v("COUNT NODES <Path> LEVEL=<INTEGER>")]),t._v("来统计当前Metadata树下指定层级的节点个数，这条语句可以用来统计设备数。例如：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("IoTDB > COUNT NODES root LEVEL=2\nIoTDB > COUNT NODES root.ln LEVEL=2\nIoTDB > COUNT NODES root.ln.wf01 LEVEL=3\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("对于上面提到的例子和Metadata Tree，你可以获得如下结果：\n"),a("center",[a("img",{staticStyle:{width:"100%","max-width":"800px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/19167280/69792060-c73a2d00-1200-11ea-8ec4-be7145fd6c8c.png"}})])],1),t._v(" "),a("blockquote",[a("p",[t._v("注意：时间序列的路径只是过滤条件，与level的定义无关。")])]),t._v(" "),a("h2",{attrs:{id:"删除时间序列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除时间序列"}},[t._v("#")]),t._v(" 删除时间序列")]),t._v(" "),a("p",[t._v("我们可以使用"),a("code",[t._v("DELETE TimeSeries <PrefixPath>")]),t._v("语句来删除我们之前创建的时间序列。SQL语句如下所示：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("IoTDB> delete timeseries root.ln.wf01.wt01.status\nIoTDB> delete timeseries root.ln.wf01.wt01.temperature, root.ln.wf02.wt02.hardware\nIoTDB> delete timeseries root.ln.wf02.*\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h2",{attrs:{id:"查看设备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看设备"}},[t._v("#")]),t._v(" 查看设备")]),t._v(" "),a("p",[t._v("与 "),a("code",[t._v("Show Timeseries")]),t._v(" 相似，IoTDB 目前也支持两种方式查看设备。")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("SHOW DEVICES")]),t._v(" 语句显示当前所有的设备信息，等价于 "),a("code",[t._v("SHOW DEVICES root")]),t._v("。")]),t._v(" "),a("li",[a("code",[t._v("SHOW DEVICES <PrefixPath>")]),t._v(" 语句规定了 "),a("code",[t._v("PrefixPath")]),t._v("，返回在给定的前缀路径下的设备信息。")])]),t._v(" "),a("p",[t._v("SQL语句如下所示：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("IoTDB> show devices\nIoTDB> show devices root.ln\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h1",{attrs:{id:"ttl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ttl"}},[t._v("#")]),t._v(" TTL")]),t._v(" "),a("p",[t._v("IoTDB支持对存储组级别设置数据存活时间（TTL），这使得IoTDB可以定期、自动地删除一定时间之前的数据。合理使用TTL\n可以帮助您控制IoTDB占用的总磁盘空间以避免出现磁盘写满等异常。并且，随着文件数量的增多，查询性能往往随之下降,\n内存占用也会有所提高。及时地删除一些较老的文件有助于使查询性能维持在一个较高的水平和减少内存资源的占用。")]),t._v(" "),a("h2",{attrs:{id:"设置-ttl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置-ttl"}},[t._v("#")]),t._v(" 设置 TTL")]),t._v(" "),a("p",[t._v("设置TTL的SQL语句如下所示：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("IoTDB> set ttl to root.ln 3600000\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("这个例子表示在"),a("code",[t._v("root.ln")]),t._v("存储组中，只有最近一个小时的数据将会保存，旧数据会被移除或不可见。")]),t._v(" "),a("h2",{attrs:{id:"取消-ttl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#取消-ttl"}},[t._v("#")]),t._v(" 取消 TTL")]),t._v(" "),a("p",[t._v("取消TTL的SQL语句如下所示：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("IoTDB> unset ttl to root.ln\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("取消设置TTL后，存储组"),a("code",[t._v("root.ln")]),t._v("中所有的数据都会被保存。")])],1)}),[],!1,null,null,null);e.default=r.exports}}]);