const a=JSON.parse('{"key":"v-9a61f5e4","path":"/zh/UserGuide/Master/Ecosystem-Integration/Grafana-Plugin.html","title":"Grafana 插件","lang":"zh-CN","frontmatter":{"description":"Grafana 是开源的指标量监测和可视化工具，可用于展示时序数据和应用程序运行分析。 在 IoTDB 项目中，我们开发了 Grafana 插件，该插件通过调用 IoTDB REST 服务来展现 IoTDB 中时序数据 ，提供了众多时序数据的可视化方法。Grafana 插件相较于 IoTDB-Grafana-Connector 连接器执行效率更高、支持...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/Master/Ecosystem-Integration/Grafana-Plugin.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/Master/Ecosystem-Integration/Grafana-Plugin.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Grafana 插件"}],["meta",{"property":"og:description","content":"Grafana 是开源的指标量监测和可视化工具，可用于展示时序数据和应用程序运行分析。 在 IoTDB 项目中，我们开发了 Grafana 插件，该插件通过调用 IoTDB REST 服务来展现 IoTDB 中时序数据 ，提供了众多时序数据的可视化方法。Grafana 插件相较于 IoTDB-Grafana-Connector 连接器执行效率更高、支持..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-09-18T10:38:12.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-18T10:38:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Grafana 插件\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-18T10:38:12.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"部署 Grafana 插件","slug":"部署-grafana-插件","link":"#部署-grafana-插件","children":[{"level":3,"title":"安装 Grafana","slug":"安装-grafana","link":"#安装-grafana","children":[]},{"level":3,"title":"grafana-plugin 获取","slug":"grafana-plugin-获取","link":"#grafana-plugin-获取","children":[]},{"level":3,"title":"grafana-plugin 插件安装","slug":"grafana-plugin-插件安装","link":"#grafana-plugin-插件安装","children":[]},{"level":3,"title":"方式一 使用 grafana-cli 工具安装(推荐)","slug":"方式一-使用-grafana-cli-工具安装-推荐","link":"#方式一-使用-grafana-cli-工具安装-推荐","children":[]},{"level":3,"title":"方式二 使用Grafana 界面安装(推荐)","slug":"方式二-使用grafana-界面安装-推荐","link":"#方式二-使用grafana-界面安装-推荐","children":[]},{"level":3,"title":"方式三 手动安装grafana-plugin 插件(不推荐)","slug":"方式三-手动安装grafana-plugin-插件-不推荐","link":"#方式三-手动安装grafana-plugin-插件-不推荐","children":[]},{"level":3,"title":"启动 Grafana","slug":"启动-grafana","link":"#启动-grafana","children":[]},{"level":3,"title":"配置 IoTDB REST 服务","slug":"配置-iotdb-rest-服务","link":"#配置-iotdb-rest-服务","children":[]}]},{"level":2,"title":"使用 Grafana 插件","slug":"使用-grafana-插件","link":"#使用-grafana-插件","children":[{"level":3,"title":"访问 Grafana dashboard","slug":"访问-grafana-dashboard","link":"#访问-grafana-dashboard","children":[]},{"level":3,"title":"添加 IoTDB 数据源","slug":"添加-iotdb-数据源","link":"#添加-iotdb-数据源","children":[]},{"level":3,"title":"创建一个新的 Panel","slug":"创建一个新的-panel","link":"#创建一个新的-panel","children":[]},{"level":3,"title":"变量与模板功能的支持","slug":"变量与模板功能的支持","link":"#变量与模板功能的支持","children":[]},{"level":3,"title":"告警功能","slug":"告警功能","link":"#告警功能","children":[]}]},{"level":2,"title":"更多","slug":"更多","link":"#更多","children":[]}],"git":{"createdTime":1695033492000,"updatedTime":1695033492000,"contributors":[{"name":"wanghui42","email":"105700158+wanghui42@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":10.48,"words":3145},"filePathRelative":"zh/UserGuide/Master/Ecosystem-Integration/Grafana-Plugin.md","localizedDate":"2023年9月18日","autoDesc":true}');export{a as data};
