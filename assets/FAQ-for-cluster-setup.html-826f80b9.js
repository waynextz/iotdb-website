const e=JSON.parse('{"key":"v-d0643036","path":"/zh/UserGuide/V1.0.x/FAQ/FAQ-for-cluster-setup.html","title":"分布式部署 FAQ","lang":"zh-CN","frontmatter":{"description":"一、集群启停 1. ConfigNode初次启动失败，如何排查原因？ ConfigNode初次启动时确保已清空data/confignode目录; 确保该ConfigNode使用到的没有被占用，没有与已启动的ConfigNode使用到的冲突 ; 确保该ConfigNode的cntargetconfignode_list（指向存活的ConfigNode；...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.0.x/FAQ/FAQ-for-cluster-setup.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/FAQ/FAQ-for-cluster-setup.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"分布式部署 FAQ"}],["meta",{"property":"og:description","content":"一、集群启停 1. ConfigNode初次启动失败，如何排查原因？ ConfigNode初次启动时确保已清空data/confignode目录; 确保该ConfigNode使用到的没有被占用，没有与已启动的ConfigNode使用到的冲突 ; 确保该ConfigNode的cntargetconfignode_list（指向存活的ConfigNode；..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-09-19T03:10:05.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-19T03:10:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"分布式部署 FAQ\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-19T03:10:05.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"一、集群启停","slug":"一、集群启停","link":"#一、集群启停","children":[{"level":3,"title":"1. ConfigNode初次启动失败，如何排查原因？","slug":"_1-confignode初次启动失败-如何排查原因","link":"#_1-confignode初次启动失败-如何排查原因","children":[]},{"level":3,"title":"2. ConfigNode初次启动成功，show cluster的结果里为何没有该节点？","slug":"_2-confignode初次启动成功-show-cluster的结果里为何没有该节点","link":"#_2-confignode初次启动成功-show-cluster的结果里为何没有该节点","children":[]},{"level":3,"title":"3. DataNode初次启动失败，如何排查原因？","slug":"_3-datanode初次启动失败-如何排查原因","link":"#_3-datanode初次启动失败-如何排查原因","children":[]},{"level":3,"title":"4. 移除DataNode执行失败，如何排查？","slug":"_4-移除datanode执行失败-如何排查","link":"#_4-移除datanode执行失败-如何排查","children":[]},{"level":3,"title":"5. 挂掉的DataNode是否支持移除？","slug":"_5-挂掉的datanode是否支持移除","link":"#_5-挂掉的datanode是否支持移除","children":[]},{"level":3,"title":"6. 从0.13升级到1.0需要注意什么？","slug":"_6-从0-13升级到1-0需要注意什么","link":"#_6-从0-13升级到1-0需要注意什么","children":[]}]},{"level":2,"title":"二、集群重启","slug":"二、集群重启","link":"#二、集群重启","children":[{"level":3,"title":"1. 如何重启集群中的某个ConfigNode？","slug":"_1-如何重启集群中的某个confignode","link":"#_1-如何重启集群中的某个confignode","children":[]},{"level":3,"title":"2. 如何重启集群中的某个DataNode？","slug":"_2-如何重启集群中的某个datanode","link":"#_2-如何重启集群中的某个datanode","children":[]},{"level":3,"title":"3. 将某个ConfigNode移除后（remove-confignode），能否再利用该ConfigNode的data目录重启？","slug":"_3-将某个confignode移除后-remove-confignode-能否再利用该confignode的data目录重启","link":"#_3-将某个confignode移除后-remove-confignode-能否再利用该confignode的data目录重启","children":[]},{"level":3,"title":"4. 将某个DataNode移除后（remove-datanode），能否再利用该DataNode的data目录重启？","slug":"_4-将某个datanode移除后-remove-datanode-能否再利用该datanode的data目录重启","link":"#_4-将某个datanode移除后-remove-datanode-能否再利用该datanode的data目录重启","children":[]},{"level":3,"title":"5. 用户看到某个ConfigNode/DataNode变成了Unknown状态，在没有kill对应进程的情况下，直接删除掉ConfigNode/DataNode对应的data目录，然后执行start-confignode.sh/start-datanode.sh，这种情况下能成功吗?","slug":"_5-用户看到某个confignode-datanode变成了unknown状态-在没有kill对应进程的情况下-直接删除掉confignode-datanode对应的data目录-然后执行start-confignode-sh-start-datanode-sh-这种情况下能成功吗","link":"#_5-用户看到某个confignode-datanode变成了unknown状态-在没有kill对应进程的情况下-直接删除掉confignode-datanode对应的data目录-然后执行start-confignode-sh-start-datanode-sh-这种情况下能成功吗","children":[]}]},{"level":2,"title":"三、集群运维","slug":"三、集群运维","link":"#三、集群运维","children":[{"level":3,"title":"1. Show cluster执行失败，显示“please check server status”，如何排查?","slug":"_1-show-cluster执行失败-显示-please-check-server-status-如何排查","link":"#_1-show-cluster执行失败-显示-please-check-server-status-如何排查","children":[]},{"level":3,"title":"2. 某一DataNode节点的磁盘文件损坏，如何修复这个节点?","slug":"_2-某一datanode节点的磁盘文件损坏-如何修复这个节点","link":"#_2-某一datanode节点的磁盘文件损坏-如何修复这个节点","children":[]},{"level":3,"title":"3. 如何降低ConfigNode、DataNode使用的内存？","slug":"_3-如何降低confignode、datanode使用的内存","link":"#_3-如何降低confignode、datanode使用的内存","children":[]}]}],"git":{"createdTime":1695093005000,"updatedTime":1695093005000,"contributors":[{"name":"Haonan","email":"hhaonan@outlook.com","commits":1}]},"readingTime":{"minutes":4.46,"words":1337},"filePathRelative":"zh/UserGuide/V1.0.x/FAQ/FAQ-for-cluster-setup.md","localizedDate":"2023年9月19日","autoDesc":true}');export{e as data};
