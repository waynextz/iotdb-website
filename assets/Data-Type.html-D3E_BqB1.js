import{_ as s,c as i,b as a,d as n,e,a as d,f as r,r as y,o as c}from"./app-C-0rb--l.js";const g={};function o(x,t){const l=y("RouteLink");return c(),i("div",null,[t[13]||(t[13]=a('<h1 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型"><span>数据类型</span></a></h1><h2 id="基本数据类型" tabindex="-1"><a class="header-anchor" href="#基本数据类型"><span>基本数据类型</span></a></h2><p>IoTDB 支持：</p><ul><li>BOOLEAN（布尔值）</li><li>INT32（整型）</li><li>INT64（长整型）</li><li>FLOAT（单精度浮点数）</li><li>DOUBLE（双精度浮点数）</li><li>TEXT（字符串）</li></ul><p>一共六种数据类型。</p>',5)),n("p",null,[t[3]||(t[3]=e("其中 ")),t[4]||(t[4]=n("strong",null,"FLOAT",-1)),t[5]||(t[5]=e(" 与 ")),t[6]||(t[6]=n("strong",null,"DOUBLE",-1)),t[7]||(t[7]=e(" 类型的序列，如果编码方式采用 ")),d(l,{to:"/zh/UserGuide/V1.0.x/Data-Concept/Encoding.html"},{default:r(()=>t[0]||(t[0]=[e("RLE")])),_:1}),t[8]||(t[8]=e(" 或 ")),d(l,{to:"/zh/UserGuide/V1.0.x/Data-Concept/Encoding.html"},{default:r(()=>t[1]||(t[1]=[e("TS_2DIFF")])),_:1}),t[9]||(t[9]=e(" 可以指定 MAX_POINT_NUMBER，该项为浮点数的小数点后位数，若不指定则系统会根据配置文件")),t[10]||(t[10]=n("code",null,"iotdb-datanode.properties",-1)),t[11]||(t[11]=e("文件中的 ")),d(l,{to:"/zh/UserGuide/V1.0.x/Reference/DataNode-Config-Manual.html"},{default:r(()=>t[2]||(t[2]=[e("float_precision 项")])),_:1}),t[12]||(t[12]=e(" 配置。"))]),t[14]||(t[14]=a(`<p>当系统中用户输入的数据类型与该时间序列的数据类型不对应时，系统会提醒类型错误，如下所示，二阶差分编码不支持布尔类型：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>IoTDB&gt; create timeseries root.ln.wf02.wt02.status WITH DATATYPE=BOOLEAN, ENCODING=TS_2DIFF</span></span>
<span class="line"><span>error: encoding TS_2DIFF does not support BOOLEAN</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="时间戳类型" tabindex="-1"><a class="header-anchor" href="#时间戳类型"><span>时间戳类型</span></a></h2><p>时间戳是一个数据到来的时间点，其中包括绝对时间戳和相对时间戳。</p><h3 id="绝对时间戳" tabindex="-1"><a class="header-anchor" href="#绝对时间戳"><span>绝对时间戳</span></a></h3><p>IOTDB 中绝对时间戳分为二种，一种为 LONG 类型，一种为 DATETIME 类型（包含 DATETIME-INPUT, DATETIME-DISPLAY 两个小类）。</p><p>在用户在输入时间戳时，可以使用 LONG 类型的时间戳或 DATETIME-INPUT 类型的时间戳，其中 DATETIME-INPUT 类型的时间戳支持格式如表所示：</p><div style="text-align:center;"><p><strong>DATETIME-INPUT 类型支持格式</strong></p><table><thead><tr><th style="text-align:left;">format</th></tr></thead><tbody><tr><td style="text-align:left;">yyyy-MM-dd HH:mm:ss</td></tr><tr><td style="text-align:left;">yyyy/MM/dd HH:mm:ss</td></tr><tr><td style="text-align:left;">yyyy.MM.dd HH:mm:ss</td></tr><tr><td style="text-align:left;">yyyy-MM-dd HH:mm:ssZZ</td></tr><tr><td style="text-align:left;">yyyy/MM/dd HH:mm:ssZZ</td></tr><tr><td style="text-align:left;">yyyy.MM.dd HH:mm:ssZZ</td></tr><tr><td style="text-align:left;">yyyy/MM/dd HH:mm:ss.SSS</td></tr><tr><td style="text-align:left;">yyyy-MM-dd HH:mm:ss.SSS</td></tr><tr><td style="text-align:left;">yyyy.MM.dd HH:mm:ss.SSS</td></tr><tr><td style="text-align:left;">yyyy-MM-dd HH:mm:ss.SSSZZ</td></tr><tr><td style="text-align:left;">yyyy/MM/dd HH:mm:ss.SSSZZ</td></tr><tr><td style="text-align:left;">yyyy.MM.dd HH:mm:ss.SSSZZ</td></tr><tr><td style="text-align:left;">ISO8601 standard time format</td></tr></tbody></table></div><p>IoTDB 在显示时间戳时可以支持 LONG 类型以及 DATETIME-DISPLAY 类型，其中 DATETIME-DISPLAY 类型可以支持用户自定义时间格式。自定义时间格式的语法如表所示：</p><div style="text-align:center;"><p><strong>DATETIME-DISPLAY 自定义时间格式的语法</strong></p><table><thead><tr><th style="text-align:center;">Symbol</th><th style="text-align:center;">Meaning</th><th style="text-align:center;">Presentation</th><th style="text-align:center;">Examples</th></tr></thead><tbody><tr><td style="text-align:center;">G</td><td style="text-align:center;">era</td><td style="text-align:center;">era</td><td style="text-align:center;">era</td></tr><tr><td style="text-align:center;">C</td><td style="text-align:center;">century of era (&gt;=0)</td><td style="text-align:center;">number</td><td style="text-align:center;">20</td></tr><tr><td style="text-align:center;">Y</td><td style="text-align:center;">year of era (&gt;=0)</td><td style="text-align:center;">year</td><td style="text-align:center;">1996</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">x</td><td style="text-align:center;">weekyear</td><td style="text-align:center;">year</td><td style="text-align:center;">1996</td></tr><tr><td style="text-align:center;">w</td><td style="text-align:center;">week of weekyear</td><td style="text-align:center;">number</td><td style="text-align:center;">27</td></tr><tr><td style="text-align:center;">e</td><td style="text-align:center;">day of week</td><td style="text-align:center;">number</td><td style="text-align:center;">2</td></tr><tr><td style="text-align:center;">E</td><td style="text-align:center;">day of week</td><td style="text-align:center;">text</td><td style="text-align:center;">Tuesday; Tue</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">y</td><td style="text-align:center;">year</td><td style="text-align:center;">year</td><td style="text-align:center;">1996</td></tr><tr><td style="text-align:center;">D</td><td style="text-align:center;">day of year</td><td style="text-align:center;">number</td><td style="text-align:center;">189</td></tr><tr><td style="text-align:center;">M</td><td style="text-align:center;">month of year</td><td style="text-align:center;">month</td><td style="text-align:center;">July; Jul; 07</td></tr><tr><td style="text-align:center;">d</td><td style="text-align:center;">day of month</td><td style="text-align:center;">number</td><td style="text-align:center;">10</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">a</td><td style="text-align:center;">halfday of day</td><td style="text-align:center;">text</td><td style="text-align:center;">PM</td></tr><tr><td style="text-align:center;">K</td><td style="text-align:center;">hour of halfday (0~11)</td><td style="text-align:center;">number</td><td style="text-align:center;">0</td></tr><tr><td style="text-align:center;">h</td><td style="text-align:center;">clockhour of halfday (1~12)</td><td style="text-align:center;">number</td><td style="text-align:center;">12</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">H</td><td style="text-align:center;">hour of day (0~23)</td><td style="text-align:center;">number</td><td style="text-align:center;">0</td></tr><tr><td style="text-align:center;">k</td><td style="text-align:center;">clockhour of day (1~24)</td><td style="text-align:center;">number</td><td style="text-align:center;">24</td></tr><tr><td style="text-align:center;">m</td><td style="text-align:center;">minute of hour</td><td style="text-align:center;">number</td><td style="text-align:center;">30</td></tr><tr><td style="text-align:center;">s</td><td style="text-align:center;">second of minute</td><td style="text-align:center;">number</td><td style="text-align:center;">55</td></tr><tr><td style="text-align:center;">S</td><td style="text-align:center;">fraction of second</td><td style="text-align:center;">millis</td><td style="text-align:center;">978</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">z</td><td style="text-align:center;">time zone</td><td style="text-align:center;">text</td><td style="text-align:center;">Pacific Standard Time; PST</td></tr><tr><td style="text-align:center;">Z</td><td style="text-align:center;">time zone offset/id</td><td style="text-align:center;">zone</td><td style="text-align:center;">-0800; -08:00; America/Los_Angeles</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">&#39;</td><td style="text-align:center;">escape for text</td><td style="text-align:center;">delimiter</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">&#39;&#39;</td><td style="text-align:center;">single quote</td><td style="text-align:center;">literal</td><td style="text-align:center;">&#39;</td></tr></tbody></table></div><h3 id="相对时间戳" tabindex="-1"><a class="header-anchor" href="#相对时间戳"><span>相对时间戳</span></a></h3><p>相对时间是指与服务器时间<code>now()</code>和<code>DATETIME</code>类型时间相差一定时间间隔的时间。<br> 形式化定义为：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>Duration = (Digit+ (&#39;Y&#39;|&#39;MO&#39;|&#39;W&#39;|&#39;D&#39;|&#39;H&#39;|&#39;M&#39;|&#39;S&#39;|&#39;MS&#39;|&#39;US&#39;|&#39;NS&#39;))+</span></span>
<span class="line"><span>RelativeTime = (now() | DATETIME) ((+|-) Duration)+</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div> <div style="text-align:center;"><p><strong>The syntax of the duration unit</strong></p><table><thead><tr><th style="text-align:center;">Symbol</th><th style="text-align:center;">Meaning</th><th style="text-align:center;">Presentation</th><th style="text-align:center;">Examples</th></tr></thead><tbody><tr><td style="text-align:center;">y</td><td style="text-align:center;">year</td><td style="text-align:center;">1y=365 days</td><td style="text-align:center;">1y</td></tr><tr><td style="text-align:center;">mo</td><td style="text-align:center;">month</td><td style="text-align:center;">1mo=30 days</td><td style="text-align:center;">1mo</td></tr><tr><td style="text-align:center;">w</td><td style="text-align:center;">week</td><td style="text-align:center;">1w=7 days</td><td style="text-align:center;">1w</td></tr><tr><td style="text-align:center;">d</td><td style="text-align:center;">day</td><td style="text-align:center;">1d=1 day</td><td style="text-align:center;">1d</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">h</td><td style="text-align:center;">hour</td><td style="text-align:center;">1h=3600 seconds</td><td style="text-align:center;">1h</td></tr><tr><td style="text-align:center;">m</td><td style="text-align:center;">minute</td><td style="text-align:center;">1m=60 seconds</td><td style="text-align:center;">1m</td></tr><tr><td style="text-align:center;">s</td><td style="text-align:center;">second</td><td style="text-align:center;">1s=1 second</td><td style="text-align:center;">1s</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">ms</td><td style="text-align:center;">millisecond</td><td style="text-align:center;">1ms=1000_000 nanoseconds</td><td style="text-align:center;">1ms</td></tr><tr><td style="text-align:center;">us</td><td style="text-align:center;">microsecond</td><td style="text-align:center;">1us=1000 nanoseconds</td><td style="text-align:center;">1us</td></tr><tr><td style="text-align:center;">ns</td><td style="text-align:center;">nanosecond</td><td style="text-align:center;">1ns=1 nanosecond</td><td style="text-align:center;">1ns</td></tr></tbody></table></div><p>例子：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>now() - 1d2h //比服务器时间早 1 天 2 小时的时间</span></span>
<span class="line"><span>now() - 1w //比服务器时间早 1 周的时间</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意：&#39;+&#39;和&#39;-&#39;的左右两边必须有空格</p></blockquote>`,18))])}const m=s(g,[["render",o],["__file","Data-Type.html.vue"]]),u=JSON.parse('{"path":"/zh/UserGuide/V1.0.x/Data-Concept/Data-Type.html","title":"数据类型","lang":"zh-CN","frontmatter":{"description":"数据类型 基本数据类型 IoTDB 支持： BOOLEAN（布尔值） INT32（整型） INT64（长整型） FLOAT（单精度浮点数） DOUBLE（双精度浮点数） TEXT（字符串） 一共六种数据类型。 其中 FLOAT 与 DOUBLE 类型的序列，如果编码方式采用 或 可以指定 MAX_POINT_NUMBER，该项为浮点数的小数点后位数，若...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.0.x/Data-Concept/Data-Type.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/Data-Concept/Data-Type.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"数据类型"}],["meta",{"property":"og:description","content":"数据类型 基本数据类型 IoTDB 支持： BOOLEAN（布尔值） INT32（整型） INT64（长整型） FLOAT（单精度浮点数） DOUBLE（双精度浮点数） TEXT（字符串） 一共六种数据类型。 其中 FLOAT 与 DOUBLE 类型的序列，如果编码方式采用 或 可以指定 MAX_POINT_NUMBER，该项为浮点数的小数点后位数，若..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"数据类型\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"基本数据类型","slug":"基本数据类型","link":"#基本数据类型","children":[]},{"level":2,"title":"时间戳类型","slug":"时间戳类型","link":"#时间戳类型","children":[{"level":3,"title":"绝对时间戳","slug":"绝对时间戳","link":"#绝对时间戳","children":[]},{"level":3,"title":"相对时间戳","slug":"相对时间戳","link":"#相对时间戳","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","username":"CritasWang","email":"critas@outlook.com","commits":1,"url":"https://github.com/CritasWang"}]},"readingTime":{"minutes":3,"words":899},"filePathRelative":"zh/UserGuide/V1.0.x/Data-Concept/Data-Type.md","localizedDate":"2023年7月10日","autoDesc":true}');export{m as comp,u as data};
