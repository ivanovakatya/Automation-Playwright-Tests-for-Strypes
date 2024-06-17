const { test, expect } = require("@playwright/test");

test.describe("Open invalid url", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/k");
  });
  test("user should be able to click on Subscribe for newsletter button enter their email and submit it", async ({
    page,
  }) => {
    await expect(page.locator("h1")).toHaveText("Page not found");
  });
});
