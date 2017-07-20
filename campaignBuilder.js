var LoginPage = require("./LoginPage");
var Generator = require("./generator");
var loginPage = new LoginPage();
var generator = new Generator();
var helpers = require('protractor-helpers');

var campaignBuilder = function(){
	this.campaignBuilderTemplate = function(){
		element(by.id('nav-campaigns')).click();
		browser.sleep('1000')
		element(by.cssContainingText('#nav-menu-cbuild','Campaign Builder')).click();
		element(by.model('campaign_name')).sendKeys(generator.getCampaignName());
		element(by.cssContainingText('.btn','Props')).click();
		browser.sleep('2000');
		element(by.cssContainingText('.ui-select-placeholder','Select or search for a sub channel')).click();
		element(by.cssContainingText('.ng-binding','MR')).click();
		browser.sleep('2000');
		element(by.cssContainingText('.ui-select-placeholder','Select or search for a sender profile')).click();
		element(by.cssContainingText('.ng-binding','Expedia')).click();
		browser.sleep('2000');
		element(by.cssContainingText('.ui-select-placeholder','Select or search for a code')).click();
		element(by.cssContainingText('.ng-binding','$99 Store')).click();
		browser.sleep('2000');
		element(by.cssContainingText('.ui-select-placeholder','Select or search for a owner')).click();
		element(by.cssContainingText('.ng-binding','Chakradhar Dittakavi')).click();
		browser.sleep('2000');
		element(by.cssContainingText('.btn-success','Continue')).click();
		browser.sleep('2000');
		element(by.cssContainingText('#updateCampaign','Create')).click();
		browser.sleep("6000");
		browser.refresh();
		element(by.id('nav-campaigns')).click();
		browser.sleep('1000')
		element(by.cssContainingText('#nav-menu-clist','Campaign List')).click();
		browser.sleep('1000');
		element(by.id('moduleActionsDropdown-0')).click();
		element(by.id('viewCamp-0')).click();
		browser.sleep('10000')

		// //expect(browser.getCurrentUrl());
		// element(by.model('models.dropzones.modelObjProps.segmentTitle')).sendKeys('NotForUse-'+textGen);
		// element(by.className('ui-select-search')).click();
		// element(by.className('ui-select-choices')).element(by.id('ui-select-choices-0')).element(by.id('ui-select-choices-row-0-')).click();
		// element(by.className('ui-select-toggle')).click();
		// element(by.id('ui-select-choices-row-1-')).click();
		// element(by.id('cbcontainer_all')).click();
		// element(by.cssContainingText('.ng-binding','Traveler Detail (1)')).click();
		// element(by.cssContainingText('.attribute-item','Test Keys')).click();
		// element(by.model('item.selected[0]')).sendKeys('1234');
		// element(by.id('saveButton')).click();
		// browser.sleep('5000');
		// element(by.cssContainingText('.btn','Got it')).click();
		browser.sleep('5000');
	};
};
module.exports = campaignBuilder;
