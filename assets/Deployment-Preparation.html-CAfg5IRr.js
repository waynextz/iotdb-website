import{_ as e,o as t,c as o,e as n}from"./app-DxurNv9d.js";const a={},r=n('<h1 id="环境要求" tabindex="-1"><a class="header-anchor" href="#环境要求"><span>环境要求</span></a></h1><p>要使用IoTDB，你需要具备以下条件：</p><ul><li>Java &gt;= 1.8</li></ul><blockquote><p>1.8, 11到17都是经过验证的。请确保环境路径已被相应设置。</p></blockquote><ul><li>Maven &gt;= 3.6</li></ul><blockquote><p>如果你想从源代码编译和安装IoTDB）。</p></blockquote><ul><li>设置最大打开文件数为65535，以避免出现 &quot;太多的打开文件 &quot;的错误。</li><li>(可选)将somaxconn设置为65535，以避免系统在高负载时出现 &quot;连接重置 &quot;错误。</li></ul><blockquote><p><strong># Linux</strong> <br><code>sudo sysctl -w net.core.somaxconn=65535</code> <br><strong># FreeBSD 或 Darwin</strong> <br><code>sudo sysctl -w kern.ipc.somaxconn=65535</code></p></blockquote>',8),i=[r];function c(p,l){return t(),o("div",null,i)}const m=e(a,[["render",c],["__file","Deployment-Preparation.html.vue"]]),d=JSON.parse('{"path":"/zh/UserGuide/V1.2.x/Deployment-and-Maintenance/Deployment-Preparation.html","title":"环境要求","lang":"zh-CN","frontmatter":{"description":"环境要求 要使用IoTDB，你需要具备以下条件： Java >= 1.8 1.8, 11到17都是经过验证的。请确保环境路径已被相应设置。 Maven >= 3.6 如果你想从源代码编译和安装IoTDB）。 设置最大打开文件数为65535，以避免出现 \\"太多的打开文件 \\"的错误。 (可选)将somaxconn设置为65535，以避免系统在高负载时出现 ...","head":[["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.2.x/Deployment-and-Maintenance/Deployment-Preparation.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"环境要求"}],["meta",{"property":"og:description","content":"环境要求 要使用IoTDB，你需要具备以下条件： Java >= 1.8 1.8, 11到17都是经过验证的。请确保环境路径已被相应设置。 Maven >= 3.6 如果你想从源代码编译和安装IoTDB）。 设置最大打开文件数为65535，以避免出现 \\"太多的打开文件 \\"的错误。 (可选)将somaxconn设置为65535，以避免系统在高负载时出现 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-31T05:23:10.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-31T05:23:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"环境要求\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-31T05:23:10.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1688958677000,"updatedTime":1706678590000,"contributors":[{"name":"wanghui42","email":"105700158+wanghui42@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":0.81,"words":242},"filePathRelative":"zh/UserGuide/V1.2.x/Deployment-and-Maintenance/Deployment-Preparation.md","localizedDate":"2023年7月10日","autoDesc":true}');export{m as comp,d as data};
