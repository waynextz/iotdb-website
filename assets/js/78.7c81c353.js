(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{482:function(e,t,a){"use strict";a.r(t);var s=a(19),r=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"load-external-tsfile-tool"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#load-external-tsfile-tool"}},[e._v("#")]),e._v(" Load External TsFile Tool")]),e._v(" "),t("h2",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),t("p",[e._v("The load external tsfile tool allows users to load tsfiles, delete a tsfile, or move a tsfile to target directory from the running Apache IoTDB instance. Alternatively, you can use scripts to load tsfiles into IoTDB, for more information.")]),e._v(" "),t("h2",{attrs:{id:"load-with-sql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#load-with-sql"}},[e._v("#")]),e._v(" Load with SQL")]),e._v(" "),t("p",[e._v("The user sends specified commands to the Apache IoTDB system through the Cli tool or JDBC to use the tool.")]),e._v(" "),t("h3",{attrs:{id:"load-tsfiles"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#load-tsfiles"}},[e._v("#")]),e._v(" load tsfiles")]),e._v(" "),t("p",[e._v("The command to load tsfiles is "),t("code",[e._v("load <path/dir> [sglevel=int][verify=true/false][onSuccess=delete/none]")]),e._v(".")]),e._v(" "),t("p",[e._v("This command has two usages:")]),e._v(" "),t("ol",[t("li",[e._v("Load a single tsfile by specifying a file path (absolute path).")])]),e._v(" "),t("p",[e._v("The first parameter indicates the path of the tsfile to be loaded. This command has three options: sglevel, verify, onSuccess.")]),e._v(" "),t("p",[e._v("SGLEVEL option. If the database correspond to the tsfile does not exist, the user can set the level of database through the fourth parameter. By default, it uses the database level which is set in "),t("code",[e._v("iotdb-datanode.properties")]),e._v(".")]),e._v(" "),t("p",[e._v("VERIFY option. If this parameter is true, All timeseries in this loading tsfile will be compared with the timeseries in IoTDB. If existing a measurement which has different datatype with the measurement in IoTDB, the loading process will be stopped and exit. If consistence can be promised, setting false for this parameter will be a better choice.")]),e._v(" "),t("p",[e._v("ONSUCCESS option. The default value is DELETE, which means  the processing method of successfully loaded tsfiles, and DELETE means  after the tsfile is successfully loaded, it will be deleted. NONE means after the tsfile is successfully loaded, it will be remained in the origin dir.")]),e._v(" "),t("p",[e._v("If the "),t("code",[e._v(".resource")]),e._v(" file corresponding to the file exists, it will be loaded into the data directory and engine of the Apache IoTDB. Otherwise, the corresponding "),t("code",[e._v(".resource")]),e._v(" file will be regenerated from the tsfile file.")]),e._v(" "),t("p",[e._v("Examples:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("load '/Users/Desktop/data/1575028885956-101-0.tsfile'")])]),e._v(" "),t("li",[t("code",[e._v("load '/Users/Desktop/data/1575028885956-101-0.tsfile' verify=true")])]),e._v(" "),t("li",[t("code",[e._v("load '/Users/Desktop/data/1575028885956-101-0.tsfile' verify=false")])]),e._v(" "),t("li",[t("code",[e._v("load '/Users/Desktop/data/1575028885956-101-0.tsfile' sglevel=1")])]),e._v(" "),t("li",[t("code",[e._v("load '/Users/Desktop/data/1575028885956-101-0.tsfile' onSuccess=delete")])]),e._v(" "),t("li",[t("code",[e._v("load '/Users/Desktop/data/1575028885956-101-0.tsfile' verify=true sglevel=1")])]),e._v(" "),t("li",[t("code",[e._v("load '/Users/Desktop/data/1575028885956-101-0.tsfile' verify=false sglevel=1")])]),e._v(" "),t("li",[t("code",[e._v("load '/Users/Desktop/data/1575028885956-101-0.tsfile' verify=true onSuccess=none")])]),e._v(" "),t("li",[t("code",[e._v("load '/Users/Desktop/data/1575028885956-101-0.tsfile' verify=false sglevel=1 onSuccess=delete")])])]),e._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[e._v("Load a batch of files by specifying a folder path (absolute path).")])]),e._v(" "),t("p",[e._v("The first parameter indicates the path of the tsfile to be loaded. The options above also works for this command.")]),e._v(" "),t("p",[e._v("Examples:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("load '/Users/Desktop/data'")])]),e._v(" "),t("li",[t("code",[e._v("load '/Users/Desktop/data' verify=false")])]),e._v(" "),t("li",[t("code",[e._v("load '/Users/Desktop/data' verify=true")])]),e._v(" "),t("li",[t("code",[e._v("load '/Users/Desktop/data' verify=true sglevel=1")])]),e._v(" "),t("li",[t("code",[e._v("load '/Users/Desktop/data' verify=false sglevel=1 onSuccess=delete")])])]),e._v(" "),t("p",[t("strong",[e._v("NOTICE")]),e._v(":  When "),t("code",[e._v("$IOTDB_HOME$/conf/iotdb-datanode.properties")]),e._v(" has "),t("code",[e._v("enable_auto_create_schema=true")]),e._v(", it will automatically create metadata in TSFILE, otherwise it will not be created automatically.")]),e._v(" "),t("h2",{attrs:{id:"load-with-script"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#load-with-script"}},[e._v("#")]),e._v(" Load with Script")]),e._v(" "),t("p",[e._v("Run rewrite-tsfile.bat if you are in a Windows environment, or rewrite-tsfile.sh if you are on Linux or Unix.")]),e._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("./load-tsfile.bat "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-f")]),e._v(" filePath "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("-h host"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("-p port"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("-u username"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("-pw password"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("--sgLevel int"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("--verify true/false"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("--onSuccess none/delete"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-f")]),e._v(" \t\t\tFile/Directory to be load, required\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-h")]),e._v(" \t\t\tIoTDB Host address, optional field, "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("127.0")]),e._v(".0.1 by default\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-p")]),e._v(" \t\t\tIoTDB port, optional field, "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("6667")]),e._v(" by default\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-u")]),e._v(" \t\t\tIoTDB user name, optional field, root by default\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-pw")]),e._v(" \t\tIoTDB password, optional field, root by default\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--sgLevel")]),e._v(" \tSg level of loading Tsfile, optional field, default_storage_group_level "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" \t\t\t\tiotdb-common.properties by default\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--verify")]),e._v(" \tVerify schema or not, optional field, True by default\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--onSuccess")]),e._v(" Delete or remain origin TsFile after loading, optional field, none by default\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br")])]),t("h3",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),t("p",[e._v("Assuming that an IoTDB instance is running on server 192.168.0.101:6667, you want to load all TsFile files from the locally saved TsFile backup folder D:\\IoTDB\\data into this IoTDB instance.")]),e._v(" "),t("p",[e._v("First move to the folder "),t("code",[e._v("$IOTDB_HOME/tools/")]),e._v(", open the command line, and execute")]),e._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("./load-rewrite.bat "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-f")]),e._v(" D:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("IoTDB"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("data "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-h")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".0.101 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-p")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("6667")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-u")]),e._v(" root "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-pw")]),e._v(" root\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("After waiting for the script execution to complete, you can check that the data in the IoTDB instance has been loaded correctly.")]),e._v(" "),t("h3",{attrs:{id:"q-a"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q-a"}},[e._v("#")]),e._v(" Q&A")]),e._v(" "),t("ul",[t("li",[e._v("Cannot find or load the main class\n"),t("ul",[t("li",[e._v("It may be because the environment variable $IOTDB_HOME is not set, please set the environment variable and try again")])])]),e._v(" "),t("li",[e._v("-f option must be set!\n"),t("ul",[t("li",[e._v("The input command is missing the -f field (file or folder path to be loaded) or the -u field (user name), please add it and re-execute")])])]),e._v(" "),t("li",[e._v("What if the execution crashes in the middle and you want to reload?\n"),t("ul",[t("li",[e._v("You re-execute the command just now, reloading the data will not affect the correctness after loading")])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);