import{_ as e,c as t,b as i,o as n}from"./app-D8GMfgiK.js";const o={};function s(r,a){return n(),t("div",null,a[0]||(a[0]=[i(`<h1 id="grafana-plugin" tabindex="-1"><a class="header-anchor" href="#grafana-plugin"><span>Grafana Plugin</span></a></h1><p>Grafana is an open source volume metrics monitoring and visualization tool, which can be used to present time series data and analyze application runtime status.</p><p>We developed the Grafana-Plugin for IoTDB, using the IoTDB REST service to present time series data and providing many visualization methods for time series data.<br> Compared with previous IoTDB-Grafana-Connector, current Grafana-Plugin performs more efficiently and supports more query types. So, <strong>we recommend using Grafana-Plugin instead of IoTDB-Grafana-Connector</strong>.</p><h2 id="installation-and-deployment" tabindex="-1"><a class="header-anchor" href="#installation-and-deployment"><span>Installation and deployment</span></a></h2><h3 id="install-grafana" tabindex="-1"><a class="header-anchor" href="#install-grafana"><span>Install Grafana</span></a></h3><ul><li>Download url: <a href="https://grafana.com/grafana/download" target="_blank" rel="noopener noreferrer">https://grafana.com/grafana/download</a></li><li>Version &gt;= 9.3.0</li></ul><h3 id="acquisition-method-of-grafana-plugin" tabindex="-1"><a class="header-anchor" href="#acquisition-method-of-grafana-plugin"><span>Acquisition method of grafana plugin</span></a></h3><h4 id="download-apache-iotdb-datasource-from-grafana-s-official-website" tabindex="-1"><a class="header-anchor" href="#download-apache-iotdb-datasource-from-grafana-s-official-website"><span>Download apache-iotdb-datasource from Grafana&#39;s official website</span></a></h4><p>Download url：<a href="https://grafana.com/api/plugins/apache-iotdb-datasource/versions/1.0.0/download" target="_blank" rel="noopener noreferrer">https://grafana.com/api/plugins/apache-iotdb-datasource/versions/1.0.0/download</a></p><h3 id="install-grafana-plugin" tabindex="-1"><a class="header-anchor" href="#install-grafana-plugin"><span>Install Grafana-Plugin</span></a></h3><h3 id="method-1-install-using-the-grafana-cli-tool-recommended" tabindex="-1"><a class="header-anchor" href="#method-1-install-using-the-grafana-cli-tool-recommended"><span>Method 1: Install using the grafana cli tool (recommended)</span></a></h3><ul><li>Use the grafana cli tool to install apache-iotdb-datasource from the command line. The command content is as follows:</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">grafana-cli plugins <span class="token function">install</span> apache-iotdb-datasource</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="method-2-install-using-the-grafana-interface-recommended" tabindex="-1"><a class="header-anchor" href="#method-2-install-using-the-grafana-interface-recommended"><span>Method 2: Install using the Grafana interface (recommended)</span></a></h3><ul><li>Click on Configuration -&gt;Plugins -&gt;Search IoTDB from local Grafana to install the plugin</li></ul><h3 id="method-3-manually-install-the-grafana-plugin-plugin-not-recommended" tabindex="-1"><a class="header-anchor" href="#method-3-manually-install-the-grafana-plugin-plugin-not-recommended"><span>Method 3: Manually install the grafana-plugin plugin (not recommended)</span></a></h3><ul><li><p>Copy the front-end project target folder generated above to Grafana&#39;s plugin directory <code>\${Grafana directory}\\data\\plugins\\</code>。If there is no such directory, you can manually create it or start grafana and it will be created automatically. Of course, you can also modify the location of plugins. For details, please refer to the following instructions for modifying the location of Grafana&#39;s plugin directory.</p></li><li><p>Start Grafana (restart if the Grafana service is already started)</p></li></ul><p>For more details，please click <a href="https://grafana.com/docs/grafana/latest/plugins/installation/" target="_blank" rel="noopener noreferrer">here</a></p><h3 id="start-grafana" tabindex="-1"><a class="header-anchor" href="#start-grafana"><span>Start Grafana</span></a></h3><p>Start Grafana with the following command in the Grafana directory:</p><ul><li>Windows:</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">bin<span class="token punctuation">\\</span>grafana-server.exe</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>Linux:</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> <span class="token function">service</span> grafana-server start</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>MacOS:</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">brew services start grafana</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>For more details，please click <a href="https://grafana.com/docs/grafana/latest/installation/" target="_blank" rel="noopener noreferrer">here</a></p><h3 id="configure-iotdb-rest-service" tabindex="-1"><a class="header-anchor" href="#configure-iotdb-rest-service"><span>Configure IoTDB REST Service</span></a></h3><ul><li>Modify <code>{iotdb directory}/conf/iotdb-common.properties</code> as following:</li></ul><div class="language-properties line-numbers-mode" data-highlighter="prismjs" data-ext="properties" data-title="properties"><pre><code><span class="line"><span class="token comment"># Is the REST service enabled</span></span>
<span class="line"><span class="token key attr-name">enable_rest_service</span><span class="token punctuation">=</span><span class="token value attr-value">true</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># the binding port of the REST service</span></span>
<span class="line"><span class="token key attr-name">rest_service_port</span><span class="token punctuation">=</span><span class="token value attr-value">18080</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Start IoTDB (restart if the IoTDB service is already started)</p><h2 id="how-to-use-grafana-plugin" tabindex="-1"><a class="header-anchor" href="#how-to-use-grafana-plugin"><span>How to use Grafana-Plugin</span></a></h2><h3 id="access-grafana-dashboard" tabindex="-1"><a class="header-anchor" href="#access-grafana-dashboard"><span>Access Grafana dashboard</span></a></h3><p>Grafana displays data in a web page dashboard. Please open your browser and visit <code>http://&lt;ip&gt;:&lt;port&gt;</code> when using it.</p><ul><li><p>IP is the IP of the server where your Grafana is located, and Port is the running port of Grafana (default 3000).</p></li><li><p>The default login username and password are both <code>admin</code>.</p></li></ul><h3 id="add-iotdb-as-data-source" tabindex="-1"><a class="header-anchor" href="#add-iotdb-as-data-source"><span>Add IoTDB as Data Source</span></a></h3><p>Click the <code>Settings</code> icon on the left, select the <code>Data Source</code> option, and then click <code>Add data source</code>.</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/datasource_1.png?raw=true"><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/datasource_2.png?raw=true"><p>Select the <code>Apache IoTDB</code> data source.</p><ul><li>Fill in <code>http://&lt;ip&gt;:&lt;port&gt;</code> in the <code>URL</code> field <ul><li>ip is the host ip where your IoTDB server is located</li><li>port is the running port of the REST service (default 18080).</li></ul></li><li>Enter the username and password of the IoTDB server</li></ul><p>Click <code>Save &amp; Test</code>, and <code>Data source is working</code> will appear.</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/grafana9_datasource.png?raw=true"><h3 id="create-a-new-panel" tabindex="-1"><a class="header-anchor" href="#create-a-new-panel"><span>Create a new Panel</span></a></h3><p>Click the <code>Dashboards</code> icon on the left, and select <code>Manage</code> option.</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/manage.png?raw=true"><p>Click the <code>New Dashboard</code> icon on the top right, and select <code>Add an empty panel</code> option.</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/add-empty-panel.png?raw=true"><p>Grafana plugin supports SQL: Full Customized mode and SQL: Drop-down List mode, and the default mode is SQL: Full Customized mode.</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/grafana_input_style.png?raw=true"><h4 id="sql-full-customized-input-method" tabindex="-1"><a class="header-anchor" href="#sql-full-customized-input-method"><span>SQL: Full Customized input method</span></a></h4><p>Enter content in the SELECT, FROM , WHERE and CONTROL input box, where the WHERE and CONTROL input boxes are optional.</p><p>If a query involves multiple expressions, we can click <code>+</code> on the right side of the SELECT input box to add expressions in the SELECT clause, or click <code>+</code> on the right side of the FROM input box to add a path prefix:</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/grafana_input.png?raw=true"><p>SELECT input box: contents can be the time series suffix, function, udf, arithmetic expression, or nested expressions. You can also use the as clause to rename the result.</p><p>Here are some examples of valid SELECT content:</p><ul><li><code>s1</code></li><li><code>top_k(s1, &#39;k&#39;=&#39;1&#39;) as top</code></li><li><code>sin(s1) + cos(s1 + s2)</code></li><li><code>udf(s1) as &quot;alias&quot;</code></li></ul><p>FROM input box: contents must be the prefix path of the time series, such as <code>root.sg.d</code>.</p><p>WHERE input box: contents should be the filter condition of the query, such as <code>time &gt; 0</code> or <code>s1 &lt; 1024 and s2 &gt; 1024</code>.</p><p>CONTROL input box: contents should be a special clause that controls the query type and output format.<br> The GROUP BY input box supports the use of grafana&#39;s global variables to obtain the current time interval changes $__from (start time), $__to (end time)</p><p>Here are some examples of valid CONTROL content:</p><ul><li><code>GROUP BY ([$__from, $__to), 1d)</code></li><li><code>GROUP BY ([$__from, $__to),3h,1d)</code></li><li><code>GROUP BY ([2017-11-01T00:00:00, 2017-11-07T23:00:00), 1d)</code></li><li><code>GROUP BY ([2017-11-01 00:00:00, 2017-11-07 23:00:00), 3h, 1d)</code></li><li><code>GROUP BY ([$__from, $__to), 1m) FILL (PREVIOUSUNTILLAST)</code></li><li><code>GROUP BY ([2017-11-07T23:50:00, 2017-11-07T23:59:00), 1m) FILL (PREVIOUSUNTILLAST)</code></li><li><code>GROUP BY ([2017-11-07T23:50:00, 2017-11-07T23:59:00), 1m) FILL (PREVIOUS, 1m)</code></li><li><code>GROUP BY ([2017-11-07T23:50:00, 2017-11-07T23:59:00), 1m) FILL (LINEAR, 5m, 5m)</code></li><li><code>GROUP BY ((2017-11-01T00:00:00, 2017-11-07T23:00:00], 1d), LEVEL=1</code></li><li><code>GROUP BY ([0, 20), 2ms, 3ms), LEVEL=1</code></li></ul><p>Tip: Statements like <code>select * from root.xx.**</code> are not recommended because those statements may cause OOM.</p><h4 id="sql-drop-down-list" tabindex="-1"><a class="header-anchor" href="#sql-drop-down-list"><span>SQL: Drop-down List</span></a></h4><p>Select a time series in the TIME-SERIES selection box, select a function in the FUNCTION option, and enter the contents in the SAMPLING INTERVAL、SLIDING STEP、LEVEL、FILL input boxes, where TIME-SERIES is a required item and the rest are non required items.</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/grafana_input2.png?raw=true"><h3 id="support-for-variables-and-template-functions" tabindex="-1"><a class="header-anchor" href="#support-for-variables-and-template-functions"><span>Support for variables and template functions</span></a></h3><p>Both SQL: Full Customized and SQL: Drop-down List input methods support the variable and template functions of grafana. In the following example, raw input method is used, and aggregation is similar.</p><p>After creating a new Panel, click the Settings button in the upper right corner:</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/setconf.png?raw=true"><p>Select <code>Variables</code>, click <code>Add variable</code>:</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/addvaribles.png?raw=true"><p>Example 1：Enter <code>Name</code>, <code>Label</code>, and <code>Query</code>, and then click the <code>Update</code> button:</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/variblesinput.png?raw=true"><p>Apply Variables, enter the variable in the <code>grafana panel</code> and click the <code>save</code> button:</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/applyvariables.png?raw=true"><p>Example 2: Nested use of variables:</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/variblesinput2.png?raw=true"><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/variblesinput2-1.png?raw=true"><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/variblesinput2-2.png?raw=true"><p>Example 3: using function variables</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/variablesinput3.png?raw=true"><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/variablesinput3-1.png?raw=true"><p>The Name in the above figure is the variable name and the variable name we will use in the panel in the future. Label is the display name of the variable. If it is empty, the variable of Name will be displayed. Otherwise, the name of the Label will be displayed.<br> There are Query, Custom, Text box, Constant, DataSource, Interval, Ad hoc filters, etc. in the Type drop-down, all of which can be used in IoTDB&#39;s Grafana Plugin<br> For a more detailed introduction to usage, please check the official manual (<a href="https://grafana.com/docs/grafana/latest/variables/" target="_blank" rel="noopener noreferrer">https://grafana.com/docs/grafana/latest/variables/</a>)</p><p>In addition to the examples above, the following statements are supported:</p><ul><li><code>show databases</code></li><li><code>show timeseries</code></li><li><code>show child nodes</code></li><li><code>show all ttl</code></li><li><code>show latest timeseries</code></li><li><code>show devices</code></li><li><code>select xx from root.xxx limit xx 等sql 查询</code></li></ul><p>Tip: If the query field contains Boolean data, the result value will be converted to 1 by true and 0 by false.</p><h3 id="grafana-alert-function" tabindex="-1"><a class="header-anchor" href="#grafana-alert-function"><span>Grafana alert function</span></a></h3><p>This plugin supports Grafana alert function.</p><ol><li>In the Grafana panel, click the <code>alerting</code> button, as shown in the following figure:</li></ol><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/grafana9_alert1.png?raw=true"><ol start="2"><li>Click <code>Create alert rule from this panel</code>, as shown in the figure below:</li></ol><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/grafana9_alert2.png?raw=true"><ol start="3"><li>Set query and alarm conditions in step 1. Conditions represent query conditions, and multiple combined query conditions can be configured. As shown below:<br><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/grafana9_alert3.png?raw=true"></li></ol><p>The query condition in the figure: <code>min() OF A IS BELOW 0</code>, means that the condition will be triggered when the minimum value in the A tab is 0, click this function to change it to another function.</p><p>Tip: Queries used in alert rules cannot contain any template variables. Currently we only support AND and OR operators between conditions, which are executed serially.<br> For example, we have 3 conditions in the following order: Condition: B (Evaluates to: TRUE) OR Condition: C (Evaluates to: FALSE) and Condition: D (Evaluates to: TRUE) So the result will evaluate to ((True or False ) and right) = right.</p><ol start="4"><li>After selecting indicators and alarm rules, click the <code>Preview</code> button to preview the data as shown in the figure below:</li></ol><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/grafana9_alert4.png?raw=true"><ol start="5"><li>In step 2, specify the alert evaluation interval, and for <code>Evaluate every</code>, specify the evaluation frequency. Must be a multiple of 10 seconds. For example, 1m, 30s.<br> For <code>Evaluate for</code>, specify the duration before the alert fires. As shown below:</li></ol><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/grafana9_alert5.png?raw=true"><ol start="6"><li>In step 3, add the storage location, rule group, and other metadata associated with the rule. Where <code>Rule name</code> specifies the name of the rule. Rule names must be unique.</li></ol><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/grafana9_alert6.png?raw=true"><ol start="7"><li>In step 4, add a custom label. Add a custom label by selecting an existing key-value pair from the drop-down list, or add a new label by entering a new key or value. As shown below:</li></ol><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/grafana9_alert7.png?raw=true"><ol start="8"><li><p>Click <code>Save</code> to save the rule or click <code>Save and Exit</code> to save the rule and return to the alerts page.</p></li><li><p>Commonly used alarm states include <code>Normal</code>, <code>Pending</code>, <code>Firing</code> and other states, as shown in the figure below:</p></li></ol><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/grafana9_alert8.png?raw=true"><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/grafana9_alert9.png?raw=true"><ol start="10"><li>We can also configure <code>Contact points</code> for alarms to receive alarm notifications. For more detailed operations, please refer to the official document (<a href="https://grafana.com/docs/grafana/latest/alerting/alerting-rules/manage-contact-points/" target="_blank" rel="noopener noreferrer">https://grafana.com/docs/grafana/latest/alerting/alerting-rules/manage-contact-points/</a>)</li></ol><h2 id="more-details-about-grafana" tabindex="-1"><a class="header-anchor" href="#more-details-about-grafana"><span>More Details about Grafana</span></a></h2><p>For more details about Grafana operation, please refer to the official Grafana documentation: <a href="http://docs.grafana.org/guides/getting_started/" target="_blank" rel="noopener noreferrer">http://docs.grafana.org/guides/getting_started/</a></p>`,110)]))}const d=e(o,[["render",s],["__file","Grafana-Plugin.html.vue"]]),c=JSON.parse('{"path":"/UserGuide/V1.2.x/Ecosystem-Integration/Grafana-Plugin.html","title":"Grafana Plugin","lang":"en-US","frontmatter":{"description":"Grafana Plugin Grafana is an open source volume metrics monitoring and visualization tool, which can be used to present time series data and analyze application runtime status. ...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.2.x/Ecosystem-Integration/Grafana-Plugin.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.2.x/Ecosystem-Integration/Grafana-Plugin.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Grafana Plugin"}],["meta",{"property":"og:description","content":"Grafana Plugin Grafana is an open source volume metrics monitoring and visualization tool, which can be used to present time series data and analyze application runtime status. ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-12T04:20:54.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-12T04:20:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Grafana Plugin\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-12T04:20:54.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Installation and deployment","slug":"installation-and-deployment","link":"#installation-and-deployment","children":[{"level":3,"title":"Install Grafana","slug":"install-grafana","link":"#install-grafana","children":[]},{"level":3,"title":"Acquisition method of grafana plugin","slug":"acquisition-method-of-grafana-plugin","link":"#acquisition-method-of-grafana-plugin","children":[]},{"level":3,"title":"Install Grafana-Plugin","slug":"install-grafana-plugin","link":"#install-grafana-plugin","children":[]},{"level":3,"title":"Method 1: Install using the grafana cli tool (recommended)","slug":"method-1-install-using-the-grafana-cli-tool-recommended","link":"#method-1-install-using-the-grafana-cli-tool-recommended","children":[]},{"level":3,"title":"Method 2: Install using the Grafana interface (recommended)","slug":"method-2-install-using-the-grafana-interface-recommended","link":"#method-2-install-using-the-grafana-interface-recommended","children":[]},{"level":3,"title":"Method 3: Manually install the grafana-plugin plugin (not recommended)","slug":"method-3-manually-install-the-grafana-plugin-plugin-not-recommended","link":"#method-3-manually-install-the-grafana-plugin-plugin-not-recommended","children":[]},{"level":3,"title":"Start Grafana","slug":"start-grafana","link":"#start-grafana","children":[]},{"level":3,"title":"Configure IoTDB REST Service","slug":"configure-iotdb-rest-service","link":"#configure-iotdb-rest-service","children":[]}]},{"level":2,"title":"How to use Grafana-Plugin","slug":"how-to-use-grafana-plugin","link":"#how-to-use-grafana-plugin","children":[{"level":3,"title":"Access Grafana dashboard","slug":"access-grafana-dashboard","link":"#access-grafana-dashboard","children":[]},{"level":3,"title":"Add IoTDB as Data Source","slug":"add-iotdb-as-data-source","link":"#add-iotdb-as-data-source","children":[]},{"level":3,"title":"Create a new Panel","slug":"create-a-new-panel","link":"#create-a-new-panel","children":[]},{"level":3,"title":"Support for variables and template functions","slug":"support-for-variables-and-template-functions","link":"#support-for-variables-and-template-functions","children":[]},{"level":3,"title":"Grafana alert function","slug":"grafana-alert-function","link":"#grafana-alert-function","children":[]}]},{"level":2,"title":"More Details about Grafana","slug":"more-details-about-grafana","link":"#more-details-about-grafana","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1723436454000,"contributors":[{"name":"Caideyipi","email":"87789683+Caideyipi@users.noreply.github.com","commits":1},{"name":"CloudWise-Lukemiao","email":"76942485+CloudWise-Lukemiao@users.noreply.github.com","commits":1},{"name":"CritasWang","email":"critas@outlook.com","commits":1},{"name":"Lei","email":"33376433+LeiRui@users.noreply.github.com","commits":1},{"name":"W1y1r","email":"150988475+W1y1r@users.noreply.github.com","commits":1},{"name":"wanghui42","email":"105700158+wanghui42@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":7.7,"words":2310},"filePathRelative":"UserGuide/V1.2.x/Ecosystem-Integration/Grafana-Plugin.md","localizedDate":"July 10, 2023","autoDesc":true}');export{d as comp,c as data};
