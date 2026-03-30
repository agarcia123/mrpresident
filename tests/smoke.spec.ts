import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/mrpresident/);
});

test('has a greeting section', async ({ page }) => {
  await page.goto('http://localhost:3000/');   
  // Expects page to have a greeting
  await expect(page.locator('[data-testid="greeting"]'))
  .toContainText('Welcome to the Mr President challenge, you will be given 5 questions about current events and you will have to choose the best answer, good luck!');
});
