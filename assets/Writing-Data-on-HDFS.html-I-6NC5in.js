import{_ as e,c as l,b as a,o as d}from"./app-C-0rb--l.js";const r={};function i(n,t){return d(),l("div",null,t[0]||(t[0]=[a('<h2 id="hdfs-集成" tabindex="-1"><a class="header-anchor" href="#hdfs-集成"><span>HDFS 集成</span></a></h2><h3 id="存储共享架构" tabindex="-1"><a class="header-anchor" href="#存储共享架构"><span>存储共享架构</span></a></h3><p>当前，TSFile（包括 TSFile 文件和相关的数据文件）支持存储在本地文件系统和 Hadoop 分布式文件系统（HDFS）。配置使用 HDFS 存储 TSFile 十分容易。</p><h4 id="系统架构" tabindex="-1"><a class="header-anchor" href="#系统架构"><span>系统架构</span></a></h4><p>当你配置使用 HDFS 存储 TSFile 之后，你的数据文件将会被分布式存储。系统架构如下：</p><img style="width:100%;max-width:700px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/github/66922722-35180400-f05a-11e9-8ff0-7dd51716e4a8.png"><h4 id="config-and-usage" tabindex="-1"><a class="header-anchor" href="#config-and-usage"><span>Config and usage</span></a></h4><p>如果你希望将 TSFile 存储在 HDFS 上，可以遵循以下步骤：</p><p>首先下载对应版本的源码发布版或者下载 github 仓库</p><p>使用 maven 打包 server 和 Hadoop 模块：<code>mvn clean package -pl server,hadoop -am -Dmaven.test.skip=true -P get-jar-with-dependencies</code></p><p>然后，将 Hadoop 模块的 target jar 包<code>hadoop-tsfile-X.X.X-jar-with-dependencies.jar</code>复制到 server 模块的 target lib 文件夹 <code>.../server/target/iotdb-server-X.X.X/lib</code>下。</p><p>编辑<code>iotdb-datanode.properties</code>中的用户配置。相关配置项包括：</p><ul><li>tsfile_storage_fs</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">tsfile_storage_fs</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">Tsfile 和相关数据文件的存储文件系统。目前支持 LOCAL（本地文件系统）和 HDFS 两种</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">LOCAL</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">仅允许在第一次启动服务器前修改</td></tr></tbody></table><ul><li>core_site_path</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">core_site_path</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">在 Tsfile 和相关数据文件存储到 HDFS 的情况下用于配置 core-site.xml 的绝对路径</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">/etc/hadoop/conf/core-site.xml</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务器生效</td></tr></tbody></table><ul><li>hdfs_site_path</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">hdfs_site_path</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">在 Tsfile 和相关数据文件存储到 HDFS 的情况下用于配置 hdfs-site.xml 的绝对路径</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">/etc/hadoop/conf/hdfs-site.xml</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务器生效</td></tr></tbody></table><ul><li>hdfs_ip</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">hdfs_ip</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">在 Tsfile 和相关数据文件存储到 HDFS 的情况下用于配置 HDFS 的 IP。<strong>如果配置了多于 1 个 hdfs_ip，则表明启用了 Hadoop HA</strong></td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">localhost</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务器生效</td></tr></tbody></table><ul><li>hdfs_port</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">hdfs_port</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">在 Tsfile 和相关数据文件存储到 HDFS 的情况下用于配置 HDFS 的端口</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">9000</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务器生效</td></tr></tbody></table><ul><li>dfs_nameservices</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">hdfs_nameservices</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">在使用 Hadoop HA 的情况下用于配置 HDFS 的 nameservices</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">hdfsnamespace</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务器生效</td></tr></tbody></table><ul><li>dfs_ha_namenodes</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">hdfs_ha_namenodes</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">在使用 Hadoop HA 的情况下用于配置 HDFS 的 nameservices 下的 namenodes</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">nn1,nn2</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务器生效</td></tr></tbody></table><ul><li>dfs_ha_automatic_failover_enabled</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">dfs_ha_automatic_failover_enabled</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">在使用 Hadoop HA 的情况下用于配置是否使用失败自动切换</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">Boolean</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务器生效</td></tr></tbody></table><ul><li>dfs_client_failover_proxy_provider</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">dfs_client_failover_proxy_provider</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">在使用 Hadoop HA 且使用失败自动切换的情况下配置失败自动切换的实现方式</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务器生效</td></tr></tbody></table><ul><li>hdfs_use_kerberos</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">hdfs_use_kerberos</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">是否使用 kerberos 验证访问 hdfs</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务器生效</td></tr></tbody></table><ul><li>kerberos_keytab_file_path</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">kerberos_keytab_file_path</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">kerberos keytab file 的完整路径</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">/path</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务器生效</td></tr></tbody></table><ul><li>kerberos_principal</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">kerberos_principal</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">Kerberos 认证原则</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">your principal</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务器生效</td></tr></tbody></table><p>启动 server, Tsfile 将会被存储到 HDFS 上。</p><p>如果你想要恢复将 TSFile 存储到本地文件系统，只需编辑配置项<code>tsfile_storage_fs</code>为<code>LOCAL</code>。在这种情况下，如果你已经在 HDFS 上存储了一些数据文件，你需要将它们下载到本地，并移动到你所配置的数据文件文件夹（默认为<code>../server/target/iotdb-server-X.X.X/data/data</code>）， 或者重新开始你的整个导入数据过程。</p><h4 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h4><ol><li>这个功能支持哪些 Hadoop 版本？</li></ol><p>A: Hadoop 2.x and Hadoop 3.x 均可以支持。</p><ol start="2"><li>当启动服务器或创建时间序列时，我遇到了如下错误：</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>ERROR org.apache.iotdb.tsfile.fileSystem.fsFactory.HDFSFactory:62 - Failed to get Hadoop file system. Please check your dependency of Hadoop module.</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>A: 这表明你没有将 Hadoop 模块的依赖放到 IoTDB server 中。你可以这样解决：</p><ul><li>使用 Maven 打包 Hadoop 模块：<code>mvn clean package -pl hadoop -am -Dmaven.test.skip=true -P get-jar-with-dependencies</code></li><li>将 Hadoop 模块的 target jar 包<code>hadoop-tsfile-X.X.X-jar-with-dependencies.jar</code>复制到 server 模块的 target lib 文件夹 <code>.../server/target/iotdb-server-X.X.X/lib</code>下。</li></ul>',45)]))}const o=e(r,[["render",i],["__file","Writing-Data-on-HDFS.html.vue"]]),g=JSON.parse('{"path":"/zh/UserGuide/V1.1.x/Ecosystem-Integration/Writing-Data-on-HDFS.html","title":"","lang":"zh-CN","frontmatter":{"description":"HDFS 集成 存储共享架构 当前，TSFile（包括 TSFile 文件和相关的数据文件）支持存储在本地文件系统和 Hadoop 分布式文件系统（HDFS）。配置使用 HDFS 存储 TSFile 十分容易。 系统架构 当你配置使用 HDFS 存储 TSFile 之后，你的数据文件将会被分布式存储。系统架构如下： Config and usage 如...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.1.x/Ecosystem-Integration/Writing-Data-on-HDFS.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/Ecosystem-Integration/Writing-Data-on-HDFS.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"HDFS 集成 存储共享架构 当前，TSFile（包括 TSFile 文件和相关的数据文件）支持存储在本地文件系统和 Hadoop 分布式文件系统（HDFS）。配置使用 HDFS 存储 TSFile 十分容易。 系统架构 当你配置使用 HDFS 存储 TSFile 之后，你的数据文件将会被分布式存储。系统架构如下： Config and usage 如..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"HDFS 集成","slug":"hdfs-集成","link":"#hdfs-集成","children":[{"level":3,"title":"存储共享架构","slug":"存储共享架构","link":"#存储共享架构","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","username":"CritasWang","email":"critas@outlook.com","commits":1,"url":"https://github.com/CritasWang"}]},"readingTime":{"minutes":4.14,"words":1242},"filePathRelative":"zh/UserGuide/V1.1.x/Ecosystem-Integration/Writing-Data-on-HDFS.md","localizedDate":"2023年7月10日","autoDesc":true}');export{o as comp,g as data};
