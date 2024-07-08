import{_ as n,r as d,o as s,c as o,b as e,d as t,a as i,w as l,e as r}from"./app-DxurNv9d.js";const c={},h=e("h2",{id:"数据文件存储",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#数据文件存储"},[e("span",null,"数据文件存储")])],-1),u=e("p",null,"本节将介绍 IoTDB 的数据存储方式，便于您对 IoTDB 的数据管理有一个直观的了解。",-1),p=e("p",null,"IoTDB 需要存储的数据分为三类，分别为数据文件、系统文件以及写前日志文件。",-1),_=e("h3",{id:"数据文件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#数据文件"},[e("span",null,"数据文件")])],-1),m=e("h3",{id:"系统文件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#系统文件"},[e("span",null,"系统文件")])],-1),g=e("h3",{id:"写前日志文件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#写前日志文件"},[e("span",null,"写前日志文件")])],-1),f=e("code",null,"wal_dir",-1),T=r(`<h3 id="数据存储目录设置举例" tabindex="-1"><a class="header-anchor" href="#数据存储目录设置举例"><span>数据存储目录设置举例</span></a></h3><p>接下来我们将举一个数据目录配置的例子，来具体说明如何配置数据的存储目录。</p><p>IoTDB 涉及到的所有数据目录路径有：data_dirs, multi_dir_strategy, system_dir 和 wal_dir，它们分别涉及的是 IoTDB 的数据文件、数据文件多目录存储策略、系统文件以及写前日志文件。您可以选择输入路径自行配置，也可以不进行任何操作使用系统默认的配置项。</p><p>以下我们给出一个用户对五个目录都进行自行配置的例子。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>system_dir = $IOTDB_HOME/data
data_dirs = /data1/data, /data2/data, /data3/data 
multi_dir_strategy=MaxDiskUsableSpaceFirstStrategy
wal_dir= $IOTDB_HOME/data/wal
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>按照上述配置，系统会：</p><ul><li>将 TsFile 存储在路径/data1/data、路径/data2/data 和路径 data3/data3 中。且对这三个路径的选择策略是：<code>优先选择磁盘剩余空间最大的目录</code>，即在每次数据持久化到磁盘时系统会自动选择磁盘剩余空间最大的一个目录将数据进行写入</li><li>将系统文件存储在$IOTDB_HOME/data</li><li>将写前日志文件存储在$IOTDB_HOME/data/wal</li></ul>`,7);function x(B,D){const a=d("RouteLink");return s(),o("div",null,[h,u,p,_,e("p",null,[t("数据文件存储了用户写入 IoTDB 系统的所有数据。包含 TsFile 文件和其他文件，可通过 "),i(a,{to:"/zh/UserGuide/V0.13.x/Reference/Config-Manual.html"},{default:l(()=>[t("data_dirs 配置项")]),_:1}),t(" 进行配置。")]),e("p",null,[t("为了更好的支持用户对于磁盘空间扩展等存储需求，IoTDB 为 TsFile 的存储配置增加了多文件目录的存储方式，用户可自主配置多个存储路径作为数据的持久化位置（详情见 "),i(a,{to:"/zh/UserGuide/V0.13.x/Reference/Config-Manual.html"},{default:l(()=>[t("data_dirs 配置项")]),_:1}),t("），并可以指定或自定义目录选择策略（详情见 "),i(a,{to:"/zh/UserGuide/V0.13.x/Reference/Config-Manual.html"},{default:l(()=>[t("multi_dir_strategy 配置项")]),_:1}),t("）。")]),m,e("p",null,[t("系统 Schema 文件，存储了数据文件的元数据信息。可通过 system_dir 配置项进行配置（详情见 "),i(a,{to:"/zh/UserGuide/V0.13.x/Reference/Config-Manual.html"},{default:l(()=>[t("system_dir 配置项")]),_:1}),t("）。")]),g,e("p",null,[t("写前日志文件存储了系统的写前日志。可通过"),f,t("配置项进行配置（详情见 "),i(a,{to:"/zh/UserGuide/V0.13.x/Reference/Config-Manual.html"},{default:l(()=>[t("wal_dir 配置项")]),_:1}),t("）。")]),T])}const v=n(c,[["render",x],["__file","Files.html.vue"]]),y=JSON.parse('{"path":"/zh/UserGuide/V0.13.x/QuickStart/Files.html","title":"","lang":"zh-CN","frontmatter":{"description":"数据文件存储 本节将介绍 IoTDB 的数据存储方式，便于您对 IoTDB 的数据管理有一个直观的了解。 IoTDB 需要存储的数据分为三类，分别为数据文件、系统文件以及写前日志文件。 数据文件 数据文件存储了用户写入 IoTDB 系统的所有数据。包含 TsFile 文件和其他文件，可通过 进行配置。 为了更好的支持用户对于磁盘空间扩展等存储需求，Io...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V0.13.x/QuickStart/Files.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/QuickStart/Files.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"数据文件存储 本节将介绍 IoTDB 的数据存储方式，便于您对 IoTDB 的数据管理有一个直观的了解。 IoTDB 需要存储的数据分为三类，分别为数据文件、系统文件以及写前日志文件。 数据文件 数据文件存储了用户写入 IoTDB 系统的所有数据。包含 TsFile 文件和其他文件，可通过 进行配置。 为了更好的支持用户对于磁盘空间扩展等存储需求，Io..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"数据文件存储","slug":"数据文件存储","link":"#数据文件存储","children":[{"level":3,"title":"数据文件","slug":"数据文件","link":"#数据文件","children":[]},{"level":3,"title":"系统文件","slug":"系统文件","link":"#系统文件","children":[]},{"level":3,"title":"写前日志文件","slug":"写前日志文件","link":"#写前日志文件","children":[]},{"level":3,"title":"数据存储目录设置举例","slug":"数据存储目录设置举例","link":"#数据存储目录设置举例","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":2.31,"words":692},"filePathRelative":"zh/UserGuide/V0.13.x/QuickStart/Files.md","localizedDate":"2023年7月10日","autoDesc":true}');export{v as comp,y as data};
