import { test, expect } from '@playwright/test';

test('Test User Experience', async ({ page }) => {
  try {
    await page.goto('http://localhost:5173/');
    // Your test logic here
  } catch (error) {
    console.error('Error navigating to the URL:', error);
    // Handle the error or fail the test as needed
  }
  const userName = await page.evaluate(() =>
    localStorage.getItem('USER_NAME_KEY')
  );

  if (!userName) {
    await page.getByRole('button', { name: "Let's get started" }).click();
  } else {
    await expect(page.getByTestId('welcome-page')).toHaveText(
      'Discover your favorite recipes'
    );
  }
});

test('Test log in function', async ({ page }) => {
  await page.goto('http://localhost:5173/login');
  await page.getByPlaceholder('Enter your name').click();
  await page.getByPlaceholder('Enter your name').fill('Svetlana');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page.getByTestId('user-name-for-test')).toHaveText('Svetlana');
});

test('test searching for the recipes, leave comments and add favorite recipes', async ({
  page,
}) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('button', { name: "Let's get started" }).click();
  await page.getByPlaceholder('Enter your name').click();
  await page.getByPlaceholder('Enter your name').fill('Svetlana');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('button', { name: 'Explore the recipes' }).click();
  await page.getByPlaceholder('Search you recipe').click();
  await page.getByPlaceholder('Search you recipe').fill('cake');
  // can be different in the future if api changes
  await expect(page.getByText('Recipes found:')).toHaveText(
    'Recipes found: 19'
  );
  await page.getByRole('img', { name: 'Pancakes', exact: true }).click();
  await expect(page.getByTestId('recipe-name')).toHaveText('PANCAKES');
  await page.getByPlaceholder('Write a comment...').click();
  await page.getByPlaceholder('Write a comment...').fill('Amazing recipe!');
  await page.getByRole('button', { name: 'Post comment' }).click();
  await expect(page.getByTestId('comment')).toHaveText('Amazing recipe!');
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
  const cardCount = await page.locator('[data-testid="favorite"]').count();
  await expect(cardCount).toBe(4);
  await page.getByTestId('toggle-button').nth(3).click();
  const cards = await page.locator('[data-testid="favorite"]').count();
  await expect(cards).toBe(3);
});
