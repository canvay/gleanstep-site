# Gleanstep · 拾阶

个人名片 + 博客 + 工具/作品集的内容型网站。仙侠风视觉:宣纸米白 / 墨黑打底,朱砂红点睛。

## 技术栈

- [Astro 5](https://astro.build) — Islands 架构,页面默认零 JS
- [Tailwind CSS 4](https://tailwindcss.com) — 原子样式 + 主题令牌
- 字体:**系统默认无衬线**(零下载、零版面切换,不引入任何 webfont)

## 常用命令

包管理器:**pnpm**(`package.json` 已通过 `packageManager` 字段固定版本)

| 命令 | 说明 |
| --- | --- |
| `pnpm dev` | 本地开发(`localhost:4321/gleanstep-site/`,含 base 前缀) |
| `pnpm build` | 构建到 `./dist/` |
| `pnpm preview` | 本地预览构建产物(同样带 base 前缀) |

## 部署(GitHub Pages)

- 推送到 `main` 分支后,GitHub Actions(`.github/workflows/deploy.yml`)自动构建并部署
- 仓库设置:**Settings → Pages → Source 选 GitHub Actions**(推送后设置一次)
- `astro.config.mjs` 中 `site` / `base` 按仓库名配置;若迁往 Cloudflare Pages 等自定义域托管,去掉 `base` 即可

## 目录

```text
src/
  pages/        路由:index(首页)/ blog / tools / about
  components/   InkCanvas(水墨 Canvas)/ SealLink(印章入口)/ ThemeToggle
  layouts/      BaseLayout(meta、明暗切换、页脚)
  styles/       global.css(配色令牌、字体、暗色模式)
public/logos/   站点 logo(SVG)
docs/           方案设计文档
```

## 文档

| 文档 | 说明 |
| --- | --- |
| [docs/development-plan.md](docs/development-plan.md) | 开发计划:页面规划、设计规范(仙侠风)、里程碑 M1–M4、部署方案 |
| [docs/tech-stack-selection.md](docs/tech-stack-selection.md) | 技术栈选型:2026 静态站生成器对比与 Astro 结论 |

## 约定

- 性能红线:首页 JS 总量 ≤ 30 KB(gzip),目前仅 InkCanvas 一个内联脚本
- 暗色模式:「夜行山色」,手动切换 + 跟随系统
- 提交规范:feat / fix / content / style 前缀
