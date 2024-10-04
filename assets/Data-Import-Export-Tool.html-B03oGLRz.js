import{_ as l,c as n,d as e,e as s,a as i,w as d,b as o,r,o as c}from"./app-W3EENNaa.js";const p={};function u(m,t){const a=r("RouteLink");return c(),n("div",null,[t[3]||(t[3]=e("h1",{id:"数据导入导出脚本",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#数据导入导出脚本"},[e("span",null,"数据导入导出脚本")])],-1)),e("p",null,[t[1]||(t[1]=s("IoTDB 提供了数据导入导出脚本（tools/export-data、tools/import-data，V1.3.2 及之后版本支持；历史版本可使用 tools/export-csv、tools/import-csv 脚本，使用参考")),i(a,{to:"/zh/UserGuide/latest/Tools-System/TsFile-Import-Export-Tool.html"},{default:d(()=>t[0]||(t[0]=[s("文档")])),_:1}),t[2]||(t[2]=s("），用于实现 IoTDB 内部数据与外部文件的交互，适用于单个文件或目录文件批量操作。"))]),t[4]||(t[4]=o(`<h2 id="支持的数据格式" tabindex="-1"><a class="header-anchor" href="#支持的数据格式"><span>支持的数据格式</span></a></h2><ul><li><strong>CSV</strong>：纯文本格式，存储格式化数据，需按照下文指定 CSV 格式进行构造</li><li><strong>SQL</strong>：包含自定义 SQL 语句的文件</li></ul><h2 id="export-data-脚本-数据导出" tabindex="-1"><a class="header-anchor" href="#export-data-脚本-数据导出"><span>export-data 脚本（数据导出）</span></a></h2><h3 id="运行命令" tabindex="-1"><a class="header-anchor" href="#运行命令"><span>运行命令</span></a></h3><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line"># Unix/OS X</span>
<span class="line">&gt;tools/export-data.sh  -h &lt;ip&gt; -p &lt;port&gt; -u &lt;username&gt; -pw &lt;password&gt; -t &lt;directory&gt; [-tf &lt;time-format&gt; -datatype &lt;true/false&gt; -q &lt;query command&gt; -s &lt;source sql file&gt; -tfn &lt;target file name&gt; -lpf &lt;int&gt; -type &lt;export type&gt; -aligned &lt;true/false&gt;]</span>
<span class="line"></span>
<span class="line"># Windows</span>
<span class="line">&gt;tools\\export-data.bat -h &lt;ip&gt; -p &lt;port&gt; -u &lt;username&gt; -pw &lt;password&gt; -t &lt;directory&gt; [-tf &lt;time-format&gt; -datatype &lt;true/false&gt; -q &lt;query command&gt; -s &lt;source sql file&gt; -tfn &lt;target file name&gt; -lpf &lt;int&gt; -type &lt;export type&gt; -aligned &lt;true/false&gt;]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数介绍：</p><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">定义</th><th style="text-align:left;">是否必填</th><th style="text-align:left;">默认</th></tr></thead><tbody><tr><td style="text-align:left;">-h</td><td style="text-align:left;">数据库IP地址</td><td style="text-align:left;">否</td><td style="text-align:left;">127.0.0.1</td></tr><tr><td style="text-align:left;">-p</td><td style="text-align:left;">数据库端口</td><td style="text-align:left;">否</td><td style="text-align:left;">6667</td></tr><tr><td style="text-align:left;">-u</td><td style="text-align:left;">数据库连接用户名</td><td style="text-align:left;">否</td><td style="text-align:left;">root</td></tr><tr><td style="text-align:left;">-pw</td><td style="text-align:left;">数据库连接密码</td><td style="text-align:left;">否</td><td style="text-align:left;">root</td></tr><tr><td style="text-align:left;">-t</td><td style="text-align:left;">导出的 CSV 或 SQL 文件的输出路径(V1.3.2版本参数是<code>-td</code>)</td><td style="text-align:left;">是</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">-datatype</td><td style="text-align:left;">是否在 CSV 文件的 header 中时间序列的后面打印出对应的数据类型，选项为 true 或者 false</td><td style="text-align:left;">否</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:left;">-q</td><td style="text-align:left;">在命令中直接指定想要执行的查询语句（目前仅支持部分语句，详细明细见下表）<br>说明：-q 与 -s 参数必填其一，同时填写则 -q 生效。详细支持的 SQL 语句示例，请参考下方“SQL语句支持明细”</td><td style="text-align:left;">否</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">-s</td><td style="text-align:left;">指定 SQL 文件，该文件可包含一条或多条 SQL 语句。如果包含多条 SQL 语句，语句之间应该用换行(回车)进行分割。每一条 SQL 语句对应一个或多个输出的CSV或 SQL 文件<br>说明：-q 与 -s 参数必填其一，同时填写则-q生效。详细支持的 SQL 语句示例，请参考下方“SQL语句支持规则”</td><td style="text-align:left;">否</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">-type</td><td style="text-align:left;">指定导出的文件类型，选项为 csv 或者 sql</td><td style="text-align:left;">否</td><td style="text-align:left;">csv</td></tr><tr><td style="text-align:left;">-tf</td><td style="text-align:left;">指定时间格式。时间格式必须遵守<a href="https://calendars.wikia.org/wiki/ISO_8601" target="_blank" rel="noopener noreferrer">ISO 8601</a>标准，或时间戳（<code>timestamp</code>）<br>说明：只在 -type 为 csv 时生效</td><td style="text-align:left;">否</td><td style="text-align:left;">yyyy-MM-dd HH:mm:ss.SSSz</td></tr><tr><td style="text-align:left;">-lpf</td><td style="text-align:left;">指定导出的 dump 文件最大行数(V1.3.2版本参数是<code>-linesPerFile</code>)</td><td style="text-align:left;">否</td><td style="text-align:left;">10000</td></tr><tr><td style="text-align:left;">-timeout</td><td style="text-align:left;">指定 session 查询时的超时时间，单位为ms</td><td style="text-align:left;">否</td><td style="text-align:left;">-1</td></tr></tbody></table><p>SQL 语句支持规则：</p><ol><li>只支持查询语句，非查询语句（如：元数据管理、系统管理等语句）不支持。对于不支持的 SQL ，程序会自动跳过，同时输出错误信息。</li><li>查询语句中目前版本仅支持原始数据的导出，如果有使用 group by、聚合函数、udf、操作运算符等则不支持导出为 SQL。原始数据导出时请注意，若导出多个设备数据，请使用 align by device 语句。详细示例如下：</li></ol><table><thead><tr><th></th><th>支持导出</th><th>示例</th></tr></thead><tbody><tr><td>原始数据单设备查询</td><td>支持</td><td>select * from root.s_0.d_0</td></tr><tr><td>原始数据多设备查询（aligin by device）</td><td>支持</td><td>select * from root.** align by device</td></tr><tr><td>原始数据多设备查询（无 aligin by device）</td><td>不支持</td><td>select * from root.**<br>select * from root.s_0.*</td></tr></tbody></table><h3 id="运行示例" tabindex="-1"><a class="header-anchor" href="#运行示例"><span>运行示例</span></a></h3><ul><li><p>导出某 SQL 执行范围下的所有数据至 CSV 文件。</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line"># Unix/OS X</span>
<span class="line">&gt;tools/export-data.sh -t ./data/ -q &#39;select * from root.stock.**&#39;</span>
<span class="line"># Windows</span>
<span class="line">&gt;tools/export-data.bat -t ./data/ -q &#39;select * from root.stock.**&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>导出结果</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line">Time,root.stock.Legacy.0700HK.L1_BidPrice,root.stock.Legacy.0700HK.Type,root.stock.Legacy.0700HK.L1_BidSize,root.stock.Legacy.0700HK.Domain,root.stock.Legacy.0700HK.L1_BuyNo,root.stock.Legacy.0700HK.L1_AskPrice</span>
<span class="line">2024-07-29T18:37:18.700+08:00,0.9666617,3.0,0.021367407654674264,-6.0,false,0.8926191</span>
<span class="line">2024-07-29T18:37:19.701+08:00,0.3057328,3.0,0.9965377284981661,-5.0,false,0.15167356</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>导出 SQL 文件内所有 SQL 执行范围下的所有数据至 CSV 文件。</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line"># Unix/OS X</span>
<span class="line">&gt;tools/export-data.sh -t ./data/ -s export.sql</span>
<span class="line"># Windows</span>
<span class="line">&gt;tools/export-data.bat -t ./data/ -s export.sql</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>export.sql 文件内容（-s 参数指向的文件）</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">select * from root.stock.** limit 100</span>
<span class="line">select * from root.db.** limit 100</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>导出结果文件1</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line">Time,root.stock.Legacy.0700HK.L1_BidPrice,root.stock.Legacy.0700HK.Type,root.stock.Legacy.0700HK.L1_BidSize,root.stock.Legacy.0700HK.Domain,root.stock.Legacy.0700HK.L1_BuyNo,root.stock.Legacy.0700HK.L1_AskPrice</span>
<span class="line">2024-07-29T18:37:18.700+08:00,0.9666617,3.0,0.021367407654674264,-6.0,false,0.8926191</span>
<span class="line">2024-07-29T18:37:19.701+08:00,0.3057328,3.0,0.9965377284981661,-5.0,false,0.15167356</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>导出结果文件2</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line">Time,root.db.Random.RandomBoolean</span>
<span class="line">2024-07-22T17:16:05.820+08:00,true</span>
<span class="line">2024-07-22T17:16:02.597+08:00,false</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>将 IoTDB 数据库中在 SQL 文件内定义的数据，以对齐的格式将其导出为 SQL 语句。</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line"># Unix/OS X</span>
<span class="line">&gt;tools/export-data.sh -h 127.0.0.1 -p 6667 -u root -p root -t ./data/ -s export.sql -type sql -aligned true</span>
<span class="line"># Windows</span>
<span class="line">&gt;tools/export-data.bat -h 127.0.0.1 -p 6667 -u root -p root -t ./data/ -s export.sql -type sql -aligned true</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>导出结果</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line">INSERT INTO root.stock.Legacy.0700HK(TIMESTAMP,L1_BidPrice,Type,L1_BidSize,Domain,L1_BuyNo,L1_AskPrice) ALIGNED VALUES (1722249629831,0.62308747,2.0,0.012206747854849653,-6.0,false,0.14164352);</span>
<span class="line">INSERT INTO root.stock.Legacy.0700HK(TIMESTAMP,L1_BidPrice,Type,L1_BidSize,Domain,L1_BuyNo,L1_AskPrice) ALIGNED VALUES (1722249630834,0.7520042,3.0,0.22760657101910464,-5.0,true,0.089064896);</span>
<span class="line">INSERT INTO root.stock.Legacy.0700HK(TIMESTAMP,L1_BidPrice,Type,L1_BidSize,Domain,L1_BuyNo,L1_AskPrice) ALIGNED VALUES (1722249631835,0.3981064,3.0,0.6254559288663467,-6.0,false,0.9767922);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>将某 SQL 执行范围下的所有数据导出至 CSV 文件，指定导出的时间格式为<code>yyyy-MM-dd HH:mm:ss</code>，且表头时间序列的后面打印出对应的数据类型。</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line"># Unix/OS X</span>
<span class="line">&gt;tools/export-data.sh -t ./data/ -tf &#39;yyyy-MM-dd HH:mm:ss&#39; -datatype true -q &quot;select * from root.stock.**&quot; -type csv</span>
<span class="line"># Windows</span>
<span class="line">&gt;tools/export-data.bat -t ./data/ -tf &#39;yyyy-MM-dd HH:mm:ss&#39; -datatype true -q &quot;select * from root.stock.**&quot; -type csv</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>导出结果</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line">Time,root.stock.Legacy.0700HK.L1_BidPrice(DOUBLE),root.stock.Legacy.0700HK.Type(DOUBLE),root.stock.Legacy.0700HK.L1_BidSize(DOUBLE),root.stock.Legacy.0700HK.Domain(DOUBLE),root.stock.Legacy.0700HK.L1_BuyNo(BOOLEAN),root.stock.Legacy.0700HK.L1_AskPrice(DOUBLE)</span>
<span class="line">2024-07-30 10:33:55,0.44574088,3.0,0.21476832811611501,-4.0,true,0.5951748</span>
<span class="line">2024-07-30 10:33:56,0.6880933,3.0,0.6289119476165305,-5.0,false,0.114634395</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="import-data-脚本-数据导入" tabindex="-1"><a class="header-anchor" href="#import-data-脚本-数据导入"><span>import-data 脚本（数据导入）</span></a></h2><h3 id="导入文件示例" tabindex="-1"><a class="header-anchor" href="#导入文件示例"><span>导入文件示例</span></a></h3><h4 id="csv-文件示例" tabindex="-1"><a class="header-anchor" href="#csv-文件示例"><span>CSV 文件示例</span></a></h4><p>注意，在导入 CSV 数据前，需要特殊处理下列的字符：</p><ol><li>如果 Text 类型的字段中包含特殊字符如<code>,</code>需要使用<code>\\</code>来进行转义。</li><li>可以导入像<code>yyyy-MM-dd&#39;T&#39;HH:mm:ss</code>， <code>yyy-MM-dd HH:mm:ss</code>， 或者 <code>yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ</code>格式的时间。</li><li>时间列<code>Time</code>应该始终放在第一列。</li></ol><p>示例一：时间对齐，并且 header 中不包含数据类型的数据。</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">Time,root.test.t1.str,root.test.t2.str,root.test.t2.var</span>
<span class="line">1970-01-01T08:00:00.001+08:00,&quot;123hello world&quot;,&quot;123\\,abc&quot;,100</span>
<span class="line">1970-01-01T08:00:00.002+08:00,&quot;123&quot;,,</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例二：时间对齐，并且 header 中包含数据类型的数据（Text 类型数据支持加双引号和不加双引号）</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">Time,root.test.t1.str(TEXT),root.test.t2.str(TEXT),root.test.t2.var(INT32)</span>
<span class="line">1970-01-01T08:00:00.001+08:00,&quot;123hello world&quot;,&quot;123\\,abc&quot;,100</span>
<span class="line">1970-01-01T08:00:00.002+08:00,123,hello world,123</span>
<span class="line">1970-01-01T08:00:00.003+08:00,&quot;123&quot;,,</span>
<span class="line">1970-01-01T08:00:00.004+08:00,123,,12</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例三：设备对齐，并且 header 中不包含数据类型的数据</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">Time,Device,str,var</span>
<span class="line">1970-01-01T08:00:00.001+08:00,root.test.t1,&quot;123hello world&quot;,</span>
<span class="line">1970-01-01T08:00:00.002+08:00,root.test.t1,&quot;123&quot;,</span>
<span class="line">1970-01-01T08:00:00.001+08:00,root.test.t2,&quot;123\\,abc&quot;,100</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例四：设备对齐，并且 header 中包含数据类型的数据（Text 类型数据支持加双引号和不加双引号）</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">Time,Device,str(TEXT),var(INT32)</span>
<span class="line">1970-01-01T08:00:00.001+08:00,root.test.t1,&quot;123hello world&quot;,</span>
<span class="line">1970-01-01T08:00:00.002+08:00,root.test.t1,&quot;123&quot;,</span>
<span class="line">1970-01-01T08:00:00.001+08:00,root.test.t2,&quot;123\\,abc&quot;,100</span>
<span class="line">1970-01-01T08:00:00.002+08:00,root.test.t1,hello world,123</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="sql-文件示例" tabindex="-1"><a class="header-anchor" href="#sql-文件示例"><span>SQL 文件示例</span></a></h4><blockquote><p>对于不支持的 SQL ，不合法的 SQL ，执行失败的 SQL 都会放到失败目录下的失败文件里（默认为 文件名.failed）</p></blockquote><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">INSERT INTO root.stock.Legacy.0700HK(TIMESTAMP,L1_BidPrice,Type,L1_BidSize,Domain,L1_BuyNo,L1_AskPrice) VALUES (1721728578812,0.21911979,4.0,0.7129878488375604,-5.0,false,0.65362453);</span>
<span class="line">INSERT INTO root.stock.Legacy.0700HK(TIMESTAMP,L1_BidPrice,Type,L1_BidSize,Domain,L1_BuyNo,L1_AskPrice) VALUES (1721728579812,0.35814416,3.0,0.04674720094979623,-5.0,false,0.9365247);</span>
<span class="line">INSERT INTO root.stock.Legacy.0700HK(TIMESTAMP,L1_BidPrice,Type,L1_BidSize,Domain,L1_BuyNo,L1_AskPrice) VALUES (1721728580813,0.20012152,3.0,0.9910098187911393,-4.0,true,0.70040536);</span>
<span class="line">INSERT INTO root.stock.Legacy.0700HK(TIMESTAMP,L1_BidPrice,Type,L1_BidSize,Domain,L1_BuyNo,L1_AskPrice) VALUES (1721728581814,0.034122765,4.0,0.9313345284181858,-4.0,true,0.9945297);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="运行命令-1" tabindex="-1"><a class="header-anchor" href="#运行命令-1"><span>运行命令</span></a></h3><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line"># Unix/OS X</span>
<span class="line">&gt;tools/import-data.sh -h &lt;ip&gt; -p &lt;port&gt; -u &lt;username&gt; -pw &lt;password&gt; -s &lt;xxx.csv/sql&gt; [-fd &lt;./failedDirectory&gt; -aligned &lt;true/false&gt; -batch &lt;int&gt; -tp &lt;ms/ns/us&gt; -typeInfer &lt;boolean=text,float=double...&gt; -lpf &lt;int&gt;]</span>
<span class="line"></span>
<span class="line"># Windows</span>
<span class="line">&gt;tools\\import-data.bat -h &lt;ip&gt; -p &lt;port&gt; -u &lt;username&gt; -pw &lt;password&gt; -s &lt;xxx.csv/sql&gt; [-fd &lt;./failedDirectory&gt; -aligned &lt;true/false&gt; -batch &lt;int&gt; -tp &lt;ms/ns/us&gt; -typeInfer &lt;boolean=text,float=double...&gt; -lpf &lt;int&gt;]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>虽然 IoTDB 具有类型推断的能力，但我们仍然推荐在导入数据前创建元数据，因为这可以避免不必要的类型转换错误。如下：</p></blockquote><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">CREATE DATABASE root.fit.d1;</span>
<span class="line">CREATE DATABASE root.fit.d2;</span>
<span class="line">CREATE DATABASE root.fit.p;</span>
<span class="line">CREATE TIMESERIES root.fit.d1.s1 WITH DATATYPE=INT32,ENCODING=RLE;</span>
<span class="line">CREATE TIMESERIES root.fit.d1.s2 WITH DATATYPE=TEXT,ENCODING=PLAIN;</span>
<span class="line">CREATE TIMESERIES root.fit.d2.s1 WITH DATATYPE=INT32,ENCODING=RLE;</span>
<span class="line">CREATE TIMESERIES root.fit.d2.s3 WITH DATATYPE=INT32,ENCODING=RLE;</span>
<span class="line">CREATE TIMESERIES root.fit.p.s1 WITH DATATYPE=INT32,ENCODING=RLE;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数介绍：</p><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">定义</th><th style="text-align:left;">是否必填</th><th style="text-align:left;">默认</th></tr></thead><tbody><tr><td style="text-align:left;">-h</td><td style="text-align:left;">数据库 IP 地址</td><td style="text-align:left;">否</td><td style="text-align:left;">127.0.0.1</td></tr><tr><td style="text-align:left;">-p</td><td style="text-align:left;">数据库端口</td><td style="text-align:left;">否</td><td style="text-align:left;">6667</td></tr><tr><td style="text-align:left;">-u</td><td style="text-align:left;">数据库连接用户名</td><td style="text-align:left;">否</td><td style="text-align:left;">root</td></tr><tr><td style="text-align:left;">-pw</td><td style="text-align:left;">数据库连接密码</td><td style="text-align:left;">否</td><td style="text-align:left;">root</td></tr><tr><td style="text-align:left;">-s</td><td style="text-align:left;">指定想要导入的数据，这里可以指定文件或者文件夹。如果指定的是文件夹，将会把文件夹中所有的后缀为 csv 或者 sql 的文件进行批量导入(V1.3.2版本参数是<code>-f</code>)</td><td style="text-align:left;">是</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">-fd</td><td style="text-align:left;">指定存放失败 SQL 文件的目录，如果未指定这个参数，失败的文件将会被保存到源数据的目录中。<br>说明：对于不支持的 SQL ，不合法的 SQL ，执行失败的 SQL 都会放到失败目录下的失败文件里（默认为 文件名.failed）</td><td style="text-align:left;">否</td><td style="text-align:left;">源文件名加上<code>.failed</code>后缀</td></tr><tr><td style="text-align:left;">-aligned</td><td style="text-align:left;">指定是否使用<code>aligned</code>接口，选项为 true 或者 false <br>说明：这个参数只在导入文件为csv文件时生效</td><td style="text-align:left;">否</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">-batch</td><td style="text-align:left;">用于指定每一批插入的数据的点数（最小值为1，最大值为 Integer.<em>MAX_VALUE</em>）。如果程序报了<code>org.apache.thrift.transport.TTransportException: Frame size larger than protect max size</code>这个错的话，就可以适当的调低这个参数。</td><td style="text-align:left;">否</td><td style="text-align:left;"><code>100000</code></td></tr><tr><td style="text-align:left;">-tp</td><td style="text-align:left;">指定时间精度，可选值包括<code>ms</code>（毫秒），<code>ns</code>（纳秒），<code>us</code>（微秒）</td><td style="text-align:left;">否</td><td style="text-align:left;"><code>ms</code></td></tr><tr><td style="text-align:left;">-lpf</td><td style="text-align:left;">指定每个导入失败文件写入数据的行数(V1.3.2版本参数是<code>-linesPerFailedFile</code>)</td><td style="text-align:left;">否</td><td style="text-align:left;">10000</td></tr><tr><td style="text-align:left;">-typeInfer</td><td style="text-align:left;">用于指定类型推断规则，如&lt;srcTsDataType1=dstTsDataType1,srcTsDataType2=dstTsDataType2,...&gt;。<br>说明：用于指定类型推断规则.<code>srcTsDataType</code> 包括 <code>boolean</code>,<code>int</code>,<code>long</code>,<code>float</code>,<code>double</code>,<code>NaN</code>.<code>dstTsDataType</code> 包括 <code>boolean</code>,<code>int</code>,<code>long</code>,<code>float</code>,<code>double</code>,<code>text</code>.当<code>srcTsDataType</code>为<code>boolean</code>, <code>dstTsDataType</code>只能为<code>boolean</code>或<code>text</code>.当<code>srcTsDataType</code>为<code>NaN</code>, <code>dstTsDataType</code>只能为<code>float</code>, <code>double</code>或<code>text</code>.当<code>srcTsDataType</code>为数值类型, <code>dstTsDataType</code>的精度需要高于<code>srcTsDataType</code>.例如:<code>-typeInfer boolean=text,float=double</code></td><td style="text-align:left;">否</td><td style="text-align:left;"></td></tr></tbody></table><h3 id="运行示例-1" tabindex="-1"><a class="header-anchor" href="#运行示例-1"><span>运行示例</span></a></h3><ul><li>导入当前<code>data</code>目录下的<code>dump0_0.sql</code>数据到本机 IoTDB 数据库中。</li></ul><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line"># Unix/OS X</span>
<span class="line">&gt;tools/import-data.sh -s ./data/dump0_0.sql</span>
<span class="line"># Windows</span>
<span class="line">&gt;tools/import-data.bat -s ./data/dump0_0.sql</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>将当前<code>data</code>目录下的所有数据以对齐的方式导入到本机 IoTDB 数据库中。</li></ul><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line"># Unix/OS X</span>
<span class="line">&gt;tools/import-data.sh -s ./data/ -fd ./failed/ -aligned true</span>
<span class="line"># Windows</span>
<span class="line">&gt;tools/import-data.bat -s ./data/ -fd ./failed/ -aligned true</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>导入当前<code>data</code>目录下的<code>dump0_0.csv</code>数据到本机 IoTDB 数据库中。</li></ul><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line"># Unix/OS X</span>
<span class="line">&gt;tools/import-data.sh -s ./data/dump0_0.csv -fd ./failed/</span>
<span class="line"># Windows</span>
<span class="line">&gt;tools/import-data.bat -s ./data/dump0_0.csv -fd ./failed/</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>将当前<code>data</code>目录下的<code>dump0_0.csv</code>数据以对齐的方式，一批导入100000条导入到<code>192.168.100.1</code>IP所在主机的 IoTDB 数据库中，失败的记录记在当前<code>failed</code>目录下，每个文件最多记1000条。</li></ul><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line"># Unix/OS X</span>
<span class="line">&gt;tools/import-data.sh -h 192.168.100.1 -p 6667 -u root -pw root -s ./data/dump0_0.csv -fd ./failed/ -aligned true -batch 100000 -tp ms -typeInfer boolean=text,float=double -lpf 1000</span>
<span class="line"># Windows</span>
<span class="line">&gt;tools/import-data.bat -h 192.168.100.1 -p 6667 -u root -pw root -s ./data/dump0_0.csv -fd ./failed/ -aligned true -batch 100000 -tp ms -typeInfer boolean=text,float=double -lpf 1000</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,43))])}const v=l(p,[["render",u],["__file","Data-Import-Export-Tool.html.vue"]]),h=JSON.parse('{"path":"/zh/UserGuide/latest/Tools-System/Data-Import-Export-Tool.html","title":"数据导入导出脚本","lang":"zh-CN","frontmatter":{"description":"数据导入导出脚本 IoTDB 提供了数据导入导出脚本（tools/export-data、tools/import-data，V1.3.2 及之后版本支持；历史版本可使用 tools/export-csv、tools/import-csv 脚本，使用参考），用于实现 IoTDB 内部数据与外部文件的交互，适用于单个文件或目录文件批量操作。 支持的数据格...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/latest/Tools-System/Data-Import-Export-Tool.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/latest/Tools-System/Data-Import-Export-Tool.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"数据导入导出脚本"}],["meta",{"property":"og:description","content":"数据导入导出脚本 IoTDB 提供了数据导入导出脚本（tools/export-data、tools/import-data，V1.3.2 及之后版本支持；历史版本可使用 tools/export-csv、tools/import-csv 脚本，使用参考），用于实现 IoTDB 内部数据与外部文件的交互，适用于单个文件或目录文件批量操作。 支持的数据格..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-08-05T06:34:30.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-05T06:34:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"数据导入导出脚本\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-05T06:34:30.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"支持的数据格式","slug":"支持的数据格式","link":"#支持的数据格式","children":[]},{"level":2,"title":"export-data 脚本（数据导出）","slug":"export-data-脚本-数据导出","link":"#export-data-脚本-数据导出","children":[{"level":3,"title":"运行命令","slug":"运行命令","link":"#运行命令","children":[]},{"level":3,"title":"运行示例","slug":"运行示例","link":"#运行示例","children":[]}]},{"level":2,"title":"import-data 脚本（数据导入）","slug":"import-data-脚本-数据导入","link":"#import-data-脚本-数据导入","children":[{"level":3,"title":"导入文件示例","slug":"导入文件示例","link":"#导入文件示例","children":[]},{"level":3,"title":"运行命令","slug":"运行命令-1","link":"#运行命令-1","children":[]},{"level":3,"title":"运行示例","slug":"运行示例-1","link":"#运行示例-1","children":[]}]}],"git":{"createdTime":1722591279000,"updatedTime":1722839670000,"contributors":[{"name":"Summer","email":"43237967+2b3c511@users.noreply.github.com","commits":3}]},"readingTime":{"minutes":9.26,"words":2777},"filePathRelative":"zh/UserGuide/latest/Tools-System/Data-Import-Export-Tool.md","localizedDate":"2024年8月2日","autoDesc":true}');export{v as comp,h as data};
