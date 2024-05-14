import{_ as a,r as s,o as l,c as r,b as e,d as n,a as t,e as d}from"./app-0jI7BR7G.js";const o={},c=e("h1",{id:"how-to-vote-for-a-release",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#how-to-vote-for-a-release"},[e("span",null,"How to vote for a release")])],-1),v=e("p",null,"For non-Chinese users, please read",-1),u={href:"https://cwiki.apache.org/confluence/display/IOTDB/Validating+a+staged+Release",target:"_blank",rel:"noopener noreferrer"},m=e("h2",{id:"download-everything-under-voting-version-rc",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#download-everything-under-voting-version-rc"},[e("span",null,"Download everything under voting version / rc")])],-1),h={href:"https://dist.apache.org/repos/dist/dev/iotdb/",target:"_blank",rel:"noopener noreferrer"},p=e("h2",{id:"import-the-public-key-of-the-release-manager",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#import-the-public-key-of-the-release-manager"},[e("span",null,"Import the public key of the release manager")])],-1),b={href:"https://dist.apache.org/repos/dist/dev/iotdb/KEYS",target:"_blank",rel:"noopener noreferrer"},g=d(`<p>At the bottom is the public key of the Release Manager (RM)</p><p>Install gpg2</p><h3 id="the-first-method" tabindex="-1"><a class="header-anchor" href="#the-first-method"><span>the first method</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>The beginning of the public key is this
pub   rsa4096 2019-10-15 [SC]
      10F3B3F8A1201B79AA43F2E00FC7F131CAA00430
      
Or this

pub   rsa4096/28662AC6 2019-12-23 [SC]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Download the public key</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>gpg2 --receive-keys 10F3B3F8A1201B79AA43F2E00FC7F131CAA00430 (or 28662AC6)

or (Designation keyserver) 
gpg2 --keyserver p80.pool.sks-keyservers.net --recv-keys 10F3B3F8A1201B79AA43F2E00FC7F131CAA00430 (或 28662AC6)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="the-second-method" tabindex="-1"><a class="header-anchor" href="#the-second-method"><span>The second method</span></a></h3><p>Copy the following paragraph into a text file and name it <code>key.asc</code></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>-----BEGIN PGP PUBLIC KEY BLOCK-----
Version: GnuPG v2
...
-----END PGP PUBLIC KEY BLOCK-----
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Import RM&#39;s public key to your computer</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>gpg2 --import key.asc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="verify-the-source-distribution" tabindex="-1"><a class="header-anchor" href="#verify-the-source-distribution"><span>Verify the source distribution</span></a></h2><ul><li><p>Verify that there are NOTICE, LICENSE, and the content is correct.</p></li><li><p>Verify README, RELEASE_NOTES</p></li><li><p>Validation header</p></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>mvn -B apache-rat:check
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Verify signatures and hashes</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>gpg2 --verify apache-iotdb-0.12.0-source-release.zip.asc apache-iotdb-0.12.0-source-release.zip

appear Good Singnature 

shasum -a512 apache-iotdb-0.12.0-source-release.zip

Compared with the corresponding .sha512, the same is fine.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Verify compilation</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>mvnw install

Should end up all SUCCESS
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="verifying-the-binary-release" tabindex="-1"><a class="header-anchor" href="#verifying-the-binary-release"><span>Verifying the binary release</span></a></h2><ul><li><p>Verify that there are NOTICE, LICENSE, and the content is correct.</p></li><li><p>Verify README, RELEASE_NOTES</p></li><li><p>Verify signatures and hashes</p></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>gpg2 --verify apache-iotdb-0.12.0-bin.zip.asc apache-iotdb-0.12.0-bin.zip

appear Good Singnature 

shasum -a512 apache-iotdb-0.12.0-bin.zip

Compared with the corresponding .sha512, the same is fine.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Verify that it starts and the sample statements execute correctly</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>nohup ./sbin/start-server.sh &gt;/dev/null 2&gt;&amp;1 &amp;

./sbin/start-cli.sh

CREATE DATABASE root.turbine;
CREATE TIMESERIES root.turbine.d1.s0 WITH DATATYPE=DOUBLE, ENCODING=GORILLA;
insert into root.turbine.d1(timestamp,s0) values(1,1);
insert into root.turbine.d1(timestamp,s0) values(2,2);
insert into root.turbine.d1(timestamp,s0) values(3,3);
select * from root;

Prints the following:
+-----------------------------------+------------------+
|                               Time|root.turbine.d1.s0|
+-----------------------------------+------------------+
|      1970-01-01T08:00:00.001+08:00|               1.0|
|      1970-01-01T08:00:00.002+08:00|               2.0|
|      1970-01-01T08:00:00.003+08:00|               3.0|
+-----------------------------------+------------------+

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sample-mail" tabindex="-1"><a class="header-anchor" href="#sample-mail"><span>Sample mail</span></a></h2><p>Email can be sent after verification</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Hi,

+1 (PMC could binding)

The source release:
LICENSE and NOTICE [ok]
signatures and hashes [ok]
All files have ASF header [ok]
could compile from source: ./mvnw clean install [ok]

The binary distribution:
LICENSE and NOTICE [ok]
signatures and hashes [ok]
Could run with the following statements [ok]

CREATE DATABASE root.turbine;
CREATE TIMESERIES root.turbine.d1.s0 WITH DATATYPE=DOUBLE, ENCODING=GORILLA;
insert into root.turbine.d1(timestamp,s0) values(1,1);
insert into root.turbine.d1(timestamp,s0) values(2,2);
insert into root.turbine.d1(timestamp,s0) values(3,3);
select * from root;

Thanks,
xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="small-tools" tabindex="-1"><a class="header-anchor" href="#small-tools"><span>small tools</span></a></h2><ul><li>Print out lines containing certain characters (just look at the top output, you don&#39;t need to look at the bottom file)</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>find . -type f -exec grep -i &quot;copyright&quot; {} \\; -print | sort -u
find **/src -type f -exec grep -i &quot;copyright&quot; {} \\; -print | sort -u
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,29);function f(x,y){const i=s("ExternalLinkIcon");return l(),r("div",null,[c,v,e("p",null,[e("a",u,[n("https://cwiki.apache.org/confluence/display/IOTDB/Validating+a+staged+Release"),t(i)])]),m,e("p",null,[e("a",h,[n("https://dist.apache.org/repos/dist/dev/iotdb/"),t(i)])]),p,e("p",null,[e("a",b,[n("https://dist.apache.org/repos/dist/dev/iotdb/KEYS"),t(i)])]),g])}const k=a(o,[["render",f],["__file","VoteRelease.html.vue"]]),A=JSON.parse('{"path":"/Development/VoteRelease.html","title":"How to vote for a release","lang":"en-US","frontmatter":{"description":"How to vote for a release For non-Chinese users, please read https://cwiki.apache.org/confluence/display/IOTDB/Validating+a+staged+Release Download everything under voting versi...","head":[["meta",{"property":"og:url","content":"https://iotdb.apache.org/Development/VoteRelease.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"How to vote for a release"}],["meta",{"property":"og:description","content":"How to vote for a release For non-Chinese users, please read https://cwiki.apache.org/confluence/display/IOTDB/Validating+a+staged+Release Download everything under voting versi..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to vote for a release\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Download everything under voting version / rc","slug":"download-everything-under-voting-version-rc","link":"#download-everything-under-voting-version-rc","children":[]},{"level":2,"title":"Import the public key of the release manager","slug":"import-the-public-key-of-the-release-manager","link":"#import-the-public-key-of-the-release-manager","children":[{"level":3,"title":"the first method","slug":"the-first-method","link":"#the-first-method","children":[]},{"level":3,"title":"The second method","slug":"the-second-method","link":"#the-second-method","children":[]}]},{"level":2,"title":"Verify the source distribution","slug":"verify-the-source-distribution","link":"#verify-the-source-distribution","children":[]},{"level":2,"title":"Verifying the binary release","slug":"verifying-the-binary-release","link":"#verifying-the-binary-release","children":[]},{"level":2,"title":"Sample mail","slug":"sample-mail","link":"#sample-mail","children":[]},{"level":2,"title":"small tools","slug":"small-tools","link":"#small-tools","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.99,"words":598},"filePathRelative":"Development/VoteRelease.md","localizedDate":"July 10, 2023","autoDesc":true}');export{k as comp,A as data};
