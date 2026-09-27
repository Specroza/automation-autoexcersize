const { test, expect } = require('@playwright/test');

test.describe('Verify Successful Login', () => {

  test('User should be able to login successfully', async ({ page }) => {

    await page.goto('https://www.automationexercise.com/');
    await page.getByRole('link', { name: 'Signup / Login' }).click();
    await expect(
      page.getByRole('heading', { name: 'Login to your account' })
    ).toBeVisible();

    await page.locator('input[data-qa="login-email"]').fill('demone@gmail.com');
    await page.locator('input[data-qa="login-password"]').fill('1234');
    await page.locator('button[data-qa="login-button"]').click();

    await expect(
      page.getByText('Logged in as')
    ).toBeVisible();

  });

});