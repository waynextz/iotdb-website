import{_ as t,c as a,b as n,o as i}from"./app-Y2-ILDda.js";const s={};function l(r,e){return i(),a("div",null,e[0]||(e[0]=[n(`<h1 id="常用sql语句" tabindex="-1"><a class="header-anchor" href="#常用sql语句"><span>常用SQL语句</span></a></h1><h2 id="数据库管理" tabindex="-1"><a class="header-anchor" href="#数据库管理"><span>数据库管理</span></a></h2><p>数据库（Database）类似关系数据库中的 Database，是一组结构化的时序数据的集合。</p><ul><li>创建数据库</li></ul><p>创建一个名为 root.ln 的数据库,语法如下：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">CREATE DATABASE root.ln</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>查看数据库</li></ul><p>查看所有数据库：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SHOW DATABASES</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>删除数据库</li></ul><p>删除名为 root.ln 的数据库：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">DELETE DATABASE root.ln</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>统计数据库数量</li></ul><p>统计数据库的总数</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">COUNT DATABASES</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="时间序列管理" tabindex="-1"><a class="header-anchor" href="#时间序列管理"><span>时间序列管理</span></a></h2><p>时间序列（Timeseries）是以时间为索引的数据点的集合，在IoTDB中时间序列指的是一个测点的完整序列，本节主要介绍时间序列的管理方式。</p><ul><li>创建时间序列</li></ul><p>需指定编码方式与数据类型。例如创建一条名为root.ln.wf01.wt01.temperature的时间序列：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">CREATE TIMESERIES root.ln.wf01.wt01.temperature WITH datatype=FLOAT,ENCODING=RLE</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>查看时间序列</li></ul><p>查看所有时间序列：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SHOW TIMESERIES</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>使用通配符匹配数据库root.ln下的时间序列：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SHOW TIMESERIES root.ln.**</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>删除时间序列</li></ul><p>删除名为 root.ln.wf01.wt01.temperature 的时间序列</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">DELETE TIMESERIES root.ln.wf01.wt01.temperature</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>统计时间序列</li></ul><p>统计时间序列的总数</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">COUNT TIMESERIES root.**</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>统计某通配符路径下的时间序列数量：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">COUNT TIMESERIES root.ln.**</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="时间序列路径管理" tabindex="-1"><a class="header-anchor" href="#时间序列路径管理"><span>时间序列路径管理</span></a></h2><p>除时间序列概念外，IoTDB中还有子路径、设备的概念。</p><p>**子路径：**是一条完整时间序列名称中的一部分路径，如时间序列名称为root.ln.wf01.wt01.temperature，则root.ln、root.ln.wf01、root.ln.wf01.wt01都是其子路径。</p><p>**设备：**是一组时间序列的组合，在 IoTDB 中设备是由root至倒数第二级节点的子路径，如时间序列名称为root.ln.wf01.wt01.temperature，则root.ln.wf01.wt01是其设备</p><ul><li>查看设备</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SHOW DEVICES</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>查看子路径</li></ul><p>查看 root.ln 的下一层：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SHOW CHILD PATHS root.ln</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>查看子节点</li></ul><p>查看 root.ln 的下一层：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SHOW CHILD NODES root.ln</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>统计设备数量</li></ul><p>统计所有设备</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">COUNT DEVICES</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>统计节点数</li></ul><p>统计路径中指定层级的节点个数</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">COUNT NODES root.ln.** LEVEL=2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="查询数据" tabindex="-1"><a class="header-anchor" href="#查询数据"><span>查询数据</span></a></h2><p>以下为IoTDB中常用查询语句。</p><ul><li>查询指定时间序列的数据</li></ul><p>查询root.ln.wf01.wt01设备下的所有时间序列的数据</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SELECT * FROM root.ln.wf01.wt01</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>查询某时间范围内的时间序列数据</li></ul><p>查询root.ln.wf01.wt01.temperature时间序列中时间戳大于 2022-01-01T00:05:00.000 的数据</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SELECT temperature FROM root.ln.wf01.wt01 WHERE time &gt; 2022-01-01T00:05:00.000</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>查询数值在指定范围内的时间序列数据</li></ul><p>查询root.ln.wf01.wt01.temperature时间序列中数值大于 36.5 的数据：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SELECT temperature FROM root.ln.wf01.wt01 WHERE temperature &gt; 36.5</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>使用 last 查询最新点数据</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SELECT last * FROM root.ln.wf01.wt01</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,64)]))}const p=t(s,[["render",l],["__file","General-SQL-Statements.html.vue"]]),o=JSON.parse('{"path":"/zh/UserGuide/V1.2.x/QuickStart/General-SQL-Statements.html","title":"常用SQL语句","lang":"zh-CN","frontmatter":{"description":"常用SQL语句 数据库管理 数据库（Database）类似关系数据库中的 Database，是一组结构化的时序数据的集合。 创建数据库 创建一个名为 root.ln 的数据库,语法如下： 查看数据库 查看所有数据库： 删除数据库 删除名为 root.ln 的数据库： 统计数据库数量 统计数据库的总数 时间序列管理 时间序列（Timeseries）是以时...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.2.x/QuickStart/General-SQL-Statements.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.2.x/QuickStart/General-SQL-Statements.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"常用SQL语句"}],["meta",{"property":"og:description","content":"常用SQL语句 数据库管理 数据库（Database）类似关系数据库中的 Database，是一组结构化的时序数据的集合。 创建数据库 创建一个名为 root.ln 的数据库,语法如下： 查看数据库 查看所有数据库： 删除数据库 删除名为 root.ln 的数据库： 统计数据库数量 统计数据库的总数 时间序列管理 时间序列（Timeseries）是以时..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-08-01T06:02:08.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-01T06:02:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"常用SQL语句\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-01T06:02:08.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"数据库管理","slug":"数据库管理","link":"#数据库管理","children":[]},{"level":2,"title":"时间序列管理","slug":"时间序列管理","link":"#时间序列管理","children":[]},{"level":2,"title":"时间序列路径管理","slug":"时间序列路径管理","link":"#时间序列路径管理","children":[]},{"level":2,"title":"查询数据","slug":"查询数据","link":"#查询数据","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1690869728000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1},{"name":"Lei","email":"33376433+LeiRui@users.noreply.github.com","commits":1},{"name":"wanghui42","email":"105700158+wanghui42@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.5,"words":751},"filePathRelative":"zh/UserGuide/V1.2.x/QuickStart/General-SQL-Statements.md","localizedDate":"2023年7月10日","autoDesc":true}');export{p as comp,o as data};
