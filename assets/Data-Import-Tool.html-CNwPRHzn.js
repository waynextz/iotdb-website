import{_ as e,c as s,b as a,o as d}from"./app-C6MIQYKi.js";const l={};function n(i,t){return d(),s("div",null,t[0]||(t[0]=[a(`<h1 id="数据导入" tabindex="-1"><a class="header-anchor" href="#数据导入"><span>数据导入</span></a></h1><h2 id="_1-iotdb-数据导入" tabindex="-1"><a class="header-anchor" href="#_1-iotdb-数据导入"><span>1. IoTDB 数据导入</span></a></h2><p>IoTDB 目前支持将 CSV、SQL、及TsFile（IoTDB底层开放式时间序列文件格式）格式的数据导入数据库。具体功能如下：</p><table style="text-align:left;"><tr><th>文件格式</th><th>IoTDB工具</th><th>具体介绍</th></tr><tr><td>CSV</td><td>import-data.sh/bat</td><td>可用于单个或一个目录的 CSV 文件批量导入 IoTDB</td></tr><tr><td>SQL</td><td>import-data.sh/bat</td><td>可用于单个或一个目录的 SQL 文件批量导入 IoTDB</td></tr><tr><td rowspan="2">TsFile</td><td>load-tsfile.sh/bat</td><td>可用于单个或一个目录的 TsFile 文件批量导入 IoTDB</td></tr><tr><td>TsFile 主动监听&amp;加载功能</td><td>根据用户配置，监听指定路径下TsFile文件的变化，将新增加的TsFile文件加载入IoTDB</td></tr></table><h2 id="_2-import-data-脚本" tabindex="-1"><a class="header-anchor" href="#_2-import-data-脚本"><span>2. import-data 脚本</span></a></h2><ul><li>支持格式：CSV、SQL</li></ul><h3 id="_2-1-运行命令" tabindex="-1"><a class="header-anchor" href="#_2-1-运行命令"><span>2.1 运行命令：</span></a></h3><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line"># Unix/OS X</span>
<span class="line">&gt;tools/import-data.sh -h &lt;ip&gt; -p &lt;port&gt; -u &lt;username&gt; -pw &lt;password&gt; -s &lt;xxx.csv/sql&gt; [-fd &lt;./failedDirectory&gt; -aligned &lt;true/false&gt; -batch &lt;int&gt; -tp &lt;ms/ns/us&gt; -typeInfer &lt;boolean=text,float=double...&gt; -lpf &lt;int&gt;]</span>
<span class="line"></span>
<span class="line"># Windows</span>
<span class="line">&gt;tools\\import-data.bat -h &lt;ip&gt; -p &lt;port&gt; -u &lt;username&gt; -pw &lt;password&gt; -s &lt;xxx.csv/sql&gt; [-fd &lt;./failedDirectory&gt; -aligned &lt;true/false&gt; -batch &lt;int&gt; -tp &lt;ms/ns/us&gt; -typeInfer &lt;boolean=text,float=double...&gt; -lpf &lt;int&gt;]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-参数介绍" tabindex="-1"><a class="header-anchor" href="#_2-2-参数介绍"><span>2.2 参数介绍：</span></a></h3><table><thead><tr><th><strong>参数</strong></th><th><strong>定义</strong></th><th><strong>是否必填</strong></th><th><strong>默认</strong></th></tr></thead><tbody><tr><td>-h</td><td>数据库IP地址</td><td>否</td><td>127.0.0.1</td></tr><tr><td>-p</td><td>数据库端口</td><td>否</td><td>6667</td></tr><tr><td>-u</td><td>数据库连接用户名</td><td>否</td><td>root</td></tr><tr><td>-pw</td><td>数据库连接密码</td><td>否</td><td>root</td></tr><tr><td>-s</td><td>指定想要导入的数据，这里可以指定文件或者文件夹。如果指定的是文件夹，将会把文件夹中所有的后缀为 csv 或者 sql 的文件进行批量导入(V1.3.2版本参数是<code>-f</code>)</td><td>是</td><td></td></tr><tr><td>-fd</td><td>指定存放失败 SQL 文件的目录，如果未指定这个参数，失败的文件将会被保存到源数据的目录中。 说明：对于不支持的 SQL ，不合法的 SQL ，执行失败的 SQL 都会放到失败目录下的失败文件里（默认为 文件名.failed）</td><td>否</td><td>源文件名加上<code>.failed</code>后缀</td></tr><tr><td>-aligned</td><td>指定是否使用<code>aligned</code>接口，选项为 true 或者 false 说明：这个参数只在导入文件为csv文件时生效</td><td>否</td><td>false</td></tr><tr><td>-batch</td><td>用于指定每一批插入的数据的点数（最小值为1，最大值为 Integer.<em>MAX_VALUE</em>）。如果程序报了<code>org.apache.thrift.transport.TTransportException: Frame size larger than protect max size</code>这个错的话，就可以适当的调低这个参数。</td><td>否</td><td>100000</td></tr><tr><td>-tp</td><td>指定时间精度，可选值包括<code>ms</code>（毫秒），<code>ns</code>（纳秒），<code>us</code>（微秒）</td><td>否</td><td>ms</td></tr><tr><td>-lpf</td><td>指定每个导入失败文件写入数据的行数(V1.3.2版本参数是<code>-linesPerFailedFile</code>)</td><td>否</td><td>10000</td></tr><tr><td>-typeInfer</td><td>用于指定类型推断规则，如&lt;srcTsDataType1=dstTsDataType1,srcTsDataType2=dstTsDataType2,...&gt;。 说明：用于指定类型推断规则.<code>srcTsDataType</code> 包括 <code>boolean</code>,<code>int</code>,<code>long</code>,<code>float</code>,<code>double</code>,<code>NaN</code>.<code>dstTsDataType</code> 包括 <code>boolean</code>,<code>int</code>,<code>long</code>,<code>float</code>,<code>double</code>,<code>text</code>.当<code>srcTsDataType</code>为<code>boolean</code>, <code>dstTsDataType</code>只能为<code>boolean</code>或<code>text</code>.当<code>srcTsDataType</code>为<code>NaN</code>, <code>dstTsDataType</code>只能为<code>float</code>, <code>double</code>或<code>text</code>.当<code>srcTsDataType</code>为数值类型, <code>dstTsDataType</code>的精度需要高于<code>srcTsDataType</code>.例如:<code>-typeInfer boolean=text,float=double</code></td><td>否</td><td></td></tr></tbody></table><h3 id="_2-3-运行示例" tabindex="-1"><a class="header-anchor" href="#_2-3-运行示例"><span>2.3 运行示例：</span></a></h3><ul><li>导入当前<code>data</code>目录下的<code>dump0_0.sql</code>数据到本机 IoTDB 数据库中。</li></ul><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line"># Unix/OS X</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-load-tsfile-脚本" tabindex="-1"><a class="header-anchor" href="#_3-load-tsfile-脚本"><span>3. load-tsfile 脚本</span></a></h2><ul><li>支持格式：TsFile</li></ul><h3 id="_3-1-运行命令" tabindex="-1"><a class="header-anchor" href="#_3-1-运行命令"><span>3.1 运行命令</span></a></h3><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line"># Unix/OS X</span>
<span class="line">&gt;tools/load-tsfile.sh -h &lt;ip&gt; -p &lt;port&gt; -u &lt;username&gt; -pw &lt;password&gt; -s &lt;source&gt; -os &lt;on_success&gt; [-sd &lt;success_dir&gt;] -of &lt;on_fail&gt; [-fd &lt;fail_dir&gt;] [-tn &lt;thread_num&gt;] </span>
<span class="line"></span>
<span class="line"># Windows</span>
<span class="line">&gt;tools\\load-tsfile.bat -h &lt;ip&gt; -p &lt;port&gt; -u &lt;username&gt; -pw &lt;password&gt;  -s &lt;source&gt; -os &lt;on_success&gt; [-sd &lt;success_dir&gt;] -of &lt;on_fail&gt; [-fd &lt;fail_dir&gt;] [-tn &lt;thread_num&gt;] </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-参数介绍" tabindex="-1"><a class="header-anchor" href="#_3-2-参数介绍"><span>3.2 参数介绍</span></a></h3><table><thead><tr><th><strong>参数</strong></th><th><strong>定义</strong></th><th><strong>是否必填</strong></th><th><strong>默认</strong></th></tr></thead><tbody><tr><td>-h</td><td>主机名</td><td>否</td><td>root</td></tr><tr><td>-p</td><td>端口号</td><td>否</td><td>root</td></tr><tr><td>-u</td><td>用户名</td><td>否</td><td>127.0.0.1</td></tr><tr><td>-pw</td><td>密码</td><td>否</td><td>6667</td></tr><tr><td>-s</td><td>待加载的脚本文件(夹)的本地目录路径</td><td>是</td><td></td></tr><tr><td>-os</td><td>none：不删除<br>mv：移动成功的文件到目标文件夹<br>cp：硬连接（拷贝）成功的文件到目标文件夹<br>delete：删除</td><td>是</td><td></td></tr><tr><td>-sd</td><td>当--on_succcess为mv或cp时，mv或cp的目标文件夹。文件的文件名变为文件夹打平后拼接原有文件名</td><td>当--on_succcess为mv或cp时需要填写是</td><td>\${EXEC_DIR}/success</td></tr><tr><td>-of</td><td>none：跳过<br>mv：移动失败的文件到目标文件夹<br>cp：硬连接（拷贝）失败的文件到目标文件夹<br>delete：删除</td><td>是</td><td></td></tr><tr><td>-fd</td><td>当--on_fail指定为mv或cp时，mv或cp的目标文件夹。文件的文件名变为文件夹打平后拼接原有文件名</td><td>当--on_fail指定为mv或cp时需要填写</td><td>\${EXEC_DIR}/fail</td></tr><tr><td>-tn</td><td>最大并行线程数</td><td>是</td><td>8</td></tr></tbody></table><h3 id="_3-3-运行示例" tabindex="-1"><a class="header-anchor" href="#_3-3-运行示例"><span>3.3 运行示例：</span></a></h3><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line"># Unix/OS X</span>
<span class="line">&gt; tools/load-tsfile.sh -h 127.0.0.1 -p 6667 -u root -pw root -s /path/sql -os delete -of delete -tn 8</span>
<span class="line">&gt; tools/load-tsfile.sh -h 127.0.0.1 -p 6667 -u root -pw root -s /path/sql -os mv -of cp -sd /path/success/dir -fd /path/failure/dir -tn 8 </span>
<span class="line"></span>
<span class="line"># Windows</span>
<span class="line">&gt; tools/load_data.bat -h 127.0.0.1 -p 6667 -u root -pw root -s /path/sql -os mv -of cp -sd /path/success/dir -fd /path/failure/dir -tn 8 </span>
<span class="line">&gt; tools/load_data.bat -h 127.0.0.1 -p 6667 -u root -pw root -s /path/sql -os delete -of delete -tn 8 </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-tsfile-主动监听-加载功能" tabindex="-1"><a class="header-anchor" href="#_4-tsfile-主动监听-加载功能"><span>4. TsFile 主动监听&amp;加载功能</span></a></h2><p>TsFile 主动监听&amp;加载功能能够主动监听指定目标路径（用户配置）下TsFile的文件变化，并将目标路径下的TsFile文件自动同步至指定接收路径（用户配置）。通过此功能，IoTDB 能自动检测并加载这些文件，无需手动执行任何额外的加载操作。这种自动化流程不仅简化了用户的操作步骤，还减少了操作过程中可能出现的错误，有效降低了用户在使用过程中的复杂性。</p><figure><img src="https://alioss.timecho.com/docs/img/Data-import1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_4-1-配置参数" tabindex="-1"><a class="header-anchor" href="#_4-1-配置参数"><span>4.1 配置参数</span></a></h3><p>可通过从配置文件模版 <code>iotdb-system.properties.template</code> 中找到下列参数，添加到 IoTDB 配置文件 <code>iotdb-system.properties</code> 中开启TsFile 主动监听&amp;加载功能。完整配置如下：：</p><table><thead><tr><th><strong>配置参数</strong></th><th><strong>参数说明</strong></th><th><strong>value 取值范围</strong></th><th><strong>是否必填</strong></th><th><strong>默认值</strong></th><th><strong>加载方式</strong></th></tr></thead><tbody><tr><td>load_active_listening_enable</td><td>是否开启 DataNode 主动监听并且加载 tsfile 的功能（默认开启）。</td><td>Boolean: true，false</td><td>选填</td><td>true</td><td>热加载</td></tr><tr><td>load_active_listening_dirs</td><td>需要监听的目录（自动包括目录中的子目录），如有多个使用 “，“ 隔开默认的目录为 ext/load/pending（支持热装载）</td><td>String: 一个或多个文件目录</td><td>选填</td><td>ext/load/pending</td><td>热加载</td></tr><tr><td>load_active_listening_fail_dir</td><td>执行加载 tsfile 文件失败后将文件转存的目录，只能配置一个</td><td>String: 一个文件目录</td><td>选填</td><td>ext/load/failed</td><td>热加载</td></tr><tr><td>load_active_listening_max_thread_num</td><td>同时执行加载 tsfile 任务的最大线程数，参数被注释掉时的默值为 max(1, CPU 核心数 / 2)，当用户设置的值不在这个区间[1, CPU核心数 /2]内时，会设置为默认值 (1, CPU 核心数 / 2)</td><td>Long: [1, Long.MAX_VALUE]</td><td>选填</td><td>max(1, CPU 核心数 / 2)</td><td>重启后生效</td></tr><tr><td>load_active_listening_check_interval_seconds</td><td>主动监听轮询间隔，单位秒。主动监听 tsfile 的功能是通过轮询检查文件夹实现的。该配置指定了两次检查 load_active_listening_dirs 的时间间隔，每次检查完成 load_active_listening_check_interval_seconds 秒后，会执行下一次检查。当用户设置的轮询间隔小于 1 时，会被设置为默认值 5 秒</td><td>Long: [1, Long.MAX_VALUE]</td><td>选填</td><td>5</td><td>重启后生效</td></tr></tbody></table><h3 id="_4-2-注意事项" tabindex="-1"><a class="header-anchor" href="#_4-2-注意事项"><span>4.2 注意事项</span></a></h3><ol><li>如果待加载的文件中，存在 mods 文件，应优先将 mods 文件移动到监听目录下面，然后再移动 tsfile 文件，且 mods 文件应和对应的 tsfile 文件处于同一目录。防止加载到 tsfile 文件时，加载不到对应的 mods 文件</li></ol><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">FUNCTION moveFilesToListeningDirectory(sourceDirectory, listeningDirectory)</span>
<span class="line">    // 移动 mods 文件</span>
<span class="line">    modsFiles = searchFiles(sourceDirectory, &quot;*mods*&quot;)</span>
<span class="line">    IF modsFiles IS NOT EMPTY</span>
<span class="line">        FOR EACH file IN modsFiles</span>
<span class="line">            MOVE(file, listeningDirectory)</span>
<span class="line">        END FOR</span>
<span class="line">    END IF</span>
<span class="line"></span>
<span class="line">    // 移动 tsfile 文件</span>
<span class="line">    tsfileFiles = searchFiles(sourceDirectory, &quot;*tsfile*&quot;)</span>
<span class="line">    IF tsfileFiles IS NOT EMPTY</span>
<span class="line">        FOR EACH file IN tsfileFiles</span>
<span class="line">            MOVE(file, listeningDirectory)</span>
<span class="line">        END FOR</span>
<span class="line">    END IF</span>
<span class="line">END FUNCTION</span>
<span class="line"></span>
<span class="line">FUNCTION searchFiles(directory, pattern)</span>
<span class="line">    matchedFiles = []</span>
<span class="line">    FOR EACH file IN directory.files</span>
<span class="line">        IF file.name MATCHES pattern</span>
<span class="line">            APPEND file TO matchedFiles</span>
<span class="line">        END IF</span>
<span class="line">    END FOR</span>
<span class="line">    RETURN matchedFiles</span>
<span class="line">END FUNCTION</span>
<span class="line"></span>
<span class="line">FUNCTION MOVE(sourceFile, targetDirectory)</span>
<span class="line">    // 实现文件从 sourceFile 移动到 targetDirectory 的逻辑</span>
<span class="line">END FUNCTION</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><p>禁止设置 Pipe 的 receiver 目录、存放数据的 data 目录等作为监听目录</p></li><li><p>禁止 <code>load_active_listening_fail_dir</code> 与 <code>load_active_listening_dirs</code> 存在相同的目录，或者互相嵌套</p></li><li><p>保证 <code>load_active_listening_dirs</code> 目录有足够的权限，在加载成功之后，文件将会被删除，如果没有删除权限，则会重复加载</p></li></ol>`,37)]))}const r=e(l,[["render",n],["__file","Data-Import-Tool.html.vue"]]),c=JSON.parse('{"path":"/zh/UserGuide/latest/Tools-System/Data-Import-Tool.html","title":"数据导入","lang":"zh-CN","frontmatter":{"description":"数据导入 1. IoTDB 数据导入 IoTDB 目前支持将 CSV、SQL、及TsFile（IoTDB底层开放式时间序列文件格式）格式的数据导入数据库。具体功能如下： 2. import-data 脚本 支持格式：CSV、SQL 2.1 运行命令： 2.2 参数介绍： 2.3 运行示例： 导入当前data目录下的dump0_0.sql数据到本机 Io...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/latest/Tools-System/Data-Import-Tool.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/latest/Tools-System/Data-Import-Tool.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"数据导入"}],["meta",{"property":"og:description","content":"数据导入 1. IoTDB 数据导入 IoTDB 目前支持将 CSV、SQL、及TsFile（IoTDB底层开放式时间序列文件格式）格式的数据导入数据库。具体功能如下： 2. import-data 脚本 支持格式：CSV、SQL 2.1 运行命令： 2.2 参数介绍： 2.3 运行示例： 导入当前data目录下的dump0_0.sql数据到本机 Io..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alioss.timecho.com/docs/img/Data-import1.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-19T07:34:27.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-19T07:34:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"数据导入\\",\\"image\\":[\\"https://alioss.timecho.com/docs/img/Data-import1.png\\"],\\"dateModified\\":\\"2024-11-19T07:34:27.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1. IoTDB 数据导入","slug":"_1-iotdb-数据导入","link":"#_1-iotdb-数据导入","children":[]},{"level":2,"title":"2. import-data 脚本","slug":"_2-import-data-脚本","link":"#_2-import-data-脚本","children":[{"level":3,"title":"2.1 运行命令：","slug":"_2-1-运行命令","link":"#_2-1-运行命令","children":[]},{"level":3,"title":"2.2 参数介绍：","slug":"_2-2-参数介绍","link":"#_2-2-参数介绍","children":[]},{"level":3,"title":"2.3 运行示例：","slug":"_2-3-运行示例","link":"#_2-3-运行示例","children":[]}]},{"level":2,"title":"3. load-tsfile 脚本","slug":"_3-load-tsfile-脚本","link":"#_3-load-tsfile-脚本","children":[{"level":3,"title":"3.1 运行命令","slug":"_3-1-运行命令","link":"#_3-1-运行命令","children":[]},{"level":3,"title":"3.2 参数介绍","slug":"_3-2-参数介绍","link":"#_3-2-参数介绍","children":[]},{"level":3,"title":"3.3 运行示例：","slug":"_3-3-运行示例","link":"#_3-3-运行示例","children":[]}]},{"level":2,"title":"4. TsFile 主动监听&加载功能","slug":"_4-tsfile-主动监听-加载功能","link":"#_4-tsfile-主动监听-加载功能","children":[{"level":3,"title":"4.1 配置参数","slug":"_4-1-配置参数","link":"#_4-1-配置参数","children":[]},{"level":3,"title":"4.2 注意事项","slug":"_4-2-注意事项","link":"#_4-2-注意事项","children":[]}]}],"git":{"createdTime":1732001667000,"updatedTime":1732001667000,"contributors":[{"name":"W1y1r","email":"150988475+W1y1r@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":7.37,"words":2212},"filePathRelative":"zh/UserGuide/latest/Tools-System/Data-Import-Tool.md","localizedDate":"2024年11月19日","autoDesc":true}');export{r as comp,c as data};
