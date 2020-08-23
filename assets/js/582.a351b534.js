(window.webpackJsonp=window.webpackJsonp||[]).push([[582],{1140:function(e,v,_){"use strict";_.r(v);var o=_(69),i=Object(o.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"重启恢复流程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#重启恢复流程"}},[e._v("#")]),e._v(" 重启恢复流程")]),e._v(" "),_("p",[e._v("重启恢复是以存储组为粒度进行的，恢复的入口是 StorageGroupProcessor 的 recover()")]),e._v(" "),_("h2",{attrs:{id:"存储组恢复流程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#存储组恢复流程"}},[e._v("#")]),e._v(" 存储组恢复流程")]),e._v(" "),_("ul",[_("li",[_("p",[e._v("org.apache.iotdb.db.engine.storagegroup.StorageGroupProcessor.recover()")])]),e._v(" "),_("li",[_("p",[e._v("首先获得该存储组下所有以.tsfile结尾的数据文件，返回 TsFileResource，共有如下几个文件列表")])]),e._v(" "),_("li",[_("p",[e._v("顺序文件")]),e._v(" "),_("ul",[_("li",[e._v("0.10 版本的文件（封口/未封口）")]),e._v(" "),_("li",[e._v("0.9 版本的文件（封口）")])])]),e._v(" "),_("li",[_("p",[e._v("乱序文件")]),e._v(" "),_("ul",[_("li",[e._v("0.10 版本的文件（封口/未封口）")]),e._v(" "),_("li",[e._v("0.9 版本的文件（封口）")])])]),e._v(" "),_("li",[_("p",[e._v("若该存储组下有 0.9 版本的 TsFile 文件，则将旧版本的顺序和乱序文件分别加入"),_("code",[e._v("upgradeSeqFileList")]),e._v("和"),_("code",[e._v("upgradeSeqFileList")]),e._v("中，供升级和查询使用。")])]),e._v(" "),_("li",[_("p",[e._v("将顺序、乱序文件按照分区分组 Map<Long, List"),_("TsFileResource",[e._v(">")])],1)]),e._v(" "),_("li",[_("p",[e._v("恢复每个分区的顺序文件，将上一步获得的每个分区的顺序 TsFile 文件作为参数，调用"),_("code",[e._v("recoverTsFiles")]),e._v("进行恢复，该方法会将恢复后的顺序 TsFile 以TsFileResource 的形式放入"),_("code",[e._v("sequenceFileTreeSet")]),e._v("中，若该 TsFile 是此分区的最后一个，且未封口，则还要为其构造"),_("code",[e._v("TsFileProcessor")]),e._v("对象，并加入"),_("code",[e._v("workSequenceTsFileProcessors")]),e._v("中，该方法的具体细节会在下一小节阐述。")])]),e._v(" "),_("li",[_("p",[e._v("恢复每个分区的乱序文件，将上一步获得的每个分区的乱序 TsFile 文件作为参数，调用"),_("code",[e._v("recoverTsFiles")]),e._v("进行恢复，该方法会将恢复后的乱序 TsFile 以 TsFileResource 的形式放入"),_("code",[e._v("unSequenceFileList")]),e._v("中，若该 TsFile 是此分区的最后一个，且未封口，则还要为其构造"),_("code",[e._v("TsFileProcessor")]),e._v("对象，并加入"),_("code",[e._v("workUnsequenceTsFileProcessors")]),e._v("中，该方法的具体细节会在下一小节阐述。")])]),e._v(" "),_("li",[_("p",[e._v("分别遍历上两步得到的"),_("code",[e._v("sequenceFileTreeSet")]),e._v("和"),_("code",[e._v("unSequenceFileList")]),e._v("，更新分区对应的版本号")])]),e._v(" "),_("li",[_("p",[e._v("检查有没有merge时候的Modification文件，并调用"),_("code",[e._v("RecoverMergeTask.recoverMerge")]),e._v("方法对merge进行恢复")])]),e._v(" "),_("li",[_("p",[e._v("调用"),_("code",[e._v("updateLastestFlushedTime()")]),e._v("方法，用 0.9 版本的顺序tsfile文件，更新"),_("code",[e._v("latestTimeForEachDevice")]),e._v(", "),_("code",[e._v("partitionLatestFlushedTimeForEachDevice")]),e._v("以及"),_("code",[e._v("globalLatestFlushedTimeForEachDevice")])]),e._v(" "),_("ul",[_("li",[_("code",[e._v("latestTimeForEachDevice")]),e._v(" 记录了所有device已经插入的各个分区下的最新的时间戳(包括未flush的和已flush的)")]),e._v(" "),_("li",[_("code",[e._v("partitionLatestFlushedTimeForEachDevice")]),e._v(" 记录了所有device已经flush的各个分区下的最新的时间戳，它用来判断一个新插入的点是不是乱序点")]),e._v(" "),_("li",[_("code",[e._v("globalLatestFlushedTimeForEachDevice")]),e._v(" 记录了所有device已经flush的最新时间戳(是各个分区的最新时间戳的汇总)")])])]),e._v(" "),_("li",[_("p",[e._v("最后遍历"),_("code",[e._v("sequenceFileTreeSet")]),e._v("，用恢复出来的顺序文件，再次更新"),_("code",[e._v("latestTimeForEachDevice")]),e._v(", "),_("code",[e._v("partitionLatestFlushedTimeForEachDevice")]),e._v("以及"),_("code",[e._v("globalLatestFlushedTimeForEachDevice")])])])]),e._v(" "),_("h2",{attrs:{id:"恢复一个分区的（顺序-乱序）-tsfile"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#恢复一个分区的（顺序-乱序）-tsfile"}},[e._v("#")]),e._v(" 恢复一个分区的（顺序/乱序） TsFile")]),e._v(" "),_("ul",[_("li",[e._v("org.apache.iotdb.db.engine.storagegroup.StorageGroupProcessor.recoverTsFiles")])]),e._v(" "),_("p",[e._v("该方法主要负责遍历传进来的所有 TsFile，挨个进行恢复。")]),e._v(" "),_("ul",[_("li",[_("p",[e._v("构造出"),_("code",[e._v("TsFileRecoverPerformer")]),e._v("对象，对 TsFile 文件进行恢复，恢复的逻辑封装在"),_("code",[e._v("TsFileRecoverPerformer")]),e._v("的"),_("code",[e._v("recover()")]),e._v("方法中（具体细节在下一小节展开阐述），该方法会返回一个恢复后的"),_("code",[e._v("RestorableTsFileIOWriter")]),e._v("对象。")]),e._v(" "),_("ul",[_("li",[e._v("若恢复过程失败，则记录log，并跳过该tsfile")])])]),e._v(" "),_("li",[_("p",[e._v("若该 TsFile 文件不是最后一个文件，或者该 TsFile 文件是最后一个文件，但已经被关闭或标记被关闭，只需将该 TsFile 文件在内存中对应的"),_("code",[e._v("TsFileResource")]),e._v("对象的"),_("code",[e._v("closed")]),e._v("属性置成"),_("code",[e._v("true")]),e._v("即可。")])]),e._v(" "),_("li",[_("p",[e._v("若该 TsFile 文件可以继续写入，则表示这是此分区的最后一个 TsFile，且未封口，则继续保持其未封口的状态，需要为它构造一个"),_("code",[e._v("TsFileProcessor")]),e._v("对象，并将其放到"),_("code",[e._v("workSequenceTsFileProcessors")]),e._v("或"),_("code",[e._v("workUnsequenceTsFileProcessors")]),e._v("中。")])]),e._v(" "),_("li",[_("p",[e._v("最后将恢复出来的 TsFile 文件在内存中对应的"),_("code",[e._v("TsFileResource")]),e._v("对象放入"),_("code",[e._v("sequenceFileTreeSet")]),e._v("或"),_("code",[e._v("unSequenceFileList")]),e._v("中")])])]),e._v(" "),_("h3",{attrs:{id:"恢复一个-tsfile-文件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#恢复一个-tsfile-文件"}},[e._v("#")]),e._v(" 恢复一个 TsFile 文件")]),e._v(" "),_("ul",[_("li",[e._v("org.apache.iotdb.db.writelog.recover.TsFileRecoverPerformer.recover")])]),e._v(" "),_("p",[e._v("该方法主要负责每个具体的 TsFile 文件的恢复。")]),e._v(" "),_("ul",[_("li",[_("p",[e._v("首先用tsfile文件构造出一个"),_("code",[e._v("RestorableTsFileIOWriter")]),e._v("对象，在"),_("code",[e._v("RestorableTsFileIOWriter")]),e._v("的构造方法中，会对该tsfile的文件内容进行检查，必要时进行截断")]),e._v(" "),_("ul",[_("li",[e._v("如果这个文件中没有任何内容，则为其写入"),_("code",[e._v("MAGIC_STRING")]),e._v("和"),_("code",[e._v("VERSION_NUMBER")]),e._v("后，直接返回，此时的"),_("code",[e._v("crashed")]),e._v("为"),_("code",[e._v("false")]),e._v("，"),_("code",[e._v("canWrite")]),e._v("为"),_("code",[e._v("true")]),e._v("；")]),e._v(" "),_("li",[e._v("如果文件中有内容，构造"),_("code",[e._v("TsFileSequenceReader")]),e._v("对象对内容进行解析，调用"),_("code",[e._v("selfCheck")]),e._v("方法进行自检，并将不完整的内容截断，初始化"),_("code",[e._v("truncatedSize")]),e._v("为"),_("code",[e._v("HeaderLength")]),e._v(" "),_("ul",[_("li",[e._v("若文件内容完整（有完整的头部的"),_("code",[e._v("MAGIC_STRING")]),e._v("和"),_("code",[e._v("VERSION_NUMBER")]),e._v("，以及尾部的"),_("code",[e._v("MAGIC_STRING")]),e._v("），则返回"),_("code",[e._v("TsFileCheckStatus.COMPLETE_FILE")])]),e._v(" "),_("li",[e._v("若文件长度小于"),_("code",[e._v("HeaderLength(len(MAGIC_STRING) + len(VERSION_NUMBER))")]),e._v("，或者文件头部内容不是"),_("code",[e._v("MAGIC_STRING")]),e._v("，则返回"),_("code",[e._v("INCOMPATIBLE_FILE")])]),e._v(" "),_("li",[e._v("若文件长度刚好等于"),_("code",[e._v("HeaderLength")]),e._v("，且文件内容就是"),_("code",[e._v("MAGIC_STRING + VERSION_NUMBER")]),e._v("，则返回"),_("code",[e._v("HeaderLength")])]),e._v(" "),_("li",[e._v("若文件长度大于"),_("code",[e._v("HeaderLength")]),e._v("，且文件头合法，但文件尾部没有"),_("code",[e._v("MAGIC_STRING")]),e._v("，表示该文件不完整，需要进行截断。从"),_("code",[e._v("VERSION_NUMBER")]),e._v("往后读，读出chunk中的数据，并根据chunk中的数据恢复出ChunkMetadata，若遇到"),_("code",[e._v("CHUNK_GROUP_FOOTER")]),e._v("，则表示整个ChunkGroup是完整的，更新"),_("code",[e._v("truncatedSize")]),e._v("至当前位置")]),e._v(" "),_("li",[e._v("返回"),_("code",[e._v("truncatedSize")])])])]),e._v(" "),_("li",[e._v("根据返回的"),_("code",[e._v("truncatedSize")]),e._v("，对文件进行截断\n"),_("ul",[_("li",[e._v("若"),_("code",[e._v("truncatedSize")]),e._v("等于"),_("code",[e._v("TsFileCheckStatus.COMPLETE_FILE")]),e._v("，则将"),_("code",[e._v("crashed")]),e._v("和"),_("code",[e._v("canWrite")]),e._v("置为"),_("code",[e._v("false")]),e._v("，并关闭文件的输出流")]),e._v(" "),_("li",[e._v("若"),_("code",[e._v("truncatedSize")]),e._v("等于"),_("code",[e._v("TsFileCheckStatus.INCOMPATIBLE_FILE")]),e._v("，则关闭文件的输出流，并抛异常")]),e._v(" "),_("li",[e._v("否则，将"),_("code",[e._v("crashed")]),e._v("和"),_("code",[e._v("canWrite")]),e._v("置为"),_("code",[e._v("true")]),e._v("，并将文件截断至"),_("code",[e._v("truncatedSize")])])])])])]),e._v(" "),_("li",[_("p",[e._v("通过返回的 RestorableTsFileIOWriter 判断文件是否完整")]),e._v(" "),_("ul",[_("li",[_("p",[e._v("若该 TsFile 文件是完整的")]),e._v(" "),_("ul",[_("li",[e._v("若 TsFile 文件对应的 resource 文件存在，则将 resource 文件反序列化(包括每个设备在该tsfile文件中的最小和最大时间戳），并恢复文件版本号")]),e._v(" "),_("li",[e._v("若 TsFile 文件对应的 resource 文件不存在，则重新生成resource 文件")]),e._v(" "),_("li",[e._v("返回生成的 "),_("code",[e._v("RestorableTsFileIOWriter")])])])]),e._v(" "),_("li",[_("p",[e._v("若 TsFile 不完整")]),e._v(" "),_("ul",[_("li",[e._v("调用"),_("code",[e._v("recoverResourceFromWriter")]),e._v("，通过"),_("code",[e._v("RestorableTsFileIOWriter")]),e._v("中的ChunkMetadata信息，恢复出resource信息")]),e._v(" "),_("li",[e._v("调用"),_("code",[e._v("redoLogs")]),e._v("方法将这个文件对应的一个或多个写前日志文件中的数据都写到一个临时 Memtable 中，并持久化到这个不完整的 TsFile 中\n"),_("ul",[_("li",[e._v("对于顺序文件，跳过时间戳小于等于当前 resource 的 WAL")]),e._v(" "),_("li",[e._v("对于乱序文件，将 WAL 全部重做，有可能重复写入多个 device 的 ChunkGroup")])])]),e._v(" "),_("li",[e._v("如果该 TsFile 不是当前分区的最后一个 TsFile，或者该 TsFile 有"),_("code",[e._v(".closing")]),e._v("文件存在，则调用"),_("code",[e._v("RestorableTsFileIOWriter")]),e._v("的"),_("code",[e._v("endFile()")]),e._v("方法，将文件封口，并删除"),_("code",[e._v(".closing")]),e._v("文件，并为其生成resource文件")])])])])])])])}),[],!1,null,null,null);v.default=i.exports}}]);