module.exports = {
  npm: {
    esModules: true,
    umd: {
      global: "ReactXYGrid",
      externals: {
        react: "React"
      }
    }
  },
  type: "react-component",
  webpack: {
    extra: {
      resolve: {
        extensions: [".js", ".jsx"]
      }
    },
    extractCSS: false,
    rules: {
      babel: {
        test: /\.jsx?/
      }
    }
  }
};
