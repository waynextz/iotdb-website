(window.webpackJsonp=window.webpackJsonp||[]).push([[513],{917:function(a,t,e){"use strict";e.r(t);var i=e(19),s=Object(i.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"grafana-plugin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#grafana-plugin"}},[a._v("#")]),a._v(" Grafana-Plugin")]),a._v(" "),t("p",[a._v("Grafana is an open source volume metrics monitoring and visualization tool, which can be used to present time series data and analyze application runtime status.")]),a._v(" "),t("p",[a._v("We developed the Grafana-Plugin for IoTDB, using the IoTDB REST service to present time series data and providing many visualization methods for time series data.\nCompared with previous IoTDB-Grafana-Connector, current Grafana-Plugin performs more efficiently and supports more query types. So, "),t("strong",[a._v("we recommend using Grafana-Plugin instead of IoTDB-Grafana-Connector")]),a._v(".")]),a._v(" "),t("h3",{attrs:{id:"installation-and-deployment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation-and-deployment"}},[a._v("#")]),a._v(" Installation and deployment")]),a._v(" "),t("h4",{attrs:{id:"install-grafana"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-grafana"}},[a._v("#")]),a._v(" Install Grafana")]),a._v(" "),t("ul",[t("li",[a._v("Download url: https://grafana.com/grafana/download")]),a._v(" "),t("li",[a._v("Version >= 7.0.0")])]),a._v(" "),t("h4",{attrs:{id:"acquisition-method-of-grafana-plugin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#acquisition-method-of-grafana-plugin"}},[a._v("#")]),a._v(" Acquisition method of grafana plugin")]),a._v(" "),t("h5",{attrs:{id:"method-1-grafana-plugin-binary-download"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#method-1-grafana-plugin-binary-download"}},[a._v("#")]),a._v(" Method 1: grafana plugin binary Download")]),a._v(" "),t("p",[a._v("Download url：https://iotdb.apache.org/zh/Download/")]),a._v(" "),t("h5",{attrs:{id:"method-2-separate-compilation-of-grafana-plugin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#method-2-separate-compilation-of-grafana-plugin"}},[a._v("#")]),a._v(" Method 2: separate compilation of grafana plugin")]),a._v(" "),t("p",[a._v("We need to compile the front-end project in the IoTDB "),t("code",[a._v("grafana-plugin")]),a._v(" directory and then generate the "),t("code",[a._v("dist")]),a._v(" directory. The specific execution process is as follows.")]),a._v(" "),t("p",[a._v("Source download")]),a._v(" "),t("ul",[t("li",[a._v("Plugin name: grafana-plugin")]),a._v(" "),t("li",[a._v("Download url: https://github.com/apache/iotdb.git")])]),a._v(" "),t("p",[a._v("Execute the following command:")]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/apache/iotdb.git\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("ul",[t("li",[a._v("Option 1 (compile with maven): execute following command in the "),t("code",[a._v("grafana-plugin")]),a._v(" directory:")])]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("mvn "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" package "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-P")]),a._v(" compile-grafana-plugin\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("ul",[t("li",[a._v("Option 2 (compile with yarn): execute following command in the "),t("code",[a._v("grafana-plugin")]),a._v(" directory:")])]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" build\ngo get "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" github.com/grafana/grafana-plugin-sdk-go\ngo mod tidy\nmage "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("p",[a._v("When using the go get -u command, the following error may be reported. In this case, we need to execute "),t("code",[a._v("go env -w GOPROXY=https://goproxy.cn")]),a._v(", and then execute "),t("code",[a._v("go get -u github.com/grafana/grafana -plugin-sdk-go")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('go get: module github.com/grafana/grafana-plugin-sdk-go: Get "https://proxy.golang.org/github.com/grafana/grafana-plugin-sdk-go/@v/list": dial tcp 142.251.42.241:443: i/o timeout\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("If compiling successful, you can see the "),t("code",[a._v("dist")]),a._v(" directory , which contains the compiled Grafana-Plugin:")]),a._v(" "),t("img",{staticStyle:{width:"100%","max-width":"333px","max-height":"545px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/grafana-plugin-build.png?raw=true"}}),a._v(" "),t("h5",{attrs:{id:"method-3-the-distribution-package-of-iotdb-is-fully-compiled"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#method-3-the-distribution-package-of-iotdb-is-fully-compiled"}},[a._v("#")]),a._v(" Method 3: The distribution package of IoTDB is fully compiled")]),a._v(" "),t("p",[a._v("We can also obtain the front-end project of "),t("code",[a._v("grafana-plugin")]),a._v(" and other IoTDB executable files by executing the "),t("strong",[a._v("package instruction")]),a._v(" of the IoTDB project.")]),a._v(" "),t("p",[a._v("Execute following command in the IoTDB root directory:")]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v(" mvn clean package "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-pl")]),a._v(" distribution "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-am")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-DskipTests")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-P")]),a._v(" compile-grafana-plugin\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("If compiling successful, you can see that the "),t("code",[a._v("distribution/target")]),a._v(" directory contains the compiled Grafana-Plugin:")]),a._v(" "),t("img",{staticStyle:{width:"100%","max-width":"333px","max-height":"545px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/distribution.png?raw=true"}}),a._v(" "),t("h4",{attrs:{id:"install-grafana-plugin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-grafana-plugin"}},[a._v("#")]),a._v(" Install Grafana-Plugin")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("Copy the front-end project target folder generated above to Grafana's plugin directory "),t("code",[a._v("${Grafana directory}\\data\\plugins\\")]),a._v("。If there is no such directory, you can manually create it or start grafana and it will be created automatically. Of course, you can also modify the location of plugins. For details, please refer to the following instructions for modifying the location of Grafana's plugin directory.")])]),a._v(" "),t("li",[t("p",[a._v("Modify Grafana configuration file: the file is in（"),t("code",[a._v("${Grafana directory}\\conf\\defaults.ini")]),a._v("）, and do the following modifications:")]),a._v(" "),t("div",{staticClass:"language-ini line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-ini"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("allow_loading_unsigned_plugins")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("apache-iotdb-datasource")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])])]),a._v(" "),t("li",[t("p",[a._v("Modify the location of Grafana's plugin directory: the file is in（"),t("code",[a._v("${Grafana directory}\\conf\\defaults.ini")]),a._v("）, and do the following modifications:")]),a._v(" "),t("div",{staticClass:"language-ini line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-ini"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("plugins")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("data/plugins")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])])]),a._v(" "),t("li",[t("p",[a._v("Start Grafana (restart if the Grafana service is already started)")])])]),a._v(" "),t("p",[a._v("For more details，please click "),t("a",{attrs:{href:"https://grafana.com/docs/grafana/latest/plugins/installation/",target:"_blank",rel:"noopener noreferrer"}},[a._v("here"),t("OutboundLink")],1)]),a._v(" "),t("h4",{attrs:{id:"start-grafana"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#start-grafana"}},[a._v("#")]),a._v(" Start Grafana")]),a._v(" "),t("p",[a._v("Start Grafana with the following command in the Grafana directory:")]),a._v(" "),t("ul",[t("li",[a._v("Windows:")])]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("bin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("grafana-server.exe\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("ul",[t("li",[a._v("Linux:")])]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("service")]),a._v(" grafana-server start\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("ul",[t("li",[a._v("MacOS:")])]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("brew services start grafana\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("For more details，please click "),t("a",{attrs:{href:"https://grafana.com/docs/grafana/latest/installation/",target:"_blank",rel:"noopener noreferrer"}},[a._v("here"),t("OutboundLink")],1)]),a._v(" "),t("h4",{attrs:{id:"configure-iotdb-rest-service"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configure-iotdb-rest-service"}},[a._v("#")]),a._v(" Configure IoTDB REST Service")]),a._v(" "),t("ul",[t("li",[a._v("Modify "),t("code",[a._v("{iotdb directory}/conf/iotdb-common.properties")]),a._v(" as following:")])]),a._v(" "),t("div",{staticClass:"language-properties line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-properties"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Is the REST service enabled")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("enable_rest_service")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("true")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# the binding port of the REST service")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("rest_service_port")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("18080")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("p",[a._v("Start IoTDB (restart if the IoTDB service is already started)")]),a._v(" "),t("h3",{attrs:{id:"how-to-use-grafana-plugin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-grafana-plugin"}},[a._v("#")]),a._v(" How to use Grafana-Plugin")]),a._v(" "),t("h4",{attrs:{id:"access-grafana-dashboard"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#access-grafana-dashboard"}},[a._v("#")]),a._v(" Access Grafana dashboard")]),a._v(" "),t("p",[a._v("Grafana displays data in a web page dashboard. Please open your browser and visit "),t("code",[a._v("http://<ip>:<port>")]),a._v(" when using it.")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("IP is the IP of the server where your Grafana is located, and Port is the running port of Grafana (default 3000).")])]),a._v(" "),t("li",[t("p",[a._v("The default login username and password are both "),t("code",[a._v("admin")]),a._v(".")])])]),a._v(" "),t("h4",{attrs:{id:"add-iotdb-as-data-source"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add-iotdb-as-data-source"}},[a._v("#")]),a._v(" Add IoTDB as Data Source")]),a._v(" "),t("p",[a._v("Click the "),t("code",[a._v("Settings")]),a._v(" icon on the left, select the "),t("code",[a._v("Data Source")]),a._v(" option, and then click "),t("code",[a._v("Add data source")]),a._v(".")]),a._v(" "),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/datasource_1.png?raw=true"}}),a._v(" "),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/datasource_2.png?raw=true"}}),a._v(" "),t("p",[a._v("Select the "),t("code",[a._v("Apache IoTDB")]),a._v(" data source.")]),a._v(" "),t("ul",[t("li",[a._v("Fill in "),t("code",[a._v("http://<ip>:<port>")]),a._v(" in the "),t("code",[a._v("URL")]),a._v(" field\n"),t("ul",[t("li",[a._v("ip is the host ip where your IoTDB server is located")]),a._v(" "),t("li",[a._v("port is the running port of the REST service (default 18080).")])])]),a._v(" "),t("li",[a._v("Enter the username and password of the IoTDB server")])]),a._v(" "),t("p",[a._v("Click "),t("code",[a._v("Save & Test")]),a._v(", and "),t("code",[a._v("Success")]),a._v(" will appear.")]),a._v(" "),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/datasource_3.png?raw=true"}}),a._v(" "),t("h4",{attrs:{id:"create-a-new-panel"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-a-new-panel"}},[a._v("#")]),a._v(" Create a new Panel")]),a._v(" "),t("p",[a._v("Click the "),t("code",[a._v("Dashboards")]),a._v(" icon on the left, and select "),t("code",[a._v("Manage")]),a._v(" option.")]),a._v(" "),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/manage.png?raw=true"}}),a._v(" "),t("p",[a._v("Click the "),t("code",[a._v("New Dashboard")]),a._v(" icon on the top right, and select "),t("code",[a._v("Add an empty panel")]),a._v(" option.")]),a._v(" "),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/add%20empty%20panel.png?raw=true"}}),a._v(" "),t("p",[a._v("Grafana plugin supports SQL: Full Customized mode and SQL: Drop-down List mode, and the default mode is SQL: Full Customized mode.")]),a._v(" "),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/grafana_input_style.png?raw=true"}}),a._v(" "),t("h5",{attrs:{id:"sql-full-customized-input-method"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sql-full-customized-input-method"}},[a._v("#")]),a._v(" SQL: Full Customized input method")]),a._v(" "),t("p",[a._v("Enter content in the SELECT, FROM , WHERE and CONTROL input box, where the WHERE and CONTROL input boxes are optional.")]),a._v(" "),t("p",[a._v("If a query involves multiple expressions, we can click "),t("code",[a._v("+")]),a._v(" on the right side of the SELECT input box to add expressions in the SELECT clause, or click "),t("code",[a._v("+")]),a._v(" on the right side of the FROM input box to add a path prefix:")]),a._v(" "),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/grafana_input.png?raw=true"}}),a._v(" "),t("p",[a._v("SELECT input box: contents can be the time series suffix, function, udf, arithmetic expression, or nested expressions. You can also use the as clause to rename the result.")]),a._v(" "),t("p",[a._v("Here are some examples of valid SELECT content:")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("s1")])]),a._v(" "),t("li",[t("code",[a._v("top_k(s1, 'k'='1') as top")])]),a._v(" "),t("li",[t("code",[a._v("sin(s1) + cos(s1 + s2)")])]),a._v(" "),t("li",[t("code",[a._v('udf(s1) as "alias"')])])]),a._v(" "),t("p",[a._v("FROM input box: contents must be the prefix path of the time series, such as "),t("code",[a._v("root.sg.d")]),a._v(".")]),a._v(" "),t("p",[a._v("WHERE input box: contents should be the filter condition of the query, such as "),t("code",[a._v("time > 0")]),a._v(" or "),t("code",[a._v("s1 < 1024 and s2 > 1024")]),a._v(".")]),a._v(" "),t("p",[a._v("CONTROL input box: contents should be a special clause that controls the query type and output format.\nThe GROUP BY input box supports the use of grafana's global variables to obtain the current time interval changes $__from (start time), $__to (end time)")]),a._v(" "),t("p",[a._v("Here are some examples of valid CONTROL content:")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("GROUP BY ([$__from, $__to), 1d)")])]),a._v(" "),t("li",[t("code",[a._v("GROUP BY ([$__from, $__to),3h,1d)")])]),a._v(" "),t("li",[t("code",[a._v("GROUP BY ([2017-11-01T00:00:00, 2017-11-07T23:00:00), 1d)")])]),a._v(" "),t("li",[t("code",[a._v("GROUP BY ([2017-11-01 00:00:00, 2017-11-07 23:00:00), 3h, 1d)")])]),a._v(" "),t("li",[t("code",[a._v("GROUP BY ([$__from, $__to), 1m) FILL (PREVIOUSUNTILLAST)")])]),a._v(" "),t("li",[t("code",[a._v("GROUP BY ([2017-11-07T23:50:00, 2017-11-07T23:59:00), 1m) FILL (PREVIOUSUNTILLAST)")])]),a._v(" "),t("li",[t("code",[a._v("GROUP BY ([2017-11-07T23:50:00, 2017-11-07T23:59:00), 1m) FILL (PREVIOUS, 1m)")])]),a._v(" "),t("li",[t("code",[a._v("GROUP BY ([2017-11-07T23:50:00, 2017-11-07T23:59:00), 1m) FILL (LINEAR, 5m, 5m)")])]),a._v(" "),t("li",[t("code",[a._v("GROUP BY ((2017-11-01T00:00:00, 2017-11-07T23:00:00], 1d), LEVEL=1")])]),a._v(" "),t("li",[t("code",[a._v("GROUP BY ([0, 20), 2ms, 3ms), LEVEL=1")])])]),a._v(" "),t("p",[a._v("Tip: Statements like "),t("code",[a._v("select * from root.xx.**")]),a._v(" are not recommended because those statements may cause OOM.")]),a._v(" "),t("h5",{attrs:{id:"sql-drop-down-list"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sql-drop-down-list"}},[a._v("#")]),a._v(" SQL: Drop-down List")]),a._v(" "),t("p",[a._v("Select a time series in the TIME-SERIES selection box, select a function in the FUNCTION option, and enter the contents in the SAMPLING INTERVAL、SLIDING STEP、LEVEL、FILL input boxes, where TIME-SERIES is a required item and the rest are non required items.")]),a._v(" "),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/grafana_input2.png?raw=true"}}),a._v(" "),t("h4",{attrs:{id:"support-for-variables-and-template-functions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#support-for-variables-and-template-functions"}},[a._v("#")]),a._v(" Support for variables and template functions")]),a._v(" "),t("p",[a._v("Both SQL: Full Customized and SQL: Drop-down List input methods support the variable and template functions of grafana. In the following example, raw input method is used, and aggregation is similar.")]),a._v(" "),t("p",[a._v("After creating a new Panel, click the Settings button in the upper right corner:")]),a._v(" "),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/setconf.png?raw=true"}}),a._v(" "),t("p",[a._v("Select "),t("code",[a._v("Variables")]),a._v(", click "),t("code",[a._v("Add variable")]),a._v(":")]),a._v(" "),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/addvaribles.png?raw=true"}}),a._v(" "),t("p",[a._v("Example 1：Enter "),t("code",[a._v("Name")]),a._v(", "),t("code",[a._v("Label")]),a._v(", and "),t("code",[a._v("Query")]),a._v(", and then click the "),t("code",[a._v("Update")]),a._v(" button:")]),a._v(" "),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/variblesinput.png?raw=true"}}),a._v(" "),t("p",[a._v("Apply Variables, enter the variable in the "),t("code",[a._v("grafana panel")]),a._v(" and click the "),t("code",[a._v("save")]),a._v(" button:")]),a._v(" "),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/applyvariables.png?raw=true"}}),a._v(" "),t("p",[a._v("Example 2: Nested use of variables:")]),a._v(" "),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/variblesinput2.png?raw=true"}}),a._v(" "),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/variblesinput2-1.png?raw=true"}}),a._v(" "),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/variblesinput2-2.png?raw=true"}}),a._v(" "),t("p",[a._v("Example 3: using function variables")]),a._v(" "),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/variablesinput3.png?raw=true"}}),a._v(" "),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/variablesinput3-1.png?raw=true"}}),a._v(" "),t("p",[a._v("The Name in the above figure is the variable name and the variable name we will use in the panel in the future. Label is the display name of the variable. If it is empty, the variable of Name will be displayed. Otherwise, the name of the Label will be displayed.\nThere are Query, Custom, Text box, Constant, DataSource, Interval, Ad hoc filters, etc. in the Type drop-down, all of which can be used in IoTDB's Grafana Plugin\nFor a more detailed introduction to usage, please check the official manual (https://grafana.com/docs/grafana/latest/variables/)")]),a._v(" "),t("p",[a._v("In addition to the examples above, the following statements are supported:")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("show databases")])]),a._v(" "),t("li",[t("code",[a._v("show timeseries")])]),a._v(" "),t("li",[t("code",[a._v("show child nodes")])]),a._v(" "),t("li",[t("code",[a._v("show all ttl")])]),a._v(" "),t("li",[t("code",[a._v("show latest timeseries")])]),a._v(" "),t("li",[t("code",[a._v("show devices")])]),a._v(" "),t("li",[t("code",[a._v("select xx from root.xxx limit xx 等sql 查询")])])]),a._v(" "),t("p",[a._v("Tip: If the query field contains Boolean data, the result value will be converted to 1 by true and 0 by false.")]),a._v(" "),t("h4",{attrs:{id:"grafana-alert-function"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#grafana-alert-function"}},[a._v("#")]),a._v(" Grafana alert function")]),a._v(" "),t("p",[a._v("This plugin supports Grafana alert function.")]),a._v(" "),t("ol",[t("li",[a._v("In the Grafana sidebar, hover over the "),t("code",[a._v("Alerting")]),a._v(" icon and click "),t("code",[a._v("Notification channels")]),a._v(".")])]),a._v(" "),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/alerting1.png?raw=true"}}),a._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[a._v("Click Add Channel.")])]),a._v(" "),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/alerting2.png?raw=true"}}),a._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[a._v("Fill in the fields described below or select options. There are many types of Type, including DingDing, Email, Slack, WebHook, Prometheus Alertmanager, etc.\nThis sample Type uses "),t("code",[a._v("Prometheus Alertmanager")]),a._v(". Prometheus Alertmanager needs to be installed in advance. For more detailed configuration and parameter introduction, please refer to the official documentation: https://grafana.com/docs/grafana/v8.0/alerting/old- alerting/notifications/.")])]),a._v(" "),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/alerting3.png?raw=true"}}),a._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[a._v("Click the "),t("code",[a._v("Test")]),a._v(" button, the "),t("code",[a._v("Test notification sent")]),a._v(" appears, click the "),t("code",[a._v("Save")]),a._v(" button to save")])]),a._v(" "),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/alerting4.png?raw=true"}}),a._v(" "),t("ol",{attrs:{start:"5"}},[t("li",[a._v("After creating a new Panel, enter the query parameters and click Save, then select "),t("code",[a._v("Alert")]),a._v(" and click "),t("code",[a._v("Create Alert")]),a._v(", as shown in the following figure:")])]),a._v(" "),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/alertpanle1.png?raw=true"}}),a._v(" "),t("p",[a._v("6、Fill out the fields described below or select an option， "),t("code",[a._v("Name")]),a._v("- Enter a descriptive name. The name will be displayed in the Alert Rules list. This field supports templating.\n"),t("code",[a._v("Evaluate every")]),a._v(" - Specify how often the scheduler should evaluate the alert rule. This is referred to as the evaluation interval.\n"),t("code",[a._v("For")]),a._v(" - Specify how long the query needs to violate the configured thresholds before the alert notification triggers.。"),t("code",[a._v("Conditions")]),a._v("- Represents query criteria. Multiple combined query criteria can be configured.")]),a._v(" "),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/alertpanle2.jpg?raw=true"}}),a._v(" "),t("p",[a._v("Query conditions in the figure：avg() OF query(A,5m,now) IS ABOVE -1")]),a._v(" "),t("p",[a._v("avg() Controls how the values for each series should be reduced to a value that can be compared against the threshold. Click on the function to change it to another aggregation function\nquery(A, 15m, now) The letter defines what query to execute from the Metrics tab. The second two parameters define the time range, 15m, now means 15 minutes ago to now. You can also do 10m\nIS ABOVE -1 Defines the type of threshold and the threshold value. You can click on  IS ABOVE to change the type of threshold")]),a._v(" "),t("p",[a._v("Tips:The query used in an alert rule cannot contain any template variables. Currently we only support AND and OR operators between conditions and they are executed serially.")]),a._v(" "),t("p",[a._v("For example, we have 3 conditions in the following order: condition:A(evaluates to: TRUE) OR condition:B(evaluates to: FALSE) AND condition:C(evaluates to: TRUE) so the result will be calculated as ((TRUE OR FALSE) AND TRUE) = TRUE.")]),a._v(" "),t("p",[a._v("More details can be found in the official documents:https://grafana.com/docs/grafana/latest/alerting/old-alerting/create-alerts/")]),a._v(" "),t("p",[a._v("7、Click the "),t("code",[a._v("Test rule")]),a._v(" button and the "),t("code",[a._v("firing: true")]),a._v(" appears, the configuration is successful, click the "),t("code",[a._v("save")]),a._v(" button")]),a._v(" "),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/alertpanel3.png?raw=true"}}),a._v(" "),t("p",[a._v("8、The following figure shows the alarm displayed in the grafana panel")]),a._v(" "),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/alertpanel4.png?raw=true"}}),a._v(" "),t("p",[a._v("9、View alert rules")]),a._v(" "),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/alertPanel5.png?raw=true"}}),a._v(" "),t("p",[a._v("10、View alert records in promehthus alertmanager")]),a._v(" "),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/alertpanel6.png?raw=true"}}),a._v(" "),t("h3",{attrs:{id:"more-details-about-grafana"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#more-details-about-grafana"}},[a._v("#")]),a._v(" More Details about Grafana")]),a._v(" "),t("p",[a._v("For more details about Grafana operation, please refer to the official Grafana documentation: http://docs.grafana.org/guides/getting_started/.")])])}),[],!1,null,null,null);t.default=s.exports}}]);