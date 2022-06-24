import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'en-US',
  title: 'Ocean Protocol Docs',
  description: 'Just playing around',
  theme: defaultTheme({
    // default theme config
    logo: '/logo/logo.svg',
    logoDark: '/logo/logo-white.svg',
    navbar: [
      {
        text: 'Home',
        link: '/',
      }
    ],
        // all pages will use the same sidebar
        sidebar: [
          // SidebarItem
          {
            text: 'Market Tutorials',
            collapsible: true,
            children: [
              // SidebarItem
              {
                text: 'Introduction',
                link: '/tutorials/index.md',
                children: [],
              },
              {
                text: 'Download',
                link: '/tutorials/marketplace-download-data-asset.md',
                children: [],
              },
              {
                text: 'Publish',
                link: '/tutorials/marketplace-publish-data-asset.md',
                children: [],
              },
              {
                text: 'Swap',
                link: '/tutorials/marketplace-swap.md',
                children: [],
              },
              {
                text: 'Add Liquidity',
                link: '/tutorials/marketplace-add-liquidity.md',
                children: [],
              },
            ],
          },
          {
            text: 'Core Concepts',
            collapsible: true,
            children: [
              // SidebarItem
              {
                text: 'Introduction',
                link: '/core-concepts/introduction.md',
                children: [],
              },
              {
                text: 'Architecture',
                link: '/core-concepts/architecture.md',
                children: [],
              },
              {
                text: 'Pricing',
                link: '/core-concepts/asset-pricing.md',
                children: [],
              },
              {
                text: 'Legals',
                link: '/core-concepts/legal-reqs.md',
                children: [],
              },
              {
                text: 'Networks',
                link: '/core-concepts/networks.md',
                children: [],
              },
            ],
          }
        ],
  }),
})
