import{_ as s,c as a,b as n,o as l}from"./app-CNiZnG3t.js";const o={};function t(i,e){return l(),a("div",null,e[0]||(e[0]=[n(`<h1 id="go-native-api" tabindex="-1"><a class="header-anchor" href="#go-native-api"><span>Go Native API</span></a></h1><p>The Git repository for the Go Native API client is located <a href="https://github.com/apache/iotdb-client-go/" target="_blank" rel="noopener noreferrer">here</a></p><h2 id="dependencies" tabindex="-1"><a class="header-anchor" href="#dependencies"><span>Dependencies</span></a></h2><ul><li>golang &gt;= 1.13</li><li>make &gt;= 3.0</li><li>curl &gt;= 7.1.1</li><li>thrift 0.15.0</li><li>Linux、Macos or other unix-like systems</li><li>Windows+bash (WSL、cygwin、Git Bash)</li></ul><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation"><span>Installation</span></a></h2><ul><li>go mod</li></ul><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">export</span><span style="color:#E06C75;"> GO111MODULE</span><span style="color:#56B6C2;">=</span><span style="color:#E06C75;">on</span></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#E06C75;"> GOPROXY</span><span style="color:#56B6C2;">=</span><span style="color:#E06C75;">https</span><span style="color:#ABB2BF;">://</span><span style="color:#E06C75;">goproxy</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">io</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">mkdir</span><span style="color:#98C379;"> session_example</span><span style="color:#ABB2BF;"> &amp;&amp; </span><span style="color:#56B6C2;">cd</span><span style="color:#98C379;"> session_example</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">curl</span><span style="color:#D19A66;"> -o</span><span style="color:#98C379;"> session_example.go</span><span style="color:#D19A66;"> -L</span><span style="color:#98C379;"> https://github.com/apache/iotdb-client-go/raw/main/example/session_example.go</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">go</span><span style="color:#98C379;"> mod</span><span style="color:#98C379;"> init</span><span style="color:#98C379;"> session_example</span></span>
<span class="line"><span style="color:#61AFEF;">go</span><span style="color:#98C379;"> run</span><span style="color:#98C379;"> session_example.go</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>GOPATH</li></ul><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># get thrift 0.15.0</span></span>
<span class="line"><span style="color:#61AFEF;">go</span><span style="color:#98C379;"> get</span><span style="color:#98C379;"> github.com/apache/thrift</span></span>
<span class="line"><span style="color:#56B6C2;">cd</span><span style="color:#E06C75;"> $GOPATH</span><span style="color:#98C379;">/src/github.com/apache/thrift</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> checkout</span><span style="color:#D19A66;"> 0.15.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">mkdir</span><span style="color:#D19A66;"> -p</span><span style="color:#E06C75;"> $GOPATH</span><span style="color:#98C379;">/src/iotdb-client-go-example/session_example</span></span>
<span class="line"><span style="color:#56B6C2;">cd</span><span style="color:#E06C75;"> $GOPATH</span><span style="color:#98C379;">/src/iotdb-client-go-example/session_example</span></span>
<span class="line"><span style="color:#61AFEF;">curl</span><span style="color:#D19A66;"> -o</span><span style="color:#98C379;"> session_example.go</span><span style="color:#D19A66;"> -L</span><span style="color:#98C379;"> https://github.com/apache/iotdb-client-go/raw/main/example/session_example.go</span></span>
<span class="line"><span style="color:#61AFEF;">go</span><span style="color:#98C379;"> run</span><span style="color:#98C379;"> session_example.go</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9)]))}const p=s(o,[["render",t],["__file","Programming-Go-Native-API.html.vue"]]),c=JSON.parse('{"path":"/UserGuide/V2.0.1/Tree/API/Programming-Go-Native-API.html","title":"Go Native API","lang":"en-US","frontmatter":{"description":"Go Native API The Git repository for the Go Native API client is located here Dependencies golang >= 1.13 make >= 3.0 curl >= 7.1.1 thrift 0.15.0 Linux、Macos or other unix-like ...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V2.0.1/Tree/API/Programming-Go-Native-API.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V2.0.1/Tree/API/Programming-Go-Native-API.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Go Native API"}],["meta",{"property":"og:description","content":"Go Native API The Git repository for the Go Native API client is located here Dependencies golang >= 1.13 make >= 3.0 curl >= 7.1.1 thrift 0.15.0 Linux、Macos or other unix-like ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-13T04:33:18.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-13T04:33:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Go Native API\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-13T04:33:18.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Dependencies","slug":"dependencies","link":"#dependencies","children":[]},{"level":2,"title":"Installation","slug":"installation","link":"#installation","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1734064398000,"contributors":[{"name":"majialin","username":"majialin","email":"107627937+mal117@users.noreply.github.com","commits":1,"url":"https://github.com/majialin"},{"name":"W1y1r","username":"W1y1r","email":"150988475+W1y1r@users.noreply.github.com","commits":1,"url":"https://github.com/W1y1r"},{"name":"Haonan","username":"Haonan","email":"hhaonan@outlook.com","commits":1,"url":"https://github.com/Haonan"},{"name":"Christofer Dutz","username":"Christofer Dutz","email":"christofer.dutz@c-ware.de","commits":1,"url":"https://github.com/Christofer Dutz"},{"name":"Lei","username":"Lei","email":"33376433+LeiRui@users.noreply.github.com","commits":1,"url":"https://github.com/Lei"},{"name":"CritasWang","username":"CritasWang","email":"critas@outlook.com","commits":1,"url":"https://github.com/CritasWang"}]},"readingTime":{"minutes":0.73,"words":220},"filePathRelative":"UserGuide/V2.0.1/Tree/API/Programming-Go-Native-API.md","localizedDate":"July 10, 2023","autoDesc":true}');export{p as comp,c as data};
