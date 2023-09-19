import{_ as o,r as i,o as r,c as l,a as c,d as e,e as a,b as s,f as t}from"./app-d415a090.js";const d={},p=e("h2",{id:"way-to-get-iotdb-binary-files",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#way-to-get-iotdb-binary-files","aria-hidden":"true"},"#"),a(" Way to get IoTDB binary files")],-1),u=e("p",null,"IoTDB provides you three installation methods, you can refer to the following suggestions, choose one of them:",-1),h=e("li",null,"Installation from source code. If you need to modify the code yourself, you can use this method.",-1),b=e("li",null,"Installation from binary files. Download the binary files from the official website. This is the recommended method, in which you will get a binary released package which is out-of-the-box.",-1),m={href:"https://github.com/apache/iotdb/blob/master/docker/Dockerfile",target:"_blank",rel:"noopener noreferrer"},g=e("h3",{id:"prerequisites",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#prerequisites","aria-hidden":"true"},"#"),a(" Prerequisites")],-1),v=e("p",null,"To use IoTDB, you need to have:",-1),k=e("ol",null,[e("li",null,"Java >= 1.8 (Please make sure the environment path has been set)"),e("li",null,"Maven >= 3.6 (Optional)"),e("li",null,'Set the max open files num as 65535 to avoid "too many open files" problem.')],-1),f={href:"http://mvnw.sh",target:"_blank",rel:"noopener noreferrer"},y=e("h3",{id:"installation-from-binary-files",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installation-from-binary-files","aria-hidden":"true"},"#"),a(" Installation from binary files")],-1),_=e("br",null,null,-1),w={href:"https://iotdb.apache.org/Download/",target:"_blank",rel:"noopener noreferrer"},I=e("h3",{id:"installation-from-source-code",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installation-from-source-code","aria-hidden":"true"},"#"),a(" Installation from source code")],-1),x={href:"https://iotdb.apache.org/Download/",target:"_blank",rel:"noopener noreferrer"},D={href:"https://github.com/apache/iotdb/tree/master",target:"_blank",rel:"noopener noreferrer"},T=e("br",null,null,-1),N=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git clone https://github.com/apache/iotdb.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>After that, go to the root path of IoTDB. If you want to build the version that we have released, you need to create and check out a new branch by command <code>git checkout -b my_{project.version} v{project.version}</code>. E.g., you want to build the version <code>0.12.4</code>, you can execute this command to make it:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">git</span> checkout <span class="token parameter variable">-b</span> my_0.12.4 v0.12.4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Then you can execute this command to build the version that you want:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt; mvn clean package -DskipTests
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Then the binary version (including both server and client) can be found at <strong>distribution/target/apache-iotdb-{project.version}-bin.zip</strong></p><blockquote><p>NOTE: Directories &quot;thrift/target/generated-sources/thrift&quot; and &quot;antlr/target/generated-sources/antlr4&quot; need to be added to sources roots to avoid compilation errors in IDE.</p></blockquote><p>If you would like to build the IoTDB server, you can run the following command under the root path of iotdb:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt; mvn clean package -pl server -am -DskipTests
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>After build, the IoTDB server will be at the folder &quot;server/target/iotdb-server-{project.version}&quot;.</p><p>If you would like to build a module, you can execute command <code>mvn clean package -pl {module.name} -am -DskipTests</code> under the root path of IoTDB.<br> If you need the jar with dependencies, you can add parameter <code>-P get-jar-with-dependencies</code> after the command. E.g., If you need the jar of jdbc with dependencies, you can execute this command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> mvn clean package <span class="token parameter variable">-pl</span> jdbc <span class="token parameter variable">-am</span> <span class="token parameter variable">-DskipTests</span> <span class="token parameter variable">-P</span> get-jar-with-dependencies
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Then you can find it under the path <code>{module.name}/target</code>.</p><h3 id="installation-by-docker-dockerfile" tabindex="-1"><a class="header-anchor" href="#installation-by-docker-dockerfile" aria-hidden="true">#</a> Installation by Docker (Dockerfile)</h3>`,14),S={href:"https://hub.docker.com/r/apache/iotdb",target:"_blank",rel:"noopener noreferrer"},A=t(`<ol><li><strong>Get IoTDB docker image</strong><ul><li><strong>Recommended:</strong> Using <code>docker pull apache/iotdb:latest</code> can get the latest docker image.</li><li>Users can also build a docker image themselves. Now a Dockerfile has been written at docker/src/main/Dockerfile. <ul><li>Way 1: <code>$ docker build -t iotdb:base git://github.com/apache/iotdb#master:docker</code></li><li>Way 2:</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> $ <span class="token function">git</span> clone https://github.com/apache/iotdb
 $ <span class="token builtin class-name">cd</span> iotdb
 $ <span class="token builtin class-name">cd</span> <span class="token function">docker</span>
 $ <span class="token function">docker</span> build <span class="token parameter variable">-t</span> iotdb:base <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ol><p>Once the docker image has been built locally (the tag is iotdb:base in this example), you are almost done!</p><ol start="2"><li><strong>Create docker volume for data files and logs:</strong></li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> volume create mydata
$ <span class="token function">docker</span> volume create mylogs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><strong>Run a docker container:</strong></li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">6667</span>:6667 <span class="token parameter variable">-v</span> mydata:/iotdb/data <span class="token parameter variable">-v</span> mylogs:/iotdb/logs <span class="token parameter variable">-d</span> iotdb:base /iotdb/bin/start-server.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If success, you can run <code>docker ps</code>, and get something like the following:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                               NAMES
2a68b6944cb5        iotdb:base          &quot;/iotdb/bin/start-se…&quot;   4 minutes ago       Up 5 minutes        0.0.0.0:6667-&gt;6667/tcp              laughing_meitner
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>You can use the above command to get the container ID:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> container <span class="token function">ls</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>suppose the ID is &lt;C_ID&gt;.</p><p>And get the docker IP by the following, suppose the IP is &lt;C_IP&gt;.:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> inspect <span class="token parameter variable">--format</span><span class="token operator">=</span><span class="token string">&#39;{{.NetworkSettings.IPAddress}}&#39;</span> <span class="token operator">&lt;</span>C_ID<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Now IoTDB server has started succesfully.</p><ol start="4"><li>If you just want to have a try by using iotdb-cli, you can:</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> <span class="token operator">&lt;</span>C_ID<span class="token operator">&gt;</span> /bin/bash
$ <span class="token punctuation">(</span>now you have enter the container<span class="token punctuation">)</span>: /iotdb/sbin/start-cli.sh <span class="token parameter variable">-h</span> localhost <span class="token parameter variable">-p</span> <span class="token number">6667</span> <span class="token parameter variable">-u</span> root <span class="token parameter variable">-pw</span> root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Or, if you have a iotdb-cli locally, execute the following command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ /%IOTDB_HOME%/sbin/start-cli.sh <span class="token parameter variable">-h</span> localhost <span class="token parameter variable">-p</span> <span class="token number">6667</span> <span class="token parameter variable">-u</span> root <span class="token parameter variable">-pw</span> root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5"><li>If you want to write codes to insert data and query data, please add the following dependence:</li></ol><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.iotdb<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>iotdb-jdbc<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>0.13.0-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),B={href:"https://github.com/apache/iotdb/tree/master/example/jdbc/src/main/java/org/apache/iotdb",target:"_blank",rel:"noopener noreferrer"};function E(j,q){const n=i("ExternalLinkIcon");return r(),l("div",null,[c(`

    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at
    
        http://www.apache.org/licenses/LICENSE-2.0
    
    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.

`),p,u,e("ul",null,[h,b,e("li",null,[a("Using Docker：The path to the dockerfile is "),e("a",m,[a("https://github.com/apache/iotdb/blob/master/docker/Dockerfile"),s(n)])])]),g,v,k,e("blockquote",null,[e("p",null,[a("Note: If you don't have maven installed, you should replace 'mvn' in the following commands with '"),e("a",f,[a("mvnw.sh"),s(n)]),a("' or 'mvnw.cmd'.")]),y]),e("p",null,[a("You can download the binary file from:"),_,e("a",w,[a("Download page"),s(n)])]),I,e("p",null,[a("You can get the released source code from "),e("a",x,[a("https://iotdb.apache.org/Download/"),s(n)]),a(", or from the git repository "),e("a",D,[a("https://github.com/apache/iotdb/tree/master"),s(n)]),T,a(" You can download the source code from:")]),N,e("p",null,[a("Apache IoTDB' Docker image is released on "),e("a",S,[a("https://hub.docker.com/r/apache/iotdb"),s(n)]),a(",")]),A,e("p",null,[a("Some examples about how to use IoTDB with IoTDB-JDBC can be found at: "),e("a",B,[a("https://github.com/apache/iotdb/tree/master/example/jdbc/src/main/java/org/apache/iotdb"),s(n)])])])}const C=o(d,[["render",E],["__file","WayToGetIoTDB.html.vue"]]);export{C as default};
