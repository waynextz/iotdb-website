import{_ as s,c as a,b as l,o as n}from"./app-CNiZnG3t.js";const o={};function t(r,e){return n(),a("div",null,e[0]||(e[0]=[l(`<h2 id="下载与安装" tabindex="-1"><a class="header-anchor" href="#下载与安装"><span>下载与安装</span></a></h2><p>IoTDB 为您提供了两种安装方式，您可以参考下面的建议，任选其中一种：</p><p>第一种，从官网下载安装包。这是我们推荐使用的安装方式，通过该方式，您将得到一个可以立即使用的、打包好的二进制可执行文件。</p><p>第二种，使用源码编译。若您需要自行修改代码，可以使用该安装方式。</p><h3 id="安装环境要求" tabindex="-1"><a class="header-anchor" href="#安装环境要求"><span>安装环境要求</span></a></h3><p>安装前请保证您的电脑上配有 JDK&gt;=1.8 的运行环境，并配置好 JAVA_HOME 环境变量。</p><p>如果您需要从源码进行编译，还需要安装：</p><ol><li>Maven &gt;= 3.6 的运行环境，具体安装方法可以参考以下链接：<a href="https://maven.apache.org/install.html" target="_blank" rel="noopener noreferrer">https://maven.apache.org/install.html</a>。</li></ol><blockquote><p>注： 也可以选择不安装，使用我们提供的&#39;<a href="http://mvnw.sh" target="_blank" rel="noopener noreferrer">mvnw.sh</a>&#39; 或 &#39;mvnw.cmd&#39; 工具。使用时请用&#39;<a href="http://mvnw.sh" target="_blank" rel="noopener noreferrer">mvnw.sh</a>&#39; 或 &#39;mvnw.cmd&#39;命令代替下文的&#39;mvn&#39;命令。</p></blockquote><h3 id="从官网下载二进制可执行文件" tabindex="-1"><a class="header-anchor" href="#从官网下载二进制可执行文件"><span>从官网下载二进制可执行文件</span></a></h3><p>您可以从 <a href="http://iotdb.apache.org/Download/" target="_blank" rel="noopener noreferrer">http://iotdb.apache.org/Download/</a> 上下载已经编译好的可执行程序 iotdb-xxx.zip，该压缩包包含了 IoTDB 系统运行所需的所有必要组件。</p><p>下载后，您可使用以下操作对 IoTDB 的压缩包进行解压：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>Shell &gt; uzip iotdb-&lt;version&gt;.zip</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="使用源码编译" tabindex="-1"><a class="header-anchor" href="#使用源码编译"><span>使用源码编译</span></a></h3><p>您可以获取已发布的源码 <a href="https://iotdb.apache.org/Download/" target="_blank" rel="noopener noreferrer">https://iotdb.apache.org/Download/</a> ，或者从 <a href="https://github.com/apache/iotdb/tree/master" target="_blank" rel="noopener noreferrer">https://github.com/apache/iotdb/tree/master</a> git 仓库获取</p><p>源码克隆后，进入到源码文件夹目录下。如果您想编译已经发布过的版本，可以先用<code>git checkout -b my_{project.version} v{project.version}</code>命令新建并切换分支。比如您要编译0.12.4这个版本，您可以用如下命令去切换分支：</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#ABB2BF;">&gt; git checkout -b my_0.12.4 v0.12.4</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>切换分支之后就可以使用以下命令进行编译：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>&gt; mvn clean package -pl server -am -Dmaven.test.skip=true</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>编译后，IoTDB 服务器会在 &quot;server/target/iotdb-server-{project.version}&quot; 文件夹下，包含以下内容：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>+- sbin/       &lt;-- script files</span></span>
<span class="line"><span>|</span></span>
<span class="line"><span>+- conf/      &lt;-- configuration files</span></span>
<span class="line"><span>|</span></span>
<span class="line"><span>+- lib/       &lt;-- project dependencies</span></span>
<span class="line"><span>|</span></span>
<span class="line"><span>+- tools/      &lt;-- system tools</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果您想要编译项目中的某个模块，您可以在源码文件夹中使用<code>mvn clean package -pl {module.name} -am -DskipTests</code>命令进行编译。如果您需要的是带依赖的 jar 包，您可以在编译命令后面加上<code>-P get-jar-with-dependencies</code>参数。比如您想编译带依赖的 jdbc jar 包，您就可以使用以下命令进行编译：</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#ABB2BF;">&gt; mvn clean package -pl jdbc -am -DskipTests -P get-jar-with-dependencies</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>编译完成后就可以在<code>{module.name}/target</code>目录中找到需要的包了。</p><h3 id="通过-docker-安装-dockerfile" tabindex="-1"><a class="header-anchor" href="#通过-docker-安装-dockerfile"><span>通过 Docker 安装 (Dockerfile)</span></a></h3><p>Apache IoTDB 的 Docker 镜像已经上传至 <a href="https://hub.docker.com/r/apache/iotdb" target="_blank" rel="noopener noreferrer">https://hub.docker.com/r/apache/iotdb</a>，</p><ol><li><p><strong>获取 IoTDB docker 镜像</strong></p><ul><li><p><strong>推荐</strong>：执行 <code>docker pull apache/iotdb:latest</code> 即可获取最新的 docker 镜像。</p></li><li><p>用户也可以根据代码提供的 Dockerfile 文件来自己生成镜像。Dockerfile 存放在的 docker 工程下的 src/main/Dockerfile 中。</p><ul><li><p>方法 1：<code>$ docker build -t iotdb:base git://github.com/apache/iotdb#master:docker</code></p></li><li><p>方法 2：</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> git</span><span style="color:#98C379;"> clone</span><span style="color:#98C379;"> https://github.com/apache/iotdb</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> cd</span><span style="color:#98C379;"> iotdb</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> mvn</span><span style="color:#98C379;"> package</span><span style="color:#D19A66;"> -DskipTests</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> cd</span><span style="color:#98C379;"> docker</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> docker</span><span style="color:#98C379;"> build</span><span style="color:#D19A66;"> -t</span><span style="color:#98C379;"> iotdb:base</span><span style="color:#98C379;"> .</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><p>当 docker image 在本地构建完成的时候 （示例中的 tag 为 iotdb:base)，已经距完成只有一步之遥了！</p></li><li><p><strong>创建数据文件和日志的 docker 挂载目录 (docker volume):</strong></p></li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>$ docker volume create mydata</span></span>
<span class="line"><span>$ docker volume create mylogs</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><strong>运行 docker 容器：</strong></li></ol><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> docker</span><span style="color:#98C379;"> run</span><span style="color:#D19A66;"> -p</span><span style="color:#98C379;"> 6667:6667</span><span style="color:#D19A66;"> -v</span><span style="color:#98C379;"> mydata:/iotdb/data</span><span style="color:#D19A66;"> -v</span><span style="color:#98C379;"> mylogs:/iotdb/logs</span><span style="color:#D19A66;"> -d</span><span style="color:#98C379;"> iotdb:base</span><span style="color:#98C379;"> /iotdb/bin/start-server.sh</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>您可以使用<code>docker ps</code>来检查是否运行成功，当成功时控制台会输出下面的日志：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                               NAMES</span></span>
<span class="line"><span>2a68b6944cb5        iotdb:base          &quot;/iotdb/bin/start-se…&quot;   4 minutes ago       Up 5 minutes        0.0.0.0:6667-&gt;6667/tcp              laughing_meitner</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>您可以使用下面的命令来获取 container 的 ID:</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> docker</span><span style="color:#98C379;"> container</span><span style="color:#98C379;"> ls</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>假设这个 ID 为 &lt;C_ID&gt;.</p><p>然后使用下面的命令获取这个 ID 对应的 IP 地址，假设获取的 IP 为 &lt;C_IP&gt;:</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> docker</span><span style="color:#98C379;"> inspect</span><span style="color:#D19A66;"> --format=</span><span style="color:#98C379;">&#39;{{.NetworkSettings.IPAddress}}&#39;</span><span style="color:#ABB2BF;"> &lt;</span><span style="color:#98C379;">C_I</span><span style="color:#ABB2BF;">D&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>现在 IoTDB 服务器已经启动成功了。</p><ol start="4"><li>如果您想尝试使用 iotdb-cli 命令行，您可以使用如下命令：</li></ol><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> docker</span><span style="color:#98C379;"> exec</span><span style="color:#D19A66;"> -it</span><span style="color:#ABB2BF;"> &lt;</span><span style="color:#98C379;">C_I</span><span style="color:#ABB2BF;">D&gt; </span><span style="color:#98C379;">/bin/bash</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#ABB2BF;"> (now </span><span style="color:#98C379;">you</span><span style="color:#98C379;"> have</span><span style="color:#98C379;"> enter</span><span style="color:#98C379;"> the</span><span style="color:#98C379;"> container</span><span style="color:#ABB2BF;">): /iotdb/sbin/start-cli.sh -h localhost -p 6667 -u root -pw root</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>还可以使用本地的 iotdb-cli，执行如下命令：</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> /%IOTDB_HOME%/sbin/start-cli.sh</span><span style="color:#D19A66;"> -h</span><span style="color:#98C379;"> localhost</span><span style="color:#D19A66;"> -p</span><span style="color:#D19A66;"> 6667</span><span style="color:#D19A66;"> -u</span><span style="color:#98C379;"> root</span><span style="color:#D19A66;"> -pw</span><span style="color:#98C379;"> root</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="5"><li>如果您想写一些代码来插入或者查询数据，您可以在 pom.xml 文件中加入下面的依赖：</li></ol><div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#ABB2BF;">        &lt;</span><span style="color:#E06C75;">dependency</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">            &lt;</span><span style="color:#E06C75;">groupId</span><span style="color:#ABB2BF;">&gt;org.apache.iotdb&lt;/</span><span style="color:#E06C75;">groupId</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">            &lt;</span><span style="color:#E06C75;">artifactId</span><span style="color:#ABB2BF;">&gt;iotdb-jdbc&lt;/</span><span style="color:#E06C75;">artifactId</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">            &lt;</span><span style="color:#E06C75;">version</span><span style="color:#ABB2BF;">&gt;0.13.4&lt;/</span><span style="color:#E06C75;">version</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;/</span><span style="color:#E06C75;">dependency</span><span style="color:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里是一些使用 IoTDB-JDBC 连接 IoTDB 的示例：<a href="https://github.com/apache/iotdb/tree/master/example/jdbc/src/main/java/org/apache/iotdb" target="_blank" rel="noopener noreferrer">https://github.com/apache/iotdb/tree/master/example/jdbc/src/main/java/org/apache/iotdb</a></p>`,45)]))}const p=s(o,[["render",t],["__file","WayToGetIoTDB.html.vue"]]),c=JSON.parse('{"path":"/zh/UserGuide/V0.13.x/QuickStart/WayToGetIoTDB.html","title":"","lang":"zh-CN","frontmatter":{"description":"下载与安装 IoTDB 为您提供了两种安装方式，您可以参考下面的建议，任选其中一种： 第一种，从官网下载安装包。这是我们推荐使用的安装方式，通过该方式，您将得到一个可以立即使用的、打包好的二进制可执行文件。 第二种，使用源码编译。若您需要自行修改代码，可以使用该安装方式。 安装环境要求 安装前请保证您的电脑上配有 JDK>=1.8 的运行环境，并配置好...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V0.13.x/QuickStart/WayToGetIoTDB.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/QuickStart/WayToGetIoTDB.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"下载与安装 IoTDB 为您提供了两种安装方式，您可以参考下面的建议，任选其中一种： 第一种，从官网下载安装包。这是我们推荐使用的安装方式，通过该方式，您将得到一个可以立即使用的、打包好的二进制可执行文件。 第二种，使用源码编译。若您需要自行修改代码，可以使用该安装方式。 安装环境要求 安装前请保证您的电脑上配有 JDK>=1.8 的运行环境，并配置好..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-20T06:31:38.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-20T06:31:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-20T06:31:38.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"下载与安装","slug":"下载与安装","link":"#下载与安装","children":[{"level":3,"title":"安装环境要求","slug":"安装环境要求","link":"#安装环境要求","children":[]},{"level":3,"title":"从官网下载二进制可执行文件","slug":"从官网下载二进制可执行文件","link":"#从官网下载二进制可执行文件","children":[]},{"level":3,"title":"使用源码编译","slug":"使用源码编译","link":"#使用源码编译","children":[]},{"level":3,"title":"通过 Docker 安装 (Dockerfile)","slug":"通过-docker-安装-dockerfile","link":"#通过-docker-安装-dockerfile","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1716186698000,"contributors":[{"name":"Zhijia Cao","username":"Zhijia Cao","email":"caozhijia@126.com","commits":1,"url":"https://github.com/Zhijia Cao"},{"name":"CritasWang","username":"CritasWang","email":"critas@outlook.com","commits":1,"url":"https://github.com/CritasWang"}]},"readingTime":{"minutes":4,"words":1199},"filePathRelative":"zh/UserGuide/V0.13.x/QuickStart/WayToGetIoTDB.md","localizedDate":"2023年7月10日","autoDesc":true}');export{p as comp,c as data};
