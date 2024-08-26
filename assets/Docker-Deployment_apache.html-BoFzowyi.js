import{_ as o,r as d,o as t,c as l,b as e,d as n,a as i,e as s}from"./app-CQeJnOJS.js";const c={},r=s(`<h1 id="docker部署" tabindex="-1"><a class="header-anchor" href="#docker部署"><span>Docker部署</span></a></h1><h2 id="环境准备" tabindex="-1"><a class="header-anchor" href="#环境准备"><span>环境准备</span></a></h2><h3 id="docker安装" tabindex="-1"><a class="header-anchor" href="#docker安装"><span>Docker安装</span></a></h3><div class="language-SQL line-numbers-mode" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code>#以ubuntu为例，其他操作系统可以自行搜索安装方法
#step1: 安装一些必要的系统工具
sudo apt-get update
sudo apt-get -y install apt-transport-https ca-certificates curl software-properties-common
#step2: 安装GPG证书
curl -fsSL https://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -
#step3: 写入软件源信息
sudo add-apt-repository &quot;deb [arch=amd64] https://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable&quot;
#step4: 更新并安装Docker-CE
sudo apt-get -y update
sudo apt-get -y install docker-ce
#step5: 设置docker开机自启动
sudo systemctl enable docker
#step6： 验证docker是否安装成功
docker --version  #显示版本信息，即安装成功
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker-compose安装" tabindex="-1"><a class="header-anchor" href="#docker-compose安装"><span>docker-compose安装</span></a></h3><div class="language-SQL line-numbers-mode" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code>#安装命令
curl -L &quot;https://github.com/docker/compose/releases/download/v2.20.0/docker-compose-$(uname -s)-$(uname -m)&quot; -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
ln -s  /usr/local/bin/docker-compose  /usr/bin/docker-compose
#验证是否安装成功
docker-compose --version  #显示版本信息即安装成功
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="单机版" tabindex="-1"><a class="header-anchor" href="#单机版"><span>单机版</span></a></h2><p>本节演示如何部署1C1D的docker单机版。</p><h3 id="拉取镜像文件" tabindex="-1"><a class="header-anchor" href="#拉取镜像文件"><span>拉取镜像文件</span></a></h3>`,9),p={href:"https://hub.docker.com/r/apache/iotdb%E3%80%82",target:"_blank",rel:"noopener noreferrer"},m=s(`<p>以获取1.3.2版本为例，拉取镜像命令：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull apache/iotdb:1.3.2-standalone
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看镜像：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> images
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://alioss.timecho.com/docs/img/开源-拉取镜像.PNG" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="创建docker-bridge网络" tabindex="-1"><a class="header-anchor" href="#创建docker-bridge网络"><span>创建docker bridge网络</span></a></h3><div class="language-Bash line-numbers-mode" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code>docker network create --driver=bridge --subnet=172.18.0.0/16 --gateway=172.18.0.1  iotdb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="编写docker-compose的yml文件" tabindex="-1"><a class="header-anchor" href="#编写docker-compose的yml文件"><span>编写docker-compose的yml文件</span></a></h3><p>这里我们以把IoTDB安装目录和yml文件统一放在<code>/docker-iotdb</code>文件夹下为例：</p><p>文件目录结构为：<code>/docker-iotdb/iotdb</code>, <code>/docker-iotdb/docker-compose-standalone.yml </code></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>docker-iotdb：
├── iotdb  <span class="token comment">#iotdb安装目录</span>
│── docker-compose-standalone.yml <span class="token comment">#单机版docker-compose的yml文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完整的docker-compose-standalone.yml 内容如下：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>version: <span class="token string">&quot;3&quot;</span>
services:
  iotdb-service:
    image: apache/iotdb:1.3.2-standalone <span class="token comment">#使用的镜像</span>
    hostname: iotdb
    container_name: iotdb
    restart: always       
    ports:
      - <span class="token string">&quot;6667:6667&quot;</span>
    environment:
      - <span class="token assign-left variable">cn_internal_address</span><span class="token operator">=</span>iotdb
      - <span class="token assign-left variable">cn_internal_port</span><span class="token operator">=</span><span class="token number">10710</span>
      - <span class="token assign-left variable">cn_consensus_port</span><span class="token operator">=</span><span class="token number">10720</span>
      - <span class="token assign-left variable">cn_seed_config_node</span><span class="token operator">=</span>iotdb:10710
      - <span class="token assign-left variable">dn_rpc_address</span><span class="token operator">=</span>iotdb
      - <span class="token assign-left variable">dn_internal_address</span><span class="token operator">=</span>iotdb
      - <span class="token assign-left variable">dn_rpc_port</span><span class="token operator">=</span><span class="token number">6667</span>
      - <span class="token assign-left variable">dn_internal_port</span><span class="token operator">=</span><span class="token number">10730</span>
      - <span class="token assign-left variable">dn_mpp_data_exchange_port</span><span class="token operator">=</span><span class="token number">10740</span>
      - <span class="token assign-left variable">dn_schema_region_consensus_port</span><span class="token operator">=</span><span class="token number">10750</span>
      - <span class="token assign-left variable">dn_data_region_consensus_port</span><span class="token operator">=</span><span class="token number">10760</span>
      - <span class="token assign-left variable">dn_seed_config_node</span><span class="token operator">=</span>iotdb:10710
    privileged: <span class="token boolean">true</span>
    volumes:
        - ./iotdb/data:/iotdb/data
        - ./iotdb/logs:/iotdb/logs
        - /dev/mem:/dev/mem:ro
    networks:
      iotdb:
        ipv4_address: <span class="token number">172.18</span>.0.6
networks:
  iotdb:
    external: <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启动iotdb" tabindex="-1"><a class="header-anchor" href="#启动iotdb"><span>启动IoTDB</span></a></h3><p>使用下面的命令启动：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span>　/docker-iotdb
<span class="token function">docker-compose</span> <span class="token parameter variable">-f</span> docker-compose-standalone.yml up  <span class="token parameter variable">-d</span>  <span class="token comment">#后台启动</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="验证部署" tabindex="-1"><a class="header-anchor" href="#验证部署"><span>验证部署</span></a></h3><ul><li><p>查看日志，有如下字样，表示启动成功</p><div class="language-SQL line-numbers-mode" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code>docker logs -f iotdb-datanode #查看日志命令
2024-07-21 08:22:38,457 [main] INFO  o.a.i.db.service.DataNode:227 - Congratulations, IoTDB DataNode is set up successfully. Now, enjoy yourself!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://alioss.timecho.com/docs/img/开源-验证部署.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>进入容器，查看服务运行状态</p><p>查看启动的容器</p><div class="language-SQL line-numbers-mode" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code>docker ps
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://alioss.timecho.com/docs/img/开源-验证部署2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>进入容器, 通过cli登录数据库, 使用show cluster命令查看服务状态</p><div class="language-SQL line-numbers-mode" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code>docker exec -it iotdb  /bin/bash         #进入容器
./start-cli.sh -h iotdb                  #登录数据库
IoTDB&gt; show cluster                      #查看服务状态
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到服务状态都是running, 说明IoTDB部署成功。</p><figure><img src="https://alioss.timecho.com/docs/img/开源-验证部署3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li></ul><h3 id="映射-conf目录-可选" tabindex="-1"><a class="header-anchor" href="#映射-conf目录-可选"><span>映射/conf目录(可选)</span></a></h3><p>后续如果想在物理机中直接修改配置文件，可以把容器中的/conf文件夹映射出来，分三步：</p><p>步骤一：拷贝容器中的/conf目录到<code>/docker-iotdb/iotdb/conf</code></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">cp</span> iotdb:/iotdb/conf /docker-iotdb/iotdb/conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>步骤二：在<code>docker-compose-standalone.yml</code>中添加映射</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>    volumes:
        - ./iotdb/conf:/iotdb/conf   <span class="token comment">#增加这个/conf文件夹的映射</span>
        - ./iotdb/data:/iotdb/data
        - ./iotdb/logs:/iotdb/logs
        - /dev/mem:/dev/mem:ro
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>步骤三：重新启动IoTDB</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span>  <span class="token parameter variable">-f</span> docker-compose-standalone.yml  up  <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="集群版" tabindex="-1"><a class="header-anchor" href="#集群版"><span>集群版</span></a></h2><p>本小节描述如何手动部署包括3个ConfigNode和3个DataNode的实例，即通常所说的3C3D集群。</p><div align="center"><img src="https://alioss.timecho.com/docs/img/集群部署.png" alt="" style="width:60%;"></div><p><strong>注意：集群版目前只支持host网络和overlay 网络，不支持bridge网络。</strong></p><p>下面以host网络为例演示如何部署3C3D集群。</p><h3 id="设置主机名" tabindex="-1"><a class="header-anchor" href="#设置主机名"><span>设置主机名</span></a></h3><p>假设现在有3台linux服务器，IP地址和服务角色分配如下：</p><table><thead><tr><th>节点ip</th><th>主机名</th><th>服务</th></tr></thead><tbody><tr><td>192.168.1.3</td><td>iotdb-1</td><td>ConfigNode、DataNode</td></tr><tr><td>192.168.1.4</td><td>iotdb-2</td><td>ConfigNode、DataNode</td></tr><tr><td>192.168.1.5</td><td>iotdb-3</td><td>ConfigNode、DataNode</td></tr></tbody></table><p>在3台机器上分别配置主机名，设置主机名需要在目标服务器上配置<code>/etc/hosts</code>，使用如下命令：</p><div class="language-Bash line-numbers-mode" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code>echo &quot;192.168.1.3  iotdb-1&quot;  &gt;&gt; /etc/hosts
echo &quot;192.168.1.4  iotdb-2&quot;  &gt;&gt; /etc/hosts
echo &quot;192.168.1.5  iotdb-3&quot;  &gt;&gt; /etc/hosts 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="拉取镜像文件-1" tabindex="-1"><a class="header-anchor" href="#拉取镜像文件-1"><span>拉取镜像文件</span></a></h3>`,37),v={href:"https://hub.docker.com/r/apache/iotdb%E3%80%82",target:"_blank",rel:"noopener noreferrer"},u=s(`<p>在3台服务器上分别拉取IoTDB镜像，以获取1.3.2版本为例，拉取镜像命令：</p><div class="language-SQL line-numbers-mode" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code>docker pull apache/iotdb:1.3.2-standalone
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看镜像：</p><div class="language-SQL line-numbers-mode" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code>docker images
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://alioss.timecho.com/docs/img/开源-集群版1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="编写docker-compose的yml文件-1" tabindex="-1"><a class="header-anchor" href="#编写docker-compose的yml文件-1"><span>编写docker-compose的yml文件</span></a></h3><p>这里我们以把IoTDB安装目录和yml文件统一放在<code>/docker-iotdb</code>文件夹下为例：</p><p>文件目录结构为：<code>/docker-iotdb/iotdb</code>， <code>/docker-iotdb/confignode.yml</code>，<code>/docker-iotdb/datanode.yml</code></p><div class="language-SQL line-numbers-mode" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code>docker-iotdb：
├── confignode.yml #confignode的yml文件
├── datanode.yml   #datanode的yml文件
└── iotdb          #IoTDB安装目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在每台服务器上都要编写2个yml文件，即confignode.yml和datanode.yml，yml示例如下：</p><p><strong>confignode.yml：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#confignode.yml</span>
version: <span class="token string">&quot;3&quot;</span>
services:
  iotdb-confignode:
    image: apache/iotdb:1.3.2-standalone <span class="token comment">#使用的镜像</span>
    hostname: iotdb-1<span class="token operator">|</span>iotdb-2<span class="token operator">|</span>iotdb-3    <span class="token comment">#根据实际情况选择，三选一</span>
    container_name: iotdb-confignode
    command: <span class="token punctuation">[</span><span class="token string">&quot;bash&quot;</span>, <span class="token string">&quot;-c&quot;</span>, <span class="token string">&quot;entrypoint.sh confignode&quot;</span><span class="token punctuation">]</span>
    restart: always
    environment:
      - <span class="token assign-left variable">cn_internal_address</span><span class="token operator">=</span>iotdb-1<span class="token operator">|</span>iotdb-2<span class="token operator">|</span>iotdb-3 <span class="token comment">#根据实际情况选择，三选一</span>
      - <span class="token assign-left variable">cn_internal_port</span><span class="token operator">=</span><span class="token number">10710</span>
      - <span class="token assign-left variable">cn_consensus_port</span><span class="token operator">=</span><span class="token number">10720</span>
      - <span class="token assign-left variable">cn_seed_config_node</span><span class="token operator">=</span>iotdb-1:10710   <span class="token comment">#默认第一台为seed节点</span>
      - <span class="token assign-left variable">schema_replication_factor</span><span class="token operator">=</span><span class="token number">3</span>         <span class="token comment">#元数据副本数</span>
      - <span class="token assign-left variable">data_replication_factor</span><span class="token operator">=</span><span class="token number">2</span>           <span class="token comment">#数据副本数</span>
    privileged: <span class="token boolean">true</span>
    volumes:
      - ./iotdb/data:/iotdb/data
      - ./iotdb/logs:/iotdb/logs
      - /dev/mem:/dev/mem:ro
    network_mode: <span class="token string">&quot;host&quot;</span>    <span class="token comment">#使用host网络</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>datanode.yml：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#datanode.yml</span>
version: <span class="token string">&quot;3&quot;</span>
services:
  iotdb-datanode:
    image: iotdb-enterprise:1.3.2.3-standalone <span class="token comment">#使用的镜像</span>
    hostname: iotdb-1<span class="token operator">|</span>iotdb-2<span class="token operator">|</span>iotdb-3 <span class="token comment">#根据实际情况选择，三选一</span>
    container_name: iotdb-datanode
    command: <span class="token punctuation">[</span><span class="token string">&quot;bash&quot;</span>, <span class="token string">&quot;-c&quot;</span>, <span class="token string">&quot;entrypoint.sh datanode&quot;</span><span class="token punctuation">]</span>
    restart: always
    ports:
      - <span class="token string">&quot;6667:6667&quot;</span>
    privileged: <span class="token boolean">true</span>
    environment:
      - <span class="token assign-left variable">dn_rpc_address</span><span class="token operator">=</span>iotdb-1<span class="token operator">|</span>iotdb-2<span class="token operator">|</span>iotdb-3  <span class="token comment">#根据实际情况选择，三选一</span>
      - <span class="token assign-left variable">dn_internal_address</span><span class="token operator">=</span>iotdb-1<span class="token operator">|</span>iotdb-2<span class="token operator">|</span>iotdb-3 <span class="token comment">#根据实际情况选择，三选一</span>
      - <span class="token assign-left variable">dn_seed_config_node</span><span class="token operator">=</span>iotdb-1:10710      <span class="token comment">#默认第1台为seed节点</span>
      - <span class="token assign-left variable">dn_rpc_port</span><span class="token operator">=</span><span class="token number">6667</span>
      - <span class="token assign-left variable">dn_internal_port</span><span class="token operator">=</span><span class="token number">10730</span>
      - <span class="token assign-left variable">dn_mpp_data_exchange_port</span><span class="token operator">=</span><span class="token number">10740</span>
      - <span class="token assign-left variable">dn_schema_region_consensus_port</span><span class="token operator">=</span><span class="token number">10750</span>
      - <span class="token assign-left variable">dn_data_region_consensus_port</span><span class="token operator">=</span><span class="token number">10760</span>
      - <span class="token assign-left variable">schema_replication_factor</span><span class="token operator">=</span><span class="token number">3</span>         <span class="token comment">#元数据副本数</span>
      - <span class="token assign-left variable">data_replication_factor</span><span class="token operator">=</span><span class="token number">2</span>           <span class="token comment">#数据副本数</span>
    volumes:
      - ./iotdb/data:/iotdb/data
      - ./iotdb/logs:/iotdb/logs
      - /dev/mem:/dev/mem:ro
    network_mode: <span class="token string">&quot;host&quot;</span>      <span class="token comment">#使用host网络</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="首次启动confignode" tabindex="-1"><a class="header-anchor" href="#首次启动confignode"><span>首次启动confignode</span></a></h3><p>先在3台服务器上分别启动confignode, 注意启动顺序，先启动第1台iotdb-1,再启动iotdb-2和iotdb-3。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span>　/docker-iotdb
<span class="token function">docker-compose</span> <span class="token parameter variable">-f</span> confignode.yml up  <span class="token parameter variable">-d</span> <span class="token comment">#后台启动</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启动datanode" tabindex="-1"><a class="header-anchor" href="#启动datanode"><span>启动datanode</span></a></h3><p>在3台服务器上分别启动datanode</p><div class="language-SQL line-numbers-mode" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code>cd /docker-iotdb
docker-compose  -f  datanode.yml  up -d #后台启动
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://alioss.timecho.com/docs/img/开源-集群版2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="验证部署-1" tabindex="-1"><a class="header-anchor" href="#验证部署-1"><span>验证部署</span></a></h3><ul><li><p>查看日志,有如下字样，表示datanode启动成功</p><div class="language-SQL line-numbers-mode" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code>docker logs -f iotdb-datanode #查看日志命令
2024-07-21 09:40:58,120 [main] INFO  o.a.i.db.service.DataNode:227 - Congratulations, IoTDB DataNode is set up successfully. Now, enjoy yourself!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://alioss.timecho.com/docs/img/开源-集群版3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>进入容器，查看服务运行状态</p><p>查看启动的容器</p><div class="language-SQL line-numbers-mode" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code>docker ps
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://alioss.timecho.com/docs/img/开源-集群版4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>进入任意一个容器, 通过cli登录数据库, 使用show cluster命令查看服务状态</p><div class="language-SQL line-numbers-mode" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code>docker exec -it iotdb-datanode /bin/bash     #进入容器
./start-cli.sh -h iotdb-1                    #登录数据库
IoTDB&gt; show cluster                          #查看服务状态
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到服务状态都是running, 说明IoTDB部署成功。</p><figure><img src="https://alioss.timecho.com/docs/img/开源-集群版5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li></ul><h3 id="映射-conf目录-可选-1" tabindex="-1"><a class="header-anchor" href="#映射-conf目录-可选-1"><span>映射/conf目录(可选)</span></a></h3><p>后续如果想在物理机中直接修改配置文件，可以把容器中的/conf文件夹映射出来，分三步：</p><p>步骤一：在3台服务器中分别拷贝容器中的/conf目录到/docker-iotdb/iotdb/conf</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">cp</span> iotdb-confignode:/iotdb/conf /docker-iotdb/iotdb/conf
或者
<span class="token function">docker</span> <span class="token function">cp</span> iotdb-datanode:/iotdb/conf   /docker-iotdb/iotdb/conf 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>步骤二：在3台服务器的confignode.yml和datanode.yml中添加/conf目录映射</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#confignode.yml</span>
    volumes:
      - ./iotdb/conf:/iotdb/conf  <span class="token comment">#增加这个/conf文件夹的映射</span>
      - ./iotdb/data:/iotdb/data
      - ./iotdb/logs:/iotdb/logs
      - /dev/mem:/dev/mem:ro

<span class="token comment">#datanode.yml</span>
    volumes:
      - ./iotdb/conf:/iotdb/conf   <span class="token comment">#增加这个/conf文件夹的映射</span>
      - ./iotdb/data:/iotdb/data
      - ./iotdb/logs:/iotdb/logs
      - /dev/mem:/dev/mem:ro
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>步骤三：在3台服务器上重新启动IoTDB</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /docker-iotdb
<span class="token function">docker-compose</span>  <span class="token parameter variable">-f</span> confignode.yml  up  <span class="token parameter variable">-d</span>
<span class="token function">docker-compose</span>  <span class="token parameter variable">-f</span> datanode.yml    up  <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31);function b(g,h){const a=d("ExternalLinkIcon");return t(),l("div",null,[r,e("p",null,[n("Apache IoTDB的Docker镜像已经上传至"),e("a",p,[n("https://hub.docker.com/r/apache/iotdb。"),i(a)])]),m,e("p",null,[n("Apache IoTDB的Docker镜像已经上传至"),e("a",v,[n("https://hub.docker.com/r/apache/iotdb。"),i(a)])]),u])}const f=o(c,[["render",b],["__file","Docker-Deployment_apache.html.vue"]]),_=JSON.parse('{"path":"/zh/UserGuide/latest/Deployment-and-Maintenance/Docker-Deployment_apache.html","title":"Docker部署","lang":"zh-CN","frontmatter":{"description":"Docker部署 环境准备 Docker安装 docker-compose安装 单机版 本节演示如何部署1C1D的docker单机版。 拉取镜像文件 Apache IoTDB的Docker镜像已经上传至https://hub.docker.com/r/apache/iotdb。 以获取1.3.2版本为例，拉取镜像命令： 查看镜像： 创建docker b...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/latest/Deployment-and-Maintenance/Docker-Deployment_apache.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/latest/Deployment-and-Maintenance/Docker-Deployment_apache.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Docker部署"}],["meta",{"property":"og:description","content":"Docker部署 环境准备 Docker安装 docker-compose安装 单机版 本节演示如何部署1C1D的docker单机版。 拉取镜像文件 Apache IoTDB的Docker镜像已经上传至https://hub.docker.com/r/apache/iotdb。 以获取1.3.2版本为例，拉取镜像命令： 查看镜像： 创建docker b..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alioss.timecho.com/docs/img/%E5%BC%80%E6%BA%90-%E6%8B%89%E5%8F%96%E9%95%9C%E5%83%8F.PNG"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-08-21T03:21:20.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-21T03:21:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Docker部署\\",\\"image\\":[\\"https://alioss.timecho.com/docs/img/%E5%BC%80%E6%BA%90-%E6%8B%89%E5%8F%96%E9%95%9C%E5%83%8F.PNG\\",\\"https://alioss.timecho.com/docs/img/%E5%BC%80%E6%BA%90-%E9%AA%8C%E8%AF%81%E9%83%A8%E7%BD%B2.png\\",\\"https://alioss.timecho.com/docs/img/%E5%BC%80%E6%BA%90-%E9%AA%8C%E8%AF%81%E9%83%A8%E7%BD%B22.png\\",\\"https://alioss.timecho.com/docs/img/%E5%BC%80%E6%BA%90-%E9%AA%8C%E8%AF%81%E9%83%A8%E7%BD%B23.png\\",\\"https://alioss.timecho.com/docs/img/%E5%BC%80%E6%BA%90-%E9%9B%86%E7%BE%A4%E7%89%881.png\\",\\"https://alioss.timecho.com/docs/img/%E5%BC%80%E6%BA%90-%E9%9B%86%E7%BE%A4%E7%89%882.png\\",\\"https://alioss.timecho.com/docs/img/%E5%BC%80%E6%BA%90-%E9%9B%86%E7%BE%A4%E7%89%883.png\\",\\"https://alioss.timecho.com/docs/img/%E5%BC%80%E6%BA%90-%E9%9B%86%E7%BE%A4%E7%89%884.png\\",\\"https://alioss.timecho.com/docs/img/%E5%BC%80%E6%BA%90-%E9%9B%86%E7%BE%A4%E7%89%885.png\\"],\\"dateModified\\":\\"2024-08-21T03:21:20.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"环境准备","slug":"环境准备","link":"#环境准备","children":[{"level":3,"title":"Docker安装","slug":"docker安装","link":"#docker安装","children":[]},{"level":3,"title":"docker-compose安装","slug":"docker-compose安装","link":"#docker-compose安装","children":[]}]},{"level":2,"title":"单机版","slug":"单机版","link":"#单机版","children":[{"level":3,"title":"拉取镜像文件","slug":"拉取镜像文件","link":"#拉取镜像文件","children":[]},{"level":3,"title":"创建docker bridge网络","slug":"创建docker-bridge网络","link":"#创建docker-bridge网络","children":[]},{"level":3,"title":"编写docker-compose的yml文件","slug":"编写docker-compose的yml文件","link":"#编写docker-compose的yml文件","children":[]},{"level":3,"title":"启动IoTDB","slug":"启动iotdb","link":"#启动iotdb","children":[]},{"level":3,"title":"验证部署","slug":"验证部署","link":"#验证部署","children":[]},{"level":3,"title":"映射/conf目录(可选)","slug":"映射-conf目录-可选","link":"#映射-conf目录-可选","children":[]}]},{"level":2,"title":"集群版","slug":"集群版","link":"#集群版","children":[{"level":3,"title":"设置主机名","slug":"设置主机名","link":"#设置主机名","children":[]},{"level":3,"title":"拉取镜像文件","slug":"拉取镜像文件-1","link":"#拉取镜像文件-1","children":[]},{"level":3,"title":"编写docker-compose的yml文件","slug":"编写docker-compose的yml文件-1","link":"#编写docker-compose的yml文件-1","children":[]},{"level":3,"title":"首次启动confignode","slug":"首次启动confignode","link":"#首次启动confignode","children":[]},{"level":3,"title":"启动datanode","slug":"启动datanode","link":"#启动datanode","children":[]},{"level":3,"title":"验证部署","slug":"验证部署-1","link":"#验证部署-1","children":[]},{"level":3,"title":"映射/conf目录(可选)","slug":"映射-conf目录-可选-1","link":"#映射-conf目录-可选-1","children":[]}]}],"git":{"createdTime":1723190680000,"updatedTime":1724210480000,"contributors":[{"name":"majialin","email":"107627937+mal117@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":6.76,"words":2027},"filePathRelative":"zh/UserGuide/latest/Deployment-and-Maintenance/Docker-Deployment_apache.md","localizedDate":"2024年8月9日","autoDesc":true}');export{f as comp,_ as data};
