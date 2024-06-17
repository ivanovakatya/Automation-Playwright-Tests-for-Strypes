const { test, expect } = require("@playwright/test");
const { HomepagePO } = require("../../page-objects/HomepagePO");

let homepage;

test.describe("Scroll on Home page to click on Learn more and Get in touch buttons", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    homepage = new HomepagePO(page);
  });
  test("user should be able to scroll to the page and click on Learn More button", async ({
    page,
  }) => {
    await homepage.scrollDownToLearnMoreButton();
    await homepage.clickOnLearnMoreButton();
    await expect(page).toHaveURL(/services/);
  });

  test("user should be able to scroll to the page and click on Get in touch button", async ({
    page,
  }) => {
    await homepage.scrollDownToGetInTouchButton();
    await homepage.clickOnGetInTouchButton();
    await expect(page).toHaveURL(/.*contact?/);
  });
});
