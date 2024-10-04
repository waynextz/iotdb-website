import{_ as s,c as e,b as n,o as t}from"./app-W3EENNaa.js";const l={};function p(o,a){return t(),e("div",null,a[0]||(a[0]=[n(`<h2 id="导入-tsfile" tabindex="-1"><a class="header-anchor" href="#导入-tsfile"><span>导入 TsFile</span></a></h2><h3 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h3><p>加载外部 tsfile 文件工具允许用户向正在运行中的 Apache IoTDB 中加载 tsfile 文件。或者您也可以使用脚本的方式将tsfile加载进IoTDB。</p><h3 id="使用sql加载" tabindex="-1"><a class="header-anchor" href="#使用sql加载"><span>使用SQL加载</span></a></h3><p>用户通过 Cli 工具或 JDBC 向 Apache IoTDB 系统发送指定命令实现文件加载的功能。</p><h4 id="加载-tsfile-文件" tabindex="-1"><a class="header-anchor" href="#加载-tsfile-文件"><span>加载 tsfile 文件</span></a></h4><p>加载 tsfile 文件的指令为：<code>load &#39;&lt;path/dir&gt;&#39; [sglevel=int][verify=true/false][onSuccess=delete/none]</code></p><p>该指令有两种用法：</p><ol><li>通过指定文件路径(绝对路径)加载单 tsfile 文件。</li></ol><p>第一个参数表示待加载的 tsfile 文件的路径。load 命令有三个可选项，分别是 sglevel，值域为整数，verify，值域为 true/false，onSuccess，值域为delete/none。不同选项之间用空格隔开，选项之间无顺序要求。</p><p>SGLEVEL 选项，当 tsfile 对应的 database 不存在时，用户可以通过 sglevel 参数的值来制定 database 的级别，默认为<code>iotdb-datanode.properties</code>中设置的级别。例如当设置 level 参数为1时表明此 tsfile 中所有时间序列中层级为1的前缀路径是 database，即若存在设备 root.sg.d1.s1，此时 <a href="http://root.sg" target="_blank" rel="noopener noreferrer">root.sg</a> 被指定为 database。</p><p>VERIFY 选项表示是否对载入的 tsfile 中的所有时间序列进行元数据检查，默认为 true。开启时，若载入的 tsfile 中的时间序列在当前 iotdb 中也存在，则会比较该时间序列的所有 Measurement 的数据类型是否一致，如果出现不一致将会导致载入失败，关闭该选项会跳过检查，载入更快。</p><p>ONSUCCESS选项表示对于成功载入的tsfile的处置方式，默认为delete，即tsfile成功加载后将被删除，如果是none表明tsfile成功加载之后依然被保留在源文件夹。</p><p>若待加载的 tsfile 文件对应的<code>.resource</code>文件存在，会被一并加载至 Apache IoTDB 数据文件的目录和引擎中，否则将通过 tsfile 文件重新生成对应的<code>.resource</code>文件，即加载的 tsfile 文件所对应的<code>.resource</code>文件不是必要的。</p><p>示例：</p><ul><li><code>load &#39;/Users/Desktop/data/1575028885956-101-0.tsfile&#39;</code></li><li><code>load &#39;/Users/Desktop/data/1575028885956-101-0.tsfile&#39; verify=true</code></li><li><code>load &#39;/Users/Desktop/data/1575028885956-101-0.tsfile&#39; verify=false</code></li><li><code>load &#39;/Users/Desktop/data/1575028885956-101-0.tsfile&#39; sglevel=1</code></li><li><code>load &#39;/Users/Desktop/data/1575028885956-101-0.tsfile&#39; onSuccess=delete</code></li><li><code>load &#39;/Users/Desktop/data/1575028885956-101-0.tsfile&#39; verify=true sglevel=1</code></li><li><code>load &#39;/Users/Desktop/data/1575028885956-101-0.tsfile&#39; verify=false sglevel=1</code></li><li><code>load &#39;/Users/Desktop/data/1575028885956-101-0.tsfile&#39; verify=true onSuccess=none</code></li><li><code>load &#39;/Users/Desktop/data/1575028885956-101-0.tsfile&#39; verify=false sglevel=1 onSuccess=delete</code></li></ul><ol start="2"><li>通过指定文件夹路径(绝对路径)批量加载文件。</li></ol><p>第一个参数表示待加载的 tsfile 文件夹的路径。选项意义与加载单个 tsfile 文件相同。</p><p>示例：</p><ul><li><code>load &#39;/Users/Desktop/data&#39;</code></li><li><code>load &#39;/Users/Desktop/data&#39; verify=false</code></li><li><code>load &#39;/Users/Desktop/data&#39; verify=true</code></li><li><code>load &#39;/Users/Desktop/data&#39; verify=true sglevel=1</code></li><li><code>load &#39;/Users/Desktop/data&#39; verify=false sglevel=1 onSuccess=delete</code></li></ul><p><strong>注意</strong>，如果<code>$IOTDB_HOME$/conf/iotdb-datanode.properties</code>中<code>enable_auto_create_schema=true</code>时会在加载tsfile的时候自动创建tsfile中的元数据，否则不会自动创建。</p><h3 id="使用脚本加载" tabindex="-1"><a class="header-anchor" href="#使用脚本加载"><span>使用脚本加载</span></a></h3><p>若您在Windows环境中，请运行<code>$IOTDB_HOME/tools/load-tsfile.bat</code>，若为Linux或Unix，请运行<code>load-tsfile.sh</code></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">./load-tsfile.bat <span class="token parameter variable">-f</span> filePath <span class="token punctuation">[</span>-h host<span class="token punctuation">]</span> <span class="token punctuation">[</span>-p port<span class="token punctuation">]</span> <span class="token punctuation">[</span>-u username<span class="token punctuation">]</span> <span class="token punctuation">[</span>-pw password<span class="token punctuation">]</span> <span class="token punctuation">[</span>--sgLevel int<span class="token punctuation">]</span> <span class="token punctuation">[</span>--verify true/false<span class="token punctuation">]</span> <span class="token punctuation">[</span>--onSuccess none/delete<span class="token punctuation">]</span></span>
<span class="line"><span class="token parameter variable">-f</span> 			待加载的文件或文件夹路径，必要字段</span>
<span class="line"><span class="token parameter variable">-h</span> 			IoTDB的Host地址，可选，默认127.0.0.1</span>
<span class="line"><span class="token parameter variable">-p</span> 			IoTDB的端口，可选，默认6667</span>
<span class="line"><span class="token parameter variable">-u</span> 			IoTDb登录用户名，可选，默认root</span>
<span class="line"><span class="token parameter variable">-pw</span> 		IoTDB登录密码，可选，默认root</span>
<span class="line"><span class="token parameter variable">--sgLevel</span> 	加载TsFile自动创建Database的路径层级，可选，默认值为iotdb-common.properties指定值</span>
<span class="line"><span class="token parameter variable">--verify</span> 	是否对加载TsFile进行元数据校验，可选，默认为True</span>
<span class="line"><span class="token parameter variable">--onSuccess</span> 对成功加载的TsFile的处理方法，可选，默认为delete，成功加载之后删除源TsFile，设为none时会				保留源TsFile</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用范例" tabindex="-1"><a class="header-anchor" href="#使用范例"><span>使用范例</span></a></h4><p>假定服务器192.168.0.101:6667上运行一个IoTDB实例，想从将本地保存的TsFile备份文件夹D:\\IoTDB\\data中的所有的TsFile文件都加载进此IoTDB实例。</p><p>首先移动至<code>$IOTDB_HOME/tools/</code>，打开命令行，然后执行</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">./load-tsfile.bat <span class="token parameter variable">-f</span> D:<span class="token punctuation">\\</span>IoTDB<span class="token punctuation">\\</span>data <span class="token parameter variable">-h</span> <span class="token number">192.168</span>.0.101 <span class="token parameter variable">-p</span> <span class="token number">6667</span> <span class="token parameter variable">-u</span> root <span class="token parameter variable">-pw</span> root</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>等待脚本执行完成之后，可以检查IoTDB实例中数据已经被正确加载</p><h4 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h4><ul><li>找不到或无法加载主类 <ul><li>可能是由于未设置环境变量$IOTDB_HOME，请设置环境变量之后重试</li></ul></li><li>提示-f option must be set! <ul><li>输入命令缺少待-f字段（加载文件或文件夹路径），请添加之后重新执行</li></ul></li><li>执行到中途崩溃了想重新加载怎么办 <ul><li>重新执行刚才的命令，重新加载数据不会影响加载之后的正确性</li></ul></li></ul><h2 id="导出-tsfile" tabindex="-1"><a class="header-anchor" href="#导出-tsfile"><span>导出 TsFile</span></a></h2><p>TsFile 工具可帮您 通过执行指定sql、命令行sql、sql文件的方式将结果集以TsFile文件的格式导出至指定路径.</p><h3 id="使用-export-tsfile-sh" tabindex="-1"><a class="header-anchor" href="#使用-export-tsfile-sh"><span>使用 <a href="http://export-tsfile.sh" target="_blank" rel="noopener noreferrer">export-tsfile.sh</a></span></a></h3><h4 id="运行方法" tabindex="-1"><a class="header-anchor" href="#运行方法"><span>运行方法</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># Unix/OS X</span></span>
<span class="line"><span class="token operator">&gt;</span> tools/export-tsfile.sh  <span class="token parameter variable">-h</span> <span class="token operator">&lt;</span>ip<span class="token operator">&gt;</span> <span class="token parameter variable">-p</span> <span class="token operator">&lt;</span>port<span class="token operator">&gt;</span> <span class="token parameter variable">-u</span> <span class="token operator">&lt;</span>username<span class="token operator">&gt;</span> <span class="token parameter variable">-pw</span> <span class="token operator">&lt;</span>password<span class="token operator">&gt;</span> <span class="token parameter variable">-td</span> <span class="token operator">&lt;</span>directory<span class="token operator">&gt;</span> <span class="token punctuation">[</span>-f <span class="token operator">&lt;</span>export filename<span class="token operator">&gt;</span> <span class="token parameter variable">-q</span> <span class="token operator">&lt;</span>query command<span class="token operator">&gt;</span> <span class="token parameter variable">-s</span> <span class="token operator">&lt;</span>sql file<span class="token operator">&gt;</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Windows</span></span>
<span class="line"><span class="token operator">&gt;</span> tools<span class="token punctuation">\\</span>export-tsfile.bat <span class="token parameter variable">-h</span> <span class="token operator">&lt;</span>ip<span class="token operator">&gt;</span> <span class="token parameter variable">-p</span> <span class="token operator">&lt;</span>port<span class="token operator">&gt;</span> <span class="token parameter variable">-u</span> <span class="token operator">&lt;</span>username<span class="token operator">&gt;</span> <span class="token parameter variable">-pw</span> <span class="token operator">&lt;</span>password<span class="token operator">&gt;</span> <span class="token parameter variable">-td</span> <span class="token operator">&lt;</span>directory<span class="token operator">&gt;</span> <span class="token punctuation">[</span>-f <span class="token operator">&lt;</span>export filename<span class="token operator">&gt;</span> <span class="token parameter variable">-q</span> <span class="token operator">&lt;</span>query command<span class="token operator">&gt;</span> <span class="token parameter variable">-s</span> <span class="token operator">&lt;</span>sql file<span class="token operator">&gt;</span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数:</p><ul><li><code>-h &lt;host&gt;</code>: <ul><li>IoTDB服务的主机地址。</li></ul></li><li><code>-p &lt;port&gt;</code>: <ul><li>IoTDB服务的端口号。</li></ul></li><li><code>-u &lt;username&gt;</code>: <ul><li>IoTDB服务的用户名。</li></ul></li><li><code>-pw &lt;password&gt;</code>: <ul><li>IoTDB服务的密码。</li></ul></li><li><code>-td &lt;directory&gt;</code>: <ul><li>为导出的TsFile文件指定输出路径。</li></ul></li><li><code>-f &lt;tsfile name&gt;</code>: <ul><li>为导出的TsFile文件的文件名，只需写文件名称，不能包含文件路径和后缀。如果sql文件或控制台输入时包含多个sql，会按照sql顺序生成多个TsFile文件。</li><li>例如：文件中或命令行共有3个SQL，-f 为&quot;dump&quot;，那么会在目标路径下生成 dump0.tsfile、dump1.tsfile、dump2.tsfile三个TsFile文件。</li></ul></li><li><code>-q &lt;query command&gt;</code>: <ul><li>在命令中直接指定想要执行的查询语句。</li><li>例如: <code>select * from root.** limit 100</code></li></ul></li><li><code>-s &lt;sql file&gt;</code>: <ul><li>指定一个SQL文件，里面包含一条或多条SQL语句。如果一个SQL文件中包含多条SQL语句，SQL语句之间应该用换行符进行分割。每一条SQL语句对应一个输出的TsFile文件。</li></ul></li><li><code>-t &lt;timeout&gt;</code>: <ul><li>指定session查询时的超时时间，单位为ms</li></ul></li></ul><p>除此之外，如果你没有使用<code>-s</code>和<code>-q</code>参数，在导出脚本被启动之后你需要按照程序提示输入查询语句，不同的查询结果会被保存到不同的TsFile文件中。</p><h4 id="运行示例" tabindex="-1"><a class="header-anchor" href="#运行示例"><span>运行示例</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># Unix/OS X</span></span>
<span class="line"><span class="token operator">&gt;</span> tools/export-tsfile.sh <span class="token parameter variable">-h</span> <span class="token number">127.0</span>.0.1 <span class="token parameter variable">-p</span> <span class="token number">6667</span> <span class="token parameter variable">-u</span> root <span class="token parameter variable">-pw</span> root <span class="token parameter variable">-td</span> ./</span>
<span class="line"><span class="token comment"># or</span></span>
<span class="line"><span class="token operator">&gt;</span> tools/export-tsfile.sh <span class="token parameter variable">-h</span> <span class="token number">127.0</span>.0.1 <span class="token parameter variable">-p</span> <span class="token number">6667</span> <span class="token parameter variable">-u</span> root <span class="token parameter variable">-pw</span> root <span class="token parameter variable">-td</span> ./ <span class="token parameter variable">-q</span> <span class="token string">&quot;select * from root.**&quot;</span></span>
<span class="line"><span class="token comment"># Or</span></span>
<span class="line"><span class="token operator">&gt;</span> tools/export-tsfile.sh <span class="token parameter variable">-h</span> <span class="token number">127.0</span>.0.1 <span class="token parameter variable">-p</span> <span class="token number">6667</span> <span class="token parameter variable">-u</span> root <span class="token parameter variable">-pw</span> root <span class="token parameter variable">-td</span> ./ <span class="token parameter variable">-s</span> ./sql.txt</span>
<span class="line"><span class="token comment"># Or</span></span>
<span class="line"><span class="token operator">&gt;</span> tools/export-tsfile.sh <span class="token parameter variable">-h</span> <span class="token number">127.0</span>.0.1 <span class="token parameter variable">-p</span> <span class="token number">6667</span> <span class="token parameter variable">-u</span> root <span class="token parameter variable">-pw</span> root <span class="token parameter variable">-td</span> ./ <span class="token parameter variable">-s</span> ./sql.txt <span class="token parameter variable">-f</span> myTsFile</span>
<span class="line"><span class="token comment"># Or</span></span>
<span class="line"><span class="token operator">&gt;</span> tools/export-tsfile.sh <span class="token parameter variable">-h</span> <span class="token number">127.0</span>.0.1 <span class="token parameter variable">-p</span> <span class="token number">6667</span> <span class="token parameter variable">-u</span> root <span class="token parameter variable">-pw</span> root <span class="token parameter variable">-td</span> ./ <span class="token parameter variable">-s</span> ./sql.txt <span class="token parameter variable">-f</span> myTsFile <span class="token parameter variable">-t</span> <span class="token number">10000</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Windows</span></span>
<span class="line"><span class="token operator">&gt;</span> tools/export-tsfile.bat <span class="token parameter variable">-h</span> <span class="token number">127.0</span>.0.1 <span class="token parameter variable">-p</span> <span class="token number">6667</span> <span class="token parameter variable">-u</span> root <span class="token parameter variable">-pw</span> root <span class="token parameter variable">-td</span> ./</span>
<span class="line"><span class="token comment"># Or</span></span>
<span class="line"><span class="token operator">&gt;</span> tools/export-tsfile.bat <span class="token parameter variable">-h</span> <span class="token number">127.0</span>.0.1 <span class="token parameter variable">-p</span> <span class="token number">6667</span> <span class="token parameter variable">-u</span> root <span class="token parameter variable">-pw</span> root <span class="token parameter variable">-td</span> ./ <span class="token parameter variable">-q</span> <span class="token string">&quot;select * from root.**&quot;</span></span>
<span class="line"><span class="token comment"># Or</span></span>
<span class="line"><span class="token operator">&gt;</span> tools/export-tsfile.bat <span class="token parameter variable">-h</span> <span class="token number">127.0</span>.0.1 <span class="token parameter variable">-p</span> <span class="token number">6667</span> <span class="token parameter variable">-u</span> root <span class="token parameter variable">-pw</span> root <span class="token parameter variable">-td</span> ./ <span class="token parameter variable">-s</span> ./sql.txt</span>
<span class="line"><span class="token comment"># Or</span></span>
<span class="line"><span class="token operator">&gt;</span> tools/export-tsfile.bat <span class="token parameter variable">-h</span> <span class="token number">127.0</span>.0.1 <span class="token parameter variable">-p</span> <span class="token number">6667</span> <span class="token parameter variable">-u</span> root <span class="token parameter variable">-pw</span> root <span class="token parameter variable">-td</span> ./ <span class="token parameter variable">-s</span> ./sql.txt <span class="token parameter variable">-f</span> myTsFile</span>
<span class="line"><span class="token comment"># Or</span></span>
<span class="line"><span class="token operator">&gt;</span> tools/export-tsfile.sh <span class="token parameter variable">-h</span> <span class="token number">127.0</span>.0.1 <span class="token parameter variable">-p</span> <span class="token number">6667</span> <span class="token parameter variable">-u</span> root <span class="token parameter variable">-pw</span> root <span class="token parameter variable">-td</span> ./ <span class="token parameter variable">-s</span> ./sql.txt <span class="token parameter variable">-f</span> myTsFile <span class="token parameter variable">-t</span> <span class="token number">10000</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="q-a" tabindex="-1"><a class="header-anchor" href="#q-a"><span>Q&amp;A</span></a></h4><ul><li>建议在导入数据时不要同时执行写入数据命令，这将有可能导致JVM内存不足的情况。</li></ul>`,43)]))}const i=s(l,[["render",p],["__file","TsFile-Load-Export-Tool.html.vue"]]),c=JSON.parse('{"path":"/zh/UserGuide/V1.1.x/Maintenance-Tools/TsFile-Load-Export-Tool.html","title":"","lang":"zh-CN","frontmatter":{"description":"导入 TsFile 介绍 加载外部 tsfile 文件工具允许用户向正在运行中的 Apache IoTDB 中加载 tsfile 文件。或者您也可以使用脚本的方式将tsfile加载进IoTDB。 使用SQL加载 用户通过 Cli 工具或 JDBC 向 Apache IoTDB 系统发送指定命令实现文件加载的功能。 加载 tsfile 文件 加载 tsf...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.1.x/Maintenance-Tools/TsFile-Load-Export-Tool.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/Maintenance-Tools/TsFile-Load-Export-Tool.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"导入 TsFile 介绍 加载外部 tsfile 文件工具允许用户向正在运行中的 Apache IoTDB 中加载 tsfile 文件。或者您也可以使用脚本的方式将tsfile加载进IoTDB。 使用SQL加载 用户通过 Cli 工具或 JDBC 向 Apache IoTDB 系统发送指定命令实现文件加载的功能。 加载 tsfile 文件 加载 tsf..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"导入 TsFile","slug":"导入-tsfile","link":"#导入-tsfile","children":[{"level":3,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":3,"title":"使用SQL加载","slug":"使用sql加载","link":"#使用sql加载","children":[]},{"level":3,"title":"使用脚本加载","slug":"使用脚本加载","link":"#使用脚本加载","children":[]}]},{"level":2,"title":"导出 TsFile","slug":"导出-tsfile","link":"#导出-tsfile","children":[{"level":3,"title":"使用 export-tsfile.sh","slug":"使用-export-tsfile-sh","link":"#使用-export-tsfile-sh","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":6.21,"words":1862},"filePathRelative":"zh/UserGuide/V1.1.x/Maintenance-Tools/TsFile-Load-Export-Tool.md","localizedDate":"2023年7月10日","autoDesc":true}');export{i as comp,c as data};
