import{_ as r,c as i,b as n,d as a,e as s,a as o,f as t,r as p,o as d}from"./app-CLygX6ac.js";const c={};function u(h,e){const l=p("RouteLink");return d(),i("div",null,[e[8]||(e[8]=n(`<h1 id="用户自定义函数" tabindex="-1"><a class="header-anchor" href="#用户自定义函数"><span>用户自定义函数</span></a></h1><h2 id="_1-udf-介绍" tabindex="-1"><a class="header-anchor" href="#_1-udf-介绍"><span>1. UDF 介绍</span></a></h2><p>UDF（User Defined Function）即用户自定义函数，IoTDB 提供多种内建的面向时序处理的函数，也支持扩展自定义函数来满足更多的计算需求。</p><p>IoTDB 支持两种类型的 UDF 函数，如下表所示。</p><table style="text-align:left;"><tbody><tr><th>UDF 分类</th><th>数据访问策略</th><th>描述</th></tr><tr><td rowspan="2">UDTF</td><td>MAPPABLE_ROW_BY_ROW</td><td>自定义标量函数，输入 k 列时间序列 1 行数据，输出 1 列时间序列 1 行数据，可用于标量函数出现的任何子句和表达式中，如select子句、where子句等。</td></tr><tr><td>ROW_BY_ROW <br>SLIDING_TIME_WINDOW <br>SLIDING_SIZE_WINDOW <br>SESSION_TIME_WINDOW <br>STATE_WINDOW</td><td>自定义时间序列生成函数，输入 k 列时间序列 m 行数据，输出 1 列时间序列 n 行数据，输入行数 m 可以与输出行数 n 不相同，只能用于SELECT子句中。</td></tr><tr><td>UDAF</td><td>-</td><td>自定义聚合函数，输入 k 列时间序列 m 行数据，输出 1 列时间序列 1 行数据，可用于聚合函数出现的任何子句和表达式中，如select子句、having子句等。</td></tr></tbody></table><h3 id="_1-1-udf-使用" tabindex="-1"><a class="header-anchor" href="#_1-1-udf-使用"><span>1.1 UDF 使用</span></a></h3><p>UDF 的使用方法与普通内建函数类似，可以直接在 SELECT 语句中像调用普通函数一样使用UDF。</p><h4 id="_1-支持的基础-sql-语法" tabindex="-1"><a class="header-anchor" href="#_1-支持的基础-sql-语法"><span>1.支持的基础 SQL 语法</span></a></h4><ul><li><code>SLIMIT</code> / <code>SOFFSET</code></li><li><code>LIMIT</code> / <code>OFFSET</code></li><li>支持值过滤</li><li>支持时间过滤</li></ul><h4 id="_2-带-查询" tabindex="-1"><a class="header-anchor" href="#_2-带-查询"><span>2. 带 * 查询</span></a></h4><p>假定现在有时间序列 <code>root.sg.d1.s1</code>和 <code>root.sg.d1.s2</code>。</p><ul><li><strong>执行<code>SELECT example(*) from root.sg.d1</code></strong></li></ul><p>那么结果集中将包括<code>example(root.sg.d1.s1)</code>和<code>example(root.sg.d1.s2)</code>的结果。</p><ul><li><strong>执行<code>SELECT example(s1, *) from root.sg.d1</code></strong></li></ul><p>那么结果集中将包括<code>example(root.sg.d1.s1, root.sg.d1.s1)</code>和<code>example(root.sg.d1.s1, root.sg.d1.s2)</code>的结果。</p><ul><li><strong>执行<code>SELECT example(*, *) from root.sg.d1</code></strong></li></ul><p>那么结果集中将包括<code>example(root.sg.d1.s1, root.sg.d1.s1)</code>，<code>example(root.sg.d1.s2, root.sg.d1.s1)</code>，<code>example(root.sg.d1.s1, root.sg.d1.s2)</code> 和 <code>example(root.sg.d1.s2, root.sg.d1.s2)</code>的结果。</p><h4 id="_3-带自定义输入参数的查询" tabindex="-1"><a class="header-anchor" href="#_3-带自定义输入参数的查询"><span>3. 带自定义输入参数的查询</span></a></h4><p>可以在进行 UDF 查询的时候，向 UDF 传入任意数量的键值对参数。键值对中的键和值都需要被单引号或者双引号引起来。注意，键值对参数只能在所有时间序列后传入。下面是一组例子：</p><p>示例：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">SELECT</span><span style="color:#ABB2BF;"> example(s1, </span><span style="color:#98C379;">&#39;key1&#39;</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&#39;value1&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;key2&#39;</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&#39;value2&#39;</span><span style="color:#ABB2BF;">), example(*, </span><span style="color:#98C379;">&#39;key3&#39;</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&#39;value3&#39;</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">FROM</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sg</span><span style="color:#ABB2BF;">.d1;</span></span>
<span class="line"><span style="color:#C678DD;">SELECT</span><span style="color:#ABB2BF;"> example(s1, s2, </span><span style="color:#98C379;">&#39;key1&#39;</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&#39;value1&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;key2&#39;</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&#39;value2&#39;</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">FROM</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sg</span><span style="color:#ABB2BF;">.d1;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-与其他查询的嵌套查询" tabindex="-1"><a class="header-anchor" href="#_4-与其他查询的嵌套查询"><span>4. 与其他查询的嵌套查询</span></a></h4><p>示例：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">SELECT</span><span style="color:#ABB2BF;"> s1, s2, example(s1, s2) </span><span style="color:#C678DD;">FROM</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sg</span><span style="color:#ABB2BF;">.d1;</span></span>
<span class="line"><span style="color:#C678DD;">SELECT</span><span style="color:#ABB2BF;"> *, example(*) </span><span style="color:#C678DD;">FROM</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sg</span><span style="color:#ABB2BF;">.d1 </span><span style="color:#C678DD;">DISABLE</span><span style="color:#ABB2BF;"> ALIGN;</span></span>
<span class="line"><span style="color:#C678DD;">SELECT</span><span style="color:#ABB2BF;"> s1 * example(* / s1 + s2) </span><span style="color:#C678DD;">FROM</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sg</span><span style="color:#ABB2BF;">.d1;</span></span>
<span class="line"><span style="color:#C678DD;">SELECT</span><span style="color:#ABB2BF;"> s1, s2, s1 + example(s1, s2), s1 - example(s1 + example(s1, s2) / s2) </span><span style="color:#C678DD;">FROM</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sg</span><span style="color:#ABB2BF;">.d1;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-udf-开发" tabindex="-1"><a class="header-anchor" href="#_2-udf-开发"><span>2. UDF 开发</span></a></h2>`,25)),a("p",null,[e[1]||(e[1]=s("可以参考 UDF函数开发：")),o(l,{to:"/zh/UserGuide/V2.0.1/Tree/User-Manual/UDF-development.html"},{default:t(()=>e[0]||(e[0]=[s("开发指导")])),_:1})]),e[9]||(e[9]=n(`<h2 id="_3-udf-管理" tabindex="-1"><a class="header-anchor" href="#_3-udf-管理"><span>3. UDF 管理</span></a></h2><h3 id="_3-1-udf-注册" tabindex="-1"><a class="header-anchor" href="#_3-1-udf-注册"><span>3.1 UDF 注册</span></a></h3><p>注册一个 UDF 可以按如下流程进行：</p><ol><li>实现一个完整的 UDF 类，假定这个类的全类名为<code>org.apache.iotdb.udf.UDTFExample</code></li><li>将项目打成 JAR 包，如果使用 Maven 管理项目，可以参考 <a href="https://github.com/apache/iotdb/tree/master/example/udf" target="_blank" rel="noopener noreferrer">Maven 项目示例</a>的写法</li><li>进行注册前的准备工作，根据注册方式的不同需要做不同的准备，具体可参考以下例子</li><li>使用以下 SQL 语句注册 UDF</li></ol><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">CREATE</span><span style="color:#C678DD;"> FUNCTION</span><span style="color:#56B6C2;"> &lt;</span><span style="color:#ABB2BF;">UDF-</span><span style="color:#C678DD;">NAME</span><span style="color:#56B6C2;">&gt;</span><span style="color:#C678DD;"> AS</span><span style="color:#56B6C2;"> &lt;</span><span style="color:#ABB2BF;">UDF-CLASS-FULL-PATHNAME</span><span style="color:#56B6C2;">&gt;</span><span style="color:#ABB2BF;"> (</span><span style="color:#C678DD;">USING</span><span style="color:#ABB2BF;"> URI URI-STRING)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="示例-注册名为example的-udf-以下两种注册方式任选其一即可" tabindex="-1"><a class="header-anchor" href="#示例-注册名为example的-udf-以下两种注册方式任选其一即可"><span>示例：注册名为<code>example</code>的 UDF，以下两种注册方式任选其一即可</span></a></h4><h4 id="方式一-手动放置jar包" tabindex="-1"><a class="header-anchor" href="#方式一-手动放置jar包"><span>方式一：手动放置jar包</span></a></h4><p>准备工作：<br> 使用该种方式注册时，需要提前将 JAR 包放置到集群所有节点的 <code>ext/udf</code>目录下（该目录可配置）。</p><p>注册语句：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">CREATE</span><span style="color:#C678DD;"> FUNCTION</span><span style="color:#61AFEF;"> example</span><span style="color:#C678DD;"> AS</span><span style="color:#98C379;"> &#39;org.apache.iotdb.udf.UDTFExample&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="方式二-集群通过uri自动安装jar包" tabindex="-1"><a class="header-anchor" href="#方式二-集群通过uri自动安装jar包"><span>方式二：集群通过URI自动安装jar包</span></a></h4><p>准备工作：<br> 使用该种方式注册时，需要提前将 JAR 包上传到 URI 服务器上并确保执行注册语句的 IoTDB 实例能够访问该 URI 服务器。</p><p>注册语句：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">CREATE</span><span style="color:#C678DD;"> FUNCTION</span><span style="color:#61AFEF;"> example</span><span style="color:#C678DD;"> AS</span><span style="color:#98C379;"> &#39;org.apache.iotdb.udf.UDTFExample&#39;</span><span style="color:#C678DD;"> USING</span><span style="color:#ABB2BF;"> URI </span><span style="color:#98C379;">&#39;http://jar/example.jar&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>IoTDB 会下载 JAR 包并同步到整个集群。</p><h4 id="注意" tabindex="-1"><a class="header-anchor" href="#注意"><span>注意</span></a></h4><ol><li><p>由于 IoTDB 的 UDF 是通过反射技术动态装载的，因此在装载过程中无需启停服务器。</p></li><li><p>UDF 函数名称是大小写不敏感的。</p></li><li><p>请不要给 UDF 函数注册一个内置函数的名字。使用内置函数的名字给 UDF 注册会失败。</p></li><li><p>不同的 JAR 包中最好不要有全类名相同但实现功能逻辑不一样的类。例如 UDF(UDAF/UDTF)：<code>udf1</code>、<code>udf2</code>分别对应资源<code>udf1.jar</code>、<code>udf2.jar</code>。如果两个 JAR 包里都包含一个<code>org.apache.iotdb.udf.UDTFExample</code>类，当同一个 SQL 中同时使用到这两个 UDF 时，系统会随机加载其中一个类，导致 UDF 执行行为不一致。</p></li></ol><h3 id="_3-2-udf-卸载" tabindex="-1"><a class="header-anchor" href="#_3-2-udf-卸载"><span>3.2 UDF 卸载</span></a></h3><p>SQL 语法如下：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">DROP</span><span style="color:#C678DD;"> FUNCTION</span><span style="color:#56B6C2;"> &lt;</span><span style="color:#ABB2BF;">UDF-</span><span style="color:#C678DD;">NAME</span><span style="color:#56B6C2;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>示例：卸载上述例子的 UDF：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">DROP</span><span style="color:#C678DD;"> FUNCTION</span><span style="color:#ABB2BF;"> example</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_3-3-查看所有注册的-udf" tabindex="-1"><a class="header-anchor" href="#_3-3-查看所有注册的-udf"><span>3.3 查看所有注册的 UDF</span></a></h3><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#ABB2BF;">SHOW FUNCTIONS</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_3-4-udf-配置" tabindex="-1"><a class="header-anchor" href="#_3-4-udf-配置"><span>3.4 UDF 配置</span></a></h3><ul><li>允许在 <code>iotdb-system.properties</code> 中配置 udf 的存储目录.：</li></ul><div class="language-properties line-numbers-mode" data-highlighter="shiki" data-ext="properties" data-title="properties" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># UDF lib dir</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">udf_lib_dir</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">ext/udf</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用自定义函数时，提示内存不足，更改 <code>iotdb-system.properties</code> 中下述配置参数并重启服务。</li></ul><div class="language-properties line-numbers-mode" data-highlighter="shiki" data-ext="properties" data-title="properties" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># Used to estimate the memory usage of text fields in a UDF query.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># It is recommended to set this value to be slightly larger than the average length of all text</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># effectiveMode: restart</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># Datatype: int</span></span>
<span class="line"><span style="color:#C678DD;">udf_initial_byte_array_length_for_memory_control</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">48</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># How much memory may be used in ONE UDF query (in MB).</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># The upper limit is 20% of allocated memory for read.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># effectiveMode: restart</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># Datatype: float</span></span>
<span class="line"><span style="color:#C678DD;">udf_memory_budget_in_mb</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">30.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># UDF memory allocation ratio.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># The parameter form is a:b:c, where a, b, and c are integers.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># effectiveMode: restart</span></span>
<span class="line"><span style="color:#C678DD;">udf_reader_transformer_collector_memory_proportion</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">1:1:1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-5-udf-用户权限" tabindex="-1"><a class="header-anchor" href="#_3-5-udf-用户权限"><span>3.5 UDF 用户权限</span></a></h3><p>用户在使用 UDF 时会涉及到 <code>USE_UDF</code> 权限，具备该权限的用户才被允许执行 UDF 注册、卸载和查询操作。</p>`,31)),a("p",null,[e[3]||(e[3]=s("更多用户权限相关的内容，请参考 ")),o(l,{to:"/zh/UserGuide/V2.0.1/Tree/User-Manual/Authority-Management.html##%E6%9D%83%E9%99%90%E7%AE%A1%E7%90%86"},{default:t(()=>e[2]||(e[2]=[s("权限管理语句")])),_:1}),e[4]||(e[4]=s("。"))]),e[10]||(e[10]=a("h2",{id:"_4-udf-函数库",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_4-udf-函数库"},[a("span",null,"4. UDF 函数库")])],-1)),e[11]||(e[11]=a("p",null,"基于用户自定义函数能力，IoTDB 提供了一系列关于时序数据处理的函数，包括数据质量、数据画像、异常检测、 频域分析、数据匹配、数据修复、序列发现、机器学习等，能够满足工业领域对时序数据处理的需求。",-1)),a("p",null,[e[6]||(e[6]=s("可以参考 ")),o(l,{to:"/zh/UserGuide/V2.0.1/Tree/SQL-Manual/UDF-Libraries_apache.html"},{default:t(()=>e[5]||(e[5]=[s("UDF 函数库")])),_:1}),e[7]||(e[7]=s("文档，查找安装步骤及每个函数对应的注册语句，以确保正确注册所有需要的函数。"))]),e[12]||(e[12]=n('<h2 id="_5-常见问题" tabindex="-1"><a class="header-anchor" href="#_5-常见问题"><span>5. 常见问题：</span></a></h2><ol><li>如何修改已经注册的 UDF？</li></ol><p>答：假设 UDF 的名称为<code>example</code>，全类名为<code>org.apache.iotdb.udf.UDTFExample</code>，由<code>example.jar</code>引入</p><ol><li>首先卸载已经注册的<code>example</code>函数，执行<code>DROP FUNCTION example</code></li><li>删除 <code>iotdb-server-1.0.0-all-bin/ext/udf</code> 目录下的<code>example.jar</code></li><li>修改<code>org.apache.iotdb.udf.UDTFExample</code>中的逻辑，重新打包，JAR 包的名字可以仍然为<code>example.jar</code></li><li>将新的 JAR 包上传至 <code>iotdb-server-1.0.0-all-bin/ext/udf</code> 目录下</li><li>装载新的 UDF，执行<code>CREATE FUNCTION example AS &quot;org.apache.iotdb.udf.UDTFExample&quot;</code></li></ol>',4))])}const y=r(c,[["render",u],["__file","User-defined-function_apache.html.vue"]]),D=JSON.parse('{"path":"/zh/UserGuide/V2.0.1/Tree/User-Manual/User-defined-function_apache.html","title":"用户自定义函数","lang":"zh-CN","frontmatter":{"description":"用户自定义函数 1. UDF 介绍 UDF（User Defined Function）即用户自定义函数，IoTDB 提供多种内建的面向时序处理的函数，也支持扩展自定义函数来满足更多的计算需求。 IoTDB 支持两种类型的 UDF 函数，如下表所示。 1.1 UDF 使用 UDF 的使用方法与普通内建函数类似，可以直接在 SELECT 语句中像调用普通...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V2.0.1/Tree/User-Manual/User-defined-function_apache.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V2.0.1/Tree/User-Manual/User-defined-function_apache.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"用户自定义函数"}],["meta",{"property":"og:description","content":"用户自定义函数 1. UDF 介绍 UDF（User Defined Function）即用户自定义函数，IoTDB 提供多种内建的面向时序处理的函数，也支持扩展自定义函数来满足更多的计算需求。 IoTDB 支持两种类型的 UDF 函数，如下表所示。 1.1 UDF 使用 UDF 的使用方法与普通内建函数类似，可以直接在 SELECT 语句中像调用普通..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-01-09T07:17:38.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-09T07:17:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"用户自定义函数\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-01-09T07:17:38.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1. UDF 介绍","slug":"_1-udf-介绍","link":"#_1-udf-介绍","children":[{"level":3,"title":"1.1 UDF 使用","slug":"_1-1-udf-使用","link":"#_1-1-udf-使用","children":[]}]},{"level":2,"title":"2. UDF 开发","slug":"_2-udf-开发","link":"#_2-udf-开发","children":[]},{"level":2,"title":"3. UDF 管理","slug":"_3-udf-管理","link":"#_3-udf-管理","children":[{"level":3,"title":"3.1 UDF 注册","slug":"_3-1-udf-注册","link":"#_3-1-udf-注册","children":[]},{"level":3,"title":"3.2 UDF 卸载","slug":"_3-2-udf-卸载","link":"#_3-2-udf-卸载","children":[]},{"level":3,"title":"3.3 查看所有注册的 UDF","slug":"_3-3-查看所有注册的-udf","link":"#_3-3-查看所有注册的-udf","children":[]},{"level":3,"title":"3.4 UDF 配置","slug":"_3-4-udf-配置","link":"#_3-4-udf-配置","children":[]},{"level":3,"title":"3.5 UDF 用户权限","slug":"_3-5-udf-用户权限","link":"#_3-5-udf-用户权限","children":[]}]},{"level":2,"title":"4. UDF 函数库","slug":"_4-udf-函数库","link":"#_4-udf-函数库","children":[]},{"level":2,"title":"5. 常见问题：","slug":"_5-常见问题","link":"#_5-常见问题","children":[]}],"git":{"createdTime":1731049685000,"updatedTime":1736407058000,"contributors":[{"name":"CritasWang","username":"CritasWang","email":"critas@outlook.com","commits":1,"url":"https://github.com/CritasWang"},{"name":"Mister-Hope","username":"Mister-Hope","email":"mister-hope@outlook.com","commits":1,"url":"https://github.com/Mister-Hope"},{"name":"majialin","username":"majialin","email":"107627937+mal117@users.noreply.github.com","commits":1,"url":"https://github.com/majialin"},{"name":"W1y1r","username":"W1y1r","email":"150988475+W1y1r@users.noreply.github.com","commits":4,"url":"https://github.com/W1y1r"}]},"readingTime":{"minutes":5.52,"words":1655},"filePathRelative":"zh/UserGuide/V2.0.1/Tree/User-Manual/User-defined-function_apache.md","localizedDate":"2024年11月8日","autoDesc":true}');export{y as comp,D as data};
