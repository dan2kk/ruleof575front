module.exports = {
  transpileDependencies: true,
  devServer: {
    proxy: {'/':{
      "target":' https://ruleof.datasesang.store/',
      "pathRewrite":{'^/':''},
      "changeOrigin":true,
      "secure":false,
      "ws": false
      },
      '/api':{
        "target":'https://nf.hanyang.ac.kr/',
        "pathRewrite":{'^/api':''},
        "changeOrigin":true,
        "secure":false,
        "ws": false
      }
    }
  }
}