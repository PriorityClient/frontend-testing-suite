const name = by.css("input:nth-child(0)")
const password = by.css("input:nth-child(1)")
const loginButton = by.css(".button:nth-child(0)")

const findBy = {
  name,
  password,
  loginButton,
  badLoginError,
}

export default findBy
