import{_ as o,r as l,o as r,c as p,a as c,d as s,e as n,b as a,w as t,f as i}from"./app-316684ed.js";const u={},d=i(`<h1 id="select-expression" tabindex="-1"><a class="header-anchor" href="#select-expression" aria-hidden="true">#</a> Select Expression</h1><p>The <code>SELECT</code> clause specifies the output of the query, consisting of several <code>selectExpr</code>. Each <code>selectExpr</code> defines one or more columns in the query result.</p><p>**<code>selectExpr</code> is an expression consisting of time series path suffixes, constants, functions, and operators. That is, <code>selectExpr</code> can contain: **</p><ul><li>Time series path suffix (wildcards are supported)</li><li>operator <ul><li>Arithmetic operators</li><li>comparison operators</li><li>Logical Operators</li></ul></li><li>function <ul><li>aggregate functions</li><li>Time series generation functions (including built-in functions and user-defined functions)</li></ul></li><li>constant</li></ul><h2 id="use-alias" tabindex="-1"><a class="header-anchor" href="#use-alias" aria-hidden="true">#</a> Use Alias</h2><p>Since the unique data model of IoTDB, lots of additional information like device will be carried before each sensor. Sometimes, we want to query just one specific device, then these prefix information show frequently will be redundant in this situation, influencing the analysis of result set. At this time, we can use <code>AS</code> function provided by IoTDB, assign an alias to time series selected in query.</p><p>For example：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> s1 <span class="token keyword">as</span> temperature<span class="token punctuation">,</span> s2 <span class="token keyword">as</span> speed <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The result set is：</p><table><thead><tr><th>Time</th><th>temperature</th><th>speed</th></tr></thead><tbody><tr><td>...</td><td>...</td><td>...</td></tr></tbody></table><h2 id="operator" tabindex="-1"><a class="header-anchor" href="#operator" aria-hidden="true">#</a> Operator</h2>`,11),m=i(`<h2 id="function" tabindex="-1"><a class="header-anchor" href="#function" aria-hidden="true">#</a> Function</h2><h3 id="aggregate-functions" tabindex="-1"><a class="header-anchor" href="#aggregate-functions" aria-hidden="true">#</a> aggregate functions</h3><p>Aggregate functions are many-to-one functions. They perform aggregate calculations on a set of values, resulting in a single aggregated result.</p><p><strong>A query that contains an aggregate function is called an aggregate query</strong>, otherwise, it is called a time series query.</p><blockquote><p>Please note that mixed use of <code>Aggregate Query</code> and <code>Timeseries Query</code> is not allowed. Below are examples for queries that are not allowed.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>select a, count(a) from root.sg 
select sin(a), count(a) from root.sg
select a, count(a) from root.sg group by ([10,100),10ms)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>`,5),v=s("h3",{id:"time-series-generation-function",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#time-series-generation-function","aria-hidden":"true"},"#"),n(" Time series generation function")],-1),b=s("p",null,"A time series generation function takes several raw time series as input and produces a list of time series as output. Unlike aggregate functions, time series generators have a timestamp column in their result sets.",-1),k=s("p",null,"All time series generation functions accept * as input, and all can be mixed with raw time series queries.",-1),g=s("h4",{id:"built-in-time-series-generation-functions",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#built-in-time-series-generation-functions","aria-hidden":"true"},"#"),n(" Built-in time series generation functions")],-1),h=s("h4",{id:"user-defined-time-series-generation-function",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#user-defined-time-series-generation-function","aria-hidden":"true"},"#"),n(" User-Defined time series generation function")],-1),f=i(`<h2 id="nested-expressions" tabindex="-1"><a class="header-anchor" href="#nested-expressions" aria-hidden="true">#</a> Nested Expressions</h2><p>IoTDB supports the calculation of arbitrary nested expressions. Since time series query and aggregation query can not be used in a query statement at the same time, we divide nested expressions into two types, which are nested expressions with time series query and nested expressions with aggregation query.</p><p>The following is the syntax definition of the <code>select</code> clause:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>selectClause
    : <span class="token keyword">SELECT</span> resultColumn <span class="token punctuation">(</span><span class="token string">&#39;,&#39;</span> resultColumn<span class="token punctuation">)</span><span class="token operator">*</span>
    <span class="token punctuation">;</span>

resultColumn
    : expression <span class="token punctuation">(</span><span class="token keyword">AS</span> ID<span class="token punctuation">)</span>?
    <span class="token punctuation">;</span>

expression
    : <span class="token string">&#39;(&#39;</span> expression <span class="token string">&#39;)&#39;</span>
    <span class="token operator">|</span> <span class="token string">&#39;-&#39;</span> expression
    <span class="token operator">|</span> expression <span class="token punctuation">(</span><span class="token string">&#39;*&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;/&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;%&#39;</span><span class="token punctuation">)</span> expression
    <span class="token operator">|</span> expression <span class="token punctuation">(</span><span class="token string">&#39;+&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span> expression
    <span class="token operator">|</span> functionName <span class="token string">&#39;(&#39;</span> expression <span class="token punctuation">(</span><span class="token string">&#39;,&#39;</span> expression<span class="token punctuation">)</span><span class="token operator">*</span> functionAttribute<span class="token operator">*</span> <span class="token string">&#39;)&#39;</span>
    <span class="token operator">|</span> timeSeriesSuffixPath
    <span class="token operator">|</span> number
    <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nested-expressions-with-time-series-query" tabindex="-1"><a class="header-anchor" href="#nested-expressions-with-time-series-query" aria-hidden="true">#</a> Nested Expressions with Time Series Query</h3><p>IoTDB supports the calculation of arbitrary nested expressions consisting of <strong>numbers, time series, time series generating functions (including user-defined functions) and arithmetic expressions</strong> in the <code>select</code> clause.</p><h5 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h5><p>Input1：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> a<span class="token punctuation">,</span>
       b<span class="token punctuation">,</span>
       <span class="token punctuation">(</span><span class="token punctuation">(</span>a <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">1.5</span><span class="token punctuation">,</span>
       sin<span class="token punctuation">(</span>a <span class="token operator">+</span> sin<span class="token punctuation">(</span>a <span class="token operator">+</span> sin<span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
       <span class="token operator">-</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>sin<span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span> <span class="token operator">*</span> sin<span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span> <span class="token operator">+</span> cos<span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span> <span class="token operator">*</span> cos<span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span>
<span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Result1：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+----------+----------+----------------------------------------+---------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------+
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Input2：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">+</span> sin<span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Result2：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+----------------------------------------------+
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Input3：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token punctuation">(</span>a <span class="token operator">+</span> <span class="token operator">*</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span>  <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Result3：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+-----------------------------+-----------------------------+
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Input4：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">3</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">,</span> root<span class="token punctuation">.</span>ln
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Result4：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+---------------------------+---------------------------+---------------------------+---------------------------+
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="explanation" tabindex="-1"><a class="header-anchor" href="#explanation" aria-hidden="true">#</a> Explanation</h5><ul><li>Only when the left operand and the right operand under a certain timestamp are not <code>null</code>, the nested expressions will have an output value. Otherwise this row will not be included in the result. <ul><li>In Result1 of the Example part, the value of time series <code>root.sg.a</code> at time 40 is 4, while the value of time series <code>root.sg.b</code> is <code>null</code>. So at time 40, the value of nested expressions <code>(a + b) * 2 + sin(a)</code> is <code>null</code>. So in Result2, this row is not included in the result.</li></ul></li><li>If one operand in the nested expressions can be translated into multiple time series (For example, <code>*</code>), the result of each time series will be included in the result (Cartesian product). Please refer to Input3, Input4 and corresponding Result3 and Result4 in Example.</li></ul><h5 id="note" tabindex="-1"><a class="header-anchor" href="#note" aria-hidden="true">#</a> Note</h5><blockquote><p>Please note that Aligned Time Series has not been supported in Nested Expressions with Time Series Query yet. An error message is expected if you use it with Aligned Time Series selected in a query statement.</p></blockquote><h3 id="nested-expressions-query-with-aggregations" tabindex="-1"><a class="header-anchor" href="#nested-expressions-query-with-aggregations" aria-hidden="true">#</a> Nested Expressions query with aggregations</h3><p>IoTDB supports the calculation of arbitrary nested expressions consisting of <strong>numbers, aggregations and arithmetic expressions</strong> in the <code>select</code> clause.</p><h5 id="example-1" tabindex="-1"><a class="header-anchor" href="#example-1" aria-hidden="true">#</a> Example</h5><p>Aggregation query without <code>GROUP BY</code>.</p><p>Input1:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token function">avg</span><span class="token punctuation">(</span>temperature<span class="token punctuation">)</span><span class="token punctuation">,</span>
       sin<span class="token punctuation">(</span><span class="token function">avg</span><span class="token punctuation">(</span>temperature<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
       <span class="token function">avg</span><span class="token punctuation">(</span>temperature<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>
       <span class="token operator">-</span><span class="token function">sum</span><span class="token punctuation">(</span>hardware<span class="token punctuation">)</span><span class="token punctuation">,</span>
       <span class="token function">avg</span><span class="token punctuation">(</span>temperature<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">sum</span><span class="token punctuation">(</span>hardware<span class="token punctuation">)</span>
<span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Result1:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+----------------------------------+---------------------------------------+--------------------------------------+--------------------------------+--------------------------------------------------------------------+
|avg(root.ln.wf01.wt01.temperature)|sin(avg(root.ln.wf01.wt01.temperature))|avg(root.ln.wf01.wt01.temperature) + 1|-sum(root.ln.wf01.wt01.hardware)|avg(root.ln.wf01.wt01.temperature) + sum(root.ln.wf01.wt01.hardware)|
+----------------------------------+---------------------------------------+--------------------------------------+--------------------------------+--------------------------------------------------------------------+
|                15.927999999999999|                   -0.21826546964855045|                    16.927999999999997|                         -7426.0|                                                            7441.928|
+----------------------------------+---------------------------------------+--------------------------------------+--------------------------------+--------------------------------------------------------------------+
Total line number = 1
It costs 0.009s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Input2:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token function">avg</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
	   <span class="token punctuation">(</span><span class="token function">avg</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">3</span> <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">-</span><span class="token number">1</span> 
<span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Result2:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+---------------+---------------+-------------------------------------+-------------------------------------+
|avg(root.sg1.a)|avg(root.sg1.b)|(avg(root.sg1.a) + 1) * 3 / 2 - 1    |(avg(root.sg1.b) + 1) * 3 / 2 - 1    |
+---------------+---------------+-------------------------------------+-------------------------------------+
|            3.2|            3.4|                    5.300000000000001|                   5.6000000000000005|
+---------------+---------------+-------------------------------------+-------------------------------------+
Total line number = 1
It costs 0.007s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Aggregation with <code>GROUP BY</code>.</p><p>Input3:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token function">avg</span><span class="token punctuation">(</span>temperature<span class="token punctuation">)</span><span class="token punctuation">,</span>
       sin<span class="token punctuation">(</span><span class="token function">avg</span><span class="token punctuation">(</span>temperature<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
       <span class="token function">avg</span><span class="token punctuation">(</span>temperature<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>
       <span class="token operator">-</span><span class="token function">sum</span><span class="token punctuation">(</span>hardware<span class="token punctuation">)</span><span class="token punctuation">,</span>
       <span class="token function">avg</span><span class="token punctuation">(</span>temperature<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">sum</span><span class="token punctuation">(</span>hardware<span class="token punctuation">)</span> <span class="token keyword">as</span> custom_sum
<span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">10</span>ms<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Result3:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+----------------------------------+---------------------------------------+--------------------------------------+--------------------------------+----------+
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="explanation-1" tabindex="-1"><a class="header-anchor" href="#explanation-1" aria-hidden="true">#</a> Explanation</h5><ul><li>Only when the left operand and the right operand under a certain timestamp are not <code>null</code>, the nested expressions will have an output value. Otherwise this row will not be included in the result. But for nested expressions with <code>GROUP BY</code> clause, it is better to show the result of all time intervals. Please refer to Input3 and corresponding Result3 in Example.</li><li>If one operand in the nested expressions can be translated into multiple time series (For example, <code>*</code>), the result of each time series will be included in the result (Cartesian product). Please refer to Input2 and corresponding Result2 in Example.</li></ul>`,46);function x(w,T){const e=l("RouterLink");return r(),p("div",null,[c(`

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

`),d,s("p",null,[n("See the documentation "),a(e,{to:"/UserGuide/Master/stage/Operators-Functions/Overview.html"},{default:t(()=>[n("Operators and Functions")]),_:1}),n(" for a list of operators supported in IoTDB.")]),m,s("p",null,[n("For the aggregation functions supported by IoTDB, see the document "),a(e,{to:"/UserGuide/Master/stage/Operators-Functions/Aggregation.html"},{default:t(()=>[n("Aggregation Functions")]),_:1}),n(".")]),v,b,k,g,s("p",null,[n("See the documentation "),a(e,{to:"/UserGuide/Master/stage/Operators-Functions/Overview.html"},{default:t(()=>[n("Operators and Functions")]),_:1}),n(" for a list of built-in functions supported in IoTDB.")]),h,s("p",null,[n("IoTDB supports function extension through User Defined Function (click for "),a(e,{to:"/UserGuide/Master/stage/Operators-Functions/User-Defined-Function.html"},{default:t(()=>[n("User-Defined Function")]),_:1}),n(") capability.")]),f])}const q=o(u,[["render",x],["__file","Select-Expression.html.vue"]]);export{q as default};
