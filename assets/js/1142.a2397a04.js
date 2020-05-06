(window.webpackJsonp=window.webpackJsonp||[]).push([[1142],{1601:function(e,r,a){"use strict";a.r(r);var t=a(49),s=Object(t.a)({},(function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"数据分区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据分区"}},[e._v("#")]),e._v(" 数据分区")]),e._v(" "),a("p",[e._v("时间序列数据在存储组和时间范围两个层级上进行分区")]),e._v(" "),a("h2",{attrs:{id:"存储组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#存储组"}},[e._v("#")]),e._v(" 存储组")]),e._v(" "),a("p",[e._v('存储组由用户显示指定，使用语句"SET STORAGE GROUP TO"来指定存储组，每一个存储组有一个对应的 StorageGroupProcessor')]),e._v(" "),a("p",[e._v("其拥有的主要字段为：")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("一个读写锁: insertLock")])]),e._v(" "),a("li",[a("p",[e._v("每个时间分区所对应的未关闭的顺序文件处理器: workSequenceTsFileProcessors")])]),e._v(" "),a("li",[a("p",[e._v("每个时间分区所对应的未关闭的乱序文件处理器: workUnsequenceTsFileProcessors")])]),e._v(" "),a("li",[a("p",[e._v("该存储组的全部顺序文件列表（按照时间排序）: sequenceFileTreeSet")])]),e._v(" "),a("li",[a("p",[e._v("该存储组的全部乱序文件列表（无顺序）: unSequenceFileList")])]),e._v(" "),a("li",[a("p",[e._v("记录每一个设备最后写入时间的map，顺序数据刷盘时会使用该map记录的时间: latestTimeForEachDevice")])]),e._v(" "),a("li",[a("p",[e._v("记录每一个设备最后刷盘时间的map，用来区分顺序和乱序数据: latestFlushedTimeForEachDevice")])]),e._v(" "),a("li",[a("p",[e._v("每个时间分区所对应的版本生成器map，便于查询时确定不同chunk的优先级: timePartitionIdVersionControllerMap")])])]),e._v(" "),a("h3",{attrs:{id:"相关代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关代码"}},[e._v("#")]),e._v(" 相关代码")]),e._v(" "),a("ul",[a("li",[e._v("src/main/java/org/apache/iotdb/db/engine/StorageEngine.java")])]),e._v(" "),a("h2",{attrs:{id:"时间范围"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#时间范围"}},[e._v("#")]),e._v(" 时间范围")]),e._v(" "),a("p",[e._v("同一个存储组中的数据按照用户指定的时间范围进行分区，相关参数为partition_interval，默认为周，也就是不同周的数据会放在不同的分区中")]),e._v(" "),a("h3",{attrs:{id:"实现逻辑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现逻辑"}},[e._v("#")]),e._v(" 实现逻辑")]),e._v(" "),a("p",[e._v("StorageGroupProcessor 对插入的数据进行分区计算，找到指定的 TsFileProcessor，而每一个 TsFileProcessor 对应的 TsFile 会被放置在不同的分区文件夹内")]),e._v(" "),a("h3",{attrs:{id:"文件结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件结构"}},[e._v("#")]),e._v(" 文件结构")]),e._v(" "),a("p",[e._v("分区后的文件结构如下：")]),e._v(" "),a("p",[e._v("data")]),e._v(" "),a("p",[e._v("-- sequence")]),e._v(" "),a("p",[e._v("---- [存储组名1]")]),e._v(" "),a("p",[e._v("------ [时间分区ID1]")]),e._v(" "),a("p",[e._v("-------- xxxx.tsfile")]),e._v(" "),a("p",[e._v("-------- xxxx.resource")]),e._v(" "),a("p",[e._v("------ [时间分区ID2]")]),e._v(" "),a("p",[e._v("---- [存储组名2]")]),e._v(" "),a("p",[e._v("-- unsequence")]),e._v(" "),a("h3",{attrs:{id:"相关代码-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关代码-2"}},[e._v("#")]),e._v(" 相关代码")]),e._v(" "),a("ul",[a("li",[e._v("src/main/java/org/apache/iotdb/db/engine/storagegroup.StoragetGroupProcessor.java 中的 getOrCreateTsFileProcessorIntern 方法")])])])}),[],!1,null,null,null);r.default=s.exports}}]);