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
  .toContainText('Welcome Mr President . This is a simple challenge game of simple questions. You will be given 5 questions about current events and you will have to choose the best answer.Each answer is worth some points. As you answer question you can see your score. Good luck!');
});

test('has a prompt to enter your name', async ({ page }) => {
  await page.goto('http://localhost:3000/');   
  // Expects page to have a name prompt
  await expect(page.locator('[data-testid="name-prompt"]'))
  .toContainText('Please enter your name to start the game');
});

test('has 3 options after the name is entered', async ({ page }) => {
  await page.goto('http://localhost:3000/');   
  // Enter a name
  await page.fill('[data-testid="name-input"]', 'John Doe');
  // Click the name button
  await page.click('[data-testid="name-button"]');
  // Expects page to have 3 options
  await expect(page.locator('[data-testid="option-0-radiobutton"]')).toBeVisible();
  await expect(page.locator('[data-testid="option-1-radiobutton"]')).toBeVisible();
  await expect(page.locator('[data-testid="option-2-radiobutton"]')).toBeVisible();
});

test('score updates when an option is selected', async ({ page }) => {
  await page.goto('http://localhost:3000/');
   await page.fill('[data-testid="name-input"]', 'John Doe');
  // Click the name button
  await page.click('[data-testid="name-button"]');
  // Click the first option
  await page.click('[data-testid="option-0-radiobutton"]');
  // Expects score to be updated
  await expect(page.locator('[data-testid="score"]')).not.toContainText('Your score is: 0');
});