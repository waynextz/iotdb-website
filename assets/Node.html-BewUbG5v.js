import{_ as i,c as l,b as n,d as a,e as p,a as t,o as d,r as c}from"./app-C-0rb--l.js";const o={};function r(v,s){const e=c("PathPattern");return d(),l("div",null,[s[1]||(s[1]=n(`<h1 id="node-management" tabindex="-1"><a class="header-anchor" href="#node-management"><span>Node Management</span></a></h1><h2 id="show-child-paths" tabindex="-1"><a class="header-anchor" href="#show-child-paths"><span>Show Child Paths</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>SHOW CHILD PATHS pathPattern</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Return all child paths and their node types of all the paths matching pathPattern.</p><p>node types: ROOT -&gt; DB INTERNAL -&gt; DATABASE -&gt; INTERNAL -&gt; DEVICE -&gt; TIMESERIES</p><p>Example：</p><ul><li>return the child paths of root.ln：show child paths root.ln</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>+------------+----------+</span></span>
<span class="line"><span>| child paths|node types|</span></span>
<span class="line"><span>+------------+----------+</span></span>
<span class="line"><span>|root.ln.wf01|  INTERNAL|</span></span>
<span class="line"><span>|root.ln.wf02|  INTERNAL|</span></span>
<span class="line"><span>+------------+----------+</span></span>
<span class="line"><span>Total line number = 2</span></span>
<span class="line"><span>It costs 0.002s</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>get all paths in form of root.xx.xx.xx：show child paths root.xx.xx</p></blockquote><h2 id="show-child-nodes" tabindex="-1"><a class="header-anchor" href="#show-child-nodes"><span>Show Child Nodes</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>SHOW CHILD NODES pathPattern</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Return all child nodes of the pathPattern.</p><p>Example：</p><ul><li>return the child nodes of root：show child nodes root</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>+------------+</span></span>
<span class="line"><span>| child nodes|</span></span>
<span class="line"><span>+------------+</span></span>
<span class="line"><span>|          ln|</span></span>
<span class="line"><span>+------------+</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>return the child nodes of root.ln：show child nodes root.ln</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>+------------+</span></span>
<span class="line"><span>| child nodes|</span></span>
<span class="line"><span>+------------+</span></span>
<span class="line"><span>|        wf01|</span></span>
<span class="line"><span>|        wf02|</span></span>
<span class="line"><span>+------------+</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="count-nodes" tabindex="-1"><a class="header-anchor" href="#count-nodes"><span>Count Nodes</span></a></h2><p>IoTDB is able to use <code>COUNT NODES &lt;PathPattern&gt; LEVEL=&lt;INTEGER&gt;</code> to count the number of nodes at<br> the given level in current Metadata Tree considering a given pattern. IoTDB will find paths that<br> match the pattern and counts distinct nodes at the specified level among the matched paths.<br> This could be used to query the number of devices with specified measurements. The usage are as<br> follows:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>IoTDB &gt; COUNT NODES root.** LEVEL=2</span></span>
<span class="line"><span>IoTDB &gt; COUNT NODES root.ln.** LEVEL=2</span></span>
<span class="line"><span>IoTDB &gt; COUNT NODES root.ln.wf01.** LEVEL=3</span></span>
<span class="line"><span>IoTDB &gt; COUNT NODES root.**.temperature LEVEL=3</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>As for the above mentioned example and Metadata tree, you can get following results:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>+------------+</span></span>
<span class="line"><span>|count(nodes)|</span></span>
<span class="line"><span>+------------+</span></span>
<span class="line"><span>|           4|</span></span>
<span class="line"><span>+------------+</span></span>
<span class="line"><span>Total line number = 1</span></span>
<span class="line"><span>It costs 0.003s</span></span>
<span class="line"><span></span></span>
<span class="line"><span>+------------+</span></span>
<span class="line"><span>|count(nodes)|</span></span>
<span class="line"><span>+------------+</span></span>
<span class="line"><span>|           2|</span></span>
<span class="line"><span>+------------+</span></span>
<span class="line"><span>Total line number = 1</span></span>
<span class="line"><span>It costs 0.002s</span></span>
<span class="line"><span></span></span>
<span class="line"><span>+------------+</span></span>
<span class="line"><span>|count(nodes)|</span></span>
<span class="line"><span>+------------+</span></span>
<span class="line"><span>|           1|</span></span>
<span class="line"><span>+------------+</span></span>
<span class="line"><span>Total line number = 1</span></span>
<span class="line"><span>It costs 0.002s</span></span>
<span class="line"><span></span></span>
<span class="line"><span>+------------+</span></span>
<span class="line"><span>|count(nodes)|</span></span>
<span class="line"><span>+------------+</span></span>
<span class="line"><span>|           2|</span></span>
<span class="line"><span>+------------+</span></span>
<span class="line"><span>Total line number = 1</span></span>
<span class="line"><span>It costs 0.002s</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Note: The path of timeseries is just a filter condition, which has no relationship with the definition of level.</p></blockquote><h2 id="show-devices" tabindex="-1"><a class="header-anchor" href="#show-devices"><span>Show Devices</span></a></h2><ul><li>SHOW DEVICES pathPattern? (WITH DATABASE)? limitClause? #showDevices</li></ul><p>Similar to <code>Show Timeseries</code>, IoTDB also supports two ways of viewing devices:</p><ul><li><code>SHOW DEVICES</code> statement presents all devices&#39; information, which is equal to <code>SHOW DEVICES root.**</code>.</li><li><code>SHOW DEVICES &lt;PathPattern&gt;</code> statement specifies the <code>PathPattern</code> and returns the devices information matching the pathPattern and under the given level.</li></ul><p>SQL statement is as follows:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>IoTDB&gt; show devices</span></span>
<span class="line"><span>IoTDB&gt; show devices root.ln.**</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>You can get results below:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>+-------------------+---------+</span></span>
<span class="line"><span>|            devices|isAligned|</span></span>
<span class="line"><span>+-------------------+---------+</span></span>
<span class="line"><span>|  root.ln.wf01.wt01|    false|</span></span>
<span class="line"><span>|  root.ln.wf02.wt02|    false|</span></span>
<span class="line"><span>|root.sgcc.wf03.wt01|    false|</span></span>
<span class="line"><span>|    root.turbine.d1|    false|</span></span>
<span class="line"><span>+-------------------+---------+</span></span>
<span class="line"><span>Total line number = 4</span></span>
<span class="line"><span>It costs 0.002s</span></span>
<span class="line"><span></span></span>
<span class="line"><span>+-----------------+---------+</span></span>
<span class="line"><span>|          devices|isAligned|</span></span>
<span class="line"><span>+-----------------+---------+</span></span>
<span class="line"><span>|root.ln.wf01.wt01|    false|</span></span>
<span class="line"><span>|root.ln.wf02.wt02|    false|</span></span>
<span class="line"><span>+-----------------+---------+</span></span>
<span class="line"><span>Total line number = 2</span></span>
<span class="line"><span>It costs 0.001s</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>isAligned</code> indicates whether the timeseries under the device are aligned.</p><p>To view devices&#39; information with database, we can use <code>SHOW DEVICES WITH DATABASE</code> statement.</p><ul><li><code>SHOW DEVICES WITH DATABASE</code> statement presents all devices&#39; information with their database.</li><li><code>SHOW DEVICES &lt;PathPattern&gt; WITH DATABASE</code> statement specifies the <code>PathPattern</code> and returns the<br> devices&#39; information under the given level with their database information.</li></ul><p>SQL statement is as follows:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>IoTDB&gt; show devices with database</span></span>
<span class="line"><span>IoTDB&gt; show devices root.ln.** with database</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>You can get results below:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>+-------------------+-------------+---------+</span></span>
<span class="line"><span>|            devices|     database|isAligned|</span></span>
<span class="line"><span>+-------------------+-------------+---------+</span></span>
<span class="line"><span>|  root.ln.wf01.wt01|      root.ln|    false|</span></span>
<span class="line"><span>|  root.ln.wf02.wt02|      root.ln|    false|</span></span>
<span class="line"><span>|root.sgcc.wf03.wt01|    root.sgcc|    false|</span></span>
<span class="line"><span>|    root.turbine.d1| root.turbine|    false|</span></span>
<span class="line"><span>+-------------------+-------------+---------+</span></span>
<span class="line"><span>Total line number = 4</span></span>
<span class="line"><span>It costs 0.003s</span></span>
<span class="line"><span></span></span>
<span class="line"><span>+-----------------+-------------+---------+</span></span>
<span class="line"><span>|          devices|     database|isAligned|</span></span>
<span class="line"><span>+-----------------+-------------+---------+</span></span>
<span class="line"><span>|root.ln.wf01.wt01|      root.ln|    false|</span></span>
<span class="line"><span>|root.ln.wf02.wt02|      root.ln|    false|</span></span>
<span class="line"><span>+-----------------+-------------+---------+</span></span>
<span class="line"><span>Total line number = 2</span></span>
<span class="line"><span>It costs 0.001s</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="count-devices" tabindex="-1"><a class="header-anchor" href="#count-devices"><span>Count Devices</span></a></h2>`,39)),a("ul",null,[a("li",null,[s[0]||(s[0]=p("COUNT DEVICES /")),t(e)])]),s[2]||(s[2]=n(`<p>The above statement is used to count the number of devices. At the same time, it is allowed to specify <code>PathPattern</code> to count the number of devices matching the <code>PathPattern</code>.</p><p>SQL statement is as follows:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>IoTDB&gt; show devices</span></span>
<span class="line"><span>IoTDB&gt; count devices</span></span>
<span class="line"><span>IoTDB&gt; count devices root.ln.**</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can get results below:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>+-------------------+---------+</span></span>
<span class="line"><span>|            devices|isAligned|</span></span>
<span class="line"><span>+-------------------+---------+</span></span>
<span class="line"><span>|root.sgcc.wf03.wt03|    false|</span></span>
<span class="line"><span>|    root.turbine.d1|    false|</span></span>
<span class="line"><span>|  root.ln.wf02.wt02|    false|</span></span>
<span class="line"><span>|  root.ln.wf01.wt01|    false|</span></span>
<span class="line"><span>+-------------------+---------+</span></span>
<span class="line"><span>Total line number = 4</span></span>
<span class="line"><span>It costs 0.024s</span></span>
<span class="line"><span></span></span>
<span class="line"><span>+--------------+</span></span>
<span class="line"><span>|count(devices)|</span></span>
<span class="line"><span>+--------------+</span></span>
<span class="line"><span>|             4|</span></span>
<span class="line"><span>+--------------+</span></span>
<span class="line"><span>Total line number = 1</span></span>
<span class="line"><span>It costs 0.004s</span></span>
<span class="line"><span></span></span>
<span class="line"><span>+--------------+</span></span>
<span class="line"><span>|count(devices)|</span></span>
<span class="line"><span>+--------------+</span></span>
<span class="line"><span>|             2|</span></span>
<span class="line"><span>+--------------+</span></span>
<span class="line"><span>Total line number = 1</span></span>
<span class="line"><span>It costs 0.004s</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5))])}const h=i(o,[["render",r],["__file","Node.html.vue"]]),m=JSON.parse('{"path":"/UserGuide/V1.1.x/Operate-Metadata/Node.html","title":"Node Management","lang":"en-US","frontmatter":{"description":"Node Management Show Child Paths Return all child paths and their node types of all the paths matching pathPattern. node types: ROOT -> DB INTERNAL -> DATABASE -> INTERNAL -> DE...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/Operate-Metadata/Node.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.1.x/Operate-Metadata/Node.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Node Management"}],["meta",{"property":"og:description","content":"Node Management Show Child Paths Return all child paths and their node types of all the paths matching pathPattern. node types: ROOT -> DB INTERNAL -> DATABASE -> INTERNAL -> DE..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Node Management\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Show Child Paths","slug":"show-child-paths","link":"#show-child-paths","children":[]},{"level":2,"title":"Show Child Nodes","slug":"show-child-nodes","link":"#show-child-nodes","children":[]},{"level":2,"title":"Count Nodes","slug":"count-nodes","link":"#count-nodes","children":[]},{"level":2,"title":"Show Devices","slug":"show-devices","link":"#show-devices","children":[]},{"level":2,"title":"Count Devices","slug":"count-devices","link":"#count-devices","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","username":"CritasWang","email":"critas@outlook.com","commits":1,"url":"https://github.com/CritasWang"}]},"readingTime":{"minutes":2.35,"words":705},"filePathRelative":"UserGuide/V1.1.x/Operate-Metadata/Node.md","localizedDate":"July 10, 2023","autoDesc":true}');export{h as comp,m as data};
