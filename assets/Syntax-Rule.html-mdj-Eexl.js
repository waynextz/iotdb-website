import{_ as e,c as o,b as a,d as p,e as n,a as i,f as r,r as t,o as c}from"./app-CLygX6ac.js";const d={};function B(y,s){const l=t("RouteLink");return c(),o("div",null,[s[3]||(s[3]=a(`<h1 id="标识符" tabindex="-1"><a class="header-anchor" href="#标识符"><span>标识符</span></a></h1><h2 id="字面值常量" tabindex="-1"><a class="header-anchor" href="#字面值常量"><span>字面值常量</span></a></h2><p>该部分对 IoTDB 中支持的字面值常量进行说明，包括字符串常量、数值型常量、时间戳常量、布尔型常量和空值。</p><h3 id="字符串常量" tabindex="-1"><a class="header-anchor" href="#字符串常量"><span>字符串常量</span></a></h3><p>在 IoTDB 中，字符串是由<strong>单引号（<code>&#39;</code>）或双引号（<code>&quot;</code>）字符括起来的字符序列</strong>。示例如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>&#39;a string&#39;</span></span>
<span class="line"><span>&quot;another string&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景"><span>使用场景</span></a></h4><ul><li><p><code>INSERT</code> 或者 <code>SELECT</code> 中用于表达 <code>TEXT</code> 类型数据的场景。</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#ABB2BF;"># </span><span style="color:#C678DD;">insert</span><span style="color:#ABB2BF;"> 示例</span></span>
<span class="line"><span style="color:#C678DD;">insert into</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">ln</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wf02</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wt02</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">timestamp</span><span style="color:#ABB2BF;">,hardware) </span><span style="color:#C678DD;">values</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;v1&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">insert into</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">ln</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wf02</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wt02</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">timestamp</span><span style="color:#ABB2BF;">,hardware) </span><span style="color:#C678DD;">values</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;\\\\&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">+</span><span style="color:#7F848E;font-style:italic;">-----------------------------+--------------------------+</span></span>
<span class="line"><span style="color:#ABB2BF;">|                         </span><span style="color:#C678DD;">Time</span><span style="color:#ABB2BF;">|</span><span style="color:#D19A66;">root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">ln</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wf02</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wt02</span><span style="color:#ABB2BF;">.hardware|</span></span>
<span class="line"><span style="color:#ABB2BF;">+</span><span style="color:#7F848E;font-style:italic;">-----------------------------+--------------------------+</span></span>
<span class="line"><span style="color:#ABB2BF;">|</span><span style="color:#D19A66;">1970</span><span style="color:#ABB2BF;">-</span><span style="color:#D19A66;">01</span><span style="color:#ABB2BF;">-01T08:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">001</span><span style="color:#ABB2BF;">+</span><span style="color:#D19A66;">08</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">|                        v1|</span></span>
<span class="line"><span style="color:#ABB2BF;">+</span><span style="color:#7F848E;font-style:italic;">-----------------------------+--------------------------+</span></span>
<span class="line"><span style="color:#ABB2BF;">|</span><span style="color:#D19A66;">1970</span><span style="color:#ABB2BF;">-</span><span style="color:#D19A66;">01</span><span style="color:#ABB2BF;">-01T08:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">002</span><span style="color:#ABB2BF;">+</span><span style="color:#D19A66;">08</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">|                        \\\\|</span></span>
<span class="line"><span style="color:#ABB2BF;">+</span><span style="color:#7F848E;font-style:italic;">-----------------------------+--------------------------+</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;"># </span><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> 示例</span></span>
<span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> code </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sg1</span><span style="color:#ABB2BF;">.d1 </span><span style="color:#C678DD;">where</span><span style="color:#ABB2BF;"> code </span><span style="color:#C678DD;">in</span><span style="color:#ABB2BF;"> (</span><span style="color:#98C379;">&#39;string1&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;string2&#39;</span><span style="color:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>LOAD</code> / <code>REMOVE</code> / <code>SETTLE</code> 指令中的文件路径。</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#ABB2BF;"># </span><span style="color:#C678DD;">load</span><span style="color:#ABB2BF;"> 示例</span></span>
<span class="line"><span style="color:#C678DD;">LOAD</span><span style="color:#98C379;"> &#39;examplePath&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;"># </span><span style="color:#C678DD;">remove</span><span style="color:#ABB2BF;"> 示例</span></span>
<span class="line"><span style="color:#C678DD;">REMOVE</span><span style="color:#98C379;"> &#39;examplePath&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;"># SETTLE 示例</span></span>
<span class="line"><span style="color:#ABB2BF;">SETTLE </span><span style="color:#98C379;">&#39;examplePath&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>用户密码。</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#ABB2BF;"># 示例，write_pwd 即为用户密码</span></span>
<span class="line"><span style="color:#C678DD;">CREATE</span><span style="color:#C678DD;"> USER</span><span style="color:#61AFEF;"> ln_write_user</span><span style="color:#98C379;"> &#39;write_pwd&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>触发器和 UDF 中的类全类名，示例如下：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#ABB2BF;"># 触发器示例，</span><span style="color:#C678DD;">AS</span><span style="color:#ABB2BF;"> 后使用字符串表示类全类名</span></span>
<span class="line"><span style="color:#C678DD;">CREATE</span><span style="color:#ABB2BF;"> TRIGGER </span><span style="color:#98C379;">\`alert-listener-sg1d1s1\`</span></span>
<span class="line"><span style="color:#C678DD;">AFTER</span><span style="color:#C678DD;"> INSERT</span></span>
<span class="line"><span style="color:#C678DD;">ON</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sg1</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">d1</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">s1</span></span>
<span class="line"><span style="color:#C678DD;">AS</span><span style="color:#98C379;"> &#39;org.apache.iotdb.db.engine.trigger.example.AlertListener&#39;</span></span>
<span class="line"><span style="color:#C678DD;">WITH</span><span style="color:#ABB2BF;"> (</span></span>
<span class="line"><span style="color:#98C379;">  &#39;lo&#39;</span><span style="color:#56B6C2;"> =</span><span style="color:#98C379;"> &#39;0&#39;</span><span style="color:#ABB2BF;">, </span></span>
<span class="line"><span style="color:#98C379;">  &#39;hi&#39;</span><span style="color:#56B6C2;"> =</span><span style="color:#98C379;"> &#39;100.0&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;"># UDF 示例，</span><span style="color:#C678DD;">AS</span><span style="color:#ABB2BF;"> 后使用字符串表示类全类名</span></span>
<span class="line"><span style="color:#C678DD;">CREATE</span><span style="color:#C678DD;"> FUNCTION</span><span style="color:#61AFEF;"> example</span><span style="color:#C678DD;"> AS</span><span style="color:#98C379;"> &#39;org.apache.iotdb.udf.UDTFExample&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Select 子句中可以为结果集中的值指定别名，别名可以被定义为字符串或者标识符，示例如下：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> s1 </span><span style="color:#C678DD;">as</span><span style="color:#98C379;"> &#39;temperature&#39;</span><span style="color:#ABB2BF;">, s2 </span><span style="color:#C678DD;">as</span><span style="color:#98C379;"> &#39;speed&#39;</span><span style="color:#C678DD;"> from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">ln</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wf01</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wt01</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;"># 表头如下所示</span></span>
<span class="line"><span style="color:#ABB2BF;">+</span><span style="color:#7F848E;font-style:italic;">-----------------------------+-----------|-----+</span></span>
<span class="line"><span style="color:#ABB2BF;">|                         </span><span style="color:#C678DD;">Time</span><span style="color:#ABB2BF;">|temperature|speed|</span></span>
<span class="line"><span style="color:#ABB2BF;">+</span><span style="color:#7F848E;font-style:italic;">-----------------------------+-----------|-----+</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>用于表示键值对，键值对的键和值可以被定义成常量（包括字符串）或者标识符，具体请参考键值对章节。</p></li></ul><h4 id="如何在字符串内使用引号" tabindex="-1"><a class="header-anchor" href="#如何在字符串内使用引号"><span>如何在字符串内使用引号</span></a></h4><ul><li>在单引号引起的字符串内，双引号无需特殊处理。同理，在双引号引起的字符串内，单引号无需特殊处理。</li><li>在单引号引起的字符串里，可以通过双写单引号来表示一个单引号，即单引号 &#39; 可以表示为 &#39;&#39;。</li><li>在双引号引起的字符串里，可以通过双写双引号来表示一个双引号，即双引号 &quot; 可以表示为 &quot;&quot;。</li></ul><p>字符串内使用引号的示例如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>&#39;string&#39;  // string</span></span>
<span class="line"><span>&#39;&quot;string&quot;&#39;  // &quot;string&quot;</span></span>
<span class="line"><span>&#39;&quot;&quot;string&quot;&quot;&#39;  // &quot;&quot;string&quot;&quot;</span></span>
<span class="line"><span>&#39;&#39;&#39;string&#39;  // &#39;string</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot;string&quot; // string</span></span>
<span class="line"><span>&quot;&#39;string&#39;&quot;  // &#39;string&#39;</span></span>
<span class="line"><span>&quot;&#39;&#39;string&#39;&#39;&quot;  // &#39;&#39;string&#39;&#39;</span></span>
<span class="line"><span>&quot;&quot;&quot;string&quot;  // &quot;string</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数值型常量" tabindex="-1"><a class="header-anchor" href="#数值型常量"><span>数值型常量</span></a></h3><p>数值型常量包括整型和浮点型。</p><p>整型常量是一个数字序列。可以以 <code>+</code> 或 <code>-</code> 开头表示正负。例如：<code>1</code>, <code>-1</code>。</p><p>带有小数部分或由科学计数法表示的为浮点型常量，例如：<code>.1</code>, <code>3.14</code>, <code>-2.23</code>, <code>+1.70</code>, <code>1.2E3</code>, <code>1.2E-3</code>, <code>-1.2E3</code>, <code>-1.2E-3</code>。</p><p>在 IoTDB 中，<code>INT32</code> 和 <code>INT64</code> 表示整数类型（计算是准确的），<code>FLOAT</code> 和 <code>DOUBLE</code> 表示浮点数类型（计算是近似的）。</p><p>在浮点上下文中可以使用整数，它会被解释为等效的浮点数。</p><h3 id="时间戳常量" tabindex="-1"><a class="header-anchor" href="#时间戳常量"><span>时间戳常量</span></a></h3>`,19)),p("p",null,[s[1]||(s[1]=n("时间戳是一个数据到来的时间点，在 IoTDB 中分为绝对时间戳和相对时间戳。详细信息可参考 ")),i(l,{to:"/zh/UserGuide/latest/Background-knowledge/Data-Type.html"},{default:r(()=>s[0]||(s[0]=[n("数据类型文档")])),_:1}),s[2]||(s[2]=n("。"))]),s[4]||(s[4]=a(`<p>特别地，<code>NOW()</code>表示语句开始执行时的服务端系统时间戳。</p><h3 id="布尔型常量" tabindex="-1"><a class="header-anchor" href="#布尔型常量"><span>布尔型常量</span></a></h3><p>布尔值常量 <code>TRUE</code> 和 <code>FALSE</code> 分别等价于 <code>1</code> 和 <code>0</code>，它们对大小写不敏感。</p><h3 id="空值" tabindex="-1"><a class="header-anchor" href="#空值"><span>空值</span></a></h3><p><code>NULL</code>值表示没有数据。<code>NULL</code>对大小写不敏感。</p><h2 id="标识符-1" tabindex="-1"><a class="header-anchor" href="#标识符-1"><span>标识符</span></a></h2><h3 id="使用场景-1" tabindex="-1"><a class="header-anchor" href="#使用场景-1"><span>使用场景</span></a></h3><p>在 IoTDB 中，触发器名称、UDF函数名、元数据模板名称、用户与角色名、连续查询标识、Pipe、PipeSink、键值对中的键和值、别名等可以作为标识符。</p><h3 id="约束" tabindex="-1"><a class="header-anchor" href="#约束"><span>约束</span></a></h3><p>请注意，此处约束是标识符的通用约束，具体标识符可能还附带其它约束条件，如用户名限制字符数大于等于4，更严格的约束请参考具体标识符相关的说明文档。</p><p><strong>标识符命名有以下约束：</strong></p><ul><li><p>不使用反引号括起的标识符中，允许出现以下字符：</p><ul><li>[ 0-9 a-z A-Z _ ] （字母，数字，下划线）</li><li>[&#39;\\u2E80&#39;..&#39;\\u9FFF&#39;] （UNICODE 中文字符）</li></ul></li><li><p>标识符允许使用数字开头、不使用反引号括起的标识符不能全部为数字。</p></li><li><p>标识符是大小写敏感的。</p></li><li><p>标识符允许为关键字。</p></li></ul><h3 id="反引号" tabindex="-1"><a class="header-anchor" href="#反引号"><span>反引号</span></a></h3><p><strong>如果出现如下情况，标识符需要使用反引号进行引用：</strong></p><ul><li>标识符包含不允许的特殊字符。</li><li>标识符为实数。</li></ul><h4 id="如何在反引号引起的标识符中使用引号" tabindex="-1"><a class="header-anchor" href="#如何在反引号引起的标识符中使用引号"><span>如何在反引号引起的标识符中使用引号</span></a></h4><p><strong>在反引号引起的标识符中可以直接使用单引号和双引号。</strong></p><p><strong>在用反引号引用的标识符中，可以通过双写反引号的方式使用反引号，即 \` 可以表示为 \`\`。</strong></p><p>示例如下：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#ABB2BF;"># 创建模板 t1</span><span style="color:#98C379;">\`t</span></span>
<span class="line"><span style="color:#98C379;">create device template \`</span><span style="color:#ABB2BF;">t1</span><span style="color:#98C379;">\`\`</span><span style="color:#ABB2BF;">t</span><span style="color:#98C379;">\` </span></span>
<span class="line"><span style="color:#98C379;">(temperature FLOAT encoding=RLE, status BOOLEAN encoding=PLAIN compression=SNAPPY)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;"># 创建模板 t1&#39;t&quot;t</span></span>
<span class="line"><span style="color:#98C379;">create device template \`</span><span style="color:#ABB2BF;">t1</span><span style="color:#98C379;">&#39;t&quot;t\` </span></span>
<span class="line"><span style="color:#98C379;">(temperature FLOAT encoding=RLE, status BOOLEAN encoding=PLAIN compression=SNAPPY)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="反引号相关示例" tabindex="-1"><a class="header-anchor" href="#反引号相关示例"><span>反引号相关示例</span></a></h4><ul><li><p>触发器名称出现上述特殊情况时需使用反引号引用：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#ABB2BF;"># 创建触发器 alert.</span><span style="color:#98C379;">\`listener-sg1d1s1</span></span>
<span class="line"><span style="color:#98C379;">CREATE TRIGGER \`</span><span style="color:#ABB2BF;">alert.</span><span style="color:#98C379;">\`\`</span><span style="color:#ABB2BF;">listener-sg1d1s1</span><span style="color:#98C379;">\`</span></span>
<span class="line"><span style="color:#98C379;">AFTER INSERT</span></span>
<span class="line"><span style="color:#98C379;">ON root.sg1.d1.s1</span></span>
<span class="line"><span style="color:#98C379;">AS &#39;org.apache.iotdb.db.engine.trigger.example.AlertListener&#39;</span></span>
<span class="line"><span style="color:#98C379;">WITH (</span></span>
<span class="line"><span style="color:#98C379;">  &#39;lo&#39; = &#39;0&#39;, </span></span>
<span class="line"><span style="color:#98C379;">  &#39;hi&#39; = &#39;100.0&#39;</span></span>
<span class="line"><span style="color:#98C379;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>UDF 名称出现上述特殊情况时需使用反引号引用：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#ABB2BF;"># 创建名为 </span><span style="color:#D19A66;">111</span><span style="color:#ABB2BF;"> 的 UDF，</span><span style="color:#D19A66;">111</span><span style="color:#ABB2BF;"> 为实数，所以需要用反引号引用。</span></span>
<span class="line"><span style="color:#C678DD;">CREATE</span><span style="color:#C678DD;"> FUNCTION</span><span style="color:#ABB2BF;"> \`</span><span style="color:#61AFEF;">111</span><span style="color:#ABB2BF;">\` </span><span style="color:#C678DD;">AS</span><span style="color:#98C379;"> &#39;org.apache.iotdb.udf.UDTFExample&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>元数据模板名称出现上述特殊情况时需使用反引号引用：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#ABB2BF;"># 创建名为 </span><span style="color:#D19A66;">111</span><span style="color:#ABB2BF;"> 的元数据模板，</span><span style="color:#D19A66;">111</span><span style="color:#ABB2BF;"> 为实数，需要用反引号引用。</span></span>
<span class="line"><span style="color:#C678DD;">create</span><span style="color:#ABB2BF;"> device template </span><span style="color:#98C379;">\`111\`</span><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;">(temperature </span><span style="color:#C678DD;">FLOAT</span><span style="color:#C678DD;"> encoding</span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;">RLE, </span><span style="color:#C678DD;">status</span><span style="color:#C678DD;"> BOOLEAN</span><span style="color:#C678DD;"> encoding</span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;">PLAIN </span><span style="color:#C678DD;">compression</span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;">SNAPPY)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>用户名、角色名出现上述特殊情况时需使用反引号引用，同时无论是否使用反引号引用，用户名、角色名中均不允许出现空格，具体请参考权限管理章节中的说明。</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#ABB2BF;"># 创建用户 special</span><span style="color:#98C379;">\`user.</span></span>
<span class="line"><span style="color:#98C379;">CREATE USER \`</span><span style="color:#ABB2BF;">special</span><span style="color:#98C379;">\`\`</span><span style="color:#ABB2BF;">user.</span><span style="color:#98C379;">\` &#39;write_pwd&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;"># 创建角色 111</span></span>
<span class="line"><span style="color:#98C379;">CREATE ROLE \`</span><span style="color:#D19A66;">111</span><span style="color:#98C379;">\`</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>连续查询标识出现上述特殊情况时需使用反引号引用：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#ABB2BF;"># 创建连续查询 </span><span style="color:#D19A66;">test</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">cq</span></span>
<span class="line"><span style="color:#C678DD;">CREATE</span><span style="color:#ABB2BF;"> CONTINUOUS QUERY </span><span style="color:#98C379;">\`test.cq\`</span><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#C678DD;">BEGIN</span><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#C678DD;">  SELECT</span><span style="color:#ABB2BF;"> max_value(temperature) </span></span>
<span class="line"><span style="color:#C678DD;">  INTO</span><span style="color:#ABB2BF;"> temperature_max </span></span>
<span class="line"><span style="color:#C678DD;">  FROM</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">ln</span><span style="color:#ABB2BF;">.*.* </span></span>
<span class="line"><span style="color:#C678DD;">  GROUP BY</span><span style="color:#C678DD;"> time</span><span style="color:#ABB2BF;">(10s) </span></span>
<span class="line"><span style="color:#C678DD;">END</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Pipe、PipeSink 名称出现上述特殊情况时需使用反引号引用：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#ABB2BF;"># 创建 PipeSink test.*</span><span style="color:#D19A66;">1</span></span>
<span class="line"><span style="color:#C678DD;">CREATE</span><span style="color:#ABB2BF;"> PIPESINK </span><span style="color:#98C379;">\`test.*1\`</span><span style="color:#C678DD;"> AS</span><span style="color:#ABB2BF;"> IoTDB (</span><span style="color:#98C379;">&#39;ip&#39;</span><span style="color:#56B6C2;"> =</span><span style="color:#98C379;"> &#39;输入你的IP&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;"># 创建 Pipe test.*</span><span style="color:#D19A66;">2</span></span>
<span class="line"><span style="color:#C678DD;">CREATE</span><span style="color:#ABB2BF;"> PIPE </span><span style="color:#98C379;">\`test.*2\`</span><span style="color:#C678DD;"> TO</span><span style="color:#98C379;"> \`test.*1\`</span><span style="color:#C678DD;"> FROM</span><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> ** </span><span style="color:#C678DD;">from</span><span style="color:#C678DD;"> root</span><span style="color:#C678DD;"> WHERE</span><span style="color:#C678DD;"> time</span><span style="color:#56B6C2;">&gt;=</span><span style="color:#ABB2BF;">yyyy-mm-dd HH:MM:SS) </span><span style="color:#C678DD;">WITH</span><span style="color:#98C379;"> &#39;SyncDelOp&#39;</span><span style="color:#56B6C2;"> =</span><span style="color:#98C379;"> &#39;true&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Select 子句中可以结果集中的值指定别名，别名可以被定义为字符串或者标识符，示例如下：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> s1 </span><span style="color:#C678DD;">as</span><span style="color:#ABB2BF;"> temperature, s2 </span><span style="color:#C678DD;">as</span><span style="color:#ABB2BF;"> speed </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">ln</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wf01</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wt01</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;"># 表头如下所示</span></span>
<span class="line"><span style="color:#ABB2BF;">+</span><span style="color:#7F848E;font-style:italic;">-----------------------------+-----------+-----+</span></span>
<span class="line"><span style="color:#ABB2BF;">|                         </span><span style="color:#C678DD;">Time</span><span style="color:#ABB2BF;">|temperature|speed|</span></span>
<span class="line"><span style="color:#ABB2BF;">+</span><span style="color:#7F848E;font-style:italic;">-----------------------------+-----------+-----+</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>用于表示键值对，键值对的键和值可以被定义成常量（包括字符串）或者标识符，具体请参考键值对章节。</p></li><li><p>路径中非 database 的节点允许含有<code>*</code>符号，在使用时需要把该节点用反引号括起来（如下），但是此种用法只建议在在路径中不可避免含有<code>*</code>时使用。</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#98C379;">\`root.db.*\`</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ul>`,22))])}const v=e(d,[["render",B],["__file","Syntax-Rule.html.vue"]]),m=JSON.parse(`{"path":"/zh/UserGuide/latest/Reference/Syntax-Rule.html","title":"标识符","lang":"zh-CN","frontmatter":{"description":"标识符 字面值常量 该部分对 IoTDB 中支持的字面值常量进行说明，包括字符串常量、数值型常量、时间戳常量、布尔型常量和空值。 字符串常量 在 IoTDB 中，字符串是由单引号（'）或双引号（\\"）字符括起来的字符序列。示例如下： 使用场景 INSERT 或者 SELECT 中用于表达 TEXT 类型数据的场景。 LOAD / REMOVE / SET...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/latest/Reference/Syntax-Rule.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/latest/Reference/Syntax-Rule.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"标识符"}],["meta",{"property":"og:description","content":"标识符 字面值常量 该部分对 IoTDB 中支持的字面值常量进行说明，包括字符串常量、数值型常量、时间戳常量、布尔型常量和空值。 字符串常量 在 IoTDB 中，字符串是由单引号（'）或双引号（\\"）字符括起来的字符序列。示例如下： 使用场景 INSERT 或者 SELECT 中用于表达 TEXT 类型数据的场景。 LOAD / REMOVE / SET..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-01-09T07:17:38.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-09T07:17:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"标识符\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-01-09T07:17:38.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"字面值常量","slug":"字面值常量","link":"#字面值常量","children":[{"level":3,"title":"字符串常量","slug":"字符串常量","link":"#字符串常量","children":[]},{"level":3,"title":"数值型常量","slug":"数值型常量","link":"#数值型常量","children":[]},{"level":3,"title":"时间戳常量","slug":"时间戳常量","link":"#时间戳常量","children":[]},{"level":3,"title":"布尔型常量","slug":"布尔型常量","link":"#布尔型常量","children":[]},{"level":3,"title":"空值","slug":"空值","link":"#空值","children":[]}]},{"level":2,"title":"标识符","slug":"标识符-1","link":"#标识符-1","children":[{"level":3,"title":"使用场景","slug":"使用场景-1","link":"#使用场景-1","children":[]},{"level":3,"title":"约束","slug":"约束","link":"#约束","children":[]},{"level":3,"title":"反引号","slug":"反引号","link":"#反引号","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1736407058000,"contributors":[{"name":"CritasWang","username":"CritasWang","email":"critas@outlook.com","commits":2,"url":"https://github.com/CritasWang"},{"name":"Mister-Hope","username":"Mister-Hope","email":"mister-hope@outlook.com","commits":1,"url":"https://github.com/Mister-Hope"},{"name":"W1y1r","username":"W1y1r","email":"150988475+W1y1r@users.noreply.github.com","commits":3,"url":"https://github.com/W1y1r"},{"name":"wanghui42","username":"wanghui42","email":"105700158+wanghui42@users.noreply.github.com","commits":5,"url":"https://github.com/wanghui42"},{"name":"Lei","username":"Lei","email":"33376433+LeiRui@users.noreply.github.com","commits":1,"url":"https://github.com/Lei"}]},"readingTime":{"minutes":6.09,"words":1826},"filePathRelative":"zh/UserGuide/latest/Reference/Syntax-Rule.md","localizedDate":"2023年7月10日","autoDesc":true}`);export{v as comp,m as data};
