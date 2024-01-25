const e=JSON.parse('{"key":"v-37e073ca","path":"/zh/UserGuide/V1.2.x/stage/Operators-Functions/User-Defined-Function-C_timecho.html","title":"多语言远程 UDF（C / C++ / Java / ...）","lang":"zh-CN","frontmatter":{"description":"Remote UDF Service 支持通过 RPC 的方式访问用户提供的 UDF Service，以实现用户自定义函数的执行。 相比于 Native 的 UDF 实现，Remote UDF Service 有如下优势： 跨语言：可以用 Protobuf 支持的各类语言编写 UDF Service。; 安全：UDF 执行失败或崩溃，仅会影响 UDF ...","head":[["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.2.x/stage/Operators-Functions/User-Defined-Function-C_timecho.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"多语言远程 UDF（C / C++ / Java / ...）"}],["meta",{"property":"og:description","content":"Remote UDF Service 支持通过 RPC 的方式访问用户提供的 UDF Service，以实现用户自定义函数的执行。 相比于 Native 的 UDF 实现，Remote UDF Service 有如下优势： 跨语言：可以用 Protobuf 支持的各类语言编写 UDF Service。; 安全：UDF 执行失败或崩溃，仅会影响 UDF ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-25T07:30:52.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-25T07:30:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"多语言远程 UDF（C / C++ / Java / ...）\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-25T07:30:52.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"依赖","slug":"依赖","link":"#依赖","children":[{"level":3,"title":"protobuf 编译安装","slug":"protobuf-编译安装","link":"#protobuf-编译安装","children":[]},{"level":3,"title":"protobuf-c 编译安装（C 语言远程 UDF 需此步骤）","slug":"protobuf-c-编译安装-c-语言远程-udf-需此步骤","link":"#protobuf-c-编译安装-c-语言远程-udf-需此步骤","children":[]}]},{"level":2,"title":"编写 UDF 函数","slug":"编写-udf-函数","link":"#编写-udf-函数","children":[{"level":3,"title":"拷贝 proto 文件","slug":"拷贝-proto-文件","link":"#拷贝-proto-文件","children":[]},{"level":3,"title":"生成接口","slug":"生成接口","link":"#生成接口","children":[]},{"level":3,"title":"实现接口","slug":"实现接口","link":"#实现接口","children":[]}]},{"level":2,"title":"创建 UDF","slug":"创建-udf","link":"#创建-udf","children":[]},{"level":2,"title":"UDF 卸载","slug":"udf-卸载","link":"#udf-卸载","children":[]},{"level":2,"title":"UDF 查询","slug":"udf-查询","link":"#udf-查询","children":[{"level":3,"title":"支持的基础 SQL 语法","slug":"支持的基础-sql-语法","link":"#支持的基础-sql-语法","children":[]},{"level":3,"title":"带 * 查询","slug":"带-查询","link":"#带-查询","children":[]},{"level":3,"title":"带自定义输入参数的查询","slug":"带自定义输入参数的查询","link":"#带自定义输入参数的查询","children":[]},{"level":3,"title":"与其他查询的嵌套查询","slug":"与其他查询的嵌套查询","link":"#与其他查询的嵌套查询","children":[]}]},{"level":2,"title":"查看所有注册的 UDF","slug":"查看所有注册的-udf","link":"#查看所有注册的-udf","children":[]},{"level":2,"title":"用户权限管理","slug":"用户权限管理","link":"#用户权限管理","children":[]}],"git":{"createdTime":1706167852000,"updatedTime":1706167852000,"contributors":[{"name":"Tansgr","email":"101696091+tanxilo@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":3.96,"words":1188},"filePathRelative":"zh/UserGuide/V1.2.x/stage/Operators-Functions/User-Defined-Function-C_timecho.md","localizedDate":"2024年1月25日","autoDesc":true}');export{e as data};
