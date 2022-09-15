// 1. Перейти на страничку https://webdriver.io/docs/api.html
// 2. Открыть ссылку //*[text()="JSONWire protocol"] в новой Табе(используем getAttribute() и newWindow()) браузера
// 3. Переключиться на открытую табу
// 4. Проверить, что элемент 'strong a[href="/SeleniumHQ/selenium/wiki"]' видимый пользователю (isDisplayed). Результат вывести через consle.log()
// 5. Переключаемся назад на Табу 'https://webdriver.io/docs/api.html'
// 6. Используя метод waitUntil ждем пока текст, который содержиться в элементе ".postHeaderTitle" (используем метод getText())равен "API Docs"
// 7. Делаем скриншот элемента ".postHeaderTitle"
// 8. Печатаем результат выполнения команды isDisplayed() в консоль для локатора 'href="https://twitter.com/webdriverio"'
// 9. Печатаем результат выполнения команды isDisplayedInViewPort() в консоль для локатора 'href="https://twitter.com/webdriverio"'
// 10. Скролим к элементу 'href="https://twitter.com/webdriverio"'
// 11. Печатаем результат выполнения команды isDisplayed() в консоль для локатора 'href="https://twitter.com/webdriverio"'
// 12. Печатаем результат выполнения команды isDisplayedInViewPort() в консоль для локатора 'href="https://twitter.com/webdriverio"'
// 13. Печатаем результат выполнения команды isFocused для локатора href="/blog/"
// 14. Кликаем по локатору  href="/blog/"
// 15. Выводим результат выполнения команды isFocused для локатора href="/blog/"

describe('webdriver.io page: Home Task2(Lesson14)', () => {
    it('open webdriver.io site', async () => {
        await browser.url('https://webdriver.io/docs/api');
        await browser.pause (2000);
    })

    it('open link "JSONWire protocol" in new tab and switch on GitHub', async () => {
        const jsonRef = await $('//*[text()="JSONWire protocol"]');
        await browser.newWindow (await jsonRef.getAttribute ('href'));
        await browser.pause (2000);
        const wikiRef = await $('//*[text()="on the wiki"]');
        await browser.newWindow (await wikiRef.getAttribute('href'));
        await browser.pause (2000);
    })

    it('element "Home"([href="/SeleniumHQ/selenium/wiki"]) is displayed, return on webdriver.io page', async () => {
        const homeRef = await $('//a[text()="Home"]');
        let isDisplayed = await homeRef.isDisplayed();
        console.log('Is displayed?: ' + isDisplayed); //false - element hidden in dropdown box "Pages"
        await browser.switchWindow ('https://webdriver.io/docs/api');
    })

    it('wait until Header text is "Introduction" and make a screenshot', async () => {
        const headerH1 = await $('header h1');
        await headerH1.waitUntil(async function () {
            return (await this.getText()) === 'Introduction'
            }, {
                timeout: 3000,
                timeoutMsg: 'expected text did not display'
            });
        await headerH1.saveScreenshot ('headerscreen.png');    
    })

    it('twitter href is Displayed? or is DisplayedInViewport?', async () => {
        const twitterRef = await $('[href="https://twitter.com/webdriverio"]');
        let isDisplayed = await twitterRef.isDisplayed();
        console.log('Twitter href is displayed?: ' + isDisplayed); // true
        let isDisplayedViewport = await twitterRef.isDisplayedInViewport();
        console.log ('Twitter href is displayedInViewPort?: ' + isDisplayedViewport); // false
    })

    it('scroll to twitter href, href is Displayed? or is DisplayedInViewport?', async () => {
        const twitterRef = await $('[href="https://twitter.com/webdriverio"]');
        twitterRef.scrollIntoView();
        await browser.pause (2000);
        let isDisplayed = await twitterRef.isDisplayed();
        console.log('Twitter href is displayed?: ' + isDisplayed); // true
        let isDisplayedViewport = await twitterRef.isDisplayedInViewport();
        console.log ('Twitter href is displayedInViewPort?: ' + isDisplayedViewport); // true
    })

    it('blog button is focused? before and after clicking', async () => {
        const blogButton = await $('[class*="navbar"][href="/blog"]');
        let focuse = await blogButton.isFocused();
        console.log ('Blog button is focused?: ' + focuse); // false
        await blogButton.click();
        focuse = await blogButton.isFocused();
        console.log('Blog button is focused?: ' + focuse); // true
    })   
    
})