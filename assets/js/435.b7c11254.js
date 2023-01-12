(window.webpackJsonp=window.webpackJsonp||[]).push([[435],{836:function(e,s,a){"use strict";a.r(s);var n=a(19),t=Object(n.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),s("p",[e._v("Before started, maven should be installed. See "),s("a",{attrs:{href:"https://maven.apache.org/install.html"}},[e._v("How to install maven")])]),e._v(" "),s("p",[e._v("There are two ways to use TsFile in your own project.")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Using as jars:")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Compile the source codes and build to jars")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("git clone https://github.com/apache/incubator-iotdb.git\ncd tsfile/\nsh package.sh\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("Then, all the jars can be get in folder named "),s("code",[e._v("lib/")]),e._v(". Import "),s("code",[e._v("lib/tsfile-0.8.2-jar-with-dependencies.jar")]),e._v(" to your project.")])])])]),e._v(" "),s("li",[s("p",[e._v("Using as a maven dependency:")]),e._v(" "),s("p",[e._v("Compile source codes and deploy to your local repository in three steps:")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Get the source codes")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("git clone https://github.com/apache/incubator-iotdb.git\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])])]),e._v(" "),s("li",[s("p",[e._v("Compile the source codes and deploy")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("cd tsfile/\nmvn clean install -Dmaven.test.skip=true\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])])]),e._v(" "),s("li",[s("p",[e._v("add dependencies into your project:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(" <dependency>\n   <groupId>org.apache.iotdb</groupId>\n   <artifactId>tsfile</artifactId>\n   <version>0.8.2</version>\n </dependency>\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])])])]),e._v(" "),s("p",[e._v("Or, you can download the dependencies from official Maven repository:")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("First, find your maven "),s("code",[e._v("settings.xml")]),e._v(" on path: "),s("code",[e._v("${username}\\.m2\\settings.xml")]),e._v("\n, add this "),s("code",[e._v("<profile>")]),e._v(" to "),s("code",[e._v("<profiles>")]),e._v(":")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("  <profile>\n       <id>allow-snapshots</id>\n          <activation><activeByDefault>true</activeByDefault></activation>\n       <repositories>\n         <repository>  \n            <id>apache.snapshots</id>\n            <name>Apache Development Snapshot Repository</name>\n            <url>https://repository.apache.org/content/repositories/snapshots/</url>\n            <releases>\n                <enabled>false</enabled>\n            </releases>\n            <snapshots>\n                <enabled>true</enabled>\n            </snapshots>\n          </repository>\n       </repositories>\n     </profile>\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br")])])]),e._v(" "),s("li",[s("p",[e._v("Then add dependencies into your project:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(" <dependency>\n   <groupId>org.apache.iotdb</groupId>\n   <artifactId>tsfile</artifactId>\n   <version>0.8.2</version>\n </dependency>\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])])])])])])])}),[],!1,null,null,null);s.default=t.exports}}]);