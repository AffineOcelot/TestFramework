var generator = function() {
    
    //Constants - could be taken from a test DB for multilevel access test
    this.subjModuleName = "E2EdemoSubj";
    this.heroModuleName = "E2EdemoHero";
    this.bannerModuleName = "E2EdemoBanner";
    this.termsModuleName = "E2EdemoTerms";
    this.segmentName = "E2EdemoSegment";
    this.templateName = "E2EdemoTemplate";
    this.campaignName = "E2EdemoCampaign";

    var date = new Date();
    var month = new Array();
    month[0] = "Jan";
    month[1] = "Feb";
    month[2] = "Mar";
    month[3] = "Apr";
    month[4] = "May";
    month[5] = "Jun";
    month[6] = "Jul";
    month[7] = "Aug";
    month[8] = "Sep";
    month[9] = "Oct";
    month[10] = "Nov";
    month[11] = "Dec";
    this.generatedVal = month[date.getMonth()]+date.getDate()+date.getHours()+date.getMinutes();
    
    
    this.getSubjModuleName=  function() {
        return this.subjModuleName+this.generatedVal;
    };
    this.getHeroModuleName=  function() {
        return this.heroModuleName+this.generatedVal;
    };
    this.getBannerModuleName=  function() {
        return this.bannerModuleName+this.generatedVal;
    };
    this.getTermsModuleName=  function() {
        return this.termsModuleName+this.generatedVal;
    };
    this.getSegmentName=  function() {
        return this.segmentName+this.generatedVal;
    };
    this.getTemplateName=  function() {
        return this.templateName+this.generatedVal;
    };
    this.getCampaignName=  function() {
        return this.campaignName+this.generatedVal;
    };
};

//This will export the module to Node.js runtime environment
module.exports = generator;