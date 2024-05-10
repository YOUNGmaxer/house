import DefaultTheme from 'vitepress/theme'
import type { App } from 'vue'
import 'virtual:uno.css'

import TimeLine from './components/TimeLine/index.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component('TimeLine', TimeLine)
  },
}
