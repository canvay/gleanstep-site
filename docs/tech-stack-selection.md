---
created: 2026-11-11
tags:
  - 技术选型
  - 前端
  - 个人网站
---

# 个人网站技术栈选型（2026）

没有唯一“最好”，取决于你的网站是**内容型**还是**应用型**。2026 年的主流共识是：

## 首选推荐：Astro 5（90% 的个人网站都适合）

个人网站（博客、作品集、简历页）本质是**内容站**，Astro 就是为此设计的：

- 默认输出纯静态 HTML，**零 JS 起步**，Lighthouse 满分几乎白送
- Markdown/MDX 写作体验一流，Content Collections 天然适合博客
- 需要交互时用 "Islands" 按需嵌入 React/Svelte/Vue 组件
- 部署到 Vercel / Netlify / Cloudflare Pages 全免费档够用
- 生态成熟：主题多、官方博客模板开箱即用

典型搭配：**Astro + MDX + Tailwind CSS + shadcn/ui + Vercel**。

## 什么时候选 Next.js 15/16

如果你的“个人网站”其实是个**应用**——有登录、数据库、API、评论系统、动态数据——直接上 Next.js（App Router + Server Actions）。

代价是 JS 包更大、心智负担更重，内容站用它属于杀鸡用牛刀。

## 其他值得一提的

| 场景 | 选择 |
| --- | --- |
| 极简、写几个 HTML 页面 | 纯 HTML + Tailwind（连 build 工具都不用） |
| 喜欢 Vue 生态 | Nuxt 或 Astro |
| 喜欢 Svelte | SvelteKit |
| 纯写作、不想碰代码 | Obsidian/Notion + 数字花园导出，或直接用 Hugo |

## 与其他技术栈的横向对比

### 总表

| 技术栈 | 类型 | JS 输出 | 上手难度 | 构建速度 | 适合场景 | 主要短板 |
| --- | --- | --- | --- | --- | --- | --- |
| **Astro 5** | 静态优先 SSG / Islands | 几乎为零 | 低（会 HTML 就行） | 快 | 博客、作品集、文档 | 复杂交互应用不擅长 |
| **Next.js 15/16** | 全栈 React 框架 | 较大 | 中高（React + App Router） | 中 | 全栈应用、动态数据 | 内容站用是杀鸡牛刀 |
| **Hugo** | Go 编写的高速 SSG | 零 | 低（Go 模板语法怪） | 极快（千页秒级） | 大型纯内容站 | 模板语言难看难写、生态老旧 |
| **Eleventy (11ty)** | 简洁 SSG | 零 | 中（自由度高，全靠DIY） | 快 | 极客向、想要完全控制 | 没有现成生态，一切自己搭 |
| **Gatsby 5** | React SSG | 大（整页 hydration） | 中高（React + GraphQL） | 慢 | 仅限存量老站维护 | **已进维护模式**：Netlify 收购后停滞，不建议新项目 |
| **Nuxt 4** | 全栈 Vue 框架 | 较大 | 中（会 Vue 则顺） | 中 | Vue 生态的全栈站 | 同 Next.js 的取舍 |
| **SvelteKit** | 全栈 Svelte 框架 | 小（运行时极小） | 中 | 中 | 喜欢 Svelte 的全栈站 | 生态相对小，招岗位少 |
| **WordPress** | 传统 CMS + PHP | — | 低（几乎不用代码） | —（动态渲染） | 非技术者、需要后台管理 | 慢、安全漏洞多、维护成本高 |
| **纯 HTML + Tailwind** | 手写静态页 | 零 | 极低 | 无构建 | 单页主页、Coming Soon | 页面多了没法维护 |

### 关键差异点

**Astro vs Next.js** —— 最常见的一组对比：
- 内容站选 Astro：默认零 JS、Lighthouse 满分白送、写 Markdown 就行
- 应用站选 Next.js：登录、数据库、API 路由、Server Actions 一应俱全
- 2026 年共识：**"content-heavy → Astro, app-like → Next.js"**，两者解决的不是同一个问题

**Astro vs Hugo** —— 都是静态输出，区别在于：
- Hugo 构建速度无敌（Go 单二进制），上千页的站点依然秒级构建
- 但 Hugo 的 Go 模板语法劝退，主题定制体验远不如 Astro 的类 JSX 组件
- 个人网站的页面量通常只有几十到几百，Hugo 的速度优势体现不出来；**体验上 Astro 赢**

**Astro vs Eleventy**：
- 11ty 更"极简主义"：不规定任何技术栈，零 client JS，自由度最高
- 但代价是没有默认组件模型、没有现成的博客脚手架，适合喜欢从零搭建的人
- 想快速上线、要模板要生态 → Astro；想完全掌控每一行 → 11ty

**Astro vs Gatsby** —— "上一代答案"的衰落：
- Gatsby 曾是 2017–2021 年 React 静态站的统治者，2023 年被 Netlify 收购后团队流失，2026 年已**事实性进入维护模式**（只发安全补丁），新项目无人再选
- Astro 正是对着 Gatsby 的三大痛点设计的：整页 hydration（每页背完整 React 运行时）→ 零 JS 岛屿；强制 GraphQL 数据层（查本地 Markdown 也要写 GraphQL）→ Content Collections 直接 import + schema 校验；构建慢 → 快速增量构建
- Gatsby 仅剩的使用场景：存量老站继续跑。Astro 是公认的头号继任者

**SSG vs WordPress**：
- WordPress 适合"完全不碰代码 + 需要图形化后台"的人，但慢、插件安全坑多、托管要钱
- 静态站免费托管（GitHub Pages/Vercel/Cloudflare Pages）、天然安全、版本可控
- 2026 年个人站的默认答案已从 WordPress 转向静态生成器

### 决策速查

```text
纯写作、零代码      → Hugo / Obsidian 导出
内容站、会写前端    → Astro          ← 大多数人的答案
全栈练手、有动态需求 → Next.js (React) / Nuxt (Vue) / SvelteKit (Svelte)
极客、完全掌控      → Eleventy
不碰代码要后台      → WordPress
就一个主页          → 纯 HTML + Tailwind
```

## 我的规划与选型结论

### 网站构想

1. **首页** —— 个人名片 + 入口，**仙侠风**重设计
2. **博客** —— 常规内容站
3. **工具页/作品页** —— 后续逐步加入，会有交互需求

### 结论：Astro

三个需求正好落在 Astro 的甜蜜区：

| 需求 | 性质 | Astro 的应对 |
| --- | --- | --- |
| 仙侠风首页 | 重设计、重氛围的静态页 | 纯 HTML/CSS + 少量 JS，性能拉满 |
| 博客 | 标准内容站 | Content Collections + MDX，开箱即用 |
| 工具页/作品页 | 逐渐出现交互 | Islands 架构：每个工具是独立 React/Svelte 岛，互不拖累 |

页面主体保持静态零 JS，交互部分按需"注水"。首页这种纯展示页用 Next.js 反而要背 React 运行时，浪费。

### 仙侠风首页实现要点

- **字体**：霞鹜文楷（LXGW WenKai，开源可商用）做标题和正文，气质直接到位
- **水墨氛围**：Canvas 画墨晕/雾气/飘落花瓣（百来行自写或现成库），比全屏视频轻得多
- **竖排点缀**：`writing-mode: vertical-rl` 做诗句、栏目名
- **动效**：入场 CSS animation 足够；滚动叙事再上 GSAP（一个岛的事）
- **配色**：宣纸米白/墨黑打底，朱砂红或黛青做强调色
- 本质是**内容很少但 CSS 很重的页面**，没有框架负担

### 建议目录结构

```text
src/
  pages/
    index.astro        ← 仙侠风名片首页（零 JS 或 1 个 canvas 岛）
    blog/
      [...slug].astro
    tools/
      index.astro      ← 工具列表（后续）
  components/          ← IslandInk.astro / ToolCard.astro ...
  content/blog/        ← MDX 文章
```

### 通用建议（备查）

- **博客/作品集** → Astro + MDX + Tailwind，托管 Vercel 或 Cloudflare Pages
- **想顺便练全栈** → Next.js
- **只是想有个域名和主页** → 纯 HTML，甚至 Hugo 一键生成

> [!tip] 最大的坑
> 个人网站最大的坑不是选错框架，而是**为了“看起来现代”堆了一堆自己维护不动的东西**。内容站选 Astro 是 2026 年最不会后悔的答案。

## 参考

- [Vercel: Astro vs Next.js](https://vercel.com/i/astro-vs-next-js)
- [Astro vs Next.js 16 decision guide](https://www.developersdigest.tech/blog/astro-vs-nextjs-16-2026)
- [Astro vs Next.js vs TanStack Start 2026](https://www.bitdoze.com/astro-vs-nextjs-vs-tanstack-start-which-wins-2026/)
- [9 Best Static Site Generators in 2026 (Real Benchmarks)](https://talos.tools/blog/best-static-site-generators-2026)
- [The Software Scout: Best SSGs 2026](https://thesoftwarescout.com/best-static-site-generators-2026-astro-next-js-hugo-more/)
- [Static Site Generators vs WordPress: 2026 Guide](https://leavewp.com/blog/static-site-generators-vs-wordpress-2026)
