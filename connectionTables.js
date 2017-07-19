var LoginPage = require("./LoginPage");
var loginPage = new LoginPage();
var helpers = require('protractor-helpers');

var ConnectionTables = function(){
	this.connectTables = function(){

		it('Connection Table Section', function() {
          element(by.id('nav-modules')).click();
          browser.sleep('2000');
          
          element.all(by.css('a[href*="/connectiontables"]')).click();
          var newPath = loginPage.getURL()+"connectiontables"   
          expect(browser.getCurrentUrl()).toEqual(newPath);
        });

	};
};
module.exports = ConnectionTables;