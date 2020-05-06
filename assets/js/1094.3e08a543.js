(window.webpackJsonp=window.webpackJsonp||[]).push([[1094],{1552:function(t,e,a){"use strict";a.r(e);var o=a(49),r=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"programming-other-languages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#programming-other-languages"}},[t._v("#")]),t._v(" Programming - Other Languages")]),t._v(" "),a("h2",{attrs:{id:"python-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python-api"}},[t._v("#")]),t._v(" Python API")]),t._v(" "),a("h3",{attrs:{id:"_1-introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-introduction"}},[t._v("#")]),t._v(" 1. Introduction")]),t._v(" "),a("p",[t._v("This is an example of how to connect to IoTDB with python, using the thrift rpc interfaces. Things will be a bit different\non Linux or Windows, we will introduce how to operate on the two systems separately.")]),t._v(" "),a("h3",{attrs:{id:"_2-prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-prerequisites"}},[t._v("#")]),t._v(" 2. Prerequisites")]),t._v(" "),a("p",[t._v("python3.7 or later is preferred.")]),t._v(" "),a("p",[t._v("You have to install Thrift (0.11.0 or later) to compile our thrift file into python code. Below is the official\ntutorial of installation:")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("http://thrift.apache.org/docs/install/\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"_3-how-to-get-the-python-library"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-how-to-get-the-python-library"}},[t._v("#")]),t._v(" 3. How to Get the Python Library")]),t._v(" "),a("h4",{attrs:{id:"option-1-pip-install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#option-1-pip-install"}},[t._v("#")]),t._v(" Option 1: pip install")]),t._v(" "),a("p",[t._v("You can find the Apache IoTDB Python Client API package on https://pypi.org/project/apache-iotdb/.")]),t._v(" "),a("p",[t._v("The download command is:")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("pip install apache-iotdb\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h4",{attrs:{id:"option-2-use-the-compile-script-we-provided"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#option-2-use-the-compile-script-we-provided"}},[t._v("#")]),t._v(" Option 2: use the compile script we provided")]),t._v(" "),a("p",[t._v("If you have added Thrift executable into your path, you may just run "),a("code",[t._v("client-py/compile.sh")]),t._v(" or\n"),a("code",[t._v("client-py\\compile.bat")]),t._v(", or you will have to modify it to set variable "),a("code",[t._v("THRIFT_EXE")]),t._v(" to point to\nyour executable. This will generate thrift sources under folder "),a("code",[t._v("target")]),t._v(", you can add it to your\n"),a("code",[t._v("PYTHONPATH")]),t._v(" so that you would be able to use the library in your code. Notice that the scripts\nlocate the thrift source file by relative path, so if you move the scripts else where, they are\nno longer valid.")]),t._v(" "),a("h4",{attrs:{id:"option-3-basic-usage-of-thrift"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#option-3-basic-usage-of-thrift"}},[t._v("#")]),t._v(" Option 3: basic usage of thrift")]),t._v(" "),a("p",[t._v("Optionally, if you know the basic usage of thrift, you can only download the thrift source file in\n"),a("code",[t._v("service-rpc\\src\\main\\thrift\\rpc.thrift")]),t._v(", and simply use "),a("code",[t._v("thrift -gen py -out ./target/iotdb rpc.thrift")]),t._v("\nto generate the python library.")]),t._v(" "),a("h3",{attrs:{id:"_4-use-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-use-example"}},[t._v("#")]),t._v(" 4. Use Example")]),t._v(" "),a("p",[t._v("We provided an example of how to use the thrift library to connect to IoTDB in "),a("code",[t._v("client-py/src /client_example.py")]),t._v(", please read it carefully before you write your own code.")])])}),[],!1,null,null,null);e.default=r.exports}}]);