const e=JSON.parse('{"key":"v-1a133a25","path":"/zh/UserGuide/V1.2.x/User-Manual/Stage_Data-Sync_timecho.html","title":"IoTDB 数据同步","lang":"zh-CN","frontmatter":{"description":"IoTDB 数据同步功能可以将 IoTDB 的数据传输到另一个数据平台，我们将一个数据同步任务称为 Pipe。 一个 Pipe 包含三个子任务（插件）： 抽取（Extract）; 处理（Process）; 发送（Connect）; Pipe 允许用户自定义三个子任务的处理逻辑，通过类似 UDF 的方式处理数据。 在一个 Pipe 中，上述的子任务分别由...","head":[["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.2.x/User-Manual/Stage_Data-Sync_timecho.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"IoTDB 数据同步"}],["meta",{"property":"og:description","content":"IoTDB 数据同步功能可以将 IoTDB 的数据传输到另一个数据平台，我们将一个数据同步任务称为 Pipe。 一个 Pipe 包含三个子任务（插件）： 抽取（Extract）; 处理（Process）; 发送（Connect）; Pipe 允许用户自定义三个子任务的处理逻辑，通过类似 UDF 的方式处理数据。 在一个 Pipe 中，上述的子任务分别由..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-25T07:30:52.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-25T07:30:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"IoTDB 数据同步\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-25T07:30:52.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"快速开始","slug":"快速开始","link":"#快速开始","children":[]},{"level":2,"title":"同步任务管理","slug":"同步任务管理","link":"#同步任务管理","children":[{"level":3,"title":"创建同步任务","slug":"创建同步任务","link":"#创建同步任务","children":[]},{"level":3,"title":"启动任务","slug":"启动任务","link":"#启动任务","children":[]},{"level":3,"title":"停止任务","slug":"停止任务","link":"#停止任务","children":[]},{"level":3,"title":"删除任务","slug":"删除任务","link":"#删除任务","children":[]},{"level":3,"title":"展示任务","slug":"展示任务","link":"#展示任务","children":[]},{"level":3,"title":"任务运行状态迁移","slug":"任务运行状态迁移","link":"#任务运行状态迁移","children":[]}]},{"level":2,"title":"系统预置数据同步插件","slug":"系统预置数据同步插件","link":"#系统预置数据同步插件","children":[{"level":3,"title":"查看预置插件","slug":"查看预置插件","link":"#查看预置插件","children":[]},{"level":3,"title":"预置 extractor 插件","slug":"预置-extractor-插件","link":"#预置-extractor-插件","children":[]},{"level":3,"title":"预置 processor 插件","slug":"预置-processor-插件","link":"#预置-processor-插件","children":[]},{"level":3,"title":"预置 connector 插件","slug":"预置-connector-插件","link":"#预置-connector-插件","children":[]}]},{"level":2,"title":"权限管理","slug":"权限管理","link":"#权限管理","children":[]},{"level":2,"title":"配置参数","slug":"配置参数","link":"#配置参数","children":[]},{"level":2,"title":"功能特性","slug":"功能特性","link":"#功能特性","children":[{"level":3,"title":"最少一次语义保证 at-least-once","slug":"最少一次语义保证-at-least-once","link":"#最少一次语义保证-at-least-once","children":[]},{"level":3,"title":"源端：数据写入与 Pipe 处理、发送数据异步解耦","slug":"源端-数据写入与-pipe-处理、发送数据异步解耦","link":"#源端-数据写入与-pipe-处理、发送数据异步解耦","children":[]},{"level":3,"title":"源端：可自适应数据写入负载的数据传输策略","slug":"源端-可自适应数据写入负载的数据传输策略","link":"#源端-可自适应数据写入负载的数据传输策略","children":[]},{"level":3,"title":"源端：高可用集群部署时，Pipe 服务高可用","slug":"源端-高可用集群部署时-pipe-服务高可用","link":"#源端-高可用集群部署时-pipe-服务高可用","children":[]}]}],"git":{"createdTime":1706167852000,"updatedTime":1706167852000,"contributors":[{"name":"Tansgr","email":"101696091+tanxilo@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":19.42,"words":5825},"filePathRelative":"zh/UserGuide/V1.2.x/User-Manual/Stage_Data-Sync_timecho.md","localizedDate":"2024年1月25日","autoDesc":true}');export{e as data};
