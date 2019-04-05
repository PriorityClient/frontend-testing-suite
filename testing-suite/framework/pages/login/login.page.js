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
}

export async function FailLogin(){
  await Login({email:"zvan@vipcrowd.com" , password: "12345678"})
  await browser.wait(until.elementLocated(findBy.loginErrorBox))
}

export async function clickForgotPasswordLink(){
  const forgotPasswordLink = await browser.findElement(findBy.forgotPasswordLink)
  await forgotPasswordLink.click();
  await browser.wait(until.urlContains("forgot-password"))
}

export async function clickSignupLink(){
  const signupLink = await browser.findElement(findBy.signupLink)
  await signupLink.click();
  await browser.wait(until.urlContains("signup"))
}

async function Login({email, password}){
  const nameField     = await browser.findElement(findBy.name)
  const passwordField = await browser.findElement(findBy.password)
  const loginButton   = await browser.findElement(findBy.loginButton)

  await nameField.sendKeys(email);
  await passwordField.sendKeys(password);
  await loginButton.click();
}

