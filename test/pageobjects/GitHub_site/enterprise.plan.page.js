class enterprisePlanPage {
        
    get enterpriseCloudButton () {
        return $('a[href*="plan=business_plus"]');
    }

    get enterpriseServerButton () {
        return $('a[href*="trial?ref_cta"]');
    }

    async clickOnElem (elem) {
        await elem.click();
    }       
    
    }
        
    module.exports = new enterprisePlanPage ();