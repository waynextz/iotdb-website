import{_ as i,c as t,b as a,o as n}from"./app-Y2-ILDda.js";const s={};function o(r,e){return n(),t("div",null,e[0]||(e[0]=[a('<h1 id="entering-time-series-data" tabindex="-1"><a class="header-anchor" href="#entering-time-series-data"><span>Entering Time Series Data</span></a></h1><h2 id="what-is-time-series-data" tabindex="-1"><a class="header-anchor" href="#what-is-time-series-data"><span>What Is Time Series Data？</span></a></h2><p>In today&#39;s era of the Internet of Things, various scenarios such as the Internet of Things and industrial scenarios are undergoing digital transformation. People collect various states of devices by installing sensors on them. If the motor collects voltage and current, the blade speed, angular velocity, and power generation of the fan; Vehicle collection of latitude and longitude, speed, and fuel consumption; The vibration frequency, deflection, displacement, etc. of the bridge. The data collection of sensors has penetrated into various industries.</p><figure><img src="https://alioss.timecho.com/docs/img/20240505154735.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Generally speaking, we refer to each collection point as a measurement point (also known as a physical quantity, time series, timeline, signal quantity, indicator, measurement value, etc.). Each measurement point continuously collects new data information over time, forming a time series. In the form of a table, each time series is a table formed by two columns: time and value; In a graphical way, each time series is a trend chart formed over time, which can also be vividly referred to as the device&#39;s electrocardiogram.</p><figure><img src="https://alioss.timecho.com/docs/img/20240505154843.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>The massive time series data generated by sensors is the foundation of digital transformation in various industries, so our modeling of time series data mainly focuses on equipment and sensors.</p><h2 id="key-concepts-of-time-series-data" tabindex="-1"><a class="header-anchor" href="#key-concepts-of-time-series-data"><span>Key Concepts of Time Series Data</span></a></h2><p>The main concepts involved in time-series data can be divided from bottom to top: data points, measurement points, and equipment.</p><figure><img src="https://alioss.timecho.com/docs/img/20240505154513.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="data-point" tabindex="-1"><a class="header-anchor" href="#data-point"><span>Data Point</span></a></h3><ul><li>Definition: Consists of a timestamp and a value, where the timestamp is of type long and the value can be of various types such as BOOLEAN, FLOAT, INT32, etc.</li><li>Example: A row of a time series in the form of a table in the above figure, or a point of a time series in the form of a graph, is a data point.</li></ul><figure><img src="https://alioss.timecho.com/docs/img/20240505154432.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="measurement-points" tabindex="-1"><a class="header-anchor" href="#measurement-points"><span>Measurement Points</span></a></h3><ul><li>Definition: It is a time series formed by multiple data points arranged in increments according to timestamps. Usually, a measuring point represents a collection point and can regularly collect physical quantities of the environment it is located in.</li><li>Also known as: physical quantity, time series, timeline, semaphore, indicator, measurement value, etc</li><li>Example： <ul><li>Electricity scenario: current, voltage</li><li>Energy scenario: wind speed, rotational speed</li><li>Vehicle networking scenarios: fuel consumption, vehicle speed, longitude, dimensions</li><li>Factory scenario: temperature, humidity</li></ul></li></ul><h3 id="device" tabindex="-1"><a class="header-anchor" href="#device"><span>Device</span></a></h3><ul><li>Definition: Corresponding to a physical device in an actual scene, usually a collection of measurement points, identified by one to multiple labels</li><li>Example： <ul><li>Vehicle networking scenario: Vehicles identified by vehicle identification code (VIN)</li><li>Factory scenario: robotic arm, unique ID identification generated by IoT platform</li><li>Energy scenario: Wind turbines, identified by region, station, line, model, instance, etc</li><li>Monitoring scenario: CPU, identified by machine room, rack, Hostname, device type, etc</li></ul></li></ul>',17)]))}const c=i(s,[["render",o],["__file","Navigating_Time_Series_Data.html.vue"]]),m=JSON.parse(`{"path":"/UserGuide/latest/Basic-Concept/Navigating_Time_Series_Data.html","title":"Entering Time Series Data","lang":"en-US","frontmatter":{"description":"Entering Time Series Data What Is Time Series Data？ In today's era of the Internet of Things, various scenarios such as the Internet of Things and industrial scenarios are under...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/latest/Basic-Concept/Navigating_Time_Series_Data.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/latest/Basic-Concept/Navigating_Time_Series_Data.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Entering Time Series Data"}],["meta",{"property":"og:description","content":"Entering Time Series Data What Is Time Series Data？ In today's era of the Internet of Things, various scenarios such as the Internet of Things and industrial scenarios are under..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alioss.timecho.com/docs/img/20240505154735.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-11T11:01:16.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-11T11:01:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Entering Time Series Data\\",\\"image\\":[\\"https://alioss.timecho.com/docs/img/20240505154735.png\\",\\"https://alioss.timecho.com/docs/img/20240505154843.png\\",\\"https://alioss.timecho.com/docs/img/20240505154513.png\\",\\"https://alioss.timecho.com/docs/img/20240505154432.png\\"],\\"dateModified\\":\\"2024-11-11T11:01:16.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"What Is Time Series Data？","slug":"what-is-time-series-data","link":"#what-is-time-series-data","children":[]},{"level":2,"title":"Key Concepts of Time Series Data","slug":"key-concepts-of-time-series-data","link":"#key-concepts-of-time-series-data","children":[{"level":3,"title":"Data Point","slug":"data-point","link":"#data-point","children":[]},{"level":3,"title":"Measurement Points","slug":"measurement-points","link":"#measurement-points","children":[]},{"level":3,"title":"Device","slug":"device","link":"#device","children":[]}]}],"git":{"createdTime":1719298997000,"updatedTime":1731322876000,"contributors":[{"name":"W1y1r","email":"150988475+W1y1r@users.noreply.github.com","commits":1},{"name":"majialin","email":"107627937+mal117@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.89,"words":568},"filePathRelative":"UserGuide/latest/Basic-Concept/Navigating_Time_Series_Data.md","localizedDate":"June 25, 2024","autoDesc":true}`);export{c as comp,m as data};
