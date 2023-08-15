import{_ as a,o as s,c as n,a as o,f as e}from"./app-d7e75f9d.js";const p={},t=e('<h2 id="iotdb数据文件夹概览工具" tabindex="-1"><a class="header-anchor" href="#iotdb数据文件夹概览工具" aria-hidden="true">#</a> IoTDB数据文件夹概览工具</h2><p>IoTDB数据文件夹概览工具用于打印出数据文件夹的结构概览信息，工具位置为 tools/tsfile/print-iotdb-data-dir。</p><h3 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h3><ul><li>Windows:</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>.<span class="token punctuation">\\</span>print-iotdb-data-dir.bat <span class="token operator">&lt;</span>IoTDB数据文件夹路径，如果是多个文件夹用逗号分隔<span class="token operator">&gt;</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span>输出结果的存储路径<span class="token operator">&gt;</span><span class="token punctuation">)</span> \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Linux or MacOs:</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./print-iotdb-data-dir.sh <span class="token operator">&lt;</span>IoTDB数据文件夹路径，如果是多个文件夹用逗号分隔<span class="token operator">&gt;</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span>输出结果的存储路径<span class="token operator">&gt;</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意：如果没有设置输出结果的存储路径, 将使用相对路径&quot;IoTDB_data_dir_overview.txt&quot;作为默认值。</p><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h3><p>以Windows系统为例：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>.<span class="token punctuation">\\</span>print-iotdb-data-dir.bat D:<span class="token punctuation">\\</span>github<span class="token punctuation">\\</span>master<span class="token punctuation">\\</span>iotdb<span class="token punctuation">\\</span>data<span class="token punctuation">\\</span>datanode<span class="token punctuation">\\</span>data\n```````````````````````<span class="token variable"><span class="token variable">`</span>\nStarting Printing the IoTDB Data Directory Overview\n<span class="token variable">`</span></span>```````````````````````\noutput save path:IoTDB_data_dir_overview.txt\ndata <span class="token function">dir</span> num:1\n<span class="token number">143</span>  <span class="token punctuation">[</span>main<span class="token punctuation">]</span> WARN  o.a.i.t.c.conf.TSFileDescriptor - not found iotdb-common.properties, use the default configs.\n<span class="token operator">|</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>\n<span class="token operator">|</span>D:<span class="token punctuation">\\</span>github<span class="token punctuation">\\</span>master<span class="token punctuation">\\</span>iotdb<span class="token punctuation">\\</span>data<span class="token punctuation">\\</span>datanode<span class="token punctuation">\\</span>data\n<span class="token operator">|</span>--sequence\n<span class="token operator">|</span>  <span class="token operator">|</span>--root.redirect0\n<span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>--1\n<span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>--0\n<span class="token operator">|</span>  <span class="token operator">|</span>--root.redirect1\n<span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>--2\n<span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>--0\n<span class="token operator">|</span>  <span class="token operator">|</span>--root.redirect2\n<span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>--3\n<span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>--0\n<span class="token operator">|</span>  <span class="token operator">|</span>--root.redirect3\n<span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>--4\n<span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>--0\n<span class="token operator">|</span>  <span class="token operator">|</span>--root.redirect4\n<span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>--5\n<span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>--0\n<span class="token operator">|</span>  <span class="token operator">|</span>--root.redirect5\n<span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>--6\n<span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>--0\n<span class="token operator">|</span>  <span class="token operator">|</span>--root.sg1\n<span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>--0\n<span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>--0\n<span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>--2760\n<span class="token operator">|</span>--unsequence\n<span class="token operator">|</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',11);function r(l,c){return s(),n("div",null,[o(`

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

`),t])}const d=a(p,[["render",r],["__file","IoTDB-Data-Dir-Overview-Tool.html.vue"]]);export{d as default};
