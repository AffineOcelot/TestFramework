var LoginPage = require("./LoginPage");
var Generator = require("./generator");
var ModuleList = require("./moduleList");
var ModuleBuilder = require("./moduleBuilder");
var TemplateBuilder = require("./templateBuilder");
var DataPairing = require("./dataPairing");
var ConnectionTables = require("./connectionTables");
var SegmentBuilder = require("./segmentBuilder");
var SegmentList = require("./segmentList");


var loginPage = new LoginPage();
var generator = new Generator();
var templateBuilder = new TemplateBuilder();
var moduleList = new ModuleList();
var moduleBuilder = new ModuleBuilder();
var dataPairing = new DataPairing();
var connectionTables = new ConnectionTables();
var segmentBuilder = new SegmentBuilder();
var segmentList = new SegmentList();
var helpers = require('protractor-helpers');
console.log(loginPage);

describe('Ocelot login', function() {
	describe('Login test', function() {

				it('Should login and verify success', function() {
        	loginPage.getLoginPage();
        	 browser.sleep('2000');
        	loginPage.login();
        });

        it('should open module list page',function(){

        	moduleList.listModule();
        });

        it('should open module builder subject page',function(){
        	dataPairing.buildSubject();
        });

        it('should open module builder page',function(){
        	moduleBuilder.buildHero();
        });

	  	 	it('should navigate to template builder section', function() {
	  	 		templateBuilder.buildTemplate();
        });

				it('should navigate to Segment builder section', function() {
	  	 		segmentBuilder.segmentBuilderTemplate();
        });

				it('should navigate to segment list section', function() {
	  	 		segmentList.segmentListTemplate();
        });
    });
});
