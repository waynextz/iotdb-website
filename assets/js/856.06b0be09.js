(window.webpackJsonp=window.webpackJsonp||[]).push([[856],{1260:function(s,a,e){"use strict";e.r(a);var t=e(19),n=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"python-原生接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python-原生接口"}},[s._v("#")]),s._v(" Python 原生接口")]),s._v(" "),a("h3",{attrs:{id:"依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#依赖"}},[s._v("#")]),s._v(" 依赖")]),s._v(" "),a("p",[s._v("首选python3.7或更高版本。")]),s._v(" "),a("p",[s._v("您必须安装Thrift（0.11.0或更高版本）才能将我们的Thrift文件编译为python代码。")]),s._v(" "),a("p",[s._v("下面是官方安装教程：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("http://thrift.apache.org/docs/install/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"安装方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装方法"}},[s._v("#")]),s._v(" 安装方法")]),s._v(" "),a("ul",[a("li",[s._v("方案1: pip install")])]),s._v(" "),a("p",[s._v("您可以在https://pypi.org/project/apache-iotdb/上找到Apache IoTDB Python客户端API软件包。")]),s._v(" "),a("p",[s._v("下载命令为：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("pip install apache-iotdb\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("方案2：thrift的基本用法")])]),s._v(" "),a("p",[s._v("或者，如果您了解thrift的基本用法，则可以在以下位置查看thrift源文件：\n"),a("code",[s._v("thrift\\src\\main\\thrift\\rpc.thrift")]),s._v("，使用"),a("code",[s._v("thrift -gen py -out ./target/iotdb rpc.thrift")]),s._v("生成Python库。")]),s._v(" "),a("h3",{attrs:{id:"示例代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码"}},[s._v("#")]),s._v(" 示例代码")]),s._v(" "),a("p",[s._v("我们在"),a("code",[s._v("client-py/src/SessionExample.py")]),s._v("中提供了一个示例，说明如何使用Thrift库连接到IoTDB，请先仔细阅读，然后再编写自己的代码。")]),s._v(" "),a("h2",{attrs:{id:"c-原生接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#c-原生接口"}},[s._v("#")]),s._v(" C++ 原生接口")]),s._v(" "),a("h3",{attrs:{id:"依赖-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#依赖-2"}},[s._v("#")]),s._v(" 依赖")]),s._v(" "),a("ul",[a("li",[s._v("Java 8+")]),s._v(" "),a("li",[s._v("Maven 3.5+")]),s._v(" "),a("li",[s._v("Flex")]),s._v(" "),a("li",[s._v("Bison 2.7+")]),s._v(" "),a("li",[s._v("Boost 1.56+")]),s._v(" "),a("li",[s._v("OpenSSL 1.0+")]),s._v(" "),a("li",[s._v("GCC 5.5.0+")])]),s._v(" "),a("h3",{attrs:{id:"安装方法-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装方法-2"}},[s._v("#")]),s._v(" 安装方法")]),s._v(" "),a("p",[s._v("编译C++客户端之前首先需要本地编译Thrift库，compile-tools模块负责编译Thrift，之后再编译client-cpp。")]),s._v(" "),a("h4",{attrs:{id:"在mac上编译thrift"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在mac上编译thrift"}},[s._v("#")]),s._v(" 在Mac上编译Thrift")]),s._v(" "),a("ul",[a("li",[s._v("Bison")])]),s._v(" "),a("p",[s._v("Mac 环境下预安装了Bison 2.3版本，但该版本过低不能够用来编译Thrift。使用Bison 2.3版本是会报以下错误：")]),s._v(" "),a("p",[a("code",[s._v("invalid directive: '%code'")])]),s._v(" "),a("p",[s._v("使用下面brew 命令更新bison版本")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("brew install bison     \nbrew link bison --force        \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("添加环境变量：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("echo 'export PATH=\"/usr/local/opt/bison/bin:$PATH\"' >> ~/.bash_profile     \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("Boost")])]),s._v(" "),a("p",[s._v("确保安装较新的Boost版本：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("brew install boost\nbrew link boost\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("OpenSSL")])]),s._v(" "),a("p",[s._v('确保openssl库已安装，默认的openssl头文件路径为"/usr/local/opt/openssl/include"\n如果在编译Thrift过程中出现找不到openssl的错误，尝试添加')]),s._v(" "),a("p",[a("code",[s._v('-Dopenssl.include.dir=""')])]),s._v(" "),a("h4",{attrs:{id:"在linux上编译thrift"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在linux上编译thrift"}},[s._v("#")]),s._v(" 在Linux上编译Thrift")]),s._v(" "),a("p",[s._v("Linux下需要确保g++已被安装。")]),s._v(" "),a("p",[s._v("Ubuntu 20:")]),s._v(" "),a("p",[s._v("一条命令安装所有依赖库：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sudo apt-get install gcc-9 g++-9 libstdc++-9-dev bison flex libboost-all-dev libssl-dev zlib1g-dev\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("CentOS 7.x:")]),s._v(" "),a("p",[s._v("在centos 7.x里，可用yum命令安装部分依赖。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sudo yum install bison flex openssl-devel\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("使用yum安装的GCC、boost版本过低，在编译时会报错，需自行安装或升级。")]),s._v(" "),a("h4",{attrs:{id:"在windows上编译thrift"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在windows上编译thrift"}},[s._v("#")]),s._v(" 在Windows上编译Thrift")]),s._v(" "),a("p",[s._v("保证你的Windows系统已经搭建好了完整的C/C++的编译构建环境。可以是MSVC，MinGW等。")]),s._v(" "),a("p",[s._v("如使用MS Visual Studio，在安装时需要勾选 Visual Studio C/C++ IDE and compiler(supporting CMake, Clang, MinGW)。")]),s._v(" "),a("ul",[a("li",[s._v("Flex 和 Bison")])]),s._v(" "),a("p",[s._v("Windows版的 Flex 和 Bison 可以从 SourceForge下载: https://sourceforge.net/projects/winflexbison/")]),s._v(" "),a("p",[s._v("下载后需要将可执行文件重命名为flex.exe和bison.exe以保证编译时能够被找到，添加可执行文件的目录到PATH环境变量中。")]),s._v(" "),a("ul",[a("li",[s._v("Boost")])]),s._v(" "),a("p",[s._v("Boost官网下载新版本Boost: https://www.boost.org/users/download/")]),s._v(" "),a("p",[s._v("依次执行bootstrap.bat 和 b2.exe，本地编译boost")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("bootstrap.bat\n.\\b2.exe\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("为了帮助CMake本地安装好的Boost，在编译client-cpp的mvn命令中需添加：")]),s._v(" "),a("p",[a("code",[s._v("-Dboost.include.dir=${your boost header folder} -Dboost.library.dir=${your boost lib (stage) folder}")])]),s._v(" "),a("h4",{attrs:{id:"cmake-生成器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cmake-生成器"}},[s._v("#")]),s._v(" CMake 生成器")]),s._v(" "),a("p",[s._v("CMake需要根据不同编译平台使用不同的生成器。CMake支持的生成器列表如下("),a("code",[s._v("cmake --help")]),s._v("的结果)：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('  Visual Studio 16 2019        = Generates Visual Studio 2019 project files.\n                                 Use -A option to specify architecture.\n  Visual Studio 15 2017 [arch] = Generates Visual Studio 2017 project files.\n                                 Optional [arch] can be "Win64" or "ARM".\n  Visual Studio 14 2015 [arch] = Generates Visual Studio 2015 project files.\n                                 Optional [arch] can be "Win64" or "ARM".\n  Visual Studio 12 2013 [arch] = Generates Visual Studio 2013 project files.\n                                 Optional [arch] can be "Win64" or "ARM".\n  Visual Studio 11 2012 [arch] = Generates Visual Studio 2012 project files.\n                                 Optional [arch] can be "Win64" or "ARM".\n  Visual Studio 10 2010 [arch] = Generates Visual Studio 2010 project files.\n                                 Optional [arch] can be "Win64" or "IA64".\n  Visual Studio 9 2008 [arch]  = Generates Visual Studio 2008 project files.\n                                 Optional [arch] can be "Win64" or "IA64".\n  Borland Makefiles            = Generates Borland makefiles.\n* NMake Makefiles              = Generates NMake makefiles.\n  NMake Makefiles JOM          = Generates JOM makefiles.\n  MSYS Makefiles               = Generates MSYS makefiles.\n  MinGW Makefiles              = Generates a make file for use with\n                                 mingw32-make.\n  Unix Makefiles               = Generates standard UNIX makefiles.\n  Green Hills MULTI            = Generates Green Hills MULTI files\n                                 (experimental, work-in-progress).\n  Ninja                        = Generates build.ninja files.\n  Ninja Multi-Config           = Generates build-<Config>.ninja files.\n  Watcom WMake                 = Generates Watcom WMake makefiles.\n  CodeBlocks - MinGW Makefiles = Generates CodeBlocks project files.\n  CodeBlocks - NMake Makefiles = Generates CodeBlocks project files.\n  CodeBlocks - NMake Makefiles = Generates CodeBlocks project fi\n\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br")])]),a("p",[s._v('编译client-cpp 时的mvn命令中添加 -Dcmake.generator="" 选项来指定使用的生成器名称。\n'),a("code",[s._v('mvn package -Dcmake.generator="Visual Studio 15 2017 [arch]"')])]),s._v(" "),a("h4",{attrs:{id:"编译c-客户端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译c-客户端"}},[s._v("#")]),s._v(" 编译C++ 客户端")]),s._v(" "),a("p",[s._v('Maven 命令中添加"-P client-cpp" 选项编译client-cpp模块。client-cpp需要依赖编译好的thrift，即compile-tools模块。')]),s._v(" "),a("h4",{attrs:{id:"编译及测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译及测试"}},[s._v("#")]),s._v(" 编译及测试")]),s._v(" "),a("p",[s._v("完整的C++客户端命令如下：")]),s._v(" "),a("p",[a("code",[s._v("mvn package -P compile-cpp -pl example/client-cpp-example -am -DskipTest")])]),s._v(" "),a("p",[s._v("注意在Windows下需提前安装好Boost，并添加以下Maven 编译选项:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("-Dboost.include.dir=${your boost header folder} -Dboost.library.dir=${your boost lib (stage) folder}` \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("例如：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('mvn package -P compile-cpp -pl client-cpp,server,example/client-cpp-example -am \n-D"boost.include.dir"="D:\\boost_1_75_0" -D"boost.library.dir"="D:\\boost_1_75_0\\stage\\lib" -DskipTests\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v('编译成功后，打包好的.zip文件将位于："client-cpp/target/client-cpp-${project.version}-cpp-${os}.zip"')]),s._v(" "),a("p",[s._v("解压后的目录结构如下图所示(Mac)：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(".\n+-- client\n|   +-- include\n|       +-- Session.h\n|       +-- TSIService.h\n|       +-- rpc_types.h\n|       +-- rpc_constants.h\n|       +-- thrift\n|           +-- thrift_headers...\n|   +-- lib\n|       +-- libiotdb_session.dylib\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h3",{attrs:{id:"q-a"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q-a"}},[s._v("#")]),s._v(" Q&A")]),s._v(" "),a("h4",{attrs:{id:"mac相关问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mac相关问题"}},[s._v("#")]),s._v(" Mac相关问题")]),s._v(" "),a("p",[s._v("本地Maven编译Thrift时如出现以下链接的问题，可以尝试将xcode-commandline版本从12降低到11.5")]),s._v(" "),a("p",[s._v("https://stackoverflow.com/questions/63592445/ld-unsupported-tapi-file-type-tapi-tbd-in-yaml-file/65518087#65518087")]),s._v(" "),a("h4",{attrs:{id:"windows相关问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows相关问题"}},[s._v("#")]),s._v(" Windows相关问题")]),s._v(" "),a("p",[s._v("Maven编译Thrift时需要使用wget下载远端文件，可能出现以下报错：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Failed to delete cached file C:\\Users\\Administrator\\.m2\\repository\\.cache\\download-maven-plugin\\index.ser\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("解决方法:")]),s._v(" "),a("ul",[a("li",[s._v('尝试删除 ".m2\\repository\\.cache" 目录并重试。')]),s._v(" "),a("li",[s._v('在添加 pom文件对应的 download-maven-plugin 中添加 "<skipCache>true</skipCache>"')])]),s._v(" "),a("h2",{attrs:{id:"go-原生接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#go-原生接口"}},[s._v("#")]),s._v(" Go 原生接口")]),s._v(" "),a("h3",{attrs:{id:"依赖-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#依赖-3"}},[s._v("#")]),s._v(" 依赖")]),s._v(" "),a("ul",[a("li",[s._v("golang >= 1.13")]),s._v(" "),a("li",[s._v("make   >= 3.0")]),s._v(" "),a("li",[s._v("curl   >= 7.1.1")]),s._v(" "),a("li",[s._v("thrift 0.13.x")]),s._v(" "),a("li",[s._v("Linux、Macos或其他类unix系统")]),s._v(" "),a("li",[s._v("Windows+bash(WSL、cygwin、Git Bash)")])]),s._v(" "),a("h3",{attrs:{id:"安装方法-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装方法-3"}},[s._v("#")]),s._v(" 安装方法")]),s._v(" "),a("ul",[a("li",[s._v("通过go mod")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GO111MODULE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("on\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOPROXY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://goproxy.io\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" session_example "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" session_example\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" session_example.go "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-L")]),s._v(" https://github.com/apache/iotdb-client-go/raw/main/example/session_example.go\n\ngo mod init session_example\ngo run session_example.go\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("ul",[a("li",[s._v("通过GOPATH")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# get thrift 0.13.0")]),s._v("\ngo get github.com/apache/thrift\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$GOPATH")]),s._v("/src/github.com/apache/thrift\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.13")]),s._v(".0\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$GOPATH")]),s._v("/src/iotdb-client-go-example/session_example\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$GOPATH")]),s._v("/src/iotdb-client-go-example/session_example\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" session_example.go "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-L")]),s._v(" https://github.com/apache/iotdb-client-go/raw/main/example/session_example.go\ngo run session_example.go\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);