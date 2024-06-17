import { faker } from "@faker-js/faker";
const { expect } = require("@playwright/test");
class HomepagePO {
  constructor(page) {
    this.page = page;
    let randomNumber = faker.string.numeric(4);
    this.email = faker.internet.email({
      firstName: "strypes",
      lastName: randomNumber,
      provider: "gmail.com",
    });
    this.aboutButton = page.getByRole("link", { name: "About", exact: true });
    this.servicesButton = this.page.getByRole("link", {
      name: "Services",
      exact: true,
    });
    this.customersButton = this.page.getByRole("link", {
      name: "Customers",
      exact: true,
    });
    this.nearsuranceButton = this.page.getByRole("link", {
      name: "Nearsurance",
      exact: true,
    });
    this.resourcesButton = this.page
      .getByRole("link", { name: "Resources" })
      .first();
    this.careersButton = this.page
      .getByRole("link", {
        name: "Careers",
      })
      .first();

    this.learnMoreButton = this.page
      .getByTestId("f8420fb")
      .getByText("Learn more");
    this.getInTouchButton = this.page.locator(".cta_button");

    this.newsletterEmailAddress = this.page.getByPlaceholder("E-mail address:");
    this.termsOfUseCheckbox = this.page.locator(
      "#form-field-privacy_policy_checkbox"
    );
    this.newsletterSubmitButton = this.page.locator(
      ".elementor-field-type-submit"
    );
    this.newsletterSubscribeSuccessMessage = this.page.locator(
      ".elementor-message-success"
    );
  }

  async clickOnAboutButton() {
    await this.aboutButton.click();
  }

  async clickOnServicesButton() {
    await this.servicesButton.click();
  }

  async clickOnCustomersButton() {
    await this.customersButton.click();
  }

  async clickOnNearsuranceButton() {
    await this.nearsuranceButton.click();
  }

  async clickOnResourceButton() {
    await this.resourcesButton.dblclick();
  }

  async clickOnCareersButton() {
    await this.careersButton.click();
  }

  async scrollDownToLearnMoreButton() {
    await this.learnMoreButton.scrollIntoViewIfNeeded();
  }

  async clickOnLearnMoreButton() {
    await this.learnMoreButton.click();
  }

  async scrollDownToGetInTouchButton() {
    await this.getInTouchButton.scrollIntoViewIfNeeded();
  }

  async clickOnGetInTouchButton() {
    await this.getInTouchButton.click();
  }

  async fillInUserEmail() {
    await this.newsletterEmailAddress.click();
    await this.newsletterEmailAddress.fill(this.email);
  }

  async clickOnAgreeTermsOfUse() {
    await expect(this.termsOfUseCheckbox).toBeVisible();
    await expect(this.termsOfUseCheckbox).toBeEnabled();
    await this.termsOfUseCheckbox.dispatchEvent("click");
  }

  async clickOnSubmitButton() {
    await this.newsletterSubmitButton.click();
  }

  async verifyNewsLetterSubmittedMessage() {
    await expect(this.newsletterSubscribeSuccessMessage).toBeVisible({
      timeout: 20000,
    });
    await expect(this.newsletterSubscribeSuccessMessage).toHaveText(
      "Thank you for signing up for our newsletter! You are in! "
    );
  }
}

module.exports = { HomepagePO };
