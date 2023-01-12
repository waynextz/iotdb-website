(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{544:function(t,e,a){"use strict";a.r(e);var i=a(19),n=Object(i.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"tsdb-comparison"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tsdb-comparison"}},[t._v("#")]),t._v(" TSDB Comparison")]),t._v(" "),e("h2",{attrs:{id:"overview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-images.githubusercontent.com/33376433/119833923-182ffc00-bf32-11eb-8b3f-9f95d3729ad2.png",alt:"TSDB Comparison"}})]),t._v(" "),e("p",[t._v("*"),e("em",[t._v("The table format is inspired by "),e("a",{attrs:{href:"https://towardsdatascience.com/how-to-select-time-series-db-123b0eb4ab82",target:"_blank",rel:"noopener noreferrer"}},[t._v("Andriy Zabavskyy: How to Select Time Series DB"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("h2",{attrs:{id:"known-time-series-database"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#known-time-series-database"}},[t._v("#")]),t._v(" Known Time Series Database")]),t._v(" "),e("p",[t._v("As the time series data becomes more and more important,\nseveral open sourced time series databases are introduced to the world.\nHowever, few of them are developed for IoT or IIoT (Industrial IoT) scenario in particular.")]),t._v(" "),e("p",[t._v("3 kinds of TSDBs are compared here.")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("InfluxDB - Native Time series database")]),t._v(" "),e("p",[t._v("InfluxDB is one of the most popular TSDBs.")]),t._v(" "),e("p",[t._v("Interface: InfluxQL and HTTP API")])]),t._v(" "),e("li",[e("p",[t._v("OpenTSDB and KairosDB - Time series database based on NoSQL")]),t._v(" "),e("p",[t._v("These two DBs are similar, while the first is based on HBase and the second is based on Cassandra.\nBoth of them provides RESTful style API.")]),t._v(" "),e("p",[t._v("Interface: Restful API")])]),t._v(" "),e("li",[e("p",[t._v("TimescaleDB - Time series database based on Relational Database")]),t._v(" "),e("p",[t._v("Interface: SQL")])])]),t._v(" "),e("p",[t._v("Prometheus and Druid are also famous for time series data management.\nHowever, Prometheus focuses data collection, data visualization and alert warnings.\nDruid focuses on data analysis with OLAP workload. We omit them here.")]),t._v(" "),e("h2",{attrs:{id:"comparison"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#comparison"}},[t._v("#")]),t._v(" Comparison")]),t._v(" "),e("p",[t._v("The above time series databases are compared from two aspects: the feature comparison and the performance\ncomparison.")]),t._v(" "),e("h3",{attrs:{id:"feature-comparison"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#feature-comparison"}},[t._v("#")]),t._v(" Feature Comparison")]),t._v(" "),e("p",[t._v("I list the basic features comparison of these databases.")]),t._v(" "),e("p",[t._v("Legend:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("++")]),t._v(": big support greatly")]),t._v(" "),e("li",[e("code",[t._v("+")]),t._v(": support")]),t._v(" "),e("li",[e("code",[t._v("+-")]),t._v(": support but not very good")]),t._v(" "),e("li",[e("code",[t._v("-")]),t._v(": not support")]),t._v(" "),e("li",[e("code",[t._v("?")]),t._v(": unknown")])]),t._v(" "),e("h4",{attrs:{id:"basic-features"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#basic-features"}},[t._v("#")]),t._v(" Basic Features")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("TSDB")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("IoTDB")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("InfluxDB")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("OpenTSDB")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("KairosDB")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("TimescaleDB")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("em",[t._v("OpenSource")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("+")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("+")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+")])]),t._v(" "),e("tr",[e("td",[e("em",[t._v("SQL-like")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("++")])])]),t._v(" "),e("tr",[e("td",[e("em",[t._v("Schema")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("tree-based, tag-based")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("tag-based")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("tag-based")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("tag-based")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("relational")])]),t._v(" "),e("tr",[e("td",[e("em",[t._v("Writing out-of-order data")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+")])]),t._v(" "),e("tr",[e("td",[e("em",[t._v("Schema-less")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+")])]),t._v(" "),e("tr",[e("td",[e("em",[t._v("Batch insertion")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+")])]),t._v(" "),e("tr",[e("td",[e("em",[t._v("Time range filter")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+")])]),t._v(" "),e("tr",[e("td",[e("em",[t._v("Order by time")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("++")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+")])]),t._v(" "),e("tr",[e("td",[e("em",[t._v("Value filter")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+")])]),t._v(" "),e("tr",[e("td",[e("em",[t._v("Downsampling")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("++")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+")])]),t._v(" "),e("tr",[e("td",[e("em",[t._v("Fill")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("++")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+")])]),t._v(" "),e("tr",[e("td",[e("em",[t._v("LIMIT")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+")])]),t._v(" "),e("tr",[e("td",[e("em",[t._v("SLIMIT")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("?")])]),t._v(" "),e("tr",[e("td",[e("em",[t._v("Latest value")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("++")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+")])])])]),t._v(" "),e("p",[e("strong",[t._v("Details")])]),t._v(" "),e("ul",[e("li",[e("p",[t._v("OpenSource:")]),t._v(" "),e("ul",[e("li",[t._v("IoTDB uses Apache License 2.0.")]),t._v(" "),e("li",[t._v("InfluxDB uses MIT license. However, "),e("strong",[t._v("the cluster version is not open sourced")]),t._v(".")]),t._v(" "),e("li",[t._v("OpenTSDB uses LGPL2.1, which "),e("strong",[t._v("is not compatible with Apache License")]),t._v(".")]),t._v(" "),e("li",[t._v("KairosDB uses Apache License 2.0.")]),t._v(" "),e("li",[t._v("TimescaleDB uses Timescale License, which is not free for enterprise.")])])]),t._v(" "),e("li",[e("p",[t._v("SQL like:")]),t._v(" "),e("ul",[e("li",[t._v("IoTDB and InfluxDB support SQL like language.")]),t._v(" "),e("li",[t._v("OpenTSDB and KairosDB only support Rest API, while IoTDB also supports Rest API.")]),t._v(" "),e("li",[t._v("TimescaleDB uses the SQL the same as PG.")])])]),t._v(" "),e("li",[e("p",[t._v("Schema:")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("IoTDB: IoTDB proposes a "),e("a",{attrs:{href:"http://iotdb.apache.org/UserGuide/Master/Data-Concept/Data-Model-and-Terminology.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tree based schema"),e("OutboundLink")],1),t._v(".\nIt is quite different from other TSDBs. However, the kind of schema has the following advantages:")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("In many industrial scenarios, the management of devices are hierarchical, rather than flat.\nThat is why we think a tree based schema is better than tag-value based schema.")])]),t._v(" "),e("li",[e("p",[t._v('In many real world applications, tag names are constant. For example, a wind turbine manufacturer\nalways identify their wind turbines by which country it locates, the farm name it belongs to, and its ID in the farm.\nSo, a 4-depth tree ("root.the-country-name.the-farm-name.the-id") is fine.\nYou do not need to repeat to tell IoTDB the 2nd level of the tree is for country name,\nthe 3rd level is for farm id, etc.')])]),t._v(" "),e("li",[e("p",[t._v('A path based time series ID definition also supports flexible queries, like "root.*.a.b.*", where * is wildcard character.')])])])]),t._v(" "),e("li",[e("p",[t._v("InfluxDB, KairosDB, OpenTSDB are tag-value based, which is more popular currently.")])]),t._v(" "),e("li",[e("p",[t._v("TimescaleDB uses relational table.")])])])]),t._v(" "),e("li",[e("p",[t._v("Order by time:")]),t._v(" "),e("p",[t._v("Order by time seems quite trivial for time series database. But... if we consider another feature, called align by time,\nsomething becomes interesting.  And, that is why we mark OpenTSDB and KairosDB unsupported.")]),t._v(" "),e("p",[t._v("Actually, in each time series, all these TSDBs support order data by timestamps.")]),t._v(" "),e("p",[t._v("However, OpenTSDB and KairosDB do not support order data from different timeseries in the time order.")]),t._v(" "),e("p",[t._v("Ok, consider a new case: I have two time series, one is for the wind speed in wind farm1,\nanother is for the generated energy of wind turbine1 in farm1. If we want to analyze the relation between the\nwind speed and the generated energy, we have to know the values of both at the same time.\nThat is to say, we have to align the two time series in the time dimension.")]),t._v(" "),e("p",[t._v("So, the result should be:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("timestamp")]),t._v(" "),e("th",[t._v("wind speed")]),t._v(" "),e("th",[t._v("generated energy")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("1")]),t._v(" "),e("td",[t._v("5.0")]),t._v(" "),e("td",[t._v("13.1")])]),t._v(" "),e("tr",[e("td",[t._v("2")]),t._v(" "),e("td",[t._v("6.0")]),t._v(" "),e("td",[t._v("13.3")])]),t._v(" "),e("tr",[e("td",[t._v("3")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("13.1")])])])]),t._v(" "),e("p",[t._v("or,")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("timestamp")]),t._v(" "),e("th",[t._v("series name")]),t._v(" "),e("th",[t._v("value")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("1")]),t._v(" "),e("td",[t._v("wind speed")]),t._v(" "),e("td",[t._v("5.0")])]),t._v(" "),e("tr",[e("td",[t._v("1")]),t._v(" "),e("td",[t._v("generated energy")]),t._v(" "),e("td",[t._v("13.1")])]),t._v(" "),e("tr",[e("td",[t._v("2")]),t._v(" "),e("td",[t._v("wind speed")]),t._v(" "),e("td",[t._v("6.0")])]),t._v(" "),e("tr",[e("td",[t._v("2")]),t._v(" "),e("td",[t._v("generated energy")]),t._v(" "),e("td",[t._v("13.3")])]),t._v(" "),e("tr",[e("td",[t._v("3")]),t._v(" "),e("td",[t._v("generated energy")]),t._v(" "),e("td",[t._v("13.1")])])])])])]),t._v(" "),e("p",[t._v("Though the second table format does not align data by the time dimension, it is easy to be implemented in the client-side,\nby just scanning data row by row.")]),t._v(" "),e("p",[t._v("IoTDB supports the first table format (called align by time), InfluxDB supports the second table format.")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Downsampling:")]),t._v(" "),e("p",[t._v("Downsampling is for changing the granularity of timeseries, e.g., from 10Hz to 1Hz, or 1 point per day.")]),t._v(" "),e("p",[t._v("Different from other systems, IoTDB downsamples data in real time, while others serialized downsampled data on disk."),e("br"),t._v("\nThat is to say,")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("IoTDB supports "),e("strong",[t._v("adhoc")]),t._v(" downsampling data in "),e("strong",[t._v("arbitrary time")]),t._v(".\ne.g., a SQL returns 1 point per 5 minutes and start with 2020-04-27 08:00:00 while another SQL returns 1 point per 5 minutes + 10 seconds and start with 2020-04-27 08:00:01.\n（InfluxDB also supports adhoc downsampling but the performance is ..... hm)")])]),t._v(" "),e("li",[e("p",[t._v("There is no disk loss for IoTDB.")])])])]),t._v(" "),e("li",[e("p",[t._v("Fill:")]),t._v(" "),e("p",[t._v("Sometimes we thought the data is collected in some fixed frequency, e.g., 1Hz (1 point per second).\nBut usually, we may lost some data points, because the network is unstable, the machine is busy, or the machine is down for several minutes.")]),t._v(" "),e("p",[t._v("In this case, filling these holes is important. Data scientists can avoid many so called dirty work, e.g., data clean.")]),t._v(" "),e("p",[t._v("InfluxDB and OpenTSDB only support using fill in a group by statement, while IoTDB supports to fill data when just given a particular timestamp.\nBesides, IoTDB supports several strategies for filling data.")])]),t._v(" "),e("li",[e("p",[t._v("Slimit:")]),t._v(" "),e("p",[t._v("Slimit means return limited number of measurements (or, fields in InfluxDB).\nFor example, a wind turbine may have 1000 measurements (speed, voltage, etc..), using slimit and soffset can just return a part of them.")])]),t._v(" "),e("li",[e("p",[t._v("Latest value:")]),t._v(" "),e("p",[t._v("As one of the most basic timeseries based applications is monitoring the latest data.\nTherefore, a query to return the latest value of a time series is very important.\nIoTDB and OpenTSDB support that with a special SQL or API,\nwhile InfluxDB supports that using an aggregation function.\n(the reason why IoTDB provides a special SQL is IoTDB optimizes the query expressly.)")])])]),t._v(" "),e("p",[e("strong",[t._v("Conclusion")]),t._v(":")]),t._v(" "),e("p",[t._v("Well, if we compare the basic features, we can find that OpenTSDB and KairosDB somehow lack some important query features.\nTimescaleDB can not be freely used in business.\nIoTDB and InfluxDB can meet most requirements of time series data management, while they have some difference.")]),t._v(" "),e("h4",{attrs:{id:"advanced-features"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#advanced-features"}},[t._v("#")]),t._v(" Advanced Features")]),t._v(" "),e("p",[t._v("I listed some interesting features that these systems may differ.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("TSDB")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("IoTDB")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("InfluxDB")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("OpenTSDB")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("KairosDB")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("TimescaleDB")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("em",[t._v("Align by time")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("++")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+")])]),t._v(" "),e("tr",[e("td",[e("em",[t._v("Compression")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("++")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+-")])]),t._v(" "),e("tr",[e("td",[e("em",[t._v("MQTT support")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("++")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+-")])]),t._v(" "),e("tr",[e("td",[e("em",[t._v("Run on Edge-side Device")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("++")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+")])]),t._v(" "),e("tr",[e("td",[e("em",[t._v("Multi-instance Sync")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("++")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",[e("em",[t._v("JDBC Driver")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("+")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("++")])]),t._v(" "),e("tr",[e("td",[e("em",[t._v("Standard SQL")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("++")])])]),t._v(" "),e("tr",[e("td",[e("em",[t._v("Spark integration")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("++")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",[e("em",[t._v("Hive integration")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("++")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",[e("em",[t._v("Writing data to NFS (HDFS)")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("++")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",[e("em",[t._v("Flink integration")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("++")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")])])])]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Align by time: have been introduced. Let's skip it..")])]),t._v(" "),e("li",[e("p",[t._v("Compression:")]),t._v(" "),e("ul",[e("li",[t._v("IoTDB supports many encoding and compression for time series, like RLE, 2DIFF, Gorilla, etc.. and Snappy compression.\nIn IoTDB, you can choose which encoding method you want, according to the data distribution. For more info, see "),e("a",{attrs:{href:"http://iotdb.apache.org/UserGuide/Master/Data-Concept/Encoding.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("li",[t._v("InfluxDB also supports encoding and compression, but you can not define which encoding method you want.\nIt just depends on the data type. For more info, see "),e("a",{attrs:{href:"https://docs.influxdata.com/influxdb/v1.7/concepts/storage_engine/",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("li",[t._v("OpenTSDB and KairosDB use HBase and Cassandra in backend, and have no special encoding for time series.")])])]),t._v(" "),e("li",[e("p",[t._v("MQTT protocol support:")]),t._v(" "),e("p",[t._v("MQTT protocol is an international standard and widely known in industrial users. Only IoTDB and InfluxDB support user using MQTT client to write data.")])]),t._v(" "),e("li",[e("p",[t._v("Running on Edge-side Device:")]),t._v(" "),e("p",[t._v("Nowdays, edge computing is more and more popular, which means the edge device has more powerful computational resources.\nDeploying a TSDB on the edge side is useful for managing data on the edge side and serve for edge computing.\nAs OpenTSDB and KairosDB rely another DB, the architecture is heavy. Especially, it is hard to run Hadoop on the edge side.")])]),t._v(" "),e("li",[e("p",[t._v("Multi-instance Sync:")]),t._v(" "),e("p",[t._v("Ok, now we have many TSDB instances on the edge-side. Then, how to upload their data to the data center, to form a ... data lake (or ocean, river,..., whatever).\nOne solution is to read data from these instances and write the data point by point to the data center instance.\nIoTDB provides another choice, which is just uploading the data file into the data center incrementally, then the data center can support service on the data.")])]),t._v(" "),e("li",[e("p",[t._v("JDBC driver:")]),t._v(" "),e("p",[t._v("Now only IoTDB supports a JDBC driver (though not all interfaces are implemented), and makes it possible to integrate many other JDBC driver based softwares.")])]),t._v(" "),e("li",[e("p",[t._v("Spark and Hive integration:")]),t._v(" "),e("p",[t._v("It is very important that letting big data analysis software to access the data in database for more complex data analysis.\nIoTDB supports Hive-connector and Spark connector for better integration.")])]),t._v(" "),e("li",[e("p",[t._v("Writing data to NFS (HDFS):\nSharing nothing architecture is good, but sometimes you have to add new servers even your CPU and memory is idle but the disk is full...\nBesides, if we can save the data file directly to HDFS, it will be more easy to use Spark and other softwares to analyze data, without ETL.")])]),t._v(" "),e("li",[e("p",[t._v("IoTDB supports writing data locally or on HDFS directly. IoTDB also allows user to extend to store data on other NFS.")])]),t._v(" "),e("li",[e("p",[t._v("InfluxDB, KairosDB have to write data locally.")])]),t._v(" "),e("li",[e("p",[t._v("OpenTSDB has to write data on HDFS.")])])]),t._v(" "),e("p",[e("strong",[t._v("Conclusion")]),t._v(":")]),t._v(" "),e("p",[t._v("We can find that IoTDB has many powerful features that other TSDBs do not support.")]),t._v(" "),e("h3",{attrs:{id:"performance-comparison"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#performance-comparison"}},[t._v("#")]),t._v(" Performance Comparison")]),t._v(" "),e("p",[t._v('Ok... If you say, "well, I just want the basic features. IoTDB has little difference from others.".\nIt is somehow right. But, if you consider the performance, you may change your mind.')]),t._v(" "),e("h4",{attrs:{id:"quick-review"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#quick-review"}},[t._v("#")]),t._v(" quick review")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("TSDB")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("IoTDB")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("InfluxDB")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("KairosDB")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("TimescaleDB")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("em",[t._v("Scalable Writes")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("++")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+")])]),t._v(" "),e("tr",[e("td",[e("em",[t._v("Raw Data Query")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("++")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+")])]),t._v(" "),e("tr",[e("td",[e("em",[t._v("Aggregation Query")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("++")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+")])]),t._v(" "),e("tr",[e("td",[e("em",[t._v("Downsampling Query")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("++")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+-")])]),t._v(" "),e("tr",[e("td",[e("em",[t._v("Latest Query")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("++")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+")])])])]),t._v(" "),e("ul",[e("li",[t._v("Write:")])]),t._v(" "),e("p",[t._v("We test the performance of writing from two aspects: "),e("em",[t._v("batch size")]),t._v(" and "),e("em",[t._v("client num")]),t._v(". The number of database is 10. There are 1000 devices and each device has 100 measurements(i.e.,, 100K time series total).")]),t._v(" "),e("ul",[e("li",[t._v("Read:")])]),t._v(" "),e("p",[t._v("10 clients read data concurrently. The number of database is 10. There are 10 devices and each device has 10 measurements (i.e.,, 100 time series total).\nThe data type is "),e("em",[t._v("double")]),t._v(", encoding type is "),e("em",[t._v("GORILLA")])]),t._v(" "),e("ul",[e("li",[t._v("Compression:")])]),t._v(" "),e("p",[t._v("We test and compare file sizes of TsFile(the file format of IoTDB) and some others famous dataset formats, which are Parquet, ORC and Csv, after the same datasets are written.")]),t._v(" "),e("p",[t._v("The IoTDB version is v0.11.1.")]),t._v(" "),e("p",[e("strong",[t._v("Write performance")]),t._v(":")]),t._v(" "),e("ul",[e("li",[t._v("batch size:")])]),t._v(" "),e("p",[t._v("10 clients write data concurrently.\nIoTDB uses batch insertion API and the batch size is distributed from 0 to 6000 (write N data points per write API call).")]),t._v(" "),e("p",[t._v("The write throughput (points/second) is:")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-images.githubusercontent.com/24886743/106251391-df1b9f80-624f-11eb-9f1f-66823839acba.png",alt:"Batch Size with Write Throughput (points/second)"}}),t._v(" "),e("span",{attrs:{id:"exp1"}},[e("center",[t._v("Figure 1. Batch Size with Write throughput (points/second) IoTDB v0.11.1")])],1)]),t._v(" "),e("ul",[e("li",[t._v("client num:")])]),t._v(" "),e("p",[t._v("The client num is distributed from 1 to 50.\nIoTDB uses batch insertion API and the batch size is 100 (write 100 data points per write API call).")]),t._v(" "),e("p",[t._v("The write throughput (points/second) is:")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-images.githubusercontent.com/24886743/106251411-e5aa1700-624f-11eb-8ca8-00c0627b1e96.png",alt:"Client Num with Write Throughput (points/second) (ms)"}}),t._v(" "),e("center",[t._v("Figure 3. Client Num with Write Throughput (points/second) IoTDB v0.11.1")])],1),t._v(" "),e("p",[e("strong",[t._v("Query performance")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-images.githubusercontent.com/24886743/106251377-daef8200-624f-11eb-9678-b1d5440be2de.png",alt:"Raw data query 1 col"}}),t._v(" "),e("center",[t._v("Figure 4. Raw data query 1 col time cost(ms) IoTDB v0.11.1")])],1),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-images.githubusercontent.com/24886743/106251336-cf03c000-624f-11eb-8395-de5e349f47b5.png",alt:"Aggregation query"}}),t._v(" "),e("center",[t._v("Figure 5. Aggregation query time cost(ms) IoTDB v0.11.1")])],1),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-images.githubusercontent.com/24886743/106251353-d32fdd80-624f-11eb-80c1-fdb4197939fe.png",alt:"Downsampling query"}}),t._v(" "),e("center",[t._v("Figure 6. Downsampling query time cost(ms) IoTDB v0.11.1")])],1),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-images.githubusercontent.com/24886743/106251369-d7f49180-624f-11eb-9d19-fc7341582b90.png",alt:"Latest query"}}),t._v(" "),e("center",[t._v("Figure 7. Latest query time cost(ms) IoTDB v0.11.1")])],1),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-images.githubusercontent.com/24886743/118790229-23e34900-b8c8-11eb-87da-ac01dd117f28.png",alt:"Data compression"}}),t._v(" "),e("center",[t._v("Figure 8. Data compression IoTDB v0.11.1")])],1),t._v(" "),e("p",[t._v("We can see that IoTDB outperforms others.")]),t._v(" "),e("h4",{attrs:{id:"more-details"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#more-details"}},[t._v("#")]),t._v(" More details")]),t._v(" "),e("p",[t._v("We provide a benchmarking tool, called IoTDB-benchamrk (https://github.com/thulab/iotdb-benchmark, you may have to use the dev branch to compile it),\nit supports IoTDB, InfluxDB, KairosDB, TimescaleDB, OpenTSDB. We have an "),e("a",{attrs:{href:"https://arxiv.org/abs/1901.08304",target:"_blank",rel:"noopener noreferrer"}},[t._v("article"),e("OutboundLink")],1),t._v(" for comparing these systems using the benchmark tool.\nWhen we publish the article, IoTDB just entered Apache incubator, so we deleted the performance of IoTDB in that article. But after comparison, some results are presented here.")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("For InfluxDB, we set the cache-max-memory-size and the max-series-perbase as unlimited (otherwise it will be timeout quickly).")])]),t._v(" "),e("li",[e("p",[t._v("For KairosDB, we set Cassandra's read_repair_chance as 0.1 (However it has no effect because we just have one node).")])]),t._v(" "),e("li",[e("p",[t._v("For TimescaleDB, we use PGTune tool to optimize PostgreSQL.")])])]),t._v(" "),e("p",[t._v("All TSDBs run on a server with Intel(R) Core(TM) i7-10700 CPU @ 2.90GHz，(8 cores 16 threads), 32GB memory , 256G SSD and 10T HDD.\nThe OS is Ubuntu 16.04.7 LTS, 64bits.")]),t._v(" "),e("p",[t._v("All clients run on a server with Intel(R) Core(TM) i7-8700 CPU @ 3.20GHz，(6 cores 12 threads), 16GB memory , 256G SSD.\nThe OS is Ubuntu 16.04.7 LTS, 64bits.")]),t._v(" "),e("h2",{attrs:{id:"conclusion"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[t._v("#")]),t._v(" Conclusion")]),t._v(" "),e("p",[t._v("From all above experiments, we can see that IoTDB outperforms others hugely.\nIoTDB has the minimal write latency. The larger the batch size, the higher the write throughput of IoTDB. This indicates that IoTDB is most suitable for batch data writing scenarios.\nIn high concurrency scenarios, IoTDB can also maintain a steady growth in throughput. (12 million points per second may have reached the limit of gigabit network card)\nIn raw data query, as the query scope increases, the advantages of IoTDB begin to manifest. Because the granularity of data blocks is larger and the advantages of columnar storage are used, column-based compression and columnar iterators will both accelerate the query.\nIn aggregation query, we use the statistics of the file layer and cache the statistics. Therefore, multiple queries only need to perform memory calculations (do not need to traverse the original data points, and do not need to access the disk), so the aggregation performance advantage is obvious.\nDownsampling query scenarios is more interesting, as the time partition becomes larger and larger, the query performance of IoTDB increases gradually. Probably it has risen twice, which corresponds to the pre-calculated information of 2 granularities(3 hours and 4.5 days). Therefore, the queries in the range of 1 day and 1 week are accelerated respectively. The other databases only rose once, indicating that they only have one granular statistics.")]),t._v(" "),e("p",[t._v("If you are considering a TSDB for your IIoT application, Apache IoTDB, a new time series database, is your best choice.")]),t._v(" "),e("p",[t._v("We will update this page once we release new version and finish the experiments.\nWe also welcome more contributors correct this article and contribute IoTDB and reproduce experiments.")])])}),[],!1,null,null,null);e.default=n.exports}}]);