import{_ as c,r as s,o as l,c as h,a as i,d,e as t,b as e,w as o,f as n}from"./app-d415a090.js";const p={},u=d("h1",{id:"运算符和函数",tabindex:"-1"},[d("a",{class:"header-anchor",href:"#运算符和函数","aria-hidden":"true"},"#"),t(" 运算符和函数")],-1),T=d("p",null,[t("可以使用 "),d("code",null,"SHOW FUNCTIONS"),t(" 显示所有可用函数的列表，包括内置函数和自定义函数。")],-1),O=n('<h2 id="运算符列表" tabindex="-1"><a class="header-anchor" href="#运算符列表" aria-hidden="true">#</a> 运算符列表</h2><h3 id="算数运算符" tabindex="-1"><a class="header-anchor" href="#算数运算符" aria-hidden="true">#</a> 算数运算符</h3><table><thead><tr><th>运算符</th><th>含义</th></tr></thead><tbody><tr><td><code>+</code></td><td>取正（单目）</td></tr><tr><td><code>-</code></td><td>取负（单目）</td></tr><tr><td><code>*</code></td><td>乘</td></tr><tr><td><code>/</code></td><td>除</td></tr><tr><td><code>%</code></td><td>取余</td></tr><tr><td><code>+</code></td><td>加</td></tr><tr><td><code>-</code></td><td>减</td></tr></tbody></table>',3),E=n('<h3 id="比较运算符" tabindex="-1"><a class="header-anchor" href="#比较运算符" aria-hidden="true">#</a> 比较运算符</h3><table><thead><tr><th>运算符</th><th>含义</th></tr></thead><tbody><tr><td><code>&gt;</code></td><td>大于</td></tr><tr><td><code>&gt;=</code></td><td>大于等于</td></tr><tr><td><code>&lt;</code></td><td>小于</td></tr><tr><td><code>&lt;=</code></td><td>小于等于</td></tr><tr><td><code>==</code></td><td>等于</td></tr><tr><td><code>!=</code> / <code>&lt;&gt;</code></td><td>不等于</td></tr><tr><td><code>BETWEEN ... AND ...</code></td><td>在指定范围内</td></tr><tr><td><code>NOT BETWEEN ... AND ...</code></td><td>不在指定范围内</td></tr><tr><td><code>LIKE</code></td><td>匹配简单模式</td></tr><tr><td><code>NOT LIKE</code></td><td>无法匹配简单模式</td></tr><tr><td><code>REGEXP</code></td><td>匹配正则表达式</td></tr><tr><td><code>NOT REGEXP</code></td><td>无法匹配正则表达式</td></tr><tr><td><code>IS NULL</code></td><td>是空值</td></tr><tr><td><code>IS NOT NULL</code></td><td>不是空值</td></tr><tr><td><code>IN</code> / <code>CONTAINS</code></td><td>是指定列表中的值</td></tr><tr><td><code>NOT IN</code> / <code>NOT CONTAINS</code></td><td>不是指定列表中的值</td></tr></tbody></table>',2),N=n('<h3 id="逻辑运算符" tabindex="-1"><a class="header-anchor" href="#逻辑运算符" aria-hidden="true">#</a> 逻辑运算符</h3><table><thead><tr><th>运算符</th><th>含义</th></tr></thead><tbody><tr><td><code>NOT</code> / <code>!</code></td><td>取非（单目）</td></tr><tr><td><code>AND</code> / <code>&amp;</code> / <code>&amp;&amp;</code></td><td>逻辑与</td></tr><tr><td><code>OR</code>/ | / ||</td><td>逻辑或</td></tr></tbody></table>',2),L=n(`<h3 id="运算符优先级" tabindex="-1"><a class="header-anchor" href="#运算符优先级" aria-hidden="true">#</a> 运算符优先级</h3><p>运算符的优先级从高到低如下所示排列，同一行的运算符具有相同的优先级。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token operator">!</span><span class="token punctuation">,</span> <span class="token operator">-</span> <span class="token punctuation">(</span>单目<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">+</span> <span class="token punctuation">(</span>单目<span class="token punctuation">)</span>
<span class="token operator">*</span><span class="token punctuation">,</span> <span class="token operator">/</span><span class="token punctuation">,</span> <span class="token operator">DIV</span><span class="token punctuation">,</span> <span class="token operator">%</span><span class="token punctuation">,</span> MOD
<span class="token operator">-</span><span class="token punctuation">,</span> <span class="token operator">+</span>
<span class="token operator">=</span><span class="token punctuation">,</span> <span class="token operator">=</span><span class="token operator">=</span><span class="token punctuation">,</span> <span class="token operator">&lt;=&gt;</span><span class="token punctuation">,</span> <span class="token operator">&gt;=</span><span class="token punctuation">,</span> <span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token operator">&lt;=</span><span class="token punctuation">,</span> <span class="token operator">&lt;</span><span class="token punctuation">,</span> <span class="token operator">&lt;&gt;</span><span class="token punctuation">,</span> <span class="token operator">!=</span>
<span class="token operator">LIKE</span><span class="token punctuation">,</span> <span class="token operator">REGEXP</span><span class="token punctuation">,</span> <span class="token operator">NOT</span> <span class="token operator">LIKE</span><span class="token punctuation">,</span> <span class="token operator">NOT</span> <span class="token operator">REGEXP</span>
<span class="token operator">BETWEEN</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token operator">AND</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span> <span class="token operator">NOT</span> <span class="token operator">BETWEEN</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token operator">AND</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token operator">IS</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token operator">IS</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span>
<span class="token operator">IN</span><span class="token punctuation">,</span> <span class="token keyword">CONTAINS</span><span class="token punctuation">,</span> <span class="token operator">NOT</span> <span class="token operator">IN</span><span class="token punctuation">,</span> <span class="token operator">NOT</span> <span class="token keyword">CONTAINS</span>
<span class="token operator">AND</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span><span class="token punctuation">,</span> <span class="token operator">&amp;&amp;</span>
<span class="token operator">OR</span><span class="token punctuation">,</span> <span class="token operator">|</span><span class="token punctuation">,</span> <span class="token operator">||</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="内置函数列表" tabindex="-1"><a class="header-anchor" href="#内置函数列表" aria-hidden="true">#</a> 内置函数列表</h2><p>列表中的函数无须注册即可在 IoTDB 中使用，数据函数质量库中的函数需要参考注册步骤进行注册后才能使用。</p><h3 id="聚合函数" tabindex="-1"><a class="header-anchor" href="#聚合函数" aria-hidden="true">#</a> 聚合函数</h3><table><thead><tr><th>函数名</th><th>功能描述</th><th>允许的输入类型</th><th>必要的属性参数</th><th>输出类型</th></tr></thead><tbody><tr><td>SUM</td><td>求和。</td><td>INT32 INT64 FLOAT DOUBLE</td><td>无</td><td>DOUBLE</td></tr><tr><td>COUNT</td><td>计算数据点数。</td><td>所有类型</td><td>无</td><td>INT64</td></tr><tr><td>AVG</td><td>求平均值。</td><td>INT32 INT64 FLOAT DOUBLE</td><td>无</td><td>DOUBLE</td></tr><tr><td>EXTREME</td><td>求具有最大绝对值的值。如果正值和负值的最大绝对值相等，则返回正值。</td><td>INT32 INT64 FLOAT DOUBLE</td><td>无</td><td>与输入类型一致</td></tr><tr><td>MAX_VALUE</td><td>求最大值。</td><td>INT32 INT64 FLOAT DOUBLE</td><td>无</td><td>与输入类型一致</td></tr><tr><td>MIN_VALUE</td><td>求最小值。</td><td>INT32 INT64 FLOAT DOUBLE</td><td>无</td><td>与输入类型一致</td></tr><tr><td>FIRST_VALUE</td><td>求时间戳最小的值。</td><td>所有类型</td><td>无</td><td>与输入类型一致</td></tr><tr><td>LAST_VALUE</td><td>求时间戳最大的值。</td><td>所有类型</td><td>无</td><td>与输入类型一致</td></tr><tr><td>MAX_TIME</td><td>求最大时间戳。</td><td>所有类型</td><td>无</td><td>Timestamp</td></tr><tr><td>MIN_TIME</td><td>求最小时间戳。</td><td>所有类型</td><td>无</td><td>Timestamp</td></tr><tr><td>COUNT_IF</td><td>求数据点连续满足某一给定条件，且满足条件的数据点个数（用keep表示）满足指定阈值的次数。</td><td>BOOLEAN</td><td><code>[keep &gt;=/&gt;/=/!=/&lt;/&lt;=]threshold</code>：被指定的阈值或阈值条件，若只使用<code>threshold</code>则等价于<code>keep &gt;= threshold</code>,<code>threshold</code>类型为<code>INT64</code> <code>ignoreNull</code>：可选，默认为<code>true</code>；为<code>true</code>表示忽略null值，即如果中间出现null值，直接忽略，不会打断连续性；为<code>false</code>表示不忽略null值，即如果中间出现null值，会打断连续性</td><td>INT64</td></tr><tr><td>TIME_DURATION</td><td>求某一列最大一个不为NULL的值所在时间戳与最小一个不为NULL的值所在时间戳的时间戳差</td><td>所有类型</td><td>无</td><td>INT64</td></tr><tr><td>MODE</td><td>求众数。注意： 1.输入序列的不同值个数过多时会有内存异常风险; 2.如果所有元素出现的频次相同，即没有众数，则返回对应时间戳最小的值; 3.如果有多个众数，则返回对应时间戳最小的众数。</td><td>所有类型</td><td>无</td><td>与输入类型一致</td></tr></tbody></table>`,7),I=n('<h3 id="数学函数" tabindex="-1"><a class="header-anchor" href="#数学函数" aria-hidden="true">#</a> 数学函数</h3><table><thead><tr><th>函数名</th><th>输入序列类型</th><th>输出序列类型</th><th>必要属性参数</th><th>Java 标准库中的对应实现</th></tr></thead><tbody><tr><td>SIN</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td></td><td>Math#sin(double)</td></tr><tr><td>COS</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td></td><td>Math#cos(double)</td></tr><tr><td>TAN</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td></td><td>Math#tan(double)</td></tr><tr><td>ASIN</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td></td><td>Math#asin(double)</td></tr><tr><td>ACOS</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td></td><td>Math#acos(double)</td></tr><tr><td>ATAN</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td></td><td>Math#atan(double)</td></tr><tr><td>SINH</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td></td><td>Math#sinh(double)</td></tr><tr><td>COSH</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td></td><td>Math#cosh(double)</td></tr><tr><td>TANH</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td></td><td>Math#tanh(double)</td></tr><tr><td>DEGREES</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td></td><td>Math#toDegrees(double)</td></tr><tr><td>RADIANS</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td></td><td>Math#toRadians(double)</td></tr><tr><td>ABS</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>与输入序列的实际类型一致</td><td></td><td>Math#abs(int) / Math#abs(long) /Math#abs(float) /Math#abs(double)</td></tr><tr><td>SIGN</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td></td><td>Math#signum(double)</td></tr><tr><td>CEIL</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td></td><td>Math#ceil(double)</td></tr><tr><td>FLOOR</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td></td><td>Math#floor(double)</td></tr><tr><td>ROUND</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td><code>places</code>:四舍五入有效位数，正数为小数点后面的有效位数，负数为整数位的有效位数</td><td>Math#rint(Math#pow(10,places))/Math#pow(10,places)</td></tr><tr><td>EXP</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td></td><td>Math#exp(double)</td></tr><tr><td>LN</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td></td><td>Math#log(double)</td></tr><tr><td>LOG10</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td></td><td>Math#log10(double)</td></tr><tr><td>SQRT</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td></td><td>Math#sqrt(double)</td></tr></tbody></table>',2),b=n('<h3 id="比较函数" tabindex="-1"><a class="header-anchor" href="#比较函数" aria-hidden="true">#</a> 比较函数</h3><table><thead><tr><th>函数名</th><th>可接收的输入序列类型</th><th>必要的属性参数</th><th>输出序列类型</th><th>功能类型</th></tr></thead><tbody><tr><td>ON_OFF</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td><code>threshold</code>:DOUBLE类型</td><td>BOOLEAN 类型</td><td>返回<code>ts_value &gt;= threshold</code>的bool值</td></tr><tr><td>IN_RANGE</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td><code>lower</code>:DOUBLE类型 <code>upper</code>:DOUBLE类型</td><td>BOOLEAN类型</td><td>返回<code>ts_value &gt;= lower &amp;&amp; ts_value &lt;= upper</code>的bool值</td></tr></tbody></table>',2),U=n('<h3 id="字符串处理函数" tabindex="-1"><a class="header-anchor" href="#字符串处理函数" aria-hidden="true">#</a> 字符串处理函数</h3><table><thead><tr><th>函数名</th><th>输入序列类型</th><th>必要的属性参数</th><th>输出序列类型</th><th>功能描述</th></tr></thead><tbody><tr><td>STRING_CONTAINS</td><td>TEXT</td><td><code>s</code>: 待搜寻的字符串</td><td>BOOLEAN</td><td>判断字符串中是否存在<code>s</code></td></tr><tr><td>STRING_MATCHES</td><td>TEXT</td><td><code>regex</code>: Java 标准库风格的正则表达式</td><td>BOOLEAN</td><td>判断字符串是否能够被正则表达式<code>regex</code>匹配</td></tr><tr><td>LENGTH</td><td>TEXT</td><td>无</td><td>INT32</td><td>返回字符串的长度</td></tr><tr><td>LOCATE</td><td>TEXT</td><td><code>target</code>: 需要被定位的子串 <br> <code>reverse</code>: 指定是否需要倒序定位，默认值为<code>false</code>, 即从左至右定位</td><td>INT32</td><td>获取<code>target</code>子串第一次出现在输入序列的位置，如果输入序列中不包含<code>target</code>则返回 -1</td></tr><tr><td>STARTSWITH</td><td>TEXT</td><td><code>target</code>: 需要匹配的前缀</td><td>BOOLEAN</td><td>判断字符串是否有指定前缀</td></tr><tr><td>ENDSWITH</td><td>TEXT</td><td><code>target</code>: 需要匹配的后缀</td><td>BOOLEAN</td><td>判断字符串是否有指定后缀</td></tr><tr><td>CONCAT</td><td>TEXT</td><td><code>targets</code>: 一系列 K-V, key需要以<code>target</code>为前缀且不重复, value是待拼接的字符串。<br><code>series_behind</code>: 指定拼接时时间序列是否在后面，默认为<code>false</code>。</td><td>TEXT</td><td>拼接字符串和<code>target</code>字串</td></tr><tr><td>SUBSTRING</td><td>TEXT</td><td><code>from</code>: 指定子串开始下标 <br><code>for</code>: 指定的字符个数之后停止</td><td>TEXT</td><td>提取字符串的子字符串，从指定的第一个字符开始，并在指定的字符数之后停止。下标从1开始。from 和 for的范围是 INT32 类型取值范围。</td></tr><tr><td>REPLACE</td><td>TEXT</td><td>第一个参数： 需要替换的目标子串<br>第二个参数：要替换成的子串</td><td>TEXT</td><td>将输入序列中的子串替换成目标子串</td></tr><tr><td>UPPER</td><td>TEXT</td><td>无</td><td>TEXT</td><td>将字符串转化为大写</td></tr><tr><td>LOWER</td><td>TEXT</td><td>无</td><td>TEXT</td><td>将字符串转化为小写</td></tr><tr><td>TRIM</td><td>TEXT</td><td>无</td><td>TEXT</td><td>移除字符串前后的空格</td></tr><tr><td>STRCMP</td><td>TEXT</td><td>无</td><td>TEXT</td><td>用于比较两个输入序列，如果值相同返回 <code>0</code> , 序列1的值小于序列2的值返回一个<code>负数</code>，序列1的值大于序列2的值返回一个<code>正数</code></td></tr></tbody></table>',2),_=n('<h3 id="数据类型转换函数" tabindex="-1"><a class="header-anchor" href="#数据类型转换函数" aria-hidden="true">#</a> 数据类型转换函数</h3><table><thead><tr><th>函数名</th><th>必要的属性参数</th><th>输出序列类型</th><th>功能类型</th></tr></thead><tbody><tr><td>CAST</td><td><code>type</code>:输出的数据点的类型，只能是 INT32 / INT64 / FLOAT / DOUBLE / BOOLEAN / TEXT</td><td>由输入属性参数<code>type</code>决定</td><td>将数据转换为<code>type</code>参数指定的类型。</td></tr></tbody></table>',2),A=n('<h3 id="常序列生成函数" tabindex="-1"><a class="header-anchor" href="#常序列生成函数" aria-hidden="true">#</a> 常序列生成函数</h3><table><thead><tr><th>函数名</th><th>必要的属性参数</th><th>输出序列类型</th><th>功能描述</th></tr></thead><tbody><tr><td>CONST</td><td><code>value</code>: 输出的数据点的值 <code>type</code>: 输出的数据点的类型，只能是 INT32 / INT64 / FLOAT / DOUBLE / BOOLEAN / TEXT</td><td>由输入属性参数 <code>type</code> 决定</td><td>根据输入属性 <code>value</code> 和 <code>type</code> 输出用户指定的常序列。</td></tr><tr><td>PI</td><td>无</td><td>DOUBLE</td><td>常序列的值：<code>π</code> 的 <code>double</code> 值，圆的周长与其直径的比值，即圆周率，等于 <em>Java标准库</em> 中的<code>Math.PI</code>。</td></tr><tr><td>E</td><td>无</td><td>DOUBLE</td><td>常序列的值：<code>e</code> 的 <code>double</code> 值，自然对数的底，它等于 <em>Java 标准库</em> 中的 <code>Math.E</code>。</td></tr></tbody></table>',2),D=n('<h3 id="选择函数" tabindex="-1"><a class="header-anchor" href="#选择函数" aria-hidden="true">#</a> 选择函数</h3><table><thead><tr><th>函数名</th><th>输入序列类型</th><th>必要的属性参数</th><th>输出序列类型</th><th>功能描述</th></tr></thead><tbody><tr><td>TOP_K</td><td>INT32 / INT64 / FLOAT / DOUBLE / TEXT</td><td><code>k</code>: 最多选择的数据点数，必须大于 0 小于等于 1000</td><td>与输入序列的实际类型一致</td><td>返回某时间序列中值最大的<code>k</code>个数据点。若多于<code>k</code>个数据点的值并列最大，则返回时间戳最小的数据点。</td></tr><tr><td>BOTTOM_K</td><td>INT32 / INT64 / FLOAT / DOUBLE / TEXT</td><td><code>k</code>: 最多选择的数据点数，必须大于 0 小于等于 1000</td><td>与输入序列的实际类型一致</td><td>返回某时间序列中值最小的<code>k</code>个数据点。若多于<code>k</code>个数据点的值并列最小，则返回时间戳最小的数据点。</td></tr></tbody></table>',2),m=n('<h3 id="区间查询函数" tabindex="-1"><a class="header-anchor" href="#区间查询函数" aria-hidden="true">#</a> 区间查询函数</h3><table><thead><tr><th>函数名</th><th>输入序列类型</th><th>属性参数</th><th>输出序列类型</th><th>功能描述</th></tr></thead><tbody><tr><td>ZERO_DURATION</td><td>INT32/ INT64/ FLOAT/ DOUBLE/ BOOLEAN</td><td><code>min</code>:可选，默认值0 <code>max</code>:可选，默认值<code>Long.MAX_VALUE</code></td><td>Long</td><td>返回时间序列连续为0(false)的开始时间与持续时间，持续时间t(单位ms)满足<code>t &gt;= min &amp;&amp; t &lt;= max</code></td></tr><tr><td>NON_ZERO_DURATION</td><td>INT32/ INT64/ FLOAT/ DOUBLE/ BOOLEAN</td><td><code>min</code>:可选，默认值0 <code>max</code>:可选，默认值<code>Long.MAX_VALUE</code></td><td>Long</td><td>返回时间序列连续不为0(false)的开始时间与持续时间，持续时间t(单位ms)满足<code>t &gt;= min &amp;&amp; t &lt;= max</code></td></tr><tr><td>ZERO_COUNT</td><td>INT32/ INT64/ FLOAT/ DOUBLE/ BOOLEAN</td><td><code>min</code>:可选，默认值1 <code>max</code>:可选，默认值<code>Long.MAX_VALUE</code></td><td>Long</td><td>返回时间序列连续为0(false)的开始时间与其后数据点的个数，数据点个数n满足<code>n &gt;= min &amp;&amp; n &lt;= max</code></td></tr><tr><td>NON_ZERO_COUNT</td><td>INT32/ INT64/ FLOAT/ DOUBLE/ BOOLEAN</td><td><code>min</code>:可选，默认值1 <code>max</code>:可选，默认值<code>Long.MAX_VALUE</code></td><td>Long</td><td>返回时间序列连续不为0(false)的开始时间与其后数据点的个数，数据点个数n满足<code>n &gt;= min &amp;&amp; n &lt;= max</code></td></tr></tbody></table>',2),B=n('<h3 id="趋势计算函数" tabindex="-1"><a class="header-anchor" href="#趋势计算函数" aria-hidden="true">#</a> 趋势计算函数</h3><table><thead><tr><th>函数名</th><th>输入序列类型</th><th>属性参数</th><th>输出序列类型</th><th>功能描述</th></tr></thead><tbody><tr><td>TIME_DIFFERENCE</td><td>INT32 / INT64 / FLOAT / DOUBLE / BOOLEAN / TEXT</td><td>无</td><td>INT64</td><td>统计序列中某数据点的时间戳与前一数据点时间戳的差。范围内第一个数据点没有对应的结果输出。</td></tr><tr><td>DIFFERENCE</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>无</td><td>与输入序列的实际类型一致</td><td>统计序列中某数据点的值与前一数据点的值的差。范围内第一个数据点没有对应的结果输出。</td></tr><tr><td>NON_NEGATIVE_DIFFERENCE</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>无</td><td>与输入序列的实际类型一致</td><td>统计序列中某数据点的值与前一数据点的值的差的绝对值。范围内第一个数据点没有对应的结果输出。</td></tr><tr><td>DERIVATIVE</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>无</td><td>DOUBLE</td><td>统计序列中某数据点相对于前一数据点的变化率，数量上等同于 DIFFERENCE / TIME_DIFFERENCE。范围内第一个数据点没有对应的结果输出。</td></tr><tr><td>NON_NEGATIVE_DERIVATIVE</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>无</td><td>DOUBLE</td><td>统计序列中某数据点相对于前一数据点的变化率的绝对值，数量上等同于 NON_NEGATIVE_DIFFERENCE / TIME_DIFFERENCE。范围内第一个数据点没有对应的结果输出。</td></tr><tr><td>DIFF</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td><code>ignoreNull</code>：可选，默认为true；为true时，前一个数据点值为null时，忽略该数据点继续向前找到第一个出现的不为null的值；为false时，如果前一个数据点为null，则不忽略，使用null进行相减，结果也为null</td><td>DOUBLE</td><td>统计序列中某数据点的值与前一数据点的值的差。第一个数据点没有对应的结果输出，输出值为null</td></tr></tbody></table>',2),g=n('<h3 id="采样函数" tabindex="-1"><a class="header-anchor" href="#采样函数" aria-hidden="true">#</a> 采样函数</h3><table><thead><tr><th>函数名</th><th>可接收的输入序列类型</th><th>必要的属性参数</th><th>输出序列类型</th><th>功能类型</th></tr></thead><tbody><tr><td>EQUAL_SIZE_BUCKET_RANDOM_SAMPLE</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>降采样比例 <code>proportion</code>，取值范围为<code>(0, 1]</code>，默认为<code>0.1</code></td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>返回符合采样比例的等分桶随机采样</td></tr><tr><td>EQUAL_SIZE_BUCKET_AGG_SAMPLE</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td><code>proportion</code>取值范围为<code>(0, 1]</code>，默认为<code>0.1</code><br><code>type</code>:取值类型有<code>avg</code>, <code>max</code>, <code>min</code>, <code>sum</code>, <code>extreme</code>, <code>variance</code>, 默认为<code>avg</code></td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>返回符合采样比例的等分桶聚合采样</td></tr><tr><td>EQUAL_SIZE_BUCKET_M4_SAMPLE</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td><code>proportion</code>取值范围为<code>(0, 1]</code>，默认为<code>0.1</code></td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>返回符合采样比例的等分桶M4采样</td></tr><tr><td>EQUAL_SIZE_BUCKET_OUTLIER_SAMPLE</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td><code>proportion</code>取值范围为<code>(0, 1]</code>，默认为<code>0.1</code><br><code>type</code>取值为<code>avg</code>或<code>stendis</code>或<code>cos</code>或<code>prenextdis</code>，默认为<code>avg</code><br><code>number</code>取值应大于0，默认<code>3</code></td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>返回符合采样比例和桶内采样个数的等分桶离群值采样</td></tr><tr><td>M4</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>包含固定点数的窗口和滑动时间窗口使用不同的属性参数。包含固定点数的窗口使用属性<code>windowSize</code>和<code>slidingStep</code>。滑动时间窗口使用属性<code>timeInterval</code>、<code>slidingStep</code>、<code>displayWindowBegin</code>和<code>displayWindowEnd</code>。更多细节见下文。</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>返回每个窗口内的第一个点（<code>first</code>）、最后一个点（<code>last</code>）、最小值点（<code>bottom</code>）、最大值点（<code>top</code>）。在一个窗口内的聚合点输出之前，M4会将它们按照时间戳递增排序并且去重。</td></tr></tbody></table>',2),k=n('<h3 id="时间序列处理函数" tabindex="-1"><a class="header-anchor" href="#时间序列处理函数" aria-hidden="true">#</a> 时间序列处理函数</h3><table><thead><tr><th>函数名</th><th>输入序列类型</th><th>参数</th><th>输出序列类型</th><th>功能描述</th></tr></thead><tbody><tr><td>CHANGE_POINTS</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>/</td><td>与输入序列的实际类型一致</td><td>去除输入序列中的连续相同值</td></tr></tbody></table>',2),F=n('<h2 id="lambda-表达式" tabindex="-1"><a class="header-anchor" href="#lambda-表达式" aria-hidden="true">#</a> Lambda 表达式</h2><table><thead><tr><th>函数名</th><th>可接收的输入序列类型</th><th>必要的属性参数</th><th>输出序列类型</th><th>功能类型</th></tr></thead><tbody><tr><td>JEXL</td><td>INT32 / INT64 / FLOAT / DOUBLE / TEXT / BOOLEAN</td><td><code>expr</code>是一个支持标准的一元或多元参数的lambda表达式，符合<code>x -&gt; {...}</code>或<code>(x, y, z) -&gt; {...}</code>的格式，例如<code>x -&gt; {x * 2}</code>, <code>(x, y, z) -&gt; {x + y * z}</code></td><td>INT32 / INT64 / FLOAT / DOUBLE / TEXT / BOOLEAN</td><td>返回将输入的时间序列通过lambda表达式变换的序列</td></tr></tbody></table>',2),f=d("h2",{id:"条件表达式",tabindex:"-1"},[d("a",{class:"header-anchor",href:"#条件表达式","aria-hidden":"true"},"#"),t(" 条件表达式")],-1),M=d("table",null,[d("thead",null,[d("tr",null,[d("th",null,"表达式名称"),d("th",null,"含义")])]),d("tbody",null,[d("tr",null,[d("td",null,[d("code",null,"CASE")]),d("td",null,"类似if else")])])],-1),S=n('<h2 id="数据质量函数库" tabindex="-1"><a class="header-anchor" href="#数据质量函数库" aria-hidden="true">#</a> 数据质量函数库</h2><h3 id="关于" tabindex="-1"><a class="header-anchor" href="#关于" aria-hidden="true">#</a> 关于</h3><p>对基于时序数据的应用而言，数据质量至关重要。基于用户自定义函数能力，IoTDB 提供了一系列关于数据质量的函数，包括数据画像、数据质量评估与修复等，能够满足工业领域对数据质量的需求。</p><h3 id="快速上手" tabindex="-1"><a class="header-anchor" href="#快速上手" aria-hidden="true">#</a> 快速上手</h3><p><strong>该函数库中的函数不是内置函数，使用前要先加载到系统中。</strong> 操作流程如下：</p>',5),y={href:"https://archive.apache.org/dist/iotdb/1.0.1/apache-iotdb-1.0.1-library-udf-bin.zip",target:"_blank",rel:"noopener noreferrer"},x=d("li",null,[t("将 jar 包复制到 IoTDB 程序目录的 "),d("code",null,"ext\\udf"),t(" 目录下 (若您使用的是集群，请将jar包复制到所有DataNode的该目录下)；")],-1),v=d("li",null,"启动 IoTDB；",-1),R=d("li",null,[t("将注册脚本复制到 IoTDB 的程序目录下（与"),d("code",null,"sbin"),t("目录同级的根目录下），修改脚本中的参数（如果需要）并运行注册脚本以注册 UDF。")],-1),C=d("h3",{id:"已经实现的函数",tabindex:"-1"},[d("a",{class:"header-anchor",href:"#已经实现的函数","aria-hidden":"true"},"#"),t(" 已经实现的函数")],-1);function G(X,z){const a=s("RouterLink"),r=s("ExternalLinkIcon");return l(),h("div",null,[i(`

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

`),u,d("p",null,[t("本章介绍 IoTDB 支持的运算符和函数。IoTDB 提供了丰富的内置运算符和函数来满足您的计算需求，同时支持通过"),e(a,{to:"/zh/UserGuide/Master/stage/Operators-Functions/User-Defined-Function.html"},{default:o(()=>[t("用户自定义函数")]),_:1}),t("能力进行扩展。")]),T,d("p",null,[t("关于运算符和函数在 SQL 中的行为，可以查看文档 "),e(a,{to:"/zh/UserGuide/Master/stage/Query-Data/Select-Expression.html"},{default:o(()=>[t("选择表达式")]),_:1}),t("。")]),O,d("p",null,[t("详细说明及示例见文档 "),e(a,{to:"/zh/UserGuide/Master/stage/Operators-Functions/Mathematical.html"},{default:o(()=>[t("算数运算符和函数")]),_:1}),t("。")]),E,d("p",null,[t("详细说明及示例见文档 "),e(a,{to:"/zh/UserGuide/Master/stage/Operators-Functions/Comparison.html"},{default:o(()=>[t("比较运算符和函数")]),_:1}),t("。")]),N,d("p",null,[t("详细说明及示例见文档 "),e(a,{to:"/zh/UserGuide/Master/stage/Operators-Functions/Logical.html"},{default:o(()=>[t("逻辑运算符")]),_:1}),t("。")]),L,d("p",null,[t("详细说明及示例见文档 "),e(a,{to:"/zh/UserGuide/Master/stage/Operators-Functions/Aggregation.html"},{default:o(()=>[t("聚合函数")]),_:1}),t("。")]),I,d("p",null,[t("详细说明及示例见文档 "),e(a,{to:"/zh/UserGuide/Master/stage/Operators-Functions/Mathematical.html"},{default:o(()=>[t("算数运算符和函数")]),_:1}),t("。")]),b,d("p",null,[t("详细说明及示例见文档 "),e(a,{to:"/zh/UserGuide/Master/stage/Operators-Functions/Comparison.html"},{default:o(()=>[t("比较运算符和函数")]),_:1}),t("。")]),U,d("p",null,[t("详细说明及示例见文档 "),e(a,{to:"/zh/UserGuide/Master/stage/Operators-Functions/String.html"},{default:o(()=>[t("字符串处理函数")]),_:1}),t("。")]),_,d("p",null,[t("详细说明及示例见文档 "),e(a,{to:"/zh/UserGuide/Master/stage/Operators-Functions/Conversion.html"},{default:o(()=>[t("数据类型转换")]),_:1}),t("。")]),A,d("p",null,[t("详细说明及示例见文档 "),e(a,{to:"/zh/UserGuide/Master/stage/Operators-Functions/Constant.html"},{default:o(()=>[t("常序列生成函数")]),_:1}),t("。")]),D,d("p",null,[t("详细说明及示例见文档 "),e(a,{to:"/zh/UserGuide/Master/stage/Operators-Functions/Selection.html"},{default:o(()=>[t("选择函数")]),_:1}),t("。")]),m,d("p",null,[t("详细说明及示例见文档 "),e(a,{to:"/zh/UserGuide/Master/stage/Operators-Functions/Continuous-Interval.html"},{default:o(()=>[t("区间查询函数")]),_:1}),t("。")]),B,d("p",null,[t("详细说明及示例见文档 "),e(a,{to:"/zh/UserGuide/Master/stage/Operators-Functions/Variation-Trend.html"},{default:o(()=>[t("趋势计算函数")]),_:1}),t("。")]),g,d("p",null,[t("详细说明及示例见文档 "),e(a,{to:"/zh/UserGuide/Master/stage/Operators-Functions/Sample.html"},{default:o(()=>[t("采样函数")]),_:1}),t("。")]),k,d("p",null,[t("详细说明及示例见文档 "),e(a,{to:"/zh/UserGuide/Master/stage/Operators-Functions/Time-Series.html"},{default:o(()=>[t("时间序列处理")]),_:1})]),F,d("p",null,[t("详细说明及示例见文档 "),e(a,{to:"/zh/UserGuide/Master/stage/Operators-Functions/Lambda.html"},{default:o(()=>[t("Lambda 表达式")]),_:1})]),f,M,d("p",null,[t("详细说明及示例见文档 "),e(a,{to:"/zh/UserGuide/Master/stage/Operators-Functions/Conditional.html"},{default:o(()=>[t("条件表达式")]),_:1}),t("。")]),S,d("ol",null,[d("li",null,[t("下载包含全部依赖的 jar 包和注册脚本 "),d("a",y,[t("【点击下载】"),e(r)]),t(" ；")]),x,v,R]),C,d("ol",null,[d("li",null,[e(a,{to:"/zh/UserGuide/Master/stage/Operators-Functions/Data-Quality.html"},{default:o(()=>[t("Data-Quality")]),_:1}),t(" 数据质量")]),d("li",null,[e(a,{to:"/zh/UserGuide/Master/stage/Operators-Functions/Data-Profiling.html"},{default:o(()=>[t("Data-Profiling")]),_:1}),t(" 数据画像")]),d("li",null,[e(a,{to:"/zh/UserGuide/Master/stage/Operators-Functions/Anomaly-Detection.html"},{default:o(()=>[t("Anomaly-Detection")]),_:1}),t(" 异常检测")]),d("li",null,[e(a,{to:"/zh/UserGuide/Master/stage/Operators-Functions/Frequency-Domain.html"},{default:o(()=>[t("Frequency-Domain")]),_:1}),t(" 频域分析")]),d("li",null,[e(a,{to:"/zh/UserGuide/Master/stage/Operators-Functions/Data-Matching.html"},{default:o(()=>[t("Data-Matching")]),_:1}),t(" 数据匹配")]),d("li",null,[e(a,{to:"/zh/UserGuide/Master/stage/Operators-Functions/Data-Repairing.html"},{default:o(()=>[t("Data-Repairing")]),_:1}),t(" 数据修复")]),d("li",null,[e(a,{to:"/zh/UserGuide/Master/stage/Operators-Functions/Series-Discovery.html"},{default:o(()=>[t("Series-Discovery")]),_:1}),t(" 序列发现")]),d("li",null,[e(a,{to:"/zh/UserGuide/Master/stage/Operators-Functions/Machine-Learning.html"},{default:o(()=>[t("Machine-Learning")]),_:1}),t(" 机器学习")])])])}const V=c(p,[["render",G],["__file","Overview.html.vue"]]);export{V as default};
