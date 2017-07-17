var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['ocelot.js'],
  jasmineNodeOpts : {
      showColors: true,
      defaultTimeoutInterval : 60000
   },
  //  multiCapabilities: [{
  //     'browserName': 'chrome'
  //   }, 
    //{
    //   'browserName': 'firefox'
    // },{
    //     'browserName': 'internet explorer'
    // }],
     
   onPrepare: function() {
      jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
          savePath: 'target/screenshots',
          screenshotsFolder: 'images'
        })
      );
     
   }
 
   
    // server: '10.23.18.135',
    // database: 'Orchestration',
    // user: 'occuser',
    // password: 'Exp3dia22',
    // port: 1433,
    // options: {
    //     instanceName: 'DBinstance',
    //     encrypt: true
    // }
 // resultJsonOutputFile:'./testResults.json'
};