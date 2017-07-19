var LoginPage = require("./LoginPage");
var Generator = require("./generator");
var loginPage = new LoginPage();
var generator = new Generator();
var helpers = require('protractor-helpers');

var DataPairing = function(){
	
	this.pairData = function(){

		element(by.id('nav-content')).click();
          browser.sleep('2000');
          element(by.id('nav-menu-cobuild')).click();
          var newPath = loginPage.getURL()+"connections"   
          expect(browser.getCurrentUrl()).toEqual(newPath);          
          element(by.cssContainingText('.shadowed','Add New Connection')).click();          // 
          element(by.className('modal-lg')).isDisplayed();
          browser.sleep('2000');
          element(by.model('connection.name')).sendKeys('automation data pairing conn do not use');
          element(by.model('CMC.onlyAdvanced')).click();
          element(by.model('contentTable.selected')).click();
          browser.sleep('2000');
          element(by.className('ui-select-choices')).element(by.className('ui-select-choices-group')).element(				by.id('ui-select-choices-row-1-')).click();
          browser.sleep('2000');
          element(by.className('nullable')).element(by.className('modprop-ddown')).element(by.className('ui-select-match')).element(by.className('ui-select-toggle')).element(by.className('ui-select-match-text')).click(); 
            
          browser.sleep('10000');
       
    
	};
	
};
module.exports = DataPairing;