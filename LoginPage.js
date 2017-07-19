var LoginPage = function() {
    
    //Constants - could be taken from a test DB for multilevel access test
    const URL = "http://localhost:3000/";
    const USERNAME = "ukiran";
    const PASSWORD = "affine@1234";
    //const LOGIN_OK = "Login Successful";

    //Attributes - WebElements of the page
    
    this.loginModalElement = element(by.id('logIn'));
    this.usernameElement = element(by.model('user.username'));
    this.passwordElement = element(by.model('user.password'));
    this.submitElement = element(by.id('tryLogin'));
    //this.messageLabel = element(by.id("label_id_here"));

    //Methods - Actions performed at the page using the WebElements
    this.getLoginPage = function() {
        browser.get(URL);
    };
    this.login = function() {
        this.loginModalElement.click().then(this.usernameElement.sendKeys(USERNAME).
        then(this.passwordElement.sendKeys(PASSWORD).then(this.submitElement.click())));
    };
    this.getURL=  function() {
        return URL;
    };
};

//This will export the module to Node.js runtime environment
module.exports = LoginPage;
