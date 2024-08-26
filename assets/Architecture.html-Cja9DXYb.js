import{_ as t,o,c as a,b as e}from"./app-CQeJnOJS.js";const r={},s=e("h2",{id:"system-architecture",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#system-architecture"},[e("span",null,"System Architecture")])],-1),i=e("p",null,"Besides IoTDB engine, we also developed several components to provide better IoT service. All components are referred to below as the IoTDB suite, and IoTDB refers specifically to the IoTDB engine.",-1),n=e("p",null,"IoTDB suite can provide a series of functions in the real situation such as data collection, data writing, data storage, data query, data visualization and data analysis. Figure 1.1 shows the overall application architecture brought by all the components of the IoTDB suite.",-1),c=e("img",{style:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},src:"https://alioss.timecho.com/docs/img/github/67943956-39c1e800-fc16-11e9-8da2-a662f8246816.png"},null,-1),l=e("p",null,"As shown in Figure 1.1, users can use JDBC to import timeseries data collected by sensor on the device to local/remote IoTDB. These timeseries data may be system state data (such as server load and CPU memory, etc.), message queue data, timeseries data from applications, or other timeseries data in the database. Users can also write the data directly to the TsFile (local or on HDFS).",-1),d=e("p",null,"TsFile could be written to the HDFS, thereby implementing data processing tasks such as abnormality detection and machine learning on the Hadoop or Spark data processing platform.",-1),h=e("p",null,"For the data written to HDFS or local TsFile, users can use TsFile-Hadoop-Connector or TsFile-Spark-Connector to allow Hadoop or Spark to process data.",-1),p=e("p",null,"The results of the analysis can be write back to TsFile in the same way.",-1),m=e("p",null,"Also, IoTDB and TsFile provide client tools to meet the various needs of users in writing and viewing data in SQL form, script form and graphical form.",-1),u=[s,i,n,c,l,d,h,p,m];function g(T,y){return o(),a("div",null,u)}const f=t(r,[["render",g],["__file","Architecture.html.vue"]]),B=JSON.parse('{"path":"/UserGuide/V0.13.x/IoTDB-Introduction/Architecture.html","title":"","lang":"en-US","frontmatter":{"description":"System Architecture Besides IoTDB engine, we also developed several components to provide better IoT service. All components are referred to below as the IoTDB suite, and IoTDB ...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/IoTDB-Introduction/Architecture.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V0.13.x/IoTDB-Introduction/Architecture.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"System Architecture Besides IoTDB engine, we also developed several components to provide better IoT service. All components are referred to below as the IoTDB suite, and IoTDB ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"System Architecture","slug":"system-architecture","link":"#system-architecture","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.26,"words":379},"filePathRelative":"UserGuide/V0.13.x/IoTDB-Introduction/Architecture.md","localizedDate":"July 10, 2023","autoDesc":true}');export{f as comp,B as data};
