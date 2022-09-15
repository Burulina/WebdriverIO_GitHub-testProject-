class VersionsPage {

    get versionsButton () {
        return $('[class*="navbar"][href*="versions"]')
    }

    get docV5Link () {
        return $('[href*="v5.webdriver"]')
    }   

    async clickVersionsButton () {
        await this.versionsButton.click();
    }

    async clickDocV5Link () {
        await this.docV5Link.click();
    }

}

module.exports = new VersionsPage ();