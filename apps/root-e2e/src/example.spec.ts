import { expect, test } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // The root path redirects to the home route, which sets the page title.
  await expect(page).toHaveTitle('Home');
});

test('renders the home route', async ({ page }) => {
  await page.goto('/');

  // Home route view renders its placeholder paragraph.
  await expect(page.locator('p')).toContainText('home works!');
});
