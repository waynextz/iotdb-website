const e=JSON.parse('{"key":"v-d7aa4a3c","path":"/zh/UserGuide/V1.0.x/Query-Data/Overview.html","title":"概述","lang":"zh-CN","frontmatter":{"description":"在 IoTDB 中，使用 SELECT 语句从一条或多条时间序列中查询数据。 语法定义 语法说明 SELECT 子句 SELECT 子句指定查询的输出，由若干个 selectExpr 组成。; 每个 selectExpr 定义查询结果中的一列或多列，它是一个由时间序列路径后缀、常量、函数和运算符组成的表达式。; 支持使用AS为查询结果集中的列指定别名。...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.0.x/Query-Data/Overview.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/Query-Data/Overview.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"概述"}],["meta",{"property":"og:description","content":"在 IoTDB 中，使用 SELECT 语句从一条或多条时间序列中查询数据。 语法定义 语法说明 SELECT 子句 SELECT 子句指定查询的输出，由若干个 selectExpr 组成。; 每个 selectExpr 定义查询结果中的一列或多列，它是一个由时间序列路径后缀、常量、函数和运算符组成的表达式。; 支持使用AS为查询结果集中的列指定别名。..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-01-25T07:30:52.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-25T07:30:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"概述\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-25T07:30:52.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"语法定义","slug":"语法定义","link":"#语法定义","children":[]},{"level":2,"title":"语法说明","slug":"语法说明","link":"#语法说明","children":[{"level":3,"title":"SELECT 子句","slug":"select-子句","link":"#select-子句","children":[]},{"level":3,"title":"INTO 子句","slug":"into-子句","link":"#into-子句","children":[]},{"level":3,"title":"FROM 子句","slug":"from-子句","link":"#from-子句","children":[]},{"level":3,"title":"WHERE 子句","slug":"where-子句","link":"#where-子句","children":[]},{"level":3,"title":"GROUP BY 子句","slug":"group-by-子句","link":"#group-by-子句","children":[]},{"level":3,"title":"HAVING 子句","slug":"having-子句","link":"#having-子句","children":[]},{"level":3,"title":"ORDER BY 子句","slug":"order-by-子句","link":"#order-by-子句","children":[]},{"level":3,"title":"FILL 子句","slug":"fill-子句","link":"#fill-子句","children":[]},{"level":3,"title":"SLIMIT 和 SOFFSET 子句","slug":"slimit-和-soffset-子句","link":"#slimit-和-soffset-子句","children":[]},{"level":3,"title":"LIMIT 和 OFFSET 子句","slug":"limit-和-offset-子句","link":"#limit-和-offset-子句","children":[]},{"level":3,"title":"ALIGN BY 子句","slug":"align-by-子句","link":"#align-by-子句","children":[]}]},{"level":2,"title":"SQL 示例","slug":"sql-示例","link":"#sql-示例","children":[{"level":3,"title":"示例1：根据一个时间区间选择一列数据","slug":"示例1-根据一个时间区间选择一列数据","link":"#示例1-根据一个时间区间选择一列数据","children":[]},{"level":3,"title":"示例2：根据一个时间区间选择多列数据","slug":"示例2-根据一个时间区间选择多列数据","link":"#示例2-根据一个时间区间选择多列数据","children":[]},{"level":3,"title":"示例3：按照多个时间区间选择同一设备的多列数据","slug":"示例3-按照多个时间区间选择同一设备的多列数据","link":"#示例3-按照多个时间区间选择同一设备的多列数据","children":[]},{"level":3,"title":"示例4：按照多个时间区间选择不同设备的多列数据","slug":"示例4-按照多个时间区间选择不同设备的多列数据","link":"#示例4-按照多个时间区间选择不同设备的多列数据","children":[]},{"level":3,"title":"示例5：根据时间降序返回结果集","slug":"示例5-根据时间降序返回结果集","link":"#示例5-根据时间降序返回结果集","children":[]}]},{"level":2,"title":"使用方式","slug":"使用方式","link":"#使用方式","children":[]}],"git":{"createdTime":1706167852000,"updatedTime":1706167852000,"contributors":[{"name":"Tansgr","email":"101696091+tanxilo@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":9.01,"words":2702},"filePathRelative":"zh/UserGuide/V1.0.x/Query-Data/Overview.md","localizedDate":"2024年1月25日","autoDesc":true}');export{e as data};
