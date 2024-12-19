import{_ as o,c as t,b as s,d as a,e as i,o as n}from"./app-C-0rb--l.js";const r={},l={class:"MathJax",jax:"SVG",style:{position:"relative"}},p={style:{"vertical-align":"-0.452ex"},xmlns:"http://www.w3.org/2000/svg",width:"22.172ex",height:"2.149ex",role:"img",focusable:"false",viewBox:"0 -750 9800 950","aria-hidden":"true"};function d(c,e){return n(),t("div",null,[e[4]||(e[4]=s(`<h1 id="系统集成" tabindex="-1"><a class="header-anchor" href="#系统集成"><span>系统集成</span></a></h1><h2 id="grafana-插件" tabindex="-1"><a class="header-anchor" href="#grafana-插件"><span>Grafana 插件</span></a></h2><p>Grafana 是开源的指标量监测和可视化工具，可用于展示时序数据和应用程序运行分析。</p><p>在 IoTDB 项目中，我们开发了 Grafana 插件，该插件通过调用 IoTDB REST 服务来展现 IoTDB 中时序数据 ，提供了众多时序数据的可视化方法。Grafana 插件相较于 IoTDB-Grafana-Connector 连接器执行效率更高、支持的查询种类更多。只要在您部署环境允许的情况下，<em>我们都推荐直接使用 Grafana 插件而不使用 IoTDB-Grafana-Connector 连接器</em>。</p><h3 id="部署-grafana-插件" tabindex="-1"><a class="header-anchor" href="#部署-grafana-插件"><span>部署 Grafana 插件</span></a></h3><h4 id="安装-grafana" tabindex="-1"><a class="header-anchor" href="#安装-grafana"><span>安装 Grafana</span></a></h4><ul><li>Grafana 组件下载地址：<a href="https://grafana.com/grafana/download" target="_blank" rel="noopener noreferrer">https://grafana.com/grafana/download</a></li><li>版本 &gt;= 7.0.0</li></ul><h4 id="grafana-plugin-获取" tabindex="-1"><a class="header-anchor" href="#grafana-plugin-获取"><span>grafana-plugin 获取</span></a></h4><h5 id="方案一-grafana-plugin-下载" tabindex="-1"><a class="header-anchor" href="#方案一-grafana-plugin-下载"><span>方案一 grafana-plugin 下载</span></a></h5><p>二进制文件下载地址：<a href="https://iotdb.apache.org/zh/Download/" target="_blank" rel="noopener noreferrer">https://iotdb.apache.org/zh/Download/</a></p><h5 id="方案二-grafana-plugin-单独编译" tabindex="-1"><a class="header-anchor" href="#方案二-grafana-plugin-单独编译"><span>方案二 grafana-plugin 单独编译</span></a></h5><p>我们需要编译 IoTDB 仓库 <code>grafana-plugin</code> 目录下的前端工程并生成 <code>dist</code> 目标目录，具体执行流程如下。</p><p>源码下载</p><ul><li>插件名称: grafana-plugin</li><li>下载地址: <a href="https://github.com/apache/iotdb.git" target="_blank" rel="noopener noreferrer">https://github.com/apache/iotdb.git</a></li></ul><p>执行下面的命令：</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> clone</span><span style="color:#98C379;"> https://github.com/apache/iotdb.git</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>您可以采取下面任意一种编译方式：</p><ul><li>使用 maven 编译，在 <code>grafana-plugin</code> 目录下执行：</li></ul><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#61AFEF;">mvn</span><span style="color:#98C379;"> install</span><span style="color:#98C379;"> package</span><span style="color:#D19A66;"> -P</span><span style="color:#98C379;"> compile-grafana-plugin</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>或使用命令编译，在 <code>grafana-plugin</code> 目录下执行：</li></ul><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#61AFEF;">yarn</span><span style="color:#98C379;"> install</span></span>
<span class="line"><span style="color:#61AFEF;">yarn</span><span style="color:#98C379;"> build</span></span>
<span class="line"><span style="color:#61AFEF;">go</span><span style="color:#98C379;"> get</span><span style="color:#D19A66;"> -u</span><span style="color:#98C379;"> github.com/grafana/grafana-plugin-sdk-go</span></span>
<span class="line"><span style="color:#61AFEF;">go</span><span style="color:#98C379;"> mod</span><span style="color:#98C379;"> tidy</span></span>
<span class="line"><span style="color:#61AFEF;">mage</span><span style="color:#D19A66;"> -v</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在使用go get -u 命令时有可能会报如下错误，这时我们需要执行<code>go env -w GOPROXY=https://goproxy.cn</code>，再执行<code>go get -u github.com/grafana/grafana-plugin-sdk-go</code></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>go get: module github.com/grafana/grafana-plugin-sdk-go: Get &quot;https://proxy.golang.org/github.com/grafana/grafana-plugin-sdk-go/@v/list&quot;: dial tcp 142.251.42.241:443: i/o timeout</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如果编译成功，我们将看到生成的目标文件夹 <code>dist</code>，它包含了编译好的 Grafana 前端插件：</p><img style="width:100%;max-width:333px;max-height:545px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/grafana-plugin-build.png?raw=true"><h5 id="方案三-iotdb-的分发包完整编译" tabindex="-1"><a class="header-anchor" href="#方案三-iotdb-的分发包完整编译"><span>方案三 IoTDB 的分发包完整编译</span></a></h5><p>我们也可以通过执行 IoTDB 项目的<strong>打包指令</strong>获取 <code>grafana-plugin </code> 的前端工程和其他配套的 IoTDB 可执行文件。</p><p>源码下载</p><ul><li>插件名称: grafana-plugin</li><li>下载地址: <a href="https://github.com/apache/iotdb.git" target="_blank" rel="noopener noreferrer">https://github.com/apache/iotdb.git</a></li></ul><p>执行下面的命令：</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> clone</span><span style="color:#98C379;"> https://github.com/apache/iotdb.git</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>在 IoTDB 仓库的根目录下执行：</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#61AFEF;"> mvn</span><span style="color:#98C379;"> clean</span><span style="color:#98C379;"> package</span><span style="color:#D19A66;"> -pl</span><span style="color:#98C379;"> distribution</span><span style="color:#D19A66;"> -am</span><span style="color:#D19A66;"> -DskipTests</span><span style="color:#D19A66;"> -P</span><span style="color:#98C379;"> compile-grafana-plugin</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如果编译成功，我们将看到 <code>distribution/target</code> 路径下包含了编译好的 Grafana 前端插件：</p><img style="width:100%;max-width:333px;max-height:545px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/distribution.png?raw=true"><h4 id="grafana-plugin-插件安装" tabindex="-1"><a class="header-anchor" href="#grafana-plugin-插件安装"><span>grafana-plugin 插件安装</span></a></h4><ul><li><p>拷贝上述生成的前端工程目标文件夹到 Grafana 的插件目录中 <code>\${Grafana文件目录}\\data\\plugins\\</code>。如果没有此目录可以手动建或者启动grafana会自动建立，当然也可以修改plugins的位置,具体请查看下面的修改Grafana 的插件目录位置说明。</p></li><li><p>修改Grafana的配置文件：找到配置文件（<code>\${Grafana文件目录}\\conf\\defaults.ini</code>），并进行如下的修改：</p><div class="language-ini line-numbers-mode" data-highlighter="shiki" data-ext="ini" data-title="ini" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">allow_loading_unsigned_plugins</span><span style="color:#ABB2BF;"> =</span><span style="color:#98C379;"> apache-iotdb-datasource</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>修改Grafana 的插件目录位置:找到配置文件（<code>\${Grafana文件目录}\\conf\\defaults.ini</code>），并进行如下的修改：</p><div class="language-ini line-numbers-mode" data-highlighter="shiki" data-ext="ini" data-title="ini" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">plugins</span><span style="color:#ABB2BF;"> =</span><span style="color:#98C379;"> data/plugins</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>如果 Grafana 服务已启动，则需要重启服务。</p></li></ul><p>更多详情，请点 <a href="https://grafana.com/docs/grafana/latest/plugins/installation/" target="_blank" rel="noopener noreferrer">这里</a></p><h4 id="启动-grafana" tabindex="-1"><a class="header-anchor" href="#启动-grafana"><span>启动 Grafana</span></a></h4><p>进入 Grafana 的安装目录，使用以下命令启动 Grafana：</p><ul><li>Windows 系统：</li></ul><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#61AFEF;">bin\\grafana-server.exe</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>Linux 系统：</li></ul><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#61AFEF;">sudo</span><span style="color:#98C379;"> service</span><span style="color:#98C379;"> grafana-server</span><span style="color:#98C379;"> start</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>MacOS 系统：</li></ul><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#61AFEF;">brew</span><span style="color:#98C379;"> services</span><span style="color:#98C379;"> start</span><span style="color:#98C379;"> grafana</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>更多详情，请点 <a href="https://grafana.com/docs/grafana/latest/installation/" target="_blank" rel="noopener noreferrer">这里</a></p><h4 id="配置-iotdb-rest-服务" tabindex="-1"><a class="header-anchor" href="#配置-iotdb-rest-服务"><span>配置 IoTDB REST 服务</span></a></h4><p>进入 <code>{iotdb 目录}/conf</code>，打开 <code>iotdb-common.properties</code> 文件，并作如下修改：</p><div class="language-properties line-numbers-mode" data-highlighter="shiki" data-ext="properties" data-title="properties" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># Is the REST service enabled</span></span>
<span class="line"><span style="color:#C678DD;">enable_rest_service</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># the binding port of the REST service</span></span>
<span class="line"><span style="color:#C678DD;">rest_service_port</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">18080</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动（重启）IoTDB 使配置生效，此时 IoTDB REST 服务处于运行状态。</p><h3 id="使用-grafana-插件" tabindex="-1"><a class="header-anchor" href="#使用-grafana-插件"><span>使用 Grafana 插件</span></a></h3><h4 id="访问-grafana-dashboard" tabindex="-1"><a class="header-anchor" href="#访问-grafana-dashboard"><span>访问 Grafana dashboard</span></a></h4><p>Grafana 以网页的 dashboard 形式为您展示数据，在使用时请您打开浏览器，访问 <code>http://&lt;ip&gt;:&lt;port&gt;</code>。</p><p>注：IP 为您的 Grafana 所在的服务器 IP，Port 为 Grafana 的运行端口（默认 3000）。</p><p>在本地试用时，Grafana dashboard 的默认地址为 <code>http://localhost:3000/</code>。</p><p>默认登录的用户名和密码都是 <code>admin</code>。</p><h4 id="添加-iotdb-数据源" tabindex="-1"><a class="header-anchor" href="#添加-iotdb-数据源"><span>添加 IoTDB 数据源</span></a></h4><p>点击左侧的 <code>设置</code> 图标，选择 <code>Data Source</code> 选项，然后再点击 <code>Add data source</code>。</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/datasource_1.png?raw=true"><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/datasource_2.png?raw=true"><p>选择 <code>Apache IoTDB</code> 数据源，<code>URL</code> 一栏填写 <code>http://&lt;ip&gt;:&lt;port&gt;</code>。</p><p>Ip 为您的 IoTDB 服务器所在的宿主机 IP，port 为 REST 服务的运行端口（默认 18080）。</p><p>输入 IoTDB 服务器的 username 和 password，点击 <code>Save &amp; Test</code>，出现 <code>Success</code> 则提示配置成功。</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/datasource_3.png?raw=true"><h4 id="创建一个新的-panel" tabindex="-1"><a class="header-anchor" href="#创建一个新的-panel"><span>创建一个新的 Panel</span></a></h4><p>点击左侧的 <code>Dashboards</code> 图标，选择 <code>Manage</code>，如下图所示：</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/manage.png?raw=true"><p>点击右上方的 <code>New Dashboard</code> 图标，选择 <code>Add an empty panel</code>，如下图所示：</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/add-empty-panel.png?raw=true"><p>Grafana Plugin 支持SQL: Full Customized和SQL: Drop-down List 两种方式，默认是SQL: Full Customized方式。</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/grafana_input_style.png?raw=true"><h5 id="sql-full-customized-输入方式" tabindex="-1"><a class="header-anchor" href="#sql-full-customized-输入方式"><span>SQL: Full Customized 输入方式</span></a></h5><p>在 SELECT 输入框、FROM 输入框、WHERE输入框、CONTROL输入框中输入内容，其中 WHERE 和 CONTROL 输入框为非必填。</p><p>如果一个查询涉及多个表达式，我们可以点击 SELECT 输入框右侧的 <code>+</code> 来添加 SELECT 子句中的表达式，也可以点击 FROM 输入框右侧的 <code>+</code> 来添加路径前缀，如下图所示：</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/grafana_input.png?raw=true"><p>SELECT 输入框中的内容可以是时间序列的后缀，可以是函数或自定义函数，可以是算数表达式，也可以是它们的嵌套表达式。您还可以使用 as 子句来重命名需要显示的结果序列名字。</p><p>下面是 SELECT 输入框中一些合法的输入举例：</p><ul><li><code>s1</code></li><li><code>top_k(s1, &#39;k&#39;=&#39;1&#39;) as top</code></li><li><code>sin(s1) + cos(s1 + s2)</code></li><li><code>udf(s1) as &quot;中文别名&quot;</code></li></ul><p>FROM 输入框中的内容必须是时间序列的前缀路径，比如 <code>root.sg.d</code>。</p><p>WHERE 输入框为非必须填写项目，填写内容应当是查询的过滤条件，比如 <code>time &gt; 0</code> 或者 <code>s1 &lt; 1024 and s2 &gt; 1024</code>。</p>`,81)),a("p",null,[e[2]||(e[2]=i("CONTROL 输入框为非必须填写项目，填写内容应当是控制查询类型、输出格式的特殊子句。其中GROUP BY 输入框支持使用grafana的全局变量来获取当前时间区间变化")),a("mjx-container",l,[(n(),t("svg",p,e[0]||(e[0]=[a("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[a("g",{"data-mml-node":"math"},[a("g",{"data-mml-node":"merror","data-mjx-error":"Missing open brace for subscript",title:"Missing open brace for subscript"},[a("rect",{"data-background":"true",width:"9800",height:"950",y:"-200"}),a("title",null,"Missing open brace for subscript"),a("g",{"data-mml-node":"mtext",style:{"font-family":"serif"}},[a("text",{"data-variant":"-explicitFont",transform:"scale(1,-1)","font-size":"884px"},"__from(起始时间)、")])])])],-1)]))),e[1]||(e[1]=a("mjx-assistive-mml",{unselectable:"on",display:"inline"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("merror",{"data-mjx-error":"Missing open brace for subscript",title:"Missing open brace for subscript"},[a("mtext",null,"__from(起始时间)、")])])],-1))]),e[3]||(e[3]=i("__to(结束时间)，下面是 CONTROL 输入框中一些合法的输入举例："))]),e[5]||(e[5]=s('<ul><li><code>GROUP BY ([$__from, $__to), 1d)</code></li><li><code>GROUP BY ([$__from, $__to),3h,1d)</code></li><li><code>GROUP BY ([2017-11-01T00:00:00, 2017-11-07T23:00:00), 1d)</code></li><li><code>GROUP BY ([2017-11-01 00:00:00, 2017-11-07 23:00:00), 3h, 1d)</code></li><li><code>GROUP BY ([$__from, $__to), 1m) FILL (PREVIOUSUNTILLAST)</code></li><li><code>GROUP BY ([2017-11-07T23:50:00, 2017-11-07T23:59:00), 1m) FILL (PREVIOUSUNTILLAST)</code></li><li><code>GROUP BY ([2017-11-07T23:50:00, 2017-11-07T23:59:00), 1m) FILL (PREVIOUS, 1m)</code></li><li><code>GROUP BY ([2017-11-07T23:50:00, 2017-11-07T23:59:00), 1m) FILL (LINEAR, 5m, 5m)</code></li><li><code>GROUP BY ((2017-11-01T00:00:00, 2017-11-07T23:00:00], 1d), LEVEL=1</code></li><li><code>GROUP BY ([0, 20), 2ms, 3ms), LEVEL=1</code></li></ul><p>提示：为了避免OOM问题，不推荐使用select * from root.xx.** 这种语句在Grafana plugin中使用。</p><h5 id="sql-drop-down-list-输入方式" tabindex="-1"><a class="header-anchor" href="#sql-drop-down-list-输入方式"><span>SQL: Drop-down List 输入方式</span></a></h5><p>在 TIME-SERIES 选择框中选择一条时间序列、FUNCTION 选择一个函数、SAMPLING INTERVAL、SLIDING STEP、LEVEL、FILL 输入框中输入内容，其中 TIME-SERIESL 为必填项其余为非必填项。</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/grafana_input2.png?raw=true"><h4 id="变量与模板功能的支持" tabindex="-1"><a class="header-anchor" href="#变量与模板功能的支持"><span>变量与模板功能的支持</span></a></h4><p>SQL: Full Customized和SQL: Drop-down List两种输入方式都支持 Grafana 的变量与模板功能，下面示例中使用SQL: Full Customized输入方式，SQL: Drop-down List与之类似。</p><p>创建一个新的 Panel 后，点击右上角的设置按钮，如下图所示：</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/setconf.png?raw=true"><p>选择 <code>Variables</code>，点击 <code>Add variable</code> ，如下图所示：</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/addvaribles.png?raw=true"><p>示例一：输入 <code>Name</code>，<code>Label</code>，选择Type的<code>Query</code>、在Query 中输入show child paths xx ， 点击 <code>Update</code> 按钮，如下图所示：</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/variblesinput.png?raw=true"><p>应用 Variables，在 <code>grafana panel</code> 中输入变量点击 <code>save</code> 按钮，如下图所示</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/applyvariables.png?raw=true"><p>示例二：变量嵌套使用，如下图所示<br><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/variblesinput2.png?raw=true"></p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/variblesinput2-1.png?raw=true"><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/variblesinput2-2.png?raw=true"><p>示例三：函数变量使用，如下图所示<br><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/variablesinput3.png?raw=true"></p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/variablesinput3-1.png?raw=true"><p>上图中Name 是变量名称也是将来我们在panel中使用的变量名称，Label是变量的展示名称如果为空就显示Name的变量反之则显示Label的名称，<br> Type下拉中有Query、Custom、Text box、Constant、DataSource、Interval、Ad hoc filters等这些都可以在IoTDB的Grafana Plugin 中使用<br> 更加详细介绍用法请查看官方手册(<a href="https://grafana.com/docs/grafana/latest/variables/" target="_blank" rel="noopener noreferrer">https://grafana.com/docs/grafana/latest/variables/</a>)</p><p>除了上面的示例外，还支持下面这些语句:</p><ul><li><p><code>show databases</code></p></li><li><p><code>show timeseries</code></p></li><li><p><code>show child nodes</code></p></li><li><p><code>show all ttl</code></p></li><li><p><code>show latest timeseries</code></p></li><li><p><code>show devices</code></p></li><li><p><code>select xx from root.xxx limit xx 等sql 查询</code></p></li><li><p>提示：如果查询的字段中有布尔类型的数据，会将true转化成1，false转化成0结果值进行显示。</p></li></ul><h4 id="告警功能" tabindex="-1"><a class="header-anchor" href="#告警功能"><span>告警功能</span></a></h4><p>本插件支持 Grafana alert功能。</p><p>1、在 Grafana 侧栏中，将光标悬停在<code>Alerting</code>图标上，然后单击<code>Notification channels</code>。</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/alerting1.png?raw=true"><p>2、单击添加频道。</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/alerting2.png?raw=true"><p>3、填写下面描述的字段或选择选项，Type有好多种类型包括DingDing、Email、Slack、WebHook、Prometheus Alertmanager等。<br> 本次示例Type使用<code>Prometheus Alertmanager</code>，需要提前安装好Prometheus Alertmanager，更多详细的配置及参数介绍请参考官方文档：<a href="https://grafana.com/docs/grafana/v8.0/alerting/old-alerting/notifications/%E3%80%82" target="_blank" rel="noopener noreferrer">https://grafana.com/docs/grafana/v8.0/alerting/old-alerting/notifications/。</a></p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/alerting3.png?raw=true"><p>4、点击<code>Test</code>按钮，出现<code>Test notification sent</code>点击<code>Save</code>按钮保存</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/alerting4.png?raw=true"><p>5、创建一个新的 Panel 后，输入查询参数后点击保存然后选择<code>Alert</code>点击<code>Create Alert</code>，如下图所示：</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/alertpanle1.png?raw=true"><p>6、填写下面描述的字段或选择选项， 其中<code>Name</code>是规则名称，<code>Evaluate every</code> 指定调度程序评估警报规则的频率，称为评估间隔，<br><code>FOR</code> 指定在触发警报通知之前查询需要在多长时间内违反配置的阈值。<code>Conditions</code> 表示查询条件，可以配置多个组合查询条件。</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/alertpanle2.jpg?raw=true"><p>图中的查询条件：avg() OF query(A,5m,now) IS ABOVE -1</p><p>avg()控制如何将每个系列的值减少到可以与阈值进行比较的值。单击该函数可将其更改为另一个聚合函数。<br> query(A, 15m, now)，表示从A选项卡执行查询，后两个参数定义时间范围15m，now 表示从15分钟前到现在。<br> IS ABOVE -1 定义阈值的类型和阈值。IS ABOVE表示在-1之上，可以单击IS ABOVE更改阈值类型。</p><p>提示:警报规则中使用的查询不能包含任何模板变量。目前我们只支持条件之间的AND和OR运算符，它们是串行执行的。<br> 例如，我们按以下顺序有 3 个条件： 条件：A（计算为：TRUE）或条件：B（计算为：FALSE）和条件：C（计算为：TRUE） 所以结果将计算为（（对或错）和对）=对。<br> 更多详细的告警规则可以查看官方文档:<a href="https://grafana.com/docs/grafana/latest/alerting/old-alerting/create-alerts/" target="_blank" rel="noopener noreferrer">https://grafana.com/docs/grafana/latest/alerting/old-alerting/create-alerts/</a></p><p>7、点击<code>Test rule</code> 按钮出现<code>firing: true</code>则配置成功，点击<code>save</code> 按钮</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/alertpanel3.png?raw=true"><p>8、下图为grafana panel 中显示告警</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/alertpanel4.png?raw=true"><p>9、查看告警规则</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/alertPanel5.png?raw=true"><p>10、在promehthus alertmanager 中查看告警记录</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/alertpanel6.png?raw=true"><h3 id="更多" tabindex="-1"><a class="header-anchor" href="#更多"><span>更多</span></a></h3><p>更多关于 Grafana 操作详情可参看 Grafana 官方文档：<a href="http://docs.grafana.org/guides/getting_started/%E3%80%82" target="_blank" rel="noopener noreferrer">http://docs.grafana.org/guides/getting_started/。</a></p>',50))])}const h=o(r,[["render",d],["__file","Grafana-Plugin.html.vue"]]),m=JSON.parse('{"path":"/zh/UserGuide/V1.0.x/Ecosystem-Integration/Grafana-Plugin.html","title":"系统集成","lang":"zh-CN","frontmatter":{"description":"系统集成 Grafana 插件 Grafana 是开源的指标量监测和可视化工具，可用于展示时序数据和应用程序运行分析。 在 IoTDB 项目中，我们开发了 Grafana 插件，该插件通过调用 IoTDB REST 服务来展现 IoTDB 中时序数据 ，提供了众多时序数据的可视化方法。Grafana 插件相较于 IoTDB-Grafana-Connec...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.0.x/Ecosystem-Integration/Grafana-Plugin.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/Ecosystem-Integration/Grafana-Plugin.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"系统集成"}],["meta",{"property":"og:description","content":"系统集成 Grafana 插件 Grafana 是开源的指标量监测和可视化工具，可用于展示时序数据和应用程序运行分析。 在 IoTDB 项目中，我们开发了 Grafana 插件，该插件通过调用 IoTDB REST 服务来展现 IoTDB 中时序数据 ，提供了众多时序数据的可视化方法。Grafana 插件相较于 IoTDB-Grafana-Connec..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"系统集成\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Grafana 插件","slug":"grafana-插件","link":"#grafana-插件","children":[{"level":3,"title":"部署 Grafana 插件","slug":"部署-grafana-插件","link":"#部署-grafana-插件","children":[]},{"level":3,"title":"使用 Grafana 插件","slug":"使用-grafana-插件","link":"#使用-grafana-插件","children":[]},{"level":3,"title":"更多","slug":"更多","link":"#更多","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","username":"CritasWang","email":"critas@outlook.com","commits":1,"url":"https://github.com/CritasWang"}]},"readingTime":{"minutes":11.53,"words":3459},"filePathRelative":"zh/UserGuide/V1.0.x/Ecosystem-Integration/Grafana-Plugin.md","localizedDate":"2023年7月10日","autoDesc":true}');export{h as comp,m as data};
