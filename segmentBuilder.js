var LoginPage = require("./LoginPage");
var Generator = require("./generator");
var loginPage = new LoginPage();
var generator = new Generator();
var helpers = require('protractor-helpers');

var segmentBuilder = function(){

     this.buildsegment = function(){

           element(by.id('nav-campaigns')).click();
           helpers.displayHover($('#navAudience'));
           element(by.cssContainingText('#nav-menu-abody','Segment Builder')).click();
           
           expect(browser.getCurrentUrl());
           browser.sleep("1000");
           element(by.model('models.dropzones.modelObjProps.segmentTitle')).sendKeys(generator.getSegmentName());
           browser.sleep("2000");
           element(by.className('ui-select-search')).click();
          // browser.sleep("2000");
           element(by.model('segment_categories.selected')).click();
           browser.sleep('1000');
           element(by.css('.ui-select-match')).element(by.css('.ui-select-choices-group')).element(by.css('.ui-select-choices-row'));
           element(by.cssContainingText('.ui-select-choices-row-inner','Discover')).click();
        //    element(by.className('ui-select-toggle')).click();
        //    browser.sleep("2000");
        //    element(by.id('ui-select-choices-row-1-')).click();
           //element(by.id('cbcontainer_all')).click();
           browser.sleep("2000");
           element(by.cssContainingText('.ng-binding','Traveler Detail (1)')).click();
           element(by.cssContainingText('.attribute-item','Test Keys')).click();
           browser.sleep("2000");
           element(by.model('item.selected[0]')).sendKeys('90');
        //    browser.sleep("2000");
        //    element(by.cssContainingText('.ng-binding','Pre Trip (1)')).click();
        //    element(by.cssContainingText('.attribute-item','trip pretrip 1 days')).click();
        //    browser.sleep("2000");
        //    element(by.model('item.selected[1]')).sendKeys('10');
        //    browser.sleep("2000");
           //element(by.id('saveButton')).click();
           element(by.cssContainingText('.segment-button-panel','Save and Exit')).click();
           browser.setLocation('segments');
           element(by.css('#modlist-pills'));
           element.all(by.css('.listview-tab-list li')).get(1).click();
           browser.sleep('10000');
           element(by.css('.segmentlist-container')).element(by.tagName('div')).element(by.tagName('div')).element(by.tagName('div'));
           element(by.css('.segment-table')).element(by.tagName('tbody')).element(by.tagName('tr'));
           element.all(by.cssContainingText('td',generator.getHeroModuleName()));
           element(by.id('segmentActionsDropdown')).click();
           helpers.displayHover($('ul'));
           //element(by.cssContainingText('.ng-click'))
           element(by.css('[ng-click="SLC.getCount(segment.SegmentID)"]')).click();
           //element(by.id('lock-module')).click();
           browser.sleep('5000');
           element(by.css('[ng-click="$dismiss()"]')).click();
           browser.sleep('5000');
     }
}
module.exports =segmentBuilder;