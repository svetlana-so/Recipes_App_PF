import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('button', { name: "Let's get started" }).click();
  await page.getByPlaceholder('Enter your name').click();
  await page.getByPlaceholder('Enter your name').fill('Svetlana');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('button', { name: 'Explore the recipes' }).click();
  await expect(
    page.getByRole('heading', { name: 'Hello, Svetlana' })
  ).toHaveText('Hello, Svetlana');
  await page.getByPlaceholder('Search you recipe').click();
  await page.getByPlaceholder('Search you recipe').fill('cake');
  await expect(page.getByText('Recipes found:')).toHaveText(
    'Recipes found: 19'
  );
  await page.getByRole('img', { name: 'Pancakes', exact: true }).click();
  await page.getByPlaceholder('Write a comment...').click();
  await page.getByPlaceholder('Write a comment...').fill('tasty\n');
  await page.getByRole('button', { name: ' Back' }).click();
  await page.locator('.favorite-button > .favorite-button').first().click();
  await page
    .locator('div:nth-child(2) > .polaroid > div > .favorite-button')
    .click();
  await page
    .locator('div:nth-child(3) > .polaroid > div > .favorite-button')
    .click();
  await page
    .locator('div:nth-child(4) > .polaroid > div > .favorite-button')
    .click();
  await page.getByRole('link', { name: 'Favorites' }).click();
  await page.getByRole('button', { name: '' }).nth(3).click();
});
