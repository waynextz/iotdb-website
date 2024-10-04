import{_ as s,c as e,b as n,o as t}from"./app-W3EENNaa.js";const r={};function o(i,a){return t(),e("div",null,a[0]||(a[0]=[n(`<h1 id="data-archiving" tabindex="-1"><a class="header-anchor" href="#data-archiving"><span>Data Archiving</span></a></h1><p>The data archiving tools consist of 5 Cli commands: <code>set</code>, <code>cancel</code>, <code>pause</code>, <code>continue</code>, and <code>show</code>. Users may use<br> archiving tools to create archiving tasks, these archiving tasks start at the user specified date, and archives expired<br> data (timestamp before expire time) into a target directory specified by user, the user can then perform other<br> operations such as <code>pause</code> on the tasks.</p><h2 id="sql-statements" tabindex="-1"><a class="header-anchor" href="#sql-statements"><span>SQL statements</span></a></h2><h3 id="show-archiving-tasks" tabindex="-1"><a class="header-anchor" href="#show-archiving-tasks"><span>Show Archiving Tasks</span></a></h3><p>Show the data archiving tasks.</p><h4 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax"><span>Syntax</span></a></h4><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">SHOW</span> ARCHIVING</span>
<span class="line"><span class="token keyword">SHOW</span> <span class="token keyword">ALL</span> ARCHIVING</span>
<span class="line"><span class="token keyword">SHOW</span> ARCHIVING <span class="token keyword">ON</span> <span class="token operator">&lt;</span>storage_group<span class="token operator">&gt;</span></span>
<span class="line"><span class="token keyword">SHOW</span> <span class="token keyword">ALL</span> ARCHIVING <span class="token keyword">ON</span> <span class="token operator">&lt;</span>storage_group<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>&lt;storage_group&gt;</code> specifies the storage group to show archiving task on.</li><li><code>all</code> By default, only tasks in the READY, RUNNING, and PAUSED states are returned. You can view tasks in other states by adding the all parameter.</li></ul><h4 id="example-result" tabindex="-1"><a class="header-anchor" href="#example-result"><span>Example Result</span></a></h4><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token operator">+</span><span class="token comment">-------+---------------------------+-------------+------+---------------------------+---------------+----------------+</span></span>
<span class="line"><span class="token operator">|</span>task id<span class="token operator">|</span>                submit <span class="token keyword">time</span><span class="token operator">|</span>storage <span class="token keyword">group</span><span class="token operator">|</span><span class="token keyword">status</span><span class="token operator">|</span>                 <span class="token keyword">start</span> <span class="token keyword">time</span><span class="token operator">|</span>expire <span class="token keyword">time</span><span class="token punctuation">(</span>ms<span class="token punctuation">)</span><span class="token operator">|</span>target directory<span class="token operator">|</span></span>
<span class="line"><span class="token operator">+</span><span class="token comment">-------+---------------------------+-------------+------+---------------------------+---------------+----------------+</span></span>
<span class="line"><span class="token operator">|</span>      <span class="token number">0</span><span class="token operator">|</span><span class="token number">2022</span><span class="token operator">-</span><span class="token number">1</span><span class="token operator">-</span><span class="token number">1</span>T00:<span class="token number">00</span>:<span class="token number">00.000</span><span class="token operator">+</span><span class="token number">08</span>:<span class="token number">00</span><span class="token operator">|</span>      root<span class="token punctuation">.</span>ln<span class="token operator">|</span> READY<span class="token operator">|</span><span class="token number">2023</span><span class="token operator">-</span><span class="token number">1</span><span class="token operator">-</span><span class="token number">1</span>T00:<span class="token number">00</span>:<span class="token number">00.000</span><span class="token operator">+</span><span class="token number">08</span>:<span class="token number">00</span><span class="token operator">|</span>         <span class="token number">360000</span><span class="token operator">|</span>            <span class="token operator">/</span>tmp<span class="token operator">|</span></span>
<span class="line"><span class="token operator">+</span><span class="token comment">-------+---------------------------+-------------+------+---------------------------+---------------+----------------+</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="set-data-archiving-task" tabindex="-1"><a class="header-anchor" href="#set-data-archiving-task"><span>Set Data Archiving Task</span></a></h3><p>User submit data archiving task.</p><h4 id="syntax-1" tabindex="-1"><a class="header-anchor" href="#syntax-1"><span>Syntax</span></a></h4><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">SET</span> ARCHIVING <span class="token keyword">TO</span> <span class="token operator">&lt;</span>storage_group<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>start_time<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>ttl<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>target_dir<span class="token operator">&gt;</span></span>
<span class="line"><span class="token keyword">SET</span> ARCHIVING <span class="token keyword">TO</span> storage_group<span class="token operator">=</span><span class="token operator">&lt;</span>storage_group<span class="token operator">&gt;</span> start_time<span class="token operator">=</span><span class="token operator">&lt;</span>start_time<span class="token operator">&gt;</span> ttl<span class="token operator">=</span><span class="token operator">&lt;</span>ttl<span class="token operator">&gt;</span> target_dir<span class="token operator">=</span><span class="token operator">&lt;</span>target_dir<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>&lt;storage_group&gt;</code> specifies the storage group to show archiving task on.</li><li><code>&lt;start_time&gt;</code> specifies the date to start the archiving task.</li><li><code>&lt;ttl&gt;</code> specifies the expire time for task, data with <code>timestamp &lt; now - ttl</code> are archived, units in milliseconds.</li><li><code>&lt;target_dir&gt;</code> specifies the target directory to move the archived data, uses string for the path.</li></ul><h4 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h4><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">SET</span> ARCHIVING <span class="token keyword">TO</span> storage_group<span class="token operator">=</span>root<span class="token punctuation">.</span>ln start_time<span class="token operator">=</span><span class="token number">2023</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span> ttl<span class="token operator">=</span><span class="token number">360000</span> target_dir<span class="token operator">=</span><span class="token string">&quot;/tmp&quot;</span></span>
<span class="line"><span class="token keyword">SET</span> ARCHIVING <span class="token keyword">TO</span> root<span class="token punctuation">.</span>ln <span class="token number">2023</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span> <span class="token number">360000</span> <span class="token string">&quot;/tmp&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="tips" tabindex="-1"><a class="header-anchor" href="#tips"><span>Tips</span></a></h4><ul><li><code>A=</code> (such as <code>storage_group=</code>) in the Cli commands can be omitted, the order after omission must be the same as the<br> above.</li><li>The start time is in ISO 8601 format, so information such as hour/minute/second can be omitted, and it is set to 0 by<br> default after being omitted.</li><li><code>SET</code> command is able to submit migration tasks for all storage groups by parameters like <code>root.ln.**</code>.</li></ul><h3 id="cancel-archiving-task" tabindex="-1"><a class="header-anchor" href="#cancel-archiving-task"><span>Cancel Archiving Task</span></a></h3><p>Stop and delete the data archiving task. (Note: data that has been archived will not be put back into the database)</p><h4 id="syntax-2" tabindex="-1"><a class="header-anchor" href="#syntax-2"><span>Syntax</span></a></h4><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line">CANCEL ARCHIVING <span class="token operator">&lt;</span>task_id<span class="token operator">&gt;</span></span>
<span class="line">CANCEL ARCHIVING <span class="token keyword">ON</span> <span class="token operator">&lt;</span>storage_group<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>&lt;task_id&gt;</code> specifies the id of archiving task to cancel.</li><li><code>&lt;storage_group&gt;</code> specifies the storage group to cancel archiving task, if many exist cancel the one with the lowest<br> start time.</li></ul><h4 id="example-1" tabindex="-1"><a class="header-anchor" href="#example-1"><span>Example</span></a></h4><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line">CANCEL ARCHIVING <span class="token number">0</span></span>
<span class="line">CANCEL ARCHIVING <span class="token keyword">ON</span> root<span class="token punctuation">.</span>ln</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pause-archiving-task" tabindex="-1"><a class="header-anchor" href="#pause-archiving-task"><span>Pause Archiving Task</span></a></h3><p>Suspend the data migration task.</p><h4 id="syntax-3" tabindex="-1"><a class="header-anchor" href="#syntax-3"><span>Syntax</span></a></h4><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line">PAUSE ARCHIVING <span class="token operator">&lt;</span>task_id<span class="token operator">&gt;</span></span>
<span class="line">PAUSE ARCHIVING <span class="token keyword">ON</span> <span class="token operator">&lt;</span>storage_group<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>&lt;task_id&gt;</code> specifies the id of archiving task to pause.</li><li><code>&lt;storage_group&gt;</code> specifies the storage group to pause archiving task, if many exist cancel the one with the lowest<br> start time.</li></ul><h4 id="example-2" tabindex="-1"><a class="header-anchor" href="#example-2"><span>Example</span></a></h4><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line">PAUSE ARCHIVING <span class="token number">0</span></span>
<span class="line">PAUSE ARCHIVING <span class="token keyword">ON</span> root<span class="token punctuation">.</span>ln</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="resume-archiving-task" tabindex="-1"><a class="header-anchor" href="#resume-archiving-task"><span>Resume Archiving Task</span></a></h3><p>Resume suspended data archiving tasks.</p><h4 id="syntax-4" tabindex="-1"><a class="header-anchor" href="#syntax-4"><span>Syntax</span></a></h4><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line">RESUME ARCHIVING <span class="token operator">&lt;</span>task_id<span class="token operator">&gt;</span></span>
<span class="line">RESUME ARCHIVING <span class="token keyword">ON</span> <span class="token operator">&lt;</span>storage_group<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>&lt;task_id&gt;</code> specifies the id of archiving task to resume.</li><li><code>&lt;storage_group&gt;</code> specifies the storage group to resume archiving task, if many exist cancel the one with the lowest<br> start time.</li></ul><h4 id="example-3" tabindex="-1"><a class="header-anchor" href="#example-3"><span>Example</span></a></h4><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line">RESUME ARCHIVING <span class="token number">0</span></span>
<span class="line">RESUME ARCHIVING <span class="token keyword">ON</span> root<span class="token punctuation">.</span>ln</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="system-parameter-configuration" tabindex="-1"><a class="header-anchor" href="#system-parameter-configuration"><span>System Parameter Configuration</span></a></h2><table><thead><tr><th style="text-align:left;">Name</th><th>Description</th><th>Data Type</th><th>Default Value</th></tr></thead><tbody><tr><td style="text-align:left;"><code>archiving_thread_num</code></td><td>The number of threads in the thread pool that executes archiving tasks.</td><td>int</td><td>2</td></tr></tbody></table>`,42)]))}const p=s(r,[["render",o],["__file","Archiving.html.vue"]]),c=JSON.parse('{"path":"/UserGuide/V0.13.x/Process-Data/Archiving.html","title":"Data Archiving","lang":"en-US","frontmatter":{"description":"Data Archiving The data archiving tools consist of 5 Cli commands: set, cancel, pause, continue, and show. Users may use archiving tools to create archiving tasks, these archivi...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Process-Data/Archiving.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V0.13.x/Process-Data/Archiving.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Data Archiving"}],["meta",{"property":"og:description","content":"Data Archiving The data archiving tools consist of 5 Cli commands: set, cancel, pause, continue, and show. Users may use archiving tools to create archiving tasks, these archivi..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Data Archiving\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"SQL statements","slug":"sql-statements","link":"#sql-statements","children":[{"level":3,"title":"Show Archiving Tasks","slug":"show-archiving-tasks","link":"#show-archiving-tasks","children":[]},{"level":3,"title":"Set Data Archiving Task","slug":"set-data-archiving-task","link":"#set-data-archiving-task","children":[]},{"level":3,"title":"Cancel Archiving Task","slug":"cancel-archiving-task","link":"#cancel-archiving-task","children":[]},{"level":3,"title":"Pause Archiving Task","slug":"pause-archiving-task","link":"#pause-archiving-task","children":[]},{"level":3,"title":"Resume Archiving Task","slug":"resume-archiving-task","link":"#resume-archiving-task","children":[]}]},{"level":2,"title":"System Parameter Configuration","slug":"system-parameter-configuration","link":"#system-parameter-configuration","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":2.17,"words":652},"filePathRelative":"UserGuide/V0.13.x/Process-Data/Archiving.md","localizedDate":"July 10, 2023","autoDesc":true}');export{p as comp,c as data};
