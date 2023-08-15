const e=JSON.parse('{"key":"v-79159440","path":"/UserGuide/Master/SQL-Manual/SQL-Manual.html","title":"SQL Manual","lang":"en-US","frontmatter":{"description":"DATABASE MANAGEMENT For more details, see document Operate-Metadata (../User-Manual/Operate-Metadata.md). Create Database Show Databases Delete Database Count Databases Setting ...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/Master/SQL-Manual/SQL-Manual.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/Master/SQL-Manual/SQL-Manual.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"SQL Manual"}],["meta",{"property":"og:description","content":"DATABASE MANAGEMENT For more details, see document Operate-Metadata (../User-Manual/Operate-Metadata.md). Create Database Show Databases Delete Database Count Databases Setting ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-15T13:09:03.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-15T13:09:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SQL Manual\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-15T13:09:03.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"DATABASE MANAGEMENT","slug":"database-management","link":"#database-management","children":[{"level":3,"title":"Create Database","slug":"create-database","link":"#create-database","children":[]},{"level":3,"title":"Show Databases","slug":"show-databases","link":"#show-databases","children":[]},{"level":3,"title":"Delete Database","slug":"delete-database","link":"#delete-database","children":[]},{"level":3,"title":"Count Databases","slug":"count-databases","link":"#count-databases","children":[]},{"level":3,"title":"Setting up heterogeneous databases (Advanced operations)","slug":"setting-up-heterogeneous-databases-advanced-operations","link":"#setting-up-heterogeneous-databases-advanced-operations","children":[]},{"level":3,"title":"TTL","slug":"ttl","link":"#ttl","children":[]}]},{"level":2,"title":"SCHEMA TEMPLATE","slug":"schema-template","link":"#schema-template","children":[{"level":3,"title":"Create Schema Template","slug":"create-schema-template","link":"#create-schema-template","children":[]},{"level":3,"title":"Set Schema Template","slug":"set-schema-template","link":"#set-schema-template","children":[]},{"level":3,"title":"Activate Schema Template","slug":"activate-schema-template","link":"#activate-schema-template","children":[]},{"level":3,"title":"Show Schema Template","slug":"show-schema-template","link":"#show-schema-template","children":[]},{"level":3,"title":"Deactivate Schema Template","slug":"deactivate-schema-template","link":"#deactivate-schema-template","children":[]},{"level":3,"title":"Unset Schema Template","slug":"unset-schema-template","link":"#unset-schema-template","children":[]},{"level":3,"title":"Drop Schema Template","slug":"drop-schema-template","link":"#drop-schema-template","children":[]},{"level":3,"title":"Alter Schema Template","slug":"alter-schema-template","link":"#alter-schema-template","children":[]}]},{"level":2,"title":"TIMESERIES MANAGEMENT","slug":"timeseries-management","link":"#timeseries-management","children":[{"level":3,"title":"Create Timeseries","slug":"create-timeseries","link":"#create-timeseries","children":[]},{"level":3,"title":"Create Aligned Timeseries","slug":"create-aligned-timeseries","link":"#create-aligned-timeseries","children":[]},{"level":3,"title":"Delete Timeseries","slug":"delete-timeseries","link":"#delete-timeseries","children":[]},{"level":3,"title":"Show Timeseries","slug":"show-timeseries","link":"#show-timeseries","children":[]},{"level":3,"title":"Count Timeseries","slug":"count-timeseries","link":"#count-timeseries","children":[]},{"level":3,"title":"Tag and Attribute Management","slug":"tag-and-attribute-management","link":"#tag-and-attribute-management","children":[]}]},{"level":2,"title":"NODE MANAGEMENT","slug":"node-management","link":"#node-management","children":[{"level":3,"title":"Show Child Paths","slug":"show-child-paths","link":"#show-child-paths","children":[]},{"level":3,"title":"Show Child Nodes","slug":"show-child-nodes","link":"#show-child-nodes","children":[]},{"level":3,"title":"Count Nodes","slug":"count-nodes","link":"#count-nodes","children":[]},{"level":3,"title":"Show Devices","slug":"show-devices","link":"#show-devices","children":[]},{"level":3,"title":"Count Devices","slug":"count-devices","link":"#count-devices","children":[]}]},{"level":2,"title":"INSERT & LOAD DATA","slug":"insert-load-data","link":"#insert-load-data","children":[{"level":3,"title":"Insert Data","slug":"insert-data","link":"#insert-data","children":[]},{"level":3,"title":"Load External TsFile Tool","slug":"load-external-tsfile-tool","link":"#load-external-tsfile-tool","children":[]}]},{"level":2,"title":"DELETE DATA","slug":"delete-data","link":"#delete-data","children":[{"level":3,"title":"Delete Single Timeseries","slug":"delete-single-timeseries","link":"#delete-single-timeseries","children":[]},{"level":3,"title":"Delete Multiple Timeseries","slug":"delete-multiple-timeseries","link":"#delete-multiple-timeseries","children":[]},{"level":3,"title":"Delete Time Partition (experimental)","slug":"delete-time-partition-experimental","link":"#delete-time-partition-experimental","children":[]}]},{"level":2,"title":"QUERY DATA","slug":"query-data","link":"#query-data","children":[{"level":3,"title":"Basic Examples","slug":"basic-examples","link":"#basic-examples","children":[]},{"level":3,"title":"SELECT CLAUSE","slug":"select-clause","link":"#select-clause","children":[]},{"level":3,"title":"WHERE CLAUSE","slug":"where-clause","link":"#where-clause","children":[]},{"level":3,"title":"GROUP BY CLAUSE","slug":"group-by-clause","link":"#group-by-clause","children":[]},{"level":3,"title":"HAVING CLAUSE","slug":"having-clause","link":"#having-clause","children":[]},{"level":3,"title":"FILL CLAUSE","slug":"fill-clause","link":"#fill-clause","children":[]},{"level":3,"title":"LIMIT and SLIMIT CLAUSES (PAGINATION)","slug":"limit-and-slimit-clauses-pagination","link":"#limit-and-slimit-clauses-pagination","children":[]},{"level":3,"title":"ORDER BY CLAUSE","slug":"order-by-clause","link":"#order-by-clause","children":[]},{"level":3,"title":"ALIGN BY CLAUSE","slug":"align-by-clause","link":"#align-by-clause","children":[]},{"level":3,"title":"INTO CLAUSE (QUERY WRITE-BACK)","slug":"into-clause-query-write-back","link":"#into-clause-query-write-back","children":[]}]},{"level":2,"title":"OPERATOR","slug":"operator","link":"#operator","children":[{"level":3,"title":"Arithmetic Operators","slug":"arithmetic-operators","link":"#arithmetic-operators","children":[]},{"level":3,"title":"Comparison Operators","slug":"comparison-operators","link":"#comparison-operators","children":[]},{"level":3,"title":"Logical Operators","slug":"logical-operators","link":"#logical-operators","children":[]}]},{"level":2,"title":"BUILT-IN FUNCTIONS","slug":"built-in-functions","link":"#built-in-functions","children":[{"level":3,"title":"Aggregate Functions","slug":"aggregate-functions","link":"#aggregate-functions","children":[]},{"level":3,"title":"Arithmetic Functions","slug":"arithmetic-functions","link":"#arithmetic-functions","children":[]},{"level":3,"title":"Comparison Functions","slug":"comparison-functions","link":"#comparison-functions","children":[]},{"level":3,"title":"String Processing Functions","slug":"string-processing-functions","link":"#string-processing-functions","children":[]},{"level":3,"title":"Data Type Conversion Function","slug":"data-type-conversion-function","link":"#data-type-conversion-function","children":[]},{"level":3,"title":"Constant Timeseries Generating Functions","slug":"constant-timeseries-generating-functions","link":"#constant-timeseries-generating-functions","children":[]},{"level":3,"title":"Selector Functions","slug":"selector-functions","link":"#selector-functions","children":[]},{"level":3,"title":"Continuous Interval Functions","slug":"continuous-interval-functions","link":"#continuous-interval-functions","children":[]},{"level":3,"title":"Variation Trend Calculation Functions","slug":"variation-trend-calculation-functions","link":"#variation-trend-calculation-functions","children":[]},{"level":3,"title":"Sample Functions","slug":"sample-functions","link":"#sample-functions","children":[]},{"level":3,"title":"Change Points Function","slug":"change-points-function","link":"#change-points-function","children":[]}]},{"level":2,"title":"DATA QUALITY FUNCTION LIBRARY","slug":"data-quality-function-library","link":"#data-quality-function-library","children":[{"level":3,"title":"Data Quality","slug":"data-quality","link":"#data-quality","children":[]},{"level":3,"title":"Data Profiling","slug":"data-profiling","link":"#data-profiling","children":[]},{"level":3,"title":"Anomaly Detection","slug":"anomaly-detection","link":"#anomaly-detection","children":[]},{"level":3,"title":"Frequency Domain","slug":"frequency-domain","link":"#frequency-domain","children":[]},{"level":3,"title":"Data Matching","slug":"data-matching","link":"#data-matching","children":[]},{"level":3,"title":"Data Repairing","slug":"data-repairing","link":"#data-repairing","children":[]},{"level":3,"title":"Series Discovery","slug":"series-discovery","link":"#series-discovery","children":[]},{"level":3,"title":"Machine Learning","slug":"machine-learning","link":"#machine-learning","children":[]}]},{"level":2,"title":"LAMBDA EXPRESSION","slug":"lambda-expression","link":"#lambda-expression","children":[]},{"level":2,"title":"CONDITIONAL EXPRESSION","slug":"conditional-expression","link":"#conditional-expression","children":[]},{"level":2,"title":"TRIGGER","slug":"trigger","link":"#trigger","children":[{"level":3,"title":"Create Trigger","slug":"create-trigger","link":"#create-trigger","children":[]},{"level":3,"title":"Drop Trigger","slug":"drop-trigger","link":"#drop-trigger","children":[]},{"level":3,"title":"Show Trigger","slug":"show-trigger","link":"#show-trigger","children":[]}]},{"level":2,"title":"CONTINUOUS QUERY (CQ)","slug":"continuous-query-cq","link":"#continuous-query-cq","children":[{"level":3,"title":"Configuring execution intervals","slug":"configuring-execution-intervals","link":"#configuring-execution-intervals","children":[]},{"level":3,"title":"Configuring time range for resampling","slug":"configuring-time-range-for-resampling","link":"#configuring-time-range-for-resampling","children":[]},{"level":3,"title":"Configuring execution intervals and CQ time ranges","slug":"configuring-execution-intervals-and-cq-time-ranges","link":"#configuring-execution-intervals-and-cq-time-ranges","children":[]},{"level":3,"title":"Configuring end_time_offset for CQ time range","slug":"configuring-end-time-offset-for-cq-time-range","link":"#configuring-end-time-offset-for-cq-time-range","children":[]},{"level":3,"title":"CQ without group by clause","slug":"cq-without-group-by-clause","link":"#cq-without-group-by-clause","children":[]},{"level":3,"title":"CQ Management","slug":"cq-management","link":"#cq-management","children":[]}]},{"level":2,"title":"USER-DEFINED FUNCTION (UDF)","slug":"user-defined-function-udf","link":"#user-defined-function-udf","children":[{"level":3,"title":"UDF Registration","slug":"udf-registration","link":"#udf-registration","children":[]},{"level":3,"title":"UDF Deregistration","slug":"udf-deregistration","link":"#udf-deregistration","children":[]},{"level":3,"title":"UDF Queries","slug":"udf-queries","link":"#udf-queries","children":[]},{"level":3,"title":"Show All Registered UDFs","slug":"show-all-registered-udfs","link":"#show-all-registered-udfs","children":[]}]},{"level":2,"title":"ADMINISTRATION MANAGEMENT","slug":"administration-management","link":"#administration-management","children":[{"level":3,"title":"SQL Statements","slug":"sql-statements","link":"#sql-statements","children":[]},{"level":3,"title":"Operations restricted by non root users","slug":"operations-restricted-by-non-root-users","link":"#operations-restricted-by-non-root-users","children":[]}]}],"git":{"createdTime":1692104943000,"updatedTime":1692104943000,"contributors":[{"name":"wanghui42","email":"105700158+wanghui42@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":23.63,"words":7089},"filePathRelative":"UserGuide/Master/SQL-Manual/SQL-Manual.md","localizedDate":"August 15, 2023","autoDesc":true}');export{e as data};
