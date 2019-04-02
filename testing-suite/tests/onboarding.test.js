import * as LoginPage from '../framework/pages/login/login.page';
import * as OnboardingWorkflow from '../framework/workflows/onboarding';
import * as HeaderComponent from '../framework/pages/header';

test('should be able to create a new user', async ()=> (
  LoginPage.Goto()
    .then(OnboardingWorkflow.CreateNewUser)
))

test('failed login should show an error message', async ()=>(
  await LoginPage.Goto()
    .then(LoginPage.FailLogin)
))

test('should be able to log in', async()=>(
  await LoginPage.Goto()
    .then(LoginPage.SucceedLogin)
))


test('should be able to log out', async ()=>(
    await HeaderComponent.Logout()
))

test('should be able to reset password', async ()=>{
  await LoginPage.Goto()
  await OnboardingWorkflow.ForgotPassword()
  //expect(Header.userNameDisplay).toBe(User.fullName)
})



