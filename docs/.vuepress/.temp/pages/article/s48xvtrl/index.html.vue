<template><div><p>让远程访问变得前所未有的简单与高效。</p>
<p>只需几个简单步骤，即可在几分钟内完成配置，轻松实现本地服务对外暴露！</p>
<h2 id="下载安装" tabindex="-1"><a class="header-anchor" href="#下载安装"><span>下载安装</span></a></h2>
<p>我们提供图形化客户端，界面简洁直观，操作便捷，支持 Windows 系统一键安装。</p>
<p>👉 <a href="http://nps.tx07.cn/updates/install.exe" target="_blank" rel="noopener noreferrer">Windows 版本下载</a></p>
<p>安装完成后，打开客户端并登录您的账号，即可开始创建映射隧道。</p>
<hr>
<h2 id="注册" tabindex="-1"><a class="header-anchor" href="#注册"><span>注册</span></a></h2>
<p>如您尚未拥有账号，请先在登录注册界面创建一个账户</p>
<p>注册后，您可以获得专属的穿透服务空间，用于管理所有隧道和查看流量统计信息。</p>
<hr>
<h2 id="网站映射-http-https" tabindex="-1"><a class="header-anchor" href="#网站映射-http-https"><span>网站映射（HTTP/HTTPS）</span></a></h2>
<p>将本地 Web 服务（如博客、开发环境、测试站点）映射到公网非常简单：</p>
<ol>
<li>在客户端中选择“新建隧道”；</li>
<li>类型选择 <code v-pre>HTTP</code> 或 <code v-pre>HTTPS</code>；</li>
<li>设置本地端口（例如：80、443、3000）；</li>
<li>自定义子域名（如 <code v-pre>myweb.example.com</code>）；</li>
<li>启动隧道，即可通过公网访问本地网站。</li>
</ol>
<blockquote>
<p>💡 支持自动 HTTPS 证书申请（需平台支持），保障网站安全。</p>
</blockquote>
<hr>
<h2 id="mysql-映射" tabindex="-1"><a class="header-anchor" href="#mysql-映射"><span>MySQL 映射</span></a></h2>
<p>将本地数据库开放给外部应用连接，操作步骤如下：</p>
<ol>
<li>创建新隧道，类型选择 <code v-pre>TCP</code>；</li>
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
<li>创建隧道类型为 <code v-pre>TCP</code>；</li>
<li>目标地址填写 <code v-pre>127.0.0.1:3389</code>（默认 RDP 端口）；</li>
<li>获取公网地址和端口；</li>
<li>使用远程桌面工具输入公网地址和端口即可连接。</li>
</ol>
<hr>
<h2 id="充值" tabindex="-1"><a class="header-anchor" href="#充值"><span>充值</span></a></h2>
<p>我们的服务采用 <strong>按量计费</strong> 模式，每 GB 流量仅需 <strong>0.8 元</strong>，无任何隐藏费用。</p>
<p>充值后即可开启无限穿透之旅，适用于任意数量的隧道与带宽！</p>
</div></template>


