class SignInPage {

    get loginInput () {
        return $('#login_field')
    }

    get passwordInput () {
        return $('#password')
    }

    get SignInButton () {
        return $('[value="Sign in"]')
    }

    get forgotPassLink () {
        return $('[href="/password_reset"]')
    }

    async setValueUserInput (value1, value2) {
        await browser.waitUntil(
            async () => (await this.loginInput.isDisplayed()) === true,
            {
                timeout: 10000,
                interval: 1000,
                timeoutMsg: 'element is not displayed'
            }
        );
        await this.loginInput.setValue(value1);
        await this.passwordInput.setValue(value2);
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

module.exports = new SignInPage ();