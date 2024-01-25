import{_ as l,r as i,o as p,c,a as u,d as s,e as n,b as e,w as t,f as o}from"./app-F10OrnbD.js";const r={},d=o(`<h1 id="选择表达式" tabindex="-1"><a class="header-anchor" href="#选择表达式" aria-hidden="true">#</a> 选择表达式</h1><p><code>SELECT</code> 子句指定查询的输出，由若干个 <code>selectExpr</code> 组成。 每个 <code>selectExpr</code> 定义了查询结果中的一列或多列。</p><p><strong><code>selectExpr</code> 是一个由时间序列路径后缀、常量、函数和运算符组成的表达式。即 <code>selectExpr</code> 中可以包含：</strong></p><ul><li>时间序列路径后缀（支持使用通配符）</li><li>运算符 <ul><li>算数运算符</li><li>比较运算符</li><li>逻辑运算符</li></ul></li><li>函数 <ul><li>聚合函数</li><li>时间序列生成函数（包括内置函数和用户自定义函数）</li></ul></li><li>常量</li></ul><h2 id="使用别名" tabindex="-1"><a class="header-anchor" href="#使用别名" aria-hidden="true">#</a> 使用别名</h2><p>由于 IoTDB 独特的数据模型，在每个传感器前都附带有设备等诸多额外信息。有时，我们只针对某个具体设备查询，而这些前缀信息频繁显示造成了冗余，影响了结果集的显示与分析。</p><p>IoTDB 支持使用<code>AS</code>为查询结果集中的列指定别名。</p><p><strong>示例：</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> s1 <span class="token keyword">as</span> temperature<span class="token punctuation">,</span> s2 <span class="token keyword">as</span> speed <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结果集将显示为：</p><table><thead><tr><th>Time</th><th>temperature</th><th>speed</th></tr></thead><tbody><tr><td>...</td><td>...</td><td>...</td></tr></tbody></table><h2 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符" aria-hidden="true">#</a> 运算符</h2>`,12),v=o(`<h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h2><h3 id="聚合函数" tabindex="-1"><a class="header-anchor" href="#聚合函数" aria-hidden="true">#</a> 聚合函数</h3><p>聚合函数是多对一函数。它们对一组值进行聚合计算，得到单个聚合结果。</p><p><strong>包含聚合函数的查询称为聚合查询</strong>，否则称为时间序列查询。</p><p><strong>注意：聚合查询和时间序列查询不能混合使用。</strong> 下列语句是不支持的：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> s1<span class="token punctuation">,</span> <span class="token function">count</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d1<span class="token punctuation">;</span>
<span class="token keyword">select</span> sin<span class="token punctuation">(</span>s1<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">count</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d1<span class="token punctuation">;</span>
<span class="token keyword">select</span> s1<span class="token punctuation">,</span> <span class="token function">count</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d1 <span class="token keyword">group</span> <span class="token keyword">by</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">10</span>ms<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),k=s("h3",{id:"时间序列生成函数",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#时间序列生成函数","aria-hidden":"true"},"#"),n(" 时间序列生成函数")],-1),m=s("p",null,"时间序列生成函数接受若干原始时间序列作为输入，产生一列时间序列输出。与聚合函数不同的是，时间序列生成函数的结果集带有时间戳列。",-1),b=s("p",null,"所有的时间序列生成函数都可以接受 * 作为输入，都可以与原始时间序列查询混合进行。",-1),g=s("h4",{id:"内置时间序列生成函数",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#内置时间序列生成函数","aria-hidden":"true"},"#"),n(" 内置时间序列生成函数")],-1),h=s("h4",{id:"自定义时间序列生成函数",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#自定义时间序列生成函数","aria-hidden":"true"},"#"),n(" 自定义时间序列生成函数")],-1),w=o(`<h2 id="嵌套表达式举例" tabindex="-1"><a class="header-anchor" href="#嵌套表达式举例" aria-hidden="true">#</a> 嵌套表达式举例</h2><p>IoTDB 支持嵌套表达式，由于聚合查询和时间序列查询不能在一条查询语句中同时出现，我们将支持的嵌套表达式分为时间序列查询嵌套表达式和聚合查询嵌套表达式两类。</p><h3 id="时间序列查询嵌套表达式" tabindex="-1"><a class="header-anchor" href="#时间序列查询嵌套表达式" aria-hidden="true">#</a> 时间序列查询嵌套表达式</h3><p>IoTDB 支持在 <code>SELECT</code> 子句中计算由<strong>时间序列、常量、时间序列生成函数（包括用户自定义函数）和运算符</strong>组成的任意嵌套表达式。</p><p><strong>说明：</strong></p><ul><li>当某个时间戳下左操作数和右操作数都不为空（<code>null</code>）时，表达式才会有结果，否则表达式值为<code>null</code>，且默认不出现在结果集中。</li><li>如果表达式中某个操作数对应多条时间序列（如通配符 <code>*</code>），那么每条时间序列对应的结果都会出现在结果集中（按照笛卡尔积形式）。</li></ul><p><strong>示例 1：</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> a<span class="token punctuation">,</span>
       b<span class="token punctuation">,</span>
       <span class="token punctuation">(</span><span class="token punctuation">(</span>a <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">1.5</span><span class="token punctuation">,</span>
       sin<span class="token punctuation">(</span>a <span class="token operator">+</span> sin<span class="token punctuation">(</span>a <span class="token operator">+</span> sin<span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
       <span class="token operator">-</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>sin<span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span> <span class="token operator">*</span> sin<span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span> <span class="token operator">+</span> cos<span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span> <span class="token operator">*</span> cos<span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span>
<span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+----------+----------+----------------------------------------+---------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                         Time|root.sg1.a|root.sg1.b|((((root.sg1.a + 1) * 2) - 1) % 2) + 1.5|sin(root.sg1.a + sin(root.sg1.a + sin(root.sg1.b)))|(-root.sg1.a + root.sg1.b * ((sin(root.sg1.a + root.sg1.b) * sin(root.sg1.a + root.sg1.b)) + (cos(root.sg1.a + root.sg1.b) * cos(root.sg1.a + root.sg1.b)))) + 1|
+-----------------------------+----------+----------+----------------------------------------+---------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------+
|1970-01-01T08:00:00.010+08:00|         1|         1|                                     2.5|                                 0.9238430524420609|                                                                                                                      -1.0|
|1970-01-01T08:00:00.020+08:00|         2|         2|                                     2.5|                                 0.7903505371876317|                                                                                                                      -3.0|
|1970-01-01T08:00:00.030+08:00|         3|         3|                                     2.5|                                0.14065207680386618|                                                                                                                      -5.0|
|1970-01-01T08:00:00.040+08:00|         4|      null|                                     2.5|                                               null|                                                                                                                      null|
|1970-01-01T08:00:00.050+08:00|      null|         5|                                    null|                                               null|                                                                                                                      null|
|1970-01-01T08:00:00.060+08:00|         6|         6|                                     2.5|                                -0.7288037411970916|                                                                                                                     -11.0|
+-----------------------------+----------+----------+----------------------------------------+---------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------+
Total line number = 6
It costs 0.048s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">+</span> sin<span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+----------------------------------------------+
|                         Time|((root.sg.a + root.sg.b) * 2) + sin(root.sg.a)|
+-----------------------------+----------------------------------------------+
|1970-01-01T08:00:00.010+08:00|                             59.45597888911063|
|1970-01-01T08:00:00.020+08:00|                            100.91294525072763|
|1970-01-01T08:00:00.030+08:00|                            139.01196837590714|
|1970-01-01T08:00:00.040+08:00|                            180.74511316047935|
|1970-01-01T08:00:00.050+08:00|                            219.73762514629607|
|1970-01-01T08:00:00.060+08:00|                             259.6951893788978|
|1970-01-01T08:00:00.070+08:00|                             300.7738906815579|
|1970-01-01T08:00:00.090+08:00|                             39.45597888911063|
|1970-01-01T08:00:00.100+08:00|                             39.45597888911063|
+-----------------------------+----------------------------------------------+
Total line number = 9
It costs 0.011s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token punctuation">(</span>a <span class="token operator">+</span> <span class="token operator">*</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span>  <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+-----------------------------+-----------------------------+
|                         Time|(root.sg1.a + root.sg1.a) / 2|(root.sg1.a + root.sg1.b) / 2|
+-----------------------------+-----------------------------+-----------------------------+
|1970-01-01T08:00:00.010+08:00|                          1.0|                          1.0|
|1970-01-01T08:00:00.020+08:00|                          2.0|                          2.0|
|1970-01-01T08:00:00.030+08:00|                          3.0|                          3.0|
|1970-01-01T08:00:00.040+08:00|                          4.0|                         null|
|1970-01-01T08:00:00.060+08:00|                          6.0|                          6.0|
+-----------------------------+-----------------------------+-----------------------------+
Total line number = 5
It costs 0.011s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 4：</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">3</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">,</span> root<span class="token punctuation">.</span>ln
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+---------------------------+---------------------------+---------------------------+---------------------------+
|                         Time|(root.sg.a + root.sg.b) * 3|(root.sg.a + root.ln.b) * 3|(root.ln.a + root.sg.b) * 3|(root.ln.a + root.ln.b) * 3|
+-----------------------------+---------------------------+---------------------------+---------------------------+---------------------------+
|1970-01-01T08:00:00.010+08:00|                       90.0|                      270.0|                      360.0|                      540.0|
|1970-01-01T08:00:00.020+08:00|                      150.0|                      330.0|                      690.0|                      870.0|
|1970-01-01T08:00:00.030+08:00|                      210.0|                      450.0|                      570.0|                      810.0|
|1970-01-01T08:00:00.040+08:00|                      270.0|                      240.0|                      690.0|                      660.0|
|1970-01-01T08:00:00.050+08:00|                      330.0|                       null|                       null|                       null|
|1970-01-01T08:00:00.060+08:00|                      390.0|                       null|                       null|                       null|
|1970-01-01T08:00:00.070+08:00|                      450.0|                       null|                       null|                       null|
|1970-01-01T08:00:00.090+08:00|                       60.0|                       null|                       null|                       null|
|1970-01-01T08:00:00.100+08:00|                       60.0|                       null|                       null|                       null|
+-----------------------------+---------------------------+---------------------------+---------------------------+---------------------------+
Total line number = 9
It costs 0.014s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="聚合查询嵌套表达式" tabindex="-1"><a class="header-anchor" href="#聚合查询嵌套表达式" aria-hidden="true">#</a> 聚合查询嵌套表达式</h3><p>IoTDB 支持在 <code>SELECT</code> 子句中计算由<strong>聚合函数、常量、时间序列生成函数和表达式</strong>组成的任意嵌套表达式。</p><p><strong>说明：</strong></p><ul><li>当某个时间戳下左操作数和右操作数都不为空（<code>null</code>）时，表达式才会有结果，否则表达式值为<code>null</code>，且默认不出现在结果集中。但在使用<code>GROUP BY</code>子句的聚合查询嵌套表达式中，我们希望保留每个时间窗口的值，所以表达式值为<code>null</code>的窗口也包含在结果集中。</li><li>如果表达式中某个操作数对应多条时间序列（如通配符<code>*</code>），那么每条时间序列对应的结果都会出现在结果集中（按照笛卡尔积形式）。</li></ul><p><strong>示例 1：</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token function">avg</span><span class="token punctuation">(</span>temperature<span class="token punctuation">)</span><span class="token punctuation">,</span>
       sin<span class="token punctuation">(</span><span class="token function">avg</span><span class="token punctuation">(</span>temperature<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
       <span class="token function">avg</span><span class="token punctuation">(</span>temperature<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>
       <span class="token operator">-</span><span class="token function">sum</span><span class="token punctuation">(</span>hardware<span class="token punctuation">)</span><span class="token punctuation">,</span>
       <span class="token function">avg</span><span class="token punctuation">(</span>temperature<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">sum</span><span class="token punctuation">(</span>hardware<span class="token punctuation">)</span>
<span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+----------------------------------+---------------------------------------+--------------------------------------+--------------------------------+--------------------------------------------------------------------+
|avg(root.ln.wf01.wt01.temperature)|sin(avg(root.ln.wf01.wt01.temperature))|avg(root.ln.wf01.wt01.temperature) + 1|-sum(root.ln.wf01.wt01.hardware)|avg(root.ln.wf01.wt01.temperature) + sum(root.ln.wf01.wt01.hardware)|
+----------------------------------+---------------------------------------+--------------------------------------+--------------------------------+--------------------------------------------------------------------+
|                15.927999999999999|                   -0.21826546964855045|                    16.927999999999997|                         -7426.0|                                                            7441.928|
+----------------------------------+---------------------------------------+--------------------------------------+--------------------------------+--------------------------------------------------------------------+
Total line number = 1
It costs 0.009s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token function">avg</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
	   <span class="token punctuation">(</span><span class="token function">avg</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">3</span> <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">-</span><span class="token number">1</span> 
<span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+---------------+---------------+-------------------------------------+-------------------------------------+
|avg(root.sg1.a)|avg(root.sg1.b)|(avg(root.sg1.a) + 1) * 3 / 2 - 1    |(avg(root.sg1.b) + 1) * 3 / 2 - 1    |
+---------------+---------------+-------------------------------------+-------------------------------------+
|            3.2|            3.4|                    5.300000000000001|                   5.6000000000000005|
+---------------+---------------+-------------------------------------+-------------------------------------+
Total line number = 1
It costs 0.007s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token function">avg</span><span class="token punctuation">(</span>temperature<span class="token punctuation">)</span><span class="token punctuation">,</span>
       sin<span class="token punctuation">(</span><span class="token function">avg</span><span class="token punctuation">(</span>temperature<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
       <span class="token function">avg</span><span class="token punctuation">(</span>temperature<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>
       <span class="token operator">-</span><span class="token function">sum</span><span class="token punctuation">(</span>hardware<span class="token punctuation">)</span><span class="token punctuation">,</span>
       <span class="token function">avg</span><span class="token punctuation">(</span>temperature<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">sum</span><span class="token punctuation">(</span>hardware<span class="token punctuation">)</span> <span class="token keyword">as</span> custom_sum
<span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">10</span>ms<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+----------------------------------+---------------------------------------+--------------------------------------+--------------------------------+----------+
|                         Time|avg(root.ln.wf01.wt01.temperature)|sin(avg(root.ln.wf01.wt01.temperature))|avg(root.ln.wf01.wt01.temperature) + 1|-sum(root.ln.wf01.wt01.hardware)|custom_sum|
+-----------------------------+----------------------------------+---------------------------------------+--------------------------------------+--------------------------------+----------+
|1970-01-01T08:00:00.010+08:00|                13.987499999999999|                     0.9888207947857667|                    14.987499999999999|                         -3211.0| 3224.9875|
|1970-01-01T08:00:00.020+08:00|                              29.6|                    -0.9701057337071853|                                  30.6|                         -3720.0|    3749.6|
|1970-01-01T08:00:00.030+08:00|                              null|                                   null|                                  null|                            null|      null|
|1970-01-01T08:00:00.040+08:00|                              null|                                   null|                                  null|                            null|      null|
|1970-01-01T08:00:00.050+08:00|                              null|                                   null|                                  null|                            null|      null|
|1970-01-01T08:00:00.060+08:00|                              null|                                   null|                                  null|                            null|      null|
|1970-01-01T08:00:00.070+08:00|                              null|                                   null|                                  null|                            null|      null|
|1970-01-01T08:00:00.080+08:00|                              null|                                   null|                                  null|                            null|      null|
+-----------------------------+----------------------------------+---------------------------------------+--------------------------------------+--------------------------------+----------+
Total line number = 8
It costs 0.012s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,38);function f(T,x){const a=i("RouterLink");return p(),c("div",null,[u(`

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

`),d,s("p",null,[n("IoTDB 中支持的运算符列表见文档 "),e(a,{to:"/zh/UserGuide/V1.2.x/stage/Operators-Functions/Overview.html"},{default:t(()=>[n("运算符和函数")]),_:1}),n("。")]),v,s("p",null,[n("IoTDB 支持的聚合函数见文档 "),e(a,{to:"/zh/UserGuide/V1.2.x/stage/Operators-Functions/Aggregation.html"},{default:t(()=>[n("聚合函数")]),_:1}),n("。")]),k,m,b,g,s("p",null,[n("IoTDB 中支持的内置函数列表见文档 "),e(a,{to:"/zh/UserGuide/V1.2.x/stage/Operators-Functions/Overview.html"},{default:t(()=>[n("运算符和函数")]),_:1}),n("。")]),h,s("p",null,[n("IoTDB 支持通过用户自定义函数（点击查看： "),e(a,{to:"/zh/UserGuide/V1.2.x/stage/Operators-Functions/User-Defined-Function.html"},{default:t(()=>[n("用户自定义函数")]),_:1}),n(" ）能力进行函数功能扩展。")]),w])}const _=l(r,[["render",f],["__file","Select-Expression.html.vue"]]);export{_ as default};
