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
	this.buildSubject = function(){
		element(by.id('nav-modules')).click();
           helpers.displayHover($('#navModuleBuilder'));
           browser.sleep('5000');
         // element(by.id('navModuleBuilder')).click();
          element(by.css('#navModuleBuilderMenu'));
          browser.sleep('3000');
          //element(by.cssContainingText('a','Subject')).click();
           element.all(by.cssContainingText('#nav-menu-msubject','Subject')).click();   
          
           //expect(browser.getCurrentUrl()).toEqual('https://chcxcrmsql008:8011/modules/create/subject');
           
           //element(by.css('.module-top-panel')).element(by.css('.module-info'));
           //element(by.model('module.module_name')).sendKeys('DemoSubjectModule14july');
           // browser.sleep("3000");
           // element(by.css('.module-params-panel'));
           // element(by.cssContainingText('.module-button-panel'));
           // element(by.id('chakri')).click();
           //element.all(by.cssContainingText('.module-button-panel','Properties')).click();
           //browser.sleep('2000');
           element(by.css('.modal')).isDisplayed();
		           browser.sleep("3000");
		           element(by.css('.modal-dialog')).element(by.css('.modal-content')).element(by.css('.props-table'));
		           console.log(generator.getSubjModuleName());
		           element(by.model('module.module_name')).sendKeys(generator.getSubjModuleName());
		           element(by.model('module_context.selected')).click();
		           helpers.displayHover($('.ui-select-match'));
		           browser.sleep('2000');
		           element(by.id('ui-select-choices-row-1-')).click();
		           browser.sleep('2000');
		           element(by.css('.btn-container')).click();
		           browser.sleep('2000');
		          
		          
           
          
           element(by.css('.module-canvas-outer-container')).element(by.css('.canvas-container')).element(by.css('.canvas-tab-list')).element(by.tagName('li'));
           element(by.id('tab-preview')).click();
           browser.sleep('3000');
           element(by.css('.module-params-panel'));
           element.all(by.css('.module-button-panel a')).get(4).click();

           browser.sleep('3000');
           browser.setLocation('modules');
           //expect(browser.getCurrentUrl()).toBe('https://chcxcrmsql008:8011/modules');
           element.all(by.css('.listview-tab-list li')).get(1).click();
           browser.sleep('10000');
           element(by.css('.modulelist-container')).element(by.tagName('div')).element(by.css('.myModules-container'))
           element(by.css('.listview-table')).element(by.tagName('tbody')).element(by.tagName('tr'));
           element.all(by.cssContainingText('td',generator.getSubjModuleName()));
           element(by.id('moduleActionsDropdown')).click();
           browser.sleep('5000');   
	};
};
module.exports = DataPairing;