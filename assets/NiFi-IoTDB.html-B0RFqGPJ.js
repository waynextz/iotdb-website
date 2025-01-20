import{_ as t,c as o,b as d,o as a}from"./app-CLygX6ac.js";const l={};function i(s,e){return a(),o("div",null,e[0]||(e[0]=[d(`<h1 id="apache-nifi" tabindex="-1"><a class="header-anchor" href="#apache-nifi"><span>Apache NiFi</span></a></h1><h2 id="apache-nifi简介" tabindex="-1"><a class="header-anchor" href="#apache-nifi简介"><span>Apache NiFi简介</span></a></h2><p>Apache NiFi 是一个易用的、功能强大的、可靠的数据处理和分发系统。</p><p>Apache NiFi 支持强大的、可伸缩的数据路由、转换和系统中介逻辑的有向图。</p><p>Apache NiFi 包含以下功能：</p><ul><li>基于浏览器的用户接口： <ul><li>设计、控制、反馈和监控的无缝体验</li></ul></li><li>数据起源跟踪 <ul><li>从头到尾完整的信息族谱</li></ul></li><li>丰富的配置 <ul><li>丢失容忍和保证交付</li><li>低延迟和高吞吐</li><li>动态优先级策略</li><li>运行时可以修改流配置</li><li>反向压力控制</li></ul></li><li>扩展设计 <ul><li>用于定制 processors 和 services 的组件体系结构</li><li>快速开发和迭代测试</li></ul></li><li>安全会话 <ul><li>带有可配置认证策略的 HTTPS 协议</li><li>多租户授权和策略管理</li><li>包括TLS和SSH的加密通信的标准协议</li></ul></li></ul><h2 id="putiotdbrecord" tabindex="-1"><a class="header-anchor" href="#putiotdbrecord"><span>PutIoTDBRecord</span></a></h2><p>这是一个用于数据写入的处理器。它使用配置的 Record Reader 将传入 FlowFile 的内容读取为单独的记录，并使用本机接口将它们写入 Apache IoTDB。</p><h3 id="putiotdbrecord的配置项" tabindex="-1"><a class="header-anchor" href="#putiotdbrecord的配置项"><span>PutIoTDBRecord的配置项</span></a></h3><table><thead><tr><th>配置项</th><th>描述</th><th>默认值</th><th>是否必填</th></tr></thead><tbody><tr><td>Host</td><td>IoTDB 的主机名</td><td>null</td><td>true</td></tr><tr><td>Port</td><td>IoTDB 的端口</td><td>6667</td><td>true</td></tr><tr><td>Username</td><td>IoTDB 的用户名</td><td>null</td><td>true</td></tr><tr><td>Password</td><td>IoTDB 的密码</td><td>null</td><td>true</td></tr><tr><td>Prefix</td><td>将被写入IoTDB的数据的tsName前缀 以root. 开头 <br> 可以使用Nifi expression language做动态替换.</td><td>null</td><td>true</td></tr><tr><td>Time</td><td>时间字段名</td><td>null</td><td>true</td></tr><tr><td>Record Reader</td><td>指定一个 Record Reader controller service 来解析数据，并且推断数据格式。</td><td>null</td><td>true</td></tr><tr><td>Schema</td><td>IoTDB 需要的 schema 不能很好的被 NiFi 支持，因此你可以在这里自定义 schema。<br>除此之外，你可以通过这个方式设置编码和压缩类型。如果你没有设置这个配置，就会使用 Record Reader 推断的 schema。<br>这个配置可以通过 Attributes 的表达式来更新。</td><td>null</td><td>false</td></tr><tr><td>Aligned</td><td>是否使用 aligned 接口？<br>这个配置可以通过 Attributes 的表达式来更新。</td><td>false</td><td>false</td></tr><tr><td>MaxRowNumber</td><td>指定 tablet 的最大行数。<br>这个配置可以通过 Attributes 的表达式来更新。</td><td>1024</td><td>false</td></tr></tbody></table><h3 id="flowfile-的推断数据类型" tabindex="-1"><a class="header-anchor" href="#flowfile-的推断数据类型"><span>Flowfile 的推断数据类型</span></a></h3><p>如果要使用推断类型，需要注意以下几点：</p><ol><li>输入的 flowfile 需要能被 <code>Record Reader</code> 读取。</li><li>flowfile的 schema 中必须包含以时间字段名属性命名的字段</li><li><code>Time</code>的数据类型只能是 <code>STRING</code> 或者 <code>LONG </code>。</li><li>除<code>Time</code> 以外的列必须以 <code>root.</code> 开头。</li><li>支持的数据类型有： <code>INT</code>，<code>LONG</code>， <code>FLOAT</code>， <code>DOUBLE</code>， <code>BOOLEAN</code>， <code>TEXT</code>。</li></ol><h3 id="通过配置项自定义-schema" tabindex="-1"><a class="header-anchor" href="#通过配置项自定义-schema"><span>通过配置项自定义 schema</span></a></h3><p>如上所述，通过配置项来自定义 schema 比起推断的 schema来说，是一种更加灵活和强大的方式。</p><p><code>Schema</code> 配置项的解构如下:</p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#E06C75;">   &quot;fields&quot;</span><span style="color:#ABB2BF;">: [{</span></span>
<span class="line"><span style="color:#E06C75;">      &quot;tsName&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;s1&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">      &quot;dataType&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;INT32&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">      &quot;encoding&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;RLE&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">      &quot;compressionType&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;GZIP&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">   }, {</span></span>
<span class="line"><span style="color:#E06C75;">      &quot;tsName&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;s2&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">      &quot;dataType&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;INT64&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">      &quot;encoding&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;RLE&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">      &quot;compressionType&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;GZIP&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">   }]</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong></p><ol><li>flowfile 的第一列数据必须为 <code>Time</code>。剩下的必须与 <code>fields</code> 配置中保持一样的顺序。</li><li>定义 shema 的 JSON 中必须包含 <code>timeType</code> and <code>fields</code> 这两项。</li><li><code>timeType</code> 只支持 <code>LONG</code> 和 <code>STRING</code> 这两个选项。</li><li><code>tsName</code> 和 <code>dataType</code> 这两项必须被设置。</li><li>当数据插入IoTDB时，Prefix属性会被添加到 tsName以作为插入的字段名。</li><li>支持的 <code>dataTypes</code> 有：<code>INT32</code>， <code>INT64</code>， <code>FLOAT</code>， <code>DOUBLE</code>， <code>BOOLEAN</code>， <code>TEXT</code>。</li><li>支持的 <code>encoding</code> 有： <code>PLAIN</code>， <code>DICTIONARY</code>， <code>RLE</code>， <code>DIFF</code>， <code>TS_2DIFF</code>， <code>BITMAP</code>， <code>GORILLA_V1</code>， <code>REGULAR</code>， <code>GORILLA</code>，<code>ZIGZAG</code>，<code>CHIMP</code>， <code>SPRINTZ</code>， <code>RLBE</code>。</li><li>支持的 <code>compressionType</code> 有： <code>UNCOMPRESSED</code>， <code>SNAPPY</code>， <code>GZIP</code>， <code>LZO</code>， <code>SDT</code>， <code>PAA</code>， <code>PLA</code>， <code>LZ4</code>， <code>ZSTD</code>， <code>LZMA2</code>。</li></ol><h2 id="relationships" tabindex="-1"><a class="header-anchor" href="#relationships"><span>Relationships</span></a></h2><table><thead><tr><th>relationship</th><th>描述</th></tr></thead><tbody><tr><td>success</td><td>数据能被正确的写入。</td></tr><tr><td>failure</td><td>schema 或者数据有异常。</td></tr></tbody></table><h2 id="queryiotdbrecord" tabindex="-1"><a class="header-anchor" href="#queryiotdbrecord"><span>QueryIoTDBRecord</span></a></h2><p>这是一个用于数据读取的处理器。它通过读取 FlowFile 的内容中的SQL 查询来对IoTDB的原生接口进行访问，并将查询结果用Record Writer写入 flowfile。</p><h3 id="queryiotdbrecord的配置项" tabindex="-1"><a class="header-anchor" href="#queryiotdbrecord的配置项"><span>QueryIoTDBRecord的配置项</span></a></h3><table><thead><tr><th>配置项</th><th>描述</th><th>默认值</th><th>是否必填</th></tr></thead><tbody><tr><td>Host</td><td>IoTDB 的主机名</td><td>null</td><td>true</td></tr><tr><td>Port</td><td>IoTDB 的端口</td><td>6667</td><td>true</td></tr><tr><td>Username</td><td>IoTDB 的用户名</td><td>null</td><td>true</td></tr><tr><td>Password</td><td>IoTDB 的密码</td><td>null</td><td>true</td></tr><tr><td>Record Writer</td><td>指定一个 Record Writer controller service 来写入数据。</td><td>null</td><td>true</td></tr><tr><td>iotdb-query</td><td>需要执行的IoTDB query <br>。 Note: 如果有连入侧的连接那么查询会从FlowFile的内容中提取，否则使用当前配置的属性</td><td>null</td><td>false</td></tr><tr><td>iotdb-query-chunk-size</td><td>返回的结果可以进行分块，数据流中会返回一批按设置大小切分的数据，而不是一个单一的响应. 分块查询可以返回无限量的行。 注意: 数据分块只有在设置不为0时启用</td><td>0</td><td>false</td></tr></tbody></table><h2 id="relationships-1" tabindex="-1"><a class="header-anchor" href="#relationships-1"><span>Relationships</span></a></h2><table><thead><tr><th>relationship</th><th>描述</th></tr></thead><tbody><tr><td>success</td><td>数据能被正确的写入。</td></tr><tr><td>failure</td><td>schema 或者数据有异常。</td></tr></tbody></table>`,27)]))}const c=t(l,[["render",i],["__file","NiFi-IoTDB.html.vue"]]),n=JSON.parse('{"path":"/zh/UserGuide/V1.2.x/Ecosystem-Integration/NiFi-IoTDB.html","title":"Apache NiFi","lang":"zh-CN","frontmatter":{"description":"Apache NiFi Apache NiFi简介 Apache NiFi 是一个易用的、功能强大的、可靠的数据处理和分发系统。 Apache NiFi 支持强大的、可伸缩的数据路由、转换和系统中介逻辑的有向图。 Apache NiFi 包含以下功能： 基于浏览器的用户接口： 设计、控制、反馈和监控的无缝体验 数据起源跟踪 从头到尾完整的信息族谱 丰富...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.2.x/Ecosystem-Integration/NiFi-IoTDB.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.2.x/Ecosystem-Integration/NiFi-IoTDB.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Apache NiFi"}],["meta",{"property":"og:description","content":"Apache NiFi Apache NiFi简介 Apache NiFi 是一个易用的、功能强大的、可靠的数据处理和分发系统。 Apache NiFi 支持强大的、可伸缩的数据路由、转换和系统中介逻辑的有向图。 Apache NiFi 包含以下功能： 基于浏览器的用户接口： 设计、控制、反馈和监控的无缝体验 数据起源跟踪 从头到尾完整的信息族谱 丰富..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-08-12T04:20:54.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-12T04:20:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Apache NiFi\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-12T04:20:54.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Apache NiFi简介","slug":"apache-nifi简介","link":"#apache-nifi简介","children":[]},{"level":2,"title":"PutIoTDBRecord","slug":"putiotdbrecord","link":"#putiotdbrecord","children":[{"level":3,"title":"PutIoTDBRecord的配置项","slug":"putiotdbrecord的配置项","link":"#putiotdbrecord的配置项","children":[]},{"level":3,"title":"Flowfile 的推断数据类型","slug":"flowfile-的推断数据类型","link":"#flowfile-的推断数据类型","children":[]},{"level":3,"title":"通过配置项自定义 schema","slug":"通过配置项自定义-schema","link":"#通过配置项自定义-schema","children":[]}]},{"level":2,"title":"Relationships","slug":"relationships","link":"#relationships","children":[]},{"level":2,"title":"QueryIoTDBRecord","slug":"queryiotdbrecord","link":"#queryiotdbrecord","children":[{"level":3,"title":"QueryIoTDBRecord的配置项","slug":"queryiotdbrecord的配置项","link":"#queryiotdbrecord的配置项","children":[]}]},{"level":2,"title":"Relationships","slug":"relationships-1","link":"#relationships-1","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1723436454000,"contributors":[{"name":"W1y1r","username":"W1y1r","email":"150988475+W1y1r@users.noreply.github.com","commits":1,"url":"https://github.com/W1y1r"},{"name":"Lei","username":"Lei","email":"33376433+LeiRui@users.noreply.github.com","commits":1,"url":"https://github.com/Lei"},{"name":"wanghui42","username":"wanghui42","email":"105700158+wanghui42@users.noreply.github.com","commits":1,"url":"https://github.com/wanghui42"},{"name":"Haonan","username":"Haonan","email":"hhaonan@outlook.com","commits":1,"url":"https://github.com/Haonan"},{"name":"CritasWang","username":"CritasWang","email":"critas@outlook.com","commits":1,"url":"https://github.com/CritasWang"}]},"readingTime":{"minutes":4.18,"words":1255},"filePathRelative":"zh/UserGuide/V1.2.x/Ecosystem-Integration/NiFi-IoTDB.md","localizedDate":"2023年7月10日","autoDesc":true}');export{c as comp,n as data};
