module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
    },
    devServer: {
      proxy: {
        '/blog/api': {
          target: 'http://127.0.0.1:7001',
          pathRewrite: {
            '^/blog': '',
          },
          changeOrigin: true,
          secure: false,
        },
        '/blog/socket.io': {
          target: 'http://127.0.0.1:7001',
          pathRewrite: {
            '^/blog': '',
          },
          changeOrigin: true,
          secure: false,
        }
      }
    },
  }
};
