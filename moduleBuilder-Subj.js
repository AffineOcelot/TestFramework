var LoginPage = require("./LoginPage");
var Generator = require("./generator");
var loginPage = new LoginPage();
var generator = new Generator();
var helpers = require('protractor-helpers');

var moduleBuilderSub = function(){
	

	this.buildSubject = function(){
		   element(by.id('nav-modules')).click();
           helpers.displayHover($('#navModuleBuilder'));
           browser.sleep('5000');
         // element(by.id('navModuleBuilder')).click();
           element(by.css('#navModuleBuilderMenu'));
           browser.sleep('3000');
          //element(by.cssContainingText('a','Subject')).click();
           element.all(by.cssContainingText('#nav-menu-msubject','Subject')).click();   
          
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
          
           element.all(by.css('.listview-tab-list li')).get(1).click();
           browser.sleep('10000');
           element(by.css('.modulelist-container')).element(by.tagName('div')).element(by.css('.myModules-container'))
           element(by.css('.listview-table')).element(by.tagName('tbody')).element(by.tagName('tr'));
           element.all(by.cssContainingText('td',generator.getHeroModuleName()));
           element(by.id('moduleActionsDropdown')).click();
           helpers.displayHover($('ul'));
           element(by.id('lock-module')).click();
           browser.sleep('5000');
           element(by.id('moduleActionsDropdown')).click();
           helpers.displayHover($('ul'));
           element(by.id('publish-module')).click();
           browser.sleep('5000');
           element(by.id('modalpublishcont')).all(by.tagName('input')).get(1).click();
           element(by.css('.modal-footer')).element(by.css('.btn-container')).element(by.css('.publish-campaign')).click();
           browser.sleep('5000');
	};
};
module.exports = moduleBuilderSub;