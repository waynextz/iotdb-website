import{_ as e,o as t,c as a,e as s}from"./app-DxurNv9d.js";const l={},i=s(`<h1 id="ttl" tabindex="-1"><a class="header-anchor" href="#ttl"><span>TTL</span></a></h1><p>IoTDB supports storage-level TTL settings, which means it is able to delete old data automatically and periodically. The benefit of using TTL is that hopefully you can control the total disk space usage and prevent the machine from running out of disks. Moreover, the query performance may downgrade as the total number of files goes up and the memory usage also increase as there are more files. Timely removing such files helps to keep at a high query performance level and reduce memory usage.</p><p>The default unit of TTL is milliseconds. If the time precision in the configuration file changes to another, the TTL is still set to milliseconds.</p><h2 id="set-ttl" tabindex="-1"><a class="header-anchor" href="#set-ttl"><span>Set TTL</span></a></h2><p>The SQL Statement for setting TTL is as follow:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; set ttl to root.ln 3600000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This example means that for data in <code>root.ln</code>, only 3600000 ms, that is, the latest 1 hour will remain, the older one is removed or made invisible.</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; set ttl to root.sgcc.** 3600000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>It supports setting TTL for databases in a path. This example represents setting TTL for all databases in the <code>root.sgcc</code> path.</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; set ttl to root.** 3600000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This example represents setting TTL for all databases.</p><h2 id="unset-ttl" tabindex="-1"><a class="header-anchor" href="#unset-ttl"><span>Unset TTL</span></a></h2><p>To unset TTL, we can use follwing SQL statement:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; unset ttl to root.ln
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>After unset TTL, all data will be accepted in <code>root.ln</code>.</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; unset ttl to root.sgcc.**
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Unset the TTL setting for all databases in the <code>root.sgcc</code> path.</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; unset ttl to root.**
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Unset the TTL setting for all databases.</p><h2 id="show-ttl" tabindex="-1"><a class="header-anchor" href="#show-ttl"><span>Show TTL</span></a></h2><p>To Show TTL, we can use following SQL statement:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; SHOW ALL TTL
IoTDB&gt; SHOW TTL ON StorageGroupNames
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>The SHOW ALL TTL example gives the TTL for all databases.<br> The SHOW TTL ON root.ln,root.sgcc,root.DB example shows the TTL for the three storage<br> groups specified.<br> Note: the TTL for databases that do not have a TTL set will display as null.</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; show all ttl
+----------+-------+
| database|ttl(ms)|
+---------+-------+
|  root.ln|3600000|
|root.sgcc|   null|
|  root.DB|3600000|
+----------+-------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),n=[i];function o(r,d){return t(),a("div",null,n)}const p=e(l,[["render",o],["__file","TTL.html.vue"]]),u=JSON.parse('{"path":"/UserGuide/V1.0.x/Delete-Data/TTL.html","title":"TTL","lang":"en-US","frontmatter":{"description":"TTL IoTDB supports storage-level TTL settings, which means it is able to delete old data automatically and periodically. The benefit of using TTL is that hopefully you can contr...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/Delete-Data/TTL.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.0.x/Delete-Data/TTL.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"TTL"}],["meta",{"property":"og:description","content":"TTL IoTDB supports storage-level TTL settings, which means it is able to delete old data automatically and periodically. The benefit of using TTL is that hopefully you can contr..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"TTL\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Set TTL","slug":"set-ttl","link":"#set-ttl","children":[]},{"level":2,"title":"Unset TTL","slug":"unset-ttl","link":"#unset-ttl","children":[]},{"level":2,"title":"Show TTL","slug":"show-ttl","link":"#show-ttl","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.47,"words":442},"filePathRelative":"UserGuide/V1.0.x/Delete-Data/TTL.md","localizedDate":"July 10, 2023","autoDesc":true}');export{p as comp,u as data};
