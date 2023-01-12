(window.webpackJsonp=window.webpackJsonp||[]).push([[768],{1169:function(t,s,e){"use strict";e.r(s);var a=e(19),l=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"命令行接口-cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#命令行接口-cli"}},[t._v("#")]),t._v(" 命令行接口(CLI)")]),t._v(" "),s("h2",{attrs:{id:"概览"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概览"}},[t._v("#")]),t._v(" 概览")]),t._v(" "),s("ul",[s("li",[t._v("Cli / Shell工具\n"),s("ul",[s("li",[t._v("Cli / Shell安装")]),t._v(" "),s("li",[t._v("Cli / Shell运行方式")]),t._v(" "),s("li",[t._v("Cli / Shell运行参数")]),t._v(" "),s("li",[t._v("Cli / Shell的-e参数")])])])]),t._v(" "),s("p",[t._v("IOTDB为用户提供cli/Shell工具用于启动客户端和服务端程序。下面介绍每个cli/Shell工具的运行方式和相关参数。")]),t._v(" "),s("blockquote",[s("p",[t._v("$IOTDB_HOME表示IoTDB的安装目录所在路径。")])]),t._v(" "),s("h2",{attrs:{id:"cli-shell安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cli-shell安装"}},[t._v("#")]),t._v(" Cli / Shell安装")]),t._v(" "),s("p",[t._v("在incubator-iotdb的根目录下执行")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("> mvn clean package -pl cli -am -DskipTests\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v('在生成完毕之后，IoTDB的cli工具位于文件夹"cli/target/iotdb-cli-{project.version}"中。')]),t._v(" "),s("h2",{attrs:{id:"cli-shell运行方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cli-shell运行方式"}},[t._v("#")]),t._v(" Cli  / Shell运行方式")]),t._v(" "),s("p",[t._v("安装后的IoTDB中有一个默认用户："),s("code",[t._v("root")]),t._v("，默认密码为"),s("code",[t._v("root")]),t._v("。用户可以使用该用户尝试运行IoTDB客户端以测试服务器是否正常启动。客户端启动脚本为$IOTDB_HOME/bin文件夹下的"),s("code",[t._v("start-cli")]),t._v("脚本。启动脚本时需要指定运行IP和PORT。以下为服务器在本机启动，且用户未更改运行端口号的示例，默认端口为6667。若用户尝试连接远程服务器或更改了服务器运行的端口号，请在-h和-p项处使用服务器的IP和PORT。"),s("br"),t._v('\n用户也可以在启动脚本的最前方设置自己的环境变量，如JAVA_HOME等 (对于linux用户，脚本路径为："/sbin/start-cli.sh"； 对于windows用户，脚本路径为："/sbin/start-cli.bat")')]),t._v(" "),s("p",[t._v("Linux系统与MacOS系统启动命令如下：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  Shell > sbin/start-cli.sh -h 127.0.0.1 -p 6667 -u root -pw root\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("Windows系统启动命令如下：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  Shell > sbin\\start-cli.bat -h 127.0.0.1 -p 6667 -u root -pw root\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("回车后即可成功启动客户端。启动后出现如图提示即为启动成功。")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(" _____       _________  ______   ______\n|_   _|     |  _   _  ||_   _ `.|_   _ \\\n  | |   .--.|_/ | | \\_|  | | `. \\ | |_) |\n  | | / .'`\\ \\  | |      | |  | | |  __'.\n _| |_| \\__. | _| |_    _| |_.' /_| |__) |\n|_____|'.__.' |_____|  |______.'|_______/  version <version>\n\n\nIoTDB> login successfully\nIoTDB>\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("p",[t._v("输入"),s("code",[t._v("quit")]),t._v("或"),s("code",[t._v("exit")]),t._v("可退出cli结束本次会话，cli输出"),s("code",[t._v("quit normally")]),t._v("表示退出成功。")]),t._v(" "),s("h2",{attrs:{id:"cli-shell运行参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cli-shell运行参数"}},[t._v("#")]),t._v(" Cli / Shell运行参数")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("参数名")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("参数类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("是否为必需参数")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("例子")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("-disableIS08601")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("没有参数")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("否")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("如果设置了这个参数，IoTDB将以数字的形式打印时间戳(timestamp)。")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-disableIS08601")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("-h <"),s("code",[t._v("host")]),t._v(">")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("string类型，不需要引号")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("是")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("IoTDB客户端连接IoTDB服务器的IP地址。")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-h 10.129.187.21")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("-help")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("没有参数")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("否")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("打印IoTDB的帮助信息")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-help")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("-p <"),s("code",[t._v("port")]),t._v(">")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("int类型")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("是")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("IoTDB连接服务器的端口号，IoTDB默认运行在6667端口。")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-p 6667")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("-pw <"),s("code",[t._v("password")]),t._v(">")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("string类型，不需要引号")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("否")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("IoTDB连接服务器所使用的密码。如果没有输入密码IoTDB会在Cli端提示输入密码。")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-pw root")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("-u <"),s("code",[t._v("username")]),t._v(">")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("string类型，不需要引号")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("是")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("IoTDB连接服务器锁使用的用户名。")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-u root")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("-maxPRC <"),s("code",[t._v("maxPrintRowCount")]),t._v(">")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("int类型")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("否")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("设置IoTDB返回客户端命令行中所显示的最大行数。")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-maxPRC 10")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("-e <"),s("code",[t._v("execute")]),t._v(">")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("string类型")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("否")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("在不进入客户端输入模式的情况下，批量操作IoTDB")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v('-e "show storage group"')])])])]),t._v(" "),s("p",[t._v("下面展示一条客户端命令，功能是连接IP为10.129.187.21的主机，端口为6667 ，用户名为root，密码为root，以数字的形式打印时间戳，IoTDB命令行显示的最大行数为10。")]),t._v(" "),s("p",[t._v("Linux系统与MacOS系统启动命令如下：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  Shell > sbin/start-cli.sh -h 10.129.187.21 -p 6667 -u root -pw root -disableIS08601 -maxPRC 10\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("Windows系统启动命令如下：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  Shell > sbin\\start-cli.bat -h 10.129.187.21 -p 6667 -u root -pw root -disableIS08601 -maxPRC 10\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"使用openid作为用户名认证登录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用openid作为用户名认证登录"}},[t._v("#")]),t._v(" 使用OpenID作为用户名认证登录")]),t._v(" "),s("p",[t._v("若对应的IoTDB服务器开启了使用OpenID Connect (OIDC)作为权限认证服务，那么就不再需要使用用户名密码进行登录。\n替而代之的是使用Token，以及空密码。\n此时，登录命令如下：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('  Shell > sbin/start-cli.sh -h 10.129.187.21 -p 6667 -u {my-access-token} -pw ""\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("其中，需要将{my-access-token} （注意，包括{}）替换成你的token。")]),t._v(" "),s("p",[t._v("如何获取token取决于你的OIDC设置。 最简单的一种情况是使用"),s("code",[t._v("password-grant")]),t._v("。例如，假设你在用keycloack作为你的OIDC服务，\n并且你在keycloack中有一个被定义成publich的"),s("code",[t._v("iotdb")]),t._v("客户的realm，那么你可以使用如下"),s("code",[t._v("curl")]),t._v("命令获得token。\n（注意例子中的{}和里面的内容需要替换成具体的服务器地址和realm名字）：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('curl -X POST "https://{your-keycloack-server}/auth/realms/{your-realm}/protocol/openid-connect/token" \\                                                                                                                       ✔  1613  11:09:38\n -H "Content-Type: application/x-www-form-urlencoded" \\\n -d "username={username}" \\\n -d "password={password}" \\\n -d \'grant_type=password\' \\\n -d "client_id=iotdb"\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[t._v("示例结果如下：")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"access_token"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJxMS1XbTBvelE1TzBtUUg4LVNKYXAyWmNONE1tdWNXd25RV0tZeFpKNG93In0.eyJleHAiOjE1OTAzOTgwNzEsImlhdCI6MTU5MDM5Nzc3MSwianRpIjoiNjA0ZmYxMDctN2NiNy00NTRmLWIwYmQtY2M2ZDQwMjFiNGU4IiwiaXNzIjoiaHR0cDovL2F1dGguZGVtby5wcmFnbWF0aWNpbmR1c3RyaWVzLmRlL2F1dGgvcmVhbG1zL0lvVERCIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6ImJhMzJlNDcxLWM3NzItNGIzMy04ZGE2LTZmZThhY2RhMDA3MyIsInR5cCI6IkJlYXJlciIsImF6cCI6ImlvdGRiIiwic2Vzc2lvbl9zdGF0ZSI6IjA2MGQyODYyLTE0ZWQtNDJmZS1iYWY3LThkMWY3ODQ2NTdmMSIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsibG9jYWxob3N0OjgwODAiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iLCJpb3RkYl9hZG1pbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoiZW1haWwgcHJvZmlsZSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ1c2VyIn0.nwbrJkWdCNjzFrTDwKNuV5h9dDMg5ytRKGOXmFIajpfsbOutJytjWTCB2WpA8E1YI3KM6gU6Jx7cd7u0oPo5syHhfCz119n_wBiDnyTZkFOAPsx0M2z20kvBLN9k36_VfuCMFUeddJjO31MeLTmxB0UKg2VkxdczmzMH3pnalhxqpnWWk3GnrRrhAf2sZog0foH4Ae3Ks0lYtYzaWK_Yo7E4Px42-gJpohy3JevOC44aJ4auzJR1RBj9LUbgcRinkBy0JLi6XXiYznSC2V485CSBHW3sseXn7pSXQADhnmGQrLfFGO5ZljmPO18eFJaimdjvgSChsrlSEmTDDsoo5Q"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"expires_in"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"refresh_expires_in"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1800")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"refresh_token"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJhMzZlMGU0NC02MWNmLTQ5NmMtOGRlZi03NTkwNjQ5MzQzMjEifQ.eyJleHAiOjE1OTAzOTk1NzEsImlhdCI6MTU5MDM5Nzc3MSwianRpIjoiNmMxNTBiY2EtYmE5NC00NTgxLWEwODEtYjI2YzhhMmI5YmZmIiwiaXNzIjoiaHR0cDovL2F1dGguZGVtby5wcmFnbWF0aWNpbmR1c3RyaWVzLmRlL2F1dGgvcmVhbG1zL0lvVERCIiwiYXVkIjoiaHR0cDovL2F1dGguZGVtby5wcmFnbWF0aWNpbmR1c3RyaWVzLmRlL2F1dGgvcmVhbG1zL0lvVERCIiwic3ViIjoiYmEzMmU0NzEtYzc3Mi00YjMzLThkYTYtNmZlOGFjZGEwMDczIiwidHlwIjoiUmVmcmVzaCIsImF6cCI6ImlvdGRiIiwic2Vzc2lvbl9zdGF0ZSI6IjA2MGQyODYyLTE0ZWQtNDJmZS1iYWY3LThkMWY3ODQ2NTdmMSIsInNjb3BlIjoiZW1haWwgcHJvZmlsZSJ9.ayNpXdNX28qahodX1zowrMGiUCw2AodlHBQFqr8Ui7c"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"token_type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bearer"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"not-before-policy"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"session_state"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"060d2862-14ed-42fe-baf7-8d1f784657f1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scope"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"email profile"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"cli-shell的-e参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cli-shell的-e参数"}},[t._v("#")]),t._v(" Cli / Shell的-e参数")]),t._v(" "),s("p",[t._v("当您想要通过脚本的方式通过Cli / Shell对IoTDB进行批量操作时，可以使用-e参数。通过使用该参数，您可以在不进入客户端输入模式的情况下操作IoTDB。")]),t._v(" "),s("p",[t._v("为了避免SQL语句和其他参数混淆，现在只支持-e参数作为最后的参数使用。")]),t._v(" "),s("p",[t._v("针对cli/Shell工具的-e参数用法如下：")]),t._v(" "),s("p",[t._v("Linux系统与MacOS指令:")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  Shell > sbin/start-cli.sh -h {host} -p {port} -u {user} -pw {password} -e {sql for iotdb}\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("Windows系统指令")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  Shell > sbin\\start-cli.bat -h {host} -p {port} -u {user} -pw {password} -e {sql for iotdb}\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("在Windows环境下，-e参数的SQL语句需要使用"),s("code",[t._v("``")]),t._v("对于"),s("code",[t._v('" "')]),t._v("进行替换")]),t._v(" "),s("p",[t._v("为了更好的解释-e参数的使用，可以参考下面在Linux上执行的例子。")]),t._v(" "),s("p",[t._v("假设用户希望对一个新启动的IoTDB进行如下操作：")]),t._v(" "),s("p",[t._v("1.创建名为root.demo的存储组")]),t._v(" "),s("p",[t._v("2.创建名为root.demo.s1的时间序列")]),t._v(" "),s("p",[t._v("3.向创建的时间序列中插入三个数据点")]),t._v(" "),s("p",[t._v("4.查询验证数据是否插入成功")]),t._v(" "),s("p",[t._v("那么通过使用cli/Shell工具的-e参数，可以采用如下的脚本：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('# !/bin/bash\n\nhost=127.0.0.1\nport=6667\nuser=root\npass=root\n\n./sbin/start-cli.sh -h ${host} -p ${port} -u ${user} -pw ${pass} -e "set storage group to root.demo"\n./sbin/start-cli.sh -h ${host} -p ${port} -u ${user} -pw ${pass} -e "create timeseries root.demo.s1 WITH DATATYPE=INT32, ENCODING=RLE"\n./sbin/start-cli.sh -h ${host} -p ${port} -u ${user} -pw ${pass} -e "insert into root.demo(timestamp,s1) values(1,10)"\n./sbin/start-cli.sh -h ${host} -p ${port} -u ${user} -pw ${pass} -e "insert into root.demo(timestamp,s1) values(2,11)"\n./sbin/start-cli.sh -h ${host} -p ${port} -u ${user} -pw ${pass} -e "insert into root.demo(timestamp,s1) values(3,12)"\n./sbin/start-cli.sh -h ${host} -p ${port} -u ${user} -pw ${pass} -e "select s1 from root.demo"\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br")])]),s("p",[t._v("打印出来的结果显示在下图，通过这种方式进行的操作与客户端的输入模式以及通过JDBC进行操作结果是一致的。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://issues.apache.org/jira/secure/attachment/12976042/12976042_image-2019-07-27-15-47-12-045.png",alt:"img"}})]),t._v(" "),s("p",[t._v("需要特别注意的是，在脚本中使用-e参数时要对特殊字符进行转义。")])])}),[],!1,null,null,null);s.default=l.exports}}]);