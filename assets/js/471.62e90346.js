(window.webpackJsonp=window.webpackJsonp||[]).push([[471],{931:function(e,s,a){"use strict";a.r(s);var n=a(49),t=Object(n.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),a("p",[e._v("Before started, maven should be installed. See "),a("a",{attrs:{href:"https://maven.apache.org/install.html"}},[e._v("How to install maven")])]),e._v(" "),a("p",[e._v("There are two ways to use TsFile in your own project.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Using as jars:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Compile the source codes and build to jars")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git clone https://github.com/apache/incubator-iotdb.git\ncd tsfile/\nsh package.sh\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("Then, all the jars can be get in folder named "),a("code",[e._v("lib/")]),e._v(". Import "),a("code",[e._v("lib/tsfile-0.8.2-jar-with-dependencies.jar")]),e._v(" to your project.")])])])]),e._v(" "),a("li",[a("p",[e._v("Using as a maven dependency:")]),e._v(" "),a("p",[e._v("Compile source codes and deploy to your local repository in three steps:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Get the source codes")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git clone https://github.com/apache/incubator-iotdb.git\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])])]),e._v(" "),a("li",[a("p",[e._v("Compile the source codes and deploy")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cd tsfile/\nmvn clean install -Dmaven.test.skip=true\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])])]),e._v(" "),a("li",[a("p",[e._v("add dependencies into your project:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" <dependency>\n   <groupId>org.apache.iotdb</groupId>\n   <artifactId>tsfile</artifactId>\n   <version>0.8.2</version>\n </dependency>\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])])])]),e._v(" "),a("p",[e._v("Or, you can download the dependencies from official Maven repository:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("First, find your maven "),a("code",[e._v("settings.xml")]),e._v(" on path: "),a("code",[e._v("${username}\\.m2\\settings.xml")]),e._v("\n, add this "),a("code",[e._v("<profile>")]),e._v(" to "),a("code",[e._v("<profiles>")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("  <profile>\n       <id>allow-snapshots</id>\n          <activation><activeByDefault>true</activeByDefault></activation>\n       <repositories>\n         <repository>  \n            <id>apache.snapshots</id>\n            <name>Apache Development Snapshot Repository</name>\n            <url>https://repository.apache.org/content/repositories/snapshots/</url>\n            <releases>\n                <enabled>false</enabled>\n            </releases>\n            <snapshots>\n                <enabled>true</enabled>\n            </snapshots>\n          </repository>\n       </repositories>\n     </profile>\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br")])])]),e._v(" "),a("li",[a("p",[e._v("Then add dependencies into your project:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" <dependency>\n   <groupId>org.apache.iotdb</groupId>\n   <artifactId>tsfile</artifactId>\n   <version>0.8.2</version>\n </dependency>\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])])])])])])])}),[],!1,null,null,null);s.default=t.exports}}]);