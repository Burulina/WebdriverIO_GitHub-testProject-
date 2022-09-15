class SignUpPage {

    get emailInput () {
        return $('#email')
    }

    get passwordInput () {
        return $('#password')
    }

    get usernameInput () {
        return $('#login')
    }

    get updatesQuizInput () {
        return $('#opt_in')
    }

    get continueEmailButton () {
        return $('button[data-optimizely-event*="email"]')
    }

    get continuePasswordButton () {
        return $('button[data-optimizely-event*="password"]')
    }

    get continueUsernameButton () {
        return $('button[data-optimizely-event*="username"]')
    }

    get continueUpdatesQuizButton () {
        return $('button[data-optimizely-event*="opt-in"]')
    }

    get verifyyoraccountLabel () {
        return $('//div[@class and contains(text(),"Verify your account")]')
    }

    async setValueEmailInput (value) {
        await browser.waitUntil(
            async () => (await this.emailInput.isDisplayed()) === true,
            {
                timeout: 10000,
                interval: 1000,
                timeoutMsg: 'element is not displayed'
            }
        );
        await this.emailInput.setValue(value);
    }

    async setValuePasswordInput (value) {
        await browser.waitUntil(
            async () => (await this.passwordInput.isDisplayed()) === true,
            {
                timeout: 10000,
                interval: 1000,
                timeoutMsg: 'element is not displayed'
            }
        );
        await this.passwordInput.setValue(value);
    }

    async setValueUserNameInput (value) {
        await browser.waitUntil(
            async () => (await this.usernameInput.isDisplayed()) === true,
            {
                timeout: 10000,
                interval: 1000,
                timeoutMsg: 'element is not displayed'
            }
        );
        
        await this.usernameInput.setValue(value);
    }

    async setValueUpdatesQuizInput (value) {
        await browser.waitUntil(
            async () => (await this.updatesQuizInput.isDisplayed()) === true,
            {
                timeout: 10000,
                interval: 1000,
                timeoutMsg: 'element is not displayed'
            }
        );      
        await this.updatesQuizInput.setValue(value);
    }

    async clickOnElem (elem) {
        await elem.click();
    } 

    async waitforEnabled (elem) {
        await browser.waitUntil(
            async () => (await elem.isEnabled()) === true,
            {
                timeout: 5000,
                interval: 1000,
                timeoutMsg: 'element isn not enabled'
            }
        );
    }

}

module.exports = new SignUpPage ();