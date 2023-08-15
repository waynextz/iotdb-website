import{_ as i,r as s,o as r,c as u,a as l,d as e,e as o,b as a,f as n}from"./app-d7e75f9d.js";const d={},c=n(`<h1 id="monitor-tool" tabindex="-1"><a class="header-anchor" href="#monitor-tool" aria-hidden="true">#</a> Monitor Tool</h1><h2 id="prometheus" tabindex="-1"><a class="header-anchor" href="#prometheus" aria-hidden="true">#</a> Prometheus</h2><h3 id="the-mapping-from-metric-type-to-prometheus-format" tabindex="-1"><a class="header-anchor" href="#the-mapping-from-metric-type-to-prometheus-format" aria-hidden="true">#</a> The mapping from metric type to prometheus format</h3><blockquote><p>For metrics whose Metric Name is name and Tags are K1=V1, ..., Kn=Vn, the mapping is as follows, where value is a<br> specific value</p></blockquote><table><thead><tr><th>Metric Type</th><th>Mapping</th></tr></thead><tbody><tr><td>Counter</td><td>name_total{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;, k1=&quot;V1&quot;, ..., Kn=&quot;Vn&quot;} value</td></tr><tr><td>AutoGauge、Gauge</td><td>name{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;, k1=&quot;V1&quot;, ..., Kn=&quot;Vn&quot;} value</td></tr><tr><td>Histogram</td><td>name_max{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;, k1=&quot;V1&quot;, ..., Kn=&quot;Vn&quot;} value <br> name_sum{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;, k1=&quot;V1&quot;, ..., Kn=&quot;Vn&quot;} value <br> name_count{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;, k1=&quot;V1&quot;, ..., Kn=&quot;Vn&quot;} value <br> name{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;, k1=&quot;V1&quot;, ..., Kn=&quot;Vn&quot;, quantile=&quot;0.5&quot;} value <br> name{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;, k1=&quot;V1&quot;, ..., Kn=&quot;Vn&quot;, quantile=&quot;0.99&quot;} value</td></tr><tr><td>Rate</td><td>name_total{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;, k1=&quot;V1&quot;, ..., Kn=&quot;Vn&quot;} value <br> name_total{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;, k1=&quot;V1&quot;, ..., Kn=&quot;Vn&quot;, rate=&quot;m1&quot;} value <br> name_total{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;, k1=&quot;V1&quot;, ..., Kn=&quot;Vn&quot;, rate=&quot;m5&quot;} value <br> name_total{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;, k1=&quot;V1&quot;, ..., Kn=&quot;Vn&quot;, rate=&quot;m15&quot;} value <br> name_total{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;, k1=&quot;V1&quot;, ..., Kn=&quot;Vn&quot;, rate=&quot;mean&quot;} value</td></tr><tr><td>Timer</td><td>name_seconds_max{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;, k1=&quot;V1&quot;, ..., Kn=&quot;Vn&quot;} value <br> name_seconds_sum{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;, k1=&quot;V1&quot;, ..., Kn=&quot;Vn&quot;} value <br> name_seconds_count{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;, k1=&quot;V1&quot;, ..., Kn=&quot;Vn&quot;} value <br> name_seconds{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;, k1=&quot;V1&quot;, ..., Kn=&quot;Vn&quot;, quantile=&quot;0.5&quot;} value <br> name_seconds{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;, k1=&quot;V1&quot;, ..., Kn=&quot;Vn&quot;, quantile=&quot;0.99&quot;} value</td></tr></tbody></table><h3 id="config-file" tabindex="-1"><a class="header-anchor" href="#config-file" aria-hidden="true">#</a> Config File</h3><ol><li>Taking DataNode as an example, modify the iotdb-datanode.properties configuration file as follows:</li></ol><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">dn_metric_reporter_list</span><span class="token punctuation">=</span><span class="token value attr-value">PROMETHEUS</span>
<span class="token key attr-name">dn_metric_level</span><span class="token punctuation">=</span><span class="token value attr-value">CORE</span>
<span class="token key attr-name">dn_metric_prometheus_reporter_port</span><span class="token punctuation">=</span><span class="token value attr-value">9091</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then you can get metrics data as follows</p><ol start="2"><li>Start IoTDB DataNodes</li><li>Open a browser or use <code>curl</code> to visit <code>http://servier_ip:9091/metrics</code>, you can get the following metric<br> data:</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>...
# HELP file_count
# TYPE file_count gauge
file_count{name=&quot;wal&quot;,} 0.0
file_count{name=&quot;unseq&quot;,} 0.0
file_count{name=&quot;seq&quot;,} 2.0
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="prometheus-grafana" tabindex="-1"><a class="header-anchor" href="#prometheus-grafana" aria-hidden="true">#</a> Prometheus + Grafana</h3><p>As shown above, IoTDB exposes monitoring metrics data in the standard Prometheus format to the outside world. Prometheus<br> can be used to collect and store monitoring indicators, and Grafana can be used to visualize monitoring indicators.</p><p>The following picture describes the relationships among IoTDB, Prometheus and Grafana</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/System-Tools/Metrics/iotdb_prometheus_grafana.png" alt="iotdb_prometheus_grafana" tabindex="0" loading="lazy"><figcaption>iotdb_prometheus_grafana</figcaption></figure><ol><li>Along with running, IoTDB will collect its metrics continuously.</li><li>Prometheus scrapes metrics from IoTDB at a constant interval (can be configured).</li><li>Prometheus saves these metrics to its inner TSDB.</li><li>Grafana queries metrics from Prometheus at a constant interval (can be configured) and then presents them on the<br> graph.</li></ol><p>So, we need to do some additional works to configure and deploy Prometheus and Grafana.</p><p>For instance, you can config your Prometheus as follows to get metrics data from IoTDB:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">job_name</span><span class="token punctuation">:</span> pull<span class="token punctuation">-</span>metrics
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The following documents may help you have a good journey with Prometheus and Grafana.</p>`,20),p={href:"https://prometheus.io/docs/prometheus/latest/getting_started/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://prometheus.io/docs/prometheus/latest/configuration/configuration/#scrape_config",target:"_blank",rel:"noopener noreferrer"},h={href:"https://grafana.com/docs/grafana/latest/getting-started/getting-started/",target:"_blank",rel:"noopener noreferrer"},q={href:"https://prometheus.io/docs/visualization/grafana/#grafana-support-for-prometheus",target:"_blank",rel:"noopener noreferrer"},g=n('<h2 id="apache-iotdb-dashboard" tabindex="-1"><a class="header-anchor" href="#apache-iotdb-dashboard" aria-hidden="true">#</a> Apache IoTDB Dashboard</h2><p>We introduce the Apache IoTDB Dashboard, designed for unified centralized operations and management. With it, multiple clusters can be monitored through a single panel.</p><figure><img src="https://alioss.timecho.com/docs/img/监控 default cluster.png" alt="Apache IoTDB Dashboard" tabindex="0" loading="lazy"><figcaption>Apache IoTDB Dashboard</figcaption></figure><figure><img src="https://alioss.timecho.com/docs/img/监控 cluster2.png" alt="Apache IoTDB Dashboard" tabindex="0" loading="lazy"><figcaption>Apache IoTDB Dashboard</figcaption></figure><p>You can access the Dashboard&#39;s Json file in the enterprise edition.</p><h3 id="cluster-overview" tabindex="-1"><a class="header-anchor" href="#cluster-overview" aria-hidden="true">#</a> Cluster Overview</h3><p>Including but not limited to:</p><ul><li>Total cluster CPU cores, memory space, and hard disk space.</li><li>Number of ConfigNodes and DataNodes in the cluster.</li><li>Cluster uptime duration.</li><li>Cluster write speed.</li><li>Current CPU, memory, and disk usage across all nodes in the cluster.</li><li>Information on individual nodes.</li></ul><figure><img src="https://alioss.timecho.com/docs/img/监控 概览.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="data-writing" tabindex="-1"><a class="header-anchor" href="#data-writing" aria-hidden="true">#</a> Data Writing</h3><p>Including but not limited to:</p><ul><li>Average write latency, median latency, and the 99% percentile latency.</li><li>Number and size of WAL files.</li><li>Node WAL flush SyncBuffer latency.</li></ul><figure><img src="https://alioss.timecho.com/docs/img/监控 写入.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="data-querying" tabindex="-1"><a class="header-anchor" href="#data-querying" aria-hidden="true">#</a> Data Querying</h3><p>Including but not limited to:</p><ul><li>Node query load times for time series metadata.</li><li>Node read duration for time series.</li><li>Node edit duration for time series metadata.</li><li>Node query load time for Chunk metadata list.</li><li>Node edit duration for Chunk metadata.</li><li>Node filtering duration based on Chunk metadata.</li><li>Average time to construct a Chunk Reader.</li></ul><figure><img src="https://alioss.timecho.com/docs/img/监控 查询.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="storage-engine" tabindex="-1"><a class="header-anchor" href="#storage-engine" aria-hidden="true">#</a> Storage Engine</h3><p>Including but not limited to:</p><ul><li>File count and sizes by type.</li><li>The count and size of TsFiles at various stages.</li><li>Number and duration of various tasks.</li></ul><figure><img src="https://alioss.timecho.com/docs/img/监控 存储引擎.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="system-monitoring" tabindex="-1"><a class="header-anchor" href="#system-monitoring" aria-hidden="true">#</a> System Monitoring</h3><p>Including but not limited to:</p><ul><li>System memory, swap memory, and process memory.</li><li>Disk space, file count, and file sizes.</li><li>JVM GC time percentage, GC occurrences by type, GC volume, and heap memory usage across generations.</li><li>Network transmission rate, packet sending rate</li></ul><figure><img src="https://alioss.timecho.com/docs/img/监控 系统 内存与硬盘.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://alioss.timecho.com/docs/img/监控 系统jvm.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://alioss.timecho.com/docs/img/监控 系统 网络.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',27);function f(b,y){const t=s("ExternalLinkIcon");return r(),u("div",null,[l(`

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

`),c,e("p",null,[e("a",p,[o("Prometheus getting_started"),a(t)])]),e("p",null,[e("a",m,[o("Prometheus scrape metrics"),a(t)])]),e("p",null,[e("a",h,[o("Grafana getting_started"),a(t)])]),e("p",null,[e("a",q,[o("Grafana query metrics from Prometheus"),a(t)])]),g])}const k=i(d,[["render",f],["__file","Monitor-Tool.html.vue"]]);export{k as default};
