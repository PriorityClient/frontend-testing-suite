import * as findBy  from './find-by';

export async function Logout(){
  await browser.wait(until.elementLocated(findBy.userInfoDropdownLink))

  const userInfoDropdownLink = await browser.findElement(findBy.userInfoDropdownLink)
  await userInfoDropdownLink.click();

  await browser.wait(until.elementLocated(findBy.floatingMenu))
  const floatingMenu = await browser.findElement(findBy.floatingMenu)
  await browser.wait(until.elementIsVisible(floatingMenu))

  await browser.wait(until.elementLocated(findBy.logout))
  const logout = await browser.findElement(findBy.logout)
  await browser.wait(until.elementIsVisible(logout))
  await logout.click()
}

export async function userNameDisplay(){
  await browser.wait(until.elementLocated(findBy.userNameDisplay))
  const userName = await browser.findElement(findBy.userNameDisplay)
  return await userName.getAttribute("innerText");
}
