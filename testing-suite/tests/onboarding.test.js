import LoginPage from '../framework/pages/login/login.page';

test('should be able to create a new user', async ()=> (
  LoginPage.Goto()
    .then(LoginPage.CreateNewUser)
))

test('should be able to log in', async ()=>(
  LoginPage.Goto()
    .then(LoginPage.Login)
))

test('should be able to log out', async ()=>(
  LoginPage.Goto()
    .then(LoginPage.Logout)
))

test('should be able to reset password', async ()=>(
  LoginPage.Goto()
    .then(LoginPage.ResetPassword)
))
