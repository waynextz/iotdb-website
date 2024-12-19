import{_ as t,c as i,b as a,o}from"./app-C-0rb--l.js";const n={};function s(r,e){return o(),i("div",null,e[0]||(e[0]=[a(`<h1 id="introduction-to-configuration-item-modification" tabindex="-1"><a class="header-anchor" href="#introduction-to-configuration-item-modification"><span>Introduction to configuration item modification</span></a></h1><h2 id="method-to-modify" tabindex="-1"><a class="header-anchor" href="#method-to-modify"><span>Method to modify</span></a></h2><ul><li>Use sql statement to modify [recommended]</li><li>Directly modify the configuration file [not recommended]</li></ul><h2 id="effective-method" tabindex="-1"><a class="header-anchor" href="#effective-method"><span>Effective method</span></a></h2><ul><li>Cannot be modified after the first startup. (first_start)</li><li>Take effect after restart (restart)</li><li>hot load (hot_reload)</li></ul><h1 id="modify-configuration-files-directly" tabindex="-1"><a class="header-anchor" href="#modify-configuration-files-directly"><span>Modify configuration files directly</span></a></h1><p>It can take effect by restarting or following the command</p><h2 id="hot-reload-configuration-command" tabindex="-1"><a class="header-anchor" href="#hot-reload-configuration-command"><span>Hot reload configuration command</span></a></h2><p>Make changes to configuration items that support hot reloading take effect immediately.<br> For configuration items that have been modified in the configuration file, deleting or commenting them from the configuration file and then performing load configuration will restore the default values.</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>load configuration</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h1 id="setconfiguration-statement" tabindex="-1"><a class="header-anchor" href="#setconfiguration-statement"><span>SetConfiguration statement</span></a></h1><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>set configuration &quot;key1&quot;=&quot;value1&quot; &quot;key2&quot;=&quot;value2&quot;... (on nodeId)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="example-1" tabindex="-1"><a class="header-anchor" href="#example-1"><span>Example 1</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>set configuration &quot;enable_cross_space_compaction&quot;=&quot;false&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>To take effect permanently on all nodes in the cluster, set enable_cross_space_compaction to false and write it to iotdb-system.properties.</p><h3 id="example-2" tabindex="-1"><a class="header-anchor" href="#example-2"><span>Example 2</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>set configuration &quot;enable_cross_space_compaction&quot;=&quot;false&quot; &quot;enable_seq_space_compaction&quot;=&quot;false&quot; on 1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>To take effect permanently on the node with nodeId 1, set enable_cross_space_compaction to false, set enable_seq_space_compaction to false, and write it to iotdb-system.properties.</p><h3 id="example-3" tabindex="-1"><a class="header-anchor" href="#example-3"><span>Example 3</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>set configuration &quot;enable_cross_space_compaction&quot;=&quot;false&quot; &quot;timestamp_precision&quot;=&quot;ns&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>To take effect permanently on all nodes in the cluster, set enable_cross_space_compaction to false, timestamp_precision to ns, and write it to iotdb-system.properties. However, timestamp_precision is a configuration item that cannot be modified after the first startup, so the update of this configuration item will be ignored and the return is as follows.</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>Msg: org.apache.iotdb.jdbc.IoTDBSQLException: 301: ignored config items: [timestamp_precision]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Effective configuration item<br> Configuration items that support hot reloading and take effect immediately are marked with effectiveMode as hot_reload in the iotdb-system.properties.template file.</p><p>Example</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span># Used for indicate cluster name and distinguish different cluster.</span></span>
<span class="line"><span># If you need to modify the cluster name, it&#39;s recommended to use &#39;set configuration &quot;cluster_name=xxx&quot;&#39; sql.</span></span>
<span class="line"><span># Manually modifying configuration file is not recommended, which may cause node restart fail.</span></span>
<span class="line"><span># effectiveMode: hot_reload</span></span>
<span class="line"><span># Datatype: string</span></span>
<span class="line"><span>cluster_name=defaultCluster</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25)]))}const d=t(n,[["render",s],["__file","Modify-Config-Manual.html.vue"]]),c=JSON.parse('{"path":"/UserGuide/latest/Reference/Modify-Config-Manual.html","title":"Introduction to configuration item modification","lang":"en-US","frontmatter":{"description":"Introduction to configuration item modification Method to modify Use sql statement to modify [recommended] Directly modify the configuration file [not recommended] Effective met...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/latest/Reference/Modify-Config-Manual.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/latest/Reference/Modify-Config-Manual.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Introduction to configuration item modification"}],["meta",{"property":"og:description","content":"Introduction to configuration item modification Method to modify Use sql statement to modify [recommended] Directly modify the configuration file [not recommended] Effective met..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-11T11:01:16.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-11T11:01:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Introduction to configuration item modification\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-11T11:01:16.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Method to modify","slug":"method-to-modify","link":"#method-to-modify","children":[]},{"level":2,"title":"Effective method","slug":"effective-method","link":"#effective-method","children":[]},{"level":2,"title":"Hot reload configuration command","slug":"hot-reload-configuration-command","link":"#hot-reload-configuration-command","children":[{"level":3,"title":"Example 1","slug":"example-1","link":"#example-1","children":[]},{"level":3,"title":"Example 2","slug":"example-2","link":"#example-2","children":[]},{"level":3,"title":"Example 3","slug":"example-3","link":"#example-3","children":[]}]}],"git":{"createdTime":1721383100000,"updatedTime":1731322876000,"contributors":[{"name":"W1y1r","username":"W1y1r","email":"150988475+W1y1r@users.noreply.github.com","commits":2,"url":"https://github.com/W1y1r"},{"name":"shuwenwei","username":"shuwenwei","email":"55970239+shuwenwei@users.noreply.github.com","commits":1,"url":"https://github.com/shuwenwei"}]},"readingTime":{"minutes":1.41,"words":424},"filePathRelative":"UserGuide/latest/Reference/Modify-Config-Manual.md","localizedDate":"July 19, 2024","autoDesc":true}');export{d as comp,c as data};
