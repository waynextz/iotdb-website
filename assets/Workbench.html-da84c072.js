import{_ as o,r,o as s,c,a as d,d as e,e as t,b as i,f as n}from"./app-d415a090.js";const g={},h=e("h1",{id:"workbench",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#workbench","aria-hidden":"true"},"#"),t(" Workbench")],-1),l=e("p",null,"Workbench is a graphical database management tool that can create multiple connections. It is used to manage IoTDB, and provides functions such as metadata visualization and management, data addition, deletion, modification, and permission control. Workbench not only meets all the needs of professional developers, but the simple and friendly interface design is also easy for beginners to use.",-1),u=e("h2",{id:"installation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installation","aria-hidden":"true"},"#"),t(" Installation")],-1),p=e("p",null,"If you encounter any problems during the installation process, you can refer to the documentation or seek help from the software vendor or technical support team.",-1),m=e("p",null,"Environmental requirements: JDK1.8.0_162 and above.",-1),f={href:"https://www.timecho.com/product",target:"_blank",rel:"noopener noreferrer"},b=e("li",null,"Start the backend service. Enter the command:",-1),y=n(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>java -jar workbench.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>or</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nohup java -jar workbench.jar  &gt;/dev/null 2&gt;&amp;1 &amp;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The default port is 9090.</p><ol start="3"><li>Access the web interface. The default address is <code>IP:9090</code>.</li></ol><h2 id="log-in" tabindex="-1"><a class="header-anchor" href="#log-in" aria-hidden="true">#</a> Log In</h2><p>The default user name is root and the password is 123456. The user name must be composed of letters, numbers, and underscores, and cannot start with numbers and underscores. It must be greater than or equal to 4 characters, and the password must be greater than or equal to 6 characters. Click &quot;<strong>文A</strong>&quot; to switch languages, Chinese and English are available.</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Workbench/image6.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="user-interface" tabindex="-1"><a class="header-anchor" href="#user-interface" aria-hidden="true">#</a> User Interface</h2><p><strong>Main interface</strong></p><p>The main interface consists of an action bar, a navigation bar, a toolbar, and several panes.</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Workbench/image7.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_1-connection-operation-bar" tabindex="-1"><a class="header-anchor" href="#_1-connection-operation-bar" aria-hidden="true">#</a> 1. Connection Operation Bar</h3><p>You can create a new database connection or database query.</p><h3 id="_2-object-pane" tabindex="-1"><a class="header-anchor" href="#_2-object-pane" aria-hidden="true">#</a> 2. Object Pane</h3><p>The object pane displays the connected database instances. It adopts a tree structure design. Clicking to display sub-nodes can facilitate the processing of databases and their managed objects. The lowest level displayed is the device.</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Workbench/image8.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_3-navigation-bar" tabindex="-1"><a class="header-anchor" href="#_3-navigation-bar" aria-hidden="true">#</a> 3. Navigation Bar</h3><p>In the navigation bar, you can choose &quot;<strong>Database Management</strong>&quot;, &quot;<strong>Monitoring Management</strong>&quot;, &quot;<strong>Operation Log</strong>&quot;, &quot;<strong>Data Dashboard</strong>&quot;.</p><h3 id="_4-status-bar" tabindex="-1"><a class="header-anchor" href="#_4-status-bar" aria-hidden="true">#</a> 4. Status Bar</h3><p>The status bar displays the status information under the current option. When &quot;<strong>Database Management</strong>&quot; is selected, the status bar displays the online status of the database, IP, port, server status, and information about the number of storage groups, devices, and physical quantities.</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Workbench/image9.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>When &quot;<strong>Monitoring Management</strong>&quot; is selected, the status column displays the online status, IP, port, server status, database version, activation information and expiration time of the database. Note: The icon at &quot;<strong>Database Version</strong>&quot; indicates the Enterprise Edition or the Open Source Edition, and some functions of Workbench cannot be used on the Open Source Edition.</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Workbench/image10.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_5-operation-column" tabindex="-1"><a class="header-anchor" href="#_5-operation-column" aria-hidden="true">#</a> 5. Operation Column</h3><p>In the operation column, any option can be selected for operation.</p><h3 id="_6-information-pane" tabindex="-1"><a class="header-anchor" href="#_6-information-pane" aria-hidden="true">#</a> 6. Information Pane</h3><p>The information pane displays detailed information about the object.</p><h2 id="connection" tabindex="-1"><a class="header-anchor" href="#connection" aria-hidden="true">#</a> Connection</h2><p>First create one or more connections using the connections window. Click &quot;<strong>Data Connection</strong>&quot; to create a new connection.</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Workbench/image11.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Enter the required information in the pop-up connection window, where the data connection name must be greater than or equal to 3 characters. Then click &quot;<strong>Connection Test</strong>&quot;, if &quot;<strong>Connection Test Passed</strong>&quot; is displayed, it means the connection is correct, click OK to create a new connection.</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Workbench/image12.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>If you want to modify the connection, you can click the &quot;<strong>Edit</strong>&quot; option on the right side of the status bar to modify the database connection information.</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Workbench/image13.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="server-security" tabindex="-1"><a class="header-anchor" href="#server-security" aria-hidden="true">#</a> Server Security</h2><h3 id="whitelist" tabindex="-1"><a class="header-anchor" href="#whitelist" aria-hidden="true">#</a> Whitelist</h3><p>The enterprise version of IoTDB can set the IPs that are allowed to access IoTDB by adding a whitelist. This function cannot be used when using the open source version of IoTDB to connect to Workbench.</p><p>Select &quot;<strong>Database Management</strong>&quot;-&gt;&quot;<strong>White List</strong>&quot; from the navigation bar to view the list of added whitelist IPs.</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Workbench/image14.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Click &quot;<strong>Whitelist</strong>&quot; to add whitelist IP, and click &quot;<strong>Edit</strong>&quot;/&quot;<strong>Delete</strong>&quot; to modify the IP information of whitelist.</p><h3 id="authority-management" tabindex="-1"><a class="header-anchor" href="#authority-management" aria-hidden="true">#</a> Authority Management</h3><p>Workbench provides powerful tools to manage permissions on server user accounts and database objects. Click &quot;<strong>Database User Management</strong>&quot; or &quot;<strong>Database Role Management</strong>&quot; in the operation column to open the user or role object list.</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Workbench/image15.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>New users</strong>. Select &quot;<strong>Database User Management</strong>&quot;-&gt;&quot;<strong>User Account＋</strong>&quot; to add a new user, fill in the user name and password as required, and add role information for the user.</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Workbench/image16.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Permissions can be divided into data management permissions (such as adding, deleting, modifying and querying data) and permission management permissions (creating and deleting users and roles, granting and revoking permissions, etc.). Select &quot;<strong>Database User Management</strong>&quot;-&gt;&quot;<strong>Data Management Permission</strong>&quot;-&gt;&quot;<strong>Add Permission</strong>&quot; to add data management permission to the user. You can select &quot;<strong>Edit</strong>&quot; or &quot;<strong>Delete</strong>&quot; at the added permission to modify the permission information.</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Workbench/image17.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>In the pop-up interface, you can choose the granularity of permission function and specific permission content. Note that only when the [Query Data] permission and [View User] permission are checked, other permissions can be viewed in Workbench.</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Workbench/image18.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Select &quot;<strong>Database User Management</strong>&quot;-&gt;&quot;<strong>Authority Management Authority</strong>&quot; to check the specific authority information in the information pane, and click &quot;Save&quot; to add authority management authority to the user.</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Workbench/image19.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>Permission Preview</strong>. Select &quot;<strong>Database User Management</strong>&quot;-&gt;&quot;<strong>Data Permission Preview</strong>&quot; to preview all data permissions under the user name. Note: This feature is only supported in Enterprise Edition.</p><h2 id="data-migration" tabindex="-1"><a class="header-anchor" href="#data-migration" aria-hidden="true">#</a> Data Migration</h2><p>The import and export tool can import or export files in CSV format to IoTDB in batches.</p><h3 id="batch-import" tabindex="-1"><a class="header-anchor" href="#batch-import" aria-hidden="true">#</a> Batch Import</h3><p>The batch import feature is only supported in the Enterprise Edition. Select the database to be operated in the object pane, select the device node, and the information &quot;<strong>Device Structure&quot;</strong> will appear in the information pane on the right. Click &quot;<strong>Import Physical Quantity</strong>&quot; to download the template and fill in the physical quantity information. Then upload the CSV file to import physical quantities in batches. Note: The current version does not support the import of alignment physical quantities.</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Workbench/image20.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Select &quot;<strong>Data Preview</strong>&quot;-&gt;&quot;<strong>Batch Import</strong>&quot; to import CSV file data that meets the requirements of the template. Currently, it supports importing aligned time series.</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Workbench/image21.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="batch-export" tabindex="-1"><a class="header-anchor" href="#batch-export" aria-hidden="true">#</a> Batch Export</h3><p>The batch export function is only supported in the Enterprise Edition. Select the database to be operated in the object pane, enter the device node, and select &quot;<strong>Device Structure</strong>&quot;-&gt;&quot;<strong>Export Physical Quantity</strong>&quot; to batch export the physical quantity metadata under the entity. In the search box, you can enter name/alias, tag name, and tag value to filter.</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Workbench/image22.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Select &quot;<strong>Data Preview</strong>&quot;-&gt;&quot;<strong>Export Data</strong>&quot; to export the data under this entity in batches. The search box can be filtered by time range, time interval and physical quantity.</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Workbench/image23.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="data-preview" tabindex="-1"><a class="header-anchor" href="#data-preview" aria-hidden="true">#</a> Data Preview</h2><p>Workbench provides multi-level data preview tools.</p><h3 id="data-model" tabindex="-1"><a class="header-anchor" href="#data-model" aria-hidden="true">#</a> Data Model</h3><p>Select the data connection to be previewed in the object pane, click &quot;<strong>Data Model</strong>&quot; in the operation column to preview the data model, the root is defined as LEVEL=0, the default display in Workbench is LEVEL=1, click &quot;<strong>View More</strong>&quot; to view more levels of data model information. The &quot;<strong>View More</strong>&quot; feature is only supported in the Enterprise Edition.</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Workbench/image24.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="storage-group-information" tabindex="-1"><a class="header-anchor" href="#storage-group-information" aria-hidden="true">#</a> Storage Group Information</h3><p>Click &quot;<strong>Storage Group Information</strong>&quot; in the operation column to preview all the storage group information of the data connection, click &quot;<strong>Details</strong>&quot; to view the entity details under the storage group, and continue to click entity details to view the physical quantity details. Click &quot;<strong>Edit</strong>&quot; to edit the TTL information of the storage group.</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Workbench/image25.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="query" tabindex="-1"><a class="header-anchor" href="#query" aria-hidden="true">#</a> Query</h2><p>Workbench provides a powerful query tool that can directly edit the query text and save the query, simplifying the task of querying rows.</p><h3 id="create-a-query" tabindex="-1"><a class="header-anchor" href="#create-a-query" aria-hidden="true">#</a> Create a Query</h3><p>Click &quot;<strong>Query</strong>&quot; in &quot;<strong>Connection Operation Bar</strong>&quot;, select the data connection to be operated, and then enter the query editor.</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Workbench/image26.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>You can enter SQL statements on the query editor interface, and the prompt box will prompt keywords that meet the conditions. On the right side, functions or data can be selected for calculation as required.</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Workbench/image27.png" alt="" width="5.90625in" height="3.125in" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>After entering the SQL statement, click the upper right corner to select operations, namely &quot;Save&quot;, &quot;Run&quot;, &quot;Pause&quot; and &quot;Delete&quot;. The running results display 10 lines per page, and the default limit is 100 lines of returned results, and you can also choose to cancel the limit to display all.</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Workbench/image28.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="view-query" tabindex="-1"><a class="header-anchor" href="#view-query" aria-hidden="true">#</a> View Query</h3><p>A saved connection can be viewed under <strong>Query</strong> under the data connection in the object pane.</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Workbench/image29.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="cluster-management" tabindex="-1"><a class="header-anchor" href="#cluster-management" aria-hidden="true">#</a> Cluster Management</h2><h3 id="topology-management" tabindex="-1"><a class="header-anchor" href="#topology-management" aria-hidden="true">#</a> Topology Management</h3><p>Workbench provides a view of the cluster topology. Select &quot;<strong>Database Management</strong>&quot;-&gt;&quot;<strong>Node Management</strong>&quot;&gt;&quot;<strong>Topology Management</strong>&quot; to view the topology map. The &quot;Topology Management&quot; function is only supported in the Enterprise Edition.</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Workbench/image30.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>The topology map shows the node IP, node type and port.</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Workbench/image31.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="node-management" tabindex="-1"><a class="header-anchor" href="#node-management" aria-hidden="true">#</a> Node Management</h3><p>Workbench provides management of cluster nodes. Select &quot;<strong>Database Management</strong>&quot;-&gt;&quot;<strong>Node Management</strong>&quot; to view the node status. You can query by node ID or node type.</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Workbench/image32.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="partition-management" tabindex="-1"><a class="header-anchor" href="#partition-management" aria-hidden="true">#</a> Partition Management</h3><p>Workbench provides management of cluster partitions. Select &quot;<strong>Database Management</strong>&quot;-&gt;&quot;<strong>Partition Management</strong>&quot; to check the partition status. You can query by partition ID or partition type.</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Workbench/image33.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="storage-group-management" tabindex="-1"><a class="header-anchor" href="#storage-group-management" aria-hidden="true">#</a> Storage Group Management</h2><h3 id="create-a-storage-group" tabindex="-1"><a class="header-anchor" href="#create-a-storage-group" aria-hidden="true">#</a> Create a Storage Group</h3><p>Select the database object to be operated in the object pane, and click &quot;<strong>New Storage Group</strong>&quot; to create a storage group. The storage group name is required, and the storage group name is required. Under normal circumstances, only letters, Numbers, underscores, and UNICODE are allowed. If Chinese characters contain special characters, please use backticks. Survival time is optional.</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Workbench/image34.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="delete-storage-groups" tabindex="-1"><a class="header-anchor" href="#delete-storage-groups" aria-hidden="true">#</a> Delete Storage Groups</h3><p>Select the storage group to be operated in the object pane, select &quot;<strong>Edit</strong>&quot; in the operation column to modify the survival time of the storage group, and select &quot;<strong>Delete</strong>&quot; to delete the storage group.</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Workbench/image35.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="equipment-and-physical-quantity-management" tabindex="-1"><a class="header-anchor" href="#equipment-and-physical-quantity-management" aria-hidden="true">#</a> Equipment and Physical Quantity Management</h2><h3 id="create-physical-quantities" tabindex="-1"><a class="header-anchor" href="#create-physical-quantities" aria-hidden="true">#</a> Create Physical Quantities</h3><p>Select the storage group to be operated in the object pane, click &quot;<strong>New Device</strong>&quot;, and fill in the information as required to create the physical quantity under the storage group. The name of the physical quantity is required. Under normal circumstances, only letters, numbers, underscores and UNICODE are allowed. If Chinese characters contain special characters, please use backticks.</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Workbench/image36.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="data-trend-preview" tabindex="-1"><a class="header-anchor" href="#data-trend-preview" aria-hidden="true">#</a> Data Trend Preview</h3><p>The &quot;Data Trending&quot; feature is only supported in the Enterprise Edition. Select a storage group in the object pane, &quot;<strong>Data Trend</strong>&quot; displays the physical quantity trend chart under the storage group, click the chart to display detailed information, you can select the time range to query the data in this interval, and display the minimum data such as value.</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Workbench/image37.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="modify-and-delete-physical-quantities" tabindex="-1"><a class="header-anchor" href="#modify-and-delete-physical-quantities" aria-hidden="true">#</a> Modify and Delete Physical Quantities</h3><p>Select the device to be operated in the object pane, and click &quot;<strong>Edit</strong>&quot; on the right to modify the physical quantity information (alias, label and attribute) under the device. Click &quot;<strong>Delete</strong>&quot; to delete the device.</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Workbench/image38.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="operation-log" tabindex="-1"><a class="header-anchor" href="#operation-log" aria-hidden="true">#</a> Operation Log</h2><p>&quot;Operation Log&quot; provides all operation records on Workbench, which can be filtered by IP, user, data connection, keyword and time range.</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Workbench/image39.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="monitoring-management" tabindex="-1"><a class="header-anchor" href="#monitoring-management" aria-hidden="true">#</a> Monitoring Management</h2><p>Workbench provides &quot;<strong>Monitoring Management</strong>&quot; to view the selected server monitoring properties. Select &quot;<strong>Monitoring Management</strong>&quot; from the navigation bar and select the type of monitoring you want. Optional &quot;<strong>Monitoring Indicators</strong>&quot;, &quot;<strong>Connection Information</strong>&quot;, &quot;<strong>Audit Log</strong>&quot;.</p><h3 id="monitoring-metrics" tabindex="-1"><a class="header-anchor" href="#monitoring-metrics" aria-hidden="true">#</a> Monitoring Metrics</h3><p>Monitoring metrics can be used to view the latest information on CPU indicators, memory indicators, and storage indicators.</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Workbench/image40.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="connection-information" tabindex="-1"><a class="header-anchor" href="#connection-information" aria-hidden="true">#</a> Connection Information</h3><p>Connection information allows you to view information about users and servers connected to the Workbench. The &quot;Connection Information&quot; feature is only supported in the Enterprise Edition.</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Workbench/image41.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="audit-log" tabindex="-1"><a class="header-anchor" href="#audit-log" aria-hidden="true">#</a> Audit Log</h3><p>The audit log shows all operations performed in IoTDB, and Workbench provides a query interface, which can be queried by time period or user name. The &quot;Audit Log&quot; feature is only supported in the Enterprise Edition.</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Workbench/image42.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="data-dashboard" tabindex="-1"><a class="header-anchor" href="#data-dashboard" aria-hidden="true">#</a> Data Dashboard</h2><p>The data dashboard can be used to create a visual representation of database data. The following figure shows the dashboard with the Grafana template mounted.</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Workbench/image43.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="file-configuration" tabindex="-1"><a class="header-anchor" href="#file-configuration" aria-hidden="true">#</a> File Configuration</h3>`,132),q={href:"https://grafana.com/",target:"_blank",rel:"noopener noreferrer"},v=n(`<p>Content of application-prod.properties：</p><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code># Designate the log configuration file
logging.config=classpath:log4j2.xml

# Set port and context path
server.port=9090
server.servlet.context-path=/api

# The following data source configuration method will cause data loss after the project is repackaged.
# To facilitate testing during development, refer to the application-prod.properties file for configuration during actual project deployment
# sqlite
spring.datasource.url=jdbc:sqlite:./iotdb.db
spring.datasource.driver-class-name=org.sqlite.JDBC
# mysql
#spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
#spring.datasource.url=jdbc:mysql://
#spring.datasource.username=
#spring.datasource.password=

# Enable the multipart uploading function
spring.servlet.multipart.enabled=true
spring.servlet.multipart.file-size-threshold=2KB
spring.servlet.multipart.max-file-size=200MB
spring.servlet.multipart.max-request-size=215MB

# All files generated during CSV import and export are stored in this folder
file.temp-dir=./tempFile

spring.messages.basename=messages

# enable open audit in iotdb
enableIotdbAudit = false
# enable open audit in workbench:
enableWorkbenchAudit = true
# timechodb  config server rpc port
configServerPort=8867
# dashboard url
url.dashboard=https://grafana.com/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="get-url" tabindex="-1"><a class="header-anchor" href="#get-url" aria-hidden="true">#</a> Get URL</h3><p>Log in to the Grafan panel, click the share button, select &quot;<strong>Link</strong>&quot; in the pop-up window, and copy &quot;<strong>Link URL</strong>&quot;.</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Workbench/image44.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="q-a" tabindex="-1"><a class="header-anchor" href="#q-a" aria-hidden="true">#</a> Q&amp;A</h2><ol><li>If you encounter the following situations, please try to exit &quot;incognito mode&quot; or change your browser.</li></ol><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Workbench/image45.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li><p>If you cannot see the monitoring information, you need to enable Metric of IoTDB.</p></li><li><p>When the active-active configuration changes, it is recommended to re-establish the connection.</p></li></ol>`,9);function x(w,k){const a=r("ExternalLinkIcon");return s(),c("div",null,[d(`

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

`),h,l,u,p,m,e("ol",null,[e("li",null,[t("Download and unzip the software. The first step is to download the software from the official website or a trusted source at "),e("a",f,[t("https://www.timecho.com/product"),i(a)]),t(".")]),b]),y,e("p",null,[t("Configure the dashboard address in the file application-prod.properties, find the configuration item url.dashboard="),e("a",q,[t("https://grafana.com/"),i(a)]),t(", and fill in the grafana URL.")]),v])}const E=o(g,[["render",x],["__file","Workbench.html.vue"]]);export{E as default};
