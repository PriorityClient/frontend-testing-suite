import * as findBy  from './find-by';
export async function fillOutEmailAddress(){
  await browser.wait(until.elementLocated(findBy.emailField))
  const emailField = await browser.findElement(findBy.emailField)
  const requestPinButton = await browser.findElement(findBy.requestPinButton)
  await emailField.sendKeys("evan@vipcrowd.com");
  await requestPinButton.click()
  await browser.wait(until.urlContains("reset-password"))
}

export async function fillOutConfirmationPin(){
  await browser.wait(until.elementLocated(findBy.confirmPasswordField))
  const pinField = await browser.findElement(findBy.pinField)
  const newPasswordField = await browser.findElement(findBy.newPasswordField)
  const confirmPasswordField = await browser.findElement(findBy.confirmPasswordField)
  const resetPasswordButton = await browser.findElement(findBy.resetPasswordButton)

  await pinField.sendKeys("12345");
  await newPasswordField.sendKeys("12345678");
  await confirmPasswordField.sendKeys("12345678");

  await resetPasswordButton.click()
  await browser.wait(until.urlContains("challenges/active"))
}
