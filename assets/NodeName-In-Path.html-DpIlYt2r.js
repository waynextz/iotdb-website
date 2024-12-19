import{_ as n,c as a,b as l,o}from"./app-C-0rb--l.js";const e={};function p(t,s){return o(),a("div",null,s[0]||(s[0]=[l(`<h1 id="路径结点名" tabindex="-1"><a class="header-anchor" href="#路径结点名"><span>路径结点名</span></a></h1><p>路径结点名是特殊的标识符，其还可以是通配符 * 或 **。在创建时间序列时，各层级的路径结点名不能为通配符 * 或 **。在查询语句中，可以用通配符 * 或 ** 来表示路径结点名，以匹配一层或多层路径。</p><h2 id="通配符" tabindex="-1"><a class="header-anchor" href="#通配符"><span>通配符</span></a></h2><p><code>*</code>在路径中表示一层。例如<code>root.vehicle.*.sensor1</code>代表的是以<code>root.vehicle</code>为前缀，以<code>sensor1</code>为后缀，层次等于 4 层的路径。</p><p><code>**</code>在路径中表示是（<code>*</code>）+，即为一层或多层<code>*</code>。例如<code>root.vehicle.device1.**</code>代表的是<code>root.vehicle.device1.*</code>, <code>root.vehicle.device1.*.*</code>, <code>root.vehicle.device1.*.*.*</code>等所有以<code>root.vehicle.device1</code>为前缀路径的大于等于 4 层的路径；<code>root.vehicle.**.sensor1</code>代表的是以<code>root.vehicle</code>为前缀，以<code>sensor1</code>为后缀，层次大于等于 4 层的路径。</p><p>由于通配符 * 在查询表达式中也可以表示乘法符号，下述例子用于帮助您区分两种情况：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#ABB2BF;"># 创建时间序列 </span><span style="color:#D19A66;">root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sg</span><span style="color:#ABB2BF;">.</span><span style="color:#98C379;">\`a*b\`</span></span>
<span class="line"><span style="color:#C678DD;">create</span><span style="color:#ABB2BF;"> timeseries </span><span style="color:#D19A66;">root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sg</span><span style="color:#ABB2BF;">.</span><span style="color:#98C379;">\`a*b\`</span><span style="color:#C678DD;"> with</span><span style="color:#ABB2BF;"> datatype</span><span style="color:#56B6C2;">=</span><span style="color:#C678DD;">FLOAT</span><span style="color:#ABB2BF;">,</span><span style="color:#C678DD;">encoding</span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;">PLAIN;</span></span>
<span class="line"><span style="color:#ABB2BF;"># 请注意，如标识符部分所述，a*b包含特殊字符，需要用</span><span style="color:#98C379;">\`\`</span><span style="color:#ABB2BF;">括起来使用</span></span>
<span class="line"><span style="color:#ABB2BF;"># </span><span style="color:#C678DD;">create</span><span style="color:#ABB2BF;"> timeseries </span><span style="color:#D19A66;">root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sg</span><span style="color:#ABB2BF;">.a*b </span><span style="color:#C678DD;">with</span><span style="color:#ABB2BF;"> datatype</span><span style="color:#56B6C2;">=</span><span style="color:#C678DD;">FLOAT</span><span style="color:#ABB2BF;">,</span><span style="color:#C678DD;">encoding</span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;">PLAIN 是错误用法</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;"># 创建时间序列 </span><span style="color:#D19A66;">root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sg</span><span style="color:#ABB2BF;">.a</span></span>
<span class="line"><span style="color:#C678DD;">create</span><span style="color:#ABB2BF;"> timeseries </span><span style="color:#D19A66;">root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sg</span><span style="color:#ABB2BF;">.a </span><span style="color:#C678DD;">with</span><span style="color:#ABB2BF;"> datatype</span><span style="color:#56B6C2;">=</span><span style="color:#C678DD;">FLOAT</span><span style="color:#ABB2BF;">,</span><span style="color:#C678DD;">encoding</span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;">PLAIN;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;"># 创建时间序列 </span><span style="color:#D19A66;">root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sg</span><span style="color:#ABB2BF;">.b</span></span>
<span class="line"><span style="color:#C678DD;">create</span><span style="color:#ABB2BF;"> timeseries </span><span style="color:#D19A66;">root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sg</span><span style="color:#ABB2BF;">.b </span><span style="color:#C678DD;">with</span><span style="color:#ABB2BF;"> datatype</span><span style="color:#56B6C2;">=</span><span style="color:#C678DD;">FLOAT</span><span style="color:#ABB2BF;">,</span><span style="color:#C678DD;">encoding</span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;">PLAIN;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;"># 查询时间序列 </span><span style="color:#D19A66;">root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sg</span><span style="color:#ABB2BF;">.</span><span style="color:#98C379;">\`a*b\`</span></span>
<span class="line"><span style="color:#C678DD;">select</span><span style="color:#98C379;"> \`a*b\`</span><span style="color:#C678DD;"> from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sg</span></span>
<span class="line"><span style="color:#ABB2BF;"># 其结果集表头为</span></span>
<span class="line"><span style="color:#ABB2BF;">|</span><span style="color:#C678DD;">Time</span><span style="color:#ABB2BF;">|</span><span style="color:#D19A66;">root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sg</span><span style="color:#ABB2BF;">.a*b|</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;"># 查询时间序列 </span><span style="color:#D19A66;">root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sg</span><span style="color:#ABB2BF;">.a 和 </span><span style="color:#D19A66;">root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sg</span><span style="color:#ABB2BF;">.b的乘积</span></span>
<span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> a*b </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sg</span></span>
<span class="line"><span style="color:#ABB2BF;"># 其结果集表头为</span></span>
<span class="line"><span style="color:#ABB2BF;">|</span><span style="color:#C678DD;">Time</span><span style="color:#ABB2BF;">|</span><span style="color:#D19A66;">root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sg</span><span style="color:#ABB2BF;">.a * </span><span style="color:#D19A66;">root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sg</span><span style="color:#ABB2BF;">.b|</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="标识符" tabindex="-1"><a class="header-anchor" href="#标识符"><span>标识符</span></a></h2><p>路径结点名不为通配符时，使用方法和标识符一致。<strong>在 SQL 中需要使用反引号引用的路径结点，在结果集中也会用反引号引起。</strong></p><p>需要使用反引号进行引用的部分特殊情况示例：</p><ul><li>创建时间序列时，如下情况需要使用反引号对特殊节点名进行引用：</li></ul><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#ABB2BF;"># 路径结点名中包含特殊字符，时间序列各结点为</span><span style="color:#E06C75;">[&quot;root&quot;,&quot;sg&quot;,&quot;www.\`baidu.com&quot;]</span></span>
<span class="line"><span style="color:#C678DD;">create</span><span style="color:#ABB2BF;"> timeseries </span><span style="color:#D19A66;">root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sg</span><span style="color:#ABB2BF;">.</span><span style="color:#98C379;">\`www.\`\`baidu.com\`</span><span style="color:#ABB2BF;">.a </span><span style="color:#C678DD;">with</span><span style="color:#ABB2BF;"> datatype</span><span style="color:#56B6C2;">=</span><span style="color:#C678DD;">FLOAT</span><span style="color:#ABB2BF;">,</span><span style="color:#C678DD;">encoding</span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;">PLAIN;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;"># 路径结点名为实数</span></span>
<span class="line"><span style="color:#C678DD;">create</span><span style="color:#ABB2BF;"> timeseries </span><span style="color:#D19A66;">root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sg</span><span style="color:#ABB2BF;">.</span><span style="color:#98C379;">\`111\`</span><span style="color:#C678DD;"> with</span><span style="color:#ABB2BF;"> datatype</span><span style="color:#56B6C2;">=</span><span style="color:#C678DD;">FLOAT</span><span style="color:#ABB2BF;">,</span><span style="color:#C678DD;">encoding</span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;">PLAIN;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>依次执行示例中语句后，执行 show timeseries，结果如下：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#ABB2BF;">+</span><span style="color:#7F848E;font-style:italic;">---------------------------+-----+-------------+--------+--------+-----------+----+----------+</span></span>
<span class="line"><span style="color:#ABB2BF;">|                 timeseries|alias|</span><span style="color:#C678DD;">database</span><span style="color:#ABB2BF;">|dataType|</span><span style="color:#C678DD;">encoding</span><span style="color:#ABB2BF;">|</span><span style="color:#C678DD;">compression</span><span style="color:#ABB2BF;">|tags|attributes|</span></span>
<span class="line"><span style="color:#ABB2BF;">+</span><span style="color:#7F848E;font-style:italic;">---------------------------+-----+-------------+--------+--------+-----------+----+----------+</span></span>
<span class="line"><span style="color:#ABB2BF;">|            </span><span style="color:#D19A66;">root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sg</span><span style="color:#ABB2BF;">.</span><span style="color:#98C379;">\`111\`</span><span style="color:#ABB2BF;">.a| </span><span style="color:#C678DD;">null</span><span style="color:#ABB2BF;">|      </span><span style="color:#D19A66;">root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sg</span><span style="color:#ABB2BF;">|   </span><span style="color:#C678DD;">FLOAT</span><span style="color:#ABB2BF;">|   PLAIN|     SNAPPY|</span><span style="color:#C678DD;">null</span><span style="color:#ABB2BF;">|      </span><span style="color:#C678DD;">null</span><span style="color:#ABB2BF;">|</span></span>
<span class="line"><span style="color:#ABB2BF;">|</span><span style="color:#D19A66;">root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sg</span><span style="color:#ABB2BF;">.</span><span style="color:#98C379;">\`www.\`\`baidu.com\`</span><span style="color:#ABB2BF;">.a| </span><span style="color:#C678DD;">null</span><span style="color:#ABB2BF;">|      </span><span style="color:#D19A66;">root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sg</span><span style="color:#ABB2BF;">|   </span><span style="color:#C678DD;">FLOAT</span><span style="color:#ABB2BF;">|   PLAIN|     SNAPPY|</span><span style="color:#C678DD;">null</span><span style="color:#ABB2BF;">|      </span><span style="color:#C678DD;">null</span><span style="color:#ABB2BF;">|</span></span>
<span class="line"><span style="color:#ABB2BF;">+</span><span style="color:#7F848E;font-style:italic;">---------------------------+-----+-------------+--------+--------+-----------+----+----------+</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>插入数据时，如下情况需要使用反引号对特殊节点名进行引用：</li></ul><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#ABB2BF;"># 路径结点名中包含特殊字符</span></span>
<span class="line"><span style="color:#C678DD;">insert into</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sg</span><span style="color:#ABB2BF;">.</span><span style="color:#98C379;">\`www.\`\`baidu.com\`</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">timestamp</span><span style="color:#ABB2BF;">, a) </span><span style="color:#C678DD;">values</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;"># 路径结点名为实数</span></span>
<span class="line"><span style="color:#C678DD;">insert into</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sg</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">timestamp</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">\`111\`</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">values</span><span style="color:#ABB2BF;"> (</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>查询数据时，如下情况需要使用反引号对特殊节点名进行引用：</li></ul><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#ABB2BF;"># 路径结点名中包含特殊字符</span></span>
<span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> a </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sg</span><span style="color:#ABB2BF;">.</span><span style="color:#98C379;">\`www.\`\`baidu.com\`</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;"># 路径结点名为实数</span></span>
<span class="line"><span style="color:#C678DD;">select</span><span style="color:#98C379;"> \`111\`</span><span style="color:#C678DD;"> from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sg</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果集分别为：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#ABB2BF;"># </span><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> a </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sg</span><span style="color:#ABB2BF;">.</span><span style="color:#98C379;">\`www.\`\`baidu.com\`</span><span style="color:#ABB2BF;"> 结果集</span></span>
<span class="line"><span style="color:#ABB2BF;">+</span><span style="color:#7F848E;font-style:italic;">-----------------------------+---------------------------+</span></span>
<span class="line"><span style="color:#ABB2BF;">|                         </span><span style="color:#C678DD;">Time</span><span style="color:#ABB2BF;">|</span><span style="color:#D19A66;">root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sg</span><span style="color:#ABB2BF;">.</span><span style="color:#98C379;">\`www.\`\`baidu.com\`</span><span style="color:#ABB2BF;">.a|</span></span>
<span class="line"><span style="color:#ABB2BF;">+</span><span style="color:#7F848E;font-style:italic;">-----------------------------+---------------------------+</span></span>
<span class="line"><span style="color:#ABB2BF;">|</span><span style="color:#D19A66;">1970</span><span style="color:#ABB2BF;">-</span><span style="color:#D19A66;">01</span><span style="color:#ABB2BF;">-01T08:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">001</span><span style="color:#ABB2BF;">+</span><span style="color:#D19A66;">08</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">|                        </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">|</span></span>
<span class="line"><span style="color:#ABB2BF;">+</span><span style="color:#7F848E;font-style:italic;">-----------------------------+---------------------------+</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;"># </span><span style="color:#C678DD;">select</span><span style="color:#98C379;"> \`111\`</span><span style="color:#C678DD;"> from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sg</span><span style="color:#ABB2BF;"> 结果集</span></span>
<span class="line"><span style="color:#ABB2BF;">+</span><span style="color:#7F848E;font-style:italic;">-----------------------------+-------------+</span></span>
<span class="line"><span style="color:#ABB2BF;">|                         </span><span style="color:#C678DD;">Time</span><span style="color:#ABB2BF;">|</span><span style="color:#D19A66;">root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sg</span><span style="color:#ABB2BF;">.</span><span style="color:#98C379;">\`111\`</span><span style="color:#ABB2BF;">|</span></span>
<span class="line"><span style="color:#ABB2BF;">+</span><span style="color:#7F848E;font-style:italic;">-----------------------------+-------------+</span></span>
<span class="line"><span style="color:#ABB2BF;">|</span><span style="color:#D19A66;">1970</span><span style="color:#ABB2BF;">-</span><span style="color:#D19A66;">01</span><span style="color:#ABB2BF;">-01T08:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">001</span><span style="color:#ABB2BF;">+</span><span style="color:#D19A66;">08</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">|          </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">|</span></span>
<span class="line"><span style="color:#ABB2BF;">+</span><span style="color:#7F848E;font-style:italic;">-----------------------------+-------------+</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20)]))}const r=n(e,[["render",p],["__file","NodeName-In-Path.html.vue"]]),B=JSON.parse('{"path":"/zh/UserGuide/V1.0.x/Syntax-Conventions/NodeName-In-Path.html","title":"路径结点名","lang":"zh-CN","frontmatter":{"description":"路径结点名 路径结点名是特殊的标识符，其还可以是通配符 * 或 **。在创建时间序列时，各层级的路径结点名不能为通配符 * 或 **。在查询语句中，可以用通配符 * 或 ** 来表示路径结点名，以匹配一层或多层路径。 通配符 *在路径中表示一层。例如root.vehicle.*.sensor1代表的是以root.vehicle为前缀，以sensor1为...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.0.x/Syntax-Conventions/NodeName-In-Path.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/Syntax-Conventions/NodeName-In-Path.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"路径结点名"}],["meta",{"property":"og:description","content":"路径结点名 路径结点名是特殊的标识符，其还可以是通配符 * 或 **。在创建时间序列时，各层级的路径结点名不能为通配符 * 或 **。在查询语句中，可以用通配符 * 或 ** 来表示路径结点名，以匹配一层或多层路径。 通配符 *在路径中表示一层。例如root.vehicle.*.sensor1代表的是以root.vehicle为前缀，以sensor1为..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"路径结点名\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"通配符","slug":"通配符","link":"#通配符","children":[]},{"level":2,"title":"标识符","slug":"标识符","link":"#标识符","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","username":"CritasWang","email":"critas@outlook.com","commits":1,"url":"https://github.com/CritasWang"}]},"readingTime":{"minutes":2.86,"words":857},"filePathRelative":"zh/UserGuide/V1.0.x/Syntax-Conventions/NodeName-In-Path.md","localizedDate":"2023年7月10日","autoDesc":true}');export{r as comp,B as data};
