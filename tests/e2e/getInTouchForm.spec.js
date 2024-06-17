const { test } = require("@playwright/test");
const { ContactPO } = require("../../page-objects/ContactPO");

let contactPage;

test.describe("Contact page form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/contact");
    contactPage = new ContactPO(page);
  });

  test("user should be able to submit the get in touch form with all the mandatory and optional inputs", async () => {
    await contactPage.fillInFirstNameField();
    await contactPage.fillInLastNameField();
    await contactPage.fillInEmailField();
    await contactPage.fillInCompanyField();
    await contactPage.fillInMessageField();
    await contactPage.clickOnTermsOfUse();
    await contactPage.clickOnSubscribe();
    await contactPage.clickOnSendButton();
    await contactPage.verifySubmittedMessage();
  });

  test("user should be able to submit the get in touch form with all the mandatory inputs", async () => {
    await contactPage.fillInEmailField();
    await contactPage.clickOnTermsOfUse();
    await contactPage.clickOnSendButton();
    await contactPage.verifySubmittedMessage();
  });
});
