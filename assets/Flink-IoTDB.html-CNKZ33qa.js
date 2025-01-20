import{_ as n,c as a,b as l,o}from"./app-CLygX6ac.js";const e={};function p(t,s){return o(),a("div",null,s[0]||(s[0]=[l(`<h2 id="flink-iotdb-连接器" tabindex="-1"><a class="header-anchor" href="#flink-iotdb-连接器"><span>Flink IoTDB 连接器</span></a></h2><p>IoTDB 与 <a href="https://flink.apache.org/" target="_blank" rel="noopener noreferrer">Apache Flink</a> 的集成。此模块包含了 iotdb sink，允许 flink job 将时序数据写入 IoTDB。</p><h3 id="iotdbsink" tabindex="-1"><a class="header-anchor" href="#iotdbsink"><span>IoTDBSink</span></a></h3><p>使用 <code>IoTDBSink</code> ，您需要定义一个 <code>IoTDBOptions</code> 和一个 <code>IoTSerializationSchema</code> 实例。 <code>IoTDBSink</code> 默认每次发送一个数据，可以通过调用 <code>withBatchSize(int)</code> 进行调整。</p><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h3><p>该示例演示了如下从一个 Flink job 中发送数据到 IoTDB server 的场景：</p><ul><li><p>一个模拟的 Source <code>SensorSource</code> 每秒钟产生一个数据点。</p></li><li><p>Flink 使用 <code>IoTDBSink</code> 消费产生的数据并写入 IoTDB 。</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">import</span><span style="color:#E5C07B;"> org.apache.iotdb.tsfile.file.metadata.enums.CompressionType</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#E5C07B;"> org.apache.iotdb.tsfile.file.metadata.enums.TSDataType</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#E5C07B;"> org.apache.iotdb.tsfile.file.metadata.enums.TSEncoding</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#E5C07B;"> com.google.common.collect.Lists</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#E5C07B;"> org.apache.flink.streaming.api.environment.StreamExecutionEnvironment</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#E5C07B;"> org.apache.flink.streaming.api.functions.source.SourceFunction</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#E5C07B;"> java.security.SecureRandom</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#E5C07B;"> java.util.HashMap</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#E5C07B;"> java.util.Map</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#E5C07B;"> java.util.Random</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">public</span><span style="color:#C678DD;"> class</span><span style="color:#E5C07B;"> FlinkIoTDBSink</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;">  public</span><span style="color:#C678DD;"> static</span><span style="color:#C678DD;"> void</span><span style="color:#61AFEF;"> main</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">String</span><span style="color:#ABB2BF;">[] </span><span style="color:#E06C75;font-style:italic;">args</span><span style="color:#ABB2BF;">)</span><span style="color:#C678DD;"> throws</span><span style="color:#E5C07B;"> Exception</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    // run the flink job on local mini cluster</span></span>
<span class="line"><span style="color:#E5C07B;">    StreamExecutionEnvironment</span><span style="color:#E06C75;"> env</span><span style="color:#56B6C2;"> =</span><span style="color:#E5C07B;"> StreamExecutionEnvironment</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">getExecutionEnvironment</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">    IoTDBOptions</span><span style="color:#E06C75;"> options</span><span style="color:#56B6C2;"> =</span><span style="color:#C678DD;"> new</span><span style="color:#61AFEF;"> IoTDBOptions</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E5C07B;">    options</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">setHost</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;127.0.0.1&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#E5C07B;">    options</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">setPort</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">6667</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#E5C07B;">    options</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">setUser</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;root&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#E5C07B;">    options</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">setPassword</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;root&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#E5C07B;">    options</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">setStorageGroup</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;root.sg&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    // If the server enables auto_create_schema, then we do not need to register all timeseries</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    // here.</span></span>
<span class="line"><span style="color:#E5C07B;">    options</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">setTimeseriesOptionList</span><span style="color:#ABB2BF;">(</span></span>
<span class="line"><span style="color:#E5C07B;">        Lists</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">newArrayList</span><span style="color:#ABB2BF;">(</span></span>
<span class="line"><span style="color:#C678DD;">            new</span><span style="color:#ABB2BF;"> IoTDBOptions.</span><span style="color:#61AFEF;">TimeseriesOption</span><span style="color:#ABB2BF;">(</span></span>
<span class="line"><span style="color:#98C379;">                &quot;root.sg.d1.s1&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">TSDataType</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">DOUBLE</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">TSEncoding</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">GORILLA</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">CompressionType</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">SNAPPY</span><span style="color:#ABB2BF;">)));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">    IoTSerializationSchema</span><span style="color:#E06C75;"> serializationSchema</span><span style="color:#56B6C2;"> =</span><span style="color:#C678DD;"> new</span><span style="color:#61AFEF;"> DefaultIoTSerializationSchema</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E5C07B;">    IoTDBSink</span><span style="color:#E06C75;"> ioTDBSink</span><span style="color:#56B6C2;"> =</span></span>
<span class="line"><span style="color:#C678DD;">        new</span><span style="color:#61AFEF;"> IoTDBSink</span><span style="color:#ABB2BF;">(options, serializationSchema)</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">            // enable batching</span></span>
<span class="line"><span style="color:#ABB2BF;">            .</span><span style="color:#61AFEF;">withBatchSize</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">10</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">            // how many connectons to the server will be created for each parallelism</span></span>
<span class="line"><span style="color:#ABB2BF;">            .</span><span style="color:#61AFEF;">withSessionPoolSize</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">    env</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">addSource</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">new</span><span style="color:#61AFEF;"> SensorSource</span><span style="color:#ABB2BF;">())</span></span>
<span class="line"><span style="color:#ABB2BF;">        .</span><span style="color:#61AFEF;">name</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;sensor-source&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">        .</span><span style="color:#61AFEF;">setParallelism</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">        .</span><span style="color:#61AFEF;">addSink</span><span style="color:#ABB2BF;">(ioTDBSink)</span></span>
<span class="line"><span style="color:#ABB2BF;">        .</span><span style="color:#61AFEF;">name</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;iotdb-sink&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">    env</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">execute</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;iotdb-flink-example&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">  private</span><span style="color:#C678DD;"> static</span><span style="color:#C678DD;"> class</span><span style="color:#E5C07B;"> SensorSource</span><span style="color:#C678DD;"> implements</span><span style="color:#E5C07B;"> SourceFunction</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#E5C07B;">Map</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#E5C07B;">String</span><span style="color:#ABB2BF;">,</span><span style="color:#E5C07B;"> String</span><span style="color:#ABB2BF;">&gt;&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;">    boolean</span><span style="color:#E06C75;"> running </span><span style="color:#56B6C2;">=</span><span style="color:#D19A66;"> true</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E5C07B;">    Random</span><span style="color:#E06C75;"> random </span><span style="color:#56B6C2;">=</span><span style="color:#C678DD;"> new</span><span style="color:#61AFEF;"> SecureRandom</span><span style="color:#E06C75;">()</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    @</span><span style="color:#E5C07B;">Override</span></span>
<span class="line"><span style="color:#C678DD;">    public</span><span style="color:#C678DD;"> void</span><span style="color:#61AFEF;"> run</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">SourceContext</span><span style="color:#E06C75;font-style:italic;"> context</span><span style="color:#ABB2BF;">)</span><span style="color:#C678DD;"> throws</span><span style="color:#E5C07B;"> Exception</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;">      while</span><span style="color:#ABB2BF;"> (running) {</span></span>
<span class="line"><span style="color:#E5C07B;">        Map</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#E5C07B;">String</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">String</span><span style="color:#ABB2BF;">&gt; </span><span style="color:#E06C75;">tuple</span><span style="color:#56B6C2;"> =</span><span style="color:#C678DD;"> new</span><span style="color:#61AFEF;"> HashMap</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E5C07B;">        tuple</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">put</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;device&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;root.sg.d1&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#E5C07B;">        tuple</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">put</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;timestamp&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">String</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">valueOf</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">System</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">currentTimeMillis</span><span style="color:#ABB2BF;">()));</span></span>
<span class="line"><span style="color:#E5C07B;">        tuple</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">put</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;measurements&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;s1&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#E5C07B;">        tuple</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">put</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;types&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;DOUBLE&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#E5C07B;">        tuple</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">put</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;values&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">String</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">valueOf</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">random</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">nextDouble</span><span style="color:#ABB2BF;">()));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">        context</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">collect</span><span style="color:#ABB2BF;">(tuple);</span></span>
<span class="line"><span style="color:#E5C07B;">        Thread</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">sleep</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">1000</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">      }</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    @</span><span style="color:#E5C07B;">Override</span></span>
<span class="line"><span style="color:#C678DD;">    public</span><span style="color:#C678DD;"> void</span><span style="color:#61AFEF;"> cancel</span><span style="color:#ABB2BF;">()</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">      running </span><span style="color:#56B6C2;">=</span><span style="color:#D19A66;"> false</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="运行方法" tabindex="-1"><a class="header-anchor" href="#运行方法"><span>运行方法</span></a></h3><ul><li>启动 IoTDB server</li><li>运行 <code>org.apache.iotdb.flink.FlinkIoTDBSink.java</code> 将 Flink job 运行在本地的集群上。</li></ul>`,9)]))}const c=n(e,[["render",p],["__file","Flink-IoTDB.html.vue"]]),r=JSON.parse('{"path":"/zh/UserGuide/V0.13.x/Ecosystem-Integration/Flink-IoTDB.html","title":"","lang":"zh-CN","frontmatter":{"description":"Flink IoTDB 连接器 IoTDB 与 Apache Flink 的集成。此模块包含了 iotdb sink，允许 flink job 将时序数据写入 IoTDB。 IoTDBSink 使用 IoTDBSink ，您需要定义一个 IoTDBOptions 和一个 IoTSerializationSchema 实例。 IoTDBSink 默认每次...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V0.13.x/Ecosystem-Integration/Flink-IoTDB.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Ecosystem-Integration/Flink-IoTDB.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"Flink IoTDB 连接器 IoTDB 与 Apache Flink 的集成。此模块包含了 iotdb sink，允许 flink job 将时序数据写入 IoTDB。 IoTDBSink 使用 IoTDBSink ，您需要定义一个 IoTDBOptions 和一个 IoTSerializationSchema 实例。 IoTDBSink 默认每次..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Flink IoTDB 连接器","slug":"flink-iotdb-连接器","link":"#flink-iotdb-连接器","children":[{"level":3,"title":"IoTDBSink","slug":"iotdbsink","link":"#iotdbsink","children":[]},{"level":3,"title":"示例","slug":"示例","link":"#示例","children":[]},{"level":3,"title":"运行方法","slug":"运行方法","link":"#运行方法","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","username":"CritasWang","email":"critas@outlook.com","commits":1,"url":"https://github.com/CritasWang"}]},"readingTime":{"minutes":1.53,"words":459},"filePathRelative":"zh/UserGuide/V0.13.x/Ecosystem-Integration/Flink-IoTDB.md","localizedDate":"2023年7月10日","autoDesc":true}');export{c as comp,r as data};
