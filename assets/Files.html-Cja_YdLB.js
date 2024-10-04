import{_ as l,c as n,d as t,e as i,a as s,w as r,b as o,r as d,o as u}from"./app-W3EENNaa.js";const f={};function g(p,e){const a=d("RouteLink");return u(),n("div",null,[e[24]||(e[24]=t("h2",{id:"files",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#files"},[t("span",null,"Files")])],-1)),e[25]||(e[25]=t("p",null,"In IoTDB, there are many kinds of data needed to be stored. This section introduces IoTDB's data storage strategy to provide you an explicit understanding of IoTDB's data management.",-1)),e[26]||(e[26]=t("p",null,"The data in IoTDB is divided into three categories, namely data files, system files, and pre-write log files.",-1)),e[27]||(e[27]=t("h3",{id:"data-files",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#data-files"},[t("span",null,"Data Files")])],-1)),t("p",null,[e[3]||(e[3]=i("Data files store all the data that the user wrote to IoTDB, which contains TsFile and other files. TsFile storage directory can be configured with the ")),e[4]||(e[4]=t("code",null,"data_dirs",-1)),e[5]||(e[5]=i(" configuration item (see ")),s(a,{to:"/UserGuide/V0.13.x/Reference/Config-Manual.html"},{default:r(()=>e[0]||(e[0]=[i("file layer")])),_:1}),e[6]||(e[6]=i(" for details). Other files can be configured through ")),s(a,{to:"/UserGuide/V0.13.x/Reference/Config-Manual.html"},{default:r(()=>e[1]||(e[1]=[i("data_dirs")])),_:1}),e[7]||(e[7]=i(" configuration item (see ")),s(a,{to:"/UserGuide/V0.13.x/Reference/Config-Manual.html"},{default:r(()=>e[2]||(e[2]=[i("Engine Layer")])),_:1}),e[8]||(e[8]=i(" for details)."))]),t("p",null,[e[11]||(e[11]=i("In order to support users' storage requirements such as disk space expansion better, IoTDB supports multiple file directories storage methods for TsFile storage configuration. Users can set multiple storage paths as data storage locations( see ")),s(a,{to:"/UserGuide/V0.13.x/Reference/Config-Manual.html"},{default:r(()=>e[9]||(e[9]=[i("data_dirs")])),_:1}),e[12]||(e[12]=i(" configuration item), and you can specify or customize the directory selection strategy (see ")),s(a,{to:"/UserGuide/V0.13.x/Reference/Config-Manual.html"},{default:r(()=>e[10]||(e[10]=[i("multi_dir_strategy")])),_:1}),e[13]||(e[13]=i(" configuration item for details)."))]),e[28]||(e[28]=t("h3",{id:"system-files",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#system-files"},[t("span",null,"System files")])],-1)),t("p",null,[e[15]||(e[15]=i("System files include schema files, which store metadata information of data in IoTDB. It can be configured through the ")),e[16]||(e[16]=t("code",null,"base_dir",-1)),e[17]||(e[17]=i(" configuration item (see ")),s(a,{to:"/UserGuide/V0.13.x/Reference/Config-Manual.html"},{default:r(()=>e[14]||(e[14]=[i("System Layer")])),_:1}),e[18]||(e[18]=i(" for details)."))]),e[29]||(e[29]=t("h3",{id:"pre-write-log-files",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#pre-write-log-files"},[t("span",null,"Pre-write Log Files")])],-1)),t("p",null,[e[20]||(e[20]=i("Pre-write log files store WAL files. It can be configured through the ")),e[21]||(e[21]=t("code",null,"wal_dir",-1)),e[22]||(e[22]=i(" configuration item (see ")),s(a,{to:"/UserGuide/V0.13.x/Reference/Config-Manual.html"},{default:r(()=>e[19]||(e[19]=[i("System Layer")])),_:1}),e[23]||(e[23]=i(" for details)."))]),e[30]||(e[30]=o(`<h3 id="example-of-setting-data-storage-directory" tabindex="-1"><a class="header-anchor" href="#example-of-setting-data-storage-directory"><span>Example of Setting Data storage Directory</span></a></h3><p>For a clearer understanding of configuring the data storage directory, we will give an example in this section.</p><p>The data directory path included in storage directory setting are: base_dir, data_dirs, multi_dir_strategy, and wal_dir, which refer to system files, data folders, storage strategy, and pre-write log files.</p><p>An example of the configuration items are as follows:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">base_dir = $IOTDB_HOME/data</span>
<span class="line">data_dirs = /data1/data, /data2/data, /data3/data </span>
<span class="line">multi_dir_strategy=MaxDiskUsableSpaceFirstStrategy</span>
<span class="line">wal_dir= $IOTDB_HOME/data/wal</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>After setting the configuration, the system will:</p><ul><li>Save all system files in $IOTDB_HOME/data</li><li>Save TsFile in /data1/data, /data2/data, /data3/data. And the choosing strategy is <code>MaxDiskUsableSpaceFirstStrategy</code>, when data writes to the disk, the system will automatically select a directory with the largest remaining disk space to write data.</li><li>Save WAL data in $IOTDB_HOME/data/wal</li></ul>`,7))])}const y=l(f,[["render",g],["__file","Files.html.vue"]]),h=JSON.parse(`{"path":"/UserGuide/V0.13.x/QuickStart/Files.html","title":"","lang":"en-US","frontmatter":{"description":"Files In IoTDB, there are many kinds of data needed to be stored. This section introduces IoTDB's data storage strategy to provide you an explicit understanding of IoTDB's data ...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/QuickStart/Files.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V0.13.x/QuickStart/Files.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"Files In IoTDB, there are many kinds of data needed to be stored. This section introduces IoTDB's data storage strategy to provide you an explicit understanding of IoTDB's data ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Files","slug":"files","link":"#files","children":[{"level":3,"title":"Data Files","slug":"data-files","link":"#data-files","children":[]},{"level":3,"title":"System files","slug":"system-files","link":"#system-files","children":[]},{"level":3,"title":"Pre-write Log Files","slug":"pre-write-log-files","link":"#pre-write-log-files","children":[]},{"level":3,"title":"Example of Setting Data storage Directory","slug":"example-of-setting-data-storage-directory","link":"#example-of-setting-data-storage-directory","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.55,"words":466},"filePathRelative":"UserGuide/V0.13.x/QuickStart/Files.md","localizedDate":"July 10, 2023","autoDesc":true}`);export{y as comp,h as data};
