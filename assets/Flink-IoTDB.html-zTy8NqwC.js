import{_ as t,r as p,o as e,c as o,b as n,d as s,a as c,e as i}from"./app-DxurNv9d.js";const l={},u=n("h2",{id:"flink-iotdb-连接器",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#flink-iotdb-连接器"},[n("span",null,"Flink IoTDB 连接器")])],-1),k={href:"https://flink.apache.org/",target:"_blank",rel:"noopener noreferrer"},r=i(`<h3 id="iotdbsink" tabindex="-1"><a class="header-anchor" href="#iotdbsink"><span>IoTDBSink</span></a></h3><p>使用 <code>IoTDBSink</code> ，您需要定义一个 <code>IoTDBOptions</code> 和一个 <code>IoTSerializationSchema</code> 实例。 <code>IoTDBSink</code> 默认每次发送一个数据，可以通过调用 <code>withBatchSize(int)</code> 进行调整。</p><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h3><p>该示例演示了如下从一个 Flink job 中发送数据到 IoTDB server 的场景：</p><ul><li><p>一个模拟的 Source <code>SensorSource</code> 每秒钟产生一个数据点。</p></li><li><p>Flink 使用 <code>IoTDBSink</code> 消费产生的数据并写入 IoTDB 。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>iotdb<span class="token punctuation">.</span>flink<span class="token punctuation">.</span>options<span class="token punctuation">.</span></span><span class="token class-name">IoTDBSinkOptions</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>iotdb<span class="token punctuation">.</span>tsfile<span class="token punctuation">.</span>file<span class="token punctuation">.</span>metadata<span class="token punctuation">.</span>enums<span class="token punctuation">.</span></span><span class="token class-name">CompressionType</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>iotdb<span class="token punctuation">.</span>tsfile<span class="token punctuation">.</span>file<span class="token punctuation">.</span>metadata<span class="token punctuation">.</span>enums<span class="token punctuation">.</span></span><span class="token class-name">TSDataType</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>iotdb<span class="token punctuation">.</span>tsfile<span class="token punctuation">.</span>file<span class="token punctuation">.</span>metadata<span class="token punctuation">.</span>enums<span class="token punctuation">.</span></span><span class="token class-name">TSEncoding</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>google<span class="token punctuation">.</span>common<span class="token punctuation">.</span>collect<span class="token punctuation">.</span></span><span class="token class-name">Lists</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>flink<span class="token punctuation">.</span>streaming<span class="token punctuation">.</span>api<span class="token punctuation">.</span>environment<span class="token punctuation">.</span></span><span class="token class-name">StreamExecutionEnvironment</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>flink<span class="token punctuation">.</span>streaming<span class="token punctuation">.</span>api<span class="token punctuation">.</span>functions<span class="token punctuation">.</span>source<span class="token punctuation">.</span></span><span class="token class-name">SourceFunction</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>security<span class="token punctuation">.</span></span><span class="token class-name">SecureRandom</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">HashMap</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Map</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Random</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FlinkIoTDBSink</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token comment">// run the flink job on local mini cluster</span>
    <span class="token class-name">StreamExecutionEnvironment</span> env <span class="token operator">=</span> <span class="token class-name">StreamExecutionEnvironment</span><span class="token punctuation">.</span><span class="token function">getExecutionEnvironment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">IoTDBSinkOptions</span> options <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IoTDBSinkOptions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    options<span class="token punctuation">.</span><span class="token function">setHost</span><span class="token punctuation">(</span><span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    options<span class="token punctuation">.</span><span class="token function">setPort</span><span class="token punctuation">(</span><span class="token number">6667</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    options<span class="token punctuation">.</span><span class="token function">setUser</span><span class="token punctuation">(</span><span class="token string">&quot;root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    options<span class="token punctuation">.</span><span class="token function">setPassword</span><span class="token punctuation">(</span><span class="token string">&quot;root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// If the server enables auto_create_schema, then we do not need to register all timeseries</span>
    <span class="token comment">// here.</span>
    options<span class="token punctuation">.</span><span class="token function">setTimeseriesOptionList</span><span class="token punctuation">(</span>
        <span class="token class-name">Lists</span><span class="token punctuation">.</span><span class="token function">newArrayList</span><span class="token punctuation">(</span>
            <span class="token keyword">new</span> <span class="token class-name">IoTDBSinkOptions<span class="token punctuation">.</span>TimeseriesOption</span><span class="token punctuation">(</span>
                <span class="token string">&quot;root.sg.d1.s1&quot;</span><span class="token punctuation">,</span> <span class="token class-name">TSDataType</span><span class="token punctuation">.</span><span class="token constant">DOUBLE</span><span class="token punctuation">,</span> <span class="token class-name">TSEncoding</span><span class="token punctuation">.</span><span class="token constant">GORILLA</span><span class="token punctuation">,</span> <span class="token class-name">CompressionType</span><span class="token punctuation">.</span><span class="token constant">SNAPPY</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">IoTSerializationSchema</span> serializationSchema <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DefaultIoTSerializationSchema</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">IoTDBSink</span> ioTDBSink <span class="token operator">=</span>
        <span class="token keyword">new</span> <span class="token class-name">IoTDBSink</span><span class="token punctuation">(</span>options<span class="token punctuation">,</span> serializationSchema<span class="token punctuation">)</span>
            <span class="token comment">// enable batching</span>
            <span class="token punctuation">.</span><span class="token function">withBatchSize</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
            <span class="token comment">// how many connections to the server will be created for each parallelism</span>
            <span class="token punctuation">.</span><span class="token function">withSessionPoolSize</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    env<span class="token punctuation">.</span><span class="token function">addSource</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SensorSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token string">&quot;sensor-source&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">setParallelism</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">addSink</span><span class="token punctuation">(</span>ioTDBSink<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token string">&quot;iotdb-sink&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    env<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token string">&quot;iotdb-flink-example&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">SensorSource</span> <span class="token keyword">implements</span> <span class="token class-name">SourceFunction</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Map</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token keyword">boolean</span> running <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token class-name">Random</span> random <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SecureRandom</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">SourceContext</span> context<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>running<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> tuple <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        tuple<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;device&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;root.sg.d1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        tuple<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;timestamp&quot;</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        tuple<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;measurements&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;s1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        tuple<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;types&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;DOUBLE&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        tuple<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;values&quot;</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>random<span class="token punctuation">.</span><span class="token function">nextDouble</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        context<span class="token punctuation">.</span><span class="token function">collect</span><span class="token punctuation">(</span>tuple<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">cancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      running <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="运行方法" tabindex="-1"><a class="header-anchor" href="#运行方法"><span>运行方法</span></a></h3><ul><li>启动 IoTDB server</li><li>运行 <code>org.apache.iotdb.flink.FlinkIoTDBSink.java</code> 将 Flink job 运行在本地的集群上。</li></ul>`,7);function d(m,v){const a=p("ExternalLinkIcon");return e(),o("div",null,[u,n("p",null,[s("IoTDB 与 "),n("a",k,[s("Apache Flink"),c(a)]),s(" 的集成。此模块包含了 iotdb sink，允许 flink job 将时序数据写入 IoTDB。")]),r])}const h=t(l,[["render",d],["__file","Flink-IoTDB.html.vue"]]),g=JSON.parse('{"path":"/zh/UserGuide/V1.0.x/Ecosystem-Integration/Flink-IoTDB.html","title":"","lang":"zh-CN","frontmatter":{"description":"Flink IoTDB 连接器 IoTDB 与 Apache Flink 的集成。此模块包含了 iotdb sink，允许 flink job 将时序数据写入 IoTDB。 IoTDBSink 使用 IoTDBSink ，您需要定义一个 IoTDBOptions 和一个 IoTSerializationSchema 实例。 IoTDBSink 默认每次...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.0.x/Ecosystem-Integration/Flink-IoTDB.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/Ecosystem-Integration/Flink-IoTDB.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"Flink IoTDB 连接器 IoTDB 与 Apache Flink 的集成。此模块包含了 iotdb sink，允许 flink job 将时序数据写入 IoTDB。 IoTDBSink 使用 IoTDBSink ，您需要定义一个 IoTDBOptions 和一个 IoTSerializationSchema 实例。 IoTDBSink 默认每次..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Flink IoTDB 连接器","slug":"flink-iotdb-连接器","link":"#flink-iotdb-连接器","children":[{"level":3,"title":"IoTDBSink","slug":"iotdbsink","link":"#iotdbsink","children":[]},{"level":3,"title":"示例","slug":"示例","link":"#示例","children":[]},{"level":3,"title":"运行方法","slug":"运行方法","link":"#运行方法","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.53,"words":459},"filePathRelative":"zh/UserGuide/V1.0.x/Ecosystem-Integration/Flink-IoTDB.md","localizedDate":"2023年7月10日","autoDesc":true}');export{h as comp,g as data};
