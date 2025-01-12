import{_ as o,c as s,b as a,d as t,e as n,a as r,f as d,r as c,o as l}from"./app-CNiZnG3t.js";const p={};function m(u,e){const i=c("RouteLink");return l(),s("div",null,[e[3]||(e[3]=a(`<h1 id="encoding-and-compression" tabindex="-1"><a class="header-anchor" href="#encoding-and-compression"><span>Encoding and Compression</span></a></h1><h2 id="encoding-methods" tabindex="-1"><a class="header-anchor" href="#encoding-methods"><span>Encoding Methods</span></a></h2><p>To improve the efficiency of data storage, it is necessary to encode data during data writing, thereby reducing the amount of disk space used. In the process of writing and reading data, the amount of data involved in the I/O operations can be reduced to improve performance. IoTDB supports the following encoding methods for different data types:</p><ul><li>PLAIN</li></ul><p>PLAIN encoding, the default encoding mode, i.e, no encoding, supports multiple data types. It has high compression and decompression efficiency while suffering from low space storage efficiency.</p><ul><li>TS_2DIFF</li></ul><p>Second-order differential encoding is more suitable for encoding monotonically increasing or decreasing sequence data, and is not recommended for sequence data with large fluctuations.</p><ul><li>RLE</li></ul><p>Run-length encoding is suitable for storing sequence with continuous values, and is not recommended for sequence data with most of the time different values.</p><p>Run-length encoding can also be used to encode floating-point numbers, while it is necessary to specify reserved decimal digits (MAX_POINT_NUMBER) when creating time series. It is more suitable to store sequence data where floating-point values appear continuously, monotonously increasing or decreasing, and it is not suitable for storing sequence data with high precision requirements after the decimal point or with large fluctuations.</p><blockquote><p>TS_2DIFF and RLE have precision limit for data type of float and double. By default, two decimal places are reserved. GORILLA is recommended.</p></blockquote><ul><li>GORILLA</li></ul><p>GORILLA encoding is lossless. It is more suitable for numerical sequence with similar values and is not recommended for sequence data with large fluctuations.</p><p>Currently, there are two versions of GORILLA encoding implementation, it is recommended to use <code>GORILLA</code> instead of <code>GORILLA_V1</code> (deprecated).</p><p>Usage restrictions: When using GORILLA to encode INT32 data, you need to ensure that there is no data point with the value <code>Integer.MIN_VALUE</code> in the sequence. When using GORILLA to encode INT64 data, you need to ensure that there is no data point with the value <code>Long.MIN_VALUE</code> in the sequence.</p><ul><li>DICTIONARY</li></ul><p>DICTIONARY encoding is lossless. It is suitable for TEXT data with low cardinality (i.e. low number of distinct values). It is not recommended to use it for high-cardinality data.</p><ul><li>ZIGZAG</li></ul><p>ZIGZAG encoding maps signed integers to unsigned integers so that numbers with a small absolute value (for instance, -1) have a small variant encoded value too. It does this in a way that &quot;zig-zags&quot; back and forth through the positive and negative integers.</p><ul><li>CHIMP</li></ul><p>CHIMP encoding is lossless. It is the state-of-the-art compression algorithm for streaming floating point data, providing impressive savings compared to earlier approaches. It is suitable for any numerical sequence with similar values and works best for sequence data without large fluctuations and/or random noise.</p><p>Usage restrictions: When using CHIMP to encode INT32 data, you need to ensure that there is no data point with the value <code>Integer.MIN_VALUE</code> in the sequence. When using CHIMP to encode INT64 data, you need to ensure that there is no data point with the value <code>Long.MIN_VALUE</code> in the sequence.</p><ul><li>SPRINTZ</li></ul><p>SPRINTZ coding is a type of lossless data compression technique that involves predicting the original time series data, applying Zigzag encoding, bit-packing encoding, and run-length encoding. SPRINTZ encoding is effective for time series data with small absolute differences between values. However, it may not be as effective for time series data with large differences between values, indicating large fluctuation.</p><ul><li>RLBE</li></ul><p>RLBE is a lossless encoding that combines the ideas of differential encoding, bit-packing encoding, run-length encoding, Fibonacci encoding and concatenation. RLBE encoding is suitable for time series data with increasing and small increment value, and is not suitable for time series data with large fluctuation.</p><h3 id="correspondence-between-data-type-and-encoding" tabindex="-1"><a class="header-anchor" href="#correspondence-between-data-type-and-encoding"><span>Correspondence between data type and encoding</span></a></h3><p>The five encodings described in the previous sections are applicable to different data types. If the correspondence is wrong, the time series cannot be created correctly.</p><p>The correspondence between the data type and its supported encodings is summarized in the Table below.</p><table><thead><tr><th><strong>Data Type</strong></th><th><strong>Recommended Encoding (default)</strong></th><th><strong>Supported Encoding</strong></th></tr></thead><tbody><tr><td>BOOLEAN</td><td>RLE</td><td>PLAIN, RLE</td></tr><tr><td>INT32</td><td>TS_2DIFF</td><td>PLAIN, RLE, TS_2DIFF, GORILLA, ZIGZAG, CHIMP, SPRINTZ, RLBE</td></tr><tr><td>INT64</td><td>TS_2DIFF</td><td>PLAIN, RLE, TS_2DIFF, GORILLA, ZIGZAG, CHIMP, SPRINTZ, RLBE</td></tr><tr><td>FLOAT</td><td>GORILLA</td><td>PLAIN, RLE, TS_2DIFF, GORILLA, CHIMP, SPRINTZ, RLBE</td></tr><tr><td>DOUBLE</td><td>GORILLA</td><td>PLAIN, RLE, TS_2DIFF, GORILLA, CHIMP, SPRINTZ, RLBE</td></tr><tr><td>TEXT</td><td>PLAIN</td><td>PLAIN, DICTIONARY</td></tr></tbody></table><p>When the data type specified by the user does not correspond to the encoding method, the system will prompt an error.</p><p>As shown below, the second-order difference encoding does not support the Boolean type:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>IoTDB&gt; create timeseries root.ln.wf02.wt02.status WITH DATATYPE=BOOLEAN, ENCODING=TS_2DIFF</span></span>
<span class="line"><span>Msg: 507: encoding TS_2DIFF does not support BOOLEAN</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="compression" tabindex="-1"><a class="header-anchor" href="#compression"><span>Compression</span></a></h2><p>When the time series is written and encoded as binary data according to the specified type, IoTDB compresses the data using compression technology to further improve space storage efficiency. Although both encoding and compression are designed to improve storage efficiency, encoding techniques are usually available only for specific data types (e.g., second-order differential encoding is only suitable for INT32 or INT64 data type, and storing floating-point numbers requires multiplying them by 10m to convert to integers), after which the data is converted to a binary stream. The compression method (SNAPPY) compresses the binary stream, so the use of the compression method is no longer limited by the data type.</p><h3 id="basic-compression-methods" tabindex="-1"><a class="header-anchor" href="#basic-compression-methods"><span>Basic Compression Methods</span></a></h3><p>IoTDB allows you to specify the compression method of the column when creating a time series, and supports the following compression methods:</p><ul><li><p>UNCOMPRESSED</p></li><li><p>SNAPPY</p></li><li><p>LZ4 (Recommended compression method)</p></li><li><p>GZIP</p></li><li><p>ZSTD</p></li><li><p>LZMA2</p></li></ul>`,38)),t("p",null,[e[1]||(e[1]=n("The specified syntax for compression is detailed in ")),r(i,{to:"/UserGuide/V1.2.x/SQL-Manual/SQL-Manual.html"},{default:d(()=>e[0]||(e[0]=[n("Create Timeseries Statement")])),_:1}),e[2]||(e[2]=n("."))]),e[4]||(e[4]=t("h3",{id:"compression-ratio-statistics",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#compression-ratio-statistics"},[t("span",null,"Compression Ratio Statistics")])],-1)),e[5]||(e[5]=t("p",null,"Compression ratio statistics file: data/system/compression_ratio/Ratio-{ratio_sum}-{memtable_flush_time}",-1)),e[6]||(e[6]=t("ul",null,[t("li",null,"ratio_sum: sum of memtable compression ratios"),t("li",null,"memtable_flush_time: memtable flush times")],-1)),e[7]||(e[7]=t("p",null,[n("The average compression ratio can be calculated by "),t("code",null,"ratio_sum / memtable_flush_time")],-1))])}const g=o(p,[["render",m],["__file","Encoding-and-Compression.html.vue"]]),f=JSON.parse('{"path":"/UserGuide/V1.2.x/Basic-Concept/Encoding-and-Compression.html","title":"Encoding and Compression","lang":"en-US","frontmatter":{"description":"Encoding and Compression Encoding Methods To improve the efficiency of data storage, it is necessary to encode data during data writing, thereby reducing the amount of disk spac...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.2.x/Basic-Concept/Encoding-and-Compression.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.2.x/Basic-Concept/Encoding-and-Compression.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Encoding and Compression"}],["meta",{"property":"og:description","content":"Encoding and Compression Encoding Methods To improve the efficiency of data storage, it is necessary to encode data during data writing, thereby reducing the amount of disk spac..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-25T11:26:08.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-25T11:26:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Encoding and Compression\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-25T11:26:08.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Encoding Methods","slug":"encoding-methods","link":"#encoding-methods","children":[{"level":3,"title":"Correspondence between data type and encoding","slug":"correspondence-between-data-type-and-encoding","link":"#correspondence-between-data-type-and-encoding","children":[]}]},{"level":2,"title":"Compression","slug":"compression","link":"#compression","children":[{"level":3,"title":"Basic Compression Methods","slug":"basic-compression-methods","link":"#basic-compression-methods","children":[]},{"level":3,"title":"Compression Ratio Statistics","slug":"compression-ratio-statistics","link":"#compression-ratio-statistics","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1735125968000,"contributors":[{"name":"W1y1r","username":"W1y1r","email":"150988475+W1y1r@users.noreply.github.com","commits":2,"url":"https://github.com/W1y1r"},{"name":"wanghui42","username":"wanghui42","email":"105700158+wanghui42@users.noreply.github.com","commits":1,"url":"https://github.com/wanghui42"},{"name":"Lei","username":"Lei","email":"33376433+LeiRui@users.noreply.github.com","commits":1,"url":"https://github.com/Lei"},{"name":"CritasWang","username":"CritasWang","email":"critas@outlook.com","commits":1,"url":"https://github.com/CritasWang"}]},"readingTime":{"minutes":3.57,"words":1071},"filePathRelative":"UserGuide/V1.2.x/Basic-Concept/Encoding-and-Compression.md","localizedDate":"July 10, 2023","autoDesc":true}');export{g as comp,f as data};
