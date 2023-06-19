import { test, expect } from "@playwright/test";

test("end to end test for buying tickets", async ({ page }) => {
  await page.goto("https://buy.coinspaze.dev/");

  await page.getByText("Radio Zindagi Ganesh Utsav").click();

  await expect(page).toHaveURL(/.*radio-zindagi-ganesh-utsav-15f929/);

  await page
    .getByText(/^Tickets2086 Newpark Mall Rd, Newark, CA 94560BUY$/)
    .getByRole("button", { name: "BUY" })
    .click();

  await page.getByRole("button", { name: "+" }).click();

  // Start waiting for api response before making api call
  const responsePromise = page.waitForResponse("https://gateway.coinspaze.dev/v1/payment-intents");

  // Click on button to make api call
  await page.getByRole("button", { name: "CONTINUE" }).click();

  // wait for the promise to resolve
  await responsePromise;




  // /New dialog box for checkout is opened by now, start populating values in input boxes
  // await page.waitForSelector("//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')]");
  
  (await page.waitForSelector("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[1]")).fill(
    "email@coinspaze.com"
  );
  (await page.waitForSelector("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[2]")).fill(
    "1231231231"
  );
  (await page.waitForSelector("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[3]")).fill(
    "4242 4242 4242 4242"
  );
  (await page.waitForSelector("//input[@placeholder='MM']")).fill("12");
  (await page.waitForSelector("//input[@placeholder='YY']")).fill("24");
  (await page.waitForSelector("(//input[@type='number'])[2]")).fill("972");
  (await page.waitForSelector("(//label[text()='Card Holder Name']/following::input)[1]")).fill("Peter");
  (await page.waitForSelector("//input[@placeholder='Street 1']")).fill("1 Main Street");
  (await page.waitForSelector("(//label[text()='Zip Code']/following::input)[1]")).fill("98105");
  (await page.waitForSelector("(//label[text()='City']/following::input)[1]")).fill("San Francisco");
  (await page.waitForSelector("(//label[text()='Region']/following::input)[1]")).fill("California");
  await page.getByRole("button", { name: "​" }).nth(2).click();
  await page.getByRole("option", { name: "(+1) US" }).first().click();

  // click on place order button to make api call
  // await page.getByRole("button", { name: "PLACE ORDER" }).click();

  // wait for the api request to succeed
  await page.waitForTimeout(8000);

  // assert that next page contains comfirmation in its URL
  // await expect(page).toHaveURL(/.*confirmation/);

  // click on close button on the modal
  // await page.getByRole("button").click();

  // close the page
  await page.close();
});