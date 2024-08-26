import{_ as e,o as t,c as r,e as o}from"./app-CQeJnOJS.js";const i={},s=o('<h1 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h1><ul><li>The trigger takes effect from the time of registration, and does not process the existing historical data. **That is, only insertion requests that occur after the trigger is successfully registered will be listened to by the trigger. **</li><li>The fire process of trigger is synchronous currently, so you need to ensure the efficiency of the trigger, otherwise the writing performance may be greatly affected. <strong>You need to guarantee concurrency safety of triggers yourself</strong>.</li><li>Please do no register too many triggers in the cluster. Because the trigger information is fully stored in the ConfigNode, and there is a copy of the information in all DataNodes</li><li><strong>It is recommended to stop writing when registering triggers</strong>. Registering a trigger is not an atomic operation. When registering a trigger, there will be an intermediate state in which some nodes in the cluster have registered the trigger, and some nodes have not yet registered successfully. To avoid write requests on some nodes being listened to by triggers and not being listened to on some nodes, we recommend not to perform writes when registering triggers.</li><li>When the node holding the stateful trigger instance goes down, we will try to restore the corresponding instance on another node. During the recovery process, we will call the restore interface of the trigger class once.</li><li>The trigger JAR package has a size limit, which must be less than min(<code>config_node_ratis_log_appender_buffer_size_max</code>, 2G), where <code>config_node_ratis_log_appender_buffer_size_max</code> is a configuration item. For the specific meaning, please refer to the IOTDB configuration item description.</li><li><strong>It is better not to have classes with the same full class name but different function implementations in different JAR packages.</strong> For example, trigger1 and trigger2 correspond to resources trigger1.jar and trigger2.jar respectively. If two JAR packages contain a <code>org.apache.iotdb.trigger.example.AlertListener</code> class, when <code>CREATE TRIGGER</code> uses this class, the system will randomly load the class in one of the JAR packages, which will eventually leads the inconsistent behavior of trigger and other issues.</li></ul>',2),n=[s];function a(c,g){return t(),r("div",null,n)}const h=e(i,[["render",a],["__file","Notes.html.vue"]]),d=JSON.parse('{"path":"/UserGuide/V1.0.x/Trigger/Notes.html","title":"Notes","lang":"en-US","frontmatter":{"description":"Notes The trigger takes effect from the time of registration, and does not process the existing historical data. **That is, only insertion requests that occur after the trigger ...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/Trigger/Notes.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.0.x/Trigger/Notes.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Notes"}],["meta",{"property":"og:description","content":"Notes The trigger takes effect from the time of registration, and does not process the existing historical data. **That is, only insertion requests that occur after the trigger ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Notes\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.46,"words":437},"filePathRelative":"UserGuide/V1.0.x/Trigger/Notes.md","localizedDate":"July 10, 2023","autoDesc":true}');export{h as comp,d as data};
