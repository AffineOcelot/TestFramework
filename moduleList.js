var helpers = require('protractor-helpers');
var moduleList = function() {

this.listModule = function(){

          element(by.id('nav-modules')).click();
          helpers.displayHover($('#navModuleBuilder'));
          
          element(by.css('[ui-sref=".moduleList({navbar: true})"]')).click();
          
           //expect(browser.getCurrentUrl()).toEqual('https://chcxcrmsql008:8011/modules');
           browser.sleep('5000');
        
           
    
      };
  };
   module.exports = moduleList;