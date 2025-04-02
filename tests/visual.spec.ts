import { test, expect } from '@playwright/test';

test('card component snapshot', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 720 });
  await page.goto('http://localhost:3000');

  // Ensure network and layout are stable
  await page.waitForLoadState('networkidle');
  await page.evaluate(() => {
    document.body.classList.add('no-animations');
  });

  await page.waitForTimeout(100); // Buffer for font/layout
  const card = page.getByTestId('profile-card');
  await card.scrollIntoViewIfNeeded();
  await expect(card).toHaveScreenshot('card-light.png', {
    threshold: 0.02,
  });
});

test('dark mode snapshot', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 720 });
  await page.goto('http://localhost:3000');

  await page.waitForLoadState('networkidle');
  await page.evaluate(() => {
    document.body.classList.add('no-animations');
  });

  await page.getByTestId('theme-toggle').click();
  await page.waitForTimeout(150); // Extra for UI transition

  await expect(page).toHaveScreenshot('homepage-dark.png', {
    threshold: 0.02, // ✅ allow up to 2% pixel difference
  });
});
