import{_ as s,r as l,o as d,c as i,b as t,d as e,a as r,w as o,e as n}from"./app-CQeJnOJS.js";const c={},g=t("h1",{id:"单机版部署",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#单机版部署"},[t("span",null,"单机版部署")])],-1),h=t("h2",{id:"注意事项",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#注意事项"},[t("span",null,"注意事项")])],-1),p=n(`<li><p>部署时推荐优先使用<code>hostname</code>进行IP配置，可避免后期修改主机ip导致数据库无法启动的问题。设置hostname需要在目标服务器上配置/etc/hosts，如本机ip是192.168.1.3，hostname是iotdb-1，则可以使用以下命令设置服务器的 hostname，并使用hostname配置IoTDB的<code>cn_internal_address</code>、dn_internal_address、dn_rpc_address。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;192.168.1.3  iotdb-1&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/hosts 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>部分参数首次启动后不能修改，请参考下方的【参数配置】章节进行设置。</p></li><li><p>无论是在 linux 还是 windows 中，请确保 IoTDB 的安装路径中不含空格和中文，避免软件运行异常。</p></li>`,3),y=n(`<h2 id="安装步骤" tabindex="-1"><a class="header-anchor" href="#安装步骤"><span>安装步骤</span></a></h2><h3 id="解压安装包并进入安装目录" tabindex="-1"><a class="header-anchor" href="#解压安装包并进入安装目录"><span>解压安装包并进入安装目录</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">unzip</span>  apache-iotdb-<span class="token punctuation">{</span>version<span class="token punctuation">}</span>-all-bin.zip
<span class="token builtin class-name">cd</span>  apache-iotdb-<span class="token punctuation">{</span>version<span class="token punctuation">}</span>-all-bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数配置" tabindex="-1"><a class="header-anchor" href="#参数配置"><span>参数配置</span></a></h3><h4 id="环境脚本配置" tabindex="-1"><a class="header-anchor" href="#环境脚本配置"><span>环境脚本配置</span></a></h4><ul><li>./conf/confignode-env.sh（./conf/confignode-env.bat）配置</li></ul><table><thead><tr><th><strong>配置项</strong></th><th style="text-align:center;"><strong>说明</strong></th><th style="text-align:center;"><strong>默认值</strong></th><th style="text-align:center;"><strong>推荐值</strong></th><th style="text-align:center;">备注</th></tr></thead><tbody><tr><td>MEMORY_SIZE</td><td style="text-align:center;">IoTDB ConfigNode节点可以使用的内存总量</td><td style="text-align:center;">空</td><td style="text-align:center;">可按需填写，填写后系统会根据填写的数值来分配内存</td><td style="text-align:center;">重启服务生效</td></tr></tbody></table><ul><li>./conf/datanode-env.sh（./conf/datanode-env.bat）配置</li></ul><table><thead><tr><th style="text-align:center;"><strong>配置项</strong></th><th style="text-align:center;"><strong>说明</strong></th><th style="text-align:center;"><strong>默认值</strong></th><th style="text-align:center;"><strong>推荐值</strong></th><th style="text-align:center;">备注</th></tr></thead><tbody><tr><td style="text-align:center;">MEMORY_SIZE</td><td style="text-align:center;">IoTDB DataNode节点可以使用的内存总量</td><td style="text-align:center;">空</td><td style="text-align:center;">可按需填写，填写后系统会根据填写的数值来分配内存</td><td style="text-align:center;">重启服务生效</td></tr></tbody></table><h4 id="系统通用配置" tabindex="-1"><a class="header-anchor" href="#系统通用配置"><span>系统通用配置</span></a></h4><p>打开通用配置文件（./conf/iotdb-system.properties 文件），设置以下参数：</p><table><thead><tr><th style="text-align:center;"><strong>配置项</strong></th><th style="text-align:center;"><strong>说明</strong></th><th style="text-align:center;"><strong>默认值</strong></th><th style="text-align:center;"><strong>推荐值</strong></th><th style="text-align:center;">备注</th></tr></thead><tbody><tr><td style="text-align:center;">cluster_name</td><td style="text-align:center;">集群名称</td><td style="text-align:center;">defaultCluster</td><td style="text-align:center;">可根据需要设置集群名称，如无特殊需要保持默认即可</td><td style="text-align:center;">首次启动后不可修改</td></tr><tr><td style="text-align:center;">schema_replication_factor</td><td style="text-align:center;">元数据副本数，单机版此处设置为 1</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td style="text-align:center;">默认1，首次启动后不可修改</td></tr><tr><td style="text-align:center;">data_replication_factor</td><td style="text-align:center;">数据副本数，单机版此处设置为 1</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td style="text-align:center;">默认1，首次启动后不可修改</td></tr></tbody></table><h4 id="confignode-配置" tabindex="-1"><a class="header-anchor" href="#confignode-配置"><span>ConfigNode 配置</span></a></h4><p>打开ConfigNode配置文件（./conf/iotdb-system.properties文件），设置以下参数：</p><table><thead><tr><th style="text-align:center;"><strong>配置项</strong></th><th style="text-align:center;"><strong>说明</strong></th><th style="text-align:center;"><strong>默认</strong></th><th style="text-align:center;">推荐值</th><th style="text-align:center;"><strong>备注</strong></th></tr></thead><tbody><tr><td style="text-align:center;">cn_internal_address</td><td style="text-align:center;">ConfigNode在集群内部通讯使用的地址</td><td style="text-align:center;">127.0.0.1</td><td style="text-align:center;">所在服务器的IPV4地址或hostname，推荐使用hostname</td><td style="text-align:center;">首次启动后不能修改</td></tr><tr><td style="text-align:center;">cn_internal_port</td><td style="text-align:center;">ConfigNode在集群内部通讯使用的端口</td><td style="text-align:center;">10710</td><td style="text-align:center;">10710</td><td style="text-align:center;">首次启动后不能修改</td></tr><tr><td style="text-align:center;">cn_consensus_port</td><td style="text-align:center;">ConfigNode副本组共识协议通信使用的端口</td><td style="text-align:center;">10720</td><td style="text-align:center;">10720</td><td style="text-align:center;">首次启动后不能修改</td></tr><tr><td style="text-align:center;">cn_seed_config_node</td><td style="text-align:center;">节点注册加入集群时连接的ConfigNode 的地址，cn_internal_address:cn_internal_port</td><td style="text-align:center;">127.0.0.1:10710</td><td style="text-align:center;">cn_internal_address:cn_internal_port</td><td style="text-align:center;">首次启动后不能修改</td></tr></tbody></table><h4 id="datanode-配置" tabindex="-1"><a class="header-anchor" href="#datanode-配置"><span>DataNode 配置</span></a></h4><p>打开DataNode配置文件 ./conf/iotdb-system.properties，设置以下参数：</p><table><thead><tr><th style="text-align:center;"><strong>配置项</strong></th><th style="text-align:center;"><strong>说明</strong></th><th style="text-align:center;"><strong>默认</strong></th><th style="text-align:center;">推荐值</th><th style="text-align:left;"><strong>备注</strong></th></tr></thead><tbody><tr><td style="text-align:center;">dn_rpc_address</td><td style="text-align:center;">客户端 RPC 服务的地址</td><td style="text-align:center;">0.0.0.0</td><td style="text-align:center;">所在服务器的IPV4地址或hostname，推荐使用hostname</td><td style="text-align:left;">重启服务生效</td></tr><tr><td style="text-align:center;">dn_rpc_port</td><td style="text-align:center;">客户端 RPC 服务的端口</td><td style="text-align:center;">6667</td><td style="text-align:center;">6667</td><td style="text-align:left;">重启服务生效</td></tr><tr><td style="text-align:center;">dn_internal_address</td><td style="text-align:center;">DataNode在集群内部通讯使用的地址</td><td style="text-align:center;">127.0.0.1</td><td style="text-align:center;">所在服务器的IPV4地址或hostname，推荐使用hostname</td><td style="text-align:left;">首次启动后不能修改</td></tr><tr><td style="text-align:center;">dn_internal_port</td><td style="text-align:center;">DataNode在集群内部通信使用的端口</td><td style="text-align:center;">10730</td><td style="text-align:center;">10730</td><td style="text-align:left;">首次启动后不能修改</td></tr><tr><td style="text-align:center;">dn_mpp_data_exchange_port</td><td style="text-align:center;">DataNode用于接收数据流使用的端口</td><td style="text-align:center;">10740</td><td style="text-align:center;">10740</td><td style="text-align:left;">首次启动后不能修改</td></tr><tr><td style="text-align:center;">dn_data_region_consensus_port</td><td style="text-align:center;">DataNode用于数据副本共识协议通信使用的端口</td><td style="text-align:center;">10750</td><td style="text-align:center;">10750</td><td style="text-align:left;">首次启动后不能修改</td></tr><tr><td style="text-align:center;">dn_schema_region_consensus_port</td><td style="text-align:center;">DataNode用于元数据副本共识协议通信使用的端口</td><td style="text-align:center;">10760</td><td style="text-align:center;">10760</td><td style="text-align:left;">首次启动后不能修改</td></tr><tr><td style="text-align:center;">dn_seed_config_node</td><td style="text-align:center;">节点注册加入集群时连接的ConfigNode地址,即cn_internal_address:cn_internal_port</td><td style="text-align:center;">127.0.0.1:10710</td><td style="text-align:center;">cn_internal_address:cn_internal_port</td><td style="text-align:left;">首次启动后不能修改</td></tr></tbody></table><h3 id="启动confignode-节点" tabindex="-1"><a class="header-anchor" href="#启动confignode-节点"><span>启动ConfigNode 节点</span></a></h3><p>进入iotdb的sbin目录下，启动confignode</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>./start-confignode.sh    <span class="token parameter variable">-d</span>      <span class="token comment">#“-d”参数将在后台进行启动 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="启动datanode-节点" tabindex="-1"><a class="header-anchor" href="#启动datanode-节点"><span>启动DataNode 节点</span></a></h3><p>进入iotdb的sbin目录下，启动datanode：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> sbin
./start-datanode.sh   <span class="token parameter variable">-d</span>   <span class="token comment">#-d参数将在后台进行启动 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="验证部署" tabindex="-1"><a class="header-anchor" href="#验证部署"><span>验证部署</span></a></h3><p>可直接执行 ./sbin 目录下的 Cli 启动脚本：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>./start-cli.sh  <span class="token parameter variable">-h</span>  ip<span class="token punctuation">(</span>本机ip或域名<span class="token punctuation">)</span>  <span class="token parameter variable">-p</span>  端口号<span class="token punctuation">(</span><span class="token number">6667</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>成功启动后，出现如下界面显示IoTDB安装成功。</p><figure><img src="https://alioss.timecho.com/docs/img/开源版启动成功.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>出现安装成功界面后，使用<code>show cluster</code>命令查看服务运行状态</p><p>当看到status都是running表示服务启动成功</p><figure><img src="https://alioss.timecho.com/docs/img/开源-单机show.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>出现<code>ACTIVATED(W)</code>为被动激活，表示此ConfigNode没有license文件（或没有签发时间戳最新的license文件）。此时建议检查license文件是否已放入license文件夹，没有请放入license文件，若已存在license文件，可能是此节点license文件与其他节点信息不一致导致，请联系天谋工作人员重新申请.</p></blockquote>`,33);function m(x,u){const a=l("RouteLink");return d(),i("div",null,[g,h,t("ol",null,[t("li",null,[t("p",null,[e("安装前请确认系统已参照"),r(a,{to:"/zh/UserGuide/latest/Deployment-and-Maintenance/Environment-Requirements.html"},{default:o(()=>[e("系统配置")]),_:1}),e("准备完成。")])]),p]),y])}const _=s(c,[["render",m],["__file","Stand-Alone-Deployment_apache.html.vue"]]),f=JSON.parse('{"path":"/zh/UserGuide/latest/Deployment-and-Maintenance/Stand-Alone-Deployment_apache.html","title":"单机版部署","lang":"zh-CN","frontmatter":{"description":"单机版部署 注意事项 安装前请确认系统已参照准备完成。 部署时推荐优先使用hostname进行IP配置，可避免后期修改主机ip导致数据库无法启动的问题。设置hostname需要在目标服务器上配置/etc/hosts，如本机ip是192.168.1.3，hostname是iotdb-1，则可以使用以下命令设置服务器的 hostname，并使用hostna...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/latest/Deployment-and-Maintenance/Stand-Alone-Deployment_apache.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/latest/Deployment-and-Maintenance/Stand-Alone-Deployment_apache.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"单机版部署"}],["meta",{"property":"og:description","content":"单机版部署 注意事项 安装前请确认系统已参照准备完成。 部署时推荐优先使用hostname进行IP配置，可避免后期修改主机ip导致数据库无法启动的问题。设置hostname需要在目标服务器上配置/etc/hosts，如本机ip是192.168.1.3，hostname是iotdb-1，则可以使用以下命令设置服务器的 hostname，并使用hostna..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alioss.timecho.com/docs/img/%E5%BC%80%E6%BA%90%E7%89%88%E5%90%AF%E5%8A%A8%E6%88%90%E5%8A%9F.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-08-22T10:57:49.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-22T10:57:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"单机版部署\\",\\"image\\":[\\"https://alioss.timecho.com/docs/img/%E5%BC%80%E6%BA%90%E7%89%88%E5%90%AF%E5%8A%A8%E6%88%90%E5%8A%9F.png\\",\\"https://alioss.timecho.com/docs/img/%E5%BC%80%E6%BA%90-%E5%8D%95%E6%9C%BAshow.jpeg\\"],\\"dateModified\\":\\"2024-08-22T10:57:49.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"注意事项","slug":"注意事项","link":"#注意事项","children":[]},{"level":2,"title":"安装步骤","slug":"安装步骤","link":"#安装步骤","children":[{"level":3,"title":"解压安装包并进入安装目录","slug":"解压安装包并进入安装目录","link":"#解压安装包并进入安装目录","children":[]},{"level":3,"title":"参数配置","slug":"参数配置","link":"#参数配置","children":[]},{"level":3,"title":"启动ConfigNode 节点","slug":"启动confignode-节点","link":"#启动confignode-节点","children":[]},{"level":3,"title":"启动DataNode 节点","slug":"启动datanode-节点","link":"#启动datanode-节点","children":[]},{"level":3,"title":"验证部署","slug":"验证部署","link":"#验证部署","children":[]}]}],"git":{"createdTime":1718979523000,"updatedTime":1724324269000,"contributors":[{"name":"石林松","email":"50943998+shi10lin0s@users.noreply.github.com","commits":2},{"name":"majialin","email":"107627937+mal117@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":4.39,"words":1317},"filePathRelative":"zh/UserGuide/latest/Deployment-and-Maintenance/Stand-Alone-Deployment_apache.md","localizedDate":"2024年6月21日","autoDesc":true}');export{_ as comp,f as data};
