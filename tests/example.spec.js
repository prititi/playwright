import { test, expect } from "@playwright/test";

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

test("get started link", async ({ page }) => {
  await page.goto("https://buy.coinspaze.dev/");

  // // Click the get started link.
  // await page.getByRole('link', { name: 'Get started' }).click();

  // // Expects the URL to contain intro.
  // await expect(page).toHaveURL(/.*intro/);

  // await expect(page.getByTestId('MuiCardHeader-root')).toHaveText('Radio Zindagi Ganesh Utsav');

  await page.getByText("Radio Zindagi Ganesh Utsav").click();

  await expect(page).toHaveURL(/.*radio-zindagi-ganesh-utsav-15f929/);

  // await page.getByText('BUY').click()
  // await page.getByRole('button', { name: 'BUY', id: '27de13c8-8347-45ae-b4fb-35314150ef0c' }).click();

  await page
    .getByText(/^Tickets2086 Newpark Mall Rd, Newark, CA 94560BUY$/)
    .getByRole("button", { name: "BUY" })
    .click();

  await page.getByRole("button", { name: "+" }).click();
  await page.getByRole("button", { name: "CONTINUE" }).click();

  // await page.getByLabel("Email").fill("email@coinspaze.com");
  // await page.getByLabel("Phone Number").fill("1231231231");
  // await page.getByLabel("Card Number").fill("4242424242424242");
  // await page.getByLabel("Expiry Month").fill("12");
  // await page.getByLabel("Expiry Year").fill("23");
  // await page.getByLabel("CVC").fill("202");
  // await page.getByLabel("Card Holder Name").fill("Peter");
  // await page.getByLabel("Street1").fill("1 Main Street");
  // await page.getByLabel("Zip Code").fill("98105");
  // await page.getByLabel("City").fill("San Francisco");
  // await page.getByLabel("Region").fill("California");
  // await page.getByLabel("Choose a color").selectOption("(+1) US");
  // await page.getByRole("button", { name: "PLACE ORDER" }).click();

  // const responsePromise = page.waitForResponse("https://example.com/resource");
  // await page.getByText("trigger response").click();
  // const response = await responsePromise;

  // await expect(page).toHaveURL(/.*confirmation/);
});