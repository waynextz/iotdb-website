import{_ as l,c as i,b as n,d as t,e as s,a as o,f as r,r as p,o as d}from"./app-CLygX6ac.js";const c={};function u(f,e){const a=p("RouteLink");return d(),i("div",null,[e[12]||(e[12]=n('<h1 id="telegraf" tabindex="-1"><a class="header-anchor" href="#telegraf"><span>Telegraf</span></a></h1><h2 id="_1、产品概述" tabindex="-1"><a class="header-anchor" href="#_1、产品概述"><span>1、产品概述</span></a></h2><h3 id="_1-1-telegraf" tabindex="-1"><a class="header-anchor" href="#_1-1-telegraf"><span>1.1 Telegraf</span></a></h3><p><a href="https://www.influxdata.com/time-series-platform/telegraf/" target="_blank" rel="noopener noreferrer">Telegraf</a> 是一个开源代理工具，用于收集、处理和传输度量数据，由 InfluxData 开发。</p><p>Telegraf 有以下这些特点：</p><ul><li>插件体系结构：Telegraf 的强大之处在于其广泛的插件生态系统。它支持多种输入、输出和处理器插件，可以与各种数据源和目标无缝集成。 <ul><li>数据收集：Telegraf 擅长从不同来源收集度量数据，例如系统指标、日志、数据库等。其多功能性使其适用于监视应用程序、基础架构和物联网设备。</li><li>输出目标：一旦收集到数据，可以将其发送到各种输出目标，包括流行的数据库如 InfluxDB。这种灵活性使 Telegraf 适应不同的监视和分析设置。</li></ul></li><li>配置简易：Telegraf 的配置使用 TOML 文件进行。这种简单性使用户能够轻松定义输入、输出和处理器，使定制变得简单明了。</li><li>社区与支持：作为开源项目，Telegraf 受益于活跃的社区。用户可以通过论坛和文档贡献插件、报告问题并寻求帮助。</li></ul><h3 id="_1-2-telegraf-iotdb-插件" tabindex="-1"><a class="header-anchor" href="#_1-2-telegraf-iotdb-插件"><span>1.2 Telegraf-IoTDB 插件</span></a></h3><p>Telegraf-IoTDB 插件可以将保存在 Telegraf 中的监控信息输出存储到 IoTDB，输出插件使用了 IoTDB session 进行连接和数据写入。</p><figure><img src="https://alioss.timecho.com/docs/img/Telegraf.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_2、安装要求" tabindex="-1"><a class="header-anchor" href="#_2、安装要求"><span>2、安装要求</span></a></h2><p>Telegraf支持多种操作系统，包括Linux、Windows、macOS，Telegraf 的安装推荐使用<code>root</code>管理员权限才能成功完成，具体安装要求请查看 <a href="https://docs.influxdata.com/telegraf/v1/install/" target="_blank" rel="noopener noreferrer">安装要求</a></p><h2 id="_3、安装步骤" tabindex="-1"><a class="header-anchor" href="#_3、安装步骤"><span>3、安装步骤</span></a></h2><p>具体安装步骤请查看 <a href="https://docs.influxdata.com/telegraf/v1/install/" target="_blank" rel="noopener noreferrer">安装步骤</a></p><ul><li>注：此插件为Telegraf内置插件，无需进行二次安装</li></ul><h2 id="_4、使用说明" tabindex="-1"><a class="header-anchor" href="#_4、使用说明"><span>4、使用说明</span></a></h2><h3 id="_4-1-设置输入源" tabindex="-1"><a class="header-anchor" href="#_4-1-设置输入源"><span>4.1 设置输入源</span></a></h3><p>在“telegraf.conf”配置文件中找到“INPUT PLUGINS”来配置输入源，具体配置内容如下表所示</p>',17)),t("table",null,[e[11]||(e[11]=t("thead",null,[t("tr",null,[t("th",null,"配置项"),t("th",null,"说明"),t("th",null,"备注")])],-1)),t("tbody",null,[e[5]||(e[5]=t("tr",null,[t("td",null,"alias"),t("td",null,"命名插件的实例"),t("td")],-1)),e[6]||(e[6]=t("tr",null,[t("td",null,"interval"),t("td",null,[s("收集此指标的频率。普通插件使用单个全局间隔，但如果某个特定输入的运行频率应更低或更高，您可以在此处进行配置。"),t("code",null,"interval"),s("可以增加间隔以减少数据输入速率限制。")]),t("td")],-1)),e[7]||(e[7]=t("tr",null,[t("td",null,"precision"),t("td",null,[s("覆盖"),t("code",null,"precision"),s("代理的设置。收集的指标四舍五入到指定的精度"),t("code",null,"interval"),s("。当在服务输入上设置此值（例如"),t("code",null,"statsd"),s("：）时，输出数据库可能会合并在同一时间戳发生的多个事件。")]),t("td")],-1)),e[8]||(e[8]=t("tr",null,[t("td",null,"collection_jitter"),t("td",null,[s("覆盖"),t("code",null,"collection_jitter"),s("代理的设置。Collection jitter 用于通过随机的"),t("code",null,"interval")]),t("td")],-1)),t("tr",null,[e[3]||(e[3]=t("td",null,"name_override",-1)),e[4]||(e[4]=t("td",null,"输出到 IoTDB 时使用的自定义时间序列路径名",-1)),t("td",null,[e[1]||(e[1]=s("输出的路径名称需满足“")),o(a,{to:"/zh/UserGuide/V2.0.1/Tree/Reference/Syntax-Rule.html"},{default:r(()=>e[0]||(e[0]=[s("语法要求")])),_:1}),e[2]||(e[2]=s("”要求"))])]),e[9]||(e[9]=t("tr",null,[t("td",null,"name_prefix"),t("td",null,"指定附加到测量名称的前缀"),t("td")],-1)),e[10]||(e[10]=t("tr",null,[t("td",null,"name_suffix"),t("td",null,"指定附加到测量名称的后缀"),t("td")],-1))])]),e[13]||(e[13]=n(`<figure><img src="https://alioss.timecho.com/docs/img/Telegraf_1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_4-2-设置输出源" tabindex="-1"><a class="header-anchor" href="#_4-2-设置输出源"><span>4.2 设置输出源</span></a></h3><p>在“telegraf.conf”配置文件中找到“outputs.iotdb”来配置输出源，具体配置内容如下表所示，具体输入源示例可查看 <a href="https://docs.influxdata.com/telegraf/v1/configuration/#output-configuration-examples" target="_blank" rel="noopener noreferrer">输出源示例</a></p><table><thead><tr><th>配置项</th><th>说明</th><th>修改前</th><th>修改后</th><th>备注</th></tr></thead><tbody><tr><td>host</td><td>IoTDB 的 host</td><td># host = &quot;127.0.0.1&quot;</td><td>host = &quot;部署 IoTDB 的 host&quot;</td><td>默认为 127.0.0.1</td></tr><tr><td>port</td><td>IoTDB 的端口号</td><td># port = &quot;6667&quot;</td><td>port = &quot;部署 IoTDB 的端口号&quot;</td><td>默认为 6667</td></tr><tr><td>user</td><td>IoTDB 的用户名</td><td># user = &quot;root&quot;</td><td>user = &quot;IoTDB 的用户名&quot;</td><td>默认为 root</td></tr><tr><td>password</td><td>IoTDB 的密码</td><td># password = &quot;root&quot;</td><td>password= &quot;IoTDB 的密码&quot;</td><td>默认为 root</td></tr><tr><td>timestamp_precision</td><td>时间戳精度</td><td>timestamp_precision = &quot;millisecond&quot;</td><td>timestamp_precision = &quot;与 IoTDB 相同的时间戳精度&quot;</td><td>您可以通过查看&quot;iotdb-system.properties&quot;中&quot;timestamp_precision&quot;字段即可</td></tr><tr><td>sanitize_tag</td><td>数据库版本</td><td>无</td><td>sanitize_tag = &quot;0.13/1.0/1.1/1.2/1.3&quot;</td><td></td></tr></tbody></table><figure><img src="https://alioss.timecho.com/docs/img/Telegraf_2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_4-3-启动telegraf服务" tabindex="-1"><a class="header-anchor" href="#_4-3-启动telegraf服务"><span>4.3 启动Telegraf服务</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#61AFEF;">telegraf</span><span style="color:#D19A66;"> -config</span><span style="color:#98C379;"> /path/to/telegraf.conf</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_5、使用示例" tabindex="-1"><a class="header-anchor" href="#_5、使用示例"><span>5、使用示例</span></a></h2><p>以下是一个使用 Telegraf 收集 CPU 数据并使用 Telegraf-IoTDB 输出到 IoTDB 的示例。使用 telegraf 命令生成配置文件</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#61AFEF;">telegraf</span><span style="color:#D19A66;"> --sample-config</span><span style="color:#D19A66;"> --input-filter</span><span style="color:#98C379;"> cpu</span><span style="color:#D19A66;"> --output-filter</span><span style="color:#98C379;"> iotdb</span><span style="color:#ABB2BF;"> &gt; </span><span style="color:#98C379;">cpu_iotdb.conf</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol><li>在 cpu_iotdb.conf 中修改 input cpu 插件的配置。其中，“name_override” 字段为输出到 IoTDB 时使用的自定义时间序列路径名</li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># Read metrics about cpu usage</span></span>
<span class="line"><span style="color:#ABB2BF;">[[inputs.cpu]]</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  ## Whether to report per-cpu stats or not</span></span>
<span class="line"><span style="color:#61AFEF;">  percpu</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> true</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  ## Whether to report total system cpu stats or not</span></span>
<span class="line"><span style="color:#61AFEF;">  totalcpu</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> true</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  ## If true, collect raw CPU time metrics</span></span>
<span class="line"><span style="color:#61AFEF;">  collect_cpu_time</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> false</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  ## If true, compute and report the sum of all non-idle CPU states</span></span>
<span class="line"><span style="color:#61AFEF;">  report_active</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> false</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  ## If true and the info is available then add core_id and physical_id tags</span></span>
<span class="line"><span style="color:#61AFEF;">  core_tags</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> false</span></span>
<span class="line"><span style="color:#61AFEF;">  name_override</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> &quot;root.demo.telgraf.cpu&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>在 cpu_iotdb.conf 中修改 output iotdb 插件的配置</li></ol><table><thead><tr><th>配置项</th><th>说明</th><th>修改前</th><th>修改后</th><th>备注</th></tr></thead><tbody><tr><td>host</td><td>IoTDB 的 host</td><td># host = &quot;127.0.0.1&quot;</td><td>host = &quot;部署 IoTDB 的 host&quot;</td><td>默认为 127.0.0.1</td></tr><tr><td>port</td><td>IoTDB 的端口号</td><td># port = &quot;6667&quot;</td><td>port = &quot;部署 IoTDB 的端口号&quot;</td><td>默认为 6667</td></tr><tr><td>user</td><td>IoTDB 的用户名</td><td># user = &quot;root&quot;</td><td>user = &quot;IoTDB 的用户名&quot;</td><td>默认为 root</td></tr><tr><td>password</td><td>IoTDB 的密码</td><td># password = &quot;root&quot;</td><td>password= &quot;IoTDB 的密码&quot;</td><td>默认为 root</td></tr><tr><td>timestamp_precision</td><td>时间戳精度</td><td>timestamp_precision = &quot;millisecond&quot;</td><td>timestamp_precision = &quot;与 IoTDB 相同的时间戳精度&quot;</td><td>您可以通过查看&quot;iotdb-system.properties&quot;中&quot;timestamp_precision&quot;字段即可</td></tr><tr><td>sanitize_tag</td><td>数据库版本</td><td>无</td><td>sanitize_tag = &quot;0.13/1.0/1.1/1.2/1.3&quot;</td><td></td></tr></tbody></table><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># Save metrics to an IoTDB Database</span></span>
<span class="line"><span style="color:#ABB2BF;">[[outputs.iotdb]]</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  ## Configuration of IoTDB server connection</span></span>
<span class="line"><span style="color:#61AFEF;">  host</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> &quot;127.0.0.1&quot;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  # port = &quot;6667&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  ## Configuration of authentication</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  # user = &quot;root&quot;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  # password = &quot;root&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  ## Timeout to open a new session.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  ## A value of zero means no timeout.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  # timeout = &quot;5s&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  ## Configuration of type conversion for 64-bit unsigned int</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  ## IoTDB currently DOES NOT support unsigned integers (version 13.x).</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  ## 32-bit unsigned integers are safely converted into 64-bit signed integers by the plugin,</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  ## however, this is not true for 64-bit values in general as overflows may occur.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  ## The following setting allows to specify the handling of 64-bit unsigned integers.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  ## Available values are:</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  ##   - &quot;int64&quot;       --  convert to 64-bit signed integers and accept overflows</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  ##   - &quot;int64_clip&quot;  --  convert to 64-bit signed integers and clip the values on overflow to 9,223,372,036,854,775,807</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  ##   - &quot;text&quot;        --  convert to the string representation of the value</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  # uint64_conversion = &quot;int64_clip&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  ## Configuration of TimeStamp</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  ## TimeStamp is always saved in 64bits int. timestamp_precision specifies the unit of timestamp.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  ## Available value:</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  ## &quot;second&quot;, &quot;millisecond&quot;, &quot;microsecond&quot;, &quot;nanosecond&quot;(default)</span></span>
<span class="line"><span style="color:#61AFEF;">  timestamp_precision</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> &quot;millisecond&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  ## Handling of tags</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  ## Tags are not fully supported by IoTDB.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  ## A guide with suggestions on how to handle tags can be found here:</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  ##     https://iotdb.apache.org/UserGuide/Master/API/InfluxDB-Protocol.html</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  ##</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  ## Available values are:</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  ##   - &quot;fields&quot;     --  convert tags to fields in the measurement</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  ##   - &quot;device_id&quot;  --  attach tags to the device ID</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  ##</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  ## For Example, a metric named &quot;root.sg.device&quot; with the tags \`tag1: &quot;private&quot;\`  and  \`tag2: &quot;working&quot;\` and</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  ##  fields \`s1: 100\`  and \`s2: &quot;hello&quot;\` will result in the following representations in IoTDB</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  ##   - &quot;fields&quot;     --  root.sg.device, s1=100, s2=&quot;hello&quot;, tag1=&quot;private&quot;, tag2=&quot;working&quot;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  ##   - &quot;device_id&quot;  --  root.sg.device.private.working, s1=100, s2=&quot;hello&quot;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  # convert_tags_to = &quot;device_id&quot;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   ## Handling of unsupported characters</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  ## Some characters in different versions of IoTDB are not supported in path name</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  ## A guide with suggetions on valid paths can be found here:</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  ## for iotdb 0.13.x           -&gt; https://iotdb.apache.org/UserGuide/V0.13.x/Reference/Syntax-Conventions.html#identifiers</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  ## for iotdb 1.x.x and above  -&gt; https://iotdb.apache.org/UserGuide/V1.3.x/User-Manual/Syntax-Rule.html#identifier</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  ##</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  ## Available values are:</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  ##   - &quot;1.0&quot;, &quot;1.1&quot;, &quot;1.2&quot;, &quot;1.3&quot;  -- enclose in \`\` the world having forbidden character</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  ##                                    such as @ $ # : [ ] { } ( ) space</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  ##   - &quot;0.13&quot;                      -- enclose in \`\` the world having forbidden character</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  ##                                    such as space</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  ##</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  ## Keep this section commented if you don&#39;t want to sanitize the path</span></span>
<span class="line"><span style="color:#61AFEF;">  sanitize_tag</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> &quot;1.3&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>使用 cpu_iotdb.conf 配置文件运行 Telegraf：运行一段时间后，可以在 IoTDB 中查询到 Telegraf 收集上报的数据</li></ol>`,16))])}const v=l(c,[["render",u],["__file","Telegraf.html.vue"]]),g=JSON.parse('{"path":"/zh/UserGuide/V2.0.1/Tree/Ecosystem-Integration/Telegraf.html","title":"Telegraf","lang":"zh-CN","frontmatter":{"description":"Telegraf 1、产品概述 1.1 Telegraf Telegraf 是一个开源代理工具，用于收集、处理和传输度量数据，由 InfluxData 开发。 Telegraf 有以下这些特点： 插件体系结构：Telegraf 的强大之处在于其广泛的插件生态系统。它支持多种输入、输出和处理器插件，可以与各种数据源和目标无缝集成。 数据收集：Telegr...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V2.0.1/Tree/Ecosystem-Integration/Telegraf.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V2.0.1/Tree/Ecosystem-Integration/Telegraf.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Telegraf"}],["meta",{"property":"og:description","content":"Telegraf 1、产品概述 1.1 Telegraf Telegraf 是一个开源代理工具，用于收集、处理和传输度量数据，由 InfluxData 开发。 Telegraf 有以下这些特点： 插件体系结构：Telegraf 的强大之处在于其广泛的插件生态系统。它支持多种输入、输出和处理器插件，可以与各种数据源和目标无缝集成。 数据收集：Telegr..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alioss.timecho.com/docs/img/Telegraf.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-01-20T12:27:06.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-20T12:27:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Telegraf\\",\\"image\\":[\\"https://alioss.timecho.com/docs/img/Telegraf.png\\",\\"https://alioss.timecho.com/docs/img/Telegraf_1.png\\",\\"https://alioss.timecho.com/docs/img/Telegraf_2.png\\"],\\"dateModified\\":\\"2025-01-20T12:27:06.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1、产品概述","slug":"_1、产品概述","link":"#_1、产品概述","children":[{"level":3,"title":"1.1 Telegraf","slug":"_1-1-telegraf","link":"#_1-1-telegraf","children":[]},{"level":3,"title":"1.2 Telegraf-IoTDB 插件","slug":"_1-2-telegraf-iotdb-插件","link":"#_1-2-telegraf-iotdb-插件","children":[]}]},{"level":2,"title":"2、安装要求","slug":"_2、安装要求","link":"#_2、安装要求","children":[]},{"level":2,"title":"3、安装步骤","slug":"_3、安装步骤","link":"#_3、安装步骤","children":[]},{"level":2,"title":"4、使用说明","slug":"_4、使用说明","link":"#_4、使用说明","children":[{"level":3,"title":"4.1 设置输入源","slug":"_4-1-设置输入源","link":"#_4-1-设置输入源","children":[]},{"level":3,"title":"4.2 设置输出源","slug":"_4-2-设置输出源","link":"#_4-2-设置输出源","children":[]},{"level":3,"title":"4.3 启动Telegraf服务","slug":"_4-3-启动telegraf服务","link":"#_4-3-启动telegraf服务","children":[]}]},{"level":2,"title":"5、使用示例","slug":"_5、使用示例","link":"#_5、使用示例","children":[]}],"git":{"createdTime":1737376026000,"updatedTime":1737376026000,"contributors":[{"name":"majialin","username":"majialin","email":"107627937+mal117@users.noreply.github.com","commits":1,"url":"https://github.com/majialin"}]},"readingTime":{"minutes":5.66,"words":1697},"filePathRelative":"zh/UserGuide/V2.0.1/Tree/Ecosystem-Integration/Telegraf.md","localizedDate":"2025年1月20日","autoDesc":true}');export{v as comp,g as data};
