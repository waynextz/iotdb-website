import{_ as e,c as l,b as d,o as n}from"./app-C-0rb--l.js";const a={};function s(i,t){return n(),l("div",null,t[0]||(t[0]=[d(`<h1 id="背景" tabindex="-1"><a class="header-anchor" href="#背景"><span>背景</span></a></h1><p>在IoTDB服务启动时，通过加载日志文件<code>mlog.bin</code>组织元数据信息，并将结果长期持有在内存中；随着元数据的不断增长，内存会持续上涨；为支持海量元数据场景下，内存在可控范围内波动，我们提供了基于rocksDB的元数据存储方式。</p><h1 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h1><p>首先使用下面的命令将 <code>schema-engine-rocksdb</code> 打包</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#61AFEF;">mvn</span><span style="color:#98C379;"> clean</span><span style="color:#98C379;"> package</span><span style="color:#D19A66;"> -pl</span><span style="color:#98C379;"> schema-engine-rocksdb</span><span style="color:#D19A66;"> -am</span><span style="color:#D19A66;"> -DskipTests</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>命令运行结束后，在其 target/schema-engine-rocksdb 中会有一个 lib 文件夹和 conf 文件夹。将 conf 文件夹下的文件拷贝到 server 的 conf 文件夹中，将 lib 文件夹下的文件也拷贝到<br> server 的 lib 的文件夹中。</p><p>在系统配置文件<code>iotdb-datanode.properties</code>中，将配置项<code>schema_engine_mode</code>修改为<code>Rocksdb_based</code>， 如：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>####################</span></span>
<span class="line"><span>### Schema Engine Configuration</span></span>
<span class="line"><span>####################</span></span>
<span class="line"><span># Choose the mode of schema engine. The value could be Memory,Schema_File and Rocksdb_based. If the provided value doesn&#39;t match any pre-defined value, Memory mode will be used as default.</span></span>
<span class="line"><span># Datatype: string</span></span>
<span class="line"><span>schema_engine_mode=Rocksdb_based</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当指定rocksdb作为元数据的存储方式时，我们开放了rocksdb相关的配置参数，您可以通过修改配置文件<code>schema-rocksdb.properties</code>，根据自己的需求，进行合理的参数调整，例如查询的缓存等。如没有特殊需求，使用默认值即可。</p><h1 id="功能支持说明" tabindex="-1"><a class="header-anchor" href="#功能支持说明"><span>功能支持说明</span></a></h1><p>该模块仍在不断完善中，部分功能暂不支持，功能模块支持情况如下：</p><table><thead><tr><th style="text-align:left;">功能</th><th style="text-align:right;">支持情况</th></tr></thead><tbody><tr><td style="text-align:left;">时间序列增删</td><td style="text-align:right;">支持</td></tr><tr><td style="text-align:left;">路径通配符（* 及 **）查询</td><td style="text-align:right;">支持</td></tr><tr><td style="text-align:left;">tag增删</td><td style="text-align:right;">支持</td></tr><tr><td style="text-align:left;">对齐时间序列</td><td style="text-align:right;">支持</td></tr><tr><td style="text-align:left;">节点名称(*)通配</td><td style="text-align:right;">不支持</td></tr><tr><td style="text-align:left;">元数据模板template</td><td style="text-align:right;">不支持</td></tr><tr><td style="text-align:left;">tag索引</td><td style="text-align:right;">不支持</td></tr><tr><td style="text-align:left;">continuous query</td><td style="text-align:right;">不支持</td></tr></tbody></table><h1 id="附-所有接口支持情况" tabindex="-1"><a class="header-anchor" href="#附-所有接口支持情况"><span>附: 所有接口支持情况</span></a></h1><p>外部接口，即客户端可以感知到，相关sql不支持；</p><p>内部接口，即服务内部的其他模块调用逻辑，与外部sql无直接依赖关系；</p><table><thead><tr><th style="text-align:left;">接口名称</th><th style="text-align:right;">接口类型</th><th style="text-align:center;">支持情况</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">createTimeseries</td><td style="text-align:right;">外部接口</td><td style="text-align:center;">支持</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">createAlignedTimeSeries</td><td style="text-align:right;">外部接口</td><td style="text-align:center;">支持</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">showTimeseries</td><td style="text-align:right;">外部接口</td><td style="text-align:center;">部分支持</td><td style="text-align:center;">不支持LATEST</td></tr><tr><td style="text-align:left;">changeAlias</td><td style="text-align:right;">外部接口</td><td style="text-align:center;">支持</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">upsertTagsAndAttributes</td><td style="text-align:right;">外部接口</td><td style="text-align:center;">支持</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">addAttributes</td><td style="text-align:right;">外部接口</td><td style="text-align:center;">支持</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">addTags</td><td style="text-align:right;">外部接口</td><td style="text-align:center;">支持</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">dropTagsOrAttributes</td><td style="text-align:right;">外部接口</td><td style="text-align:center;">支持</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">setTagsOrAttributesValue</td><td style="text-align:right;">外部接口</td><td style="text-align:center;">支持</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">renameTagOrAttributeKey</td><td style="text-align:right;">外部接口</td><td style="text-align:center;">支持</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">*template</td><td style="text-align:right;">外部接口</td><td style="text-align:center;">不支持</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">*trigger</td><td style="text-align:right;">外部接口</td><td style="text-align:center;">不支持</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">deleteSchemaRegion</td><td style="text-align:right;">内部接口</td><td style="text-align:center;">支持</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">autoCreateDeviceMNode</td><td style="text-align:right;">内部接口</td><td style="text-align:center;">不支持</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">isPathExist</td><td style="text-align:right;">内部接口</td><td style="text-align:center;">支持</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">getAllTimeseriesCount</td><td style="text-align:right;">内部接口</td><td style="text-align:center;">支持</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">getDevicesNum</td><td style="text-align:right;">内部接口</td><td style="text-align:center;">支持</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">getNodesCountInGivenLevel</td><td style="text-align:right;">内部接口</td><td style="text-align:center;">有条件支持</td><td style="text-align:center;">路径不支持通配</td></tr><tr><td style="text-align:left;">getMeasurementCountGroupByLevel</td><td style="text-align:right;">内部接口</td><td style="text-align:center;">支持</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">getNodesListInGivenLevel</td><td style="text-align:right;">内部接口</td><td style="text-align:center;">有条件支持</td><td style="text-align:center;">路径不支持通配</td></tr><tr><td style="text-align:left;">getChildNodePathInNextLevel</td><td style="text-align:right;">内部接口</td><td style="text-align:center;">有条件支持</td><td style="text-align:center;">路径不支持通配</td></tr><tr><td style="text-align:left;">getChildNodeNameInNextLevel</td><td style="text-align:right;">内部接口</td><td style="text-align:center;">有条件支持</td><td style="text-align:center;">路径不支持通配</td></tr><tr><td style="text-align:left;">getBelongedDevices</td><td style="text-align:right;">内部接口</td><td style="text-align:center;">支持</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">getMatchedDevices</td><td style="text-align:right;">内部接口</td><td style="text-align:center;">支持</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">getMeasurementPaths</td><td style="text-align:right;">内部接口</td><td style="text-align:center;">支持</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">getMeasurementPathsWithAlias</td><td style="text-align:right;">内部接口</td><td style="text-align:center;">支持</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">getAllMeasurementByDevicePath</td><td style="text-align:right;">内部接口</td><td style="text-align:center;">支持</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">getDeviceNode</td><td style="text-align:right;">内部接口</td><td style="text-align:center;">支持</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">getMeasurementMNodes</td><td style="text-align:right;">内部接口</td><td style="text-align:center;">支持</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">getSeriesSchemasAndReadLockDevice</td><td style="text-align:right;">内部接口</td><td style="text-align:center;">支持</td><td style="text-align:center;"></td></tr></tbody></table>`,16)]))}const g=e(a,[["render",s],["__file","SchemaRegion-rocksdb.html.vue"]]),c=JSON.parse('{"path":"/zh/UserGuide/V1.0.x/Data-Modeling/SchemaRegion-rocksdb.html","title":"背景","lang":"zh-CN","frontmatter":{"description":"背景 在IoTDB服务启动时，通过加载日志文件mlog.bin组织元数据信息，并将结果长期持有在内存中；随着元数据的不断增长，内存会持续上涨；为支持海量元数据场景下，内存在可控范围内波动，我们提供了基于rocksDB的元数据存储方式。 使用 首先使用下面的命令将 schema-engine-rocksdb 打包 命令运行结束后，在其 target/sc...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.0.x/Data-Modeling/SchemaRegion-rocksdb.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/Data-Modeling/SchemaRegion-rocksdb.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"背景"}],["meta",{"property":"og:description","content":"背景 在IoTDB服务启动时，通过加载日志文件mlog.bin组织元数据信息，并将结果长期持有在内存中；随着元数据的不断增长，内存会持续上涨；为支持海量元数据场景下，内存在可控范围内波动，我们提供了基于rocksDB的元数据存储方式。 使用 首先使用下面的命令将 schema-engine-rocksdb 打包 命令运行结束后，在其 target/sc..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"背景\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","username":"CritasWang","email":"critas@outlook.com","commits":1,"url":"https://github.com/CritasWang"}]},"readingTime":{"minutes":2.89,"words":866},"filePathRelative":"zh/UserGuide/V1.0.x/Data-Modeling/SchemaRegion-rocksdb.md","localizedDate":"2023年7月10日","autoDesc":true}');export{g as comp,c as data};
