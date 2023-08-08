const e=JSON.parse('{"key":"v-8f6b1978","path":"/zh/UserGuide/Master/User-Manual/Database-Programming.html","title":"","lang":"zh-CN","frontmatter":{"description":"触发器 使用说明 触发器提供了一种侦听序列数据变动的机制。配合用户自定义逻辑，可完成告警、数据转发等功能。 触发器基于 Java 反射机制实现。用户通过简单实现 Java 接口，即可实现数据侦听。IoTDB 允许用户动态注册、卸载触发器，在注册、卸载期间，无需启停服务器。 侦听模式 IoTDB 的单个触发器可用于侦听符合特定模式的时间序列的数据变动，如...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/Master/User-Manual/Database-Programming.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/Master/User-Manual/Database-Programming.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"触发器 使用说明 触发器提供了一种侦听序列数据变动的机制。配合用户自定义逻辑，可完成告警、数据转发等功能。 触发器基于 Java 反射机制实现。用户通过简单实现 Java 接口，即可实现数据侦听。IoTDB 允许用户动态注册、卸载触发器，在注册、卸载期间，无需启停服务器。 侦听模式 IoTDB 的单个触发器可用于侦听符合特定模式的时间序列的数据变动，如..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-08-08T09:39:28.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-08T09:39:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-08T09:39:28.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"触发器","slug":"触发器","link":"#触发器","children":[{"level":3,"title":"使用说明","slug":"使用说明","link":"#使用说明","children":[]},{"level":3,"title":"编写触发器","slug":"编写触发器","link":"#编写触发器","children":[]},{"level":3,"title":"管理触发器","slug":"管理触发器","link":"#管理触发器","children":[]},{"level":3,"title":"重要注意事项","slug":"重要注意事项","link":"#重要注意事项","children":[]},{"level":3,"title":"配置参数","slug":"配置参数","link":"#配置参数","children":[]}]},{"level":2,"title":"连续查询（Continuous Query, CQ）","slug":"连续查询-continuous-query-cq","link":"#连续查询-continuous-query-cq","children":[{"level":3,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"连续查询的用例","slug":"连续查询的用例","link":"#连续查询的用例","children":[]},{"level":3,"title":"连续查询的管理","slug":"连续查询的管理","link":"#连续查询的管理","children":[]},{"level":3,"title":"连续查询的使用场景","slug":"连续查询的使用场景","link":"#连续查询的使用场景","children":[]},{"level":3,"title":"连续查询相关的配置参数","slug":"连续查询相关的配置参数","link":"#连续查询相关的配置参数","children":[]}]},{"level":2,"title":"用户自定义函数","slug":"用户自定义函数","link":"#用户自定义函数","children":[{"level":3,"title":"UDF 类型","slug":"udf-类型","link":"#udf-类型","children":[]},{"level":3,"title":"UDF 依赖","slug":"udf-依赖","link":"#udf-依赖","children":[]},{"level":3,"title":"UDTF（User Defined Timeseries Generating Function）","slug":"udtf-user-defined-timeseries-generating-function","link":"#udtf-user-defined-timeseries-generating-function","children":[]},{"level":3,"title":"完整 Maven 项目示例","slug":"完整-maven-项目示例","link":"#完整-maven-项目示例","children":[]},{"level":3,"title":"UDF 注册","slug":"udf-注册","link":"#udf-注册","children":[]},{"level":3,"title":"UDF 卸载","slug":"udf-卸载","link":"#udf-卸载","children":[]},{"level":3,"title":"UDF 查询","slug":"udf-查询","link":"#udf-查询","children":[]},{"level":3,"title":"查看所有注册的 UDF","slug":"查看所有注册的-udf","link":"#查看所有注册的-udf","children":[]},{"level":3,"title":"用户权限管理","slug":"用户权限管理","link":"#用户权限管理","children":[]},{"level":3,"title":"配置项","slug":"配置项","link":"#配置项","children":[]},{"level":3,"title":"贡献 UDF","slug":"贡献-udf","link":"#贡献-udf","children":[]},{"level":3,"title":"已知实现的UDF","slug":"已知实现的udf","link":"#已知实现的udf","children":[]},{"level":3,"title":"Q&A","slug":"q-a","link":"#q-a","children":[]}]}],"git":{"createdTime":1691487568000,"updatedTime":1691487568000,"contributors":[{"name":"wanghui42","email":"105700158+wanghui42@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":51.48,"words":15444},"filePathRelative":"zh/UserGuide/Master/User-Manual/Database-Programming.md","localizedDate":"2023年8月8日","autoDesc":true}');export{e as data};
