import{_ as s,c as n,b as e,o}from"./app-W3EENNaa.js";const p={};function t(r,a){return o(),n("div",null,a[0]||(a[0]=[e('<h1 id="iotdb数据文件夹概览工具" tabindex="-1"><a class="header-anchor" href="#iotdb数据文件夹概览工具"><span>IoTDB数据文件夹概览工具</span></a></h1><p>IoTDB数据文件夹概览工具用于打印出数据文件夹的结构概览信息，工具位置为 tools/tsfile/print-iotdb-data-dir。</p><h2 id="用法" tabindex="-1"><a class="header-anchor" href="#用法"><span>用法</span></a></h2><ul><li>Windows:</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">.<span class="token punctuation">\\</span>print-iotdb-data-dir.bat <span class="token operator">&lt;</span>IoTDB数据文件夹路径，如果是多个文件夹用逗号分隔<span class="token operator">&gt;</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span>输出结果的存储路径<span class="token operator">&gt;</span><span class="token punctuation">)</span> </span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>Linux or MacOs:</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">./print-iotdb-data-dir.sh <span class="token operator">&lt;</span>IoTDB数据文件夹路径，如果是多个文件夹用逗号分隔<span class="token operator">&gt;</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span>输出结果的存储路径<span class="token operator">&gt;</span><span class="token punctuation">)</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>注意：如果没有设置输出结果的存储路径, 将使用相对路径&quot;IoTDB_data_dir_overview.txt&quot;作为默认值。</p><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2><p>以Windows系统为例：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">.<span class="token punctuation">\\</span>print-iotdb-data-dir.bat D:<span class="token punctuation">\\</span>github<span class="token punctuation">\\</span>master<span class="token punctuation">\\</span>iotdb<span class="token punctuation">\\</span>data<span class="token punctuation">\\</span>datanode<span class="token punctuation">\\</span>data</span>\n<span class="line">```````````````````````<span class="token variable"><span class="token variable">`</span></span>\n<span class="line">Starting Printing the IoTDB Data Directory Overview</span>\n<span class="line"><span class="token variable">`</span></span>```````````````````````</span>\n<span class="line">output save path:IoTDB_data_dir_overview.txt</span>\n<span class="line">data <span class="token function">dir</span> num:1</span>\n<span class="line"><span class="token number">143</span>  <span class="token punctuation">[</span>main<span class="token punctuation">]</span> WARN  o.a.i.t.c.conf.TSFileDescriptor - not found iotdb-common.properties, use the default configs.</span>\n<span class="line"><span class="token operator">|</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span></span>\n<span class="line"><span class="token operator">|</span>D:<span class="token punctuation">\\</span>github<span class="token punctuation">\\</span>master<span class="token punctuation">\\</span>iotdb<span class="token punctuation">\\</span>data<span class="token punctuation">\\</span>datanode<span class="token punctuation">\\</span>data</span>\n<span class="line"><span class="token operator">|</span>--sequence</span>\n<span class="line"><span class="token operator">|</span>  <span class="token operator">|</span>--root.redirect0</span>\n<span class="line"><span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>--1</span>\n<span class="line"><span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>--0</span>\n<span class="line"><span class="token operator">|</span>  <span class="token operator">|</span>--root.redirect1</span>\n<span class="line"><span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>--2</span>\n<span class="line"><span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>--0</span>\n<span class="line"><span class="token operator">|</span>  <span class="token operator">|</span>--root.redirect2</span>\n<span class="line"><span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>--3</span>\n<span class="line"><span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>--0</span>\n<span class="line"><span class="token operator">|</span>  <span class="token operator">|</span>--root.redirect3</span>\n<span class="line"><span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>--4</span>\n<span class="line"><span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>--0</span>\n<span class="line"><span class="token operator">|</span>  <span class="token operator">|</span>--root.redirect4</span>\n<span class="line"><span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>--5</span>\n<span class="line"><span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>--0</span>\n<span class="line"><span class="token operator">|</span>  <span class="token operator">|</span>--root.redirect5</span>\n<span class="line"><span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>--6</span>\n<span class="line"><span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>--0</span>\n<span class="line"><span class="token operator">|</span>  <span class="token operator">|</span>--root.sg1</span>\n<span class="line"><span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>--0</span>\n<span class="line"><span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>--0</span>\n<span class="line"><span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>--2760</span>\n<span class="line"><span class="token operator">|</span>--unsequence</span>\n<span class="line"><span class="token operator">|</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',11)]))}const i=s(p,[["render",t],["__file","IoTDB-Data-Dir-Overview-Tool.html.vue"]]),c=JSON.parse('{"path":"/zh/UserGuide/V1.0.x/Maintenance-Tools/IoTDB-Data-Dir-Overview-Tool.html","title":"IoTDB数据文件夹概览工具","lang":"zh-CN","frontmatter":{"description":"IoTDB数据文件夹概览工具 IoTDB数据文件夹概览工具用于打印出数据文件夹的结构概览信息，工具位置为 tools/tsfile/print-iotdb-data-dir。 用法 Windows: Linux or MacOs: 注意：如果没有设置输出结果的存储路径, 将使用相对路径\\"IoTDB_data_dir_overview.txt\\"作为默认值...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.0.x/Maintenance-Tools/IoTDB-Data-Dir-Overview-Tool.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/Maintenance-Tools/IoTDB-Data-Dir-Overview-Tool.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"IoTDB数据文件夹概览工具"}],["meta",{"property":"og:description","content":"IoTDB数据文件夹概览工具 IoTDB数据文件夹概览工具用于打印出数据文件夹的结构概览信息，工具位置为 tools/tsfile/print-iotdb-data-dir。 用法 Windows: Linux or MacOs: 注意：如果没有设置输出结果的存储路径, 将使用相对路径\\"IoTDB_data_dir_overview.txt\\"作为默认值..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"IoTDB数据文件夹概览工具\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"用法","slug":"用法","link":"#用法","children":[]},{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.15,"words":346},"filePathRelative":"zh/UserGuide/V1.0.x/Maintenance-Tools/IoTDB-Data-Dir-Overview-Tool.md","localizedDate":"2023年7月10日","autoDesc":true}');export{i as comp,c as data};
