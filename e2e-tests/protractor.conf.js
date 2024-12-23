//jshint strict: false
exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    '*.js'
  ],

  capabilities: {
    'browserName': 'chrome',
    chromeOptions: {
      args: ['--disable-gpu', '--no-sandbox', '--headless', '--window-size=1024,768'],
    },
  },

  directConnect: true, // Bypass webdriver-manager and connect directly to Chrome

  baseUrl: 'http://localhost:8000/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
  },
};
