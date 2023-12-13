import{_ as r}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as t,c as s,a as e,b as n,d as a,e as d}from"./app-2d_zdOfg.js";const c={},l=e("p",null,"Markdown 中使用 Emoji 有两种方式：直接复制和使用 Emoji 符号简码。",-1),m=e("h2",{id:"直接复制",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#直接复制","aria-hidden":"true"},"#"),n(" 直接复制")],-1),p={href:"https://emojipedia.org/",target:"_blank",rel:"noopener noreferrer"},_=d(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>It&#39;s very funny. 😂
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>效果：</p><p>It&#39;s very funny. 😂</p><h2 id="emoji-符号简码" tabindex="-1"><a class="header-anchor" href="#emoji-符号简码" aria-hidden="true">#</a> Emoji 符号简码</h2><p>如果需要将 Markdown 文档存到数据库中，Emoji 符号可能会导致存储的时候发生错误。一些 Markdown 应用程序支持通过键入 Emoji 符号简码插入 Emoji。</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>It&#39;s very funny. :joy:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>效果：</p><p>It&#39;s very funny. 😂</p>`,8),h={class:"hint-container tip"},u=e("p",{class:"hint-container-title"},"提示",-1),v=e("p",null,"不同的 Markdown 应用程序可能有不同的 Emoji 符号简码，你需要查看对应的文档以确保可以正确插入 Emoji。",-1),f={href:"https://gist.github.com/rxaviers/7360908",target:"_blank",rel:"noopener noreferrer"};function j(k,E){const o=i("ExternalLinkIcon");return t(),s("div",null,[l,m,e("p",null,[n("可以简单从 "),e("a",p,[n("Emojipedia"),a(o)]),n(" 直接复制 Emoji 到 Markdown 文档中。绝大多数 Markdown 应用程序会自动以 Markdown 格式的文本显示 Emoji。")]),_,e("div",h,[u,v,e("p",null,[n("GFM 支持的 Emoji 简码："),e("a",f,[n("Complete list of github markdown emoji markup"),a(o)])])])])}const w=r(c,[["render",j],["__file","017emoji.html.vue"]]);export{w as default};
