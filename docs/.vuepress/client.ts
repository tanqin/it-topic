import { defineClientConfig } from '@vuepress/client'
import QuestionCom from './components/QuestionCom.vue'
export default defineClientConfig({
  enhance({ app }) {
    app.component('QuestionCom', QuestionCom)
  }
})
