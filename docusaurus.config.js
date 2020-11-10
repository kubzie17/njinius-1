/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'Njinius',
  tagline: 'About',
  url: 'https://supabase.io',
  baseUrl: '/',
  favicon: '/static/img/njinlogo.png',
  organizationName: 'Njinius', // Usually your GitHub org/user name.
  projectName: 'Njinius', // Usually your repo name.
  themeConfig: {
    forceDarkMode: false,
    darkMode: false,
    colorMode: {
      // "light" | "dark"
      defaultMode: 'light',

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: true,

      // Should we use the prefers-color-scheme media-query,
      // using user system preferences, instead of the hardcoded defaultMode
      respectPrefersColorScheme: false,

      // Dark/light switch icon options
      switchConfig: {
        // Icon for the switch while in dark mode
        darkIcon: '  ',
        darkIconStyle: {
          marginTop: '1px',
        },
        lightIcon: '  ',
        lightIconStyle: {
          marginTop: '1px',
        },
      },
    },
    sidebarCollapsible: true,
    algolia: {
      apiKey: '766d56f13dd1e82f43253559b7c86636',
      indexName: 'njinius',
    },
    image: '/static/img/njiniusone.png', // used for meta tag, in particular og:image and twitter:image
    metaImage: '/static/img/njiniusone.png',
    googleAnalytics: {
      trackingID: 'UA-155232740-1',
    },
    // announcementBar: {
    //   id: 'support_us', // Any value that will identify this message
    //   content:
    //     'Join our early alpha: <a target="_blank" rel="noopener noreferrer" href="https://app.supabase.io">app.supabase.io</a>',
    //   backgroundColor: '#111111', // Defaults to `#fff`
    //   textColor: '#ddd', // Defaults to `#000`
    // },
    navbar: {
      // classNames: 'shadow--md',
      // title: 'supabase',
      hideOnScroll: true,
      logo: {
        alt: 'Njinius',
        src: '/static/img/njiniusone.png',
        srcDark: '/static/img/njiniusone.png',
      },
      items: [
        {
          to: '/docs',
          label: 'Guides',
          position: 'right',
          className: 'navbar-item-pages',
        },
        {
          to: '/blog',
          label: 'Blogs',
          position: 'right',
          className: 'navbar-item-pages',
        },
        { to: '/docs/doc6', label: 'Schedule', position: 'right' },
        { to: '/testpage', label: 'Test page', position: 'right' },
        { to: '/testpage2', label: 'Test page2', position: 'right' },
        {
          to: '/videos',
          label: 'Videos',
          position: 'right',
        },

        {
          to: '/tracks',
          label: 'Tracks',
          position: 'right',
        },

        {
          href: 'https://github.com/njinius',
          className: 'navbar-item-github',
          position: 'right',
        },
     
      ],
    },
    prism: {
      defaultLanguage: 'js',
      plugins: ['line-numbers', 'show-language'],
      theme: require('@kiwicopple/prism-react-renderer/themes/vsDark'),
      darkTheme: require('@kiwicopple/prism-react-renderer/themes/vsDark'),
    },
    footer: {
      links: [
        {
          title: 'Company',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'About Us',
              to: '/docs/',
            },
            {
              label: 'FAQs',
              to: 'docs/faq',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Privacy Notice',
              to: '/docs/legal/privacyNotice',
            },
            {
              label: 'Cookie Policy',
              to: '/docs/legal/cookiePolicy',
            },
            {
              label: 'Disclaimer',
              to: '/docs/legal/disclaimer',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/njinius',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/njinius1',
            },
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/channel/UCmcoHCFEYhuti8aarL3ieUg?view_as=subscriber',
            },
           
          ],
        },
        {
          title: 'Slack',
          items: [
            {
              label: 'Join our Slack channel',
              href: 'https://join.slack.com/t/njinius/shared_invite/zt-iyerljia-YZTOp5gabUTBzk1wyTomyw',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} NjiniusLtd.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};