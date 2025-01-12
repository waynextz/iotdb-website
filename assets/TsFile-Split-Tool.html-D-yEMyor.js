import{_ as t,c as i,b as l,o}from"./app-CNiZnG3t.js";const s={};function a(r,e){return o(),i("div",null,e[0]||(e[0]=[l('<h2 id="tsfile-拆分工具" tabindex="-1"><a class="header-anchor" href="#tsfile-拆分工具"><span>TsFile 拆分工具</span></a></h2><p>0.12 版本的 IoTDB 会产生很大的文件，在运维过程中分析起来比较困难。因此，从 0.12.5 版本和 0.13 版本起，提供TsFile 分离工具，该工具可以将大的 TsFile 文件根据配置项拆分为数个小文件。该启动脚本会在编译 server 之后生成至 <code>server\\target\\iotdb-server-{version}\\tools\\tsfileToolSet</code> 目录中。</p><p>使用方式：</p><p>Windows:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>.\\split-tsfile-tool.bat &lt;TsFile 文件路径&gt; (-level &lt;所拆分文件的层级&gt;) (-size &lt;所拆分文件的大小&gt;)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Linux or MacOs:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>./split-tsfile-tool.sh &lt;TsFile 文件路径&gt; (-level &lt;所拆分文件的层级&gt;) (-size &lt;所拆分文件的大小&gt;)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p>注意：如果不传入<code>-level</code>，所拆分文件的层级为 10；如果不传入<code>-size</code>，所拆分文件的大小约为 1GB；<code>-size</code> 后参数单位为 byte。<br> 例如，需要指定拆分为 100MB 的文件，且文件层级数为6，则命令为 <code>./split-tsfile-tool.sh test.tsfile -level 6 -size 1048576000</code> (Linux or MacOs)</p></blockquote><p>拆分中可以调节的配置项如下：</p><ol><li>拆分所生成的文件大小通过命令传入参数确定的，默认为 1GB。这个配置项同样也是 0.13 版本中合并所能生成文件的目标大小。在 0.13 版本中，文件是否可以合并是通过文件大小确定的，可以通过此配置项控制重启后不继续合并。</li><li>文件所在层级是通过命令传入参数确定的，默认为 10。在 0.12 版本中，文件是否可以合并是通过文件所在层级确定的，可以通过此配置项控制重启后不继续合并。</li><li>文件中 chunk 点数可以通过 <code>chunk_point_num_lower_bound_in_compaction</code> 进行配置，默认为 100。这个配置项同样也是 0.13 版本中合并所能生成文件的 chunk 中点数。</li></ol><p>使用拆分工具需要注意如下事项：</p><ol><li>拆分工具为离线运维工具，使用前需关闭 IoTDB，确保所拆分的文件已经完全落盘（即有<code>tsFile.resource</code>文件）。拆分后需移除原文件后重启。</li><li>拆分工具目前尚不支持拆分带有删除区间的 TsFile（即有<code>.mods</code>文件）和写有对齐时间序列的 TsFile。</li></ol>',12)]))}const c=t(s,[["render",a],["__file","TsFile-Split-Tool.html.vue"]]),d=JSON.parse('{"path":"/zh/UserGuide/V0.13.x/Maintenance-Tools/TsFile-Split-Tool.html","title":"","lang":"zh-CN","frontmatter":{"description":"TsFile 拆分工具 0.12 版本的 IoTDB 会产生很大的文件，在运维过程中分析起来比较困难。因此，从 0.12.5 版本和 0.13 版本起，提供TsFile 分离工具，该工具可以将大的 TsFile 文件根据配置项拆分为数个小文件。该启动脚本会在编译 server 之后生成至 server\\\\target\\\\iotdb-server-{vers...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V0.13.x/Maintenance-Tools/TsFile-Split-Tool.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Maintenance-Tools/TsFile-Split-Tool.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"TsFile 拆分工具 0.12 版本的 IoTDB 会产生很大的文件，在运维过程中分析起来比较困难。因此，从 0.12.5 版本和 0.13 版本起，提供TsFile 分离工具，该工具可以将大的 TsFile 文件根据配置项拆分为数个小文件。该启动脚本会在编译 server 之后生成至 server\\\\target\\\\iotdb-server-{vers..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"TsFile 拆分工具","slug":"tsfile-拆分工具","link":"#tsfile-拆分工具","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","username":"CritasWang","email":"critas@outlook.com","commits":1,"url":"https://github.com/CritasWang"}]},"readingTime":{"minutes":2.24,"words":672},"filePathRelative":"zh/UserGuide/V0.13.x/Maintenance-Tools/TsFile-Split-Tool.md","localizedDate":"2023年7月10日","autoDesc":true}');export{c as comp,d as data};
