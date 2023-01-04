(window.webpackJsonp=window.webpackJsonp||[]).push([[683],{1087:function(e,t,a){"use strict";a.r(t);var o=a(19),r=Object(o.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"系统日志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#系统日志"}},[e._v("#")]),e._v(" 系统日志")]),e._v(" "),t("p",[e._v("IoTDB 支持用户通过修改日志配置文件的方式对 IoTDB 系统日志（如日志输出级别等）进行配置，系统日志配置文件默认位置在$IOTDB_HOME/conf 文件夹下。")]),e._v(" "),t("p",[e._v("默认的日志配置文件名为 logback.xml。用户可以通过增加或更改其中的 xml 树型节点参数对系统运行日志的相关配置进行修改。需要注意的是，使用日志配置文件配置系统日志并不会在修改后立即生效，而是在重启系统后生效。详细配置说明参看本文日志文件配置说明。")]),e._v(" "),t("p",[e._v("同时，为了方便在系统运行过程中运维人员对系统的调试，我们为系统运维人员提供了动态修改日志配置的 JMX 接口，能够在系统不重启的前提下实时对系统的 Log 模块进行配置。详细使用方法参看动态系统日志配置说明）。")]),e._v(" "),t("h3",{attrs:{id:"动态系统日志配置说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#动态系统日志配置说明"}},[e._v("#")]),e._v(" 动态系统日志配置说明")]),e._v(" "),t("h4",{attrs:{id:"连接-jmx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#连接-jmx"}},[e._v("#")]),e._v(" 连接 JMX")]),e._v(" "),t("p",[e._v("本节以 Jconsole 为例介绍连接 JMX 并进入动态系统日志配置模块的方法。启动 Jconsole 控制页面，在新建连接处建立与 IoTDB Server 的 JMX 连接（可以选择本地进程或给定 IoTDB 的 IP 及 PORT 进行远程连接，IoTDB 的 JMX 服务默认运行端口为 31999），如下图使用远程进程连接 Localhost 下运行在 31999 端口的 IoTDB JMX 服务。")]),e._v(" "),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51577195-f94d7500-1ef3-11e9-999a-b4f67055d80e.png"}}),e._v(" "),t("p",[e._v("连接到 JMX 后，您可以通过 MBean 选项卡找到名为"),t("code",[e._v("ch.qos.logback.classic")]),e._v("的"),t("code",[e._v("MBean")]),e._v("，如下图所示。")]),e._v(" "),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51577204-fe122900-1ef3-11e9-9e89-2eb1d46e24b8.png"}}),e._v(" "),t("p",[e._v("在"),t("code",[e._v("ch.qos.logback.classic")]),e._v("的 MBean 操作（Operations）选项中，可以看到当前动态系统日志配置支持的 6 种接口，您可以通过使用相应的方法，来执行相应的操作，操作页面如图。")]),e._v(" "),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51577216-09fdeb00-1ef4-11e9-9005-542ad7d9e9e0.png"}}),e._v(" "),t("h4",{attrs:{id:"动态系统日志接口说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#动态系统日志接口说明"}},[e._v("#")]),e._v(" 动态系统日志接口说明")]),e._v(" "),t("ul",[t("li",[e._v("reloadDefaultConfiguration 接口")])]),e._v(" "),t("p",[e._v("该方法为重新加载默认的 logback 配置文件，用户可以先对默认的配置文件进行修改，然后调用该方法将修改后的配置文件重新加载到系统中，使其生效。")]),e._v(" "),t("ul",[t("li",[e._v("reloadByFileName 接口")])]),e._v(" "),t("p",[e._v("该方法为加载一个指定路径的 logback 配置文件，并使其生效。该方法接受一个名为 p1 的 String 类型的参数，该参数为需要指定加载的配置文件路径。")]),e._v(" "),t("ul",[t("li",[e._v("getLoggerEffectiveLevel 接口")])]),e._v(" "),t("p",[e._v("该方法为获取指定 Logger 当前生效的日志级别。该方法接受一个名为 p1 的 String 类型的参数，该参数为指定 Logger 的名称。该方法返回指定 Logger 当前生效的日志级别。")]),e._v(" "),t("ul",[t("li",[e._v("getLoggerLevel 接口")])]),e._v(" "),t("p",[e._v("该方法为获取指定 Logger 的日志级别。该方法接受一个名为 p1 的 String 类型的参数，该参数为指定 Logger 的名称。该方法返回指定 Logger 的日志级别。")]),e._v(" "),t("p",[e._v("需要注意的是，该方法与"),t("code",[e._v("getLoggerEffectiveLevel")]),e._v("方法的区别在于，该方法返回的是指定 Logger 在配置文件中被设定的日志级别，如果用户没有对该 Logger 进行日志级别的设定，则返回空。按照 Logback 的日志级别继承机制，如果一个 Logger 没有被显示地设定日志级别，其将会从其最近的祖先继承日志级别的设定。这时，调用"),t("code",[e._v("getLoggerEffectiveLevel")]),e._v("方法将返回该 Logger 生效的日志级别；而调用本节所述方法，将返回空。")]),e._v(" "),t("ul",[t("li",[e._v("setLoggerLevel 接口")])]),e._v(" "),t("p",[e._v("该方法为设置指定 Logger 的日志级别。该方法接受一个名为 p1 的 String 类型的参数和一个名为 p2 的 String 类型的参数，分别指定 Logger 的名称和目标的日志等级。")])])}),[],!1,null,null,null);t.default=r.exports}}]);