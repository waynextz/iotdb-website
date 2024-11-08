import{_ as l,c as o,b as e,d as c,e as s,a as t,w as p,r as i,o as u}from"./app-CRFlbjpx.js";const r={};function d(k,n){const a=i("RouteLink");return u(),o("div",null,[n[5]||(n[5]=e('<h2 id="元数据模板" tabindex="-1"><a class="header-anchor" href="#元数据模板"><span>元数据模板</span></a></h2><h3 id="问题背景" tabindex="-1"><a class="header-anchor" href="#问题背景"><span>问题背景</span></a></h3><p>对于大量的同类型的实体，每一个实体下的物理量都相同，为每个序列注册时间序列一方面时间序列的元数据将占用较多的内存资源，另一方面，大量序列的维护工作也会十分复杂。</p><p>为了实现同类型不同实体的物理量元数据共享，减少元数据内存占用，同时简化同类型实体的管理，IoTDB引入元数据模板功能。</p><p>下图展示了一个燃油车场景的数据模型，各地区的多台燃油车的速度、油量、加速度、角速度四个物理量将会被采集，显然这些燃油车实体具备相同的物理量。</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Data-Concept/Measurement-Template/example_without_template.png?raw=true" alt="example without template"><h3 id="概念定义" tabindex="-1"><a class="header-anchor" href="#概念定义"><span>概念定义</span></a></h3><p>元数据模板（Schema template）</p><p>实际应用中有许多实体所采集的物理量相同，即具有相同的工况名称和类型，可以声明一个<strong>元数据模板</strong>来定义可采集的物理量集合。</p><p>将元数据模版挂载在树形数据模式的任意节点上，表示该节点下的所有实体具有相同的物理量集合。</p><p>目前每一条路径节点仅允许挂载一个元数据模板，即当一个节点被挂载元数据模板后，它的祖先节点和后代节点都不能再挂载元数据模板。实体将使用其自身或祖先的元数据模板作为有效模板。</p><p>特别需要说明的是，挂载模板与使用模板的概念不同。一个节点挂载模板后，其所有后代节点都可以使用这个模板，因此可以通过向同类实体的祖先节点挂载模板来简化操作。当系统向挂载模板的节点（或其后代节点）插入模板中定义的物理量时，这个节点就被设置为“正在使用模板”。</p><p>使用元数据模板后，问题背景中示例的燃油车数据模型将会转变至下图所示的形式。所有的物理量元数据仅在模板中保存一份，所有的实体共享模板中的元数据。</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Data-Concept/Measurement-Template/example_with_template.png?raw=true" alt="example with template"><h4 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期"><span>生命周期</span></a></h4><p>了解元数据的生命周期及相关名词，有助于更顺畅地使用元数据模板。在描述这一概念时，有六个关键词分别指向特定的过程，分别是“创建”、“挂载”、“激活”、“解除”、“卸载”、和“删除”。下图展示了一个模板从创建、挂到删除的全部过程。当用户操作执行其中任一过程时，系统都会执行对应条件检查，如条件检查通过，则操作成功，否则，操作会被拒绝：</p><ol><li>创建模板时，检查确认正在创建的模板名称与所有已存在的模板不重复；</li><li>在某节点挂载模板，需检查该节点的所有祖先节点与子孙节点，确认均未挂载任何模板；</li><li>在某节点激活模板，需检查确认该节点或其祖先已挂载对应模板，且该节点下不存在与模板中同名的物理量；</li><li>在某节点解除模板时，需确认该节点已经激活了模板，请注意，解除模板会删除该节点通过模板实例化的物理量及其数据点；</li><li>在某节点卸载模板时，需检查确认该节点曾挂载该模板，且其所有子孙节点均不处于模板激活状态；</li><li>删除模板时，需检查确认模板没有挂载在任何一个节点上。</li></ol><p>最后需要补充的是，<strong>对挂载模板与激活模板进行区分，是为了服务一种常见的场景</strong>：在 Apache IoTDB 元数据模型 MTree 中，经常需要在数量众多的节点上“应用”元数据模板，而这些节点一般拥有共同的祖先节点。因此，可以在其共同祖先节点<strong>挂载</strong>模板，而不必对其大量的孩子节点进行挂载操作。对于需要“应用”模板的节点，则应该使用<strong>激活模板</strong>的操作。</p><img style="width:100%;max-width:800px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Data-Concept/Measurement-Template/example_template_lifetime_zh.png?raw=true" alt="example with template"><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h3>',20)),c("p",null,[n[2]||(n[2]=s("目前，用户可以通过 Session 编程接口或 IoTDB-SQL 来使用元数据模板，包括模板的创建、修改、挂载与卸载等。Session 编程接口的详细文档可参见")),t(a,{to:"/zh/UserGuide/V1.1.x/API/Programming-Java-Native-API.html"},{default:p(()=>n[0]||(n[0]=[s("此处")])),_:1}),n[3]||(n[3]=s("，IoTDB-SQL 的详细文档可参加")),t(a,{to:"/zh/UserGuide/V1.1.x/Operate-Metadata/Template.html"},{default:p(()=>n[1]||(n[1]=[s("此处")])),_:1}),n[4]||(n[4]=s("。下文将以 Session 中使用方法为例，进行简要介绍。"))]),n[6]||(n[6]=e(`<ul><li>创建元数据模板</li></ul><p>在 Session 中创建元数据模板，可以通过先后创建 Template、MeasurementNode 的对象，构造模板内部物理量结构，并通过以下接口创建模板</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">createSchemaTemplate</span><span class="token punctuation">(</span><span class="token class-name">Template</span> template<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">Class</span> <span class="token class-name">Template</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token keyword">boolean</span> directShareTime<span class="token punctuation">;</span></span>
<span class="line">    <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Node</span><span class="token punctuation">&gt;</span></span> children<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token class-name">Template</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">boolean</span> isShareTime<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addToTemplate</span><span class="token punctuation">(</span><span class="token class-name">Node</span> node<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">deleteFromTemplate</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setShareTime</span><span class="token punctuation">(</span><span class="token keyword">boolean</span> shareTime<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">Abstract</span> <span class="token class-name">Class</span> <span class="token class-name">Node</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addChild</span><span class="token punctuation">(</span><span class="token class-name">Node</span> node<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">deleteChild</span><span class="token punctuation">(</span><span class="token class-name">Node</span> node<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">Class</span> <span class="token class-name">MeasurementNode</span> <span class="token keyword">extends</span> <span class="token class-name">Node</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">TSDataType</span> dataType<span class="token punctuation">;</span></span>
<span class="line">    <span class="token class-name">TSEncoding</span> encoding<span class="token punctuation">;</span></span>
<span class="line">    <span class="token class-name">CompressionType</span> compressor<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token class-name">MeasurementNode</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> </span>
<span class="line">                           <span class="token class-name">TSDataType</span> dataType<span class="token punctuation">,</span> </span>
<span class="line">                           <span class="token class-name">TSEncoding</span> encoding<span class="token punctuation">,</span></span>
<span class="line">                          <span class="token class-name">CompressionType</span> compressor<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>构造元数据模板</li></ul><p>构造上图中的元数据模板，并挂载到对应节点，可参考如下代码。<strong>请注意，我们强烈建议您将模板设置在 database 或 database 下层的节点中，以更好地适配未来地更新及各模块的协作。</strong></p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token class-name">MeasurementNode</span> nodeV <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MeasurementNode</span><span class="token punctuation">(</span><span class="token string">&quot;velocity&quot;</span><span class="token punctuation">,</span> <span class="token class-name">TSDataType</span><span class="token punctuation">.</span><span class="token constant">FLOAT</span><span class="token punctuation">,</span> <span class="token class-name">TSEncoding</span><span class="token punctuation">.</span><span class="token constant">RLE</span><span class="token punctuation">,</span> <span class="token class-name">CompressionType</span><span class="token punctuation">.</span><span class="token constant">SNAPPY</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">MeasurementNode</span> nodeF <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MeasurementNode</span><span class="token punctuation">(</span><span class="token string">&quot;fuel_amount&quot;</span><span class="token punctuation">,</span> <span class="token class-name">TSDataType</span><span class="token punctuation">.</span><span class="token constant">FLOAT</span><span class="token punctuation">,</span> <span class="token class-name">TSEncoding</span><span class="token punctuation">.</span><span class="token constant">RLE</span><span class="token punctuation">,</span> <span class="token class-name">CompressionType</span><span class="token punctuation">.</span><span class="token constant">SNAPPY</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">MeasurementNode</span> nodeA <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MeasurementNode</span><span class="token punctuation">(</span><span class="token string">&quot;acceleration&quot;</span><span class="token punctuation">,</span> <span class="token class-name">TSDataType</span><span class="token punctuation">.</span><span class="token constant">DOUBLE</span><span class="token punctuation">,</span> <span class="token class-name">TSEncoding</span><span class="token punctuation">.</span><span class="token constant">GORILLA</span><span class="token punctuation">,</span> <span class="token class-name">CompressionType</span><span class="token punctuation">.</span><span class="token constant">SNAPPY</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">MeasurementNode</span> nodeAng <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MeasurementNode</span><span class="token punctuation">(</span><span class="token string">&quot;angular_velocity&quot;</span><span class="token punctuation">,</span> <span class="token class-name">TSDataType</span><span class="token punctuation">.</span><span class="token constant">DOUBLE</span><span class="token punctuation">,</span> <span class="token class-name">TSEncoding</span><span class="token punctuation">.</span><span class="token constant">GORILLA</span><span class="token punctuation">,</span> <span class="token class-name">CompressionType</span><span class="token punctuation">.</span><span class="token constant">SNAPPY</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">Template</span> template <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Template</span><span class="token punctuation">(</span><span class="token string">&quot;template&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">template<span class="token punctuation">.</span><span class="token function">addToTemplate</span><span class="token punctuation">(</span>nodeV<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">template<span class="token punctuation">.</span><span class="token function">addToTemplate</span><span class="token punctuation">(</span>nodeF<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">template<span class="token punctuation">.</span><span class="token function">addToTemplate</span><span class="token punctuation">(</span>nodeA<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">template<span class="token punctuation">.</span><span class="token function">addToTemplate</span><span class="token punctuation">(</span>nodeAng<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">createSchemaTemplate</span><span class="token punctuation">(</span>template<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">setSchemaTemplate</span><span class="token punctuation">(</span><span class="token string">&quot;template&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;root.Beijing&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>挂载元数据模板后，即可进行数据的写入。如按上述代码创建并挂载模板，并在 root.Beijing 路径上设置了 database 后，即可写入例如 root.Beijing.petro_vehicle.velocity 等时间序列数据，系统将自动创建 petro_vehicle 节点，并设置其“正在使用模板”，对写入数据应用模板中为 velocity 定义的元数据信息。</p>`,7))])}const v=l(r,[["render",d],["__file","Schema-Template.html.vue"]]),h=JSON.parse('{"path":"/zh/UserGuide/V1.1.x/Data-Concept/Schema-Template.html","title":"","lang":"zh-CN","frontmatter":{"description":"元数据模板 问题背景 对于大量的同类型的实体，每一个实体下的物理量都相同，为每个序列注册时间序列一方面时间序列的元数据将占用较多的内存资源，另一方面，大量序列的维护工作也会十分复杂。 为了实现同类型不同实体的物理量元数据共享，减少元数据内存占用，同时简化同类型实体的管理，IoTDB引入元数据模板功能。 下图展示了一个燃油车场景的数据模型，各地区的多台燃...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.1.x/Data-Concept/Schema-Template.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/Data-Concept/Schema-Template.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"元数据模板 问题背景 对于大量的同类型的实体，每一个实体下的物理量都相同，为每个序列注册时间序列一方面时间序列的元数据将占用较多的内存资源，另一方面，大量序列的维护工作也会十分复杂。 为了实现同类型不同实体的物理量元数据共享，减少元数据内存占用，同时简化同类型实体的管理，IoTDB引入元数据模板功能。 下图展示了一个燃油车场景的数据模型，各地区的多台燃..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"元数据模板","slug":"元数据模板","link":"#元数据模板","children":[{"level":3,"title":"问题背景","slug":"问题背景","link":"#问题背景","children":[]},{"level":3,"title":"概念定义","slug":"概念定义","link":"#概念定义","children":[]},{"level":3,"title":"使用","slug":"使用","link":"#使用","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":5.73,"words":1719},"filePathRelative":"zh/UserGuide/V1.1.x/Data-Concept/Schema-Template.md","localizedDate":"2023年7月10日","autoDesc":true}');export{v as comp,h as data};
