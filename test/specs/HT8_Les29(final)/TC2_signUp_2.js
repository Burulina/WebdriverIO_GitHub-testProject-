const mainPage = require ('../../pageobjects/GitHub_site/main.page');
const signUpPage = require ('../../pageobjects/GitHub_site/signUp.page');

describe('github.com sign up', () => {
    it('open github.com site and navigate to sign up page', async () => {
        await browser.url('https://github.com/');
        await mainPage.ContibutionH2Header.scrollIntoView();  
        await mainPage.clickOnElem(mainPage.signUpBottomButton);
        await expect(browser).toHaveUrlContaining('signup');
    })

    it('should fill registration input fields and check verification message', async () => { 
        await signUpPage.setValueEmailInput(randomStr(10)+getEmailEnd());
        await signUpPage.waitforEnabled(signUpPage.continueEmailButton);
        await signUpPage.clickOnElem(signUpPage.continueEmailButton);

        await signUpPage.setValuePasswordInput(randomStr(15));
        await signUpPage.waitforEnabled(signUpPage.continuePasswordButton);
        await signUpPage.clickOnElem(signUpPage.continuePasswordButton);

        await signUpPage.setValueUserNameInput(randomStr(7));
        await signUpPage.waitforEnabled(signUpPage.continueUsernameButton);
        await signUpPage.clickOnElem(signUpPage.continueUsernameButton);
    
        await signUpPage.setValueUpdatesQuizInput('y');
        await signUpPage.waitforEnabled(signUpPage.continuePasswordButton);
        await browser.pause (2000);
        await signUpPage.clickOnElem(signUpPage.continueUpdatesQuizButton);
        await expect(signUpPage.verifyyoraccountLabel).toBeDisplayed();
        await expect(signUpPage.verifyyoraccountLabel).toHaveText('Verify your account');
        await browser.pause (2000);
    })

})

function randomStr(length) {
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let text = "";
    for(let i=0; i < length; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

function getEmailEnd() {   
    const endings = ["ukr.net", "outlook.com", "yahoo.com", "gmail.com"];
    return "@" + endings[rand(0, endings.length - 1)];
}

function rand(min, max) {
    return (min + Math.random() * (max - min + 1)) | 0
}