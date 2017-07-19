var LoginPage = require("./LoginPage");
var Generator = require("./generator");
var loginPage = new LoginPage();
var generator = new Generator();

var helpers = require('protractor-helpers');

function makeid( text ) {
  text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}


var segmentBuilder = function(text){
	this.segmentBuilderTemplate = function(text){
		var textGen = makeid();
		element(by.id('nav-campaigns')).click();
		helpers.displayHover($('#navAudience'));
		element(by.cssContainingText('#nav-menu-abody','Segment Builder')).click();
		browser.sleep("12000")
		//expect(browser.getCurrentUrl());
		element(by.model('models.dropzones.modelObjProps.segmentTitle')).sendKeys('NotForUse-'+textGen);
		element(by.className('ui-select-search')).click();
		element(by.className('ui-select-choices')).element(by.id('ui-select-choices-0')).element(by.id('ui-select-choices-row-0-')).click();
		element(by.className('ui-select-toggle')).click();
		element(by.id('ui-select-choices-row-1-')).click();
		element(by.id('cbcontainer_all')).click();
		element(by.cssContainingText('.ng-binding','Traveler Detail (1)')).click();
		element(by.cssContainingText('.attribute-item','Test Keys')).click();
		element(by.model('item.selected[0]')).sendKeys('1234');
		element(by.id('saveButton')).click();
		// browser.sleep('5000');
		// element(by.cssContainingText('.btn','Got it')).click();
		browser.sleep('5000');
	};
};
module.exports = segmentBuilder;
