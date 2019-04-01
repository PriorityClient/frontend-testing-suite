import * as findBy  from './find-by';

export async function Logout(){
  await browser.wait(until.elementLocated(findBy.userInfoDropdownLink))

  const userInfoDropdownLink = await browser.findElement(findBy.userInfoDropdownLink)
  userInfoDropdownLink.click();

  await browser.wait(until.elementLocated(findBy.floatingMenu))
  const logout = await browser.findElement(findBy.logout)
  await logout.click();
  browser.sleep(500);
}
