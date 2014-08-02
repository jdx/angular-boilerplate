exports.config = {
  capabilities: {
    browserName: 'firefox'
  },
  specs: [
    'test/protractor/**/*.spec.js'
  ],
  onPrepare: function () {
    process.env.PORT = 3001
    require('./boot')
  }
}
