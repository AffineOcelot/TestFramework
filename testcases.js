var LoginPage = require("./LoginPage");
var Generator = require("./generator");
var ModuleList = require("./moduleList");
var ModuleBuilderHero = require("./moduleBuilder-Hero");
var ModuleBuilderSub = require("./moduleBuilder-Subj");
var SegmentList = require('./segmentList');
var SegmentBuilder = require('./segmentBuilder');
// var TemplateBuilder = require("./templateBuilder");
// var DataPairing = require("./dataPairing");
// var ConnectionTables = require("./connectionTables");


var loginPage = new LoginPage();
var generator = new Generator();

var moduleList = new ModuleList();
var moduleBuilderHero = new ModuleBuilderHero();
var moduleBuilderSub = new ModuleBuilderSub();
var segmentList = new SegmentList();
var segmentBuild = new SegmentBuilder();
//var templateBuilder = new TemplateBuilder();
// var dataPairing = new DataPairing();
// var connectionTables = new ConnectionTables();
var helpers = require('protractor-helpers');
console.log(loginPage);

describe('Ocelot login', function() {
	 
        it('Should login and verify success', function() {
        	loginPage.getLoginPage();
        	browser.sleep('2000');
        	loginPage.login();
        	
        });

        it('should open module list page', function(){
        	moduleList.listModule();
        });
        
        it('should open module builder -- subject page', function(){        	
        	moduleBuilderSub.buildSubject();
        	
        });

        it('should open module builder --hero page', function(){
        	moduleBuilderHero.buildHero();
        });

        it('should open segment list', function(){
        	segmentList.listSegment();
        });

        it('should open segment builder', function(){
        	segmentBuild.buildsegment();
        });
        
        // it('should navigate to template builder section', function() {
        // templateBuilder.buildTemplate();          	
        // });
  
});