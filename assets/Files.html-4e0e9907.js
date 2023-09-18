import{_ as d,r as s,o as r,c as o,a as l,d as a,e,b as i,w as n,f as c}from"./app-181aa290.js";const h={},u=a("h2",{id:"数据文件存储",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#数据文件存储","aria-hidden":"true"},"#"),e(" 数据文件存储")],-1),_=a("p",null,"本节将介绍 IoTDB 的数据存储方式，便于您对 IoTDB 的数据管理有一个直观的了解。",-1),m=a("p",null,"IoTDB 需要存储的数据分为三类，分别为数据文件、系统文件以及写前日志文件。",-1),f=a("h3",{id:"数据文件",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#数据文件","aria-hidden":"true"},"#"),e(" 数据文件")],-1),p=a("h3",{id:"系统文件",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#系统文件","aria-hidden":"true"},"#"),e(" 系统文件")],-1),g=a("h3",{id:"写前日志文件",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#写前日志文件","aria-hidden":"true"},"#"),e(" 写前日志文件")],-1),x=a("code",null,"wal_dir",-1),T=c(`<h3 id="数据存储目录设置举例" tabindex="-1"><a class="header-anchor" href="#数据存储目录设置举例" aria-hidden="true">#</a> 数据存储目录设置举例</h3><p>接下来我们将举一个数据目录配置的例子，来具体说明如何配置数据的存储目录。</p><p>IoTDB 涉及到的所有数据目录路径有：data_dirs, multi_dir_strategy, system_dir 和 wal_dir，它们分别涉及的是 IoTDB 的数据文件、数据文件多目录存储策略、系统文件以及写前日志文件。您可以选择输入路径自行配置，也可以不进行任何操作使用系统默认的配置项。</p><p>以下我们给出一个用户对五个目录都进行自行配置的例子。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>system_dir = $IOTDB_HOME/data
data_dirs = /data1/data, /data2/data, /data3/data 
multi_dir_strategy=MaxDiskUsableSpaceFirstStrategy
wal_dir= $IOTDB_HOME/data/wal
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>按照上述配置，系统会：</p><ul><li>将 TsFile 存储在路径/data1/data、路径/data2/data 和路径 data3/data3 中。且对这三个路径的选择策略是：<code>优先选择磁盘剩余空间最大的目录</code>，即在每次数据持久化到磁盘时系统会自动选择磁盘剩余空间最大的一个目录将数据进行写入</li><li>将系统文件存储在$IOTDB_HOME/data</li><li>将写前日志文件存储在$IOTDB_HOME/data/wal</li></ul>`,7);function b(I,w){const t=s("RouterLink");return r(),o("div",null,[l(`

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

`),u,_,m,f,a("p",null,[e("数据文件存储了用户写入 IoTDB 系统的所有数据。包含 TsFile 文件和其他文件，可通过 "),i(t,{to:"/zh/UserGuide/V0.13.x/Reference/Config-Manual.html"},{default:n(()=>[e("data_dirs 配置项")]),_:1}),e(" 进行配置。")]),a("p",null,[e("为了更好的支持用户对于磁盘空间扩展等存储需求，IoTDB 为 TsFile 的存储配置增加了多文件目录的存储方式，用户可自主配置多个存储路径作为数据的持久化位置（详情见 "),i(t,{to:"/zh/UserGuide/V0.13.x/Reference/Config-Manual.html"},{default:n(()=>[e("data_dirs 配置项")]),_:1}),e("），并可以指定或自定义目录选择策略（详情见 "),i(t,{to:"/zh/UserGuide/V0.13.x/Reference/Config-Manual.html"},{default:n(()=>[e("multi_dir_strategy 配置项")]),_:1}),e("）。")]),p,a("p",null,[e("系统 Schema 文件，存储了数据文件的元数据信息。可通过 system_dir 配置项进行配置（详情见 "),i(t,{to:"/zh/UserGuide/V0.13.x/Reference/Config-Manual.html"},{default:n(()=>[e("system_dir 配置项")]),_:1}),e("）。")]),g,a("p",null,[e("写前日志文件存储了系统的写前日志。可通过"),x,e("配置项进行配置（详情见 "),i(t,{to:"/zh/UserGuide/V0.13.x/Reference/Config-Manual.html"},{default:n(()=>[e("wal_dir 配置项")]),_:1}),e("）。")]),T])}const S=d(h,[["render",b],["__file","Files.html.vue"]]);export{S as default};
