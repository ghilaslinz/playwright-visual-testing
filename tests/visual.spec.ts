import { test, expect } from '@playwright/test';

test('card component snapshot', async ({ page }) => {
    await page.goto('http://localhost:3000');
    const card = page.getByTestId('profile-card');
    await expect(card).toHaveScreenshot('card-light.png');
  });
  
  test('dark mode snapshot', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.getByTestId('theme-toggle').click(); // toggle dark mode
    await expect(page).toHaveScreenshot('homepage-dark.png');
  });
  