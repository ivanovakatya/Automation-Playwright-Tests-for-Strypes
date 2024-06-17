const { expect } = require("@playwright/test");
import { getInTouchUser } from "../tests/util/userData";
class ContactPO {
  constructor(page) {
    this.page = page;
    this.firstName = getInTouchUser.firstName;
    this.lastName = getInTouchUser.lastName;
    this.email = getInTouchUser.email;
    this.companyName = getInTouchUser.companyName;
    this.message = getInTouchUser.message;
    this.firstNameField = this.page.getByPlaceholder("First name:");
    this.lastNameField = this.page.getByPlaceholder("Last name:");
    this.emailField = this.page.getByPlaceholder("E-mail:*");
    this.companyNameField = this.page.getByPlaceholder("Company name:");
    this.messageField = this.page.getByPlaceholder("Messages:");
    this.agreeTermsCheckbox = this.page
      .locator(".hs-form-booleancheckbox-display")
      .first();
    this.subscribeCheckbox = this.page
      .locator(".hs-form-booleancheckbox-display")
      .nth(1);

    this.sendButton = this.page.locator("input[value='SEND']");
    this.submittedMessage = this.page.locator(".submitted-message");
  }

  async fillInFirstNameField() {
    await this.firstNameField.click();
    await this.firstNameField.fill(this.firstName);
  }

  async fillInLastNameField() {
    await this.lastNameField.click();
    await this.lastNameField.fill(this.lastName);
  }

  async fillInEmailField() {
    await this.emailField.click();
    await this.emailField.fill(this.email);
  }

  async fillInCompanyField() {
    await this.companyNameField.click();
    await this.companyNameField.fill(this.companyName);
  }

  async fillInMessageField() {
    await this.messageField.click();
    await this.messageField.fill(this.message);
  }

  async clickOnTermsOfUse() {
    await this.agreeTermsCheckbox.click();
  }

  async clickOnSubscribe() {
    await this.subscribeCheckbox.click();
  }

  async clickOnSendButton() {
    await this.sendButton.click();
  }

  async verifySubmittedMessage() {
    await expect(this.submittedMessage).toHaveText(
      "Thank you for submitting the form."
    );
  }
}
module.exports = { ContactPO };
