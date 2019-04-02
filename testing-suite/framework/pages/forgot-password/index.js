export async function fillOutEmailAddress(){
  const emailField = await browser.findElement(findBy.emailField)
  const requestPinButton = await browser.findElement(findBy.requestPinButton)
  emailField.sendKeys("evan@vipcrowd.com");
  await requestPinButton.click()
  await browser.wait(until.urlIs("#/reset-password"))
}

export async function fillOutConfirmationPin(){
  const pinField = await browser.findElement(findBy.pinField)
  const newPasswordField = await browser.findElement(findBy.newPasswordField)
  const confirmPasswordField = await browser.findElement(findBy.confirmPasswordField)
  const resetPasswordButton = await browser.findElement(findBy.resetPasswordButton)

  await pinField.sendKeys("12345");
  await newPasswordField.sendKeys("12345678");
  await confirmPasswordField.sendKeys("12345678");

  await requestPinButton.click()
  await browser.wait(until.urlIs("#/challenges/active"))

}
