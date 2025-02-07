import{_ as n,c as a,b as l,o as e}from"./app-DE_BslX7.js";const o={};function p(t,s){return e(),a("div",null,s[0]||(s[0]=[l(`<h1 id="odbc" tabindex="-1"><a class="header-anchor" href="#odbc"><span>ODBC</span></a></h1><p>在 JDBC 插件的基础上，IoTDB 可以通过 ODBC-JDBC 桥来支持通过 ODBC 对数据库的操作。</p><h2 id="依赖" tabindex="-1"><a class="header-anchor" href="#依赖"><span>依赖</span></a></h2><ul><li>带依赖打包的 IoTDB JDBC 插件包</li><li>ODBC-JDBC 桥（如 Zappy-Sys）</li></ul><h2 id="部署方法" tabindex="-1"><a class="header-anchor" href="#部署方法"><span>部署方法</span></a></h2><h3 id="准备-jdbc-插件包" tabindex="-1"><a class="header-anchor" href="#准备-jdbc-插件包"><span>准备 JDBC 插件包</span></a></h3><p>下载 IoTDB 源码，在根目录下执行下面的命令：</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#61AFEF;">mvn</span><span style="color:#98C379;"> clean</span><span style="color:#98C379;"> package</span><span style="color:#D19A66;"> -pl</span><span style="color:#98C379;"> iotdb-client/jdbc</span><span style="color:#D19A66;"> -am</span><span style="color:#D19A66;"> -DskipTests</span><span style="color:#D19A66;"> -P</span><span style="color:#98C379;"> get-jar-with-dependencies</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>之后，就可以在<code>iotdb-client/jdbc/target</code>目录下看到<code>iotdb-jdbc-1.3.2-SNAPSHOT-jar-with-dependencies.jar</code>文件。</p><h3 id="准备-odbc-jdbc-桥" tabindex="-1"><a class="header-anchor" href="#准备-odbc-jdbc-桥"><span>准备 ODBC-JDBC 桥</span></a></h3><p><em>注意: 这里给出的仅仅是一种 ODBC-JDBC 桥，仅作示例。读者可以自行寻找其他的 ODBC-JDBC 桥来对接 IoTDB 的 JDBC 插件。</em></p><ol><li><p><strong>下载 Zappy-Sys ODBC-JDBC 桥插件</strong>：<br> 进入 <a href="https://zappysys.com/products/odbc-powerpack/odbc-jdbc-bridge-driver/" target="_blank" rel="noopener noreferrer">https://zappysys.com/products/odbc-powerpack/odbc-jdbc-bridge-driver/</a> 网站，点击下载按钮并直接安装。</p><figure><img src="https://alioss.timecho.com/upload/ZappySys_website.jpg" alt="ZappySys_website.jpg" tabindex="0" loading="lazy"><figcaption>ZappySys_website.jpg</figcaption></figure></li><li><p><strong>准备 IoTDB</strong>：打开 IoTDB 集群，并任意写入一条数据。</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#ABB2BF;">IoTDB </span><span style="color:#56B6C2;">&gt;</span><span style="color:#C678DD;"> insert into</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">ln</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wf02</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wt02</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">timestamp</span><span style="color:#ABB2BF;">,</span><span style="color:#C678DD;">status</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">values</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">,true)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p><strong>部署及调试插件</strong>：</p><ol><li><p>打开 ODBC 数据源 32/64 位，取决于 Windows 的位数，一个示例的位置是 <code>C:\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs\\Administrative Tools</code>。</p><figure><img src="https://alioss.timecho.com/upload/ODBC_ADD_CN.jpg" alt="ODBC_ADD_CN.jpg" tabindex="0" loading="lazy"><figcaption>ODBC_ADD_CN.jpg</figcaption></figure></li><li><p>点击添加，选择 ZappySys JDBC Bridge。</p><figure><img src="https://alioss.timecho.com/upload/ODBC_CREATE_CN.jpg" alt="ODBC_CREATE_CN.jpg" tabindex="0" loading="lazy"><figcaption>ODBC_CREATE_CN.jpg</figcaption></figure></li><li><p>填写如下配置：</p><table><thead><tr><th>配置项</th><th>填写内容</th><th>示例</th></tr></thead><tbody><tr><td>Connection String</td><td>jdbc:iotdb://&lt;IoTDB 的 IP&gt;:&lt;IoTDB 的 rpc port&gt;/</td><td>jdbc:iotdb://127.0.0.1:6667/</td></tr><tr><td>Driver Class</td><td>org.apache.iotdb.jdbc.IoTDBDriver</td><td>org.apache.iotdb.jdbc.IoTDBDriver</td></tr><tr><td>JDBC driver file(s)</td><td>IoTDB JDBC jar-with-dependencies 插件路径</td><td>C:\\Users\\13361\\Documents\\GitHub\\iotdb\\iotdb-client\\jdbc\\target\\iotdb-jdbc-1.3.2-SNAPSHOT-jar-with-dependencies.jar</td></tr><tr><td>User name</td><td>IoTDB 的用户名</td><td>root</td></tr><tr><td>User password</td><td>IoTDB 的密码</td><td>root</td></tr></tbody></table><figure><img src="https://alioss.timecho.com/upload/ODBC_CONNECTION.png" alt="ODBC_CONNECTION.png" tabindex="0" loading="lazy"><figcaption>ODBC_CONNECTION.png</figcaption></figure></li><li><p>点击 Test Connection 按钮，应该显示连接成功。</p><figure><img src="https://alioss.timecho.com/upload/ODBC_CONFIG_CN.jpg" alt="ODBC_CONFIG_CN.jpg" tabindex="0" loading="lazy"><figcaption>ODBC_CONFIG_CN.jpg</figcaption></figure></li><li><p>点击上方的 Preview， 将查询文本换为 <code>select * from root.**</code>，点击 Preview Data，应该正确显示查询结果。</p><figure><img src="https://alioss.timecho.com/upload/ODBC_TEST.jpg" alt="ODBC_TEST.jpg" tabindex="0" loading="lazy"><figcaption>ODBC_TEST.jpg</figcaption></figure></li></ol></li><li><p><strong>使用 ODBC 操作数据</strong>：正确部署后，就可以使用 Windows 的 ODBC 库，对 IoTDB 的数据进行操作。 这里给出 C# 语言的代码示例：</p><div class="language-c# line-numbers-mode" data-highlighter="shiki" data-ext="c#" data-title="c#" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">using</span><span style="color:#E5C07B;"> System</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">Data</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">Odbc</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// Get a connection</span></span>
<span class="line"><span style="color:#C678DD;">var</span><span style="color:#E06C75;"> dbConnection</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> new </span><span style="color:#E5C07B;">OdbcConnection</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;DSN=ZappySys JDBC Bridge&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#E5C07B;">dbConnection</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">Open</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// Execute the write commands to prepare data</span></span>
<span class="line"><span style="color:#C678DD;">var</span><span style="color:#E06C75;"> dbCommand</span><span style="color:#56B6C2;"> =</span><span style="color:#E5C07B;"> dbConnection</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">CreateCommand</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E5C07B;">dbCommand</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">CommandText</span><span style="color:#56B6C2;"> =</span><span style="color:#98C379;"> &quot;insert into root.Keller.Flur.Energieversorgung(time, s1) values(1715670861634, 1)&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E5C07B;">dbCommand</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">ExecuteNonQuery</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E5C07B;">dbCommand</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">CommandText</span><span style="color:#56B6C2;"> =</span><span style="color:#98C379;"> &quot;insert into root.Keller.Flur.Energieversorgung(time, s2) values(1715670861634, true)&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E5C07B;">dbCommand</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">ExecuteNonQuery</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E5C07B;">dbCommand</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">CommandText</span><span style="color:#56B6C2;"> =</span><span style="color:#98C379;"> &quot;insert into root.Keller.Flur.Energieversorgung(time, s3) values(1715670861634, 3.1)&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E5C07B;">dbCommand</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">ExecuteNonQuery</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// Execute the read command</span></span>
<span class="line"><span style="color:#E5C07B;">dbCommand</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">CommandText</span><span style="color:#56B6C2;"> =</span><span style="color:#98C379;"> &quot;SELECT * FROM root.Keller.Flur.Energieversorgung&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">var</span><span style="color:#E06C75;"> dbReader</span><span style="color:#56B6C2;"> =</span><span style="color:#E5C07B;"> dbCommand</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">ExecuteReader</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// Write the output header</span></span>
<span class="line"><span style="color:#C678DD;">var</span><span style="color:#E06C75;"> fCount</span><span style="color:#56B6C2;"> =</span><span style="color:#E5C07B;"> dbReader</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">FieldCount</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E5C07B;">Console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">Write</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;:&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">var</span><span style="color:#E06C75;"> i</span><span style="color:#56B6C2;"> =</span><span style="color:#D19A66;"> 0</span><span style="color:#ABB2BF;">; </span><span style="color:#E06C75;">i</span><span style="color:#56B6C2;"> &lt;</span><span style="color:#E06C75;"> fCount</span><span style="color:#ABB2BF;">; </span><span style="color:#E06C75;">i</span><span style="color:#56B6C2;">++</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#C678DD;">    var</span><span style="color:#E06C75;"> fName</span><span style="color:#56B6C2;"> =</span><span style="color:#E5C07B;"> dbReader</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">GetName</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">i</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#E5C07B;">    Console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">Write</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">fName</span><span style="color:#56B6C2;"> +</span><span style="color:#98C379;"> &quot;:&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#E5C07B;">Console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">WriteLine</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// Output the content</span></span>
<span class="line"><span style="color:#C678DD;">while</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">dbReader</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">Read</span><span style="color:#ABB2BF;">())</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#E5C07B;">    Console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">Write</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;:&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;">    for</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">var</span><span style="color:#E06C75;"> i</span><span style="color:#56B6C2;"> =</span><span style="color:#D19A66;"> 0</span><span style="color:#ABB2BF;">; </span><span style="color:#E06C75;">i</span><span style="color:#56B6C2;"> &lt;</span><span style="color:#E06C75;"> fCount</span><span style="color:#ABB2BF;">; </span><span style="color:#E06C75;">i</span><span style="color:#56B6C2;">++</span><span style="color:#ABB2BF;">) </span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#C678DD;">        var</span><span style="color:#E06C75;"> fieldType</span><span style="color:#56B6C2;"> =</span><span style="color:#E5C07B;"> dbReader</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">GetFieldType</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">i</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;">        switch</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">fieldType</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">Name</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">        {</span></span>
<span class="line"><span style="color:#C678DD;">            case</span><span style="color:#98C379;"> &quot;DateTime&quot;</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#C678DD;">                var</span><span style="color:#E06C75;"> dateTime</span><span style="color:#56B6C2;"> =</span><span style="color:#E5C07B;"> dbReader</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">GetInt64</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">i</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#E5C07B;">                Console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">Write</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">dateTime</span><span style="color:#56B6C2;"> +</span><span style="color:#98C379;"> &quot;:&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;">                break</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">            case</span><span style="color:#98C379;"> &quot;Double&quot;</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#C678DD;">                if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">dbReader</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">IsDBNull</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">i</span><span style="color:#ABB2BF;">)) </span></span>
<span class="line"><span style="color:#ABB2BF;">                {</span></span>
<span class="line"><span style="color:#E5C07B;">                    Console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">Write</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;null:&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">                }</span></span>
<span class="line"><span style="color:#C678DD;">                else</span><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;">                {</span></span>
<span class="line"><span style="color:#C678DD;">                    var</span><span style="color:#E06C75;"> fValue</span><span style="color:#56B6C2;"> =</span><span style="color:#E5C07B;"> dbReader</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">GetDouble</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">i</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#E5C07B;">                    Console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">Write</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">fValue</span><span style="color:#56B6C2;"> +</span><span style="color:#98C379;"> &quot;:&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">                }   </span></span>
<span class="line"><span style="color:#C678DD;">                break</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">            default</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E5C07B;">                Console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">Write</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">fieldType</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">Name</span><span style="color:#56B6C2;"> +</span><span style="color:#98C379;"> &quot;:&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;">                break</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#E5C07B;">    Console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">WriteLine</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// Shut down gracefully</span></span>
<span class="line"><span style="color:#E5C07B;">dbReader</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">Close</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E5C07B;">dbCommand</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">Dispose</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E5C07B;">dbConnection</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">Close</span><span style="color:#ABB2BF;">();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行该程序可以向 IoTDB 内写入数据，并且查询并打印写入的数据。</p></li></ol>`,12)]))}const c=n(o,[["render",p],["__file","Programming-ODBC.html.vue"]]),i=JSON.parse('{"path":"/zh/UserGuide/V2.0.1/Tree/API/Programming-ODBC.html","title":"ODBC","lang":"zh-CN","frontmatter":{"description":"ODBC 在 JDBC 插件的基础上，IoTDB 可以通过 ODBC-JDBC 桥来支持通过 ODBC 对数据库的操作。 依赖 带依赖打包的 IoTDB JDBC 插件包 ODBC-JDBC 桥（如 Zappy-Sys） 部署方法 准备 JDBC 插件包 下载 IoTDB 源码，在根目录下执行下面的命令： 之后，就可以在iotdb-client/jdb...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V2.0.1/Tree/API/Programming-ODBC.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V2.0.1/Tree/API/Programming-ODBC.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"ODBC"}],["meta",{"property":"og:description","content":"ODBC 在 JDBC 插件的基础上，IoTDB 可以通过 ODBC-JDBC 桥来支持通过 ODBC 对数据库的操作。 依赖 带依赖打包的 IoTDB JDBC 插件包 ODBC-JDBC 桥（如 Zappy-Sys） 部署方法 准备 JDBC 插件包 下载 IoTDB 源码，在根目录下执行下面的命令： 之后，就可以在iotdb-client/jdb..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alioss.timecho.com/upload/ZappySys_website.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-12-13T04:33:18.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-13T04:33:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ODBC\\",\\"image\\":[\\"https://alioss.timecho.com/upload/ZappySys_website.jpg\\",\\"https://alioss.timecho.com/upload/ODBC_ADD_CN.jpg\\",\\"https://alioss.timecho.com/upload/ODBC_CREATE_CN.jpg\\",\\"https://alioss.timecho.com/upload/ODBC_CONNECTION.png\\",\\"https://alioss.timecho.com/upload/ODBC_CONFIG_CN.jpg\\",\\"https://alioss.timecho.com/upload/ODBC_TEST.jpg\\"],\\"dateModified\\":\\"2024-12-13T04:33:18.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"依赖","slug":"依赖","link":"#依赖","children":[]},{"level":2,"title":"部署方法","slug":"部署方法","link":"#部署方法","children":[{"level":3,"title":"准备 JDBC 插件包","slug":"准备-jdbc-插件包","link":"#准备-jdbc-插件包","children":[]},{"level":3,"title":"准备 ODBC-JDBC 桥","slug":"准备-odbc-jdbc-桥","link":"#准备-odbc-jdbc-桥","children":[]}]}],"git":{"createdTime":1731055543000,"updatedTime":1734064398000,"contributors":[{"name":"majialin","username":"majialin","email":"107627937+mal117@users.noreply.github.com","commits":1,"url":"https://github.com/majialin"},{"name":"W1y1r","username":"W1y1r","email":"150988475+W1y1r@users.noreply.github.com","commits":1,"url":"https://github.com/W1y1r"},{"name":"Caideyipi","username":"Caideyipi","email":"87789683+Caideyipi@users.noreply.github.com","commits":1,"url":"https://github.com/Caideyipi"}]},"readingTime":{"minutes":2.48,"words":745},"filePathRelative":"zh/UserGuide/V2.0.1/Tree/API/Programming-ODBC.md","localizedDate":"2024年11月8日","autoDesc":true}');export{c as comp,i as data};
