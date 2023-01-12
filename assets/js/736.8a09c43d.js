(window.webpackJsonp=window.webpackJsonp||[]).push([[736],{1137:function(a,t,e){"use strict";e.r(t);var s=e(19),r=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"数据文件存储"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据文件存储"}},[a._v("#")]),a._v(" 数据文件存储")]),a._v(" "),t("p",[a._v("本节将介绍 IoTDB 的数据存储方式，便于您对 IoTDB 的数据管理有一个直观的了解。")]),a._v(" "),t("p",[a._v("IoTDB 需要存储的数据分为三类，分别为数据文件、系统文件以及写前日志文件。")]),a._v(" "),t("h2",{attrs:{id:"数据文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据文件"}},[a._v("#")]),a._v(" 数据文件")]),a._v(" "),t("blockquote",[t("p",[a._v("在 basedir/data/目录下")])]),a._v(" "),t("p",[a._v("数据文件存储了用户写入 IoTDB 系统的所有数据。包含 TsFile 文件和其他文件，可通过 "),t("RouterLink",{attrs:{to:"/zh/UserGuide/Master/Reference/DataNode-Config-Manual.html"}},[a._v("data_dirs 配置项")]),a._v(" 进行配置。")],1),a._v(" "),t("p",[a._v("为了更好的支持用户对于磁盘空间扩展等存储需求，IoTDB 为 TsFile 的存储配置增加了多文件目录的存储方式，用户可自主配置多个存储路径作为数据的持久化位置（详情见 "),t("RouterLink",{attrs:{to:"/zh/UserGuide/Master/Reference/DataNode-Config-Manual.html"}},[a._v("data_dirs 配置项")]),a._v("），并可以指定或自定义目录选择策略（详情见 "),t("RouterLink",{attrs:{to:"/zh/UserGuide/Master/Reference/DataNode-Config-Manual.html"}},[a._v("multi_dir_strategy 配置项")]),a._v("）。")],1),a._v(" "),t("h3",{attrs:{id:"tsfile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tsfile"}},[a._v("#")]),a._v(" TsFile")]),a._v(" "),t("blockquote",[t("p",[a._v("在 basedir/data/sequence or unsequence/{DatabaseName}/{DataRegionId}/{TimePartitionId}/目录下")])]),a._v(" "),t("ol",[t("li",[a._v("{time}-{version}-{inner_compaction_count}-{cross_compaction_count}.tsfile\n"),t("ul",[t("li",[a._v("数据文件")])])]),a._v(" "),t("li",[a._v("{TsFileName}.tsfile.mod\n"),t("ul",[t("li",[a._v("更新文件，主要记录删除操作")])])])]),a._v(" "),t("h3",{attrs:{id:"tsfileresource"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tsfileresource"}},[a._v("#")]),a._v(" TsFileResource")]),a._v(" "),t("ol",[t("li",[a._v("{TsFileName}.tsfile.resource\n"),t("ul",[t("li",[a._v("TsFile 的概要与索引文件")])])])]),a._v(" "),t("h3",{attrs:{id:"与合并相关的数据文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#与合并相关的数据文件"}},[a._v("#")]),a._v(" 与合并相关的数据文件")]),a._v(" "),t("blockquote",[t("p",[a._v("在 basedir/data/sequence or unsequence/{DatabaseName}/目录下")])]),a._v(" "),t("ol",[t("li",[a._v("后缀为"),t("code",[a._v(".cross")]),a._v(" 或者 "),t("code",[a._v(".inner")]),a._v(" "),t("ul",[t("li",[a._v("合并过程中产生的临时文件")])])]),a._v(" "),t("li",[a._v("后缀为"),t("code",[a._v(".inner-compaction.log")]),a._v(" 或者 "),t("code",[a._v(".cross-compaction.log")]),a._v(" "),t("ul",[t("li",[a._v("记录合并进展的日志文件")])])]),a._v(" "),t("li",[a._v("后缀为"),t("code",[a._v(".compaction.mods")]),a._v(" "),t("ul",[t("li",[a._v("记录合并过程中发生的删除等操作")])])]),a._v(" "),t("li",[a._v("后缀为"),t("code",[a._v(".meta")]),a._v("的文件\n"),t("ul",[t("li",[a._v("合并过程生成的元数据临时文件")])])])]),a._v(" "),t("h2",{attrs:{id:"系统文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#系统文件"}},[a._v("#")]),a._v(" 系统文件")]),a._v(" "),t("p",[a._v("系统 Schema 文件，存储了数据文件的元数据信息。可通过 system_dir 配置项进行配置（详情见 "),t("RouterLink",{attrs:{to:"/zh/UserGuide/Master/Reference/DataNode-Config-Manual.html"}},[a._v("system_dir 配置项")]),a._v("）。")],1),a._v(" "),t("h3",{attrs:{id:"元数据相关文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#元数据相关文件"}},[a._v("#")]),a._v(" 元数据相关文件")]),a._v(" "),t("blockquote",[t("p",[a._v("在 basedir/system/schema 目录下")])]),a._v(" "),t("h4",{attrs:{id:"元数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#元数据"}},[a._v("#")]),a._v(" 元数据")]),a._v(" "),t("ol",[t("li",[a._v("mlog.bin\n"),t("ul",[t("li",[a._v("记录的是元数据操作")])])]),a._v(" "),t("li",[a._v("mtree-1.snapshot\n"),t("ul",[t("li",[a._v("元数据快照")])])]),a._v(" "),t("li",[a._v("mtree-1.snapshot.tmp\n"),t("ul",[t("li",[a._v("临时文件，防止快照更新时，损坏旧快照文件")])])])]),a._v(" "),t("h4",{attrs:{id:"标签和属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#标签和属性"}},[a._v("#")]),a._v(" 标签和属性")]),a._v(" "),t("ol",[t("li",[a._v("tlog.txt\n"),t("ul",[t("li",[a._v("存储每个时序的标签和属性")]),a._v(" "),t("li",[a._v("默认情况下每个时序 700 字节")])])])]),a._v(" "),t("h3",{attrs:{id:"其他系统文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他系统文件"}},[a._v("#")]),a._v(" 其他系统文件")]),a._v(" "),t("h4",{attrs:{id:"version"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[a._v("#")]),a._v(" Version")]),a._v(" "),t("blockquote",[t("p",[a._v("在 basedir/system/database/{DatabaseName}/{TimePartitionId} or upgrade 目录下")])]),a._v(" "),t("ol",[t("li",[a._v("Version-{version}\n"),t("ul",[t("li",[a._v("版本号文件，使用文件名来记录当前最大的版本号")])])])]),a._v(" "),t("h4",{attrs:{id:"upgrade"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upgrade"}},[a._v("#")]),a._v(" Upgrade")]),a._v(" "),t("blockquote",[t("p",[a._v("在 basedir/system/upgrade 目录下")])]),a._v(" "),t("ol",[t("li",[a._v("upgrade.txt\n"),t("ul",[t("li",[a._v("记录升级进度")])])])]),a._v(" "),t("h4",{attrs:{id:"authority"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#authority"}},[a._v("#")]),a._v(" Authority")]),a._v(" "),t("blockquote",[t("p",[a._v("在 basedir/system/users/目录下是用户信息\n在 basedir/system/roles/目录下是角色信息")])]),a._v(" "),t("h4",{attrs:{id:"compressratio"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compressratio"}},[a._v("#")]),a._v(" CompressRatio")]),a._v(" "),t("blockquote",[t("p",[a._v("在 basedir/system/compression_ration 目录下")])]),a._v(" "),t("ol",[t("li",[a._v("Ration-{compressionRatioSum}-{calTimes}\n"),t("ul",[t("li",[a._v("记录每个文件的压缩率")])])])]),a._v(" "),t("h2",{attrs:{id:"写前日志文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#写前日志文件"}},[a._v("#")]),a._v(" 写前日志文件")]),a._v(" "),t("p",[a._v("写前日志文件存储了系统的写前日志。可通过"),t("code",[a._v("wal_dir")]),a._v("配置项进行配置（详情见 "),t("RouterLink",{attrs:{to:"/zh/UserGuide/Master/Reference/DataNode-Config-Manual.html"}},[a._v("wal_dir 配置项")]),a._v("）。")],1),a._v(" "),t("blockquote",[t("p",[a._v("在 basedir/wal 目录下")])]),a._v(" "),t("ol",[t("li",[a._v("{DatabaseName}-{TsFileName}/wal1\n"),t("ul",[t("li",[a._v("每个 memtable 会对应一个 wal 文件")])])])]),a._v(" "),t("h2",{attrs:{id:"数据存储目录设置举例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据存储目录设置举例"}},[a._v("#")]),a._v(" 数据存储目录设置举例")]),a._v(" "),t("p",[a._v("接下来我们将举一个数据目录配置的例子，来具体说明如何配置数据的存储目录。")]),a._v(" "),t("p",[a._v("IoTDB 涉及到的所有数据目录路径有：data_dirs, multi_dir_strategy, system_dir 和 wal_dir，它们分别涉及的是 IoTDB 的数据文件、数据文件多目录存储策略、系统文件以及写前日志文件。您可以选择输入路径自行配置，也可以不进行任何操作使用系统默认的配置项。")]),a._v(" "),t("p",[a._v("以下我们给出一个用户对五个目录都进行自行配置的例子。")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("dn_system_dir = $IOTDB_HOME/data/datanode/system\ndn_data_dirs = /data1/datanode/data, /data2/datanode/data, /data3/datanode/data \ndn_multi_dir_strategy=MaxDiskUsableSpaceFirstStrategy\ndn_wal_dir= $IOTDB_HOME/data/datanode/wal\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("p",[a._v("按照上述配置，系统会：")]),a._v(" "),t("ul",[t("li",[a._v("将 TsFile 存储在路径 /data1/datanode/data、路径 /data2/datanode/data 和路径 /data3/datanode/data 中。且对这三个路径的选择策略是："),t("code",[a._v("优先选择磁盘剩余空间最大的目录")]),a._v("，即在每次数据持久化到磁盘时系统会自动选择磁盘剩余空间最大的一个目录将数据进行写入")]),a._v(" "),t("li",[a._v("将系统文件存储在$IOTDB_HOME/data/datanode/data")]),a._v(" "),t("li",[a._v("将写前日志文件存储在$IOTDB_HOME/data/datanode/wal")])])])}),[],!1,null,null,null);t.default=r.exports}}]);