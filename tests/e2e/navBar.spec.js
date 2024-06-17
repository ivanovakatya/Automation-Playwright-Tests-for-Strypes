const { test, expect } = require("@playwright/test");
const { HomepagePO } = require("../../page-objects/HomepagePO");

let homepage;

test.describe("Navigation menu", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    homepage = new HomepagePO(page);
  });
  test("user should be able to click on About button", async ({ page }) => {
    await homepage.clickOnAboutButton();
    await expect(page).toHaveURL(/about-strypes/);
  });

  test("user should be able to click on Services button", async ({ page }) => {
    await homepage.clickOnServicesButton();
    await expect(page).toHaveURL(/services/);
  });

  test("user should be able to click on Customers button", async ({ page }) => {
    await homepage.clickOnCustomersButton();
    await expect(page).toHaveURL(/customers/);
  });

  test("user should be able to click on Nearsurance button", async ({
    page,
  }) => {
    await homepage.clickOnNearsuranceButton();
    await expect(page).toHaveURL(/nearsurance/);
  });

  test("user should be able to click on Resource button", async ({ page }) => {
    await homepage.clickOnResourceButton();
    await expect(page).toHaveURL(/resources/);
  });

  test("user should be able to click on Careers button", async ({ page }) => {
    await homepage.clickOnCareersButton();
    await expect(page).toHaveURL(/careers/);
  });
});
