import { DefaultTheme, defineConfig } from 'vitepress';
import { components } from '../components';
import { mdPlugin } from './config/plugins';

const nav: DefaultTheme.NavItem[] = [
  { text: '指南', link: '/guide/' },
  { text: '组件', link: '/components/DpButton/base.md' },
];

const sidebar: DefaultTheme.Sidebar = {
  '/guide': [
    {
      text: '指南',
      items: [
        { text: '组件库介绍', link: '/guide/' },
        { text: '快速开始', link: '/guide/quickstart' },
      ],
    },
  ],
  '/components': [
    {
      text: '组件',
      items: [...components],
    },
  ],
};

export default defineConfig({
  title: 'ul-el-com',
  description: 'DP Vue3企业级中后台组件库',
  lang: 'cn-ZH',
  base: '/ul-el-com',
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.jpg',
    siteTitle: 'ul-el-com',
    outline: 3,
    socialLinks: [{ icon: 'github', link: 'https://github.com/pcyking/dp-ui' }],
    nav,
    sidebar,
  },
  markdown: {
    config: (md) => mdPlugin(md),
  },
});
