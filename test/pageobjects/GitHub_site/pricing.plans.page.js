class PricingPlansPage {

    get joinFreeButton () {
        return $('[href*="/join?plan=free"]')
    }
    
    get plansSubmenuItem () {
        return $('//a[contains (text(),"Plans")]')
    }  
    
    async clickOnElem (elem) {
        await browser.waitUntil(
            async () => (await elem.isDisplayed()) === true,
            {
                timeout: 10000,
                interval: 1000,
                timeoutMsg: 'element is not displayed'
            }
        );
        await elem.click();
    }
    
    }
    
    module.exports = new PricingPlansPage ();