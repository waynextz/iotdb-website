import{_ as a,c as s,b as n,o as t}from"./app-D8GMfgiK.js";const o={};function i(l,e){return t(),s("div",null,e[0]||(e[0]=[n(`<h2 id="way-to-get-iotdb-binary-files" tabindex="-1"><a class="header-anchor" href="#way-to-get-iotdb-binary-files"><span>Way to get IoTDB binary files</span></a></h2><p>IoTDB provides you three installation methods, you can refer to the following suggestions, choose one of them:</p><ul><li>Installation from source code. If you need to modify the code yourself, you can use this method.</li><li>Installation from binary files. Download the binary files from the official website. This is the recommended method, in which you will get a binary released package which is out-of-the-box.</li><li>Using Docker：The path to the dockerfile is <a href="https://github.com/apache/iotdb/blob/master/docker/Dockerfile" target="_blank" rel="noopener noreferrer">https://github.com/apache/iotdb/blob/master/docker/Dockerfile</a></li></ul><h3 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites"><span>Prerequisites</span></a></h3><p>To use IoTDB, you need to have:</p><ol><li>Java &gt;= 1.8 (Please make sure the environment path has been set)</li><li>Maven &gt;= 3.6 (Optional)</li><li>Set the max open files num as 65535 to avoid &quot;too many open files&quot; problem.</li></ol><blockquote><p>Note: If you don&#39;t have maven installed, you should replace &#39;mvn&#39; in the following commands with &#39;<a href="http://mvnw.sh" target="_blank" rel="noopener noreferrer">mvnw.sh</a>&#39; or &#39;mvnw.cmd&#39;.</p><h3 id="installation-from-binary-files" tabindex="-1"><a class="header-anchor" href="#installation-from-binary-files"><span>Installation from binary files</span></a></h3></blockquote><p>You can download the binary file from:<br><a href="https://iotdb.apache.org/Download/" target="_blank" rel="noopener noreferrer">Download page</a></p><h3 id="installation-from-source-code" tabindex="-1"><a class="header-anchor" href="#installation-from-source-code"><span>Installation from source code</span></a></h3><p>You can get the released source code from <a href="https://iotdb.apache.org/Download/" target="_blank" rel="noopener noreferrer">https://iotdb.apache.org/Download/</a>, or from the git repository <a href="https://github.com/apache/iotdb/tree/master" target="_blank" rel="noopener noreferrer">https://github.com/apache/iotdb/tree/master</a><br> You can download the source code from:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">git clone https://github.com/apache/iotdb.git</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>After that, go to the root path of IoTDB. If you want to build the version that we have released, you need to create and check out a new branch by command <code>git checkout -b my_{project.version} v{project.version}</code>. E.g., you want to build the version <code>0.12.4</code>, you can execute this command to make it:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token operator">&gt;</span> <span class="token function">git</span> checkout <span class="token parameter variable">-b</span> my_0.12.4 v0.12.4</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Then you can execute this command to build the version that you want:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&gt; mvn clean package -DskipTests</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Then the binary version (including both server and client) can be found at <strong>distribution/target/apache-iotdb-{project.version}-bin.zip</strong></p><blockquote><p>NOTE: Directories &quot;thrift/target/generated-sources/thrift&quot; and &quot;antlr/target/generated-sources/antlr4&quot; need to be added to sources roots to avoid compilation errors in IDE.</p></blockquote><p>If you would like to build the IoTDB server, you can run the following command under the root path of iotdb:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&gt; mvn clean package -pl server -am -DskipTests</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>After build, the IoTDB server will be at the folder &quot;server/target/iotdb-server-{project.version}&quot;.</p><p>If you would like to build a module, you can execute command <code>mvn clean package -pl {module.name} -am -DskipTests</code> under the root path of IoTDB.<br> If you need the jar with dependencies, you can add parameter <code>-P get-jar-with-dependencies</code> after the command. E.g., If you need the jar of jdbc with dependencies, you can execute this command:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token operator">&gt;</span> mvn clean package <span class="token parameter variable">-pl</span> jdbc <span class="token parameter variable">-am</span> <span class="token parameter variable">-DskipTests</span> <span class="token parameter variable">-P</span> get-jar-with-dependencies</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Then you can find it under the path <code>{module.name}/target</code>.</p><h3 id="installation-by-docker-dockerfile" tabindex="-1"><a class="header-anchor" href="#installation-by-docker-dockerfile"><span>Installation by Docker (Dockerfile)</span></a></h3><p>Apache IoTDB&#39; Docker image is released on <a href="https://hub.docker.com/r/apache/iotdb" target="_blank" rel="noopener noreferrer">https://hub.docker.com/r/apache/iotdb</a>,</p><ol><li><strong>Get IoTDB docker image</strong><ul><li><strong>Recommended:</strong> Using <code>docker pull apache/iotdb:latest</code> can get the latest docker image.</li><li>Users can also build a docker image themselves. Now a Dockerfile has been written at docker/src/main/Dockerfile. <ul><li>Way 1: <code>$ docker build -t iotdb:base git://github.com/apache/iotdb#master:docker</code></li><li>Way 2:</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"> $ <span class="token function">git</span> clone https://github.com/apache/iotdb</span>
<span class="line"> $ <span class="token builtin class-name">cd</span> iotdb</span>
<span class="line"> $ <span class="token builtin class-name">cd</span> <span class="token function">docker</span></span>
<span class="line"> $ <span class="token function">docker</span> build <span class="token parameter variable">-t</span> iotdb:base <span class="token builtin class-name">.</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ol><p>Once the docker image has been built locally (the tag is iotdb:base in this example), you are almost done!</p><ol start="2"><li><strong>Create docker volume for data files and logs:</strong></li></ol><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">$ <span class="token function">docker</span> volume create mydata</span>
<span class="line">$ <span class="token function">docker</span> volume create mylogs</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><strong>Run a docker container:</strong></li></ol><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">$ <span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">6667</span>:6667 <span class="token parameter variable">-v</span> mydata:/iotdb/data <span class="token parameter variable">-v</span> mylogs:/iotdb/logs <span class="token parameter variable">-d</span> iotdb:base /iotdb/bin/start-server.sh</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>If success, you can run <code>docker ps</code>, and get something like the following:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                               NAMES</span>
<span class="line">2a68b6944cb5        iotdb:base          &quot;/iotdb/bin/start-se…&quot;   4 minutes ago       Up 5 minutes        0.0.0.0:6667-&gt;6667/tcp              laughing_meitner</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>You can use the above command to get the container ID:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">$ <span class="token function">docker</span> container <span class="token function">ls</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>suppose the ID is &lt;C_ID&gt;.</p><p>And get the docker IP by the following, suppose the IP is &lt;C_IP&gt;.:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">$ <span class="token function">docker</span> inspect <span class="token parameter variable">--format</span><span class="token operator">=</span><span class="token string">&#39;{{.NetworkSettings.IPAddress}}&#39;</span> <span class="token operator">&lt;</span>C_ID<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Now IoTDB server has started succesfully.</p><ol start="4"><li>If you just want to have a try by using iotdb-cli, you can:</li></ol><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">$ <span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> <span class="token operator">&lt;</span>C_ID<span class="token operator">&gt;</span> /bin/bash</span>
<span class="line">$ <span class="token punctuation">(</span>now you have enter the container<span class="token punctuation">)</span>: /iotdb/sbin/start-cli.sh <span class="token parameter variable">-h</span> localhost <span class="token parameter variable">-p</span> <span class="token number">6667</span> <span class="token parameter variable">-u</span> root <span class="token parameter variable">-pw</span> root</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>Or, if you have a iotdb-cli locally, execute the following command:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">$ /%IOTDB_HOME%/sbin/start-cli.sh <span class="token parameter variable">-h</span> localhost <span class="token parameter variable">-p</span> <span class="token number">6667</span> <span class="token parameter variable">-u</span> root <span class="token parameter variable">-pw</span> root</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="5"><li>If you want to write codes to insert data and query data, please add the following dependence:</li></ol><div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml" data-title="xml"><pre><code><span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.iotdb<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>iotdb-jdbc<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>0.13.4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Some examples about how to use IoTDB with IoTDB-JDBC can be found at: <a href="https://github.com/apache/iotdb/tree/master/example/jdbc/src/main/java/org/apache/iotdb" target="_blank" rel="noopener noreferrer">https://github.com/apache/iotdb/tree/master/example/jdbc/src/main/java/org/apache/iotdb</a></p>`,46)]))}const c=a(o,[["render",i],["__file","WayToGetIoTDB.html.vue"]]),p=JSON.parse('{"path":"/UserGuide/V0.13.x/QuickStart/WayToGetIoTDB.html","title":"","lang":"en-US","frontmatter":{"description":"Way to get IoTDB binary files IoTDB provides you three installation methods, you can refer to the following suggestions, choose one of them: Installation from source code. If yo...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/QuickStart/WayToGetIoTDB.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V0.13.x/QuickStart/WayToGetIoTDB.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"Way to get IoTDB binary files IoTDB provides you three installation methods, you can refer to the following suggestions, choose one of them: Installation from source code. If yo..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-20T06:31:38.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-20T06:31:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-20T06:31:38.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Way to get IoTDB binary files","slug":"way-to-get-iotdb-binary-files","link":"#way-to-get-iotdb-binary-files","children":[{"level":3,"title":"Prerequisites","slug":"prerequisites","link":"#prerequisites","children":[]},{"level":3,"title":"Installation from source code","slug":"installation-from-source-code","link":"#installation-from-source-code","children":[]},{"level":3,"title":"Installation by Docker (Dockerfile)","slug":"installation-by-docker-dockerfile","link":"#installation-by-docker-dockerfile","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1716186698000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1},{"name":"Zhijia Cao","email":"caozhijia@126.com","commits":1}]},"readingTime":{"minutes":2.91,"words":873},"filePathRelative":"UserGuide/V0.13.x/QuickStart/WayToGetIoTDB.md","localizedDate":"July 10, 2023","autoDesc":true}');export{c as comp,p as data};
