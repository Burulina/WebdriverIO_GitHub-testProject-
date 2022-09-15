// Пишем скрипт с помощью JavaScript+webdriver.io, который воспроизводит следующие действия:
// 1 Зайти на сайт https://webdriver.io
// 2 Кликнуть на кнопку сверху странички "API" (использовать локатор "li a[href="/docs/api.html"]")
// 3 Напечатать в "Terminal" Visual Studio Code текущий адрес в страке браузера( console.log(...))
// 4 Распечатать заглавие странички( использовать локатор ".postHeaderTitle")
// 5 Распечатать атрибут href элемента (использовать локатор "//*[text()="JSONWire protocol"]")
// 6 Напечатать текст "test is " в строке поиска (использовать локатор "'#search_input_react'")
// 7 Добавить к существующему тексту в строке поиска тест "DONE!"  (использовать локатор "'#search_input_react'")
// 8 Сделать паузу в тесте на 5 секунд.

describe('webdriver.io page: Home Task1(Lesson9)', () => {
    it('Tests for Home Task1', async () => {
        await browser.url('https://webdriver.io');
        const APIButton = await $('[class="navbar__items"] [href*="api"]');
        await APIButton.click();
        console.log("Current web page address is: " + await browser.getUrl());
        const headerH1 = await $('header h1');
        console.log ('Header of the page is: ' + await headerH1.getText());
        const jsonRef = await $('//a[text()="JSONWire protocol"]');
        console.log ('Href attribute is: ' + await jsonRef.getAttribute ('href'));
        const searchButton = await $('[class="DocSearch DocSearch-Button"]');
        await searchButton.click();
        await browser.pause(1000);
        let input = await $('#docsearch-input');
        await input.setValue('test is ');
        await input.addValue('DONE!');
        await browser.pause(5000);
    })
})