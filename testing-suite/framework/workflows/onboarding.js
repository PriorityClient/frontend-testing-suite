import * as LoginPage from '../pages/login/login.page';
import * as ForgotPasswordPage from '../pages/forgot-password';
import * as SignupPage from '../pages/signup';
import * as HeaderComponent from '../pages/header';
import * as LogoutModal from '../modals/logout';

export async function CreateNewUser(){
  await LoginPage.Goto()
  await LoginPage.clickSignupLink()
  await SignupPage.fillOutPersonalInfo().catch(e=>console.log(e));
  await SignupPage.fillOutUserCredentials()
  await SignupPage.fillOutAccontConfirmation()
}

export async function ForgotPassword(){
  await LoginPage.Goto()
  await LoginPage.clickForgotPasswordLink()
  await ForgotPasswordPage.fillOutEmailAddress()
  await ForgotPasswordPage.fillOutConfirmationPin()
}

export async function Login(){
  await LoginPage.SucceedLogin();
  await browser.wait(until.elementLocated(HeaderComponent.findBy.userNameDisplay))
}

export async function Logout(){
  await HeaderComponent.Logout()
  await LogoutModal.ConfirmLogout()
  await browser.wait(until.elementLocated(LoginPage.findBy.loginForm))
}
