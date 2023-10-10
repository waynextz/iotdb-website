import{_ as o,r,o as s,c as d,a as h,d as e,e as t,b as n,f as i}from"./app-2905306e.js";const c={},p=i('<h1 id="how-to-contribute-code" tabindex="-1"><a class="header-anchor" href="#how-to-contribute-code" aria-hidden="true">#</a> How to Contribute Code</h1><h2 id="process" tabindex="-1"><a class="header-anchor" href="#process" aria-hidden="true">#</a> Process</h2><p>Tasks are managed as issues in JIRA.<br> The full lifecycle of an Issue: Create an issue -&gt; assign an issue -&gt; submit a pr(pull request) -&gt; review a pr -&gt; squash merge a pr -&gt; close an issue.</p><h2 id="contributing-conventions" tabindex="-1"><a class="header-anchor" href="#contributing-conventions" aria-hidden="true">#</a> Contributing Conventions</h2><h3 id="creating-an-issue" tabindex="-1"><a class="header-anchor" href="#creating-an-issue" aria-hidden="true">#</a> Creating an Issue</h3>',5),l={href:"https://issues.apache.org/JIRA/projects/IOTDB/issues",target:"_blank",rel:"noopener noreferrer"},u=i('<ol><li><p>Naming: Try to make it clear and easy to understand. Examples include supporting a new aggregate query function (avg) and optimizing the performance of querying raw data . The name of the issue will later be used as the release note.</p></li><li><p>Description: Issue of new features and improvements should be clear. Bug reports should cover the environment, load, phenomenon (abnormal log), the affected version(s) , etc. And it&#39;s best to include ways to reproduce the bug.</p></li></ol><h3 id="assigning-an-issue" tabindex="-1"><a class="header-anchor" href="#assigning-an-issue" aria-hidden="true">#</a> Assigning an Issue</h3><p>When assigning an issue in JIRA for yourself, it&#39;s recommended to add the comment, &quot;I&#39;m doing this&quot;, otherwise there might be duplication of effort.<br> Note: If you can&#39;t assign an issue, it is because your account doesn&#39;t have the necessary permission.<br> To address this, please send an email to the <a href="mailto:dev@iotdb.apache.org">dev@iotdb.apache.org</a> mailing list with the title of [application] apply for permission to assign issues to XXX (your JIRA username).。</p><h3 id="submitting-a-pr" tabindex="-1"><a class="header-anchor" href="#submitting-a-pr" aria-hidden="true">#</a> Submitting a PR</h3><h4 id="what-you-need-to-submit" tabindex="-1"><a class="header-anchor" href="#what-you-need-to-submit" aria-hidden="true">#</a> What you need to submit</h4><p>Issue type : New Feature</p><p>1.Submit the user manual and the pr for code changes.</p><p>A user manual is mainly for helping users understand how the functions work and how to use them. It is recommended to contain scenario and background, configuration, interface description and examples. The user manual of the official website is placed in the src/UserGuide folder of apache/iotdb-docs repository. To update the user manual directory, including adding, deleting documents and renaming documents, you need to make corresponding changes in the file(path:src/.vuepress/sidebar) in the main branch.</p><p>2.Submit UT (unit test) or IT (integration test).</p><p>When adding unit tests or integration tests , try to cover as many cases as possible. xxTest(path: iotdb/server/src/test/java/org/apache/iotdb/db/query/aggregation/) and xxIT(path: iotdb/integration/src/test/java/org/apache/iotdb/db/integration/) can be used as reference.</p><p>Issue type : Improvement</p><p>1.Submit the code and UT(if importing new scenario)<br> 2.etter to submit test results, including quantified improvements and possible negative effects.</p><p>Issue type : Bug</p><p>Submit UT or IT that can reproduce the bug.</p><h4 id="coding-reminders" tabindex="-1"><a class="header-anchor" href="#coding-reminders" aria-hidden="true">#</a> Coding Reminders</h4><p>Branch management</p><p>The IoTDB version naming method is 0.{major version}.{minor version}. For example, for version 0.12.4, 12 is the major version and 4 is the minor version.</p><p>As the current development branch, the master branch corresponds to the next major release version. When each major version is released for the first time, a separate branch will be created for archiving. For example, codes of the 0.12.x versions are placed under the rel/0.12 branch.</p><p>If a bug of a released version is found and fixed, the bugfix pr should be submitted to all branches that are newer than the specific branch. For example, a pr which is about a version 0.11.x bugfix should be submitted to rel/0.11 branch, rel/0.12 branch and master branch.</p><p>Code formatting<br> It is required to use &quot;mvn spotless:apply&quot; to format the code before committing, otherwise, the ci code format check will fail.</p><p>Notes</p><p>1.The default values need to be consistent between iotdb-datanode.properties file and IoTDBConfig file.</p>',22),m={href:"http://2.To",target:"_blank",rel:"noopener noreferrer"},g=e("p",null,"a.Configuration file: iodtb-core/datanode/src/assembly/resources/conf/iotdb-datanode.properties",-1),f=e("p",null,"b. Codes: IoTDBDescriptor, IoTDBConfig",-1),b=e("p",null,"c. Documentation: apache/iotdb-docs/src/UserGuide/{version}/Reference/DataNode-Config-Manual.md",-1),w={href:"http://3.To",target:"_blank",rel:"noopener noreferrer"},y=i('<h4 id="pr-naming" tabindex="-1"><a class="header-anchor" href="#pr-naming" aria-hidden="true">#</a> PR Naming</h4><p>Format: [To branch] [Jira number] PR name</p><p>Example: [To rel/0.12] [IoTDB-1907] implement customized sync process: sender</p><p>To branch</p><p>It is required when submitting pr to a non-master branch (such as rel/0.13, in which case the pr name should contain [To rel/0.13]) and not required when submitting to a master branch.</p><p>Jira number</p><p>The name should start with a JIRA number so that the PR can be automatically linked to the corresponding issue. Example includes [IOTDB-1907] implement customized sync process: sender.<br> This auto-linking won&#39;t happen if the PR is created without any JIRA number or with one that is improper, in which case you need to correct the PR name and manually paste the PR link to the issue page by adding a comment or attaching a link.</p><h4 id="pr-description" tabindex="-1"><a class="header-anchor" href="#pr-description" aria-hidden="true">#</a> PR Description</h4><p>Usually, the PR name can&#39;t reflect all changes, so it is better to add a description about what has been changed and give explanations for any difficult-to-understand part.</p><p>The description of a bug-fixing pr needs to cover the cause of the bug and how to fix it, as well as the added UT/IT test cases and associated negative effects.</p><h4 id="after-submitting-a-pr" tabindex="-1"><a class="header-anchor" href="#after-submitting-a-pr" aria-hidden="true">#</a> After Submitting a PR</h4><p>Send to the <a href="mailto:dev@iotdb.apache.org">dev@iotdb.apache.org</a> mailing list an email that describes the PR in detail, then carefully read and respond to all review comments, and make changes after reaching a consensus.</p><h3 id="reviewing-a-pr" tabindex="-1"><a class="header-anchor" href="#reviewing-a-pr" aria-hidden="true">#</a> Reviewing a PR</h3><p>Checklist</p><ol><li>Is the PR named correctly? and whether any new feature and bug fix have an issue number.</li><li>Is PR description sufficiently clear?</li><li>Are UT (unit test) or performance test reports submitted?</li><li>Is the user manual of the new feature submitted?</li><li>It should not contain code modifications for other issues. Irrelevant modifications should be placed in other PR.</li></ol><p>How to review a pr</p><ol><li><p>Click Files changed<br><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/zh/development/howtocontributecode/01.png"></p></li><li><p>Add review comments. First, move your mouse to the left. And then there will be a plus sign, click the plus sign. Second, write comments. Third, click Start a Review. At this step, all review comments will be temporarily saved, which others can not see.<img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/zh/development/howtocontributecode/02.png"></p></li><li><p>Submit review. After all the comments are added, click Review Changes and select your opinion. Select &quot;Approve&quot; for those that can be combined. Select &quot;Request Changes&quot; or &quot;Comment&quot; for those that need to be modified. Select &quot;Comment&quot; for those that are not sure. Finally, submit a review and only the person submitting the PR can see the review.<br><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/zh/development/howtocontributecode/03.png"></p></li></ol><h3 id="merging-a-pr" tabindex="-1"><a class="header-anchor" href="#merging-a-pr" aria-hidden="true">#</a> Merging a PR</h3><p>Make sure that all review comments are responded.</p><p>Obtain approval from at least 1 committer.</p><p>Choose squash merge. You can choose rebase only when the author has only one commit record with a clear commit log.</p><p>Close the corresponding issue in JIRA, and mark the repaired or completed version. Note that solving or closing an issue requires adding a pr or description to the issue, so that changes can be tracked via the issue.</p><h2 id="how-to-prepare-user-manual-and-design-document" tabindex="-1"><a class="header-anchor" href="#how-to-prepare-user-manual-and-design-document" aria-hidden="true">#</a> How to Prepare User Manual and Design Document</h2><p>User manual and other documentation on the official website are maintained in the apache/iotdb-docs repository.</p><p>The index items of each page of the official website are maintained in the file &quot;src/.vuepress/sidebar&quot; of the main branch, while the specific content of the user manual is maintained in the directory of the corresponding version (for example, user manual for 1.1 is in src/UserGuide/V1.1.x).</p><p>User manual</p><p>It is mainly for helping users understand how the functions work and how to use them.<br> It is recommended that the user manual contains scenario and background, configuration, interface description and examples.。</p><p>Design document</p><p>It is mainly for helping developers understand how to implement a function, including the organization of code modules and algorithms.<br> It is recommended that the design document contains background, design goals, idea, main module, interface design.</p><h3 id="modifying-user-manual" tabindex="-1"><a class="header-anchor" href="#modifying-user-manual" aria-hidden="true">#</a> Modifying User Manual</h3><p>Other than modifying different files, the process is the same as contributing codes.</p><p>The English user manual is placed in the src/UserGuide folder.</p><p>To update the user manual directory, including adding, deleting documents and renaming documents, you need to make corresponding changes in the file(path:src/.vuepress/sidebar) in the main branch.</p><h3 id="modifying-the-top-navigation-bar-of-the-official-website" tabindex="-1"><a class="header-anchor" href="#modifying-the-top-navigation-bar-of-the-official-website" aria-hidden="true">#</a> Modifying the Top Navigation Bar of the Official Website</h3><p>Search for nav in the file(path:src/.vuepress/navbar/en.ts), and make corresponding modifications by referencing the existing code, then submit a PR and wait for merging. Documents to be added can be placed in the src folder.</p>',35);function v(x,I){const a=r("ExternalLinkIcon");return s(),d("div",null,[h(`

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

`),p,e("p",null,[t("There are a few things to keep in mind when creating an issue in "),e("a",l,[t(" JIRA "),n(a)])]),u,e("p",null,[e("a",m,[t("2.To"),n(a)]),t(" modify the configuration parameters, the following files need to be modified")]),g,f,b,e("p",null,[e("a",w,[t("3.To"),n(a)]),t(" modify configuration parameters in IT and UT, you need to modify them in the method annotated by @before and reset them in the method annotated by @after. In this way, you can avoid impact on other tests. The parameters of the compaction module are placed in the CompactionConfigRestorer file.")]),y])}const k=o(c,[["render",v],["__file","HowtoContributeCode.html.vue"]]);export{k as default};
