import{_ as e,c as a,b as t,o as n}from"./app-CNiZnG3t.js";const l={};function o(p,s){return n(),a("div",null,s[0]||(s[0]=[t(`<h1 id="c-原生接口" tabindex="-1"><a class="header-anchor" href="#c-原生接口"><span>C# 原生接口</span></a></h1><h2 id="依赖" tabindex="-1"><a class="header-anchor" href="#依赖"><span>依赖</span></a></h2><ul><li>.NET SDK &gt;= 5.0 或 .NET Framework 4.x</li><li>Thrift &gt;= 0.14.1</li><li>NLog &gt;= 4.7.9</li></ul><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2><p>您可以使用 NuGet Package Manager, .NET CLI等工具来安装，以 .NET CLI为例</p><p>如果您使用的是.NET 5.0 或者更高版本的SDK，输入如下命令即可安装最新的NuGet包</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>dotnet add package Apache.IoTDB</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>为了适配 .NET Framework 4.x，我们单独构建了一个NuGet包，如果您使用的是.NET Framework 4.x，输入如下命令即可安装最新的包</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#61AFEF;">dotnet</span><span style="color:#98C379;"> add</span><span style="color:#98C379;"> package</span><span style="color:#98C379;"> Apache.IoTDB.framework</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如果您想安装更早版本的客户端，只需要指定版本即可</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># 安装0.12.1.2版本的客户端</span></span>
<span class="line"><span style="color:#61AFEF;">dotnet</span><span style="color:#98C379;"> add</span><span style="color:#98C379;"> package</span><span style="color:#98C379;"> Apache.IoTDB</span><span style="color:#D19A66;"> --version</span><span style="color:#D19A66;"> 0.12.1.2</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基本接口说明" tabindex="-1"><a class="header-anchor" href="#基本接口说明"><span>基本接口说明</span></a></h2><p>Session接口在语义上和其他语言客户端相同</p><div class="language-csharp line-numbers-mode" data-highlighter="shiki" data-ext="csharp" data-title="csharp" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 参数定义</span></span>
<span class="line"><span style="color:#C678DD;">string</span><span style="color:#E06C75;"> host</span><span style="color:#56B6C2;"> =</span><span style="color:#98C379;"> &quot;localhost&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#E06C75;"> port</span><span style="color:#56B6C2;"> =</span><span style="color:#D19A66;"> 6667</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#E06C75;"> pool_size</span><span style="color:#56B6C2;"> =</span><span style="color:#D19A66;"> 2</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 初始化session</span></span>
<span class="line"><span style="color:#C678DD;">var</span><span style="color:#E06C75;"> session_pool</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> new </span><span style="color:#E5C07B;">SessionPool</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">host</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">port</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">pool_size</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 开启session</span></span>
<span class="line"><span style="color:#ABB2BF;">await </span><span style="color:#E5C07B;">session_pool</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">Open</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">false</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 创建时间序列</span></span>
<span class="line"><span style="color:#ABB2BF;">await </span><span style="color:#E5C07B;">session_pool</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">CreateTimeSeries</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;root.test_group.test_device.ts1&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">TSDataType</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">TEXT</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">TSEncoding</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">PLAIN</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">Compressor</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">UNCOMPRESSED</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">await </span><span style="color:#E5C07B;">session_pool</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">CreateTimeSeries</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;root.test_group.test_device.ts2&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">TSDataType</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">BOOLEAN</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">TSEncoding</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">PLAIN</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">Compressor</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">UNCOMPRESSED</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">await </span><span style="color:#E5C07B;">session_pool</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">CreateTimeSeries</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;root.test_group.test_device.ts3&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">TSDataType</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">INT32</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">TSEncoding</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">PLAIN</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">Compressor</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">UNCOMPRESSED</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 插入record</span></span>
<span class="line"><span style="color:#C678DD;">var</span><span style="color:#E06C75;"> measures</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> new </span><span style="color:#E5C07B;">List</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">string</span><span style="color:#ABB2BF;">&gt;{</span><span style="color:#98C379;">&quot;ts1&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;ts2&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;ts3&quot;</span><span style="color:#ABB2BF;">};</span></span>
<span class="line"><span style="color:#C678DD;">var</span><span style="color:#E06C75;"> values</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> new </span><span style="color:#E5C07B;">List</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">object</span><span style="color:#ABB2BF;">&gt; { </span><span style="color:#98C379;">&quot;test_text&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">, (</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;">)</span><span style="color:#D19A66;">123</span><span style="color:#ABB2BF;"> };</span></span>
<span class="line"><span style="color:#C678DD;">var</span><span style="color:#E06C75;"> timestamp</span><span style="color:#56B6C2;"> =</span><span style="color:#D19A66;"> 1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">var</span><span style="color:#E06C75;"> rowRecord</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> new </span><span style="color:#E5C07B;">RowRecord</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">timestamp</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">values</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">measures</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">await </span><span style="color:#E5C07B;">session_pool</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">InsertRecordAsync</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;root.test_group.test_device&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">rowRecord</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 插入Tablet</span></span>
<span class="line"><span style="color:#C678DD;">var</span><span style="color:#E06C75;"> timestamp_lst</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> new </span><span style="color:#E5C07B;">List</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">long</span><span style="color:#ABB2BF;">&gt;{ </span><span style="color:#E06C75;">timestamp</span><span style="color:#56B6C2;"> +</span><span style="color:#D19A66;"> 1</span><span style="color:#ABB2BF;"> };</span></span>
<span class="line"><span style="color:#C678DD;">var</span><span style="color:#E06C75;"> value_lst</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> new </span><span style="color:#E5C07B;">List</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">object</span><span style="color:#ABB2BF;">&gt; {</span><span style="color:#98C379;">&quot;iotdb&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">, (</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;">) </span><span style="color:#D19A66;">12</span><span style="color:#ABB2BF;">};</span></span>
<span class="line"><span style="color:#C678DD;">var</span><span style="color:#E06C75;"> tablet</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> new </span><span style="color:#E5C07B;">Tablet</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;root.test_group.test_device&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">measures</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">value_lst</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">timestamp_ls</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">await </span><span style="color:#E5C07B;">session_pool</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">InsertTabletAsync</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">tablet</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 关闭Session</span></span>
<span class="line"><span style="color:#ABB2BF;">await </span><span style="color:#E5C07B;">session_pool</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">Close</span><span style="color:#ABB2BF;">();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="row-record" tabindex="-1"><a class="header-anchor" href="#row-record"><span><strong>Row Record</strong></span></a></h2><ul><li><p>对<strong>IoTDB</strong>中的<code>record</code>数据进行封装和抽象。</p></li><li><p>示例：</p><table><thead><tr><th>timestamp</th><th>status</th><th>temperature</th></tr></thead><tbody><tr><td>1</td><td>0</td><td>20</td></tr></tbody></table></li><li><p>构造方法：</p></li></ul><div class="language-csharp line-numbers-mode" data-highlighter="shiki" data-ext="csharp" data-title="csharp" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">var</span><span style="color:#E06C75;"> rowRecord</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;">  new </span><span style="color:#E5C07B;">RowRecord</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">long</span><span style="color:#E06C75;"> timestamps</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">List</span><span style="color:#56B6C2;">&lt;</span><span style="color:#C678DD;">object</span><span style="color:#56B6C2;">&gt;</span><span style="color:#E06C75;"> values</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">List</span><span style="color:#56B6C2;">&lt;</span><span style="color:#C678DD;">string</span><span style="color:#56B6C2;">&gt;</span><span style="color:#E06C75;"> measurements</span><span style="color:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tablet" tabindex="-1"><a class="header-anchor" href="#tablet"><span><strong>Tablet</strong></span></a></h3><ul><li><p>一种类似于表格的数据结构，包含一个设备的若干行非空数据块。</p></li><li><p>示例：</p><table><thead><tr><th>time</th><th>status</th><th>temperature</th></tr></thead><tbody><tr><td>1</td><td>0</td><td>20</td></tr><tr><td>2</td><td>0</td><td>20</td></tr><tr><td>3</td><td>3</td><td>21</td></tr></tbody></table></li><li><p>构造方法：</p></li></ul><div class="language-csharp line-numbers-mode" data-highlighter="shiki" data-ext="csharp" data-title="csharp" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">var</span><span style="color:#E06C75;"> tablet</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#61AFEF;">  Tablet</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">string</span><span style="color:#E06C75;"> deviceId</span><span style="color:#ABB2BF;">,  </span><span style="color:#E06C75;">List</span><span style="color:#56B6C2;">&lt;</span><span style="color:#C678DD;">string</span><span style="color:#56B6C2;">&gt;</span><span style="color:#E06C75;"> measurements</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">List</span><span style="color:#56B6C2;">&lt;</span><span style="color:#E06C75;">List</span><span style="color:#56B6C2;">&lt;</span><span style="color:#C678DD;">object</span><span style="color:#56B6C2;">&gt;&gt;</span><span style="color:#E06C75;"> values</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">List</span><span style="color:#56B6C2;">&lt;</span><span style="color:#C678DD;">long</span><span style="color:#56B6C2;">&gt;</span><span style="color:#E06C75;"> timestamps</span><span style="color:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api"><span><strong>API</strong></span></a></h2><h3 id="基础接口" tabindex="-1"><a class="header-anchor" href="#基础接口"><span><strong>基础接口</strong></span></a></h3><table><thead><tr><th>api name</th><th>parameters</th><th>notes</th><th>use example</th></tr></thead><tbody><tr><td>Open</td><td>bool</td><td>open session</td><td>session_pool.Open(false)</td></tr><tr><td>Close</td><td>null</td><td>close session</td><td>session_pool.Close()</td></tr><tr><td>IsOpen</td><td>null</td><td>check if session is open</td><td>session_pool.IsOpen()</td></tr><tr><td>OpenDebugMode</td><td>LoggingConfiguration=null</td><td>open debug mode</td><td>session_pool.OpenDebugMode()</td></tr><tr><td>CloseDebugMode</td><td>null</td><td>close debug mode</td><td>session_pool.CloseDebugMode()</td></tr><tr><td>SetTimeZone</td><td>string</td><td>set time zone</td><td>session_pool.GetTimeZone()</td></tr><tr><td>GetTimeZone</td><td>null</td><td>get time zone</td><td>session_pool.GetTimeZone()</td></tr></tbody></table><h3 id="record相关接口" tabindex="-1"><a class="header-anchor" href="#record相关接口"><span><strong>Record相关接口</strong></span></a></h3><table><thead><tr><th>api name</th><th>parameters</th><th>notes</th><th>use example</th></tr></thead><tbody><tr><td>InsertRecordAsync</td><td>string, RowRecord</td><td>insert single record</td><td>session_pool.InsertRecordAsync(&quot;root.97209_TEST_CSHARP_CLIENT_GROUP.TEST_CSHARP_CLIENT_DEVICE&quot;, new RowRecord(1, values, measures));</td></tr><tr><td>InsertRecordsAsync</td><td>List&lt;string&gt;, List&lt;RowRecord&gt;</td><td>insert records</td><td>session_pool.InsertRecordsAsync(device_id, rowRecords)</td></tr><tr><td>InsertRecordsOfOneDeviceAsync</td><td>string, List&lt;RowRecord&gt;</td><td>insert records of one device</td><td>session_pool.InsertRecordsOfOneDeviceAsync(device_id, rowRecords)</td></tr><tr><td>InsertRecordsOfOneDeviceSortedAsync</td><td>string, List&lt;RowRecord&gt;</td><td>insert sorted records of one device</td><td>InsertRecordsOfOneDeviceSortedAsync(deviceId, sortedRowRecords);</td></tr><tr><td>TestInsertRecordAsync</td><td>string, RowRecord</td><td>test insert record</td><td>session_pool.TestInsertRecordAsync(&quot;root.97209_TEST_CSHARP_CLIENT_GROUP.TEST_CSHARP_CLIENT_DEVICE&quot;, rowRecord)</td></tr><tr><td>TestInsertRecordsAsync</td><td>List&lt;string&gt;, List&lt;RowRecord&gt;</td><td>test insert record</td><td>session_pool.TestInsertRecordsAsync(device_id, rowRecords)</td></tr></tbody></table><h3 id="tablet相关接口" tabindex="-1"><a class="header-anchor" href="#tablet相关接口"><span><strong>Tablet相关接口</strong></span></a></h3><table><thead><tr><th>api name</th><th>parameters</th><th>notes</th><th>use example</th></tr></thead><tbody><tr><td>InsertTabletAsync</td><td>Tablet</td><td>insert single tablet</td><td>session_pool.InsertTabletAsync(tablet)</td></tr><tr><td>InsertTabletsAsync</td><td>List&lt;Tablet&gt;</td><td>insert tablets</td><td>session_pool.InsertTabletsAsync(tablets)</td></tr><tr><td>TestInsertTabletAsync</td><td>Tablet</td><td>test insert tablet</td><td>session_pool.TestInsertTabletAsync(tablet)</td></tr><tr><td>TestInsertTabletsAsync</td><td>List&lt;Tablet&gt;</td><td>test insert tablets</td><td>session_pool.TestInsertTabletsAsync(tablets)</td></tr></tbody></table><h3 id="sql语句接口" tabindex="-1"><a class="header-anchor" href="#sql语句接口"><span><strong>SQL语句接口</strong></span></a></h3><table><thead><tr><th>api name</th><th>parameters</th><th>notes</th><th>use example</th></tr></thead><tbody><tr><td>ExecuteQueryStatementAsync</td><td>string</td><td>execute sql query statement</td><td>session_pool.ExecuteQueryStatementAsync(&quot;select * from root.97209_TEST_CSHARP_CLIENT_GROUP.TEST_CSHARP_CLIENT_DEVICE where time&lt;15&quot;);</td></tr><tr><td>ExecuteNonQueryStatementAsync</td><td>string</td><td>execute sql nonquery statement</td><td>session_pool.ExecuteNonQueryStatementAsync( &quot;create timeseries root.97209_TEST_CSHARP_CLIENT_GROUP.TEST_CSHARP_CLIENT_DEVICE.status with datatype=BOOLEAN,encoding=PLAIN&quot;)</td></tr></tbody></table><h3 id="数据表接口" tabindex="-1"><a class="header-anchor" href="#数据表接口"><span>数据表接口</span></a></h3><table><thead><tr><th>api name</th><th>parameters</th><th>notes</th><th>use example</th></tr></thead><tbody><tr><td>SetStorageGroup</td><td>string</td><td>set storage group</td><td>session_pool.SetStorageGroup(&quot;root.97209_TEST_CSHARP_CLIENT_GROUP_01&quot;)</td></tr><tr><td>CreateTimeSeries</td><td>string, TSDataType, TSEncoding, Compressor</td><td>create time series</td><td>session_pool.InsertTabletsAsync(tablets)</td></tr><tr><td>DeleteStorageGroupAsync</td><td>string</td><td>delete single storage group</td><td>session_pool.DeleteStorageGroupAsync(&quot;root.97209_TEST_CSHARP_CLIENT_GROUP_01&quot;)</td></tr><tr><td>DeleteStorageGroupsAsync</td><td>List&lt;string&gt;</td><td>delete storage group</td><td>session_pool.DeleteStorageGroupAsync(&quot;root.97209_TEST_CSHARP_CLIENT_GROUP&quot;)</td></tr><tr><td>CreateMultiTimeSeriesAsync</td><td>List&lt;string&gt;, List&lt;TSDataType&gt; , List&lt;TSEncoding&gt; , List&lt;Compressor&gt;</td><td>create multi time series</td><td>session_pool.CreateMultiTimeSeriesAsync(ts_path_lst, data_type_lst, encoding_lst, compressor_lst);</td></tr><tr><td>DeleteTimeSeriesAsync</td><td>List&lt;string&gt;</td><td>delete time series</td><td></td></tr><tr><td>DeleteTimeSeriesAsync</td><td>string</td><td>delete time series</td><td></td></tr><tr><td>DeleteDataAsync</td><td>List&lt;string&gt;, long, long</td><td>delete data</td><td>session_pool.DeleteDataAsync(ts_path_lst, 2, 3)</td></tr></tbody></table><h3 id="辅助接口" tabindex="-1"><a class="header-anchor" href="#辅助接口"><span><strong>辅助接口</strong></span></a></h3><table><thead><tr><th>api name</th><th>parameters</th><th>notes</th><th>use example</th></tr></thead><tbody><tr><td>CheckTimeSeriesExistsAsync</td><td>string</td><td>check if time series exists</td><td>session_pool.CheckTimeSeriesExistsAsync(time series)</td></tr></tbody></table><p>用法可以参考<a href="https://github.com/apache/iotdb-client-csharp/tree/main/samples/Apache.IoTDB.Samples" target="_blank" rel="noopener noreferrer">用户示例</a></p><h2 id="连接池" tabindex="-1"><a class="header-anchor" href="#连接池"><span>连接池</span></a></h2><p>为了实现并发客户端请求，我们提供了针对原生接口的连接池(<code>SessionPool</code>)，由于<code>SessionPool</code>本身为<code>Session</code>的超集，当<code>SessionPool</code>的<code>pool_size</code>参数设置为1时，退化为原来的<code>Session</code></p><p>我们使用<code>ConcurrentQueue</code>数据结构封装了一个客户端队列，以维护与服务端的多个连接，当调用<code>Open()</code>接口时，会在该队列中创建指定个数的客户端，同时通过<code>System.Threading.Monitor</code>类实现对队列的同步访问。</p><p>当请求发生时，会尝试从连接池中寻找一个空闲的客户端连接，如果没有空闲连接，那么程序将需要等待直到有空闲连接</p><p>当一个连接被用完后，他会自动返回池中等待下次被使用</p><h2 id="bytebuffer" tabindex="-1"><a class="header-anchor" href="#bytebuffer"><span>ByteBuffer</span></a></h2><p>在传入RPC接口参数时，需要对Record和Tablet两种数据结构进行序列化，我们主要通过封装的ByteBuffer类实现</p><p>在封装字节序列的基础上，我们进行了内存预申请与内存倍增的优化，减少了序列化过程中内存的申请和释放，在一个拥有20000行的Tablet上进行序列化测试时，速度比起原生的数组动态增长具有<strong>35倍的性能加速</strong></p><h3 id="实现介绍" tabindex="-1"><a class="header-anchor" href="#实现介绍"><span>实现介绍</span></a></h3><p>在进行<code>RowRecords</code>以及<code>Tablet</code>的插入时，我们需要对多行RowRecord和Tablet进行序列化以进行发送。客户端中的序列化实现主要依赖于ByteBuffer完成。接下来我们介绍ByteBuffer的实现细节。本文包含如下几点内容:</p><ul><li>序列化的协议</li><li>C#与Java的大小端的差异</li><li>ByteBuffer内存倍增算法</li></ul><h3 id="序列化协议" tabindex="-1"><a class="header-anchor" href="#序列化协议"><span>序列化协议</span></a></h3><p>客户端向IoTDB服务器发送的序列化数据总体应该包含两个信息。</p><ul><li>数据类型</li><li>数据本身</li></ul><p>其中对于<code>字符串</code>的序列化时，我们需要再加入字符串的长度信息。即一个字符串的序列化完整结果为:</p><pre><code>[类型][长度][数据内容]
</code></pre><p>接下来我们分别介绍<code>RowRecord</code>、<code>Tablet</code>的序列化方式</p><h4 id="rowrecord" tabindex="-1"><a class="header-anchor" href="#rowrecord"><span>RowRecord</span></a></h4><p>我们对RowRecord进行序列化时，<code>伪代码</code>如下:</p><div class="language-csharp line-numbers-mode" data-highlighter="shiki" data-ext="csharp" data-title="csharp" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">public</span><span style="color:#C678DD;"> byte</span><span style="color:#ABB2BF;">[] </span><span style="color:#61AFEF;">value_to_bytes</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">List</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#E5C07B;">TSDataType</span><span style="color:#ABB2BF;">&gt; </span><span style="color:#E5C07B;">data_types</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">List</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">string</span><span style="color:#ABB2BF;">&gt; </span><span style="color:#E5C07B;">values</span><span style="color:#ABB2BF;">){</span></span>
<span class="line"><span style="color:#E5C07B;">    ByteBuffer</span><span style="color:#E06C75;"> buffer</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> new </span><span style="color:#E5C07B;">ByteBuffer</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">values</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">Count</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;">    for</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#E06C75;"> i</span><span style="color:#56B6C2;"> =</span><span style="color:#D19A66;"> 0</span><span style="color:#ABB2BF;">;</span><span style="color:#E06C75;">i</span><span style="color:#56B6C2;"> &lt;</span><span style="color:#E5C07B;"> data_types</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">Count</span><span style="color:#ABB2BF;">(); </span><span style="color:#E06C75;">i</span><span style="color:#56B6C2;">++</span><span style="color:#ABB2BF;">){</span></span>
<span class="line"><span style="color:#E5C07B;">        buffer</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">add_type</span><span style="color:#ABB2BF;">((</span><span style="color:#E5C07B;">data_types</span><span style="color:#ABB2BF;">[</span><span style="color:#E06C75;">i</span><span style="color:#ABB2BF;">]);</span></span>
<span class="line"><span style="color:#E5C07B;">        buffer</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">add_val</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">values</span><span style="color:#ABB2BF;">[</span><span style="color:#E06C75;">i</span><span style="color:#ABB2BF;">]);</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于其序列化的结果格式如下:</p><pre><code>[数据类型1][数据1][数据类型2][数据2]...[数据类型N][数据N]
</code></pre><p>其中数据类型为自定义的<code>Enum</code>变量，分别如下:</p><div class="language-csharp line-numbers-mode" data-highlighter="shiki" data-ext="csharp" data-title="csharp" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">public</span><span style="color:#C678DD;"> enum</span><span style="color:#E5C07B;"> TSDataType</span><span style="color:#ABB2BF;">{BOOLEAN, INT32, INT64, FLOAT, DOUBLE, TEXT, NONE};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="tablet序列化" tabindex="-1"><a class="header-anchor" href="#tablet序列化"><span>Tablet序列化</span></a></h4><p>使用<code>Tabelt</code>进行数据插入时有如下限制:</p><pre><code>限制：Tablet中数据不能有空值
</code></pre><p>由于向 <code>IoTDB</code>服务器发送<code>Tablet</code>数据插入请求时会携带<code>行数</code>， <code>列数</code>, <code>列数据类型</code>，所以<code>Tabelt</code>序列化时我们不需要加入数据类型信息。<code>Tablet</code>是<code>按照列进行序列化</code>，这是因为后端可以通过行数得知出当前列的元素个数，同时根据列类型来对数据进行解析。</p><h3 id="csharp与java序列化数据时的大小端差异" tabindex="-1"><a class="header-anchor" href="#csharp与java序列化数据时的大小端差异"><span>CSharp与Java序列化数据时的大小端差异</span></a></h3><p>由于Java序列化默认大端协议，而CSharp序列化默认得到小端序列。所以我们在CSharp中序列化数据之后，需要对数据进行反转这样后端才可以正常解析。同时当我们从后端获取到序列化的结果时(如<code>SessionDataset</code>)，我们也需要对获得的数据进行反转以解析内容。这其中特例便是字符串的序列化，CSharp中对字符串的序列化结果为大端序，所以序列化字符串或者接收到字符串序列化结果时，不需要反转序列结果。</p><h3 id="bytebuffer内存倍增法" tabindex="-1"><a class="header-anchor" href="#bytebuffer内存倍增法"><span>ByteBuffer内存倍增法</span></a></h3><p>拥有数万行的Tablet的序列化结果可能有上百兆，为了能够高效的实现大<code>Tablet</code>的序列化，我们对ByteBuffer使用<code>内存倍增法</code>的策略来减少序列化过程中对于内存的申请和释放。即当当前的buffer的长度不足以放下序列化结果时，我们将当前buffer的内存<code>至少</code>扩增2倍。这极大的减少了内存的申请释放次数，加速了大Tablet的序列化速度。</p><div class="language-csharp line-numbers-mode" data-highlighter="shiki" data-ext="csharp" data-title="csharp" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">private</span><span style="color:#C678DD;"> void</span><span style="color:#61AFEF;"> extend_buffer</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#E5C07B;"> space_need</span><span style="color:#ABB2BF;">){</span></span>
<span class="line"><span style="color:#C678DD;">        if</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">write_pos</span><span style="color:#56B6C2;"> +</span><span style="color:#E06C75;"> space_need</span><span style="color:#56B6C2;"> &gt;=</span><span style="color:#E06C75;"> total_length</span><span style="color:#ABB2BF;">){</span></span>
<span class="line"><span style="color:#E06C75;">            total_length</span><span style="color:#56B6C2;"> =</span><span style="color:#61AFEF;"> max</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">space_need</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">total_length</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;">            byte</span><span style="color:#ABB2BF;">[] </span><span style="color:#E06C75;">new_buffer</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> new </span><span style="color:#C678DD;">byte</span><span style="color:#ABB2BF;">[</span><span style="color:#E06C75;">total_length</span><span style="color:#56B6C2;"> *</span><span style="color:#D19A66;"> 2</span><span style="color:#ABB2BF;">];</span></span>
<span class="line"><span style="color:#E5C07B;">            buffer</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">CopyTo</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">new_buffer</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#E06C75;">            buffer</span><span style="color:#56B6C2;"> =</span><span style="color:#E06C75;"> new_buffer</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">            total_length</span><span style="color:#56B6C2;"> =</span><span style="color:#D19A66;"> 2</span><span style="color:#56B6C2;"> *</span><span style="color:#E06C75;"> total_length</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同时在序列化<code>Tablet</code>时，我们首先根据Tablet的<code>行数</code>，<code>列数</code>以及每一列的数据类型估计当前<code>Tablet</code>序列化结果所需要的内存大小，并在初始化时进行内存的申请。这进一步的减少了内存的申请释放频率。</p><p>通过上述的策略，我们在一个有<code>20000</code>行的Tablet上进行测试时，序列化速度相比Naive数组长度动态生长实现算法具有约35倍的性能加速。</p><h2 id="异常重连" tabindex="-1"><a class="header-anchor" href="#异常重连"><span>异常重连</span></a></h2><p>当服务端发生异常或者宕机重启时，客户端中原来通过<code>Open()</code>产生的的session会失效，抛出<code>TException</code>异常</p><p>为了避免这一情况的发生，我们对大部分的接口进行了增强，一旦出现连接问题，就会尝试重新调用<code>Open()</code>接口并创建新的Session，并尝试重新发送对应的请求</p>`,72)]))}const c=e(l,[["render",o],["__file","Programming-CSharp-Native-API.html.vue"]]),d=JSON.parse('{"path":"/zh/UserGuide/V1.3.0-2/API/Programming-CSharp-Native-API.html","title":"C# 原生接口","lang":"zh-CN","frontmatter":{"description":"C# 原生接口 依赖 .NET SDK >= 5.0 或 .NET Framework 4.x Thrift >= 0.14.1 NLog >= 4.7.9 安装 您可以使用 NuGet Package Manager, .NET CLI等工具来安装，以 .NET CLI为例 如果您使用的是.NET 5.0 或者更高版本的SDK，输入如下命令即可安装最...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.3.0-2/API/Programming-CSharp-Native-API.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.3.0-2/API/Programming-CSharp-Native-API.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"C# 原生接口"}],["meta",{"property":"og:description","content":"C# 原生接口 依赖 .NET SDK >= 5.0 或 .NET Framework 4.x Thrift >= 0.14.1 NLog >= 4.7.9 安装 您可以使用 NuGet Package Manager, .NET CLI等工具来安装，以 .NET CLI为例 如果您使用的是.NET 5.0 或者更高版本的SDK，输入如下命令即可安装最..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-11T11:01:16.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-11T11:01:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"C# 原生接口\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-11T11:01:16.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"依赖","slug":"依赖","link":"#依赖","children":[]},{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"基本接口说明","slug":"基本接口说明","link":"#基本接口说明","children":[]},{"level":2,"title":"Row Record","slug":"row-record","link":"#row-record","children":[{"level":3,"title":"Tablet","slug":"tablet","link":"#tablet","children":[]}]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"基础接口","slug":"基础接口","link":"#基础接口","children":[]},{"level":3,"title":"Record相关接口","slug":"record相关接口","link":"#record相关接口","children":[]},{"level":3,"title":"Tablet相关接口","slug":"tablet相关接口","link":"#tablet相关接口","children":[]},{"level":3,"title":"SQL语句接口","slug":"sql语句接口","link":"#sql语句接口","children":[]},{"level":3,"title":"数据表接口","slug":"数据表接口","link":"#数据表接口","children":[]},{"level":3,"title":"辅助接口","slug":"辅助接口","link":"#辅助接口","children":[]}]},{"level":2,"title":"连接池","slug":"连接池","link":"#连接池","children":[]},{"level":2,"title":"ByteBuffer","slug":"bytebuffer","link":"#bytebuffer","children":[{"level":3,"title":"实现介绍","slug":"实现介绍","link":"#实现介绍","children":[]},{"level":3,"title":"序列化协议","slug":"序列化协议","link":"#序列化协议","children":[]},{"level":3,"title":"CSharp与Java序列化数据时的大小端差异","slug":"csharp与java序列化数据时的大小端差异","link":"#csharp与java序列化数据时的大小端差异","children":[]},{"level":3,"title":"ByteBuffer内存倍增法","slug":"bytebuffer内存倍增法","link":"#bytebuffer内存倍增法","children":[]}]},{"level":2,"title":"异常重连","slug":"异常重连","link":"#异常重连","children":[]}],"git":{"createdTime":1691485974000,"updatedTime":1731322876000,"contributors":[{"name":"W1y1r","username":"W1y1r","email":"150988475+W1y1r@users.noreply.github.com","commits":1,"url":"https://github.com/W1y1r"},{"name":"majialin","username":"majialin","email":"107627937+mal117@users.noreply.github.com","commits":2,"url":"https://github.com/majialin"},{"name":"YuFengLiu","username":"YuFengLiu","email":"38746920+l2280212@users.noreply.github.com","commits":1,"url":"https://github.com/YuFengLiu"},{"name":"CritasWang","username":"CritasWang","email":"critas@outlook.com","commits":1,"url":"https://github.com/CritasWang"}]},"readingTime":{"minutes":7.36,"words":2208},"filePathRelative":"zh/UserGuide/V1.3.0-2/API/Programming-CSharp-Native-API.md","localizedDate":"2023年8月8日","autoDesc":true}');export{c as comp,d as data};
