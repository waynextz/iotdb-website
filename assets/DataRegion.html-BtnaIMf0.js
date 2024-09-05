import{_ as o,c as r,b as n,d as s,e as a,a as i,w as d,r as l,o as c}from"./app-DLxi_e3x.js";const p={};function u(h,e){const t=l("RouteLink");return c(),r("div",null,[e[3]||(e[3]=n(`<h1 id="background" tabindex="-1"><a class="header-anchor" href="#background"><span>Background</span></a></h1><p>The database is specified by the user display.<br> Use the statement &quot;CREATE DATABASE&quot; to create the database.<br> Each database has a corresponding StorageGroupProcessor.</p><p>To ensure eventually consistency, a insert lock (exclusive lock) is used to synchronize each insert request in each database.<br> So the server side parallelism of data ingestion is equal to the number of database.</p><h1 id="problem" tabindex="-1"><a class="header-anchor" href="#problem"><span>Problem</span></a></h1><p>From background, we can infer that the parallelism of data ingestion of IoTDB is max(num of client, server side parallelism), which equals to max(num of client, num of database)</p><p>The concept of database usually is related to real world entity such as factory, location, country and so on.<br> The number of databases may be small which makes the parallelism of data ingestion of IoTDB insufficient. We can&#39;t jump out of this dilemma even we start hundreds of client for ingestion.</p><h1 id="solution" tabindex="-1"><a class="header-anchor" href="#solution"><span>Solution</span></a></h1><p>Our idea is to group devices into buckets and change the granularity of synchronization from database level to device buckets level.</p><p>In detail, we use hash to group different devices into buckets called data region.<br> For example, one device called &quot;root.sg.d&quot;(assume it&#39;s database is &quot;<a href="http://root.sg" target="_blank" rel="noopener noreferrer">root.sg</a>&quot;) is belonged to data region &quot;<a href="http://root.sg" target="_blank" rel="noopener noreferrer">root.sg</a>.[hash(&quot;root.sg.d&quot;) mod num_of_data_region]&quot;</p><h1 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h1><p>To use data region, you can set this config below:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">data_region_num</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Recommended value is [data region number] = [CPU core number] / [user-defined database number]</p>`,13)),s("p",null,[e[1]||(e[1]=a("For more information, you can refer to ")),i(t,{to:"/UserGuide/V1.1.x/Reference/DataNode-Config-Manual.html"},{default:d(()=>e[0]||(e[0]=[a("this page")])),_:1}),e[2]||(e[2]=a("."))])])}const g=o(p,[["render",u],["__file","DataRegion.html.vue"]]),b=JSON.parse('{"path":"/UserGuide/V1.1.x/Data-Modeling/DataRegion.html","title":"Background","lang":"en-US","frontmatter":{"description":"Background The database is specified by the user display. Use the statement \\"CREATE DATABASE\\" to create the database. Each database has a corresponding StorageGroupProcessor. To...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/Data-Modeling/DataRegion.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.1.x/Data-Modeling/DataRegion.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Background"}],["meta",{"property":"og:description","content":"Background The database is specified by the user display. Use the statement \\"CREATE DATABASE\\" to create the database. Each database has a corresponding StorageGroupProcessor. To..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Background\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.18,"words":353},"filePathRelative":"UserGuide/V1.1.x/Data-Modeling/DataRegion.md","localizedDate":"July 10, 2023","autoDesc":true}');export{g as comp,b as data};
