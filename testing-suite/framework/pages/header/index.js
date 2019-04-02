import * as findBy  from './find-by';

export async function Logout(){
  await browser.wait(until.elementLocated(findBy.userInfoDropdownLink))

  const userInfoDropdownLink = await browser.findElement(findBy.userInfoDropdownLink)
  userInfoDropdownLink.click();

  await browser.wait(until.elementLocated(findBy.floatingMenu))
  const floatingMenu = await browser.findElement(findBy.floatingMenu)

  await browser.wait(until.elementIsVisible(floatingMenu))

  const logout = await browser.findElement(findBy.logout)
}
