import{_ as o,c as i,b as n,d as l,e as a,a as t,f as r,r as d,o as p}from"./app-CLygX6ac.js";const c={};function u(g,e){const s=d("RouteLink");return p(),i("div",null,[e[5]||(e[5]=n(`<h1 id="元数据操作" tabindex="-1"><a class="header-anchor" href="#元数据操作"><span>元数据操作</span></a></h1><h2 id="存储组管理" tabindex="-1"><a class="header-anchor" href="#存储组管理"><span>存储组管理</span></a></h2><h3 id="创建存储组" tabindex="-1"><a class="header-anchor" href="#创建存储组"><span>创建存储组</span></a></h3><p>我们可以根据存储模型建立相应的存储组。创建存储组支持两种 SQL 语句，如下所示：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>IoTDB &gt; set storage group to root.ln</span></span>
<span class="line"><span>IoTDB &gt; create storage group root.sgcc</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>根据以上两条 SQL 语句，我们可以创建出两个存储组。</p><p>需要注意的是，存储组的父子节点都不能再设置存储组。例如在已经有<code>root.ln</code>和<code>root.sgcc</code>这两个存储组的情况下，创建<code>root.ln.wf01</code>存储组是不可行的。系统将给出相应的错误提示，如下所示：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>IoTDB&gt; set storage group to root.ln.wf01</span></span>
<span class="line"><span>Msg: 300: root.ln has already been set to storage group.</span></span>
<span class="line"><span>IoTDB&gt; create storage group root.ln.wf01</span></span>
<span class="line"><span>Msg: 300: root.ln has already been set to storage group.</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>存储组节点名只支持中英文字符、数字、下划线和中划线的组合。</p><p>还需注意，如果在 Windows 系统上部署，存储组名是大小写不敏感的。例如同时创建<code>root.ln</code> 和 <code>root.LN</code> 是不被允许的。</p><h3 id="查看存储组" tabindex="-1"><a class="header-anchor" href="#查看存储组"><span>查看存储组</span></a></h3>`,11)),l("p",null,[e[2]||(e[2]=a("在存储组创建后，我们可以使用 ")),t(s,{to:"/zh/UserGuide/V0.13.x/Reference/SQL-Reference.html"},{default:r(()=>e[0]||(e[0]=[a("SHOW STORAGE GROUP")])),_:1}),e[3]||(e[3]=a(" 语句和 ")),t(s,{to:"/zh/UserGuide/V0.13.x/Reference/SQL-Reference.html"},{default:r(()=>e[1]||(e[1]=[a("SHOW STORAGE GROUP <PathPattern>")])),_:1}),e[4]||(e[4]=a(" 来查看存储组，SQL 语句如下所示："))]),e[6]||(e[6]=n(`<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>IoTDB&gt; show storage group</span></span>
<span class="line"><span>IoTDB&gt; show storage group root.*</span></span>
<span class="line"><span>IoTDB&gt; show storage group root.**</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果为：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>+-------------+</span></span>
<span class="line"><span>|storage group|</span></span>
<span class="line"><span>+-------------+</span></span>
<span class="line"><span>|    root.sgcc|</span></span>
<span class="line"><span>|      root.ln|</span></span>
<span class="line"><span>+-------------+</span></span>
<span class="line"><span>Total line number = 2</span></span>
<span class="line"><span>It costs 0.060s</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除存储组" tabindex="-1"><a class="header-anchor" href="#删除存储组"><span>删除存储组</span></a></h3><p>用户可以使用<code>DELETE STORAGE GROUP &lt;PathPattern&gt;</code>语句删除该路径模式匹配的所有的存储组。在删除的过程中，需要注意的是存储组的数据也会被删除。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>IoTDB &gt; DELETE STORAGE GROUP root.ln</span></span>
<span class="line"><span>IoTDB &gt; DELETE STORAGE GROUP root.sgcc</span></span>
<span class="line"><span>// 删除所有数据，时间序列以及存储组</span></span>
<span class="line"><span>IoTDB &gt; DELETE STORAGE GROUP root.**</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6))])}const m=o(c,[["render",u],["__file","Storage-Group.html.vue"]]),v=JSON.parse('{"path":"/zh/UserGuide/V0.13.x/Operate-Metadata/Storage-Group.html","title":"元数据操作","lang":"zh-CN","frontmatter":{"description":"元数据操作 存储组管理 创建存储组 我们可以根据存储模型建立相应的存储组。创建存储组支持两种 SQL 语句，如下所示： 根据以上两条 SQL 语句，我们可以创建出两个存储组。 需要注意的是，存储组的父子节点都不能再设置存储组。例如在已经有root.ln和root.sgcc这两个存储组的情况下，创建root.ln.wf01存储组是不可行的。系统将给出相应...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V0.13.x/Operate-Metadata/Storage-Group.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Operate-Metadata/Storage-Group.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"元数据操作"}],["meta",{"property":"og:description","content":"元数据操作 存储组管理 创建存储组 我们可以根据存储模型建立相应的存储组。创建存储组支持两种 SQL 语句，如下所示： 根据以上两条 SQL 语句，我们可以创建出两个存储组。 需要注意的是，存储组的父子节点都不能再设置存储组。例如在已经有root.ln和root.sgcc这两个存储组的情况下，创建root.ln.wf01存储组是不可行的。系统将给出相应..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"元数据操作\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"存储组管理","slug":"存储组管理","link":"#存储组管理","children":[{"level":3,"title":"创建存储组","slug":"创建存储组","link":"#创建存储组","children":[]},{"level":3,"title":"查看存储组","slug":"查看存储组","link":"#查看存储组","children":[]},{"level":3,"title":"删除存储组","slug":"删除存储组","link":"#删除存储组","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","username":"CritasWang","email":"critas@outlook.com","commits":1,"url":"https://github.com/CritasWang"}]},"readingTime":{"minutes":1.75,"words":524},"filePathRelative":"zh/UserGuide/V0.13.x/Operate-Metadata/Storage-Group.md","localizedDate":"2023年7月10日","autoDesc":true}');export{m as comp,v as data};
