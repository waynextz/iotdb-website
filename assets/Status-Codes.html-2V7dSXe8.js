import{_ as t,o as e,c as l,a as d,f as i}from"./app-F10OrnbD.js";const n={},s=i(`<h2 id="状态码" tabindex="-1"><a class="header-anchor" href="#状态码" aria-hidden="true">#</a> 状态码</h2><p>从 0.10 版本开始 IoTDB 引入了<strong>状态码</strong>这一概念。例如，因为 IoTDB 需要在写入数据之前首先注册时间序列，一种可能的解决方案是：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>try {
    writeData();
} catch (SQLException e) {
  // the most case is that the time series does not exist
  if (e.getMessage().contains(&quot;exist&quot;)) {
      //However, using the content of the error message is not so efficient
      registerTimeSeries();
      //write data once again
      writeData();
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>利用状态码，我们就可以不必写诸如<code>if (e.getErrorMessage().contains(&quot;exist&quot;))</code>的代码，只需要使用<code>e.getStatusType().getCode() == TSStatusCode.TIME_SERIES_NOT_EXIST_ERROR.getStatusCode()</code>。</p><p>这里是状态码和相对应信息的列表：</p><table><thead><tr><th style="text-align:left;">状态码</th><th style="text-align:left;">状态类型</th><th style="text-align:left;">状态信息</th></tr></thead><tbody><tr><td style="text-align:left;">200</td><td style="text-align:left;">SUCCESS_STATUS</td><td style="text-align:left;">成功状态</td></tr><tr><td style="text-align:left;">201</td><td style="text-align:left;">STILL_EXECUTING_STATUS</td><td style="text-align:left;">仍在执行状态</td></tr><tr><td style="text-align:left;">202</td><td style="text-align:left;">INVALID_HANDLE_STATUS</td><td style="text-align:left;">无效句柄状态</td></tr><tr><td style="text-align:left;">203</td><td style="text-align:left;">INCOMPATIBLE_VERSION</td><td style="text-align:left;">版本不兼容</td></tr><tr><td style="text-align:left;">298</td><td style="text-align:left;">NODE_DELETE_FAILED_ERROR</td><td style="text-align:left;">删除节点失败</td></tr><tr><td style="text-align:left;">299</td><td style="text-align:left;">ALIAS_ALREADY_EXIST_ERROR</td><td style="text-align:left;">路径别名已经存在</td></tr><tr><td style="text-align:left;">300</td><td style="text-align:left;">PATH_ALREADY_EXIST_ERROR</td><td style="text-align:left;">路径已经存在</td></tr><tr><td style="text-align:left;">301</td><td style="text-align:left;">PATH_NOT_EXIST_ERROR</td><td style="text-align:left;">路径不存在</td></tr><tr><td style="text-align:left;">302</td><td style="text-align:left;">UNSUPPORTED_FETCH_METADATA_OPERATION_ERROR</td><td style="text-align:left;">不支持的获取元数据操作</td></tr><tr><td style="text-align:left;">303</td><td style="text-align:left;">METADATA_ERROR</td><td style="text-align:left;">处理元数据错误</td></tr><tr><td style="text-align:left;">305</td><td style="text-align:left;">OUT_OF_TTL_ERROR</td><td style="text-align:left;">插入时间少于 TTL 时间边界</td></tr><tr><td style="text-align:left;">306</td><td style="text-align:left;">CONFIG_ADJUSTER</td><td style="text-align:left;">IoTDB 系统负载过大</td></tr><tr><td style="text-align:left;">307</td><td style="text-align:left;">MERGE_ERROR</td><td style="text-align:left;">合并错误</td></tr><tr><td style="text-align:left;">308</td><td style="text-align:left;">SYSTEM_CHECK_ERROR</td><td style="text-align:left;">系统检查错误</td></tr><tr><td style="text-align:left;">309</td><td style="text-align:left;">SYNC_DEVICE_OWNER_CONFLICT_ERROR</td><td style="text-align:left;">回传设备冲突错误</td></tr><tr><td style="text-align:left;">310</td><td style="text-align:left;">SYNC_CONNECTION_EXCEPTION</td><td style="text-align:left;">回传连接错误</td></tr><tr><td style="text-align:left;">311</td><td style="text-align:left;">STORAGE_GROUP_PROCESSOR_ERROR</td><td style="text-align:left;">存储组处理器相关错误</td></tr><tr><td style="text-align:left;">312</td><td style="text-align:left;">STORAGE_GROUP_ERROR</td><td style="text-align:left;">存储组相关错误</td></tr><tr><td style="text-align:left;">313</td><td style="text-align:left;">STORAGE_ENGINE_ERROR</td><td style="text-align:left;">存储引擎相关错误</td></tr><tr><td style="text-align:left;">314</td><td style="text-align:left;">TSFILE_PROCESSOR_ERROR</td><td style="text-align:left;">TsFile 处理器相关错误</td></tr><tr><td style="text-align:left;">315</td><td style="text-align:left;">PATH_ILLEGAL</td><td style="text-align:left;">路径不合法</td></tr><tr><td style="text-align:left;">316</td><td style="text-align:left;">LOAD_FILE_ERROR</td><td style="text-align:left;">加载文件错误</td></tr><tr><td style="text-align:left;">317</td><td style="text-align:left;">STORAGE_GROUP_NOT_READY</td><td style="text-align:left;">存储组还在恢复中，还不能接受读写操作</td></tr><tr><td style="text-align:left;">400</td><td style="text-align:left;">EXECUTE_STATEMENT_ERROR</td><td style="text-align:left;">执行语句错误</td></tr><tr><td style="text-align:left;">401</td><td style="text-align:left;">SQL_PARSE_ERROR</td><td style="text-align:left;">SQL 语句分析错误</td></tr><tr><td style="text-align:left;">402</td><td style="text-align:left;">GENERATE_TIME_ZONE_ERROR</td><td style="text-align:left;">生成时区错误</td></tr><tr><td style="text-align:left;">403</td><td style="text-align:left;">SET_TIME_ZONE_ERROR</td><td style="text-align:left;">设置时区错误</td></tr><tr><td style="text-align:left;">404</td><td style="text-align:left;">NOT_STORAGE_GROUP_ERROR</td><td style="text-align:left;">操作对象不是存储组</td></tr><tr><td style="text-align:left;">405</td><td style="text-align:left;">QUERY_NOT_ALLOWED</td><td style="text-align:left;">查询语句不允许</td></tr><tr><td style="text-align:left;">406</td><td style="text-align:left;">AST_FORMAT_ERROR</td><td style="text-align:left;">AST 格式相关错误</td></tr><tr><td style="text-align:left;">407</td><td style="text-align:left;">LOGICAL_OPERATOR_ERROR</td><td style="text-align:left;">逻辑符相关错误</td></tr><tr><td style="text-align:left;">408</td><td style="text-align:left;">LOGICAL_OPTIMIZE_ERROR</td><td style="text-align:left;">逻辑优化相关错误</td></tr><tr><td style="text-align:left;">409</td><td style="text-align:left;">UNSUPPORTED_FILL_TYPE_ERROR</td><td style="text-align:left;">不支持的填充类型</td></tr><tr><td style="text-align:left;">410</td><td style="text-align:left;">PATH_ERROR</td><td style="text-align:left;">路径相关错误</td></tr><tr><td style="text-align:left;">411</td><td style="text-align:left;">QUERY_PROCESS_ERROR</td><td style="text-align:left;">查询处理相关错误</td></tr><tr><td style="text-align:left;">412</td><td style="text-align:left;">WRITE_PROCESS_ERROR</td><td style="text-align:left;">写入相关错误</td></tr><tr><td style="text-align:left;">413</td><td style="text-align:left;">WRITE_PROCESS_REJECT</td><td style="text-align:left;">写入拒绝错误</td></tr><tr><td style="text-align:left;">414</td><td style="text-align:left;">QUERY_ID_NOT_EXIST</td><td style="text-align:left;">Query id 不存在</td></tr><tr><td style="text-align:left;">500</td><td style="text-align:left;">INTERNAL_SERVER_ERROR</td><td style="text-align:left;">服务器内部错误</td></tr><tr><td style="text-align:left;">501</td><td style="text-align:left;">CLOSE_OPERATION_ERROR</td><td style="text-align:left;">关闭操作错误</td></tr><tr><td style="text-align:left;">502</td><td style="text-align:left;">READ_ONLY_SYSTEM_ERROR</td><td style="text-align:left;">系统只读</td></tr><tr><td style="text-align:left;">503</td><td style="text-align:left;">DISK_SPACE_INSUFFICIENT_ERROR</td><td style="text-align:left;">磁盘空间不足</td></tr><tr><td style="text-align:left;">504</td><td style="text-align:left;">START_UP_ERROR</td><td style="text-align:left;">启动错误</td></tr><tr><td style="text-align:left;">505</td><td style="text-align:left;">SHUT_DOWN_ERROR</td><td style="text-align:left;">关机错误</td></tr><tr><td style="text-align:left;">506</td><td style="text-align:left;">MULTIPLE_ERROR</td><td style="text-align:left;">多行语句执行错误</td></tr><tr><td style="text-align:left;">600</td><td style="text-align:left;">WRONG_LOGIN_PASSWORD_ERROR</td><td style="text-align:left;">用户名或密码错误</td></tr><tr><td style="text-align:left;">601</td><td style="text-align:left;">NOT_LOGIN_ERROR</td><td style="text-align:left;">没有登录</td></tr><tr><td style="text-align:left;">602</td><td style="text-align:left;">NO_PERMISSION_ERROR</td><td style="text-align:left;">没有操作权限</td></tr><tr><td style="text-align:left;">603</td><td style="text-align:left;">UNINITIALIZED_AUTH_ERROR</td><td style="text-align:left;">授权人未初始化</td></tr><tr><td style="text-align:left;">700</td><td style="text-align:left;">PARTITION_NOT_READY</td><td style="text-align:left;">分区表未准备好</td></tr><tr><td style="text-align:left;">701</td><td style="text-align:left;">TIME_OUT</td><td style="text-align:left;">操作超时</td></tr><tr><td style="text-align:left;">702</td><td style="text-align:left;">NO_LEADER</td><td style="text-align:left;">Leader 找不到</td></tr><tr><td style="text-align:left;">703</td><td style="text-align:left;">UNSUPPORTED_OPERATION</td><td style="text-align:left;">不支持的操作</td></tr><tr><td style="text-align:left;">704</td><td style="text-align:left;">NODE_READ_ONLY</td><td style="text-align:left;">节点只读</td></tr><tr><td style="text-align:left;">705</td><td style="text-align:left;">CONSISTENCY_FAILURE</td><td style="text-align:left;">一致性检查失败</td></tr><tr><td style="text-align:left;">706</td><td style="text-align:left;">NO_CONNECTION</td><td style="text-align:left;">连接获取失败</td></tr><tr><td style="text-align:left;">707</td><td style="text-align:left;">NEED_REDIRECTION</td><td style="text-align:left;">需要重定向</td></tr><tr><td style="text-align:left;">800</td><td style="text-align:left;">CONFIG_ERROR</td><td style="text-align:left;">配置文件有错误项</td></tr></tbody></table><blockquote><p>在最新版本中，我们重构了 IoTDB 的异常类。通过将错误信息统一提取到异常类中，并为所有异常添加不同的错误代码，从而当捕获到异常并引发更高级别的异常时，错误代码将保留并传递，以便用户了解详细的错误原因。<br> 除此之外，我们添加了一个基础异常类“ProcessException”，由所有异常扩展。</p></blockquote>`,7);function a(r,g){return e(),l("div",null,[d(`

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

`),s])}const x=t(n,[["render",a],["__file","Status-Codes.html.vue"]]);export{x as default};
