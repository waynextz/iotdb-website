import{_ as o,c as i,b as t,d as a,e as n,a as l,w as p,r,o as c}from"./app-D8GMfgiK.js";const d={};function u(k,s){const e=r("RouteLink");return c(),i("div",null,[s[45]||(s[45]=t(`<h1 id="数据查询" tabindex="-1"><a class="header-anchor" href="#数据查询"><span>数据查询</span></a></h1><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><h3 id="语法定义" tabindex="-1"><a class="header-anchor" href="#语法定义"><span>语法定义</span></a></h3><p>在 IoTDB 中，使用 <code>SELECT</code> 语句从一条或多条时间序列中查询数据。 下面是 <code>SELECT</code> 语句的语法定义：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token punctuation">[</span>TRACING?<span class="token punctuation">]</span> <span class="token keyword">SELECT</span> </span>
<span class="line">	<span class="token punctuation">[</span><span class="token keyword">LAST</span>?<span class="token punctuation">]</span> selectExpr <span class="token punctuation">(</span><span class="token punctuation">,</span> selectExpr<span class="token punctuation">)</span><span class="token operator">*</span></span>
<span class="line">	<span class="token operator">&lt;</span>fromClause<span class="token operator">&gt;</span> <span class="token keyword">FROM</span> prefixPath <span class="token punctuation">(</span><span class="token punctuation">,</span> prefixPath<span class="token punctuation">)</span><span class="token operator">*</span></span>
<span class="line">	<span class="token operator">&lt;</span>whereClause?<span class="token operator">&gt;</span> <span class="token keyword">WHERE</span> queryFilter</span>
<span class="line">	<span class="token operator">&lt;</span>orderByTimeClause?<span class="token operator">&gt;</span> <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> <span class="token keyword">TIME</span> <span class="token punctuation">[</span><span class="token keyword">ASC</span> <span class="token operator">|</span> <span class="token keyword">DESC</span><span class="token punctuation">]</span></span>
<span class="line">	<span class="token operator">&lt;</span>paginationClause?<span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token keyword">LIMIT</span> <span class="token operator">|</span> SLIMIT<span class="token punctuation">]</span> <span class="token keyword">INT</span> <span class="token punctuation">[</span><span class="token keyword">OFFSET</span> <span class="token operator">|</span> SOFFSET<span class="token punctuation">]</span> <span class="token keyword">INT</span></span>
<span class="line">	<span class="token operator">&lt;</span>groupByLevelClause?<span class="token operator">&gt;</span> <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> <span class="token keyword">LEVEL</span> <span class="token operator">=</span> <span class="token keyword">INT</span></span>
<span class="line">	<span class="token operator">&lt;</span>groupByTimeClause?<span class="token operator">&gt;</span> <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> <span class="token punctuation">(</span><span class="token punctuation">[</span>startTime<span class="token punctuation">,</span> endTime<span class="token punctuation">)</span><span class="token punctuation">,</span> slidingStep<span class="token punctuation">)</span></span>
<span class="line">	<span class="token operator">&lt;</span>fillClause?<span class="token operator">&gt;</span> FILL <span class="token punctuation">(</span><span class="token punctuation">[</span>PREVIOUS<span class="token punctuation">,</span> beforeRange <span class="token operator">|</span> LINEAR<span class="token punctuation">,</span> beforeRange<span class="token punctuation">,</span> afterRange <span class="token operator">|</span> constant<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token operator">&lt;</span>withoutNullClause?<span class="token operator">&gt;</span> WITHOUT <span class="token boolean">NULL</span> <span class="token punctuation">[</span><span class="token keyword">ANY</span> <span class="token operator">|</span> <span class="token keyword">ALL</span><span class="token punctuation">]</span></span>
<span class="line">	<span class="token operator">&lt;</span>alignClause?<span class="token operator">&gt;</span> <span class="token punctuation">[</span>ALIGN <span class="token keyword">BY</span> DEVICE <span class="token operator">|</span> <span class="token keyword">DISABLE</span> ALIGN<span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>常用的子句如下：</p>`,6)),a("ul",null,[a("li",null,[s[1]||(s[1]=n("每个 ")),s[2]||(s[2]=a("code",null,"selectExpr",-1)),s[3]||(s[3]=n(" 对应查询结果的一列，支持时间序列后缀、时间序列生成函数（包括用户自定义函数）、聚合函数、数字常量、算数运算表达式。每个 ")),s[4]||(s[4]=a("code",null,"SELECT",-1)),s[5]||(s[5]=n(" 语句至少应该包含一个 ")),s[6]||(s[6]=a("code",null,"selectExpr",-1)),s[7]||(s[7]=n(" 。关于 ")),s[8]||(s[8]=a("code",null,"selectExpr",-1)),s[9]||(s[9]=n("，详见 ")),l(e,{to:"/zh/UserGuide/V0.13.x/Query-Data/Select-Expression.html"},{default:p(()=>s[0]||(s[0]=[n("选择表达式")])),_:1}),s[10]||(s[10]=n(" 。"))]),s[33]||(s[33]=a("li",null,[a("code",null,"fromClause"),n(" 包含要查询的一个或多个时间序列的前缀。")],-1)),a("li",null,[s[12]||(s[12]=a("code",null,"whereClause",-1)),s[13]||(s[13]=n("（可选）指定了查询的筛选条件 ")),s[14]||(s[14]=a("code",null,"queryFilter",-1)),s[15]||(s[15]=n("。")),s[16]||(s[16]=a("code",null,"queryFilter",-1)),s[17]||(s[17]=n(" 是一个逻辑表达式，查询结果返回计算结果为真的数据点。如果没有指定 ")),s[18]||(s[18]=a("code",null,"whereClaue",-1)),s[19]||(s[19]=n("，则返回序列中所有数据点。关于 ")),s[20]||(s[20]=a("code",null,"queryFilter",-1)),s[21]||(s[21]=n("，详见 ")),l(e,{to:"/zh/UserGuide/V0.13.x/Query-Data/Query-Filter.html"},{default:p(()=>s[11]||(s[11]=[n("查询过滤条件")])),_:1}),s[22]||(s[22]=n(" 。"))]),s[34]||(s[34]=a("li",null,[n("查询结果默认按照时间戳大小升序排列，可以通过 "),a("code",null,"ORDER BY TIME DESC"),n(" 指定结果集按照时间戳大小降序排列。")],-1)),a("li",null,[s[24]||(s[24]=n("当查询结果数据量很大时，可以使用 ")),s[25]||(s[25]=a("code",null,"LIMIT/SLIMIT",-1)),s[26]||(s[26]=n(" 及 ")),s[27]||(s[27]=a("code",null,"OFFSET/SOFFSET",-1)),s[28]||(s[28]=n(" 对结果集进行分页，详见 ")),l(e,{to:"/zh/UserGuide/V0.13.x/Query-Data/Pagination.html"},{default:p(()=>s[23]||(s[23]=[n("查询结果分页")])),_:1}),s[29]||(s[29]=n(" 。"))]),a("li",null,[s[31]||(s[31]=n("查询结果集默认按照时间戳进行对齐，即以时间序列为列，每一行数据各列的时间戳相同。其他结果集对齐方式详见 ")),l(e,{to:"/zh/UserGuide/V0.13.x/Query-Data/Result-Format.html"},{default:p(()=>s[30]||(s[30]=[n("查询结果对齐格式")])),_:1}),s[32]||(s[32]=n(" 。"))])]),s[46]||(s[46]=t(`<h3 id="基本示例" tabindex="-1"><a class="header-anchor" href="#基本示例"><span>基本示例</span></a></h3><h4 id="根据一个时间区间选择一列数据" tabindex="-1"><a class="header-anchor" href="#根据一个时间区间选择一列数据"><span>根据一个时间区间选择一列数据</span></a></h4><p>SQL 语句为：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> temperature <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">08</span>:<span class="token number">00.000</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>其含义为：</p><p>被选择的设备为 ln 集团 wf01 子站 wt01 设备；被选择的时间序列为温度传感器（temperature）；该语句要求选择出该设备在 “2017-11-01T00:08:00.000” 时间点以前的所有温度传感器的值。</p><p>该 SQL 语句的执行结果如下：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+-----------------------------+</span>
<span class="line">|                         Time|root.ln.wf01.wt01.temperature|</span>
<span class="line">+-----------------------------+-----------------------------+</span>
<span class="line">|2017-11-01T00:00:00.000+08:00|                        25.96|</span>
<span class="line">|2017-11-01T00:01:00.000+08:00|                        24.36|</span>
<span class="line">|2017-11-01T00:02:00.000+08:00|                        20.09|</span>
<span class="line">|2017-11-01T00:03:00.000+08:00|                        20.18|</span>
<span class="line">|2017-11-01T00:04:00.000+08:00|                        21.13|</span>
<span class="line">|2017-11-01T00:05:00.000+08:00|                        22.72|</span>
<span class="line">|2017-11-01T00:06:00.000+08:00|                        20.71|</span>
<span class="line">|2017-11-01T00:07:00.000+08:00|                        21.45|</span>
<span class="line">+-----------------------------+-----------------------------+</span>
<span class="line">Total line number = 8</span>
<span class="line">It costs 0.026s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="根据一个时间区间选择多列数据" tabindex="-1"><a class="header-anchor" href="#根据一个时间区间选择多列数据"><span>根据一个时间区间选择多列数据</span></a></h4><p>SQL 语句为：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> <span class="token keyword">status</span><span class="token punctuation">,</span> temperature <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&gt;</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">05</span>:<span class="token number">00.000</span> <span class="token operator">and</span> <span class="token keyword">time</span> <span class="token operator">&lt;</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">12</span>:<span class="token number">00.000</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>其含义为：</p><p>被选择的设备为 ln 集团 wf01 子站 wt01 设备；被选择的时间序列为供电状态（status）和温度传感器（temperature）；该语句要求选择出 “2017-11-01T00:05:00.000” 至 “2017-11-01T00:12:00.000” 之间的所选时间序列的值。</p><p>该 SQL 语句的执行结果如下：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+------------------------+-----------------------------+</span>
<span class="line">|                         Time|root.ln.wf01.wt01.status|root.ln.wf01.wt01.temperature|</span>
<span class="line">+-----------------------------+------------------------+-----------------------------+</span>
<span class="line">|2017-11-01T00:06:00.000+08:00|                   false|                        20.71|</span>
<span class="line">|2017-11-01T00:07:00.000+08:00|                   false|                        21.45|</span>
<span class="line">|2017-11-01T00:08:00.000+08:00|                   false|                        22.58|</span>
<span class="line">|2017-11-01T00:09:00.000+08:00|                   false|                        20.98|</span>
<span class="line">|2017-11-01T00:10:00.000+08:00|                    true|                        25.52|</span>
<span class="line">|2017-11-01T00:11:00.000+08:00|                   false|                        22.91|</span>
<span class="line">+-----------------------------+------------------------+-----------------------------+</span>
<span class="line">Total line number = 6</span>
<span class="line">It costs 0.018s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="按照多个时间区间选择同一设备的多列数据" tabindex="-1"><a class="header-anchor" href="#按照多个时间区间选择同一设备的多列数据"><span>按照多个时间区间选择同一设备的多列数据</span></a></h4><p>IoTDB 支持在一次查询中指定多个时间区间条件，用户可以根据需求随意组合时间区间条件。例如，</p><p>SQL 语句为：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> <span class="token keyword">status</span><span class="token punctuation">,</span> temperature <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01 <span class="token keyword">where</span> <span class="token punctuation">(</span><span class="token keyword">time</span> <span class="token operator">&gt;</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">05</span>:<span class="token number">00.000</span> <span class="token operator">and</span> <span class="token keyword">time</span> <span class="token operator">&lt;</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">12</span>:<span class="token number">00.000</span><span class="token punctuation">)</span> <span class="token operator">or</span> <span class="token punctuation">(</span><span class="token keyword">time</span> <span class="token operator">&gt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T16:<span class="token number">35</span>:<span class="token number">00.000</span> <span class="token operator">and</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T16:<span class="token number">37</span>:<span class="token number">00.000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>其含义为：</p><p>被选择的设备为 ln 集团 wf01 子站 wt01 设备；被选择的时间序列为“供电状态（status）”和“温度传感器（temperature）”；该语句指定了两个不同的时间区间，分别为“2017-11-01T00:05:00.000 至 2017-11-01T00:12:00.000”和“2017-11-01T16:35:00.000 至 2017-11-01T16:37:00.000”；该语句要求选择出满足任一时间区间的被选时间序列的值。</p><p>该 SQL 语句的执行结果如下：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+------------------------+-----------------------------+</span>
<span class="line">|                         Time|root.ln.wf01.wt01.status|root.ln.wf01.wt01.temperature|</span>
<span class="line">+-----------------------------+------------------------+-----------------------------+</span>
<span class="line">|2017-11-01T00:06:00.000+08:00|                   false|                        20.71|</span>
<span class="line">|2017-11-01T00:07:00.000+08:00|                   false|                        21.45|</span>
<span class="line">|2017-11-01T00:08:00.000+08:00|                   false|                        22.58|</span>
<span class="line">|2017-11-01T00:09:00.000+08:00|                   false|                        20.98|</span>
<span class="line">|2017-11-01T00:10:00.000+08:00|                    true|                        25.52|</span>
<span class="line">|2017-11-01T00:11:00.000+08:00|                   false|                        22.91|</span>
<span class="line">|2017-11-01T16:35:00.000+08:00|                    true|                        23.44|</span>
<span class="line">|2017-11-01T16:36:00.000+08:00|                   false|                        21.98|</span>
<span class="line">|2017-11-01T16:37:00.000+08:00|                   false|                        21.93|</span>
<span class="line">+-----------------------------+------------------------+-----------------------------+</span>
<span class="line">Total line number = 9</span>
<span class="line">It costs 0.018s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="按照多个时间区间选择不同设备的多列数据" tabindex="-1"><a class="header-anchor" href="#按照多个时间区间选择不同设备的多列数据"><span>按照多个时间区间选择不同设备的多列数据</span></a></h4><p>该系统支持在一次查询中选择任意列的数据，也就是说，被选择的列可以来源于不同的设备。例如，SQL 语句为：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> wf01<span class="token punctuation">.</span>wt01<span class="token punctuation">.</span><span class="token keyword">status</span><span class="token punctuation">,</span> wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">.</span>hardware <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln <span class="token keyword">where</span> <span class="token punctuation">(</span><span class="token keyword">time</span> <span class="token operator">&gt;</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">05</span>:<span class="token number">00.000</span> <span class="token operator">and</span> <span class="token keyword">time</span> <span class="token operator">&lt;</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">12</span>:<span class="token number">00.000</span><span class="token punctuation">)</span> <span class="token operator">or</span> <span class="token punctuation">(</span><span class="token keyword">time</span> <span class="token operator">&gt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T16:<span class="token number">35</span>:<span class="token number">00.000</span> <span class="token operator">and</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T16:<span class="token number">37</span>:<span class="token number">00.000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>其含义为：</p><p>被选择的时间序列为 “ln 集团 wf01 子站 wt01 设备的供电状态” 以及 “ln 集团 wf02 子站 wt02 设备的硬件版本”；该语句指定了两个时间区间，分别为 “2017-11-01T00:05:00.000 至 2017-11-01T00:12:00.000” 和 “2017-11-01T16:35:00.000 至 2017-11-01T16:37:00.000”；该语句要求选择出满足任意时间区间的被选时间序列的值。</p><p>该 SQL 语句的执行结果如下：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+------------------------+--------------------------+</span>
<span class="line">|                         Time|root.ln.wf01.wt01.status|root.ln.wf02.wt02.hardware|</span>
<span class="line">+-----------------------------+------------------------+--------------------------+</span>
<span class="line">|2017-11-01T00:06:00.000+08:00|                   false|                        v1|</span>
<span class="line">|2017-11-01T00:07:00.000+08:00|                   false|                        v1|</span>
<span class="line">|2017-11-01T00:08:00.000+08:00|                   false|                        v1|</span>
<span class="line">|2017-11-01T00:09:00.000+08:00|                   false|                        v1|</span>
<span class="line">|2017-11-01T00:10:00.000+08:00|                    true|                        v2|</span>
<span class="line">|2017-11-01T00:11:00.000+08:00|                   false|                        v1|</span>
<span class="line">|2017-11-01T16:35:00.000+08:00|                    true|                        v2|</span>
<span class="line">|2017-11-01T16:36:00.000+08:00|                   false|                        v1|</span>
<span class="line">|2017-11-01T16:37:00.000+08:00|                   false|                        v1|</span>
<span class="line">+-----------------------------+------------------------+--------------------------+</span>
<span class="line">Total line number = 9</span>
<span class="line">It costs 0.014s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="根据时间降序返回结果集" tabindex="-1"><a class="header-anchor" href="#根据时间降序返回结果集"><span>根据时间降序返回结果集</span></a></h4><p>IoTDB 支持 <code>order by time</code> 语句，用于对结果按照时间进行降序展示。例如，SQL 语句为：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&gt;</span> <span class="token number">1</span> <span class="token keyword">order</span> <span class="token keyword">by</span> <span class="token keyword">time</span> <span class="token keyword">desc</span> <span class="token keyword">limit</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>语句执行的结果为：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+--------------------------+------------------------+-----------------------------+------------------------+</span>
<span class="line">|                         Time|root.ln.wf02.wt02.hardware|root.ln.wf02.wt02.status|root.ln.wf01.wt01.temperature|root.ln.wf01.wt01.status|</span>
<span class="line">+-----------------------------+--------------------------+------------------------+-----------------------------+------------------------+</span>
<span class="line">|2017-11-07T23:59:00.000+08:00|                        v1|                   false|                        21.07|                   false|</span>
<span class="line">|2017-11-07T23:58:00.000+08:00|                        v1|                   false|                        22.93|                   false|</span>
<span class="line">|2017-11-07T23:57:00.000+08:00|                        v2|                    true|                        24.39|                    true|</span>
<span class="line">|2017-11-07T23:56:00.000+08:00|                        v2|                    true|                        24.44|                    true|</span>
<span class="line">|2017-11-07T23:55:00.000+08:00|                        v2|                    true|                         25.9|                    true|</span>
<span class="line">|2017-11-07T23:54:00.000+08:00|                        v1|                   false|                        22.52|                   false|</span>
<span class="line">|2017-11-07T23:53:00.000+08:00|                        v2|                    true|                        24.58|                    true|</span>
<span class="line">|2017-11-07T23:52:00.000+08:00|                        v1|                   false|                        20.18|                   false|</span>
<span class="line">|2017-11-07T23:51:00.000+08:00|                        v1|                   false|                        22.24|                   false|</span>
<span class="line">|2017-11-07T23:50:00.000+08:00|                        v2|                    true|                         23.7|                    true|</span>
<span class="line">+-----------------------------+--------------------------+------------------------+-----------------------------+------------------------+</span>
<span class="line">Total line number = 10</span>
<span class="line">It costs 0.016s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用方式" tabindex="-1"><a class="header-anchor" href="#使用方式"><span>使用方式</span></a></h3><p>数据查询语句支持在 SQL 命令行终端、JDBC、JAVA / C++ / Python / Go 等编程语言 API、RESTful API 中使用。</p>`,37)),a("ul",null,[a("li",null,[a("p",null,[s[36]||(s[36]=n("在 SQL 命令行终端中执行查询语句：启动 SQL 命令行终端，直接输入查询语句执行即可，详见 ")),l(e,{to:"/zh/UserGuide/V0.13.x/QuickStart/Command-Line-Interface.html"},{default:p(()=>s[35]||(s[35]=[n("SQL 命令行终端")])),_:1}),s[37]||(s[37]=n("。"))])]),a("li",null,[a("p",null,[s[39]||(s[39]=n("在 JDBC 中执行查询语句，详见 ")),l(e,{to:"/zh/UserGuide/V0.13.x/API/Programming-JDBC.html"},{default:p(()=>s[38]||(s[38]=[n("JDBC")])),_:1}),s[40]||(s[40]=n(" 。"))])]),s[44]||(s[44]=t(`<li><p>在 JAVA / C++ / Python / Go 等编程语言 API 中执行查询语句，详见应用编程接口一章相关文档。接口原型如下：</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token class-name">SessionDataSet</span> <span class="token function">executeQueryStatement</span><span class="token punctuation">(</span><span class="token class-name">String</span> sql<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li>`,1)),a("li",null,[a("p",null,[s[42]||(s[42]=n("在 RESTful API 中使用，详见 ")),l(e,{to:"/zh/UserGuide/V0.13.x/API/RestService.html"},{default:p(()=>s[41]||(s[41]=[n("HTTP API")])),_:1}),s[43]||(s[43]=n(" 。"))])])])])}const v=o(d,[["render",u],["__file","Overview.html.vue"]]),b=JSON.parse('{"path":"/zh/UserGuide/V0.13.x/Query-Data/Overview.html","title":"数据查询","lang":"zh-CN","frontmatter":{"description":"数据查询 概述 语法定义 在 IoTDB 中，使用 SELECT 语句从一条或多条时间序列中查询数据。 下面是 SELECT 语句的语法定义： 常用的子句如下： 每个 selectExpr 对应查询结果的一列，支持时间序列后缀、时间序列生成函数（包括用户自定义函数）、聚合函数、数字常量、算数运算表达式。每个 SELECT 语句至少应该包含一个 sele...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V0.13.x/Query-Data/Overview.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Query-Data/Overview.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"数据查询"}],["meta",{"property":"og:description","content":"数据查询 概述 语法定义 在 IoTDB 中，使用 SELECT 语句从一条或多条时间序列中查询数据。 下面是 SELECT 语句的语法定义： 常用的子句如下： 每个 selectExpr 对应查询结果的一列，支持时间序列后缀、时间序列生成函数（包括用户自定义函数）、聚合函数、数字常量、算数运算表达式。每个 SELECT 语句至少应该包含一个 sele..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"数据查询\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[{"level":3,"title":"语法定义","slug":"语法定义","link":"#语法定义","children":[]},{"level":3,"title":"基本示例","slug":"基本示例","link":"#基本示例","children":[]},{"level":3,"title":"使用方式","slug":"使用方式","link":"#使用方式","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":6.13,"words":1838},"filePathRelative":"zh/UserGuide/V0.13.x/Query-Data/Overview.md","localizedDate":"2023年7月10日","autoDesc":true}');export{v as comp,b as data};
