import{_ as r,r as i,o,c as l,a as d,d as a,e as n,b as s,f as t}from"./app-F10OrnbD.js";const c={},p=t('<h1 id="grafana-连接器" tabindex="-1"><a class="header-anchor" href="#grafana-连接器" aria-hidden="true">#</a> Grafana 连接器</h1><p>Grafana 是开源的指标量监测和可视化工具，可用于展示时序数据和应用程序运行分析。Grafana 支持 Graphite，InfluxDB 等国际主流时序数据库作为数据源。在 IoTDB 项目中，我们开发了 Grafana 展现 IoTDB 中时序数据的连接器 IoTDB-Grafana-Connector，为您提供使用 Grafana 展示 IoTDB 数据库中的时序数据的可视化方法。</p><h2 id="grafana-的安装与部署" tabindex="-1"><a class="header-anchor" href="#grafana-的安装与部署" aria-hidden="true">#</a> Grafana 的安装与部署</h2><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3>',4),u={href:"https://grafana.com/grafana/download",target:"_blank",rel:"noopener noreferrer"},h=a("li",null,"版本 >= 4.4.1",-1),g=a("h3",{id:"simple-json-datasource-数据源插件安装",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#simple-json-datasource-数据源插件安装","aria-hidden":"true"},"#"),n(" simple-json-datasource 数据源插件安装")],-1),m=a("li",null,"插件名称: simple-json-datasource",-1),v={href:"https://github.com/grafana/simple-json-datasource",target:"_blank",rel:"noopener noreferrer"},f=t(`<h4 id="windows系统" tabindex="-1"><a class="header-anchor" href="#windows系统" aria-hidden="true">#</a> windows系统</h4><p>具体下载方法是：到Grafana的插件目录中：<code>{Grafana文件目录}\\data\\plugins\\</code>（Windows系统，启动Grafana后会自动创建<code>data\\plugins</code>目录）或<code>/var/lib/grafana/plugins</code> （Linux系统，plugins目录需要手动创建）或<code>/usr/local/var/lib/grafana/plugins</code>（MacOS系统，具体位置参看使用<code>brew install</code>安装Grafana后命令行给出的位置提示。</p><p>执行下面的命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Shell &gt; git clone https://github.com/grafana/simple-json-datasource.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="linux系统" tabindex="-1"><a class="header-anchor" href="#linux系统" aria-hidden="true">#</a> linux系统</h4><p>建议使用grafana-cli安装该插件，具体安装命令如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo grafana-cli plugins install grafana-simple-json-datasource
sudo service grafana-server restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="后续操作" tabindex="-1"><a class="header-anchor" href="#后续操作" aria-hidden="true">#</a> 后续操作</h4><p>然后重启Grafana服务器，在浏览器中登录Grafana，在“Add data source”页面中“Type”选项出现“SimpleJson”即为安装成功。</p><p>如果出现如下报错</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Unsigned plugins were found during plugin initialization. Grafana Labs cannot guarantee the integrity of these plugins. We recommend only using signed plugins.
The following plugins are disabled and not shown in the list below:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>请找到相关的grafana的配置文件（例如windows下的customer.ini，linux下rpm安装后为/etc/grafana/grafana.ini），并进行如下的配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>allow_loading_unsigned_plugins = &quot;grafana-simple-json-datasource&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="启动-grafana" tabindex="-1"><a class="header-anchor" href="#启动-grafana" aria-hidden="true">#</a> 启动 Grafana</h3><p>进入 Grafana 的安装目录，使用以下命令启动 Grafana：</p><ul><li>Windows 系统：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Shell &gt; bin\\grafana-server.exe
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Linux 系统：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Shell &gt; sudo service grafana-server start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>MacOS 系统：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Shell &gt; grafana-server --config=/usr/local/etc/grafana/grafana.ini --homepath /usr/local/share/grafana cfg:default.paths.logs=/usr/local/var/log/grafana cfg:default.paths.data=/usr/local/var/lib/grafana cfg:default.paths.plugins=/usr/local/var/lib/grafana/plugins
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,21),b={href:"https://grafana.com/docs/grafana/latest/installation/",target:"_blank",rel:"noopener noreferrer"},_=a("h2",{id:"iotdb-安装",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#iotdb-安装","aria-hidden":"true"},"#"),n(" IoTDB 安装")],-1),k={href:"https://github.com/apache/iotdb",target:"_blank",rel:"noopener noreferrer"},x=t(`<h2 id="grafana-iotdb-connector-连接器安装" tabindex="-1"><a class="header-anchor" href="#grafana-iotdb-connector-连接器安装" aria-hidden="true">#</a> Grafana-IoTDB-Connector 连接器安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/apache/iotdb.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="启动-grafana-iotdb-connector" tabindex="-1"><a class="header-anchor" href="#启动-grafana-iotdb-connector" aria-hidden="true">#</a> 启动 Grafana-IoTDB-Connector</h2><ul><li>方案一（适合开发者）</li></ul><p>导入整个项目，maven 依赖安装完后，直接运行<code>iotdb/grafana-connector/rc/main/java/org/apache/iotdb/web/grafana</code>目录下<code>TsfileWebDemoApplication.java</code>，这个 grafana 连接器采用 springboot 开发</p><ul><li>方案二（适合使用者）</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> iotdb
mvn clean package <span class="token parameter variable">-pl</span> iotdb-connector/grafana-connector <span class="token parameter variable">-am</span> <span class="token parameter variable">-Dmaven.test.skip</span><span class="token operator">=</span>true
<span class="token builtin class-name">cd</span> iotdb-connector/grafana-connector/target
<span class="token function">java</span> <span class="token parameter variable">-jar</span> iotdb-grafana-connector-<span class="token punctuation">{</span>version<span class="token punctuation">}</span>.war
  <span class="token builtin class-name">.</span>   ____          _            __ _ _
 /<span class="token punctuation">\\</span><span class="token punctuation">\\</span> / ___<span class="token string">&#39;_ __ _ _(_)_ __  __ _ \\ \\ \\ \\
( ( )\\___ | &#39;</span>_ <span class="token operator">|</span> <span class="token string">&#39;_| | &#39;</span>_ <span class="token punctuation">\\</span>/ _\` <span class="token operator">|</span> <span class="token punctuation">\\</span> <span class="token punctuation">\\</span> <span class="token punctuation">\\</span> <span class="token punctuation">\\</span>
 <span class="token punctuation">\\</span><span class="token punctuation">\\</span>/  ___<span class="token punctuation">)</span><span class="token operator">|</span> <span class="token operator">|</span>_<span class="token punctuation">)</span><span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">||</span> <span class="token punctuation">(</span>_<span class="token operator">|</span> <span class="token operator">|</span>  <span class="token punctuation">)</span> <span class="token punctuation">)</span> <span class="token punctuation">)</span> <span class="token punctuation">)</span>
  &#39;  <span class="token operator">|</span>____<span class="token operator">|</span> .__<span class="token operator">|</span>_<span class="token operator">|</span> <span class="token operator">|</span>_<span class="token operator">|</span>_<span class="token operator">|</span> <span class="token operator">|</span>_<span class="token punctuation">\\</span>__, <span class="token operator">|</span> / / / /
 <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span><span class="token operator">|</span>_<span class="token operator">|</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">|</span>___/<span class="token operator">=</span>/_/_/_/
 :: Spring Boot ::        <span class="token punctuation">(</span>v1.5.4.RELEASE<span class="token punctuation">)</span>
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果您需要配置属性，将<code>grafana/src/main/resources/application.properties</code>移动到 war 包同级目录下（<code>grafana/target</code>）</p><h2 id="使用-grafana" tabindex="-1"><a class="header-anchor" href="#使用-grafana" aria-hidden="true">#</a> 使用 Grafana</h2><p>Grafana 以网页的 dashboard 形式为您展示数据，在使用时请您打开浏览器，访问 http://&lt;ip&gt;:&lt;port&gt;</p>`,10),w={href:"http://localhost:3000/",target:"_blank",rel:"noopener noreferrer"},I=t('<p>注：IP 为您的 Grafana 所在的服务器 IP，Port 为 Grafana 的运行端口（默认 3000）。默认登录的用户名和密码都是“admin”。</p><h3 id="添加-iotdb-数据源" tabindex="-1"><a class="header-anchor" href="#添加-iotdb-数据源" aria-hidden="true">#</a> 添加 IoTDB 数据源</h3><p>点击左上角的“Grafana”图标，选择<code>Data Source</code>选项，然后再点击<code>Add data source</code>。<br><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/github/51664777-2766ae00-1ff5-11e9-9d2f-7489f8ccbfc2.png"></p><p>在编辑数据源的时候，<code>Type</code>一栏选择<code>Simplejson</code>，<code>URL</code>一栏填写 http://&lt;ip&gt;:&lt;port&gt;，IP 为您的 IoTDB-Grafana-Connector 连接器所在的服务器 IP，Port 为运行端口（默认 8888）。之后确保 IoTDB 已经启动，点击“Save &amp; Test”，出现“Data Source is working”提示表示配置成功。<br><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/github/51664842-554bf280-1ff5-11e9-97d2-54eebe0b2ca1.png"></p><h3 id="操作-grafana" tabindex="-1"><a class="header-anchor" href="#操作-grafana" aria-hidden="true">#</a> 操作 Grafana</h3>',5),T={href:"http://docs.grafana.org/guides/getting_started/%E3%80%82",target:"_blank",rel:"noopener noreferrer"},G=t(`<img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/github/51664878-6e54a380-1ff5-11e9-9718-4d0e24627fa8.png"><h2 id="配置-grafana" tabindex="-1"><a class="header-anchor" href="#配置-grafana" aria-hidden="true">#</a> 配置 grafana</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># IoTDB 的 IP 和端口
spring.datasource.url=jdbc:iotdb://127.0.0.1:6667/
spring.datasource.username=root
spring.datasource.password=root
spring.datasource.driver-class-name=org.apache.iotdb.jdbc.IoTDBDriver
server.port=8888
# Use this value to set timestamp precision as &quot;ms&quot;, &quot;us&quot; or &quot;ns&quot;, which must to be same with the timestamp
# precision of Apache IoTDB engine.
timestamp_precision=ms

# 是否开启降采样
isDownSampling=true
# 默认采样 interval
interval=1m
# 用于对连续数据 (int, long, float, double) 进行降采样的聚合函数
# COUNT, FIRST_VALUE, LAST_VALUE, MAX_TIME, MAX_VALUE, AVG, MIN_TIME, MIN_VALUE, NOW, SUM
continuous_data_function=AVG
# 用于对离散数据 (boolean, string) 进行降采样的聚合函数
# COUNT, FIRST_VALUE, LAST_VALUE, MAX_TIME, MIN_TIME, NOW
discrete_data_function=LAST_VALUE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中 interval 具体配置信息如下</p><p>&lt;1h: no sampling</p><p>1h~1d : intervals = 1m</p><p>1d~30d:intervals = 1h</p><p>&gt;30d：intervals = 1d</p><p>配置完后，请重新运行 war 包</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>java -jar iotdb-grafana-connector-{version}.war
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,10);function S(A,L){const e=i("ExternalLinkIcon");return o(),l("div",null,[d(`

    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at
    
        http://www.apache.org/licenses/LICENSE-2.0
    
    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.

`),p,a("ul",null,[a("li",null,[n("Grafana 组件下载地址："),a("a",u,[n("https://grafana.com/grafana/download"),s(e)])]),h]),g,a("ul",null,[m,a("li",null,[n("下载地址: "),a("a",v,[n("https://github.com/grafana/simple-json-datasource"),s(e)])])]),f,a("p",null,[n("更多安装详情，请点 "),a("a",b,[n("这里"),s(e)])]),_,a("p",null,[n("参见 "),a("a",k,[n("https://github.com/apache/iotdb"),s(e)])]),x,a("p",null,[n("默认地址为 "),a("a",w,[n("http://localhost:3000/"),s(e)])]),I,a("p",null,[n("进入 Grafana 可视化页面后，可以选择添加时间序列，如下图。您也可以按照 Grafana 官方文档进行相应的操作，详情可参看 Grafana 官方文档："),a("a",T,[n("http://docs.grafana.org/guides/getting_started/。"),s(e)])]),G])}const E=r(c,[["render",S],["__file","Grafana-Connector.html.vue"]]);export{E as default};
