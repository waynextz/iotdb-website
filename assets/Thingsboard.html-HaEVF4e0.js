import{_ as o,c as i,b as a,d as e,e as t,a as l,f as r,r as p,o as c}from"./app-CNiZnG3t.js";const d={},h={style:{"text-align":"left"}};function g(m,s){const n=p("RouteLink");return c(),i("div",null,[s[6]||(s[6]=a('<h1 id="thingsboard" tabindex="-1"><a class="header-anchor" href="#thingsboard"><span>ThingsBoard</span></a></h1><h2 id="product-overview" tabindex="-1"><a class="header-anchor" href="#product-overview"><span>Product Overview</span></a></h2><ol><li>Introduction to ThingsBoard</li></ol><p>ThingsBoard is an open-source IoT platform that enables rapid development, management, and expansion of IoT projects. For more detailed information, please refer to <a href="https://thingsboard.io/docs/getting-started-guides/what-is-thingsboard/" target="_blank" rel="noopener noreferrer">ThingsBoard Official Website</a>.</p><figure><img src="https://alioss.timecho.com/docs/img/ThingsBoard-en1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol><li>Introduction to ThingsBoard-IoTDB</li></ol><p>ThingsBoard IoTDB provides the ability to store data from ThingsBoard to IoTDB, and also supports reading data information from the <code>root.thingsboard</code> database in ThingsBoard. The detailed architecture diagram is shown in yellow in the following figure.</p><h3 id="relationship-diagram" tabindex="-1"><a class="header-anchor" href="#relationship-diagram"><span>Relationship Diagram</span></a></h3><figure><img src="https://alioss.timecho.com/docs/img/Thingsboard-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="installation-requirements" tabindex="-1"><a class="header-anchor" href="#installation-requirements"><span>Installation Requirements</span></a></h2>',10)),e("table",null,[s[5]||(s[5]=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},[e("strong",null,"Preparation Content")]),e("th",{style:{"text-align":"left"}},[e("strong",null,"Version Requirements")])])],-1)),e("tbody",null,[s[3]||(s[3]=e("tr",null,[e("td",{style:{"text-align":"left"}},"JDK"),e("td",{style:{"text-align":"left"}},[t("JDK17 or above. Please refer to the downloads on "),e("a",{href:"https://www.oracle.com/java/technologies/downloads/",target:"_blank",rel:"noopener noreferrer"},"Oracle Official Website")])],-1)),e("tr",null,[s[2]||(s[2]=e("td",{style:{"text-align":"left"}},"IoTDB",-1)),e("td",h,[s[1]||(s[1]=t("IoTDB v1.3.0 or above. Please refer to the ")),l(n,{to:"/UserGuide/latest/Deployment-and-Maintenance/IoTDB-Package.html"},{default:r(()=>s[0]||(s[0]=[t("Deployment guidance")])),_:1})])]),s[4]||(s[4]=e("tr",null,[e("td",{style:{"text-align":"left"}},[t("ThingsBoard"),e("br"),t(" (IoTDB adapted version)")]),e("td",{style:{"text-align":"left"}},"Please contact Timecho staff to obtain the installation package. Detailed installation steps are provided below.")],-1))])]),s[7]||(s[7]=a(`<h2 id="installation-steps" tabindex="-1"><a class="header-anchor" href="#installation-steps"><span>Installation Steps</span></a></h2><p>Please refer to the installation steps on <a href="https://thingsboard.io/docs/user-guide/install/ubuntu/" target="_blank" rel="noopener noreferrer">ThingsBoard Official Website</a>,wherein:</p><ul><li><a href="https://thingsboard.io/docs/user-guide/install/ubuntu/" target="_blank" rel="noopener noreferrer">ThingsBoard Official Website</a>【 Step 2: ThingsBoard Service Installation 】 Use the installation package provided by your Timecho contact to install the software. Please note that the official ThingsBoard installation package does not support IoTDB.</li><li><a href="https://thingsboard.io/docs/user-guide/install/ubuntu/" target="_blank" rel="noopener noreferrer">ThingsBoard Official Website</a> 【Step 3: Configure ThingsBoard Database - ThingsBoard Configuration】 In this step, you need to add environment variables according to the following content</li></ul><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># ThingsBoard original configuration</span></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#E06C75;"> SPRING_DATASOURCE_URL</span><span style="color:#56B6C2;">=</span><span style="color:#E06C75;">jdbc</span><span style="color:#ABB2BF;">:</span><span style="color:#E06C75;">postgresql</span><span style="color:#ABB2BF;">://</span><span style="color:#E06C75;">localhost</span><span style="color:#ABB2BF;">:</span><span style="color:#E06C75;">5432</span><span style="color:#ABB2BF;">/</span><span style="color:#E06C75;">thingsboard</span></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#E06C75;"> SPRING_DATASOURCE_USERNAME</span><span style="color:#56B6C2;">=</span><span style="color:#E06C75;">postgres</span></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#E06C75;"> SPRING_DATASOURCE_PASSWORD</span><span style="color:#56B6C2;">=</span><span style="color:#E06C75;">PUT_YOUR_POSTGRESQL_PASSWORD_HERE</span><span style="color:#7F848E;font-style:italic;"> ##Change password to pg</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># To use IoTDB, the following variables need to be modified</span></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#E06C75;"> DATABASE_TS_TYPE</span><span style="color:#56B6C2;">=</span><span style="color:#E06C75;">iotdb</span><span style="color:#7F848E;font-style:italic;">  ## Originally configured as SQL, change the variable value to iotdb</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># To use IoTDB, the following variables need to be added</span></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#E06C75;"> DATABASE_TS_LATEST_TYPE</span><span style="color:#56B6C2;">=</span><span style="color:#E06C75;">iotdb</span></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#E06C75;"> IoTDB_HOST</span><span style="color:#56B6C2;">=</span><span style="color:#D19A66;">127.0.0.1</span><span style="color:#7F848E;font-style:italic;">  ## The IP address where iotdb is located</span></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#E06C75;"> IoTDB_PORT</span><span style="color:#56B6C2;">=</span><span style="color:#D19A66;">6667</span><span style="color:#7F848E;font-style:italic;">       ## The port number for iotdb is 6667 by default</span></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#E06C75;"> IoTDB_USER</span><span style="color:#56B6C2;">=</span><span style="color:#E06C75;">root</span><span style="color:#7F848E;font-style:italic;">       ## The username for iotdb,defaults as root</span></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#E06C75;"> IoTDB_PASSWORD</span><span style="color:#56B6C2;">=</span><span style="color:#E06C75;">root</span><span style="color:#7F848E;font-style:italic;">   ## The password for iotdb,default as root</span></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#E06C75;"> IoTDB_CONNECTION_TIMEOUT</span><span style="color:#56B6C2;">=</span><span style="color:#D19A66;">5000</span><span style="color:#7F848E;font-style:italic;">   ## IoTDB timeout setting</span></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#E06C75;"> IoTDB_FETCH_SIZE</span><span style="color:#56B6C2;">=</span><span style="color:#D19A66;">1024</span><span style="color:#7F848E;font-style:italic;">   ## The number of data pulled in a single request is recommended to be set to 1024</span></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#E06C75;"> IoTDB_MAX_SIZE</span><span style="color:#56B6C2;">=</span><span style="color:#D19A66;">200</span><span style="color:#7F848E;font-style:italic;">      ## The maximum number of sessions in the session pool is recommended to be set to&gt;=concurrent requests</span></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#E06C75;"> IoTDB_DATABASE</span><span style="color:#56B6C2;">=</span><span style="color:#E06C75;">root</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">thingsboard</span><span style="color:#7F848E;font-style:italic;">  ## Thingsboard data is written to the database stored in IoTDB, supporting customization</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="instructions" tabindex="-1"><a class="header-anchor" href="#instructions"><span>Instructions</span></a></h2><ol><li>Set up devices and connect datasource: Add a new device under &quot;Entities&quot; - &quot;Devices&quot; in Thingsboard and send data to the specified devices through gateway.</li></ol><figure><img src="https://alioss.timecho.com/docs/img/Thingsboard-en2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>Set rule chain: Set alarm rules for &quot;SD-032F pump&quot; in the rule chain library and set the rule chain as the root chain</li></ol><div style="display:flex;justify-content:space-between;"><img src="https://alioss.timecho.com/docs/img/thingsboard-en3.png" alt=" " style="width:50%;"><img src="https://alioss.timecho.com/docs/img/thingsborad-en4.png" alt=" " style="width:50%;"></div><ol start="3"><li>View alarm records: The generated alarm records can be found under &quot;Devices&quot; - &quot;Alarms</li></ol><figure><img src="https://alioss.timecho.com/docs/img/Thingsboard-en5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li>Data Visualization: Configure datasource and parameters for data visualization.</li></ol><div style="display:flex;justify-content:space-between;"><img src="https://alioss.timecho.com/upload/thingsboard-en1.png" alt=" " style="width:50%;"><img src="https://alioss.timecho.com/docs/img/thingsboard-en7.png" alt=" " style="width:50%;"></div>`,13))])}const y=o(d,[["render",g],["__file","Thingsboard.html.vue"]]),b=JSON.parse('{"path":"/UserGuide/latest/Ecosystem-Integration/Thingsboard.html","title":"ThingsBoard","lang":"en-US","frontmatter":{"description":"ThingsBoard Product Overview Introduction to ThingsBoard ThingsBoard is an open-source IoT platform that enables rapid development, management, and expansion of IoT projects. Fo...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/latest/Ecosystem-Integration/Thingsboard.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/latest/Ecosystem-Integration/Thingsboard.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"ThingsBoard"}],["meta",{"property":"og:description","content":"ThingsBoard Product Overview Introduction to ThingsBoard ThingsBoard is an open-source IoT platform that enables rapid development, management, and expansion of IoT projects. Fo..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alioss.timecho.com/docs/img/ThingsBoard-en1.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-09T07:17:38.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-09T07:17:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ThingsBoard\\",\\"image\\":[\\"https://alioss.timecho.com/docs/img/ThingsBoard-en1.png\\",\\"https://alioss.timecho.com/docs/img/Thingsboard-2.png\\",\\"https://alioss.timecho.com/docs/img/Thingsboard-en2.png\\",\\"https://alioss.timecho.com/docs/img/Thingsboard-en5.png\\"],\\"dateModified\\":\\"2025-01-09T07:17:38.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Product Overview","slug":"product-overview","link":"#product-overview","children":[{"level":3,"title":"Relationship Diagram","slug":"relationship-diagram","link":"#relationship-diagram","children":[]}]},{"level":2,"title":"Installation Requirements","slug":"installation-requirements","link":"#installation-requirements","children":[]},{"level":2,"title":"Installation Steps","slug":"installation-steps","link":"#installation-steps","children":[]},{"level":2,"title":"Instructions","slug":"instructions","link":"#instructions","children":[]}],"git":{"createdTime":1726648048000,"updatedTime":1736407058000,"contributors":[{"name":"CritasWang","username":"CritasWang","email":"critas@outlook.com","commits":1,"url":"https://github.com/CritasWang"},{"name":"majialin","username":"majialin","email":"107627937+mal117@users.noreply.github.com","commits":5,"url":"https://github.com/majialin"},{"name":"W1y1r","username":"W1y1r","email":"150988475+W1y1r@users.noreply.github.com","commits":1,"url":"https://github.com/W1y1r"}]},"readingTime":{"minutes":2.12,"words":637},"filePathRelative":"UserGuide/latest/Ecosystem-Integration/Thingsboard.md","localizedDate":"September 18, 2024","autoDesc":true}');export{y as comp,b as data};
