class enterprisePlanTrialPage {
       
    get nameInput () {
        return $('#contact_request_name');
    }

    get companyInput () {
        return $('#contact_request_organization_name');
    }

    get emailInput () {
        return $('#contact_request_email');
    }

    get phoneInput () {
        return $('#contact_request_phone');
    }

    get microsoftAzureRadioButton () {
        return $('#contact_request_instance_type_azure');
    }

    get questionsYesRadioButton () {
        return $('#questions_yes');
    }

    get acceptCheckBox () {
        return $('#contact_request_agreed_to_terms');
    }

    get questionsTextarea () {
        return $('#questions-list');
    }

    async setValueUserInput (value1, value2, value3, value4) {
        await this.nameInput.setValue(value1);
        await this.companyInput.setValue(value2);
        await this.emailInput.setValue(value3);
        await this.phoneInput.setValue(value4);
    }

    async addValueQuestionsTextarea (value) {
        await this.questionsTextarea.addValue(value);
    }

    async clickOnElem (elem) {
        await elem.click();
    }   
      
    }
        
    module.exports = new enterprisePlanTrialPage ();