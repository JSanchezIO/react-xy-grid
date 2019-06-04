module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactXYGrid',
      externals: {
        react: 'React'
      }
    }
  }
}
