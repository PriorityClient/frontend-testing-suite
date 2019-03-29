import findBy from './find-by';
const LoginPage = {
  Goto,
  CreateNewUser,
  Login,
  Logout,
  ForgotPassword
}

const base = "http://localhost:8081";
async function Goto(){
  // if user is logged in, call Logout();
  return await browser.get(base)
}

async function CreateNewUser(){
}

async function Login(){
  const nameField     = await browser.findElement(findBy.name)
  const passwordField = await browser.findElement(findBy.password)
  const loginButton   = await browser.findElement(findBy.loginButton)

  nameField.value("test@vipcrowd.com");
  passwordField.value("12345678");
  await clickLogin(loginButton, "success")
}

function Logout(){
  // if user is not logged in, warn
}

function ForgotPassword(){
}

async function clickLogin(loginButton, goal){
  const badLoginError   = await browser.findElement(findBy.badLoginError)
  loginButton.click();
  const buttonGone = await browser.wait(until.stalenessOf(loginButton), 2000);

  goalValue = (goal==="success"?true:false);

  expect(buttonGone).toBe(goalValue)
}

export default LoginPage
