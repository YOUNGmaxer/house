import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/house/',
  title: 'Azer House',
  description: 'Beautiful House',
  vite: {
    server: {
      port: 6888
    }
  },
  themeConfig: {
    siteTitle: 'Azer House',
    nav: [
      { text: '看点东西', link: '/windows/' },
      { text: '找点工具', link: '/tools/' },
      { text: '每周记录(WIP)', link: '/weekly/' },
      { text: '所见所想(WIP)', link: '/records/' }
    ],
    sidebar: {
      '/weekly/': [
        {
          text: 'Weekly',
          items: [
            { text: '第 0 期 - 星海漫步 梦路初开', link: '/weekly/2024-04-14' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/YOUNGmaxer' },
      {
        icon: {
          svg: `<svg width="36" height="28" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill- rule="evenodd" clip - rule="evenodd" d = "M17.5875 6.77268L21.8232 3.40505L17.5875 0.00748237L17.5837 0L13.3555 3.39757L17.5837 6.76894L17.5875 6.77268ZM17.5863 17.3955H17.59L28.5161 8.77432L25.5526 6.39453L17.59 12.6808H17.5863L17.5825 12.6845L9.61993 6.40201L6.66016 8.78181L17.5825 17.3992L17.5863 17.3955ZM17.5828 23.2891L17.5865 23.2854L32.2133 11.7456L35.1768 14.1254L28.5238 19.3752L17.5865 28L0.284376 14.3574L0 14.1291L2.95977 11.7531L17.5828 23.2891Z" fill="#1E80FF" /></svg>`
        },
        link: 'https://juejin.cn/user/1116759544043976'
      }
    ],
    search: {
      provider: "local"
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    }
  }
})
