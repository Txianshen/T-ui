const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  pages:{//多页面配置
    index:{
      entry:'examples/main.js',//入口
      template:'public/index.html',
      filename:'index.html'
    }
  },
  // 扩展webpack配置
  chainWebpack:config =>{
    //@ 默认指向src目录，这里要改成examples
    //另外也可以新增一个 ~ 指向packages
    config.resolve.alias
    .set('@',path.resolve('examples')) 
    .set('~',path.resolve('packages'))

    //把packages和examples加入编译，因为新增的文件默认是不被webpack处理的
    config.module
      .rule('js')
      .include.add(/packages/).end()
      .include.add(/examples/).end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        return options
      })
  }
})
