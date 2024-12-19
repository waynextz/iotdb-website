import{_ as i,c as t,b as a,o as l}from"./app-C-0rb--l.js";const o={};function n(s,e){return l(),t("div",null,e[0]||(e[0]=[a('<h1 id="走进时序数据" tabindex="-1"><a class="header-anchor" href="#走进时序数据"><span>走进时序数据</span></a></h1><h2 id="什么叫时序数据" tabindex="-1"><a class="header-anchor" href="#什么叫时序数据"><span>什么叫时序数据？</span></a></h2><p>万物互联的今天，物联网场景、工业场景等各类场景都在进行数字化转型，人们通过在各类设备上安装传感器对设备的各类状态进行采集。如电机采集电压、电流，风机的叶片转速、角速度、发电功率；车辆采集经纬度、速度、油耗；桥梁的振动频率、挠度、位移量等。传感器的数据采集，已经渗透在各个行业中。</p><figure><img src="https://alioss.timecho.com/docs/img/时序数据介绍.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>通常来说，我们把每个采集点位叫做一个<strong>测点（ 也叫物理量、时间序列、时间线、信号量、指标、测量值等）</strong>，每个测点都在随时间的推移不断收集到新的数据信息，从而构成了一条<strong>时间序列</strong>。用表格的方式，每个时间序列就是一个由时间、值两列形成的表格；用图形化的方式，每个时间序列就是一个随时间推移形成的走势图，也可以形象的称之为设备的“心电图”。</p><figure><img src="https://alioss.timecho.com/docs/img/心电图1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>传感器产生的海量时序数据是各行各业数字化转型的基础，因此我们对时序数据的模型梳理主要围绕设备、传感器展开。</p><h2 id="时序数据中的关键概念有哪些" tabindex="-1"><a class="header-anchor" href="#时序数据中的关键概念有哪些"><span>时序数据中的关键概念有哪些？</span></a></h2><p>时序数据中主要涉及的概念由下至上可分为：数据点、测点、设备。</p><figure><img src="https://alioss.timecho.com/docs/img/白板.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="数据点" tabindex="-1"><a class="header-anchor" href="#数据点"><span>数据点</span></a></h3><ul><li>定义：由一个时间戳和一个数值组成，其中时间戳为 long 类型，数值可以为 BOOLEAN、FLOAT、INT32 等各种类型。</li><li>示例：如上图中表格形式的时间序列的一行，或图形形式的时间序列的一个点，就是一个数据点。</li></ul><figure><img src="https://alioss.timecho.com/docs/img/数据点.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="测点" tabindex="-1"><a class="header-anchor" href="#测点"><span>测点</span></a></h3><ul><li>定义：是多个数据点按时间戳递增排列形成的一个时间序列。通常一个测点代表一个采集点位，能够定期采集所在环境的物理量。</li><li>又名：物理量、时间序列、时间线、信号量、指标、测量值等</li><li>示例： <ul><li>电力场景：电流、电压</li><li>能源场景：风速、转速</li><li>车联网场景：油量、车速、经度、维度</li><li>工厂场景：温度、湿度</li></ul></li></ul><h3 id="设备" tabindex="-1"><a class="header-anchor" href="#设备"><span>设备</span></a></h3><ul><li>定义：对应一个实际场景中的物理设备，通常是一组测点的集合，由一到多个标签定位标识</li><li>示例 <ul><li>车联网场景：车辆，由车辆识别代码 VIN 标识</li><li>工厂场景：机械臂，由物联网平台生成的唯一 ID 标识</li><li>能源场景：风机，由区域、场站、线路、机型、实例等标识</li><li>监控场景：CPU，由机房、机架、Hostname、设备类型等标识</li></ul></li></ul>',17)]))}const c=i(o,[["render",n],["__file","Navigating_Time_Series_Data.html.vue"]]),p=JSON.parse('{"path":"/zh/UserGuide/V1.3.0-2/Basic-Concept/Navigating_Time_Series_Data.html","title":"走进时序数据","lang":"zh-CN","frontmatter":{"description":"走进时序数据 什么叫时序数据？ 万物互联的今天，物联网场景、工业场景等各类场景都在进行数字化转型，人们通过在各类设备上安装传感器对设备的各类状态进行采集。如电机采集电压、电流，风机的叶片转速、角速度、发电功率；车辆采集经纬度、速度、油耗；桥梁的振动频率、挠度、位移量等。传感器的数据采集，已经渗透在各个行业中。 通常来说，我们把每个采集点位叫做一个测点（...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.3.0-2/Basic-Concept/Navigating_Time_Series_Data.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.3.0-2/Basic-Concept/Navigating_Time_Series_Data.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"走进时序数据"}],["meta",{"property":"og:description","content":"走进时序数据 什么叫时序数据？ 万物互联的今天，物联网场景、工业场景等各类场景都在进行数字化转型，人们通过在各类设备上安装传感器对设备的各类状态进行采集。如电机采集电压、电流，风机的叶片转速、角速度、发电功率；车辆采集经纬度、速度、油耗；桥梁的振动频率、挠度、位移量等。传感器的数据采集，已经渗透在各个行业中。 通常来说，我们把每个采集点位叫做一个测点（..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alioss.timecho.com/docs/img/%E6%97%B6%E5%BA%8F%E6%95%B0%E6%8D%AE%E4%BB%8B%E7%BB%8D.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-11T11:01:16.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-11T11:01:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"走进时序数据\\",\\"image\\":[\\"https://alioss.timecho.com/docs/img/%E6%97%B6%E5%BA%8F%E6%95%B0%E6%8D%AE%E4%BB%8B%E7%BB%8D.png\\",\\"https://alioss.timecho.com/docs/img/%E5%BF%83%E7%94%B5%E5%9B%BE1.png\\",\\"https://alioss.timecho.com/docs/img/%E7%99%BD%E6%9D%BF.png\\",\\"https://alioss.timecho.com/docs/img/%E6%95%B0%E6%8D%AE%E7%82%B9.png\\"],\\"dateModified\\":\\"2024-11-11T11:01:16.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"什么叫时序数据？","slug":"什么叫时序数据","link":"#什么叫时序数据","children":[]},{"level":2,"title":"时序数据中的关键概念有哪些？","slug":"时序数据中的关键概念有哪些","link":"#时序数据中的关键概念有哪些","children":[{"level":3,"title":"数据点","slug":"数据点","link":"#数据点","children":[]},{"level":3,"title":"测点","slug":"测点","link":"#测点","children":[]},{"level":3,"title":"设备","slug":"设备","link":"#设备","children":[]}]}],"git":{"createdTime":1719298997000,"updatedTime":1731322876000,"contributors":[{"name":"W1y1r","username":"W1y1r","email":"150988475+W1y1r@users.noreply.github.com","commits":1,"url":"https://github.com/W1y1r"},{"name":"majialin","username":"majialin","email":"107627937+mal117@users.noreply.github.com","commits":1,"url":"https://github.com/majialin"}]},"readingTime":{"minutes":2.81,"words":843},"filePathRelative":"zh/UserGuide/V1.3.0-2/Basic-Concept/Navigating_Time_Series_Data.md","localizedDate":"2024年6月25日","autoDesc":true}');export{c as comp,p as data};
