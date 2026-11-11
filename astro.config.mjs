// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages 项目站点部署:
//   site  = <username>.github.io 仓库域
//   base  = 仓库名(部署子路径)。迁往 Cloudflare Pages 等自定义域托管时,把 base 去掉即可。
const site = 'https://canvay.github.io';
const base = '/gleanstep-site';

// https://astro.build/config
export default defineConfig({
  site,
  base,
  vite: {
    plugins: [tailwindcss()],
  },
});
