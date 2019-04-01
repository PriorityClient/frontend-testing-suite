import * as LoginPage from '../framework/pages/login/login.page';
import * as HeaderComponent from '../framework/pages/header';

/*
test('should be able to create a new user', async ()=> (
  await LoginPage.Goto()
          .then(LoginPage.CreateNewUser)
))
*/
test('failed login should show an error message', ()=>(
  LoginPage.Goto()
    .then(LoginPage.FailLogin)
))

test('should be able to log in', ()=>(
  LoginPage.Goto()
    .then(LoginPage.SucceedLogin)
))

test('should be able to log out', async ()=>(
  HeaderComponent.Logout()
))

/*
test('should be able to reset password', async ()=>(
  LoginPage.Goto()
    .then(LoginPage.ResetPassword)
))
*/
