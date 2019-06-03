module.exports = {

  /* {
    modules: {
      rules: [
        {
          test: /\.coffee$/,
          use: ['coffee-loader'],
        },
      ],
    },
  }, */
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8081',
        changeOrigin: true,
      },
    },
  },
};
