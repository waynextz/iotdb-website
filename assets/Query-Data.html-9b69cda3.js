const l=JSON.parse('{"key":"v-3c92087c","path":"/zh/UserGuide/Master/User-Manual/Query-Data.html","title":"数据查询","lang":"zh-CN","frontmatter":{"description":"概述 在 IoTDB 中，使用 SELECT 语句从一条或多条时间序列中查询数据，IoTDB 不区分历史数据和实时数据，用户可以用统一的sql语法进行查询，通过 WHERE 子句中的时间过滤谓词决定查询的时间范围。 语法定义 示例 3： 查询 root.ln.wf01.wt01 下所有序列的最新数据点，并按照序列名降序排列。 示例 4： 查询 root...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/Master/User-Manual/Query-Data.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/Master/User-Manual/Query-Data.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"数据查询"}],["meta",{"property":"og:description","content":"概述 在 IoTDB 中，使用 SELECT 语句从一条或多条时间序列中查询数据，IoTDB 不区分历史数据和实时数据，用户可以用统一的sql语法进行查询，通过 WHERE 子句中的时间过滤谓词决定查询的时间范围。 语法定义 示例 3： 查询 root.ln.wf01.wt01 下所有序列的最新数据点，并按照序列名降序排列。 示例 4： 查询 root..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-09-19T03:10:05.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-19T03:10:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"数据查询\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-19T03:10:05.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[{"level":3,"title":"语法定义","slug":"语法定义","link":"#语法定义","children":[]},{"level":3,"title":"语法说明","slug":"语法说明","link":"#语法说明","children":[]},{"level":3,"title":"SQL 示例","slug":"sql-示例","link":"#sql-示例","children":[]},{"level":3,"title":"查询执行接口","slug":"查询执行接口","link":"#查询执行接口","children":[]}]},{"level":2,"title":"选择表达式（SELECT FROM 子句）","slug":"选择表达式-select-from-子句","link":"#选择表达式-select-from-子句","children":[{"level":3,"title":"使用别名","slug":"使用别名","link":"#使用别名","children":[]},{"level":3,"title":"运算符","slug":"运算符","link":"#运算符","children":[]},{"level":3,"title":"函数","slug":"函数","link":"#函数","children":[]},{"level":3,"title":"嵌套表达式举例","slug":"嵌套表达式举例","link":"#嵌套表达式举例","children":[]},{"level":3,"title":"最新点查询","slug":"最新点查询","link":"#最新点查询","children":[]}]},{"level":2,"title":"查询过滤条件（WHERE 子句）","slug":"查询过滤条件-where-子句","link":"#查询过滤条件-where-子句","children":[{"level":3,"title":"时间过滤条件","slug":"时间过滤条件","link":"#时间过滤条件","children":[]},{"level":3,"title":"值过滤条件","slug":"值过滤条件","link":"#值过滤条件","children":[]},{"level":3,"title":"模糊查询","slug":"模糊查询","link":"#模糊查询","children":[]}]},{"level":2,"title":"分段分组聚合（GROUP BY 子句）","slug":"分段分组聚合-group-by-子句","link":"#分段分组聚合-group-by-子句","children":[{"level":3,"title":"分段聚合","slug":"分段聚合","link":"#分段聚合","children":[]},{"level":3,"title":"分组聚合","slug":"分组聚合","link":"#分组聚合","children":[]}]},{"level":2,"title":"聚合结果过滤（HAVING 子句）","slug":"聚合结果过滤-having-子句","link":"#聚合结果过滤-having-子句","children":[]},{"level":2,"title":"结果集补空值（FILL 子句）","slug":"结果集补空值-fill-子句","link":"#结果集补空值-fill-子句","children":[{"level":3,"title":"功能介绍","slug":"功能介绍","link":"#功能介绍","children":[]},{"level":3,"title":"语法定义","slug":"语法定义-1","link":"#语法定义-1","children":[]},{"level":3,"title":"填充方式","slug":"填充方式","link":"#填充方式","children":[]}]},{"level":2,"title":"查询结果分页（LIMIT/SLIMIT 子句）","slug":"查询结果分页-limit-slimit-子句","link":"#查询结果分页-limit-slimit-子句","children":[{"level":3,"title":"按行分页","slug":"按行分页","link":"#按行分页","children":[]},{"level":3,"title":"按列分页","slug":"按列分页","link":"#按列分页","children":[]}]},{"level":2,"title":"结果集排序（ORDER BY 子句）","slug":"结果集排序-order-by-子句","link":"#结果集排序-order-by-子句","children":[{"level":3,"title":"时间对齐模式下的排序","slug":"时间对齐模式下的排序","link":"#时间对齐模式下的排序","children":[]},{"level":3,"title":"设备对齐模式下的排序","slug":"设备对齐模式下的排序","link":"#设备对齐模式下的排序","children":[]},{"level":3,"title":"任意表达式排序","slug":"任意表达式排序","link":"#任意表达式排序","children":[]}]},{"level":2,"title":"查询对齐模式（ALIGN BY DEVICE 子句）","slug":"查询对齐模式-align-by-device-子句","link":"#查询对齐模式-align-by-device-子句","children":[{"level":3,"title":"按设备对齐","slug":"按设备对齐","link":"#按设备对齐","children":[]},{"level":3,"title":"设备对齐模式下的排序","slug":"设备对齐模式下的排序-1","link":"#设备对齐模式下的排序-1","children":[]}]},{"level":2,"title":"查询写回（INTO 子句）","slug":"查询写回-into-子句","link":"#查询写回-into-子句","children":[{"level":3,"title":"语法定义","slug":"语法定义-2","link":"#语法定义-2","children":[]},{"level":3,"title":"应用举例","slug":"应用举例","link":"#应用举例","children":[]},{"level":3,"title":"相关用户权限","slug":"相关用户权限","link":"#相关用户权限","children":[]},{"level":3,"title":"相关配置参数","slug":"相关配置参数","link":"#相关配置参数","children":[]}]}],"git":{"createdTime":1695093005000,"updatedTime":1695093005000,"contributors":[{"name":"Haonan","email":"hhaonan@outlook.com","commits":1}]},"readingTime":{"minutes":78.76,"words":23629},"filePathRelative":"zh/UserGuide/Master/User-Manual/Query-Data.md","localizedDate":"2023年9月19日","autoDesc":true}');export{l as data};
