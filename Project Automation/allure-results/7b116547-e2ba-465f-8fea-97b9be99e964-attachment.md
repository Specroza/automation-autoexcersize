# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: autoexcersize.spec.js >> Verify Successful Login >> User should be able to login successfully
- Location: tests\autoexcersize.spec.js:5:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('input[data-qa="email"]')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Website for automation practice" [ref=e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Signup / Login" [ref=e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link " Test Cases" [ref=e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link " API Testing" [ref=e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link " Video Tutorials" [ref=e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link " Contact us" [ref=e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e39]:
    - generic [ref=e41]:
      - heading "Login to your account" [level=2] [ref=e42]
      - generic [ref=e43]:
        - textbox "Email Address" [ref=e44]
        - textbox "Password" [ref=e45]
        - button "Login" [ref=e46] [cursor=pointer]
    - heading "OR" [level=2] [ref=e48]
    - generic [ref=e50]:
      - heading "New User Signup!" [level=2] [ref=e51]
      - generic [ref=e52]:
        - textbox "Name" [ref=e53]
        - textbox "Email Address" [ref=e54]
        - button "Signup" [ref=e55] [cursor=pointer]
  - contentinfo [ref=e56]:
    - generic [ref=e61]:
      - heading "Subscription" [level=2] [ref=e62]
      - generic [ref=e63]:
        - textbox "Your email address" [ref=e64]
        - button "" [ref=e65] [cursor=pointer]:
          - generic [ref=e66]: 
        - paragraph [ref=e67]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e71]: Copyright © 2021 All rights reserved
  - text: 
  - insertion [ref=e73]:
    - generic [ref=e76]:
      - heading "These are topics related to the article that might interest you" [level=2] [ref=e78]: Discover more
      - link "Automation practice website" [ref=e79] [cursor=pointer]:
        - generic "Automation practice website" [ref=e80]
        - img [ref=e82]
      - link "Test automation tools" [ref=e84] [cursor=pointer]:
        - generic "Test automation tools" [ref=e85]
        - img [ref=e87]
      - link "API testing tools" [ref=e89] [cursor=pointer]:
        - generic "API testing tools" [ref=e90]
        - img [ref=e92]
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | test.describe('Verify Successful Login', () => {
  4  | 
  5  |   test('User should be able to login successfully', async ({ page }) => {
  6  | 
  7  |     // Open Automation Exercise
  8  |     await page.goto('https://www.automationexercise.com/');
  9  | 
  10 |     // Click Signup / Login
  11 |     await page.getByRole('link', { name: 'Signup / Login' }).click();
  12 | 
  13 |     // Enter email
> 14 |     await page.locator('input[data-qa="email"]').fill('demone@gmail.com');
     |                                                  ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  15 | 
  16 |     // Enter password
  17 |     await page.locator('input[data-qa="password"]').fill('1234');
  18 | 
  19 |     // Click Login
  20 |     await page.locator('button[data-qa="submit"]').click();
  21 | 
  22 |     // Verify successful login
  23 |     await expect(
  24 |       page.locator('a').filter({ hasText: 'Logged in as' })
  25 |     ).toBeVisible();
  26 | 
  27 |   });
  28 | 
  29 | });
```