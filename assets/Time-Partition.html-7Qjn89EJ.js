import{_ as n,c as r,b as o,d as e,e as i,a as l,w as s,r as d,o as m}from"./app-DLxi_e3x.js";const p={};function u(c,t){const a=d("RouteLink");return m(),r("div",null,[t[3]||(t[3]=o('<h1 id="time-partition" tabindex="-1"><a class="header-anchor" href="#time-partition"><span>Time partition</span></a></h1><h2 id="features" tabindex="-1"><a class="header-anchor" href="#features"><span>Features</span></a></h2><p>Time partition divides data according to time, and a time partition is used to save all data within a certain time range. The time partition number is represented by a natural number. Number 0 means January 1, 1970, it will increase by one every partition_interval milliseconds. Time partition number&#39;s calculation formula is timestamp / partition_interval. The main configuration items are as follows:</p><ul><li>time_partition_interval</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">time_partition_interval</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">Time range for dividing database, time series data will be divided into groups by this time range</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">Int64</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">604800000</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">Only allowed to be modified in first start up</td></tr></tbody></table><h2 id="configuration-example" tabindex="-1"><a class="header-anchor" href="#configuration-example"><span>Configuration example</span></a></h2><p>Enable time partition and set partition_interval to 86400000 (one day), then the data distribution is shown as the following figure:</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Data-Concept/Time-Partition/time_partition_example.png?raw=true" alt="time partition example"><ul><li><p>Insert one datapoint with timestamp 0, calculate 0/86400000 = 0, then this datapoint will be stored in TsFile under folder 0</p></li><li><p>Insert one datapoint with timestamp 1609459200010, calculate 1609459200010/86400000 = 18628, then this datapoint will be stored in TsFile under folder 18628</p></li></ul><h2 id="suggestions" tabindex="-1"><a class="header-anchor" href="#suggestions"><span>Suggestions</span></a></h2>',10)),e("p",null,[t[1]||(t[1]=i("When enabling time partition, it is better to enable timed flush memtable, configuration params are detailed in ")),l(a,{to:"/UserGuide/V1.0.x/Reference/DataNode-Config-Manual.html"},{default:s(()=>t[0]||(t[0]=[i("Config manual for timed flush")])),_:1}),t[2]||(t[2]=i("."))]),t[4]||(t[4]=e("ul",null,[e("li",null,[e("p",null,"enable_timed_flush_unseq_memtable: Whether to enable timed flush unsequence memtable, enabled by default.")]),e("li",null,[e("p",null,"enable_timed_flush_seq_memtable: Whether to enable timed flush sequence memtable, disabled by default. It should be enabled when time partition is enabled, so inactive time partition's memtable can be flushed regularly.")])],-1))])}const g=n(p,[["render",u],["__file","Time-Partition.html.vue"]]),f=JSON.parse('{"path":"/UserGuide/V1.0.x/Data-Concept/Time-Partition.html","title":"Time partition","lang":"en-US","frontmatter":{"description":"Time partition Features Time partition divides data according to time, and a time partition is used to save all data within a certain time range. The time partition number is re...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/Data-Concept/Time-Partition.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.0.x/Data-Concept/Time-Partition.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Time partition"}],["meta",{"property":"og:description","content":"Time partition Features Time partition divides data according to time, and a time partition is used to save all data within a certain time range. The time partition number is re..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Time partition\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Features","slug":"features","link":"#features","children":[]},{"level":2,"title":"Configuration example","slug":"configuration-example","link":"#configuration-example","children":[]},{"level":2,"title":"Suggestions","slug":"suggestions","link":"#suggestions","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.26,"words":378},"filePathRelative":"UserGuide/V1.0.x/Data-Concept/Time-Partition.md","localizedDate":"July 10, 2023","autoDesc":true}');export{g as comp,f as data};
