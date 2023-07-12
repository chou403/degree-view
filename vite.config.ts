import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import postCssPxToRem from 'postcss-pxtorem'
import WindiCSS from 'vite-plugin-windicss'
import { viteMockServe } from 'vite-plugin-mock'

export default defineConfig({
  base: './', // 这里更改打包相对绝对路径
  plugins: [
    vue(),
    WindiCSS(),
    Components({
      resolvers: [VantResolver()],
    }),
    // mock服务
    viteMockServe({
      supportTs: false,
      logger: false,
      mockPath: "./src/mock/",
    }),
  ],
  resolve: {
    alias: {
      '@': '/src/'
    }
  },
  // 设置跨域  vue3配置跨域--------
  server: {
    // https: true,
    proxy: {
      '/api': { // 需要注意的是这里的 /api 要与utils文件下面的axios.js文件的基础路径保持一致
        target: "http://localhost:5173", // 后端地址
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
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

