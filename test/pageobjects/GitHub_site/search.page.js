class SearchPage {
        
    get typeScriptLink () {
        return $('a[href*="/search?l=TypeScript"]');
    }

    get searchResultLink () {
        return $('li:nth-child(1) a[class="v-align-middle"]');
    }

    get url () {
        return browser.getUrl();
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
        
    module.exports = new SearchPage ();