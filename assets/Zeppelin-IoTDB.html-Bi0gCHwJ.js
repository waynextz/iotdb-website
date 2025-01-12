import{_ as l,c as o,b as n,d as a,e as s,a as p,f as r,r as i,o as c}from"./app-CNiZnG3t.js";const d={};function B(y,e){const t=i("RouteLink");return c(),o("div",null,[e[5]||(e[5]=n('<h1 id="apache-zeppelin" tabindex="-1"><a class="header-anchor" href="#apache-zeppelin"><span>Apache Zeppelin</span></a></h1><h2 id="about-zeppelin" tabindex="-1"><a class="header-anchor" href="#about-zeppelin"><span>About Zeppelin</span></a></h2><p>Zeppelin is a web-based notebook that enables interactive data analytics. You can connect to data sources and perform interactive operations with SQL, Scala, etc. The operations can be saved as documents, just like Jupyter. Zeppelin has already supported many data sources, including Spark, ElasticSearch, Cassandra, and InfluxDB. Now, we have enabled Zeppelin to operate IoTDB via SQL.</p><figure><img src="https://alioss.timecho.com/docs/img/github/102752947-520a3e80-43a5-11eb-8fb1-8fac471c8c7e.png" alt="iotdb-note-snapshot" tabindex="0" loading="lazy"><figcaption>iotdb-note-snapshot</figcaption></figure><h2 id="zeppelin-iotdb-interpreter" tabindex="-1"><a class="header-anchor" href="#zeppelin-iotdb-interpreter"><span>Zeppelin-IoTDB Interpreter</span></a></h2><h3 id="system-requirements" tabindex="-1"><a class="header-anchor" href="#system-requirements"><span>System Requirements</span></a></h3><table><thead><tr><th style="text-align:center;">IoTDB Version</th><th style="text-align:center;">Java Version</th><th style="text-align:center;">Zeppelin Version</th></tr></thead><tbody><tr><td style="text-align:center;">&gt;=<code>0.12.0</code></td><td style="text-align:center;">&gt;=<code>1.8.0_271</code></td><td style="text-align:center;"><code>&gt;=0.9.0</code></td></tr></tbody></table>',7)),a("p",null,[e[1]||(e[1]=s("Install IoTDB: Reference to ")),p(t,{to:"/UserGuide/V2.0.1/Tree/QuickStart/QuickStart.html"},{default:r(()=>e[0]||(e[0]=[s("IoTDB Quick Start")])),_:1}),e[2]||(e[2]=s(". Suppose IoTDB is placed at ")),e[3]||(e[3]=a("code",null,"$IoTDB_HOME",-1)),e[4]||(e[4]=s("."))]),e[6]||(e[6]=n(`<p>Install Zeppelin:</p><blockquote><p>Method A. Download directly: You can download <a href="https://zeppelin.apache.org/download.html#" target="_blank" rel="noopener noreferrer">Zeppelin</a> and unpack the binary package. <a href="http://www.apache.org/dyn/closer.cgi/zeppelin/zeppelin-0.9.0/zeppelin-0.9.0-bin-netinst.tgz" target="_blank" rel="noopener noreferrer">netinst</a> binary package is recommended since it&#39;s relatively small by excluding irrelevant interpreters.</p><p>Method B. Compile from source code: Reference to <a href="https://zeppelin.apache.org/docs/latest/setup/basics/how_to_build.html" target="_blank" rel="noopener noreferrer">build Zeppelin from source</a>. The command is <code>mvn clean package -pl zeppelin-web,zeppelin-server -am -DskipTests</code>.</p></blockquote><p>Suppose Zeppelin is placed at <code>$Zeppelin_HOME</code>.</p><h3 id="build-interpreter" tabindex="-1"><a class="header-anchor" href="#build-interpreter"><span>Build Interpreter</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span> cd $IoTDB_HOME</span></span>
<span class="line"><span> mvn clean package -pl iotdb-connector/zeppelin-interpreter -am -DskipTests -P get-jar-with-dependencies</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>The interpreter will be in the folder:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span> $IoTDB_HOME/zeppelin-interpreter/target/zeppelin-{version}-SNAPSHOT-jar-with-dependencies.jar</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="install-interpreter" tabindex="-1"><a class="header-anchor" href="#install-interpreter"><span>Install Interpreter</span></a></h3><p>Once you have built your interpreter, create a new folder under the Zeppelin interpreter directory and put the built interpreter into it.</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span> cd $IoTDB_HOME</span></span>
<span class="line"><span> mkdir -p $Zeppelin_HOME/interpreter/iotdb</span></span>
<span class="line"><span> cp $IoTDB_HOME/zeppelin-interpreter/target/zeppelin-{version}-SNAPSHOT-jar-with-dependencies.jar $Zeppelin_HOME/interpreter/iotdb</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="modify-configuration" tabindex="-1"><a class="header-anchor" href="#modify-configuration"><span>Modify Configuration</span></a></h3><p>Enter <code>$Zeppelin_HOME/conf</code> and use template to create Zeppelin configuration file:</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#61AFEF;">cp</span><span style="color:#98C379;"> zeppelin-site.xml.template</span><span style="color:#98C379;"> zeppelin-site.xml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Open the zeppelin-site.xml file and change the <code>zeppelin.server.addr</code> item to <code>0.0.0.0</code></p><h3 id="running-zeppelin-and-iotdb" tabindex="-1"><a class="header-anchor" href="#running-zeppelin-and-iotdb"><span>Running Zeppelin and IoTDB</span></a></h3><p>Go to <code>$Zeppelin_HOME</code> and start Zeppelin by running:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span> ./bin/zeppelin-daemon.sh start</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>or in Windows:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span> .\\bin\\zeppelin.cmd</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Go to <code>$IoTDB_HOME</code> and start IoTDB server:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span> # Unix/OS X</span></span>
<span class="line"><span> &gt; nohup sbin/start-server.sh &gt;/dev/null 2&gt;&amp;1 &amp;</span></span>
<span class="line"><span> or</span></span>
<span class="line"><span> &gt; nohup sbin/start-server.sh -c &lt;conf_path&gt; -rpc_port &lt;rpc_port&gt; &gt;/dev/null 2&gt;&amp;1 &amp;</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> # Windows</span></span>
<span class="line"><span> &gt; sbin\\start-server.bat -c &lt;conf_path&gt; -rpc_port &lt;rpc_port&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="use-zeppelin-iotdb" tabindex="-1"><a class="header-anchor" href="#use-zeppelin-iotdb"><span>Use Zeppelin-IoTDB</span></a></h2><p>Wait for Zeppelin server to start, then visit <a href="http://127.0.0.1:8080/" target="_blank" rel="noopener noreferrer">http://127.0.0.1:8080/</a></p><p>In the interpreter page:</p><ol><li>Click the <code>Create new node</code> button</li><li>Set the note name</li><li>Configure your interpreter</li></ol><p>Now you are ready to use your interpreter.</p><figure><img src="https://alioss.timecho.com/docs/img/github/102752945-5171a800-43a5-11eb-8614-53b3276a3ce2.png" alt="iotdb-create-note" tabindex="0" loading="lazy"><figcaption>iotdb-create-note</figcaption></figure><p>We provide some simple SQL to show the use of Zeppelin-IoTDB interpreter:</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;"> CREATE</span><span style="color:#C678DD;"> DATABASE</span><span style="color:#61AFEF;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">ln</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wf01</span><span style="color:#ABB2BF;">.wt01;</span></span>
<span class="line"><span style="color:#C678DD;"> CREATE</span><span style="color:#ABB2BF;"> TIMESERIES </span><span style="color:#D19A66;">root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">ln</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wf01</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wt01</span><span style="color:#ABB2BF;">.</span><span style="color:#C678DD;">status</span><span style="color:#C678DD;"> WITH</span><span style="color:#ABB2BF;"> DATATYPE</span><span style="color:#56B6C2;">=</span><span style="color:#C678DD;">BOOLEAN</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">ENCODING</span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;">PLAIN;</span></span>
<span class="line"><span style="color:#C678DD;"> CREATE</span><span style="color:#ABB2BF;"> TIMESERIES </span><span style="color:#D19A66;">root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">ln</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wf01</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wt01</span><span style="color:#ABB2BF;">.temperature </span><span style="color:#C678DD;">WITH</span><span style="color:#ABB2BF;"> DATATYPE</span><span style="color:#56B6C2;">=</span><span style="color:#C678DD;">FLOAT</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">ENCODING</span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;">PLAIN;</span></span>
<span class="line"><span style="color:#C678DD;"> CREATE</span><span style="color:#ABB2BF;"> TIMESERIES </span><span style="color:#D19A66;">root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">ln</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wf01</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wt01</span><span style="color:#ABB2BF;">.hardware </span><span style="color:#C678DD;">WITH</span><span style="color:#ABB2BF;"> DATATYPE</span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;">INT32, </span><span style="color:#C678DD;">ENCODING</span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;">PLAIN;</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#C678DD;"> INSERT INTO</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">ln</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wf01</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wt01</span><span style="color:#ABB2BF;"> (</span><span style="color:#C678DD;">timestamp</span><span style="color:#ABB2BF;">, temperature, </span><span style="color:#C678DD;">status</span><span style="color:#ABB2BF;">, hardware)</span></span>
<span class="line"><span style="color:#C678DD;"> VALUES</span><span style="color:#ABB2BF;"> (</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">, false, </span><span style="color:#D19A66;">11</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#C678DD;"> INSERT INTO</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">ln</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wf01</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wt01</span><span style="color:#ABB2BF;"> (</span><span style="color:#C678DD;">timestamp</span><span style="color:#ABB2BF;">, temperature, </span><span style="color:#C678DD;">status</span><span style="color:#ABB2BF;">, hardware)</span></span>
<span class="line"><span style="color:#C678DD;"> VALUES</span><span style="color:#ABB2BF;"> (</span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">, true, </span><span style="color:#D19A66;">22</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#C678DD;"> INSERT INTO</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">ln</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wf01</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wt01</span><span style="color:#ABB2BF;"> (</span><span style="color:#C678DD;">timestamp</span><span style="color:#ABB2BF;">, temperature, </span><span style="color:#C678DD;">status</span><span style="color:#ABB2BF;">, hardware)</span></span>
<span class="line"><span style="color:#C678DD;"> VALUES</span><span style="color:#ABB2BF;"> (</span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">, false, </span><span style="color:#D19A66;">33</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#C678DD;"> INSERT INTO</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">ln</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wf01</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wt01</span><span style="color:#ABB2BF;"> (</span><span style="color:#C678DD;">timestamp</span><span style="color:#ABB2BF;">, temperature, </span><span style="color:#C678DD;">status</span><span style="color:#ABB2BF;">, hardware)</span></span>
<span class="line"><span style="color:#C678DD;"> VALUES</span><span style="color:#ABB2BF;"> (</span><span style="color:#D19A66;">4</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">4</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">4</span><span style="color:#ABB2BF;">, false, </span><span style="color:#D19A66;">44</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#C678DD;"> INSERT INTO</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">ln</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wf01</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wt01</span><span style="color:#ABB2BF;"> (</span><span style="color:#C678DD;">timestamp</span><span style="color:#ABB2BF;">, temperature, </span><span style="color:#C678DD;">status</span><span style="color:#ABB2BF;">, hardware)</span></span>
<span class="line"><span style="color:#C678DD;"> VALUES</span><span style="color:#ABB2BF;"> (</span><span style="color:#D19A66;">5</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">5</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">5</span><span style="color:#ABB2BF;">, false, </span><span style="color:#D19A66;">55</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#C678DD;"> SELECT</span><span style="color:#ABB2BF;"> *</span></span>
<span class="line"><span style="color:#C678DD;"> FROM</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">ln</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wf01</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wt01</span></span>
<span class="line"><span style="color:#C678DD;"> WHERE</span><span style="color:#C678DD;"> time</span><span style="color:#56B6C2;"> &gt;=</span><span style="color:#D19A66;"> 1</span></span>
<span class="line"><span style="color:#C678DD;">   AND</span><span style="color:#C678DD;"> time</span><span style="color:#56B6C2;"> &lt;=</span><span style="color:#D19A66;"> 6</span><span style="color:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The screenshot is as follows:</p><figure><img src="https://alioss.timecho.com/docs/img/github/102752948-52a2d500-43a5-11eb-9156-0c55667eb4cd.png" alt="iotdb-note-snapshot2" tabindex="0" loading="lazy"><figcaption>iotdb-note-snapshot2</figcaption></figure><p>You can also design more fantasy documents referring to <a href="https://zeppelin.apache.org/docs/0.9.0/usage/display_system/basic.html" target="_blank" rel="noopener noreferrer">[1]</a> and others.</p><p>The above demo notebook can be found at <code>$IoTDB_HOME/zeppelin-interpreter/Zeppelin-IoTDB-Demo.zpln</code>.</p><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration"><span>Configuration</span></a></h2><p>You can configure the connection parameters in <a href="http://127.0.0.1:8080/#/interpreter" target="_blank" rel="noopener noreferrer">http://127.0.0.1:8080/#/interpreter</a> :</p><figure><img src="https://alioss.timecho.com/docs/img/github/102752940-50407b00-43a5-11eb-94fb-3e3be222183c.png" alt="iotdb-configuration" tabindex="0" loading="lazy"><figcaption>iotdb-configuration</figcaption></figure><p>The parameters you can configure are as follows:</p><table><thead><tr><th>Property</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>iotdb.host</td><td>127.0.0.1</td><td>IoTDB server host to connect to</td></tr><tr><td>iotdb.port</td><td>6667</td><td>IoTDB server port to connect to</td></tr><tr><td>iotdb.username</td><td>root</td><td>Username for authentication</td></tr><tr><td>iotdb.password</td><td>root</td><td>Password for authentication</td></tr><tr><td>iotdb.fetchSize</td><td>10000</td><td>Query fetch size</td></tr><tr><td>iotdb.zoneId</td><td></td><td>Zone Id</td></tr><tr><td>iotdb.enable.rpc.compression</td><td>FALSE</td><td>Whether enable rpc compression</td></tr><tr><td>iotdb.time.display.type</td><td>default</td><td>The time format to display</td></tr></tbody></table>`,38))])}const h=l(d,[["render",B],["__file","Zeppelin-IoTDB.html.vue"]]),m=JSON.parse('{"path":"/UserGuide/V2.0.1/Tree/Ecosystem-Integration/Zeppelin-IoTDB.html","title":"Apache Zeppelin","lang":"en-US","frontmatter":{"description":"Apache Zeppelin About Zeppelin Zeppelin is a web-based notebook that enables interactive data analytics. You can connect to data sources and perform interactive operations with ...","head":[["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V2.0.1/Tree/Ecosystem-Integration/Zeppelin-IoTDB.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Apache Zeppelin"}],["meta",{"property":"og:description","content":"Apache Zeppelin About Zeppelin Zeppelin is a web-based notebook that enables interactive data analytics. You can connect to data sources and perform interactive operations with ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alioss.timecho.com/docs/img/github/102752947-520a3e80-43a5-11eb-8fb1-8fac471c8c7e.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-12-13T04:33:18.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-13T04:33:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Apache Zeppelin\\",\\"image\\":[\\"https://alioss.timecho.com/docs/img/github/102752947-520a3e80-43a5-11eb-8fb1-8fac471c8c7e.png\\",\\"https://alioss.timecho.com/docs/img/github/102752945-5171a800-43a5-11eb-8614-53b3276a3ce2.png\\",\\"https://alioss.timecho.com/docs/img/github/102752948-52a2d500-43a5-11eb-9156-0c55667eb4cd.png\\",\\"https://alioss.timecho.com/docs/img/github/102752940-50407b00-43a5-11eb-94fb-3e3be222183c.png\\"],\\"dateModified\\":\\"2024-12-13T04:33:18.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"About Zeppelin","slug":"about-zeppelin","link":"#about-zeppelin","children":[]},{"level":2,"title":"Zeppelin-IoTDB Interpreter","slug":"zeppelin-iotdb-interpreter","link":"#zeppelin-iotdb-interpreter","children":[{"level":3,"title":"System Requirements","slug":"system-requirements","link":"#system-requirements","children":[]},{"level":3,"title":"Build Interpreter","slug":"build-interpreter","link":"#build-interpreter","children":[]},{"level":3,"title":"Install Interpreter","slug":"install-interpreter","link":"#install-interpreter","children":[]},{"level":3,"title":"Modify Configuration","slug":"modify-configuration","link":"#modify-configuration","children":[]},{"level":3,"title":"Running Zeppelin and IoTDB","slug":"running-zeppelin-and-iotdb","link":"#running-zeppelin-and-iotdb","children":[]}]},{"level":2,"title":"Use Zeppelin-IoTDB","slug":"use-zeppelin-iotdb","link":"#use-zeppelin-iotdb","children":[]},{"level":2,"title":"Configuration","slug":"configuration","link":"#configuration","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1734064398000,"contributors":[{"name":"majialin","username":"majialin","email":"107627937+mal117@users.noreply.github.com","commits":1,"url":"https://github.com/majialin"},{"name":"W1y1r","username":"W1y1r","email":"150988475+W1y1r@users.noreply.github.com","commits":2,"url":"https://github.com/W1y1r"},{"name":"Peng Junzhi","username":"Peng Junzhi","email":"78788603+Pengzna@users.noreply.github.com","commits":1,"url":"https://github.com/Peng Junzhi"},{"name":"Lei","username":"Lei","email":"33376433+LeiRui@users.noreply.github.com","commits":1,"url":"https://github.com/Lei"},{"name":"CritasWang","username":"CritasWang","email":"critas@outlook.com","commits":1,"url":"https://github.com/CritasWang"}]},"readingTime":{"minutes":2.42,"words":727},"filePathRelative":"UserGuide/V2.0.1/Tree/Ecosystem-Integration/Zeppelin-IoTDB.md","localizedDate":"July 10, 2023","autoDesc":true}');export{h as comp,m as data};
