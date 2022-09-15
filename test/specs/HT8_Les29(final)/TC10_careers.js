const mainPage = require ('../../pageobjects/GitHub_site/main.page');
const careersPage = require('../../pageobjects/GitHub_site/careers.page');

describe('github.com: navigate to different enterpise plans and fill inputs on it', () => {
    it('open github.com site and navigate to enterpise plans page', async () => {
        await browser.url('https://github.com/');
        await mainPage.footerCareersLink.scrollIntoView();
        await mainPage.clickOnElem(mainPage.footerCareersLink);
        await careersPage.clickOnElem(careersPage.positionsLink);
        const posArray = await browser.$$('span[class*="text-left"]').map(elem => elem.getText());
        console.log ("Open positions: " + posArray);
    })

})