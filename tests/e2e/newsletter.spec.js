const { test } = require("@playwright/test");
const { HomepagePO } = require("../../page-objects/HomepagePO");

let homepage;

test.describe("Scroll on Home page into Subscribe for newsletter button", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    homepage = new HomepagePO(page);
  });
  test("user should be able to click on Subscribe for newsletter button, enter their email and submit it", async ({}) => {
    await homepage.fillInUserEmail();
    await homepage.clickOnAgreeTermsOfUse();
    await homepage.clickOnSubmitButton();
    await homepage.verifyNewsLetterSubmittedMessage();
  });
});
