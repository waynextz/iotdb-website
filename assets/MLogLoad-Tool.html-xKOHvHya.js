import{_ as a,c as t,b as l,o}from"./app-D8GMfgiK.js";const n={};function s(i,e){return o(),t("div",null,e[0]||(e[0]=[l(`<h2 id="mlog-加载工具" tabindex="-1"><a class="header-anchor" href="#mlog-加载工具"><span>Mlog 加载工具</span></a></h2><h3 id="工具介绍" tabindex="-1"><a class="header-anchor" href="#工具介绍"><span>工具介绍</span></a></h3><p>MLogLoad 工具用于将重放 <code>mlog.bin</code> 中和 <code>tlog.txt</code> 中的元数据操作，将元数据信息加载到正在运行的 IoTDB 中。<br> 与正在运行的 IoTDB 中的元数据存在冲突的待加载数据将会被跳过。</p><p>若正在运行的 IoTDB 中已有元数据，为避免重放删除操作影响元数据，建议使用<br><a href="https://iotdb.apache.org/UserGuide/V0.13.x/Maintenance-Tools/Export-Schema-Tool.html" target="_blank" rel="noopener noreferrer">导出元数据操作</a> 归档得到的 <code>mlog.bin</code> 和 <code>tlog.txt</code> 进行增量加载。</p><h3 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h3><p>Linux/MacOS</p><blockquote><p>./mLogLoad.sh -mlog /yourpath/mlog.bin -tlog /yourpath/tlog.txt -h 127.0.0.1 -p 6667 -u root -pw root</p></blockquote><p>Windows</p><blockquote><p>./mLogLoad.bat -mlog /yourpath/mlog.bin -tlog /yourpath/tlog.txt -h 127.0.0.1 -p 6667 -u root -pw root</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">usage: MLogLoad -mlog &lt;mlog file&gt; [-tlog &lt;tlog file&gt;] [-h &lt;receiver host&gt;]</span>
<span class="line">       [-p &lt;receiver port&gt;] [-u &lt;user&gt;] [-pw &lt;password&gt;] [-help]</span>
<span class="line"> -mlog &lt;mlog file&gt;    Need to specify a binary mlog.bin file to parse</span>
<span class="line">                      (required)</span>
<span class="line"> -tlog &lt;tlog file&gt;    Could specify a binary tlog.txt file to parse. Tags</span>
<span class="line">                      and attributes will be ignored if not specified</span>
<span class="line">                      (optional)</span>
<span class="line"> -h &lt;receiver host&gt;   Could specify a specify the receiver host, default</span>
<span class="line">                      is 127.0.0.1 (optional)</span>
<span class="line"> -p &lt;receiver port&gt;   Could specify a specify the receiver port, default</span>
<span class="line">                      is 6667 (optional)</span>
<span class="line"> -u &lt;user&gt;            Could specify the user name, default is root</span>
<span class="line">                      (optional)</span>
<span class="line"> -pw &lt;password&gt;       Could specify the password, default is root</span>
<span class="line">                      (optional)</span>
<span class="line"> -help,--help         Display help information</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：当 tlog 未指定时，Mlog 加载工具会跳过标签点管理相关的元数据操作。</p><h3 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h3><p>假定服务器 192.168.0.101:6667 上运行一个 IoTDB 实例，想从将本地的元数据文件 <code>/yourpath/mlog.bin</code> 加载进此IoTDB实例。</p><p>进入到 <a href="http://mLogLoad.sh" target="_blank" rel="noopener noreferrer">mLogLoad.sh</a> 所在文件夹中，执行如下语句：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">./mLogLoad.sh -f &quot;/yourpath/mlog.bin&quot; -h 192.168.0.101 -p 6667 -u root -pw root</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>等待脚本执行完成之后，可以检查 IoTDB 实例中元数据已经被正确加载。</p><h3 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h3><ul><li>找不到或无法加载主类 MLogLoader <ul><li>可能是由于未设置环境变量 $IOTDB_HOME，请设置环境变量之后重试</li></ul></li></ul>`,18)]))}const p=a(n,[["render",s],["__file","MLogLoad-Tool.html.vue"]]),d=JSON.parse('{"path":"/zh/UserGuide/V0.13.x/Maintenance-Tools/MLogLoad-Tool.html","title":"","lang":"zh-CN","frontmatter":{"description":"Mlog 加载工具 工具介绍 MLogLoad 工具用于将重放 mlog.bin 中和 tlog.txt 中的元数据操作，将元数据信息加载到正在运行的 IoTDB 中。 与正在运行的 IoTDB 中的元数据存在冲突的待加载数据将会被跳过。 若正在运行的 IoTDB 中已有元数据，为避免重放删除操作影响元数据，建议使用 导出元数据操作 归档得到的 mlo...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V0.13.x/Maintenance-Tools/MLogLoad-Tool.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Maintenance-Tools/MLogLoad-Tool.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"Mlog 加载工具 工具介绍 MLogLoad 工具用于将重放 mlog.bin 中和 tlog.txt 中的元数据操作，将元数据信息加载到正在运行的 IoTDB 中。 与正在运行的 IoTDB 中的元数据存在冲突的待加载数据将会被跳过。 若正在运行的 IoTDB 中已有元数据，为避免重放删除操作影响元数据，建议使用 导出元数据操作 归档得到的 mlo..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Mlog 加载工具","slug":"mlog-加载工具","link":"#mlog-加载工具","children":[{"level":3,"title":"工具介绍","slug":"工具介绍","link":"#工具介绍","children":[]},{"level":3,"title":"使用方法","slug":"使用方法","link":"#使用方法","children":[]},{"level":3,"title":"使用示例","slug":"使用示例","link":"#使用示例","children":[]},{"level":3,"title":"常见问题","slug":"常见问题","link":"#常见问题","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.81,"words":542},"filePathRelative":"zh/UserGuide/V0.13.x/Maintenance-Tools/MLogLoad-Tool.md","localizedDate":"2023年7月10日","autoDesc":true}');export{p as comp,d as data};
