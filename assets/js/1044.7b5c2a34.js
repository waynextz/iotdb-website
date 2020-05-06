(window.webpackJsonp=window.webpackJsonp||[]).push([[1044],{1502:function(e,a,t){"use strict";t.r(a);var s=t(49),i=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"frequently-asked-questions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#frequently-asked-questions"}},[e._v("#")]),e._v(" Frequently Asked Questions")]),e._v(" "),t("h2",{attrs:{id:"outline"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#outline"}},[e._v("#")]),e._v(" Outline")]),e._v(" "),t("ul",[t("li",[e._v("Frequently Asked Questions\n"),t("ul",[t("li",[e._v("How can I identify my version of IoTDB?")]),e._v(" "),t("li",[e._v("Where can I find IoTDB logs?")]),e._v(" "),t("li",[e._v("Where can I find IoTDB data files?")]),e._v(" "),t("li",[e._v("How do I know how many time series are stored in IoTDB?")]),e._v(" "),t("li",[e._v("Can I use Hadoop and Spark to read TsFile in IoTDB?")]),e._v(" "),t("li",[e._v("How does IoTDB handle duplicate points?")]),e._v(" "),t("li",[e._v("How can I tell what type of the specific timeseries?")]),e._v(" "),t("li",[e._v("How can I change IoTDB's CLI time display format?")])])])]),e._v(" "),t("h2",{attrs:{id:"how-can-i-identify-my-version-of-iotdb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-can-i-identify-my-version-of-iotdb"}},[e._v("#")]),e._v(" How can I identify my version of IoTDB?")]),e._v(" "),t("p",[e._v("There are several ways to identify the version of IoTDB that you are using:")]),e._v(" "),t("ul",[t("li",[e._v("Launch IoTDB's Command Line Interface:")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> ./start-client.sh -p 6667 -pw root -u root -h localhost\n _____       _________  ______   ______    \n|_   _|     |  _   _  ||_   _ `.|_   _ \\   \n  | |   .--.|_/ | | \\_|  | | `. \\ | |_) |  \n  | | / .'`\\ \\  | |      | |  | | |  __'.  \n _| |_| \\__. | _| |_    _| |_.' /_| |__) | \n|_____|'.__.' |_____|  |______.'|_______/  version 0.8.2\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br")])]),t("ul",[t("li",[e._v("Check pom.xml file:")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<version>0.8.2</version>\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("ul",[t("li",[e._v("Use JDBC API:")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("String iotdbVersion = tsfileDatabaseMetadata.getDatabaseProductVersion();\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h2",{attrs:{id:"where-can-i-find-iotdb-logs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#where-can-i-find-iotdb-logs"}},[e._v("#")]),e._v(" Where can I find IoTDB logs?")]),e._v(" "),t("p",[e._v("Suppose your root directory is:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ pwd\n/workspace/incubator-iotdb\n\n$ ls -l\nserver/\nclient/\npom.xml\nReadme.md\n...\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br")])]),t("p",[e._v("Let "),t("code",[e._v("$IOTDB_HOME = /workspace/incubator-iotdb/server/target/iotdb-server-{project.version}")])]),e._v(" "),t("p",[e._v("Let "),t("code",[e._v("$IOTDB_CLI_HOME = /workspace/incubator-iotdb/client/target/iotdb-client-{project.version}")])]),e._v(" "),t("p",[e._v("By default settings, the logs are stored under "),t("code",[e._v("IOTDB_HOME/logs")]),e._v(". You can change log level and storage path by configuring "),t("code",[e._v("logback.xml")]),e._v(" under "),t("code",[e._v("IOTDB_HOME/conf")]),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"where-can-i-find-iotdb-data-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#where-can-i-find-iotdb-data-files"}},[e._v("#")]),e._v(" Where can I find IoTDB data files?")]),e._v(" "),t("p",[e._v("By default settings, the data files (including tsfile, metadata, and WAL files) are stored under "),t("code",[e._v("IOTDB_HOME/data")]),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"how-do-i-know-how-many-time-series-are-stored-in-iotdb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-know-how-many-time-series-are-stored-in-iotdb"}},[e._v("#")]),e._v(" How do I know how many time series are stored in IoTDB?")]),e._v(" "),t("p",[e._v("Use IoTDB's Command Line Interface:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("IoTDB> show timeseries root.*\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("In the result, there will be a statement shows "),t("code",[e._v("Total timeseries number")]),e._v(", this number is the timeseries number in IoTDB.")]),e._v(" "),t("p",[e._v("If you are using Linux, you can use the following shell command:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('> grep "0,root" $IOTDB_HOME/data/system/schema/mlog.txt |  wc -l\n>   6\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("h2",{attrs:{id:"can-i-use-hadoop-and-spark-to-read-tsfile-in-iotdb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#can-i-use-hadoop-and-spark-to-read-tsfile-in-iotdb"}},[e._v("#")]),e._v(" Can I use Hadoop and Spark to read TsFile in IoTDB?")]),e._v(" "),t("p",[e._v("Yes. IoTDB has intense integration with Open Source Ecosystem. IoTDB supports "),t("a",{attrs:{href:"https://github.com/apache/incubator-iotdb/tree/master/hadoop",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hadoop"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"https://github.com/apache/incubator-iotdb/tree/master/spark",target:"_blank",rel:"noopener noreferrer"}},[e._v("Spark"),t("OutboundLink")],1),e._v(" and "),t("a",{attrs:{href:"https://github.com/apache/incubator-iotdb/tree/master/grafana",target:"_blank",rel:"noopener noreferrer"}},[e._v("Grafana"),t("OutboundLink")],1),e._v(" visualization tool.")]),e._v(" "),t("h2",{attrs:{id:"how-does-iotdb-handle-duplicate-points"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-does-iotdb-handle-duplicate-points"}},[e._v("#")]),e._v(" How does IoTDB handle duplicate points?")]),e._v(" "),t("p",[e._v("A data point is uniquely identified by a full time series path (e.g. "),t("code",[e._v("root.vehicle.d0.s0")]),e._v(") and timestamp. If you submit a new point with the same path and timestamp as an existing point,")]),e._v(" "),t("h2",{attrs:{id:"how-can-i-tell-what-type-of-the-specific-timeseries"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-can-i-tell-what-type-of-the-specific-timeseries"}},[e._v("#")]),e._v(" How can I tell what type of the specific timeseries?")]),e._v(" "),t("p",[e._v("Use "),t("code",[e._v("SHOW TIMESERIES <timeseries path>")]),e._v(" SQL in IoTDB's Command Line Interface:")]),e._v(" "),t("p",[e._v("For example, if you want to know the type of all timeseries, the <timeseries path> should be "),t("code",[e._v("root")]),e._v(". The statement will be:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("IoTDB> show timeseries root\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("If you want to query specific sensor, you can replace the <timeseries path> with the sensor name. For example:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("IoTDB> show timeseries root.fit.d1.s1\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("Otherwise, you can also use wildcard in timeseries path:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("IoTDB> show timeseries root.fit.d1.*\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h2",{attrs:{id:"how-can-i-change-iotdb-s-cli-time-display-format"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-can-i-change-iotdb-s-cli-time-display-format"}},[e._v("#")]),e._v(" How can I change IoTDB's CLI time display format?")]),e._v(" "),t("p",[e._v("The default IoTDB's CLI time display format is human readable (e.g. "),t("code",[e._v("1970-01-01T08:00:00.001")]),e._v("), if you want to display time in timestamp type or other readable format, add parameter "),t("code",[e._v("-disableIS08601")]),e._v(" in start command:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> $IOTDB_CLI_HOME/sbin/start-client.sh -h 127.0.0.1 -p 6667 -u root -pw root -disableIS08601\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])])])}),[],!1,null,null,null);a.default=i.exports}}]);