class UserProfilePage {

    get viewProfileButton () {
        return $('summary[aria-label="View profile and more"]')
    }

    get yourProfileItem () {
        return $('//a[@class="dropdown-item" and contains(text(),"Your profile")]')
    }

    get usernameH1Header () {
        return $('h1 [class*="p-name vcard-fullname"]')
    }

    get adUsernameH1Header () {
        return $('h1 [class*="p-nickname vcard-username"]')
    }

    async clickOnElem (elem) {
        await elem.click();
    }

}

module.exports = new UserProfilePage ();