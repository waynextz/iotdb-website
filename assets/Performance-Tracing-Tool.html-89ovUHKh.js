import{_ as a,c as n,b as s,o as i}from"./app-CLygX6ac.js";const t={};function l(r,e){return i(),n("div",null,e[0]||(e[0]=[s(`<h2 id="性能追踪工具" tabindex="-1"><a class="header-anchor" href="#性能追踪工具"><span>性能追踪工具</span></a></h2><blockquote><p>注意：0.13及以上版本中将不再支持0.12中的 <code>TRACING ON/OFF</code> 。</p></blockquote><p>IoTDB 支持使用 <code>TRACING</code> 关键词对查询语句进行性能追踪。用户可以分析查询语句执行中存在的潜在性能问题。</p><p>性能追踪的结果包括：</p><ol><li>执行过程中各个阶段的累积耗时。</li><li>与性能分析相关的统计信息。对于查询语句，包括查询的时间序列数、涉及访问的 Tsfile 文件数、需要扫描的 chunk 总数以及平均每个 chunk 包含的数据点个数、读取的 Page 总数以及其中乱序 Page 的个数。</li></ol><p><strong>示例：</strong></p><p>例如执行 <code>tracing select * from root</code>，输出结果如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>Tracing Activties:</span></span>
<span class="line"><span>+------------------------------------------------------+------------+</span></span>
<span class="line"><span>|                                              Activity|Elapsed Time|</span></span>
<span class="line"><span>+------------------------------------------------------+------------+</span></span>
<span class="line"><span>|Start to execute statement: tracing select * from root|           0|</span></span>
<span class="line"><span>|                            Parse SQL to physical plan|           4|</span></span>
<span class="line"><span>|                              Create and cache dataset|          16|</span></span>
<span class="line"><span>|                              * Num of series paths: 3|            |</span></span>
<span class="line"><span>|                       * Num of sequence files read: 2|            |</span></span>
<span class="line"><span>|                     * Num of unsequence files read: 1|            |</span></span>
<span class="line"><span>|        * Num of sequence chunks: 6, avg points: 100.0|            |</span></span>
<span class="line"><span>|      * Num of unsequence chunks: 3, avg points: 100.0|            |</span></span>
<span class="line"><span>|         * Num of Pages: 9, overlapped pages: 0 (0.0%)|            |</span></span>
<span class="line"><span>|                                      Request complete|          20|</span></span>
<span class="line"><span>+------------------------------------------------------+------------+</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8)]))}const c=a(t,[["render",l],["__file","Performance-Tracing-Tool.html.vue"]]),p=JSON.parse('{"path":"/zh/UserGuide/V0.13.x/Query-Data/Performance-Tracing-Tool.html","title":"","lang":"zh-CN","frontmatter":{"description":"性能追踪工具 注意：0.13及以上版本中将不再支持0.12中的 TRACING ON/OFF 。 IoTDB 支持使用 TRACING 关键词对查询语句进行性能追踪。用户可以分析查询语句执行中存在的潜在性能问题。 性能追踪的结果包括： 执行过程中各个阶段的累积耗时。 与性能分析相关的统计信息。对于查询语句，包括查询的时间序列数、涉及访问的 Tsfile...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V0.13.x/Query-Data/Performance-Tracing-Tool.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Query-Data/Performance-Tracing-Tool.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"性能追踪工具 注意：0.13及以上版本中将不再支持0.12中的 TRACING ON/OFF 。 IoTDB 支持使用 TRACING 关键词对查询语句进行性能追踪。用户可以分析查询语句执行中存在的潜在性能问题。 性能追踪的结果包括： 执行过程中各个阶段的累积耗时。 与性能分析相关的统计信息。对于查询语句，包括查询的时间序列数、涉及访问的 Tsfile..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"性能追踪工具","slug":"性能追踪工具","link":"#性能追踪工具","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","username":"CritasWang","email":"critas@outlook.com","commits":1,"url":"https://github.com/CritasWang"}]},"readingTime":{"minutes":1.22,"words":367},"filePathRelative":"zh/UserGuide/V0.13.x/Query-Data/Performance-Tracing-Tool.md","localizedDate":"2023年7月10日","autoDesc":true}');export{c as comp,p as data};
