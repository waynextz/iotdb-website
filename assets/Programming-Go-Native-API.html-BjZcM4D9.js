import{_ as n,c as a,b as e,o as l}from"./app-CLygX6ac.js";const o={};function p(t,s){return l(),a("div",null,s[0]||(s[0]=[e(`<h2 id="go-native-api" tabindex="-1"><a class="header-anchor" href="#go-native-api"><span>Go Native API</span></a></h2><h3 id="dependencies" tabindex="-1"><a class="header-anchor" href="#dependencies"><span>Dependencies</span></a></h3><ul><li>golang &gt;= 1.13</li><li>make &gt;= 3.0</li><li>curl &gt;= 7.1.1</li><li>thrift 0.15.0</li><li>Linux、Macos or other unix-like systems</li><li>Windows+bash (WSL、cygwin、Git Bash)</li></ul><h3 id="installation" tabindex="-1"><a class="header-anchor" href="#installation"><span>Installation</span></a></h3><ul><li>go mod</li></ul><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">export</span><span style="color:#E06C75;"> GO111MODULE</span><span style="color:#56B6C2;">=</span><span style="color:#E06C75;">on</span></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#E06C75;"> GOPROXY</span><span style="color:#56B6C2;">=</span><span style="color:#E06C75;">https</span><span style="color:#ABB2BF;">://</span><span style="color:#E06C75;">goproxy</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">io</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">mkdir</span><span style="color:#98C379;"> session_example</span><span style="color:#ABB2BF;"> &amp;&amp; </span><span style="color:#56B6C2;">cd</span><span style="color:#98C379;"> session_example</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">curl</span><span style="color:#D19A66;"> -o</span><span style="color:#98C379;"> session_example.go</span><span style="color:#D19A66;"> -L</span><span style="color:#98C379;"> https://github.com/apache/iotdb-client-go/raw/main/example/session_example.go</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">go</span><span style="color:#98C379;"> mod</span><span style="color:#98C379;"> init</span><span style="color:#98C379;"> session_example</span></span>
<span class="line"><span style="color:#61AFEF;">go</span><span style="color:#98C379;"> run</span><span style="color:#98C379;"> session_example.go</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>GOPATH</li></ul><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># get thrift 0.13.0</span></span>
<span class="line"><span style="color:#61AFEF;">go</span><span style="color:#98C379;"> get</span><span style="color:#98C379;"> github.com/apache/thrift</span></span>
<span class="line"><span style="color:#56B6C2;">cd</span><span style="color:#E06C75;"> $GOPATH</span><span style="color:#98C379;">/src/github.com/apache/thrift</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> checkout</span><span style="color:#D19A66;"> 0.13.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">mkdir</span><span style="color:#D19A66;"> -p</span><span style="color:#E06C75;"> $GOPATH</span><span style="color:#98C379;">/src/iotdb-client-go-example/session_example</span></span>
<span class="line"><span style="color:#56B6C2;">cd</span><span style="color:#E06C75;"> $GOPATH</span><span style="color:#98C379;">/src/iotdb-client-go-example/session_example</span></span>
<span class="line"><span style="color:#61AFEF;">curl</span><span style="color:#D19A66;"> -o</span><span style="color:#98C379;"> session_example.go</span><span style="color:#D19A66;"> -L</span><span style="color:#98C379;"> https://github.com/apache/iotdb-client-go/raw/main/example/session_example.go</span></span>
<span class="line"><span style="color:#61AFEF;">go</span><span style="color:#98C379;"> run</span><span style="color:#98C379;"> session_example.go</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="how-to-use-the-sessionpool" tabindex="-1"><a class="header-anchor" href="#how-to-use-the-sessionpool"><span>How to Use the SessionPool</span></a></h3><p>SessionPool is a wrapper of a Session Set. Using SessionPool, the user do not need to consider how to reuse a session connection.<br> If there is no available connections and the pool reaches its max size, the all methods will hang until there is a available connection.<br> The PutBack method must be called after use</p><h4 id="new-sessionpool" tabindex="-1"><a class="header-anchor" href="#new-sessionpool"><span>New sessionPool</span></a></h4><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#E06C75;">config</span><span style="color:#E5C07B;"> :=</span><span style="color:#C678DD;"> &amp;</span><span style="color:#E5C07B;">client</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">PoolConfig</span><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#E06C75;">    Host</span><span style="color:#ABB2BF;">:     </span><span style="color:#E06C75;">host</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">    Port</span><span style="color:#ABB2BF;">:     </span><span style="color:#E06C75;">port</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">    UserName</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">user</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">    Password</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">password</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#E06C75;">sessionPool</span><span style="color:#E5C07B;"> =</span><span style="color:#E06C75;"> client</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">NewSessionPool</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">config</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">60000</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">60000</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">false</span><span style="color:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="get-session-through-sessionpool-putback-after-use" tabindex="-1"><a class="header-anchor" href="#get-session-through-sessionpool-putback-after-use"><span>Get session through sessionPool, putback after use</span></a></h4><p>set storage group</p><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#E06C75;">session</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">err</span><span style="color:#E5C07B;"> :=</span><span style="color:#E06C75;"> sessionPool</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">GetSession</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#C678DD;">defer</span><span style="color:#E06C75;"> sessionPool</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">PutBack</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">session</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">if</span><span style="color:#E06C75;"> err</span><span style="color:#56B6C2;"> ==</span><span style="color:#D19A66;"> nil</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E06C75;">    session</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">SetStorageGroup</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">sg</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>query statement</p><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">var</span><span style="color:#E06C75;"> timeout</span><span style="color:#C678DD;"> int64</span><span style="color:#E5C07B;"> =</span><span style="color:#D19A66;"> 1000</span></span>
<span class="line"><span style="color:#E06C75;">session</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">err</span><span style="color:#E5C07B;"> :=</span><span style="color:#E06C75;"> sessionPool</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">GetSession</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#C678DD;">defer</span><span style="color:#E06C75;"> sessionPool</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">PutBack</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">session</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">if</span><span style="color:#E06C75;"> err</span><span style="color:#56B6C2;"> !=</span><span style="color:#D19A66;"> nil</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E06C75;">    log</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">Print</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">err</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">    return</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#E06C75;">sessionDataSet</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">err</span><span style="color:#E5C07B;"> :=</span><span style="color:#E06C75;"> session</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">ExecuteQueryStatement</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">sql</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">&amp;</span><span style="color:#E06C75;">timeout</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">if</span><span style="color:#E06C75;"> err</span><span style="color:#56B6C2;"> ==</span><span style="color:#D19A66;"> nil</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;">    defer</span><span style="color:#E06C75;"> sessionDataSet</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">Close</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#61AFEF;">    printDataSet1</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">sessionDataSet</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">} </span><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E06C75;">    log</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">Println</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">err</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17)]))}const r=n(o,[["render",p],["__file","Programming-Go-Native-API.html.vue"]]),c=JSON.parse('{"path":"/UserGuide/V0.13.x/API/Programming-Go-Native-API.html","title":"","lang":"en-US","frontmatter":{"description":"Go Native API Dependencies golang >= 1.13 make >= 3.0 curl >= 7.1.1 thrift 0.15.0 Linux、Macos or other unix-like systems Windows+bash (WSL、cygwin、Git Bash) Installation go mod G...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/API/Programming-Go-Native-API.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V0.13.x/API/Programming-Go-Native-API.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"Go Native API Dependencies golang >= 1.13 make >= 3.0 curl >= 7.1.1 thrift 0.15.0 Linux、Macos or other unix-like systems Windows+bash (WSL、cygwin、Git Bash) Installation go mod G..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-16T14:58:01.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-16T14:58:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-16T14:58:01.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Go Native API","slug":"go-native-api","link":"#go-native-api","children":[{"level":3,"title":"Dependencies","slug":"dependencies","link":"#dependencies","children":[]},{"level":3,"title":"Installation","slug":"installation","link":"#installation","children":[]},{"level":3,"title":"How to Use the SessionPool","slug":"how-to-use-the-sessionpool","link":"#how-to-use-the-sessionpool","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1734361081000,"contributors":[{"name":"Mister-Hope","username":"Mister-Hope","email":"mister-hope@outlook.com","commits":1,"url":"https://github.com/Mister-Hope"},{"name":"Haonan","username":"Haonan","email":"hhaonan@outlook.com","commits":1,"url":"https://github.com/Haonan"},{"name":"CritasWang","username":"CritasWang","email":"critas@outlook.com","commits":1,"url":"https://github.com/CritasWang"}]},"readingTime":{"minutes":1.13,"words":340},"filePathRelative":"UserGuide/V0.13.x/API/Programming-Go-Native-API.md","localizedDate":"July 10, 2023","autoDesc":true}');export{r as comp,c as data};
