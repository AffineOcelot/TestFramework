var LoginPage = require("./LoginPage");
var Generator = require("./generator");
var loginPage = new LoginPage();
var generator = new Generator();

var helpers = require('protractor-helpers');

var moduleBuilderHero = function(){	
	
	this.buildHero = function(){

           element(by.id('nav-modules')).click();
           helpers.displayHover($('#navModuleBuilder'));          
           element.all(by.cssContainingText('#nav-menu-mbody','Hero')).click();  
           element(by.model('module.module_name')).sendKeys(generator.getHeroModuleName());
           element(by.model('module_context.selected')).click();
           browser.sleep('1000');                     
           element(by.id('contextitemsel'));
           element(by.css('.ui-select-choices-group'));
           element(by.css('.ui-select-choices-row')).element(by.css('.ui-select-choices-row-inner')).element(by.cssContainingText('.contextindividualitem','Flight Carousel')).click();
           browser.sleep('2000');
           element(by.css('.btn-container')).click();
           browser.sleep('2000');
           //selecting image content builder
           element(by.css('.cb-list'));
           element.all(by.css('.cb-list-item button')).get(1).click();//for selecting image
          // element.all(by.id('cbimage'))
           browser.sleep('5000');
           
           //selecting button content builder
           element(by.css('.cb-list'));
           element.all(by.css('.cb-list-item button')).get(0).click();//for selecting button
           browser.sleep('5000');
           //selecting image placeholder in content block
           element(by.css('.canvas-container')).element(by.css('.tab-content')).element(by.id('tabcontent-canvas'));
           element(by.tagName('div')).element(by.css('.box-grey')).element(by.css('.dropzone'));
           element.all(by.css('#dropzone-list li')).get(0).click();
           //selecting propreties for image placeholder in content block
           element(by.css('#selectedProperties')).element(by.css('.sidebar-tab-list')).element(by.css('.parameters-panel-content'));
           element(by.tagName('span')).element(by.tagName('params-page')).element(by.css('.propPanel')).element(by.tagName('params-page'));
           element(by.tagName('tbody')).element(by.tagName('tr')).element(by.css('#propPanel-tabsection')).element(by.css('.prop-inner-table'));
           element(by.tagName('tbody')).element(by.tagName('tr')).element(by.tagName('td')).element(by.css('.tab-content'));
           element(by.css('.property-input')).element(by.css('.prop-input'));
           //selecting search from properties right content block
           element.all(by.css('.input-group-btn button')).get(1).click();
           // open modal and select first image and populate in image placeholder
           
           element(by.css('.modal')).element(by.css('.modal-dialog')).element(by.css('.modal-content')); 
           element(by.css('.modal-body')).element(by.css('.small-imagetiles-container'));
           element.all(by.css('.nogutter div .small-itile')).get(1);
           element(by.css('.btn-container')).element(by.tagName('button')).click();//clicking on 'use' button
                   
           browser.sleep('4000');
          
           element(by.css('.module-canvas-outer-container')).element(by.css('.canvas-container')).element(by.css('.canvas-tab-list')).element(by.tagName('li'));
           element(by.id('tab-preview')).click();
           browser.sleep('3000');
           element(by.css('.module-params-panel'));
           element.all(by.css('.module-button-panel a')).get(4).click();
           //element(by.cssContainingText('.module-button-panel','Save and Exit')).click();

           browser.sleep('5000');
           browser.setLocation('modules');
           //expect(browser.getCurrentUrl()).toBe('https://chcxcrmsql008:8011/modules');
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

module.exports = moduleBuilderHero;