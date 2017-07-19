var LoginPage = require("./LoginPage");
var Generator = require("./generator");
var loginPage = new LoginPage();
var generator = new Generator();

var helpers = require('protractor-helpers');

var templateBuilder = function(){
	
	this.buildTemplate = function(){
			element(by.id('nav-campaigns')).click();
          	helpers.displayHover($('#navTemplates'));
          
           element(by.cssContainingText('#nav-menu-cbuild','Template Builder')).click();
           var newPath = loginPage.getURL()+"newtemplates/create"   
           expect(browser.getCurrentUrl()).toEqual(newPath);
           element(by.model('TBC.template_name')).sendKeys(generator.getTemplateName());
           element.all(by.css('.cb-list-item')).get(0).click();

           element.all(by.css('.tb-dropzone')).get(0).click();
           browser.sleep('2000');
           element.all(by.className('panel-default')).get(0).click();
           browser.sleep('2000');
           element.all(by.className('tb-module-item')).get(0).click();

           browser.sleep('2000');
           element.all(by.css('.tb-dropzone')).get(1).click();
           element.all(by.className('panel-default')).get(0).click();
           browser.sleep('2000');
           element.all(by.className('tb-module-item')).get(0).click();

           element(by.cssContainingText('a','Preview')).click();
            browser.sleep('2000');
           //element(by.css('[ng-click="TBC.saveTemplate(true)"]')).click();

           browser.sleep('5000');

	};
};
module.exports = templateBuilder;