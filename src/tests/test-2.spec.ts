import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/recipe/52854');
  await page.getByPlaceholder('Write a comment...').click();
  await page.getByPlaceholder('Write a comment...').fill('Very tasty!');
  await page.getByRole('button', { name: 'Post comment' }).click();
});
