const { defineConfig } = require('@vue/cli-service')

const path = require('path')

const resolve = (dir) => path.join(__dirname, dir)

module.exports = defineConfig({
  transpileDependencies: true, // 将所有文件都编译一遍(通过babel 编译文件：ES6+ ->ES5)
  // lintOnSave: false, // 关闭eslint校验
  productionSourceMap: false, // 生产环境是否要生成sourceMap
  outputDir: './dist', // 打包路径
  publicPath:'./',
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
  },
  devServer: {
    host: '0.0.0.0',
    port: 8000,
    hot: true,
    open: false,
    // proxy: {
    //   '/basic': {
    //     target: 'http://10.135.29.204:8085', // 要访问的域名
    //     changeOrigin: true, // 允许跨域请求
    //     ws: true, // 代理websockets
    //     // pathRewrite: {
    //     //   '^basic': ''
    //     // }
    //   }
    // }
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#1DA57A',
            'link-color': '#1DA57A',
            'border-radius-base': '2px',
          },
          javascriptEnabled: true
        }
      }
    }
  }
})
