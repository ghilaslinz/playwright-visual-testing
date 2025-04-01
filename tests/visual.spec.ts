import { test, expect } from '@playwright/test';

test('card component snapshot', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 720 }); // Fixed viewport for consistency
  await page.goto('http://localhost:3000');

  // Wait for network + layout + fonts to settle
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(100); // Let layout breathe

  const card = page.getByTestId('profile-card');

  // Optional: scroll into view just to be sure
  await card.scrollIntoViewIfNeeded();

  await expect(card).toHaveScreenshot('card-light.png');
});

test('dark mode snapshot', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 720 });
  await page.goto('http://localhost:3000');

  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(100);

  await page.getByTestId('theme-toggle').click();
  await page.waitForTimeout(100); // Let dark mode render fully

  await expect(page).toHaveScreenshot('homepage-dark.png');
});
