class DocsPage {

    get docsButton () {
        return $('[class*="navbar"][href*="gettingstarted"]')
    }

    async clickDocsButton () {
        await this.docsButton.click();
    }

}

module.exports = new DocsPage ();