import{_ as l,r,o as n,c as d,b as e,d as t,a as i,w as s,e as o}from"./app-CQeJnOJS.js";const c={},u=e("h1",{id:"files",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#files"},[e("span",null,"Files")])],-1),h=e("p",null,"In IoTDB, there are many kinds of data needed to be stored. This section introduces IoTDB's data storage strategy to provide you an explicit understanding of IoTDB's data management.",-1),f=e("p",null,"The data in IoTDB is divided into three categories, namely data files, system files, and pre-write log files.",-1),p=e("h2",{id:"data-files",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#data-files"},[e("span",null,"Data Files")])],-1),m=e("blockquote",null,[e("p",null,"under directory basedir/data/")],-1),g=e("code",null,"data_dirs",-1),y=o('<h3 id="tsfile" tabindex="-1"><a class="header-anchor" href="#tsfile"><span>TsFile</span></a></h3><blockquote><p>under directory data/sequence or unsequence/{DatabaseName}/{DataRegionId}/{TimePartitionId}/</p></blockquote><ol><li>{time}-{version}-{inner_compaction_count}-{cross_compaction_count}.tsfile <ul><li>normal data file</li></ul></li><li>{TsFileName}.tsfile.mod <ul><li>modification file</li><li>record delete operation</li></ul></li></ol><h3 id="tsfileresource" tabindex="-1"><a class="header-anchor" href="#tsfileresource"><span>TsFileResource</span></a></h3><ol><li>{TsFileName}.tsfile.resource <ul><li>descriptor and statistic file of a TsFile</li></ul></li></ol><h3 id="与合并相关的数据文件" tabindex="-1"><a class="header-anchor" href="#与合并相关的数据文件"><span>与合并相关的数据文件</span></a></h3><blockquote><p>under directory basedir/data/sequence or unsequence/{DatabaseName}/</p></blockquote><ol><li>file suffixe with <code>.cross </code> or <code>.inner</code><ul><li>temporary files of metadata generated in a compaction task</li></ul></li><li>file suffixe with <code>.inner-compaction.log</code> or <code>.cross-compaction.log</code><ul><li>record the progress of a compaction task</li></ul></li><li>file suffixe with <code>.compaction.mods</code><ul><li>modification file generated during a compaction task</li></ul></li><li>file suffixe with <code>.meta</code><ul><li>temporary files of metadata generated during a merge</li></ul></li></ol><h2 id="system-files" tabindex="-1"><a class="header-anchor" href="#system-files"><span>System files</span></a></h2>',9),_=e("code",null,"base_dir",-1),b=o('<h3 id="metadata-related-files" tabindex="-1"><a class="header-anchor" href="#metadata-related-files"><span>MetaData Related Files</span></a></h3><blockquote><p>under directory basedir/system/schema</p></blockquote><h4 id="meta" tabindex="-1"><a class="header-anchor" href="#meta"><span>Meta</span></a></h4><ol><li>mlog.bin <ul><li>record the meta operation</li></ul></li><li>mtree-1.snapshot <ul><li>snapshot of metadata</li></ul></li><li>mtree-1.snapshot.tmp <ul><li>temp file, to avoid damaging the snapshot when updating it</li></ul></li></ol><h4 id="tags-attributes" tabindex="-1"><a class="header-anchor" href="#tags-attributes"><span>Tags&amp;Attributes</span></a></h4><ol><li>tlog.txt <ul><li>store tags and attributes of each TimeSeries</li><li>about 700 bytes for each TimeSeries</li></ul></li></ol><h3 id="other-system-files" tabindex="-1"><a class="header-anchor" href="#other-system-files"><span>Other System Files</span></a></h3><h4 id="version" tabindex="-1"><a class="header-anchor" href="#version"><span>Version</span></a></h4><blockquote><p>under directory basedir/system/database/{DatabaseName}/{TimePartitionId} or upgrade</p></blockquote>',9),x=e("ol",null,[e("li",{version:""},[t("Version- "),e("ul",null,[e("li",null,"version file, record the max version in fileName of a storage group")])])],-1),T=o('<h4 id="upgrade" tabindex="-1"><a class="header-anchor" href="#upgrade"><span>Upgrade</span></a></h4><blockquote><p>under directory basedir/system/upgrade</p></blockquote><ol><li>upgrade.txt <ul><li>record which files have been upgraded</li></ul></li></ol><h4 id="authority" tabindex="-1"><a class="header-anchor" href="#authority"><span>Authority</span></a></h4><blockquote><p>under directory basedir/system/users/<br> under directory basedir/system/roles/</p></blockquote><h4 id="compressratio" tabindex="-1"><a class="header-anchor" href="#compressratio"><span>CompressRatio</span></a></h4><blockquote><p>under directory basedir/system/compression_ration</p></blockquote>',7),k=e("ol",null,[e("li",{calTimes:""},[t("Ration-{compressionRatioSum}- "),e("ul",null,[e("li",null,"record compression ratio of each tsfile")])])],-1),v=e("h2",{id:"pre-write-log-files",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#pre-write-log-files"},[e("span",null,"Pre-write Log Files")])],-1),D=e("code",null,"wal_dir",-1),w=o(`<blockquote><p>under directory basedir/wal</p></blockquote><ol><li>{DatabaseName}-{TsFileName}/wal1 <ul><li>every storage group has several wal files, and every memtable has one associated wal file before it is flushed into a TsFile</li></ul></li></ol><h2 id="example-of-setting-data-storage-directory" tabindex="-1"><a class="header-anchor" href="#example-of-setting-data-storage-directory"><span>Example of Setting Data storage Directory</span></a></h2><p>For a clearer understanding of configuring the data storage directory, we will give an example in this section.</p><p>The data directory path included in storage directory setting are: base_dir, data_dirs, multi_dir_strategy, and wal_dir, which refer to system files, data folders, storage strategy, and pre-write log files.</p><p>An example of the configuration items are as follows:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>dn_system_dir = $IOTDB_HOME/data/datanode/system
dn_data_dirs = /data1/datanode/data, /data2/datanode/data, /data3/datanode/data 
dn_multi_dir_strategy=MaxDiskUsableSpaceFirstStrategy
dn_wal_dir= $IOTDB_HOME/data/datanode/wal
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>After setting the configuration, the system will:</p><ul><li>Save all system files in $IOTDB_HOME/data/datanode/system</li><li>Save TsFile in /data1/datanode/data, /data2/datanode/data, /data3/datanode/data. And the choosing strategy is <code>MaxDiskUsableSpaceFirstStrategy</code>, when data writes to the disk, the system will automatically select a directory with the largest remaining disk space to write data.</li><li>Save WAL data in $IOTDB_HOME/data/datanode/wal</li><li></li></ul>`,9);function F(I,S){const a=r("RouteLink");return n(),d("div",null,[u,h,f,p,m,e("p",null,[t("Data files store all the data that the user wrote to IoTDB, which contains TsFile and other files. TsFile storage directory can be configured with the "),g,t(" configuration item (see "),i(a,{to:"/UserGuide/V1.0.x/Reference/DataNode-Config-Manual.html"},{default:s(()=>[t("file layer")]),_:1}),t(" for details). Other files can be configured through "),i(a,{to:"/UserGuide/V1.0.x/Reference/DataNode-Config-Manual.html"},{default:s(()=>[t("data_dirs")]),_:1}),t(" configuration item (see "),i(a,{to:"/UserGuide/V1.0.x/Reference/DataNode-Config-Manual.html"},{default:s(()=>[t("Engine Layer")]),_:1}),t(" for details).")]),e("p",null,[t("In order to support users' storage requirements such as disk space expansion better, IoTDB supports multiple file directories storage methods for TsFile storage configuration. Users can set multiple storage paths as data storage locations( see "),i(a,{to:"/UserGuide/V1.0.x/Reference/DataNode-Config-Manual.html"},{default:s(()=>[t("data_dirs")]),_:1}),t(" configuration item), and you can specify or customize the directory selection strategy (see "),i(a,{to:"/UserGuide/V1.0.x/Reference/DataNode-Config-Manual.html"},{default:s(()=>[t("multi_dir_strategy")]),_:1}),t(" configuration item for details).")]),y,e("p",null,[t("System files include schema files, which store metadata information of data in IoTDB. It can be configured through the "),_,t(" configuration item (see "),i(a,{to:"/UserGuide/V1.0.x/Reference/DataNode-Config-Manual.html"},{default:s(()=>[t("System Layer")]),_:1}),t(" for details).")]),b,x,T,k,v,e("p",null,[t("Pre-write log files store WAL files. It can be configured through the "),D,t(" configuration item (see "),i(a,{to:"/UserGuide/V1.0.x/Reference/DataNode-Config-Manual.html"},{default:s(()=>[t("System Layer")]),_:1}),t(" for details).")]),w])}const B=l(c,[["render",F],["__file","Files.html.vue"]]),N=JSON.parse(`{"path":"/UserGuide/V1.0.x/QuickStart/Files.html","title":"Files","lang":"en-US","frontmatter":{"description":"Files In IoTDB, there are many kinds of data needed to be stored. This section introduces IoTDB's data storage strategy to provide you an explicit understanding of IoTDB's data ...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/QuickStart/Files.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.0.x/QuickStart/Files.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Files"}],["meta",{"property":"og:description","content":"Files In IoTDB, there are many kinds of data needed to be stored. This section introduces IoTDB's data storage strategy to provide you an explicit understanding of IoTDB's data ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Files\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Data Files","slug":"data-files","link":"#data-files","children":[{"level":3,"title":"TsFile","slug":"tsfile","link":"#tsfile","children":[]},{"level":3,"title":"TsFileResource","slug":"tsfileresource","link":"#tsfileresource","children":[]},{"level":3,"title":"与合并相关的数据文件","slug":"与合并相关的数据文件","link":"#与合并相关的数据文件","children":[]}]},{"level":2,"title":"System files","slug":"system-files","link":"#system-files","children":[{"level":3,"title":"MetaData Related Files","slug":"metadata-related-files","link":"#metadata-related-files","children":[]},{"level":3,"title":"Other System Files","slug":"other-system-files","link":"#other-system-files","children":[]}]},{"level":2,"title":"Pre-write Log Files","slug":"pre-write-log-files","link":"#pre-write-log-files","children":[]},{"level":2,"title":"Example of Setting Data storage Directory","slug":"example-of-setting-data-storage-directory","link":"#example-of-setting-data-storage-directory","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":2.43,"words":728},"filePathRelative":"UserGuide/V1.0.x/QuickStart/Files.md","localizedDate":"July 10, 2023","autoDesc":true}`);export{B as comp,N as data};
