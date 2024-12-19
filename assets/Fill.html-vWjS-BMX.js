import{_ as n,c as l,b as e,o as a}from"./app-C-0rb--l.js";const t={};function o(i,s){return a(),l("div",null,s[0]||(s[0]=[e(`<h1 id="fill-null-value" tabindex="-1"><a class="header-anchor" href="#fill-null-value"><span>Fill Null Value</span></a></h1><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction"><span>Introduction</span></a></h2><p>When executing some queries, there may be no data for some columns in some rows, and data in these locations will be null, but this kind of null value is not conducive to data visualization and analysis, and the null value needs to be filled.</p><p>In IoTDB, users can use the FILL clause to specify the fill mode when data is missing. Fill null value allows the user to fill any query result with null values according to a specific method, such as taking the previous value that is not null, or linear interpolation. The query result after filling the null value can better reflect the data distribution, which is beneficial for users to perform data analysis.</p><h2 id="syntax-definition" tabindex="-1"><a class="header-anchor" href="#syntax-definition"><span>Syntax Definition</span></a></h2><p><strong>The following is the syntax definition of the <code>FILL</code> clause:</strong></p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#ABB2BF;">FILL </span><span style="color:#98C379;">&#39;(&#39;</span><span style="color:#ABB2BF;"> PREVIOUS | LINEAR | constant </span><span style="color:#98C379;">&#39;)&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>Note:</strong></p><ul><li>We can specify only one fill method in the <code>FILL</code> clause, and this method applies to all columns of the result set.</li><li>Null value fill is not compatible with version 0.13 and previous syntax (<code>FILL((&lt;data_type&gt;[&lt;fill_method&gt;(, &lt;before_range&gt;, &lt;after_range&gt;)?])+)</code>) is not supported anymore.</li></ul><h2 id="fill-methods" tabindex="-1"><a class="header-anchor" href="#fill-methods"><span>Fill Methods</span></a></h2><p><strong>IoTDB supports the following three fill methods:</strong></p><ul><li><code>PREVIOUS</code>: Fill with the previous non-null value of the column.</li><li><code>LINEAR</code>: Fill the column with a linear interpolation of the previous non-null value and the next non-null value of the column.</li><li>Constant: Fill with the specified constant.</li></ul><p><strong>Following table lists the data types and supported fill methods.</strong></p><table><thead><tr><th style="text-align:left;">Data Type</th><th style="text-align:left;">Supported Fill Methods</th></tr></thead><tbody><tr><td style="text-align:left;">boolean</td><td style="text-align:left;">previous, value</td></tr><tr><td style="text-align:left;">int32</td><td style="text-align:left;">previous, linear, value</td></tr><tr><td style="text-align:left;">int64</td><td style="text-align:left;">previous, linear, value</td></tr><tr><td style="text-align:left;">float</td><td style="text-align:left;">previous, linear, value</td></tr><tr><td style="text-align:left;">double</td><td style="text-align:left;">previous, linear, value</td></tr><tr><td style="text-align:left;">text</td><td style="text-align:left;">previous, value</td></tr></tbody></table><p><strong>Note:</strong> For columns whose data type does not support specifying the fill method, we neither fill it nor throw exception, just keep it as it is.</p><p><strong>For examples:</strong></p><p>If we don&#39;t use any fill methods:</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> temperature, </span><span style="color:#C678DD;">status</span><span style="color:#C678DD;"> from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sgcc</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wf03</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wt01</span><span style="color:#C678DD;"> where</span><span style="color:#C678DD;"> time</span><span style="color:#56B6C2;"> &gt;=</span><span style="color:#D19A66;"> 2017</span><span style="color:#ABB2BF;">-</span><span style="color:#D19A66;">11</span><span style="color:#ABB2BF;">-01T16:</span><span style="color:#D19A66;">37</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">000</span><span style="color:#C678DD;"> and</span><span style="color:#C678DD;"> time</span><span style="color:#56B6C2;"> &lt;=</span><span style="color:#D19A66;"> 2017</span><span style="color:#ABB2BF;">-</span><span style="color:#D19A66;">11</span><span style="color:#ABB2BF;">-01T16:</span><span style="color:#D19A66;">40</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">000</span><span style="color:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>the original result will be like:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>+-----------------------------+-------------------------------+--------------------------+</span></span>
<span class="line"><span>|                         Time|root.sgcc.wf03.wt01.temperature|root.sgcc.wf03.wt01.status|</span></span>
<span class="line"><span>+-----------------------------+-------------------------------+--------------------------+</span></span>
<span class="line"><span>|2017-11-01T16:37:00.000+08:00|                          21.93|                      true|</span></span>
<span class="line"><span>+-----------------------------+-------------------------------+--------------------------+</span></span>
<span class="line"><span>|2017-11-01T16:38:00.000+08:00|                           null|                     false|</span></span>
<span class="line"><span>+-----------------------------+-------------------------------+--------------------------+</span></span>
<span class="line"><span>|2017-11-01T16:39:00.000+08:00|                          22.23|                      null|</span></span>
<span class="line"><span>+-----------------------------+-------------------------------+--------------------------+</span></span>
<span class="line"><span>|2017-11-01T16:40:00.000+08:00|                          23.43|                      null|</span></span>
<span class="line"><span>+-----------------------------+-------------------------------+--------------------------+</span></span>
<span class="line"><span>Total line number = 4</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="previous-fill" tabindex="-1"><a class="header-anchor" href="#previous-fill"><span><code>PREVIOUS</code> Fill</span></a></h3><p><strong>For null values in the query result set, fill with the previous non-null value of the column.</strong></p><p><strong>Note:</strong> If the first value of this column is null, we will keep first value as null and won&#39;t fill it until we meet first non-null value</p><p>For example, with <code>PREVIOUS</code> fill, the SQL is as follows:</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> temperature, </span><span style="color:#C678DD;">status</span><span style="color:#C678DD;"> from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sgcc</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wf03</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wt01</span><span style="color:#C678DD;"> where</span><span style="color:#C678DD;"> time</span><span style="color:#56B6C2;"> &gt;=</span><span style="color:#D19A66;"> 2017</span><span style="color:#ABB2BF;">-</span><span style="color:#D19A66;">11</span><span style="color:#ABB2BF;">-01T16:</span><span style="color:#D19A66;">37</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">000</span><span style="color:#C678DD;"> and</span><span style="color:#C678DD;"> time</span><span style="color:#56B6C2;"> &lt;=</span><span style="color:#D19A66;"> 2017</span><span style="color:#ABB2BF;">-</span><span style="color:#D19A66;">11</span><span style="color:#ABB2BF;">-01T16:</span><span style="color:#D19A66;">40</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">000</span><span style="color:#ABB2BF;"> fill(previous);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>result will be like:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>+-----------------------------+-------------------------------+--------------------------+</span></span>
<span class="line"><span>|                         Time|root.sgcc.wf03.wt01.temperature|root.sgcc.wf03.wt01.status|</span></span>
<span class="line"><span>+-----------------------------+-------------------------------+--------------------------+</span></span>
<span class="line"><span>|2017-11-01T16:37:00.000+08:00|                          21.93|                      true|</span></span>
<span class="line"><span>+-----------------------------+-------------------------------+--------------------------+</span></span>
<span class="line"><span>|2017-11-01T16:38:00.000+08:00|                          21.93|                     false|</span></span>
<span class="line"><span>+-----------------------------+-------------------------------+--------------------------+</span></span>
<span class="line"><span>|2017-11-01T16:39:00.000+08:00|                          22.23|                     false|</span></span>
<span class="line"><span>+-----------------------------+-------------------------------+--------------------------+</span></span>
<span class="line"><span>|2017-11-01T16:40:00.000+08:00|                          23.43|                     false|</span></span>
<span class="line"><span>+-----------------------------+-------------------------------+--------------------------+</span></span>
<span class="line"><span>Total line number = 4</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="linear-fill" tabindex="-1"><a class="header-anchor" href="#linear-fill"><span><code>LINEAR</code> Fill</span></a></h3><p><strong>For null values in the query result set, fill the column with a linear interpolation of the previous non-null value and the next non-null value of the column.</strong></p><p><strong>Note:</strong></p><ul><li>If all the values before current value are null or all the values after current value are null, we will keep current value as null and won&#39;t fill it.</li><li>If the column&#39;s data type is boolean/text, we neither fill it nor throw exception, just keep it as it is.</li></ul><p>Here we give an example of filling null values using the linear method. The SQL statement is as follows:</p><p>For example, with <code>LINEAR</code> fill, the SQL is as follows:</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> temperature, </span><span style="color:#C678DD;">status</span><span style="color:#C678DD;"> from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sgcc</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wf03</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wt01</span><span style="color:#C678DD;"> where</span><span style="color:#C678DD;"> time</span><span style="color:#56B6C2;"> &gt;=</span><span style="color:#D19A66;"> 2017</span><span style="color:#ABB2BF;">-</span><span style="color:#D19A66;">11</span><span style="color:#ABB2BF;">-01T16:</span><span style="color:#D19A66;">37</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">000</span><span style="color:#C678DD;"> and</span><span style="color:#C678DD;"> time</span><span style="color:#56B6C2;"> &lt;=</span><span style="color:#D19A66;"> 2017</span><span style="color:#ABB2BF;">-</span><span style="color:#D19A66;">11</span><span style="color:#ABB2BF;">-01T16:</span><span style="color:#D19A66;">40</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">000</span><span style="color:#ABB2BF;"> fill(linear);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>result will be like:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>+-----------------------------+-------------------------------+--------------------------+</span></span>
<span class="line"><span>|                         Time|root.sgcc.wf03.wt01.temperature|root.sgcc.wf03.wt01.status|</span></span>
<span class="line"><span>+-----------------------------+-------------------------------+--------------------------+</span></span>
<span class="line"><span>|2017-11-01T16:37:00.000+08:00|                          21.93|                      true|</span></span>
<span class="line"><span>+-----------------------------+-------------------------------+--------------------------+</span></span>
<span class="line"><span>|2017-11-01T16:38:00.000+08:00|                          22.08|                     false|</span></span>
<span class="line"><span>+-----------------------------+-------------------------------+--------------------------+</span></span>
<span class="line"><span>|2017-11-01T16:39:00.000+08:00|                          22.23|                      null|</span></span>
<span class="line"><span>+-----------------------------+-------------------------------+--------------------------+</span></span>
<span class="line"><span>|2017-11-01T16:40:00.000+08:00|                          23.43|                      null|</span></span>
<span class="line"><span>+-----------------------------+-------------------------------+--------------------------+</span></span>
<span class="line"><span>Total line number = 4</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="constant-fill" tabindex="-1"><a class="header-anchor" href="#constant-fill"><span>Constant Fill</span></a></h3><p><strong>For null values in the query result set, fill with the specified constant.</strong></p><p><strong>Note:</strong></p><ul><li><p>When using the ValueFill, IoTDB neither fill the query result if the data type is different from the input constant nor throw exception, just keep it as it is.</p><table><thead><tr><th style="text-align:left;">Constant Value Data Type</th><th style="text-align:left;">Support Data Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>BOOLEAN</code></td><td style="text-align:left;"><code>BOOLEAN</code> <code>TEXT</code></td></tr><tr><td style="text-align:left;"><code>INT64</code></td><td style="text-align:left;"><code>INT32</code> <code>INT64</code> <code>FLOAT</code> <code>DOUBLE</code> <code>TEXT</code></td></tr><tr><td style="text-align:left;"><code>DOUBLE</code></td><td style="text-align:left;"><code>FLOAT</code> <code>DOUBLE</code> <code>TEXT</code></td></tr><tr><td style="text-align:left;"><code>TEXT</code></td><td style="text-align:left;"><code>TEXT</code></td></tr></tbody></table></li><li><p>If constant value is larger than Integer.MAX_VALUE, IoTDB neither fill the query result if the data type is int32 nor throw exception, just keep it as it is.</p></li></ul><p>For example, with <code>FLOAT</code> constant fill, the SQL is as follows:</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> temperature, </span><span style="color:#C678DD;">status</span><span style="color:#C678DD;"> from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sgcc</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wf03</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wt01</span><span style="color:#C678DD;"> where</span><span style="color:#C678DD;"> time</span><span style="color:#56B6C2;"> &gt;=</span><span style="color:#D19A66;"> 2017</span><span style="color:#ABB2BF;">-</span><span style="color:#D19A66;">11</span><span style="color:#ABB2BF;">-01T16:</span><span style="color:#D19A66;">37</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">000</span><span style="color:#C678DD;"> and</span><span style="color:#C678DD;"> time</span><span style="color:#56B6C2;"> &lt;=</span><span style="color:#D19A66;"> 2017</span><span style="color:#ABB2BF;">-</span><span style="color:#D19A66;">11</span><span style="color:#ABB2BF;">-01T16:</span><span style="color:#D19A66;">40</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">000</span><span style="color:#ABB2BF;"> fill(</span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>result will be like:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>+-----------------------------+-------------------------------+--------------------------+</span></span>
<span class="line"><span>|                         Time|root.sgcc.wf03.wt01.temperature|root.sgcc.wf03.wt01.status|</span></span>
<span class="line"><span>+-----------------------------+-------------------------------+--------------------------+</span></span>
<span class="line"><span>|2017-11-01T16:37:00.000+08:00|                          21.93|                      true|</span></span>
<span class="line"><span>+-----------------------------+-------------------------------+--------------------------+</span></span>
<span class="line"><span>|2017-11-01T16:38:00.000+08:00|                            2.0|                     false|</span></span>
<span class="line"><span>+-----------------------------+-------------------------------+--------------------------+</span></span>
<span class="line"><span>|2017-11-01T16:39:00.000+08:00|                          22.23|                      null|</span></span>
<span class="line"><span>+-----------------------------+-------------------------------+--------------------------+</span></span>
<span class="line"><span>|2017-11-01T16:40:00.000+08:00|                          23.43|                      null|</span></span>
<span class="line"><span>+-----------------------------+-------------------------------+--------------------------+</span></span>
<span class="line"><span>Total line number = 4</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>For example, with <code>BOOLEAN</code> constant fill, the SQL is as follows:</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> temperature, </span><span style="color:#C678DD;">status</span><span style="color:#C678DD;"> from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sgcc</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wf03</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wt01</span><span style="color:#C678DD;"> where</span><span style="color:#C678DD;"> time</span><span style="color:#56B6C2;"> &gt;=</span><span style="color:#D19A66;"> 2017</span><span style="color:#ABB2BF;">-</span><span style="color:#D19A66;">11</span><span style="color:#ABB2BF;">-01T16:</span><span style="color:#D19A66;">37</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">000</span><span style="color:#C678DD;"> and</span><span style="color:#C678DD;"> time</span><span style="color:#56B6C2;"> &lt;=</span><span style="color:#D19A66;"> 2017</span><span style="color:#ABB2BF;">-</span><span style="color:#D19A66;">11</span><span style="color:#ABB2BF;">-01T16:</span><span style="color:#D19A66;">40</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">000</span><span style="color:#ABB2BF;"> fill(true);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>result will be like:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>+-----------------------------+-------------------------------+--------------------------+</span></span>
<span class="line"><span>|                         Time|root.sgcc.wf03.wt01.temperature|root.sgcc.wf03.wt01.status|</span></span>
<span class="line"><span>+-----------------------------+-------------------------------+--------------------------+</span></span>
<span class="line"><span>|2017-11-01T16:37:00.000+08:00|                          21.93|                      true|</span></span>
<span class="line"><span>+-----------------------------+-------------------------------+--------------------------+</span></span>
<span class="line"><span>|2017-11-01T16:38:00.000+08:00|                           null|                     false|</span></span>
<span class="line"><span>+-----------------------------+-------------------------------+--------------------------+</span></span>
<span class="line"><span>|2017-11-01T16:39:00.000+08:00|                          22.23|                      true|</span></span>
<span class="line"><span>+-----------------------------+-------------------------------+--------------------------+</span></span>
<span class="line"><span>|2017-11-01T16:40:00.000+08:00|                          23.43|                      true|</span></span>
<span class="line"><span>+-----------------------------+-------------------------------+--------------------------+</span></span>
<span class="line"><span>Total line number = 4</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,48)]))}const r=n(t,[["render",o],["__file","Fill.html.vue"]]),c=JSON.parse('{"path":"/UserGuide/V1.1.x/Query-Data/Fill.html","title":"Fill Null Value","lang":"en-US","frontmatter":{"description":"Fill Null Value Introduction When executing some queries, there may be no data for some columns in some rows, and data in these locations will be null, but this kind of null val...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/Query-Data/Fill.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.1.x/Query-Data/Fill.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Fill Null Value"}],["meta",{"property":"og:description","content":"Fill Null Value Introduction When executing some queries, there may be no data for some columns in some rows, and data in these locations will be null, but this kind of null val..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Fill Null Value\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"Syntax Definition","slug":"syntax-definition","link":"#syntax-definition","children":[]},{"level":2,"title":"Fill Methods","slug":"fill-methods","link":"#fill-methods","children":[{"level":3,"title":"PREVIOUS Fill","slug":"previous-fill","link":"#previous-fill","children":[]},{"level":3,"title":"LINEAR Fill","slug":"linear-fill","link":"#linear-fill","children":[]},{"level":3,"title":"Constant Fill","slug":"constant-fill","link":"#constant-fill","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","username":"CritasWang","email":"critas@outlook.com","commits":1,"url":"https://github.com/CritasWang"}]},"readingTime":{"minutes":3.51,"words":1052},"filePathRelative":"UserGuide/V1.1.x/Query-Data/Fill.md","localizedDate":"July 10, 2023","autoDesc":true}');export{r as comp,c as data};
