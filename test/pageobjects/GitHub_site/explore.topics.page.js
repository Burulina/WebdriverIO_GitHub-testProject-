class ExploreTopicsPage {
 
    get topicsMenuItem () {
        return $('//*[contains (text(),"Topics") and @data-hydro-click]')
    }  
    
    get topicsHeading () {
        return $('//h1[contains (text(),"Topics")]')
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
    
    async isDisplayedTopicsHeading () {
        await this.topicsHeading.isDisplayed();
    }

    }
    
    module.exports = new ExploreTopicsPage ();