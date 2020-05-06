(window.webpackJsonp=window.webpackJsonp||[]).push([[1155],{1616:function(e,s,a){"use strict";a.r(s);var t=a(49),n=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"空值填充"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#空值填充"}},[e._v("#")]),e._v(" 空值填充")]),e._v(" "),a("p",[e._v("空值填充的主要逻辑在 FillQueryExecutor")]),e._v(" "),a("ul",[a("li",[e._v("org.apache.iotdb.db.query.executor.FillQueryExecutor")])]),e._v(" "),a("p",[e._v("IoTDB 中支持两种填充方式，Previous填充和Linear填充。Linear填充的实现逻辑较为简单，在此章中重点介绍Previous填充的实现逻辑。")]),e._v(" "),a("h2",{attrs:{id:"previous填充"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#previous填充"}},[e._v("#")]),e._v(" Previous填充")]),e._v(" "),a("p",[e._v("Previous填充是使用离查询时间戳最近且小于等于查询时间戳的值来进行填充的一种方式，下图展示了一种可能的填充情况。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("                                     |\n+-------------------------+          |\n|     seq files           |          |\n+-------------------------+          |\n                                     |\n            +---------------------------+\n            |     unseq files        |  |\n            +---------------------------+ \n                                     |\n                                     |\n                                 queryTime\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br")])]),a("h2",{attrs:{id:"设计原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设计原理"}},[e._v("#")]),e._v(" 设计原理")]),e._v(" "),a("p",[e._v("在实际生产场景中，可能需要在大量的顺序和乱序TsFile中查找可用的填充值，因此解开大量TsFile文件会成为性能瓶颈。我们设计的思路在于尽可能的减少需要解开tsFile文件的个数，从而加速找到填充值这一过程。")]),e._v(" "),a("h2",{attrs:{id:"顺序文件查找-最近点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#顺序文件查找-最近点"}},[e._v("#")]),e._v(' 顺序文件查找"最近点"')]),e._v(" "),a("p",[e._v('首先在顺序文件中查询满足条件的"最近点"。由于所有顺序文件及其所有包含的chunk数据都已经按照顺序排列，因此这个"最近点"可以通过'),a("code",[e._v("retrieveValidLastPointFromSeqFiles()")]),e._v("方法很容易找到。")]),e._v(" "),a("p",[e._v('这个找到的"最近点"是可以成为Previous填充的最终值的，因此它在接下来的搜索中能够被用来作为下界来寻找其他更好的的填充值。接下来只有那些时间戳大于这个下界的点才是Previous填充的结果值。')]),e._v(" "),a("p",[e._v('下例中的unseq 文件由于其最大值没有超过"最近点"，因此不需要再进一步搜索。')]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("                        last point\n                              |       |\n            +---------------------------+\n            |   seq file      |       | |\n            +---------------------------+ \n  +-------------------------+ |       |\n  |      unseq file         | |       |\n  +-------------------------+ |       |\n                              |       |\n                                      |\n                                queryTime\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br")])]),a("h2",{attrs:{id:"筛选乱序文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#筛选乱序文件"}},[e._v("#")]),e._v(" 筛选乱序文件")]),e._v(" "),a("p",[e._v("筛选并解开乱序文件的逻辑在成员函数"),a("code",[e._v("UnpackOverlappedUnseqFiles(long lBoundTime)")]),e._v("中，该方法接受一个下界参数，将满足要求的乱序文件解开且把它们的TimeseriesMetadata结构存入"),a("code",[e._v("unseqTimeseriesMetadataList")]),e._v("中。")]),e._v(" "),a("p",[a("code",[e._v("UnpackOverlappedUnseqFiles(long lBoundTime)")]),e._v("方法首先用 "),a("code",[e._v("lBoundTime")]),e._v("排除掉不满足要求的乱序文件，剩下被筛选后的乱序文件都一定会包含"),a("code",[e._v("queryTime")]),e._v("时间戳，即startTime <= queryTime and queryTime <= endTime。如果乱序文件的start time大于"),a("code",[e._v("lBoundTime")]),e._v("，更新"),a("code",[e._v("lBoundTime")]),e._v("。")]),e._v(" "),a("p",[e._v("下图中，case 1中的"),a("code",[e._v("lBoundTime")]),e._v("将会被更新，而case 2中的则不会被更新。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("case1           case2\n  |              |                     |\n  |          +---------------------------+\n  |          |   |    unseq file       | |\n  |          +---------------------------+ \n  |              |                     |\n  |              |                     |\nlBoundTime   lBoundTime            queryTime\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("while (!unseqFileResource.isEmpty()) {\n  // The very end time of unseq files is smaller than lBoundTime,\n  // then skip all the rest unseq files\n  if (unseqFileResource.peek().getEndTimeMap().get(seriesPath.getDevice()) < lBoundTime) {\n    return;\n  }\n  TimeseriesMetadata timeseriesMetadata =\n      FileLoaderUtils.loadTimeSeriesMetadata(\n          unseqFileResource.poll(), seriesPath, context, timeFilter, allSensors);\n  if (timeseriesMetadata != null && timeseriesMetadata.getStatistics().canUseStatistics()\n      && lBoundTime <= timeseriesMetadata.getStatistics().getEndTime()) {\n    lBoundTime = Math.max(lBoundTime, timeseriesMetadata.getStatistics().getStartTime());\n    unseqTimeseriesMetadataList.add(timeseriesMetadata);\n    break;\n  }\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br")])]),a("p",[e._v("接下来我们可以使用得到的Timeseries Metadata来查找所有其他重叠的乱序文件。需要注意的依旧是当一个重叠的乱序文件被找到后，需要按情况更新"),a("code",[e._v("lBoundTime")]),e._v("。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("while (!unseqFileResource.isEmpty()\n        && (lBoundTime <= unseqFileResource.peek().getEndTimeMap().get(seriesPath.getDevice()))) {\n  TimeseriesMetadata timeseriesMetadata =\n      FileLoaderUtils.loadTimeSeriesMetadata(\n          unseqFileResource.poll(), seriesPath, context, timeFilter, allSensors);\n  unseqTimeseriesMetadataList.add(timeseriesMetadata);\n  // update lBoundTime if current unseq timeseriesMetadata's last point is a valid result\n  if (timeseriesMetadata.getStatistics().canUseStatistics()\n      && endtimeContainedByTimeFilter(timeseriesMetadata.getStatistics())) {\n    lBoundTime = Math.max(lBoundTime, timeseriesMetadata.getStatistics().getEndTime());\n  }\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br")])]),a("h2",{attrs:{id:"组合最终结果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组合最终结果"}},[e._v("#")]),e._v(" 组合最终结果")]),e._v(" "),a("p",[e._v("最终结果在方法"),a("code",[e._v("getFillResult()")]),e._v(" 中生成。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("public TimeValuePair getFillResult() throws IOException {\n    TimeValuePair lastPointResult = retrieveValidLastPointFromSeqFiles();\n    UnpackOverlappedUnseqFiles(lastPointResult.getTimestamp());\n    \n    long lastVersion = 0;\n    PriorityQueue<ChunkMetadata> sortedChunkMetatdataList = sortUnseqChunkMetadatasByEndtime();\n    while (!sortedChunkMetatdataList.isEmpty()\n        && lastPointResult.getTimestamp() <= sortedChunkMetatdataList.peek().getEndTime()) {\n      ChunkMetadata chunkMetadata = sortedChunkMetatdataList.poll();\n      TimeValuePair lastChunkPoint = getChunkLastPoint(chunkMetadata);\n      if (shouldUpdate(lastPointResult.getTimestamp(), lastVersion,\n          lastChunkPoint.getTimestamp(), chunkMetadata.getVersion())) {\n        lastPointResult = lastChunkPoint;\n        lastVersion = chunkMetadata.getVersion();\n      }\n    }\n    return lastPointResult;\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);