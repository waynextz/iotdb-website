import{_ as a,c as t,b as i,o as n}from"./app-Y2-ILDda.js";const o={};function s(r,e){return n(),t("div",null,e[0]||(e[0]=[i(`<h2 id="grafana-plugin" tabindex="-1"><a class="header-anchor" href="#grafana-plugin"><span>Grafana-Plugin</span></a></h2><p>Grafana is an open source volume metrics monitoring and visualization tool, which can be used to present time series data and analyze application runtime status.</p><p>We developed the Grafana-Plugin for IoTDB, using the IoTDB REST service to present time series data and providing many visualization methods for time series data.<br> Compared with previous IoTDB-Grafana-Connector, current Grafana-Plugin performs more efficiently and supports more query types. So, <strong>we recommend using Grafana-Plugin instead of IoTDB-Grafana-Connector</strong>.</p><h3 id="installation-and-deployment" tabindex="-1"><a class="header-anchor" href="#installation-and-deployment"><span>Installation and deployment</span></a></h3><h4 id="install-grafana" tabindex="-1"><a class="header-anchor" href="#install-grafana"><span>Install Grafana</span></a></h4><ul><li>Download url: <a href="https://grafana.com/grafana/download" target="_blank" rel="noopener noreferrer">https://grafana.com/grafana/download</a></li><li>Version &gt;= 7.0.0</li></ul><h4 id="acquisition-method-of-grafana-plugin" tabindex="-1"><a class="header-anchor" href="#acquisition-method-of-grafana-plugin"><span>Acquisition method of grafana plugin</span></a></h4><h5 id="method-1-grafana-plugin-binary-download" tabindex="-1"><a class="header-anchor" href="#method-1-grafana-plugin-binary-download"><span>Method 1: grafana plugin binary Download</span></a></h5><p>Download url：<a href="https://iotdb.apache.org/zh/Download/" target="_blank" rel="noopener noreferrer">https://iotdb.apache.org/zh/Download/</a></p><h5 id="method-2-separate-compilation-of-grafana-plugin" tabindex="-1"><a class="header-anchor" href="#method-2-separate-compilation-of-grafana-plugin"><span>Method 2: separate compilation of grafana plugin</span></a></h5><p>We need to compile the front-end project in the IoTDB <code>grafana-plugin</code> directory and then generate the <code>dist</code> directory. The specific execution process is as follows.</p><p>Source download</p><ul><li>Plugin name: grafana-plugin</li><li>Download url: <a href="https://github.com/apache/iotdb.git" target="_blank" rel="noopener noreferrer">https://github.com/apache/iotdb.git</a></li></ul><p>Execute the following command:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">git</span> clone https://github.com/apache/iotdb.git</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>Option 1 (compile with maven): execute following command in the <code>grafana-plugin</code> directory:</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">mvn <span class="token function">install</span> package <span class="token parameter variable">-P</span> compile-grafana-plugin</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>Option 2 (compile with yarn): execute following command in the <code>grafana-plugin</code> directory:</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">yarn</span> <span class="token function">install</span></span>
<span class="line"><span class="token function">yarn</span> build</span>
<span class="line">go get <span class="token parameter variable">-u</span> github.com/grafana/grafana-plugin-sdk-go</span>
<span class="line">go mod tidy</span>
<span class="line">mage <span class="token parameter variable">-v</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When using the go get -u command, the following error may be reported. In this case, we need to execute <code>go env -w GOPROXY=https://goproxy.cn</code>, and then execute <code>go get -u github.com/grafana/grafana -plugin-sdk-go</code></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">go get: module github.com/grafana/grafana-plugin-sdk-go: Get &quot;https://proxy.golang.org/github.com/grafana/grafana-plugin-sdk-go/@v/list&quot;: dial tcp 142.251.42.241:443: i/o timeout</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>If compiling successful, you can see the <code>dist</code> directory , which contains the compiled Grafana-Plugin:</p><img style="width:100%;max-width:333px;max-height:545px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/grafana-plugin-build.png?raw=true"><h5 id="method-3-the-distribution-package-of-iotdb-is-fully-compiled" tabindex="-1"><a class="header-anchor" href="#method-3-the-distribution-package-of-iotdb-is-fully-compiled"><span>Method 3: The distribution package of IoTDB is fully compiled</span></a></h5><p>We can also obtain the front-end project of <code>grafana-plugin</code> and other IoTDB executable files by executing the <strong>package instruction</strong> of the IoTDB project.</p><p>Execute following command in the IoTDB root directory:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"> mvn clean package <span class="token parameter variable">-pl</span> distribution <span class="token parameter variable">-am</span> <span class="token parameter variable">-DskipTests</span> <span class="token parameter variable">-P</span> compile-grafana-plugin</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>If compiling successful, you can see that the <code>distribution/target</code> directory contains the compiled Grafana-Plugin:</p><img style="width:100%;max-width:333px;max-height:545px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/distribution.png?raw=true"><h4 id="install-grafana-plugin" tabindex="-1"><a class="header-anchor" href="#install-grafana-plugin"><span>Install Grafana-Plugin</span></a></h4><ul><li><p>Copy the front-end project target folder generated above to Grafana&#39;s plugin directory <code>\${Grafana directory}\\data\\plugins\\</code>。If there is no such directory, you can manually create it or start grafana and it will be created automatically. Of course, you can also modify the location of plugins. For details, please refer to the following instructions for modifying the location of Grafana&#39;s plugin directory.</p></li><li><p>Modify Grafana configuration file: the file is in（<code>\${Grafana directory}\\conf\\defaults.ini</code>）, and do the following modifications:</p><div class="language-ini line-numbers-mode" data-highlighter="prismjs" data-ext="ini" data-title="ini"><pre><code><span class="line"><span class="token key attr-name">allow_loading_unsigned_plugins</span> <span class="token punctuation">=</span> <span class="token value attr-value">apache-iotdb-datasource</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>Modify the location of Grafana&#39;s plugin directory: the file is in（<code>\${Grafana directory}\\conf\\defaults.ini</code>）, and do the following modifications:</p><div class="language-ini line-numbers-mode" data-highlighter="prismjs" data-ext="ini" data-title="ini"><pre><code><span class="line"><span class="token key attr-name">plugins</span> <span class="token punctuation">=</span> <span class="token value attr-value">data/plugins</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>Start Grafana (restart if the Grafana service is already started)</p></li></ul><p>For more details，please click <a href="https://grafana.com/docs/grafana/latest/plugins/installation/" target="_blank" rel="noopener noreferrer">here</a></p><h4 id="start-grafana" tabindex="-1"><a class="header-anchor" href="#start-grafana"><span>Start Grafana</span></a></h4><p>Start Grafana with the following command in the Grafana directory:</p><ul><li>Windows:</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">bin<span class="token punctuation">\\</span>grafana-server.exe</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>Linux:</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> <span class="token function">service</span> grafana-server start</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>MacOS:</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">brew services start grafana</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>For more details，please click <a href="https://grafana.com/docs/grafana/latest/installation/" target="_blank" rel="noopener noreferrer">here</a></p><h4 id="configure-iotdb-rest-service" tabindex="-1"><a class="header-anchor" href="#configure-iotdb-rest-service"><span>Configure IoTDB REST Service</span></a></h4><ul><li>Modify <code>{iotdb directory}/conf/iotdb-common.properties</code> as following:</li></ul><div class="language-properties line-numbers-mode" data-highlighter="prismjs" data-ext="properties" data-title="properties"><pre><code><span class="line"><span class="token comment"># Is the REST service enabled</span></span>
<span class="line"><span class="token key attr-name">enable_rest_service</span><span class="token punctuation">=</span><span class="token value attr-value">true</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># the binding port of the REST service</span></span>
<span class="line"><span class="token key attr-name">rest_service_port</span><span class="token punctuation">=</span><span class="token value attr-value">18080</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Start IoTDB (restart if the IoTDB service is already started)</p><h3 id="how-to-use-grafana-plugin" tabindex="-1"><a class="header-anchor" href="#how-to-use-grafana-plugin"><span>How to use Grafana-Plugin</span></a></h3><h4 id="access-grafana-dashboard" tabindex="-1"><a class="header-anchor" href="#access-grafana-dashboard"><span>Access Grafana dashboard</span></a></h4><p>Grafana displays data in a web page dashboard. Please open your browser and visit <code>http://&lt;ip&gt;:&lt;port&gt;</code> when using it.</p><ul><li><p>IP is the IP of the server where your Grafana is located, and Port is the running port of Grafana (default 3000).</p></li><li><p>The default login username and password are both <code>admin</code>.</p></li></ul><h4 id="add-iotdb-as-data-source" tabindex="-1"><a class="header-anchor" href="#add-iotdb-as-data-source"><span>Add IoTDB as Data Source</span></a></h4><p>Click the <code>Settings</code> icon on the left, select the <code>Data Source</code> option, and then click <code>Add data source</code>.</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/datasource_1.png?raw=true"><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/datasource_2.png?raw=true"><p>Select the <code>Apache IoTDB</code> data source.</p><ul><li>Fill in <code>http://&lt;ip&gt;:&lt;port&gt;</code> in the <code>URL</code> field <ul><li>ip is the host ip where your IoTDB server is located</li><li>port is the running port of the REST service (default 18080).</li></ul></li><li>Enter the username and password of the IoTDB server</li></ul><p>Click <code>Save &amp; Test</code>, and <code>Success</code> will appear.</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/datasource_3.png?raw=true"><h4 id="create-a-new-panel" tabindex="-1"><a class="header-anchor" href="#create-a-new-panel"><span>Create a new Panel</span></a></h4><p>Click the <code>Dashboards</code> icon on the left, and select <code>Manage</code> option.</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/manage.png?raw=true"><p>Click the <code>New Dashboard</code> icon on the top right, and select <code>Add an empty panel</code> option.</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/add-empty-panel.png?raw=true"><p>Grafana plugin supports SQL: Full Customized mode and SQL: Drop-down List mode, and the default mode is SQL: Full Customized mode.</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/grafana_input_style.png?raw=true"><h5 id="sql-full-customized-input-method" tabindex="-1"><a class="header-anchor" href="#sql-full-customized-input-method"><span>SQL: Full Customized input method</span></a></h5><p>Enter content in the SELECT, FROM , WHERE and CONTROL input box, where the WHERE and CONTROL input boxes are optional.</p><p>If a query involves multiple expressions, we can click <code>+</code> on the right side of the SELECT input box to add expressions in the SELECT clause, or click <code>+</code> on the right side of the FROM input box to add a path prefix:</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/grafana_input.png?raw=true"><p>SELECT input box: contents can be the time series suffix, function, udf, arithmetic expression, or nested expressions. You can also use the as clause to rename the result.</p><p>Here are some examples of valid SELECT content:</p><ul><li><code>s1</code></li><li><code>top_k(s1, &#39;k&#39;=&#39;1&#39;) as top</code></li><li><code>sin(s1) + cos(s1 + s2)</code></li><li><code>udf(s1) as &quot;alias&quot;</code></li></ul><p>FROM input box: contents must be the prefix path of the time series, such as <code>root.sg.d</code>.</p><p>WHERE input box: contents should be the filter condition of the query, such as <code>time &gt; 0</code> or <code>s1 &lt; 1024 and s2 &gt; 1024</code>.</p><p>CONTROL input box: contents should be a special clause that controls the query type and output format.<br> The GROUP BY input box supports the use of grafana&#39;s global variables to obtain the current time interval changes $__from (start time), $__to (end time)</p><p>Here are some examples of valid CONTROL content:</p><ul><li><code>GROUP BY ([$__from, $__to), 1d)</code></li><li><code>GROUP BY ([$__from, $__to),3h,1d)</code></li><li><code>GROUP BY ([2017-11-01T00:00:00, 2017-11-07T23:00:00), 1d)</code></li><li><code>GROUP BY ([2017-11-01 00:00:00, 2017-11-07 23:00:00), 3h, 1d)</code></li><li><code>GROUP BY ([$__from, $__to), 1m) FILL (PREVIOUSUNTILLAST)</code></li><li><code>GROUP BY ([2017-11-07T23:50:00, 2017-11-07T23:59:00), 1m) FILL (PREVIOUSUNTILLAST)</code></li><li><code>GROUP BY ([2017-11-07T23:50:00, 2017-11-07T23:59:00), 1m) FILL (PREVIOUS, 1m)</code></li><li><code>GROUP BY ([2017-11-07T23:50:00, 2017-11-07T23:59:00), 1m) FILL (LINEAR, 5m, 5m)</code></li><li><code>GROUP BY ((2017-11-01T00:00:00, 2017-11-07T23:00:00], 1d), LEVEL=1</code></li><li><code>GROUP BY ([0, 20), 2ms, 3ms), LEVEL=1</code></li></ul><p>Tip: Statements like <code>select * from root.xx.**</code> are not recommended because those statements may cause OOM.</p><h5 id="sql-drop-down-list" tabindex="-1"><a class="header-anchor" href="#sql-drop-down-list"><span>SQL: Drop-down List</span></a></h5><p>Select a time series in the TIME-SERIES selection box, select a function in the FUNCTION option, and enter the contents in the SAMPLING INTERVAL、SLIDING STEP、LEVEL、FILL input boxes, where TIME-SERIES is a required item and the rest are non required items.</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/grafana_input2.png?raw=true"><h4 id="support-for-variables-and-template-functions" tabindex="-1"><a class="header-anchor" href="#support-for-variables-and-template-functions"><span>Support for variables and template functions</span></a></h4><p>Both SQL: Full Customized and SQL: Drop-down List input methods support the variable and template functions of grafana. In the following example, raw input method is used, and aggregation is similar.</p><p>After creating a new Panel, click the Settings button in the upper right corner:</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/setconf.png?raw=true"><p>Select <code>Variables</code>, click <code>Add variable</code>:</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/addvaribles.png?raw=true"><p>Example 1：Enter <code>Name</code>, <code>Label</code>, and <code>Query</code>, and then click the <code>Update</code> button:</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/variblesinput.png?raw=true"><p>Apply Variables, enter the variable in the <code>grafana panel</code> and click the <code>save</code> button:</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/applyvariables.png?raw=true"><p>Example 2: Nested use of variables:</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/variblesinput2.png?raw=true"><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/variblesinput2-1.png?raw=true"><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/variblesinput2-2.png?raw=true"><p>Example 3: using function variables</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/variablesinput3.png?raw=true"><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/variablesinput3-1.png?raw=true"><p>The Name in the above figure is the variable name and the variable name we will use in the panel in the future. Label is the display name of the variable. If it is empty, the variable of Name will be displayed. Otherwise, the name of the Label will be displayed.<br> There are Query, Custom, Text box, Constant, DataSource, Interval, Ad hoc filters, etc. in the Type drop-down, all of which can be used in IoTDB&#39;s Grafana Plugin<br> For a more detailed introduction to usage, please check the official manual (<a href="https://grafana.com/docs/grafana/latest/variables/" target="_blank" rel="noopener noreferrer">https://grafana.com/docs/grafana/latest/variables/</a>)</p><p>In addition to the examples above, the following statements are supported:</p><ul><li><code>show databases</code></li><li><code>show timeseries</code></li><li><code>show child nodes</code></li><li><code>show all ttl</code></li><li><code>show latest timeseries</code></li><li><code>show devices</code></li><li><code>select xx from root.xxx limit xx 等sql 查询</code></li></ul><p>Tip: If the query field contains Boolean data, the result value will be converted to 1 by true and 0 by false.</p><h4 id="grafana-alert-function" tabindex="-1"><a class="header-anchor" href="#grafana-alert-function"><span>Grafana alert function</span></a></h4><p>This plugin supports Grafana alert function.</p><ol><li>In the Grafana sidebar, hover over the <code>Alerting</code> icon and click <code>Notification channels</code>.</li></ol><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/alerting1.png?raw=true"><ol start="2"><li>Click Add Channel.</li></ol><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/alerting2.png?raw=true"><ol start="3"><li>Fill in the fields described below or select options. There are many types of Type, including DingDing, Email, Slack, WebHook, Prometheus Alertmanager, etc.<br> This sample Type uses <code>Prometheus Alertmanager</code>. Prometheus Alertmanager needs to be installed in advance. For more detailed configuration and parameter introduction, please refer to the official documentation: <a href="https://grafana.com/docs/grafana/v8.0/alerting/old-" target="_blank" rel="noopener noreferrer">https://grafana.com/docs/grafana/v8.0/alerting/old-</a> alerting/notifications/.</li></ol><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/alerting3.png?raw=true"><ol start="4"><li>Click the <code>Test</code> button, the <code>Test notification sent</code> appears, click the <code>Save</code> button to save</li></ol><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/alerting4.png?raw=true"><ol start="5"><li>After creating a new Panel, enter the query parameters and click Save, then select <code>Alert</code> and click <code>Create Alert</code>, as shown in the following figure:</li></ol><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/alertpanle1.png?raw=true"><p>6、Fill out the fields described below or select an option， <code>Name</code>- Enter a descriptive name. The name will be displayed in the Alert Rules list. This field supports templating.<br><code>Evaluate every</code> - Specify how often the scheduler should evaluate the alert rule. This is referred to as the evaluation interval.<br><code>For</code> - Specify how long the query needs to violate the configured thresholds before the alert notification triggers.。<code>Conditions</code>- Represents query criteria. Multiple combined query criteria can be configured.</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/alertpanle2.jpg?raw=true"><p>Query conditions in the figure：avg() OF query(A,5m,now) IS ABOVE -1</p><p>avg() Controls how the values for each series should be reduced to a value that can be compared against the threshold. Click on the function to change it to another aggregation function<br> query(A, 15m, now) The letter defines what query to execute from the Metrics tab. The second two parameters define the time range, 15m, now means 15 minutes ago to now. You can also do 10m<br> IS ABOVE -1 Defines the type of threshold and the threshold value. You can click on IS ABOVE to change the type of threshold</p><p>Tips:The query used in an alert rule cannot contain any template variables. Currently we only support AND and OR operators between conditions and they are executed serially.</p><p>For example, we have 3 conditions in the following order: condition:A(evaluates to: TRUE) OR condition:B(evaluates to: FALSE) AND condition:C(evaluates to: TRUE) so the result will be calculated as ((TRUE OR FALSE) AND TRUE) = TRUE.</p><p>More details can be found in the official documents:<a href="https://grafana.com/docs/grafana/latest/alerting/old-alerting/create-alerts/" target="_blank" rel="noopener noreferrer">https://grafana.com/docs/grafana/latest/alerting/old-alerting/create-alerts/</a></p><p>7、Click the <code>Test rule</code> button and the <code>firing: true</code> appears, the configuration is successful, click the <code>save</code> button</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/alertpanel3.png?raw=true"><p>8、The following figure shows the alarm displayed in the grafana panel</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/alertpanel4.png?raw=true"><p>9、View alert rules</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/alertPanel5.png?raw=true"><p>10、View alert records in promehthus alertmanager</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/alertpanel6.png?raw=true"><h3 id="more-details-about-grafana" tabindex="-1"><a class="header-anchor" href="#more-details-about-grafana"><span>More Details about Grafana</span></a></h3><p>For more details about Grafana operation, please refer to the official Grafana documentation: <a href="http://docs.grafana.org/guides/getting_started/" target="_blank" rel="noopener noreferrer">http://docs.grafana.org/guides/getting_started/</a>.</p>`,130)]))}const d=a(o,[["render",s],["__file","Grafana-Plugin.html.vue"]]),c=JSON.parse('{"path":"/UserGuide/V1.0.x/Ecosystem-Integration/Grafana-Plugin.html","title":"","lang":"en-US","frontmatter":{"description":"Grafana-Plugin Grafana is an open source volume metrics monitoring and visualization tool, which can be used to present time series data and analyze application runtime status. ...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/Ecosystem-Integration/Grafana-Plugin.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.0.x/Ecosystem-Integration/Grafana-Plugin.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"Grafana-Plugin Grafana is an open source volume metrics monitoring and visualization tool, which can be used to present time series data and analyze application runtime status. ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Grafana-Plugin","slug":"grafana-plugin","link":"#grafana-plugin","children":[{"level":3,"title":"Installation and deployment","slug":"installation-and-deployment","link":"#installation-and-deployment","children":[]},{"level":3,"title":"How to use Grafana-Plugin","slug":"how-to-use-grafana-plugin","link":"#how-to-use-grafana-plugin","children":[]},{"level":3,"title":"More Details about Grafana","slug":"more-details-about-grafana","link":"#more-details-about-grafana","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":8.96,"words":2689},"filePathRelative":"UserGuide/V1.0.x/Ecosystem-Integration/Grafana-Plugin.md","localizedDate":"July 10, 2023","autoDesc":true}');export{d as comp,c as data};
