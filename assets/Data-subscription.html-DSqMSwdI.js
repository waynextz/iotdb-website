import{_ as a,c as n,b as s,d as o,e as t,a as r,w as l,r as c,o as d}from"./app-C6MIQYKi.js";const p={};function u(h,e){const i=c("RouteLink");return d(),n("div",null,[e[3]||(e[3]=s(`<h1 id="data-subscription" tabindex="-1"><a class="header-anchor" href="#data-subscription"><span>Data Subscription</span></a></h1><h2 id="_1-feature-introduction" tabindex="-1"><a class="header-anchor" href="#_1-feature-introduction"><span>1. Feature Introduction</span></a></h2><p>The IoTDB data subscription module (also known as the IoTDB subscription client) is a feature supported after IoTDB V1.3.3, which provides users with a streaming data consumption method that is different from data queries. It refers to the basic concepts and logic of message queue products such as Kafka, <strong>providing data subscription and consumption interfaces</strong>, but it is not intended to completely replace these consumer queue products. Instead, it offers more convenient data subscription services for scenarios where simple streaming data acquisition is needed.</p><p>Using the IoTDB Subscription Client to consume data has significant advantages in the following application scenarios:</p><ol><li><p><strong>Continuously obtaining the latest data</strong>: By using a subscription method, it is more real-time than scheduled queries, simpler to program applications, and has a lower system burden;</p></li><li><p><strong>Simplify data push to third-party systems</strong>: No need to develop data push components for different systems within IoTDB, data can be streamed within third-party systems, making it easier to send data to systems such as Flink, Kafka, DataX, Camel, MySQL, PG, etc.</p></li></ol><h2 id="_2-key-concepts" tabindex="-1"><a class="header-anchor" href="#_2-key-concepts"><span>2. Key Concepts</span></a></h2><p>The IoTDB Subscription Client encompasses three core concepts: Topic, Consumer, and Consumer Group. The specific relationships are illustrated in the diagram below:</p><div align="center"><img src="https://alioss.timecho.com/docs/img/Data-sub05.png" alt="" style="width:60%;"></div><ol><li><p><strong>Topic</strong>: Topic is the data space of IoTDB, represented by paths and time ranges (such as the full time range of root. * *). Consumers can subscribe to data on these topics (currently existing and future written). Unlike Kafka, IoTDB can create topics after data is stored, and the output format can be either Message or TsFile.</p></li><li><p><strong>Consumer</strong>: Consumer is an IoTDB subscription client is located, responsible for receiving and processing data published to specific topics. Consumers retrieve data from the queue and process it accordingly. There are two types of Consumers available in the IoTDB subscription client:</p></li></ol><ul><li><code>SubscriptionPullConsumer</code>, which corresponds to the pull consumption model in message queues, where user code needs to actively invoke data retrieval logic.</li><li><code>SubscriptionPushConsumer</code>, which corresponds to the push consumption model in message queues, where user code is triggered by newly arriving data events.</li></ul><ol start="3"><li><strong>Consumer Group</strong>: A Consumer Group is a collection of Consumers who share the same Consumer Group ID. The Consumer Group has the following characteristics:</li></ol><ul><li>Consumer Group and Consumer are in a one to many relationship. That is, there can be any number of consumers in a consumer group, but a consumer is not allowed to join multiple consumer groups simultaneously.</li><li>A Consumer Group can have different types of Consumers (<code>SubscriptionPullConsumer</code> and <code>SubscriptionPushConsumer</code>).</li><li>It is not necessary for all consumers in a Consumer Group to subscribe to the same topic.</li><li>When different Consumers in the same Consumer Group subscribe to the same Topic, each piece of data under that Topic will only be processed by one Consumer within the group, ensuring that data is not processed repeatedly.</li></ul><h2 id="_3-sql-statements" tabindex="-1"><a class="header-anchor" href="#_3-sql-statements"><span>3. SQL Statements</span></a></h2><h3 id="_3-1-topic-management" tabindex="-1"><a class="header-anchor" href="#_3-1-topic-management"><span>3.1 Topic Management</span></a></h3><p>IoTDB supports the creation, deletion, and viewing of Topics through SQL statements. The status changes of Topics are illustrated in the diagram below:</p><div align="center"><img src="https://alioss.timecho.com/docs/img/Data_sub_04.png" alt="" style="width:60%;"></div><h4 id="_3-1-1-create-topic" tabindex="-1"><a class="header-anchor" href="#_3-1-1-create-topic"><span>3.1.1 Create Topic</span></a></h4><p>The SQL statement is as follows:</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">    CREATE TOPIC [IF NOT EXISTS] &lt;topicName&gt; </span>
<span class="line">    WITH (</span>
<span class="line">    [&lt;parameter&gt; = &lt;value&gt;,],</span>
<span class="line">    );</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>IF NOT EXISTS semantics</strong>: Used in creation operations to ensure that the create command is executed when the specified topic does not exist, preventing errors caused by attempting to create an existing topic.</p><p>Detailed explanation of each parameter is as follows:</p><table><thead><tr><th style="text-align:left;">Key</th><th style="text-align:left;">Required or Optional with Default</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>path</strong></td><td style="text-align:left;">optional: <code>root.**</code></td><td style="text-align:left;">The path of the time series data corresponding to the topic, representing a set of time series to be subscribed.</td></tr><tr><td style="text-align:left;"><strong>start-time</strong></td><td style="text-align:left;">optional: <code>MIN_VALUE</code></td><td style="text-align:left;">The start time (event time) of the time series data corresponding to the topic. Can be in ISO format, such as 2011-12-03T10:15:30 or 2011-12-03T10:15:30+01:00, or a long value representing a raw timestamp consistent with the database&#39;s timestamp precision. Supports the special value <code>now</code>, which means the creation time of the topic. When start-time is <code>now</code> and end-time is MAX_VALUE, it indicates that only real-time data is subscribed.</td></tr><tr><td style="text-align:left;"><strong>end-time</strong></td><td style="text-align:left;">optional: <code>MAX_VALUE</code></td><td style="text-align:left;">The end time (event time) of the time series data corresponding to the topic. Can be in ISO format, such as 2011-12-03T10:15:30 or 2011-12:03T10:15:30+01:00, or a long value representing a raw timestamp consistent with the database&#39;s timestamp precision. Supports the special value <code>now</code>, which means the creation time of the topic. When end-time is <code>now</code> and start-time is MIN_VALUE, it indicates that only historical data is subscribed.</td></tr><tr><td style="text-align:left;"><strong>processor</strong></td><td style="text-align:left;">optional: <code>do-nothing-processor</code></td><td style="text-align:left;">The name and parameter configuration of the processor plugin, representing the custom processing logic applied to the original subscribed data, which can be specified in a similar way to pipe processor plugins.</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><strong>format</strong></td><td style="text-align:left;">optional: <code>SessionDataSetsHandler</code></td><td style="text-align:left;">Represents the form in which data is subscribed from the topic. Currently supports the following two forms of data: <code>SessionDataSetsHandler</code>: Data subscribed from the topic is obtained using <code>SubscriptionSessionDataSetsHandler</code>, and consumers can consume each piece of data row by row. <code>TsFileHandler</code>: Data subscribed from the topic is obtained using <code>SubscriptionTsFileHandler</code>, and consumers can directly subscribe to the TsFile storing the corresponding data.</td></tr><tr><td style="text-align:left;"><strong>mode</strong> <strong>(supported in versions 1.3.3.2 and later)</strong></td><td style="text-align:left;">option: <code>live</code></td><td style="text-align:left;">The subscription mode corresponding to the topic, with two options: <code>live</code>: When subscribing to this topic, the subscribed dataset mode is a dynamic dataset, which means that you can continuously consume the latest data. <code>snapshot</code>: When the consumer subscribes to this topic, the subscribed dataset mode is a static dataset, which means the snapshot of the data at the moment the consumer group subscribes to the topic (not the moment the topic is created); the formed static dataset after subscription does not support TTL.</td></tr><tr><td style="text-align:left;"><strong>loose-range</strong> <strong>(supported in versions 1.3.3.2 and later)</strong></td><td style="text-align:left;">option: <code>&quot;&quot;</code></td><td style="text-align:left;">String: Whether to strictly filter the data corresponding to this topic according to the path and time range, for example: &quot;&quot;: Strictly filter the data corresponding to this topic according to the path and time range. <code>&quot;time&quot;</code>: Do not strictly filter the data corresponding to this topic according to the time range (rough filter); strictly filter the data corresponding to this topic according to the path. <code>&quot;path&quot;</code>: Do not strictly filter the data corresponding to this topic according to the path (rough filter); strictly filter the data corresponding to this topic according to the time range. <code>&quot;time, path&quot;</code> / <code>&quot;path, time&quot;</code> / <code>&quot;all&quot;</code>: Do not strictly filter the data corresponding to this topic according to the path and time range (rough filter).</td></tr></tbody></table><p>Examples are as follows:</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">-- Full subscription</span>
<span class="line">CREATE TOPIC root_all;</span>
<span class="line"></span>
<span class="line">-- Custom subscription</span>
<span class="line">CREATE TOPIC IF NOT EXISTS db_timerange</span>
<span class="line">WITH (</span>
<span class="line">  &#39;path&#39; = &#39;root.db.**&#39;,</span>
<span class="line">  &#39;start-time&#39; = &#39;2023-01-01&#39;,</span>
<span class="line">  &#39;end-time&#39; = &#39;2023-12-31&#39;,</span>
<span class="line">);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-1-2-delete-topic" tabindex="-1"><a class="header-anchor" href="#_3-1-2-delete-topic"><span>3.1.2 Delete Topic</span></a></h4><p>A Topic can only be deleted if it is not subscribed to. When a Topic is deleted, its related consumption progress will be cleared.</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">DROP TOPIC [IF EXISTS] &lt;topicName&gt;;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>IF EXISTS semantics</strong>: Used in deletion operations to ensure that the delete command is executed when a specified topic exists, preventing errors caused by attempting to delete non-existent topics.</p><h4 id="_3-1-3-view-topic" tabindex="-1"><a class="header-anchor" href="#_3-1-3-view-topic"><span>3.1.3 View Topic</span></a></h4><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">SHOW TOPICS;</span>
<span class="line">SHOW TOPIC &lt;topicName&gt;;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>Result set:</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">[TopicName|TopicConfigs]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>TopicName: Topic ID</li><li>TopicConfigs: Topic configurations</li></ul><h3 id="_3-2-check-subscription-status" tabindex="-1"><a class="header-anchor" href="#_3-2-check-subscription-status"><span>3.2 Check Subscription Status</span></a></h3><p>View all subscription relationships:</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">-- Query the subscription relationships between all topics and consumer groups</span>
<span class="line">SHOW SUBSCRIPTIONS</span>
<span class="line">-- Query all subscriptions under a specific topic</span>
<span class="line">SHOW SUBSCRIPTIONS ON &lt;topicName&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Result set:</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">[TopicName|ConsumerGroupName|SubscribedConsumers]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>TopicName: The ID of the topic.</li><li>ConsumerGroupName: The ID of the consumer group specified in the user&#39;s code.</li><li>SubscribedConsumers: All client IDs in the consumer group that have subscribed to the topic.</li></ul><h2 id="_4-api-interface" tabindex="-1"><a class="header-anchor" href="#_4-api-interface"><span>4. API interface</span></a></h2>`,40)),o("p",null,[e[1]||(e[1]=t("In addition to SQL statements, IoTDB also supports using data subscription features through Java native interfaces, more details see（")),r(i,{to:"/UserGuide/latest/API/Programming-Java-Native-API.html"},{default:l(()=>e[0]||(e[0]=[t("link")])),_:1}),e[2]||(e[2]=t("）."))]),e[4]||(e[4]=s('<h2 id="_5-frequently-asked-questions" tabindex="-1"><a class="header-anchor" href="#_5-frequently-asked-questions"><span>5. Frequently Asked Questions</span></a></h2><h3 id="_5-1-what-is-the-difference-between-iotdb-data-subscription-and-kafka" tabindex="-1"><a class="header-anchor" href="#_5-1-what-is-the-difference-between-iotdb-data-subscription-and-kafka"><span>5.1 What is the difference between IoTDB data subscription and Kafka?</span></a></h3><ol><li>Consumption Orderliness</li></ol><ul><li><strong>Kafka guarantees that messages within a single partition are ordered</strong>，when a topic corresponds to only one partition and only one consumer subscribes to this topic, the order in which the consumer (single-threaded) consumes the topic data is the same as the order in which the data is written.</li><li>The IoTDB subscription client <strong>does not guarantee</strong> that the order in which the consumer consumes the data is the same as the order in which the data is written, but it will try to reflect the order of data writing.</li></ul><ol start="2"><li>Message Delivery Semantics</li></ol><ul><li>Kafka can achieve Exactly once semantics for both Producers and Consumers through configuration.</li><li>The IoTDB subscription client currently cannot provide Exactly once semantics for Consumers.</li></ul>',6))])}const g=a(p,[["render",u],["__file","Data-subscription.html.vue"]]),b=JSON.parse('{"path":"/UserGuide/latest/User-Manual/Data-subscription.html","title":"Data Subscription","lang":"en-US","frontmatter":{"description":"Data Subscription 1. Feature Introduction The IoTDB data subscription module (also known as the IoTDB subscription client) is a feature supported after IoTDB V1.3.3, which provi...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/latest/User-Manual/Data-subscription.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/latest/User-Manual/Data-subscription.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Data Subscription"}],["meta",{"property":"og:description","content":"Data Subscription 1. Feature Introduction The IoTDB data subscription module (also known as the IoTDB subscription client) is a feature supported after IoTDB V1.3.3, which provi..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-28T01:58:33.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-28T01:58:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Data Subscription\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-28T01:58:33.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1.  Feature Introduction","slug":"_1-feature-introduction","link":"#_1-feature-introduction","children":[]},{"level":2,"title":"2. Key Concepts","slug":"_2-key-concepts","link":"#_2-key-concepts","children":[]},{"level":2,"title":"3. SQL Statements","slug":"_3-sql-statements","link":"#_3-sql-statements","children":[{"level":3,"title":"3.1 Topic Management","slug":"_3-1-topic-management","link":"#_3-1-topic-management","children":[]},{"level":3,"title":"3.2 Check Subscription Status","slug":"_3-2-check-subscription-status","link":"#_3-2-check-subscription-status","children":[]}]},{"level":2,"title":"4. API interface","slug":"_4-api-interface","link":"#_4-api-interface","children":[]},{"level":2,"title":"5. Frequently Asked Questions","slug":"_5-frequently-asked-questions","link":"#_5-frequently-asked-questions","children":[{"level":3,"title":"5.1 What is the difference between IoTDB data subscription and Kafka?","slug":"_5-1-what-is-the-difference-between-iotdb-data-subscription-and-kafka","link":"#_5-1-what-is-the-difference-between-iotdb-data-subscription-and-kafka","children":[]}]}],"git":{"createdTime":1731401826000,"updatedTime":1732759113000,"contributors":[{"name":"W1y1r","email":"150988475+W1y1r@users.noreply.github.com","commits":2},{"name":"StefanieZhao7","email":"131440380+StefanieZhao7@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":4.88,"words":1465},"filePathRelative":"UserGuide/latest/User-Manual/Data-subscription.md","localizedDate":"November 12, 2024","autoDesc":true}');export{g as comp,b as data};
