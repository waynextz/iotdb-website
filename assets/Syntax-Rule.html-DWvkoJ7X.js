import{_ as p,c as d,b as l,d as n,e as a,a as i,w as t,r as c,o as r}from"./app-D8GMfgiK.js";const o={};function u(m,s){const e=c("RouteLink");return r(),d("div",null,[s[6]||(s[6]=l(`<h1 id="语法约定" tabindex="-1"><a class="header-anchor" href="#语法约定"><span>语法约定</span></a></h1><h2 id="字面值常量" tabindex="-1"><a class="header-anchor" href="#字面值常量"><span>字面值常量</span></a></h2><p>该部分对 IoTDB 中支持的字面值常量进行说明，包括字符串常量、数值型常量、时间戳常量、布尔型常量和空值。</p><h3 id="字符串常量" tabindex="-1"><a class="header-anchor" href="#字符串常量"><span>字符串常量</span></a></h3><p>在 IoTDB 中，字符串是由<strong>单引号（<code>&#39;</code>）或双引号（<code>&quot;</code>）字符括起来的字符序列</strong>。示例如下：</p><div class="language-Plain%20Text line-numbers-mode" data-highlighter="prismjs" data-ext="Plain%20Text" data-title="Plain%20Text"><pre><code><span class="line">&#39;a string&#39;</span>
<span class="line">&quot;another string&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景"><span>使用场景</span></a></h4><ul><li><p><code>INSERT</code> 或者 <code>SELECT</code> 中用于表达 <code>TEXT</code> 类型数据的场景。</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line"># insert 示例</span>
<span class="line">insert into root.ln.wf02.wt02(timestamp,hardware) values(1, &#39;v1&#39;)</span>
<span class="line">insert into root.ln.wf02.wt02(timestamp,hardware) values(2, &#39;\\\\&#39;)</span>
<span class="line"></span>
<span class="line">+-----------------------------+--------------------------+</span>
<span class="line">|                         Time|root.ln.wf02.wt02.hardware|</span>
<span class="line">+-----------------------------+--------------------------+</span>
<span class="line">|1970-01-01T08:00:00.001+08:00|                        v1|</span>
<span class="line">+-----------------------------+--------------------------+</span>
<span class="line">|1970-01-01T08:00:00.002+08:00|                        \\\\|</span>
<span class="line">+-----------------------------+--------------------------+</span>
<span class="line"></span>
<span class="line"># select 示例</span>
<span class="line">select code from root.sg1.d1 where code in (&#39;string1&#39;, &#39;string2&#39;);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>LOAD</code> / <code>REMOVE</code> / <code>SETTLE</code> 指令中的文件路径。</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line"># load 示例</span>
<span class="line">LOAD &#39;examplePath&#39;</span>
<span class="line"></span>
<span class="line"># remove 示例</span>
<span class="line">REMOVE &#39;examplePath&#39;</span>
<span class="line"></span>
<span class="line"># SETTLE 示例</span>
<span class="line">SETTLE &#39;examplePath&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>用户密码。</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line"># 示例，write_pwd 即为用户密码</span>
<span class="line">CREATE USER ln_write_user &#39;write_pwd&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>触发器和 UDF 中的类全类名，示例如下：</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line"># 触发器示例，AS 后使用字符串表示类全类名</span>
<span class="line">CREATE TRIGGER \`alert-listener-sg1d1s1\`</span>
<span class="line">AFTER INSERT</span>
<span class="line">ON root.sg1.d1.s1</span>
<span class="line">AS &#39;org.apache.iotdb.db.engine.trigger.example.AlertListener&#39;</span>
<span class="line">WITH (</span>
<span class="line">  &#39;lo&#39; = &#39;0&#39;, </span>
<span class="line">  &#39;hi&#39; = &#39;100.0&#39;</span>
<span class="line">)</span>
<span class="line"></span>
<span class="line"># UDF 示例，AS 后使用字符串表示类全类名</span>
<span class="line">CREATE FUNCTION example AS &#39;org.apache.iotdb.udf.UDTFExample&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Select 子句中可以为结果集中的值指定别名，别名可以被定义为字符串或者标识符，示例如下：</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">select s1 as &#39;temperature&#39;, s2 as &#39;speed&#39; from root.ln.wf01.wt01;</span>
<span class="line"></span>
<span class="line"># 表头如下所示</span>
<span class="line">+-----------------------------+-----------|-----+</span>
<span class="line">|                         Time|temperature|speed|</span>
<span class="line">+-----------------------------+-----------|-----+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>用于表示键值对，键值对的键和值可以被定义成常量（包括字符串）或者标识符，具体请参考键值对章节。</p></li></ul><h4 id="如何在字符串内使用引号" tabindex="-1"><a class="header-anchor" href="#如何在字符串内使用引号"><span>如何在字符串内使用引号</span></a></h4><ul><li>在单引号引起的字符串内，双引号无需特殊处理。同理，在双引号引起的字符串内，单引号无需特殊处理。</li><li>在单引号引起的字符串里，可以通过双写单引号来表示一个单引号，即单引号 &#39; 可以表示为 &#39;&#39;。</li><li>在双引号引起的字符串里，可以通过双写双引号来表示一个双引号，即双引号 &quot; 可以表示为 &quot;&quot;。</li></ul><p>字符串内使用引号的示例如下：</p><div class="language-Plain%20Text line-numbers-mode" data-highlighter="prismjs" data-ext="Plain%20Text" data-title="Plain%20Text"><pre><code><span class="line">&#39;string&#39;  // string</span>
<span class="line">&#39;&quot;string&quot;&#39;  // &quot;string&quot;</span>
<span class="line">&#39;&quot;&quot;string&quot;&quot;&#39;  // &quot;&quot;string&quot;&quot;</span>
<span class="line">&#39;&#39;&#39;string&#39;  // &#39;string</span>
<span class="line"></span>
<span class="line">&quot;string&quot; // string</span>
<span class="line">&quot;&#39;string&#39;&quot;  // &#39;string&#39;</span>
<span class="line">&quot;&#39;&#39;string&#39;&#39;&quot;  // &#39;&#39;string&#39;&#39;</span>
<span class="line">&quot;&quot;&quot;string&quot;  // &quot;string</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数值型常量" tabindex="-1"><a class="header-anchor" href="#数值型常量"><span>数值型常量</span></a></h3><p>数值型常量包括整型和浮点型。</p><p>整型常量是一个数字序列。可以以 <code>+</code> 或 <code>-</code> 开头表示正负。例如：<code>1</code>, <code>-1</code>。</p><p>带有小数部分或由科学计数法表示的为浮点型常量，例如：<code>.1</code>, <code>3.14</code>, <code>-2.23</code>, <code>+1.70</code>, <code>1.2E3</code>, <code>1.2E-3</code>, <code>-1.2E3</code>, <code>-1.2E-3</code>。</p><p>在 IoTDB 中，<code>INT32</code> 和 <code>INT64</code> 表示整数类型（计算是准确的），<code>FLOAT</code> 和 <code>DOUBLE</code> 表示浮点数类型（计算是近似的）。</p><p>在浮点上下文中可以使用整数，它会被解释为等效的浮点数。</p><h3 id="时间戳常量" tabindex="-1"><a class="header-anchor" href="#时间戳常量"><span>时间戳常量</span></a></h3>`,19)),n("p",null,[s[1]||(s[1]=a("时间戳是一个数据到来的时间点，在 IoTDB 中分为绝对时间戳和相对时间戳。详细信息可参考 ")),i(e,{to:"/zh/UserGuide/latest/Basic-Concept/Data-Type.html"},{default:t(()=>s[0]||(s[0]=[a("数据类型文档")])),_:1}),s[2]||(s[2]=a("。"))]),s[7]||(s[7]=l(`<p>特别地，<code>NOW()</code>表示语句开始执行时的服务端系统时间戳。</p><h3 id="布尔型常量" tabindex="-1"><a class="header-anchor" href="#布尔型常量"><span>布尔型常量</span></a></h3><p>布尔值常量 <code>TRUE</code> 和 <code>FALSE</code> 分别等价于 <code>1</code> 和 <code>0</code>，它们对大小写不敏感。</p><h3 id="空值" tabindex="-1"><a class="header-anchor" href="#空值"><span>空值</span></a></h3><p><code>NULL</code>值表示没有数据。<code>NULL</code>对大小写不敏感。</p><h2 id="标识符" tabindex="-1"><a class="header-anchor" href="#标识符"><span>标识符</span></a></h2><h3 id="使用场景-1" tabindex="-1"><a class="header-anchor" href="#使用场景-1"><span>使用场景</span></a></h3><p>在 IoTDB 中，触发器名称、UDF函数名、元数据模板名称、用户与角色名、连续查询标识、Pipe、PipeSink、键值对中的键和值、别名等可以作为标识符。</p><h3 id="约束" tabindex="-1"><a class="header-anchor" href="#约束"><span>约束</span></a></h3><p>请注意，此处约束是标识符的通用约束，具体标识符可能还附带其它约束条件，如用户名限制字符数大于等于4，更严格的约束请参考具体标识符相关的说明文档。</p><p><strong>标识符命名有以下约束：</strong></p><ul><li><p>不使用反引号括起的标识符中，允许出现以下字符：</p><ul><li>[ 0-9 a-z A-Z _ ] （字母，数字，下划线）</li><li>[&#39;\\u2E80&#39;..&#39;\\u9FFF&#39;] （UNICODE 中文字符）</li></ul></li><li><p>标识符允许使用数字开头、不使用反引号括起的标识符不能全部为数字。</p></li><li><p>标识符是大小写敏感的。</p></li><li><p>标识符允许为关键字。</p></li></ul><p><strong>如果出现如下情况，标识符需要使用反引号进行引用：</strong></p><ul><li>标识符包含不允许的特殊字符。</li><li>标识符为实数。</li></ul><h3 id="如何在反引号引起的标识符中使用引号" tabindex="-1"><a class="header-anchor" href="#如何在反引号引起的标识符中使用引号"><span>如何在反引号引起的标识符中使用引号</span></a></h3><p><strong>在反引号引起的标识符中可以直接使用单引号和双引号。</strong></p><p><strong>在用反引号引用的标识符中，可以通过双写反引号的方式使用反引号，即 \` 可以表示为 \`\`</strong>，示例如下：</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line"># 创建模板 t1\`t</span>
<span class="line">create device template \`t1\`\`t\` </span>
<span class="line">(temperature FLOAT encoding=RLE, status BOOLEAN encoding=PLAIN compression=SNAPPY)</span>
<span class="line"></span>
<span class="line"># 创建模板 t1&#39;t&quot;t</span>
<span class="line">create device template \`t1&#39;t&quot;t\` </span>
<span class="line">(temperature FLOAT encoding=RLE, status BOOLEAN encoding=PLAIN compression=SNAPPY)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="特殊情况示例" tabindex="-1"><a class="header-anchor" href="#特殊情况示例"><span>特殊情况示例</span></a></h3><p>需要使用反引号进行引用的部分情况示例：</p><ul><li><p>触发器名称出现上述特殊情况时需使用反引号引用：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token comment"># 创建触发器 alert.\`listener-sg1d1s1</span></span>
<span class="line"><span class="token keyword">CREATE</span> <span class="token keyword">TRIGGER</span> <span class="token identifier"><span class="token punctuation">\`</span>alert.\`\`listener-sg1d1s1<span class="token punctuation">\`</span></span></span>
<span class="line"><span class="token keyword">AFTER</span> <span class="token keyword">INSERT</span></span>
<span class="line"><span class="token keyword">ON</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1<span class="token punctuation">.</span>s1</span>
<span class="line"><span class="token keyword">AS</span> <span class="token string">&#39;org.apache.iotdb.db.engine.trigger.example.AlertListener&#39;</span></span>
<span class="line"><span class="token keyword">WITH</span> <span class="token punctuation">(</span></span>
<span class="line">  <span class="token string">&#39;lo&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">,</span> </span>
<span class="line">  <span class="token string">&#39;hi&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;100.0&#39;</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>UDF 名称出现上述特殊情况时需使用反引号引用：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token comment"># 创建名为 111 的 UDF，111 为实数，所以需要用反引号引用。</span></span>
<span class="line"><span class="token keyword">CREATE</span> <span class="token keyword">FUNCTION</span> <span class="token identifier"><span class="token punctuation">\`</span>111<span class="token punctuation">\`</span></span> <span class="token keyword">AS</span> <span class="token string">&#39;org.apache.iotdb.udf.UDTFExample&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>元数据模板名称出现上述特殊情况时需使用反引号引用：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token comment"># 创建名为 111 的元数据模板，111 为实数，需要用反引号引用。</span></span>
<span class="line"><span class="token keyword">create</span> device template <span class="token identifier"><span class="token punctuation">\`</span>111<span class="token punctuation">\`</span></span> </span>
<span class="line"><span class="token punctuation">(</span>temperature <span class="token keyword">FLOAT</span> encoding<span class="token operator">=</span>RLE<span class="token punctuation">,</span> <span class="token keyword">status</span> <span class="token keyword">BOOLEAN</span> encoding<span class="token operator">=</span>PLAIN compression<span class="token operator">=</span>SNAPPY<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>用户名、角色名出现上述特殊情况时需使用反引号引用，同时无论是否使用反引号引用，用户名、角色名中均不允许出现空格，具体请参考权限管理章节中的说明。</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token comment"># 创建用户 special\`user.</span></span>
<span class="line"><span class="token keyword">CREATE</span> <span class="token keyword">USER</span> <span class="token identifier"><span class="token punctuation">\`</span>special\`\`user.<span class="token punctuation">\`</span></span> <span class="token string">&#39;write_pwd&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建角色 111</span></span>
<span class="line"><span class="token keyword">CREATE</span> ROLE <span class="token identifier"><span class="token punctuation">\`</span>111<span class="token punctuation">\`</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>连续查询标识出现上述特殊情况时需使用反引号引用：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token comment"># 创建连续查询 test.cq</span></span>
<span class="line"><span class="token keyword">CREATE</span> CONTINUOUS QUERY <span class="token identifier"><span class="token punctuation">\`</span>test.cq<span class="token punctuation">\`</span></span> </span>
<span class="line"><span class="token keyword">BEGIN</span> </span>
<span class="line">  <span class="token keyword">SELECT</span> max_value<span class="token punctuation">(</span>temperature<span class="token punctuation">)</span> </span>
<span class="line">  <span class="token keyword">INTO</span> temperature_max </span>
<span class="line">  <span class="token keyword">FROM</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">.</span><span class="token operator">*</span> </span>
<span class="line">  <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> <span class="token keyword">time</span><span class="token punctuation">(</span><span class="token number">10</span>s<span class="token punctuation">)</span> </span>
<span class="line"><span class="token keyword">END</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Pipe、PipeSink 名称出现上述特殊情况时需使用反引号引用：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token comment"># 创建 PipeSink test.*1</span></span>
<span class="line"><span class="token keyword">CREATE</span> PIPESINK <span class="token identifier"><span class="token punctuation">\`</span>test.*1<span class="token punctuation">\`</span></span> <span class="token keyword">AS</span> IoTDB <span class="token punctuation">(</span><span class="token string">&#39;ip&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;输入你的IP&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建 Pipe test.*2</span></span>
<span class="line"><span class="token keyword">CREATE</span> PIPE <span class="token identifier"><span class="token punctuation">\`</span>test.*2<span class="token punctuation">\`</span></span> <span class="token keyword">TO</span> <span class="token identifier"><span class="token punctuation">\`</span>test.*1<span class="token punctuation">\`</span></span> <span class="token keyword">FROM</span> </span>
<span class="line"><span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token operator">*</span><span class="token operator">*</span> <span class="token keyword">from</span> root <span class="token keyword">WHERE</span> <span class="token keyword">time</span><span class="token operator">&gt;=</span>yyyy<span class="token operator">-</span>mm<span class="token operator">-</span>dd HH:MM:SS<span class="token punctuation">)</span> <span class="token keyword">WITH</span> <span class="token string">&#39;SyncDelOp&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;true&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Select 子句中可以结果集中的值指定别名，别名可以被定义为字符串或者标识符，示例如下：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> s1 <span class="token keyword">as</span> temperature<span class="token punctuation">,</span> s2 <span class="token keyword">as</span> speed <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01<span class="token punctuation">;</span></span>
<span class="line"><span class="token comment"># 表头如下所示</span></span>
<span class="line"><span class="token operator">+</span><span class="token comment">-----------------------------+-----------+-----+</span></span>
<span class="line"><span class="token operator">|</span>                         <span class="token keyword">Time</span><span class="token operator">|</span>temperature<span class="token operator">|</span>speed<span class="token operator">|</span></span>
<span class="line"><span class="token operator">+</span><span class="token comment">-----------------------------+-----------+-----+</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>用于表示键值对，键值对的键和值可以被定义成常量（包括字符串）或者标识符，具体请参考键值对章节。</p></li><li><p>路径中非database的节点允许含有“<em>”符号，在使用时需要把该节点用反引号括起来，如root.db.<code>*</code>，但是此种用法只建议在路径中不可避免含有“</em>”时使用。</p></li></ul><h2 id="关键字" tabindex="-1"><a class="header-anchor" href="#关键字"><span>关键字</span></a></h2><p>关键字是在 SQL 具有特定含义的词，可以作为标识符。保留字是关键字的一个子集，保留字不能用于标识符。</p>`,23)),n("p",null,[s[4]||(s[4]=a("关于 IoTDB 的关键字列表，可以查看 ")),i(e,{to:"/zh/UserGuide/latest/Reference/Keywords.html"},{default:t(()=>s[3]||(s[3]=[a("关键字")])),_:1}),s[5]||(s[5]=a(" 。"))]),s[8]||(s[8]=n("h2",{id:"词法与文法详细定义",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#词法与文法详细定义"},[n("span",null,"词法与文法详细定义")])],-1)),s[9]||(s[9]=n("p",null,"请阅读代码仓库中的词法和语法描述文件：",-1)),s[10]||(s[10]=n("p",null,[a("词法文件："),n("code",null,"antlr/src/main/antlr4/org/apache/iotdb/db/qp/sql/IoTDBSqlLexer.g4")],-1)),s[11]||(s[11]=n("p",null,[a("语法文件："),n("code",null,"antlr/src/main/antlr4/org/apache/iotdb/db/qp/sql/IoTDBSqlParser.g4")],-1))])}const k=p(o,[["render",u],["__file","Syntax-Rule.html.vue"]]),b=JSON.parse(`{"path":"/zh/UserGuide/latest/User-Manual/Syntax-Rule.html","title":"语法约定","lang":"zh-CN","frontmatter":{"description":"语法约定 字面值常量 该部分对 IoTDB 中支持的字面值常量进行说明，包括字符串常量、数值型常量、时间戳常量、布尔型常量和空值。 字符串常量 在 IoTDB 中，字符串是由单引号（'）或双引号（\\"）字符括起来的字符序列。示例如下： 使用场景 INSERT 或者 SELECT 中用于表达 TEXT 类型数据的场景。 LOAD / REMOVE / SE...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/latest/User-Manual/Syntax-Rule.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/latest/User-Manual/Syntax-Rule.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"语法约定"}],["meta",{"property":"og:description","content":"语法约定 字面值常量 该部分对 IoTDB 中支持的字面值常量进行说明，包括字符串常量、数值型常量、时间戳常量、布尔型常量和空值。 字符串常量 在 IoTDB 中，字符串是由单引号（'）或双引号（\\"）字符括起来的字符序列。示例如下： 使用场景 INSERT 或者 SELECT 中用于表达 TEXT 类型数据的场景。 LOAD / REMOVE / SE..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-17T08:00:53.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-17T08:00:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"语法约定\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-17T08:00:53.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"字面值常量","slug":"字面值常量","link":"#字面值常量","children":[{"level":3,"title":"字符串常量","slug":"字符串常量","link":"#字符串常量","children":[]},{"level":3,"title":"数值型常量","slug":"数值型常量","link":"#数值型常量","children":[]},{"level":3,"title":"时间戳常量","slug":"时间戳常量","link":"#时间戳常量","children":[]},{"level":3,"title":"布尔型常量","slug":"布尔型常量","link":"#布尔型常量","children":[]},{"level":3,"title":"空值","slug":"空值","link":"#空值","children":[]}]},{"level":2,"title":"标识符","slug":"标识符","link":"#标识符","children":[{"level":3,"title":"使用场景","slug":"使用场景-1","link":"#使用场景-1","children":[]},{"level":3,"title":"约束","slug":"约束","link":"#约束","children":[]},{"level":3,"title":"如何在反引号引起的标识符中使用引号","slug":"如何在反引号引起的标识符中使用引号","link":"#如何在反引号引起的标识符中使用引号","children":[]},{"level":3,"title":"特殊情况示例","slug":"特殊情况示例","link":"#特殊情况示例","children":[]}]},{"level":2,"title":"关键字","slug":"关键字","link":"#关键字","children":[]},{"level":2,"title":"词法与文法详细定义","slug":"词法与文法详细定义","link":"#词法与文法详细定义","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1715932853000,"contributors":[{"name":"wanghui42","email":"105700158+wanghui42@users.noreply.github.com","commits":4},{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":6.47,"words":1942},"filePathRelative":"zh/UserGuide/latest/User-Manual/Syntax-Rule.md","localizedDate":"2023年7月10日","autoDesc":true}`);export{k as comp,b as data};
