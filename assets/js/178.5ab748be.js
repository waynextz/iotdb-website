(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{578:function(e,t,a){"use strict";a.r(t);var s=a(19),n=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"mapreduce-tsfile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mapreduce-tsfile"}},[e._v("#")]),e._v(" MapReduce TsFile")]),e._v(" "),t("h2",{attrs:{id:"outline"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#outline"}},[e._v("#")]),e._v(" Outline")]),e._v(" "),t("ul",[t("li",[e._v("TsFile-Hadoop-Connector User Guide\n"),t("ul",[t("li",[e._v("About TsFile-Hadoop-Connector")]),e._v(" "),t("li",[e._v("System Requirements")]),e._v(" "),t("li",[e._v("Data Type Correspondence")]),e._v(" "),t("li",[e._v("TSFInputFormat Explanation")]),e._v(" "),t("li",[e._v("Examples\n"),t("ul",[t("li",[e._v("Read Example: calculate the sum")]),e._v(" "),t("li",[e._v("Write Example: write the average into Tsfile")])])])])])]),e._v(" "),t("h1",{attrs:{id:"tsfile-hadoop-connector-user-guide"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tsfile-hadoop-connector-user-guide"}},[e._v("#")]),e._v(" TsFile-Hadoop-Connector User Guide")]),e._v(" "),t("h2",{attrs:{id:"about-tsfile-hadoop-connector"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#about-tsfile-hadoop-connector"}},[e._v("#")]),e._v(" About TsFile-Hadoop-Connector")]),e._v(" "),t("p",[e._v("TsFile-Hadoop-Connector implements the support of Hadoop for external data sources of Tsfile type. This enables users to read, write and query Tsfile by Hadoop.")]),e._v(" "),t("p",[e._v("With this connector, you can")]),e._v(" "),t("ul",[t("li",[e._v("load a single TsFile, from either the local file system or hdfs, into Hadoop")]),e._v(" "),t("li",[e._v("load all files in a specific directory, from either the local file system or hdfs, into hadoop")]),e._v(" "),t("li",[e._v("write data from Hadoop into TsFile")])]),e._v(" "),t("h2",{attrs:{id:"system-requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#system-requirements"}},[e._v("#")]),e._v(" System Requirements")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Hadoop Version")]),e._v(" "),t("th",[e._v("Java Version")]),e._v(" "),t("th",[e._v("TsFile Version")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[t("code",[e._v("2.7.3")])]),e._v(" "),t("td",[t("code",[e._v("1.8")])]),e._v(" "),t("td",[t("code",[e._v("0.10.0")])])])])]),e._v(" "),t("blockquote",[t("p",[e._v("Note: For more information about how to download and use TsFile, please see the following link: https://github.com/apache/incubator-iotdb/tree/master/tsfile.")])]),e._v(" "),t("h2",{attrs:{id:"data-type-correspondence"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data-type-correspondence"}},[e._v("#")]),e._v(" Data Type Correspondence")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("TsFile data type")]),e._v(" "),t("th",[e._v("Hadoop writable")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("BOOLEAN")]),e._v(" "),t("td",[e._v("BooleanWritable")])]),e._v(" "),t("tr",[t("td",[e._v("INT32")]),e._v(" "),t("td",[e._v("IntWritable")])]),e._v(" "),t("tr",[t("td",[e._v("INT64")]),e._v(" "),t("td",[e._v("LongWritable")])]),e._v(" "),t("tr",[t("td",[e._v("FLOAT")]),e._v(" "),t("td",[e._v("FloatWritable")])]),e._v(" "),t("tr",[t("td",[e._v("DOUBLE")]),e._v(" "),t("td",[e._v("DoubleWritable")])]),e._v(" "),t("tr",[t("td",[e._v("TEXT")]),e._v(" "),t("td",[e._v("Text")])])])]),e._v(" "),t("h2",{attrs:{id:"tsfinputformat-explanation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tsfinputformat-explanation"}},[e._v("#")]),e._v(" TSFInputFormat Explanation")]),e._v(" "),t("p",[e._v("TSFInputFormat extract data from tsfile and format them into records of "),t("code",[e._v("MapWritable")]),e._v(".")]),e._v(" "),t("p",[e._v("Supposing that we want to extract data of the device named "),t("code",[e._v("d1")]),e._v(" which has three sensors named "),t("code",[e._v("s1")]),e._v(", "),t("code",[e._v("s2")]),e._v(", "),t("code",[e._v("s3")]),e._v(".")]),e._v(" "),t("p",[t("code",[e._v("s1")]),e._v("'s type is "),t("code",[e._v("BOOLEAN")]),e._v(", "),t("code",[e._v("s2")]),e._v("'s type is "),t("code",[e._v("DOUBLE")]),e._v(", "),t("code",[e._v("s3")]),e._v("'s type is "),t("code",[e._v("TEXT")]),e._v(".")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("MapWritable")]),e._v(" struct will be like:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('{\n    "time_stamp": 10000000,\n    "device_id":  d1,\n    "s1":         true,\n    "s2":         3.14,\n    "s3":         "middle"\n}\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br")])]),t("p",[e._v("In the Map job of Hadoop, you can get any value you want by key as following:")]),e._v(" "),t("p",[t("code",[e._v('mapwritable.get(new Text("s1"))')])]),e._v(" "),t("blockquote",[t("p",[e._v("Note: All the keys in "),t("code",[e._v("MapWritable")]),e._v(" have type of "),t("code",[e._v("Text")]),e._v(".")])]),e._v(" "),t("h2",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),t("h3",{attrs:{id:"read-example-calculate-the-sum"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#read-example-calculate-the-sum"}},[e._v("#")]),e._v(" Read Example: calculate the sum")]),e._v(" "),t("p",[e._v("First of all, we should tell InputFormat what kind of data we want from tsfile.")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('    // configure reading time enable\n    TSFInputFormat.setReadTime(job, true); \n    // configure reading deviceId enable\n    TSFInputFormat.setReadDeviceId(job, true); \n    // configure reading which deltaObjectIds\n    String[] deviceIds = {"device_1"};\n    TSFInputFormat.setReadDeviceIds(job, deltaObjectIds);\n    // configure reading which measurementIds\n    String[] measurementIds = {"sensor_1", "sensor_2", "sensor_3"};\n    TSFInputFormat.setReadMeasurementIds(job, measurementIds);\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br")])]),t("p",[e._v("And then,the output key and value of mapper and reducer should be specified")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("    // set inputformat and outputformat\n    job.setInputFormatClass(TSFInputFormat.class);\n    // set mapper output key and value\n    job.setMapOutputKeyClass(Text.class);\n    job.setMapOutputValueClass(DoubleWritable.class);\n    // set reducer output key and value\n    job.setOutputKeyClass(Text.class);\n    job.setOutputValueClass(DoubleWritable.class);\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br")])]),t("p",[e._v("Then, the "),t("code",[e._v("mapper")]),e._v(" and "),t("code",[e._v("reducer")]),e._v(" class is how you deal with the "),t("code",[e._v("MapWritable")]),e._v(" produced by "),t("code",[e._v("TSFInputFormat")]),e._v(" class.")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('  public static class TSMapper extends Mapper<NullWritable, MapWritable, Text, DoubleWritable> {\n\n    @Override\n    protected void map(NullWritable key, MapWritable value,\n        Mapper<NullWritable, MapWritable, Text, DoubleWritable>.Context context)\n        throws IOException, InterruptedException {\n\n      Text deltaObjectId = (Text) value.get(new Text("device_id"));\n      context.write(deltaObjectId, (DoubleWritable) value.get(new Text("sensor_3")));\n    }\n  }\n\n  public static class TSReducer extends Reducer<Text, DoubleWritable, Text, DoubleWritable> {\n\n    @Override\n    protected void reduce(Text key, Iterable<DoubleWritable> values,\n        Reducer<Text, DoubleWritable, Text, DoubleWritable>.Context context)\n        throws IOException, InterruptedException {\n\n      double sum = 0;\n      for (DoubleWritable value : values) {\n        sum = sum + value.get();\n      }\n      context.write(key, new DoubleWritable(sum));\n    }\n  }\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br"),t("span",{staticClass:"line-number"},[e._v("19")]),t("br"),t("span",{staticClass:"line-number"},[e._v("20")]),t("br"),t("span",{staticClass:"line-number"},[e._v("21")]),t("br"),t("span",{staticClass:"line-number"},[e._v("22")]),t("br"),t("span",{staticClass:"line-number"},[e._v("23")]),t("br"),t("span",{staticClass:"line-number"},[e._v("24")]),t("br"),t("span",{staticClass:"line-number"},[e._v("25")]),t("br"),t("span",{staticClass:"line-number"},[e._v("26")]),t("br")])]),t("blockquote",[t("p",[e._v("Note: For the complete code, please see the following link: https://github.com/apache/incubator-iotdb/blob/master/example/hadoop/src/main/java/org/apache/iotdb//hadoop/tsfile/TSFMRReadExample.java")])]),e._v(" "),t("h3",{attrs:{id:"write-example-write-the-average-into-tsfile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#write-example-write-the-average-into-tsfile"}},[e._v("#")]),e._v(" Write Example: write the average into Tsfile")]),e._v(" "),t("p",[e._v("Except for the "),t("code",[e._v("OutputFormatClass")]),e._v(", the rest of configuration code for hadoop map-reduce job is almost same as above.")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("   job.setOutputFormatClass(TSFOutputFormat.class);\n   // set reducer output key and value\n   job.setOutputKeyClass(NullWritable.class);\n   job.setOutputValueClass(HDFSTSRecord.class);\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("p",[e._v("Then, the "),t("code",[e._v("mapper")]),e._v(" and "),t("code",[e._v("reducer")]),e._v(" class is how you deal with the "),t("code",[e._v("MapWritable")]),e._v(" produced by "),t("code",[e._v("TSFInputFormat")]),e._v(" class.")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('    public static class TSMapper extends Mapper<NullWritable, MapWritable, Text, MapWritable> {\n        @Override\n        protected void map(NullWritable key, MapWritable value,\n                           Mapper<NullWritable, MapWritable, Text, MapWritable>.Context context)\n                throws IOException, InterruptedException {\n\n            Text deltaObjectId = (Text) value.get(new Text("device_id"));\n            long timestamp = ((LongWritable)value.get(new Text("timestamp"))).get();\n            if (timestamp % 100000 == 0) {\n                context.write(deltaObjectId, new MapWritable(value));\n            }\n        }\n    }\n\n    /**\n     * This reducer calculate the average value.\n     */\n    public static class TSReducer extends Reducer<Text, MapWritable, NullWritable, HDFSTSRecord> {\n\n        @Override\n        protected void reduce(Text key, Iterable<MapWritable> values,\n                              Reducer<Text, MapWritable, NullWritable, HDFSTSRecord>.Context context) throws IOException, InterruptedException {\n            long sensor1_value_sum = 0;\n            long sensor2_value_sum = 0;\n            double sensor3_value_sum = 0;\n            long num = 0;\n            for (MapWritable value : values) {\n                num++;\n                sensor1_value_sum += ((LongWritable)value.get(new Text("sensor_1"))).get();\n                sensor2_value_sum += ((LongWritable)value.get(new Text("sensor_2"))).get();\n                sensor3_value_sum += ((DoubleWritable)value.get(new Text("sensor_3"))).get();\n            }\n            HDFSTSRecord tsRecord = new HDFSTSRecord(1L, key.toString());\n            DataPoint dPoint1 = new LongDataPoint("sensor_1", sensor1_value_sum / num);\n            DataPoint dPoint2 = new LongDataPoint("sensor_2", sensor2_value_sum / num);\n            DataPoint dPoint3 = new DoubleDataPoint("sensor_3", sensor3_value_sum / num);\n            tsRecord.addTuple(dPoint1);\n            tsRecord.addTuple(dPoint2);\n            tsRecord.addTuple(dPoint3);\n            context.write(NullWritable.get(), tsRecord);\n        }\n    }\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br"),t("span",{staticClass:"line-number"},[e._v("19")]),t("br"),t("span",{staticClass:"line-number"},[e._v("20")]),t("br"),t("span",{staticClass:"line-number"},[e._v("21")]),t("br"),t("span",{staticClass:"line-number"},[e._v("22")]),t("br"),t("span",{staticClass:"line-number"},[e._v("23")]),t("br"),t("span",{staticClass:"line-number"},[e._v("24")]),t("br"),t("span",{staticClass:"line-number"},[e._v("25")]),t("br"),t("span",{staticClass:"line-number"},[e._v("26")]),t("br"),t("span",{staticClass:"line-number"},[e._v("27")]),t("br"),t("span",{staticClass:"line-number"},[e._v("28")]),t("br"),t("span",{staticClass:"line-number"},[e._v("29")]),t("br"),t("span",{staticClass:"line-number"},[e._v("30")]),t("br"),t("span",{staticClass:"line-number"},[e._v("31")]),t("br"),t("span",{staticClass:"line-number"},[e._v("32")]),t("br"),t("span",{staticClass:"line-number"},[e._v("33")]),t("br"),t("span",{staticClass:"line-number"},[e._v("34")]),t("br"),t("span",{staticClass:"line-number"},[e._v("35")]),t("br"),t("span",{staticClass:"line-number"},[e._v("36")]),t("br"),t("span",{staticClass:"line-number"},[e._v("37")]),t("br"),t("span",{staticClass:"line-number"},[e._v("38")]),t("br"),t("span",{staticClass:"line-number"},[e._v("39")]),t("br"),t("span",{staticClass:"line-number"},[e._v("40")]),t("br"),t("span",{staticClass:"line-number"},[e._v("41")]),t("br"),t("span",{staticClass:"line-number"},[e._v("42")]),t("br")])]),t("blockquote",[t("p",[e._v("Note: For the complete code, please see the following link: https://github.com/apache/incubator-iotdb/blob/master/example/hadoop/src/main/java/org/apache/iotdb//hadoop/tsfile/TSMRWriteExample.java")])])])}),[],!1,null,null,null);t.default=n.exports}}]);