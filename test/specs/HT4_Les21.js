describe('github.com page: Home Task4(Lesson21)', () => {
    it('Test case 1: test functionality of HomePage button ', async () => {
        await browser.url('https://github.com/');       
        await (await $('footer [href="/team"]').click());
        await expect(browser).toHaveUrl('https://github.com/team');
        await expect(await $('//h4[text()="GitHub for Teams"]')).toBeDisplayed();
        await (await $('a[aria-label="Homepage"]').click());
        await expect(browser).toHaveUrl('https://github.com/');
        await expect(await $('h1[class*="h2-mktg"]')).toBeDisplayed();
        await (await $('footer [href="/enterprise"]').click());
        await expect(browser).toHaveUrl('https://github.com/enterprise');
        await expect(await $('//h4[text()="GitHub for enterprises"]')).toBeDisplayed();
        await (await $('a[aria-label="Homepage"]').click());
        await expect(browser).toHaveUrl('https://github.com/');
        await expect(await $('h1[class*="h2-mktg"]')).toBeDisplayed();
    })

    it('Test case 2: test navigation to twitter from footer', async () => {
        await (await $('a[href="https://twitter.com/github"]').scrollIntoView());
        await (await $('a[href="https://twitter.com/github"]').click());
        await expect(browser).toHaveUrl('https://twitter.com/github');
        await expect(await $('a[href="/github/photo"]')).toBeDisplayed();
    })

    it('Test case 3: test navigation to download github mobile app page', async () => {
        await browser.url('https://github.com/');
        await (await $('a[href="/mobile"]').click());
        await expect(browser).toHaveUrl('https://github.com/mobile');
        await (await $('[class*="mobile-hero-text-container"] a[href*="github.android"]').click());
        await expect(browser).toHaveUrl('https://play.google.com/store/apps/details?id=com.github.android');
        await expect(await $('//h1')).toHaveText('GitHub');
    })

    it('Test case 4: test searching for apps in github marketplace', async () => {
        await browser.url('https://github.com/');
        await (await $('[href="/marketplace/actions"]').click());
        await expect(browser).toHaveUrl('https://github.com/marketplace?type=actions');
        await (await $('input[placeholder="Search for apps and actions"]').addValue('slack'));
        await browser.pause(2000);
        await browser.keys(['Enter']);
        await expect(browser).toHaveUrlContaining('slack');
        await expect(await $('a:nth-child(1) [class="h4"]')).toHaveTextContaining('slack');
    })

    it('Test case 5: try contact sales with valid credentials and without passing robot verification', async () => {
        await browser.url('https://github.com/');
        await (await $('//h2[text()="Make your contribution"]').scrollIntoView());
        await (await $('a[href*="https://github.com/enterprise/contact?ref_page=/&ref_cta=Contact%20Sales&ref_loc=footer"]').click());
        await expect(browser).toHaveUrlContaining('github.com/enterprise/contact?ref_page');
        await (await $('#site_enterprise_contact_request_full_name').addValue('Volod Pavl'));
        await (await $('#site_enterprise_contact_request_company').addValue('QA enterprise'));
        await (await $('#site_enterprise_contact_request_email').addValue('worker@gmail.com'));
        await (await $('#site_enterprise_contact_request_phone').addValue('+380956789912'));
        await (await $('#site_enterprise_contact_request_request_details').addValue('How do yo do?'));
        await browser.pause(2000);
        await expect(await $('button[class*="enterprise-contact-form-submit"]')).toBeDisabled();
    })

})
