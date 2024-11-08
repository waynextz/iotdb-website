import{_ as a,c as s,b as n,o as i}from"./app-CRFlbjpx.js";const t={};function l(o,e){return i(),s("div",null,e[0]||(e[0]=[n(`<h1 id="go-native-api" tabindex="-1"><a class="header-anchor" href="#go-native-api"><span>Go Native API</span></a></h1><h2 id="dependencies" tabindex="-1"><a class="header-anchor" href="#dependencies"><span>Dependencies</span></a></h2><ul><li>golang &gt;= 1.13</li><li>make &gt;= 3.0</li><li>curl &gt;= 7.1.1</li><li>thrift 0.15.0</li><li>Linux、Macos or other unix-like systems</li><li>Windows+bash (WSL、cygwin、Git Bash)</li></ul><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation"><span>Installation</span></a></h2><ul><li>go mod</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable">GO111MODULE</span><span class="token operator">=</span>on</span>
<span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable">GOPROXY</span><span class="token operator">=</span>https://goproxy.io</span>
<span class="line"></span>
<span class="line"><span class="token function">mkdir</span> session_example <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> session_example</span>
<span class="line"></span>
<span class="line"><span class="token function">curl</span> <span class="token parameter variable">-o</span> session_example.go <span class="token parameter variable">-L</span> https://github.com/apache/iotdb-client-go/raw/main/example/session_example.go</span>
<span class="line"></span>
<span class="line">go mod init session_example</span>
<span class="line">go run session_example.go</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>GOPATH</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># get thrift 0.13.0</span></span>
<span class="line">go get github.com/apache/thrift</span>
<span class="line"><span class="token builtin class-name">cd</span> <span class="token variable">$GOPATH</span>/src/github.com/apache/thrift</span>
<span class="line"><span class="token function">git</span> checkout <span class="token number">0.13</span>.0</span>
<span class="line"></span>
<span class="line"><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">$GOPATH</span>/src/iotdb-client-go-example/session_example</span>
<span class="line"><span class="token builtin class-name">cd</span> <span class="token variable">$GOPATH</span>/src/iotdb-client-go-example/session_example</span>
<span class="line"><span class="token function">curl</span> <span class="token parameter variable">-o</span> session_example.go <span class="token parameter variable">-L</span> https://github.com/apache/iotdb-client-go/raw/main/example/session_example.go</span>
<span class="line">go run session_example.go</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8)]))}const r=a(t,[["render",l],["__file","Programming-Go-Native-API.html.vue"]]),c=JSON.parse('{"path":"/UserGuide/latest/API/Programming-Go-Native-API.html","title":"Go Native API","lang":"en-US","frontmatter":{"description":"Go Native API Dependencies golang >= 1.13 make >= 3.0 curl >= 7.1.1 thrift 0.15.0 Linux、Macos or other unix-like systems Windows+bash (WSL、cygwin、Git Bash) Installation go mod G...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/latest/API/Programming-Go-Native-API.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/latest/API/Programming-Go-Native-API.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Go Native API"}],["meta",{"property":"og:description","content":"Go Native API Dependencies golang >= 1.13 make >= 3.0 curl >= 7.1.1 thrift 0.15.0 Linux、Macos or other unix-like systems Windows+bash (WSL、cygwin、Git Bash) Installation go mod G..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-15T07:57:32.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-15T07:57:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Go Native API\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-15T07:57:32.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Dependencies","slug":"dependencies","link":"#dependencies","children":[]},{"level":2,"title":"Installation","slug":"installation","link":"#installation","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1728979052000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1},{"name":"Haonan","email":"hhaonan@outlook.com","commits":1}]},"readingTime":{"minutes":0.68,"words":204},"filePathRelative":"UserGuide/latest/API/Programming-Go-Native-API.md","localizedDate":"July 10, 2023","autoDesc":true}');export{r as comp,c as data};
