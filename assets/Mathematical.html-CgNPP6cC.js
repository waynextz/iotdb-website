import{_ as s,c as a,b as n,o as e}from"./app-C6MIQYKi.js";const d={};function l(o,t){return e(),a("div",null,t[0]||(t[0]=[n(`<h1 id="算数运算符和函数" tabindex="-1"><a class="header-anchor" href="#算数运算符和函数"><span>算数运算符和函数</span></a></h1><h2 id="算数运算符" tabindex="-1"><a class="header-anchor" href="#算数运算符"><span>算数运算符</span></a></h2><h3 id="一元算数运算符" tabindex="-1"><a class="header-anchor" href="#一元算数运算符"><span>一元算数运算符</span></a></h3><p>支持的运算符：<code>+</code>, <code>-</code></p><p>输入数据类型要求：<code>INT32</code>, <code>INT64</code>, <code>FLOAT</code>, <code>DOUBLE</code></p><p>输出数据类型：与输入数据类型一致</p><h3 id="二元算数运算符" tabindex="-1"><a class="header-anchor" href="#二元算数运算符"><span>二元算数运算符</span></a></h3><p>支持的运算符：<code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>%</code></p><p>输入数据类型要求：<code>INT32</code>, <code>INT64</code>, <code>FLOAT</code>和<code>DOUBLE</code></p><p>输出数据类型：<code>DOUBLE</code></p><p>注意：当某个时间戳下左操作数和右操作数都不为空（<code>null</code>）时，二元运算操作才会有输出结果</p><h3 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h3><p>例如：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> s1<span class="token punctuation">,</span> <span class="token operator">-</span> s1<span class="token punctuation">,</span> s2<span class="token punctuation">,</span> <span class="token operator">+</span> s2<span class="token punctuation">,</span> s1 <span class="token operator">+</span> s2<span class="token punctuation">,</span> s1 <span class="token operator">-</span> s2<span class="token punctuation">,</span> s1 <span class="token operator">*</span> s2<span class="token punctuation">,</span> s1 <span class="token operator">/</span> s2<span class="token punctuation">,</span> s1 <span class="token operator">%</span> s2 <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>结果：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+-------------+--------------+-------------+-------------+-----------------------------+-----------------------------+-----------------------------+-----------------------------+-----------------------------+</span>
<span class="line">|                         Time|root.sg.d1.s1|-root.sg.d1.s1|root.sg.d1.s2|root.sg.d1.s2|root.sg.d1.s1 + root.sg.d1.s2|root.sg.d1.s1 - root.sg.d1.s2|root.sg.d1.s1 * root.sg.d1.s2|root.sg.d1.s1 / root.sg.d1.s2|root.sg.d1.s1 % root.sg.d1.s2|</span>
<span class="line">+-----------------------------+-------------+--------------+-------------+-------------+-----------------------------+-----------------------------+-----------------------------+-----------------------------+-----------------------------+</span>
<span class="line">|1970-01-01T08:00:00.001+08:00|          1.0|          -1.0|          1.0|          1.0|                          2.0|                          0.0|                          1.0|                          1.0|                          0.0|</span>
<span class="line">|1970-01-01T08:00:00.002+08:00|          2.0|          -2.0|          2.0|          2.0|                          4.0|                          0.0|                          4.0|                          1.0|                          0.0|</span>
<span class="line">|1970-01-01T08:00:00.003+08:00|          3.0|          -3.0|          3.0|          3.0|                          6.0|                          0.0|                          9.0|                          1.0|                          0.0|</span>
<span class="line">|1970-01-01T08:00:00.004+08:00|          4.0|          -4.0|          4.0|          4.0|                          8.0|                          0.0|                         16.0|                          1.0|                          0.0|</span>
<span class="line">|1970-01-01T08:00:00.005+08:00|          5.0|          -5.0|          5.0|          5.0|                         10.0|                          0.0|                         25.0|                          1.0|                          0.0|</span>
<span class="line">+-----------------------------+-------------+--------------+-------------+-------------+-----------------------------+-----------------------------+-----------------------------+-----------------------------+-----------------------------+</span>
<span class="line">Total line number = 5</span>
<span class="line">It costs 0.014s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数学函数" tabindex="-1"><a class="header-anchor" href="#数学函数"><span>数学函数</span></a></h2><p>目前 IoTDB 支持下列数学函数，这些数学函数的行为与这些函数在 Java Math 标准库中对应实现的行为一致。</p><table><thead><tr><th>函数名</th><th>输入序列类型</th><th>输出序列类型</th><th>Java 标准库中的对应实现</th></tr></thead><tbody><tr><td>SIN</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td>Math#sin(double)</td></tr><tr><td>COS</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td>Math#cos(double)</td></tr><tr><td>TAN</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td>Math#tan(double)</td></tr><tr><td>ASIN</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td>Math#asin(double)</td></tr><tr><td>ACOS</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td>Math#acos(double)</td></tr><tr><td>ATAN</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td>Math#atan(double)</td></tr><tr><td>SINH</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td>Math#sinh(double)</td></tr><tr><td>COSH</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td>Math#cosh(double)</td></tr><tr><td>TANH</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td>Math#tanh(double)</td></tr><tr><td>DEGREES</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td>Math#toDegrees(double)</td></tr><tr><td>RADIANS</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td>Math#toRadians(double)</td></tr><tr><td>ABS</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>与输入序列的实际类型一致</td><td>Math#abs(int) / Math#abs(long) /Math#abs(float) /Math#abs(double)</td></tr><tr><td>SIGN</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td>Math#signum(double)</td></tr><tr><td>CEIL</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td>Math#ceil(double)</td></tr><tr><td>FLOOR</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td>Math#floor(double)</td></tr><tr><td>ROUND</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td>Math#rint(double)</td></tr><tr><td>EXP</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td>Math#exp(double)</td></tr><tr><td>LN</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td>Math#log(double)</td></tr><tr><td>LOG10</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td>Math#log10(double)</td></tr><tr><td>SQRT</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td>Math#sqrt(double)</td></tr></tbody></table><p>例如：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> s1<span class="token punctuation">,</span> sin<span class="token punctuation">(</span>s1<span class="token punctuation">)</span><span class="token punctuation">,</span> cos<span class="token punctuation">(</span>s1<span class="token punctuation">)</span><span class="token punctuation">,</span> tan<span class="token punctuation">(</span>s1<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1 <span class="token keyword">limit</span> <span class="token number">5</span> <span class="token keyword">offset</span> <span class="token number">1000</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>结果：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+-------------------+-------------------+--------------------+-------------------+</span>
<span class="line">|                         Time|     root.sg1.d1.s1|sin(root.sg1.d1.s1)| cos(root.sg1.d1.s1)|tan(root.sg1.d1.s1)|</span>
<span class="line">+-----------------------------+-------------------+-------------------+--------------------+-------------------+</span>
<span class="line">|2020-12-10T17:11:49.037+08:00|7360723084922759782| 0.8133527237573284|  0.5817708713544664| 1.3980636773094157|</span>
<span class="line">|2020-12-10T17:11:49.038+08:00|4377791063319964531|-0.8938962705202537|  0.4482738644511651| -1.994085181866842|</span>
<span class="line">|2020-12-10T17:11:49.039+08:00|7972485567734642915| 0.9627757585308978|-0.27030138509681073|-3.5618602479083545|</span>
<span class="line">|2020-12-10T17:11:49.040+08:00|2508858212791964081|-0.6073417341629443| -0.7944406950452296| 0.7644897069734913|</span>
<span class="line">|2020-12-10T17:11:49.041+08:00|2817297431185141819|-0.8419358900502509| -0.5395775727782725| 1.5603611649667768|</span>
<span class="line">+-----------------------------+-------------------+-------------------+--------------------+-------------------+</span>
<span class="line">Total line number = 5</span>
<span class="line">It costs 0.008s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23)]))}const r=s(d,[["render",l],["__file","Mathematical.html.vue"]]),p=JSON.parse('{"path":"/zh/UserGuide/V1.0.x/Operators-Functions/Mathematical.html","title":"算数运算符和函数","lang":"zh-CN","frontmatter":{"description":"算数运算符和函数 算数运算符 一元算数运算符 支持的运算符：+, - 输入数据类型要求：INT32, INT64, FLOAT, DOUBLE 输出数据类型：与输入数据类型一致 二元算数运算符 支持的运算符：+, -, *, /, % 输入数据类型要求：INT32, INT64, FLOAT和DOUBLE 输出数据类型：DOUBLE 注意：当某个时间戳...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.0.x/Operators-Functions/Mathematical.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/Operators-Functions/Mathematical.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"算数运算符和函数"}],["meta",{"property":"og:description","content":"算数运算符和函数 算数运算符 一元算数运算符 支持的运算符：+, - 输入数据类型要求：INT32, INT64, FLOAT, DOUBLE 输出数据类型：与输入数据类型一致 二元算数运算符 支持的运算符：+, -, *, /, % 输入数据类型要求：INT32, INT64, FLOAT和DOUBLE 输出数据类型：DOUBLE 注意：当某个时间戳..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"算数运算符和函数\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"算数运算符","slug":"算数运算符","link":"#算数运算符","children":[{"level":3,"title":"一元算数运算符","slug":"一元算数运算符","link":"#一元算数运算符","children":[]},{"level":3,"title":"二元算数运算符","slug":"二元算数运算符","link":"#二元算数运算符","children":[]},{"level":3,"title":"使用示例","slug":"使用示例","link":"#使用示例","children":[]}]},{"level":2,"title":"数学函数","slug":"数学函数","link":"#数学函数","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":2.63,"words":788},"filePathRelative":"zh/UserGuide/V1.0.x/Operators-Functions/Mathematical.md","localizedDate":"2023年7月10日","autoDesc":true}');export{r as comp,p as data};
