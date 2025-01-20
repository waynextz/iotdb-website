import{_ as n,c as e,b as a,o as l}from"./app-CLygX6ac.js";const t={};function o(p,s){return l(),e("div",null,s[0]||(s[0]=[a(`<h1 id="integration-test-refactoring-tutorial" tabindex="-1"><a class="header-anchor" href="#integration-test-refactoring-tutorial"><span>Integration Test refactoring tutorial</span></a></h1><ul><li><p>Step 0. Prerequisites</p><ul><li><strong>IT Location has been moved</strong>; all Integration Tests have been moved to the integration module.</li><li><strong>Test case MUST label</strong>; the test classification label is the junit&#39;s <code>category</code>, which determines the test environment or process in which the test case is tested.</li><li><strong>Code related to the test environment MAY need to be refactored</strong>; this determines whether the current test environment can correctly test the test case. The corresponding statement needs to be refactored.</li></ul></li><li><p>Step 1. Labeling test cases</p><ul><li><p>Add the appropriate <code>Category</code> before the test case class or test case method, which can collect any desired test category labels.</p></li><li><p>The <code>Category</code> of the following three test categories are all real and effective,</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#ABB2BF;">@</span><span style="color:#E5C07B;">Category</span><span style="color:#E06C75;">({</span><span style="color:#E5C07B;">LocalStandaloneTest</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">class</span><span style="color:#ABB2BF;">,</span><span style="color:#E5C07B;"> ClusterTest</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">class</span><span style="color:#ABB2BF;">,</span><span style="color:#E5C07B;"> RemoteTest</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">class</span><span style="color:#E06C75;">})</span></span>
<span class="line"><span style="color:#C678DD;">public</span><span style="color:#C678DD;"> class</span><span style="color:#E5C07B;"> IoTDBAliasIT</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  ......</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">@</span><span style="color:#E5C07B;">Category</span><span style="color:#E06C75;">({</span><span style="color:#E5C07B;">LocalStandaloneTest</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">class</span><span style="color:#ABB2BF;">,</span><span style="color:#E5C07B;"> ClusterTest</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">class</span><span style="color:#E06C75;">})</span></span>
<span class="line"><span style="color:#C678DD;">public</span><span style="color:#C678DD;"> class</span><span style="color:#E5C07B;"> IoTDBAlignByDeviceIT</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  ......</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">@</span><span style="color:#E5C07B;">Category</span><span style="color:#E06C75;">({</span><span style="color:#E5C07B;">LocalStandaloneTest</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">class</span><span style="color:#E06C75;">})</span></span>
<span class="line"><span style="color:#C678DD;">public</span><span style="color:#C678DD;"> class</span><span style="color:#E5C07B;"> IoTDBArithmeticIT</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  ......</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>You can also add <code>Category</code> at the test method level.</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#ABB2BF;">@</span><span style="color:#E5C07B;">Category</span><span style="color:#E06C75;">({</span><span style="color:#E5C07B;">LocalStandaloneTest</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">class</span><span style="color:#E06C75;">})</span></span>
<span class="line"><span style="color:#C678DD;">public</span><span style="color:#C678DD;"> class</span><span style="color:#E5C07B;"> IoTDBExampleIT</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> // This case can ONLY test in environment of local.</span></span>
<span class="line"><span style="color:#ABB2BF;"> @</span><span style="color:#E5C07B;">Test</span></span>
<span class="line"><span style="color:#C678DD;"> public</span><span style="color:#C678DD;"> void</span><span style="color:#61AFEF;"> theStandaloneCase</span><span style="color:#ABB2BF;">()</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">   ......</span></span>
<span class="line"><span style="color:#ABB2BF;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> // This case can test in environment of local, cluster and remote.</span></span>
<span class="line"><span style="color:#ABB2BF;"> @</span><span style="color:#E5C07B;">Test</span></span>
<span class="line"><span style="color:#ABB2BF;"> @</span><span style="color:#E5C07B;">Category</span><span style="color:#E06C75;">({</span><span style="color:#E5C07B;">ClusterTest</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">class</span><span style="color:#ABB2BF;">,</span><span style="color:#E5C07B;"> RemoteTest</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">class</span><span style="color:#E06C75;">})</span></span>
<span class="line"><span style="color:#C678DD;"> public</span><span style="color:#C678DD;"> void</span><span style="color:#61AFEF;"> theAllEnvCase</span><span style="color:#ABB2BF;">()</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">   ......</span></span>
<span class="line"><span style="color:#ABB2BF;"> }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>At present, all test cases must at least add the <code>Category</code> of the stand-alone test, namely <code>LocalStandaloneTest.class</code>.</p></li></ul></li><li><p>Step 2. Environmental code refactoring</p><ul><li><p>If the test case needs to be tested in the Cluster or Remote environment, the environment-related code MUST be refactored accordingly. If it is only tested in the LocalStandalone environment, modifications are only recommended. (Not all test cases can be tested in the Cluster or Remote environment because statements that are limited by some functions, such as local file operations, cannot be refactored.)</p><table><thead><tr><th style="text-align:left;"></th><th style="text-align:center;">LocalStandalone</th><th style="text-align:center;">Cluster</th><th style="text-align:center;">Remote</th></tr></thead><tbody><tr><td style="text-align:left;">setUp and tearDown</td><td style="text-align:center;">Recommend</td><td style="text-align:center;">Must</td><td style="text-align:center;">Must</td></tr><tr><td style="text-align:left;">getConnection</td><td style="text-align:center;">Recommend</td><td style="text-align:center;">Must</td><td style="text-align:center;">Must</td></tr><tr><td style="text-align:left;">change config</td><td style="text-align:center;">Recommend</td><td style="text-align:center;">Must</td><td style="text-align:center;">Not support</td></tr><tr><td style="text-align:left;">Local file operation</td><td style="text-align:center;">Won&#39;t change</td><td style="text-align:center;">Not support</td><td style="text-align:center;">Not support</td></tr><tr><td style="text-align:left;">Local descriptor operation</td><td style="text-align:center;">Won&#39;t change</td><td style="text-align:center;">Not support</td><td style="text-align:center;">Not support</td></tr><tr><td style="text-align:left;">restart operation</td><td style="text-align:center;">Won&#39;t change</td><td style="text-align:center;">Not support</td><td style="text-align:center;">Not support</td></tr></tbody></table></li><li><p>The <code>setUp</code> and <code>tearDown</code> methods must be refactored in the Cluster and Remote environment</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#ABB2BF;">@</span><span style="color:#E5C07B;">Category</span><span style="color:#E06C75;">({</span><span style="color:#E5C07B;">LocalStandaloneTest</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">class</span><span style="color:#ABB2BF;">,</span><span style="color:#E5C07B;"> ClusterTest</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">class</span><span style="color:#ABB2BF;">,</span><span style="color:#E5C07B;"> RemoteTest</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">class</span><span style="color:#E06C75;">})</span></span>
<span class="line"><span style="color:#C678DD;">public</span><span style="color:#C678DD;"> class</span><span style="color:#E5C07B;"> IoTDBAliasIT</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  @</span><span style="color:#E5C07B;">BeforeClass</span></span>
<span class="line"><span style="color:#C678DD;">  public</span><span style="color:#C678DD;"> static</span><span style="color:#C678DD;"> void</span><span style="color:#61AFEF;"> setUp</span><span style="color:#ABB2BF;">()</span><span style="color:#C678DD;"> throws</span><span style="color:#E5C07B;"> Exception</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    // EnvironmentUtils.closeStatMonitor(); // orginal setup code</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    // EnvironmentUtils.envSetUp(); // orginal setup code</span></span>
<span class="line"><span style="color:#E5C07B;">    EnvFactory</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">getEnv</span><span style="color:#ABB2BF;">().</span><span style="color:#61AFEF;">initBeforeClass</span><span style="color:#ABB2BF;">(); </span><span style="color:#7F848E;font-style:italic;">// new initBeforeClass code</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">    insertData</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  @</span><span style="color:#E5C07B;">AfterClass</span></span>
<span class="line"><span style="color:#C678DD;">  public</span><span style="color:#C678DD;"> static</span><span style="color:#C678DD;"> void</span><span style="color:#61AFEF;"> tearDown</span><span style="color:#ABB2BF;">()</span><span style="color:#C678DD;"> throws</span><span style="color:#E5C07B;"> Exception</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    // EnvironmentUtils.cleanEnv(); // orginal code</span></span>
<span class="line"><span style="color:#E5C07B;">    EnvFactory</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">getEnv</span><span style="color:#ABB2BF;">().</span><span style="color:#61AFEF;">cleanAfterClass</span><span style="color:#ABB2BF;">(); </span><span style="color:#7F848E;font-style:italic;">// new cleanAfterClass code</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>The <code>getConnection</code> must be refactored in Cluster and Remote environments</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">private</span><span style="color:#C678DD;"> static</span><span style="color:#C678DD;"> void</span><span style="color:#61AFEF;"> insertData</span><span style="color:#E06C75;">() throws ClassNotFoundException {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    // Class.forName(Config.JDBC_DRIVER_NAME); // orginal connection code</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    // try (Connection connection =  </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    //         DriverManager.getConnection( </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    //             Config.IOTDB_URL_PREFIX + &quot;127.0.0.1:6667/&quot;, &quot;root&quot;, &quot;root&quot;);</span></span>
<span class="line"><span style="color:#C678DD;">    try</span><span style="color:#E06C75;"> (</span><span style="color:#E5C07B;">Connection</span><span style="color:#E06C75;"> connection </span><span style="color:#56B6C2;">=</span><span style="color:#E5C07B;"> EnvFactory</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">getEnv</span><span style="color:#ABB2BF;">().</span><span style="color:#61AFEF;">getConnection</span><span style="color:#ABB2BF;">();</span><span style="color:#7F848E;font-style:italic;"> // new code</span></span>
<span class="line"><span style="color:#E5C07B;">        Statement</span><span style="color:#E06C75;"> statement </span><span style="color:#56B6C2;">=</span><span style="color:#E5C07B;"> connection</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">createStatement</span><span style="color:#ABB2BF;">()</span><span style="color:#E06C75;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">      for</span><span style="color:#E06C75;"> (</span><span style="color:#E5C07B;">String</span><span style="color:#E06C75;"> sql </span><span style="color:#C678DD;">:</span><span style="color:#E06C75;"> sqls) {</span></span>
<span class="line"><span style="color:#E5C07B;">        statement</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">execute</span><span style="color:#ABB2BF;">(sql);</span></span>
<span class="line"><span style="color:#E06C75;">      }</span></span>
<span class="line"><span style="color:#E06C75;">    } </span><span style="color:#C678DD;">catch</span><span style="color:#E06C75;"> (</span><span style="color:#E5C07B;">Exception</span><span style="color:#E06C75;font-style:italic;"> e</span><span style="color:#E06C75;">) {</span></span>
<span class="line"><span style="color:#E5C07B;">      e</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">printStackTrace</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E06C75;">    }</span></span>
<span class="line"><span style="color:#E06C75;">  }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>The method of changing the IoTDB configuration must be refactored in the Cluster environment. (As the remote environment cannot change the configuration remotely at present, the test cases that change the configuration will not support testing in the remote environment)</p><ul><li>In the Cluster environment, as the configuration cannot be changed dynamically, only the configuration changes before the environment init are effective.</li><li>The refactoring has included most of the configuration changes, which can be changed through the method of <code>ConfigFactory.getConfig()</code>.</li></ul><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#ABB2BF;">  @</span><span style="color:#E5C07B;">Category</span><span style="color:#E06C75;">({</span><span style="color:#E5C07B;">LocalStandaloneTest</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">class</span><span style="color:#ABB2BF;">,</span><span style="color:#E5C07B;"> ClusterTest</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">class</span><span style="color:#E06C75;">})</span></span>
<span class="line"><span style="color:#C678DD;">  public</span><span style="color:#C678DD;"> class</span><span style="color:#E5C07B;"> IoTDBCompleteIT</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;">    private</span><span style="color:#C678DD;"> int</span><span style="color:#E06C75;"> prevVirtualStorageGroupNum</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    @</span><span style="color:#E5C07B;">Before</span></span>
<span class="line"><span style="color:#C678DD;">    public</span><span style="color:#C678DD;"> void</span><span style="color:#61AFEF;"> setUp</span><span style="color:#ABB2BF;">()</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">      prevVirtualStorageGroupNum </span><span style="color:#56B6C2;">=</span></span>
<span class="line"><span style="color:#E5C07B;">          IoTDBDescriptor</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">getInstance</span><span style="color:#ABB2BF;">().</span><span style="color:#61AFEF;">getConfig</span><span style="color:#ABB2BF;">().</span><span style="color:#61AFEF;">getVirtualStorageGroupNum</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">      // IoTDBDescriptor.getInstance().getConfig().setVirtualStorageGroupNum(16); // orginal code</span></span>
<span class="line"><span style="color:#E5C07B;">      ConfigFactory</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">getConfig</span><span style="color:#ABB2BF;">().</span><span style="color:#61AFEF;">setVirtualStorageGroupNum</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">16</span><span style="color:#ABB2BF;">); </span><span style="color:#7F848E;font-style:italic;">// new code</span></span>
<span class="line"><span style="color:#E5C07B;">      EnvFactory</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">getEnv</span><span style="color:#ABB2BF;">().</span><span style="color:#61AFEF;">initBeforeClass</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>If the configuration item has not been included in the method of <code>ConfigFactory.getConfig()</code>, it needs to be defined in the BaseConfig.java interface file and implemented in StandaloneEnvConfig.java and ClusterEnvConfig.java, respectively. This part is not very common. For specific, please refer to the realized part.</li></ul></li></ul></li></ul>`,2)]))}const i=n(t,[["render",o],["__file","Integration-Test-refactoring-tutorial.html.vue"]]),c=JSON.parse('{"path":"/UserGuide/V0.13.x/Integration-Test/Integration-Test-refactoring-tutorial.html","title":"Integration Test refactoring tutorial","lang":"en-US","frontmatter":{"description":"Integration Test refactoring tutorial Step 0. Prerequisites IT Location has been moved; all Integration Tests have been moved to the integration module. Test case MUST label; th...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Integration-Test/Integration-Test-refactoring-tutorial.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V0.13.x/Integration-Test/Integration-Test-refactoring-tutorial.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Integration Test refactoring tutorial"}],["meta",{"property":"og:description","content":"Integration Test refactoring tutorial Step 0. Prerequisites IT Location has been moved; all Integration Tests have been moved to the integration module. Test case MUST label; th..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Integration Test refactoring tutorial\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","username":"CritasWang","email":"critas@outlook.com","commits":1,"url":"https://github.com/CritasWang"}]},"readingTime":{"minutes":2.41,"words":723},"filePathRelative":"UserGuide/V0.13.x/Integration-Test/Integration-Test-refactoring-tutorial.md","localizedDate":"July 10, 2023","autoDesc":true}');export{i as comp,c as data};
