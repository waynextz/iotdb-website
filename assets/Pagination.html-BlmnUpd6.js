import{_ as n,c as a,b as l,o as e}from"./app-C-0rb--l.js";const p={};function o(i,s){return e(),a("div",null,s[0]||(s[0]=[l(`<h1 id="查询结果分页" tabindex="-1"><a class="header-anchor" href="#查询结果分页"><span>查询结果分页</span></a></h1><p>当查询结果集数据量很大，放在一个页面不利于显示，可以使用 <code>LIMIT/SLIMIT</code> 子句和 <code>OFFSET/SOFFSET </code>子句进行分页控制。</p><ul><li><code>LIMIT</code> 和 <code>SLIMIT</code> 子句用于控制查询结果的行数和列数。</li><li><code>OFFSET</code> 和 <code>SOFFSET</code> 子句用于控制结果显示的起始位置。</li></ul><h2 id="按行分页" tabindex="-1"><a class="header-anchor" href="#按行分页"><span>按行分页</span></a></h2><p>用户可以通过 <code>LIMIT</code> 和 <code>OFFSET</code> 子句控制查询结果的行数，<code>LIMIT rowLimit</code> 指定查询结果的行数，<code>OFFSET rowOffset</code> 指定查询结果显示的起始行位置。</p><p>注意：</p><ul><li>当 <code>rowOffset</code> 超过结果集的大小时，返回空结果集。</li><li>当 <code>rowLimit</code> 超过结果集的大小时，返回所有查询结果。</li><li>当 <code>rowLimit</code> 和 <code>rowOffset</code> 不是正整数，或超过 <code>INT32</code> 允许的最大值时，系统将提示错误。</li></ul><p>我们将通过以下示例演示如何使用 <code>LIMIT</code> 和 <code>OFFSET</code> 子句。</p><ul><li><strong>示例 1：</strong> 基本的 <code>LIMIT</code> 子句</li></ul><p>SQL 语句：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#C678DD;"> status</span><span style="color:#ABB2BF;">, temperature </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">ln</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wf01</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wt01</span><span style="color:#C678DD;"> limit</span><span style="color:#D19A66;"> 10</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>含义：</p><p>所选设备为 ln 组 wf01 工厂 wt01 设备； 选择的时间序列是“状态”和“温度”。 SQL 语句要求返回查询结果的前 10 行。</p><p>结果如下所示：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>+-----------------------------+------------------------+-----------------------------+</span></span>
<span class="line"><span>|                         Time|root.ln.wf01.wt01.status|root.ln.wf01.wt01.temperature|</span></span>
<span class="line"><span>+-----------------------------+------------------------+-----------------------------+</span></span>
<span class="line"><span>|2017-11-01T00:00:00.000+08:00|                    true|                        25.96|</span></span>
<span class="line"><span>|2017-11-01T00:01:00.000+08:00|                    true|                        24.36|</span></span>
<span class="line"><span>|2017-11-01T00:02:00.000+08:00|                   false|                        20.09|</span></span>
<span class="line"><span>|2017-11-01T00:03:00.000+08:00|                   false|                        20.18|</span></span>
<span class="line"><span>|2017-11-01T00:04:00.000+08:00|                   false|                        21.13|</span></span>
<span class="line"><span>|2017-11-01T00:05:00.000+08:00|                   false|                        22.72|</span></span>
<span class="line"><span>|2017-11-01T00:06:00.000+08:00|                   false|                        20.71|</span></span>
<span class="line"><span>|2017-11-01T00:07:00.000+08:00|                   false|                        21.45|</span></span>
<span class="line"><span>|2017-11-01T00:08:00.000+08:00|                   false|                        22.58|</span></span>
<span class="line"><span>|2017-11-01T00:09:00.000+08:00|                   false|                        20.98|</span></span>
<span class="line"><span>+-----------------------------+------------------------+-----------------------------+</span></span>
<span class="line"><span>Total line number = 10</span></span>
<span class="line"><span>It costs 0.000s</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>示例 2：</strong> 带 <code>OFFSET</code> 的 <code>LIMIT</code> 子句</li></ul><p>SQL 语句：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#C678DD;"> status</span><span style="color:#ABB2BF;">, temperature </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">ln</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wf01</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wt01</span><span style="color:#C678DD;"> limit</span><span style="color:#D19A66;"> 5</span><span style="color:#ABB2BF;"> offset </span><span style="color:#D19A66;">3</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>含义：</p><p>所选设备为 ln 组 wf01 工厂 wt01 设备； 选择的时间序列是“状态”和“温度”。 SQL 语句要求返回查询结果的第 3 至 7 行（第一行编号为 0 行）。</p><p>结果如下所示：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>+-----------------------------+------------------------+-----------------------------+</span></span>
<span class="line"><span>|                         Time|root.ln.wf01.wt01.status|root.ln.wf01.wt01.temperature|</span></span>
<span class="line"><span>+-----------------------------+------------------------+-----------------------------+</span></span>
<span class="line"><span>|2017-11-01T00:03:00.000+08:00|                   false|                        20.18|</span></span>
<span class="line"><span>|2017-11-01T00:04:00.000+08:00|                   false|                        21.13|</span></span>
<span class="line"><span>|2017-11-01T00:05:00.000+08:00|                   false|                        22.72|</span></span>
<span class="line"><span>|2017-11-01T00:06:00.000+08:00|                   false|                        20.71|</span></span>
<span class="line"><span>|2017-11-01T00:07:00.000+08:00|                   false|                        21.45|</span></span>
<span class="line"><span>+-----------------------------+------------------------+-----------------------------+</span></span>
<span class="line"><span>Total line number = 5</span></span>
<span class="line"><span>It costs 0.342s</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>示例 3：</strong> <code>LIMIT</code> 子句与 <code>WHERE</code> 子句结合</li></ul><p>SQL 语句：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#C678DD;"> status</span><span style="color:#ABB2BF;">,temperature </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">ln</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wf01</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wt01</span><span style="color:#C678DD;"> where</span><span style="color:#C678DD;"> time</span><span style="color:#56B6C2;"> &gt;</span><span style="color:#D19A66;"> 2017</span><span style="color:#ABB2BF;">-</span><span style="color:#D19A66;">11</span><span style="color:#ABB2BF;">-01T00:</span><span style="color:#D19A66;">05</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">000</span><span style="color:#C678DD;"> and</span><span style="color:#C678DD;"> time</span><span style="color:#56B6C2;">&lt;</span><span style="color:#D19A66;"> 2017</span><span style="color:#ABB2BF;">-</span><span style="color:#D19A66;">11</span><span style="color:#ABB2BF;">-01T00:</span><span style="color:#D19A66;">12</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">000</span><span style="color:#C678DD;"> limit</span><span style="color:#D19A66;"> 5</span><span style="color:#ABB2BF;"> offset </span><span style="color:#D19A66;">3</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>含义：</p><p>所选设备为 ln 组 wf01 工厂 wt01 设备； 选择的时间序列是“状态”和“温度”。 SQL 语句要求返回时间“ 2017-11-01T00：05：00.000”和“ 2017-11-01T00：12：00.000”之间的状态和温度传感器值的第 3 至 4 行（第一行） 编号为第 0 行）。</p><p>结果如下所示：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>+-----------------------------+------------------------+-----------------------------+</span></span>
<span class="line"><span>|                         Time|root.ln.wf01.wt01.status|root.ln.wf01.wt01.temperature|</span></span>
<span class="line"><span>+-----------------------------+------------------------+-----------------------------+</span></span>
<span class="line"><span>|2017-11-01T00:03:00.000+08:00|                   false|                        20.18|</span></span>
<span class="line"><span>|2017-11-01T00:04:00.000+08:00|                   false|                        21.13|</span></span>
<span class="line"><span>|2017-11-01T00:05:00.000+08:00|                   false|                        22.72|</span></span>
<span class="line"><span>|2017-11-01T00:06:00.000+08:00|                   false|                        20.71|</span></span>
<span class="line"><span>|2017-11-01T00:07:00.000+08:00|                   false|                        21.45|</span></span>
<span class="line"><span>+-----------------------------+------------------------+-----------------------------+</span></span>
<span class="line"><span>Total line number = 5</span></span>
<span class="line"><span>It costs 0.000s</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>示例 4：</strong> <code>LIMIT</code> 子句与 <code>GROUP BY</code> 子句组合</li></ul><p>SQL 语句：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#56B6C2;"> count</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">status</span><span style="color:#ABB2BF;">), max_value(temperature) </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">ln</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wf01</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wt01</span><span style="color:#C678DD;"> group by</span><span style="color:#ABB2BF;"> ([</span><span style="color:#D19A66;">2017</span><span style="color:#ABB2BF;">-</span><span style="color:#D19A66;">11</span><span style="color:#ABB2BF;">-01T00:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">2017</span><span style="color:#ABB2BF;">-</span><span style="color:#D19A66;">11</span><span style="color:#ABB2BF;">-07T23:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">),1d) </span><span style="color:#C678DD;">limit</span><span style="color:#D19A66;"> 4</span><span style="color:#ABB2BF;"> offset </span><span style="color:#D19A66;">3</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>含义：</p><p>SQL 语句子句要求返回查询结果的第 3 至 6 行（第一行编号为 0 行）。</p><p>结果如下所示：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>+-----------------------------+-------------------------------+----------------------------------------+</span></span>
<span class="line"><span>|                         Time|count(root.ln.wf01.wt01.status)|max_value(root.ln.wf01.wt01.temperature)|</span></span>
<span class="line"><span>+-----------------------------+-------------------------------+----------------------------------------+</span></span>
<span class="line"><span>|2017-11-04T00:00:00.000+08:00|                           1440|                                    26.0|</span></span>
<span class="line"><span>|2017-11-05T00:00:00.000+08:00|                           1440|                                    26.0|</span></span>
<span class="line"><span>|2017-11-06T00:00:00.000+08:00|                           1440|                                   25.99|</span></span>
<span class="line"><span>|2017-11-07T00:00:00.000+08:00|                           1380|                                    26.0|</span></span>
<span class="line"><span>+-----------------------------+-------------------------------+----------------------------------------+</span></span>
<span class="line"><span>Total line number = 4</span></span>
<span class="line"><span>It costs 0.016s</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="按列分页" tabindex="-1"><a class="header-anchor" href="#按列分页"><span>按列分页</span></a></h2><p>用户可以通过 <code>SLIMIT</code> 和 <code>SOFFSET</code> 子句控制查询结果的列数，<code>SLIMIT seriesLimit</code> 指定查询结果的列数，<code>SOFFSET seriesOffset</code> 指定查询结果显示的起始列位置。</p><p>注意：</p><ul><li>仅用于控制值列，对时间列和设备列无效。</li><li>当 <code>seriesOffset</code> 超过结果集的大小时，返回空结果集。</li><li>当 <code>seriesLimit</code> 超过结果集的大小时，返回所有查询结果。</li><li>当 <code>seriesLimit</code> 和 <code>seriesOffset</code> 不是正整数，或超过 <code>INT32</code> 允许的最大值时，系统将提示错误。</li></ul><p>我们将通过以下示例演示如何使用 <code>SLIMIT</code> 和 <code>SOFFSET</code> 子句。</p><ul><li><strong>示例 1：</strong> 基本的 <code>SLIMIT</code> 子句</li></ul><p>SQL 语句：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> * </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">ln</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wf01</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wt01</span><span style="color:#C678DD;"> where</span><span style="color:#C678DD;"> time</span><span style="color:#56B6C2;"> &gt;</span><span style="color:#D19A66;"> 2017</span><span style="color:#ABB2BF;">-</span><span style="color:#D19A66;">11</span><span style="color:#ABB2BF;">-01T00:</span><span style="color:#D19A66;">05</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">000</span><span style="color:#C678DD;"> and</span><span style="color:#C678DD;"> time</span><span style="color:#56B6C2;"> &lt;</span><span style="color:#D19A66;"> 2017</span><span style="color:#ABB2BF;">-</span><span style="color:#D19A66;">11</span><span style="color:#ABB2BF;">-01T00:</span><span style="color:#D19A66;">12</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">000</span><span style="color:#ABB2BF;"> slimit </span><span style="color:#D19A66;">1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>含义：</p><p>所选设备为 ln 组 wf01 工厂 wt01 设备； 所选时间序列是该设备下的第二列，即温度。 SQL 语句要求在&quot;2017-11-01T00:05:00.000&quot;和&quot;2017-11-01T00:12:00.000&quot;的时间点之间选择温度传感器值。</p><p>结果如下所示：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>+-----------------------------+-----------------------------+</span></span>
<span class="line"><span>|                         Time|root.ln.wf01.wt01.temperature|</span></span>
<span class="line"><span>+-----------------------------+-----------------------------+</span></span>
<span class="line"><span>|2017-11-01T00:06:00.000+08:00|                        20.71|</span></span>
<span class="line"><span>|2017-11-01T00:07:00.000+08:00|                        21.45|</span></span>
<span class="line"><span>|2017-11-01T00:08:00.000+08:00|                        22.58|</span></span>
<span class="line"><span>|2017-11-01T00:09:00.000+08:00|                        20.98|</span></span>
<span class="line"><span>|2017-11-01T00:10:00.000+08:00|                        25.52|</span></span>
<span class="line"><span>|2017-11-01T00:11:00.000+08:00|                        22.91|</span></span>
<span class="line"><span>+-----------------------------+-----------------------------+</span></span>
<span class="line"><span>Total line number = 6</span></span>
<span class="line"><span>It costs 0.000s</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>示例 2：</strong> 带 <code>SOFFSET</code> 的 <code>SLIMIT</code> 子句</li></ul><p>SQL 语句：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> * </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">ln</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wf01</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wt01</span><span style="color:#C678DD;"> where</span><span style="color:#C678DD;"> time</span><span style="color:#56B6C2;"> &gt;</span><span style="color:#D19A66;"> 2017</span><span style="color:#ABB2BF;">-</span><span style="color:#D19A66;">11</span><span style="color:#ABB2BF;">-01T00:</span><span style="color:#D19A66;">05</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">000</span><span style="color:#C678DD;"> and</span><span style="color:#C678DD;"> time</span><span style="color:#56B6C2;"> &lt;</span><span style="color:#D19A66;"> 2017</span><span style="color:#ABB2BF;">-</span><span style="color:#D19A66;">11</span><span style="color:#ABB2BF;">-01T00:</span><span style="color:#D19A66;">12</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">000</span><span style="color:#ABB2BF;"> slimit </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;"> soffset </span><span style="color:#D19A66;">1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>含义：</p><p>所选设备为 ln 组 wf01 工厂 wt01 设备； 所选时间序列是该设备下的第一列，即电源状态。 SQL 语句要求在&quot; 2017-11-01T00:05:00.000&quot;和&quot;2017-11-01T00:12:00.000&quot;的时间点之间选择状态传感器值。</p><p>结果如下所示：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>+-----------------------------+------------------------+</span></span>
<span class="line"><span>|                         Time|root.ln.wf01.wt01.status|</span></span>
<span class="line"><span>+-----------------------------+------------------------+</span></span>
<span class="line"><span>|2017-11-01T00:06:00.000+08:00|                   false|</span></span>
<span class="line"><span>|2017-11-01T00:07:00.000+08:00|                   false|</span></span>
<span class="line"><span>|2017-11-01T00:08:00.000+08:00|                   false|</span></span>
<span class="line"><span>|2017-11-01T00:09:00.000+08:00|                   false|</span></span>
<span class="line"><span>|2017-11-01T00:10:00.000+08:00|                    true|</span></span>
<span class="line"><span>|2017-11-01T00:11:00.000+08:00|                   false|</span></span>
<span class="line"><span>+-----------------------------+------------------------+</span></span>
<span class="line"><span>Total line number = 6</span></span>
<span class="line"><span>It costs 0.003s</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>示例 3：</strong> <code>SLIMIT</code> 子句与 <code>GROUP BY</code> 子句结合</li></ul><p>SQL 语句：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> max_value(*) </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">ln</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wf01</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wt01</span><span style="color:#C678DD;"> group by</span><span style="color:#ABB2BF;"> ([</span><span style="color:#D19A66;">2017</span><span style="color:#ABB2BF;">-</span><span style="color:#D19A66;">11</span><span style="color:#ABB2BF;">-01T00:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">2017</span><span style="color:#ABB2BF;">-</span><span style="color:#D19A66;">11</span><span style="color:#ABB2BF;">-07T23:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">),1d) slimit </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;"> soffset </span><span style="color:#D19A66;">1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>含义：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>+-----------------------------+-----------------------------------+</span></span>
<span class="line"><span>|                         Time|max_value(root.ln.wf01.wt01.status)|</span></span>
<span class="line"><span>+-----------------------------+-----------------------------------+</span></span>
<span class="line"><span>|2017-11-01T00:00:00.000+08:00|                               true|</span></span>
<span class="line"><span>|2017-11-02T00:00:00.000+08:00|                               true|</span></span>
<span class="line"><span>|2017-11-03T00:00:00.000+08:00|                               true|</span></span>
<span class="line"><span>|2017-11-04T00:00:00.000+08:00|                               true|</span></span>
<span class="line"><span>|2017-11-05T00:00:00.000+08:00|                               true|</span></span>
<span class="line"><span>|2017-11-06T00:00:00.000+08:00|                               true|</span></span>
<span class="line"><span>|2017-11-07T00:00:00.000+08:00|                               true|</span></span>
<span class="line"><span>+-----------------------------+-----------------------------------+</span></span>
<span class="line"><span>Total line number = 7</span></span>
<span class="line"><span>It costs 0.000s</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>示例 4：</strong> <code>SLIMIT</code> 子句与 <code>LIMIT</code> 子句结合</li></ul><p>SQL 语句：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> * </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">ln</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wf01</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wt01</span><span style="color:#C678DD;"> limit</span><span style="color:#D19A66;"> 10</span><span style="color:#ABB2BF;"> offset </span><span style="color:#D19A66;">100</span><span style="color:#ABB2BF;"> slimit </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;"> soffset </span><span style="color:#D19A66;">0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>含义：</p><p>所选设备为 ln 组 wf01 工厂 wt01 设备； 所选时间序列是此设备下的第 0 列至第 1 列（第一列编号为第 0 列）。 SQL 语句子句要求返回查询结果的第 100 至 109 行（第一行编号为 0 行）。</p><p>结果如下所示：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>+-----------------------------+-----------------------------+------------------------+</span></span>
<span class="line"><span>|                         Time|root.ln.wf01.wt01.temperature|root.ln.wf01.wt01.status|</span></span>
<span class="line"><span>+-----------------------------+-----------------------------+------------------------+</span></span>
<span class="line"><span>|2017-11-01T01:40:00.000+08:00|                        21.19|                   false|</span></span>
<span class="line"><span>|2017-11-01T01:41:00.000+08:00|                        22.79|                   false|</span></span>
<span class="line"><span>|2017-11-01T01:42:00.000+08:00|                        22.98|                   false|</span></span>
<span class="line"><span>|2017-11-01T01:43:00.000+08:00|                        21.52|                   false|</span></span>
<span class="line"><span>|2017-11-01T01:44:00.000+08:00|                        23.45|                    true|</span></span>
<span class="line"><span>|2017-11-01T01:45:00.000+08:00|                        24.06|                    true|</span></span>
<span class="line"><span>|2017-11-01T01:46:00.000+08:00|                         22.6|                   false|</span></span>
<span class="line"><span>|2017-11-01T01:47:00.000+08:00|                        23.78|                    true|</span></span>
<span class="line"><span>|2017-11-01T01:48:00.000+08:00|                        24.72|                    true|</span></span>
<span class="line"><span>|2017-11-01T01:49:00.000+08:00|                        24.68|                    true|</span></span>
<span class="line"><span>+-----------------------------+-----------------------------+------------------------+</span></span>
<span class="line"><span>Total line number = 10</span></span>
<span class="line"><span>It costs 0.009s</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,67)]))}const r=n(p,[["render",o],["__file","Pagination.html.vue"]]),t=JSON.parse('{"path":"/zh/UserGuide/V1.0.x/Query-Data/Pagination.html","title":"查询结果分页","lang":"zh-CN","frontmatter":{"description":"查询结果分页 当查询结果集数据量很大，放在一个页面不利于显示，可以使用 LIMIT/SLIMIT 子句和 OFFSET/SOFFSET 子句进行分页控制。 LIMIT 和 SLIMIT 子句用于控制查询结果的行数和列数。 OFFSET 和 SOFFSET 子句用于控制结果显示的起始位置。 按行分页 用户可以通过 LIMIT 和 OFFSET 子句控制查...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.0.x/Query-Data/Pagination.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/Query-Data/Pagination.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"查询结果分页"}],["meta",{"property":"og:description","content":"查询结果分页 当查询结果集数据量很大，放在一个页面不利于显示，可以使用 LIMIT/SLIMIT 子句和 OFFSET/SOFFSET 子句进行分页控制。 LIMIT 和 SLIMIT 子句用于控制查询结果的行数和列数。 OFFSET 和 SOFFSET 子句用于控制结果显示的起始位置。 按行分页 用户可以通过 LIMIT 和 OFFSET 子句控制查..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"查询结果分页\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"按行分页","slug":"按行分页","link":"#按行分页","children":[]},{"level":2,"title":"按列分页","slug":"按列分页","link":"#按列分页","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","username":"CritasWang","email":"critas@outlook.com","commits":1,"url":"https://github.com/CritasWang"}]},"readingTime":{"minutes":5.73,"words":1720},"filePathRelative":"zh/UserGuide/V1.0.x/Query-Data/Pagination.md","localizedDate":"2023年7月10日","autoDesc":true}');export{r as comp,t as data};
