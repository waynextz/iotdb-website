(window.webpackJsonp=window.webpackJsonp||[]).push([[893],{1294:function(t,e,a){"use strict";a.r(e);var s=a(19),r=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("blockquote",[e("p",[t._v("下面是IoTDB生成或使用的文件")]),t._v(" "),e("p",[t._v("持续更新中...")])]),t._v(" "),e("h1",{attrs:{id:"单机模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#单机模式"}},[t._v("#")]),t._v(" 单机模式")]),t._v(" "),e("h2",{attrs:{id:"配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[t._v("#")]),t._v(" 配置文件")]),t._v(" "),e("blockquote",[e("p",[t._v("conf目录下")])]),t._v(" "),e("ol",[e("li",[t._v("iotdb-engine.properties")]),t._v(" "),e("li",[t._v("logback.xml")]),t._v(" "),e("li",[t._v("iotdb-env.sh")]),t._v(" "),e("li",[t._v("jmx.access")]),t._v(" "),e("li",[t._v("jmx.password")]),t._v(" "),e("li",[t._v("iotdb-sync-client.properties\n"),e("ul",[e("li",[t._v("只有Sync工具会使用")])])])]),t._v(" "),e("blockquote",[e("p",[t._v("在basedir/system/schema目录下")])]),t._v(" "),e("ol",[e("li",[t._v("system.properties\n"),e("ul",[e("li",[t._v("记录的是所有不能变动的配置，启动时会检查，防止系统错误")])])])]),t._v(" "),e("h2",{attrs:{id:"状态相关的文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#状态相关的文件"}},[t._v("#")]),t._v(" 状态相关的文件")]),t._v(" "),e("h3",{attrs:{id:"元数据相关文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#元数据相关文件"}},[t._v("#")]),t._v(" 元数据相关文件")]),t._v(" "),e("blockquote",[e("p",[t._v("在basedir/system/schema目录下")])]),t._v(" "),e("h4",{attrs:{id:"元数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#元数据"}},[t._v("#")]),t._v(" 元数据")]),t._v(" "),e("ol",[e("li",[t._v("mlog.bin\n"),e("ul",[e("li",[t._v("记录的是元数据操作")])])]),t._v(" "),e("li",[t._v("mtree-1.snapshot\n"),e("ul",[e("li",[t._v("元数据快照")])])]),t._v(" "),e("li",[t._v("mtree-1.snapshot.tmp\n"),e("ul",[e("li",[t._v("临时文件，防止快照更新时，损坏旧快照文件")])])])]),t._v(" "),e("h4",{attrs:{id:"标签和属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#标签和属性"}},[t._v("#")]),t._v(" 标签和属性")]),t._v(" "),e("ol",[e("li",[t._v("tlog.txt\n"),e("ul",[e("li",[t._v("存储每个时序的标签和属性")]),t._v(" "),e("li",[t._v("默认情况下每个时序700字节")])])])]),t._v(" "),e("h3",{attrs:{id:"数据相关文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据相关文件"}},[t._v("#")]),t._v(" 数据相关文件")]),t._v(" "),e("blockquote",[e("p",[t._v("在basedir/data/目录下")])]),t._v(" "),e("h4",{attrs:{id:"wal"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wal"}},[t._v("#")]),t._v(" WAL")]),t._v(" "),e("blockquote",[e("p",[t._v("在basedir/wal目录下")])]),t._v(" "),e("ol",[e("li",[t._v("{StroageName}-{TsFileName}/wal1\n"),e("ul",[e("li",[t._v("每个memtable会对应一个wal文件")])])])]),t._v(" "),e("h4",{attrs:{id:"tsfile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tsfile"}},[t._v("#")]),t._v(" TsFile")]),t._v(" "),e("blockquote",[e("p",[t._v("在basedir/data/sequence or unsequence/{StorageGroupName}/{TimePartitionId}/目录下")])]),t._v(" "),e("ol",[e("li",[t._v("{time}-{version}-{mergeCnt}.tsfile\n"),e("ul",[e("li",[t._v("数据文件")])])]),t._v(" "),e("li",[t._v("{TsFileName}.tsfile.mod\n"),e("ul",[e("li",[t._v("更新文件，主要记录删除操作")])])])]),t._v(" "),e("h4",{attrs:{id:"tsfileresource"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tsfileresource"}},[t._v("#")]),t._v(" TsFileResource")]),t._v(" "),e("ol",[e("li",[t._v("{TsFileName}.tsfile.resource\n"),e("ul",[e("li",[t._v("TsFile的概要与索引文件")])])]),t._v(" "),e("li",[t._v("{TsFileName}.tsfile.resource.temp\n"),e("ul",[e("li",[t._v("临时文件，用于避免更新tsfile.resource时损坏tsfile.resource")])])]),t._v(" "),e("li",[t._v("{TsFileName}.tsfile.resource.closing\n"),e("ul",[e("li",[t._v("关闭标记文件，用于标记TsFile处于关闭状态，重启后可以据此选择是关闭或继续写入该文件")])])])]),t._v(" "),e("h4",{attrs:{id:"version"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[t._v("#")]),t._v(" Version")]),t._v(" "),e("blockquote",[e("p",[t._v("在basedir/system/storage_groups/{StorageGroupName}/{TimePartitionId} or upgrade目录下")])]),t._v(" "),e("ol",[e("li",[t._v("Version-{version}\n"),e("ul",[e("li",[t._v("版本号文件，使用文件名来记录当前最大的版本号")])])])]),t._v(" "),e("h4",{attrs:{id:"upgrade"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#upgrade"}},[t._v("#")]),t._v(" Upgrade")]),t._v(" "),e("blockquote",[e("p",[t._v("在basedir/system/upgrade目录下")])]),t._v(" "),e("ol",[e("li",[t._v("upgrade.txt\n"),e("ul",[e("li",[t._v("记录升级进度")])])])]),t._v(" "),e("h4",{attrs:{id:"merge"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#merge"}},[t._v("#")]),t._v(" Merge")]),t._v(" "),e("blockquote",[e("p",[t._v("在basedir/system/storage_groups/{StorageGroup}/目录下")])]),t._v(" "),e("ol",[e("li",[t._v("merge.mods\n"),e("ul",[e("li",[t._v("记录合并过程中发生的删除等操作")])])]),t._v(" "),e("li",[t._v("merge.log\n"),e("ul",[e("li",[t._v("记录合并进展")])])]),t._v(" "),e("li",[t._v("tsfile.merge\n"),e("ul",[e("li",[t._v("临时文件，每个顺序文件在合并时会产生一个对应的merge文件，用于存放临时数据")])])])]),t._v(" "),e("h4",{attrs:{id:"authority"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#authority"}},[t._v("#")]),t._v(" Authority")]),t._v(" "),e("blockquote",[e("p",[t._v("在basedir/system/users/目录下是用户信息\n在basedir/system/roles/目录下是角色信息")])]),t._v(" "),e("h4",{attrs:{id:"compressratio"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#compressratio"}},[t._v("#")]),t._v(" CompressRatio")]),t._v(" "),e("blockquote",[e("p",[t._v("在basedir/system/compression_ration目录下")])]),t._v(" "),e("ol",[e("li",[t._v("Ration-{compressionRatioSum}-{calTimes}\n"),e("ul",[e("li",[t._v("记录每个文件的压缩率")])])])]),t._v(" "),e("hr"),t._v(" "),e("h1",{attrs:{id:"集群模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#集群模式"}},[t._v("#")]),t._v(" 集群模式")]),t._v(" "),e("blockquote",[e("p",[t._v("注意：下面文件是相对单机新增的文件列表")])]),t._v(" "),e("h2",{attrs:{id:"配置文件-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置文件-2"}},[t._v("#")]),t._v(" 配置文件")]),t._v(" "),e("ol",[e("li",[t._v("iotdb-cluster.properties")])]),t._v(" "),e("h2",{attrs:{id:"状态相关文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#状态相关文件"}},[t._v("#")]),t._v(" 状态相关文件")]),t._v(" "),e("blockquote",[e("p",[t._v("在basedir目录下")])]),t._v(" "),e("ol",[e("li",[t._v("node_identifier\n"),e("ul",[e("li",[t._v("本地节点在集群中的唯一标识")])])]),t._v(" "),e("li",[t._v("partitions\n"),e("ul",[e("li",[t._v("分区表文件，记录数据分布信息")])])]),t._v(" "),e("li",[t._v("{time}_{random}.task\n"),e("ul",[e("li",[t._v("pullSnapshotTask文件，记录的是slot和owner，当一个节点加入集群时，会创建这个文件来跟踪数据拉取情况")]),t._v(" "),e("li",[t._v("在basedir/raft/{nodeIdentifier}/snapshot_task/目录下")])])])]),t._v(" "),e("h2",{attrs:{id:"raft相关文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#raft相关文件"}},[t._v("#")]),t._v(" Raft相关文件")]),t._v(" "),e("blockquote",[e("p",[t._v("在basedir/system/raftLog/{nodeIdentifier}/目录下")])]),t._v(" "),e("h3",{attrs:{id:"raft-log"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#raft-log"}},[t._v("#")]),t._v(" Raft Log")]),t._v(" "),e("ol",[e("li",[t._v(".data-{version}\n"),e("ul",[e("li",[t._v("raft committed log, 默认只保留最新的1000条日志")])])])]),t._v(" "),e("h3",{attrs:{id:"raft-meta"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#raft-meta"}},[t._v("#")]),t._v(" Raft Meta")]),t._v(" "),e("ol",[e("li",[t._v("logMeta\n"),e("ul",[e("li",[t._v("raft一些相关元数据，例如选举相关信息和日志提交信息\n"),e("ul",[e("li",[t._v("hardState: voteFor, term")]),t._v(" "),e("li",[t._v("Meta: commitLogTerm, commitLogIndex, lastLogTerm, lastLogIndex")]),t._v(" "),e("li",[t._v("...")])])])])]),t._v(" "),e("li",[t._v("logMeta.tmp\n"),e("ul",[e("li",[t._v("临时文件，用于更新logMeta时防止损坏旧的logMeta文件")])])])]),t._v(" "),e("h3",{attrs:{id:"raft-catch-up"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#raft-catch-up"}},[t._v("#")]),t._v(" Raft Catch Up")]),t._v(" "),e("blockquote",[e("p",[t._v("在basedir/remote/{nodeIdentifier}/{storageGroupName}/{partitionNum}/目录下")])]),t._v(" "),e("ol",[e("li",[t._v("{fileName}.tsfile\n"),e("ul",[e("li",[t._v("远程TsFile，拉取完毕会load进对应的存储组数据目录下")])])]),t._v(" "),e("li",[t._v("{fileName}.tsfile.mod\n"),e("ul",[e("li",[t._v("远程更新文件TsFile.mod，拉取完毕会load进对应的存储组数据目录下")])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);