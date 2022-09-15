const mainPage = require ('../../pageobjects/GitHub_site/main.page');
const signInPage = require ('../../pageobjects/GitHub_site/SignIn.page');
const passwordResetPage = require ('../../pageobjects/GitHub_site/password.reset.page');

describe('github.com reset password', () => {
    it('open github.com site and navigate to sign in page', async () => {
        await browser.url('https://github.com/');
        await mainPage.clickOnElem(mainPage.signInMenuButton);
    })

    it('should click forgot password link and fill email', async () => {
        await signInPage.clickOnElem(signInPage.forgotPassLink);
        await passwordResetPage.setValueEmailInput('workaholic@gmail.com');
        await browser.pause (2000);
    })

})