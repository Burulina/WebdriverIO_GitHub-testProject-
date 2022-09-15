const apiPage = require ('../pageobjects/WebdriverIO/api.page');
const communityPage = require ('../pageobjects/WebdriverIO/community.page');
const versionsPage = require ('../pageobjects/WebdriverIO/versions.page');

describe('webdriver.io page: Home Task7(Les_25)', () => {
    it('open webdriver.io site', async () => {
        await browser.url('https://webdriver.io');
        await browser.pause (2000);
    })

    it('should click apiButton', async () => {
        await apiPage.clickApiButton();
        await browser.pause (2000);
    })

    it('should click contributeButton', async () => {
        await apiPage.clickContributeButton();
        await browser.pause (2000);
    })

    it('should click communityButton', async () => {
        await communityPage.clickCommunityButton();
        await browser.pause (2000);
        console.log ("Stack Overflow Header is displayed?: " + await (communityPage.isDisplayedStackOverHeaderH2()));
    })

    it('should click versionsButton', async () => {
        await versionsPage.clickVersionsButton();
        await browser.pause (2000);
    })

    it('should click docV5Link', async () => {
        await versionsPage.clickDocV5Link();
        await browser.pause (2000);
    })

})