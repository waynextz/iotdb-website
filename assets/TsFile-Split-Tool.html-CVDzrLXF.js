import{_ as t,c as i,b as o,o as l}from"./app-Y2-ILDda.js";const s={};function n(a,e){return l(),i("div",null,e[0]||(e[0]=[o(`<h1 id="tsfile-split-tool" tabindex="-1"><a class="header-anchor" href="#tsfile-split-tool"><span>TsFile Split Tool</span></a></h1><p>TsFile split tool is used to split a TsFile into multiple TsFiles. The location is tools/tsfile/split-tsfile-tool</p><p>How to use:</p><p>For Windows:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">.\\split-tsfile-tool.bat &lt;path of your TsFile&gt; (-level &lt;inner space compaction num in new file name, default is 10&gt;) (-size &lt;size of new files in byte, default is 1048576000&gt;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>For Linux or MacOs:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">./split-tsfile-tool.sh &lt;path of your TsFile&gt; (-level &lt;inner space compaction num in new file name, default is 10&gt;) (-size &lt;size of new files in byte, default is 1048576000&gt;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p>For example, if the new files size is 100MB, and the compaction num is 6, the command is <code>./split-tsfile-tool.sh test.tsfile -level 6 -size 1048576000</code> (Linux or MacOs)</p></blockquote><p>Here are some more tips:</p><ol><li>TsFile split tool is for one closed TsFile, need to ensure this TsFile is closed. If the TsFile is in IoTDB, a <code>.resource</code> file represent it is closed.</li><li>When doing split, make sure the TsFile is not in a running IoTDB.</li><li>Currently, we do not resolve the corresponding mods file, if you wish to put the new files into the IoTDB data dir and be loaded by restarting, you need to copy the related mods file(if exist) and rename them, make sure each new file has one mods.</li><li>This tools do not support aligned timeseries currently.</li></ol>`,10)]))}const p=t(s,[["render",n],["__file","TsFile-Split-Tool.html.vue"]]),d=JSON.parse('{"path":"/UserGuide/V1.0.x/Maintenance-Tools/TsFile-Split-Tool.html","title":"TsFile Split Tool","lang":"en-US","frontmatter":{"description":"TsFile Split Tool TsFile split tool is used to split a TsFile into multiple TsFiles. The location is tools/tsfile/split-tsfile-tool How to use: For Windows: For Linux or MacOs: ...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/Maintenance-Tools/TsFile-Split-Tool.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.0.x/Maintenance-Tools/TsFile-Split-Tool.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"TsFile Split Tool"}],["meta",{"property":"og:description","content":"TsFile Split Tool TsFile split tool is used to split a TsFile into multiple TsFiles. The location is tools/tsfile/split-tsfile-tool How to use: For Windows: For Linux or MacOs: ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"TsFile Split Tool\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.13,"words":338},"filePathRelative":"UserGuide/V1.0.x/Maintenance-Tools/TsFile-Split-Tool.md","localizedDate":"July 10, 2023","autoDesc":true}');export{p as comp,d as data};
