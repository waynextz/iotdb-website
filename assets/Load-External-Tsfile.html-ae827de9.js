import{_ as i,r as s,o as l,c as r,a as n,d as e,e as t,b as d,f as o}from"./app-d415a090.js";const c={},h=o('<h1 id="load-external-tsfile-tool" tabindex="-1"><a class="header-anchor" href="#load-external-tsfile-tool" aria-hidden="true">#</a> Load External TsFile Tool</h1><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>The load external tsfile tool allows users to load tsfiles, delete a tsfile, or move a tsfile to target directory from the running Apache IoTDB instance.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>The user sends specified commands to the Apache IoTDB system through the Cli tool or JDBC to use the tool.</p><h3 id="load-tsfiles" tabindex="-1"><a class="header-anchor" href="#load-tsfiles" aria-hidden="true">#</a> load tsfiles</h3><p>The command to load tsfiles is <code>load &lt;path/dir&gt; [autoregister=true/false][,sglevel=int][,verify=true/false]</code>.</p><p>This command has two usages:</p><ol><li>Load a single tsfile by specifying a file path (absolute path).</li></ol><p>The second parameter indicates the path of the tsfile to be loaded and the name of the tsfile needs to conform to the tsfile naming convention, that is, <code>{systemTime}-{versionNum}-{in_space_compaction_num}-{cross_space_compaction_num}.tsfile</code>. This command has three options: autoregister, sglevel and verify.</p><p>AUTOREGISTER option. If the metadata correspond to the timeseries in the tsfile to be loaded does not exist, you can choose whether to create the schema automatically. If this parameter is true, the schema is created automatically. If it is false, the schema will not be created. By default, the schema will be created.</p><p>SGLEVEL option. If the storage group correspond to the tsfile does not exist, the user can set the level of storage group through the fourth parameter. By default, it uses the storage group level which is set in <code>iotdb-engine.properties</code>.</p><p>VERIFY option. If this parameter is true, All timeseries in this loading tsfile will be compared with the timeseries in IoTDB. If existing a measurement which has different datatype with the measurement in IoTDB, the loading process will be stopped and exit. If consistence can be promised, setting false for this parameter will be a better choice.</p><p>If the <code>.resource</code> file corresponding to the file exists, it will be loaded into the data directory and engine of the Apache IoTDB. Otherwise, the corresponding <code>.resource</code> file will be regenerated from the tsfile file.</p><p>Examples:</p><ul><li><code>load &#39;/Users/Desktop/data/1575028885956-101-0.tsfile&#39;</code></li><li><code>load &#39;/Users/Desktop/data/1575028885956-101-0.tsfile&#39; autoregister=false</code></li><li><code>load &#39;/Users/Desktop/data/1575028885956-101-0.tsfile&#39; autoregister=true</code></li><li><code>load &#39;/Users/Desktop/data/1575028885956-101-0.tsfile&#39; sglevel=1</code></li><li><code>load &#39;/Users/Desktop/data/1575028885956-101-0.tsfile&#39; verify=true</code></li><li><code>load &#39;/Users/Desktop/data/1575028885956-101-0.tsfile&#39; autoregister=true,sglevel=1</code></li><li><code>load &#39;/Users/Desktop/data/1575028885956-101-0.tsfile&#39; verify=false,sglevel=1</code></li><li><code>load &#39;/Users/Desktop/data/1575028885956-101-0.tsfile&#39; autoregister=false,verify=true</code></li><li><code>load &#39;/Users/Desktop/data/1575028885956-101-0.tsfile&#39; autoregister=false,sglevel=1,verify=true</code></li></ul><ol start="2"><li>Load a batch of files by specifying a folder path (absolute path).</li></ol><p>The second parameter indicates the path of the tsfile to be loaded and the name of the tsfiles need to conform to the tsfile naming convention, that is, <code>{systemTime}-{versionNum}-{in_space_compaction_num}-{cross_space_compaction_num}.tsfile</code>. The options above also works for this command.</p><p>Examples:</p><ul><li><code>load &#39;/Users/Desktop/data&#39;</code></li><li><code>load &#39;/Users/Desktop/data&#39; autoregister=false</code></li><li><code>load &#39;/Users/Desktop/data&#39; autoregister=true</code></li><li><code>load &#39;/Users/Desktop/data&#39; autoregister=true,sglevel=1</code></li><li><code>load &#39;/Users/Desktop/data&#39; autoregister=false,sglevel=1,verify=true</code></li></ul><h4 id="remote-load-tsfile" tabindex="-1"><a class="header-anchor" href="#remote-load-tsfile" aria-hidden="true">#</a> Remote Load TsFile</h4><p>Normally, the file path must be the local file path of the machine where the IoTDB instance is located. In IoTDB 0.13.5 and later, the file path supports for HTTP-style URIs that allow individual files to be loaded remotely via the HTTP protocol. The format is <code>load &#39;http://host:port/filePath&#39;</code>.</p><p>For example, if your IoTDB instance is running on machine A with IP address 168.121.0.1 and you want to load the file <code>/root/data/1-1-0-0.tsfile</code> from machine B with IP address 168.121.0.2 into your IoTDB instance, you need to follow these steps</p>',23),p=e("li",null,[t("Start the HTTP service on Machine B. For example, you can use the python command "),e("code",null,"python -m http.server"),t(" to start a simple HTTP service.")],-1),f={href:"http://Cli.sh",target:"_blank",rel:"noopener noreferrer"},m=e("li",null,[t("Enter the SQL command "),e("code",null,"load 'http://168.121.0.2:8000/root/data/1-1-0-0.tsfile'")],-1),u=e("li",null,"Wait for the load to complete",-1),g=o('<p><strong>Please note</strong>: In the case of remote loading, only a single file is supported, i.e. the path parameter must be a single TsFile file path. It is also not recommended to use remote loading if your TsFile has undergone a delete operation (i.e., the TsFile file has an attached .mods file), which will result in data that should have been deleted not being deleted after the load.</p><h3 id="remove-a-tsfile" tabindex="-1"><a class="header-anchor" href="#remove-a-tsfile" aria-hidden="true">#</a> remove a tsfile</h3><p>The command to delete a tsfile is: <code>remove &#39;&lt;path&gt;&#39;</code>.</p><p>This command deletes a tsfile by specifying the file path. The specific implementation is to delete the tsfile and its corresponding <code>.resource</code> and<code> .modification</code> files.</p><p>Examples:</p><ul><li><code>remove &#39;/Users/Desktop/data/data/root.vehicle/0/0/1575028885956-101-0.tsfile&#39;</code></li></ul><h3 id="unload-a-tsfile-and-move-it-to-a-target-directory" tabindex="-1"><a class="header-anchor" href="#unload-a-tsfile-and-move-it-to-a-target-directory" aria-hidden="true">#</a> unload a tsfile and move it to a target directory</h3><p>The command to unload a tsfile and move it to target directory is: <code>unload &#39;&lt;path&gt;&#39; &#39;&lt;dir&gt;&#39;</code>.</p><p>This command unload a tsfile and move it to a target directory by specifying tsfile path and the target directory(absolute path). The specific implementation is to remove the tsfile from the engine and move the tsfile file and its corresponding <code>.resource</code> file to the target directory.</p><p>Examples:</p><ul><li><code>unload &#39;/Users/Desktop/data/data/root.vehicle/0/0/1575028885956-101-0.tsfile&#39; &#39;/data/data/tmp&#39;</code></li></ul>',11);function y(T,v){const a=s("ExternalLinkIcon");return l(),r("div",null,[n(`

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

`),h,e("ol",null,[p,e("li",null,[t("Use the "),e("a",f,[t("Cli.sh"),d(a)]),t(" to connect to the IoTDB instance on Machine A.")]),m,u]),g])}const _=i(c,[["render",y],["__file","Load-External-Tsfile.html.vue"]]);export{_ as default};
