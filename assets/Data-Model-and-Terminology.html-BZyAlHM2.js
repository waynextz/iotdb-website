import{_ as r,c as l,b as n,d as t,e as a,a as o,f as i,r as d,o as c}from"./app-CNiZnG3t.js";const p={};function m(h,e){const s=d("RouteLink");return c(),l("div",null,[e[11]||(e[11]=n(`<h1 id="data-model" tabindex="-1"><a class="header-anchor" href="#data-model"><span>Data Model</span></a></h1><p>A wind power IoT scenario is taken as an example to illustrate how to create a correct data model in IoTDB.</p><p>According to the enterprise organization structure and equipment entity hierarchy, it is expressed as an attribute hierarchy structure, as shown below. The hierarchical from top to bottom is: power group layer - power plant layer - entity layer - measurement layer. ROOT is the root node, and each node of measurement layer is a leaf node. In the process of using IoTDB, the attributes on the path from ROOT node is directly connected to each leaf node with &quot;.&quot;, thus forming the name of a timeseries in IoTDB. For example, The left-most path in Figure 2.1 can generate a timeseries named <code>root.ln.wf01.wt01.status</code>.</p><center><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/github/122668849-b1c69280-d1ec-11eb-83cb-3b73c40bdf72.png"></center><p>Here are the basic concepts of the model involved in IoTDB.</p><h2 id="measurement-entity-database-path" tabindex="-1"><a class="header-anchor" href="#measurement-entity-database-path"><span>Measurement, Entity, Database, Path</span></a></h2><h3 id="measurement-also-called-field" tabindex="-1"><a class="header-anchor" href="#measurement-also-called-field"><span>Measurement (Also called field)</span></a></h3><p>It is information measured by detection equipment in an actual scene and can transform the sensed information into an electrical signal or other desired form of information output and send it to IoTDB. In IoTDB, all data and paths stored are organized in units of measurements.</p><h3 id="entity-also-called-device" tabindex="-1"><a class="header-anchor" href="#entity-also-called-device"><span>Entity (Also called device)</span></a></h3><p><strong>An entity</strong> is an equipped with measurements in real scenarios. In IoTDB, all measurements should have their corresponding entities. Entities do not need to be created manually, the default is the second last layer.</p><h3 id="database" tabindex="-1"><a class="header-anchor" href="#database"><span>Database</span></a></h3><p><strong>A group of entities.</strong> Users can create any prefix path as a database. Provided that there are four timeseries <code>root.ln.wf01.wt01.status</code>, <code>root.ln.wf01.wt01.temperature</code>, <code>root.ln.wf02.wt02.hardware</code>, <code>root.ln.wf02.wt02.status</code>, two devices <code>wf01</code>, <code>wf02</code> under the path <code>root.ln</code> may belong to the same owner or the same manufacturer, so d1 and d2 are closely related. At this point, the prefix path root.vehicle can be designated as a database, which will enable IoTDB to store all devices under it in the same folder. Newly added devices under <code>root.ln</code> will also belong to this database.</p><p>In general, it is recommended to create 1 database.</p><blockquote><p>Note1: A full path (<code>root.ln.wf01.wt01.status</code> as in the above example) is not allowed to be set as a database.</p><p>Note2: The prefix of a timeseries must belong to a database. Before creating a timeseries, users must set which database the series belongs to. Only timeseries whose database is set can be persisted to disk.</p><p>Note3: The number of character in the path as database, including <code>root.</code>, shall not exceed 64.</p></blockquote><p>Once a prefix path is set as a database, the database settings cannot be changed.</p><p>After a database is set, the ancestral layers, children and descendant layers of the corresponding prefix path are not allowed to be set up again (for example, after <code>root.ln</code> is set as the database, the root layer and <code>root.ln.wf01</code> are not allowed to be created as database).</p><p>The Layer Name of database can only consist of characters, numbers, and underscores, like <code>root.storagegroup_1</code>.</p><p><strong>Schema-less writing</strong>: When metadata is not defined, data can be directly written through an insert statement, and the required metadata will be automatically recognized and registered in the database, achieving automatic modeling.</p><h3 id="path" tabindex="-1"><a class="header-anchor" href="#path"><span>Path</span></a></h3><p>A <code>path</code> is an expression that conforms to the following constraints:</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">path</span><span style="color:#ABB2BF;">       </span></span>
<span class="line"><span style="color:#ABB2BF;">    : nodeName (</span><span style="color:#98C379;">&#39;.&#39;</span><span style="color:#ABB2BF;"> nodeName)*</span></span>
<span class="line"><span style="color:#ABB2BF;">    ;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#ABB2BF;">nodeName</span></span>
<span class="line"><span style="color:#ABB2BF;">    : wildcard? identifier wildcard?</span></span>
<span class="line"><span style="color:#ABB2BF;">    | wildcard</span></span>
<span class="line"><span style="color:#ABB2BF;">    ;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#ABB2BF;">wildcard </span></span>
<span class="line"><span style="color:#ABB2BF;">    : </span><span style="color:#98C379;">&#39;*&#39;</span><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;">    | </span><span style="color:#98C379;">&#39;**&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;">    ;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>We call the part of a path divided by <code>&#39;.&#39;</code> as a <code>node</code> or <code>nodeName</code>. For example: <code>root.a.b.c</code> is a path with 4 nodes.</p><p>The following are the constraints on the <code>nodeName</code>:</p><ul><li><p><code>root</code> is a reserved character, and it is only allowed to appear at the beginning layer of the time series mentioned below. If <code>root</code> appears in other layers, it cannot be parsed and an error will be reported.</p></li><li><p>Except for the beginning layer (<code>root</code>) of the time series, the characters supported in other layers are as follows:</p><ul><li>[ 0-9 a-z A-Z _ ] （letters, numbers, underscore)</li><li>[&#39;\\u2E80&#39;..&#39;\\u9FFF&#39;] （Chinese characters）</li></ul></li><li><p>In particular, if the system is deployed on a Windows machine, the database layer name will be case-insensitive. For example, creating both <code>root.ln</code> and <code>root.LN</code> at the same time is not allowed.</p></li></ul><h3 id="special-characters-reverse-quotation-marks" tabindex="-1"><a class="header-anchor" href="#special-characters-reverse-quotation-marks"><span>Special characters (Reverse quotation marks)</span></a></h3>`,25)),t("p",null,[e[1]||(e[1]=a("If you need to use special characters in the path node name, you can use reverse quotation marks to reference the path node name. For specific usage, please refer to ")),o(s,{to:"/UserGuide/V2.0.1/Tree/Reference/Syntax-Rule.html#reverse-quotation-marks"},{default:i(()=>e[0]||(e[0]=[a("Reverse Quotation Marks")])),_:1}),e[2]||(e[2]=a("."))]),e[12]||(e[12]=n('<h3 id="path-pattern" tabindex="-1"><a class="header-anchor" href="#path-pattern"><span>Path Pattern</span></a></h3><p>In order to make it easier and faster to express multiple timeseries paths, IoTDB provides users with the path pattern. Users can construct a path pattern by using wildcard <code>*</code> and <code>**</code>. Wildcard can appear in any node of the path.</p><p><code>*</code> represents one node. For example, <code>root.vehicle.*.sensor1</code> represents a 4-node path which is prefixed with <code>root.vehicle</code> and suffixed with <code>sensor1</code>.</p><p><code>**</code> represents (<code>*</code>)+, which is one or more nodes of <code>*</code>. For example, <code>root.vehicle.device1.**</code> represents all paths prefixed by <code>root.vehicle.device1</code> with nodes num greater than or equal to 4, like <code>root.vehicle.device1.*</code>, <code>root.vehicle.device1.*.*</code>, <code>root.vehicle.device1.*.*.*</code>, etc; <code>root.vehicle.**.sensor1</code> represents a path which is prefixed with <code>root.vehicle</code> and suffixed with <code>sensor1</code> and has at least 4 nodes.</p><blockquote><p>Note1: Wildcard <code>*</code> and <code>**</code> cannot be placed at the beginning of the path.</p></blockquote><h2 id="timeseries" tabindex="-1"><a class="header-anchor" href="#timeseries"><span>Timeseries</span></a></h2><h3 id="timestamp" tabindex="-1"><a class="header-anchor" href="#timestamp"><span>Timestamp</span></a></h3>',7)),t("p",null,[e[4]||(e[4]=a("The timestamp is the time point at which data is produced. It includes absolute timestamps and relative timestamps. For detailed description, please go to ")),o(s,{to:"/UserGuide/V2.0.1/Tree/Background-knowledge/Data-Type.html"},{default:i(()=>e[3]||(e[3]=[a("Data Type doc")])),_:1}),e[5]||(e[5]=a("."))]),e[13]||(e[13]=n('<h3 id="data-point" tabindex="-1"><a class="header-anchor" href="#data-point"><span>Data point</span></a></h3><p><strong>A &quot;time-value&quot; pair</strong>.</p><h3 id="timeseries-1" tabindex="-1"><a class="header-anchor" href="#timeseries-1"><span>Timeseries</span></a></h3><p><strong>The record of a measurement of an entity on the time axis.</strong> Timeseries is a series of data points.</p><p>A measurement of an entity corresponds to a timeseries.</p><p>Also called meter, timeline, and tag, parameter in real time database.</p><p>The number of measurements managed by IoTDB can reach more than billions.</p><p>For example, if entity wt01 in power plant wf01 of power group ln has a measurement named status, its timeseries can be expressed as: <code>root.ln.wf01.wt01.status</code>.</p><h3 id="aligned-timeseries" tabindex="-1"><a class="header-anchor" href="#aligned-timeseries"><span>Aligned timeseries</span></a></h3><p>There is a situation that multiple measurements of an entity are sampled simultaneously in practical applications, forming multiple timeseries with the same time column. Such a group of timeseries can be modeled as aligned timeseries in Apache IoTDB.</p><p>The timestamp columns of a group of aligned timeseries need to be stored only once in memory and disk when inserting data, instead of once per timeseries.</p><p>It would be best if you created a group of aligned timeseries at the same time.</p><p>You cannot create non-aligned timeseries under the entity to which the aligned timeseries belong, nor can you create aligned timeseries under the entity to which the non-aligned timeseries belong.</p><p>When querying, you can query each timeseries separately.</p><p>When inserting data, it is allowed to insert null value in the aligned timeseries.</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/github/114125919-f4850800-9929-11eb-8211-81d4c04af1ec.png"><p>In the following chapters of data definition language, data operation language and Java Native Interface, various operations related to aligned timeseries will be introduced one by one.</p><h2 id="schema-template" tabindex="-1"><a class="header-anchor" href="#schema-template"><span>Schema Template</span></a></h2>',18)),t("p",null,[e[7]||(e[7]=a("In the actual scenario, many entities collect the same measurements, that is, they have the same measurements name and type. A ")),e[8]||(e[8]=t("strong",null,"schema template",-1)),e[9]||(e[9]=a(" can be declared to define the collectable measurements set. Schema template helps save memory by implementing schema sharing. For detailed description, please refer to ")),o(s,{to:"/UserGuide/V2.0.1/Tree/Basic-Concept/Operate-Metadata.html#Device-Template"},{default:i(()=>e[6]||(e[6]=[a("Schema Template doc")])),_:1}),e[10]||(e[10]=a("."))]),e[14]||(e[14]=t("p",null,"In the following chapters of, data definition language, data operation language and Java Native Interface, various operations related to schema template will be introduced one by one.",-1))])}const g=r(p,[["render",m],["__file","Data-Model-and-Terminology.html.vue"]]),b=JSON.parse('{"path":"/UserGuide/V2.0.1/Tree/Basic-Concept/Data-Model-and-Terminology.html","title":"Data Model","lang":"en-US","frontmatter":{"description":"Data Model A wind power IoT scenario is taken as an example to illustrate how to create a correct data model in IoTDB. According to the enterprise organization structure and equ...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V2.0.1/Tree/Basic-Concept/Data-Model-and-Terminology.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V2.0.1/Tree/Basic-Concept/Data-Model-and-Terminology.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Data Model"}],["meta",{"property":"og:description","content":"Data Model A wind power IoT scenario is taken as an example to illustrate how to create a correct data model in IoTDB. According to the enterprise organization structure and equ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-09T07:17:38.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-09T07:17:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Data Model\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-01-09T07:17:38.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Measurement, Entity, Database, Path","slug":"measurement-entity-database-path","link":"#measurement-entity-database-path","children":[{"level":3,"title":"Measurement (Also called field)","slug":"measurement-also-called-field","link":"#measurement-also-called-field","children":[]},{"level":3,"title":"Entity (Also called device)","slug":"entity-also-called-device","link":"#entity-also-called-device","children":[]},{"level":3,"title":"Database","slug":"database","link":"#database","children":[]},{"level":3,"title":"Path","slug":"path","link":"#path","children":[]},{"level":3,"title":"Special characters (Reverse quotation marks)","slug":"special-characters-reverse-quotation-marks","link":"#special-characters-reverse-quotation-marks","children":[]},{"level":3,"title":"Path Pattern","slug":"path-pattern","link":"#path-pattern","children":[]}]},{"level":2,"title":"Timeseries","slug":"timeseries","link":"#timeseries","children":[{"level":3,"title":"Timestamp","slug":"timestamp","link":"#timestamp","children":[]},{"level":3,"title":"Data point","slug":"data-point","link":"#data-point","children":[]},{"level":3,"title":"Timeseries","slug":"timeseries-1","link":"#timeseries-1","children":[]},{"level":3,"title":"Aligned timeseries","slug":"aligned-timeseries","link":"#aligned-timeseries","children":[]}]},{"level":2,"title":"Schema Template","slug":"schema-template","link":"#schema-template","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1736407058000,"contributors":[{"name":"CritasWang","username":"CritasWang","email":"critas@outlook.com","commits":2,"url":"https://github.com/CritasWang"},{"name":"W1y1r","username":"W1y1r","email":"150988475+W1y1r@users.noreply.github.com","commits":6,"url":"https://github.com/W1y1r"},{"name":"majialin","username":"majialin","email":"107627937+mal117@users.noreply.github.com","commits":1,"url":"https://github.com/majialin"},{"name":"wanghui42","username":"wanghui42","email":"105700158+wanghui42@users.noreply.github.com","commits":3,"url":"https://github.com/wanghui42"},{"name":"Beyyes","username":"Beyyes","email":"cgf1993@foxmail.com","commits":1,"url":"https://github.com/Beyyes"},{"name":"Lei","username":"Lei","email":"33376433+LeiRui@users.noreply.github.com","commits":1,"url":"https://github.com/Lei"}]},"readingTime":{"minutes":4.58,"words":1375},"filePathRelative":"UserGuide/V2.0.1/Tree/Basic-Concept/Data-Model-and-Terminology.md","localizedDate":"July 10, 2023","autoDesc":true}');export{g as comp,b as data};
