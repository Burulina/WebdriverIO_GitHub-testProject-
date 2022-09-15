const mainPage = require ('../../pageobjects/GitHub_site/main.page');
const signInPage = require ('../../pageobjects/GitHub_site/SignIn.page');
const userProfilePage = require ('../../pageobjects/GitHub_site/userprofile.page');

describe('github.com sign in', () => {
    it('open github.com site and navigate to sign in page', async () => {
        await browser.url('https://github.com/');
        await mainPage.clickOnElem(mainPage.signInMenuButton);
        await expect(browser).toHaveUrlContaining('login');
    })

    it('should fill Sign in input fields', async () => {
        await signInPage.setValueUserInput('pavlenko.vl25@gmail.com', 'TemporaryPass222');
        await signInPage.clickOnElem(signInPage.SignInButton);
    })

    it('should verificate user', async () => {
        await userProfilePage.clickOnElem(userProfilePage.viewProfileButton);
        await userProfilePage.clickOnElem(userProfilePage.yourProfileItem);
        await expect(browser).toHaveUrlContaining('PavlenkoVl');
        await expect(userProfilePage.usernameH1Header).toBeDisplayed();
        await expect(userProfilePage.usernameH1Header).toHaveText('Volodymyr Pavlenko');
        await expect(userProfilePage.adUsernameH1Header).toBeDisplayed();
        await expect(userProfilePage.adUsernameH1Header).toHaveText('PavlenkoVl');
    })

})