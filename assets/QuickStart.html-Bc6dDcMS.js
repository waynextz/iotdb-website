import{_ as o,c as r,d as n,e as s,a,w as t,b as l,r as d,o as c}from"./app-D8GMfgiK.js";const p={};function u(m,e){const i=d("RouteLink");return c(),r("div",null,[e[16]||(e[16]=n("h1",{id:"quick-start",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#quick-start"},[n("span",null,"Quick Start")])],-1)),n("p",null,[e[1]||(e[1]=s("This short guide will walk you through the basic process of using IoTDB. For a more comprehensive guide, please visit our website's ")),a(i,{to:"/UserGuide/V1.2.x/IoTDB-Introduction/What-is-IoTDB.html"},{default:t(()=>e[0]||(e[0]=[s("User Guide")])),_:1}),e[2]||(e[2]=s("."))]),e[17]||(e[17]=l('<h2 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites"><span>Prerequisites</span></a></h2><p>To use IoTDB, you need to have:</p><ol><li>Java &gt;= 1.8 (Please make sure the environments PATH variable has been set to include the Java bin directory)</li><li>Set the max number of open files to at least 65535 in order to avoid &quot;too many open files&quot; problem. </li></ol><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation"><span>Installation</span></a></h2><p>IoTDB can be installed using one of the following three installation methods:</p><ul><li>Installation from source code. If you need to modify the code yourself, you can use this method.</li><li>Installation from binary files. Download the binary distribution from the official website. This is the recommended method, in which you will get a binary released package which you can use out-of-the-box. </li><li>Using Docker：The path to the dockerfile is <a href="https://github.com/apache/iotdb/blob/master/docker/src/main" target="_blank" rel="noopener noreferrer">github</a></li></ul><h2 id="download" tabindex="-1"><a class="header-anchor" href="#download"><span>Download</span></a></h2><p>You can download the binary distribution from:<br><a href="https://iotdb.apache.org/Download/" target="_blank" rel="noopener noreferrer">Download Page</a></p><h2 id="configurations" tabindex="-1"><a class="header-anchor" href="#configurations"><span>Configurations</span></a></h2><p>Configuration files are located in the <code>conf</code> folder</p><ul><li>environment config module (<code>datanode-env.bat</code>, <code>datanode-env.sh</code>),</li><li>system config module (<code>iotdb-datanode.properties</code>)</li><li>log config module (<code>logback.xml</code>).</li></ul>',11)),n("p",null,[e[4]||(e[4]=s("For more information, please go to ")),a(i,{to:"/UserGuide/V1.2.x/stage/DataNode-Config-Manual.html"},{default:t(()=>e[3]||(e[3]=[s("Config")])),_:1}),e[5]||(e[5]=s("."))]),e[18]||(e[18]=l(`<h2 id="start" tabindex="-1"><a class="header-anchor" href="#start"><span>Start</span></a></h2><p>You can go through the following step to test the installation.<br> If there is no error after execution, the installation is completed.</p><h3 id="starting-iotdb" tabindex="-1"><a class="header-anchor" href="#starting-iotdb"><span>Starting IoTDB</span></a></h3><p>IoTDB is designed as distributed database. You can however start it in a single node <code>standalone mode</code>.<br> In order to test your configuration, you can first start everything in <code>standalone mode</code> (i.e. 1 ConfigNode and 1 DataNode) to check everything works as expected.</p><p>Users can start IoTDB in standalone mode by using the <code>start-standalone</code> script under the <code>sbin</code> folder.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># Unix/OS X</span>
<span class="line">&gt; bash sbin/start-standalone.sh</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># Windows</span>
<span class="line">&gt; sbin\\start-standalone.bat</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>Note: In order to run IoTDB in standalone mode, you need to ensure that all addresses are set to 127.0.0.1.<br> If you need to access the IoTDB from a different machine, please change the configuration item <code>dn_rpc_address</code> to the public IP of the machine where IoTDB is running and be sure to set <code>replication factors</code> to 1, which is currently the default setting.<br> It is recommended to use <code>SimpleConsensus</code> in this mode, as this has performance advantages in this mode of operation.</p><h3 id="using-the-command-line-interfave-cli" tabindex="-1"><a class="header-anchor" href="#using-the-command-line-interfave-cli"><span>Using the Command Line Interfave (CLI)</span></a></h3><p>IoTDB offers several ways to interact with server, here we introduce basic steps of using the <code>CLI tool</code> to insert and query data.</p><p>After installing IoTDB, there is a pre-configured default user named <code>root</code>, its default password is also set to <code>root</code>.<br> Users can use this default credentials to login to IoTDB from the <code>CLI</code>.<br> Please use the <code>start-cli</code> scriopt in the <code>sbin</code> folder in order to start the <code>CLI</code>.</p><p>When executing the script, user should assign: <code>HOST/IP</code>, <code>PORT</code>, <code>USER_NAME</code> and <code>PASSWORD</code>.</p><p>The default parameters are <code>-h 127.0.0.1 -p 6667 -u root -pw root</code>.</p><p>Here are the commands for starting the CLI:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># Unix/OS X</span>
<span class="line">&gt; bash sbin/start-cli.sh -h 127.0.0.1 -p 6667 -u root -pw root</span>
<span class="line"></span>
<span class="line"># Windows</span>
<span class="line">&gt; sbin\\start-cli.bat -h 127.0.0.1 -p 6667 -u root -pw root</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The command line interface is interactive.<br> If everything is set up correctly, you should see the IoTDB logo and welcome statement:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"> _____       _________  ______   ______</span>
<span class="line">|_   _|     |  _   _  ||_   _ \`.|_   _ \\</span>
<span class="line">  | |   .--.|_/ | | \\_|  | | \`. \\ | |_) |</span>
<span class="line">  | | / .&#39;\`\\ \\  | |      | |  | | |  __&#39;.</span>
<span class="line"> _| |_| \\__. | _| |_    _| |_.&#39; /_| |__) |</span>
<span class="line">|_____|&#39;.__.&#39; |_____|  |______.&#39;|_______/  version x.x.x</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">Successfully login at 127.0.0.1:6667</span>
<span class="line">IoTDB&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="basic-commands-for-iotdb" tabindex="-1"><a class="header-anchor" href="#basic-commands-for-iotdb"><span>Basic commands for IoTDB</span></a></h3><p>Next, let us go a bit more into detail to how to create a timeseries, insert data into it and how to query data from it.</p><p>Data in IoTDB is organized as a set of timeseries, in each timeseries there are some timestamp-data pairs.<br> Every timeseries belongs to a database.</p><p>All commands are executed in an SQL-like syntax we call <code>IoTDB SQL</code>.</p><p>Before defining a timeseries, we should define the database it should belong to using <code>CREATE DATABASE</code>.<br> Here&#39;s is an example on how to do that:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; CREATE DATABASE root.ln</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>We can also use <code>SHOW DATABASES</code> to list all databases present:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; SHOW DATABASES</span>
<span class="line">+-----------------------------------+</span>
<span class="line">|                           Database|</span>
<span class="line">+-----------------------------------+</span>
<span class="line">|                            root.ln|</span>
<span class="line">+-----------------------------------+</span>
<span class="line">Database number = 1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>After the database is created, we can use <code>CREATE TIMESERIES</code> to create new timeseries.<br> When we create a timeseries, we should define its structure as well as the data types used for each field along with their encoding scheme.</p><p>We can create two timeseries the following way:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; CREATE TIMESERIES root.ln.wf01.wt01.status WITH DATATYPE=BOOLEAN, ENCODING=PLAIN</span>
<span class="line">IoTDB&gt; CREATE TIMESERIES root.ln.wf01.wt01.temperature WITH DATATYPE=FLOAT, ENCODING=RLE</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>To query a specific timeseries, use the <code>SHOW TIMESERIES \\&lt;Path\\&gt;</code> command. <code>\\&lt;Path\\&gt;</code> represents the path of the timeseries.<br> Its default value is null, which means that we&#39;re querying all timeseries in the system (the same as using <code>SHOW TIMESERIES root</code>).</p><p>Here are some examples:</p><ol><li>Query all timeseries in the system:</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; SHOW TIMESERIES</span>
<span class="line">+-------------------------------+---------------+--------+--------+</span>
<span class="line">|                     Timeseries|       Database|DataType|Encoding|</span>
<span class="line">+-------------------------------+---------------+--------+--------+</span>
<span class="line">|       root.ln.wf01.wt01.status|        root.ln| BOOLEAN|   PLAIN|</span>
<span class="line">|  root.ln.wf01.wt01.temperature|        root.ln|   FLOAT|     RLE|</span>
<span class="line">+-------------------------------+---------------+--------+--------+</span>
<span class="line">Total timeseries number = 2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>Query a specific timeseries (root.ln.wf01.wt01.status):</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; SHOW TIMESERIES root.ln.wf01.wt01.status</span>
<span class="line">+------------------------------+--------------+--------+--------+</span>
<span class="line">|                    Timeseries|      Database|DataType|Encoding|</span>
<span class="line">+------------------------------+--------------+--------+--------+</span>
<span class="line">|      root.ln.wf01.wt01.status|       root.ln| BOOLEAN|   PLAIN|</span>
<span class="line">+------------------------------+--------------+--------+--------+</span>
<span class="line">Total timeseries number = 1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Insertion of timeseries data is the probably most basic operation of IoTDB.<br> You can use the <code>INSERT</code> command to do this.</p><p>Here come some examples on how to do that.<br> In the <code>INTO</code> part we tell IoTDB which timeseries we want to store the data in as well as which fields we&#39;ll be filling.<br> Please note, that the timestamp field is mandatory for this step and that we don&#39;t necessarily have to fill all fields defined of the timeseries we&#39;re inserting into:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; INSERT INTO root.ln.wf01.wt01(timestamp,status) values(100,true);</span>
<span class="line">IoTDB&gt; INSERT INTO root.ln.wf01.wt01(timestamp,status,temperature) values(200,false,20.71)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>The data we’ve just inserted will then look like this if we query it:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; SELECT status FROM root.ln.wf01.wt01</span>
<span class="line">+-----------------------+------------------------+</span>
<span class="line">|                   Time|root.ln.wf01.wt01.status|</span>
<span class="line">+-----------------------+------------------------+</span>
<span class="line">|1970-01-01T08:00:00.100|                    true|</span>
<span class="line">|1970-01-01T08:00:00.200|                   false|</span>
<span class="line">+-----------------------+------------------------+</span>
<span class="line">Total line number = 2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>We can also query several timeseries fields at once like this:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; SELECT * FROM root.ln.wf01.wt01</span>
<span class="line">+-----------------------+--------------------------+-----------------------------+</span>
<span class="line">|                   Time|  root.ln.wf01.wt01.status|root.ln.wf01.wt01.temperature|</span>
<span class="line">+-----------------------+--------------------------+-----------------------------+</span>
<span class="line">|1970-01-01T08:00:00.100|                      true|                         null|</span>
<span class="line">|1970-01-01T08:00:00.200|                     false|                        20.71|</span>
<span class="line">+-----------------------+--------------------------+-----------------------------+</span>
<span class="line">Total line number = 2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The commands to exit the CLI are:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; quit</span>
<span class="line">or</span>
<span class="line">IoTDB&gt; exit</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,43)),n("p",null,[e[7]||(e[7]=s("For more information on which commands are supported by ")),e[8]||(e[8]=n("code",null,"IoTDB SQL",-1)),e[9]||(e[9]=s(", please see ")),a(i,{to:"/UserGuide/V1.2.x/SQL-Manual/SQL-Manual.html"},{default:t(()=>e[6]||(e[6]=[s("SQL Reference")])),_:1}),e[10]||(e[10]=s("."))]),e[19]||(e[19]=l(`<h3 id="stopping-iotdb" tabindex="-1"><a class="header-anchor" href="#stopping-iotdb"><span>Stopping IoTDB</span></a></h3><p>The server can be stopped using <code>ctrl-C</code> or by running the following script:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># Unix/OS X</span>
<span class="line">&gt; bash sbin/stop-standalone.sh</span>
<span class="line"></span>
<span class="line"># Windows</span>
<span class="line">&gt; sbin\\stop-standalone.bat</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Note: In Linux, please add the <code>sudo</code> as far as possible, or else the stopping process may fail. </p>`,4)),n("p",null,[e[12]||(e[12]=s("More explanations on running IoTDB in a clustered environment are available at ")),a(i,{to:"/UserGuide/V1.2.x/stage/Cluster/Cluster-Setup.html"},{default:t(()=>e[11]||(e[11]=[s("Cluster-Setup")])),_:1}),e[13]||(e[13]=s("."))]),e[20]||(e[20]=l(`<h3 id="administration" tabindex="-1"><a class="header-anchor" href="#administration"><span>Administration</span></a></h3><p>When installing IoTDB, there is a default user which is automatically pre-configured.<br> Its username is <code>root</code>, and the default password for it is also <code>root</code>.<br> This user is a user with administrative privileges, who cannot be deleted and has all privileges assigned to it.<br> Neither can new privileges be granted to the root user nor can privileges owned by it be revoked.</p><p>We strongly recommend you change the default password.<br> You do this using the following command：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">ALTER USER &lt;username&gt; SET PASSWORD &lt;password&gt;;</span>
<span class="line">Example: IoTDB &gt; ALTER USER root SET PASSWORD &#39;newpwd&#39;;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,4)),n("p",null,[e[15]||(e[15]=s("More about administration options：")),a(i,{to:"/UserGuide/V1.2.x/User-Manual/Security-Management.html"},{default:t(()=>e[14]||(e[14]=[s("Administration Management")])),_:1})]),e[21]||(e[21]=l('<h2 id="basic-configuration" tabindex="-1"><a class="header-anchor" href="#basic-configuration"><span>Basic configuration</span></a></h2><p>The configuration files are located in the <code>conf</code> directory.</p><p>The most important ones being:</p><ul><li>environment variable configuration (<code>datanode-env.bat</code>, <code>datanode-env.sh</code>),</li><li>system configuration (<code>iotdb-datanode.properties</code>)</li><li>log configuration (<code>logback.xml</code>).</li></ul>',4))])}const v=o(p,[["render",u],["__file","QuickStart.html.vue"]]),b=JSON.parse(`{"path":"/UserGuide/V1.2.x/QuickStart/QuickStart.html","title":"Quick Start","lang":"en-US","frontmatter":{"description":"Quick Start This short guide will walk you through the basic process of using IoTDB. For a more comprehensive guide, please visit our website's . Prerequisites To use IoTDB, you...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.2.x/QuickStart/QuickStart.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.2.x/QuickStart/QuickStart.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Quick Start"}],["meta",{"property":"og:description","content":"Quick Start This short guide will walk you through the basic process of using IoTDB. For a more comprehensive guide, please visit our website's . Prerequisites To use IoTDB, you..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-15T13:16:16.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-15T13:16:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Quick Start\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-15T13:16:16.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Prerequisites","slug":"prerequisites","link":"#prerequisites","children":[]},{"level":2,"title":"Installation","slug":"installation","link":"#installation","children":[]},{"level":2,"title":"Download","slug":"download","link":"#download","children":[]},{"level":2,"title":"Configurations","slug":"configurations","link":"#configurations","children":[]},{"level":2,"title":"Start","slug":"start","link":"#start","children":[{"level":3,"title":"Starting IoTDB","slug":"starting-iotdb","link":"#starting-iotdb","children":[]},{"level":3,"title":"Using the Command Line Interfave (CLI)","slug":"using-the-command-line-interfave-cli","link":"#using-the-command-line-interfave-cli","children":[]},{"level":3,"title":"Basic commands for IoTDB","slug":"basic-commands-for-iotdb","link":"#basic-commands-for-iotdb","children":[]},{"level":3,"title":"Stopping IoTDB","slug":"stopping-iotdb","link":"#stopping-iotdb","children":[]},{"level":3,"title":"Administration","slug":"administration","link":"#administration","children":[]}]},{"level":2,"title":"Basic configuration","slug":"basic-configuration","link":"#basic-configuration","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1702646176000,"contributors":[{"name":"Christofer Dutz","email":"christofer.dutz@c-ware.de","commits":1},{"name":"CritasWang","email":"critas@outlook.com","commits":1},{"name":"wanghui42","email":"105700158+wanghui42@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":4.84,"words":1453},"filePathRelative":"UserGuide/V1.2.x/QuickStart/QuickStart.md","localizedDate":"July 10, 2023","autoDesc":true}`);export{v as comp,b as data};
