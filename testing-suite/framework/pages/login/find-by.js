const name = by.css("form label:nth-of-type(1) input")
const password = by.css("form label:nth-of-type(2) input")
const loginButton = by.css(".button")
const loginErrorBox = by.css(".error-box")

const findBy = {
  name,
  password,
  loginButton,
  loginErrorBox,
}

export default findBy
