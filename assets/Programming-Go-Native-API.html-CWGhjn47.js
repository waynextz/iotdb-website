import{_ as n,c as a,b as l,o as e}from"./app-CLygX6ac.js";const i={};function o(t,s){return e(),a("div",null,s[0]||(s[0]=[l(`<h2 id="go-原生接口" tabindex="-1"><a class="header-anchor" href="#go-原生接口"><span>Go 原生接口</span></a></h2><h3 id="依赖" tabindex="-1"><a class="header-anchor" href="#依赖"><span>依赖</span></a></h3><ul><li>golang &gt;= 1.13</li><li>make &gt;= 3.0</li><li>curl &gt;= 7.1.1</li><li>thrift 0.15.0</li><li>Linux、Macos 或其他类 unix 系统</li><li>Windows+bash(WSL、cygwin、Git Bash)</li></ul><h3 id="安装方法" tabindex="-1"><a class="header-anchor" href="#安装方法"><span>安装方法</span></a></h3><ul><li>通过 go mod</li></ul><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># 切换到 GOPATH 的 HOME 路径，启用 Go Modules 功能</span></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#E06C75;"> GO111MODULE</span><span style="color:#56B6C2;">=</span><span style="color:#E06C75;">on</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 配置 GOPROXY 环境变量</span></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#E06C75;"> GOPROXY</span><span style="color:#56B6C2;">=</span><span style="color:#E06C75;">https</span><span style="color:#ABB2BF;">://</span><span style="color:#E06C75;">goproxy</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">io</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 创建命名的文件夹或目录，并切换当前目录</span></span>
<span class="line"><span style="color:#61AFEF;">mkdir</span><span style="color:#98C379;"> session_example</span><span style="color:#ABB2BF;"> &amp;&amp; </span><span style="color:#56B6C2;">cd</span><span style="color:#98C379;"> session_example</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 保存文件，自动跳转到新的地址</span></span>
<span class="line"><span style="color:#61AFEF;">curl</span><span style="color:#D19A66;"> -o</span><span style="color:#98C379;"> session_example.go</span><span style="color:#D19A66;"> -L</span><span style="color:#98C379;"> https://github.com/apache/iotdb-client-go/raw/main/example/session_example.go</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 初始化 go module 环境</span></span>
<span class="line"><span style="color:#61AFEF;">go</span><span style="color:#98C379;"> mod</span><span style="color:#98C379;"> init</span><span style="color:#98C379;"> session_example</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 下载依赖包</span></span>
<span class="line"><span style="color:#61AFEF;">go</span><span style="color:#98C379;"> mod</span><span style="color:#98C379;"> tidy</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 编译并运行程序</span></span>
<span class="line"><span style="color:#61AFEF;">go</span><span style="color:#98C379;"> run</span><span style="color:#98C379;"> session_example.go</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>通过 GOPATH</li></ul><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># get thrift 0.13.0</span></span>
<span class="line"><span style="color:#61AFEF;">go</span><span style="color:#98C379;"> get</span><span style="color:#98C379;"> github.com/apache/thrift@0.13.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 递归创建目录</span></span>
<span class="line"><span style="color:#61AFEF;">mkdir</span><span style="color:#D19A66;"> -p</span><span style="color:#E06C75;"> $GOPATH</span><span style="color:#98C379;">/src/iotdb-client-go-example/session_example</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 切换到当前目录</span></span>
<span class="line"><span style="color:#56B6C2;">cd</span><span style="color:#E06C75;"> $GOPATH</span><span style="color:#98C379;">/src/iotdb-client-go-example/session_example</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 保存文件，自动跳转到新的地址</span></span>
<span class="line"><span style="color:#61AFEF;">curl</span><span style="color:#D19A66;"> -o</span><span style="color:#98C379;"> session_example.go</span><span style="color:#D19A66;"> -L</span><span style="color:#98C379;"> https://github.com/apache/iotdb-client-go/raw/main/example/session_example.go</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 初始化 go module 环境</span></span>
<span class="line"><span style="color:#61AFEF;">go</span><span style="color:#98C379;"> mod</span><span style="color:#98C379;"> init</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 下载依赖包</span></span>
<span class="line"><span style="color:#61AFEF;">go</span><span style="color:#98C379;"> mod</span><span style="color:#98C379;"> tidy</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 编译并运行程序</span></span>
<span class="line"><span style="color:#61AFEF;">go</span><span style="color:#98C379;"> run</span><span style="color:#98C379;"> session_example.go</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="注意-go原生客户端session不是线程安全的-强烈不建议在多线程场景下应用。如有多线程应用场景-请使用session-pool" tabindex="-1"><a class="header-anchor" href="#注意-go原生客户端session不是线程安全的-强烈不建议在多线程场景下应用。如有多线程应用场景-请使用session-pool"><span>注意：GO原生客户端Session不是线程安全的，强烈不建议在多线程场景下应用。如有多线程应用场景，请使用Session Pool.</span></a></h4>`,9)]))}const c=n(i,[["render",o],["__file","Programming-Go-Native-API.html.vue"]]),r=JSON.parse('{"path":"/zh/UserGuide/V0.13.x/API/Programming-Go-Native-API.html","title":"","lang":"zh-CN","frontmatter":{"description":"Go 原生接口 依赖 golang >= 1.13 make >= 3.0 curl >= 7.1.1 thrift 0.15.0 Linux、Macos 或其他类 unix 系统 Windows+bash(WSL、cygwin、Git Bash) 安装方法 通过 go mod 通过 GOPATH 注意：GO原生客户端Session不是线程安全的，强烈...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V0.13.x/API/Programming-Go-Native-API.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/API/Programming-Go-Native-API.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"Go 原生接口 依赖 golang >= 1.13 make >= 3.0 curl >= 7.1.1 thrift 0.15.0 Linux、Macos 或其他类 unix 系统 Windows+bash(WSL、cygwin、Git Bash) 安装方法 通过 go mod 通过 GOPATH 注意：GO原生客户端Session不是线程安全的，强烈..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-10-15T07:57:32.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-15T07:57:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-15T07:57:32.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Go 原生接口","slug":"go-原生接口","link":"#go-原生接口","children":[{"level":3,"title":"依赖","slug":"依赖","link":"#依赖","children":[]},{"level":3,"title":"安装方法","slug":"安装方法","link":"#安装方法","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1728979052000,"contributors":[{"name":"Haonan","username":"Haonan","email":"hhaonan@outlook.com","commits":1,"url":"https://github.com/Haonan"},{"name":"CritasWang","username":"CritasWang","email":"critas@outlook.com","commits":1,"url":"https://github.com/CritasWang"}]},"readingTime":{"minutes":1.27,"words":380},"filePathRelative":"zh/UserGuide/V0.13.x/API/Programming-Go-Native-API.md","localizedDate":"2023年7月10日","autoDesc":true}');export{c as comp,r as data};
