class ApiPage {

    get apiButton () {
        return $('[class*="navbar"][href*="api"]')
    }

    get contributeButton () {
        return $('[href="#contribute"][class*="table-of-contents"]')
    }   

    async clickApiButton () {
        await this.apiButton.click();
    }

    async clickContributeButton () {
        await this.contributeButton.click();
    }

}

module.exports = new ApiPage ();