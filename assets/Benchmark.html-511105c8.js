import{_ as i,r as o,o as n,c as h,a as s,d as t,e as d,b as r,f as a}from"./app-316684ed.js";const l={},c=a('<h1 id="测试工具" tabindex="-1"><a class="header-anchor" href="#测试工具" aria-hidden="true">#</a> 测试工具</h1><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p>IoT-benchmark 是基于 Java 和大数据环境开发的时序数据库基准测试工具，由清华大学软件学院研发并开源。它使用方便，支持多种写入以及查询方式，支持存储测试信息和结果以供进一步查询或分析，支持与 Tableau 集成以可视化测试结果。</p><p>下图1-1囊括了测试基准流程及其他扩展功能。这些流程可以由IoT-benchmark 统一来完成。IoT Benchmark 支持多种工作负载，包括<strong>纯写入、纯查询、写入查询混合</strong>等，支持<strong>软硬件系统监控、测试指标度量</strong>等监控功能，还实现了<strong>初始化数据库自动化、测试数据分析及系统参数优化</strong>等功能。</p><figure><img src="https://alioss.timecho.com/docs/img/1.PNG" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>图1-1</p><p>借鉴 YCSB 测试工具将工作负载生成、性能指标测量和数据库接口三个组件分离的设计思想，IoT-benchmark 的模块化设计如图1-2所示。与基于 YCSB 的测试工具系统不同的是，IoT-benchmark 增加了系统监控模块，支持测试数据和系统指标监控数据的持久化。此外也增加了一些特别针对时序数据场景的特殊负载测试功能，如支持物联网场景的批量写入和多种乱序数据写入模式。</p><figure><img src="https://alioss.timecho.com/docs/img/2.PNG" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>图1-2</p><p>目前 IoT-benchmark 支持如下时间序列数据库、版本和连接方式：</p><table><thead><tr><th>数据库</th><th>DB-Engines排名</th><th>版本</th><th>连接方式</th></tr></thead><tbody><tr><td>InfluxDB</td><td>1</td><td>v1.x</td><td>SDK</td></tr><tr><td>v2.0</td><td></td><td></td><td></td></tr><tr><td>TimescaleDB</td><td>5</td><td>--</td><td>jdbc</td></tr><tr><td>OpenTSDB</td><td>8</td><td>--</td><td>Http Request</td></tr><tr><td>QuestDB</td><td>10</td><td>v6.0.7</td><td>jdbc</td></tr><tr><td>TDengine</td><td>13</td><td>2.2.0.2</td><td>jdbc</td></tr><tr><td>VictoriaMetrics</td><td>16</td><td>v1.64.0</td><td>Http Request</td></tr><tr><td>KairosDB</td><td>17</td><td>--</td><td>Http Request</td></tr><tr><td>IoTDB</td><td>19</td><td>v1.0</td><td>jdbc、sessionByTablet、sessionByRecord、sessionByRecords</td></tr><tr><td>v0.13</td><td></td><td></td><td></td></tr></tbody></table><p>表1-1大数据测试基准对比</p><h3 id="软件安装与环境搭建" tabindex="-1"><a class="header-anchor" href="#软件安装与环境搭建" aria-hidden="true">#</a> 软件安装与环境搭建</h3><h4 id="iot-benchmark-运行的前置条件" tabindex="-1"><a class="header-anchor" href="#iot-benchmark-运行的前置条件" aria-hidden="true">#</a> IoT Benchmark 运行的前置条件</h4><ol><li>Java 8</li><li>Maven 3.6+</li><li>对应的合适版本的数据库，如 Apache IoTDB 1.0</li></ol><h4 id="iot-benchmark-的获取方式" tabindex="-1"><a class="header-anchor" href="#iot-benchmark-的获取方式" aria-hidden="true">#</a> IoT Benchmark 的获取方式</h4>',16),T=t("strong",null,"获取二进制包",-1),_={href:"https://github.com/thulab/iot-benchmark/releases",target:"_blank",rel:"noopener noreferrer"},p={href:"https://github.com/apache/iotdb/tree/rel/1.0",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/thulab/iot-benchmark",target:"_blank",rel:"noopener noreferrer"},b=t("h4",{id:"iot-benchmark-的测试包结构",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#iot-benchmark-的测试包结构","aria-hidden":"true"},"#"),d(" IoT Benchmark 的测试包结构")],-1),g={href:"http://xn--benchmark-fp6nz30bboet81fz5rm31ey49a.sh",target:"_blank",rel:"noopener noreferrer"},E=t("figure",null,[t("img",{src:"https://alioss.timecho.com/docs/img/3.png",alt:"img",tabindex:"0",loading:"lazy"}),t("figcaption",null,"img")],-1),u=t("p",null,"图1-3文件和文件夹列表",-1),I=t("thead",null,[t("tr",null,[t("th",null,"名称"),t("th",null,"子文件"),t("th",null,"用途")])],-1),O=t("tr",null,[t("td",null,"benchmark.bat"),t("td",null,"-"),t("td",null,"Windows环境运行启动脚本")],-1),R={href:"http://benchmark.sh",target:"_blank",rel:"noopener noreferrer"},S=t("td",null,"-",-1),f=t("td",null,"Linux/Mac环境运行启动脚本",-1),A=t("tr",null,[t("td",null,"conf"),t("td",null,"config.properties"),t("td",null,"测试场景配置文件")],-1),N=t("tr",null,[t("td",null,"logback.xml"),t("td",null,"日志输出配置文件"),t("td")],-1),B=t("tr",null,[t("td",null,"lib"),t("td",null,"-"),t("td",null,"依赖库文件")],-1),D=t("tr",null,[t("td",null,"LICENSE"),t("td",null,"-"),t("td",null,"许可文件")],-1),P=t("td",null,"bin",-1),k={href:"http://startup.sh",target:"_blank",rel:"noopener noreferrer"},L=t("td",null,"初始化脚本文件夹",-1),y={href:"http://ser-benchmark.sh",target:"_blank",rel:"noopener noreferrer"},Q=t("td",null,"-",-1),M=t("td",null,"监控模式启动脚本",-1),x=a('<p>表1-2文件和文件夹列表用途</p><h4 id="iot-benchmark-执行测试" tabindex="-1"><a class="header-anchor" href="#iot-benchmark-执行测试" aria-hidden="true">#</a> IoT Benchmark 执行测试</h4><ol><li>按照测试需求修改配置文件，主要参数介绍见 1.2 节，对应配置文件为conf/config.properties，<strong>比如测试****Apache</strong> <strong>IoTDB 1.0，则需要修改 DB_SWITCH=IoTDB-100-SESSION_BY_TABLET</strong></li><li>启动被测时间序列数据库</li><li>通过运行</li><li>启动IoT-benchmark执行测试。执行中观测被测时间序列数据库和IoT-benchmark状态，执行完毕后查看结果和分析测试过程。</li></ol><h4 id="iot-benchmark-结果说明" tabindex="-1"><a class="header-anchor" href="#iot-benchmark-结果说明" aria-hidden="true">#</a> IoT Benchmark 结果说明</h4><p>测试的所有日志文件被存放于 logs 文件夹下，测试的结果在测试完成后被存放到 data/csvOutput 文件夹下，例如测试后我们得到了如下的结果矩阵：</p><figure><img src="https://alioss.timecho.com/docs/img/4.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ul><li>Result Matrix <ul><li>OkOperation：成功的对应操作次数</li><li>OkPoint：对于写入操作，是成功写入的点数；对于查询操作，是成功查询到的点数。</li><li>FailOperation：失败的对应操作次数</li><li>FailPoint：对于写入操作是写入失败的点数</li></ul></li><li>Latency(mx) Matrix <ul><li>AVG：操作平均耗时</li><li>MIN：操作最小耗时</li><li>Pn：操作整体分布的对应分位值，比如P25是下四分位数</li></ul></li></ul><h3 id="主要参数介绍" tabindex="-1"><a class="header-anchor" href="#主要参数介绍" aria-hidden="true">#</a> 主要参数介绍</h3><p>本节重点解释说明了主要参数的用途和配置方法。</p><h4 id="工作模式和操作比例" tabindex="-1"><a class="header-anchor" href="#工作模式和操作比例" aria-hidden="true">#</a> 工作模式和操作比例</h4><ul><li><p>工作模式参数“BENCHMARK_WORK_MODE”可选项为“默认模式”和“服务器监控”；其中“服务器监控”模式可直接通过执行ser-benchmark.sh脚本启动，脚本会自动修改该参数。“默认模式”为常用测试模式，结合配置OPERATION_PROPORTION参数达到“纯写入”、“纯查询”和“读写混合”的测试操作比例定义</p></li><li><p>当运行ServerMode来执行被测时序数据库运行环境监控时IoT-benchmark依赖sysstat软件相关命令；如果需要持久化测试过程数据时选择MySQL或IoTDB，则需要安装该类数据库；ServerMode和CSV的记录模式只能在Linux系统中使用，记录测试过程中的相关系统信息。因此我们建议使用MacOs或Linux系统，本文以Linux（Centos7）系统为例，如果使用Windows系统，可以使用conf文件夹下的benchmark.bat脚本启动IoT-benchmark。</p></li></ul><p>表1-3测试模式</p><table><thead><tr><th>模式名称</th><th>BENCHMARK_WORK_MODE</th><th>模式内容</th></tr></thead><tbody><tr><td>常规测试模式</td><td>testWithDefaultPath</td><td>支持多种读和写操作的混合负载</td></tr><tr><td>服务器资源使用监控模式</td><td>serverMODE</td><td>服务器资源使用监控模式（该模式下运行通过ser-benchmark.sh脚本启动，无需手动配置该参数</td></tr></tbody></table><h4 id="服务器连接信息" tabindex="-1"><a class="header-anchor" href="#服务器连接信息" aria-hidden="true">#</a> 服务器连接信息</h4><p>工作模式指定后，被测时序数据库的信息要如何告知IoT-benchmark呢？当前通过“DB_SWITCH”告知被测时序数据库类型；通过“HOST”告知被测时序数据库网络地址；通过“PORT”告知被测时序数据库网络端口；通过“USERNAME”告知被测时序数据库登录用户名；通过“PASSWORD”告知被测时序数据库登录用户的密码；通过“DB_NAME”告知被测时序数据库名称；通过“TOKEN”告知被测时序数据库连接认证Token（InfluxDB 2.0使用）；</p><h4 id="写入场景构建参数" tabindex="-1"><a class="header-anchor" href="#写入场景构建参数" aria-hidden="true">#</a> 写入场景构建参数</h4><p>表1-4写入场景构建参数</p><table><thead><tr><th>参数名称</th><th>类型</th><th>示例</th><th>系统描述</th></tr></thead><tbody><tr><td>CLIENT_NUMBER</td><td>整数</td><td>100</td><td>客户端总数</td></tr><tr><td>GROUP_NUMBER</td><td>整数</td><td>20</td><td>存储组的数量；仅针对IoTDB。</td></tr><tr><td>DEVICE_NUMBER</td><td>整数</td><td>100</td><td>设备总数</td></tr><tr><td>SENSOR_NUMBER</td><td>整数</td><td>300</td><td>每个设备的传感器总数</td></tr><tr><td>INSERT_DATATYPE_PROPORTION</td><td>字符串</td><td>1:1:1:1:1:1</td><td>设备的数据类型比例，BOOLEAN:INT32:INT64:FLOAT:DOUBLE:TEXT</td></tr><tr><td>POINT_STEP</td><td>整数</td><td>1000</td><td>数据间时间戳间隔，即生成的数据两个时间戳之间的固定长度。</td></tr><tr><td>OP_MIN_INTERVAL</td><td>整数</td><td>0</td><td>操作最小执行间隔：若操作耗时大于该值则立即执行下一个，否则等待 (OP_MIN_INTERVAL-实际执行时间) ms；如果为0，则参数不生效；如果为-1，则其值和POINT_STEP一致</td></tr><tr><td>IS_OUT_OF_ORDER</td><td>布尔</td><td>false</td><td>是否乱序写入</td></tr><tr><td>OUT_OF_ORDER_RATIO</td><td>浮点数</td><td>0.3</td><td>乱序写入的数据比例</td></tr><tr><td>BATCH_SIZE_PER_WRITE</td><td>整数</td><td>1</td><td>批写入数据行数（一次写入多少行数据）</td></tr><tr><td>START_TIME</td><td>时间</td><td>2022-10-30T00:00:00+08:00</td><td>写入数据的开始时间戳；以该时间戳为起点开始模拟创建数据时间戳。</td></tr><tr><td>LOOP</td><td>整数</td><td>86400</td><td>总操作次数：具体每种类型操作会按OPERATION_PROPORTION定义的比例划分</td></tr><tr><td>OPERATION_PROPORTION</td><td>字符</td><td>1:0:0:0:0:0:0:0:0:0:0</td><td># 各操作的比例,按照顺序为 写入:Q1:Q2:Q3:Q4:Q5:Q6:Q7:Q8:Q9:Q10, 请注意使用英文冒号。比例中的每一项是整数。</td></tr></tbody></table><p>按照表1-4配置参数启动可描述测试场景为：向被测时序数据库压力写入30000个（100个设备，每个设备300个传感器）时间序列2022年10月30日一天的顺序数据，总计25.92亿个数据点。其中每个设备的300个传感器数据类型分别为50个布尔、50个整数、50个长整数、50个浮点、50个双精度、50个字符。如果我们将表格中IS_OUT_OF_ORDER的值改为true，那么他表示的场景为：向被测时序数据库压力写入30000个时间序列2022年10月30日一天的数据，其中存在30%的乱序数据（到达时序数据库时间晚于其他生成时间晚于自身的数据点）。</p><h4 id="查询场景构建参数" tabindex="-1"><a class="header-anchor" href="#查询场景构建参数" aria-hidden="true">#</a> 查询场景构建参数</h4><p>表1-5查询场景构建参数</p><table><thead><tr><th>参数名称</th><th>类型</th><th>示例</th><th>系统描述</th></tr></thead><tbody><tr><td>QUERY_DEVICE_NUM</td><td>整数</td><td>2</td><td>每条查询语句中查询涉及到的设备数量</td></tr><tr><td>QUERY_SENSOR_NUM</td><td>整数</td><td>2</td><td>每条查询语句中查询涉及到的传感器数量</td></tr><tr><td>QUERY_AGGREGATE_FUN</td><td>字符</td><td>count</td><td>在聚集查询中使用的聚集函数，比如count、avg、sum、max_time等</td></tr><tr><td>STEP_SIZE</td><td>整数</td><td>1</td><td>时间过滤条件的时间起点变化步长，若设为0则每个查询的时间过滤条件是一样的，单位：POINT_STEP</td></tr><tr><td>QUERY_INTERVAL</td><td>整数</td><td>250000</td><td>起止时间的查询中开始时间与结束时间之间的时间间隔，和Group By中的时间间隔</td></tr><tr><td>QUERY_LOWER_VALUE</td><td>整数</td><td>-5</td><td>条件查询子句时的参数，where xxx &gt; QUERY_LOWER_VALUE</td></tr><tr><td>GROUP_BY_TIME_UNIT</td><td>整数</td><td>20000</td><td>Group by语句中的组的大小</td></tr><tr><td>LOOP</td><td>整数</td><td>10</td><td>总操作次数：具体每种类型操作会按OPERATION_PROPORTION定义的比例划分</td></tr><tr><td>OPERATION_PROPORTION</td><td>字符</td><td>0:0:0:0:0:0:0:0:0:0:1</td><td>写入:Q1:Q2:Q3:Q4:Q5:Q6:Q7:Q8:Q9:Q10</td></tr></tbody></table><p>表1-6查询类型及示例 SQL</p><table><thead><tr><th>编号</th><th>查询类型</th><th>IoTDB 示例 SQL</th></tr></thead><tbody><tr><td>Q1</td><td>精确点查询</td><td>select v1 from root.db.d1 where time = ?</td></tr><tr><td>Q2</td><td>时间范围查询</td><td>select v1 from root.db.d1 where time &gt; ? and time &lt; ?</td></tr><tr><td>Q3</td><td>带值过滤的时间范围查询</td><td>select v1 from root.db.d1 where time &gt; ? and time &lt; ? and v1 &gt; ?</td></tr><tr><td>Q4</td><td>时间范围聚合查询</td><td>select count(v1) from root.db.d1 where and time &gt; ? and time &lt; ?</td></tr><tr><td>Q5</td><td>带值过滤的全时间范围聚合查询</td><td>select count(v1) from root.db.d1 where v1 &gt; ?</td></tr><tr><td>Q6</td><td>带值过滤的时间范围聚合查询</td><td>select count(v1) from root.db.d1 where v1 &gt; ? and time &gt; ? and time &lt; ?</td></tr><tr><td>Q7</td><td>时间分组聚合查询</td><td>select count(v1) from root.db.d1 group by ([?, ?), ?, ?)</td></tr><tr><td>Q8</td><td>最新点查询</td><td>select last v1 from root.db.d1</td></tr><tr><td>Q9</td><td>倒序范围查询</td><td>select v1 from root.sg.d1 where time &gt; ? and time &lt; ? order by time desc</td></tr><tr><td>Q10</td><td>倒序带值过滤的范围查询</td><td>select v1 from root.sg.d1 where time &gt; ? and time &lt; ? and v1 &gt; ? order by time desc</td></tr></tbody></table><p>按照表1-5配置参数启动可描述测试场景为：从被测时序数据库执行10次2个设备2个传感器的倒序带值过滤的范围查询，SQL语句为：select s_0,s_31from data where time &gt;2022-10-30T00:00:00+08:00 and time &lt; 2022-10-30T00:04:10+08:00 and s_0 &gt; -5 and device in d_21,d_46 order by time desc。</p><h4 id="测试过程和测试结果持久化" tabindex="-1"><a class="header-anchor" href="#测试过程和测试结果持久化" aria-hidden="true">#</a> 测试过程和测试结果持久化</h4><p>IoT-benchmark目前支持通过配置参数“TEST_DATA_PERSISTENCE”将测试过程和测试结果持久化到IoTDB、MySQL和CSV；其中写入到MySQL和CSV可以定义分库分表的行数上限，例如“RECORD_SPLIT=true、RECORD_SPLIT_MAX_LINE=10000000”表示每个数据库表或CSV文件按照总行数为1千万切分存放；如果记录到MySQL或IoTDB需要提供数据库链接信息，分别包括“TEST_DATA_STORE_IP”数据库的IP地址、“TEST_DATA_STORE_PORT”数据库的端口号、“TEST_DATA_STORE_DB”数据库的名称、“TEST_DATA_STORE_USER”数据库用户名、“TEST_DATA_STORE_PW”数据库用户密码。</p><p>如果我们设置“TEST_DATA_PERSISTENCE=CSV”，测试执行时和执行完毕后我们可以在IoT-benchmark根目录下看到新生成的data文件夹，其下包含csv文件夹记录测试过程；csvOutput文件夹记录测试结果。如果我们设置“TEST_DATA_PERSISTENCE=MySQL”，它会在测试开始前在指定的MySQL数据库中创建命名如“testWithDefaultPath_被测数据库名称_备注_测试启动时间”的数据表记录测试过程；会在名为“CONFIG”的数据表（如果不存在则创建该表），写入本次测试的配置信息；当测试完成时会在名为“FINAL_RESULT”的数据表（如果不存在则创建该表）中写入本次测试结果。</p><h2 id="实际案例" tabindex="-1"><a class="header-anchor" href="#实际案例" aria-hidden="true">#</a> 实际案例</h2><p>我们以中车青岛四方车辆研究所有限公司应用为例，参考《ＡｐａｃｈｅＩｏＴＤＢ在智能运维平台存储中的应用》中描述的场景进行实际操作说明。</p><p>测试目标：模拟中车青岛四方所场景因切换时间序列数据库实际需求，对比预期使用的IoTDB和原有系统使用的KairosDB性能。</p><p>测试环境：为了保证在实验过程中消除其他无关服务与进程对数据库性能的影响，以及不同数据库之间的相互影响，本实验中的本地数据库均部署并运行在资源配置相同的多个独立的虚拟机上。因此，本实验搭建了 4 台 Linux( CentOS7 /x86) 虚拟机，并分别在上面部署了IoT-benchmark、 IoTDB数据库、KairosDB数据库、MySQL数据库。每一台虚拟机的具体资源配置如表2-1所示。每一台虚拟机的具体用途如表2-2所示。</p><p>表2-1虚拟机配置信息</p><table><thead><tr><th>硬件配置信息</th><th>系统描述</th></tr></thead><tbody><tr><td>OS System</td><td>CentOS7</td></tr><tr><td>CPU核数</td><td>16</td></tr><tr><td>内存</td><td>32G</td></tr><tr><td>硬盘</td><td>200G</td></tr><tr><td>网卡</td><td>千兆</td></tr></tbody></table><p>表2-2虚拟机用途</p><table><thead><tr><th>IP</th><th>用途</th></tr></thead><tbody><tr><td>172.21.4.2</td><td>IoT-benchmark</td></tr><tr><td>172.21.4.3</td><td>Apache-iotdb</td></tr><tr><td>172.21.4.4</td><td>KaiosDB</td></tr><tr><td>172.21.4.5</td><td>MySQL</td></tr></tbody></table><h3 id="写入测试" tabindex="-1"><a class="header-anchor" href="#写入测试" aria-hidden="true">#</a> 写入测试</h3><p>场景描述：创建100个客户端来模拟100列车、每列车3000个传感器、数据类型为DOUBLE类型、数据时间间隔为500ms（2Hz）、顺序发送。参考以上需求我们需要修改IoT-benchmark配置参数如表2-3中所列。</p><p>表2-3配置参数信息</p><table><thead><tr><th>参数名称</th><th>IoTDB值</th><th>KairosDB值</th></tr></thead><tbody><tr><td>DB_SWITCH</td><td>IoTDB-013-SESSION_BY_TABLET</td><td>KairosDB</td></tr><tr><td>HOST</td><td>172.21.4.3</td><td>172.21.4.4</td></tr><tr><td>PORT</td><td>6667</td><td>8080</td></tr><tr><td>BENCHMARK_WORK_MODE</td><td>testWithDefaultPath</td><td></td></tr><tr><td>OPERATION_PROPORTION</td><td>1:0:0:0:0:0:0:0:0:0:0</td><td></td></tr><tr><td>CLIENT_NUMBER</td><td>100</td><td></td></tr><tr><td>GROUP_NUMBER</td><td>10</td><td></td></tr><tr><td>DEVICE_NUMBER</td><td>100</td><td></td></tr><tr><td>SENSOR_NUMBER</td><td>3000</td><td></td></tr><tr><td>INSERT_DATATYPE_PROPORTION</td><td>0:0:0:0:1:0</td><td></td></tr><tr><td>POINT_STEP</td><td>500</td><td></td></tr><tr><td>OP_MIN_INTERVAL</td><td>0</td><td></td></tr><tr><td>IS_OUT_OF_ORDER</td><td>false</td><td></td></tr><tr><td>BATCH_SIZE_PER_WRITE</td><td>1</td><td></td></tr><tr><td>LOOP</td><td>10000</td><td></td></tr><tr><td>TEST_DATA_PERSISTENCE</td><td>MySQL</td><td></td></tr><tr><td>TEST_DATA_STORE_IP</td><td>172.21.4.5</td><td></td></tr><tr><td>TEST_DATA_STORE_PORT</td><td>3306</td><td></td></tr><tr><td>TEST_DATA_STORE_DB</td><td>demo</td><td></td></tr><tr><td>TEST_DATA_STORE_USER</td><td>root</td><td></td></tr><tr><td>TEST_DATA_STORE_PW</td><td>admin</td><td></td></tr><tr><td>REMARK</td><td>demo</td><td></td></tr></tbody></table><p>首先在172.21.4.3和172.21.4.4上分别启动被测时间序列数据库Apache-IoTDB和KairosDB，之后在172.21.4.2、172.21.4.3和172.21.4.4上通过ser-benchamrk.sh脚本启动服务器资源监控（图2-1）。然后按照表2-3在172.21.4.2分别修改iotdb-0.13-0.0.1和kairosdb-0.0.1文件夹内的conf/config.properties文件满足测试需求。先后使用benchmark.sh启动对Apache-IoTDB和KairosDB的写入测试。</p><figure><img src="https://alioss.timecho.com/docs/img/5.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>图2-1服务器监控任务</p><p>​ 例如我们首先启动对KairosDB的测试，IoT-benchmark会在MySQL数据库中创建CONFIG数据表存放本次测试配置信息（图2-2），测试执行中会有日志输出当前测试进度（图2-3）。测试完成时会输出本次测试结果（图2-3），同时将结果写入FINAL_RESULT数据表中（图2-4）。</p><figure><img src="https://alioss.timecho.com/docs/img/6.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>图2-2测试配置信息表</p><p><img src="https://alioss.timecho.com/docs/img/7.png" alt="img" loading="lazy"><br><img src="https://alioss.timecho.com/docs/img/8.png" alt="img" loading="lazy"><br><img src="https://alioss.timecho.com/docs/img/9.png" alt="img" loading="lazy"><br><img src="https://alioss.timecho.com/docs/img/10.png" alt="img" loading="lazy"></p><p>图2-3测试进度和结果</p><figure><img src="https://alioss.timecho.com/docs/img/11.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>图2-4测试结果表</p><p>之后我们再启动对Apache-IoTDB的测试，同样的IoT-benchmark会在MySQL数据库CONFIG数据表中写入本次测试配置信息，测试执行中会有日志输出当前测试进度。测试完成时会输出本次测试结果，同时将结果写入FINAL_RESULT数据表中。</p><p>依照测试结果信息我们知道同样的配置写入Apache-IoTDB和KairosDB写入延时时间分别为：55.98ms和1324.45ms；写入吞吐分别为：5,125,600.86点/秒和224,819.01点/秒；测试分别执行了585.30秒和11777.99秒。并且KairosDB有写入失败出现，排查后发现是数据磁盘使用率已达到100%，无磁盘空间继续接收数据。而Apache-IoTDB无写入失败现象，全部数据写入完毕后占用磁盘空间仅为4.7G（如图2-5所示）；从写入吞吐和磁盘占用情况上看Apache-IoTDB均优于KairosDB。当然后续还有其他测试来从多方面观察和对比，比如查询性能、文件压缩比、数据安全性等。</p><figure><img src="https://alioss.timecho.com/docs/img/12.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>图2-5磁盘使用情况</p><p>那么测试过程中各个服务器资源使用情况如何呢？每个写操作具体的表现如何呢？这个时候我们就可以通过安装和使用Tableau来可视化服务器监控表和测试过程记录表内的数据了。Tableau的使用本文不展开介绍，通过它连接测试数据持久化的数据表后具体结果下如图（以Apache-IoTDB为例）：</p><p><img src="https://alioss.timecho.com/docs/img/13.png" alt="img" loading="lazy"><br><img src="https://alioss.timecho.com/docs/img/14.png" alt="img" loading="lazy"></p><p>图2-6Tableau可视化测试过程</p><h3 id="查询测试" tabindex="-1"><a class="header-anchor" href="#查询测试" aria-hidden="true">#</a> 查询测试</h3><p>场景描述：在写入测试场景下模拟10个客户端对时序数据库Apache-IoTDB内存放的数据进行全类型查询任务。配置如下：</p><p>表2-4配置参数信息</p><table><thead><tr><th>参数名称</th><th>示例</th></tr></thead><tbody><tr><td>CLIENT_NUMBER</td><td>100</td></tr><tr><td>QUERY_DEVICE_NUM</td><td>2</td></tr><tr><td>QUERY_SENSOR_NUM</td><td>2</td></tr><tr><td>QUERY_AGGREGATE_FUN</td><td>count</td></tr><tr><td>STEP_SIZE</td><td>1</td></tr><tr><td>QUERY_INTERVAL</td><td>250000</td></tr><tr><td>QUERY_LOWER_VALUE</td><td>-5</td></tr><tr><td>GROUP_BY_TIME_UNIT</td><td>20000</td></tr><tr><td>LOOP</td><td>30</td></tr><tr><td>OPERATION_PROPORTION</td><td>0:1:1:1:1:1:1:1:1:1:1</td></tr></tbody></table><p>执行结果：</p><figure><img src="https://alioss.timecho.com/docs/img/15.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>图2-7查询测试结果</p><h3 id="其他参数说明" tabindex="-1"><a class="header-anchor" href="#其他参数说明" aria-hidden="true">#</a> 其他参数说明</h3><p>之前章节中针对Apache-IoTDB和KairosDB进行写入性能对比，但是用户如果要执行模拟真实写入速率测试该如何配置？测试时间过长该如何控制呢？生成的模拟数据有哪些规律吗？如果IoT-Benchmark服务器配置较低，可以使用多台机器模拟压力输出吗？</p><p>表2-5配置参数信息</p><table><thead><tr><th>场景</th><th>参数</th><th>值</th><th>说明</th></tr></thead><tbody><tr><td>模拟真实写入速率</td><td>OP_INTERVAL</td><td>-1</td><td>也可输入整数控制操作间隔</td></tr><tr><td>指定测试时长（1小时）</td><td>TEST_MAX_TIME</td><td>3600000</td><td>单位 ms；需要LOOP执行时间大于该值</td></tr><tr><td>定义模拟数据规律：支持全部数据类型，数量平均分类；支持五种数据分布，数量平均分布；字符串长度为10；小数位数为2</td><td>INSERT_DATATYPE_PROPORTION</td><td>1:1:1:1:1:1</td><td>数据类型分布比率</td></tr><tr><td>LINE_RATIO</td><td>1</td><td>线性</td><td></td></tr><tr><td>SIN_RATIO</td><td>1</td><td>傅里叶函数</td><td></td></tr><tr><td>SQUARE_RATIO</td><td>1</td><td>方波</td><td></td></tr><tr><td>RANDOM_RATIO</td><td>1</td><td>随机数</td><td></td></tr><tr><td>CONSTANT_RATIO</td><td>1</td><td>常数</td><td></td></tr><tr><td>STRING_LENGTH</td><td>10</td><td>字符串长度</td><td></td></tr><tr><td>DOUBLE_LENGTH</td><td>2</td><td>小数位数</td><td></td></tr><tr><td>三台机器模拟300台设备数据写入</td><td>BENCHMARK_CLUSTER</td><td>true</td><td>开启多benchmark模式</td></tr><tr><td>BENCHMARK_INDEX</td><td>0、1、3</td><td>以2.3章节写入参数为例：0号负责设备编号0<sub>99数据写入；1号负责设备编号100</sub>199数据写入；2号负责设备点好200~299数据写入；</td><td></td></tr></tbody></table>',68);function U(C,v){const e=o("ExternalLinkIcon");return n(),h("div",null,[s(`

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

`),c,t("ul",null,[t("li",null,[T,d("：进入"),t("a",_,[d("https://github.com/thulab/iot-benchmark/releases"),r(e)]),d(" 下载需要的安装包。下载下来为一个压缩文件，选择文件夹解压即可使用。")]),t("li",null,[d("源代码编译（可用户 Apache IoTDB 1.0 的测试）： "),t("ul",null,[t("li",null,[d("第一步（编译 IoTDB Session 最新包）：进入官网 "),t("a",p,[d("https://github.com/apache/iotdb/tree/rel/1.0"),r(e)]),d(" 下载 IoTDB 源码，在根目录下运行命令 mvn clean package install -pl session -am -DskipTests 编译 IoTDB Session 的最新包。")]),t("li",null,[d("第二步（编译 IoTDB Benchmark 测试包）：进入官网 "),t("a",m,[d("https://github.com/thulab/iot-benchmark"),r(e)]),d(" 下载源码，在根目录下运行 mvn clean package install -pl iotdb-1.0 -am -DskipTests 编译测试 Apache IoTDB 1.0版本的测试包，测试包位置与根目录的相对路径为 ./iotdb-1.0/target/iotdb-1.0-0.0.1/iotdb-1.0-0.0.1")])])])]),b,t("p",null,[d("测试包的目录结构如下图1-3所示。其中测试配置文件为conf/config.properties，"),t("a",g,[d("测试启动脚本为benchmark.sh"),r(e)]),d(" (Linux & MacOS) 和 benchmark.bat (Windows)，详细文件用途见表1-2所示。")]),E,u,t("table",null,[I,t("tbody",null,[O,t("tr",null,[t("td",null,[t("a",R,[d("benchmark.sh"),r(e)])]),S,f]),A,N,B,D,t("tr",null,[P,t("td",null,[t("a",k,[d("startup.sh"),r(e)])]),L]),t("tr",null,[t("td",null,[t("a",y,[d("ser-benchmark.sh"),r(e)])]),Q,M])])]),x])}const K=i(l,[["render",U],["__file","Benchmark.html.vue"]]);export{K as default};
