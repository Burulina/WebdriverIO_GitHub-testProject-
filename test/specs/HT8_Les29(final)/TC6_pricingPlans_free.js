const mainPage = require ('../../pageobjects/GitHub_site/main.page');
const pricingPlansPage = require ('../../pageobjects/GitHub_site/pricing.plans.page');
const pricingPlansFreePage = require ('../../pageobjects/GitHub_site/pricing.plans.free.page');

describe('github.com: go to Pricing -> plans -> Join fo free and fill input fields', () => {
    it('open github.com site', async () => {
        await browser.url('https://github.com/');
    })

    it('should navigate to pricingPlansFreePage', async () => {
        await(await $("//html")).click();
        await mainPage.clickOnElem(mainPage.pricingMenuItem);
        await pricingPlansPage.clickOnElem(pricingPlansPage.joinFreeButton);
    })

    it('should fill User input fields', async () => {
        await pricingPlansFreePage.setValueUserInput('Volodymyr3456', 'webiotest@gmail.com', 'Pass2517WORD');
        await browser.pause (2000);
    })

})