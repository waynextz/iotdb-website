import{_ as s,c as a,b as t,o as p}from"./app-CRFlbjpx.js";const e={};function o(c,n){return p(),a("div",null,n[0]||(n[0]=[t(`<h1 id="mqtt-协议" tabindex="-1"><a class="header-anchor" href="#mqtt-协议"><span>MQTT 协议</span></a></h1><p><a href="http://mqtt.org/" target="_blank" rel="noopener noreferrer">MQTT</a> 是机器对机器（M2M）/“物联网”连接协议。</p><p>它被设计为一种非常轻量级的发布/订阅消息传递。</p><p>对于与需要较小代码占用和/或网络带宽非常宝贵的远程位置的连接很有用。</p><p>IoTDB 支持 MQTT v3.1（OASIS 标准）协议。<br> IoTDB 服务器包括内置的 MQTT 服务，该服务允许远程设备将消息直接发送到 IoTDB 服务器。</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/github/78357432-0c71cf80-75e4-11ea-98aa-c43a54d469ce.png"><h2 id="内置-mqtt-服务" tabindex="-1"><a class="header-anchor" href="#内置-mqtt-服务"><span>内置 MQTT 服务</span></a></h2><p>内置的 MQTT 服务提供了通过 MQTT 直接连接到 IoTDB 的能力。 它侦听来自 MQTT 客户端的发布消息，然后立即将数据写入存储。<br> MQTT 主题与 IoTDB 时间序列相对应。<br> 消息有效载荷可以由 Java SPI 加载的<code>PayloadFormatter</code>格式化为事件，默认实现为<code>JSONPayloadFormatter</code><br> 默认的<code>json</code>格式化程序支持两种 json 格式以及由他们组成的json数组，以下是 MQTT 消息有效负载示例：</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;device&quot;</span><span class="token operator">:</span><span class="token string">&quot;root.sg.d1&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;timestamp&quot;</span><span class="token operator">:</span><span class="token number">1586076045524</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;measurements&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&quot;s1&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;s2&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;values&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token number">0.530635</span><span class="token punctuation">,</span><span class="token number">0.530635</span><span class="token punctuation">]</span></span>
<span class="line"> <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;device&quot;</span><span class="token operator">:</span><span class="token string">&quot;root.sg.d1&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;timestamps&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token number">1586076045524</span><span class="token punctuation">,</span><span class="token number">1586076065526</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;measurements&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&quot;s1&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;s2&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;values&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">0.530635</span><span class="token punctuation">,</span><span class="token number">0.530635</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">0.530655</span><span class="token punctuation">,</span><span class="token number">0.530695</span><span class="token punctuation">]</span><span class="token punctuation">]</span></span>
<span class="line"> <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者以上两者的JSON数组形式。</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/github/78357469-1bf11880-75e4-11ea-978f-a53996667a0d.png"><h2 id="mqtt-配置" tabindex="-1"><a class="header-anchor" href="#mqtt-配置"><span>MQTT 配置</span></a></h2><p>默认情况下，IoTDB MQTT 服务从<code>\${IOTDB_HOME}/\${IOTDB_CONF}/iotdb-common.properties</code>加载配置。</p><p>配置如下：</p><table><thead><tr><th>名称</th><th style="text-align:center;">描述</th><th style="text-align:center;">默认</th></tr></thead><tbody><tr><td>enable_mqtt_service</td><td style="text-align:center;">是否启用 mqtt 服务</td><td style="text-align:center;">false</td></tr><tr><td>mqtt_host</td><td style="text-align:center;">mqtt 服务绑定主机</td><td style="text-align:center;">127.0.0.1</td></tr><tr><td>mqtt_port</td><td style="text-align:center;">mqtt 服务绑定端口</td><td style="text-align:center;">1883</td></tr><tr><td>mqtt_handler_pool_size</td><td style="text-align:center;">处理 mqtt 消息的处理程序池大小</td><td style="text-align:center;">1</td></tr><tr><td>mqtt_payload_formatter</td><td style="text-align:center;">mqtt 消息有效负载格式化程序</td><td style="text-align:center;">json</td></tr><tr><td>mqtt_max_message_size</td><td style="text-align:center;">mqtt 消息最大长度（字节）</td><td style="text-align:center;">1048576</td></tr></tbody></table><p>## 示例代码<br> 以下是 mqtt 客户端将消息发送到 IoTDB 服务器的示例。</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token class-name">MQTT</span> mqtt <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MQTT</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">mqtt<span class="token punctuation">.</span><span class="token function">setHost</span><span class="token punctuation">(</span><span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span> <span class="token number">1883</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">mqtt<span class="token punctuation">.</span><span class="token function">setUserName</span><span class="token punctuation">(</span><span class="token string">&quot;root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">mqtt<span class="token punctuation">.</span><span class="token function">setPassword</span><span class="token punctuation">(</span><span class="token string">&quot;root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">BlockingConnection</span> connection <span class="token operator">=</span> mqtt<span class="token punctuation">.</span><span class="token function">blockingConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">connection<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">Random</span> random <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">   <span class="token class-name">String</span> payload <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;{\\n&quot;</span> <span class="token operator">+</span></span>
<span class="line">           <span class="token string">&quot;\\&quot;device\\&quot;:\\&quot;root.sg.d1\\&quot;,\\n&quot;</span> <span class="token operator">+</span></span>
<span class="line">           <span class="token string">&quot;\\&quot;timestamp\\&quot;:%d,\\n&quot;</span> <span class="token operator">+</span></span>
<span class="line">           <span class="token string">&quot;\\&quot;measurements\\&quot;:[\\&quot;s1\\&quot;],\\n&quot;</span> <span class="token operator">+</span></span>
<span class="line">           <span class="token string">&quot;\\&quot;values\\&quot;:[%f]\\n&quot;</span> <span class="token operator">+</span></span>
<span class="line">           <span class="token string">&quot;}&quot;</span><span class="token punctuation">,</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> random<span class="token punctuation">.</span><span class="token function">nextDouble</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">   connection<span class="token punctuation">.</span><span class="token function">publish</span><span class="token punctuation">(</span><span class="token string">&quot;root.sg.d1.s1&quot;</span><span class="token punctuation">,</span> payload<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">QoS</span><span class="token punctuation">.</span><span class="token constant">AT_LEAST_ONCE</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">connection<span class="token punctuation">.</span><span class="token function">disconnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自定义-mqtt-消息格式" tabindex="-1"><a class="header-anchor" href="#自定义-mqtt-消息格式"><span>自定义 MQTT 消息格式</span></a></h2><p>事实上可以通过简单编程来实现 MQTT 消息的格式自定义。<br> 可以在源码的 <code>example/mqtt-customize</code> 项目中找到一个简单示例。</p><p>步骤:</p><ol><li>创建一个 Java 项目，增加如下依赖</li></ol><div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml" data-title="xml"><pre><code><span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.iotdb<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>iotdb-server<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.3.0-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>创建一个实现类，实现接口 <code>org.apache.iotdb.db.mqtt.protocol.PayloadFormatter</code></li></ol><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>iotdb<span class="token punctuation">.</span>mqtt<span class="token punctuation">.</span>server</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">io<span class="token punctuation">.</span>netty<span class="token punctuation">.</span>buffer<span class="token punctuation">.</span></span><span class="token class-name">ByteBuf</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>iotdb<span class="token punctuation">.</span>db<span class="token punctuation">.</span>protocol<span class="token punctuation">.</span>mqtt<span class="token punctuation">.</span></span><span class="token class-name">Message</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>iotdb<span class="token punctuation">.</span>db<span class="token punctuation">.</span>protocol<span class="token punctuation">.</span>mqtt<span class="token punctuation">.</span></span><span class="token class-name">PayloadFormatter</span></span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>nio<span class="token punctuation">.</span>charset<span class="token punctuation">.</span></span><span class="token class-name">StandardCharsets</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CustomizedJsonPayloadFormatter</span> <span class="token keyword">implements</span> <span class="token class-name">PayloadFormatter</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">    <span class="token annotation punctuation">@Override</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Message</span><span class="token punctuation">&gt;</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token class-name">ByteBuf</span> payload<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// Suppose the payload is a json format</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>payload <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token class-name">String</span> json <span class="token operator">=</span> payload<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token class-name">StandardCharsets</span><span class="token punctuation">.</span><span class="token constant">UTF_8</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">// parse data from the json and generate Messages and put them into List&lt;Meesage&gt; ret</span></span>
<span class="line">        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Message</span><span class="token punctuation">&gt;</span></span> ret <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">// this is just an example, so we just generate some Messages directly</span></span>
<span class="line">        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">long</span> ts <span class="token operator">=</span> i<span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">Message</span> message <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Message</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            message<span class="token punctuation">.</span><span class="token function">setDevice</span><span class="token punctuation">(</span><span class="token string">&quot;d&quot;</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            message<span class="token punctuation">.</span><span class="token function">setTimestamp</span><span class="token punctuation">(</span>ts<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            message<span class="token punctuation">.</span><span class="token function">setMeasurements</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token string">&quot;s1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;s2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            message<span class="token punctuation">.</span><span class="token function">setValues</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token string">&quot;4.0&quot;</span> <span class="token operator">+</span> i<span class="token punctuation">,</span> <span class="token string">&quot;5.0&quot;</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            ret<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">return</span> ret<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token annotation punctuation">@Override</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// set the value of mqtt_payload_formatter in iotdb-common.properties as the following string:</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token string">&quot;CustomizedJson&quot;</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>修改项目中的 <code>src/main/resources/META-INF/services/org.apache.iotdb.db.protocol.mqtt.PayloadFormatter</code> 文件:<br> 将示例中的文件内容清除，并将刚才的实现类的全名（包名.类名）写入文件中。注意，这个文件中只有一行。<br> 在本例中，文件内容为: <code>org.apache.iotdb.mqtt.server.CustomizedJsonPayloadFormatter</code></li><li>编译项目生成一个 jar 包: <code>mvn package -DskipTests</code></li></ol><p>在 IoTDB 服务端:</p><ol><li>创建 \${IOTDB_HOME}/ext/mqtt/ 文件夹, 将刚才的 jar 包放入此文件夹。</li><li>打开 MQTT 服务参数. (<code>enable_mqtt_service=true</code> in <code>conf/iotdb-common.properties</code>)</li><li>用刚才的实现类中的 getName() 方法的返回值 设置为 <code>conf/iotdb-common.properties</code> 中 <code>mqtt_payload_formatter</code> 的值，<br> , 在本例中，为 <code>CustomizedJson</code></li><li>启动 IoTDB</li><li>搞定</li></ol><p>More: MQTT 协议的消息不限于 json，你还可以用任意二进制。通过如下函数获得：<br><code>payload.forEachByte()</code> or <code>payload.array</code>。</p>`,30)]))}const i=s(e,[["render",o],["__file","Programming-MQTT.html.vue"]]),u=JSON.parse('{"path":"/zh/UserGuide/latest/API/Programming-MQTT.html","title":"MQTT 协议","lang":"zh-CN","frontmatter":{"description":"MQTT 协议 MQTT 是机器对机器（M2M）/“物联网”连接协议。 它被设计为一种非常轻量级的发布/订阅消息传递。 对于与需要较小代码占用和/或网络带宽非常宝贵的远程位置的连接很有用。 IoTDB 支持 MQTT v3.1（OASIS 标准）协议。 IoTDB 服务器包括内置的 MQTT 服务，该服务允许远程设备将消息直接发送到 IoTDB 服务器...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/latest/API/Programming-MQTT.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/latest/API/Programming-MQTT.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"MQTT 协议"}],["meta",{"property":"og:description","content":"MQTT 协议 MQTT 是机器对机器（M2M）/“物联网”连接协议。 它被设计为一种非常轻量级的发布/订阅消息传递。 对于与需要较小代码占用和/或网络带宽非常宝贵的远程位置的连接很有用。 IoTDB 支持 MQTT v3.1（OASIS 标准）协议。 IoTDB 服务器包括内置的 MQTT 服务，该服务允许远程设备将消息直接发送到 IoTDB 服务器..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-09-05T02:28:48.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-05T02:28:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MQTT 协议\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-05T02:28:48.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"内置 MQTT 服务","slug":"内置-mqtt-服务","link":"#内置-mqtt-服务","children":[]},{"level":2,"title":"MQTT 配置","slug":"mqtt-配置","link":"#mqtt-配置","children":[]},{"level":2,"title":"自定义 MQTT 消息格式","slug":"自定义-mqtt-消息格式","link":"#自定义-mqtt-消息格式","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1725503328000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1},{"name":"W1y1r","email":"150988475+W1y1r@users.noreply.github.com","commits":1},{"name":"majialin","email":"107627937+mal117@users.noreply.github.com","commits":1},{"name":"shuwenwei","email":"55970239+shuwenwei@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":3.47,"words":1040},"filePathRelative":"zh/UserGuide/latest/API/Programming-MQTT.md","localizedDate":"2023年7月10日","autoDesc":true}');export{i as comp,u as data};
