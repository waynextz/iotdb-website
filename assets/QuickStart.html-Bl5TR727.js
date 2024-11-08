import{_ as r,c as o,d as n,e as s,a as i,w as t,b as l,r as d,o as c}from"./app-D8GMfgiK.js";const p={};function u(m,e){const a=d("RouteLink");return c(),o("div",null,[e[9]||(e[9]=n("h1",{id:"quick-start",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#quick-start"},[n("span",null,"Quick Start")])],-1)),n("p",null,[e[1]||(e[1]=s("This short guide will walk you through the basic process of using IoTDB. For a more-complete guide, please visit our website's ")),i(a,{to:"/UserGuide/V1.0.x/IoTDB-Introduction/What-is-IoTDB.html"},{default:t(()=>e[0]||(e[0]=[s("User Guide")])),_:1}),e[2]||(e[2]=s("."))]),e[10]||(e[10]=l('<h2 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites"><span>Prerequisites</span></a></h2><p>To use IoTDB, you need to have:</p><ol><li>Java &gt;= 1.8 (Please make sure the environment path has been set)</li><li>Set the max open files num as 65535 to avoid &quot;too many open files&quot; problem.</li></ol><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation"><span>Installation</span></a></h2><p>IoTDB provides you three installation methods, you can refer to the following suggestions, choose one of them:</p><ul><li>Installation from source code. If you need to modify the code yourself, you can use this method.</li><li>Installation from binary files. Download the binary files from the official website. This is the recommended method, in which you will get a binary released package which is out-of-the-box.</li><li>Using Docker：The path to the dockerfile is <a href="https://github.com/apache/iotdb/blob/master/docker/src/main" target="_blank" rel="noopener noreferrer">github</a></li></ul><h2 id="download" tabindex="-1"><a class="header-anchor" href="#download"><span>Download</span></a></h2><p>You can download the binary file from:<br><a href="https://iotdb.apache.org/Download/" target="_blank" rel="noopener noreferrer">Download Page</a></p><h2 id="configurations" tabindex="-1"><a class="header-anchor" href="#configurations"><span>Configurations</span></a></h2><p>configuration files are under &quot;conf&quot; folder</p><ul><li>environment config module (<code>datanode-env.bat</code>, <code>datanode-env.sh</code>),</li><li>system config module (<code>iotdb-datanode.properties</code>)</li><li>log config module (<code>logback.xml</code>).</li></ul>',11)),n("p",null,[e[4]||(e[4]=s("For more, see ")),i(a,{to:"/UserGuide/V1.0.x/Reference/DataNode-Config-Manual.html"},{default:t(()=>e[3]||(e[3]=[s("Config")])),_:1}),e[5]||(e[5]=s(" in detail."))]),e[11]||(e[11]=l(`<h2 id="start" tabindex="-1"><a class="header-anchor" href="#start"><span>Start</span></a></h2><p>You can go through the following step to test the installation, if there is no error after execution, the installation is completed.</p><h3 id="start-iotdb" tabindex="-1"><a class="header-anchor" href="#start-iotdb"><span>Start IoTDB</span></a></h3><p>IoTDB is a database based on distributed system. To launch IoTDB, you can first start standalone mode (i.e. 1 ConfigNode and 1 DataNode) to check.</p><p>Users can start IoTDB standalone mode by the start-standalone script under the sbin folder.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># Unix/OS X</span>
<span class="line">&gt; bash sbin/start-standalone.sh</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># Windows</span>
<span class="line">&gt; sbin\\start-standalone.bat</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>Note: Currently, To run standalone mode, you need to ensure that all addresses are set to 127.0.0.1, and replication factors set to 1, which is by now the default setting.<br> Besides, it&#39;s recommended to use SimpleConsensus in this mode, since it brings additional efficiency.</p><h3 id="use-cli" tabindex="-1"><a class="header-anchor" href="#use-cli"><span>Use Cli</span></a></h3><p>IoTDB offers different ways to interact with server, here we introduce basic steps of using Cli tool to insert and query data.</p><p>After installing IoTDB, there is a default user &#39;root&#39;, its default password is also &#39;root&#39;. Users can use this<br> default user to login Cli to use IoTDB. The startup script of Cli is the start-cli script in the folder sbin. When executing the script, user should assign<br> IP, PORT, USER_NAME and PASSWORD. The default parameters are &quot;-h 127.0.0.1 -p 6667 -u root -pw -root&quot;.</p><p>Here is the command for starting the Cli:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># Unix/OS X</span>
<span class="line">&gt; bash sbin/start-cli.sh -h 127.0.0.1 -p 6667 -u root -pw root</span>
<span class="line"></span>
<span class="line"># Windows</span>
<span class="line">&gt; sbin\\start-cli.bat -h 127.0.0.1 -p 6667 -u root -pw root</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The command line client is interactive so if everything is ready you should see the welcome logo and statements:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"> _____       _________  ______   ______</span>
<span class="line">|_   _|     |  _   _  ||_   _ \`.|_   _ \\</span>
<span class="line">  | |   .--.|_/ | | \\_|  | | \`. \\ | |_) |</span>
<span class="line">  | | / .&#39;\`\\ \\  | |      | |  | | |  __&#39;.</span>
<span class="line"> _| |_| \\__. | _| |_    _| |_.&#39; /_| |__) |</span>
<span class="line">|_____|&#39;.__.&#39; |_____|  |______.&#39;|_______/  version x.x.x</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">Successfully login at 127.0.0.1:6667</span>
<span class="line">IoTDB&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="basic-commands-for-iotdb" tabindex="-1"><a class="header-anchor" href="#basic-commands-for-iotdb"><span>Basic commands for IoTDB</span></a></h3><p>Now, let us introduce the way of creating timeseries, inserting data and querying data.</p><p>The data in IoTDB is organized as timeseries, in each timeseries there are some data-time pairs, and every timeseries is owned by a database. Before defining a timeseries, we should define a database using create DATABASE, and here is an example:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; create database root.ln</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>We can also use SHOW DATABASES to check created databases:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; SHOW DATABASES</span>
<span class="line">+-----------------------------------+</span>
<span class="line">|                           Database|</span>
<span class="line">+-----------------------------------+</span>
<span class="line">|                            root.ln|</span>
<span class="line">+-----------------------------------+</span>
<span class="line">Database number = 1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>After the database is set, we can use CREATE TIMESERIES to create new timeseries. When we create a timeseries, we should define its data type and the encoding scheme. We create two timeseries as follow:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; CREATE TIMESERIES root.ln.wf01.wt01.status WITH DATATYPE=BOOLEAN, ENCODING=PLAIN</span>
<span class="line">IoTDB&gt; CREATE TIMESERIES root.ln.wf01.wt01.temperature WITH DATATYPE=FLOAT, ENCODING=RLE</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>To query the specific timeseries, use SHOW TIMESERIES &lt;Path&gt;. &lt;Path&gt; represents the path of the timeseries. Its default value is null, which means querying all the timeseries in the system(the same as using &quot;SHOW TIMESERIES root&quot;). Here are the examples:</p><ol><li>Query all timeseries in the system:</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; SHOW TIMESERIES</span>
<span class="line">+-------------------------------+---------------+--------+--------+</span>
<span class="line">|                     Timeseries|       Database|DataType|Encoding|</span>
<span class="line">+-------------------------------+---------------+--------+--------+</span>
<span class="line">|       root.ln.wf01.wt01.status|        root.ln| BOOLEAN|   PLAIN|</span>
<span class="line">|  root.ln.wf01.wt01.temperature|        root.ln|   FLOAT|     RLE|</span>
<span class="line">+-------------------------------+---------------+--------+--------+</span>
<span class="line">Total timeseries number = 2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>Query a specific timeseries(root.ln.wf01.wt01.status):</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; SHOW TIMESERIES root.ln.wf01.wt01.status</span>
<span class="line">+------------------------------+--------------+--------+--------+</span>
<span class="line">|                    Timeseries|      Database|DataType|Encoding|</span>
<span class="line">+------------------------------+--------------+--------+--------+</span>
<span class="line">|      root.ln.wf01.wt01.status|       root.ln| BOOLEAN|   PLAIN|</span>
<span class="line">+------------------------------+--------------+--------+--------+</span>
<span class="line">Total timeseries number = 1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Insert timeseries data is the basic operation of IoTDB, you can use ‘INSERT’ command to finish this. Before insert you should assign the timestamp and the suffix path name:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; INSERT INTO root.ln.wf01.wt01(timestamp,status) values(100,true);</span>
<span class="line">IoTDB&gt; INSERT INTO root.ln.wf01.wt01(timestamp,status,temperature) values(200,false,20.71)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>The data we’ve just inserted displays like this:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; SELECT status FROM root.ln.wf01.wt01</span>
<span class="line">+-----------------------+------------------------+</span>
<span class="line">|                   Time|root.ln.wf01.wt01.status|</span>
<span class="line">+-----------------------+------------------------+</span>
<span class="line">|1970-01-01T08:00:00.100|                    true|</span>
<span class="line">|1970-01-01T08:00:00.200|                   false|</span>
<span class="line">+-----------------------+------------------------+</span>
<span class="line">Total line number = 2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>We can also query several timeseries data at once like this:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; SELECT * FROM root.ln.wf01.wt01</span>
<span class="line">+-----------------------+--------------------------+-----------------------------+</span>
<span class="line">|                   Time|  root.ln.wf01.wt01.status|root.ln.wf01.wt01.temperature|</span>
<span class="line">+-----------------------+--------------------------+-----------------------------+</span>
<span class="line">|1970-01-01T08:00:00.100|                      true|                         null|</span>
<span class="line">|1970-01-01T08:00:00.200|                     false|                        20.71|</span>
<span class="line">+-----------------------+--------------------------+-----------------------------+</span>
<span class="line">Total line number = 2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The commands to exit the Cli are:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; quit</span>
<span class="line">or</span>
<span class="line">IoTDB&gt; exit</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,36)),n("p",null,[e[7]||(e[7]=s("For more on what commands are supported by IoTDB SQL, see ")),i(a,{to:"/UserGuide/V1.0.x/Reference/SQL-Reference.html"},{default:t(()=>e[6]||(e[6]=[s("SQL Reference")])),_:1}),e[8]||(e[8]=s("."))]),e[12]||(e[12]=l(`<h3 id="stop-iotdb" tabindex="-1"><a class="header-anchor" href="#stop-iotdb"><span>Stop IoTDB</span></a></h3><p>The server can be stopped with ctrl-C or the following script:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># Unix/OS X</span>
<span class="line">&gt; bash sbin/stop-standalone.sh</span>
<span class="line"></span>
<span class="line"># Windows</span>
<span class="line">&gt; sbin\\stop-standalone.bat</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Note: In Linux, please add the &quot;sudo&quot; as far as possible, or else the stopping process may fail.<br> More explanations are in Cluster/Cluster-setup.md.</p><h3 id="administration-management" tabindex="-1"><a class="header-anchor" href="#administration-management"><span>Administration management</span></a></h3><p>There is a default user in IoTDB after the initial installation: root, and the default password is root. This user is an administrator user, who cannot be deleted and has all the privileges. Neither can new privileges be granted to the root user nor can privileges owned by the root user be deleted.</p><p>You can alter the password of root using the following command：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">ALTER USER &lt;username&gt; SET PASSWORD &lt;password&gt;;</span>
<span class="line">Example: IoTDB &gt; ALTER USER root SET PASSWORD &#39;newpwd&#39;;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>More about administration management：<a href="https://iotdb.apache.org/UserGuide/V1.0.x/Administration-Management/Administration.html" target="_blank" rel="noopener noreferrer">Administration Management</a></p><h2 id="basic-configuration" tabindex="-1"><a class="header-anchor" href="#basic-configuration"><span>Basic configuration</span></a></h2><p>The configuration files is in the <code>conf</code> folder, includes:</p><ul><li>environment configuration (<code>datanode-env.bat</code>, <code>datanode-env.sh</code>),</li><li>system configuration (<code>iotdb-datanode.properties</code>)</li><li>log configuration (<code>logback.xml</code>).</li></ul>`,12))])}const v=r(p,[["render",u],["__file","QuickStart.html.vue"]]),b=JSON.parse(`{"path":"/UserGuide/V1.0.x/QuickStart/QuickStart.html","title":"Quick Start","lang":"en-US","frontmatter":{"description":"Quick Start This short guide will walk you through the basic process of using IoTDB. For a more-complete guide, please visit our website's . Prerequisites To use IoTDB, you need...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/QuickStart/QuickStart.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.0.x/QuickStart/QuickStart.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Quick Start"}],["meta",{"property":"og:description","content":"Quick Start This short guide will walk you through the basic process of using IoTDB. For a more-complete guide, please visit our website's . Prerequisites To use IoTDB, you need..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Quick Start\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Prerequisites","slug":"prerequisites","link":"#prerequisites","children":[]},{"level":2,"title":"Installation","slug":"installation","link":"#installation","children":[]},{"level":2,"title":"Download","slug":"download","link":"#download","children":[]},{"level":2,"title":"Configurations","slug":"configurations","link":"#configurations","children":[]},{"level":2,"title":"Start","slug":"start","link":"#start","children":[{"level":3,"title":"Start IoTDB","slug":"start-iotdb","link":"#start-iotdb","children":[]},{"level":3,"title":"Use Cli","slug":"use-cli","link":"#use-cli","children":[]},{"level":3,"title":"Basic commands for IoTDB","slug":"basic-commands-for-iotdb","link":"#basic-commands-for-iotdb","children":[]},{"level":3,"title":"Stop IoTDB","slug":"stop-iotdb","link":"#stop-iotdb","children":[]},{"level":3,"title":"Administration management","slug":"administration-management","link":"#administration-management","children":[]}]},{"level":2,"title":"Basic configuration","slug":"basic-configuration","link":"#basic-configuration","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":3.81,"words":1144},"filePathRelative":"UserGuide/V1.0.x/QuickStart/QuickStart.md","localizedDate":"July 10, 2023","autoDesc":true}`);export{v as comp,b as data};
