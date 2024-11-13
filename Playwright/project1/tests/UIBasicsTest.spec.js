const {test} = require('@playwright/test');


test('First Playwright test', async ({browser, page}) => {
    
    // chrome
    // const context = await browser.newContext();
    // const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/");

});