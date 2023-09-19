const e=JSON.parse('{"key":"v-b6b44d54","path":"/zh/UserGuide/V1.0.x/Query-Data/Group-By.html","title":"分段分组聚合","lang":"zh-CN","frontmatter":{"description":"时间区间分段聚合 分段聚合是一种时序数据典型的查询方式，数据以高频进行采集，需要按照一定的时间间隔进行聚合计算，如计算每天的平均气温，需要将气温的序列按天进行分段，然后计算平均值。 在 IoTDB 中，聚合查询可以通过 GROUP BY 子句指定按照时间区间分段聚合。用户可以指定聚合的时间间隔和滑动步长，相关参数如下： 参数 1：时间轴显示时间窗口大小...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.0.x/Query-Data/Group-By.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/Query-Data/Group-By.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"分段分组聚合"}],["meta",{"property":"og:description","content":"时间区间分段聚合 分段聚合是一种时序数据典型的查询方式，数据以高频进行采集，需要按照一定的时间间隔进行聚合计算，如计算每天的平均气温，需要将气温的序列按天进行分段，然后计算平均值。 在 IoTDB 中，聚合查询可以通过 GROUP BY 子句指定按照时间区间分段聚合。用户可以指定聚合的时间间隔和滑动步长，相关参数如下： 参数 1：时间轴显示时间窗口大小..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-09-19T03:10:05.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-19T03:10:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"分段分组聚合\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-19T03:10:05.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"时间区间分段聚合","slug":"时间区间分段聚合","link":"#时间区间分段聚合","children":[{"level":3,"title":"未指定滑动步长的时间区间分组聚合查询","slug":"未指定滑动步长的时间区间分组聚合查询","link":"#未指定滑动步长的时间区间分组聚合查询","children":[]},{"level":3,"title":"指定滑动步长的时间区间分组聚合查询","slug":"指定滑动步长的时间区间分组聚合查询","link":"#指定滑动步长的时间区间分组聚合查询","children":[]},{"level":3,"title":"按照自然月份的时间区间分组聚合查询","slug":"按照自然月份的时间区间分组聚合查询","link":"#按照自然月份的时间区间分组聚合查询","children":[]},{"level":3,"title":"左开右闭区间","slug":"左开右闭区间","link":"#左开右闭区间","children":[]},{"level":3,"title":"与分组聚合混合使用","slug":"与分组聚合混合使用","link":"#与分组聚合混合使用","children":[]}]},{"level":2,"title":"路径层级分组聚合","slug":"路径层级分组聚合","link":"#路径层级分组聚合","children":[]},{"level":2,"title":"标签分组聚合","slug":"标签分组聚合","link":"#标签分组聚合","children":[{"level":3,"title":"单标签聚合查询","slug":"单标签聚合查询","link":"#单标签聚合查询","children":[]},{"level":3,"title":"多标签聚合查询","slug":"多标签聚合查询","link":"#多标签聚合查询","children":[]},{"level":3,"title":"基于时间区间的标签聚合查询","slug":"基于时间区间的标签聚合查询","link":"#基于时间区间的标签聚合查询","children":[]},{"level":3,"title":"标签聚合查询的限制","slug":"标签聚合查询的限制","link":"#标签聚合查询的限制","children":[]}]}],"git":{"createdTime":1695093005000,"updatedTime":1695093005000,"contributors":[{"name":"Haonan","email":"hhaonan@outlook.com","commits":1}]},"readingTime":{"minutes":17.25,"words":5175},"filePathRelative":"zh/UserGuide/V1.0.x/Query-Data/Group-By.md","localizedDate":"2023年9月19日","autoDesc":true}');export{e as data};
