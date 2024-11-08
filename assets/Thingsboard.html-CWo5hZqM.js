import{_ as s,c as o,b as a,d as e,e as n,a as r,w as l,r as d,o as p}from"./app-CRFlbjpx.js";const c={},h={style:{"text-align":"left"}};function g(m,t){const i=d("RouteLink");return p(),o("div",null,[t[6]||(t[6]=a('<h1 id="thingsboard" tabindex="-1"><a class="header-anchor" href="#thingsboard"><span>ThingsBoard</span></a></h1><h2 id="product-overview" tabindex="-1"><a class="header-anchor" href="#product-overview"><span>Product Overview</span></a></h2><ol><li>Introduction to ThingsBoard</li></ol><p>ThingsBoard is an open-source IoT platform that enables rapid development, management, and expansion of IoT projects. For more detailed information, please refer to <a href="https://thingsboard.io/docs/getting-started-guides/what-is-thingsboard/" target="_blank" rel="noopener noreferrer">ThingsBoard Official Website</a>.</p><figure><img src="https://alioss.timecho.com/docs/img/ThingsBoard-en1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>Introduction to ThingsBoard-IoTDB</li></ol><p>ThingsBoard IoTDB provides the ability to store data from ThingsBoard to IoTDB, and also supports reading data information from the <code>root.thingsboard</code> database in ThingsBoard. The detailed architecture diagram is shown in yellow in the following figure.</p><h3 id="relationship-diagram" tabindex="-1"><a class="header-anchor" href="#relationship-diagram"><span>Relationship Diagram</span></a></h3><figure><img src="https://alioss.timecho.com/docs/img/Thingsboard-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="installation-requirements" tabindex="-1"><a class="header-anchor" href="#installation-requirements"><span>Installation Requirements</span></a></h2>',10)),e("table",null,[t[5]||(t[5]=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},[e("strong",null,"Preparation Content")]),e("th",{style:{"text-align":"left"}},[e("strong",null,"Version Requirements")])])],-1)),e("tbody",null,[t[3]||(t[3]=e("tr",null,[e("td",{style:{"text-align":"left"}},"JDK"),e("td",{style:{"text-align":"left"}},[n("JDK17 or above. Please refer to the downloads on "),e("a",{href:"https://www.oracle.com/java/technologies/downloads/",target:"_blank",rel:"noopener noreferrer"},"Oracle Official Website")])],-1)),e("tr",null,[t[2]||(t[2]=e("td",{style:{"text-align":"left"}},"IoTDB",-1)),e("td",h,[t[1]||(t[1]=n("IoTDB v1.3.0 or above. Please refer to the ")),r(i,{to:"/UserGuide/latest/Deployment-and-Maintenance/IoTDB-Package_timecho.html"},{default:l(()=>t[0]||(t[0]=[n("Deployment guidance")])),_:1})])]),t[4]||(t[4]=e("tr",null,[e("td",{style:{"text-align":"left"}},[n("ThingsBoard"),e("br"),n(" (IoTDB adapted version)")]),e("td",{style:{"text-align":"left"}},"Please contact Timecho staff to obtain the installation package. Detailed installation steps are provided below.")],-1))])]),t[7]||(t[7]=a(`<h2 id="installation-steps" tabindex="-1"><a class="header-anchor" href="#installation-steps"><span>Installation Steps</span></a></h2><p>Please refer to the installation steps on <a href="https://thingsboard.io/docs/user-guide/install/ubuntu/" target="_blank" rel="noopener noreferrer">ThingsBoard Official Website</a>,wherein:</p><ul><li><a href="https://thingsboard.io/docs/user-guide/install/ubuntu/" target="_blank" rel="noopener noreferrer">ThingsBoard Official Website</a>【 Step 2: ThingsBoard Service Installation 】 Use the installation package provided by your Timecho contact to install the software. Please note that the official ThingsBoard installation package does not support IoTDB.</li><li><a href="https://thingsboard.io/docs/user-guide/install/ubuntu/" target="_blank" rel="noopener noreferrer">ThingsBoard Official Website</a> 【Step 3: Configure ThingsBoard Database - ThingsBoard Configuration】 In this step, you need to add environment variables according to the following content</li></ul><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line"># ThingsBoard original configuration</span>
<span class="line">export SPRING_DATASOURCE_URL=jdbc:postgresql://localhost:5432/thingsboard</span>
<span class="line">export SPRING_DATASOURCE_USERNAME=postgres</span>
<span class="line">export SPRING_DATASOURCE_PASSWORD=PUT_YOUR_POSTGRESQL_PASSWORD_HERE ##Change password to pg</span>
<span class="line"></span>
<span class="line"># To use IoTDB, the following variables need to be modified</span>
<span class="line">export DATABASE_TS_TYPE=iotdb  ## Originally configured as SQL, change the variable value to iotdb</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"># To use IoTDB, the following variables need to be added</span>
<span class="line">export DATABASE_TS_LATEST_TYPE=iotdb</span>
<span class="line">export IoTDB_HOST=127.0.0.1  ## The IP address where iotdb is located</span>
<span class="line">export IoTDB_PORT:6667       ## The port number for iotdb is 6667 by default</span>
<span class="line">export IoTDB_USER:root       ## The username for iotdb,defaults as root</span>
<span class="line">export IoTDB_PASSWORD:root   ## The password for iotdb,default as root</span>
<span class="line">export IoTDB_CONNECTION_TIMEOUT:5000   ## IoTDB timeout setting</span>
<span class="line">export IoTDB_FETCH_SIZE:1024   ## The number of data pulled in a single request is recommended to be set to 1024</span>
<span class="line">export IoTDB_MAX_SIZE:200      ## The maximum number of sessions in the session pool is recommended to be set to&gt;=concurrent requests</span>
<span class="line">export IoTDB_DATABASE:root.thingsboard  ## Thingsboard data is written to the database stored in IoTDB, supporting customization</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="instructions" tabindex="-1"><a class="header-anchor" href="#instructions"><span>Instructions</span></a></h2><ol><li>Set up devices and connect datasource: Add a new device under &quot;Entities&quot; - &quot;Devices&quot; in Thingsboard and send data to the specified devices through gateway.</li></ol><figure><img src="https://alioss.timecho.com/docs/img/Thingsboard-en2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>Set rule chain: Set alarm rules for &quot;SD-032F pump&quot; in the rule chain library and set the rule chain as the root chain.</li></ol><div style="display:flex;justify-content:space-between;"><img src="https://alioss.timecho.com/docs/img/thingsboard-en3.png" alt=" " style="width:50%;"><img src="https://alioss.timecho.com/docs/img/thingsborad-en4.png" alt=" " style="width:50%;"></div><ol start="3"><li>View alarm records: The generated alarm records can be found under &quot;Devices&quot; - &quot;Alarms.</li></ol><figure><img src="https://alioss.timecho.com/docs/img/Thingsboard-en5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li>Data Visualization: Configure datasource and parameters for data visualization.</li></ol><div style="display:flex;justify-content:space-between;"><img src="https://alioss.timecho.com/upload/thingsboard-en1.png" alt=" " style="width:50%;"><img src="https://alioss.timecho.com/docs/img/thingsboard-en7.png" alt=" " style="width:50%;"></div>`,13))])}const b=s(c,[["render",g],["__file","Thingsboard.html.vue"]]),f=JSON.parse('{"path":"/UserGuide/latest/Ecosystem-Integration/Thingsboard.html","title":"ThingsBoard","lang":"en-US","frontmatter":{"description":"ThingsBoard Product Overview Introduction to ThingsBoard ThingsBoard is an open-source IoT platform that enables rapid development, management, and expansion of IoT projects. Fo...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/latest/Ecosystem-Integration/Thingsboard.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/latest/Ecosystem-Integration/Thingsboard.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"ThingsBoard"}],["meta",{"property":"og:description","content":"ThingsBoard Product Overview Introduction to ThingsBoard ThingsBoard is an open-source IoT platform that enables rapid development, management, and expansion of IoT projects. Fo..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alioss.timecho.com/docs/img/ThingsBoard-en1.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-25T10:48:03.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-25T10:48:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ThingsBoard\\",\\"image\\":[\\"https://alioss.timecho.com/docs/img/ThingsBoard-en1.png\\",\\"https://alioss.timecho.com/docs/img/Thingsboard-2.png\\",\\"https://alioss.timecho.com/docs/img/Thingsboard-en2.png\\",\\"https://alioss.timecho.com/docs/img/Thingsboard-en5.png\\"],\\"dateModified\\":\\"2024-09-25T10:48:03.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Product Overview","slug":"product-overview","link":"#product-overview","children":[{"level":3,"title":"Relationship Diagram","slug":"relationship-diagram","link":"#relationship-diagram","children":[]}]},{"level":2,"title":"Installation Requirements","slug":"installation-requirements","link":"#installation-requirements","children":[]},{"level":2,"title":"Installation Steps","slug":"installation-steps","link":"#installation-steps","children":[]},{"level":2,"title":"Instructions","slug":"instructions","link":"#instructions","children":[]}],"git":{"createdTime":1726648048000,"updatedTime":1727261283000,"contributors":[{"name":"majialin","email":"107627937+mal117@users.noreply.github.com","commits":2}]},"readingTime":{"minutes":2.12,"words":637},"filePathRelative":"UserGuide/latest/Ecosystem-Integration/Thingsboard.md","localizedDate":"September 18, 2024","autoDesc":true}');export{b as comp,f as data};
