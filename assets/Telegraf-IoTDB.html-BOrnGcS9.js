import{_ as a,r as o,o as s,c as l,b as e,d as t,a as r,e as i}from"./app-CZXpiNlT.js";const u={},d=i('<h1 id="telegraf-introduction" tabindex="-1"><a class="header-anchor" href="#telegraf-introduction"><span>Telegraf Introduction</span></a></h1><p>Telegraf is an open-source agent that facilitates the collection, processing, and transmission of metric data. Developed by InfluxData.<br> Telegraf includes the following features:</p><ul><li>Plugin Architecture: Telegraf&#39;s strength lies in its extensive plugin ecosystem. It supports a wide range of input, output, and processor plugins, allowing seamless integration with various data sources and destinations.</li><li>Data Collection: Telegraf excels in collecting metrics from diverse sources, such as system metrics, logs, databases, and more. Its versatility makes it suitable for monitoring applications, infrastructure, and IoT devices.</li><li>Output Destinations: Once collected, data can be sent to various output destinations, including popular databases like InfluxDB. This flexibility makes Telegraf adaptable to different monitoring and analytics setups.</li><li>Ease of Configuration: Telegraf&#39;s configuration is done using TOML files. This simplicity allows users to define inputs, outputs, and processors with ease, making customization straightforward.</li><li>Community and Support: Being open-source, Telegraf benefits from an active community. Users can contribute plugins, report issues, and seek assistance through forums and documentation.</li></ul><h1 id="telegraf-iotdb-output-plugin" tabindex="-1"><a class="header-anchor" href="#telegraf-iotdb-output-plugin"><span>Telegraf IoTDB Output Plugin</span></a></h1><p>This output plugin saves Telegraf metrics to an Apache IoTDB backend, supporting session connection and data insertion.</p><h2 id="precautions" tabindex="-1"><a class="header-anchor" href="#precautions"><span>Precautions</span></a></h2>',6),c=e("li",null,"Before using this plugin, please configure the IP address, port number, username, password and other information of the database server, as well as some data type conversion, time unit and other configurations.",-1),m=e("li",null,"The path should follow the rule in Chapter 'Syntax Rule'",-1),p={href:"https://github.com/influxdata/telegraf/tree/master/plugins/outputs/iotdb",target:"_blank",rel:"noopener noreferrer"},v=i(`<h2 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h2><p>Here is an example that demonstrates how to collect cpu data from Telegraf into IoTDB.</p><ol><li>generate the configuration file by telegraf</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>telegraf --sample-config --input-filter cpu --output-filter iotdb &gt; cpu_iotdb.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>modify the default cpu inputs plugin configuration</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># Read metrics about cpu usage
[[inputs.cpu]]
  ## Whether to report per-cpu stats or not
  percpu = true
  ## Whether to report total system cpu stats or not
  totalcpu = true
  ## If true, collect raw CPU time metrics
  collect_cpu_time = false
  ## If true, compute and report the sum of all non-idle CPU states
  report_active = false
  ## If true and the info is available then add core_id and physical_id tags
  core_tags = false
  name_override = &quot;root.demo.telgraf.cpu&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>modify the IoTDB outputs plugin configuration</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># Save metrics to an IoTDB Database
[[outputs.iotdb]]
  ## Configuration of IoTDB server connection
  host = &quot;127.0.0.1&quot;
  # port = &quot;6667&quot;

  ## Configuration of authentication
  # user = &quot;root&quot;
  # password = &quot;root&quot;

  ## Timeout to open a new session.
  ## A value of zero means no timeout.
  # timeout = &quot;5s&quot;

  ## Configuration of type conversion for 64-bit unsigned int
  ## IoTDB currently DOES NOT support unsigned integers (version 13.x).
  ## 32-bit unsigned integers are safely converted into 64-bit signed integers by the plugin,
  ## however, this is not true for 64-bit values in general as overflows may occur.
  ## The following setting allows to specify the handling of 64-bit unsigned integers.
  ## Available values are:
  ##   - &quot;int64&quot;       --  convert to 64-bit signed integers and accept overflows
  ##   - &quot;int64_clip&quot;  --  convert to 64-bit signed integers and clip the values on overflow to 9,223,372,036,854,775,807
  ##   - &quot;text&quot;        --  convert to the string representation of the value
  # uint64_conversion = &quot;int64_clip&quot;

  ## Configuration of TimeStamp
  ## TimeStamp is always saved in 64bits int. timestamp_precision specifies the unit of timestamp.
  ## Available value:
  ## &quot;second&quot;, &quot;millisecond&quot;, &quot;microsecond&quot;, &quot;nanosecond&quot;(default)
  timestamp_precision = &quot;millisecond&quot;

  ## Handling of tags
  ## Tags are not fully supported by IoTDB.
  ## A guide with suggestions on how to handle tags can be found here:
  ##     https://iotdb.apache.org/UserGuide/Master/API/InfluxDB-Protocol.html
  ##
  ## Available values are:
  ##   - &quot;fields&quot;     --  convert tags to fields in the measurement
  ##   - &quot;device_id&quot;  --  attach tags to the device ID
  ##
  ## For Example, a metric named &quot;root.sg.device&quot; with the tags \`tag1: &quot;private&quot;\`  and  \`tag2: &quot;working&quot;\` and
  ##  fields \`s1: 100\`  and \`s2: &quot;hello&quot;\` will result in the following representations in IoTDB
  ##   - &quot;fields&quot;     --  root.sg.device, s1=100, s2=&quot;hello&quot;, tag1=&quot;private&quot;, tag2=&quot;working&quot;
  ##   - &quot;device_id&quot;  --  root.sg.device.private.working, s1=100, s2=&quot;hello&quot;
  convert_tags_to = &quot;fields&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>run telegraf with this configuration file, after some time, the data can be found in IoTDB</li></ol>`,9);function g(f,h){const n=o("ExternalLinkIcon");return s(),l("div",null,[d,e("ol",null,[c,m,e("li",null,[t("See "),e("a",p,[t("https://github.com/influxdata/telegraf/tree/master/plugins/outputs/iotdb"),r(n)]),t(" for how to configure this plugin.")])]),v])}const T=a(u,[["render",g],["__file","Telegraf-IoTDB.html.vue"]]),q=JSON.parse('{"path":"/UserGuide/V1.2.x/Ecosystem-Integration/Telegraf-IoTDB.html","title":"Telegraf Introduction","lang":"en-US","frontmatter":{"description":"Telegraf Introduction Telegraf is an open-source agent that facilitates the collection, processing, and transmission of metric data. Developed by InfluxData. Telegraf includes t...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.2.x/Ecosystem-Integration/Telegraf-IoTDB.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.2.x/Ecosystem-Integration/Telegraf-IoTDB.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Telegraf Introduction"}],["meta",{"property":"og:description","content":"Telegraf Introduction Telegraf is an open-source agent that facilitates the collection, processing, and transmission of metric data. Developed by InfluxData. Telegraf includes t..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-07T11:29:34.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-07T11:29:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Telegraf Introduction\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-07T11:29:34.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Precautions","slug":"precautions","link":"#precautions","children":[]},{"level":2,"title":"Example","slug":"example","link":"#example","children":[]}],"git":{"createdTime":1701948574000,"updatedTime":1701948574000,"contributors":[{"name":"shuwenwei","email":"55970239+shuwenwei@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.5,"words":750},"filePathRelative":"UserGuide/V1.2.x/Ecosystem-Integration/Telegraf-IoTDB.md","localizedDate":"December 7, 2023","autoDesc":true}');export{T as comp,q as data};
