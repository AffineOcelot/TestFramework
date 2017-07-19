// An example configuration file.
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');


exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['testcases.js'],
  getPageTimeout: 180000,
  allScriptsTimeout: 180000,

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 180000
  },
  onPrepare: function() {
      jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
          savePath: 'target/screenshots'
        })
      );
   }
  //resultJsonOutputFile:'./result.json',
};
