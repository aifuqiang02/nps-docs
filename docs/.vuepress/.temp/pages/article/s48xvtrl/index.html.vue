<template><div><p>只需几个简单步骤，即可在几分钟内完成配置，轻松实现本地服务对外暴露！</p>
<h2 id="下载安装" tabindex="-1"><a class="header-anchor" href="#下载安装"><span>下载安装</span></a></h2>
<p>我们提供图形化客户端，界面简洁直观，操作便捷，支持 Windows 系统一键安装。</p>
<p>👉 <a href="https://nps.tx07.cn/updates/install.exe" target="_blank" rel="noopener noreferrer">Windows 版本下载</a></p>
<p>安装完成后，打开客户端，使用微信扫码二维码登录，即可开始创建映射映射。</p>
<hr>
<h2 id="网站映射-https" tabindex="-1"><a class="header-anchor" href="#网站映射-https"><span>网站映射（HTTPS）</span></a></h2>
<p>将本地 Web 服务（如博客、开发环境、测试站点）映射到公网非常简单：</p>
<ol>
<li>在客户端中选择“新建映射”；</li>
<li>设置映射名称，如：项目名称 + xxx；</li>
<li>类型选择 <code v-pre>域名解析</code>；</li>
<li>设置本地Ip:端口（例如：127.0.0.1:8080）；</li>
<li>点击确定即可。即可通过公网访问本地网站。</li>
</ol>
<blockquote>
<p>💡 外网访问地址，将自动生成</p>
</blockquote>
<hr>
<h2 id="mysql-映射" tabindex="-1"><a class="header-anchor" href="#mysql-映射"><span>MySQL 映射</span></a></h2>
<p>将本地数据库开放给外部应用连接，操作步骤如下：</p>
<ol>
<li>创建新映射，类型选择 <code v-pre>TCP</code>；</li>
<li>填写本地 IP 和端口（如：127.0.0.1:3306）；</li>
<li>平台会分配一个公网地址和端口；</li>
<li>外部应用通过该公网地址进行数据库连接。</li>
</ol>
<blockquote>
<p>⚠️ 请确保做好访问控制，避免未授权访问。</p>
</blockquote>
<hr>
<h2 id="windows-远程访问映射" tabindex="-1"><a class="header-anchor" href="#windows-远程访问映射"><span>Windows 远程访问映射</span></a></h2>
<p>想要远程桌面连接家里的电脑？只需几步：</p>
<ol>
<li>创建映射类型为 <code v-pre>TCP</code>；</li>
<li>目标地址填写 <code v-pre>127.0.0.1:3389</code>（默认 RDP 端口）；</li>
<li>获取公网地址和端口；</li>
<li>使用远程桌面工具输入公网地址和端口即可连接。</li>
</ol>
<p>常见无法连接的解决方法：</p>
<h3 id="_1-检查-windows-远程桌面设置" tabindex="-1"><a class="header-anchor" href="#_1-检查-windows-远程桌面设置"><span>1. 检查 Windows 远程桌面设置</span></a></h3>
<ul>
<li><strong>启用远程桌面</strong>：右键&quot;此电脑&quot; → 属性 → 高级系统设置 → 远程 → 勾选&quot;启用远程桌面&quot;</li>
<li><strong>用户权限</strong>：确保用户账户有远程登录权限，建议设置密码</li>
<li><strong>网络级别身份验证</strong>：可尝试取消勾选&quot;仅允许运行使用网络级别身份验证的远程桌面的计算机连接&quot;</li>
</ul>
<h3 id="_2-防火墙配置" tabindex="-1"><a class="header-anchor" href="#_2-防火墙配置"><span>2. 防火墙配置</span></a></h3>
<ul>
<li><strong>Windows 防火墙</strong>：确保允许&quot;远程桌面&quot;通过防火墙</li>
<li><strong>第三方防火墙</strong>：检查是否阻止了 3389 端口</li>
<li><strong>路由器防火墙</strong>：确认路由器未阻止相关端口</li>
</ul>
<h3 id="_3-网络连接问题" tabindex="-1"><a class="header-anchor" href="#_3-网络连接问题"><span>3. 网络连接问题</span></a></h3>
<ul>
<li><strong>端口监听检查</strong>：使用命令 <code v-pre>netstat -an | findstr :3389</code> 检查本地 3389 端口是否有远程桌面服务监听</li>
<li><strong>本地测试</strong>：先在局域网内测试 <code v-pre>127.0.0.1:3389</code> 是否可连接</li>
<li><strong>映射状态</strong>：确认 NPS 映射状态为&quot;在线&quot;</li>
<li><strong>端口冲突</strong>：检查 3389 端口是否被其他程序占用</li>
</ul>
<h3 id="_4-系统服务检查" tabindex="-1"><a class="header-anchor" href="#_4-系统服务检查"><span>4. 系统服务检查</span></a></h3>
<ul>
<li><strong>远程桌面服务</strong>：确保以下服务正在运行：
<ul>
<li>Remote Desktop Services (TermService)</li>
<li>Remote Desktop Configuration (SessionEnv)</li>
</ul>
</li>
<li><strong>服务启动</strong>：Win+R → <code v-pre>services.msc</code> → 找到相关服务并启动</li>
</ul>
<h3 id="_5-常见错误解决" tabindex="-1"><a class="header-anchor" href="#_5-常见错误解决"><span>5. 常见错误解决</span></a></h3>
<ul>
<li><strong>&quot;计算机无法连接到远程计算机&quot;</strong>：检查映射配置和网络连通性</li>
<li><strong>&quot;身份验证错误&quot;</strong>：尝试使用本地账户而非 Microsoft 账户</li>
<li><strong>&quot;连接被拒绝&quot;</strong>：确认目标计算机的远程桌面服务已启动</li>
<li><strong>&quot;超时&quot;</strong>：检查网络延迟，可能需要调整连接超时设置</li>
</ul>
<hr>
<h2 id="充值" tabindex="-1"><a class="header-anchor" href="#充值"><span>充值</span></a></h2>
<p>我们的服务采用 <strong>按量计费</strong> 模式，每 GB 流量仅需 <strong>0.8 元</strong>，无任何隐藏费用。</p>
<p>充值后即可开启无限穿透之旅，适用于任意数量的映射与带宽！</p>
</div></template>


