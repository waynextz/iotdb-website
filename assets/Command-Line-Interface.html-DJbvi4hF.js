import{_ as e,c as s,b as n,o as t}from"./app-DLxi_e3x.js";const o={};function i(p,a){return t(),s("div",null,a[0]||(a[0]=[n(`<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">openID_url=http://127.0.0.1:8080/auth/realms/iotdb/</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="keycloack-configuration" tabindex="-1"><a class="header-anchor" href="#keycloack-configuration"><span>keycloack configuration</span></a></h4><p>1、Download the keycloack file and start keycloack in keycloack/bin</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">Shell <span class="token operator">&gt;</span>cd bin</span>
<span class="line">Shell <span class="token operator">&gt;</span>bash ./standalone.sh</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>2、use url(<a href="https://ip" target="_blank" rel="noopener noreferrer">https://ip</a>:port/auth) login keycloack, the first login needs to create a user<br><img src="https://alioss.timecho.com/docs/img/UserGuide/CLI/Command-Line-Interface/login_keycloak.png?raw=true" alt="avatar" loading="lazy"></p><p>3、Click administration console<br><img src="https://alioss.timecho.com/docs/img/UserGuide/CLI/Command-Line-Interface/AdministrationConsole.png?raw=true" alt="avatar" loading="lazy"></p><p>4、In the master menu on the left, click Add realm and enter name to create a new realm<br><img src="https://alioss.timecho.com/docs/img/UserGuide/CLI/Command-Line-Interface/add_Realm_1.png?raw=true" alt="avatar" loading="lazy"></p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/CLI/Command-Line-Interface/add_Realm_2.png?raw=true" alt="avatar" tabindex="0" loading="lazy"><figcaption>avatar</figcaption></figure><p>5、Click the menu clients on the left to create clients</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/CLI/Command-Line-Interface/client.png?raw=true" alt="avatar" tabindex="0" loading="lazy"><figcaption>avatar</figcaption></figure><p>6、Click user on the left menu to create user</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/CLI/Command-Line-Interface/user.png?raw=true" alt="avatar" tabindex="0" loading="lazy"><figcaption>avatar</figcaption></figure><p>7、Click the newly created user ID, click the credentials navigation, enter the password and close the temporary option. The configuration of keycloud is completed</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/CLI/Command-Line-Interface/pwd.png?raw=true" alt="avatar" tabindex="0" loading="lazy"><figcaption>avatar</figcaption></figure><p>8、To create a role, click Roles on the left menu and then click the Add Role button to add a role</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/CLI/Command-Line-Interface/add_role1.png?raw=true" alt="avatar" tabindex="0" loading="lazy"><figcaption>avatar</figcaption></figure><p>9、 Enter <code>iotdb_admin</code> in the Role Name and click the save button. Tip: <code>iotdb_admin</code> here cannot be any other name, otherwise even after successful login, you will not have permission to use iotdb&#39;s query, insert, create database, add users, roles and other functions</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/CLI/Command-Line-Interface/add_role2.png?raw=true" alt="avatar" tabindex="0" loading="lazy"><figcaption>avatar</figcaption></figure><p>10、Click the User menu on the left and click the Edit button in the user list to add the <code>iotdb_admin</code> role we just created for this user</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/CLI/Command-Line-Interface/add_role3.png?raw=true" alt="avatar" tabindex="0" loading="lazy"><figcaption>avatar</figcaption></figure><p>11、 Select Role Mappings, select the <code>iotdb_admin</code> role in Available Role and click the Add selected button to add the role</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/CLI/Command-Line-Interface/add_role4.png?raw=true" alt="avatar" tabindex="0" loading="lazy"><figcaption>avatar</figcaption></figure><ol start="12"><li>If the <code>iotdb_admin</code> role is in Assigned Roles and the <code>Success Role mappings updated</code> prompt appears, it proves that the role was added successfully</li></ol><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/CLI/Command-Line-Interface/add_role5.png?raw=true" alt="avatar" tabindex="0" loading="lazy"><figcaption>avatar</figcaption></figure><p>Tip: If the user role is adjusted, you need to regenerate the token and log in to iotdb again to take effect</p><p>The above steps provide a way for keycloak to log into iotdb. For more ways, please refer to keycloak configuration</p><p>If OIDC is enabled on server side then no username / passwort is needed but a valid Access Token from the OIDC Provider.<br> So as username you use the token and the password has to be empty, e.g.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">Shell <span class="token operator">&gt;</span> <span class="token function">bash</span> sbin/start-cli.sh <span class="token parameter variable">-h</span> <span class="token number">10.129</span>.187.21 <span class="token parameter variable">-p</span> <span class="token number">6667</span> <span class="token parameter variable">-u</span> <span class="token punctuation">{</span>my-access-token<span class="token punctuation">}</span> <span class="token parameter variable">-pw</span> <span class="token string">&quot;&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Among them, you need to replace {my access token} (note, including {}) with your token, that is, the value corresponding to access_token.</p><p>How to get the token is dependent on your OpenID Connect setup and not covered here.<br> In the simplest case you can get this via the command line with the <code>passwort-grant</code>.<br> For example, if you use keycloack as OIDC and you have a realm with a client <code>iotdb</code> defined as public you could use<br> the following <code>curl</code> command to fetch a token (replace all <code>{}</code> with appropriate values).</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">curl</span> <span class="token parameter variable">-X</span> POST <span class="token string">&quot;https://{your-keycloack-server}/auth/realms/{your-realm}/protocol/openid-connect/token&quot;</span> <span class="token punctuation">\\</span>                                                                                                                      </span>
<span class="line"> <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type: application/x-www-form-urlencoded&quot;</span> <span class="token punctuation">\\</span></span>
<span class="line"> <span class="token parameter variable">-d</span> <span class="token string">&quot;username={username}&quot;</span> <span class="token punctuation">\\</span></span>
<span class="line"> <span class="token parameter variable">-d</span> <span class="token string">&quot;password={password}&quot;</span> <span class="token punctuation">\\</span></span>
<span class="line"> <span class="token parameter variable">-d</span> <span class="token string">&#39;grant_type=password&#39;</span> <span class="token punctuation">\\</span></span>
<span class="line"> <span class="token parameter variable">-d</span> <span class="token string">&quot;client_id=iotdb-client&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The response looks something like</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span><span class="token property">&quot;access_token&quot;</span><span class="token operator">:</span><span class="token string">&quot;eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJxMS1XbTBvelE1TzBtUUg4LVNKYXAyWmNONE1tdWNXd25RV0tZeFpKNG93In0.eyJleHAiOjE1OTAzOTgwNzEsImlhdCI6MTU5MDM5Nzc3MSwianRpIjoiNjA0ZmYxMDctN2NiNy00NTRmLWIwYmQtY2M2ZDQwMjFiNGU4IiwiaXNzIjoiaHR0cDovL2F1dGguZGVtby5wcmFnbWF0aWNpbmR1c3RyaWVzLmRlL2F1dGgvcmVhbG1zL0lvVERCIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6ImJhMzJlNDcxLWM3NzItNGIzMy04ZGE2LTZmZThhY2RhMDA3MyIsInR5cCI6IkJlYXJlciIsImF6cCI6ImlvdGRiIiwic2Vzc2lvbl9zdGF0ZSI6IjA2MGQyODYyLTE0ZWQtNDJmZS1iYWY3LThkMWY3ODQ2NTdmMSIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsibG9jYWxob3N0OjgwODAiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iLCJpb3RkYl9hZG1pbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoiZW1haWwgcHJvZmlsZSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ1c2VyIn0.nwbrJkWdCNjzFrTDwKNuV5h9dDMg5ytRKGOXmFIajpfsbOutJytjWTCB2WpA8E1YI3KM6gU6Jx7cd7u0oPo5syHhfCz119n_wBiDnyTZkFOAPsx0M2z20kvBLN9k36_VfuCMFUeddJjO31MeLTmxB0UKg2VkxdczmzMH3pnalhxqpnWWk3GnrRrhAf2sZog0foH4Ae3Ks0lYtYzaWK_Yo7E4Px42-gJpohy3JevOC44aJ4auzJR1RBj9LUbgcRinkBy0JLi6XXiYznSC2V485CSBHW3sseXn7pSXQADhnmGQrLfFGO5ZljmPO18eFJaimdjvgSChsrlSEmTDDsoo5Q&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;expires_in&quot;</span><span class="token operator">:</span><span class="token number">300</span><span class="token punctuation">,</span><span class="token property">&quot;refresh_expires_in&quot;</span><span class="token operator">:</span><span class="token number">1800</span><span class="token punctuation">,</span><span class="token property">&quot;refresh_token&quot;</span><span class="token operator">:</span><span class="token string">&quot;eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJhMzZlMGU0NC02MWNmLTQ5NmMtOGRlZi03NTkwNjQ5MzQzMjEifQ.eyJleHAiOjE1OTAzOTk1NzEsImlhdCI6MTU5MDM5Nzc3MSwianRpIjoiNmMxNTBiY2EtYmE5NC00NTgxLWEwODEtYjI2YzhhMmI5YmZmIiwiaXNzIjoiaHR0cDovL2F1dGguZGVtby5wcmFnbWF0aWNpbmR1c3RyaWVzLmRlL2F1dGgvcmVhbG1zL0lvVERCIiwiYXVkIjoiaHR0cDovL2F1dGguZGVtby5wcmFnbWF0aWNpbmR1c3RyaWVzLmRlL2F1dGgvcmVhbG1zL0lvVERCIiwic3ViIjoiYmEzMmU0NzEtYzc3Mi00YjMzLThkYTYtNmZlOGFjZGEwMDczIiwidHlwIjoiUmVmcmVzaCIsImF6cCI6ImlvdGRiIiwic2Vzc2lvbl9zdGF0ZSI6IjA2MGQyODYyLTE0ZWQtNDJmZS1iYWY3LThkMWY3ODQ2NTdmMSIsInNjb3BlIjoiZW1haWwgcHJvZmlsZSJ9.ayNpXdNX28qahodX1zowrMGiUCw2AodlHBQFqr8Ui7c&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;token_type&quot;</span><span class="token operator">:</span><span class="token string">&quot;bearer&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;not-before-policy&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token property">&quot;session_state&quot;</span><span class="token operator">:</span><span class="token string">&quot;060d2862-14ed-42fe-baf7-8d1f784657f1&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;scope&quot;</span><span class="token operator">:</span><span class="token string">&quot;email profile&quot;</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>The interesting part here is the access token with the key <code>access_token</code>.<br> This has to be passed as username (with parameter <code>-u</code>) and empty password to the CLI.</p><h3 id="batch-operation-of-cli" tabindex="-1"><a class="header-anchor" href="#batch-operation-of-cli"><span>Batch Operation of Cli</span></a></h3><p>-e parameter is designed for the Cli/shell tool in the situation where you would like to manipulate IoTDB in batches through scripts. By using the -e parameter, you can operate IoTDB without entering the cli&#39;s input mode.</p><p>In order to avoid confusion between statements and other parameters, the current version only supports the -e parameter as the last parameter.</p><p>The usage of -e parameter for Cli/shell is as follows:</p><p>The Linux and MacOS system commands:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">Shell <span class="token operator">&gt;</span> <span class="token function">bash</span> sbin/start-cli.sh <span class="token parameter variable">-h</span> <span class="token punctuation">{</span>host<span class="token punctuation">}</span> <span class="token parameter variable">-p</span> <span class="token punctuation">{</span>rpcPort<span class="token punctuation">}</span> <span class="token parameter variable">-u</span> <span class="token punctuation">{</span>user<span class="token punctuation">}</span> <span class="token parameter variable">-pw</span> <span class="token punctuation">{</span>password<span class="token punctuation">}</span> <span class="token parameter variable">-e</span> <span class="token punctuation">{</span>sql <span class="token keyword">for</span> iotdb<span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>The Windows system commands:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">Shell <span class="token operator">&gt;</span> sbin<span class="token punctuation">\\</span>start-cli.bat <span class="token parameter variable">-h</span> <span class="token punctuation">{</span>host<span class="token punctuation">}</span> <span class="token parameter variable">-p</span> <span class="token punctuation">{</span>rpcPort<span class="token punctuation">}</span> <span class="token parameter variable">-u</span> <span class="token punctuation">{</span>user<span class="token punctuation">}</span> <span class="token parameter variable">-pw</span> <span class="token punctuation">{</span>password<span class="token punctuation">}</span> <span class="token parameter variable">-e</span> <span class="token punctuation">{</span>sql <span class="token keyword">for</span> iotdb<span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>In the Windows environment, the SQL statement of the -e parameter needs to use <code>\`\`</code> to replace <code>&quot; &quot;</code></p><p>In order to better explain the use of -e parameter, take following as an example(On linux system).</p><p>Suppose you want to create a database root.demo to a newly launched IoTDB, create a timeseries root.demo.s1 and insert three data points into it. With -e parameter, you could write a shell like this:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># !/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span class="token assign-left variable">host</span><span class="token operator">=</span><span class="token number">127.0</span>.0.1</span>
<span class="line"><span class="token assign-left variable">rpcPort</span><span class="token operator">=</span><span class="token number">6667</span></span>
<span class="line"><span class="token assign-left variable">user</span><span class="token operator">=</span>root</span>
<span class="line"><span class="token assign-left variable">pass</span><span class="token operator">=</span>root</span>
<span class="line"></span>
<span class="line"><span class="token function">bash</span> ./sbin/start-cli.sh <span class="token parameter variable">-h</span> <span class="token variable">\${host}</span> <span class="token parameter variable">-p</span> <span class="token variable">\${rpcPort}</span> <span class="token parameter variable">-u</span> <span class="token variable">\${user}</span> <span class="token parameter variable">-pw</span> <span class="token variable">\${pass}</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;create database root.demo&quot;</span></span>
<span class="line"><span class="token function">bash</span> ./sbin/start-cli.sh <span class="token parameter variable">-h</span> <span class="token variable">\${host}</span> <span class="token parameter variable">-p</span> <span class="token variable">\${rpcPort}</span> <span class="token parameter variable">-u</span> <span class="token variable">\${user}</span> <span class="token parameter variable">-pw</span> <span class="token variable">\${pass}</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;create timeseries root.demo.s1 WITH DATATYPE=INT32, ENCODING=RLE&quot;</span></span>
<span class="line"><span class="token function">bash</span> ./sbin/start-cli.sh <span class="token parameter variable">-h</span> <span class="token variable">\${host}</span> <span class="token parameter variable">-p</span> <span class="token variable">\${rpcPort}</span> <span class="token parameter variable">-u</span> <span class="token variable">\${user}</span> <span class="token parameter variable">-pw</span> <span class="token variable">\${pass}</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;insert into root.demo(timestamp,s1) values(1,10)&quot;</span></span>
<span class="line"><span class="token function">bash</span> ./sbin/start-cli.sh <span class="token parameter variable">-h</span> <span class="token variable">\${host}</span> <span class="token parameter variable">-p</span> <span class="token variable">\${rpcPort}</span> <span class="token parameter variable">-u</span> <span class="token variable">\${user}</span> <span class="token parameter variable">-pw</span> <span class="token variable">\${pass}</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;insert into root.demo(timestamp,s1) values(2,11)&quot;</span></span>
<span class="line"><span class="token function">bash</span> ./sbin/start-cli.sh <span class="token parameter variable">-h</span> <span class="token variable">\${host}</span> <span class="token parameter variable">-p</span> <span class="token variable">\${rpcPort}</span> <span class="token parameter variable">-u</span> <span class="token variable">\${user}</span> <span class="token parameter variable">-pw</span> <span class="token variable">\${pass}</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;insert into root.demo(timestamp,s1) values(3,12)&quot;</span></span>
<span class="line"><span class="token function">bash</span> ./sbin/start-cli.sh <span class="token parameter variable">-h</span> <span class="token variable">\${host}</span> <span class="token parameter variable">-p</span> <span class="token variable">\${rpcPort}</span> <span class="token parameter variable">-u</span> <span class="token variable">\${user}</span> <span class="token parameter variable">-pw</span> <span class="token variable">\${pass}</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;select s1 from root.demo&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The results are shown in the figure, which are consistent with the Cli and jdbc operations.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"> Shell <span class="token operator">&gt;</span> <span class="token function">bash</span> ./shell.sh </span>
<span class="line">+-----------------------------+------------+</span>
<span class="line"><span class="token operator">|</span>                         Time<span class="token operator">|</span>root.demo.s1<span class="token operator">|</span></span>
<span class="line">+-----------------------------+------------+</span>
<span class="line"><span class="token operator">|</span><span class="token number">1970</span>-01-01T08:00:00.001+08:00<span class="token operator">|</span>          <span class="token number">10</span><span class="token operator">|</span></span>
<span class="line"><span class="token operator">|</span><span class="token number">1970</span>-01-01T08:00:00.002+08:00<span class="token operator">|</span>          <span class="token number">11</span><span class="token operator">|</span></span>
<span class="line"><span class="token operator">|</span><span class="token number">1970</span>-01-01T08:00:00.003+08:00<span class="token operator">|</span>          <span class="token number">12</span><span class="token operator">|</span></span>
<span class="line">+-----------------------------+------------+</span>
<span class="line">Total line number <span class="token operator">=</span> <span class="token number">3</span></span>
<span class="line">It costs <span class="token number">0</span>.267s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>It should be noted that the use of the -e parameter in shell scripts requires attention to the escaping of special characters.</p>`,49)]))}const l=e(o,[["render",i],["__file","Command-Line-Interface.html.vue"]]),c=JSON.parse('{"path":"/UserGuide/V1.1.x/QuickStart/Command-Line-Interface.html","title":"Command Line Interface(CLI)","lang":"en-US","frontmatter":{"description":"Command Line Interface(CLI) IoTDB provides Cli/shell tools for users to interact with IoTDB server in command lines. This document shows how Cli/shell tool works and the meaning...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/QuickStart/Command-Line-Interface.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.1.x/QuickStart/Command-Line-Interface.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Command Line Interface(CLI)"}],["meta",{"property":"og:description","content":"Command Line Interface(CLI) IoTDB provides Cli/shell tools for users to interact with IoTDB server in command lines. This document shows how Cli/shell tool works and the meaning..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alioss.timecho.com/docs/img/UserGuide/CLI/Command-Line-Interface/login_keycloak.png?raw=true"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Command Line Interface(CLI)\\",\\"image\\":[\\"https://alioss.timecho.com/docs/img/UserGuide/CLI/Command-Line-Interface/login_keycloak.png?raw=true\\",\\"https://alioss.timecho.com/docs/img/UserGuide/CLI/Command-Line-Interface/AdministrationConsole.png?raw=true\\",\\"https://alioss.timecho.com/docs/img/UserGuide/CLI/Command-Line-Interface/add_Realm_1.png?raw=true\\",\\"https://alioss.timecho.com/docs/img/UserGuide/CLI/Command-Line-Interface/add_Realm_2.png?raw=true\\",\\"https://alioss.timecho.com/docs/img/UserGuide/CLI/Command-Line-Interface/client.png?raw=true\\",\\"https://alioss.timecho.com/docs/img/UserGuide/CLI/Command-Line-Interface/user.png?raw=true\\",\\"https://alioss.timecho.com/docs/img/UserGuide/CLI/Command-Line-Interface/pwd.png?raw=true\\",\\"https://alioss.timecho.com/docs/img/UserGuide/CLI/Command-Line-Interface/add_role1.png?raw=true\\",\\"https://alioss.timecho.com/docs/img/UserGuide/CLI/Command-Line-Interface/add_role2.png?raw=true\\",\\"https://alioss.timecho.com/docs/img/UserGuide/CLI/Command-Line-Interface/add_role3.png?raw=true\\",\\"https://alioss.timecho.com/docs/img/UserGuide/CLI/Command-Line-Interface/add_role4.png?raw=true\\",\\"https://alioss.timecho.com/docs/img/UserGuide/CLI/Command-Line-Interface/add_role5.png?raw=true\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Installation","slug":"installation","link":"#installation","children":[]},{"level":2,"title":"Running","slug":"running","link":"#running","children":[{"level":3,"title":"Running Cli","slug":"running-cli","link":"#running-cli","children":[]},{"level":3,"title":"Cli Parameters","slug":"cli-parameters","link":"#cli-parameters","children":[]},{"level":3,"title":"CLI Special Command","slug":"cli-special-command","link":"#cli-special-command","children":[]},{"level":3,"title":"Note on using the CLI with OpenID Connect Auth enabled on Server side","slug":"note-on-using-the-cli-with-openid-connect-auth-enabled-on-server-side","link":"#note-on-using-the-cli-with-openid-connect-auth-enabled-on-server-side","children":[]},{"level":3,"title":"Batch Operation of Cli","slug":"batch-operation-of-cli","link":"#batch-operation-of-cli","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":6.33,"words":1898},"filePathRelative":"UserGuide/V1.1.x/QuickStart/Command-Line-Interface.md","localizedDate":"July 10, 2023","autoDesc":true}');export{l as comp,c as data};
