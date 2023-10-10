const l=JSON.parse('{"key":"v-6e32c5e8","path":"/zh/UserGuide/Master/stage/Operators-Functions/Data-Profiling.html","title":"数据画像","lang":"zh-CN","frontmatter":{"description":"ACF 函数简介 本函数用于计算时间序列的自相关函数值，即序列与自身之间的互相关函数，详情参见XCorr (./Data-Matching.md#XCorr)函数文档。 函数名： ACF 输入序列： 仅支持单个输入序列，类型为 INT32 / INT64 / FLOAT / DOUBLE。 输出序列： 输出单个序列，类型为 DOUBLE。序列中共包含$...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/Master/stage/Operators-Functions/Data-Profiling.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/Master/stage/Operators-Functions/Data-Profiling.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"数据画像"}],["meta",{"property":"og:description","content":"ACF 函数简介 本函数用于计算时间序列的自相关函数值，即序列与自身之间的互相关函数，详情参见XCorr (./Data-Matching.md#XCorr)函数文档。 函数名： ACF 输入序列： 仅支持单个输入序列，类型为 INT32 / INT64 / FLOAT / DOUBLE。 输出序列： 输出单个序列，类型为 DOUBLE。序列中共包含$..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-10-10T10:08:46.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-10T10:08:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"数据画像\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-10-10T10:08:46.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"ACF","slug":"acf","link":"#acf","children":[{"level":3,"title":"函数简介","slug":"函数简介","link":"#函数简介","children":[]},{"level":3,"title":"使用示例","slug":"使用示例","link":"#使用示例","children":[]}]},{"level":2,"title":"Distinct","slug":"distinct","link":"#distinct","children":[{"level":3,"title":"函数简介","slug":"函数简介-1","link":"#函数简介-1","children":[]},{"level":3,"title":"使用示例","slug":"使用示例-1","link":"#使用示例-1","children":[]}]},{"level":2,"title":"Histogram","slug":"histogram","link":"#histogram","children":[{"level":3,"title":"函数简介","slug":"函数简介-2","link":"#函数简介-2","children":[]},{"level":3,"title":"使用示例","slug":"使用示例-2","link":"#使用示例-2","children":[]}]},{"level":2,"title":"Integral","slug":"integral","link":"#integral","children":[{"level":3,"title":"函数简介","slug":"函数简介-3","link":"#函数简介-3","children":[]},{"level":3,"title":"使用示例","slug":"使用示例-3","link":"#使用示例-3","children":[]}]},{"level":2,"title":"IntegralAvg","slug":"integralavg","link":"#integralavg","children":[{"level":3,"title":"函数简介","slug":"函数简介-4","link":"#函数简介-4","children":[]},{"level":3,"title":"使用示例","slug":"使用示例-4","link":"#使用示例-4","children":[]}]},{"level":2,"title":"Mad","slug":"mad","link":"#mad","children":[{"level":3,"title":"函数简介","slug":"函数简介-5","link":"#函数简介-5","children":[]},{"level":3,"title":"使用示例","slug":"使用示例-5","link":"#使用示例-5","children":[]}]},{"level":2,"title":"Median","slug":"median","link":"#median","children":[{"level":3,"title":"函数简介","slug":"函数简介-6","link":"#函数简介-6","children":[]},{"level":3,"title":"使用示例","slug":"使用示例-6","link":"#使用示例-6","children":[]}]},{"level":2,"title":"MinMax","slug":"minmax","link":"#minmax","children":[{"level":3,"title":"函数简介","slug":"函数简介-7","link":"#函数简介-7","children":[]},{"level":3,"title":"使用示例","slug":"使用示例-7","link":"#使用示例-7","children":[]}]},{"level":2,"title":"Mode","slug":"mode","link":"#mode","children":[{"level":3,"title":"函数简介","slug":"函数简介-8","link":"#函数简介-8","children":[]},{"level":3,"title":"使用示例","slug":"使用示例-8","link":"#使用示例-8","children":[]}]},{"level":2,"title":"MvAvg","slug":"mvavg","link":"#mvavg","children":[{"level":3,"title":"函数简介","slug":"函数简介-9","link":"#函数简介-9","children":[]},{"level":3,"title":"使用示例","slug":"使用示例-9","link":"#使用示例-9","children":[]}]},{"level":2,"title":"PACF","slug":"pacf","link":"#pacf","children":[{"level":3,"title":"函数简介","slug":"函数简介-10","link":"#函数简介-10","children":[]},{"level":3,"title":"使用示例","slug":"使用示例-10","link":"#使用示例-10","children":[]}]},{"level":2,"title":"Percentile","slug":"percentile","link":"#percentile","children":[{"level":3,"title":"函数简介","slug":"函数简介-11","link":"#函数简介-11","children":[]},{"level":3,"title":"使用示例","slug":"使用示例-11","link":"#使用示例-11","children":[]}]},{"level":2,"title":"Quantile","slug":"quantile","link":"#quantile","children":[{"level":3,"title":"函数简介","slug":"函数简介-12","link":"#函数简介-12","children":[]},{"level":3,"title":"使用示例","slug":"使用示例-12","link":"#使用示例-12","children":[]}]},{"level":2,"title":"Period","slug":"period","link":"#period","children":[{"level":3,"title":"函数简介","slug":"函数简介-13","link":"#函数简介-13","children":[]},{"level":3,"title":"使用示例","slug":"使用示例-13","link":"#使用示例-13","children":[]}]},{"level":2,"title":"QLB","slug":"qlb","link":"#qlb","children":[{"level":3,"title":"函数简介","slug":"函数简介-14","link":"#函数简介-14","children":[]},{"level":3,"title":"使用示例","slug":"使用示例-14","link":"#使用示例-14","children":[]}]},{"level":2,"title":"Resample","slug":"resample","link":"#resample","children":[{"level":3,"title":"函数简介","slug":"函数简介-15","link":"#函数简介-15","children":[]},{"level":3,"title":"使用示例","slug":"使用示例-15","link":"#使用示例-15","children":[]}]},{"level":2,"title":"Sample","slug":"sample","link":"#sample","children":[{"level":3,"title":"函数简介","slug":"函数简介-16","link":"#函数简介-16","children":[]},{"level":3,"title":"使用示例","slug":"使用示例-16","link":"#使用示例-16","children":[]}]},{"level":2,"title":"Segment","slug":"segment","link":"#segment","children":[{"level":3,"title":"函数简介","slug":"函数简介-17","link":"#函数简介-17","children":[]},{"level":3,"title":"使用示例","slug":"使用示例-17","link":"#使用示例-17","children":[]}]},{"level":2,"title":"Skew","slug":"skew","link":"#skew","children":[{"level":3,"title":"函数简介","slug":"函数简介-18","link":"#函数简介-18","children":[]},{"level":3,"title":"使用示例","slug":"使用示例-18","link":"#使用示例-18","children":[]}]},{"level":2,"title":"Spline","slug":"spline","link":"#spline","children":[{"level":3,"title":"函数简介","slug":"函数简介-19","link":"#函数简介-19","children":[]},{"level":3,"title":"使用示例","slug":"使用示例-19","link":"#使用示例-19","children":[]}]},{"level":2,"title":"Spread","slug":"spread","link":"#spread","children":[{"level":3,"title":"函数简介","slug":"函数简介-20","link":"#函数简介-20","children":[]},{"level":3,"title":"使用示例","slug":"使用示例-20","link":"#使用示例-20","children":[]}]},{"level":2,"title":"Stddev","slug":"stddev","link":"#stddev","children":[{"level":3,"title":"函数简介","slug":"函数简介-21","link":"#函数简介-21","children":[]},{"level":3,"title":"使用示例","slug":"使用示例-21","link":"#使用示例-21","children":[]}]},{"level":2,"title":"ZScore","slug":"zscore","link":"#zscore","children":[{"level":3,"title":"函数简介","slug":"函数简介-22","link":"#函数简介-22","children":[]},{"level":3,"title":"使用示例","slug":"使用示例-22","link":"#使用示例-22","children":[]}]}],"git":{"createdTime":1696932526000,"updatedTime":1696932526000,"contributors":[{"name":"wanghui42","email":"105700158+wanghui42@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":38.13,"words":11440},"filePathRelative":"zh/UserGuide/Master/stage/Operators-Functions/Data-Profiling.md","localizedDate":"2023年10月10日","autoDesc":true}');export{l as data};
