import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import postCssPxToRem from "postcss-pxtorem"
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    WindiCSS(),
    Components({
      resolvers: [VantResolver()],
    }),],
  resolve: {
    alias: {
      '@': '/src/'
    }
  },
  css: {
    postcss: {
      plugins: [
        postCssPxToRem({
          rootValue: 75, // 设计稿宽度/10
          propList: ['*'],
          // selectorBlackList: ['html']
        })
      ]
    }
  }
})

