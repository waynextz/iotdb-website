import{_ as n,c as e,b as a,o as i}from"./app-C-0rb--l.js";const l={};function p(r,s){return i(),e("div",null,s[0]||(s[0]=[a(`<h2 id="序列发现" tabindex="-1"><a class="header-anchor" href="#序列发现"><span>序列发现</span></a></h2><h3 id="consecutivesequences" tabindex="-1"><a class="header-anchor" href="#consecutivesequences"><span>ConsecutiveSequences</span></a></h3><h4 id="函数简介" tabindex="-1"><a class="header-anchor" href="#函数简介"><span>函数简介</span></a></h4><p>本函数用于在多维严格等间隔数据中发现局部最长连续子序列。</p><p>严格等间隔数据是指数据的时间间隔是严格相等的，允许存在数据缺失（包括行缺失和值缺失），但不允许存在数据冗余和时间戳偏移。</p><p>连续子序列是指严格按照标准时间间隔等距排布，不存在任何数据缺失的子序列。如果某个连续子序列不是任何连续子序列的真子序列，那么它是局部最长的。</p><p><strong>函数名：</strong> CONSECUTIVESEQUENCES</p><p><strong>输入序列：</strong> 支持多个输入序列，类型可以是任意的，但要满足严格等间隔的要求。</p><p><strong>参数：</strong></p><ul><li><code>gap</code>：标准时间间隔，是一个有单位的正数。目前支持五种单位，分别是&#39;ms&#39;（毫秒）、&#39;s&#39;（秒）、&#39;m&#39;（分钟）、&#39;h&#39;（小时）和&#39;d&#39;（天）。在缺省情况下，函数会利用众数估计标准时间间隔。</li></ul><p><strong>输出序列：</strong> 输出单个序列，类型为 INT32。输出序列中的每一个数据点对应一个局部最长连续子序列，时间戳为子序列的起始时刻，值为子序列包含的数据点个数。</p><p><strong>提示：</strong> 对于不符合要求的输入，本函数不对输出做任何保证。</p><h4 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h4><h5 id="手动指定标准时间间隔" tabindex="-1"><a class="header-anchor" href="#手动指定标准时间间隔"><span>手动指定标准时间间隔</span></a></h5><p>本函数可以通过<code>gap</code>参数手动指定标准时间间隔。需要注意的是，错误的参数设置会导致输出产生严重错误。</p><p>输入序列：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>+-----------------------------+---------------+---------------+</span></span>
<span class="line"><span>|                         Time|root.test.d1.s1|root.test.d1.s2|</span></span>
<span class="line"><span>+-----------------------------+---------------+---------------+</span></span>
<span class="line"><span>|2020-01-01T00:00:00.000+08:00|            1.0|            1.0|</span></span>
<span class="line"><span>|2020-01-01T00:05:00.000+08:00|            1.0|            1.0|</span></span>
<span class="line"><span>|2020-01-01T00:10:00.000+08:00|            1.0|            1.0|</span></span>
<span class="line"><span>|2020-01-01T00:20:00.000+08:00|            1.0|            1.0|</span></span>
<span class="line"><span>|2020-01-01T00:25:00.000+08:00|            1.0|            1.0|</span></span>
<span class="line"><span>|2020-01-01T00:30:00.000+08:00|            1.0|            1.0|</span></span>
<span class="line"><span>|2020-01-01T00:35:00.000+08:00|            1.0|            1.0|</span></span>
<span class="line"><span>|2020-01-01T00:40:00.000+08:00|            1.0|           null|</span></span>
<span class="line"><span>|2020-01-01T00:45:00.000+08:00|            1.0|            1.0|</span></span>
<span class="line"><span>|2020-01-01T00:50:00.000+08:00|            1.0|            1.0|</span></span>
<span class="line"><span>+-----------------------------+---------------+---------------+</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用于查询的SQL语句：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> consecutivesequences(s1,s2,</span><span style="color:#98C379;">&#39;gap&#39;</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&#39;5m&#39;</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">test</span><span style="color:#ABB2BF;">.d1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出序列：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>+-----------------------------+------------------------------------------------------------------+</span></span>
<span class="line"><span>|                         Time|consecutivesequences(root.test.d1.s1, root.test.d1.s2, &quot;gap&quot;=&quot;5m&quot;)|</span></span>
<span class="line"><span>+-----------------------------+------------------------------------------------------------------+</span></span>
<span class="line"><span>|2020-01-01T00:00:00.000+08:00|                                                                 3|</span></span>
<span class="line"><span>|2020-01-01T00:20:00.000+08:00|                                                                 4|</span></span>
<span class="line"><span>|2020-01-01T00:45:00.000+08:00|                                                                 2|</span></span>
<span class="line"><span>+-----------------------------+------------------------------------------------------------------+</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="自动估计标准时间间隔" tabindex="-1"><a class="header-anchor" href="#自动估计标准时间间隔"><span>自动估计标准时间间隔</span></a></h5><p>当<code>gap</code>参数缺省时，本函数可以利用众数估计标准时间间隔，得到同样的结果。因此，这种用法更受推荐。</p><p>输入序列同上，用于查询的SQL语句如下：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> consecutivesequences(s1,s2) </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">test</span><span style="color:#ABB2BF;">.d1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出序列：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>+-----------------------------+------------------------------------------------------+</span></span>
<span class="line"><span>|                         Time|consecutivesequences(root.test.d1.s1, root.test.d1.s2)|</span></span>
<span class="line"><span>+-----------------------------+------------------------------------------------------+</span></span>
<span class="line"><span>|2020-01-01T00:00:00.000+08:00|                                                     3|</span></span>
<span class="line"><span>|2020-01-01T00:20:00.000+08:00|                                                     4|</span></span>
<span class="line"><span>|2020-01-01T00:45:00.000+08:00|                                                     2|</span></span>
<span class="line"><span>+-----------------------------+------------------------------------------------------+</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="consecutivewindows" tabindex="-1"><a class="header-anchor" href="#consecutivewindows"><span>ConsecutiveWindows</span></a></h3><h4 id="函数简介-1" tabindex="-1"><a class="header-anchor" href="#函数简介-1"><span>函数简介</span></a></h4><p>本函数用于在多维严格等间隔数据中发现指定长度的连续窗口。</p><p>严格等间隔数据是指数据的时间间隔是严格相等的，允许存在数据缺失（包括行缺失和值缺失），但不允许存在数据冗余和时间戳偏移。</p><p>连续窗口是指严格按照标准时间间隔等距排布，不存在任何数据缺失的子序列。</p><p><strong>函数名：</strong> CONSECUTIVEWINDOWS</p><p><strong>输入序列：</strong> 支持多个输入序列，类型可以是任意的，但要满足严格等间隔的要求。</p><p><strong>参数：</strong></p><ul><li><code>gap</code>：标准时间间隔，是一个有单位的正数。目前支持五种单位，分别是 &#39;ms&#39;（毫秒）、&#39;s&#39;（秒）、&#39;m&#39;（分钟）、&#39;h&#39;（小时）和&#39;d&#39;（天）。在缺省情况下，函数会利用众数估计标准时间间隔。</li><li><code>length</code>：序列长度，是一个有单位的正数。目前支持五种单位，分别是 &#39;ms&#39;（毫秒）、&#39;s&#39;（秒）、&#39;m&#39;（分钟）、&#39;h&#39;（小时）和&#39;d&#39;（天）。该参数不允许缺省。</li></ul><p><strong>输出序列：</strong> 输出单个序列，类型为 INT32。输出序列中的每一个数据点对应一个指定长度连续子序列，时间戳为子序列的起始时刻，值为子序列包含的数据点个数。</p><p><strong>提示：</strong> 对于不符合要求的输入，本函数不对输出做任何保证。</p><h4 id="使用示例-1" tabindex="-1"><a class="header-anchor" href="#使用示例-1"><span>使用示例</span></a></h4><p>输入序列：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>+-----------------------------+---------------+---------------+</span></span>
<span class="line"><span>|                         Time|root.test.d1.s1|root.test.d1.s2|</span></span>
<span class="line"><span>+-----------------------------+---------------+---------------+</span></span>
<span class="line"><span>|2020-01-01T00:00:00.000+08:00|            1.0|            1.0|</span></span>
<span class="line"><span>|2020-01-01T00:05:00.000+08:00|            1.0|            1.0|</span></span>
<span class="line"><span>|2020-01-01T00:10:00.000+08:00|            1.0|            1.0|</span></span>
<span class="line"><span>|2020-01-01T00:20:00.000+08:00|            1.0|            1.0|</span></span>
<span class="line"><span>|2020-01-01T00:25:00.000+08:00|            1.0|            1.0|</span></span>
<span class="line"><span>|2020-01-01T00:30:00.000+08:00|            1.0|            1.0|</span></span>
<span class="line"><span>|2020-01-01T00:35:00.000+08:00|            1.0|            1.0|</span></span>
<span class="line"><span>|2020-01-01T00:40:00.000+08:00|            1.0|           null|</span></span>
<span class="line"><span>|2020-01-01T00:45:00.000+08:00|            1.0|            1.0|</span></span>
<span class="line"><span>|2020-01-01T00:50:00.000+08:00|            1.0|            1.0|</span></span>
<span class="line"><span>+-----------------------------+---------------+---------------+</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用于查询的SQL语句：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> consecutivewindows(s1,s2,</span><span style="color:#98C379;">&#39;length&#39;</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&#39;10m&#39;</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">from</span><span style="color:#D19A66;"> root</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">test</span><span style="color:#ABB2BF;">.d1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出序列：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>+-----------------------------+--------------------------------------------------------------------+</span></span>
<span class="line"><span>|                         Time|consecutivewindows(root.test.d1.s1, root.test.d1.s2, &quot;length&quot;=&quot;10m&quot;)|</span></span>
<span class="line"><span>+-----------------------------+--------------------------------------------------------------------+</span></span>
<span class="line"><span>|2020-01-01T00:00:00.000+08:00|                                                                   3|</span></span>
<span class="line"><span>|2020-01-01T00:20:00.000+08:00|                                                                   3|</span></span>
<span class="line"><span>|2020-01-01T00:25:00.000+08:00|                                                                   3|</span></span>
<span class="line"><span>+-----------------------------+--------------------------------------------------------------------+</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,45)]))}const t=n(l,[["render",p],["__file","Series-Discovery.html.vue"]]),o=JSON.parse('{"path":"/zh/UserGuide/V0.13.x/UDF-Library/Series-Discovery.html","title":"","lang":"zh-CN","frontmatter":{"description":"序列发现 ConsecutiveSequences 函数简介 本函数用于在多维严格等间隔数据中发现局部最长连续子序列。 严格等间隔数据是指数据的时间间隔是严格相等的，允许存在数据缺失（包括行缺失和值缺失），但不允许存在数据冗余和时间戳偏移。 连续子序列是指严格按照标准时间间隔等距排布，不存在任何数据缺失的子序列。如果某个连续子序列不是任何连续子序列的真...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V0.13.x/UDF-Library/Series-Discovery.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/UDF-Library/Series-Discovery.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"序列发现 ConsecutiveSequences 函数简介 本函数用于在多维严格等间隔数据中发现局部最长连续子序列。 严格等间隔数据是指数据的时间间隔是严格相等的，允许存在数据缺失（包括行缺失和值缺失），但不允许存在数据冗余和时间戳偏移。 连续子序列是指严格按照标准时间间隔等距排布，不存在任何数据缺失的子序列。如果某个连续子序列不是任何连续子序列的真..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"序列发现","slug":"序列发现","link":"#序列发现","children":[{"level":3,"title":"ConsecutiveSequences","slug":"consecutivesequences","link":"#consecutivesequences","children":[]},{"level":3,"title":"ConsecutiveWindows","slug":"consecutivewindows","link":"#consecutivewindows","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","username":"CritasWang","email":"critas@outlook.com","commits":1,"url":"https://github.com/CritasWang"}]},"readingTime":{"minutes":4.26,"words":1278},"filePathRelative":"zh/UserGuide/V0.13.x/UDF-Library/Series-Discovery.md","localizedDate":"2023年7月10日","autoDesc":true}');export{t as comp,o as data};
