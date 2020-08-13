module.exports = {
    devServer: {
      proxy: {
        "/api/": {
          target: "https://gitlab.com",
          ws: true,
          changeOrigin: true,
          logLevel: "debug",
          disableHostCheck: true
        }
      }
    }
  };