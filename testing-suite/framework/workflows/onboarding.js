import * as LoginPage from '../pages/login/login.page';
import * as ForgotPasswordPage from '../pages/forgot-password';
import * as HeaderComponent from '../pages/header';
import * as LogoutModal from '../modals/logout';
/*
export async function CreateNewUser(){
  LoginPage.Goto()
    .then(LoginPage.clickSignupLink)
    .then(SignupPage.fillOutPersonalInfo)
    .then(SignupPage.fillOutUserCredentials)
    .then(SignupPage.fillOutAccontConfirmation)
}
*/

export async function ForgotPassword(){
  await LoginPage.Goto()
  await LoginPage.clickForgotPasswordLink()
  await ForgotPasswordPage.fillOutEmailAddress()
  await ForgotPasswordPage.fillOutConfirmationPin()
}

export async function Logout(){
  await HeaderComponent.Logout()
  await LogoutModal.ConfirmLogout()
  await browser.wait(until.elementLocated(LoginPage.findBy.loginForm))
}
