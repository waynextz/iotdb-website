import{_ as i,r as s,o as c,c as r,a as l,d as a,e,b as n,w as d,f as o}from"./app-d2093efc.js";const p={},h=a("h1",{id:"数据模型",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#数据模型","aria-hidden":"true"},"#"),e(" 数据模型")],-1),u=a("p",null,"我们以风电场物联网场景为例，说明如何在 IoTDB 中创建一个正确的数据模型。",-1),m=a("p",null,[e("根据企业组织结构和设备实体层次结构，我们将其物联网数据模型表示为如下图所示的属性层级组织结构，即电力集团层-风电场层-实体层-物理量层。其中 ROOT 为根节点，物理量层的每一个节点为叶子节点。IoTDB 采用树形结构定义数据模式，以从 ROOT 节点到叶子节点的路径来命名一个时间序列，层次间以“.”连接。例如，下图最左侧路径对应的时间序列名称为"),a("code",null,"ROOT.ln.wf01.wt01.status"),e("。")],-1),b=a("img",{style:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},src:"https://alioss.timecho.com/docs/img/github/123542457-5f511d00-d77c-11eb-8006-562d83069baa.png"},null,-1),v=a("strong",null,"元数据模板",-1),g=o('<p>IoTDB 模型结构涉及的基本概念在下文将做详细叙述。</p><h2 id="数据库-database" tabindex="-1"><a class="header-anchor" href="#数据库-database" aria-hidden="true">#</a> 数据库（Database）</h2><p>用户可以将任意前缀路径设置成数据库。如有 4 条时间序列<code>root.ln.wf01.wt01.status</code>, <code>root.ln.wf01.wt01.temperature</code>, <code>root.ln.wf02.wt02.hardware</code>, <code>root.ln.wf02.wt02.status</code>，路径<code>root.ln</code>下的两个实体 <code>wt01</code>, <code>wt02</code>可能属于同一个业主，或者同一个制造商，这时候就可以将前缀路径<code>root.ln</code>指定为一个数据库。未来<code>root.ln</code>下增加了新的实体，也将属于该数据库。</p><p>一个 database 中的所有数据会存储在同一批文件夹下，不同 database 的数据会存储在磁盘的不同文件夹下，从而实现物理隔离。</p><blockquote><p>注意 1：不允许将一个完整路径（如上例的<code>root.ln.wf01.wt01.status</code>) 设置成 database。</p><p>注意 2：一个时间序列其前缀必须属于某个 database。在创建时间序列之前，用户必须设定该序列属于哪个database。只有设置了 database 的时间序列才可以被持久化在磁盘上。</p><p>注意 3：被设置为数据库的路径总字符数不能超过64，包括路径开头的<code>root.</code>这5个字符。</p></blockquote><p>一个前缀路径一旦被设定成 database 后就不可以再更改这个 database 的设定。</p><p>一个 database 设定后，其对应的前缀路径的祖先层级与孩子及后裔层级也不允许再设置 database（如，<code>root.ln</code>设置 database 后，root 层级与<code>root.ln.wf01</code>不允许被设置为 database）。</p><p>Database 节点名只支持中英文字符、数字和下划线的组合。例如<code>root.数据库_1</code> 。</p><h2 id="设备-device" tabindex="-1"><a class="header-anchor" href="#设备-device" aria-hidden="true">#</a> 设备（Device）</h2><p><strong>一个物理设备</strong>，也称实体（Entity），是在实际场景中拥有物理量的设备或装置。在 IoTDB 当中，所有的物理量都有其对应的归属实体。实体是管理的一组时间序列的组合，可以是一个物理设备、测量装置、传感器集合等。</p><h2 id="物理量-measurement" tabindex="-1"><a class="header-anchor" href="#物理量-measurement" aria-hidden="true">#</a> 物理量（Measurement）</h2><p><strong>物理量</strong>，也称工况或字段（field），是在实际场景中检测装置所记录的测量信息，且可以按一定规律变换成为电信号或其他所需形式的信息输出并发送给 IoTDB。在 IoTDB 当中，存储的所有数据及路径，都是以物理量为单位进行组织。</p><h2 id="时间序列" tabindex="-1"><a class="header-anchor" href="#时间序列" aria-hidden="true">#</a> 时间序列</h2><h3 id="时间戳-timestamp" tabindex="-1"><a class="header-anchor" href="#时间戳-timestamp" aria-hidden="true">#</a> 时间戳 (Timestamp)</h3>',14),f=o(`<h3 id="数据点-data-point" tabindex="-1"><a class="header-anchor" href="#数据点-data-point" aria-hidden="true">#</a> 数据点（Data Point）</h3><p><strong>一个“时间戳-值”对</strong>。</p><h3 id="时间序列-timeseries" tabindex="-1"><a class="header-anchor" href="#时间序列-timeseries" aria-hidden="true">#</a> 时间序列（Timeseries）</h3><p><strong>一个物理实体的某个物理量在时间轴上的记录</strong>，是数据点的序列。</p><p>一个实体的一个物理量对应一个时间序列，即实体+物理量=时间序列。</p><p>时间序列也被称测点（meter）、时间线（timeline）。实时数据库中常被称作标签（tag）、参数（parameter）。IoTDB管理的测点数量可达数十亿以上。</p><p>例如，ln 电力集团、wf01 风电场的实体 wt01 有名为 status 的物理量，则它的时间序列可以表示为：<code>root.ln.wf01.wt01.status</code>。</p><h3 id="对齐时间序列-aligned-timeseries" tabindex="-1"><a class="header-anchor" href="#对齐时间序列-aligned-timeseries" aria-hidden="true">#</a> 对齐时间序列（Aligned Timeseries）</h3><p>在实际应用中，存在某些实体的多个物理量<strong>同时采样</strong>，形成一组时间列相同的时间序列，这样的一组时间序列在Apache IoTDB中可以建模为对齐时间序列。</p><p>在插入数据时，一组对齐序列的时间戳列在内存和磁盘中仅需存储一次，而不是每个时间序列存储一次。</p><p>对齐的一组时间序列最好同时创建。</p><p>不可以在对齐序列所属的实体下创建非对齐的序列，不可以在非对齐序列所属的实体下创建对齐序列。</p><p>查询数据时，可以对于每一条时间序列单独查询。</p><p>插入数据时，对齐的时间序列中某列的某些行允许有空值。</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/github/114125919-f4850800-9929-11eb-8211-81d4c04af1ec.png"><p>在后续数据定义语言、数据操作语言和 Java 原生接口章节，将对涉及到对齐时间序列的各种操作进行逐一介绍。</p><h2 id="路径-path" tabindex="-1"><a class="header-anchor" href="#路径-path" aria-hidden="true">#</a> 路径（Path）</h2><p>路径（<code>path</code>）是指符合以下约束的表达式：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>path       
    : nodeName <span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span> nodeName<span class="token punctuation">)</span><span class="token operator">*</span>
    <span class="token punctuation">;</span>
    
nodeName
    : wildcard? identifier wildcard?
    <span class="token operator">|</span> wildcard
    <span class="token punctuation">;</span>
    
wildcard 
    : <span class="token string">&#39;*&#39;</span> 
    <span class="token operator">|</span> <span class="token string">&#39;**&#39;</span>
    <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们称一个路径中由 <code>&#39;.&#39;</code> 分割的部分叫做路径结点名（<code>nodeName</code>）。例如：<code>root.a.b.c</code>为一个层级为 4 的路径。</p><p>下面是对路径结点名（<code>nodeName</code>）的约束：</p>`,21),w=o("<li><code>root</code> 作为一个保留字符，它只允许出现在下文提到的时间序列的开头，若其他层级出现 <code>root</code>，则无法解析，提示报错。</li><li>除了时间序列的开头的层级（<code>root</code>）外，其他的层级支持的字符如下： <ul><li>[ 0-9 a-z A-Z _ ] （字母，数字，下划线）</li><li>[&#39;\\u2E80&#39;..&#39;\\u9FFF&#39;] （UNICODE 中文字符）</li></ul></li><li>特别地，如果系统在 Windows 系统上部署，那么 database 路径结点名是大小写不敏感的。例如，同时创建<code>root.ln</code> 和 <code>root.LN</code> 是不被允许的。</li>",3),_=o('<h2 id="路径模式-path-pattern" tabindex="-1"><a class="header-anchor" href="#路径模式-path-pattern" aria-hidden="true">#</a> 路径模式（Path Pattern）</h2><p>为了使得在表达多个时间序列的时候更加方便快捷，IoTDB 为用户提供带通配符<code>*</code>或<code>**</code>的路径。用户可以利用两种通配符构造出期望的路径模式。通配符可以出现在路径中的任何层。</p><p><code>*</code>在路径中表示一层。例如<code>root.vehicle.*.sensor1</code>代表的是以<code>root.vehicle</code>为前缀，以<code>sensor1</code>为后缀，层次等于 4 层的路径。</p><p><code>**</code>在路径中表示是（<code>*</code>）+，即为一层或多层<code>*</code>。例如<code>root.vehicle.device1.**</code>代表的是<code>root.vehicle.device1.*</code>, <code>root.vehicle.device1.*.*</code>, <code>root.vehicle.device1.*.*.*</code>等所有以<code>root.vehicle.device1</code>为前缀路径的大于等于 4 层的路径；<code>root.vehicle.**.sensor1</code>代表的是以<code>root.vehicle</code>为前缀，以<code>sensor1</code>为后缀，层次大于等于 4 层的路径。</p><blockquote><p>注意：<code>*</code>和<code>**</code>不能放在路径开头。</p></blockquote>',5);function x(T,k){const t=s("RouterLink");return c(),r("div",null,[l(`

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

`),h,u,m,b,a("p",null,[e("在上图所描述的实际场景中，有许多实体所采集的物理量相同，即具有相同的工况名称和类型，因此，可以声明一个"),v,e("来定义可采集的物理量集合。在实践中，元数据模板的使用可帮助减少元数据的资源占用，详细内容参见 "),n(t,{to:"/zh/UserGuide/V1.2.x/Basic-Concept/Schema-Template.html"},{default:d(()=>[e("元数据模板文档")]),_:1}),e("。")]),g,a("p",null,[e("时间戳是一个数据到来的时间点，其中包括绝对时间戳和相对时间戳，详细描述参见 "),n(t,{to:"/zh/UserGuide/V1.2.x/Basic-Concept/Data-Type.html"},{default:d(()=>[e("数据类型文档")]),_:1}),e("。")]),f,a("ul",null,[w,a("li",null,[e("如果需要在路径结点名中用特殊字符，可以用反引号引用路径结点名，具体使用方法可以参考"),n(t,{to:"/zh/UserGuide/V1.2.x/Syntax-Conventions/Literal-Values.html"},{default:d(()=>[e("语法约定")]),_:1}),e("。")])]),_])}const I=i(p,[["render",x],["__file","Data-Model-and-Terminology.html.vue"]]);export{I as default};
