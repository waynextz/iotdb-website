import{_ as s,o as n,c as a,a as e,f as o}from"./app-d7e75f9d.js";const p={},t=o(`<h1 id="路径结点名" tabindex="-1"><a class="header-anchor" href="#路径结点名" aria-hidden="true">#</a> 路径结点名</h1><p>路径结点名是特殊的标识符，其还可以是通配符 * 或 **。在创建时间序列时，各层级的路径结点名不能为通配符 * 或 **。在查询语句中，可以用通配符 * 或 ** 来表示路径结点名，以匹配一层或多层路径。</p><h2 id="通配符" tabindex="-1"><a class="header-anchor" href="#通配符" aria-hidden="true">#</a> 通配符</h2><p><code>*</code>在路径中表示一层。例如<code>root.vehicle.*.sensor1</code>代表的是以<code>root.vehicle</code>为前缀，以<code>sensor1</code>为后缀，层次等于 4 层的路径。</p><p><code>**</code>在路径中表示是（<code>*</code>）+，即为一层或多层<code>*</code>。例如<code>root.vehicle.device1.**</code>代表的是<code>root.vehicle.device1.*</code>, <code>root.vehicle.device1.*.*</code>, <code>root.vehicle.device1.*.*.*</code>等所有以<code>root.vehicle.device1</code>为前缀路径的大于等于 4 层的路径；<code>root.vehicle.**.sensor1</code>代表的是以<code>root.vehicle</code>为前缀，以<code>sensor1</code>为后缀，层次大于等于 4 层的路径。</p><p>由于通配符 * 在查询表达式中也可以表示乘法符号，下述例子用于帮助您区分两种情况：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 创建时间序列 root.sg.\`a*b\`</span>
<span class="token keyword">create</span> timeseries root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>a*b<span class="token punctuation">\`</span></span> <span class="token keyword">with</span> datatype<span class="token operator">=</span><span class="token keyword">FLOAT</span><span class="token punctuation">,</span>encoding<span class="token operator">=</span>PLAIN<span class="token punctuation">;</span>
<span class="token comment"># 请注意，如标识符部分所述，a*b包含特殊字符，需要用\`\`括起来使用</span>
<span class="token comment"># create timeseries root.sg.a*b with datatype=FLOAT,encoding=PLAIN 是错误用法</span>

<span class="token comment"># 创建时间序列 root.sg.a</span>
<span class="token keyword">create</span> timeseries root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>a <span class="token keyword">with</span> datatype<span class="token operator">=</span><span class="token keyword">FLOAT</span><span class="token punctuation">,</span>encoding<span class="token operator">=</span>PLAIN<span class="token punctuation">;</span>

<span class="token comment"># 创建时间序列 root.sg.b</span>
<span class="token keyword">create</span> timeseries root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>b <span class="token keyword">with</span> datatype<span class="token operator">=</span><span class="token keyword">FLOAT</span><span class="token punctuation">,</span>encoding<span class="token operator">=</span>PLAIN<span class="token punctuation">;</span>

<span class="token comment"># 查询时间序列 root.sg.\`a*b\`</span>
<span class="token keyword">select</span> <span class="token identifier"><span class="token punctuation">\`</span>a*b<span class="token punctuation">\`</span></span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg
<span class="token comment"># 其结果集表头为</span>
<span class="token operator">|</span><span class="token keyword">Time</span><span class="token operator">|</span>root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>a<span class="token operator">*</span>b<span class="token operator">|</span>

<span class="token comment"># 查询时间序列 root.sg.a 和 root.sg.b的乘积</span>
<span class="token keyword">select</span> a<span class="token operator">*</span>b <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg
<span class="token comment"># 其结果集表头为</span>
<span class="token operator">|</span><span class="token keyword">Time</span><span class="token operator">|</span>root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>a <span class="token operator">*</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>b<span class="token operator">|</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="标识符" tabindex="-1"><a class="header-anchor" href="#标识符" aria-hidden="true">#</a> 标识符</h2><p>路径结点名不为通配符时，使用方法和标识符一致。<strong>在 SQL 中需要使用反引号引用的路径结点，在结果集中也会用反引号引起。</strong></p><p>需要使用反引号进行引用的部分特殊情况示例：</p><ul><li>创建时间序列时，如下情况需要使用反引号对特殊节点名进行引用：</li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 路径结点名中包含特殊字符，时间序列各结点为[&quot;root&quot;,&quot;sg&quot;,&quot;www.\`baidu.com&quot;]</span>
<span class="token keyword">create</span> timeseries root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>www.\`\`baidu.com<span class="token punctuation">\`</span></span><span class="token punctuation">.</span>a <span class="token keyword">with</span> datatype<span class="token operator">=</span><span class="token keyword">FLOAT</span><span class="token punctuation">,</span>encoding<span class="token operator">=</span>PLAIN<span class="token punctuation">;</span>

<span class="token comment"># 路径结点名为实数</span>
<span class="token keyword">create</span> timeseries root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>111<span class="token punctuation">\`</span></span> <span class="token keyword">with</span> datatype<span class="token operator">=</span><span class="token keyword">FLOAT</span><span class="token punctuation">,</span>encoding<span class="token operator">=</span>PLAIN<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>依次执行示例中语句后，执行 show timeseries，结果如下：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token operator">+</span><span class="token comment">---------------------------+-----+-------------+--------+--------+-----------+----+----------+</span>
<span class="token operator">|</span>                 timeseries<span class="token operator">|</span>alias<span class="token operator">|</span><span class="token keyword">database</span><span class="token operator">|</span>dataType<span class="token operator">|</span>encoding<span class="token operator">|</span>compression<span class="token operator">|</span>tags<span class="token operator">|</span>attributes<span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">---------------------------+-----+-------------+--------+--------+-----------+----+----------+</span>
<span class="token operator">|</span>            root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>111<span class="token punctuation">\`</span></span><span class="token punctuation">.</span>a<span class="token operator">|</span> <span class="token boolean">null</span><span class="token operator">|</span>      root<span class="token punctuation">.</span>sg<span class="token operator">|</span>   <span class="token keyword">FLOAT</span><span class="token operator">|</span>   PLAIN<span class="token operator">|</span>     SNAPPY<span class="token operator">|</span><span class="token boolean">null</span><span class="token operator">|</span>      <span class="token boolean">null</span><span class="token operator">|</span>
<span class="token operator">|</span>root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>www.\`\`baidu.com<span class="token punctuation">\`</span></span><span class="token punctuation">.</span>a<span class="token operator">|</span> <span class="token boolean">null</span><span class="token operator">|</span>      root<span class="token punctuation">.</span>sg<span class="token operator">|</span>   <span class="token keyword">FLOAT</span><span class="token operator">|</span>   PLAIN<span class="token operator">|</span>     SNAPPY<span class="token operator">|</span><span class="token boolean">null</span><span class="token operator">|</span>      <span class="token boolean">null</span><span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">---------------------------+-----+-------------+--------+--------+-----------+----+----------+</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>插入数据时，如下情况需要使用反引号对特殊节点名进行引用：</li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 路径结点名中包含特殊字符</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>www.\`\`baidu.com<span class="token punctuation">\`</span></span><span class="token punctuation">(</span><span class="token keyword">timestamp</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment"># 路径结点名为实数</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">(</span><span class="token keyword">timestamp</span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">\`</span>111<span class="token punctuation">\`</span></span><span class="token punctuation">)</span> <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>查询数据时，如下情况需要使用反引号对特殊节点名进行引用：</li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 路径结点名中包含特殊字符</span>
<span class="token keyword">select</span> a <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>www.\`\`baidu.com<span class="token punctuation">\`</span></span><span class="token punctuation">;</span>

<span class="token comment"># 路径结点名为实数</span>
<span class="token keyword">select</span> <span class="token identifier"><span class="token punctuation">\`</span>111<span class="token punctuation">\`</span></span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果集分别为：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># select a from root.sg.\`www.\`\`baidu.com\` 结果集</span>
<span class="token operator">+</span><span class="token comment">-----------------------------+---------------------------+</span>
<span class="token operator">|</span>                         <span class="token keyword">Time</span><span class="token operator">|</span>root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>www.\`\`baidu.com<span class="token punctuation">\`</span></span><span class="token punctuation">.</span>a<span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-----------------------------+---------------------------+</span>
<span class="token operator">|</span><span class="token number">1970</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span>T08:<span class="token number">00</span>:<span class="token number">00.001</span><span class="token operator">+</span><span class="token number">08</span>:<span class="token number">00</span><span class="token operator">|</span>                        <span class="token number">2.0</span><span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-----------------------------+---------------------------+</span>

<span class="token comment"># select \`111\` from root.sg 结果集</span>
<span class="token operator">+</span><span class="token comment">-----------------------------+-------------+</span>
<span class="token operator">|</span>                         <span class="token keyword">Time</span><span class="token operator">|</span>root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>111<span class="token punctuation">\`</span></span><span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-----------------------------+-------------+</span>
<span class="token operator">|</span><span class="token number">1970</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span>T08:<span class="token number">00</span>:<span class="token number">00.001</span><span class="token operator">+</span><span class="token number">08</span>:<span class="token number">00</span><span class="token operator">|</span>          <span class="token number">2.0</span><span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-----------------------------+-------------+</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20);function c(l,i){return n(),a("div",null,[e(`

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

`),t])}const u=s(p,[["render",c],["__file","NodeName-In-Path.html.vue"]]);export{u as default};
