
export const firstNameField = by.css('form label input[name="firstName"]')
export const lastNameField = by.css('form label input[name="lastName"]')
export const groupNameField = by.css('form label input[name="groupName"]')

export const emailField = by.css('form label input[name="email"]')
export const passwordField = by.css('form label input[name="password"]')
export const passwordConfirmField = by.css('form label input[name="passwordConfirm"]')

export const codeInputField = [
  by.css('form .code-input input:nth-of-type(1)'),
  by.css('form .code-input input:nth-of-type(2)'),
  by.css('form .code-input input:nth-of-type(3)'),
  by.css('form .code-input input:nth-of-type(4)'),
  by.css('form .code-input input:nth-of-type(5)'),
]

export const acceptTermsCheckbox = by.css('form label.control--checkbox .control__indicator');


export const nextButton = by.css('button[type="submit"].button')
