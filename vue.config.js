// vue.config.js
const Components = require('unplugin-vue-components/webpack')
const AutoImport = require('unplugin-auto-import/webpack')
const { VarletUIResolver } = require('unplugin-vue-components/resolvers')
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave:false,
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      Components({
        resolvers: [VarletUIResolver()]
      }),
      AutoImport({
        resolvers: [VarletUIResolver({ autoImport: true })]
      })
    ]
  }
})