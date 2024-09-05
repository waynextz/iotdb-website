import{_ as s,c as r,d as t,e as l,a as i,w as n,b as d,r as o,o as p}from"./app-DLxi_e3x.js";const u={};function m(g,e){const a=o("RouteLink");return p(),r("div",null,[e[16]||(e[16]=t("h2",{id:"数据文件存储",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#数据文件存储"},[t("span",null,"数据文件存储")])],-1)),e[17]||(e[17]=t("p",null,"本节将介绍 IoTDB 的数据存储方式，便于您对 IoTDB 的数据管理有一个直观的了解。",-1)),e[18]||(e[18]=t("p",null,"IoTDB 需要存储的数据分为三类，分别为数据文件、系统文件以及写前日志文件。",-1)),e[19]||(e[19]=t("h3",{id:"数据文件",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#数据文件"},[t("span",null,"数据文件")])],-1)),t("p",null,[e[1]||(e[1]=l("数据文件存储了用户写入 IoTDB 系统的所有数据。包含 TsFile 文件和其他文件，可通过 ")),i(a,{to:"/zh/UserGuide/V0.13.x/Reference/Config-Manual.html"},{default:n(()=>e[0]||(e[0]=[l("data_dirs 配置项")])),_:1}),e[2]||(e[2]=l(" 进行配置。"))]),t("p",null,[e[5]||(e[5]=l("为了更好的支持用户对于磁盘空间扩展等存储需求，IoTDB 为 TsFile 的存储配置增加了多文件目录的存储方式，用户可自主配置多个存储路径作为数据的持久化位置（详情见 ")),i(a,{to:"/zh/UserGuide/V0.13.x/Reference/Config-Manual.html"},{default:n(()=>e[3]||(e[3]=[l("data_dirs 配置项")])),_:1}),e[6]||(e[6]=l("），并可以指定或自定义目录选择策略（详情见 ")),i(a,{to:"/zh/UserGuide/V0.13.x/Reference/Config-Manual.html"},{default:n(()=>e[4]||(e[4]=[l("multi_dir_strategy 配置项")])),_:1}),e[7]||(e[7]=l("）。"))]),e[20]||(e[20]=t("h3",{id:"系统文件",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统文件"},[t("span",null,"系统文件")])],-1)),t("p",null,[e[9]||(e[9]=l("系统 Schema 文件，存储了数据文件的元数据信息。可通过 system_dir 配置项进行配置（详情见 ")),i(a,{to:"/zh/UserGuide/V0.13.x/Reference/Config-Manual.html"},{default:n(()=>e[8]||(e[8]=[l("system_dir 配置项")])),_:1}),e[10]||(e[10]=l("）。"))]),e[21]||(e[21]=t("h3",{id:"写前日志文件",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#写前日志文件"},[t("span",null,"写前日志文件")])],-1)),t("p",null,[e[12]||(e[12]=l("写前日志文件存储了系统的写前日志。可通过")),e[13]||(e[13]=t("code",null,"wal_dir",-1)),e[14]||(e[14]=l("配置项进行配置（详情见 ")),i(a,{to:"/zh/UserGuide/V0.13.x/Reference/Config-Manual.html"},{default:n(()=>e[11]||(e[11]=[l("wal_dir 配置项")])),_:1}),e[15]||(e[15]=l("）。"))]),e[22]||(e[22]=d(`<h3 id="数据存储目录设置举例" tabindex="-1"><a class="header-anchor" href="#数据存储目录设置举例"><span>数据存储目录设置举例</span></a></h3><p>接下来我们将举一个数据目录配置的例子，来具体说明如何配置数据的存储目录。</p><p>IoTDB 涉及到的所有数据目录路径有：data_dirs, multi_dir_strategy, system_dir 和 wal_dir，它们分别涉及的是 IoTDB 的数据文件、数据文件多目录存储策略、系统文件以及写前日志文件。您可以选择输入路径自行配置，也可以不进行任何操作使用系统默认的配置项。</p><p>以下我们给出一个用户对五个目录都进行自行配置的例子。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">system_dir = $IOTDB_HOME/data</span>
<span class="line">data_dirs = /data1/data, /data2/data, /data3/data </span>
<span class="line">multi_dir_strategy=MaxDiskUsableSpaceFirstStrategy</span>
<span class="line">wal_dir= $IOTDB_HOME/data/wal</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>按照上述配置，系统会：</p><ul><li>将 TsFile 存储在路径/data1/data、路径/data2/data 和路径 data3/data3 中。且对这三个路径的选择策略是：<code>优先选择磁盘剩余空间最大的目录</code>，即在每次数据持久化到磁盘时系统会自动选择磁盘剩余空间最大的一个目录将数据进行写入</li><li>将系统文件存储在$IOTDB_HOME/data</li><li>将写前日志文件存储在$IOTDB_HOME/data/wal</li></ul>`,7))])}const T=s(u,[["render",m],["__file","Files.html.vue"]]),x=JSON.parse('{"path":"/zh/UserGuide/V0.13.x/QuickStart/Files.html","title":"","lang":"zh-CN","frontmatter":{"description":"数据文件存储 本节将介绍 IoTDB 的数据存储方式，便于您对 IoTDB 的数据管理有一个直观的了解。 IoTDB 需要存储的数据分为三类，分别为数据文件、系统文件以及写前日志文件。 数据文件 数据文件存储了用户写入 IoTDB 系统的所有数据。包含 TsFile 文件和其他文件，可通过 进行配置。 为了更好的支持用户对于磁盘空间扩展等存储需求，Io...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V0.13.x/QuickStart/Files.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/QuickStart/Files.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"数据文件存储 本节将介绍 IoTDB 的数据存储方式，便于您对 IoTDB 的数据管理有一个直观的了解。 IoTDB 需要存储的数据分为三类，分别为数据文件、系统文件以及写前日志文件。 数据文件 数据文件存储了用户写入 IoTDB 系统的所有数据。包含 TsFile 文件和其他文件，可通过 进行配置。 为了更好的支持用户对于磁盘空间扩展等存储需求，Io..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"数据文件存储","slug":"数据文件存储","link":"#数据文件存储","children":[{"level":3,"title":"数据文件","slug":"数据文件","link":"#数据文件","children":[]},{"level":3,"title":"系统文件","slug":"系统文件","link":"#系统文件","children":[]},{"level":3,"title":"写前日志文件","slug":"写前日志文件","link":"#写前日志文件","children":[]},{"level":3,"title":"数据存储目录设置举例","slug":"数据存储目录设置举例","link":"#数据存储目录设置举例","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":2.31,"words":692},"filePathRelative":"zh/UserGuide/V0.13.x/QuickStart/Files.md","localizedDate":"2023年7月10日","autoDesc":true}');export{T as comp,x as data};
