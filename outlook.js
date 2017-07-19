describe('Protractor Ocelot App Testing', function() {
    
        it('should login outlook', function() {
                browser.driver.manage().window().maximize();
                browser.driver.get('https://outlook.office.com/owa/?realm=expedia.com');  

                browser.driver.findElement(by.id('userNameInput')).sendKeys('sea\cdittakavi');
                browser.driver.findElement(by.id('passwordInput')).sendKeys('sears@1234');
                browser.driver.findElement(by.id('submitButton')).click();          
                browser.pause();

                //ms-Icon--outlook
        });

        
});
