(window.webpackJsonp=window.webpackJsonp||[]).push([[472],{872:function(a,t,s){"use strict";s.r(t);var r=s(19),n=Object(r.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"iotdb-grafana"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#iotdb-grafana"}},[a._v("#")]),a._v(" IoTDB-Grafana")]),a._v(" "),t("h2",{attrs:{id:"outline"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#outline"}},[a._v("#")]),a._v(" Outline")]),a._v(" "),t("ul",[t("li",[a._v("IoTDB-Grafana\n"),t("ul",[t("li",[a._v("Grafana installation\n"),t("ul",[t("li",[a._v("Install Grafana")]),a._v(" "),t("li",[a._v("Install data source plugin")]),a._v(" "),t("li",[a._v("Start Grafana")])])]),a._v(" "),t("li",[a._v("IoTDB installation")]),a._v(" "),t("li",[a._v("IoTDB-Grafana installation\n"),t("ul",[t("li",[a._v("Start IoTDB-Grafana")])])]),a._v(" "),t("li",[a._v("Explore in Grafana\n"),t("ul",[t("li",[a._v("Add data source")]),a._v(" "),t("li",[a._v("Design in dashboard")])])])])])]),a._v(" "),t("h1",{attrs:{id:"iotdb-grafana-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#iotdb-grafana-2"}},[a._v("#")]),a._v(" IoTDB-Grafana")]),a._v(" "),t("p",[a._v("This project provides a connector which reads data from IoTDB and sends to Grafana(https://grafana.com/). Before you use this tool, make sure Grafana and IoTDB are correctly installed and started.")]),a._v(" "),t("h2",{attrs:{id:"grafana-installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#grafana-installation"}},[a._v("#")]),a._v(" Grafana installation")]),a._v(" "),t("h3",{attrs:{id:"install-grafana"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-grafana"}},[a._v("#")]),a._v(" Install Grafana")]),a._v(" "),t("ul",[t("li",[a._v("Download url: https://grafana.com/grafana/download")]),a._v(" "),t("li",[a._v("version >= 4.4.1")])]),a._v(" "),t("h3",{attrs:{id:"install-data-source-plugin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-data-source-plugin"}},[a._v("#")]),a._v(" Install data source plugin")]),a._v(" "),t("ul",[t("li",[a._v("plugin name: simple-json-datasource")]),a._v(" "),t("li",[a._v("Download url: https://github.com/grafana/simple-json-datasource")])]),a._v(" "),t("p",[a._v("After downloading this plugin, you can use the grafana-cli tool to install SimpleJson from the commandline:")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("grafana-cli plugins install grafana-simple-json-datasource\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("Alternatively, you can manually download the .zip file and unpack it into your grafana plugins directory.")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("{grafana-install-directory}\\data\\plugins\\")]),a._v(" (Windows)")]),a._v(" "),t("li",[t("code",[a._v("/var/lib/grafana/plugins")]),a._v(" (Linux)")]),a._v(" "),t("li",[t("code",[a._v("/usr/local/var/lib/grafana/plugins")]),a._v("(Mac)")])]),a._v(" "),t("h3",{attrs:{id:"start-grafana"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#start-grafana"}},[a._v("#")]),a._v(" Start Grafana")]),a._v(" "),t("p",[a._v("If you use Unix, Grafana will auto start after installing, or you can run "),t("code",[a._v("sudo service grafana-server start")]),a._v(" command. See more information "),t("a",{attrs:{href:"http://docs.grafana.org/installation/debian/",target:"_blank",rel:"noopener noreferrer"}},[a._v("here"),t("OutboundLink")],1),a._v(".")]),a._v(" "),t("p",[a._v("If you use Mac and "),t("code",[a._v("homebrew")]),a._v(" to install Grafana, you can use "),t("code",[a._v("homebrew")]),a._v(" to start Grafana.\nFirst make sure homebrew/services is installed by running "),t("code",[a._v("brew tap homebrew/services")]),a._v(", then start Grafana using: "),t("code",[a._v("brew services start grafana")]),a._v(".\nSee more information "),t("a",{attrs:{href:"http://docs.grafana.org/installation/mac/",target:"_blank",rel:"noopener noreferrer"}},[a._v("here"),t("OutboundLink")],1),a._v(".")]),a._v(" "),t("p",[a._v("If you use Windows, start Grafana by executing grafana-server.exe, located in the bin directory, preferably from the command line. See more information "),t("a",{attrs:{href:"http://docs.grafana.org/installation/windows/",target:"_blank",rel:"noopener noreferrer"}},[a._v("here"),t("OutboundLink")],1),a._v(".")]),a._v(" "),t("h2",{attrs:{id:"iotdb-installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#iotdb-installation"}},[a._v("#")]),a._v(" IoTDB installation")]),a._v(" "),t("p",[a._v("See https://github.com/apache/incubator-iotdb")]),a._v(" "),t("h2",{attrs:{id:"iotdb-grafana-installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#iotdb-grafana-installation"}},[a._v("#")]),a._v(" IoTDB-Grafana installation")]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/apache/incubator-iotdb.git\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"start-iotdb-grafana"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#start-iotdb-grafana"}},[a._v("#")]),a._v(" Start IoTDB-Grafana")]),a._v(" "),t("h4",{attrs:{id:"option-one"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#option-one"}},[a._v("#")]),a._v(" Option one")]),a._v(" "),t("p",[a._v("Import the entire project, after the maven dependency is installed, directly run"),t("code",[a._v("incubatoriotdb/grafana/rc/main/java/org/apache/iotdb/web/grafana")]),a._v("directory"),t("code",[a._v("TsfileWebDemoApplication.java")]),a._v(", this grafana connector is developed by springboot")]),a._v(" "),t("h4",{attrs:{id:"option-two"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#option-two"}},[a._v("#")]),a._v(" Option two")]),a._v(" "),t("p",[a._v("In "),t("code",[a._v("/grafana/target/")]),a._v("directory")]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" incubator-iotdb\nmvn clean package "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-pl")]),a._v(" grafana "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-am")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-Dmaven.test.skip")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("true\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" grafana/target\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("java")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-jar")]),a._v(" iotdb-grafana-"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("version"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(".war\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("p",[a._v("If you see the following output, iotdb-grafana connector is successfully activated.")]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("java")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-jar")]),a._v(" iotdb-grafana-"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("version"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(".war\n\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("   ____          _            __ _ _\n /"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" / ___"),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'_ __ _ _(_)_ __  __ _ \\ \\ \\ \\\n( ( )\\___ | '")]),a._v("_ "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'_| | '")]),a._v("_ "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("/ _` "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("/  ___"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("_"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("||")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("_"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n  '  "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("____"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" .__"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("_"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("_"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("_"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("_"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("__, "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" / / / /\n "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("_"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("___/"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/_/_/_/\n :: Spring Boot ::        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("v1.5.4.RELEASE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br")])]),t("p",[a._v("If you need to configure properties, move the "),t("code",[a._v("grafana/src/main/resources/application.properties")]),a._v(" to the same directory as the war package ("),t("code",[a._v("grafana/target")]),a._v(")")]),a._v(" "),t("h2",{attrs:{id:"explore-in-grafana"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#explore-in-grafana"}},[a._v("#")]),a._v(" Explore in Grafana")]),a._v(" "),t("p",[a._v("The default port of Grafana is 3000, see http://localhost:3000")]),a._v(" "),t("p",[a._v('Username and password are both "admin" by default.')]),a._v(" "),t("h3",{attrs:{id:"add-data-source"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add-data-source"}},[a._v("#")]),a._v(" Add data source")]),a._v(" "),t("p",[a._v("Select "),t("code",[a._v("Data Sources")]),a._v(" and  then "),t("code",[a._v("Add data source")]),a._v(", select "),t("code",[a._v("SimpleJson")]),a._v(" in "),t("code",[a._v("Type")]),a._v(" and "),t("code",[a._v("URL")]),a._v(" is http://localhost:8888\n"),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51664777-2766ae00-1ff5-11e9-9d2f-7489f8ccbfc2.png"}})]),a._v(" "),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51664842-554bf280-1ff5-11e9-97d2-54eebe0b2ca1.png"}}),a._v(" "),t("h3",{attrs:{id:"design-in-dashboard"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#design-in-dashboard"}},[a._v("#")]),a._v(" Design in dashboard")]),a._v(" "),t("p",[a._v("Add diagrams in dashboard and customize your query. See http://docs.grafana.org/guides/getting_started/")]),a._v(" "),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51664878-6e54a380-1ff5-11e9-9718-4d0e24627fa8.png"}}),a._v(" "),t("h2",{attrs:{id:"config-grafana"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#config-grafana"}},[a._v("#")]),a._v(" config grafana")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('# ip and port of IoTDB \nspring.datasource.url=jdbc:iotdb://127.0.0.1:6667/\nspring.datasource.username=root\nspring.datasource.password=root\nspring.datasource.driver-class-name=org.apache.iotdb.jdbc.IoTDBDriver\nserver.port=8888\n# Use this value to set timestamp precision as "ms", "us" or "ns", which must to be same with the timestamp\n# precision of Apache IoTDB engine.\ntimestamp_precision=ms\n\n# Use this value to set down sampling true/false\nisDownSampling=true\n# defaut sampling intervals\ninterval=1m\n# aggregation function to use to downsampling the data\n# COUNT, FIRST, LAST, MAX_TIME, MAX_VALUE, AVG, MIN_TIME, MIN_VALUE, NOW, SUM\nfunction=avg\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br")])]),t("p",[a._v("The specific configuration information of interval is as follows")]),a._v(" "),t("p",[a._v("<1h: no sampling")]),a._v(" "),t("p",[a._v("1h~1d : intervals = 1m")]),a._v(" "),t("p",[a._v("1d~30d:intervals = 1h")]),a._v(" "),t("p",[a._v(">30d：intervals = 1d")]),a._v(" "),t("p",[a._v("After configuration, please re-run war package")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("java -jar iotdb-grafana-{version}.war\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);