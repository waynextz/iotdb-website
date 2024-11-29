import{_ as s,c as n,b as a,o as t}from"./app-C6MIQYKi.js";const i={};function l(p,e){return t(),n("div",null,e[0]||(e[0]=[a(`<h1 id="string-processing" tabindex="-1"><a class="header-anchor" href="#string-processing"><span>String Processing</span></a></h1><h2 id="regexmatch" tabindex="-1"><a class="header-anchor" href="#regexmatch"><span>RegexMatch</span></a></h2><h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h3><p>The function is used to fetch matched contents from text with given regular expression.</p><p><strong>Name:</strong> REGEXMATCH</p><p><strong>Input Series:</strong> Only support a single input series. The data type is TEXT.</p><p><strong>Parameter:</strong></p><ul><li><code>regex</code>: The regular expression to match in the text. All grammars supported by Java are acceptable,<br> for example, <code>\\d+\\.\\d+\\.\\d+\\.\\d+</code> is expected to match any IPv4 addresses.</li><li><code>group</code>: The wanted group index in the matched result.<br> Reference to java.util.regex, group 0 is the whole pattern and<br> the next ones are numbered with the appearance order of left parentheses.<br> For example, the groups in <code>A(B(CD))</code> are: 0-<code>A(B(CD))</code>, 1-<code>B(CD)</code>, 2-<code>CD</code>.</li></ul><p><strong>Output Series:</strong> Output a single series. The type is TEXT.</p><p><strong>Note:</strong> Those points with null values or not matched with the given pattern will not return any results.</p><h3 id="examples" tabindex="-1"><a class="header-anchor" href="#examples"><span>Examples</span></a></h3><p>Input series:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+-------------------------------+</span>
<span class="line">|                         Time|                root.test.d1.s1|</span>
<span class="line">+-----------------------------+-------------------------------+</span>
<span class="line">|2021-01-01T00:00:01.000+08:00|        [192.168.0.1] [SUCCESS]|</span>
<span class="line">|2021-01-01T00:00:02.000+08:00|       [192.168.0.24] [SUCCESS]|</span>
<span class="line">|2021-01-01T00:00:03.000+08:00|           [192.168.0.2] [FAIL]|</span>
<span class="line">|2021-01-01T00:00:04.000+08:00|        [192.168.0.5] [SUCCESS]|</span>
<span class="line">|2021-01-01T00:00:05.000+08:00|      [192.168.0.124] [SUCCESS]|</span>
<span class="line">+-----------------------------+-------------------------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL for query:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> regexmatch<span class="token punctuation">(</span>s1<span class="token punctuation">,</span> <span class="token string">&quot;regex&quot;</span><span class="token operator">=</span><span class="token string">&quot;\\d+\\.\\d+\\.\\d+\\.\\d+&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;group&quot;</span><span class="token operator">=</span><span class="token string">&quot;0&quot;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Output series:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+----------------------------------------------------------------------+</span>
<span class="line">|                         Time|regexmatch(root.test.d1.s1, &quot;regex&quot;=&quot;\\d+\\.\\d+\\.\\d+\\.\\d+&quot;, &quot;group&quot;=&quot;0&quot;)|</span>
<span class="line">+-----------------------------+----------------------------------------------------------------------+</span>
<span class="line">|2021-01-01T00:00:01.000+08:00|                                                           192.168.0.1|</span>
<span class="line">|2021-01-01T00:00:02.000+08:00|                                                          192.168.0.24|</span>
<span class="line">|2021-01-01T00:00:03.000+08:00|                                                           192.168.0.2|</span>
<span class="line">|2021-01-01T00:00:04.000+08:00|                                                           192.168.0.5|</span>
<span class="line">|2021-01-01T00:00:05.000+08:00|                                                         192.168.0.124|</span>
<span class="line">+-----------------------------+----------------------------------------------------------------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="regexreplace" tabindex="-1"><a class="header-anchor" href="#regexreplace"><span>RegexReplace</span></a></h2><h3 id="usage-1" tabindex="-1"><a class="header-anchor" href="#usage-1"><span>Usage</span></a></h3><p>The function is used to replace the specific regular expression matches with given string.</p><p><strong>Name:</strong> REGEXREPLACE</p><p><strong>Input Series:</strong> Only support a single input series. The data type is TEXT.</p><p><strong>Parameter:</strong></p><ul><li><code>regex</code>: The target regular expression to be replaced. All grammars supported by Java are acceptable.</li><li><code>replace</code>: The string to be put on and back reference notes in Java is also supported,<br> for example, &#39;$1&#39; refers to group 1 in the <code>regex</code> which will be filled with corresponding matched results.</li><li><code>limit</code>: The number of matches to be replaced which should be an integer no less than -1,<br> default to -1 which means all matches will be replaced.</li><li><code>offset</code>: The number of matches to be skipped, which means the first <code>offset</code> matches will not be replaced, default to 0.</li><li><code>reverse</code>: Whether to count all the matches reversely, default to &#39;false&#39;.</li></ul><p><strong>Output Series:</strong> Output a single series. The type is TEXT.</p><h3 id="examples-1" tabindex="-1"><a class="header-anchor" href="#examples-1"><span>Examples</span></a></h3><p>Input series:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+-------------------------------+</span>
<span class="line">|                         Time|                root.test.d1.s1|</span>
<span class="line">+-----------------------------+-------------------------------+</span>
<span class="line">|2021-01-01T00:00:01.000+08:00|        [192.168.0.1] [SUCCESS]|</span>
<span class="line">|2021-01-01T00:00:02.000+08:00|       [192.168.0.24] [SUCCESS]|</span>
<span class="line">|2021-01-01T00:00:03.000+08:00|           [192.168.0.2] [FAIL]|</span>
<span class="line">|2021-01-01T00:00:04.000+08:00|        [192.168.0.5] [SUCCESS]|</span>
<span class="line">|2021-01-01T00:00:05.000+08:00|      [192.168.0.124] [SUCCESS]|</span>
<span class="line">+-----------------------------+-------------------------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL for query:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> regexreplace<span class="token punctuation">(</span>s1<span class="token punctuation">,</span> <span class="token string">&quot;regex&quot;</span><span class="token operator">=</span><span class="token string">&quot;192\\.168\\.0\\.(\\d+)&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;replace&quot;</span><span class="token operator">=</span><span class="token string">&quot;cluster-$1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;limit&quot;</span><span class="token operator">=</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Output series:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+-----------------------------------------------------------+</span>
<span class="line">|                         Time|regexreplace(root.test.d1.s1, &quot;regex&quot;=&quot;192\\.168\\.0\\.(\\d+)&quot;,|</span>
<span class="line">|                             |                       &quot;replace&quot;=&quot;cluster-$1&quot;, &quot;limit&quot;=&quot;1&quot;)|</span>
<span class="line">+-----------------------------+-----------------------------------------------------------+</span>
<span class="line">|2021-01-01T00:00:01.000+08:00|                                      [cluster-1] [SUCCESS]|</span>
<span class="line">|2021-01-01T00:00:02.000+08:00|                                     [cluster-24] [SUCCESS]|</span>
<span class="line">|2021-01-01T00:00:03.000+08:00|                                         [cluster-2] [FAIL]|</span>
<span class="line">|2021-01-01T00:00:04.000+08:00|                                      [cluster-5] [SUCCESS]|</span>
<span class="line">|2021-01-01T00:00:05.000+08:00|                                    [cluster-124] [SUCCESS]|</span>
<span class="line">+-----------------------------+-----------------------------------------------------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="regexsplit" tabindex="-1"><a class="header-anchor" href="#regexsplit"><span>RegexSplit</span></a></h2><h3 id="usage-2" tabindex="-1"><a class="header-anchor" href="#usage-2"><span>Usage</span></a></h3><p>The function is used to split text with given regular expression and return specific element.</p><p><strong>Name:</strong> REGEXSPLIT</p><p><strong>Input Series:</strong> Only support a single input series. The data type is TEXT.</p><p><strong>Parameter:</strong></p><ul><li><code>regex</code>: The regular expression used to split the text.<br> All grammars supported by Java are acceptable, for example, <code>[&#39;&quot;]</code> is expected to match <code>&#39;</code> and <code>&quot;</code>.</li><li><code>index</code>: The wanted index of elements in the split result.<br> It should be an integer no less than -1, default to -1 which means the length of the result array is returned<br> and any non-negative integer is used to fetch the text of the specific index starting from 0.</li></ul><p><strong>Output Series:</strong> Output a single series. The type is INT32 when <code>index</code> is -1 and TEXT when it&#39;s an valid index.</p><p><strong>Note:</strong> When <code>index</code> is out of the range of the result array, for example <code>0,1,2</code> split with <code>,</code> and <code>index</code> is set to 3,<br> no result are returned for that record.</p><h3 id="examples-2" tabindex="-1"><a class="header-anchor" href="#examples-2"><span>Examples</span></a></h3><p>Input series:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+---------------+</span>
<span class="line">|                         Time|root.test.d1.s1|</span>
<span class="line">+-----------------------------+---------------+</span>
<span class="line">|2021-01-01T00:00:01.000+08:00|      A,B,A+,B-|</span>
<span class="line">|2021-01-01T00:00:02.000+08:00|      A,A+,A,B+|</span>
<span class="line">|2021-01-01T00:00:03.000+08:00|         B+,B,B|</span>
<span class="line">|2021-01-01T00:00:04.000+08:00|      A+,A,A+,A|</span>
<span class="line">|2021-01-01T00:00:05.000+08:00|       A,B-,B,B|</span>
<span class="line">+-----------------------------+---------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL for query:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> regexsplit<span class="token punctuation">(</span>s1<span class="token punctuation">,</span> <span class="token string">&quot;regex&quot;</span><span class="token operator">=</span><span class="token string">&quot;,&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;index&quot;</span><span class="token operator">=</span><span class="token string">&quot;-1&quot;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Output series:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+------------------------------------------------------+</span>
<span class="line">|                         Time|regexsplit(root.test.d1.s1, &quot;regex&quot;=&quot;,&quot;, &quot;index&quot;=&quot;-1&quot;)|</span>
<span class="line">+-----------------------------+------------------------------------------------------+</span>
<span class="line">|2021-01-01T00:00:01.000+08:00|                                                     4|</span>
<span class="line">|2021-01-01T00:00:02.000+08:00|                                                     4|</span>
<span class="line">|2021-01-01T00:00:03.000+08:00|                                                     3|</span>
<span class="line">|2021-01-01T00:00:04.000+08:00|                                                     4|</span>
<span class="line">|2021-01-01T00:00:05.000+08:00|                                                     4|</span>
<span class="line">+-----------------------------+------------------------------------------------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Another SQL for query:</p><p>SQL for query:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> regexsplit<span class="token punctuation">(</span>s1<span class="token punctuation">,</span> <span class="token string">&quot;regex&quot;</span><span class="token operator">=</span><span class="token string">&quot;,&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;index&quot;</span><span class="token operator">=</span><span class="token string">&quot;3&quot;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Output series:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+-----------------------------------------------------+</span>
<span class="line">|                         Time|regexsplit(root.test.d1.s1, &quot;regex&quot;=&quot;,&quot;, &quot;index&quot;=&quot;3&quot;)|</span>
<span class="line">+-----------------------------+-----------------------------------------------------+</span>
<span class="line">|2021-01-01T00:00:01.000+08:00|                                                   B-|</span>
<span class="line">|2021-01-01T00:00:02.000+08:00|                                                   B+|</span>
<span class="line">|2021-01-01T00:00:04.000+08:00|                                                    A|</span>
<span class="line">|2021-01-01T00:00:05.000+08:00|                                                    B|</span>
<span class="line">+-----------------------------+-----------------------------------------------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="strreplace" tabindex="-1"><a class="header-anchor" href="#strreplace"><span>StrReplace</span></a></h2><h3 id="usage-3" tabindex="-1"><a class="header-anchor" href="#usage-3"><span>Usage</span></a></h3><p>The function is used to replace the specific substring with given string.</p><p><strong>Name:</strong> STRREPLACE</p><p><strong>Input Series:</strong> Only support a single input series. The data type is TEXT.</p><p><strong>Parameter:</strong></p><ul><li><code>target</code>: The target substring to be replaced.</li><li><code>replace</code>: The string to be put on.</li><li><code>limit</code>: The number of matches to be replaced which should be an integer no less than -1,<br> default to -1 which means all matches will be replaced.</li><li><code>offset</code>: The number of matches to be skipped, which means the first <code>offset</code> matches will not be replaced, default to 0.</li><li><code>reverse</code>: Whether to count all the matches reversely, default to &#39;false&#39;.</li></ul><p><strong>Output Series:</strong> Output a single series. The type is TEXT.</p><h3 id="examples-3" tabindex="-1"><a class="header-anchor" href="#examples-3"><span>Examples</span></a></h3><p>Input series:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+---------------+</span>
<span class="line">|                         Time|root.test.d1.s1|</span>
<span class="line">+-----------------------------+---------------+</span>
<span class="line">|2021-01-01T00:00:01.000+08:00|      A,B,A+,B-|</span>
<span class="line">|2021-01-01T00:00:02.000+08:00|      A,A+,A,B+|</span>
<span class="line">|2021-01-01T00:00:03.000+08:00|         B+,B,B|</span>
<span class="line">|2021-01-01T00:00:04.000+08:00|      A+,A,A+,A|</span>
<span class="line">|2021-01-01T00:00:05.000+08:00|       A,B-,B,B|</span>
<span class="line">+-----------------------------+---------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL for query:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> strreplace<span class="token punctuation">(</span>s1<span class="token punctuation">,</span> <span class="token string">&quot;target&quot;</span><span class="token operator">=</span><span class="token string">&quot;,&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;replace&quot;</span><span class="token operator">=</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;limit&quot;</span><span class="token operator">=</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Output series:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+-----------------------------------------+</span>
<span class="line">|                         Time|strreplace(root.test.d1.s1, &quot;target&quot;=&quot;,&quot;,|</span>
<span class="line">|                             |              &quot;replace&quot;=&quot;/&quot;, &quot;limit&quot;=&quot;2&quot;)|</span>
<span class="line">+-----------------------------+-----------------------------------------+</span>
<span class="line">|2021-01-01T00:00:01.000+08:00|                                A/B/A+,B-|</span>
<span class="line">|2021-01-01T00:00:02.000+08:00|                                A/A+/A,B+|</span>
<span class="line">|2021-01-01T00:00:03.000+08:00|                                   B+/B/B|</span>
<span class="line">|2021-01-01T00:00:04.000+08:00|                                A+/A/A+,A|</span>
<span class="line">|2021-01-01T00:00:05.000+08:00|                                 A/B-/B,B|</span>
<span class="line">+-----------------------------+-----------------------------------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Another SQL for query:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> strreplace<span class="token punctuation">(</span>s1<span class="token punctuation">,</span> <span class="token string">&quot;target&quot;</span><span class="token operator">=</span><span class="token string">&quot;,&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;replace&quot;</span><span class="token operator">=</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;limit&quot;</span><span class="token operator">=</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;offset&quot;</span><span class="token operator">=</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;reverse&quot;</span><span class="token operator">=</span><span class="token string">&quot;true&quot;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Output series:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+-----------------------------------------------------+</span>
<span class="line">|                         Time|strreplace(root.test.d1.s1, &quot;target&quot;=&quot;,&quot;, &quot;replace&quot;= | </span>
<span class="line">|                             |    &quot;|&quot;, &quot;limit&quot;=&quot;1&quot;, &quot;offset&quot;=&quot;1&quot;, &quot;reverse&quot;=&quot;true&quot;)|</span>
<span class="line">+-----------------------------+-----------------------------------------------------+</span>
<span class="line">|2021-01-01T00:00:01.000+08:00|                                            A,B/A+,B-|</span>
<span class="line">|2021-01-01T00:00:02.000+08:00|                                            A,A+/A,B+|</span>
<span class="line">|2021-01-01T00:00:03.000+08:00|                                               B+/B,B|</span>
<span class="line">|2021-01-01T00:00:04.000+08:00|                                            A+,A/A+,A|</span>
<span class="line">|2021-01-01T00:00:05.000+08:00|                                             A,B-/B,B|</span>
<span class="line">+-----------------------------+-----------------------------------------------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,72)]))}const o=s(i,[["render",l],["__file","String-Processing.html.vue"]]),c=JSON.parse('{"path":"/UserGuide/V0.13.x/UDF-Library/String-Processing.html","title":"String Processing","lang":"en-US","frontmatter":{"description":"String Processing RegexMatch Usage The function is used to fetch matched contents from text with given regular expression. Name: REGEXMATCH Input Series: Only support a single i...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/UDF-Library/String-Processing.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V0.13.x/UDF-Library/String-Processing.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"String Processing"}],["meta",{"property":"og:description","content":"String Processing RegexMatch Usage The function is used to fetch matched contents from text with given regular expression. Name: REGEXMATCH Input Series: Only support a single i..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"String Processing\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"RegexMatch","slug":"regexmatch","link":"#regexmatch","children":[{"level":3,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":3,"title":"Examples","slug":"examples","link":"#examples","children":[]}]},{"level":2,"title":"RegexReplace","slug":"regexreplace","link":"#regexreplace","children":[{"level":3,"title":"Usage","slug":"usage-1","link":"#usage-1","children":[]},{"level":3,"title":"Examples","slug":"examples-1","link":"#examples-1","children":[]}]},{"level":2,"title":"RegexSplit","slug":"regexsplit","link":"#regexsplit","children":[{"level":3,"title":"Usage","slug":"usage-2","link":"#usage-2","children":[]},{"level":3,"title":"Examples","slug":"examples-2","link":"#examples-2","children":[]}]},{"level":2,"title":"StrReplace","slug":"strreplace","link":"#strreplace","children":[{"level":3,"title":"Usage","slug":"usage-3","link":"#usage-3","children":[]},{"level":3,"title":"Examples","slug":"examples-3","link":"#examples-3","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":4.45,"words":1334},"filePathRelative":"UserGuide/V0.13.x/UDF-Library/String-Processing.md","localizedDate":"July 10, 2023","autoDesc":true}');export{o as comp,c as data};
