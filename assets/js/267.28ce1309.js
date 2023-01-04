(window.webpackJsonp=window.webpackJsonp||[]).push([[267],{670:function(e,t,o){"use strict";o.r(t);var s=o(19),i=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"compression"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compression"}},[e._v("#")]),e._v(" Compression")]),e._v(" "),t("p",[e._v("When the time series is written and encoded as binary data according to the specified type, IoTDB compresses the data using compression technology to further improve space storage efficiency. Although both encoding and compression are designed to improve storage efficiency, encoding techniques are usually available only for specific data types (e.g., second-order differential encoding is only suitable for INT32 or INT64 data type, and storing floating-point numbers requires multiplying them by 10m to convert to integers), after which the data is converted to a binary stream. The compression method (SNAPPY) compresses the binary stream, so the use of the compression method is no longer limited by the data type.")]),e._v(" "),t("p",[e._v("IoTDB allows you to specify the compression method of the column when creating a time series, and supports the following compression methods:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("UNCOMPRESSED")])]),e._v(" "),t("li",[t("p",[e._v("SNAPPY")])]),e._v(" "),t("li",[t("p",[e._v("LZ4")])]),e._v(" "),t("li",[t("p",[e._v("GZIP")])])]),e._v(" "),t("p",[e._v("The specified syntax for compression is detailed in "),t("RouterLink",{attrs:{to:"/UserGuide/V0.12.x/Appendix/SQL-Reference.html"}},[e._v("Create Timeseries Statement")]),e._v(".")],1)])}),[],!1,null,null,null);t.default=i.exports}}]);