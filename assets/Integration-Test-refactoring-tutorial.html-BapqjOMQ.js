import{_ as n,c as a,b as l,o as e}from"./app-CNiZnG3t.js";const t={};function o(p,s){return e(),a("div",null,s[0]||(s[0]=[l(`<h1 id="集成测试" tabindex="-1"><a class="header-anchor" href="#集成测试"><span>集成测试</span></a></h1><h2 id="iotdb社区integration-test改造说明" tabindex="-1"><a class="header-anchor" href="#iotdb社区integration-test改造说明"><span>IoTDB社区Integration Test改造说明</span></a></h2><ul><li><p>步骤0. 前提须知</p><ul><li><strong>位置已移动</strong>；所有的Integration Test已被移动至单独的integration模块。</li><li><strong>测试用例必须打分类标签</strong>； <code>Category</code> 即测试分类标签，决定了该测试用例在哪套测试环境或流程中被测试。</li><li><strong>涉及测试环境的代码可能要重构</strong>；决定了该测试用例是否能被当前测试环境正确测试，需要根据相应的环境重构相应的代码。</li></ul></li><li><p>步骤1. 测试用例打标签</p><ul><li><p>在测试用例类或者测试用例方法前加上合适的<code>Category</code>，可以是任意期望的测试分类标签的集合。</p></li><li><p>真实样例，下面三个测试类的<code>Category</code>都是真实有效的，</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#ABB2BF;">@</span><span style="color:#E5C07B;">Category</span><span style="color:#E06C75;">({</span><span style="color:#E5C07B;">LocalStandaloneTest</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">class</span><span style="color:#ABB2BF;">,</span><span style="color:#E5C07B;"> ClusterTest</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">class</span><span style="color:#ABB2BF;">,</span><span style="color:#E5C07B;"> RemoteTest</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">class</span><span style="color:#E06C75;">})</span></span>
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
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>甚至，你还可以在测试方法级别加<code>Category</code>。</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#ABB2BF;">@</span><span style="color:#E5C07B;">Category</span><span style="color:#E06C75;">({</span><span style="color:#E5C07B;">LocalStandaloneTest</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">class</span><span style="color:#E06C75;">})</span></span>
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
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>目前，所有测试用例至少要加上单机测试的测试分类，即<code>LocalStandaloneTest.class</code>。</p></li></ul></li><li><p>步骤2. 环境代码重构</p><ul><li><p>如果测试用例需要在Cluster或者Remote环境下被测试，那么必须对环境相关的代码作相应重构，如果是仅在LocalStandalone环境下测试，则只推荐修改。（不是所有的测试用例可以在Cluster或者Remote环境下被测试，因为受限于部分功能的语句比如本地文件操作，这些代码不能被重构。）</p><table><thead><tr><th style="text-align:left;"></th><th style="text-align:center;">LocalStandalone</th><th style="text-align:center;">Cluster</th><th style="text-align:center;">Remote</th></tr></thead><tbody><tr><td style="text-align:left;">setUp and tearDown</td><td style="text-align:center;">Recommend</td><td style="text-align:center;">Must</td><td style="text-align:center;">Must</td></tr><tr><td style="text-align:left;">getConnection</td><td style="text-align:center;">Recommend</td><td style="text-align:center;">Must</td><td style="text-align:center;">Must</td></tr><tr><td style="text-align:left;">change config</td><td style="text-align:center;">Recommend</td><td style="text-align:center;">Must</td><td style="text-align:center;">Not support</td></tr><tr><td style="text-align:left;">Local file operation</td><td style="text-align:center;">Won&#39;t change</td><td style="text-align:center;">Not support</td><td style="text-align:center;">Not support</td></tr><tr><td style="text-align:left;">Local descriptor operation</td><td style="text-align:center;">Won&#39;t change</td><td style="text-align:center;">Not support</td><td style="text-align:center;">Not support</td></tr><tr><td style="text-align:left;">restart operation</td><td style="text-align:center;">Won&#39;t change</td><td style="text-align:center;">Not support</td><td style="text-align:center;">Not support</td></tr></tbody></table></li><li><p><code>setUp</code> 和<code>tearDown</code> 方法内的重构，在Cluster和Remote环境下是必须更改的</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#ABB2BF;">@</span><span style="color:#E5C07B;">Category</span><span style="color:#E06C75;">({</span><span style="color:#E5C07B;">LocalStandaloneTest</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">class</span><span style="color:#ABB2BF;">,</span><span style="color:#E5C07B;"> ClusterTest</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">class</span><span style="color:#ABB2BF;">,</span><span style="color:#E5C07B;"> RemoteTest</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">class</span><span style="color:#E06C75;">})</span></span>
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
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>getConnection</code> 的重构，在Cluster和Remote环境下是必须更改</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">  private</span><span style="color:#C678DD;"> static</span><span style="color:#C678DD;"> void</span><span style="color:#61AFEF;"> insertData</span><span style="color:#E06C75;">() throws ClassNotFoundException {</span></span>
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
<span class="line"><span style="color:#E06C75;">  }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>更改配置的方法，在Cluster环境下是必须重构的。（由于目前Remote环境无法远程更改配置，更改配置的测试用例将不支持Remote环境下测试）</p><ul><li>在Cluster环境下，由于无法动态更改配置，只有环境init前的配置更改才有效。</li><li>重构已包含了大部分的配置更改，通过<code>ConfigFactory.getConfig()</code> 的方法可以进行链式更改。</li></ul><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#ABB2BF;">@</span><span style="color:#E5C07B;">Category</span><span style="color:#E06C75;">({</span><span style="color:#E5C07B;">LocalStandaloneTest</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">class</span><span style="color:#ABB2BF;">,</span><span style="color:#E5C07B;"> ClusterTest</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">class</span><span style="color:#E06C75;">})</span></span>
<span class="line"><span style="color:#C678DD;">public</span><span style="color:#C678DD;"> class</span><span style="color:#E5C07B;"> IoTDBCompleteIT</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;">  private</span><span style="color:#C678DD;"> int</span><span style="color:#E06C75;"> prevVirtualStorageGroupNum</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  @</span><span style="color:#E5C07B;">Before</span></span>
<span class="line"><span style="color:#C678DD;">  public</span><span style="color:#C678DD;"> void</span><span style="color:#61AFEF;"> setUp</span><span style="color:#ABB2BF;">()</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    prevVirtualStorageGroupNum </span><span style="color:#56B6C2;">=</span></span>
<span class="line"><span style="color:#E5C07B;">        IoTDBDescriptor</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">getInstance</span><span style="color:#ABB2BF;">().</span><span style="color:#61AFEF;">getConfig</span><span style="color:#ABB2BF;">().</span><span style="color:#61AFEF;">getVirtualStorageGroupNum</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    // IoTDBDescriptor.getInstance().getConfig().setVirtualStorageGroupNum(16); // orginal code</span></span>
<span class="line"><span style="color:#E5C07B;">    ConfigFactory</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">getConfig</span><span style="color:#ABB2BF;">().</span><span style="color:#61AFEF;">setVirtualStorageGroupNum</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">16</span><span style="color:#ABB2BF;">); </span><span style="color:#7F848E;font-style:italic;">// new code</span></span>
<span class="line"><span style="color:#E5C07B;">    EnvFactory</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">getEnv</span><span style="color:#ABB2BF;">().</span><span style="color:#61AFEF;">initBeforeClass</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>若配置项尚未在<code>ConfigFactory.getConfig()</code> 的方法中包含，需要在BaseConfig.java接口文件中定义，在StandaloneEnvConfig.java和ClusterEnvConfig.java中分别实现，这部分不是很常用，具体方法可以参考已实现的部分，目前暂不列出。</li></ul></li></ul></li></ul>`,3)]))}const i=n(t,[["render",o],["__file","Integration-Test-refactoring-tutorial.html.vue"]]),r=JSON.parse('{"path":"/zh/UserGuide/V0.13.x/Integration-Test/Integration-Test-refactoring-tutorial.html","title":"集成测试","lang":"zh-CN","frontmatter":{"description":"集成测试 IoTDB社区Integration Test改造说明 步骤0. 前提须知 位置已移动；所有的Integration Test已被移动至单独的integration模块。 测试用例必须打分类标签； Category 即测试分类标签，决定了该测试用例在哪套测试环境或流程中被测试。 涉及测试环境的代码可能要重构；决定了该测试用例是否能被当前测试环...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V0.13.x/Integration-Test/Integration-Test-refactoring-tutorial.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Integration-Test/Integration-Test-refactoring-tutorial.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"集成测试"}],["meta",{"property":"og:description","content":"集成测试 IoTDB社区Integration Test改造说明 步骤0. 前提须知 位置已移动；所有的Integration Test已被移动至单独的integration模块。 测试用例必须打分类标签； Category 即测试分类标签，决定了该测试用例在哪套测试环境或流程中被测试。 涉及测试环境的代码可能要重构；决定了该测试用例是否能被当前测试环..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"集成测试\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"IoTDB社区Integration Test改造说明","slug":"iotdb社区integration-test改造说明","link":"#iotdb社区integration-test改造说明","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","username":"CritasWang","email":"critas@outlook.com","commits":1,"url":"https://github.com/CritasWang"}]},"readingTime":{"minutes":3.07,"words":921},"filePathRelative":"zh/UserGuide/V0.13.x/Integration-Test/Integration-Test-refactoring-tutorial.md","localizedDate":"2023年7月10日","autoDesc":true}');export{i as comp,r as data};
