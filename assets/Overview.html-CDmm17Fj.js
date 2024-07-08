import{_ as p,r as o,o as r,c as i,b as n,d as s,a as e,w as t,e as l}from"./app-DxurNv9d.js";const c={},d=l(`<h1 id="数据查询" tabindex="-1"><a class="header-anchor" href="#数据查询"><span>数据查询</span></a></h1><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><h3 id="语法定义" tabindex="-1"><a class="header-anchor" href="#语法定义"><span>语法定义</span></a></h3><p>在 IoTDB 中，使用 <code>SELECT</code> 语句从一条或多条时间序列中查询数据。 下面是 <code>SELECT</code> 语句的语法定义：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token punctuation">[</span>TRACING?<span class="token punctuation">]</span> <span class="token keyword">SELECT</span> 
	<span class="token punctuation">[</span><span class="token keyword">LAST</span>?<span class="token punctuation">]</span> selectExpr <span class="token punctuation">(</span><span class="token punctuation">,</span> selectExpr<span class="token punctuation">)</span><span class="token operator">*</span>
	<span class="token operator">&lt;</span>fromClause<span class="token operator">&gt;</span> <span class="token keyword">FROM</span> prefixPath <span class="token punctuation">(</span><span class="token punctuation">,</span> prefixPath<span class="token punctuation">)</span><span class="token operator">*</span>
	<span class="token operator">&lt;</span>whereClause?<span class="token operator">&gt;</span> <span class="token keyword">WHERE</span> queryFilter
	<span class="token operator">&lt;</span>orderByTimeClause?<span class="token operator">&gt;</span> <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> <span class="token keyword">TIME</span> <span class="token punctuation">[</span><span class="token keyword">ASC</span> <span class="token operator">|</span> <span class="token keyword">DESC</span><span class="token punctuation">]</span>
	<span class="token operator">&lt;</span>paginationClause?<span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token keyword">LIMIT</span> <span class="token operator">|</span> SLIMIT<span class="token punctuation">]</span> <span class="token keyword">INT</span> <span class="token punctuation">[</span><span class="token keyword">OFFSET</span> <span class="token operator">|</span> SOFFSET<span class="token punctuation">]</span> <span class="token keyword">INT</span>
	<span class="token operator">&lt;</span>groupByLevelClause?<span class="token operator">&gt;</span> <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> <span class="token keyword">LEVEL</span> <span class="token operator">=</span> <span class="token keyword">INT</span>
	<span class="token operator">&lt;</span>groupByTimeClause?<span class="token operator">&gt;</span> <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> <span class="token punctuation">(</span><span class="token punctuation">[</span>startTime<span class="token punctuation">,</span> endTime<span class="token punctuation">)</span><span class="token punctuation">,</span> slidingStep<span class="token punctuation">)</span>
	<span class="token operator">&lt;</span>fillClause?<span class="token operator">&gt;</span> FILL <span class="token punctuation">(</span><span class="token punctuation">[</span>PREVIOUS<span class="token punctuation">,</span> beforeRange <span class="token operator">|</span> LINEAR<span class="token punctuation">,</span> beforeRange<span class="token punctuation">,</span> afterRange <span class="token operator">|</span> constant<span class="token punctuation">]</span><span class="token punctuation">)</span>
	<span class="token operator">&lt;</span>withoutNullClause?<span class="token operator">&gt;</span> WITHOUT <span class="token boolean">NULL</span> <span class="token punctuation">[</span><span class="token keyword">ANY</span> <span class="token operator">|</span> <span class="token keyword">ALL</span><span class="token punctuation">]</span>
	<span class="token operator">&lt;</span>alignClause?<span class="token operator">&gt;</span> <span class="token punctuation">[</span>ALIGN <span class="token keyword">BY</span> DEVICE <span class="token operator">|</span> <span class="token keyword">DISABLE</span> ALIGN<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>常用的子句如下：</p>`,6),u=n("code",null,"selectExpr",-1),k=n("code",null,"SELECT",-1),m=n("code",null,"selectExpr",-1),v=n("code",null,"selectExpr",-1),b=n("li",null,[n("code",null,"fromClause"),s(" 包含要查询的一个或多个时间序列的前缀。")],-1),h=n("code",null,"whereClause",-1),T=n("code",null,"queryFilter",-1),w=n("code",null,"queryFilter",-1),f=n("code",null,"whereClaue",-1),g=n("code",null,"queryFilter",-1),y=n("li",null,[s("查询结果默认按照时间戳大小升序排列，可以通过 "),n("code",null,"ORDER BY TIME DESC"),s(" 指定结果集按照时间戳大小降序排列。")],-1),x=n("code",null,"LIMIT/SLIMIT",-1),_=n("code",null,"OFFSET/SOFFSET",-1),E=l(`<h3 id="基本示例" tabindex="-1"><a class="header-anchor" href="#基本示例"><span>基本示例</span></a></h3><h4 id="根据一个时间区间选择一列数据" tabindex="-1"><a class="header-anchor" href="#根据一个时间区间选择一列数据"><span>根据一个时间区间选择一列数据</span></a></h4><p>SQL 语句为：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> temperature <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">08</span>:<span class="token number">00.000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其含义为：</p><p>被选择的设备为 ln 集团 wf01 子站 wt01 设备；被选择的时间序列为温度传感器（temperature）；该语句要求选择出该设备在 “2017-11-01T00:08:00.000” 时间点以前的所有温度传感器的值。</p><p>该 SQL 语句的执行结果如下：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+-----------------------------+
|                         Time|root.ln.wf01.wt01.temperature|
+-----------------------------+-----------------------------+
|2017-11-01T00:00:00.000+08:00|                        25.96|
|2017-11-01T00:01:00.000+08:00|                        24.36|
|2017-11-01T00:02:00.000+08:00|                        20.09|
|2017-11-01T00:03:00.000+08:00|                        20.18|
|2017-11-01T00:04:00.000+08:00|                        21.13|
|2017-11-01T00:05:00.000+08:00|                        22.72|
|2017-11-01T00:06:00.000+08:00|                        20.71|
|2017-11-01T00:07:00.000+08:00|                        21.45|
+-----------------------------+-----------------------------+
Total line number = 8
It costs 0.026s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="根据一个时间区间选择多列数据" tabindex="-1"><a class="header-anchor" href="#根据一个时间区间选择多列数据"><span>根据一个时间区间选择多列数据</span></a></h4><p>SQL 语句为：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token keyword">status</span><span class="token punctuation">,</span> temperature <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&gt;</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">05</span>:<span class="token number">00.000</span> <span class="token operator">and</span> <span class="token keyword">time</span> <span class="token operator">&lt;</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">12</span>:<span class="token number">00.000</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其含义为：</p><p>被选择的设备为 ln 集团 wf01 子站 wt01 设备；被选择的时间序列为供电状态（status）和温度传感器（temperature）；该语句要求选择出 “2017-11-01T00:05:00.000” 至 “2017-11-01T00:12:00.000” 之间的所选时间序列的值。</p><p>该 SQL 语句的执行结果如下：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+------------------------+-----------------------------+
|                         Time|root.ln.wf01.wt01.status|root.ln.wf01.wt01.temperature|
+-----------------------------+------------------------+-----------------------------+
|2017-11-01T00:06:00.000+08:00|                   false|                        20.71|
|2017-11-01T00:07:00.000+08:00|                   false|                        21.45|
|2017-11-01T00:08:00.000+08:00|                   false|                        22.58|
|2017-11-01T00:09:00.000+08:00|                   false|                        20.98|
|2017-11-01T00:10:00.000+08:00|                    true|                        25.52|
|2017-11-01T00:11:00.000+08:00|                   false|                        22.91|
+-----------------------------+------------------------+-----------------------------+
Total line number = 6
It costs 0.018s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="按照多个时间区间选择同一设备的多列数据" tabindex="-1"><a class="header-anchor" href="#按照多个时间区间选择同一设备的多列数据"><span>按照多个时间区间选择同一设备的多列数据</span></a></h4><p>IoTDB 支持在一次查询中指定多个时间区间条件，用户可以根据需求随意组合时间区间条件。例如，</p><p>SQL 语句为：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token keyword">status</span><span class="token punctuation">,</span> temperature <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01 <span class="token keyword">where</span> <span class="token punctuation">(</span><span class="token keyword">time</span> <span class="token operator">&gt;</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">05</span>:<span class="token number">00.000</span> <span class="token operator">and</span> <span class="token keyword">time</span> <span class="token operator">&lt;</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">12</span>:<span class="token number">00.000</span><span class="token punctuation">)</span> <span class="token operator">or</span> <span class="token punctuation">(</span><span class="token keyword">time</span> <span class="token operator">&gt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T16:<span class="token number">35</span>:<span class="token number">00.000</span> <span class="token operator">and</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T16:<span class="token number">37</span>:<span class="token number">00.000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其含义为：</p><p>被选择的设备为 ln 集团 wf01 子站 wt01 设备；被选择的时间序列为“供电状态（status）”和“温度传感器（temperature）”；该语句指定了两个不同的时间区间，分别为“2017-11-01T00:05:00.000 至 2017-11-01T00:12:00.000”和“2017-11-01T16:35:00.000 至 2017-11-01T16:37:00.000”；该语句要求选择出满足任一时间区间的被选时间序列的值。</p><p>该 SQL 语句的执行结果如下：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+------------------------+-----------------------------+
|                         Time|root.ln.wf01.wt01.status|root.ln.wf01.wt01.temperature|
+-----------------------------+------------------------+-----------------------------+
|2017-11-01T00:06:00.000+08:00|                   false|                        20.71|
|2017-11-01T00:07:00.000+08:00|                   false|                        21.45|
|2017-11-01T00:08:00.000+08:00|                   false|                        22.58|
|2017-11-01T00:09:00.000+08:00|                   false|                        20.98|
|2017-11-01T00:10:00.000+08:00|                    true|                        25.52|
|2017-11-01T00:11:00.000+08:00|                   false|                        22.91|
|2017-11-01T16:35:00.000+08:00|                    true|                        23.44|
|2017-11-01T16:36:00.000+08:00|                   false|                        21.98|
|2017-11-01T16:37:00.000+08:00|                   false|                        21.93|
+-----------------------------+------------------------+-----------------------------+
Total line number = 9
It costs 0.018s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="按照多个时间区间选择不同设备的多列数据" tabindex="-1"><a class="header-anchor" href="#按照多个时间区间选择不同设备的多列数据"><span>按照多个时间区间选择不同设备的多列数据</span></a></h4><p>该系统支持在一次查询中选择任意列的数据，也就是说，被选择的列可以来源于不同的设备。例如，SQL 语句为：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> wf01<span class="token punctuation">.</span>wt01<span class="token punctuation">.</span><span class="token keyword">status</span><span class="token punctuation">,</span> wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">.</span>hardware <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln <span class="token keyword">where</span> <span class="token punctuation">(</span><span class="token keyword">time</span> <span class="token operator">&gt;</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">05</span>:<span class="token number">00.000</span> <span class="token operator">and</span> <span class="token keyword">time</span> <span class="token operator">&lt;</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">12</span>:<span class="token number">00.000</span><span class="token punctuation">)</span> <span class="token operator">or</span> <span class="token punctuation">(</span><span class="token keyword">time</span> <span class="token operator">&gt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T16:<span class="token number">35</span>:<span class="token number">00.000</span> <span class="token operator">and</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T16:<span class="token number">37</span>:<span class="token number">00.000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其含义为：</p><p>被选择的时间序列为 “ln 集团 wf01 子站 wt01 设备的供电状态” 以及 “ln 集团 wf02 子站 wt02 设备的硬件版本”；该语句指定了两个时间区间，分别为 “2017-11-01T00:05:00.000 至 2017-11-01T00:12:00.000” 和 “2017-11-01T16:35:00.000 至 2017-11-01T16:37:00.000”；该语句要求选择出满足任意时间区间的被选时间序列的值。</p><p>该 SQL 语句的执行结果如下：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+------------------------+--------------------------+
|                         Time|root.ln.wf01.wt01.status|root.ln.wf02.wt02.hardware|
+-----------------------------+------------------------+--------------------------+
|2017-11-01T00:06:00.000+08:00|                   false|                        v1|
|2017-11-01T00:07:00.000+08:00|                   false|                        v1|
|2017-11-01T00:08:00.000+08:00|                   false|                        v1|
|2017-11-01T00:09:00.000+08:00|                   false|                        v1|
|2017-11-01T00:10:00.000+08:00|                    true|                        v2|
|2017-11-01T00:11:00.000+08:00|                   false|                        v1|
|2017-11-01T16:35:00.000+08:00|                    true|                        v2|
|2017-11-01T16:36:00.000+08:00|                   false|                        v1|
|2017-11-01T16:37:00.000+08:00|                   false|                        v1|
+-----------------------------+------------------------+--------------------------+
Total line number = 9
It costs 0.014s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="根据时间降序返回结果集" tabindex="-1"><a class="header-anchor" href="#根据时间降序返回结果集"><span>根据时间降序返回结果集</span></a></h4><p>IoTDB 支持 <code>order by time</code> 语句，用于对结果按照时间进行降序展示。例如，SQL 语句为：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&gt;</span> <span class="token number">1</span> <span class="token keyword">order</span> <span class="token keyword">by</span> <span class="token keyword">time</span> <span class="token keyword">desc</span> <span class="token keyword">limit</span> <span class="token number">10</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>语句执行的结果为：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+--------------------------+------------------------+-----------------------------+------------------------+
|                         Time|root.ln.wf02.wt02.hardware|root.ln.wf02.wt02.status|root.ln.wf01.wt01.temperature|root.ln.wf01.wt01.status|
+-----------------------------+--------------------------+------------------------+-----------------------------+------------------------+
|2017-11-07T23:59:00.000+08:00|                        v1|                   false|                        21.07|                   false|
|2017-11-07T23:58:00.000+08:00|                        v1|                   false|                        22.93|                   false|
|2017-11-07T23:57:00.000+08:00|                        v2|                    true|                        24.39|                    true|
|2017-11-07T23:56:00.000+08:00|                        v2|                    true|                        24.44|                    true|
|2017-11-07T23:55:00.000+08:00|                        v2|                    true|                         25.9|                    true|
|2017-11-07T23:54:00.000+08:00|                        v1|                   false|                        22.52|                   false|
|2017-11-07T23:53:00.000+08:00|                        v2|                    true|                        24.58|                    true|
|2017-11-07T23:52:00.000+08:00|                        v1|                   false|                        20.18|                   false|
|2017-11-07T23:51:00.000+08:00|                        v1|                   false|                        22.24|                   false|
|2017-11-07T23:50:00.000+08:00|                        v2|                    true|                         23.7|                    true|
+-----------------------------+--------------------------+------------------------+-----------------------------+------------------------+
Total line number = 10
It costs 0.016s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用方式" tabindex="-1"><a class="header-anchor" href="#使用方式"><span>使用方式</span></a></h3><p>数据查询语句支持在 SQL 命令行终端、JDBC、JAVA / C++ / Python / Go 等编程语言 API、RESTful API 中使用。</p>`,37),S=l(`<li><p>在 JAVA / C++ / Python / Go 等编程语言 API 中执行查询语句，详见应用编程接口一章相关文档。接口原型如下：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">SessionDataSet</span> <span class="token function">executeQueryStatement</span><span class="token punctuation">(</span><span class="token class-name">String</span> sql<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>`,1);function L(I,C){const a=o("RouteLink");return r(),i("div",null,[d,n("ul",null,[n("li",null,[s("每个 "),u,s(" 对应查询结果的一列，支持时间序列后缀、时间序列生成函数（包括用户自定义函数）、聚合函数、数字常量、算数运算表达式。每个 "),k,s(" 语句至少应该包含一个 "),m,s(" 。关于 "),v,s("，详见 "),e(a,{to:"/zh/UserGuide/V0.13.x/Query-Data/Select-Expression.html"},{default:t(()=>[s("选择表达式")]),_:1}),s(" 。")]),b,n("li",null,[h,s("（可选）指定了查询的筛选条件 "),T,s("。"),w,s(" 是一个逻辑表达式，查询结果返回计算结果为真的数据点。如果没有指定 "),f,s("，则返回序列中所有数据点。关于 "),g,s("，详见 "),e(a,{to:"/zh/UserGuide/V0.13.x/Query-Data/Query-Filter.html"},{default:t(()=>[s("查询过滤条件")]),_:1}),s(" 。")]),y,n("li",null,[s("当查询结果数据量很大时，可以使用 "),x,s(" 及 "),_,s(" 对结果集进行分页，详见 "),e(a,{to:"/zh/UserGuide/V0.13.x/Query-Data/Pagination.html"},{default:t(()=>[s("查询结果分页")]),_:1}),s(" 。")]),n("li",null,[s("查询结果集默认按照时间戳进行对齐，即以时间序列为列，每一行数据各列的时间戳相同。其他结果集对齐方式详见 "),e(a,{to:"/zh/UserGuide/V0.13.x/Query-Data/Result-Format.html"},{default:t(()=>[s("查询结果对齐格式")]),_:1}),s(" 。")])]),E,n("ul",null,[n("li",null,[n("p",null,[s("在 SQL 命令行终端中执行查询语句：启动 SQL 命令行终端，直接输入查询语句执行即可，详见 "),e(a,{to:"/zh/UserGuide/V0.13.x/QuickStart/Command-Line-Interface.html"},{default:t(()=>[s("SQL 命令行终端")]),_:1}),s("。")])]),n("li",null,[n("p",null,[s("在 JDBC 中执行查询语句，详见 "),e(a,{to:"/zh/UserGuide/V0.13.x/API/Programming-JDBC.html"},{default:t(()=>[s("JDBC")]),_:1}),s(" 。")])]),S,n("li",null,[n("p",null,[s("在 RESTful API 中使用，详见 "),e(a,{to:"/zh/UserGuide/V0.13.x/API/RestService.html"},{default:t(()=>[s("HTTP API")]),_:1}),s(" 。")])])])])}const D=p(c,[["render",L],["__file","Overview.html.vue"]]),Q=JSON.parse('{"path":"/zh/UserGuide/V0.13.x/Query-Data/Overview.html","title":"数据查询","lang":"zh-CN","frontmatter":{"description":"数据查询 概述 语法定义 在 IoTDB 中，使用 SELECT 语句从一条或多条时间序列中查询数据。 下面是 SELECT 语句的语法定义： 常用的子句如下： 每个 selectExpr 对应查询结果的一列，支持时间序列后缀、时间序列生成函数（包括用户自定义函数）、聚合函数、数字常量、算数运算表达式。每个 SELECT 语句至少应该包含一个 sele...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V0.13.x/Query-Data/Overview.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Query-Data/Overview.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"数据查询"}],["meta",{"property":"og:description","content":"数据查询 概述 语法定义 在 IoTDB 中，使用 SELECT 语句从一条或多条时间序列中查询数据。 下面是 SELECT 语句的语法定义： 常用的子句如下： 每个 selectExpr 对应查询结果的一列，支持时间序列后缀、时间序列生成函数（包括用户自定义函数）、聚合函数、数字常量、算数运算表达式。每个 SELECT 语句至少应该包含一个 sele..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"数据查询\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[{"level":3,"title":"语法定义","slug":"语法定义","link":"#语法定义","children":[]},{"level":3,"title":"基本示例","slug":"基本示例","link":"#基本示例","children":[]},{"level":3,"title":"使用方式","slug":"使用方式","link":"#使用方式","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":6.13,"words":1838},"filePathRelative":"zh/UserGuide/V0.13.x/Query-Data/Overview.md","localizedDate":"2023年7月10日","autoDesc":true}');export{D as comp,Q as data};
