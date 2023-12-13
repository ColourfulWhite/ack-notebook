import{_ as r}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as d,o as p,c as u,a as e,b as n,d as o,w as s,e as i}from"./app-2d_zdOfg.js";const v={},h=e("p",null,"这节介绍从搭建运行环境到创建 VTH 项目。",-1),m=e("h2",{id:"准备运行环境",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#准备运行环境","aria-hidden":"true"},"#"),n(" 准备运行环境")],-1),b=e("h3",{id:"node-js",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#node-js","aria-hidden":"true"},"#"),n(" Node.js")],-1),g={href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"},_=e("p",null,"VTH 运行需要使用到 Node.js，一般使用最新的长期维护版本（LTS）。",-1),k={href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"},f=e("p",null,"安装 Node.js 的方法有很多，下面给出 Linux 平台的两种安装方法。",-1),x=e("h4",{id:"通过-nvm-安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#通过-nvm-安装","aria-hidden":"true"},"#"),n(" 通过 nvm 安装")],-1),j=e("p",null,"nvm 是 Node.js 的版本管理工具，可以通过 nvm 管理多个 Node.js 和 npm。",-1),T={href:"https://github.com/nvm-sh/nvm",target:"_blank",rel:"noopener noreferrer"},N=e("p",null,[n("这里给出使用 Bash Shell 的教程，对应的配置文件是 "),e("code",null,".bashrc"),n("，使用其他 Shell 的时候对应相应的配置文件。")],-1),S=e("p",null,"安装 nvm",-1),V=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"curl"),n(" -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh "),e("span",{class:"token operator"},"|"),n(),e("span",{class:"token function"},"bash"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),w=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"wget"),n(" -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh "),e("span",{class:"token operator"},"|"),n(),e("span",{class:"token function"},"bash"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),A=i("<li><p>刷新 <code>.bashrc</code></p><p>脚本运行成功后，会往 <code>~/.bashrc</code> 添加一段代码，需要执行 <code>source ~/.bashrc</code> 使代码生效。</p></li><li><p>验证安装</p><p>刷新 <code>.bashrc</code> 后，执行 <code>command -v nvm</code> 验证 nvm 是否安装成功。如果安装成功，会输出 nvm。</p><p>如果没有输出任何内容，可以尝试<strong>打开一个新的终端</strong>、<strong>登出系统</strong>或<strong>重启</strong>。</p></li><li><p>使用 nvm 安装 Node.js</p><ul><li><p>查看所有版本 <code>nvm ls-remote</code></p></li><li><p>安装最新版本 <code>nvm install node</code></p></li><li><p>安装指定版本 <code>nvm install &lt;version&gt;</code>。e.g. <code>nvm install v18</code>、<code>nvm install v18.13.0</code></p></li><li><p>切换版本 <code>nvm use &lt;version&gt;</code></p></li></ul><p><strong>注意</strong>：<code>&lt;version&gt;</code> 如果只写主版本，则会安装该主版本的 LTS 版本。e.g. <code>nvm install v18</code> 会安装 v18 目前最新的 LTS 版本。</p></li>",3),I=e("h4",{id:"通过二进制文件安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#通过二进制文件安装","aria-hidden":"true"},"#"),n(" 通过二进制文件安装")],-1),O=e("p",null,"由于 nvm 项目的代码托管在 Github 上面，可能因为某些原因无法使用。",-1),C=e("p",null,"这里根据官方文档，给出通过源码的方式进行安装。",-1),L={href:"https://github.com/nodejs/help/wiki/Installation",target:"_blank",rel:"noopener noreferrer"},R=e("p",null,"下载 Node.js 源码包",-1),E={href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"},H=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> https://nodejs.org/dist/v18.13.0/node-v18.13.0.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1),$=i(`<li><p>解压到安装目录</p><p>这里解压到 <code>/usr/local/lib/nodejs</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token assign-left variable">VERSION</span><span class="token operator">=</span>v18.13.0
 <span class="token assign-left variable">DISTRO</span><span class="token operator">=</span>linux-x64
 <span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /usr/local/lib/nodejs
 <span class="token function">sudo</span> <span class="token function">tar</span> <span class="token parameter variable">-xJvf</span> node-<span class="token variable">$VERSION</span>-<span class="token variable">$DISTRO</span>.tar.xz <span class="token parameter variable">-C</span> /usr/local/lib/nodejs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>添加环境变量</p><p>修改 <code>~/.bashrc</code> 文件，添加以下内容：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Nodejs</span>
<span class="token assign-left variable">VERSION</span><span class="token operator">=</span>v18.13.0
<span class="token assign-left variable">DISTRO</span><span class="token operator">=</span>linux-x64
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span>:/usr/local/lib/nodejs/node-<span class="token variable">$VERSION</span>-<span class="token variable">$DISTRO</span>/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>保存后执行 <code>source ~/.bashrc</code> 刷新使其生效。</p></li><li><p>验证安装</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">node</span> <span class="token parameter variable">-v</span>
v18.13.0
$ <span class="token function">npm</span> <span class="token parameter variable">-v</span>
<span class="token number">8.19</span>.3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果输出结果类似 <code>node: command not found</code>，可以尝试打开一个新的终端、登出系统或重启。</p></li>`,3),y=i(`<h3 id="pnpm" tabindex="-1"><a class="header-anchor" href="#pnpm" aria-hidden="true">#</a> Pnpm</h3><p>推荐使用 pnpm 作为项目管理器。执行以下命令安装 pnpm：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>corepack <span class="token builtin class-name">enable</span>
corepack prepare pnpm@latest <span class="token parameter variable">--activate</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建-vth-项目" tabindex="-1"><a class="header-anchor" href="#创建-vth-项目" aria-hidden="true">#</a> 创建 VTH 项目</h2><p>为了防止出现一些奇怪的问题，请尽量避免使用包含中文文字、表情符号或空格的文件路径。</p><p>在合适的位置，打开终端，运行以下的命令：</p>`,6),q=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"pnpm"),n(` create vuepress-theme-hope my-docs
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),B=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"npm"),n(` init vuepress-theme-hope my-docs
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),D=i(`<p>然后根据提示一步一步选择即可。</p><p>创建成功后，会提示是否启动开发服务器，如果选了否，后续可以通过执行 <code>pnpm docs:dev</code> 启动。</p><blockquote><p><code>my-docs</code> 代表 VTH 项目的文件夹名称，执行以上命令，会将 VTH 项目生成至当前目录下的 <code>my-docs</code> 文件夹中。</p><p>可以根据自己的需求修改。</p></blockquote><p>如果需要停止开发服务器，需要连续按两次 <code>Ctrl + C</code>。</p><h2 id="faq" tabindex="-1"><a class="header-anchor" href="#faq" aria-hidden="true">#</a> FAQ</h2><ol><li><p>Q：在执行 nvm 的安装脚本过程中，出现 <strong>[GnuTLS recv error (-110): The TLS connection was non-properly terminated.]</strong></p><p>A：执行以下代码：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> gnutls-bin
<span class="token function">git</span> config <span class="token parameter variable">--global</span> http.sslVerify <span class="token boolean">false</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> http.postBuffer <span class="token number">1048576000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,6);function P(z,G){const t=d("ExternalLinkIcon"),c=d("CodeTabs");return p(),u("div",null,[h,m,b,e("p",null,[e("a",g,[n("Node.js"),o(t)]),n(" 是一个基于 Chrome V8 引擎的 JavaScript 运行时环境。")]),_,e("p",null,[n("官网地址："),e("a",k,[n("https://nodejs.org/en/"),o(t)])]),f,x,j,e("p",null,[n("关于 nvm 更多的信息，访问 "),e("a",T,[n("https://github.com/nvm-sh/nvm"),o(t)]),n(" 查看")]),N,e("ol",null,[e("li",null,[S,o(c,{id:"38",data:[{id:"curl"},{id:"wget"}],active:0},{title0:s(({value:a,isActive:l})=>[n("curl")]),title1:s(({value:a,isActive:l})=>[n("wget")]),tab0:s(({value:a,isActive:l})=>[V]),tab1:s(({value:a,isActive:l})=>[w]),_:1})]),A]),I,O,C,e("p",null,[n("详细请看官方文档："),e("a",L,[n("https://github.com/nodejs/help/wiki/Installation"),o(t)])]),e("ol",null,[e("li",null,[R,e("p",null,[n("下载地址："),e("a",E,[n("https://nodejs.org/en/download/"),o(t)])]),H]),$]),y,o(c,{id:"166",data:[{id:"pnpm"},{id:"npm"}],active:0,"tab-id":"installtool"},{title0:s(({value:a,isActive:l})=>[n("pnpm")]),title1:s(({value:a,isActive:l})=>[n("npm")]),tab0:s(({value:a,isActive:l})=>[q]),tab1:s(({value:a,isActive:l})=>[B]),_:1}),D])}const F=r(v,[["render",P],["__file","01install.html.vue"]]);export{F as default};
