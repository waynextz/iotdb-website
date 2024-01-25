import{_ as l,r,o,c as s,a as n,d as e,e as i,b as d,f as t}from"./app-F10OrnbD.js";const u={},c=e("blockquote",null,[e("p",null,"Here are all files generated or used by IoTDB"),e("p",null,"Continuously Updating...")],-1),h=e("h1",{id:"stand-alone",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#stand-alone","aria-hidden":"true"},"#"),i(" Stand-alone")],-1),f=e("h2",{id:"configuration-files",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#configuration-files","aria-hidden":"true"},"#"),i(" Configuration Files")],-1),m=e("blockquote",null,[e("p",null,"under conf directory")],-1),p=e("li",null,"iotdb-engine.properties",-1),b=e("li",null,"logback.xml",-1),g={href:"http://iotdb-env.sh",target:"_blank",rel:"noopener noreferrer"},_=e("li",null,"jmx.access",-1),y=e("li",null,"jmx.password",-1),k=e("li",null,[i("iotdb-sync-client.properties "),e("ul",null,[e("li",null,"only sync tool use it")])],-1),x=t('<blockquote><p>under directory basedir/system/schema</p></blockquote><ol><li>system.properties <ul><li>record all immutable properties, will be checked when starting IoTDB to avoid system errors</li></ul></li></ol><h2 id="state-related-files" tabindex="-1"><a class="header-anchor" href="#state-related-files" aria-hidden="true">#</a> State Related Files</h2><h3 id="metadata-related-files" tabindex="-1"><a class="header-anchor" href="#metadata-related-files" aria-hidden="true">#</a> MetaData Related Files</h3><blockquote><p>under directory basedir/system/schema</p></blockquote><h4 id="meta" tabindex="-1"><a class="header-anchor" href="#meta" aria-hidden="true">#</a> Meta</h4><ol><li>mlog.bin <ul><li>record the meta operation</li></ul></li><li>mtree-1.snapshot <ul><li>snapshot of metadata</li></ul></li><li>mtree-1.snapshot.tmp <ul><li>temp file, to avoid damaging the snapshot when updating it</li></ul></li></ol><h4 id="tags-attributes" tabindex="-1"><a class="header-anchor" href="#tags-attributes" aria-hidden="true">#</a> Tags&amp;Attributes</h4><ol><li>tlog.txt <ul><li>store tags and attributes of each TimeSeries</li><li>about 700 bytes for each TimeSeries</li></ul></li></ol><h3 id="data-related-files" tabindex="-1"><a class="header-anchor" href="#data-related-files" aria-hidden="true">#</a> Data Related Files</h3><blockquote><p>under directory basedir/data/</p></blockquote><h4 id="wal" tabindex="-1"><a class="header-anchor" href="#wal" aria-hidden="true">#</a> WAL</h4><blockquote><p>under directory basedir/wal</p></blockquote><ol><li>{StorageGroupName}-{TsFileName}/wal1 <ul><li>every storage group has several wal files, and every memtable has one associated wal file before it is flushed into a TsFile</li></ul></li></ol><h4 id="tsfile" tabindex="-1"><a class="header-anchor" href="#tsfile" aria-hidden="true">#</a> TsFile</h4><blockquote><p>under directory data/sequence or unsequence/{StorageGroupName}/{TimePartitionId}/</p></blockquote><ol><li>{time}-{version}-{mergeCnt}.tsfile <ul><li>normal data file</li></ul></li><li>{TsFileName}.tsfile.mod <ul><li>modification file</li><li>record delete operation</li></ul></li></ol><h4 id="tsfileresource" tabindex="-1"><a class="header-anchor" href="#tsfileresource" aria-hidden="true">#</a> TsFileResource</h4><ol><li>{TsFileName}.tsfile.resource <ul><li>descriptor and statistic file of a TsFile</li></ul></li><li>{TsFileName}.tsfile.resource.temp <ul><li>temp file</li><li>avoid damaging the tsfile.resource when updating it</li></ul></li><li>{TsFileName}.tsfile.resource.closing <ul><li>close flag file, to mark a tsfile closing so during restarts we can continue to close it or reopen it</li></ul></li></ol><h4 id="version" tabindex="-1"><a class="header-anchor" href="#version" aria-hidden="true">#</a> Version</h4><blockquote><p>under directory basedir/system/storage_groups/{StorageGroupName}/{TimePartitionId} or upgrade</p></blockquote>',21),q=e("ol",null,[e("li",{version:""},[i("Version- "),e("ul",null,[e("li",null,"version file, record the max version in fileName of a storage group")])])],-1),w=t('<h4 id="upgrade" tabindex="-1"><a class="header-anchor" href="#upgrade" aria-hidden="true">#</a> Upgrade</h4><blockquote><p>under directory basedir/system/upgrade</p></blockquote><ol><li>upgrade.txt <ul><li>record which files have been upgraded</li></ul></li></ol><h4 id="merge" tabindex="-1"><a class="header-anchor" href="#merge" aria-hidden="true">#</a> Merge</h4><blockquote><p>under directory basedir/system/storage_groups/{StorageGroup}/</p></blockquote><ol><li>merge.mods <ul><li>modification file generated during a merge</li></ul></li><li>merge.log <ul><li>record the progress of a merge</li></ul></li><li>tsfile.merge <ul><li>temporary merge result file, an involved sequence tsfile may have one during a merge</li></ul></li></ol><h4 id="authority" tabindex="-1"><a class="header-anchor" href="#authority" aria-hidden="true">#</a> Authority</h4><blockquote><p>under directory basedir/system/users/<br> under directory basedir/system/roles/</p></blockquote><h4 id="compressratio" tabindex="-1"><a class="header-anchor" href="#compressratio" aria-hidden="true">#</a> CompressRatio</h4><blockquote><p>under directory basedir/system/compression_ration</p></blockquote>',10),T=e("ol",null,[e("li",{calTimes:""},[i("Ration-{compressionRatioSum}- "),e("ul",null,[e("li",null,"record compression ratio of each tsfile")])])],-1),S=t('<hr><h1 id="cluster-mode" tabindex="-1"><a class="header-anchor" href="#cluster-mode" aria-hidden="true">#</a> Cluster-Mode</h1><blockquote><p>Attention: the following files are newly added</p></blockquote><h2 id="configuration-files-1" tabindex="-1"><a class="header-anchor" href="#configuration-files-1" aria-hidden="true">#</a> Configuration Files</h2><ol><li>iotdb-cluster.properties</li></ol><h2 id="state-related-files-1" tabindex="-1"><a class="header-anchor" href="#state-related-files-1" aria-hidden="true">#</a> State Related Files</h2><blockquote><p>under directory basedir/</p></blockquote><ol><li>node_identifier <ul><li>the identifier of the local node in a cluster</li></ul></li><li>partitions <ul><li>partition table file, records the distribution of data</li></ul></li><li>{time}_{random}.task <ul><li>pullSnapshotTask file, record the slots and owners. When a node joins a cluster,<br> it will create pullSnapshotTask file to track which data to be pulled</li><li>under directory basedir/raft/{nodeIdentifier}/snapshot_task/</li></ul></li></ol><h2 id="raft-related-files" tabindex="-1"><a class="header-anchor" href="#raft-related-files" aria-hidden="true">#</a> Raft Related Files</h2><blockquote><p>under directory basedir/system/raftLog/{nodeIdentifier}/</p></blockquote><h3 id="raft-log" tabindex="-1"><a class="header-anchor" href="#raft-log" aria-hidden="true">#</a> Raft Log</h3>',11),v=e("ol",null,[e("li",{version:""},[i(".data- "),e("ul",null,[e("li",null,"raft committed logs, only save the latest 1000(configurable) committed logs")])])],-1),F=t('<h3 id="raft-meta" tabindex="-1"><a class="header-anchor" href="#raft-meta" aria-hidden="true">#</a> Raft Meta</h3><ol><li>logMeta <ul><li>raft meta, like hardState and Meta <ul><li>hardState: voteFor, term</li><li>Meta: commitLogTerm, commitLogIndex, lastLogTerm, lastLogIndex</li><li>...</li></ul></li></ul></li><li>logMeta.tmp <ul><li>temp file, to avoid damaging the logMeta when updating it</li></ul></li></ol><h3 id="raft-catch-up" tabindex="-1"><a class="header-anchor" href="#raft-catch-up" aria-hidden="true">#</a> Raft Catch Up</h3><blockquote><p>under directory basedir/remote/{nodeIdentifier}/{storageGroupName}/{partitionNum}/</p></blockquote><ol><li>{fileName}.tsfile <ul><li>remote TsFile, will be loaded during snapshot installation</li></ul></li><li>{fileName}.tsfile.mod <ul><li>remote TsFile modification file, will be loaded during snapshot installation</li></ul></li></ol>',5);function N(I,L){const a=r("ExternalLinkIcon");return o(),s("div",null,[n(`

    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.

`),c,h,f,m,e("ol",null,[p,b,e("li",null,[e("a",g,[i("iotdb-env.sh"),d(a)])]),_,y,k]),x,q,w,T,S,v,F])}const A=l(u,[["render",N],["__file","ServerFileList.html.vue"]]);export{A as default};
