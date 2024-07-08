import{_ as e,o as t,c as n,e as o}from"./app-DxurNv9d.js";const i={},a=o(`<h1 id="encoding" tabindex="-1"><a class="header-anchor" href="#encoding"><span>Encoding</span></a></h1><h2 id="encoding-methods" tabindex="-1"><a class="header-anchor" href="#encoding-methods"><span>Encoding Methods</span></a></h2><p>To improve the efficiency of data storage, it is necessary to encode data during data writing, thereby reducing the amount of disk space used. In the process of writing and reading data, the amount of data involved in the I/O operations can be reduced to improve performance. IoTDB supports the following encoding methods for different data types:</p><ul><li>PLAIN</li></ul><p>PLAIN encoding, the default encoding mode, i.e, no encoding, supports multiple data types. It has high compression and decompression efficiency while suffering from low space storage efficiency.</p><ul><li>TS_2DIFF</li></ul><p>Second-order differential encoding is more suitable for encoding monotonically increasing or decreasing sequence data, and is not recommended for sequence data with large fluctuations.</p><ul><li>RLE</li></ul><p>Run-length encoding is suitable for storing sequence with continuous values, and is not recommended for sequence data with most of the time different values.</p><p>Run-length encoding can also be used to encode floating-point numbers, while it is necessary to specify reserved decimal digits (MAX_POINT_NUMBER) when creating time series. It is more suitable to store sequence data where floating-point values appear continuously, monotonously increasing or decreasing, and it is not suitable for storing sequence data with high precision requirements after the decimal point or with large fluctuations.</p><blockquote><p>TS_2DIFF and RLE have precision limit for data type of float and double. By default, two decimal places are reserved. GORILLA is recommended.</p></blockquote><ul><li>GORILLA</li></ul><p>GORILLA encoding is lossless. It is more suitable for numerical sequence with similar values and is not recommended for sequence data with large fluctuations.</p><p>Currently, there are two versions of GORILLA encoding implementation, it is recommended to use <code>GORILLA</code> instead of <code>GORILLA_V1</code> (deprecated).</p><p>Usage restrictions: When using GORILLA to encode INT32 data, you need to ensure that there is no data point with the value <code>Integer.MIN_VALUE</code> in the sequence. When using GORILLA to encode INT64 data, you need to ensure that there is no data point with the value <code>Long.MIN_VALUE</code> in the sequence.</p><ul><li>DICTIONARY</li></ul><p>DICTIONARY encoding is lossless. It is suitable for TEXT data with low cardinality (i.e. low number of distinct values). It is not recommended to use it for high-cardinality data.</p><ul><li>FREQ</li></ul><p>FREQ encoding is lossy. Based on the idea of transform coding, it transforms the time sequence to the frequency domain and only reserve part of the frequency components with high energy. Thus, it greatly improves the space efficiency with little accuracy loss. It is suitable for data with high energy concentration (especially those with obvious periodicity), not suitable for data with uniformly distributed energy (such as white noise).</p><blockquote><p>There are two parameters of FREQ encoding in the configuration file: <code>freq_snr</code> defines the signal-noise-ratio (SNR). There is a mathematical relationship between SNR and NRMSE as $NRMSE = 10^{-SNR/20}$. Both the compression ratio and accuracy loss decrease when it increases. <code>freq_block_size</code> defines the data size in a time-frequency transformation. It is not recommended to modify the default value. The detailed experimental results and analysis of the influences of parameters are in the design document.</p></blockquote><ul><li>ZIGZAG</li></ul><p>ZIGZAG encoding maps signed integers to unsigned integers so that numbers with a small absolute value (for instance, -1) have a small variant encoded value too. It does this in a way that &quot;zig-zags&quot; back and forth through the positive and negative integers.</p><ul><li>CHIMP</li></ul><p>CHIMP encoding is lossless. It is the state-of-the-art compression algorithm for streaming floating point data, providing impressive savings compared to earlier approaches. It is suitable for any numerical sequence with similar values and works best for sequence data without large fluctuations and/or random noise.</p><p>Usage restrictions: When using CHIMP to encode INT32 data, you need to ensure that there is no data point with the value <code>Integer.MIN_VALUE</code> in the sequence. When using CHIMP to encode INT64 data, you need to ensure that there is no data point with the value <code>Long.MIN_VALUE</code> in the sequence.</p><h2 id="correspondence-between-data-type-and-encoding" tabindex="-1"><a class="header-anchor" href="#correspondence-between-data-type-and-encoding"><span>Correspondence between data type and encoding</span></a></h2><p>The five encodings described in the previous sections are applicable to different data types. If the correspondence is wrong, the time series cannot be created correctly.</p><p>The correspondence between the data type and its supported encodings is summarized in the Table below.</p><table><thead><tr><th style="text-align:center;">Data Type</th><th style="text-align:center;">Supported Encoding</th></tr></thead><tbody><tr><td style="text-align:center;">BOOLEAN</td><td style="text-align:center;">PLAIN, RLE</td></tr><tr><td style="text-align:center;">INT32</td><td style="text-align:center;">PLAIN, RLE, TS_2DIFF, GORILLA, FREQ, ZIGZAG</td></tr><tr><td style="text-align:center;">INT64</td><td style="text-align:center;">PLAIN, RLE, TS_2DIFF, GORILLA, FREQ, ZIGZAG</td></tr><tr><td style="text-align:center;">FLOAT</td><td style="text-align:center;">PLAIN, RLE, TS_2DIFF, GORILLA, FREQ</td></tr><tr><td style="text-align:center;">DOUBLE</td><td style="text-align:center;">PLAIN, RLE, TS_2DIFF, GORILLA, FREQ</td></tr><tr><td style="text-align:center;">TEXT</td><td style="text-align:center;">PLAIN, DICTIONARY</td></tr></tbody></table><p>When the data type specified by the user does not correspond to the encoding method, the system will prompt an error.</p><p>As shown below, the second-order difference encoding does not support the Boolean type:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; create timeseries root.ln.wf02.wt02.status WITH DATATYPE=BOOLEAN, ENCODING=TS_2DIFF
Msg: 507: encoding TS_2DIFF does not support BOOLEAN
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,32),s=[a];function d(r,c){return t(),n("div",null,s)}const h=e(i,[["render",d],["__file","Encoding.html.vue"]]),p=JSON.parse('{"path":"/UserGuide/V1.1.x/Data-Concept/Encoding.html","title":"Encoding","lang":"en-US","frontmatter":{"description":"Encoding Encoding Methods To improve the efficiency of data storage, it is necessary to encode data during data writing, thereby reducing the amount of disk space used. In the p...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/Data-Concept/Encoding.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.1.x/Data-Concept/Encoding.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Encoding"}],["meta",{"property":"og:description","content":"Encoding Encoding Methods To improve the efficiency of data storage, it is necessary to encode data during data writing, thereby reducing the amount of disk space used. In the p..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Encoding\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Encoding Methods","slug":"encoding-methods","link":"#encoding-methods","children":[]},{"level":2,"title":"Correspondence between data type and encoding","slug":"correspondence-between-data-type-and-encoding","link":"#correspondence-between-data-type-and-encoding","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":3,"words":899},"filePathRelative":"UserGuide/V1.1.x/Data-Concept/Encoding.md","localizedDate":"July 10, 2023","autoDesc":true}');export{h as comp,p as data};
