var LoginPage = require("./LoginPage");
var Generator = require("./generator");
var loginPage = new LoginPage();
var generator = new Generator();

var helpers = require('protractor-helpers');

var segmentList = function(){

	this.segmentListTemplate = function(){
		element(by.id('nav-campaigns')).click();
		helpers.displayHover($('#navAudience'));
		 element(by.cssContainingText('#nav-menu-slist','Segment List')).click();
		element(by.id('tab-allSegs')).click();
		element(by.cssContainingText('.category-label','Discover')).click();
		browser.sleep('2000')
		element(by.id('segmentActionsDropdown-0')).click();
		browser.sleep('2000')
		element(by.id('getCount-0')).click();
		browser.sleep('2000')
		element(by.cssContainingText('.btn','Got it')).click();
		browser.sleep("2000");

		element(by.id('segmentActionsDropdown-0')).click();
		browser.sleep('2000')
		element(by.id('listView-0')).click();
		browser.sleep("2000");

		element(by.id('nav-campaigns')).click();
		helpers.displayHover($('#navAudience'));
		 element(by.cssContainingText('#nav-menu-slist','Segment List')).click();
		browser.sleep('2000')
		element(by.id('segmentActionsDropdown-0')).click();
		browser.sleep('2000')
		element(by.id('deleteSeg-0')).click();
		browser.sleep('4000')
		element(by.cssContainingText('.btn','Yes')).click();

		browser.sleep('10000')
	};
};
module.exports = segmentList;
