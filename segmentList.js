var helpers = require('protractor-helpers');
var segmentList = function() {

this.listSegment = function(){

        element(by.id('nav-campaigns')).click();
        helpers.displayHover($('#navAudience'));

        element(by.css('[ui-sref=".segmentsList({navbar: true})"]')).click();
        //element(by.cssContainingText('#nav-menu-slist','Segment List')).click();
        browser.sleep('5000');
      };
  };
   module.exports = segmentList;