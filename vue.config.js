//const { defineConfig } = require('@vue/cli-service')
module.exports = {
  transpileDependencies: true,
  devServer: {
    proxy: {'/':{
      "target":' http://3.37.249.210:1324',
      "pathRewrite":{'^/':''},
      "changeOrigin":true,
      "secure":false
      }
    }
  }
}
