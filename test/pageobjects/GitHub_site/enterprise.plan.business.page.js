class enterprisePlanBusinessPage {
       
    get usernameInput () {
        return $('#user_login');
    }

    get emailInput () {
        return $('#user_email');
    }

    get passwordInput () {
        return $('#user_password');
    }

    async setValueUserInput (value1, value2, value3) {
        await this.usernameInput.setValue(value1);
        await this.emailInput.setValue(value2);
        await this.passwordInput.setValue(value3);
    }
      
    }
        
    module.exports = new enterprisePlanBusinessPage ();