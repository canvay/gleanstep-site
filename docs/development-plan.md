---
created: 2026-11-11
status: 进行中(M1 已完成)
tags:
  - 项目
  - 个人网站
  - 前端
---

# Gleanstep — 个人网站开发计划

## 一、项目概述

**网站名**：Gleanstep
**定位**：个人名片 + 博客 + 工具/作品集的内容型网站
**技术方案**：基于 [个人网站技术栈选型](./tech-stack-selection.md) 的结论 —— **Astro**

### 页面规划

| 页面 | 优先级 | 说明 |
| --- | --- | --- |
| 首页（仙侠风名片+入口） | P0 | 个人名片、栏目入口，全站视觉基调 |
| 博客（列表 + 文章页） | P0 | MDX 写作，带标签归档 |
| 工具页/作品页 | P2 | 后续逐步加入，每个工具一个 Island |

## 二、技术栈

| 层 | 选择 |
| --- | --- |
| 框架 | Astro 5（Islands 架构） |
| 内容 | MDX + Content Collections |
| 样式 | Tailwind CSS |
| 交互岛 | React（按需，工具页用） |
| 包管理 | pnpm（`packageManager` 字段锁版本） |
| 部署 | **GitHub Pages**（GitHub Actions 自动部署，详见 M3） |
| 域名 | gleanstep.com（需查询可注册性，备选 .dev / .me） |

## 三、设计规范（仙侠风）

### 核心理念

> **人于天地间如蜉蝣，渺小；然大道虽远，拾阶而上，步步皆是修行。**

网站首页要传达的精神内核：

- **渺小**：画面中的人物极小，被巨大的山体、云海、空间吞没——承认个体的有限
- **求索**：但小人始终在走，面向山上——渺小不等于停止
- **拾阶**：每一级台阶是一个脚印，对应站名 Gleanstep（glean 拾取 + step 阶梯 = 拾阶）
- **向顶**：山顶隐在云雾中，看不全，但知道它在那里——仙路不可尽见，道心不灭

一句话 tagline 备选（竖排展示）：
- 「大道三千，拾阶而上」
- 「身在尘埃，心向仙山」
- 「步履不停，即是登仙」

### 视觉隐喻映射

| 意象 | 含义 | 实现方式 |
| --- | --- | --- |
| 巨大的仙山（占画面 2/3 以上） | 大道 / 终极目标 | 远景层：水墨淡彩渲染，留白多 |
| 极小的旅人剪影（斗笠/布衣） | 渺小的个人 | 近景层：数笔浓墨剪影，站在画面下方石阶上 |
| 蜿蜒向上的石阶 | 求索之路、一步步 | 中景层：阶石沿山势盘旋没入雾中；站点导航可做成阶石意象 |
| 云雾遮住山顶 | 大道不可尽见，但可知存在 | Canvas 雾气粒子缓慢流动 |
| 飘落的花瓣/落叶 | 时间的流逝与沿途拾取之物 | Canvas 粒子，缓慢下落 |
| 一盏提灯（可选细节） | 求索者的心灯/微光 | 旅人手中的暖色小光点，全画面唯一的暖色 |

### 视觉基调

- **配色**：宣纸米白 / 墨黑打底，**朱砂红只给两处**：提灯的微光 + 印章入口；暗色模式为"夜行山色"（深墨 + 山月）
- **字体**：霞鹜文楷 LXGW WenKai（开源可商用，自托管子集化 woff2）做标题正文；数字/英文配衬线体
- **氛围元素**：Canvas 雾气 + 落瓣（自写百来行，控制在 1 个岛以内）
- **排版点缀**：`writing-mode: vertical-rl` 竖排 tagline 与栏目名；站名"拾阶"可配一枚小朱砂印
- **动效**：入场 CSS animation 优先（雾气聚散、小人从阶下缓步入位）；滚动叙事才引入 GSAP
- **构图原则**：大量留白 + 极小主体——"渺小感"靠比例对比实现，不靠元素堆砌

### 首页布局草案

- 全屏 hero：水墨仙山远景 + 旅人剪影立于石阶 + 竖排站名「拾阶」与 tagline
- **入口区做成"阶石"**：博客 / 工具 / 关于 三个入口沿石阶拾级排布——每登一"阶"进入一个栏目，让导航本身参与叙事：
  - 博客 →「履痕」（沿途拾取的文字）
  - 工具 →「法器」（随身锻造的器物）
  - 关于 →「其人」（修行的旅人是谁）
- 页脚：社交链接（GitHub、邮箱等），配一句收尾小字，如「山不语，阶自答」

## 四、目录结构

```text
gleanstep/
  src/
    pages/
      index.astro          ← 仙侠风名片首页
      about.astro          ← 关于页
      blog/
        index.astro        ← 博客列表
        [...slug].astro    ← 文章详情
      tools/
        index.astro        ← 工具列表（P2）
    components/
      InkCanvas.astro      ← 水墨 Canvas 岛
      BlogCard.astro
      SealLink.astro       ← 印章/卷轴风格入口
    content/
      blog/                ← MDX 文章
    styles/
      global.css           ← 主题变量、字体
  astro.config.mjs
```

## 五、里程碑

### M1 — 骨架与首页（P0）
- [x] 初始化项目（手写脚手架；目录含 logo 非空，未走 `create astro`；包管理器 pnpm，`packageManager` 已锁 12.18.0）
- [x] 接入 Tailwind CSS（Tailwind 4 + @tailwindcss/vite）
- [x] 全局样式：配色变量、霞鹜文楷字体接入（Lite 版自托管，按 unicode-range 同源分包）
- [x] 首页 hero：**按参考图（WorkBuddy 生成的水墨峰林图）重构**——画布 1600×700（修复宽屏下峰顶出框），群峰叠嶂（浓墨主峰 + 皴纹 pattern + 赭石淡彩远峰）、峰顶孤松（defs+use 复制）、16 级长阶自左下蜿蜒入云、云海峰腰穿行右下大留白；站名移至左上虚空；新增赭石色令牌；旅人保持移除
- [x] 菜单：**右侧题签式竖排导航**（纸色竖条贴右缘悬浮，履痕/法器/其人 + 栏目小字，悬停染朱砂）；落瓣恢复朱砂粉色（Canvas），雾气保持淡墨
- [x] 首页入口区 + 页脚：入口改「履痕/法器/其人」沿阶拾级错落，页脚墨色底带 + 反白组合标 + 收尾小字「山不语，阶自答」；tagline 用「大道三千，拾阶而上」；朱砂收敛为提灯与印章两处
- [x] 暗色模式（「夜行山色」，手动切换 + 跟随系统）

### M2 — 博客（P0）
- [ ] 配置 Content Collections（blog schema：title/date/tags/draft）
- [ ] 博客列表页（卡片式，仙侠风样式）
- [ ] 文章详情页（MDX 渲染、代码高亮 Shiki）
- [ ] 标签页 / 归档页
- [ ] RSS + sitemap（@astrojs/rss, @astrojs/sitemap）
- [ ] 写下第一篇文章《Gleanstep 缘起》

### M3 — 上线（P0）
- [ ] 移动端适配检查（Lighthouse 移动分 ≥ 95）
- [x] 部署 GitHub Pages（2026-11-11 首次部署成功，https://canvay.github.io/gleanstep-site/ ）：
  - [x] `astro.config.mjs` 配置 `site: 'https://canvay.github.io'` + `base: '/gleanstep-site'`
  - [x] `.github/workflows/deploy.yml`（checkout → pnpm/action-setup 读 packageManager → Node 24 → `pnpm build` → deploy-pages）
  - [x] 站内链接全部改为 `import.meta.env.BASE_URL` base 感知写法（logo、favicon、字体、导航、返回链接）
  - [ ] 仓库 Settings → Pages → Source 设为 **GitHub Actions**（推送后手动设置一次）
  - [ ] 自定义域名绑定 + DNS 解析（可选；apex 域 HTTPS 需 DNS 层支持）
- [ ] SEO 基础：title/description/OG 图片、canonical

### 部署方案备注

- **选定方案：GitHub Pages**，全流程在 GitHub 内完成（代码 + CI + 托管），公开仓库免费
- 每次 push 到 main 自动构建部署；构建走 GitHub Actions 免费额度（公开仓库无限制）
- **已知取舍：`*.github.io` 国内访问慢且不稳定**，加载霞鹜文楷等大字体资源时体验打折
- **备选迁移路径**（代码零改动）：托管层日后可切到 Cloudflare Pages（国内可达性更好、HTTPS 自动签发），只需改部署源，`astro.config.mjs` 去掉 `base` 相关调整即可

### M4 — 工具页与作品页（P2，后续迭代）
- [ ] 工具列表页
- [ ] 第一个工具（React 岛）
- [ ] 作品展示页

## 六、约定

- 文章命名：`content/blog/2026-xx-xx-slug/index.mdx`（图片放同目录，方便管理）
- 提交规范：feat/fix/content/style 前缀
- 性能红线：首页 JS 总量 ≤ 30 KB（gzip），只允许 InkCanvas 一个岛

## 七、风险与备选

- **仙侠风容易用力过猛** → 先做减法：单色水墨打底，确认气质后再加氛围元素
- **中文字体文件大**（文楷全套 ~10 MB）→ 子集化（subset）后只打包用到的字重，或标题用图片/Canvas 渲染
- **Canvas 动效在低端手机耗电** → 提供 `prefers-reduced-motion` 降级为静态图
