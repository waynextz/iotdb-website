import{_ as n,r as l,o as s,c as r,b as a,d as e,a as o,e as i}from"./app-DxurNv9d.js";const d={},c=i('<h1 id="监控面板安装部署" tabindex="-1"><a class="header-anchor" href="#监控面板安装部署"><span>监控面板安装部署</span></a></h1><p>从 Apache IoTDB 1.0 版本开始，我们引入了系统监控模块，可以完成对 Apache IoTDB 的重要运行指标进行监控，本文介绍了如何在 Apache IoTDB 分布式开启系统监控模块，并且使用 Prometheus + Grafana 的方式完成对系统监控指标的可视化。</p><h2 id="前期准备" tabindex="-1"><a class="header-anchor" href="#前期准备"><span>前期准备</span></a></h2><h3 id="软件要求" tabindex="-1"><a class="header-anchor" href="#软件要求"><span>软件要求</span></a></h3>',4),h={href:"https://iotdb.apache.org/Download/",target:"_blank",rel:"noopener noreferrer"},p={href:"https://prometheus.io/download/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://grafana.com/grafana/download",target:"_blank",rel:"noopener noreferrer"},m=a("li",null,"IoTDB-Grafana安装包：Grafana看板为TimechoDB（基于IoTDB的企业版数据库）工具，您可联系您的销售获取相关安装包",-1),u=i(`<h3 id="集群要求" tabindex="-1"><a class="header-anchor" href="#集群要求"><span>集群要求</span></a></h3><p>进行以下操作前请确认IoTDB集群已启动。</p><h3 id="说明" tabindex="-1"><a class="header-anchor" href="#说明"><span>说明</span></a></h3><p>本文将在一台机器（1 个 ConfigNode 和 1 个 DataNode）环境上进行监控面板搭建，其他集群配置是类似的，用户可以根据自己的集群情况（ConfigNode 和 DataNode 的数量）进行配置调整。本文搭建的集群的基本配置信息如下表所示。</p><table><thead><tr><th>集群角色</th><th>节点IP</th><th>监控模块推送器</th><th>监控模块级别</th><th>监控 Port</th></tr></thead><tbody><tr><td>ConfigNode</td><td>127.0.0.1</td><td>PROMETHEUS</td><td>IMPORTANT</td><td>9091</td></tr><tr><td>DataNode</td><td>127.0.0.1</td><td>PROMETHEUS</td><td>IMPORTANT</td><td>9093</td></tr></tbody></table><h2 id="配置-prometheus-采集监控指标" tabindex="-1"><a class="header-anchor" href="#配置-prometheus-采集监控指标"><span>配置 Prometheus 采集监控指标</span></a></h2><ol><li>下载安装包。下载Prometheus的二进制包到本地，解压后进入对应文件夹：</li></ol><div class="language-Shell line-numbers-mode" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code>tar xvfz prometheus-*.tar.gz
cd prometheus-*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>修改配置。修改Prometheus的配置文件prometheus.yml如下<br> a. 新增 confignode 任务收集 ConfigNode 的监控数据<br> b. 新增 datanode 任务收集 DataNode 的监控数据</li></ol><div class="language-YAML line-numbers-mode" data-ext="YAML" data-title="YAML"><pre class="language-YAML"><code>global:
  scrape_interval: 15s

scrape_configs:
  - job_name: &quot;prometheus&quot;
    static_configs:
    - targets: [&quot;localhost:9090&quot;]
  - job_name: &quot;confignode&quot;
    static_configs:
    - targets: [&quot;localhost:9091&quot;]
    honor_labels: true
  - job_name: &quot;datanode&quot;
    static_configs:
    - targets: [&quot;localhost:9093&quot;]
    honor_labels: true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>启动Promethues。Prometheus 监控数据的默认过期时间为 15d。在生产环境中，建议将其调整为 180d 以上，以对更长时间的历史监控数据进行追踪，启动命令如下所示：</li></ol><div class="language-Shell line-numbers-mode" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code>./prometheus --config.file=prometheus.yml --storage.tsdb.retention.time=180d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,12),f={start:"4"},b={href:"http://localhost:9090",target:"_blank",rel:"noopener noreferrer"},v=i(`<p><img src="https://alioss.timecho.com/docs/img/1a.PNG" alt="" loading="lazy"><br><img src="https://alioss.timecho.com/docs/img/2a.PNG" alt="" loading="lazy"></p><h2 id="使用-grafana-查看监控数据" tabindex="-1"><a class="header-anchor" href="#使用-grafana-查看监控数据"><span>使用 Grafana 查看监控数据</span></a></h2><h3 id="step1-grafana-安装、配置与启动" tabindex="-1"><a class="header-anchor" href="#step1-grafana-安装、配置与启动"><span>Step1：Grafana 安装、配置与启动</span></a></h3><ol><li>下载Grafana的二进制包到本地，解压后进入对应文件夹：</li></ol><div class="language-Shell line-numbers-mode" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code>tar -zxvf grafana-*.tar.gz
cd grafana-*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>启动Grafana并进入：</li></ol><div class="language-Shell line-numbers-mode" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code>./bin/grafana-server web 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,7),_={start:"3"},D={href:"http://localhost:3000",target:"_blank",rel:"noopener noreferrer"},y=a("li",null,"首先我们在 Configuration 中配置 Data Source 为 Prometheus",-1),x=i('<figure><img src="https://alioss.timecho.com/docs/img/3a.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="5"><li>在配置 Data Source 时注意 Prometheus 所在的URL，配置好后点击Save &amp; Test 出现 Data source is working 提示则为配置成功</li></ol><figure><img src="https://alioss.timecho.com/docs/img/4a.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="step2-使用iotdb官方提供的grafana看板" tabindex="-1"><a class="header-anchor" href="#step2-使用iotdb官方提供的grafana看板"><span>Step2：使用IoTDB官方提供的Grafana看板</span></a></h3><ol><li>进入 Grafana，选择 Dashboards 的 Browse</li></ol><figure><img src="https://alioss.timecho.com/docs/img/5a.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>点击右侧 Import 按钮</li></ol><figure><img src="https://alioss.timecho.com/docs/img/6a.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>选择一种方式导入 Dashboard<br> a. 上传本地已下载的 Dashboard 的 Json 文件<br> b. 输入 Grafana 官网获取到的 Dashboard 的 URL 或者 ID<br> c. 将 Dashboard 的 Json 文件内容直接粘贴进入</li></ol><figure><img src="https://alioss.timecho.com/docs/img/7a.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li>选择 Dashboard 的 Prometheus 为刚刚配置好的 Data Source，然后点击 Import</li></ol><figure><img src="https://alioss.timecho.com/docs/img/8a.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="5"><li>之后进入 Dashboard，选择 job 为 ConfigNode，就看到如下的监控面板</li></ol><figure><img src="https://alioss.timecho.com/docs/img/9a.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="6"><li>同样地，我们可以导入 Apache DataNode Dashboard，选择 job 为 DataNode，就看到如下的监控面板：</li></ol><figure><img src="https://alioss.timecho.com/docs/img/10a.pngA" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="step3-创建新的-dashboard-进行数据可视化" tabindex="-1"><a class="header-anchor" href="#step3-创建新的-dashboard-进行数据可视化"><span>Step3：创建新的 Dashboard 进行数据可视化</span></a></h3><ol><li>首先创建Dashboard，然后创建Panel</li></ol><figure><img src="https://alioss.timecho.com/docs/img/11a.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>之后就可以在面板根据自己的需求对监控相关的数据进行可视化（所有相关的监控指标可以先在job中选择confignode/datanode筛选）</li></ol><figure><img src="https://alioss.timecho.com/docs/img/12a.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>选择关注的监控指标可视化完成后，我们就得到了这样的面板：</li></ol><figure><img src="https://alioss.timecho.com/docs/img/13a.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',23);function T(S,I){const t=l("ExternalLinkIcon");return s(),r("div",null,[c,a("ol",null,[a("li",null,[e("Apache IoTDB：1.0 版本及以上，可以前往官网下载："),a("a",h,[e("https://iotdb.apache.org/Download/"),o(t)])]),a("li",null,[e("Prometheus：2.30.3 版本及以上，可以前往官网下载："),a("a",p,[e("https://prometheus.io/download/"),o(t)])]),a("li",null,[e("Grafana：8.4.2 版本及以上，可以前往官网下载："),a("a",g,[e("https://grafana.com/grafana/download"),o(t)])]),m]),u,a("ol",f,[a("li",null,[e("确认启动成功。在浏览器中输入 "),a("a",b,[e("http://localhost:9090"),o(t)]),e("，进入Prometheus，点击进入Status下的Target界面（如下图1），当看到State均为Up时表示配置成功并已经联通（如下图2），点击左侧链接可以跳转到网页监控。")])]),v,a("ol",_,[a("li",null,[e("在浏览器中输入 "),a("a",D,[e("http://localhost:3000"),o(t)]),e("，进入Grafana，默认初始用户名和密码均为 admin。")]),y]),x])}const P=n(d,[["render",T],["__file","Monitoring-Board-Install-and-Deploy.html.vue"]]),G=JSON.parse('{"path":"/zh/UserGuide/V1.2.x/Deployment-and-Maintenance/Monitoring-Board-Install-and-Deploy.html","title":"监控面板安装部署","lang":"zh-CN","frontmatter":{"description":"监控面板安装部署 从 Apache IoTDB 1.0 版本开始，我们引入了系统监控模块，可以完成对 Apache IoTDB 的重要运行指标进行监控，本文介绍了如何在 Apache IoTDB 分布式开启系统监控模块，并且使用 Prometheus + Grafana 的方式完成对系统监控指标的可视化。 前期准备 软件要求 Apache IoTDB：...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.2.x/Deployment-and-Maintenance/Monitoring-Board-Install-and-Deploy.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.2.x/Deployment-and-Maintenance/Monitoring-Board-Install-and-Deploy.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"监控面板安装部署"}],["meta",{"property":"og:description","content":"监控面板安装部署 从 Apache IoTDB 1.0 版本开始，我们引入了系统监控模块，可以完成对 Apache IoTDB 的重要运行指标进行监控，本文介绍了如何在 Apache IoTDB 分布式开启系统监控模块，并且使用 Prometheus + Grafana 的方式完成对系统监控指标的可视化。 前期准备 软件要求 Apache IoTDB：..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alioss.timecho.com/docs/img/1a.PNG"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-01-12T08:18:47.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-12T08:18:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"监控面板安装部署\\",\\"image\\":[\\"https://alioss.timecho.com/docs/img/1a.PNG\\",\\"https://alioss.timecho.com/docs/img/2a.PNG\\",\\"https://alioss.timecho.com/docs/img/3a.png\\",\\"https://alioss.timecho.com/docs/img/4a.png\\",\\"https://alioss.timecho.com/docs/img/5a.png\\",\\"https://alioss.timecho.com/docs/img/6a.png\\",\\"https://alioss.timecho.com/docs/img/7a.png\\",\\"https://alioss.timecho.com/docs/img/8a.png\\",\\"https://alioss.timecho.com/docs/img/9a.png\\",\\"https://alioss.timecho.com/docs/img/10a.pngA\\",\\"https://alioss.timecho.com/docs/img/11a.png\\",\\"https://alioss.timecho.com/docs/img/12a.png\\",\\"https://alioss.timecho.com/docs/img/13a.png\\"],\\"dateModified\\":\\"2024-01-12T08:18:47.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"前期准备","slug":"前期准备","link":"#前期准备","children":[{"level":3,"title":"软件要求","slug":"软件要求","link":"#软件要求","children":[]},{"level":3,"title":"集群要求","slug":"集群要求","link":"#集群要求","children":[]},{"level":3,"title":"说明","slug":"说明","link":"#说明","children":[]}]},{"level":2,"title":"配置 Prometheus 采集监控指标","slug":"配置-prometheus-采集监控指标","link":"#配置-prometheus-采集监控指标","children":[]},{"level":2,"title":"使用 Grafana 查看监控数据","slug":"使用-grafana-查看监控数据","link":"#使用-grafana-查看监控数据","children":[{"level":3,"title":"Step1：Grafana 安装、配置与启动","slug":"step1-grafana-安装、配置与启动","link":"#step1-grafana-安装、配置与启动","children":[]},{"level":3,"title":"Step2：使用IoTDB官方提供的Grafana看板","slug":"step2-使用iotdb官方提供的grafana看板","link":"#step2-使用iotdb官方提供的grafana看板","children":[]},{"level":3,"title":"Step3：创建新的 Dashboard 进行数据可视化","slug":"step3-创建新的-dashboard-进行数据可视化","link":"#step3-创建新的-dashboard-进行数据可视化","children":[]}]}],"git":{"createdTime":1692104943000,"updatedTime":1705047527000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1},{"name":"wanghui42","email":"105700158+wanghui42@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":3.68,"words":1103},"filePathRelative":"zh/UserGuide/V1.2.x/Deployment-and-Maintenance/Monitoring-Board-Install-and-Deploy.md","localizedDate":"2023年8月15日","autoDesc":true}');export{P as comp,G as data};
