import LoginPage from '../framework/pages/login.page';

test('should be able to create a new user', ()=>{
  LoginPage.Goto();
  LoginPage.CreateNewUser();
})

test('should be able to log in', ()=>{
  LoginPage.Goto();
  LoginPage.Login();
})

test('should be able to log out', ()=>{
  LoginPage.Goto();
  LoginPage.Logout();
})

test('should be able to reset password', ()=>{
  LoginPage.Goto();
  LoginPage.Logout();
})
