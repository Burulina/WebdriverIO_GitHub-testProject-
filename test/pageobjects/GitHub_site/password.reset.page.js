class PassworResetPage {

    get emailInput () {
        return $('#email_field')
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

}

module.exports = new PassworResetPage ();