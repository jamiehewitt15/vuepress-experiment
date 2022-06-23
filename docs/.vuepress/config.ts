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
      },
      {
        text: 'Orientation',
        link: '/',
      },
      {
        text: 'Core Concepts',
        link: '/',
      },
      {
        text: 'Market Tutorials',
        link: '/',
      },
      {
        text: 'Developer Guides',
        link: '/',
      },
    ],
  }),
})
