import * as findBy from './find-by';

export async function ConfirmLogout(){
  await browser.wait(until.elementLocated(findBy.modal))
  const logoutButton = await browser.findElement(findBy.logoutButton)
  await logoutButton.click();
}
