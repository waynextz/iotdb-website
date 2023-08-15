import{_ as n,o as s,c as a,a as e,f as t}from"./app-d7e75f9d.js";const o={},i=t('<h1 id="tsfile-resource概览工具" tabindex="-1"><a class="header-anchor" href="#tsfile-resource概览工具" aria-hidden="true">#</a> TsFile Resource概览工具</h1><p>TsFile resource概览工具用于打印出TsFile resource文件的内容，工具位置为 tools/tsfile/print-tsfile-resource-files。</p><h2 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h2><ul><li>Windows:</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>.<span class="token punctuation">\\</span>print-tsfile-resource-files.bat <span class="token operator">&lt;</span>TsFile resource文件所在的文件夹路径，或者单个TsFile resource文件路径<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Linux or MacOs:</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./print-tsfile-resource-files.sh &lt;TsFile resource文件所在的文件夹路径，或者单个TsFile resource文件路径&gt; \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><p>以Windows系统为例：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>.<span class="token punctuation">\\</span>print-tsfile-resource-files.bat D:<span class="token punctuation">\\</span>github<span class="token punctuation">\\</span>master<span class="token punctuation">\\</span>iotdb<span class="token punctuation">\\</span>data<span class="token punctuation">\\</span>datanode<span class="token punctuation">\\</span>data<span class="token punctuation">\\</span>sequence<span class="token punctuation">\\</span>root.sg1<span class="token punctuation">\\</span><span class="token number">0</span><span class="token punctuation">\\</span><span class="token number">0</span>\n```````````````````````<span class="token variable"><span class="token variable">`</span>\nStarting Printing the TsFileResources\n<span class="token variable">`</span></span>```````````````````````\n<span class="token number">147</span>  <span class="token punctuation">[</span>main<span class="token punctuation">]</span> WARN  o.a.i.t.c.conf.TSFileDescriptor - not found iotdb-common.properties, use the default configs.\n<span class="token number">230</span>  <span class="token punctuation">[</span>main<span class="token punctuation">]</span> WARN  o.a.iotdb.db.conf.IoTDBDescriptor - Cannot <span class="token function">find</span> IOTDB_HOME or IOTDB_CONF environment variable when loading config <span class="token function">file</span> iotdb-common.properties, use default configuration\n<span class="token number">231</span>  <span class="token punctuation">[</span>main<span class="token punctuation">]</span> WARN  o.a.iotdb.db.conf.IoTDBDescriptor - Couldn<span class="token string">&#39;t load the configuration iotdb-common.properties from any of the known sources.\n233  [main] WARN  o.a.iotdb.db.conf.IoTDBDescriptor - Cannot find IOTDB_HOME or IOTDB_CONF environment variable when loading config file iotdb-datanode.properties, use default configuration\n237  [main] WARN  o.a.iotdb.db.conf.IoTDBDescriptor - Couldn&#39;</span>t load the configuration iotdb-datanode.properties from any of the known sources.\nAnalyzing D:<span class="token punctuation">\\</span>github<span class="token punctuation">\\</span>master<span class="token punctuation">\\</span>iotdb<span class="token punctuation">\\</span>data<span class="token punctuation">\\</span>datanode<span class="token punctuation">\\</span>data<span class="token punctuation">\\</span>sequence<span class="token punctuation">\\</span>root.sg1<span class="token punctuation">\\</span><span class="token number">0</span><span class="token punctuation">\\</span><span class="token number">0</span><span class="token punctuation">\\</span><span class="token number">1669359533489</span>-1-0-0.tsfile <span class="token punctuation">..</span>.\n\nResource plan index range <span class="token punctuation">[</span><span class="token number">9223372036854775807</span>, -9223372036854775808<span class="token punctuation">]</span>\ndevice root.sg1.d1, start <span class="token function">time</span> <span class="token number">0</span> <span class="token punctuation">(</span><span class="token number">1970</span>-01-01T08:00+08:00<span class="token punctuation">[</span>GMT+08:00<span class="token punctuation">]</span><span class="token punctuation">)</span>, end <span class="token function">time</span> <span class="token number">99</span> <span class="token punctuation">(</span><span class="token number">1970</span>-01-01T08:00:00.099+08:00<span class="token punctuation">[</span>GMT+08:00<span class="token punctuation">]</span><span class="token punctuation">)</span>\n\nAnalyzing the resource <span class="token function">file</span> folder D:<span class="token punctuation">\\</span>github<span class="token punctuation">\\</span>master<span class="token punctuation">\\</span>iotdb<span class="token punctuation">\\</span>data<span class="token punctuation">\\</span>datanode<span class="token punctuation">\\</span>data<span class="token punctuation">\\</span>sequence<span class="token punctuation">\\</span>root.sg1<span class="token punctuation">\\</span><span class="token number">0</span><span class="token punctuation">\\</span><span class="token number">0</span> finished.\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>.<span class="token punctuation">\\</span>print-tsfile-resource-files.bat D:<span class="token punctuation">\\</span>github<span class="token punctuation">\\</span>master<span class="token punctuation">\\</span>iotdb<span class="token punctuation">\\</span>data<span class="token punctuation">\\</span>datanode<span class="token punctuation">\\</span>data<span class="token punctuation">\\</span>sequence<span class="token punctuation">\\</span>root.sg1<span class="token punctuation">\\</span><span class="token number">0</span><span class="token punctuation">\\</span><span class="token number">0</span><span class="token punctuation">\\</span><span class="token number">1669359533489</span>-1-0-0.tsfile.resource\n```````````````````````<span class="token variable"><span class="token variable">`</span>\nStarting Printing the TsFileResources\n<span class="token variable">`</span></span>```````````````````````\n<span class="token number">178</span>  <span class="token punctuation">[</span>main<span class="token punctuation">]</span> WARN  o.a.iotdb.db.conf.IoTDBDescriptor - Cannot <span class="token function">find</span> IOTDB_HOME or IOTDB_CONF environment variable when loading config <span class="token function">file</span> iotdb-common.properties, use default configuration\n<span class="token number">186</span>  <span class="token punctuation">[</span>main<span class="token punctuation">]</span> WARN  o.a.i.t.c.conf.TSFileDescriptor - not found iotdb-common.properties, use the default configs.\n<span class="token number">187</span>  <span class="token punctuation">[</span>main<span class="token punctuation">]</span> WARN  o.a.iotdb.db.conf.IoTDBDescriptor - Couldn<span class="token string">&#39;t load the configuration iotdb-common.properties from any of the known sources.\n188  [main] WARN  o.a.iotdb.db.conf.IoTDBDescriptor - Cannot find IOTDB_HOME or IOTDB_CONF environment variable when loading config file iotdb-datanode.properties, use default configuration\n192  [main] WARN  o.a.iotdb.db.conf.IoTDBDescriptor - Couldn&#39;</span>t load the configuration iotdb-datanode.properties from any of the known sources.\nAnalyzing D:<span class="token punctuation">\\</span>github<span class="token punctuation">\\</span>master<span class="token punctuation">\\</span>iotdb<span class="token punctuation">\\</span>data<span class="token punctuation">\\</span>datanode<span class="token punctuation">\\</span>data<span class="token punctuation">\\</span>sequence<span class="token punctuation">\\</span>root.sg1<span class="token punctuation">\\</span><span class="token number">0</span><span class="token punctuation">\\</span><span class="token number">0</span><span class="token punctuation">\\</span><span class="token number">1669359533489</span>-1-0-0.tsfile <span class="token punctuation">..</span>.\n\nResource plan index range <span class="token punctuation">[</span><span class="token number">9223372036854775807</span>, -9223372036854775808<span class="token punctuation">]</span>\ndevice root.sg1.d1, start <span class="token function">time</span> <span class="token number">0</span> <span class="token punctuation">(</span><span class="token number">1970</span>-01-01T08:00+08:00<span class="token punctuation">[</span>GMT+08:00<span class="token punctuation">]</span><span class="token punctuation">)</span>, end <span class="token function">time</span> <span class="token number">99</span> <span class="token punctuation">(</span><span class="token number">1970</span>-01-01T08:00:00.099+08:00<span class="token punctuation">[</span>GMT+08:00<span class="token punctuation">]</span><span class="token punctuation">)</span>\n\nAnalyzing the resource <span class="token function">file</span> D:<span class="token punctuation">\\</span>github<span class="token punctuation">\\</span>master<span class="token punctuation">\\</span>iotdb<span class="token punctuation">\\</span>data<span class="token punctuation">\\</span>datanode<span class="token punctuation">\\</span>data<span class="token punctuation">\\</span>sequence<span class="token punctuation">\\</span>root.sg1<span class="token punctuation">\\</span><span class="token number">0</span><span class="token punctuation">\\</span><span class="token number">0</span><span class="token punctuation">\\</span><span class="token number">1669359533489</span>-1-0-0.tsfile.resource finished.\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',11);function p(c,u){return s(),a("div",null,[e(`

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

`),i])}const r=n(o,[["render",p],["__file","TsFile-Resource-Sketch-Tool.html.vue"]]);export{r as default};
