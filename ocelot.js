var helpers = require('protractor-helpers');

describe('Protractor Ocelot App Testing', function() {
    
        it('should login', function() {
           browser.driver.manage().window().maximize();
           browser.get('https://chcxcrmsql008:8011/');     
          
          element(by.id("logIn")).click();
          var inputUsername=element(by.id('inputUsername')).sendKeys('ukiran');
          expect(inputUsername.getAttribute('value')).toEqual('ukiran');
          

          var inputPassword=element(by.id("inputPassword")).sendKeys('affine@1234');              
          expect(inputPassword.getAttribute('value')).toEqual('affine@1234');
          
          element(by.id('tryLogin')).click();
  
        browser.sleep('5000');
        });

        it('Modules list Section', function() {
          element(by.id('nav-modules')).click();
          element(by.css('[ui-sref=".moduleList({navbar: true})"]')).click();
          
           expect(browser.getCurrentUrl()).toEqual('https://chcxcrmsql008:8011/modules');
           browser.sleep('5000');
           
        });

        it('Modules Builder Section', function() {
          element(by.id('nav-modules')).click();
          helpers.displayHover($('#navModuleBuilder'));
          
           element(by.cssContainingText('#nav-menu-mbody','Hero')).click();   
          
           expect(browser.getCurrentUrl()).toEqual('https://chcxcrmsql008:8011/modules/create/hero');
           element(by.model('module.module_name')).sendKeys('DemoHeroModule14july');
           element(by.model('module_context.selected')).click();
           helpers.displayHover($('.ui-select-match'));
           browser.sleep('2000');
           element(by.id('ui-select-choices-row-1-')).click();
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

           browser.sleep('10000');
        });

      
    
       it('Data Pairing Section', function() {
          element(by.id('nav-content')).click();
          browser.sleep('2000');
          element(by.id('nav-menu-cobuild')).click();          
          expect(browser.getCurrentUrl()).toEqual('https://ocelot2/connections');
          element(by.cssContainingText('.shadowed','Add New Connection')).click();          // 
          element(by.className('modal-lg')).isDisplayed();
          browser.sleep('2000');
          element(by.model('connection.name')).sendKeys('automation data pairing conn do not use');
          element(by.model('CMC.onlyAdvanced')).click();
          element(by.model('contentTable.selected')).click();
          
          element(by.className('ui-select-choices')).element(by.className('ui-select-choices-group')).element(by.id('ui-select-choices-row-0-')).click();
          browser.sleep('2000');
          element(by.className('nullable')).element(by.className('modprop-ddown')).element(by.className('ui-select-match')).element(by.className('ui-select-toggle')).element(by.className('ui-select-match-text')).click(); 
            
          browser.sleep('10000');
       
        });

        it('Connection Table Section', function() {
          element(by.id('nav-modules')).click();
          browser.sleep('2000');
          
          element.all(by.css('a[href*="/connectiontables"]')).click();
          expect(browser.getCurrentUrl()).toEqual('https://ocelot2/connectiontables');
          browser.pause();
        });

        
        it('Admin Section', function() {
          element(by.id('nav-admin-ddown')).click();
          browser.sleep('10000');
        });


});