const mainPage = require ('../../pageobjects/GitHub_site/main.page');
const enterprisePlanPage = require ('../../pageobjects/GitHub_site/enterprise.plan.page');
const enterprisePlanBusinessPage = require ('../../pageobjects/GitHub_site/enterprise.plan.business.page');
const enterprisePlanTrialPage = require ('../../pageobjects/GitHub_site/enterprise.plan.trial.page');

describe('github.com: navigate to different enterpise plans and fill inputs on it', () => {
    it('open github.com site and navigate to enterpise plans page', async () => {
        await browser.url('https://github.com/');
        await mainPage.freeTrialButton.scrollIntoView();
        await mainPage.clickOnElem(mainPage.freeTrialButton);
    })

    it('should navigate to enterprise business plan page and fill input fields', async () => {
        await enterprisePlanPage.clickOnElem(enterprisePlanPage.enterpriseCloudButton);
        await enterprisePlanBusinessPage.setValueUserInput('PVolod','webio@gmail.com','FT3412er' );
    })

    it('should navigate to enterprise trial plan page and fill input fields', async () => {
        await browser.back();
        await enterprisePlanPage.clickOnElem(enterprisePlanPage.enterpriseServerButton);
        await enterprisePlanTrialPage.setValueUserInput('PVolod','QAJun','webio@gmail.com','+380956789003');
        await enterprisePlanTrialPage.clickOnElem(enterprisePlanTrialPage.microsoftAzureRadioButton);
        await enterprisePlanTrialPage.clickOnElem(enterprisePlanTrialPage.questionsYesRadioButton);
        await enterprisePlanTrialPage.addValueQuestionsTextarea('How do you do?');
        await enterprisePlanTrialPage.clickOnElem(enterprisePlanTrialPage.acceptCheckBox);
        await browser.pause (1000);
    })

})