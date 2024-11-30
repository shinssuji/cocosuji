const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // publicPath: '/works',
  // 정적 자산 경로 설정
  assetsDir: 'assets',
  
  chainWebpack: config => {
    config.plugin('copy').tap(([options]) => {
      options[0].ignore.push('public/works')
      return [options]
    })
  },

  // Webpack 설정 커스터마이징
  // chainWebpack: (config) => {
  //   config.output
  //     .filename('js/[name].js')
  //     .chunkFilename('js/[name].js')
  //     .end();

  //   // CSS와 이미지 경로 문제 해결
  //   config.plugin('html').tap((args) => {
  //     args[0].minify = false; // 경로에서 최적화로 인한 의도치 않은 문제 방지
  //     return args;
  //   });
  // },

  // configureWebpack: {
  //   output: {
  //     publicPath: './', // 모든 정적 파일 경로가 상대경로로 설정
  //   },
  // },

  // // CSS 및 이미지 경로의 상대 경로 유지
  // css: {
  //   extract: {
  //     publicPath: './',
  //   },
  // },
})
