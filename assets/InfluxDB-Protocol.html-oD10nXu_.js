import{_ as a,o as t,c as n,e}from"./app-CQeJnOJS.js";const s={},o=e(`<h2 id="influxdb-protocol" tabindex="-1"><a class="header-anchor" href="#influxdb-protocol"><span>InfluxDB-Protocol</span></a></h2><h3 id="_1-切换方案" tabindex="-1"><a class="header-anchor" href="#_1-切换方案"><span>1.切换方案</span></a></h3><p>假如您原先接入 InfluxDB 的业务代码如下：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">InfluxDB</span> influxDB <span class="token operator">=</span> <span class="token class-name">InfluxDBFactory</span><span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span>openurl<span class="token punctuation">,</span> username<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>您只需要将 InfluxDBFactory 替换为 <strong>IoTDBInfluxDBFactory</strong> 即可实现业务向 IoTDB 的切换：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">InfluxDB</span> influxDB <span class="token operator">=</span> <span class="token class-name">IoTDBInfluxDBFactory</span><span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span>openurl<span class="token punctuation">,</span> username<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-方案设计" tabindex="-1"><a class="header-anchor" href="#_2-方案设计"><span>2.方案设计</span></a></h3><h4 id="_2-1-influxdb-protocol适配器" tabindex="-1"><a class="header-anchor" href="#_2-1-influxdb-protocol适配器"><span>2.1 InfluxDB-Protocol适配器</span></a></h4><p>该适配器以 IoTDB Java Session 接口为底层基础，实现了 InfluxDB 的 Java 接口 <code>interface InfluxDB</code>，对用户提供了所有 InfluxDB 的接口方法，最终用户可以无感知地使用 InfluxDB 协议向 IoTDB 发起写入和读取请求。</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/API/IoTDB-InfluxDB/architecture-design.png?raw=true" alt="architecture-design" tabindex="0" loading="lazy"><figcaption>architecture-design</figcaption></figure><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/API/IoTDB-InfluxDB/class-diagram.png?raw=true" alt="class-diagram" tabindex="0" loading="lazy"><figcaption>class-diagram</figcaption></figure><h4 id="_2-2-元数据格式转换" tabindex="-1"><a class="header-anchor" href="#_2-2-元数据格式转换"><span>2.2 元数据格式转换</span></a></h4><p>InfluxDB 的元数据是 tag-field 模型，IoTDB 的元数据是树形模型。为了使适配器能够兼容 InfluxDB 协议，需要把 InfluxDB 的元数据模型转换成 IoTDB 的元数据模型。</p><h5 id="_2-2-1-influxdb-元数据" tabindex="-1"><a class="header-anchor" href="#_2-2-1-influxdb-元数据"><span>2.2.1 InfluxDB 元数据</span></a></h5><ol><li>database: 数据库名。</li><li>measurement: 测量指标名。</li><li>tags : 各种有索引的属性。</li><li>fields : 各种记录值（没有索引的属性）。</li></ol><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/API/IoTDB-InfluxDB/influxdb-data.png?raw=true" alt="influxdb-data" tabindex="0" loading="lazy"><figcaption>influxdb-data</figcaption></figure><h5 id="_2-2-2-iotdb-元数据" tabindex="-1"><a class="header-anchor" href="#_2-2-2-iotdb-元数据"><span>2.2.2 IoTDB 元数据</span></a></h5><ol><li>storage group： 存储组。</li><li>path(time series ID)：存储路径。</li><li>measurement： 物理量。</li></ol><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/API/IoTDB-InfluxDB/iotdb-data.png?raw=true" alt="iotdb-data" tabindex="0" loading="lazy"><figcaption>iotdb-data</figcaption></figure><h5 id="_2-2-3-两者映射关系" tabindex="-1"><a class="header-anchor" href="#_2-2-3-两者映射关系"><span>2.2.3 两者映射关系</span></a></h5><p>InfluxDB 元数据和 IoTDB 元数据有着如下的映射关系：</p><ol><li>InfluxDB 中的 database 和 measurement 组合起来作为 IoTDB 中的 storage group。</li><li>InfluxDB 中的 field key 作为 IoTDB 中 measurement 路径，InfluxDB 中的 field value 即是该路径下记录的测点值。</li><li>InfluxDB 中的 tag 在 IoTDB 中使用 storage group 和 measurement 之间的路径表达。InfluxDB 的 tag key 由 storage group 和 measurement 之间路径的顺序隐式表达，tag value 记录为对应顺序的路径的名称。</li></ol><p>InfluxDB 元数据向 IoTDB 元数据的转换关系可以由下面的公示表示：</p><p><code>root.{database}.{measurement}.{tag value 1}.{tag value 2}...{tag value N-1}.{tag value N}.{field key}</code></p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/API/IoTDB-InfluxDB/influxdb-vs-iotdb-data.png?raw=true" alt="influxdb-vs-iotdb-data" tabindex="0" loading="lazy"><figcaption>influxdb-vs-iotdb-data</figcaption></figure><p>如上图所示，可以看出：</p><p>我们在 IoTDB 中使用 storage group 和 measurement 之间的路径来表达 InfluxDB tag 的概念，也就是图中右侧绿色方框的部分。</p><p>storage group 和 measurement 之间的每一层都代表一个 tag。如果 tag key 的数量为 N，那么 storage group 和 measurement 之间的路径的层数就是 N。我们对 storage group 和 measurement 之间的每一层进行顺序编号，每一个序号都和一个 tag key 一一对应。同时，我们使用 storage group 和 measurement 之间每一层 <strong>路径的名字</strong> 来记 tag value，tag key 可以通过自身的序号找到对应路径层级下的 tag value.</p><h5 id="_2-2-4-关键问题" tabindex="-1"><a class="header-anchor" href="#_2-2-4-关键问题"><span>2.2.4 关键问题</span></a></h5><p>在 InfluxDB 的 SQL 语句中，tag 出现的顺序的不同并不会影响实际的执行结果。</p><p>例如：<code>insert factory, workshop=A1, production=B1 temperature=16.9</code> 和 <code>insert factory, production=B1, workshop=A1 temperature=16.9</code> 两条 InfluxDB SQL 的含义（以及执行结果）相等。</p><p>但在 IoTDB 中，上述插入的数据点可以存储在 <code>root.monitor.factory.A1.B1.temperature</code> 下，也可以存储在 <code>root.monitor.factory.B1.A1.temperature</code> 下。因此，IoTDB 路径中储存的 InfluxDB 的 tag 的顺序是需要被特别考虑的，因为 <code>root.monitor.factory.A1.B1.temperature</code> 和<br><code>root.monitor.factory.B1.A1.temperature</code> 是两条不同的序列。我们可以认为，IoTDB 元数据模型对 tag 顺序的处理是“敏感”的。</p><p>基于上述的考虑，我们还需要在 IoTDB 中记录 InfluxDB 每个 tag 对应在 IoTDB 路径中的层级顺序，以确保在执行 InfluxDB SQL 时，不论 InfluxDB SQL 中 tag 出现的顺序如何，只要该 SQL 表达的是对同一个时间序列上的操作，那么适配器都可以唯一对应到 IoTDB 中的一条时间序列上进行操作。</p><p>这里还需要考虑的另一个问题是：InfluxDB 的 tag key 及对应顺序关系应该如何持久化到 IoTDB 数据库中，以确保不会丢失相关信息。</p><p><strong>解决方案：</strong></p><p><strong>tag key 对应顺序关系在内存中的形式</strong></p><p>通过利用内存中的<code>Map&lt;Measurement, Map&lt;Tag Key, Order&gt;&gt;</code> 这样一个 Map 结构，来维护 tag 在 IoTDB 路径层级上的顺序。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>    <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Map</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> measurementTagOrder
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以看出 Map 是一个两层的结构。</p><p>第一层的 Key 是 String 类型的 InfluxDB measurement，第一层的 Value 是一个 &lt;String, Integer&gt; 结构的 Map。</p><p>第二层的 Key 是 String 类型的 InfluxDB tag key，第二层的 Value 是 Integer 类型的 tag order，也就是 tag 在 IoTDB 路径层级上的顺序。</p><p>使用时，就可以先通过 InfluxDB measurement 定位，再通过 InfluxDB tag key 定位，最后就可以获得 tag 在 IoTDB 路径层级上的顺序了。</p><p><strong>tag key 对应顺序关系的持久化方案</strong></p><p>存储组为<code>root.TAG_INFO</code>，分别用存储组下的 <code>database_name</code>, <code>measurement_name</code>, <code>tag_name</code> 和 <code>tag_order</code> 测点来存储 tag key 极其对应的顺序关系。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+---------------------------+------------------------------+----------------------+-----------------------+
|                         Time|root.TAG_INFO.database_name|root.TAG_INFO.measurement_name|root.TAG_INFO.tag_name|root.TAG_INFO.tag_order|
+-----------------------------+---------------------------+------------------------------+----------------------+-----------------------+
|2021-10-12T01:21:26.907+08:00|                    monitor|                       factory|              workshop|                      1|
|2021-10-12T01:21:27.310+08:00|                    monitor|                       factory|            production|                      2|
|2021-10-12T01:21:27.313+08:00|                    monitor|                       factory|                  cell|                      3|
|2021-10-12T01:21:47.314+08:00|                   building|                           cpu|              tempture|                      1|
+-----------------------------+---------------------------+------------------------------+----------------------+-----------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-3-实例" tabindex="-1"><a class="header-anchor" href="#_2-3-实例"><span>2.3 实例</span></a></h4><h5 id="_2-3-1-插入数据" tabindex="-1"><a class="header-anchor" href="#_2-3-1-插入数据"><span>2.3.1 插入数据</span></a></h5><ol><li><p>假定按照以下的顺序插入三条数据到 InfluxDB 中 (database=monitor)：</p><p>(1)<code>insert student,name=A,phone=B,sex=C score=99</code></p><p>(2)<code>insert student,address=D score=98</code></p><p>(3)<code>insert student,name=A,phone=B,sex=C,address=D score=97</code></p></li><li><p>简单对上述 InfluxDB 的时序进行解释，database 是 monitor; measurement 是student；tag 分别是 name，phone、sex 和 address；field 是 score。</p></li></ol><p>对应的InfluxDB的实际存储为：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>time                address name phone sex socre
----                ------- ---- ----- --- -----
1633971920128182000         A    B     C   99
1633971947112684000 D                      98
1633971963011262000 D       A    B     C   97
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><p>IoTDB顺序插入三条数据的过程如下：</p><p>(1)插入第一条数据时，需要将新出现的三个 tag key 更新到 table 中，IoTDB 对应的记录 tag 顺序的 table 为：</p><table><thead><tr><th>database</th><th>measurement</th><th>tag_key</th><th>Order</th></tr></thead><tbody><tr><td>monitor</td><td>student</td><td>name</td><td>0</td></tr><tr><td>monitor</td><td>student</td><td>phone</td><td>1</td></tr><tr><td>monitor</td><td>student</td><td>sex</td><td>2</td></tr></tbody></table><p>(2)插入第二条数据时，由于此时记录 tag 顺序的 table 中已经有了三个 tag key，因此需要将出现的第四个 tag key=address 更新记录。IoTDB 对应的记录 tag 顺序的 table 为：</p><table><thead><tr><th>database</th><th>measurement</th><th>tag_key</th><th>order</th></tr></thead><tbody><tr><td>monitor</td><td>student</td><td>name</td><td>0</td></tr><tr><td>monitor</td><td>student</td><td>phone</td><td>1</td></tr><tr><td>monitor</td><td>student</td><td>sex</td><td>2</td></tr><tr><td>monitor</td><td>student</td><td>address</td><td>3</td></tr></tbody></table><p>(3)插入第三条数据时，此时四个 tag key 都已经记录过，所以不需要更新记录，IoTDB 对应的记录 tag 顺序的 table 为：</p><table><thead><tr><th>database</th><th>measurement</th><th>tag_key</th><th>order</th></tr></thead><tbody><tr><td>monitor</td><td>student</td><td>name</td><td>0</td></tr><tr><td>monitor</td><td>student</td><td>phone</td><td>1</td></tr><tr><td>monitor</td><td>student</td><td>sex</td><td>2</td></tr><tr><td>monitor</td><td>student</td><td>address</td><td>3</td></tr></tbody></table></li><li><p>(1)第一条插入数据对应 IoTDB 时序为 root.monitor.student.A.B.C</p><p>(2)第二条插入数据对应 IoTDB 时序为 root.monitor.student.PH.PH.PH.D (其中PH表示占位符)。</p><p>需要注意的是，由于该条数据的 tag key=address 是第四个出现的，但是自身却没有对应的前三个 tag 值，因此需要用 PH 占位符来代替。这样做的目的是保证每条数据中的 tag 顺序不会乱，是符合当前顺序表中的顺序，从而查询数据的时候可以进行指定 tag 过滤。</p><p>(3)第三条插入数据对应 IoTDB 时序为 root.monitor.student.A.B.C.D</p><p>对应的 IoTDB 的实际存储为：</p></li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+--------------------------------+-------------------------------------+----------------------------------+
|                         Time|root.monitor.student.A.B.C.score|root.monitor.student.PH.PH.PH.D.score|root.monitor.student.A.B.C.D.score|
+-----------------------------+--------------------------------+-------------------------------------+----------------------------------+
|2021-10-12T01:21:26.907+08:00|                              99|                                 NULL|                              NULL|
|2021-10-12T01:21:27.310+08:00|                            NULL|                                   98|                              NULL|
|2021-10-12T01:21:27.313+08:00|                            NULL|                                 NULL|                                97|
+-----------------------------+--------------------------------+-------------------------------------+----------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li><p>如果上面三条数据插入的顺序不一样，我们可以看到对应的实际path路径也就发生了改变，因为InfluxDB数据中的Tag出现顺序发生了变化，所对应的到IoTDB中的path节点顺序也就发生了变化。</p><p>但是这样实际并不会影响查询的正确性，因为一旦Influxdb的Tag顺序确定之后，查询也会按照这个顺序表记录的顺序进行Tag值过滤。所以并不会影响查询的正确性。</p></li></ol><h5 id="_2-3-2-查询数据" tabindex="-1"><a class="header-anchor" href="#_2-3-2-查询数据"><span>2.3.2 查询数据</span></a></h5><ol><li><p>查询student中phone=B的数据。在database=monitor,measurement=student中tag=phone的顺序为1，order最大值是3，对应到IoTDB的查询为：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>monitor<span class="token punctuation">.</span>student<span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">.</span>B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>查询student中phone=B且score&gt;97的数据，对应到IoTDB的查询为：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>monitor<span class="token punctuation">.</span>student<span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">.</span>B <span class="token keyword">where</span> score<span class="token operator">&gt;</span><span class="token number">97</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>查询student中phone=B且score&gt;97且时间在最近七天内的的数据，对应到IoTDB的查询为：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>monitor<span class="token punctuation">.</span>student<span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">.</span>B <span class="token keyword">where</span> score<span class="token operator">&gt;</span><span class="token number">97</span> <span class="token operator">and</span> <span class="token keyword">time</span> <span class="token operator">&gt;</span> <span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">7</span>d 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>查询student中name=A或score&gt;97，由于tag存储在路径中，因此没有办法用一次查询同时完成tag和field的<strong>或</strong>语义查询，因此需要多次查询进行或运算求并集，对应到IoTDB的查询为：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>monitor<span class="token punctuation">.</span>student<span class="token punctuation">.</span>A 
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>monitor<span class="token punctuation">.</span>student <span class="token keyword">where</span> score<span class="token operator">&gt;</span><span class="token number">97</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>最后手动对上面两次查询结果求并集。</p></li><li><p>查询student中(name=A或phone=B或sex=C)且score&gt;97，由于tag存储在路径中，因此没有办法用一次查询完成tag的<strong>或</strong>语义， 因此需要多次查询进行或运算求并集，对应到IoTDB的查询为：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>monitor<span class="token punctuation">.</span>student<span class="token punctuation">.</span>A <span class="token keyword">where</span> score<span class="token operator">&gt;</span><span class="token number">97</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>monitor<span class="token punctuation">.</span>student<span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">.</span>B <span class="token keyword">where</span> score<span class="token operator">&gt;</span><span class="token number">97</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>monitor<span class="token punctuation">.</span>student<span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">.</span>C <span class="token keyword">where</span> score<span class="token operator">&gt;</span><span class="token number">97</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后手动对上面三次查询结果求并集。</p></li></ol>`,55),r=[o];function l(d,p){return t(),n("div",null,r)}const c=a(s,[["render",l],["__file","InfluxDB-Protocol.html.vue"]]),u=JSON.parse('{"path":"/zh/UserGuide/V0.13.x/API/InfluxDB-Protocol.html","title":"","lang":"zh-CN","frontmatter":{"description":"InfluxDB-Protocol 1.切换方案 假如您原先接入 InfluxDB 的业务代码如下： 您只需要将 InfluxDBFactory 替换为 IoTDBInfluxDBFactory 即可实现业务向 IoTDB 的切换： 2.方案设计 2.1 InfluxDB-Protocol适配器 该适配器以 IoTDB Java Session 接口为...","head":[["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/API/InfluxDB-Protocol.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"InfluxDB-Protocol 1.切换方案 假如您原先接入 InfluxDB 的业务代码如下： 您只需要将 InfluxDBFactory 替换为 IoTDBInfluxDBFactory 即可实现业务向 IoTDB 的切换： 2.方案设计 2.1 InfluxDB-Protocol适配器 该适配器以 IoTDB Java Session 接口为..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alioss.timecho.com/docs/img/UserGuide/API/IoTDB-InfluxDB/architecture-design.png?raw=true"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"https://alioss.timecho.com/docs/img/UserGuide/API/IoTDB-InfluxDB/architecture-design.png?raw=true\\",\\"https://alioss.timecho.com/docs/img/UserGuide/API/IoTDB-InfluxDB/class-diagram.png?raw=true\\",\\"https://alioss.timecho.com/docs/img/UserGuide/API/IoTDB-InfluxDB/influxdb-data.png?raw=true\\",\\"https://alioss.timecho.com/docs/img/UserGuide/API/IoTDB-InfluxDB/iotdb-data.png?raw=true\\",\\"https://alioss.timecho.com/docs/img/UserGuide/API/IoTDB-InfluxDB/influxdb-vs-iotdb-data.png?raw=true\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"InfluxDB-Protocol","slug":"influxdb-protocol","link":"#influxdb-protocol","children":[{"level":3,"title":"1.切换方案","slug":"_1-切换方案","link":"#_1-切换方案","children":[]},{"level":3,"title":"2.方案设计","slug":"_2-方案设计","link":"#_2-方案设计","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":7.78,"words":2334},"filePathRelative":"zh/UserGuide/V0.13.x/API/InfluxDB-Protocol.md","localizedDate":"2023年7月10日","autoDesc":true}');export{c as comp,u as data};
