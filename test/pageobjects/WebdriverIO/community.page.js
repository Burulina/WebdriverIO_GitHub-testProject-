class CommunityPage {

    get communityButton () {
        return $('[class*="navbar"][href*="support"]')
    }

    get stackOverHeaderH2 () {
        return $('//h2[text()="Stack Overflow"]')
    }

    async clickCommunityButton () {
        await this.communityButton.click();
    }

    isDisplayedStackOverHeaderH2 () {
        return this.stackOverHeaderH2.isDisplayed();
    }


}

module.exports = new CommunityPage ();