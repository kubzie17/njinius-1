/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'Njinius',
  tagline: 'About',
  url: 'https://njinius.github.io',
  baseUrl: '/',
  favicon: '/static/img/njinlogo.png',
  organizationName: 'njinius', // Usually your GitHub org/user name.
  projectName: 'njinius', // Usually your repo name.
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
   
    navbar: {

      hideOnScroll: true,
      logo: {
        alt: 'Njinius',
        src: '/static/img/njiniusone.png',
        srcDark: '/static/img/njiniusone.png',
      },
      items: [
        
        {
          to: '/blog',
          label: 'Blogs',
          position: 'left',
          className: 'navbar-item-pages',
        },
        {
          to: 'docs/contribute/about',
          label: 'Contribute',
          position: 'left',
          className: 'navbar-item-pages',
        },
        { to: '/docs/doc6', label: 'Live Sessions', position: 'right' },
        { to: '/Challenge', label: 'Challenge', position: 'right' },
        { to: '/languages', label: 'languages', position: 'right' },

        
        {
          activeBasePath: 'Videos',
          label: 'Videos Sessions',
          position: 'right',
          items: [
            {
              label:'Business Session',
              to: '/bussVid1',
            },
            {
              label:'Software Session',
              to: '/videos',
            },
            {
              label:'Book Club Session',
              to: '/bookVid1',
            },
          ]
        },

        {
          activeBasePath: 'Topics',
          label: 'Topics',
          position: 'right',
          items: [
            {
              label: 'Business',
              to: 'docs/topics/business/about',
            },
            {
              label: 'Software',
              to: 'docs/topics/software/about'
            },
            {
              label: 'Book Club',
              to: '/docs/topics/bookClub/about',
            },
        ]
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