const e=JSON.parse('{"key":"v-5cde6208","path":"/UserGuide/V1.2.x/API/Programming-Python-Native-API.html","title":"Python Native API","lang":"en-US","frontmatter":{"description":"Requirements You have to install thrift (>=0.13) before using the package. How to use (Example) First, download the package: pip3 install apache-iotdb You can get an example of ...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.2.x/API/Programming-Python-Native-API.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.2.x/API/Programming-Python-Native-API.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Python Native API"}],["meta",{"property":"og:description","content":"Requirements You have to install thrift (>=0.13) before using the package. How to use (Example) First, download the package: pip3 install apache-iotdb You can get an example of ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-15T13:09:03.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-15T13:09:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Python Native API\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-15T13:09:03.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Requirements","slug":"requirements","link":"#requirements","children":[]},{"level":2,"title":"How to use (Example)","slug":"how-to-use-example","link":"#how-to-use-example","children":[]},{"level":2,"title":"Initialization","slug":"initialization","link":"#initialization","children":[]},{"level":2,"title":"Managing Session through SessionPool","slug":"managing-session-through-sessionpool","link":"#managing-session-through-sessionpool","children":[{"level":3,"title":"Create SessionPool","slug":"create-sessionpool","link":"#create-sessionpool","children":[]},{"level":3,"title":"Create a SessionPool using distributed nodes.","slug":"create-a-sessionpool-using-distributed-nodes","link":"#create-a-sessionpool-using-distributed-nodes","children":[]},{"level":3,"title":"Acquiring a session through SessionPool and manually calling PutBack after use","slug":"acquiring-a-session-through-sessionpool-and-manually-calling-putback-after-use","link":"#acquiring-a-session-through-sessionpool-and-manually-calling-putback-after-use","children":[]}]},{"level":2,"title":"Data Definition Interface (DDL Interface)","slug":"data-definition-interface-ddl-interface","link":"#data-definition-interface-ddl-interface","children":[{"level":3,"title":"Database Management","slug":"database-management","link":"#database-management","children":[]},{"level":3,"title":"Timeseries Management","slug":"timeseries-management","link":"#timeseries-management","children":[]}]},{"level":2,"title":"Data Manipulation Interface (DML Interface)","slug":"data-manipulation-interface-dml-interface","link":"#data-manipulation-interface-dml-interface","children":[{"level":3,"title":"Insert","slug":"insert","link":"#insert","children":[]},{"level":3,"title":"Insert with type inference","slug":"insert-with-type-inference","link":"#insert-with-type-inference","children":[]},{"level":3,"title":"Insert of Aligned Timeseries","slug":"insert-of-aligned-timeseries","link":"#insert-of-aligned-timeseries","children":[]}]},{"level":2,"title":"IoTDB-SQL Interface","slug":"iotdb-sql-interface","link":"#iotdb-sql-interface","children":[]},{"level":2,"title":"Schema Template","slug":"schema-template","link":"#schema-template","children":[{"level":3,"title":"Create Schema Template","slug":"create-schema-template","link":"#create-schema-template","children":[]},{"level":3,"title":"Modify Schema Template measurements","slug":"modify-schema-template-measurements","link":"#modify-schema-template-measurements","children":[]},{"level":3,"title":"Set Schema Template","slug":"set-schema-template","link":"#set-schema-template","children":[]},{"level":3,"title":"Uset Schema Template","slug":"uset-schema-template","link":"#uset-schema-template","children":[]},{"level":3,"title":"Show Schema Template","slug":"show-schema-template","link":"#show-schema-template","children":[]},{"level":3,"title":"Drop Schema Template","slug":"drop-schema-template","link":"#drop-schema-template","children":[]}]},{"level":2,"title":"Pandas Support","slug":"pandas-support","link":"#pandas-support","children":[]},{"level":2,"title":"IoTDB Testcontainer","slug":"iotdb-testcontainer","link":"#iotdb-testcontainer","children":[]},{"level":2,"title":"IoTDB DBAPI","slug":"iotdb-dbapi","link":"#iotdb-dbapi","children":[{"level":3,"title":"Examples","slug":"examples","link":"#examples","children":[]}]},{"level":2,"title":"IoTDB SQLAlchemy Dialect (Experimental)","slug":"iotdb-sqlalchemy-dialect-experimental","link":"#iotdb-sqlalchemy-dialect-experimental","children":[{"level":3,"title":"Mapping of the metadata","slug":"mapping-of-the-metadata","link":"#mapping-of-the-metadata","children":[]},{"level":3,"title":"Data type mapping","slug":"data-type-mapping","link":"#data-type-mapping","children":[]},{"level":3,"title":"Example","slug":"example","link":"#example","children":[]}]},{"level":2,"title":"Developers","slug":"developers","link":"#developers","children":[{"level":3,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":3,"title":"Prerequisites","slug":"prerequisites","link":"#prerequisites","children":[]},{"level":3,"title":"Compile the thrift library and Debug","slug":"compile-the-thrift-library-and-debug","link":"#compile-the-thrift-library-and-debug","children":[]},{"level":3,"title":"Session Client & Example","slug":"session-client-example","link":"#session-client-example","children":[]},{"level":3,"title":"Tests","slug":"tests","link":"#tests","children":[]},{"level":3,"title":"Futher Tools","slug":"futher-tools","link":"#futher-tools","children":[]}]},{"level":2,"title":"Releasing","slug":"releasing","link":"#releasing","children":[{"level":3,"title":"Preparing your environment","slug":"preparing-your-environment","link":"#preparing-your-environment","children":[]},{"level":3,"title":"Doing the Release","slug":"doing-the-release","link":"#doing-the-release","children":[]}]}],"git":{"createdTime":1692104943000,"updatedTime":1692104943000,"contributors":[{"name":"wanghui42","email":"105700158+wanghui42@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":8.02,"words":2406},"filePathRelative":"UserGuide/V1.2.x/API/Programming-Python-Native-API.md","localizedDate":"August 15, 2023","autoDesc":true}');export{e as data};
