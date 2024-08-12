import{_ as i,r as d,o as l,c as r,b as o,d as e,a as t,w as s,e as n}from"./app-BPXTI2H3.js";const c={},b=n(`<h1 id="database-management" tabindex="-1"><a class="header-anchor" href="#database-management"><span>Database Management</span></a></h1><h2 id="create-database" tabindex="-1"><a class="header-anchor" href="#create-database"><span>Create Database</span></a></h2><p>According to the storage model we can set up the corresponding database. Two SQL statements are supported for creating databases, as follows:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB &gt; create database root.ln
IoTDB &gt; create database root.sgcc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>We can thus create two databases using the above two SQL statements.</p><p>It is worth noting that when the path itself or the parent/child layer of the path is already created as database, the path is then not allowed to be created as database. For example, it is not feasible to create <code>root.ln.wf01</code> as database when two databases <code>root.ln</code> and <code>root.sgcc</code> exist. The system gives the corresponding error prompt as shown below:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; CREATE DATABASE root.ln.wf01
Msg: 300: root.ln has already been created as database.
IoTDB&gt; create database root.ln.wf01
Msg: 300: root.ln has already been created as database.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The LayerName of database can only be characters, numbers, underscores. If you want to set it to pure numbers or contain other characters, you need to enclose the database name with backticks (\`\`).</p><p>Besides, if deploy on Windows system, the LayerName is case-insensitive, which means it&#39;s not allowed to create databases <code>root.ln</code> and <code>root.LN</code> at the same time.</p><h2 id="show-databases" tabindex="-1"><a class="header-anchor" href="#show-databases"><span>Show Databases</span></a></h2>`,10),m=n(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; SHOW DATABASES
IoTDB&gt; SHOW DATABASES root.**
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>The result is as follows:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-------------+----+-------------------------+-----------------------+-----------------------+
|database| ttl|schema_replication_factor|data_replication_factor|time_partition_interval|
+-------------+----+-------------------------+-----------------------+-----------------------+
|    root.sgcc|null|                        2|                      2|                 604800|
|      root.ln|null|                        2|                      2|                 604800|
+-------------+----+-------------------------+-----------------------+-----------------------+
Total line number = 2
It costs 0.060s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="delete-database" tabindex="-1"><a class="header-anchor" href="#delete-database"><span>Delete Database</span></a></h2><p>User can use the <code>DELETE DATABASE &lt;PathPattern&gt;</code> statement to delete all databases matching the pathPattern. Please note the data in the database will also be deleted.</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB &gt; DELETE DATABASE root.ln
IoTDB &gt; DELETE DATABASE root.sgcc
// delete all data, all timeseries and all databases
IoTDB &gt; DELETE DATABASE root.**
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="count-databases" tabindex="-1"><a class="header-anchor" href="#count-databases"><span>Count Databases</span></a></h2><p>User can use the <code>COUNT DATABASE &lt;PathPattern&gt;</code> statement to count the number of databases. It is allowed to specify <code>PathPattern</code> to count the number of databases matching the <code>PathPattern</code>.</p><p>SQL statement is as follows:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; count databases
IoTDB&gt; count databases root.*
IoTDB&gt; count databases root.sgcc.*
IoTDB&gt; count databases root.sgcc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The result is as follows:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-------------+
|     database|
+-------------+
|    root.sgcc|
| root.turbine|
|      root.ln|
+-------------+
Total line number = 3
It costs 0.003s

+-------------+
|     database|
+-------------+
|            3|
+-------------+
Total line number = 1
It costs 0.003s

+-------------+
|     database|
+-------------+
|            3|
+-------------+
Total line number = 1
It costs 0.002s

+-------------+
|     database|
+-------------+
|            0|
+-------------+
Total line number = 1
It costs 0.002s

+-------------+
|     database|
+-------------+
|            1|
+-------------+
Total line number = 1
It costs 0.002s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function u(v,h){const a=d("RouteLink");return l(),r("div",null,[b,o("p",null,[e("After creating the database, we can use the "),t(a,{to:"/UserGuide/V1.0.x/Reference/SQL-Reference.html"},{default:s(()=>[e("SHOW DATABASES")]),_:1}),e(" statement and "),t(a,{to:"/UserGuide/V1.0.x/Reference/SQL-Reference.html"},{default:s(()=>[e("SHOW DATABASES <PathPattern>")]),_:1}),e(" to view the databases. The SQL statements are as follows:")]),m])}const g=i(c,[["render",u],["__file","Database.html.vue"]]),x=JSON.parse('{"path":"/UserGuide/V1.0.x/Operate-Metadata/Database.html","title":"Database Management","lang":"en-US","frontmatter":{"description":"Database Management Create Database According to the storage model we can set up the corresponding database. Two SQL statements are supported for creating databases, as follows:...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/Operate-Metadata/Database.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.0.x/Operate-Metadata/Database.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Database Management"}],["meta",{"property":"og:description","content":"Database Management Create Database According to the storage model we can set up the corresponding database. Two SQL statements are supported for creating databases, as follows:..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Database Management\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Create Database","slug":"create-database","link":"#create-database","children":[]},{"level":2,"title":"Show Databases","slug":"show-databases","link":"#show-databases","children":[]},{"level":2,"title":"Delete Database","slug":"delete-database","link":"#delete-database","children":[]},{"level":2,"title":"Count Databases","slug":"count-databases","link":"#count-databases","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.75,"words":524},"filePathRelative":"UserGuide/V1.0.x/Operate-Metadata/Database.md","localizedDate":"July 10, 2023","autoDesc":true}');export{g as comp,x as data};
