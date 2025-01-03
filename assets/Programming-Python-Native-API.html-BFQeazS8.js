import{_ as n,c as a,b as e,o as l}from"./app-BwoQc-FN.js";const i={};function o(t,s){return l(),a("div",null,s[0]||(s[0]=[e(`<h1 id="python-原生接口" tabindex="-1"><a class="header-anchor" href="#python-原生接口"><span>Python 原生接口</span></a></h1><h2 id="_1-使用方式" tabindex="-1"><a class="header-anchor" href="#_1-使用方式"><span>1 使用方式</span></a></h2><p>安装依赖包:</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#E06C75;">pip3 install apache</span><span style="color:#56B6C2;">-</span><span style="color:#E06C75;">iotdb</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_2-读写操作" tabindex="-1"><a class="header-anchor" href="#_2-读写操作"><span>2 读写操作</span></a></h2><h3 id="_2-1-tablesession" tabindex="-1"><a class="header-anchor" href="#_2-1-tablesession"><span>2.1 TableSession</span></a></h3><h4 id="_2-1-1-功能描述" tabindex="-1"><a class="header-anchor" href="#_2-1-1-功能描述"><span>2.1.1 功能描述</span></a></h4><p>TableSession是IoTDB的一个核心类，用于与IoTDB数据库进行交互。通过这个类，用户可以执行SQL语句、插入数据以及管理数据库会话。</p><h4 id="_2-1-2-方法列表" tabindex="-1"><a class="header-anchor" href="#_2-1-2-方法列表"><span>2.1.2 方法列表</span></a></h4><table><thead><tr><th><strong>方法名称</strong></th><th><strong>描述</strong></th><th><strong>参数类型</strong></th><th><strong>返回类型</strong></th></tr></thead><tbody><tr><td>insert</td><td>写入数据</td><td>tablet: Union[Tablet, NumpyTablet]</td><td>None</td></tr><tr><td>execute_non_query_statement</td><td>执行非查询 SQL 语句，如 DDL 和 DML</td><td>sql: str</td><td>None</td></tr><tr><td>execute_query_statement</td><td>执行查询 SQL 语句并返回结果集</td><td>sql: str</td><td>SessionDataSet</td></tr><tr><td>close</td><td>关闭会话并释放资源</td><td>None</td><td>None</td></tr></tbody></table><h4 id="_2-1-3-接口展示" tabindex="-1"><a class="header-anchor" href="#_2-1-3-接口展示"><span>2.1.3 接口展示</span></a></h4><p><strong>TableSession:</strong></p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">class</span><span style="color:#E5C07B;"> TableSession</span><span style="color:#E06C75;">(object):</span></span>
<span class="line"><span style="color:#E06C75;">def insert(self, tablet: Union[Tablet, NumpyTablet]):</span></span>
<span class="line"><span style="color:#E06C75;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#E06C75;">    Insert data into the database.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">    Parameters:</span></span>
<span class="line"><span style="color:#E06C75;">        tablet (Tablet | NumpyTablet): The tablet containing the data to be inserted.</span></span>
<span class="line"><span style="color:#E06C75;">                                       Accepts either a \`Tablet\` or \`NumpyTablet\`.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">    Raises:</span></span>
<span class="line"><span style="color:#E06C75;">        IoTDBConnectionException: If there is an issue with the database connection.</span></span>
<span class="line"><span style="color:#E06C75;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#E06C75;">    pass</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">def execute_non_query_statement(self, sql: str):</span></span>
<span class="line"><span style="color:#E06C75;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#E06C75;">    Execute a non-query SQL statement.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">    Parameters:</span></span>
<span class="line"><span style="color:#E06C75;">        sql (str): The SQL statement to execute. Typically used for commands</span></span>
<span class="line"><span style="color:#E06C75;">                   such as INSERT, DELETE, or UPDATE.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">    Raises:</span></span>
<span class="line"><span style="color:#E06C75;">        IoTDBConnectionException: If there is an issue with the database connection.</span></span>
<span class="line"><span style="color:#E06C75;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#E06C75;">    pass</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">def execute_query_statement(self, sql: str, timeout_in_ms: int = 0) -&gt; &quot;SessionDataSet&quot;:</span></span>
<span class="line"><span style="color:#E06C75;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#E06C75;">    Execute a query SQL statement and return the result set.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">    Parameters:</span></span>
<span class="line"><span style="color:#E06C75;">        sql (str): The SQL query to execute.</span></span>
<span class="line"><span style="color:#E06C75;">        timeout_in_ms (int, optional): Timeout for the query in milliseconds. Defaults to 0,</span></span>
<span class="line"><span style="color:#E06C75;">                                       which means no timeout.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">    Returns:</span></span>
<span class="line"><span style="color:#E06C75;">        SessionDataSet: The result set of the query.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">    Raises:</span></span>
<span class="line"><span style="color:#E06C75;">        IoTDBConnectionException: If there is an issue with the database connection.</span></span>
<span class="line"><span style="color:#E06C75;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#E06C75;">    pass</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">def close(self):</span></span>
<span class="line"><span style="color:#E06C75;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#E06C75;">    Close the session and release resources.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">    Raises:</span></span>
<span class="line"><span style="color:#E06C75;">        IoTDBConnectionException: If there is an issue closing the connection.</span></span>
<span class="line"><span style="color:#E06C75;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#E06C75;">    pass</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-tablesessionconfig" tabindex="-1"><a class="header-anchor" href="#_2-2-tablesessionconfig"><span>2.2 TableSessionConfig</span></a></h3><h4 id="_2-2-1-功能描述" tabindex="-1"><a class="header-anchor" href="#_2-2-1-功能描述"><span>2.2.1 功能描述</span></a></h4><p>TableSessionConfig是一个配置类，用于设置和创建TableSession 实例。它定义了连接到IoTDB数据库所需的各种参数。</p><h4 id="_2-2-2-配置选项" tabindex="-1"><a class="header-anchor" href="#_2-2-2-配置选项"><span>2.2.2 配置选项</span></a></h4><table><thead><tr><th><strong>配置项</strong></th><th><strong>描述</strong></th><th><strong>类型</strong></th><th><strong>默认值</strong></th></tr></thead><tbody><tr><td>node_urls</td><td>数据库连接的节点 URL 列表</td><td>list</td><td>[&quot;localhost:6667&quot;]</td></tr><tr><td>username</td><td>数据库连接用户名</td><td>str</td><td>&quot;root&quot;</td></tr><tr><td>password</td><td>数据库连接密码</td><td>str</td><td>&quot;root&quot;</td></tr><tr><td>database</td><td>要连接的目标数据库</td><td>str</td><td>None</td></tr><tr><td>fetch_size</td><td>每次查询获取的行数</td><td>int</td><td>5000</td></tr><tr><td>time_zone</td><td>会话的默认时区</td><td>str</td><td>Session.DEFAULT_ZONE_ID</td></tr><tr><td>enable_compression</td><td>是否启用数据压缩</td><td>bool</td><td>False</td></tr></tbody></table><h4 id="_2-2-3-接口展示" tabindex="-1"><a class="header-anchor" href="#_2-2-3-接口展示"><span>2.2.3 接口展示</span></a></h4><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">class</span><span style="color:#E5C07B;"> TableSessionConfig</span><span style="color:#E06C75;">(object):</span></span>
<span class="line"><span style="color:#E06C75;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#E06C75;">    Configuration </span><span style="color:#C678DD;">class</span><span style="color:#E5C07B;"> for</span><span style="color:#E06C75;"> a TableSession. </span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">    This </span><span style="color:#C678DD;">class</span><span style="color:#E5C07B;"> defines</span><span style="color:#E06C75;"> various parameters for connecting to and interacting </span></span>
<span class="line"><span style="color:#E06C75;">    with the IoTDB tables.</span></span>
<span class="line"><span style="color:#E06C75;">    &quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">    def __init__(</span></span>
<span class="line"><span style="color:#E06C75;">        self,</span></span>
<span class="line"><span style="color:#E06C75;">        node_urls: list = None,</span></span>
<span class="line"><span style="color:#E06C75;">        username: str = Session.DEFAULT_USER,</span></span>
<span class="line"><span style="color:#E06C75;">        password: str = Session.DEFAULT_PASSWORD,</span></span>
<span class="line"><span style="color:#E06C75;">        database: str = None,</span></span>
<span class="line"><span style="color:#E06C75;">        fetch_size: int = 5000,</span></span>
<span class="line"><span style="color:#E06C75;">        time_zone: str = Session.DEFAULT_ZONE_ID,</span></span>
<span class="line"><span style="color:#E06C75;">        enable_compression: bool = False,</span></span>
<span class="line"><span style="color:#E06C75;">    ):</span></span>
<span class="line"><span style="color:#E06C75;">        &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#E06C75;">        Initialize a TableSessionConfig object with the provided parameters.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">        Parameters:</span></span>
<span class="line"><span style="color:#E06C75;">            node_urls (list, optional): A list of node URLs for the database connection.</span></span>
<span class="line"><span style="color:#E06C75;">                                        Defaults to [&quot;localhost:6667&quot;].</span></span>
<span class="line"><span style="color:#E06C75;">            username (str, optional): The username for the database connection. </span></span>
<span class="line"><span style="color:#E06C75;">                                      Defaults to &quot;root&quot;.</span></span>
<span class="line"><span style="color:#E06C75;">            password (str, optional): The password for the database connection. </span></span>
<span class="line"><span style="color:#E06C75;">                                      Defaults to &quot;root&quot;.</span></span>
<span class="line"><span style="color:#E06C75;">            database (str, optional): The target database to connect to. Defaults to None.</span></span>
<span class="line"><span style="color:#E06C75;">            fetch_size (int, optional): The number of rows to fetch per query. Defaults to 5000.</span></span>
<span class="line"><span style="color:#E06C75;">            time_zone (str, optional): The </span><span style="color:#C678DD;">default</span><span style="color:#E06C75;"> time zone for the session. </span></span>
<span class="line"><span style="color:#E06C75;">                                       Defaults to Session.DEFAULT_ZONE_ID.</span></span>
<span class="line"><span style="color:#E06C75;">            enable_compression (bool, optional): Whether to enable data compression. </span></span>
<span class="line"><span style="color:#E06C75;">                                                 Defaults to False.</span></span>
<span class="line"><span style="color:#E06C75;">        &quot;&quot;&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意事项:</strong></p><p>在使用完 TableSession 后，务必调用 close 方法来释放资源。</p><h2 id="_3-客户端连接池" tabindex="-1"><a class="header-anchor" href="#_3-客户端连接池"><span>3 客户端连接池</span></a></h2><h3 id="_3-1-tablesessionpool" tabindex="-1"><a class="header-anchor" href="#_3-1-tablesessionpool"><span>3.1 TableSessionPool</span></a></h3><h4 id="_3-1-1-功能描述" tabindex="-1"><a class="header-anchor" href="#_3-1-1-功能描述"><span>3.1.1 功能描述</span></a></h4><p>TableSessionPool 是一个会话池管理类，用于管理 TableSession 实例的创建和销毁。它提供了从池中获取会话和关闭会话池的功能。</p><h4 id="_3-1-2-方法列表" tabindex="-1"><a class="header-anchor" href="#_3-1-2-方法列表"><span>3.1.2 方法列表</span></a></h4><table><thead><tr><th><strong>方法名称</strong></th><th><strong>描述</strong></th><th><strong>返回类型</strong></th><th><strong>异常</strong></th></tr></thead><tbody><tr><td>get_session</td><td>从会话池中检索一个新的 TableSession 实例</td><td>TableSession</td><td>无</td></tr><tr><td>close</td><td>关闭会话池并释放所有资源</td><td>None</td><td>无</td></tr></tbody></table><h4 id="_3-1-3-接口展示" tabindex="-1"><a class="header-anchor" href="#_3-1-3-接口展示"><span>3.1.3 接口展示</span></a></h4><p><strong>TableSessionPool:</strong></p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#E06C75;">def </span><span style="color:#61AFEF;">get_session</span><span style="color:#E06C75;">(self) </span><span style="color:#C678DD;">-&gt;</span><span style="color:#E06C75;"> TableSession</span><span style="color:#C678DD;">:</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">    Retrieve a new TableSession instance.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">    Returns:</span></span>
<span class="line"><span style="color:#98C379;">        TableSession: A new session object configured with the session pool.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">    Notes:</span></span>
<span class="line"><span style="color:#98C379;">        The session is initialized with the underlying session pool for managing</span></span>
<span class="line"><span style="color:#98C379;">        connections. Ensure proper usage of the session&#39;s lifecycle.</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">def </span><span style="color:#61AFEF;">close</span><span style="color:#E06C75;">(self)</span><span style="color:#C678DD;">:</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">    Close the session pool and release all resources.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">    This method closes the underlying session pool, ensuring that all</span></span>
<span class="line"><span style="color:#98C379;">    resources associated with it are properly released.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">    Notes:</span></span>
<span class="line"><span style="color:#98C379;">        After calling this method, the session pool cannot be used to retrieve</span></span>
<span class="line"><span style="color:#98C379;">        new sessions, and any attempt to do so may raise an exception.</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-tablesessionpoolconfig" tabindex="-1"><a class="header-anchor" href="#_3-2-tablesessionpoolconfig"><span>3.2 TableSessionPoolConfig</span></a></h3><h4 id="_3-2-1-功能描述" tabindex="-1"><a class="header-anchor" href="#_3-2-1-功能描述"><span>3.2.1 功能描述</span></a></h4><p>TableSessionPoolConfig是一个配置类，用于设置和创建 TableSessionPool 实例。它定义了初始化和管理 IoTDB 数据库会话池所需的参数。</p><h4 id="_3-2-2-配置选项" tabindex="-1"><a class="header-anchor" href="#_3-2-2-配置选项"><span>3.2.2 配置选项</span></a></h4><table><thead><tr><th><strong>配置项</strong></th><th><strong>描述</strong></th><th><strong>类型</strong></th><th><strong>默认值</strong></th></tr></thead><tbody><tr><td>node_urls</td><td>数据库连接的节点 URL 列表</td><td>list</td><td>None</td></tr><tr><td>max_pool_size</td><td>会话池中的最大会话数</td><td>int</td><td>5</td></tr><tr><td>username</td><td>数据库连接用户名</td><td>str</td><td>Session.DEFAULT_USER</td></tr><tr><td>password</td><td>数据库连接密码</td><td>str</td><td>Session.DEFAULT_PASSWORD</td></tr><tr><td>database</td><td>要连接的目标数据库</td><td>str</td><td>None</td></tr><tr><td>fetch_size</td><td>每次查询获取的行数</td><td>int</td><td>5000</td></tr><tr><td>time_zone</td><td>会话池的默认时区</td><td>str</td><td>Session.DEFAULT_ZONE_ID</td></tr><tr><td>enable_redirection</td><td>是否启用重定向</td><td>bool</td><td>False</td></tr><tr><td>enable_compression</td><td>是否启用数据压缩</td><td>bool</td><td>False</td></tr><tr><td>wait_timeout_in_ms</td><td>等待会话可用的最大时间（毫秒）</td><td>int</td><td>10000</td></tr><tr><td>max_retry</td><td>操作的最大重试次数</td><td>int</td><td>3</td></tr></tbody></table><h4 id="_3-2-3-接口展示" tabindex="-1"><a class="header-anchor" href="#_3-2-3-接口展示"><span>3.2.3 接口展示</span></a></h4><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">class</span><span style="color:#E5C07B;"> TableSessionPoolConfig</span><span style="color:#E06C75;">(object):</span></span>
<span class="line"><span style="color:#E06C75;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#E06C75;">    Configuration </span><span style="color:#C678DD;">class</span><span style="color:#E5C07B;"> for</span><span style="color:#E06C75;"> a TableSessionPool.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">    This </span><span style="color:#C678DD;">class</span><span style="color:#E5C07B;"> defines</span><span style="color:#E06C75;"> the parameters required to initialize and manage</span></span>
<span class="line"><span style="color:#E06C75;">    a session pool for interacting with the IoTDB database.</span></span>
<span class="line"><span style="color:#E06C75;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#E06C75;">    def __init__(</span></span>
<span class="line"><span style="color:#E06C75;">        self,</span></span>
<span class="line"><span style="color:#E06C75;">        node_urls: list = None,</span></span>
<span class="line"><span style="color:#E06C75;">        max_pool_size: int = 5,</span></span>
<span class="line"><span style="color:#E06C75;">        username: str = Session.DEFAULT_USER,</span></span>
<span class="line"><span style="color:#E06C75;">        password: str = Session.DEFAULT_PASSWORD,</span></span>
<span class="line"><span style="color:#E06C75;">        database: str = None,</span></span>
<span class="line"><span style="color:#E06C75;">        fetch_size: int = 5000,</span></span>
<span class="line"><span style="color:#E06C75;">        time_zone: str = Session.DEFAULT_ZONE_ID,</span></span>
<span class="line"><span style="color:#E06C75;">        enable_redirection: bool = False,</span></span>
<span class="line"><span style="color:#E06C75;">        enable_compression: bool = False,</span></span>
<span class="line"><span style="color:#E06C75;">        wait_timeout_in_ms: int = 10000,</span></span>
<span class="line"><span style="color:#E06C75;">        max_retry: int = 3,</span></span>
<span class="line"><span style="color:#E06C75;">    ):</span></span>
<span class="line"><span style="color:#E06C75;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#E06C75;">    Initialize a TableSessionPoolConfig object with the provided parameters.</span></span>
<span class="line"><span style="color:#E06C75;">    </span></span>
<span class="line"><span style="color:#E06C75;">    Parameters:</span></span>
<span class="line"><span style="color:#E06C75;">        node_urls (list, optional): A list of node URLs for the database connection.</span></span>
<span class="line"><span style="color:#E06C75;">                                    Defaults to None.</span></span>
<span class="line"><span style="color:#E06C75;">        max_pool_size (int, optional): The maximum number of sessions in the pool.</span></span>
<span class="line"><span style="color:#E06C75;">                                       Defaults to 5.</span></span>
<span class="line"><span style="color:#E06C75;">        username (str, optional): The username for the database connection.</span></span>
<span class="line"><span style="color:#E06C75;">                                  Defaults to Session.DEFAULT_USER.</span></span>
<span class="line"><span style="color:#E06C75;">        password (str, optional): The password for the database connection.</span></span>
<span class="line"><span style="color:#E06C75;">                                  Defaults to Session.DEFAULT_PASSWORD.</span></span>
<span class="line"><span style="color:#E06C75;">        database (str, optional): The target database to connect to. Defaults to None.</span></span>
<span class="line"><span style="color:#E06C75;">        fetch_size (int, optional): The number of rows to fetch per query. Defaults to 5000.</span></span>
<span class="line"><span style="color:#E06C75;">        time_zone (str, optional): The </span><span style="color:#C678DD;">default</span><span style="color:#E06C75;"> time zone for the session pool.</span></span>
<span class="line"><span style="color:#E06C75;">                                   Defaults to Session.DEFAULT_ZONE_ID.</span></span>
<span class="line"><span style="color:#E06C75;">        enable_redirection (bool, optional): Whether to enable redirection.</span></span>
<span class="line"><span style="color:#E06C75;">                                             Defaults to False.</span></span>
<span class="line"><span style="color:#E06C75;">        enable_compression (bool, optional): Whether to enable data compression.</span></span>
<span class="line"><span style="color:#E06C75;">                                             Defaults to False.</span></span>
<span class="line"><span style="color:#E06C75;">        wait_timeout_in_ms (int, optional): The maximum time (in milliseconds) to wait for a session</span></span>
<span class="line"><span style="color:#E06C75;">                                            to become available. Defaults to 10000.</span></span>
<span class="line"><span style="color:#E06C75;">        max_retry (int, optional): The maximum number of retry attempts for operations. Defaults to 3.</span></span>
<span class="line"><span style="color:#E06C75;">    </span></span>
<span class="line"><span style="color:#E06C75;">    &quot;&quot;&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-示例代码" tabindex="-1"><a class="header-anchor" href="#_4-示例代码"><span>4 示例代码</span></a></h2><p>Session示例代码:<a href="https://github.com/apache/iotdb/blob/master/iotdb-client/client-py/table_model_session_example.py" target="_blank" rel="noopener noreferrer">iotdb/blob/master/iotdb-client/client-py/table_model_session_example.py</a></p><p>SessionPool示例代码:<a href="https://github.com/apache/iotdb/blob/master/iotdb-client/client-py/table_model_session_pool_example.py" target="_blank" rel="noopener noreferrer">iotdb/blob/master/iotdb-client/client-py/table_model_session_pool_example.py</a></p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#E06C75;"># </span><span style="color:#E5C07B;">Licensed</span><span style="color:#E06C75;"> to the </span><span style="color:#E5C07B;">Apache</span><span style="color:#E5C07B;"> Software</span><span style="color:#61AFEF;"> Foundation</span><span style="color:#E06C75;"> (ASF) under one</span></span>
<span class="line"><span style="color:#E06C75;"># or more contributor license </span><span style="color:#E5C07B;">agreements</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">  See</span><span style="color:#E06C75;"> the </span><span style="color:#E5C07B;">NOTICE</span><span style="color:#E06C75;"> file</span></span>
<span class="line"><span style="color:#E06C75;"># distributed with </span><span style="color:#E5C07B;">this</span><span style="color:#E06C75;"> work </span><span style="color:#C678DD;">for</span><span style="color:#E06C75;"> additional information</span></span>
<span class="line"><span style="color:#E06C75;"># regarding copyright </span><span style="color:#E5C07B;">ownership</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">  The</span><span style="color:#E5C07B;"> ASF</span><span style="color:#E06C75;"> licenses </span><span style="color:#E5C07B;">this</span><span style="color:#E06C75;"> file</span></span>
<span class="line"><span style="color:#E06C75;"># to you under the </span><span style="color:#E5C07B;">Apache</span><span style="color:#E06C75;"> License</span><span style="color:#ABB2BF;">,</span><span style="color:#E06C75;"> Version </span><span style="color:#D19A66;">2.0</span><span style="color:#E06C75;"> (the</span></span>
<span class="line"><span style="color:#E06C75;"># </span><span style="color:#98C379;">&quot;License&quot;</span><span style="color:#E06C75;">)</span><span style="color:#ABB2BF;">;</span><span style="color:#E06C75;"> you may not use </span><span style="color:#E5C07B;">this</span><span style="color:#E06C75;"> file except in compliance</span></span>
<span class="line"><span style="color:#E06C75;"># with the </span><span style="color:#E5C07B;">License</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">  You</span><span style="color:#E06C75;"> may obtain a copy of the </span><span style="color:#E5C07B;">License</span><span style="color:#E06C75;"> at</span></span>
<span class="line"><span style="color:#E06C75;">#</span></span>
<span class="line"><span style="color:#E06C75;">#     http</span><span style="color:#C678DD;">:</span><span style="color:#7F848E;font-style:italic;">//www.apache.org/licenses/LICENSE-2.0</span></span>
<span class="line"><span style="color:#E06C75;">#</span></span>
<span class="line"><span style="color:#E06C75;"># </span><span style="color:#E5C07B;">Unless</span><span style="color:#E06C75;"> required by applicable law or agreed to in writing</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;"># software distributed under the </span><span style="color:#E5C07B;">License</span><span style="color:#E06C75;"> is distributed on an</span></span>
<span class="line"><span style="color:#E06C75;"># </span><span style="color:#98C379;">&quot;AS IS&quot;</span><span style="color:#E06C75;"> BASIS</span><span style="color:#ABB2BF;">,</span><span style="color:#E5C07B;"> WITHOUT</span><span style="color:#E5C07B;"> WARRANTIES</span><span style="color:#E5C07B;"> OR</span><span style="color:#E5C07B;"> CONDITIONS</span><span style="color:#E5C07B;"> OF</span><span style="color:#E5C07B;"> ANY</span></span>
<span class="line"><span style="color:#E06C75;"># KIND</span><span style="color:#ABB2BF;">,</span><span style="color:#E06C75;"> either express or </span><span style="color:#E5C07B;">implied</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">  See</span><span style="color:#E06C75;"> the </span><span style="color:#E5C07B;">License</span><span style="color:#C678DD;"> for</span><span style="color:#E06C75;"> the</span></span>
<span class="line"><span style="color:#E06C75;"># specific language governing permissions and limitations</span></span>
<span class="line"><span style="color:#E06C75;"># under the License</span><span style="color:#ABB2BF;">.</span></span>
<span class="line"><span style="color:#E06C75;">#</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#E5C07B;"> threading</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFFFFF;">import</span><span style="color:#E5C07B;"> numpy as np</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">from iotdb.table_session_pool </span><span style="color:#FFFFFF;">import</span><span style="color:#E5C07B;"> TableSessionPool, TableSessionPoolConfig</span></span>
<span class="line"><span style="color:#E5C07B;">from iotdb.utils.IoTDBConstants </span><span style="color:#FFFFFF;">import</span><span style="color:#E5C07B;"> TSDataType</span></span>
<span class="line"><span style="color:#E5C07B;">from iotdb.utils.NumpyTablet </span><span style="color:#FFFFFF;">import</span><span style="color:#E5C07B;"> NumpyTablet</span></span>
<span class="line"><span style="color:#E5C07B;">from iotdb.utils.Tablet </span><span style="color:#FFFFFF;">import</span><span style="color:#E5C07B;"> ColumnType, Tablet</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">def prepare_data():</span></span>
<span class="line"><span style="color:#E5C07B;">    print(&quot;create database&quot;)</span></span>
<span class="line"><span style="color:#E5C07B;">    # Get a session from the pool</span></span>
<span class="line"><span style="color:#E5C07B;">    session = session_pool.get_session()</span></span>
<span class="line"><span style="color:#E5C07B;">    session.execute_non_query_statement(&quot;CREATE DATABASE IF NOT EXISTS db1&quot;)</span></span>
<span class="line"><span style="color:#E5C07B;">    session.execute_non_query_statement(&#39;USE &quot;db1&quot;&#39;)</span></span>
<span class="line"><span style="color:#E5C07B;">    session.execute_non_query_statement(</span></span>
<span class="line"><span style="color:#E5C07B;">        &quot;CREATE TABLE table0 (id1 string id, attr1 string attribute, &quot;</span></span>
<span class="line"><span style="color:#E5C07B;">        + &quot;m1 </span><span style="color:#FFFFFF;">double</span><span style="color:#E5C07B;"> &quot;</span></span>
<span class="line"><span style="color:#E5C07B;">        + &quot;measurement)&quot;</span></span>
<span class="line"><span style="color:#E5C07B;">    )</span></span>
<span class="line"><span style="color:#E5C07B;">    session.execute_non_query_statement(</span></span>
<span class="line"><span style="color:#E5C07B;">        &quot;CREATE TABLE table1 (id1 string id, attr1 string attribute, &quot;</span></span>
<span class="line"><span style="color:#E5C07B;">        + &quot;m1 </span><span style="color:#FFFFFF;">double</span><span style="color:#E5C07B;"> &quot;</span></span>
<span class="line"><span style="color:#E5C07B;">        + &quot;measurement)&quot;</span></span>
<span class="line"><span style="color:#E5C07B;">    )</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">    print(&quot;now the tables are:&quot;)</span></span>
<span class="line"><span style="color:#E5C07B;">    # show result</span></span>
<span class="line"><span style="color:#E5C07B;">    res = session.execute_query_statement(&quot;SHOW TABLES&quot;)</span></span>
<span class="line"><span style="color:#FFFFFF;">    while</span><span style="color:#E5C07B;"> res.has_next():</span></span>
<span class="line"><span style="color:#E5C07B;">        print(res.next())</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">    session.close()</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">def insert_data(num: </span><span style="color:#FFFFFF;">int</span><span style="color:#E5C07B;">):</span></span>
<span class="line"><span style="color:#E5C07B;">    print(&quot;insert data </span><span style="color:#FFFFFF;">for</span><span style="color:#E5C07B;"> table&quot; + str(num))</span></span>
<span class="line"><span style="color:#E5C07B;">    # Get a session from the pool</span></span>
<span class="line"><span style="color:#E5C07B;">    session = session_pool.get_session()</span></span>
<span class="line"><span style="color:#E5C07B;">    column_names = [</span></span>
<span class="line"><span style="color:#E5C07B;">        &quot;id1&quot;,</span></span>
<span class="line"><span style="color:#E5C07B;">        &quot;attr1&quot;,</span></span>
<span class="line"><span style="color:#E5C07B;">        &quot;m1&quot;,</span></span>
<span class="line"><span style="color:#E5C07B;">    ]</span></span>
<span class="line"><span style="color:#E5C07B;">    data_types = [</span></span>
<span class="line"><span style="color:#E5C07B;">        TSDataType.STRING,</span></span>
<span class="line"><span style="color:#E5C07B;">        TSDataType.STRING,</span></span>
<span class="line"><span style="color:#E5C07B;">        TSDataType.DOUBLE,</span></span>
<span class="line"><span style="color:#E5C07B;">    ]</span></span>
<span class="line"><span style="color:#E5C07B;">    column_types = [ColumnType.ID, ColumnType.ATTRIBUTE, ColumnType.MEASUREMENT]</span></span>
<span class="line"><span style="color:#E5C07B;">    timestamps = []</span></span>
<span class="line"><span style="color:#E5C07B;">    values = []</span></span>
<span class="line"><span style="color:#FFFFFF;">    for</span><span style="color:#E5C07B;"> row in range(</span><span style="color:#FFFFFF;">15</span><span style="color:#E5C07B;">):</span></span>
<span class="line"><span style="color:#E5C07B;">        timestamps.append(row)</span></span>
<span class="line"><span style="color:#E5C07B;">        values.append([&quot;id:&quot; + str(row), &quot;attr:&quot; + str(row), row</span><span style="color:#FFFFFF;"> *</span><span style="color:#FFFFFF;"> 1</span><span style="color:#E5C07B;">.</span><span style="color:#FFFFFF;">0</span><span style="color:#E5C07B;">])</span></span>
<span class="line"><span style="color:#E5C07B;">    tablet = Tablet(</span></span>
<span class="line"><span style="color:#E5C07B;">        &quot;table&quot; + str(num), column_names, data_types, values, timestamps, column_types</span></span>
<span class="line"><span style="color:#E5C07B;">    )</span></span>
<span class="line"><span style="color:#E5C07B;">    session.insert(tablet)</span></span>
<span class="line"><span style="color:#E5C07B;">    session.execute_non_query_statement(&quot;FLush&quot;)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">    np_timestamps = np.arange(</span><span style="color:#FFFFFF;">15</span><span style="color:#E5C07B;">, </span><span style="color:#FFFFFF;">30</span><span style="color:#E5C07B;">, dtype=np.dtype(&quot;&gt;i8&quot;))</span></span>
<span class="line"><span style="color:#E5C07B;">    np_values = [</span></span>
<span class="line"><span style="color:#E5C07B;">        np.array([&quot;id:{}&quot;.format(i) </span><span style="color:#FFFFFF;">for</span><span style="color:#E5C07B;"> i in range(</span><span style="color:#FFFFFF;">15</span><span style="color:#E5C07B;">, </span><span style="color:#FFFFFF;">30</span><span style="color:#E5C07B;">)]),</span></span>
<span class="line"><span style="color:#E5C07B;">        np.array([&quot;attr:{}&quot;.format(i) </span><span style="color:#FFFFFF;">for</span><span style="color:#E5C07B;"> i in range(</span><span style="color:#FFFFFF;">15</span><span style="color:#E5C07B;">, </span><span style="color:#FFFFFF;">30</span><span style="color:#E5C07B;">)]),</span></span>
<span class="line"><span style="color:#E5C07B;">        np.linspace(</span><span style="color:#FFFFFF;">15</span><span style="color:#E5C07B;">.</span><span style="color:#FFFFFF;">0</span><span style="color:#E5C07B;">, </span><span style="color:#FFFFFF;">29</span><span style="color:#E5C07B;">.</span><span style="color:#FFFFFF;">0</span><span style="color:#E5C07B;">, num=</span><span style="color:#FFFFFF;">15</span><span style="color:#E5C07B;">, dtype=TSDataType.DOUBLE.np_dtype()),</span></span>
<span class="line"><span style="color:#E5C07B;">    ]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">    np_tablet = NumpyTablet(</span></span>
<span class="line"><span style="color:#E5C07B;">        &quot;table&quot; + str(num),</span></span>
<span class="line"><span style="color:#E5C07B;">        column_names,</span></span>
<span class="line"><span style="color:#E5C07B;">        data_types,</span></span>
<span class="line"><span style="color:#E5C07B;">        np_values,</span></span>
<span class="line"><span style="color:#E5C07B;">        np_timestamps,</span></span>
<span class="line"><span style="color:#E5C07B;">        column_types=column_types,</span></span>
<span class="line"><span style="color:#E5C07B;">    )</span></span>
<span class="line"><span style="color:#E5C07B;">    session.insert(np_tablet)</span></span>
<span class="line"><span style="color:#E5C07B;">    session.close()</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">def query_data():</span></span>
<span class="line"><span style="color:#E5C07B;">    # Get a session from the pool</span></span>
<span class="line"><span style="color:#E5C07B;">    session = session_pool.get_session()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">    print(&quot;get data from table0&quot;)</span></span>
<span class="line"><span style="color:#E5C07B;">    res = session.execute_query_statement(&quot;select</span><span style="color:#FFFFFF;"> *</span><span style="color:#E5C07B;"> from table0&quot;)</span></span>
<span class="line"><span style="color:#FFFFFF;">    while</span><span style="color:#E5C07B;"> res.has_next():</span></span>
<span class="line"><span style="color:#E5C07B;">        print(res.next())</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">    print(&quot;get data from table1&quot;)</span></span>
<span class="line"><span style="color:#E5C07B;">    res = session.execute_query_statement(&quot;select</span><span style="color:#FFFFFF;"> *</span><span style="color:#E5C07B;"> from table0&quot;)</span></span>
<span class="line"><span style="color:#FFFFFF;">    while</span><span style="color:#E5C07B;"> res.has_next():</span></span>
<span class="line"><span style="color:#E5C07B;">        print(res.next())</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">    session.close()</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">def delete_data():</span></span>
<span class="line"><span style="color:#E5C07B;">    session = session_pool.get_session()</span></span>
<span class="line"><span style="color:#E5C07B;">    session.execute_non_query_statement(&quot;drop database db1&quot;)</span></span>
<span class="line"><span style="color:#E5C07B;">    print(&quot;data has been deleted. now the databases are:&quot;)</span></span>
<span class="line"><span style="color:#E5C07B;">    res = session.execute_query_statement(&quot;show databases&quot;)</span></span>
<span class="line"><span style="color:#FFFFFF;">    while</span><span style="color:#E5C07B;"> res.has_next():</span></span>
<span class="line"><span style="color:#E5C07B;">        print(res.next())</span></span>
<span class="line"><span style="color:#E5C07B;">    session.close()</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;"># Create a session pool</span></span>
<span class="line"><span style="color:#E5C07B;">username = &quot;root&quot;</span></span>
<span class="line"><span style="color:#E5C07B;">password = &quot;root&quot;</span></span>
<span class="line"><span style="color:#E5C07B;">node_urls = [&quot;</span><span style="color:#FFFFFF;">127</span><span style="color:#E5C07B;">.</span><span style="color:#FFFFFF;">0</span><span style="color:#E5C07B;">.</span><span style="color:#FFFFFF;">0</span><span style="color:#E5C07B;">.</span><span style="color:#FFFFFF;">1</span><span style="color:#E5C07B;">:</span><span style="color:#FFFFFF;">6667</span><span style="color:#E5C07B;">&quot;, &quot;</span><span style="color:#FFFFFF;">127</span><span style="color:#E5C07B;">.</span><span style="color:#FFFFFF;">0</span><span style="color:#E5C07B;">.</span><span style="color:#FFFFFF;">0</span><span style="color:#E5C07B;">.</span><span style="color:#FFFFFF;">1</span><span style="color:#E5C07B;">:</span><span style="color:#FFFFFF;">6668</span><span style="color:#E5C07B;">&quot;, &quot;</span><span style="color:#FFFFFF;">127</span><span style="color:#E5C07B;">.</span><span style="color:#FFFFFF;">0</span><span style="color:#E5C07B;">.</span><span style="color:#FFFFFF;">0</span><span style="color:#E5C07B;">.</span><span style="color:#FFFFFF;">1</span><span style="color:#E5C07B;">:</span><span style="color:#FFFFFF;">6669</span><span style="color:#E5C07B;">&quot;]</span></span>
<span class="line"><span style="color:#E5C07B;">fetch_size = </span><span style="color:#FFFFFF;">1024</span></span>
<span class="line"><span style="color:#E5C07B;">database = &quot;db1&quot;</span></span>
<span class="line"><span style="color:#E5C07B;">max_pool_size = </span><span style="color:#FFFFFF;">5</span></span>
<span class="line"><span style="color:#E5C07B;">wait_timeout_in_ms = </span><span style="color:#FFFFFF;">3000</span></span>
<span class="line"><span style="color:#E5C07B;">config = TableSessionPoolConfig(</span></span>
<span class="line"><span style="color:#E5C07B;">    node_urls=node_urls,</span></span>
<span class="line"><span style="color:#E5C07B;">    username=username,</span></span>
<span class="line"><span style="color:#E5C07B;">    password=password,</span></span>
<span class="line"><span style="color:#E5C07B;">    database=database,</span></span>
<span class="line"><span style="color:#E5C07B;">    max_pool_size=max_pool_size,</span></span>
<span class="line"><span style="color:#E5C07B;">    fetch_size=fetch_size,</span></span>
<span class="line"><span style="color:#E5C07B;">    wait_timeout_in_ms=wait_timeout_in_ms,</span></span>
<span class="line"><span style="color:#E5C07B;">)</span></span>
<span class="line"><span style="color:#E5C07B;">session_pool = TableSessionPool(config)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">prepare_data()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">insert_thread1 = threading.Thread(target=insert_data, args=(</span><span style="color:#FFFFFF;">0</span><span style="color:#E5C07B;">,))</span></span>
<span class="line"><span style="color:#E5C07B;">insert_thread2 = threading.Thread(target=insert_data, args=(</span><span style="color:#FFFFFF;">1</span><span style="color:#E5C07B;">,))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">insert_thread1.start()</span></span>
<span class="line"><span style="color:#E5C07B;">insert_thread2.start()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">insert_thread1.join()</span></span>
<span class="line"><span style="color:#E5C07B;">insert_thread2.join()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">query_data()</span></span>
<span class="line"><span style="color:#E5C07B;">delete_data()</span></span>
<span class="line"><span style="color:#E5C07B;">session_pool.close()</span></span>
<span class="line"><span style="color:#E5C07B;">print(&quot;example is finished!&quot;)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,42)]))}const r=n(i,[["render",o],["__file","Programming-Python-Native-API.html.vue"]]),c=JSON.parse('{"path":"/zh/UserGuide/V2.0.1/Table/API/Programming-Python-Native-API.html","title":"Python 原生接口","lang":"zh-CN","frontmatter":{"description":"Python 原生接口 1 使用方式 安装依赖包: 2 读写操作 2.1 TableSession 2.1.1 功能描述 TableSession是IoTDB的一个核心类，用于与IoTDB数据库进行交互。通过这个类，用户可以执行SQL语句、插入数据以及管理数据库会话。 2.1.2 方法列表 2.1.3 接口展示 TableSession: 2.2 Ta...","head":[["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V2.0.1/Table/API/Programming-Python-Native-API.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Python 原生接口"}],["meta",{"property":"og:description","content":"Python 原生接口 1 使用方式 安装依赖包: 2 读写操作 2.1 TableSession 2.1.1 功能描述 TableSession是IoTDB的一个核心类，用于与IoTDB数据库进行交互。通过这个类，用户可以执行SQL语句、插入数据以及管理数据库会话。 2.1.2 方法列表 2.1.3 接口展示 TableSession: 2.2 Ta..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-03T10:29:25.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-03T10:29:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Python 原生接口\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-01-03T10:29:25.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1 使用方式","slug":"_1-使用方式","link":"#_1-使用方式","children":[]},{"level":2,"title":"2 读写操作","slug":"_2-读写操作","link":"#_2-读写操作","children":[{"level":3,"title":"2.1 TableSession","slug":"_2-1-tablesession","link":"#_2-1-tablesession","children":[]},{"level":3,"title":"2.2 TableSessionConfig","slug":"_2-2-tablesessionconfig","link":"#_2-2-tablesessionconfig","children":[]}]},{"level":2,"title":"3 客户端连接池","slug":"_3-客户端连接池","link":"#_3-客户端连接池","children":[{"level":3,"title":"3.1 TableSessionPool","slug":"_3-1-tablesessionpool","link":"#_3-1-tablesessionpool","children":[]},{"level":3,"title":"3.2 TableSessionPoolConfig","slug":"_3-2-tablesessionpoolconfig","link":"#_3-2-tablesessionpoolconfig","children":[]}]},{"level":2,"title":"4 示例代码","slug":"_4-示例代码","link":"#_4-示例代码","children":[]}],"git":{"createdTime":1735900165000,"updatedTime":1735900165000,"contributors":[{"name":"W1y1r","username":"W1y1r","email":"150988475+W1y1r@users.noreply.github.com","commits":1,"url":"https://github.com/W1y1r"}]},"readingTime":{"minutes":6.2,"words":1859},"filePathRelative":"zh/UserGuide/V2.0.1/Table/API/Programming-Python-Native-API.md","localizedDate":"2025年1月3日","autoDesc":true}');export{r as comp,c as data};
