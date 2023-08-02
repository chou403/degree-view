import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VantResolver } from 'unplugin-vue-components/resolvers';
import postCssPxToRem from 'postcss-pxtorem'
import WindiCSS from 'vite-plugin-windicss'
import { viteMockServe } from 'vite-plugin-mock'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import {
  createStyleImportPlugin,
  ElementPlusResolve,
} from "vite-plugin-style-import";

export default defineConfig({
  base: './', // 这里更改打包相对绝对路径
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
      // 可以使用$ref
      reactivityTransform: true,
    }),
    WindiCSS(),
    // 解决message和notification引入不生效问题
    createStyleImportPlugin({
      resolves: [ElementPlusResolve()],
    }),
    Components({
      resolvers: [VantResolver(),ElementPlusResolver()],
      include: [/\.vue$/, /\.tsx$/, /\.vue\?vue/, /\.md$/],
      dts: "src/components.d.ts",
    }),
    // mock服务
    viteMockServe({
      supportTs: false,
      logger: false,
      mockPath: "./src/mock/",
    }),
    AutoImport({
      // 目标文件
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/, /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      vueTemplate: true,
      // 全局引入插件
      imports: [
        "vue",
        "vue-router",
        {
          '@vueuse/core': [
            // named imports
            'useMouse', // import { useMouse } from '@vueuse/core',
            // alias
            ['useFetch', 'useMyFetch'], // import { useFetch as useMyFetch } from '@vueuse/core',
          ],
          'axios': [
            // default imports
            ['default', 'axios'], // import { default as axios } from 'axios',
          ],
          '[package-name]': [
            '[import-names]',
            // alias
            ['[from]', '[alias]'],
          ],
        },
        {
          from: 'vue-router',
          imports: ['RouteLocationRaw'],
          type: true,
        },
      ],
      // eslint报错解决
      eslintrc: {
        enabled: false, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
      // 解析器
      resolvers: [
        ElementPlusResolver(),
      ],
      // 声明文件生成位置和文件名称 路径下自动生成文件夹存放全局指令
      dts: './auto-import.d.ts'
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
    // port: 8085,
    proxy: {
      '/degree': { // 需要注意的是这里的 /api 要与utils文件下面的axios.js文件的基础路径保持一致
        target: "http://localhost:8085", // 后端地址
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/degree/, '')
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

