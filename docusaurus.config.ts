import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '颀信软件',
  tagline: '通用行业ERP — 让生产管理更高效',
  favicon: 'img/favicon.svg',

  future: {
    v4: true,
  },

  url: 'https://eontaop.github.io',
  baseUrl: '/',

  organizationName: 'jitakeji',
  projectName: 'market-website',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: '',
      logo: {
        alt: '颀信软件',
        src: 'img/logo.svg',
        srcDark: 'img/logo-dark.svg',
      },
      hideOnScroll: false,
      items: [
        {
          label: '首页',
          to: '/',
          position: 'left',
        },
        {
          label: '产品功能',
          to: '/#features',
          position: 'left',
        },
        {
          label: '解决方案',
          to: '/#solutions',
          position: 'left',
        },
        {
          label: '行业案例',
          to: '/#cases',
          position: 'left',
        },
        {
          label: '产品演示',
          href: '#',
          position: 'right',
          className: 'navbar-demo-btn',
        },
      ],
    },
    footer: undefined,
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
