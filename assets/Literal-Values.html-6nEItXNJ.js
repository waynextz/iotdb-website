import{_ as l,c as t,b as a,d as o,e,a as i,f as r,r as p,o as c}from"./app-C-0rb--l.js";const d={};function u(y,s){const n=p("RouteLink");return c(),t("div",null,[s[3]||(s[3]=a(`<h1 id="literal-values" tabindex="-1"><a class="header-anchor" href="#literal-values"><span>Literal Values</span></a></h1><p>This section describes how to write literal values in IoTDB. These include strings, numbers, timestamp values, boolean values, and NULL.</p><h2 id="string-literals" tabindex="-1"><a class="header-anchor" href="#string-literals"><span>String Literals</span></a></h2><p>in IoTDB, <strong>A string is a sequence of bytes or characters, enclosed within either single quote (<code>&#39;</code>) or double quote (<code>&quot;</code>) characters.</strong> Examples：</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#98C379;">&#39;a string&#39;</span></span>
<span class="line"><span style="color:#98C379;">&quot;another string&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="usage-scenarios" tabindex="-1"><a class="header-anchor" href="#usage-scenarios"><span>Usage Scenarios</span></a></h3><p>Usages of string literals:</p><ul><li><p>Values of <code>TEXT</code> type data in <code>INSERT</code> or <code>SELECT</code> statements</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#ABB2BF;"># </span><span style="color:#C678DD;">insert</span></span>
<span class="line"><span style="color:#C678DD;">insert into</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">ln</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wf02</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wt02</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">timestamp</span><span style="color:#ABB2BF;">,hardware) </span><span style="color:#C678DD;">values</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;v1&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">insert into</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">ln</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wf02</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wt02</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">timestamp</span><span style="color:#ABB2BF;">,hardware) </span><span style="color:#C678DD;">values</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;\\\\&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">+</span><span style="color:#7F848E;font-style:italic;">-----------------------------+--------------------------+</span></span>
<span class="line"><span style="color:#ABB2BF;">|                         </span><span style="color:#C678DD;">Time</span><span style="color:#ABB2BF;">|</span><span style="color:#D19A66;">root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">ln</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wf02</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wt02</span><span style="color:#ABB2BF;">.hardware|</span></span>
<span class="line"><span style="color:#ABB2BF;">+</span><span style="color:#7F848E;font-style:italic;">-----------------------------+--------------------------+</span></span>
<span class="line"><span style="color:#ABB2BF;">|</span><span style="color:#D19A66;">1970</span><span style="color:#ABB2BF;">-</span><span style="color:#D19A66;">01</span><span style="color:#ABB2BF;">-01T08:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">001</span><span style="color:#ABB2BF;">+</span><span style="color:#D19A66;">08</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">|                        v1|</span></span>
<span class="line"><span style="color:#ABB2BF;">+</span><span style="color:#7F848E;font-style:italic;">-----------------------------+--------------------------+</span></span>
<span class="line"><span style="color:#ABB2BF;">|</span><span style="color:#D19A66;">1970</span><span style="color:#ABB2BF;">-</span><span style="color:#D19A66;">01</span><span style="color:#ABB2BF;">-01T08:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">002</span><span style="color:#ABB2BF;">+</span><span style="color:#D19A66;">08</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">00</span><span style="color:#ABB2BF;">|                        \\\\|</span></span>
<span class="line"><span style="color:#ABB2BF;">+</span><span style="color:#7F848E;font-style:italic;">-----------------------------+--------------------------+</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;"># </span><span style="color:#C678DD;">select</span></span>
<span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> code </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sg1</span><span style="color:#ABB2BF;">.d1 </span><span style="color:#C678DD;">where</span><span style="color:#ABB2BF;"> code </span><span style="color:#C678DD;">in</span><span style="color:#ABB2BF;"> (</span><span style="color:#98C379;">&#39;string1&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;string2&#39;</span><span style="color:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Used in<code>LOAD</code> / <code>REMOVE</code> / <code>SETTLE</code> instructions to represent file path.</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#ABB2BF;"># </span><span style="color:#C678DD;">load</span></span>
<span class="line"><span style="color:#C678DD;">LOAD</span><span style="color:#98C379;"> &#39;examplePath&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;"># </span><span style="color:#C678DD;">remove</span></span>
<span class="line"><span style="color:#C678DD;">REMOVE</span><span style="color:#98C379;"> &#39;examplePath&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;"># SETTLE</span></span>
<span class="line"><span style="color:#ABB2BF;">SETTLE </span><span style="color:#98C379;">&#39;examplePath&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Password fields in user management statements</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#ABB2BF;"># write_pwd </span><span style="color:#C678DD;">is</span><span style="color:#ABB2BF;"> the </span><span style="color:#C678DD;">password</span></span>
<span class="line"><span style="color:#C678DD;">CREATE</span><span style="color:#C678DD;"> USER</span><span style="color:#61AFEF;"> ln_write_user</span><span style="color:#98C379;"> &#39;write_pwd&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Full Java class names in UDF and trigger management statements</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#ABB2BF;"># Trigger example. Full java class names </span><span style="color:#C678DD;">after</span><span style="color:#98C379;"> &#39;AS&#39;</span><span style="color:#ABB2BF;"> should be string literals.</span></span>
<span class="line"><span style="color:#C678DD;">CREATE</span><span style="color:#ABB2BF;"> TRIGGER </span><span style="color:#98C379;">\`alert-listener-sg1d1s1\`</span></span>
<span class="line"><span style="color:#C678DD;">AFTER</span><span style="color:#C678DD;"> INSERT</span></span>
<span class="line"><span style="color:#C678DD;">ON</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sg1</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">d1</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">s1</span></span>
<span class="line"><span style="color:#C678DD;">AS</span><span style="color:#98C379;"> &#39;org.apache.iotdb.db.engine.trigger.example.AlertListener&#39;</span></span>
<span class="line"><span style="color:#C678DD;">WITH</span><span style="color:#ABB2BF;"> (</span></span>
<span class="line"><span style="color:#98C379;">  &#39;lo&#39;</span><span style="color:#56B6C2;"> =</span><span style="color:#98C379;"> &#39;0&#39;</span><span style="color:#ABB2BF;">, </span></span>
<span class="line"><span style="color:#98C379;">  &#39;hi&#39;</span><span style="color:#56B6C2;"> =</span><span style="color:#98C379;"> &#39;100.0&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;"># UDF example. Full java class names </span><span style="color:#C678DD;">after</span><span style="color:#98C379;"> &#39;AS&#39;</span><span style="color:#ABB2BF;"> should be string literals.</span></span>
<span class="line"><span style="color:#C678DD;">CREATE</span><span style="color:#C678DD;"> FUNCTION</span><span style="color:#61AFEF;"> example</span><span style="color:#C678DD;"> AS</span><span style="color:#98C379;"> &#39;org.apache.iotdb.udf.UDTFExample&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>AS</code> function provided by IoTDB can assign an alias to time series selected in query. Alias can be constant(including string) or identifier.</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> s1 </span><span style="color:#C678DD;">as</span><span style="color:#98C379;"> &#39;temperature&#39;</span><span style="color:#ABB2BF;">, s2 </span><span style="color:#C678DD;">as</span><span style="color:#98C379;"> &#39;speed&#39;</span><span style="color:#C678DD;"> from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">ln</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wf01</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">wt01</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;"># Header of dataset</span></span>
<span class="line"><span style="color:#ABB2BF;">+</span><span style="color:#7F848E;font-style:italic;">-----------------------------+-----------|-----+</span></span>
<span class="line"><span style="color:#ABB2BF;">|                         </span><span style="color:#C678DD;">Time</span><span style="color:#ABB2BF;">|temperature|speed|</span></span>
<span class="line"><span style="color:#ABB2BF;">+</span><span style="color:#7F848E;font-style:italic;">-----------------------------+-----------|-----+</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>The key/value of an attribute can be String Literal and identifier, more details can be found at <strong>key-value pair</strong> part.</p></li></ul><h3 id="how-to-use-quotation-marks-in-string-literals" tabindex="-1"><a class="header-anchor" href="#how-to-use-quotation-marks-in-string-literals"><span>How to use quotation marks in String Literals</span></a></h3><p>There are several ways to include quote characters within a string:</p><ul><li><code>&#39;</code> inside a string quoted with <code>&quot;</code> needs no special treatment and need not be doubled or escaped. In the same way, <code>&quot;</code> inside a string quoted with <code>&#39;</code> needs no special treatment.</li><li>A <code>&#39;</code> inside a string quoted with <code>&#39;</code> may be written as <code>&#39;&#39;</code>.</li><li>A <code>&quot;</code> inside a string quoted with <code>&quot;</code> may be written as <code>&quot;&quot;</code>.</li></ul><p>The following examples demonstrate how quoting and escaping work:</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#98C379;">&#39;string&#39;</span><span style="color:#7F848E;font-style:italic;">  // string</span></span>
<span class="line"><span style="color:#98C379;">&#39;&quot;string&quot;&#39;</span><span style="color:#7F848E;font-style:italic;">  // &quot;string&quot;</span></span>
<span class="line"><span style="color:#98C379;">&#39;&quot;&quot;string&quot;&quot;&#39;</span><span style="color:#7F848E;font-style:italic;">  // &quot;&quot;string&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">&#39;&#39;&#39;string&#39;</span><span style="color:#7F848E;font-style:italic;">  // &#39;string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">&quot;string&quot;</span><span style="color:#7F848E;font-style:italic;"> // string</span></span>
<span class="line"><span style="color:#98C379;">&quot;&#39;string&#39;&quot;</span><span style="color:#7F848E;font-style:italic;">  // &#39;string&#39;</span></span>
<span class="line"><span style="color:#98C379;">&quot;&#39;&#39;string&#39;&#39;&quot;</span><span style="color:#7F848E;font-style:italic;">  // &#39;&#39;string&#39;&#39;</span></span>
<span class="line"><span style="color:#98C379;">&quot;&quot;&quot;string&quot;</span><span style="color:#7F848E;font-style:italic;">  // &quot;string</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="numeric-literals" tabindex="-1"><a class="header-anchor" href="#numeric-literals"><span>Numeric Literals</span></a></h2><p>Number literals include integer (exact-value) literals and floating-point (approximate-value) literals.</p><p>Integers are represented as a sequence of digits. Numbers may be preceded by <code>-</code> or <code>+</code> to indicate a negative or positive value, respectively. Examples: <code>1</code>, <code>-1</code>.</p><p>Numbers with fractional part or represented in scientific notation with a mantissa and exponent are approximate-value numbers. Examples: <code>.1</code>, <code>3.14</code>, <code>-2.23</code>, <code>+1.70</code>, <code>1.2E3</code>, <code>1.2E-3</code>, <code>-1.2E3</code>, <code>-1.2E-3</code>.</p><p>The <code>INT32</code> and <code>INT64</code> data types are integer types and calculations are exact.</p><p>The <code>FLOAT</code> and <code>DOUBLE</code> data types are floating-point types and calculations are approximate.</p><p>An integer may be used in floating-point context; it is interpreted as the equivalent floating-point number.</p><h2 id="timestamp-literals" tabindex="-1"><a class="header-anchor" href="#timestamp-literals"><span>Timestamp Literals</span></a></h2>`,21)),o("p",null,[s[1]||(s[1]=e("The timestamp is the time point at which data is produced. It includes absolute timestamps and relative timestamps in IoTDB. For information about timestamp support in IoTDB, see ")),i(n,{to:"/UserGuide/V1.0.x/Data-Concept/Data-Type.html"},{default:r(()=>s[0]||(s[0]=[e("Data Type Doc")])),_:1}),s[2]||(s[2]=e("."))]),s[4]||(s[4]=a('<p>Specially, <code>NOW()</code> represents a constant timestamp that indicates the system time at which the statement began to execute.</p><h2 id="boolean-literals" tabindex="-1"><a class="header-anchor" href="#boolean-literals"><span>Boolean Literals</span></a></h2><p>The constants <code>TRUE</code> and <code>FALSE</code> evaluate to 1 and 0, respectively. The constant names can be written in any lettercase.</p><h2 id="null-values" tabindex="-1"><a class="header-anchor" href="#null-values"><span>NULL Values</span></a></h2><p>The <code>NULL</code> value means “no data.” <code>NULL</code> can be written in any lettercase.</p>',5))])}const m=l(d,[["render",u],["__file","Literal-Values.html.vue"]]),v=JSON.parse('{"path":"/UserGuide/V1.0.x/Syntax-Conventions/Literal-Values.html","title":"Literal Values","lang":"en-US","frontmatter":{"description":"Literal Values This section describes how to write literal values in IoTDB. These include strings, numbers, timestamp values, boolean values, and NULL. String Literals in IoTDB,...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/Syntax-Conventions/Literal-Values.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.0.x/Syntax-Conventions/Literal-Values.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Literal Values"}],["meta",{"property":"og:description","content":"Literal Values This section describes how to write literal values in IoTDB. These include strings, numbers, timestamp values, boolean values, and NULL. String Literals in IoTDB,..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Literal Values\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"String Literals","slug":"string-literals","link":"#string-literals","children":[{"level":3,"title":"Usage Scenarios","slug":"usage-scenarios","link":"#usage-scenarios","children":[]},{"level":3,"title":"How to use quotation marks in String Literals","slug":"how-to-use-quotation-marks-in-string-literals","link":"#how-to-use-quotation-marks-in-string-literals","children":[]}]},{"level":2,"title":"Numeric Literals","slug":"numeric-literals","link":"#numeric-literals","children":[]},{"level":2,"title":"Timestamp Literals","slug":"timestamp-literals","link":"#timestamp-literals","children":[]},{"level":2,"title":"Boolean Literals","slug":"boolean-literals","link":"#boolean-literals","children":[]},{"level":2,"title":"NULL Values","slug":"null-values","link":"#null-values","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","username":"CritasWang","email":"critas@outlook.com","commits":1,"url":"https://github.com/CritasWang"}]},"readingTime":{"minutes":2.3,"words":689},"filePathRelative":"UserGuide/V1.0.x/Syntax-Conventions/Literal-Values.md","localizedDate":"July 10, 2023","autoDesc":true}');export{m as comp,v as data};
