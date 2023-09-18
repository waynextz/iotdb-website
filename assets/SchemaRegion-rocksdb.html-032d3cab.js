import{_ as t,o as e,c as d,a as l,f as n}from"./app-181aa290.js";const i={},a=n(`<h1 id="schemaregion-rocksdb-基于rocksdb的元数据存储方式" tabindex="-1"><a class="header-anchor" href="#schemaregion-rocksdb-基于rocksdb的元数据存储方式" aria-hidden="true">#</a> SchemaRegion RocksDB (基于rocksDB的元数据存储方式)</h1><h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2><p>在IoTDB服务启动时，通过加载日志文件<code>mlog.bin</code>组织元数据信息，并将结果长期持有在内存中；随着元数据的不断增长，内存会持续上涨；为支持海量元数据场景下，内存在可控范围内波动，我们提供了基于rocksDB的元数据存储方式。</p><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><p>首先使用下面的命令将 <code>schema-engine-rocksdb</code> 打包</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mvn clean package <span class="token parameter variable">-pl</span> schema-engine-rocksdb <span class="token parameter variable">-am</span> <span class="token parameter variable">-DskipTests</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令运行结束后，在其 target/schema-engine-rocksdb 中会有一个 lib 文件夹和 conf 文件夹。将 conf 文件夹下的文件拷贝到 server 的 conf 文件夹中，将 lib 文件夹下的文件也拷贝到<br> server 的 lib 的文件夹中。</p><p>在系统配置文件<code>iotdb-datanode.properties</code>中，将配置项<code>schema_engine_mode</code>修改为<code>Rocksdb_based</code>， 如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>####################
### Schema Engine Configuration
####################
# Choose the mode of schema engine. The value could be Memory,PBTree and Rocksdb_based. If the provided value doesn&#39;t match any pre-defined value, Memory mode will be used as default.
# Datatype: string
schema_engine_mode=Rocksdb_based
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当指定rocksdb作为元数据的存储方式时，我们开放了rocksdb相关的配置参数，您可以通过修改配置文件<code>schema-rocksdb.properties</code>，根据自己的需求，进行合理的参数调整，例如查询的缓存等。如没有特殊需求，使用默认值即可。</p><h2 id="功能支持说明" tabindex="-1"><a class="header-anchor" href="#功能支持说明" aria-hidden="true">#</a> 功能支持说明</h2><p>该模块仍在不断完善中，部分功能暂不支持，功能模块支持情况如下：</p><table><thead><tr><th style="text-align:left;">功能</th><th style="text-align:right;">支持情况</th></tr></thead><tbody><tr><td style="text-align:left;">时间序列增删</td><td style="text-align:right;">支持</td></tr><tr><td style="text-align:left;">路径通配符（* 及 **）查询</td><td style="text-align:right;">支持</td></tr><tr><td style="text-align:left;">tag增删</td><td style="text-align:right;">支持</td></tr><tr><td style="text-align:left;">对齐时间序列</td><td style="text-align:right;">支持</td></tr><tr><td style="text-align:left;">节点名称(*)通配</td><td style="text-align:right;">不支持</td></tr><tr><td style="text-align:left;">元数据模板template</td><td style="text-align:right;">不支持</td></tr><tr><td style="text-align:left;">tag索引</td><td style="text-align:right;">不支持</td></tr><tr><td style="text-align:left;">continuous query</td><td style="text-align:right;">不支持</td></tr></tbody></table><h2 id="附-所有接口支持情况" tabindex="-1"><a class="header-anchor" href="#附-所有接口支持情况" aria-hidden="true">#</a> 附: 所有接口支持情况</h2><p>外部接口，即客户端可以感知到，相关sql不支持；</p><p>内部接口，即服务内部的其他模块调用逻辑，与外部sql无直接依赖关系；</p><table><thead><tr><th style="text-align:left;">接口名称</th><th style="text-align:right;">接口类型</th><th style="text-align:center;">支持情况</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">createTimeseries</td><td style="text-align:right;">外部接口</td><td style="text-align:center;">支持</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">createAlignedTimeSeries</td><td style="text-align:right;">外部接口</td><td style="text-align:center;">支持</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">showTimeseries</td><td style="text-align:right;">外部接口</td><td style="text-align:center;">部分支持</td><td style="text-align:center;">不支持LATEST</td></tr><tr><td style="text-align:left;">changeAlias</td><td style="text-align:right;">外部接口</td><td style="text-align:center;">支持</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">upsertTagsAndAttributes</td><td style="text-align:right;">外部接口</td><td style="text-align:center;">支持</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">addAttributes</td><td style="text-align:right;">外部接口</td><td style="text-align:center;">支持</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">addTags</td><td style="text-align:right;">外部接口</td><td style="text-align:center;">支持</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">dropTagsOrAttributes</td><td style="text-align:right;">外部接口</td><td style="text-align:center;">支持</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">setTagsOrAttributesValue</td><td style="text-align:right;">外部接口</td><td style="text-align:center;">支持</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">renameTagOrAttributeKey</td><td style="text-align:right;">外部接口</td><td style="text-align:center;">支持</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">*template</td><td style="text-align:right;">外部接口</td><td style="text-align:center;">不支持</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">*trigger</td><td style="text-align:right;">外部接口</td><td style="text-align:center;">不支持</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">deleteSchemaRegion</td><td style="text-align:right;">内部接口</td><td style="text-align:center;">支持</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">autoCreateDeviceMNode</td><td style="text-align:right;">内部接口</td><td style="text-align:center;">不支持</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">isPathExist</td><td style="text-align:right;">内部接口</td><td style="text-align:center;">支持</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">getAllTimeseriesCount</td><td style="text-align:right;">内部接口</td><td style="text-align:center;">支持</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">getDevicesNum</td><td style="text-align:right;">内部接口</td><td style="text-align:center;">支持</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">getNodesCountInGivenLevel</td><td style="text-align:right;">内部接口</td><td style="text-align:center;">有条件支持</td><td style="text-align:center;">路径不支持通配</td></tr><tr><td style="text-align:left;">getMeasurementCountGroupByLevel</td><td style="text-align:right;">内部接口</td><td style="text-align:center;">支持</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">getNodesListInGivenLevel</td><td style="text-align:right;">内部接口</td><td style="text-align:center;">有条件支持</td><td style="text-align:center;">路径不支持通配</td></tr><tr><td style="text-align:left;">getChildNodePathInNextLevel</td><td style="text-align:right;">内部接口</td><td style="text-align:center;">有条件支持</td><td style="text-align:center;">路径不支持通配</td></tr><tr><td style="text-align:left;">getChildNodeNameInNextLevel</td><td style="text-align:right;">内部接口</td><td style="text-align:center;">有条件支持</td><td style="text-align:center;">路径不支持通配</td></tr><tr><td style="text-align:left;">getBelongedDevices</td><td style="text-align:right;">内部接口</td><td style="text-align:center;">支持</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">getMatchedDevices</td><td style="text-align:right;">内部接口</td><td style="text-align:center;">支持</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">getMeasurementPaths</td><td style="text-align:right;">内部接口</td><td style="text-align:center;">支持</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">getMeasurementPathsWithAlias</td><td style="text-align:right;">内部接口</td><td style="text-align:center;">支持</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">getAllMeasurementByDevicePath</td><td style="text-align:right;">内部接口</td><td style="text-align:center;">支持</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">getDeviceNode</td><td style="text-align:right;">内部接口</td><td style="text-align:center;">支持</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">getMeasurementMNodes</td><td style="text-align:right;">内部接口</td><td style="text-align:center;">支持</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">getSeriesSchemasAndReadLockDevice</td><td style="text-align:right;">内部接口</td><td style="text-align:center;">支持</td><td style="text-align:center;"></td></tr></tbody></table>`,17);function r(s,g){return e(),d("div",null,[l(`

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

`),a])}const y=t(i,[["render",r],["__file","SchemaRegion-rocksdb.html.vue"]]);export{y as default};
