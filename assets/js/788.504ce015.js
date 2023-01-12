(window.webpackJsonp=window.webpackJsonp||[]).push([[788],{1190:function(t,e,s){"use strict";s.r(e);var a=s(19),r=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"ddl-数据定义语言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ddl-数据定义语言"}},[t._v("#")]),t._v(" DDL (数据定义语言)")]),t._v(" "),e("h2",{attrs:{id:"创建存储组"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建存储组"}},[t._v("#")]),t._v(" 创建存储组")]),t._v(" "),e("p",[t._v("我们可以根据存储模型建立相应的存储组。创建存储组的SQL语句如下所示：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("IoTDB > set storage group to root.ln\nIoTDB > set storage group to root.sgcc\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("根据以上两条SQL语句，我们可以创建出两个存储组。")]),t._v(" "),e("p",[t._v("需要注意的是，当系统中已经存在某个存储组或存储组的父亲节点或者孩子节点被设置为存储组的情况下，用户不可创建存储组。例如在已经有"),e("code",[t._v("root.ln")]),t._v("和"),e("code",[t._v("root.sgcc")]),t._v("这两个存储组的情况下，创建"),e("code",[t._v("root.ln.wf01")]),t._v("存储组是不可行的。系统将给出相应的错误提示，如下所示：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("IoTDB> set storage group to root.ln.wf01\nMsg: org.apache.iotdb.exception.MetadataErrorException: org.apache.iotdb.exception.PathErrorException: The prefix of root.ln.wf01 has been set to the storage group.\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("h2",{attrs:{id:"查看存储组"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看存储组"}},[t._v("#")]),t._v(" 查看存储组")]),t._v(" "),e("p",[t._v("在存储组创建后，我们可以使用"),e("RouterLink",{attrs:{to:"/zh/UserGuide/V0.10.x/Operation Manual/SQL Reference.html"}},[t._v("SHOW STORAGE GROUP")]),t._v("语句来查看所有的存储组，SQL语句如下所示：")],1),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("IoTDB> show storage group\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("执行结果为：\n"),e("center",[e("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51577338-84c70600-1ef4-11e9-9dab-605b32c02836.jpg"}})])],1),t._v(" "),e("h2",{attrs:{id:"创建时间序列"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建时间序列"}},[t._v("#")]),t._v(" 创建时间序列")]),t._v(" "),e("p",[t._v("根据建立的数据模型，我们可以分别在两个存储组中创建相应的时间序列。创建时间序列的SQL语句如下所示：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("IoTDB > create timeseries root.ln.wf01.wt01.status with datatype=BOOLEAN,encoding=PLAIN\nIoTDB > create timeseries root.ln.wf01.wt01.temperature with datatype=FLOAT,encoding=RLE\nIoTDB > create timeseries root.ln.wf02.wt02.hardware with datatype=TEXT,encoding=PLAIN\nIoTDB > create timeseries root.ln.wf02.wt02.status with datatype=BOOLEAN,encoding=PLAIN\nIoTDB > create timeseries root.sgcc.wf03.wt01.status with datatype=BOOLEAN,encoding=PLAIN\nIoTDB > create timeseries root.sgcc.wf03.wt01.temperature with datatype=FLOAT,encoding=RLE\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])]),e("p",[t._v("需要注意的是，当创建时间序列时指定的编码方式与数据类型不对应时，系统会给出相应的错误提示，如下所示：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("IoTDB> create timeseries root.ln.wf02.wt02.status WITH DATATYPE=BOOLEAN, ENCODING=TS_2DIFF\nerror: encoding TS_2DIFF does not support BOOLEAN\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("详细的数据类型与编码方式的对应列表请参见"),e("RouterLink",{attrs:{to:"/zh/UserGuide/V0.10.x/Concept/Encoding.html"}},[t._v("编码方式")]),t._v("。")],1),t._v(" "),e("h3",{attrs:{id:"标签点管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#标签点管理"}},[t._v("#")]),t._v(" 标签点管理")]),t._v(" "),e("p",[t._v("我们可以在创建时间序列的时候，为它添加别名和额外的标签和属性信息。\n所用到的扩展的创建时间序列的SQL语句如下所示：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("create timeseries root.turbine.d1.s1(temprature) with datatype=FLOAT, encoding=RLE, compression=SNAPPY tags(tag1=v1, tag2=v2) attributes(attr1=v1, attr2=v2)\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("括号里的"),e("code",[t._v("temprature")]),t._v("是"),e("code",[t._v("s1")]),t._v("这个传感器的别名。\n我们可以在任何用到"),e("code",[t._v("s1")]),t._v("的地方，将其用"),e("code",[t._v("temprature")]),t._v("代替，这两者是等价的。")]),t._v(" "),e("blockquote",[e("p",[t._v("注意：额外的标签和属性信息总的大小不能超过"),e("code",[t._v("tag_attribute_total_size")]),t._v(".")])]),t._v(" "),e("p",[t._v("标签和属性的唯一差别在于，我们为标签信息在内存中维护了一个倒排索引，所以可以在"),e("code",[t._v("show timeseries")]),t._v("的条件语句中使用标签作为查询条件，你将会在下一节看到具体查询内容。")]),t._v(" "),e("h2",{attrs:{id:"标签点属性更新"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#标签点属性更新"}},[t._v("#")]),t._v(" 标签点属性更新")]),t._v(" "),e("p",[t._v("创建时间序列后，我们也可以对其原有的标签点属性进行更新，主要有以下五种更新方式：")]),t._v(" "),e("ul",[e("li",[t._v("重命名标签或属性")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("ALTER timeseries root.turbine.d1.s1 RENAME tag1 TO newTag1\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("ul",[e("li",[t._v("重新设置标签或属性的值")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("ALTER timeseries root.turbine.d1.s1 SET tag1=newV1, attr1=newV1\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("ul",[e("li",[t._v("删除已经存在的标签或属性")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("ALTER timeseries root.turbine.d1.s1 DROP tag1, tag2\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("ul",[e("li",[t._v("添加新的标签")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("ALTER timeseries root.turbine.d1.s1 ADD TAGS tag3=v3, tag4=v4\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("ul",[e("li",[t._v("添加新的属性")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("ALTER timeseries root.turbine.d1.s1 ADD ATTRIBUTES attr3=v3, attr4=v4\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("ul",[e("li",[t._v("更新插入别名，标签和属性")])]),t._v(" "),e("blockquote",[e("p",[t._v("如果该别名，标签或属性原来不存在，则插入，否则，用新值更新原来的旧值")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("ALTER timeseries root.turbine.d1.s1 UPSERT ALIAS=newAlias TAGS(tag2=newV2, tag3=v3) ATTRIBUTES(attr3=v3, attr4=v4)\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h2",{attrs:{id:"查看时间序列"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看时间序列"}},[t._v("#")]),t._v(" 查看时间序列")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("SHOW TIMESERIES prefixPath? showWhereClause? limitClause?")]),t._v(" "),e("p",[t._v("SHOW TIMESERIES 后可以跟三种可选的子句，查询结果为这些时间序列的所有信息")])])]),t._v(" "),e("p",[t._v("时间序列信息具体包括：时间序列路径名，存储组，Measurement别名，数据类型，编码方式，压缩方式，属性和标签。")]),t._v(" "),e("p",[t._v("示例：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("SHOW TIMESERIES")]),t._v(" "),e("p",[t._v("展示系统中所有的时间序列信息")])]),t._v(" "),e("li",[e("p",[t._v("SHOW TIMESERIES <"),e("code",[t._v("Path")]),t._v(">")]),t._v(" "),e("p",[t._v("返回给定路径的下的所有时间序列信息。其中 "),e("code",[t._v("Path")]),t._v(" 需要为一个前缀路径、带星路径或时间序列路径。例如，分别查看"),e("code",[t._v("root")]),t._v("路径和"),e("code",[t._v("root.ln")]),t._v("路径下的时间序列，SQL语句如下所示：")])])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("IoTDB> show timeseries root\nIoTDB> show timeseries root.ln\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("执行结果分别为：")]),t._v(" "),e("center",[e("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51577347-8db7d780-1ef4-11e9-91d6-764e58c10e94.jpg"}})]),t._v(" "),e("center",[e("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51577359-97413f80-1ef4-11e9-8c10-53b291fc10a5.jpg"}})]),t._v(" "),e("ul",[e("li",[e("p",[t._v("SHOW TIMESERIES (<"),e("code",[t._v("PrefixPath")]),t._v(">)? WhereClause")]),t._v(" "),e("p",[t._v("返回给定路径的下的所有满足条件的时间序列信息，SQL语句如下所示：")])])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("show timeseries root.ln where unit=c\nshow timeseries root.ln where description contains 'test1'\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("执行结果分别为：\n"),e("center",[e("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/16079446/79682385-61544d80-8254-11ea-8c23-9e93e7152fda.png"}})])],1),t._v(" "),e("blockquote",[e("p",[t._v("注意，现在我们只支持一个查询条件，要么是等值条件查询，要么是包含条件查询。当然where子句中涉及的必须是标签值，而不能是属性值。")])]),t._v(" "),e("ul",[e("li",[e("p",[t._v("SHOW TIMESERIES LIMIT INT OFFSET INT")]),t._v(" "),e("p",[t._v("只返回从指定下标开始的结果，最大返回条数被 LIMIT 限制，用于分页查询")])])]),t._v(" "),e("p",[t._v("需要注意的是，当查询路径不存在时，系统会返回0条时间序列。")]),t._v(" "),e("h2",{attrs:{id:"查看子路径"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看子路径"}},[t._v("#")]),t._v(" 查看子路径")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("SHOW CHILD PATHS prefixPath\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("可以查看此前缀路径的下一层的所有路径，前缀路径允许使用 * 通配符。")]),t._v(" "),e("p",[t._v("示例：")]),t._v(" "),e("ul",[e("li",[t._v("查询 root.ln 的下一层：show child paths root.ln")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("+------------+\n| child paths|\n+------------+\n|root.ln.wf01|\n|root.ln.wf02|\n+------------+\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])]),e("ul",[e("li",[t._v("查询形如 root.xx.xx.xx 的路径：show child paths root.*.*")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("+---------------+\n|    child paths|\n+---------------+\n|root.ln.wf01.s1|\n|root.ln.wf02.s2|\n+---------------+\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])]),e("h2",{attrs:{id:"统计时间序列总数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#统计时间序列总数"}},[t._v("#")]),t._v(" 统计时间序列总数")]),t._v(" "),e("p",[t._v("IoTDB支持使用"),e("code",[t._v("COUNT TIMESERIES<Path>")]),t._v("来统计一条路径中的时间序列个数。SQL语句如下所示：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("IoTDB > COUNT TIMESERIES root\nIoTDB > COUNT TIMESERIES root.ln\nIoTDB > COUNT TIMESERIES root.ln.*.*.status\nIoTDB > COUNT TIMESERIES root.ln.wf01.wt01.status\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("p",[t._v("除此之外，还可以通过定义"),e("code",[t._v("LEVEL")]),t._v("来统计指定层级下的时间序列个数。这条语句可以用来统计每一个设备下的传感器数量，语法为："),e("code",[t._v("COUNT TIMESERIES <Path> GROUP BY LEVEL=<INTEGER>")]),t._v("。")]),t._v(" "),e("p",[t._v("例如有如下时间序列（可以使用"),e("code",[t._v("show timeseries")]),t._v("展示所有时间序列）：")]),t._v(" "),e("center",[e("img",{staticStyle:{width:"100%","max-width":"800px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/19167280/69792072-cdc8a480-1200-11ea-8cec-321fef618a12.png"}})]),t._v(" "),e("p",[t._v("那么Metadata Tree如下所示：")]),t._v(" "),e("center",[e("img",{staticStyle:{width:"100%","max-width":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/19167280/69792176-1718f400-1201-11ea-861a-1a83c07ca144.jpg"}})]),t._v(" "),e("p",[t._v("可以看到，"),e("code",[t._v("root")]),t._v("被定义为"),e("code",[t._v("LEVEL=0")]),t._v("。那么当你输入如下语句时：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("IoTDB > COUNT TIMESERIES root GROUP BY LEVEL=1\nIoTDB > COUNT TIMESERIES root.ln GROUP BY LEVEL=2\nIoTDB > COUNT TIMESERIES root.ln.wf01 GROUP BY LEVEL=2\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("p",[t._v("你将得到以下结果：\n"),e("center",[e("img",{staticStyle:{width:"100%","max-width":"800px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/19167280/69792071-cb664a80-1200-11ea-8386-02dd12046c4b.png"}})])],1),t._v(" "),e("blockquote",[e("p",[t._v("注意：时间序列的路径只是过滤条件，与level的定义无关。")])]),t._v(" "),e("h2",{attrs:{id:"统计节点数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#统计节点数"}},[t._v("#")]),t._v(" 统计节点数")]),t._v(" "),e("p",[t._v("IoTDB支持使用"),e("code",[t._v("COUNT NODES <Path> LEVEL=<INTEGER>")]),t._v("来统计当前Metadata树下指定层级的节点个数，这条语句可以用来统计设备数。例如：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("IoTDB > COUNT NODES root LEVEL=2\nIoTDB > COUNT NODES root.ln LEVEL=2\nIoTDB > COUNT NODES root.ln.wf01 LEVEL=3\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("p",[t._v("对于上面提到的例子和Metadata Tree，你可以获得如下结果：\n"),e("center",[e("img",{staticStyle:{width:"100%","max-width":"800px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/19167280/69792060-c73a2d00-1200-11ea-8ec4-be7145fd6c8c.png"}})])],1),t._v(" "),e("blockquote",[e("p",[t._v("注意：时间序列的路径只是过滤条件，与level的定义无关。")])]),t._v(" "),e("h2",{attrs:{id:"删除时间序列"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除时间序列"}},[t._v("#")]),t._v(" 删除时间序列")]),t._v(" "),e("p",[t._v("我们可以使用"),e("code",[t._v("DELETE TimeSeries <PrefixPath>")]),t._v("语句来删除我们之前创建的时间序列。SQL语句如下所示：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("IoTDB> delete timeseries root.ln.wf01.wt01.status\nIoTDB> delete timeseries root.ln.wf01.wt01.temperature, root.ln.wf02.wt02.hardware\nIoTDB> delete timeseries root.ln.wf02.*\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("h2",{attrs:{id:"查看设备"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看设备"}},[t._v("#")]),t._v(" 查看设备")]),t._v(" "),e("p",[t._v("与 "),e("code",[t._v("Show Timeseries")]),t._v(" 相似，IoTDB 目前也支持两种方式查看设备。")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("SHOW DEVICES")]),t._v(" 语句显示当前所有的设备信息，等价于 "),e("code",[t._v("SHOW DEVICES root")]),t._v("。")]),t._v(" "),e("li",[e("code",[t._v("SHOW DEVICES <PrefixPath>")]),t._v(" 语句规定了 "),e("code",[t._v("PrefixPath")]),t._v("，返回在给定的前缀路径下的设备信息。")])]),t._v(" "),e("p",[t._v("SQL语句如下所示：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("IoTDB> show devices\nIoTDB> show devices root.ln\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("h1",{attrs:{id:"ttl"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ttl"}},[t._v("#")]),t._v(" TTL")]),t._v(" "),e("p",[t._v("IoTDB支持对存储组级别设置数据存活时间（TTL），这使得IoTDB可以定期、自动地删除一定时间之前的数据。合理使用TTL\n可以帮助您控制IoTDB占用的总磁盘空间以避免出现磁盘写满等异常。并且，随着文件数量的增多，查询性能往往随之下降,\n内存占用也会有所提高。及时地删除一些较老的文件有助于使查询性能维持在一个较高的水平和减少内存资源的占用。")]),t._v(" "),e("h2",{attrs:{id:"设置-ttl"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置-ttl"}},[t._v("#")]),t._v(" 设置 TTL")]),t._v(" "),e("p",[t._v("设置TTL的SQL语句如下所示：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("IoTDB> set ttl to root.ln 3600000\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("这个例子表示在"),e("code",[t._v("root.ln")]),t._v("存储组中，只有最近一个小时的数据将会保存，旧数据会被移除或不可见。")]),t._v(" "),e("h2",{attrs:{id:"取消-ttl"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#取消-ttl"}},[t._v("#")]),t._v(" 取消 TTL")]),t._v(" "),e("p",[t._v("取消TTL的SQL语句如下所示：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("IoTDB> unset ttl to root.ln\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("取消设置TTL后，存储组"),e("code",[t._v("root.ln")]),t._v("中所有的数据都会被保存。")]),t._v(" "),e("h2",{attrs:{id:"flush"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flush"}},[t._v("#")]),t._v(" FLUSH")]),t._v(" "),e("p",[t._v("将指定存储组的内存缓存区Memory Table的数据持久化到磁盘上，并将数据文件封口。")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("IoTDB> FLUSH \nIoTDB> FLUSH root.ln\nIoTDB> FLUSH root.sg1,root.sg2\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("h2",{attrs:{id:"merge"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#merge"}},[t._v("#")]),t._v(" MERGE")]),t._v(" "),e("p",[t._v("合并顺序和乱序数据。当前IoTDB支持使用如下两种SQL手动触发数据文件的合并：")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("MERGE")]),t._v(" 仅重写重复的Chunk，整理速度快，但是最终磁盘会存在多余数据。")]),t._v(" "),e("li",[e("code",[t._v("FULL MERGE")]),t._v(" 将需要合并的顺序和乱序文件的所有数据都重新写一份，整理速度慢，最终磁盘将不存在无用的数据。")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("IoTDB> MERGE\nIoTDB> FULL MERGE\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("h2",{attrs:{id:"clear-cache"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#clear-cache"}},[t._v("#")]),t._v(" CLEAR CACHE")]),t._v(" "),e("p",[t._v("手动清除chunk, chunk metadata和timeseries metadata的缓存，在内存资源紧张时，可以通过此命令，释放查询时缓存所占的内存空间。")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("IoTDB> CLEAR CACHE\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])],1)}),[],!1,null,null,null);e.default=r.exports}}]);