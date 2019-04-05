import * as LoginPage from '../framework/pages/login/login.page';
import * as OnboardingWorkflow from '../framework/workflows/onboarding';
import * as HeaderComponent from '../framework/pages/header';

test('failed login should show an error message', async ()=>{
  await LoginPage.Goto()
    .then(LoginPage.FailLogin)
  await expect(browser.findElement(LoginPage.findBy.loginErrorBox)).resolves.toBeTruthy();
})

describe("should be able to log in", ()=>{

  afterEach(OnboardingWorkflow.Logout);

  test('by creating a new user', async ()=> {
    await OnboardingWorkflow.CreateNewUser()
    await expect(HeaderComponent.userNameDisplay()).resolves.toBe("Test User")
  }, 10000)

  test('with an existing user', async()=>{
    await LoginPage.Goto()
      .then(LoginPage.SucceedLogin)
    await expect(browser.findElement(LoginPage.findBy.loginErrorBox)).rejects.toThrow();
  })

  test('by resetting the password', async ()=>{
    await OnboardingWorkflow.ForgotPassword()
    await expect(HeaderComponent.userNameDisplay()).resolves.toBe("Evan Short")
  }, 10000)
})

test('should be able to log out', async ()=>{
  await LoginPage.Goto()
    .then(LoginPage.SucceedLogin)
    .then(OnboardingWorkflow.Logout)
  await expect(browser.findElement(LoginPage.findBy.loginForm)).resolves.toBeTruthy();
}, 15000)
