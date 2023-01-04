(window.webpackJsonp=window.webpackJsonp||[]).push([[350],{754:function(t,e,a){"use strict";a.r(e);var o=a(19),n=Object(o.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"mlogload-tool"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mlogload-tool"}},[t._v("#")]),t._v(" MLogLoad Tool")]),t._v(" "),e("h3",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),e("p",[t._v("The MLogLoad tool is used to load the metadata from "),e("code",[t._v("mlog.bin")]),t._v(" and tags and attributes from "),e("code",[t._v("tlog.txt")]),t._v(" into the running IoTDB.\nMetadata operation in "),e("code",[t._v("mlog.bin")]),t._v(" will be replayed.\nMetedata to be loaded that conflicts with metadata in the running IoTDB will be skipped.")]),t._v(" "),e("p",[t._v("If there is already metadata in the running IoTDB, to avoid replaying the delete operation to affect the existing metadata, it needs to be loaded using "),e("code",[t._v("mlog.bin")]),t._v(" and "),e("code",[t._v("tlog.txt")]),t._v(" obtained from the "),e("a",{attrs:{href:"https://iotdb.apache.org/UserGuide/V0.13.x/Maintenance-Tools/Export-Schema-Tool.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("export metadata operation"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"how-to-use"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use"}},[t._v("#")]),t._v(" How to Use")]),t._v(" "),e("p",[t._v("Linux/MacOS")]),t._v(" "),e("blockquote",[e("p",[t._v("./mLogLoad.sh -mlog /yourpath/mlog.bin -tlog /yourpath/tlog.txt -h 127.0.0.1 -p 6667 -u root -pw root")])]),t._v(" "),e("p",[t._v("Windows")]),t._v(" "),e("blockquote",[e("p",[t._v("./mLogLoad.bat -mlog /yourpath/mlog.bin -tlog /yourpath/tlog.txt -h 127.0.0.1 -p 6667 -u root -pw root")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("usage: MLogLoad -mlog <mlog file> [-tlog <tlog file>] [-h <receiver host>]\n       [-p <receiver port>] [-u <user>] [-pw <password>] [-help]\n -mlog <mlog file>    Need to specify a binary mlog.bin file to parse\n                      (required)\n -tlog <tlog file>    Could specify a binary tlog.txt file to parse. Tags\n                      and attributes will be ignored if not specified\n                      (optional)\n -h <receiver host>   Could specify a specify the receiver host, default\n                      is 127.0.0.1 (optional)\n -p <receiver port>   Could specify a specify the receiver port, default\n                      is 6667 (optional)\n -u <user>            Could specify the user name, default is root\n                      (optional)\n -pw <password>       Could specify the password, default is root\n                      (optional)\n -help,--help         Display help information\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br")])]),e("p",[t._v("Note: If tlog is not specified, the MLogLoad tool will ignore tags and attributes management.")]),t._v(" "),e("h3",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),e("p",[t._v("The purpose is to load the local metadata file "),e("code",[t._v("/yourpath/mlog.bin")]),t._v(" into IoTDB instance running on server 192.168.0.101:6667.")]),t._v(" "),e("p",[t._v("Enter to the directory where mLogLoad.sh is located and execute the following statement:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('./mLogLoad.sh -mlog "/yourpath/mlog.bin" -h 192.168.0.101 -p 6667 -u root -pw root\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("After waiting for the script execution to complete, you can check that the metadata in the IoTDB instance has been loaded correctly.")]),t._v(" "),e("h3",{attrs:{id:"q-a"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#q-a"}},[t._v("#")]),t._v(" Q&A")]),t._v(" "),e("ul",[e("li",[t._v("Cannot find or load the main class MLoadLoader\n"),e("ul",[e("li",[t._v("It may be because the environment variable $IOTDB_HOME is not set, please set the environment variable and try again")])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);