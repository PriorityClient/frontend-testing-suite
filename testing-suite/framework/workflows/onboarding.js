import * as LoginPage from '../pages/login/login.page';
import * as ForgotPasswordPage from '../pages/forgot-password';
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
  await ForgotPasswordPage.fillOutConfirmationPin({pinIsCorrect, passwordsDoMatch})
}
