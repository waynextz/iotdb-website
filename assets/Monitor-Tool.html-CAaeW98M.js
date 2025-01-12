import{_ as o,c as t,b as a,o as s}from"./app-CNiZnG3t.js";const n={};function l(i,e){return s(),t("div",null,e[0]||(e[0]=[a(`<h1 id="监控工具" tabindex="-1"><a class="header-anchor" href="#监控工具"><span>监控工具</span></a></h1><h2 id="prometheus" tabindex="-1"><a class="header-anchor" href="#prometheus"><span>Prometheus</span></a></h2><h3 id="监控指标的-prometheus-映射关系" tabindex="-1"><a class="header-anchor" href="#监控指标的-prometheus-映射关系"><span>监控指标的 Prometheus 映射关系</span></a></h3><blockquote><p>对于 Metric Name 为 name, Tags 为 K1=V1, ..., Kn=Vn 的监控指标有如下映射，其中 value 为具体值</p></blockquote><table><thead><tr><th>监控指标类型</th><th>映射关系</th></tr></thead><tbody><tr><td>Counter</td><td>name_total{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;,k1=&quot;V1&quot; , ..., Kn=&quot;Vn&quot;} value</td></tr><tr><td>AutoGauge、Gauge</td><td>name{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;,k1=&quot;V1&quot; , ..., Kn=&quot;Vn&quot;} value</td></tr><tr><td>Histogram</td><td>name_max{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;,k1=&quot;V1&quot; , ..., Kn=&quot;Vn&quot;} value <br> name_sum{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;,k1=&quot;V1&quot; , ..., Kn=&quot;Vn&quot;} value <br> name_count{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;,k1=&quot;V1&quot; , ..., Kn=&quot;Vn&quot;} value <br> name{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;,k1=&quot;V1&quot; , ..., Kn=&quot;Vn&quot;, quantile=&quot;0.5&quot;} value <br> name{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;,k1=&quot;V1&quot; , ..., Kn=&quot;Vn&quot;, quantile=&quot;0.99&quot;} value</td></tr><tr><td>Rate</td><td>name_total{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;,k1=&quot;V1&quot; , ..., Kn=&quot;Vn&quot;} value <br> name_total{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;,k1=&quot;V1&quot; , ..., Kn=&quot;Vn&quot;, rate=&quot;m1&quot;} value <br> name_total{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;,k1=&quot;V1&quot; , ..., Kn=&quot;Vn&quot;, rate=&quot;m5&quot;} value <br> name_total{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;,k1=&quot;V1&quot; , ..., Kn=&quot;Vn&quot;, rate=&quot;m15&quot;} value <br> name_total{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;,k1=&quot;V1&quot; , ..., Kn=&quot;Vn&quot;, rate=&quot;mean&quot;} value</td></tr><tr><td>Timer</td><td>name_seconds_max{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;,k1=&quot;V1&quot; , ..., Kn=&quot;Vn&quot;} value <br> name_seconds_sum{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;,k1=&quot;V1&quot; , ..., Kn=&quot;Vn&quot;} value <br> name_seconds_count{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;,k1=&quot;V1&quot; , ..., Kn=&quot;Vn&quot;} value <br> name_seconds{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;,k1=&quot;V1&quot; , ..., Kn=&quot;Vn&quot;, quantile=&quot;0.5&quot;} value value <br> name_seconds{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;,k1=&quot;V1&quot; , ..., Kn=&quot;Vn&quot;, quantile=&quot;0.99&quot;} value</td></tr></tbody></table><h3 id="修改配置文件" tabindex="-1"><a class="header-anchor" href="#修改配置文件"><span>修改配置文件</span></a></h3><ol><li>以 DataNode 为例，修改 iotdb-datanode.properties 配置文件如下：</li></ol><div class="language-properties line-numbers-mode" data-highlighter="shiki" data-ext="properties" data-title="properties" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">dn_metric_reporter_list</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">PROMETHEUS</span></span>
<span class="line"><span style="color:#C678DD;">dn_metric_level</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">CORE</span></span>
<span class="line"><span style="color:#C678DD;">dn_metric_prometheus_reporter_port</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">9091</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><p>启动 IoTDB DataNode</p></li><li><p>打开浏览器或者用<code>curl</code> 访问 <code>http://servier_ip:9091/metrics</code>, 就能得到如下 metric 数据：</p></li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>...</span></span>
<span class="line"><span># HELP file_count</span></span>
<span class="line"><span># TYPE file_count gauge</span></span>
<span class="line"><span>file_count{name=&quot;wal&quot;,} 0.0</span></span>
<span class="line"><span>file_count{name=&quot;unseq&quot;,} 0.0</span></span>
<span class="line"><span>file_count{name=&quot;seq&quot;,} 2.0</span></span>
<span class="line"><span>...</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="prometheus-grafana" tabindex="-1"><a class="header-anchor" href="#prometheus-grafana"><span>Prometheus + Grafana</span></a></h3><p>如上所示，IoTDB 对外暴露出标准的 Prometheus 格式的监控指标数据，可以使用 Prometheus 采集并存储监控指标，使用 Grafana<br> 可视化监控指标。</p><p>IoTDB、Prometheus、Grafana三者的关系如下图所示:</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/System-Tools/Metrics/iotdb_prometheus_grafana.png" alt="iotdb_prometheus_grafana" tabindex="0" loading="lazy"><figcaption>iotdb_prometheus_grafana</figcaption></figure><ol><li>IoTDB在运行过程中持续收集监控指标数据。</li><li>Prometheus以固定的间隔（可配置）从IoTDB的HTTP接口拉取监控指标数据。</li><li>Prometheus将拉取到的监控指标数据存储到自己的TSDB中。</li><li>Grafana以固定的间隔（可配置）从Prometheus查询监控指标数据并绘图展示。</li></ol><p>从交互流程可以看出，我们需要做一些额外的工作来部署和配置Prometheus和Grafana。</p><p>比如，你可以对Prometheus进行如下的配置（部分参数可以自行调整）来从IoTDB获取监控数据</p><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#E06C75;">job_name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">pull-metrics</span></span>
<span class="line"><span style="color:#E06C75;">honor_labels</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span></span>
<span class="line"><span style="color:#E06C75;">honor_timestamps</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span></span>
<span class="line"><span style="color:#E06C75;">scrape_interval</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">15s</span></span>
<span class="line"><span style="color:#E06C75;">scrape_timeout</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">10s</span></span>
<span class="line"><span style="color:#E06C75;">metrics_path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">/metrics</span></span>
<span class="line"><span style="color:#E06C75;">scheme</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">http</span></span>
<span class="line"><span style="color:#E06C75;">follow_redirects</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span></span>
<span class="line"><span style="color:#E06C75;">static_configs</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">  - </span><span style="color:#E06C75;">targets</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#98C379;">localhost:9091</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更多细节可以参考下面的文档：</p><p><a href="https://prometheus.io/docs/prometheus/latest/getting_started/" target="_blank" rel="noopener noreferrer">Prometheus安装使用文档</a></p><p><a href="https://prometheus.io/docs/prometheus/latest/configuration/configuration/#scrape_config" target="_blank" rel="noopener noreferrer">Prometheus从HTTP接口拉取metrics数据的配置说明</a></p><p><a href="https://grafana.com/docs/grafana/latest/getting-started/getting-started/" target="_blank" rel="noopener noreferrer">Grafana安装使用文档</a></p><p><a href="https://prometheus.io/docs/visualization/grafana/#grafana-support-for-prometheus" target="_blank" rel="noopener noreferrer">Grafana从Prometheus查询数据并绘图的文档</a></p><h3 id="apache-iotdb-dashboard" tabindex="-1"><a class="header-anchor" href="#apache-iotdb-dashboard"><span>Apache IoTDB Dashboard</span></a></h3><p><code>Apache IoTDB Dashboard</code>是 IoTDB 企业版的配套产品，支持统一集中式运维管理，可通过一个监控面板监控多个集群。你可以联系商务获取到 Dashboard 的 Json文件。</p><figure><img src="https://alioss.timecho.com/docs/img/监控 default cluster.png" alt="Apache IoTDB Dashboard" tabindex="0" loading="lazy"><figcaption>Apache IoTDB Dashboard</figcaption></figure><figure><img src="https://alioss.timecho.com/docs/img/监控 cluster2.png" alt="Apache IoTDB Dashboard" tabindex="0" loading="lazy"><figcaption>Apache IoTDB Dashboard</figcaption></figure><h4 id="集群概览" tabindex="-1"><a class="header-anchor" href="#集群概览"><span>集群概览</span></a></h4><p>可以监控包括但不限于：</p><ul><li>集群总CPU核数、总内存空间、总硬盘空间</li><li>集群包含多少个ConfigNode与DataNode</li><li>集群启动时长</li><li>集群写入速度</li><li>集群各节点当前CPU、内存、磁盘使用率</li><li>分节点的信息</li></ul><figure><img src="https://alioss.timecho.com/docs/img/监控 概览.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="数据写入" tabindex="-1"><a class="header-anchor" href="#数据写入"><span>数据写入</span></a></h4><p>可以监控包括但不限于：</p><ul><li>写入平均耗时、耗时中位数、99%分位耗时</li><li>WAL文件数量与尺寸</li><li>节点 WAL flush SyncBuffer 耗时</li></ul><figure><img src="https://alioss.timecho.com/docs/img/监控 写入.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="数据查询" tabindex="-1"><a class="header-anchor" href="#数据查询"><span>数据查询</span></a></h4><p>可以监控包括但不限于：</p><ul><li>节点查询加载时间序列元数据耗时</li><li>节点查询读取时间序列耗时</li><li>节点查询修改时间序列元数据耗时</li><li>节点查询加载Chunk元数据列表耗时</li><li>节点查询修改Chunk元数据耗时</li><li>节点查询按照Chunk元数据过滤耗时</li><li>节点查询构造Chunk Reader耗时的平均值</li></ul><figure><img src="https://alioss.timecho.com/docs/img/监控 查询.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="存储引擎" tabindex="-1"><a class="header-anchor" href="#存储引擎"><span>存储引擎</span></a></h4><p>可以监控包括但不限于：</p><ul><li>分类型的文件数量、大小</li><li>处于各阶段的TsFile数量、大小</li><li>各类任务的数量与耗时</li></ul><figure><img src="https://alioss.timecho.com/docs/img/监控 存储引擎.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="系统监控" tabindex="-1"><a class="header-anchor" href="#系统监控"><span>系统监控</span></a></h4><p>可以监控包括但不限于：</p><ul><li>系统内存、交换内存、进程内存</li><li>磁盘空间、文件数、文件尺寸</li><li>JVM GC时间占比、分类型的GC次数、GC数据量、各年代的堆内存占用</li><li>网络传输速率、包发送速率</li></ul><figure><img src="https://alioss.timecho.com/docs/img/监控 系统 内存与硬盘.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://alioss.timecho.com/docs/img/监控 系统jvm.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://alioss.timecho.com/docs/img/监控 系统 网络.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,49)]))}const u=o(n,[["render",l],["__file","Monitor-Tool.html.vue"]]),p=JSON.parse('{"path":"/zh/UserGuide/V1.2.x/Tools-System/Monitor-Tool.html","title":"监控工具","lang":"zh-CN","frontmatter":{"description":"监控工具 Prometheus 监控指标的 Prometheus 映射关系 对于 Metric Name 为 name, Tags 为 K1=V1, ..., Kn=Vn 的监控指标有如下映射，其中 value 为具体值 修改配置文件 以 DataNode 为例，修改 iotdb-datanode.properties 配置文件如下： 启动 IoTDB...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.2.x/Tools-System/Monitor-Tool.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.2.x/Tools-System/Monitor-Tool.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"监控工具"}],["meta",{"property":"og:description","content":"监控工具 Prometheus 监控指标的 Prometheus 映射关系 对于 Metric Name 为 name, Tags 为 K1=V1, ..., Kn=Vn 的监控指标有如下映射，其中 value 为具体值 修改配置文件 以 DataNode 为例，修改 iotdb-datanode.properties 配置文件如下： 启动 IoTDB..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alioss.timecho.com/docs/img/UserGuide/System-Tools/Metrics/iotdb_prometheus_grafana.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-09T10:21:49.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-09T10:21:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"监控工具\\",\\"image\\":[\\"https://alioss.timecho.com/docs/img/UserGuide/System-Tools/Metrics/iotdb_prometheus_grafana.png\\",\\"https://alioss.timecho.com/docs/img/%E7%9B%91%E6%8E%A7%20default%20cluster.png\\",\\"https://alioss.timecho.com/docs/img/%E7%9B%91%E6%8E%A7%20cluster2.png\\",\\"https://alioss.timecho.com/docs/img/%E7%9B%91%E6%8E%A7%20%E6%A6%82%E8%A7%88.png\\",\\"https://alioss.timecho.com/docs/img/%E7%9B%91%E6%8E%A7%20%E5%86%99%E5%85%A5.png\\",\\"https://alioss.timecho.com/docs/img/%E7%9B%91%E6%8E%A7%20%E6%9F%A5%E8%AF%A2.png\\",\\"https://alioss.timecho.com/docs/img/%E7%9B%91%E6%8E%A7%20%E5%AD%98%E5%82%A8%E5%BC%95%E6%93%8E.png\\",\\"https://alioss.timecho.com/docs/img/%E7%9B%91%E6%8E%A7%20%E7%B3%BB%E7%BB%9F%20%E5%86%85%E5%AD%98%E4%B8%8E%E7%A1%AC%E7%9B%98.png\\",\\"https://alioss.timecho.com/docs/img/%E7%9B%91%E6%8E%A7%20%E7%B3%BB%E7%BB%9Fjvm.png\\",\\"https://alioss.timecho.com/docs/img/%E7%9B%91%E6%8E%A7%20%E7%B3%BB%E7%BB%9F%20%E7%BD%91%E7%BB%9C.png\\"],\\"dateModified\\":\\"2024-05-09T10:21:49.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Prometheus","slug":"prometheus","link":"#prometheus","children":[{"level":3,"title":"监控指标的 Prometheus 映射关系","slug":"监控指标的-prometheus-映射关系","link":"#监控指标的-prometheus-映射关系","children":[]},{"level":3,"title":"修改配置文件","slug":"修改配置文件","link":"#修改配置文件","children":[]},{"level":3,"title":"Prometheus + Grafana","slug":"prometheus-grafana","link":"#prometheus-grafana","children":[]},{"level":3,"title":"Apache IoTDB Dashboard","slug":"apache-iotdb-dashboard","link":"#apache-iotdb-dashboard","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1715250109000,"contributors":[{"name":"wanghui42","username":"wanghui42","email":"105700158+wanghui42@users.noreply.github.com","commits":3,"url":"https://github.com/wanghui42"},{"name":"Li Yu Heng","username":"Li Yu Heng","email":"liyuheng55555@126.com","commits":2,"url":"https://github.com/Li Yu Heng"},{"name":"Lei","username":"Lei","email":"33376433+LeiRui@users.noreply.github.com","commits":1,"url":"https://github.com/Lei"},{"name":"Haonan","username":"Haonan","email":"hhaonan@outlook.com","commits":1,"url":"https://github.com/Haonan"},{"name":"CritasWang","username":"CritasWang","email":"critas@outlook.com","commits":1,"url":"https://github.com/CritasWang"}]},"readingTime":{"minutes":4.58,"words":1375},"filePathRelative":"zh/UserGuide/V1.2.x/Tools-System/Monitor-Tool.md","localizedDate":"2023年7月10日","autoDesc":true}');export{u as comp,p as data};
