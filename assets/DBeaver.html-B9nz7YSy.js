import{_ as t,c as a,b as i,o}from"./app-CRFlbjpx.js";const r={};function s(n,e){return o(),a("div",null,e[0]||(e[0]=[i(`<h1 id="dbeaver" tabindex="-1"><a class="header-anchor" href="#dbeaver"><span>DBeaver</span></a></h1><p>DBeaver 是一个 SQL 客户端和数据库管理工具。DBeaver 可以使用 IoTDB 的 JDBC 驱动与 IoTDB 进行交互。</p><h2 id="dbeaver-安装" tabindex="-1"><a class="header-anchor" href="#dbeaver-安装"><span>DBeaver 安装</span></a></h2><ul><li>DBeaver 下载地址：<a href="https://dbeaver.io/download/" target="_blank" rel="noopener noreferrer">https://dbeaver.io/download/</a></li></ul><h2 id="iotdb-安装" tabindex="-1"><a class="header-anchor" href="#iotdb-安装"><span>IoTDB 安装</span></a></h2><ul><li>下载 IoTDB 二进制版本 <ul><li>IoTDB 下载地址：<a href="https://iotdb.apache.org/Download/" target="_blank" rel="noopener noreferrer">https://iotdb.apache.org/Download/</a></li><li>版本 &gt;= 0.13.0</li></ul></li><li>或者从源代码中编译 <ul><li>参考 <a href="https://github.com/apache/iotdb" target="_blank" rel="noopener noreferrer">https://github.com/apache/iotdb</a></li></ul></li></ul><h2 id="连接-iotdb-与-dbeaver" tabindex="-1"><a class="header-anchor" href="#连接-iotdb-与-dbeaver"><span>连接 IoTDB 与 DBeaver</span></a></h2><ol><li><p>启动 IoTDB 服务</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">./sbin/start-server.sh</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>启动 DBeaver</p></li><li><p>打开 Driver Manager</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/01.png?raw=true" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>为 IoTDB 新建一个驱动类型</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/02.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>下载 jdbc 驱动， 点击下列网址 <a href="https://maven.proxy.ustclug.org/maven2/org/apache/iotdb/iotdb-jdbc/" target="_blank" rel="noopener noreferrer">地址1</a> 或 <a href="https://repo1.maven.org/maven2/org/apache/iotdb/iotdb-jdbc/" target="_blank" rel="noopener noreferrer">地址2</a>，选择对应版本的 jar 包，下载后缀 jar-with-dependencies.jar 的包<br><img src="https://alioss.timecho.com/docs/img/20230920-192746.jpg" alt="" loading="lazy"></p></li><li><p>添加刚刚下载的驱动包，点击 Find Class</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/03.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>编辑驱动设置</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/05.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>新建 DataBase Connection， 选择 iotdb</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/06.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>编辑 JDBC 连接设置</p></li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">JDBC URL: jdbc:iotdb://127.0.0.1:6667/</span>
<span class="line">Username: root</span>
<span class="line">Password: root</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/07.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="10"><li>测试连接</li></ol><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/08.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="11"><li>可以开始通过 DBeaver 使用 IoTDB</li></ol><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/09.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,14)]))}const c=t(r,[["render",s],["__file","DBeaver.html.vue"]]),d=JSON.parse('{"path":"/zh/UserGuide/latest/Ecosystem-Integration/DBeaver.html","title":"DBeaver","lang":"zh-CN","frontmatter":{"description":"DBeaver DBeaver 是一个 SQL 客户端和数据库管理工具。DBeaver 可以使用 IoTDB 的 JDBC 驱动与 IoTDB 进行交互。 DBeaver 安装 DBeaver 下载地址：https://dbeaver.io/download/ IoTDB 安装 下载 IoTDB 二进制版本 IoTDB 下载地址：https://iot...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/latest/Ecosystem-Integration/DBeaver.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/latest/Ecosystem-Integration/DBeaver.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"DBeaver"}],["meta",{"property":"og:description","content":"DBeaver DBeaver 是一个 SQL 客户端和数据库管理工具。DBeaver 可以使用 IoTDB 的 JDBC 驱动与 IoTDB 进行交互。 DBeaver 安装 DBeaver 下载地址：https://dbeaver.io/download/ IoTDB 安装 下载 IoTDB 二进制版本 IoTDB 下载地址：https://iot..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/01.png?raw=true"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-09-03T06:20:13.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-03T06:20:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"DBeaver\\",\\"image\\":[\\"https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/01.png?raw=true\\",\\"https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/02.png\\",\\"https://alioss.timecho.com/docs/img/20230920-192746.jpg\\",\\"https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/03.png\\",\\"https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/05.png\\",\\"https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/06.png\\",\\"https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/07.png\\",\\"https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/08.png\\",\\"https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/09.png\\"],\\"dateModified\\":\\"2024-09-03T06:20:13.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"DBeaver 安装","slug":"dbeaver-安装","link":"#dbeaver-安装","children":[]},{"level":2,"title":"IoTDB 安装","slug":"iotdb-安装","link":"#iotdb-安装","children":[]},{"level":2,"title":"连接 IoTDB 与 DBeaver","slug":"连接-iotdb-与-dbeaver","link":"#连接-iotdb-与-dbeaver","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1725344413000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1},{"name":"石林松","email":"50943998+shi10lin0s@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.2,"words":361},"filePathRelative":"zh/UserGuide/latest/Ecosystem-Integration/DBeaver.md","localizedDate":"2023年7月10日","autoDesc":true}');export{c as comp,d as data};
