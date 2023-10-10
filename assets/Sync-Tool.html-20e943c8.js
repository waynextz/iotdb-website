import{_ as a,r as s,o,c as d,a as c,d as t,e,b as n,f as i}from"./app-2905306e.js";const l={},h=i('<h1 id="collaboration-of-edge-and-cloud" tabindex="-1"><a class="header-anchor" href="#collaboration-of-edge-and-cloud" aria-hidden="true">#</a> Collaboration of Edge and Cloud</h1><h2 id="tsfile-sync-tool" tabindex="-1"><a class="header-anchor" href="#tsfile-sync-tool" aria-hidden="true">#</a> TsFile Sync Tool</h2><h3 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h3><p>The Sync Tool is an IoTDB suite tool that periodically uploads persistent tsfiles from the sender disk to the receiver and loads them.</p><p>On the sender side of the sync, the sync module is a separate process, independent of the IoTDB process. It can be started and closed through a separate script (see Sections <code>Usage</code> for details). The frequency cycle of the sync can be set by the user.</p><p>On the receiver side of the sync, the sync module is embedded in the engine of IoTDB and is in the same process with IoTDB. The receiver module listens for a separate port, which can be set by the user (see Section <code>Configuration</code> for details). Before using it, it needs to set up a whitelist at the sync receiver, which is expressed as a network segment. The receiver only accepts the data transferred from the sender located in the whitelist segment, as detailed in Section <code>Configuration</code>.</p><p>The sync tool has a many-to-one sender-receiver mode - that is, one sync receiver can receive data from multiple sync senders simultaneously while one sync sender can only send data to one sync receiver.</p><blockquote><p>Note: Before using the sync tool, the client and server need to be configured separately. The configuration is detailed in Sections Configuration.</p></blockquote><h3 id="application-scenario" tabindex="-1"><a class="header-anchor" href="#application-scenario" aria-hidden="true">#</a> Application Scenario</h3><p>In the case of a factory application, there are usually multiple sub-factories and multiple general(main) factories. Each sub-factory uses an IoTDB instance to collect data, and then synchronize the data to the general factory for backup or analysis. A general factory can receive data from multiple sub-factories and a sub-factory can also synchronize data to multiple general factories. In this scenario, each IoTDB instance manages different devices.<br> ​<br> In the sync module, each sub-factory is a sender, a general factory is a receiver, and senders periodically synchronizes the data to receivers. In the scenario above, the data of one device can only be collected by one sender, so there is no device overlap between the data synchronized by multiple senders. Otherwise, the application scenario of the sync module is not satisfied.</p>',10),u={href:"http://root.sg",target:"_blank",rel:"noopener noreferrer"},p={href:"http://root.sg",target:"_blank",rel:"noopener noreferrer"},f=t("br",null,null,-1),y=i(`<h3 id="precautions-for-use" tabindex="-1"><a class="header-anchor" href="#precautions-for-use" aria-hidden="true">#</a> Precautions for Use</h3><p>Statement &quot;alter timeseries add tag&quot; will not effect the receiver when a sync-tool is running.</p><h3 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h3><h4 id="sync-receiver" tabindex="-1"><a class="header-anchor" href="#sync-receiver" aria-hidden="true">#</a> Sync Receiver</h4><p>The parameter configuration of the sync receiver is located in the configuration file <code>iotdb-engine.properties</code> of IoTDB, and its directory is <code>$IOTDB_HOME/conf/iotdb-engine.properties</code>. In this configuration file, there are four parameters related to the sync receiver. The configuration instructions are as follows:</p><table><thead><tr><th>parameter: is_sync_enable</th><th></th></tr></thead><tbody><tr><td>Description</td><td>Sync function switch, which is configured as true to indicate that the receiver is allowed to receive the data from the sender and load it. When set to false, it means that the receiver is not allowed to receive the data from any sender.</td></tr><tr><td>Type</td><td>Boolean</td></tr><tr><td>Default</td><td>false</td></tr><tr><td>Modalities for Entry into Force after Modification</td><td>Restart receiver</td></tr></tbody></table><table><thead><tr><th>parameter: IP_white_list</th><th></th></tr></thead><tbody><tr><td>Description</td><td>Set up a white list of sender IP addresses, which is expressed in the form of network segments and separated by commas between multiple network segments. When the sender transfers data to the receiver, only when the IP address of the sender is within the network segment set by the whitelist can the receiver allow the sync operation. If the whitelist is empty, the receiver does not allow any sender to sync data. The default receiver accepts all IP sync requests.</td></tr><tr><td>Type</td><td>String</td></tr><tr><td>Default</td><td>0.0.0.0/0</td></tr><tr><td>Modalities for Entry into Force after Modification</td><td>Restart receiver</td></tr></tbody></table><table><thead><tr><th>parameter: sync_server_port</th><th></th></tr></thead><tbody><tr><td>Description</td><td>Sync receiver port to listen. Make sure that the port is not a system reserved port and is not occupied. This paramter is valid only when the parameter is_sync_enable is set to TRUE.</td></tr><tr><td>Type</td><td>Short Int : [0,65535]</td></tr><tr><td>Default</td><td>5555</td></tr><tr><td>Modalities for Entry into Force after Modification</td><td>Restart receiver</td></tr></tbody></table><h4 id="sync-sender" tabindex="-1"><a class="header-anchor" href="#sync-sender" aria-hidden="true">#</a> Sync Sender</h4><p>The parameters of the sync sender are configured in a separate configuration file iotdb-sync-client.properties with the installation directory of <code>$IOTDB_HOME/conf/iotdb-sync-client.properties</code>. In this configuration file, there are five parameters related to the sync sender. The configuration instructions are as follows:</p><table><thead><tr><th>parameter: server_ip</th><th></th></tr></thead><tbody><tr><td>Description</td><td>IP address of sync receiver.</td></tr><tr><td>Type</td><td>String</td></tr><tr><td>Default</td><td>127.0.0.1</td></tr><tr><td>Modalities for Entry into Force after Modification</td><td>Restart client</td></tr></tbody></table><table><thead><tr><th>parameter: server_port</th><th></th></tr></thead><tbody><tr><td>Description</td><td>Listening port of sync receiver, it is necessary to ensure that the port is consistent with the configuration of the listening port set in receiver.</td></tr><tr><td>Type</td><td>Short Int : [0,65535]</td></tr><tr><td>Default</td><td>5555</td></tr><tr><td>Modalities for Entry into Force after Modification</td><td>Restart client</td></tr></tbody></table><table><thead><tr><th>parameter: sync_period_in_second</th><th></th></tr></thead><tbody><tr><td>Description</td><td>The period time of sync process, the time unit is second.</td></tr><tr><td>Type</td><td>Int : [0,2147483647]</td></tr><tr><td>Default</td><td>600</td></tr><tr><td>Modalities for Entry into Force after Modification</td><td>Restart client</td></tr></tbody></table><table><thead><tr><th>parameter: iotdb_schema_directory</th><th></th></tr></thead><tbody><tr><td>Description</td><td>The absolute path of the sender&#39;s IoTDB schema file, such as <code>$IOTDB_HOME/data/system/schema/mlog.txt</code> (if the user does not manually set the path of schema metadata, the path is the default path of IoTDB engine). This parameter is not valid by default and is set manually when the user needs it.</td></tr><tr><td>Type</td><td>String</td></tr><tr><td>Modalities for Entry into Force after Modification</td><td>Restart client</td></tr></tbody></table><table><thead><tr><th>parameter: sync_storage_groups</th><th></th></tr></thead><tbody><tr><td>Description</td><td>This parameter represents storage groups that participate in the synchronization task, which distinguishes each storage group by comma. If the list is empty, it means that all storage groups participate in synchronization. By default, it is an empty list.</td></tr><tr><td>Type</td><td>String</td></tr><tr><td>Example</td><td>root.sg1, root.sg2</td></tr><tr><td>Modalities for Entry into Force after Modification</td><td>Restart client</td></tr></tbody></table><table><thead><tr><th>parameter: max_number_of_sync_file_retry</th><th></th></tr></thead><tbody><tr><td>Description</td><td>The maximum number of retry when syncing a file to receiver fails.</td></tr><tr><td>Type</td><td>Int : [0,2147483647]</td></tr><tr><td>Example</td><td>5</td></tr><tr><td>Modalities for Entry into Force after Modification</td><td>Restart client</td></tr></tbody></table><h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h3><h4 id="start-sync-receiver" tabindex="-1"><a class="header-anchor" href="#start-sync-receiver" aria-hidden="true">#</a> Start Sync Receiver</h4><ol><li>Set up parameters of sync receiver. For example:</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>	####################
	### Sync Server Configuration
	####################
	# Whether to open the sync_server_port for receiving data from sync client, the default is closed
	is_sync_enable=false
	# Sync server port to listen
	sync_server_port=5555
	# White IP list of Sync client.
	# Please use the form of network segment to present the range of IP, for example: 192.168.0.0/16
	# If there are more than one IP segment, please separate them by commas
	# The default is to allow all IP to sync
	ip_white_list=0.0.0.0/0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>Start IoTDB engine, and the sync receiver will start at the same time, and the LOG log will start with the sentence <code>IoTDB: start SYNC ServerService successfully</code> indicating the successful start of the return receiver.</li></ol><h4 id="stop-sync-receiver" tabindex="-1"><a class="header-anchor" href="#stop-sync-receiver" aria-hidden="true">#</a> Stop Sync Receiver</h4><p>Stop IoTDB and the sync receiver will be closed at the same time.</p><h4 id="start-sync-sender" tabindex="-1"><a class="header-anchor" href="#start-sync-sender" aria-hidden="true">#</a> Start Sync Sender</h4><ol><li>Set up parameters of sync sender. For example:</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>	# Sync receiver server address
	server_ip=127.0.0.1
	# Sync receiver server port
	server_port=5555
	# The period time of sync process, the time unit is second.
	sync_period_in_second=600
	# This parameter represents storage groups that participate in the synchronization task, which distinguishes each storage group by comma.
	# If the list is empty, it means that all storage groups participate in synchronization.
	# By default, it is empty list.
	# sync_storage_groups = root.sg1, root.sg2
	# The maximum number of retry when syncing a file to receiver fails.
	max_number_of_sync_file_retry=5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>Start sync sender<br> Users can use the scripts under the <code>$IOTDB_HOME/tools</code> folder to start the sync sender.<br> For Linux and Mac OS X users:</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  Shell &gt;$IOTDB_HOME/tools/start-sync-client.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>For Windows users:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  Shell &gt;$IOTDB_HOME\\tools\\start-sync-client.bat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="stop-sync-sender" tabindex="-1"><a class="header-anchor" href="#stop-sync-sender" aria-hidden="true">#</a> Stop Sync Sender</h4><p>Users can use the scripts under the <code>$IOTDB_HOME/tools</code> folder to stop the sync sender.<br> For Linux and Mac OS X users:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  Shell &gt;$IOTDB_HOME/tools/stop-sync-client.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>For Windows users:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  Shell &gt;$IOTDB_HOME\\tools\\stop-sync-client.bat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,35);function m(v,b){const r=s("ExternalLinkIcon");return o(),d("div",null,[c(`

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

`),h,t("p",null,[e("When there is an abnormal scenario, namely, two or more senders synchronize the data of the same device (whose storage group is set as "),t("a",u,[e("root.sg"),n(r)]),e(") to the same receiver, the "),t("a",p,[e("root.sg"),n(r)]),e(" data of the sender containing the device data received later by the receiver will be rejected. Example: the engine 1 synchronizes the storage groups root.sg1 and root.sg2 to the receiver, and the engine 2 synchronizes the storage groups root.sg2 and root.sg3 to the receiver. All of them include the time series root.sg2.d0.s0."),f,e(" If the receiver receives the data of root.sg2.d0.s0 of the sender 1 first, the receiver will reject the data of root.sg2 of the sender 2.")]),y])}const _=a(l,[["render",m],["__file","Sync-Tool.html.vue"]]);export{_ as default};
