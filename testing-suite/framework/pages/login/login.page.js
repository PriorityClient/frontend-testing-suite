import findBy from './find-by';

const base = "http://localhost:8081";
export async function Goto(){
  // if user is logged in, call Logout();
  return await browser.get(base)
}

async function CreateNewUser(){
}

async function Login({email, password}){
  const nameField     = await browser.findElement(findBy.name)
  const passwordField = await browser.findElement(findBy.password)
  const loginButton   = await browser.findElement(findBy.loginButton)

  await nameField.sendKeys(email);
  await passwordField.sendKeys(password);
  await clickLogin({ button: loginButton })
}

export async function SucceedLogin(){
  await Login({email:"evan@vipcrowd.com" , password: "12345678"})
  await expect(browser.findElement(findBy.loginErrorBox)).rejects.toThrow();
}

export async function FailLogin(){
  await Login({email:"zvan@vipcrowd.com" , password: "12345678"})
  await expect(browser.findElement(findBy.loginErrorBox)).resolves.toBeTruthy();
}

function Logout(){
  // if user is not logged in, warn
}

function ForgotPassword(){
}

async function clickLogin({button, sleep=500}){
  await button.click();
  await browser.sleep(sleep);
}

