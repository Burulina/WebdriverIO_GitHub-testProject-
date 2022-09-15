class MainPage {

    get emailInput () {
        return $('#user_email')
    }

    get searchInput () {
        return $('//input[contains(@class, "search-input")]')
    }
    
    get signUpButton () {
        return $('//button[contains(text(),"Sign up for GitHub") and @type]')
    }

    get signUpBottomButton () {
        return $('a[href*="/signup?ref_cta=Sign+up+for"]')
    }

    get signInMenuButton () {
        return $('[class*="HeaderMenu"] [href*="/login"]')
    }
    
    get freeTrialButton () {
        return $('//a[contains (text(),"Start a free trial")]')
    }
    
    get exploreMenuItem () {
        return $('//summary[contains (text(),"Explore")]')
    }
    
    get pricingMenuItem () {
        return $('header [href="/pricing"]')
    }
    
    get productMenuItem () {
        return $('//summary[contains (text(),"Product")]')
    }
    
    get footerCareersLink () {
        return $('a[href="/about/careers"]')
    }
    
    get ContibutionH2Header () {
        return $('//h2[text()="Make your contribution"]')
    }

    get buildHeader () {
        return $('h1[class*="h2-mktg"]')
    }

    async setValueEmailInput (value1) {
        await browser.waitUntil(
            async () => (await this.emailInput.isDisplayed()) === true,
            {
                timeout: 10000,
                interval: 1000,
                timeoutMsg: 'element is not displayed'
            }
        ); 
        await this.emailInput.setValue(value1);
    }

    async setValueSearchInput (value1) {
        await browser.waitUntil(
            async () => (await this.searchInput.isDisplayed()) === true,
            {
                timeout: 10000,
                interval: 1000,
                timeoutMsg: 'element is not displayed'
            }
        ); 
        await this.searchInput.setValue(value1);
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
    
    async moveToElement(element) {
        await element.moveTo();
    }

    }
    
    module.exports = new MainPage ();