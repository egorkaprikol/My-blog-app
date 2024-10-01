import vuetify from './vuetify'
import article from '@/stores/article'

export function registerPlugins(app) {
  app
    .use(article)
    .use(vuetify)
}
