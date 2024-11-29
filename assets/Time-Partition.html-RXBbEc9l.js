import{_ as l,c as n,b as r,d as e,e as a,a as o,w as s,r as p,o as d}from"./app-C6MIQYKi.js";const m={};function c(h,t){const i=p("RouteLink");return d(),n("div",null,[t[3]||(t[3]=r('<h2 id="时间分区" tabindex="-1"><a class="header-anchor" href="#时间分区"><span>时间分区</span></a></h2><h3 id="主要功能" tabindex="-1"><a class="header-anchor" href="#主要功能"><span>主要功能</span></a></h3><p>时间分区按照时间分割数据，一个时间分区用于保存某个时间范围内的所有数据。时间分区编号使用自然数表示，0 表示 1970 年 1 月 1 日，每隔 partition_interval 毫秒后加一。数据通过计算 timestamp / partition_interval 得到自己所在的时间分区编号，主要配置项如下所示：</p><ul><li>time_partition_interval</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">time_partition_interval</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">Database 分区的时间段长度，用户指定的 database 下会使用该时间段进行分区，单位：毫秒</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">Int64</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">604800000</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">仅允许在第一次启动服务前修改</td></tr></tbody></table><h3 id="配置示例" tabindex="-1"><a class="header-anchor" href="#配置示例"><span>配置示例</span></a></h3><p>开启时间分区功能，并设置 partition_interval 为 86400000（一天），则数据的分布情况如下图所示：</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Data-Concept/Time-Partition/time_partition_example.png?raw=true" alt="time partition example"><ul><li><p>插入一条时间戳为 0 的数据，计算 0 / 86400000 = 0，则该数据会被存储到 0 号文件夹下的TsFile中</p></li><li><p>插入一条时间戳为 1609459200010 的数据，计算 1609459200010 / 86400000 = 18628，则该数据会被存储到 18628 号文件夹下的TsFile中</p></li></ul><h3 id="使用建议" tabindex="-1"><a class="header-anchor" href="#使用建议"><span>使用建议</span></a></h3>',10)),e("p",null,[t[1]||(t[1]=a("使用时间分区功能时，建议同时打开 Memtable 的定时刷盘功能，共 6 个相关配置参数（详情见 ")),o(i,{to:"/zh/UserGuide/V1.1.x/Reference/DataNode-Config-Manual.html"},{default:s(()=>t[0]||(t[0]=[a("timed_flush配置项")])),_:1}),t[2]||(t[2]=a("）。"))]),t[4]||(t[4]=e("ul",null,[e("li",null,[e("p",null,"enable_timed_flush_unseq_memtable: 是否开启乱序 Memtable 的定时刷盘，默认打开。")]),e("li",null,[e("p",null,"enable_timed_flush_seq_memtable: 是否开启顺序 Memtable 的定时刷盘，默认关闭。应当在开启时间分区后打开，定时刷盘非活跃时间分区下的 Memtable，为定时关闭 TsFileProcessor 作准备。")])],-1))])}const g=l(m,[["render",c],["__file","Time-Partition.html.vue"]]),_=JSON.parse('{"path":"/zh/UserGuide/V1.1.x/Data-Concept/Time-Partition.html","title":"","lang":"zh-CN","frontmatter":{"description":"时间分区 主要功能 时间分区按照时间分割数据，一个时间分区用于保存某个时间范围内的所有数据。时间分区编号使用自然数表示，0 表示 1970 年 1 月 1 日，每隔 partition_interval 毫秒后加一。数据通过计算 timestamp / partition_interval 得到自己所在的时间分区编号，主要配置项如下所示： time_p...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.1.x/Data-Concept/Time-Partition.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/Data-Concept/Time-Partition.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"时间分区 主要功能 时间分区按照时间分割数据，一个时间分区用于保存某个时间范围内的所有数据。时间分区编号使用自然数表示，0 表示 1970 年 1 月 1 日，每隔 partition_interval 毫秒后加一。数据通过计算 timestamp / partition_interval 得到自己所在的时间分区编号，主要配置项如下所示： time_p..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"时间分区","slug":"时间分区","link":"#时间分区","children":[{"level":3,"title":"主要功能","slug":"主要功能","link":"#主要功能","children":[]},{"level":3,"title":"配置示例","slug":"配置示例","link":"#配置示例","children":[]},{"level":3,"title":"使用建议","slug":"使用建议","link":"#使用建议","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.78,"words":534},"filePathRelative":"zh/UserGuide/V1.1.x/Data-Concept/Time-Partition.md","localizedDate":"2023年7月10日","autoDesc":true}');export{g as comp,_ as data};
