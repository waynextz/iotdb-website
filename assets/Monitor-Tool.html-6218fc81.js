import{_ as s,r as u,o as i,c as r,a as l,d as e,e as o,b as a,f as n}from"./app-d7e75f9d.js";const d={},c=n(`<h1 id="prometheus" tabindex="-1"><a class="header-anchor" href="#prometheus" aria-hidden="true">#</a> Prometheus</h1><h2 id="监控指标的-prometheus-映射关系" tabindex="-1"><a class="header-anchor" href="#监控指标的-prometheus-映射关系" aria-hidden="true">#</a> 监控指标的 Prometheus 映射关系</h2><blockquote><p>对于 Metric Name 为 name, Tags 为 K1=V1, ..., Kn=Vn 的监控指标有如下映射，其中 value 为具体值</p></blockquote><table><thead><tr><th>监控指标类型</th><th>映射关系</th></tr></thead><tbody><tr><td>Counter</td><td>name_total{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;,k1=&quot;V1&quot; , ..., Kn=&quot;Vn&quot;} value</td></tr><tr><td>AutoGauge、Gauge</td><td>name{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;,k1=&quot;V1&quot; , ..., Kn=&quot;Vn&quot;} value</td></tr><tr><td>Histogram</td><td>name_max{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;,k1=&quot;V1&quot; , ..., Kn=&quot;Vn&quot;} value <br> name_sum{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;,k1=&quot;V1&quot; , ..., Kn=&quot;Vn&quot;} value <br> name_count{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;,k1=&quot;V1&quot; , ..., Kn=&quot;Vn&quot;} value <br> name{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;,k1=&quot;V1&quot; , ..., Kn=&quot;Vn&quot;, quantile=&quot;0.5&quot;} value <br> name{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;,k1=&quot;V1&quot; , ..., Kn=&quot;Vn&quot;, quantile=&quot;0.99&quot;} value</td></tr><tr><td>Rate</td><td>name_total{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;,k1=&quot;V1&quot; , ..., Kn=&quot;Vn&quot;} value <br> name_total{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;,k1=&quot;V1&quot; , ..., Kn=&quot;Vn&quot;, rate=&quot;m1&quot;} value <br> name_total{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;,k1=&quot;V1&quot; , ..., Kn=&quot;Vn&quot;, rate=&quot;m5&quot;} value <br> name_total{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;,k1=&quot;V1&quot; , ..., Kn=&quot;Vn&quot;, rate=&quot;m15&quot;} value <br> name_total{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;,k1=&quot;V1&quot; , ..., Kn=&quot;Vn&quot;, rate=&quot;mean&quot;} value</td></tr><tr><td>Timer</td><td>name_seconds_max{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;,k1=&quot;V1&quot; , ..., Kn=&quot;Vn&quot;} value <br> name_seconds_sum{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;,k1=&quot;V1&quot; , ..., Kn=&quot;Vn&quot;} value <br> name_seconds_count{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;,k1=&quot;V1&quot; , ..., Kn=&quot;Vn&quot;} value <br> name_seconds{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;,k1=&quot;V1&quot; , ..., Kn=&quot;Vn&quot;, quantile=&quot;0.5&quot;} value value <br> name_seconds{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;,k1=&quot;V1&quot; , ..., Kn=&quot;Vn&quot;, quantile=&quot;0.99&quot;} value</td></tr></tbody></table><h2 id="修改配置文件" tabindex="-1"><a class="header-anchor" href="#修改配置文件" aria-hidden="true">#</a> 修改配置文件</h2><ol><li>以 DataNode 为例，修改 iotdb-datanode.properties 配置文件如下：</li></ol><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">dn_metric_reporter_list</span><span class="token punctuation">=</span><span class="token value attr-value">PROMETHEUS</span>
<span class="token key attr-name">dn_metric_level</span><span class="token punctuation">=</span><span class="token value attr-value">CORE</span>
<span class="token key attr-name">dn_metric_prometheus_reporter_port</span><span class="token punctuation">=</span><span class="token value attr-value">9091</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><p>启动 IoTDB DataNode</p></li><li><p>打开浏览器或者用<code>curl</code> 访问 <code>http://servier_ip:9091/metrics</code>, 就能得到如下 metric 数据：</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>...
# HELP file_count
# TYPE file_count gauge
file_count{name=&quot;wal&quot;,} 0.0
file_count{name=&quot;unseq&quot;,} 0.0
file_count{name=&quot;seq&quot;,} 2.0
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="prometheus-grafana" tabindex="-1"><a class="header-anchor" href="#prometheus-grafana" aria-hidden="true">#</a> Prometheus + Grafana</h2><p>如上所示，IoTDB 对外暴露出标准的 Prometheus 格式的监控指标数据，可以使用 Prometheus 采集并存储监控指标，使用 Grafana<br> 可视化监控指标。</p><p>IoTDB、Prometheus、Grafana三者的关系如下图所示:</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/System-Tools/Metrics/iotdb_prometheus_grafana.png" alt="iotdb_prometheus_grafana" tabindex="0" loading="lazy"><figcaption>iotdb_prometheus_grafana</figcaption></figure><ol><li>IoTDB在运行过程中持续收集监控指标数据。</li><li>Prometheus以固定的间隔（可配置）从IoTDB的HTTP接口拉取监控指标数据。</li><li>Prometheus将拉取到的监控指标数据存储到自己的TSDB中。</li><li>Grafana以固定的间隔（可配置）从Prometheus查询监控指标数据并绘图展示。</li></ol><p>从交互流程可以看出，我们需要做一些额外的工作来部署和配置Prometheus和Grafana。</p><p>比如，你可以对Prometheus进行如下的配置（部分参数可以自行调整）来从IoTDB获取监控数据</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">job_name</span><span class="token punctuation">:</span> pull<span class="token punctuation">-</span>metrics
<span class="token key atrule">honor_labels</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">honor_timestamps</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">scrape_interval</span><span class="token punctuation">:</span> 15s
<span class="token key atrule">scrape_timeout</span><span class="token punctuation">:</span> 10s
<span class="token key atrule">metrics_path</span><span class="token punctuation">:</span> /metrics
<span class="token key atrule">scheme</span><span class="token punctuation">:</span> http
<span class="token key atrule">follow_redirects</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">static_configs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">targets</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> localhost<span class="token punctuation">:</span><span class="token number">9091</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更多细节可以参考下面的文档：</p>`,18),p={href:"https://prometheus.io/docs/prometheus/latest/getting_started/",target:"_blank",rel:"noopener noreferrer"},q={href:"https://prometheus.io/docs/prometheus/latest/configuration/configuration/#scrape_config",target:"_blank",rel:"noopener noreferrer"},m={href:"https://grafana.com/docs/grafana/latest/getting-started/getting-started/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://prometheus.io/docs/visualization/grafana/#grafana-support-for-prometheus",target:"_blank",rel:"noopener noreferrer"},g=n('<h2 id="apache-iotdb-dashboard" tabindex="-1"><a class="header-anchor" href="#apache-iotdb-dashboard" aria-hidden="true">#</a> Apache IoTDB Dashboard</h2><p>我们提供了Apache IoTDB Dashboard，支持统一集中式运维管理，可通过一个监控面板监控多个集群。</p><figure><img src="https://alioss.timecho.com/docs/img/监控 default cluster.png" alt="Apache IoTDB Dashboard" tabindex="0" loading="lazy"><figcaption>Apache IoTDB Dashboard</figcaption></figure><figure><img src="https://alioss.timecho.com/docs/img/监控 cluster2.png" alt="Apache IoTDB Dashboard" tabindex="0" loading="lazy"><figcaption>Apache IoTDB Dashboard</figcaption></figure><p>你可以在企业版中获取到 Dashboard 的 Json文件。</p><h3 id="集群概览" tabindex="-1"><a class="header-anchor" href="#集群概览" aria-hidden="true">#</a> 集群概览</h3><p>可以监控包括但不限于：</p><ul><li>集群总CPU核数、总内存空间、总硬盘空间</li><li>集群包含多少个ConfigNode与DataNode</li><li>集群启动时长</li><li>集群写入速度</li><li>集群各节点当前CPU、内存、磁盘使用率</li><li>分节点的信息</li></ul><figure><img src="https://alioss.timecho.com/docs/img/监控 概览.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="数据写入" tabindex="-1"><a class="header-anchor" href="#数据写入" aria-hidden="true">#</a> 数据写入</h3><p>可以监控包括但不限于：</p><ul><li>写入平均耗时、耗时中位数、99%分位耗时</li><li>WAL文件数量与尺寸</li><li>节点 WAL flush SyncBuffer 耗时</li></ul><figure><img src="https://alioss.timecho.com/docs/img/监控 写入.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="数据查询" tabindex="-1"><a class="header-anchor" href="#数据查询" aria-hidden="true">#</a> 数据查询</h3><p>可以监控包括但不限于：</p><ul><li>节点查询加载时间序列元数据耗时</li><li>节点查询读取时间序列耗时</li><li>节点查询修改时间序列元数据耗时</li><li>节点查询加载Chunk元数据列表耗时</li><li>节点查询修改Chunk元数据耗时</li><li>节点查询按照Chunk元数据过滤耗时</li><li>节点查询构造Chunk Reader耗时的平均值</li></ul><figure><img src="https://alioss.timecho.com/docs/img/监控 查询.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="存储引擎" tabindex="-1"><a class="header-anchor" href="#存储引擎" aria-hidden="true">#</a> 存储引擎</h3><p>可以监控包括但不限于：</p><ul><li>分类型的文件数量、大小</li><li>处于各阶段的TsFile数量、大小</li><li>各类任务的数量与耗时</li></ul><figure><img src="https://alioss.timecho.com/docs/img/监控 存储引擎.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="系统监控" tabindex="-1"><a class="header-anchor" href="#系统监控" aria-hidden="true">#</a> 系统监控</h3><p>可以监控包括但不限于：</p><ul><li>系统内存、交换内存、进程内存</li><li>磁盘空间、文件数、文件尺寸</li><li>JVM GC时间占比、分类型的GC次数、GC数据量、各年代的堆内存占用</li><li>网络传输速率、包发送速率</li></ul><figure><img src="https://alioss.timecho.com/docs/img/监控 系统 内存与硬盘.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://alioss.timecho.com/docs/img/监控 系统jvm.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://alioss.timecho.com/docs/img/监控 系统 网络.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',27);function f(b,v){const t=u("ExternalLinkIcon");return i(),r("div",null,[l(`

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

`),c,e("p",null,[e("a",p,[o("Prometheus安装使用文档"),a(t)])]),e("p",null,[e("a",q,[o("Prometheus从HTTP接口拉取metrics数据的配置说明"),a(t)])]),e("p",null,[e("a",m,[o("Grafana安装使用文档"),a(t)])]),e("p",null,[e("a",h,[o("Grafana从Prometheus查询数据并绘图的文档"),a(t)])]),g])}const _=s(d,[["render",f],["__file","Monitor-Tool.html.vue"]]);export{_ as default};
