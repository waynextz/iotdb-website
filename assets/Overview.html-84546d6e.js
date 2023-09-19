import{_ as i,r as s,o as c,c as l,a as u,d as e,e as t,b as d,w as n,f as o}from"./app-d415a090.js";const h={},p=e("h1",{id:"overview",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#overview","aria-hidden":"true"},"#"),t(" Overview")],-1),m=e("p",null,[t("A list of all available functions, both built-in and custom, can be displayed with "),e("code",null,"SHOW FUNCTIONS"),t(" command.")],-1),T=o('<h2 id="operators" tabindex="-1"><a class="header-anchor" href="#operators" aria-hidden="true">#</a> Operators</h2><h3 id="arithmetic-operators" tabindex="-1"><a class="header-anchor" href="#arithmetic-operators" aria-hidden="true">#</a> Arithmetic Operators</h3><table><thead><tr><th>Operator</th><th>Meaning</th></tr></thead><tbody><tr><td><code>+</code></td><td>positive (unary operator)</td></tr><tr><td><code>-</code></td><td>negative (unary operator)</td></tr><tr><td><code>*</code></td><td>multiplication</td></tr><tr><td><code>/</code></td><td>division</td></tr><tr><td><code>%</code></td><td>modulo</td></tr><tr><td><code>+</code></td><td>addition</td></tr><tr><td><code>-</code></td><td>subtraction</td></tr></tbody></table>',3),f=o('<h3 id="comparison-operators" tabindex="-1"><a class="header-anchor" href="#comparison-operators" aria-hidden="true">#</a> Comparison Operators</h3><table><thead><tr><th>Operator</th><th>Meaning</th></tr></thead><tbody><tr><td><code>&gt;</code></td><td>greater than</td></tr><tr><td><code>&gt;=</code></td><td>greater than or equal to</td></tr><tr><td><code>&lt;</code></td><td>less than</td></tr><tr><td><code>&lt;=</code></td><td>less than or equal to</td></tr><tr><td><code>==</code></td><td>equal to</td></tr><tr><td><code>!=</code> / <code>&lt;&gt;</code></td><td>not equal to</td></tr><tr><td><code>BETWEEN ... AND ...</code></td><td>within the specified range</td></tr><tr><td><code>NOT BETWEEN ... AND ...</code></td><td>not within the specified range</td></tr><tr><td><code>LIKE</code></td><td>match simple pattern</td></tr><tr><td><code>NOT LIKE</code></td><td>cannot match simple pattern</td></tr><tr><td><code>REGEXP</code></td><td>match regular expression</td></tr><tr><td><code>NOT REGEXP</code></td><td>cannot match regular expression</td></tr><tr><td><code>IS NULL</code></td><td>is null</td></tr><tr><td><code>IS NOT NULL</code></td><td>is not null</td></tr><tr><td><code>IN</code> / <code>CONTAINS</code></td><td>is a value in the specified list</td></tr><tr><td><code>NOT IN</code> / <code>NOT CONTAINS</code></td><td>is not a value in the specified list</td></tr></tbody></table>',2),O=o('<h3 id="logical-operators" tabindex="-1"><a class="header-anchor" href="#logical-operators" aria-hidden="true">#</a> Logical Operators</h3><table><thead><tr><th>Operator</th><th>Meaning</th></tr></thead><tbody><tr><td><code>NOT</code> / <code>!</code></td><td>logical negation (unary operator)</td></tr><tr><td><code>AND</code> / <code>&amp;</code> / <code>&amp;&amp;</code></td><td>logical AND</td></tr><tr><td><code>OR</code>/ | / ||</td><td>logical OR</td></tr></tbody></table>',2),b=o(`<h3 id="operator-precedence" tabindex="-1"><a class="header-anchor" href="#operator-precedence" aria-hidden="true">#</a> Operator Precedence</h3><p>The precedence of operators is arranged as shown below from high to low, and operators on the same row have the same precedence.</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token operator">!</span><span class="token punctuation">,</span> <span class="token operator">-</span> <span class="token punctuation">(</span>unary operator<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">+</span> <span class="token punctuation">(</span>unary operator<span class="token punctuation">)</span>
<span class="token operator">*</span><span class="token punctuation">,</span> <span class="token operator">/</span><span class="token punctuation">,</span> <span class="token operator">DIV</span><span class="token punctuation">,</span> <span class="token operator">%</span><span class="token punctuation">,</span> MOD
<span class="token operator">-</span><span class="token punctuation">,</span> <span class="token operator">+</span>
<span class="token operator">=</span><span class="token punctuation">,</span> <span class="token operator">=</span><span class="token operator">=</span><span class="token punctuation">,</span> <span class="token operator">&lt;=&gt;</span><span class="token punctuation">,</span> <span class="token operator">&gt;=</span><span class="token punctuation">,</span> <span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token operator">&lt;=</span><span class="token punctuation">,</span> <span class="token operator">&lt;</span><span class="token punctuation">,</span> <span class="token operator">&lt;&gt;</span><span class="token punctuation">,</span> <span class="token operator">!=</span>
<span class="token operator">LIKE</span><span class="token punctuation">,</span> <span class="token operator">REGEXP</span><span class="token punctuation">,</span> <span class="token operator">NOT</span> <span class="token operator">LIKE</span><span class="token punctuation">,</span> <span class="token operator">NOT</span> <span class="token operator">REGEXP</span>
<span class="token operator">BETWEEN</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token operator">AND</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span> <span class="token operator">NOT</span> <span class="token operator">BETWEEN</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token operator">AND</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token operator">IS</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token operator">IS</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span>
<span class="token operator">IN</span><span class="token punctuation">,</span> <span class="token keyword">CONTAINS</span><span class="token punctuation">,</span> <span class="token operator">NOT</span> <span class="token operator">IN</span><span class="token punctuation">,</span> <span class="token operator">NOT</span> <span class="token keyword">CONTAINS</span>
<span class="token operator">AND</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span><span class="token punctuation">,</span> <span class="token operator">&amp;&amp;</span>
<span class="token operator">OR</span><span class="token punctuation">,</span> <span class="token operator">|</span><span class="token punctuation">,</span> <span class="token operator">||</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="built-in-functions" tabindex="-1"><a class="header-anchor" href="#built-in-functions" aria-hidden="true">#</a> Built-in Functions</h2><p>The built-in functions can be used in IoTDB without registration, and the functions in the data quality function library need to be registered by referring to the registration steps in the next chapter before they can be used.</p><h3 id="aggregate-functions" tabindex="-1"><a class="header-anchor" href="#aggregate-functions" aria-hidden="true">#</a> Aggregate Functions</h3><table><thead><tr><th>Function Name</th><th>Description</th><th>Allowed Input Series Data Types</th><th>Required Attributes</th><th>Output Series Data Type</th></tr></thead><tbody><tr><td>SUM</td><td>Summation.</td><td>INT32 INT64 FLOAT DOUBLE</td><td>/</td><td>DOUBLE</td></tr><tr><td>COUNT</td><td>Counts the number of data points.</td><td>All types</td><td>/</td><td>INT</td></tr><tr><td>AVG</td><td>Average.</td><td>INT32 INT64 FLOAT DOUBLE</td><td>/</td><td>DOUBLE</td></tr><tr><td>EXTREME</td><td>Finds the value with the largest absolute value. Returns a positive value if the maximum absolute value of positive and negative values is equal.</td><td>INT32 INT64 FLOAT DOUBLE</td><td>/</td><td>Consistent with the input data type</td></tr><tr><td>MAX_VALUE</td><td>Find the maximum value.</td><td>INT32 INT64 FLOAT DOUBLE</td><td>/</td><td>Consistent with the input data type</td></tr><tr><td>MIN_VALUE</td><td>Find the minimum value.</td><td>INT32 INT64 FLOAT DOUBLE</td><td>/</td><td>Consistent with the input data type</td></tr><tr><td>FIRST_VALUE</td><td>Find the value with the smallest timestamp.</td><td>All data types</td><td>/</td><td>Consistent with input data type</td></tr><tr><td>LAST_VALUE</td><td>Find the value with the largest timestamp.</td><td>All data types</td><td>/</td><td>Consistent with input data type</td></tr><tr><td>MAX_TIME</td><td>Find the maximum timestamp.</td><td>All data Types</td><td>/</td><td>Timestamp</td></tr><tr><td>MIN_TIME</td><td>Find the minimum timestamp.</td><td>All data Types</td><td>/</td><td>Timestamp</td></tr><tr><td>COUNT_IF</td><td>Find the number of data points that continuously meet a given condition and the number of data points that meet the condition (represented by keep) meet the specified threshold.</td><td>BOOLEAN</td><td><code>[keep &gt;=/&gt;/=/!=/&lt;/&lt;=]threshold</code>：The specified threshold or threshold condition, it is equivalent to <code>keep &gt;= threshold</code> if <code>threshold</code> is used alone, type of <code>threshold</code> is <code>INT64</code> <code>ignoreNull</code>：Optional, default value is <code>true</code>；If the value is <code>true</code>, null values are ignored, it means that if there is a null value in the middle, the value is ignored without interrupting the continuity. If the value is <code>true</code>, null values are not ignored, it means that if there are null values in the middle, continuity will be broken</td><td>INT64</td></tr><tr><td>TIME_DURATION</td><td>Find the difference between the timestamp of the largest non-null value and the timestamp of the smallest non-null value in a column</td><td>All data Types</td><td>/</td><td>INT64</td></tr><tr><td>MODE</td><td>Find the mode. Note: 1.Having too many different values in the input series risks a memory exception; 2.If all the elements have the same number of occurrences, that is no Mode, return the value with earliest time; 3.If there are many Modes, return the Mode with earliest time.</td><td>All data Types</td><td>/</td><td>Consistent with the input data type</td></tr></tbody></table>`,7),g=o('<h3 id="arithmetic-functions" tabindex="-1"><a class="header-anchor" href="#arithmetic-functions" aria-hidden="true">#</a> Arithmetic Functions</h3><table><thead><tr><th>Function Name</th><th>Allowed Input Series Data Types</th><th>Output Series Data Type</th><th>Required Attributes</th><th>Corresponding Implementation in the Java Standard Library</th></tr></thead><tbody><tr><td>SIN</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td>/</td><td>Math#sin(double)</td></tr><tr><td>COS</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td>/</td><td>Math#cos(double)</td></tr><tr><td>TAN</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td>/</td><td>Math#tan(double)</td></tr><tr><td>ASIN</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td>/</td><td>Math#asin(double)</td></tr><tr><td>ACOS</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td>/</td><td>Math#acos(double)</td></tr><tr><td>ATAN</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td>/</td><td>Math#atan(double)</td></tr><tr><td>SINH</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td>/</td><td>Math#sinh(double)</td></tr><tr><td>COSH</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td>/</td><td>Math#cosh(double)</td></tr><tr><td>TANH</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td>/</td><td>Math#tanh(double)</td></tr><tr><td>DEGREES</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td>/</td><td>Math#toDegrees(double)</td></tr><tr><td>RADIANS</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td>/</td><td>Math#toRadians(double)</td></tr><tr><td>ABS</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>Same type as the input series</td><td>/</td><td>Math#abs(int) / Math#abs(long) /Math#abs(float) /Math#abs(double)</td></tr><tr><td>SIGN</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td>/</td><td>Math#signum(double)</td></tr><tr><td>CEIL</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td>/</td><td>Math#ceil(double)</td></tr><tr><td>FLOOR</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td>/</td><td>Math#floor(double)</td></tr><tr><td>ROUND</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td>&#39;places&#39; : Round the significant number, positive number is the significant number after the decimal point, negative number is the significant number of whole number</td><td>Math#rint(Math#pow(10,places))/Math#pow(10,places)</td></tr><tr><td>EXP</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td>/</td><td>Math#exp(double)</td></tr><tr><td>LN</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td>/</td><td>Math#log(double)</td></tr><tr><td>LOG10</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td>/</td><td>Math#log10(double)</td></tr><tr><td>SQRT</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td>/</td><td>Math#sqrt(double)</td></tr></tbody></table>',2),N=o('<h3 id="comparison-functions" tabindex="-1"><a class="header-anchor" href="#comparison-functions" aria-hidden="true">#</a> Comparison Functions</h3><table><thead><tr><th>Function Name</th><th>Allowed Input Series Data Types</th><th>Required Attributes</th><th>Output Series Data Type</th><th>Description</th></tr></thead><tbody><tr><td>ON_OFF</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td><code>threshold</code>: a double type variate</td><td>BOOLEAN</td><td>Return <code>ts_value &gt;= threshold</code>.</td></tr><tr><td>IN_RANGR</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td><code>lower</code>: DOUBLE type <code>upper</code>: DOUBLE type</td><td>BOOLEAN</td><td>Return <code>ts_value &gt;= lower &amp;&amp; value &lt;= upper</code>.</td></tr></tbody></table>',2),E=o('<h3 id="string-processing-functions" tabindex="-1"><a class="header-anchor" href="#string-processing-functions" aria-hidden="true">#</a> String Processing Functions</h3><table><thead><tr><th>Function Name</th><th>Allowed Input Series Data Types</th><th>Required Attributes</th><th>Output Series Data Type</th><th>Description</th></tr></thead><tbody><tr><td>STRING_CONTAINS</td><td>TEXT</td><td><code>s</code>: string to search for</td><td>BOOLEAN</td><td>Checks whether the substring <code>s</code> exists in the string.</td></tr><tr><td>STRING_MATCHES</td><td>TEXT</td><td><code>regex</code>: Java standard library-style regular expressions.</td><td>BOOLEAN</td><td>Judges whether a string can be matched by the regular expression <code>regex</code>.</td></tr><tr><td>LENGTH</td><td>TEXT</td><td>/</td><td>INT32</td><td>Get the length of input series.</td></tr><tr><td>LOCATE</td><td>TEXT</td><td><code>target</code>: The substring to be located.<br> <code>reverse</code>: Indicates whether reverse locate is required. The default value is <code>false</code>, means left-to-right locate.</td><td>INT32</td><td>Get the position of the first occurrence of substring <code>target</code> in input series. Returns -1 if there are no <code>target</code> in input.</td></tr><tr><td>STARTSWITH</td><td>TEXT</td><td><code>target</code>: The prefix to be checked.</td><td>BOOLEAN</td><td>Check whether input series starts with the specified prefix <code>target</code>.</td></tr><tr><td>ENDSWITH</td><td>TEXT</td><td><code>target</code>: The suffix to be checked.</td><td>BOOLEAN</td><td>Check whether input series ends with the specified suffix <code>target</code>.</td></tr><tr><td>CONCAT</td><td>TEXT</td><td><code>targets</code>: a series of K-V, key needs to start with <code>target</code> and be not duplicated, value is the string you want to concat.<br><code>series_behind</code>: Indicates whether series behind targets. The default value is <code>false</code>.</td><td>TEXT</td><td>Concatenate input string and <code>target</code> string.</td></tr><tr><td>SUBSTRING</td><td>TEXT</td><td><code>from</code>: Indicates the start position of substring.<br><code>for</code>: Indicates how many characters to stop after of substring.</td><td>TEXT</td><td>Extracts a substring of a string, starting with the first specified character and stopping after the specified number of characters.The index start at 1.</td></tr><tr><td>REPLACE</td><td>TEXT</td><td>first parameter: The target substring to be replaced.<br>second parameter: The substring to replace with.</td><td>TEXT</td><td>Replace a substring in the input sequence with the target substring.</td></tr><tr><td>UPPER</td><td>TEXT</td><td>/</td><td>TEXT</td><td>Get the string of input series with all characters changed to uppercase.</td></tr><tr><td>LOWER</td><td>TEXT</td><td>/</td><td>TEXT</td><td>Get the string of input series with all characters changed to lowercase.</td></tr><tr><td>TRIM</td><td>TEXT</td><td>/</td><td>TEXT</td><td>Get the string whose value is same to input series, with all leading and trailing space removed.</td></tr><tr><td>STRCMP</td><td>TEXT</td><td>/</td><td>TEXT</td><td>Get the compare result of two input series. Returns <code>0</code> if series value are the same, a <code>negative integer</code> if value of series1 is smaller than series2, <br>a <code>positive integer</code> if value of series1 is more than series2.</td></tr></tbody></table>',2),L=o('<h3 id="data-type-conversion-function" tabindex="-1"><a class="header-anchor" href="#data-type-conversion-function" aria-hidden="true">#</a> Data Type Conversion Function</h3><table><thead><tr><th>Function Name</th><th>Required Attributes</th><th>Output Series Data Type</th><th>Description</th></tr></thead><tbody><tr><td>CAST</td><td><code>type</code>: Output data type, INT32 / INT64 / FLOAT / DOUBLE / BOOLEAN / TEXT</td><td>determined by <code>type</code></td><td>Convert the data to the type specified by the <code>type</code> parameter.</td></tr></tbody></table>',2),I=o('<h3 id="constant-timeseries-generating-functions" tabindex="-1"><a class="header-anchor" href="#constant-timeseries-generating-functions" aria-hidden="true">#</a> Constant Timeseries Generating Functions</h3><table><thead><tr><th>Function Name</th><th>Required Attributes</th><th>Output Series Data Type</th><th>Description</th></tr></thead><tbody><tr><td>CONST</td><td><code>value</code>: the value of the output data point <code>type</code>: the type of the output data point, it can only be INT32 / INT64 / FLOAT / DOUBLE / BOOLEAN / TEXT</td><td>Determined by the required attribute <code>type</code></td><td>Output the user-specified constant timeseries according to the attributes <code>value</code> and <code>type</code>.</td></tr><tr><td>PI</td><td>None</td><td>DOUBLE</td><td>Data point value: a <code>double</code> value of <code>π</code>, the ratio of the circumference of a circle to its diameter, which is equals to <code>Math.PI</code> in the <em>Java Standard Library</em>.</td></tr><tr><td>E</td><td>None</td><td>DOUBLE</td><td>Data point value: a <code>double</code> value of <code>e</code>, the base of the natural logarithms, which is equals to <code>Math.E</code> in the <em>Java Standard Library</em>.</td></tr></tbody></table>',2),D=o('<h3 id="selector-functions" tabindex="-1"><a class="header-anchor" href="#selector-functions" aria-hidden="true">#</a> Selector Functions</h3><table><thead><tr><th>Function Name</th><th>Allowed Input Series Data Types</th><th>Required Attributes</th><th>Output Series Data Type</th><th>Description</th></tr></thead><tbody><tr><td>TOP_K</td><td>INT32 / INT64 / FLOAT / DOUBLE / TEXT</td><td><code>k</code>: the maximum number of selected data points, must be greater than 0 and less than or equal to 1000</td><td>Same type as the input series</td><td>Returns <code>k</code> data points with the largest values in a time series.</td></tr><tr><td>BOTTOM_K</td><td>INT32 / INT64 / FLOAT / DOUBLE / TEXT</td><td><code>k</code>: the maximum number of selected data points, must be greater than 0 and less than or equal to 1000</td><td>Same type as the input series</td><td>Returns <code>k</code> data points with the smallest values in a time series.</td></tr></tbody></table>',2),A=o('<h3 id="continuous-interval-functions" tabindex="-1"><a class="header-anchor" href="#continuous-interval-functions" aria-hidden="true">#</a> Continuous Interval Functions</h3><table><thead><tr><th>Function Name</th><th>Allowed Input Series Data Types</th><th>Required Attributes</th><th>Output Series Data Type</th><th>Description</th></tr></thead><tbody><tr><td>ZERO_DURATION</td><td>INT32/ INT64/ FLOAT/ DOUBLE/ BOOLEAN</td><td><code>min</code>:Optional with default value <code>0L</code> <code>max</code>:Optional with default value <code>Long.MAX_VALUE</code></td><td>Long</td><td>Return intervals&#39; start times and duration times in which the value is always 0(false), and the duration time <code>t</code> satisfy <code>t &gt;= min &amp;&amp; t &lt;= max</code>. The unit of <code>t</code> is ms</td></tr><tr><td>NON_ZERO_DURATION</td><td>INT32/ INT64/ FLOAT/ DOUBLE/ BOOLEAN</td><td><code>min</code>:Optional with default value <code>0L</code> <code>max</code>:Optional with default value <code>Long.MAX_VALUE</code></td><td>Long</td><td>Return intervals&#39; start times and duration times in which the value is always not 0, and the duration time <code>t</code> satisfy <code>t &gt;= min &amp;&amp; t &lt;= max</code>. The unit of <code>t</code> is ms</td></tr><tr><td>ZERO_COUNT</td><td>INT32/ INT64/ FLOAT/ DOUBLE/ BOOLEAN</td><td><code>min</code>:Optional with default value <code>1L</code> <code>max</code>:Optional with default value <code>Long.MAX_VALUE</code></td><td>Long</td><td>Return intervals&#39; start times and the number of data points in the interval in which the value is always 0(false). Data points number <code>n</code> satisfy <code>n &gt;= min &amp;&amp; n &lt;= max</code></td></tr><tr><td>NON_ZERO_COUNT</td><td>INT32/ INT64/ FLOAT/ DOUBLE/ BOOLEAN</td><td><code>min</code>:Optional with default value <code>1L</code> <code>max</code>:Optional with default value <code>Long.MAX_VALUE</code></td><td>Long</td><td>Return intervals&#39; start times and the number of data points in the interval in which the value is always not 0(false). Data points number <code>n</code> satisfy <code>n &gt;= min &amp;&amp; n &lt;= max</code></td></tr></tbody></table>',2),y=o('<h3 id="variation-trend-calculation-functions" tabindex="-1"><a class="header-anchor" href="#variation-trend-calculation-functions" aria-hidden="true">#</a> Variation Trend Calculation Functions</h3><table><thead><tr><th>Function Name</th><th>Allowed Input Series Data Types</th><th>Required Attributes</th><th>Output Series Data Type</th><th>Description</th></tr></thead><tbody><tr><td>TIME_DIFFERENCE</td><td>INT32 / INT64 / FLOAT / DOUBLE / BOOLEAN / TEXT</td><td>/</td><td>INT64</td><td>Calculates the difference between the time stamp of a data point and the time stamp of the previous data point. There is no corresponding output for the first data point.</td></tr><tr><td>DIFFERENCE</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>/</td><td>Same type as the input series</td><td>Calculates the difference between the value of a data point and the value of the previous data point. There is no corresponding output for the first data point.</td></tr><tr><td>NON_NEGATIVE_DIFFERENCE</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>/</td><td>Same type as the input series</td><td>Calculates the absolute value of the difference between the value of a data point and the value of the previous data point. There is no corresponding output for the first data point.</td></tr><tr><td>DERIVATIVE</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>/</td><td>DOUBLE</td><td>Calculates the rate of change of a data point compared to the previous data point, the result is equals to DIFFERENCE / TIME_DIFFERENCE. There is no corresponding output for the first data point.</td></tr><tr><td>NON_NEGATIVE_DERIVATIVE</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>/</td><td>DOUBLE</td><td>Calculates the absolute value of the rate of change of a data point compared to the previous data point, the result is equals to NON_NEGATIVE_DIFFERENCE / TIME_DIFFERENCE. There is no corresponding output for the first data point.</td></tr><tr><td>DIFF</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td><code>ignoreNull</code>：optional，default is true. If is true, the previous data point is ignored when it is null and continues to find the first non-null value forwardly. If the value is false, previous data point is not ignored when it is null, the result is also null because null is used for subtraction</td><td>DOUBLE</td><td>Calculates the difference between the value of a data point and the value of the previous data point. There is no corresponding output for the first data point, so output is null</td></tr></tbody></table>',2),F=o('<h3 id="sample-functions" tabindex="-1"><a class="header-anchor" href="#sample-functions" aria-hidden="true">#</a> Sample Functions</h3><table><thead><tr><th>Function Name</th><th>Allowed Input Series Data Types</th><th>Required Attributes</th><th>Output Series Data Type</th><th>Description</th></tr></thead><tbody><tr><td>EQUAL_SIZE_BUCKET_RANDOM_SAMPLE</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td><code>proportion</code> The value range is <code>(0, 1]</code>, the default is <code>0.1</code></td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>Returns a random sample of equal buckets that matches the sampling ratio</td></tr><tr><td>EQUAL_SIZE_BUCKET_AGG_SAMPLE</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td><code>proportion</code> The value range is <code>(0, 1]</code>, the default is <code>0.1</code><br><code>type</code>: The value types are <code>avg</code>, <code>max</code>, <code>min</code>, <code>sum</code>, <code>extreme</code>, <code>variance</code>, the default is <code>avg</code></td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>Returns equal bucket aggregation samples that match the sampling ratio</td></tr><tr><td>EQUAL_SIZE_BUCKET_M4_SAMPLE</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td><code>proportion</code> The value range is <code>(0, 1]</code>, the default is <code>0.1</code></td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>Returns equal bucket M4 samples that match the sampling ratio</td></tr><tr><td>EQUAL_SIZE_BUCKET_OUTLIER_SAMPLE</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>The value range of <code>proportion</code> is <code>(0, 1]</code>, the default is <code>0.1</code><br> The value of <code>type</code> is <code>avg</code> or <code>stendis</code> or <code>cos</code> or <code>prenextdis</code>, the default is <code>avg</code> <br>The value of <code>number</code> should be greater than 0, the default is <code>3</code></td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>Returns outlier samples in equal buckets that match the sampling ratio and the number of samples in the bucket</td></tr><tr><td>M4</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>Different attributes used by the size window and the time window. The size window uses attributes <code>windowSize</code> and <code>slidingStep</code>. The time window uses attributes <code>timeInterval</code>, <code>slidingStep</code>, <code>displayWindowBegin</code>, and <code>displayWindowEnd</code>. More details see below.</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>Returns the <code>first, last, bottom, top</code> points in each sliding window. M4 sorts and deduplicates the aggregated points within the window before outputting them.</td></tr></tbody></table>',2),v=o('<h3 id="change-points-function" tabindex="-1"><a class="header-anchor" href="#change-points-function" aria-hidden="true">#</a> Change Points Function</h3><table><thead><tr><th>Function Name</th><th>Allowed Input Series Data Types</th><th>Required Attributes</th><th>Output Series Data Type</th><th>Description</th></tr></thead><tbody><tr><td>CHANGE_POINTS</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>/</td><td>Same type as the input series</td><td>Remove consecutive identical values from an input sequence.</td></tr></tbody></table>',2),_=o('<h2 id="lambda-expression" tabindex="-1"><a class="header-anchor" href="#lambda-expression" aria-hidden="true">#</a> Lambda Expression</h2><table><thead><tr><th>Function Name</th><th>Allowed Input Series Data Types</th><th>Required Attributes</th><th>Output Series Data Type</th><th>Series Data Type Description</th></tr></thead><tbody><tr><td>JEXL</td><td>INT32 / INT64 / FLOAT / DOUBLE / TEXT / BOOLEAN</td><td><code>expr</code> is a lambda expression that supports standard one or multi arguments in the form <code>x -&gt; {...}</code> or <code>(x, y, z) -&gt; {...}</code>, e.g. <code>x -&gt; {x * 2}</code>, <code>(x, y, z) -&gt; {x + y * z}</code></td><td>INT32 / INT64 / FLOAT / DOUBLE / TEXT / BOOLEAN</td><td>Returns the input time series transformed by a lambda expression</td></tr></tbody></table>',2),U=e("h2",{id:"conditional-expressions",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#conditional-expressions","aria-hidden":"true"},"#"),t(" Conditional Expressions")],-1),w=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Expression Name"),e("th",null,"Description")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("code",null,"CASE")]),e("td",null,'similar to "if else"')])])],-1),k=o('<h2 id="data-quality-function-library" tabindex="-1"><a class="header-anchor" href="#data-quality-function-library" aria-hidden="true">#</a> Data Quality Function Library</h2><h3 id="about" tabindex="-1"><a class="header-anchor" href="#about" aria-hidden="true">#</a> About</h3><p>For applications based on time series data, data quality is vital. <strong>UDF Library</strong> is IoTDB User Defined Functions (UDF) about data quality, including data profiling, data quality evalution and data repairing. It effectively meets the demand for data quality in the industrial field.</p><h3 id="quick-start" tabindex="-1"><a class="header-anchor" href="#quick-start" aria-hidden="true">#</a> Quick Start</h3><p>The functions in this function library are not built-in functions, and must be loaded into the system before use.</p>',5),B={href:"https://archive.apache.org/dist/iotdb/1.0.1/apache-iotdb-1.0.1-library-udf-bin.zip",target:"_blank",rel:"noopener noreferrer"},S=e("li",null,[t("Copy the JAR package to "),e("code",null,"ext\\udf"),t(" under the directory of IoTDB system (Please put JAR to this directory of all DataNodes if you use Cluster).")],-1),x=e("li",null,[t("Run "),e("code",null,"sbin\\start-server.bat"),t(" (for Windows) or "),e("code",null,"sbin\\start-server.sh"),t(" (for Linux or MacOS) to start IoTDB server.")],-1),M=e("li",null,[t("Copy the script to the directory of IoTDB system (under the root directory, at the same level as "),e("code",null,"sbin"),t("), modify the parameters in the script if needed and run it to register UDF.")],-1),R=e("h3",{id:"implemented-functions",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#implemented-functions","aria-hidden":"true"},"#"),t(" Implemented Functions")],-1),C=e("code",null,"Completeness",-1),G=e("code",null,"ACF",-1),q=e("code",null,"IQR",-1),X=e("code",null,"Conv",-1),V=e("code",null,"DTW",-1),P=e("code",null,"TimestampRepair",-1),W=e("code",null,"ConsecutiveSequences",-1),Q=e("code",null,"AR",-1);function K(H,J){const a=s("RouterLink"),r=s("ExternalLinkIcon");return c(),l("div",null,[u(`

​    Licensed to the Apache Software Foundation (ASF) under one
​    or more contributor license agreements.  See the NOTICE file
​    distributed with this work for additional information
​    regarding copyright ownership.  The ASF licenses this file
​    to you under the Apache License, Version 2.0 (the
​    "License"); you may not use this file except in compliance
​    with the License.  You may obtain a copy of the License at
​    
​        http://www.apache.org/licenses/LICENSE-2.0
​    
​    Unless required by applicable law or agreed to in writing,
​    software distributed under the License is distributed on an
​    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
​    KIND, either express or implied.  See the License for the
​    specific language governing permissions and limitations
​    under the License.

`),p,e("p",null,[t("This chapter describes the operators and functions supported by IoTDB. IoTDB provides a wealth of built-in operators and functions to meet your computing needs, and supports extensions through the "),d(a,{to:"/UserGuide/Master/stage/Operators-Functions/User-Defined-Function.html"},{default:n(()=>[t("User-Defined Function")]),_:1}),t(".")]),m,e("p",null,[t("See the documentation "),d(a,{to:"/UserGuide/Master/stage/Query-Data/Select-Expression.html"},{default:n(()=>[t("Select-Expression")]),_:1}),t(" for the behavior of operators and functions in SQL.")]),T,e("p",null,[t("For details and examples, see the document "),d(a,{to:"/UserGuide/Master/stage/Operators-Functions/Mathematical.html"},{default:n(()=>[t("Arithmetic Operators and Functions")]),_:1}),t(".")]),f,e("p",null,[t("For details and examples, see the document "),d(a,{to:"/UserGuide/Master/stage/Operators-Functions/Comparison.html"},{default:n(()=>[t("Comparison Operators and Functions")]),_:1}),t(".")]),O,e("p",null,[t("For details and examples, see the document "),d(a,{to:"/UserGuide/Master/stage/Operators-Functions/Logical.html"},{default:n(()=>[t("Logical Operators")]),_:1}),t(".")]),b,e("p",null,[t("For details and examples, see the document "),d(a,{to:"/UserGuide/Master/stage/Operators-Functions/Aggregation.html"},{default:n(()=>[t("Aggregate Functions")]),_:1}),t(".")]),g,e("p",null,[t("For details and examples, see the document "),d(a,{to:"/UserGuide/Master/stage/Operators-Functions/Mathematical.html"},{default:n(()=>[t("Arithmetic Operators and Functions")]),_:1}),t(".")]),N,e("p",null,[t("For details and examples, see the document "),d(a,{to:"/UserGuide/Master/stage/Operators-Functions/Comparison.html"},{default:n(()=>[t("Comparison Operators and Functions")]),_:1}),t(".")]),E,e("p",null,[t("For details and examples, see the document "),d(a,{to:"/UserGuide/Master/stage/Operators-Functions/String.html"},{default:n(()=>[t("String Processing")]),_:1}),t(".")]),L,e("p",null,[t("For details and examples, see the document "),d(a,{to:"/UserGuide/Master/stage/Operators-Functions/Conversion.html"},{default:n(()=>[t("Data Type Conversion Function")]),_:1}),t(".")]),I,e("p",null,[t("For details and examples, see the document "),d(a,{to:"/UserGuide/Master/stage/Operators-Functions/Constant.html"},{default:n(()=>[t("Constant Timeseries Generating Functions")]),_:1}),t(".")]),D,e("p",null,[t("For details and examples, see the document "),d(a,{to:"/UserGuide/Master/stage/Operators-Functions/Selection.html"},{default:n(()=>[t("Selector Functions")]),_:1}),t(".")]),A,e("p",null,[t("For details and examples, see the document "),d(a,{to:"/UserGuide/Master/stage/Operators-Functions/Continuous-Interval.html"},{default:n(()=>[t("Continuous Interval Functions")]),_:1}),t(".")]),y,e("p",null,[t("For details and examples, see the document "),d(a,{to:"/UserGuide/Master/stage/Operators-Functions/Variation-Trend.html"},{default:n(()=>[t("Variation Trend Calculation Functions")]),_:1}),t(".")]),F,e("p",null,[t("For details and examples, see the document "),d(a,{to:"/UserGuide/Master/stage/Operators-Functions/Sample.html"},{default:n(()=>[t("Sample Functions")]),_:1}),t(".")]),v,e("p",null,[t("For details and examples, see the document "),d(a,{to:"/UserGuide/Master/stage/Operators-Functions/Time-Series.html"},{default:n(()=>[t("Time-Series")]),_:1}),t(".")]),_,e("p",null,[t("For details and examples, see the document "),d(a,{to:"/UserGuide/Master/stage/Operators-Functions/Lambda.html"},{default:n(()=>[t("Lambda")]),_:1}),t(".")]),U,w,e("p",null,[t("For details and examples, see the document "),d(a,{to:"/UserGuide/Master/stage/Operators-Functions/Conditional.html"},{default:n(()=>[t("Conditional Expressions")]),_:1}),t(".")]),k,e("ol",null,[e("li",null,[e("a",B,[t("Download"),d(r)]),t(" the JAR with all dependencies and the script of registering UDF.")]),S,x,M]),R,e("ol",null,[e("li",null,[t("Data Quality related functions, such as "),C,t(". For details and examples, see the document "),d(a,{to:"/UserGuide/Master/stage/Operators-Functions/Data-Quality.html"},{default:n(()=>[t("Data-Quality")]),_:1}),t(".")]),e("li",null,[t("Data Profiling related functions, such as "),G,t(". For details and examples, see the document "),d(a,{to:"/UserGuide/Master/stage/Operators-Functions/Data-Profiling.html"},{default:n(()=>[t("Data-Profiling")]),_:1}),t(".")]),e("li",null,[t("Anomaly Detection related functions, such as "),q,t(". For details and examples, see the document "),d(a,{to:"/UserGuide/Master/stage/Operators-Functions/Anomaly-Detection.html"},{default:n(()=>[t("Anomaly-Detection")]),_:1}),t(".")]),e("li",null,[t("Frequency Domain Analysis related functions, such as "),X,t(". For details and examples, see the document "),d(a,{to:"/UserGuide/Master/stage/Operators-Functions/Frequency-Domain.html"},{default:n(()=>[t("Frequency-Domain")]),_:1}),t(".")]),e("li",null,[t("Data Matching related functions, such as "),V,t(". For details and examples, see the document "),d(a,{to:"/UserGuide/Master/stage/Operators-Functions/Data-Matching.html"},{default:n(()=>[t("Data-Matching")]),_:1}),t(".")]),e("li",null,[t("Data Repairing related functions, such as "),P,t(". For details and examples, see the document "),d(a,{to:"/UserGuide/Master/stage/Operators-Functions/Data-Repairing.html"},{default:n(()=>[t("Data-Repairing")]),_:1}),t(".")]),e("li",null,[t("Series Discovery related functions, such as "),W,t(". For details and examples, see the document "),d(a,{to:"/UserGuide/Master/stage/Operators-Functions/Series-Discovery.html"},{default:n(()=>[t("Series-Discovery")]),_:1}),t(".")]),e("li",null,[t("Machine Learning related functions, such as "),Q,t(". For details and examples, see the document "),d(a,{to:"/UserGuide/Master/stage/Operators-Functions/Machine-Learning.html"},{default:n(()=>[t("Machine-Learning")]),_:1}),t(".")])])])}const z=i(h,[["render",K],["__file","Overview.html.vue"]]);export{z as default};
