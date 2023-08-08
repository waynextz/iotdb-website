import{_ as t,o as e,c as i,a as s,f as d}from"./app-d2093efc.js";const n={},o=d('<h1 id="native-api-comparison" tabindex="-1"><a class="header-anchor" href="#native-api-comparison" aria-hidden="true">#</a> Native API Comparison</h1><p>This chapter mainly compares the differences between Java Native API and python native API, mainly for the convenience of distinguishing the differences between Java Native API and python native API.</p><table><thead><tr><th>Order</th><th>API name and function</th><th>Java API</th><th style="text-align:left;">Python API</th><th><div style="width:200pt;">API Comparison</div></th></tr></thead><tbody><tr><td>1</td><td>Initialize session</td><td><code>Session.Builder.build(); Session.Builder().host(String host).port(int port).build(); Session.Builder().nodeUrls(List&lt;String&gt; nodeUrls).build(); Session.Builder().fetchSize(int fetchSize).username(String username).password(String password).thriftDefaultBufferSize(int thriftDefaultBufferSize).thriftMaxFrameSize(int thriftMaxFrameSize).enableRedirection(boolean enableCacheLeader).version(Version version).build();</code></td><td style="text-align:left;"><code>Session(ip, port_, username_, password_,fetch_size=1024, zone_id=&quot;UTC+8&quot;)</code></td><td>1. The python native API lacks the default configuration to initialize the session<br>2. The python native API is missing the initialization session of specifying multiple connectable nodes<br>3. The python native API is missing. Use other configuration items to initialize the session</td></tr><tr><td>2</td><td>Open session</td><td><code>void open() void open(boolean enableRPCCompression)</code></td><td style="text-align:left;"><code>session.open(enable_rpc_compression=False)</code></td><td></td></tr><tr><td>3</td><td>Close session</td><td><code>void close()</code></td><td style="text-align:left;"><code>session.close()</code></td><td></td></tr><tr><td>4</td><td>Create Database</td><td><code>void setStorageGroup(String storageGroupId)</code></td><td style="text-align:left;"><code>session.set_storage_group(group_name)</code></td><td></td></tr><tr><td>5</td><td>Delete database</td><td><code>void deleteStorageGroup(String storageGroup) void deleteStorageGroups(List&lt;String&gt; storageGroups)</code></td><td style="text-align:left;"><code>session.delete_storage_group(group_name) session.delete_storage_groups(group_name_lst)</code></td><td></td></tr><tr><td>6</td><td>Create timeseries</td><td><code>void createTimeseries(String path, TSDataType dataType,TSEncoding encoding, CompressionType compressor, Map&lt;String, String&gt; props,Map&lt;String, String&gt; tags, Map&lt;String, String&gt; attributes, String measurementAlias) void createMultiTimeseries(List&lt;String&gt; paths, List&lt;TSDataType&gt; dataTypes,List&lt;TSEncoding&gt; encodings, List&lt;CompressionType&gt; compressors,List&lt;Map&lt;String, String&gt;&gt; propsList, List&lt;Map&lt;String, String&gt;&gt; tagsList,List&lt;Map&lt;String, String&gt;&gt; attributesList, List&lt;String&gt; measurementAliasList)</code></td><td style="text-align:left;"><code>session.create_time_series(ts_path, data_type, encoding, compressor,props=None, tags=None, attributes=None, alias=None) session.create_multi_time_series(ts_path_lst, data_type_lst, encoding_lst, compressor_lst,props_lst=None, tags_lst=None, attributes_lst=None, alias_lst=None)</code></td><td></td></tr><tr><td>7</td><td>Create aligned timeseries</td><td><code>void createAlignedTimeseries(String prefixPath, List&lt;String&gt; measurements,List&lt;TSDataType&gt; dataTypes, List&lt;TSEncoding&gt; encodings,CompressionType compressor, List&lt;String&gt; measurementAliasList);</code></td><td style="text-align:left;"><code>session.create_aligned_time_series(device_id, measurements_lst, data_type_lst, encoding_lst, compressor_lst)</code></td><td></td></tr><tr><td>8</td><td>Delete timeseries</td><td><code>void deleteTimeseries(String path) void deleteTimeseries(List&lt;String&gt; paths)</code></td><td style="text-align:left;"><code>session.delete_time_series(paths_list)</code></td><td>Python native API is missing an API to delete a time series</td></tr><tr><td>9</td><td>Detect whether the timeseries exists</td><td><code>boolean checkTimeseriesExists(String path)</code></td><td style="text-align:left;"><code>session.check_time_series_exists(path)</code></td><td></td></tr><tr><td>10</td><td>Metadata template</td><td><code>public void createSchemaTemplate(Template template);</code></td><td style="text-align:left;"></td><td></td></tr><tr><td>11</td><td>Insert tablet</td><td><code>void insertTablet(Tablet tablet) void insertTablets(Map&lt;String, Tablet&gt; tablets)</code></td><td style="text-align:left;"><code>session.insert_tablet(tablet_) session.insert_tablets(tablet_lst)</code></td><td></td></tr><tr><td>12</td><td>Insert record</td><td><code>void insertRecord(String prefixPath, long time, List&lt;String&gt; measurements,List&lt;TSDataType&gt; types, List&lt;Object&gt; values) void insertRecords(List&lt;String&gt; deviceIds,List&lt;Long&gt; times,List&lt;List&lt;String&gt;&gt; measurementsList,List&lt;List&lt;TSDataType&gt;&gt; typesList,List&lt;List&lt;Object&gt;&gt; valuesList) void insertRecordsOfOneDevice(String deviceId, List&lt;Long&gt; times,List&lt;List&lt;Object&gt;&gt; valuesList)</code></td><td style="text-align:left;"><code>session.insert_record(device_id, timestamp, measurements_, data_types_, values_) session.insert_records(device_ids_, time_list_, measurements_list_, data_type_list_, values_list_) session.insert_records_of_one_device(device_id, time_list, measurements_list, data_types_list, values_list)</code></td><td></td></tr><tr><td>13</td><td>Write with type inference</td><td><code>void insertRecord(String prefixPath, long time, List&lt;String&gt; measurements, List&lt;String&gt; values) void insertRecords(List&lt;String&gt; deviceIds, List&lt;Long&gt; times,List&lt;List&lt;String&gt;&gt; measurementsList, List&lt;List&lt;String&gt;&gt; valuesList) void insertStringRecordsOfOneDevice(String deviceId, List&lt;Long&gt; times,List&lt;List&lt;String&gt;&gt; measurementsList, List&lt;List&lt;String&gt;&gt; valuesList)</code></td><td style="text-align:left;"><code>session.insert_str_record(device_id, timestamp, measurements, string_values)</code></td><td>1. The python native API lacks an API for inserting multiple records<br>2. The python native API lacks the ability to insert multiple records belonging to the same device</td></tr><tr><td>14</td><td>Write of aligned time series</td><td><code>insertAlignedRecord insertAlignedRecords insertAlignedRecordsOfOneDevice insertAlignedStringRecordsOfOneDevice insertAlignedTablet insertAlignedTablets</code></td><td style="text-align:left;"><code>insert_aligned_record insert_aligned_records insert_aligned_records_of_one_device insert_aligned_tablet insert_aligned_tablets</code></td><td>Python native API is missing the writing of aligned time series with judgment type</td></tr><tr><td>15</td><td>Data deletion</td><td><code>void deleteData(String path, long endTime) void deleteData(List&lt;String&gt; paths, long endTime)</code></td><td style="text-align:left;"></td><td>1. The python native API lacks an API to delete a piece of data<br>2. The python native API lacks an API to delete multiple pieces of data</td></tr><tr><td>16</td><td>Data query</td><td><code>SessionDataSet executeRawDataQuery(List&lt;String&gt; paths, long startTime, long endTime) SessionDataSet executeLastDataQuery(List&lt;String&gt; paths, long LastTime)</code></td><td style="text-align:left;"></td><td>1. The python native API lacks an API for querying the original data<br>2. The python native API lacks an API to query the data whose last timestamp is greater than or equal to a certain time point</td></tr><tr><td>17</td><td>Iotdb SQL API - query statement</td><td><code>SessionDataSet executeQueryStatement(String sql)</code></td><td style="text-align:left;"><code>session.execute_query_statement(sql)</code></td><td></td></tr><tr><td>18</td><td>Iotdb SQL API - non query statement</td><td><code>void executeNonQueryStatement(String sql)</code></td><td style="text-align:left;"><code>session.execute_non_query_statement(sql)</code></td><td></td></tr><tr><td>19</td><td>Test API</td><td><code>void testInsertRecord(String deviceId, long time, List&lt;String&gt; measurements, List&lt;String&gt; values) void testInsertRecord(String deviceId, long time, List&lt;String&gt; measurements,List&lt;TSDataType&gt; types, List&lt;Object&gt; values) void testInsertRecords(List&lt;String&gt; deviceIds, List&lt;Long&gt; times,List&lt;List&lt;String&gt;&gt; measurementsList, List&lt;List&lt;String&gt;&gt; valuesList) void testInsertRecords(List&lt;String&gt; deviceIds, List&lt;Long&gt; times,List&lt;List&lt;String&gt;&gt; measurementsList, List&lt;List&lt;TSDataType&gt;&gt; typesList,List&lt;List&lt;Object&gt;&gt; valuesList) void testInsertTablet(Tablet tablet) void testInsertTablets(Map&lt;String, Tablet&gt; tablets)</code></td><td style="text-align:left;">Python client support for testing is based on the testcontainers library</td><td>Python API has no native test API</td></tr><tr><td>20</td><td>Connection pool for native interfaces</td><td><code>SessionPool</code></td><td style="text-align:left;"></td><td>Python API has no connection pool for native API</td></tr><tr><td>21</td><td>API related to cluster information</td><td><code>iotdb-thrift-cluster</code></td><td style="text-align:left;"></td><td>Python API does not support interfaces related to cluster information</td></tr></tbody></table>',3);function r(a,l){return e(),i("div",null,[s(`

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

`),o])}const c=t(n,[["render",r],["__file","Interface-Comparison.html.vue"]]);export{c as default};
