import * as findBy  from './find-by';
export { findBy };

const base = "http://localhost:8081";
export async function Goto(){
  await browser.get(base)
  await browser.wait(until.elementLocated(findBy.signupLink));
}

async function CreateNewUser(){
  const signupLink = await browser.findElement(findBy.signupLink)
  await signupLink.click();
  await expect(browser.getCurrentUrl()).resolves.toBe("#/signup");
}

export async function SucceedLogin(){
  await Login({email:"evan@vipcrowd.com" , password: "12345678"})
  await expect(browser.findElement(findBy.loginErrorBox)).rejects.toThrow();
}

export async function FailLogin(){
  await Login({email:"zvan@vipcrowd.com" , password: "12345678"})
  await browser.wait(until.elementLocated(findBy.loginErrorBox))
  await expect(browser.findElement(findBy.loginErrorBox)).resolves.toBeTruthy();
}

export async function clickForgotPasswordLink(){
  const forgotPasswordLink = await browser.findElement(findBy.forgotPasswordLink)
  await forgotPasswordLink.click();
  await browser.wait(until.urlContains("forgot-password"))
}

async function clickLogin({button, sleep=100}){
  await button.click();
  await browser.sleep(sleep);
}

async function Login({email, password}){
  const nameField     = await browser.findElement(findBy.name)
  const passwordField = await browser.findElement(findBy.password)
  const loginButton   = await browser.findElement(findBy.loginButton)

  await nameField.sendKeys(email);
  await passwordField.sendKeys(password);
  await clickLogin({ button: loginButton })
}

