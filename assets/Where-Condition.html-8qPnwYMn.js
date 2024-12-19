import{_ as l,c as o,b as a,d as p,e,a as r,f as t,r as c,o as i}from"./app-C-0rb--l.js";const d={};function y(B,s){const n=c("RouteLink");return i(),o("div",null,[s[3]||(s[3]=a('<h1 id="查询过滤条件" tabindex="-1"><a class="header-anchor" href="#查询过滤条件"><span>查询过滤条件</span></a></h1><p><code>WHERE</code> 子句指定了对数据行的筛选条件，由一个 <code>whereCondition</code> 组成。</p><p><code>whereCondition</code> 是一个逻辑表达式，对于要选择的每一行，其计算结果为真。如果没有 <code>WHERE</code> 子句，将选择所有行。<br> 在 <code>whereCondition</code> 中，可以使用除聚合函数之外的任何 IOTDB 支持的函数和运算符。</p><p>根据过滤条件的不同，可以分为时间过滤条件和值过滤条件。时间过滤条件和值过滤条件可以混合使用。</p><h2 id="时间过滤条件" tabindex="-1"><a class="header-anchor" href="#时间过滤条件"><span>时间过滤条件</span></a></h2>',5)),p("p",null,[s[1]||(s[1]=e("使用时间过滤条件可以筛选特定时间范围的数据。对于时间戳支持的格式，请参考 ")),r(n,{to:"/zh/UserGuide/V1.0.x/Data-Concept/Data-Type.html"},{default:t(()=>s[0]||(s[0]=[e("时间戳类型")])),_:1}),s[2]||(s[2]=e(" 。"))]),s[4]||(s[4]=a(`<p>示例如下：</p><ol><li><p>选择时间戳大于 2022-01-01T00:05:00.000 的数据：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> s1 </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sg1</span><span style="color:#ABB2BF;">.d1 </span><span style="color:#C678DD;">where</span><span style="color:#C678DD;"> time</span><span style="color:#56B6C2;"> &gt;</span><span style="color:#D19A66;"> 2022</span><span style="color:#ABB2BF;">-</span><span style="color:#D19A66;">01</span><span style="color:#ABB2BF;">-01T00:</span><span style="color:#D19A66;">05</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">000</span><span style="color:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>选择时间戳等于 2022-01-01T00:05:00.000 的数据：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> s1 </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sg1</span><span style="color:#ABB2BF;">.d1 </span><span style="color:#C678DD;">where</span><span style="color:#C678DD;"> time</span><span style="color:#56B6C2;"> =</span><span style="color:#D19A66;"> 2022</span><span style="color:#ABB2BF;">-</span><span style="color:#D19A66;">01</span><span style="color:#ABB2BF;">-01T00:</span><span style="color:#D19A66;">05</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">000</span><span style="color:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>选择时间区间 [2017-11-01T00:05:00.000, 2017-11-01T00:12:00.000) 内的数据：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> s1 </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sg1</span><span style="color:#ABB2BF;">.d1 </span><span style="color:#C678DD;">where</span><span style="color:#C678DD;"> time</span><span style="color:#56B6C2;"> &gt;=</span><span style="color:#D19A66;"> 2022</span><span style="color:#ABB2BF;">-</span><span style="color:#D19A66;">01</span><span style="color:#ABB2BF;">-01T00:</span><span style="color:#D19A66;">05</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">000</span><span style="color:#C678DD;"> and</span><span style="color:#C678DD;"> time</span><span style="color:#56B6C2;"> &lt;</span><span style="color:#D19A66;"> 2017</span><span style="color:#ABB2BF;">-</span><span style="color:#D19A66;">11</span><span style="color:#ABB2BF;">-01T00:</span><span style="color:#D19A66;">12</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">000</span><span style="color:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ol><p>注：在上述示例中，<code>time</code> 也可写做 <code>timestamp</code>。</p><h2 id="值过滤条件" tabindex="-1"><a class="header-anchor" href="#值过滤条件"><span>值过滤条件</span></a></h2><p>使用值过滤条件可以筛选数据值满足特定条件的数据。<br><strong>允许</strong>使用 select 子句中未选择的时间序列作为值过滤条件。</p><p>示例如下：</p><ol><li><p>选择值大于 36.5 的数据：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> temperature </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sg1</span><span style="color:#ABB2BF;">.d1 </span><span style="color:#C678DD;">where</span><span style="color:#ABB2BF;"> temperature </span><span style="color:#56B6C2;">&gt;</span><span style="color:#D19A66;"> 36</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">5</span><span style="color:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>选择值等于 true 的数据：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#C678DD;"> status</span><span style="color:#C678DD;"> from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sg1</span><span style="color:#ABB2BF;">.d1 </span><span style="color:#C678DD;">where</span><span style="color:#C678DD;"> status</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> true;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>选择区间 [36.5,40] 内或之外的数据：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> temperature </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sg1</span><span style="color:#ABB2BF;">.d1 </span><span style="color:#C678DD;">where</span><span style="color:#ABB2BF;"> temperature </span><span style="color:#C678DD;">between</span><span style="color:#D19A66;"> 36</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">5</span><span style="color:#C678DD;"> and</span><span style="color:#D19A66;"> 40</span><span style="color:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> temperature </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sg1</span><span style="color:#ABB2BF;">.d1 </span><span style="color:#C678DD;">where</span><span style="color:#ABB2BF;"> temperature </span><span style="color:#C678DD;">not</span><span style="color:#C678DD;"> between</span><span style="color:#D19A66;"> 36</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">5</span><span style="color:#C678DD;"> and</span><span style="color:#D19A66;"> 40</span><span style="color:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>选择值在特定范围内的数据：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> code </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sg1</span><span style="color:#ABB2BF;">.d1 </span><span style="color:#C678DD;">where</span><span style="color:#ABB2BF;"> code </span><span style="color:#C678DD;">in</span><span style="color:#ABB2BF;"> (</span><span style="color:#98C379;">&#39;200&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;300&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;400&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;500&#39;</span><span style="color:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>选择值在特定范围外的数据：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> code </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sg1</span><span style="color:#ABB2BF;">.d1 </span><span style="color:#C678DD;">where</span><span style="color:#ABB2BF;"> code </span><span style="color:#C678DD;">not</span><span style="color:#C678DD;"> in</span><span style="color:#ABB2BF;"> (</span><span style="color:#98C379;">&#39;200&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;300&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;400&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;500&#39;</span><span style="color:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>选择值为空的数据:</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> code </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sg1</span><span style="color:#ABB2BF;">.d1 </span><span style="color:#C678DD;">where</span><span style="color:#ABB2BF;"> temperature </span><span style="color:#C678DD;">is</span><span style="color:#C678DD;"> null</span><span style="color:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>选择值为非空的数据:</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> code </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sg1</span><span style="color:#ABB2BF;">.d1 </span><span style="color:#C678DD;">where</span><span style="color:#ABB2BF;"> temperature </span><span style="color:#C678DD;">is not null</span><span style="color:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ol><h2 id="模糊查询" tabindex="-1"><a class="header-anchor" href="#模糊查询"><span>模糊查询</span></a></h2><p>对于 TEXT 类型的数据，支持使用 <code>Like</code> 和 <code>Regexp</code> 运算符对数据进行模糊匹配</p><h3 id="使用-like-进行模糊匹配" tabindex="-1"><a class="header-anchor" href="#使用-like-进行模糊匹配"><span>使用 <code>Like</code> 进行模糊匹配</span></a></h3><p><strong>匹配规则：</strong></p><ul><li><code>%</code> 表示任意0个或多个字符。</li><li><code>_</code> 表示任意单个字符。</li></ul><p><strong>示例 1：</strong> 查询 <code>root.sg.d1</code> 下 <code>value</code> 含有<code>&#39;cc&#39;</code>的数据。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>IoTDB&gt; select * from root.sg.d1 where value like &#39;%cc%&#39;</span></span>
<span class="line"><span>+-----------------------------+----------------+</span></span>
<span class="line"><span>|                         Time|root.sg.d1.value|</span></span>
<span class="line"><span>+-----------------------------+----------------+</span></span>
<span class="line"><span>|2017-11-01T00:00:00.000+08:00|        aabbccdd| </span></span>
<span class="line"><span>|2017-11-01T00:00:01.000+08:00|              cc|</span></span>
<span class="line"><span>+-----------------------------+----------------+</span></span>
<span class="line"><span>Total line number = 2</span></span>
<span class="line"><span>It costs 0.002s</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong> 查询 <code>root.sg.d1</code> 下 <code>value</code> 中间为 <code>&#39;b&#39;</code>、前后为任意单个字符的数据。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>IoTDB&gt; select * from root.sg.device where value like &#39;_b_&#39;</span></span>
<span class="line"><span>+-----------------------------+----------------+</span></span>
<span class="line"><span>|                         Time|root.sg.d1.value|</span></span>
<span class="line"><span>+-----------------------------+----------------+</span></span>
<span class="line"><span>|2017-11-01T00:00:02.000+08:00|             abc| </span></span>
<span class="line"><span>+-----------------------------+----------------+</span></span>
<span class="line"><span>Total line number = 1</span></span>
<span class="line"><span>It costs 0.002s</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-regexp-进行模糊匹配" tabindex="-1"><a class="header-anchor" href="#使用-regexp-进行模糊匹配"><span>使用 <code>Regexp</code> 进行模糊匹配</span></a></h3><p>需要传入的过滤条件为 <strong>Java 标准库风格的正则表达式</strong>。</p><p><strong>常见的正则匹配举例：</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>长度为3-20的所有字符：^.{3,20}$</span></span>
<span class="line"><span>大写英文字符：^[A-Z]+$</span></span>
<span class="line"><span>数字和英文字符：^[A-Za-z0-9]+$</span></span>
<span class="line"><span>以a开头的：^a.*</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 1：</strong> 查询 root.sg.d1 下 value 值为26个英文字符组成的字符串。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#61AFEF;">IoTDB</span><span style="color:#ABB2BF;">&gt; </span><span style="color:#98C379;">select</span><span style="color:#E5C07B;"> *</span><span style="color:#98C379;"> from</span><span style="color:#98C379;"> root.sg.d1</span><span style="color:#98C379;"> where</span><span style="color:#98C379;"> value</span><span style="color:#98C379;"> regexp</span><span style="color:#98C379;"> &#39;^[A-Za-z]+$&#39;</span></span>
<span class="line"><span style="color:#61AFEF;">+-----------------------------+----------------+</span></span>
<span class="line"><span style="color:#ABB2BF;">|                         </span><span style="color:#61AFEF;">Time</span><span style="color:#ABB2BF;">|</span><span style="color:#61AFEF;">root.sg.d1.value</span><span style="color:#ABB2BF;">|</span></span>
<span class="line"><span style="color:#61AFEF;">+-----------------------------+----------------+</span></span>
<span class="line"><span style="color:#ABB2BF;">|</span><span style="color:#61AFEF;">2017-11-01T00:00:00.000+08:00</span><span style="color:#ABB2BF;">|        </span><span style="color:#61AFEF;">aabbccdd</span><span style="color:#ABB2BF;">| </span></span>
<span class="line"><span style="color:#ABB2BF;">|</span><span style="color:#61AFEF;">2017-11-01T00:00:01.000+08:00</span><span style="color:#ABB2BF;">|              </span><span style="color:#61AFEF;">cc</span><span style="color:#ABB2BF;">|</span></span>
<span class="line"><span style="color:#61AFEF;">+-----------------------------+----------------+</span></span>
<span class="line"><span style="color:#61AFEF;">Total</span><span style="color:#98C379;"> line</span><span style="color:#98C379;"> number</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 2</span></span>
<span class="line"><span style="color:#61AFEF;">It</span><span style="color:#98C379;"> costs</span><span style="color:#98C379;"> 0.002s</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong> 查询 root.sg.d1 下 value 值为26个小写英文字符组成的字符串且时间大于100的。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#61AFEF;">IoTDB</span><span style="color:#ABB2BF;">&gt; </span><span style="color:#98C379;">select</span><span style="color:#E5C07B;"> *</span><span style="color:#98C379;"> from</span><span style="color:#98C379;"> root.sg.d1</span><span style="color:#98C379;"> where</span><span style="color:#98C379;"> value</span><span style="color:#98C379;"> regexp</span><span style="color:#98C379;"> &#39;^[a-z]+$&#39;</span><span style="color:#98C379;"> and</span><span style="color:#98C379;"> time</span><span style="color:#ABB2BF;"> &gt; </span><span style="color:#D19A66;">100</span></span>
<span class="line"><span style="color:#61AFEF;">+-----------------------------+----------------+</span></span>
<span class="line"><span style="color:#ABB2BF;">|                         </span><span style="color:#61AFEF;">Time</span><span style="color:#ABB2BF;">|</span><span style="color:#61AFEF;">root.sg.d1.value</span><span style="color:#ABB2BF;">|</span></span>
<span class="line"><span style="color:#61AFEF;">+-----------------------------+----------------+</span></span>
<span class="line"><span style="color:#ABB2BF;">|</span><span style="color:#61AFEF;">2017-11-01T00:00:00.000+08:00</span><span style="color:#ABB2BF;">|        </span><span style="color:#61AFEF;">aabbccdd</span><span style="color:#ABB2BF;">| </span></span>
<span class="line"><span style="color:#ABB2BF;">|</span><span style="color:#61AFEF;">2017-11-01T00:00:01.000+08:00</span><span style="color:#ABB2BF;">|              </span><span style="color:#61AFEF;">cc</span><span style="color:#ABB2BF;">|</span></span>
<span class="line"><span style="color:#61AFEF;">+-----------------------------+----------------+</span></span>
<span class="line"><span style="color:#61AFEF;">Total</span><span style="color:#98C379;"> line</span><span style="color:#98C379;"> number</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 2</span></span>
<span class="line"><span style="color:#61AFEF;">It</span><span style="color:#98C379;"> costs</span><span style="color:#98C379;"> 0.002s</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24))])}const v=l(d,[["render",y],["__file","Where-Condition.html.vue"]]),m=JSON.parse('{"path":"/zh/UserGuide/V1.0.x/Query-Data/Where-Condition.html","title":"查询过滤条件","lang":"zh-CN","frontmatter":{"description":"查询过滤条件 WHERE 子句指定了对数据行的筛选条件，由一个 whereCondition 组成。 whereCondition 是一个逻辑表达式，对于要选择的每一行，其计算结果为真。如果没有 WHERE 子句，将选择所有行。 在 whereCondition 中，可以使用除聚合函数之外的任何 IOTDB 支持的函数和运算符。 根据过滤条件的不同，可...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.0.x/Query-Data/Where-Condition.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/Query-Data/Where-Condition.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"查询过滤条件"}],["meta",{"property":"og:description","content":"查询过滤条件 WHERE 子句指定了对数据行的筛选条件，由一个 whereCondition 组成。 whereCondition 是一个逻辑表达式，对于要选择的每一行，其计算结果为真。如果没有 WHERE 子句，将选择所有行。 在 whereCondition 中，可以使用除聚合函数之外的任何 IOTDB 支持的函数和运算符。 根据过滤条件的不同，可..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"查询过滤条件\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"时间过滤条件","slug":"时间过滤条件","link":"#时间过滤条件","children":[]},{"level":2,"title":"值过滤条件","slug":"值过滤条件","link":"#值过滤条件","children":[]},{"level":2,"title":"模糊查询","slug":"模糊查询","link":"#模糊查询","children":[{"level":3,"title":"使用 Like 进行模糊匹配","slug":"使用-like-进行模糊匹配","link":"#使用-like-进行模糊匹配","children":[]},{"level":3,"title":"使用 Regexp 进行模糊匹配","slug":"使用-regexp-进行模糊匹配","link":"#使用-regexp-进行模糊匹配","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","username":"CritasWang","email":"critas@outlook.com","commits":1,"url":"https://github.com/CritasWang"}]},"readingTime":{"minutes":3.31,"words":992},"filePathRelative":"zh/UserGuide/V1.0.x/Query-Data/Where-Condition.md","localizedDate":"2023年7月10日","autoDesc":true}');export{v as comp,m as data};
