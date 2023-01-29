module.exports = {
  transpileDependencies: true,
  devServer: {
    proxy: {'/':{
      "target":' https://ruleof.datasesang.store/',
      "pathRewrite":{'^/':''},
      "changeOrigin":true,
      "secure":false,
      "ws": false
      }
    }
  }
}