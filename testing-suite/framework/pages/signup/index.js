import * as findBy  from './find-by';

export async function fillOutPersonalInfo(){
  await browser.wait(until.elementLocated(findBy.firstNameField))
  const firstNameField = await browser.findElement(findBy.firstNameField)
  const lastNameField = await browser.findElement(findBy.lastNameField)
  const groupNameField = await browser.findElement(findBy.groupNameField)
  const nextButton = await browser.findElement(findBy.nextButton)
  await firstNameField.sendKeys("Test");
  await lastNameField.sendKeys("User");
  await groupNameField.sendKeys("Test Group");
  await nextButton.click();
  await browser.wait(until.urlContains("2"))
}

export async function fillOutUserCredentials(){
  await browser.wait(until.elementLocated(findBy.emailField))
  const emailField = await browser.findElement(findBy.emailField)
  const passwordField = await browser.findElement(findBy.passwordField)
  const passwordConfirmField = await browser.findElement(findBy.passwordConfirmField)
  const nextButton = await browser.findElement(findBy.nextButton)

  const randomEmail = Math.random().toString(36).substring(7);
  await emailField.sendKeys(`user${randomEmail}@vipcrowd.com`);

  await passwordField.sendKeys("12345678");
  await passwordConfirmField.sendKeys("12345678");
  await nextButton.click();
  await browser.wait(until.urlContains("3"))
}

export async function fillOutAccontConfirmation(){
  await browser.wait(until.elementLocated(findBy.codeInputField[0]))
  const codeInputField = [
    await browser.findElement(findBy.codeInputField[0]),
    await browser.findElement(findBy.codeInputField[1]),
    await browser.findElement(findBy.codeInputField[2]),
    await browser.findElement(findBy.codeInputField[3]),
    await browser.findElement(findBy.codeInputField[4]),
  ]

  await codeInputField[0].sendKeys("1");
  await codeInputField[1].sendKeys("2");
  await codeInputField[2].sendKeys("3");
  await codeInputField[3].sendKeys("4");
  await codeInputField[4].sendKeys("5");

  const acceptTermsCheckbox = await browser.findElement(findBy.acceptTermsCheckbox)
  const nextButton = await browser.findElement(findBy.nextButton)
  await acceptTermsCheckbox.click();
  await nextButton.click();
  await browser.wait(until.urlContains("challenges"))
}
