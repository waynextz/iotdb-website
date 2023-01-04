(window.webpackJsonp=window.webpackJsonp||[]).push([[882],{1287:function(s,e,a){"use strict";a.r(e);var t=a(19),n=Object(t.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"常见问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[s._v("#")]),s._v(" 常见问题")]),s._v(" "),e("p",[e("strong",[s._v("如何查询我的 IoTDB 版本")])]),s._v(" "),e("p",[s._v("有几种方法可以识别您使用的 IoTDB 版本:")]),s._v(" "),e("ul",[e("li",[s._v("启动 IoTDB 的命令行界面:")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("> ./start-cli.sh -p 6667 -pw root -u root -h localhost\n _____       _________  ______   ______    \n|_   _|     |  _   _  ||_   _ `.|_   _ \\   \n  | |   .--.|_/ | | \\_|  | | `. \\ | |_) |  \n  | | / .'`\\ \\  | |      | |  | | |  __'.  \n _| |_| \\__. | _| |_    _| |_.' /_| |__) | \n|_____|'.__.' |_____|  |______.'|_______/  version x.x.x\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("ul",[e("li",[s._v("检查 pom.xml 文件:")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("<version>x.x.x</version>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("使用 JDBC API:")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("String iotdbVersion = tsfileDatabaseMetadata.getDatabaseProductVersion();\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("使用命令行接口:")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("IoTDB> show version\nshow version\n+---------------+\n|version        |\n+---------------+\n|x.x.x          |\n+---------------+\nTotal line number = 1\nIt costs 0.241s\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("p",[e("strong",[s._v("在哪里可以找到 IoTDB 的日志")])]),s._v(" "),e("p",[s._v("假设您的根目录是:")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),s._v("\n/workspace/iotdb\n\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v("\nserver/\ncli/\npom.xml\nReadme.md\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("p",[s._v("假如 "),e("code",[s._v("$IOTDB_HOME = /workspace/iotdb/server/target/iotdb-server-{project.version}")])]),s._v(" "),e("p",[s._v("假如 "),e("code",[s._v("$IOTDB_CLI_HOME = /workspace/iotdb/cli/target/iotdb-cli-{project.version}")])]),s._v(" "),e("p",[s._v("在默认的设置里，logs 文件夹会被存储在"),e("code",[s._v("IOTDB_HOME/logs")]),s._v("。您可以在"),e("code",[s._v("IOTDB_HOME/conf")]),s._v("目录下的"),e("code",[s._v("logback.xml")]),s._v("文件中修改日志的级别和日志的存储路径。")]),s._v(" "),e("p",[e("strong",[s._v("在哪里可以找到 IoTDB 的数据文件")])]),s._v(" "),e("p",[s._v("在默认的设置里，数据文件（包含 TsFile，metadata，WAL）被存储在"),e("code",[s._v("IOTDB_HOME/data")]),s._v("文件夹。")]),s._v(" "),e("p",[e("strong",[s._v("如何知道 IoTDB 中存储了多少时间序列")])]),s._v(" "),e("p",[s._v("使用 IoTDB 的命令行接口:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("IoTDB> show timeseries root\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("在返回的结果里，会展示"),e("code",[s._v("Total timeseries number")]),s._v("，这个数据就是 IoTDB 中 timeseries 的数量。")]),s._v(" "),e("p",[s._v("在当前版本中，IoTDB 支持直接使用命令行接口查询时间序列的数量:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("IoTDB> count timeseries root\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("如果您使用的是 Linux 操作系统，您可以使用以下的 Shell 命令:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('> grep "0,root" $IOTDB_HOME/data/system/schema/mlog.txt |  wc -l\n>   6\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[e("strong",[s._v("可以使用 Hadoop 和 Spark 读取 IoTDB 中的 TsFile 吗？")])]),s._v(" "),e("p",[s._v("是的。IoTDB 与开源生态紧密结合。IoTDB 支持 "),e("a",{attrs:{href:"https://github.com/apache/iotdb/tree/master/hadoop",target:"_blank",rel:"noopener noreferrer"}},[s._v("Hadoop"),e("OutboundLink")],1),s._v(", "),e("a",{attrs:{href:"https://github.com/apache/iotdb/tree/master/spark",target:"_blank",rel:"noopener noreferrer"}},[s._v("Spark"),e("OutboundLink")],1),s._v(" 和 "),e("a",{attrs:{href:"https://github.com/apache/iotdb/tree/master/grafana",target:"_blank",rel:"noopener noreferrer"}},[s._v("Grafana"),e("OutboundLink")],1),s._v(" 可视化工具.")]),s._v(" "),e("p",[e("strong",[s._v("IoTDB如何处理重复的数据点")])]),s._v(" "),e("p",[s._v("一个数据点是由一个完整的时间序列路径(例如:"),e("code",[s._v("root.vehicle.d0.s0")]),s._v(")和时间戳唯一标识的。如果您使用与现有点相同的路径和时间戳提交一个新点，那么IoTDB将更新这个点的值，而不是插入一个新点。")]),s._v(" "),e("p",[e("strong",[s._v("我如何知道具体的 timeseries 的类型")])]),s._v(" "),e("p",[s._v("在 IoTDB 的命令行接口中使用 SQL "),e("code",[s._v("SHOW TIMESERIES <timeseries path>")]),s._v(":")]),s._v(" "),e("p",[s._v("例如：如果您想知道所有 timeseries 的类型 <timeseries path> 应该为 "),e("code",[s._v("root")]),s._v("。上面的 SQL 应该修改为:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("IoTDB> show timeseries root\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("如果您想查询一个指定的时间序列, 您可以修改 <timeseries path> 为时间序列的完整路径。比如:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("IoTDB> show timeseries root.fit.d1.s1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("您还可以在 timeseries 路径中使用通配符:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("IoTDB> show timeseries root.fit.d1.*\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("strong",[s._v("如何更改IoTDB的客户端时间显示格式")])]),s._v(" "),e("p",[s._v("IoTDB 客户端默认显示的时间是人类可读的(比如："),e("code",[s._v("1970-01-01T08:00:00.001")]),s._v(")，如果您想显示是时间戳或者其他可读格式, 请在启动命令上添加参数"),e("code",[s._v("-disableISO8601")]),s._v(":")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("> $IOTDB_CLI_HOME/sbin/start-cli.sh -h 127.0.0.1 -p 6667 -u root -pw root -disableISO8601\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);