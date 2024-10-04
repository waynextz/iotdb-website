import{_ as a,c as s,b as n,o as t}from"./app-W3EENNaa.js";const l={};function i(r,e){return t(),s("div",null,e[0]||(e[0]=[n(`<h2 id="下载与安装" tabindex="-1"><a class="header-anchor" href="#下载与安装"><span>下载与安装</span></a></h2><p>IoTDB 为您提供了两种安装方式，您可以参考下面的建议，任选其中一种：</p><p>第一种，从官网下载安装包。这是我们推荐使用的安装方式，通过该方式，您将得到一个可以立即使用的、打包好的二进制可执行文件。</p><p>第二种，使用源码编译。若您需要自行修改代码，可以使用该安装方式。</p><h3 id="安装环境要求" tabindex="-1"><a class="header-anchor" href="#安装环境要求"><span>安装环境要求</span></a></h3><p>安装前请保证您的电脑上配有 JDK&gt;=1.8 的运行环境，并配置好 JAVA_HOME 环境变量。</p><p>如果您需要从源码进行编译，还需要安装：</p><ol><li>Maven &gt;= 3.6 的运行环境，具体安装方法可以参考以下链接：<a href="https://maven.apache.org/install.html" target="_blank" rel="noopener noreferrer">https://maven.apache.org/install.html</a>。</li></ol><blockquote><p>注： 也可以选择不安装，使用我们提供的&#39;<a href="http://mvnw.sh" target="_blank" rel="noopener noreferrer">mvnw.sh</a>&#39; 或 &#39;mvnw.cmd&#39; 工具。使用时请用&#39;<a href="http://mvnw.sh" target="_blank" rel="noopener noreferrer">mvnw.sh</a>&#39; 或 &#39;mvnw.cmd&#39;命令代替下文的&#39;mvn&#39;命令。</p></blockquote><h3 id="从官网下载二进制可执行文件" tabindex="-1"><a class="header-anchor" href="#从官网下载二进制可执行文件"><span>从官网下载二进制可执行文件</span></a></h3><p>您可以从 <a href="http://iotdb.apache.org/Download/" target="_blank" rel="noopener noreferrer">http://iotdb.apache.org/Download/</a> 上下载已经编译好的可执行程序 iotdb-xxx.zip，该压缩包包含了 IoTDB 系统运行所需的所有必要组件。</p><p>下载后，您可使用以下操作对 IoTDB 的压缩包进行解压：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Shell &gt; uzip iotdb-&lt;version&gt;.zip</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="使用源码编译" tabindex="-1"><a class="header-anchor" href="#使用源码编译"><span>使用源码编译</span></a></h3><p>您可以获取已发布的源码 <a href="https://iotdb.apache.org/Download/" target="_blank" rel="noopener noreferrer">https://iotdb.apache.org/Download/</a> ，或者从 <a href="https://github.com/apache/iotdb/tree/master" target="_blank" rel="noopener noreferrer">https://github.com/apache/iotdb/tree/master</a> git 仓库获取</p><p>源码克隆后，进入到源码文件夹目录下。如果您想编译已经发布过的版本，可以先用<code>git checkout -b my_{project.version} v{project.version}</code>命令新建并切换分支。比如您要编译0.12.4这个版本，您可以用如下命令去切换分支：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token operator">&gt;</span> <span class="token function">git</span> checkout <span class="token parameter variable">-b</span> my_0.12.4 v0.12.4</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>切换分支之后就可以使用以下命令进行编译：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&gt; mvn clean package -pl server -am -Dmaven.test.skip=true</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>编译后，IoTDB 服务器会在 &quot;server/target/iotdb-server-{project.version}&quot; 文件夹下，包含以下内容：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+- sbin/       &lt;-- script files</span>
<span class="line">|</span>
<span class="line">+- conf/      &lt;-- configuration files</span>
<span class="line">|</span>
<span class="line">+- lib/       &lt;-- project dependencies</span>
<span class="line">|</span>
<span class="line">+- tools/      &lt;-- system tools</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果您想要编译项目中的某个模块，您可以在源码文件夹中使用<code>mvn clean package -pl {module.name} -am -DskipTests</code>命令进行编译。如果您需要的是带依赖的 jar 包，您可以在编译命令后面加上<code>-P get-jar-with-dependencies</code>参数。比如您想编译带依赖的 jdbc jar 包，您就可以使用以下命令进行编译：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token operator">&gt;</span> mvn clean package <span class="token parameter variable">-pl</span> jdbc <span class="token parameter variable">-am</span> <span class="token parameter variable">-DskipTests</span> <span class="token parameter variable">-P</span> get-jar-with-dependencies</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>编译完成后就可以在<code>{module.name}/target</code>目录中找到需要的包了。</p><h3 id="通过-docker-安装-dockerfile" tabindex="-1"><a class="header-anchor" href="#通过-docker-安装-dockerfile"><span>通过 Docker 安装 (Dockerfile)</span></a></h3><p>Apache IoTDB 的 Docker 镜像已经上传至 <a href="https://hub.docker.com/r/apache/iotdb" target="_blank" rel="noopener noreferrer">https://hub.docker.com/r/apache/iotdb</a>，</p><ol><li><p><strong>获取 IoTDB docker 镜像</strong></p><ul><li><p><strong>推荐</strong>：执行 <code>docker pull apache/iotdb:latest</code> 即可获取最新的 docker 镜像。</p></li><li><p>用户也可以根据代码提供的 Dockerfile 文件来自己生成镜像。Dockerfile 存放在的 docker 工程下的 src/main/Dockerfile 中。</p><ul><li><p>方法 1：<code>$ docker build -t iotdb:base git://github.com/apache/iotdb#master:docker</code></p></li><li><p>方法 2：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">$ <span class="token function">git</span> clone https://github.com/apache/iotdb</span>
<span class="line">$ <span class="token builtin class-name">cd</span> iotdb</span>
<span class="line">$ mvn package <span class="token parameter variable">-DskipTests</span></span>
<span class="line">$ <span class="token builtin class-name">cd</span> <span class="token function">docker</span></span>
<span class="line">$ <span class="token function">docker</span> build <span class="token parameter variable">-t</span> iotdb:base <span class="token builtin class-name">.</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><p>当 docker image 在本地构建完成的时候 （示例中的 tag 为 iotdb:base)，已经距完成只有一步之遥了！</p></li><li><p><strong>创建数据文件和日志的 docker 挂载目录 (docker volume):</strong></p></li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">$ docker volume create mydata</span>
<span class="line">$ docker volume create mylogs</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><strong>运行 docker 容器：</strong></li></ol><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">$ <span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">6667</span>:6667 <span class="token parameter variable">-v</span> mydata:/iotdb/data <span class="token parameter variable">-v</span> mylogs:/iotdb/logs <span class="token parameter variable">-d</span> iotdb:base /iotdb/bin/start-server.sh</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>您可以使用<code>docker ps</code>来检查是否运行成功，当成功时控制台会输出下面的日志：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                               NAMES</span>
<span class="line">2a68b6944cb5        iotdb:base          &quot;/iotdb/bin/start-se…&quot;   4 minutes ago       Up 5 minutes        0.0.0.0:6667-&gt;6667/tcp              laughing_meitner</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>您可以使用下面的命令来获取 container 的 ID:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">$ <span class="token function">docker</span> container <span class="token function">ls</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>假设这个 ID 为 &lt;C_ID&gt;.</p><p>然后使用下面的命令获取这个 ID 对应的 IP 地址，假设获取的 IP 为 &lt;C_IP&gt;:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">$ <span class="token function">docker</span> inspect <span class="token parameter variable">--format</span><span class="token operator">=</span><span class="token string">&#39;{{.NetworkSettings.IPAddress}}&#39;</span> <span class="token operator">&lt;</span>C_ID<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>现在 IoTDB 服务器已经启动成功了。</p><ol start="4"><li>如果您想尝试使用 iotdb-cli 命令行，您可以使用如下命令：</li></ol><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">$ <span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> <span class="token operator">&lt;</span>C_ID<span class="token operator">&gt;</span> /bin/bash</span>
<span class="line">$ <span class="token punctuation">(</span>now you have enter the container<span class="token punctuation">)</span>: /iotdb/sbin/start-cli.sh <span class="token parameter variable">-h</span> localhost <span class="token parameter variable">-p</span> <span class="token number">6667</span> <span class="token parameter variable">-u</span> root <span class="token parameter variable">-pw</span> root</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>还可以使用本地的 iotdb-cli，执行如下命令：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">$ /%IOTDB_HOME%/sbin/start-cli.sh <span class="token parameter variable">-h</span> localhost <span class="token parameter variable">-p</span> <span class="token number">6667</span> <span class="token parameter variable">-u</span> root <span class="token parameter variable">-pw</span> root</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="5"><li>如果您想写一些代码来插入或者查询数据，您可以在 pom.xml 文件中加入下面的依赖：</li></ol><div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml" data-title="xml"><pre><code><span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.iotdb<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>iotdb-jdbc<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>0.13.4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里是一些使用 IoTDB-JDBC 连接 IoTDB 的示例：<a href="https://github.com/apache/iotdb/tree/master/example/jdbc/src/main/java/org/apache/iotdb" target="_blank" rel="noopener noreferrer">https://github.com/apache/iotdb/tree/master/example/jdbc/src/main/java/org/apache/iotdb</a></p>`,45)]))}const o=a(l,[["render",i],["__file","WayToGetIoTDB.html.vue"]]),c=JSON.parse('{"path":"/zh/UserGuide/V0.13.x/QuickStart/WayToGetIoTDB.html","title":"","lang":"zh-CN","frontmatter":{"description":"下载与安装 IoTDB 为您提供了两种安装方式，您可以参考下面的建议，任选其中一种： 第一种，从官网下载安装包。这是我们推荐使用的安装方式，通过该方式，您将得到一个可以立即使用的、打包好的二进制可执行文件。 第二种，使用源码编译。若您需要自行修改代码，可以使用该安装方式。 安装环境要求 安装前请保证您的电脑上配有 JDK>=1.8 的运行环境，并配置好...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V0.13.x/QuickStart/WayToGetIoTDB.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/QuickStart/WayToGetIoTDB.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"下载与安装 IoTDB 为您提供了两种安装方式，您可以参考下面的建议，任选其中一种： 第一种，从官网下载安装包。这是我们推荐使用的安装方式，通过该方式，您将得到一个可以立即使用的、打包好的二进制可执行文件。 第二种，使用源码编译。若您需要自行修改代码，可以使用该安装方式。 安装环境要求 安装前请保证您的电脑上配有 JDK>=1.8 的运行环境，并配置好..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-20T06:31:38.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-20T06:31:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-20T06:31:38.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"下载与安装","slug":"下载与安装","link":"#下载与安装","children":[{"level":3,"title":"安装环境要求","slug":"安装环境要求","link":"#安装环境要求","children":[]},{"level":3,"title":"从官网下载二进制可执行文件","slug":"从官网下载二进制可执行文件","link":"#从官网下载二进制可执行文件","children":[]},{"level":3,"title":"使用源码编译","slug":"使用源码编译","link":"#使用源码编译","children":[]},{"level":3,"title":"通过 Docker 安装 (Dockerfile)","slug":"通过-docker-安装-dockerfile","link":"#通过-docker-安装-dockerfile","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1716186698000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1},{"name":"Zhijia Cao","email":"caozhijia@126.com","commits":1}]},"readingTime":{"minutes":4,"words":1199},"filePathRelative":"zh/UserGuide/V0.13.x/QuickStart/WayToGetIoTDB.md","localizedDate":"2023年7月10日","autoDesc":true}');export{o as comp,c as data};
