(window.webpackJsonp=window.webpackJsonp||[]).push([[250],{652:function(e,t,a){"use strict";a.r(t);var s=a(19),r=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"watermark-tool"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#watermark-tool"}},[e._v("#")]),e._v(" Watermark Tool")]),e._v(" "),t("p",[e._v("This tool has two functions: 1) watermark embedding of the IoTDB query result and 2) watermark detection of the suspected data.")]),e._v(" "),t("h2",{attrs:{id:"_1-watermark-embedding"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-watermark-embedding"}},[e._v("#")]),e._v(" 1. Watermark Embedding")]),e._v(" "),t("h3",{attrs:{id:"_1-1-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-configuration"}},[e._v("#")]),e._v(" 1.1 Configuration")]),e._v(" "),t("p",[e._v("Watermark is disabled by default in IoTDB. To enable watermark embedding, the first thing is to modify the following fields in the configuration file "),t("code",[e._v("iotdb-engine.properties")]),e._v(":")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Name")]),e._v(" "),t("th",[e._v("Example")]),e._v(" "),t("th",[e._v("Explanation")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("watermark_module_opened")]),e._v(" "),t("td",[e._v("false")]),e._v(" "),t("td",[t("code",[e._v("true")]),e._v(" to enable watermark embedding of the IoTDB server; "),t("code",[e._v("false")]),e._v(" to disable")])]),e._v(" "),t("tr",[t("td",[e._v("watermark_secret_key")]),e._v(" "),t("td",[e._v("IoTDB*2019@Beijing")]),e._v(" "),t("td",[e._v("self-defined secret key")])]),e._v(" "),t("tr",[t("td",[e._v("watermark_bit_string")]),e._v(" "),t("td",[e._v("100101110100")]),e._v(" "),t("td",[e._v("0-1 bit string to be embedded")])]),e._v(" "),t("tr",[t("td",[e._v("watermark_method")]),e._v(" "),t("td",[e._v("GroupBasedLSBMethod(embed_row_cycle=2,embed_lsb_num=5)")]),e._v(" "),t("td",[e._v("specifies the watermark algorithm and its paramters")])])])]),e._v(" "),t("p",[e._v("Notes:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("watermark_module_opened")]),e._v(": Set it to be true if you want to enable watermark embedding")]),e._v(" "),t("li",[t("code",[e._v("watermark_secret_key")]),e._v(": Character '&' is not allowed. There is no constraint on the length of the secret key. Generally, the longer the key is, the higher the bar to intruders.")]),e._v(" "),t("li",[t("code",[e._v("watermark_bit_string")]),e._v(": There is no constraint on the length of the bit string (except that it should not be empty). But note that it is difficult to reach the required significance level at the watermark detection phase if the bit string is way too short.")]),e._v(" "),t("li",[t("code",[e._v("watermark_method")]),e._v(": Now only GroupBasedLSBMethod is supported, so actually you can only tune the two parameters of this method, which are "),t("code",[e._v("embed_row_cycle")]),e._v(" and "),t("code",[e._v("embed_lsb_num")]),e._v(".\n"),t("ul",[t("li",[e._v("Both of them should be positive integers.")]),e._v(" "),t("li",[t("code",[e._v("embed_row_cycle")]),e._v(" controls the ratio of rows watermarked. The smaller the "),t("code",[e._v("embed_row_cycle")]),e._v(", the larger the ratio of rows watermarked. When "),t("code",[e._v("embed_row_cycle")]),e._v(" equals 1, every row is watermarked.")]),e._v(" "),t("li",[e._v("GroupBasedLSBMethod uses LSB embedding. "),t("code",[e._v("embed_lsb_num")]),e._v(" controls the number of least significant bits available for watermark embedding. The biggger the "),t("code",[e._v("embed_lsb_num")]),e._v(", the larger the varying range of a data point.")])])]),e._v(" "),t("li",[t("code",[e._v("watermark_secret_key")]),e._v(", "),t("code",[e._v("watermark_bit_string")]),e._v("  and "),t("code",[e._v("watermark_method")]),e._v(" should be kept secret from possible attackers. That is, it is your responsiblity to take care of "),t("code",[e._v("iotdb-engine.properties")]),e._v(".")])]),e._v(" "),t("h3",{attrs:{id:"_1-2-usage-example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-usage-example"}},[e._v("#")]),e._v(" 1.2 Usage Example")]),e._v(" "),t("h4",{attrs:{id:"step-1-create-a-new-user-alice-grant-read-privilege-and-query"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-1-create-a-new-user-alice-grant-read-privilege-and-query"}},[e._v("#")]),e._v(" step 1. Create a new user Alice, grant read privilege and query")]),e._v(" "),t("p",[e._v("A newly created user doesn't use watermark by default. So the query result is the original data.")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(".\\start-client.bat -u root -pw root\ncreate user Alice 1234\ngrant user Alice privileges 'READ_TIMESERIES' on root.vehicle\nexit\n\n.\\start-client.bat -u Alice -pw 1234\nselect * from root\n+-----------------------------------+------------------+\n|                               Time|root.vehicle.d0.s0|\n+-----------------------------------+------------------+\n|      1970-01-01T08:00:00.001+08:00|              21.5|\n|      1970-01-01T08:00:00.002+08:00|              22.5|\n|      1970-01-01T08:00:00.003+08:00|              23.5|\n|      1970-01-01T08:00:00.004+08:00|              24.5|\n|      1970-01-01T08:00:00.005+08:00|              25.5|\n|      1970-01-01T08:00:00.006+08:00|              26.5|\n|      1970-01-01T08:00:00.007+08:00|              27.5|\n|      1970-01-01T08:00:00.008+08:00|              28.5|\n|      1970-01-01T08:00:00.009+08:00|              29.5|\n|      1970-01-01T08:00:00.010+08:00|              30.5|\n|      1970-01-01T08:00:00.011+08:00|              31.5|\n|      1970-01-01T08:00:00.012+08:00|              32.5|\n|      1970-01-01T08:00:00.013+08:00|              33.5|\n|      1970-01-01T08:00:00.014+08:00|              34.5|\n|      1970-01-01T08:00:00.015+08:00|              35.5|\n|      1970-01-01T08:00:00.016+08:00|              36.5|\n|      1970-01-01T08:00:00.017+08:00|              37.5|\n|      1970-01-01T08:00:00.018+08:00|              38.5|\n|      1970-01-01T08:00:00.019+08:00|              39.5|\n|      1970-01-01T08:00:00.020+08:00|              40.5|\n|      1970-01-01T08:00:00.021+08:00|              41.5|\n|      1970-01-01T08:00:00.022+08:00|              42.5|\n|      1970-01-01T08:00:00.023+08:00|              43.5|\n|      1970-01-01T08:00:00.024+08:00|              44.5|\n|      1970-01-01T08:00:00.025+08:00|              45.5|\n|      1970-01-01T08:00:00.026+08:00|              46.5|\n|      1970-01-01T08:00:00.027+08:00|              47.5|\n|      1970-01-01T08:00:00.028+08:00|              48.5|\n|      1970-01-01T08:00:00.029+08:00|              49.5|\n|      1970-01-01T08:00:00.030+08:00|              50.5|\n|      1970-01-01T08:00:00.031+08:00|              51.5|\n|      1970-01-01T08:00:00.032+08:00|              52.5|\n|      1970-01-01T08:00:00.033+08:00|              53.5|\n+-----------------------------------+------------------+\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br"),t("span",{staticClass:"line-number"},[e._v("19")]),t("br"),t("span",{staticClass:"line-number"},[e._v("20")]),t("br"),t("span",{staticClass:"line-number"},[e._v("21")]),t("br"),t("span",{staticClass:"line-number"},[e._v("22")]),t("br"),t("span",{staticClass:"line-number"},[e._v("23")]),t("br"),t("span",{staticClass:"line-number"},[e._v("24")]),t("br"),t("span",{staticClass:"line-number"},[e._v("25")]),t("br"),t("span",{staticClass:"line-number"},[e._v("26")]),t("br"),t("span",{staticClass:"line-number"},[e._v("27")]),t("br"),t("span",{staticClass:"line-number"},[e._v("28")]),t("br"),t("span",{staticClass:"line-number"},[e._v("29")]),t("br"),t("span",{staticClass:"line-number"},[e._v("30")]),t("br"),t("span",{staticClass:"line-number"},[e._v("31")]),t("br"),t("span",{staticClass:"line-number"},[e._v("32")]),t("br"),t("span",{staticClass:"line-number"},[e._v("33")]),t("br"),t("span",{staticClass:"line-number"},[e._v("34")]),t("br"),t("span",{staticClass:"line-number"},[e._v("35")]),t("br"),t("span",{staticClass:"line-number"},[e._v("36")]),t("br"),t("span",{staticClass:"line-number"},[e._v("37")]),t("br"),t("span",{staticClass:"line-number"},[e._v("38")]),t("br"),t("span",{staticClass:"line-number"},[e._v("39")]),t("br"),t("span",{staticClass:"line-number"},[e._v("40")]),t("br"),t("span",{staticClass:"line-number"},[e._v("41")]),t("br"),t("span",{staticClass:"line-number"},[e._v("42")]),t("br"),t("span",{staticClass:"line-number"},[e._v("43")]),t("br"),t("span",{staticClass:"line-number"},[e._v("44")]),t("br")])]),t("h4",{attrs:{id:"step-2-grant-watermark-embedding-to-alice"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-2-grant-watermark-embedding-to-alice"}},[e._v("#")]),e._v(" step 2. grant watermark_embedding to Alice")]),e._v(" "),t("p",[e._v("Usage: "),t("code",[e._v("grant watermark_embedding to Alice")])]),e._v(" "),t("p",[e._v("Note that you can use "),t("code",[e._v("grant watermark_embedding to user1,user2,...")]),e._v(" to grant watermark_embedding to multiple users.")]),e._v(" "),t("p",[e._v("Only root can run this command. After root grants watermark_embedding to Alice, all query results of Alice are watermarked.")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(".\\start-client.bat -u root -pw root\ngrant watermark_embedding to Alice\nexit\n\n.\\start-client.bat -u Alice -pw 1234\nselect * from root\n+-----------------------------------+------------------+\n|                               Time|root.vehicle.d0.s0|\n+-----------------------------------+------------------+\n|      1970-01-01T08:00:00.001+08:00|              21.5|\n|      1970-01-01T08:00:00.002+08:00|              22.5|\n|      1970-01-01T08:00:00.003+08:00|         23.500008|\n|      1970-01-01T08:00:00.004+08:00|         24.500015|\n|      1970-01-01T08:00:00.005+08:00|              25.5|\n|      1970-01-01T08:00:00.006+08:00|         26.500015|\n|      1970-01-01T08:00:00.007+08:00|              27.5|\n|      1970-01-01T08:00:00.008+08:00|         28.500004|\n|      1970-01-01T08:00:00.009+08:00|              29.5|\n|      1970-01-01T08:00:00.010+08:00|              30.5|\n|      1970-01-01T08:00:00.011+08:00|              31.5|\n|      1970-01-01T08:00:00.012+08:00|              32.5|\n|      1970-01-01T08:00:00.013+08:00|              33.5|\n|      1970-01-01T08:00:00.014+08:00|              34.5|\n|      1970-01-01T08:00:00.015+08:00|         35.500004|\n|      1970-01-01T08:00:00.016+08:00|              36.5|\n|      1970-01-01T08:00:00.017+08:00|              37.5|\n|      1970-01-01T08:00:00.018+08:00|              38.5|\n|      1970-01-01T08:00:00.019+08:00|              39.5|\n|      1970-01-01T08:00:00.020+08:00|              40.5|\n|      1970-01-01T08:00:00.021+08:00|              41.5|\n|      1970-01-01T08:00:00.022+08:00|         42.500015|\n|      1970-01-01T08:00:00.023+08:00|              43.5|\n|      1970-01-01T08:00:00.024+08:00|         44.500008|\n|      1970-01-01T08:00:00.025+08:00|          45.50003|\n|      1970-01-01T08:00:00.026+08:00|         46.500008|\n|      1970-01-01T08:00:00.027+08:00|         47.500008|\n|      1970-01-01T08:00:00.028+08:00|              48.5|\n|      1970-01-01T08:00:00.029+08:00|              49.5|\n|      1970-01-01T08:00:00.030+08:00|              50.5|\n|      1970-01-01T08:00:00.031+08:00|         51.500008|\n|      1970-01-01T08:00:00.032+08:00|              52.5|\n|      1970-01-01T08:00:00.033+08:00|              53.5|\n+-----------------------------------+------------------+\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br"),t("span",{staticClass:"line-number"},[e._v("19")]),t("br"),t("span",{staticClass:"line-number"},[e._v("20")]),t("br"),t("span",{staticClass:"line-number"},[e._v("21")]),t("br"),t("span",{staticClass:"line-number"},[e._v("22")]),t("br"),t("span",{staticClass:"line-number"},[e._v("23")]),t("br"),t("span",{staticClass:"line-number"},[e._v("24")]),t("br"),t("span",{staticClass:"line-number"},[e._v("25")]),t("br"),t("span",{staticClass:"line-number"},[e._v("26")]),t("br"),t("span",{staticClass:"line-number"},[e._v("27")]),t("br"),t("span",{staticClass:"line-number"},[e._v("28")]),t("br"),t("span",{staticClass:"line-number"},[e._v("29")]),t("br"),t("span",{staticClass:"line-number"},[e._v("30")]),t("br"),t("span",{staticClass:"line-number"},[e._v("31")]),t("br"),t("span",{staticClass:"line-number"},[e._v("32")]),t("br"),t("span",{staticClass:"line-number"},[e._v("33")]),t("br"),t("span",{staticClass:"line-number"},[e._v("34")]),t("br"),t("span",{staticClass:"line-number"},[e._v("35")]),t("br"),t("span",{staticClass:"line-number"},[e._v("36")]),t("br"),t("span",{staticClass:"line-number"},[e._v("37")]),t("br"),t("span",{staticClass:"line-number"},[e._v("38")]),t("br"),t("span",{staticClass:"line-number"},[e._v("39")]),t("br"),t("span",{staticClass:"line-number"},[e._v("40")]),t("br"),t("span",{staticClass:"line-number"},[e._v("41")]),t("br"),t("span",{staticClass:"line-number"},[e._v("42")]),t("br"),t("span",{staticClass:"line-number"},[e._v("43")]),t("br")])]),t("h4",{attrs:{id:"step-3-revoke-watermark-embedding-from-alice"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-3-revoke-watermark-embedding-from-alice"}},[e._v("#")]),e._v(" step 3. revoke watermark_embedding from Alice")]),e._v(" "),t("p",[e._v("Usage: "),t("code",[e._v("revoke watermark_embedding from Alice")])]),e._v(" "),t("p",[e._v("Note that you can use "),t("code",[e._v("revoke watermark_embedding from user1,user2,...")]),e._v(" to revoke watermark_embedding from multiple users.")]),e._v(" "),t("p",[e._v("Only root can run this command. After root revokes watermark_embedding from Alice, all query results of Alice are original again.")]),e._v(" "),t("h2",{attrs:{id:"_2-watermark-detection"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-watermark-detection"}},[e._v("#")]),e._v(" 2. Watermark Detection")]),e._v(" "),t("p",[t("code",[e._v("detect-watermark.sh")]),e._v(" and "),t("code",[e._v("detect-watermark.bat")]),e._v(" are provided for different platforms.")]),e._v(" "),t("p",[e._v("Usage: ./detect-watermark.sh [filePath] [secretKey] [watermarkBitString] [embed_row_cycle] [embed_lsb_num] [alpha] [columnIndex] [dataType: int/float/double]")]),e._v(" "),t("p",[e._v("Example: ./detect-watermark.sh /home/data/dump1.csv IoTDB*2019@Beijing 100101110100 2 5 0.05 1 float")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Args")]),e._v(" "),t("th",[e._v("Example")]),e._v(" "),t("th",[e._v("Explanation")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("filePath")]),e._v(" "),t("td",[e._v("/home/data/dump1.csv")]),e._v(" "),t("td",[e._v("suspected data file path")])]),e._v(" "),t("tr",[t("td",[e._v("secretKey")]),e._v(" "),t("td",[e._v("IoTDB*2019@Beijing")]),e._v(" "),t("td",[e._v("see watermark embedding section")])]),e._v(" "),t("tr",[t("td",[e._v("watermarkBitString")]),e._v(" "),t("td",[e._v("100101110100")]),e._v(" "),t("td",[e._v("see watermark embedding section")])]),e._v(" "),t("tr",[t("td",[e._v("embed_row_cycle")]),e._v(" "),t("td",[e._v("2")]),e._v(" "),t("td",[e._v("see watermark embedding section")])]),e._v(" "),t("tr",[t("td",[e._v("embed_lsb_num")]),e._v(" "),t("td",[e._v("5")]),e._v(" "),t("td",[e._v("see watermark embedding section")])]),e._v(" "),t("tr",[t("td",[e._v("alpha")]),e._v(" "),t("td",[e._v("0.05")]),e._v(" "),t("td",[e._v("significance level")])]),e._v(" "),t("tr",[t("td",[e._v("columnIndex")]),e._v(" "),t("td",[e._v("1")]),e._v(" "),t("td",[e._v("specifies one column of the data to detect")])]),e._v(" "),t("tr",[t("td",[e._v("dataType")]),e._v(" "),t("td",[e._v("float")]),e._v(" "),t("td",[e._v("specifies the data type of the detected column; int/float/double")])])])]),e._v(" "),t("p",[e._v("Notes:")]),e._v(" "),t("ul",[t("li",[t("p",[t("code",[e._v("filePath")]),e._v(": You can use export-csv tool to generate such data file. The first row is header and the first column is time. Data in the file looks like this:")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Time")]),e._v(" "),t("th",[e._v("root.vehicle.d0.s1")]),e._v(" "),t("th",[e._v("root.vehicle.d0.s1")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("1970-01-01T08:00:00.001+08:00")]),e._v(" "),t("td",[e._v("100")]),e._v(" "),t("td",[e._v("null")])]),e._v(" "),t("tr",[t("td",[e._v("...")]),e._v(" "),t("td",[e._v("...")]),e._v(" "),t("td",[e._v("...")])])])])]),e._v(" "),t("li",[t("p",[t("code",[e._v("watermark_secret_key")]),e._v(", "),t("code",[e._v("watermark_bit_string")]),e._v(", "),t("code",[e._v("embed_row_cycle")]),e._v(" and "),t("code",[e._v("embed_lsb_num")]),e._v(" should be consistent with those used in the embedding phase.")])]),e._v(" "),t("li",[t("p",[t("code",[e._v("alpha")]),e._v(": It should be in the range of [0,1]. The watermark detection is based on the significance test. The smaller the "),t("code",[e._v("alpha")]),e._v(" is, the lower the probability that the data without the watermark is detected to be watermark embedded, and thus the higher the credibility of the result of detecting the existence of the watermark in data.")])]),e._v(" "),t("li",[t("p",[t("code",[e._v("columnIndex")]),e._v(": It should be a postive integer.")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);