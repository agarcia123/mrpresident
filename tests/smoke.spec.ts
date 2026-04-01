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

test('has a question title', async ({ page }) => {
  await page.goto('http://localhost:3000/');   
  // Expects page to have a question title
  await expect(page.locator('[data-testid="question-title"]'))
  .toContainText('If you were president how would you handle this situation');
});

test('has 3 options', async ({ page }) => {
  await page.goto('http://localhost:3000/');   
  // Expects page to have 3 options
  await expect(page.locator('[data-testid="option-0-radiobutton"]')).toBeVisible();
  await expect(page.locator('[data-testid="option-1-radiobutton"]')).toBeVisible();
  await expect(page.locator('[data-testid="option-2-radiobutton"]')).toBeVisible();
});

test('score updates when an option is selected', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  // Click the first option
  await page.click('[data-testid="option-0-radiobutton"]');
  // Expects score to be updated
  await expect(page.locator('[data-testid="score"]')).not.toContainText('Your score is: 0');
});