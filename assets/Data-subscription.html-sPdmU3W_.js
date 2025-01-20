import{_ as o,c as l,b as t,d as n,e as s,a as i,f as r,r as p,o as c}from"./app-CLygX6ac.js";const d={};function u(m,e){const a=p("RouteLink");return c(),l("div",null,[e[3]||(e[3]=t(`<h1 id="数据订阅" tabindex="-1"><a class="header-anchor" href="#数据订阅"><span>数据订阅</span></a></h1><h2 id="_1-功能介绍" tabindex="-1"><a class="header-anchor" href="#_1-功能介绍"><span>1. 功能介绍</span></a></h2><p>IoTDB 数据订阅模块（又称 IoTDB 订阅客户端）是IoTDB V1.3.3 版本后支持的功能，它为用户提供了一种区别于数据查询的流式数据消费方式。它参考了 Kafka 等消息队列产品的基本概念和逻辑，<strong>提供数据订阅和消费接口</strong>，但并不是为了完全替代这些消费队列的产品，更多的是在简单流式获取数据的场景为用户提供更加便捷的数据订阅服务。</p><p>在下面应用场景中，使用 IoTDB 订阅客户端消费数据会有显著的优势：</p><ol><li><strong>持续获取最新数据</strong>：使用订阅的方式，比定时查询更实时、应用编程更简单、系统负担更小；</li><li><strong>简化数据推送至第三方系统</strong>：无需在 IoTDB 内部开发不同系统的数据推送组件，可以在第三方系统内实现数据的流式获取，更方便将数据发送至 Flink、Kafka、DataX、Camel、MySQL、PG 等系统。</li></ol><h2 id="_2-主要概念" tabindex="-1"><a class="header-anchor" href="#_2-主要概念"><span>2. 主要概念</span></a></h2><p>IoTDB 订阅客户端包含 3 个核心概念：Topic、Consumer、Consumer Group，具体关系如下图</p><div align="center"><img src="https://alioss.timecho.com/docs/img/Data-sub01.png" alt="" style="width:60%;"></div><ol><li><p><strong>Topic（主题）</strong>: Topic 是 IoTDB 的数据空间，由路径和时间范围表示（如 root.** 的全时间范围）。消费者可以订阅这些主题的数据（当前已有的和未来写入的）。不同于 Kafka，IoTDB 可在数据入库后再创建 Topic，且输出格式可选择 Message 或 TsFile 两种。</p></li><li><p><strong>Consumer（消费者）</strong>: Consumer 是 IoTDB 的订阅客户端，负责接收和处理发布到特定 Topic 的数据。Consumer 从队列中获取数据并进行相应的处理。在 IoTDB 订阅客户端中提供了两种类型的 Consumers:</p></li></ol><ul><li>一种是 <code>SubscriptionPullConsumer</code>，对应的是消息队列中的 pull 消费模式，用户代码需要主动调用数据获取逻辑</li><li>一种是 <code>SubscriptionPushConsumer</code>，对应的是消息队列中的 push 消费模式，用户代码由新到达的数据事件触发</li></ul><ol start="3"><li><strong>Consumer Group（消费者组）</strong>: Consumer Group 是一组 Consumers 的集合，拥有相同 Consumer Group ID 的消费者属于同一个消费者组。Consumer Group 有以下特点：</li></ol><ul><li>Consumer Group 与 Consumer 为一对多的关系。即一个 consumer group 中的 consumers 可以有任意多个，但不允许一个 consumer 同时加入多个 consumer groups</li><li>允许一个 Consumer Group 中有不同类型的 Consumer（<code>SubscriptionPullConsumer</code> 和 <code>SubscriptionPushConsumer</code>）</li><li>一个 topic 不需要被一个 consumer group 中的所有 consumer 订阅</li><li>当同一个 Consumer Group 中不同的 Consumers 订阅了相同的 Topic 时，该 Topic 下的每条数据只会被组内的一个 Consumer 处理，确保数据不会被重复处理</li></ul><h2 id="_3-sql-语句" tabindex="-1"><a class="header-anchor" href="#_3-sql-语句"><span>3. SQL 语句</span></a></h2><h3 id="_3-1-topic-管理" tabindex="-1"><a class="header-anchor" href="#_3-1-topic-管理"><span>3.1 Topic 管理</span></a></h3><p>IoTDB 支持通过 SQL 语句对 Topic 进行创建、删除、查看操作。Topic状态变化如下图所示：</p><div align="center"><img src="https://alioss.timecho.com/docs/img/Data_sub_02.png" alt="" style="width:60%;"></div><h4 id="_3-1-1-创建-topic" tabindex="-1"><a class="header-anchor" href="#_3-1-1-创建-topic"><span>3.1.1 创建 Topic</span></a></h4><p>SQL 语句为：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">    CREATE</span><span style="color:#ABB2BF;"> TOPIC </span><span style="color:#E06C75;">[IF NOT EXISTS]</span><span style="color:#56B6C2;"> &lt;</span><span style="color:#ABB2BF;">topicName</span><span style="color:#56B6C2;">&gt;</span><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#C678DD;">    WITH</span><span style="color:#ABB2BF;"> (</span></span>
<span class="line"><span style="color:#E06C75;">    [&lt;parameter&gt; = &lt;value&gt;,]</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    );</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>IF NOT EXISTS 语义</strong>：用于创建操作中，确保当指定 Topic 不存在时，执行创建命令，防止因尝试创建已存在的 Topic 而导致报错。</p><p>各参数详细解释如下：</p><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">是否必填（默认值）</th><th style="text-align:left;">参数含义</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>path</strong></td><td style="text-align:left;">optional: <code>root.**</code></td><td style="text-align:left;">topic 对应订阅数据时间序列的路径 path，表示一组需要订阅的时间序列集合</td></tr><tr><td style="text-align:left;"><strong>start-time</strong></td><td style="text-align:left;">optional: <code>MIN_VALUE</code></td><td style="text-align:left;">topic 对应订阅数据时间序列的开始时间（event time）可以为 ISO 格式，例如 2011-12-03T10:15:30 或 2011-12-03T10:15:30+01:00也可以为 long 值，含义为裸时间戳，单位与数据库时间戳精度一致支持特殊 value <strong><code>now</code></strong>，含义为 topic 的创建时间，当 start-time 为 <code>now</code> 且 end-time 为 MAX_VALUE 时表示只订阅实时数据</td></tr><tr><td style="text-align:left;"><strong>end-time</strong></td><td style="text-align:left;">optional: <code>MAX_VALUE</code></td><td style="text-align:left;">topic 对应订阅数据时间序列的结束时间（event time）可以为 ISO 格式，例如 2011-12-03T10:15:30 或 2011-12-03T10:15:30+01:00也可以为 long 值，含义为裸时间戳，单位与数据库时间戳精度一致支持特殊 value <code>now</code>，含义为 topic 的创建时间，当 end-time 为 <code>now</code> 且 start-time 为 MIN_VALUE 时表示只订阅历史数据</td></tr><tr><td style="text-align:left;"><strong>processor</strong></td><td style="text-align:left;">optional: <code>do-nothing-processor</code></td><td style="text-align:left;">processor 插件名及其参数配置，表示对原始订阅数据应用的自定义处理逻辑，可以通过类似 pipe processor 插件的方式指定</td></tr><tr><td style="text-align:left;"><strong>format</strong></td><td style="text-align:left;">optional: <code>SessionDataSetsHandler</code></td><td style="text-align:left;">表示从该主题订阅出的数据呈现形式，目前支持下述两种数据形式：<code>SessionDataSetsHandler</code>：使用 <code>SubscriptionSessionDataSetsHandler</code> 获取从该主题订阅出的数据，消费者可以按行消费每条数据<code>TsFileHandler</code>：使用 <code>SubscriptionTsFileHandler</code> 获取从该主题订阅出的数据，消费者可以直接订阅到存储相应数据的 TsFile</td></tr><tr><td style="text-align:left;"><strong>mode</strong> <strong>(v1.3.3.2 及之后版本支持)</strong></td><td style="text-align:left;">option: <code>live</code></td><td style="text-align:left;">topic 对应的订阅模式，有两个选项：<code>live</code>：订阅该主题时，订阅的数据集模式为动态数据集，即可以不断消费到最新的数据<code>snapshot</code>：consumer 订阅该主题时，订阅的数据集模式为静态数据集，即 consumer group 订阅该主题的时刻（不是创建主题的时刻）数据的 snapshot；形成订阅后的静态数据集不支持 TTL</td></tr><tr><td style="text-align:left;"><strong>loose-range</strong> <strong>(v1.3.3.2 及之后版本支持)</strong></td><td style="text-align:left;">option: <code>&quot;&quot;</code></td><td style="text-align:left;">String: 是否严格按照 path 和 time range 来筛选该 topic 对应的数据，例如：<code>&quot;&quot;</code>：严格按照 path 和 time range 来筛选该 topic 对应的数据<code>&quot;time&quot;</code>：不严格按照 time range 来筛选该 topic 对应的数据（粗筛）；严格按照 path 来筛选该 topic 对应的数据<code>&quot;path&quot;</code>：不严格按照 path 来筛选该 topic 对应的数据（粗筛）；严格按照 time range 来筛选该 topic 对应的数据<code>&quot;time, path&quot;</code> / <code>&quot;path, time&quot;</code> / <code>&quot;all&quot;</code>：不严格按照 path 和 time range 来筛选该 topic 对应的数据（粗筛）</td></tr></tbody></table><p>示例如下：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#7F848E;font-style:italic;">-- 全量订阅</span></span>
<span class="line"><span style="color:#C678DD;">CREATE</span><span style="color:#ABB2BF;"> TOPIC root_all;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">-- 自定义订阅</span></span>
<span class="line"><span style="color:#C678DD;">CREATE</span><span style="color:#ABB2BF;"> TOPIC </span><span style="color:#C678DD;">IF</span><span style="color:#C678DD;"> NOT</span><span style="color:#C678DD;"> EXISTS</span><span style="color:#ABB2BF;"> db_timerange</span></span>
<span class="line"><span style="color:#C678DD;">WITH</span><span style="color:#ABB2BF;"> (</span></span>
<span class="line"><span style="color:#98C379;">  &#39;path&#39;</span><span style="color:#56B6C2;"> =</span><span style="color:#98C379;"> &#39;root.db.**&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#98C379;">  &#39;start-time&#39;</span><span style="color:#56B6C2;"> =</span><span style="color:#98C379;"> &#39;2023-01-01&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#98C379;">  &#39;end-time&#39;</span><span style="color:#56B6C2;"> =</span><span style="color:#98C379;"> &#39;2023-12-31&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-1-2-删除-topic" tabindex="-1"><a class="header-anchor" href="#_3-1-2-删除-topic"><span>3.1.2 删除 Topic</span></a></h4><p>Topic 在没有被订阅的情况下，才能被删除，Topic 被删除时，其相关的消费进度都会被清理</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">DROP</span><span style="color:#ABB2BF;"> TOPIC </span><span style="color:#E06C75;">[IF EXISTS]</span><span style="color:#56B6C2;"> &lt;</span><span style="color:#ABB2BF;">topicName</span><span style="color:#56B6C2;">&gt;</span><span style="color:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>IF EXISTS 语义</strong>：用于删除操作中，确保当指定 Topic 存在时，执行删除命令，防止因尝试删除不存在的 Topic 而导致报错。</p><h4 id="_3-1-3-查看-topic" tabindex="-1"><a class="header-anchor" href="#_3-1-3-查看-topic"><span>3.1.3 查看 Topic</span></a></h4><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#ABB2BF;">SHOW TOPICS;</span></span>
<span class="line"><span style="color:#ABB2BF;">SHOW TOPIC </span><span style="color:#56B6C2;">&lt;</span><span style="color:#ABB2BF;">topicName</span><span style="color:#56B6C2;">&gt;</span><span style="color:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>结果集：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#E06C75;">[TopicName|TopicConfigs]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>TopicName：主题 ID</li><li>TopicConfigs：主题配置</li></ul><h3 id="_3-2-查看订阅状态" tabindex="-1"><a class="header-anchor" href="#_3-2-查看订阅状态"><span>3.2 查看订阅状态</span></a></h3><p>查看所有订阅关系：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#7F848E;font-style:italic;">-- 查询所有的 topics 与 consumer group 的订阅关系</span></span>
<span class="line"><span style="color:#ABB2BF;">SHOW SUBSCRIPTIONS</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">-- 查询某个 topic 下所有的 subscriptions</span></span>
<span class="line"><span style="color:#ABB2BF;">SHOW SUBSCRIPTIONS </span><span style="color:#C678DD;">ON</span><span style="color:#56B6C2;"> &lt;</span><span style="color:#ABB2BF;">topicName</span><span style="color:#56B6C2;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果集：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#E06C75;">[TopicName|ConsumerGroupName|SubscribedConsumers]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>TopicName：主题 ID</li><li>ConsumerGroupName：用户代码中指定的消费者组 ID</li><li>SubscribedConsumers：该消费者组中订阅了该主题的所有客户端 ID</li></ul><h2 id="_4-api-接口" tabindex="-1"><a class="header-anchor" href="#_4-api-接口"><span>4. API 接口</span></a></h2>`,40)),n("p",null,[e[1]||(e[1]=s("除 SQL 语句外，IoTDB 还支持通过 Java 原生接口使用数据订阅功能。详细语法参见页面：Java 原生接口（")),i(a,{to:"/zh/UserGuide/latest/API/Programming-Java-Native-API.html"},{default:r(()=>e[0]||(e[0]=[s("链接")])),_:1}),e[2]||(e[2]=s("）。"))]),e[4]||(e[4]=t('<h2 id="_5-常见问题" tabindex="-1"><a class="header-anchor" href="#_5-常见问题"><span>5. 常见问题</span></a></h2><h3 id="_5-1-iotdb-数据订阅与-kafka-的区别是什么" tabindex="-1"><a class="header-anchor" href="#_5-1-iotdb-数据订阅与-kafka-的区别是什么"><span>5.1 IoTDB 数据订阅与 Kafka 的区别是什么？</span></a></h3><ol><li>消费有序性</li></ol><ul><li><strong>Kafka 保证消息在单个 partition 内是有序的</strong>，当某个 topic 仅对应一个 partition 且只有一个 consumer 订阅了这个 topic，即可保证该 consumer（单线程） 消费该 topic 数据的顺序即为数据写入的顺序。</li><li>IoTDB 订阅客户端<strong>不保证</strong> consumer 消费数据的顺序即为数据写入的顺序，但会尽量反映数据写入的顺序。</li></ul><ol start="2"><li>消息送达语义</li></ol><ul><li>Kafka 可以通过配置实现 Producer 和 Consumer 的 Exactly once 语义。</li><li>IoTDB 订阅客户端目前无法提供 Consumer 的 Exactly once 语义。</li></ul>',6))])}const g=o(d,[["render",u],["__file","Data-subscription.html.vue"]]),y=JSON.parse('{"path":"/zh/UserGuide/latest/User-Manual/Data-subscription.html","title":"数据订阅","lang":"zh-CN","frontmatter":{"description":"数据订阅 1. 功能介绍 IoTDB 数据订阅模块（又称 IoTDB 订阅客户端）是IoTDB V1.3.3 版本后支持的功能，它为用户提供了一种区别于数据查询的流式数据消费方式。它参考了 Kafka 等消息队列产品的基本概念和逻辑，提供数据订阅和消费接口，但并不是为了完全替代这些消费队列的产品，更多的是在简单流式获取数据的场景为用户提供更加便捷的数据...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/latest/User-Manual/Data-subscription.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/latest/User-Manual/Data-subscription.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"数据订阅"}],["meta",{"property":"og:description","content":"数据订阅 1. 功能介绍 IoTDB 数据订阅模块（又称 IoTDB 订阅客户端）是IoTDB V1.3.3 版本后支持的功能，它为用户提供了一种区别于数据查询的流式数据消费方式。它参考了 Kafka 等消息队列产品的基本概念和逻辑，提供数据订阅和消费接口，但并不是为了完全替代这些消费队列的产品，更多的是在简单流式获取数据的场景为用户提供更加便捷的数据..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-12-16T09:28:08.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-16T09:28:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"数据订阅\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-16T09:28:08.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1. 功能介绍","slug":"_1-功能介绍","link":"#_1-功能介绍","children":[]},{"level":2,"title":"2. 主要概念","slug":"_2-主要概念","link":"#_2-主要概念","children":[]},{"level":2,"title":"3. SQL 语句","slug":"_3-sql-语句","link":"#_3-sql-语句","children":[{"level":3,"title":"3.1 Topic 管理","slug":"_3-1-topic-管理","link":"#_3-1-topic-管理","children":[]},{"level":3,"title":"3.2 查看订阅状态","slug":"_3-2-查看订阅状态","link":"#_3-2-查看订阅状态","children":[]}]},{"level":2,"title":"4. API 接口","slug":"_4-api-接口","link":"#_4-api-接口","children":[]},{"level":2,"title":"5. 常见问题","slug":"_5-常见问题","link":"#_5-常见问题","children":[{"level":3,"title":"5.1 IoTDB 数据订阅与 Kafka 的区别是什么？","slug":"_5-1-iotdb-数据订阅与-kafka-的区别是什么","link":"#_5-1-iotdb-数据订阅与-kafka-的区别是什么","children":[]}]}],"git":{"createdTime":1731401826000,"updatedTime":1734341288000,"contributors":[{"name":"W1y1r","username":"W1y1r","email":"150988475+W1y1r@users.noreply.github.com","commits":3,"url":"https://github.com/W1y1r"},{"name":"StefanieZhao7","username":"StefanieZhao7","email":"131440380+StefanieZhao7@users.noreply.github.com","commits":1,"url":"https://github.com/StefanieZhao7"},{"name":"Xinyi Zhao","username":"Xinyi Zhao","email":"xinyizhao@XinyideMacBook-Pro.local","commits":1,"url":"https://github.com/Xinyi Zhao"}]},"readingTime":{"minutes":6.49,"words":1947},"filePathRelative":"zh/UserGuide/latest/User-Manual/Data-subscription.md","localizedDate":"2024年11月12日","autoDesc":true}');export{g as comp,y as data};
