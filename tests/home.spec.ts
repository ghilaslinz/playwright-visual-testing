/**import {test, expect} from '@playwright/test';


test('has title', async ({ page }) => {

        await page.goto('http://localhost:3000/');
        await expect(page.locator('h1')).toHaveText('Welcome to My Test Page');

});

test('find button and clicks', async ({ page }) => {
    
        await page.goto('http://localhost:3000/');
        await page.getByTestId('clickMe').click();
        await expect(page.getByTestId('message')).toHaveText("You clicked the button!");
});
 */