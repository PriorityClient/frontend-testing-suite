const prefix = `.app-container__header`

export const userInfoDropdownLink = by.css(`${prefix} .header__user-info a.clickable:first-of-type`)
export const floatingMenu = by.css(`${prefix} .floating-menu`)


export const editProfile = by.css(`${prefix} .floating-menu a:nth-child(1)`)
export const updatePassword = by.css(`${prefix} .floating-menu a:nth-child(2)`)
export const emailPreferences = by.css(`${prefix} .floating-menu a:nth-child(3)`)
export const editTeamInfo = by.css(`${prefix} .floating-menu a:nth-child(4)`)
export const users = by.css(`${prefix} .floating-menu a:nth-child(5)`)
export const helpCenter = by.css(`${prefix} .floating-menu a:nth-child(6)`)
export const logout = by.css(`${prefix} .floating-menu a.floating-menu__option:last-of-type`)

export const challenges = by.css(`${prefix} .header__navigation a:nth-child(1)`)
export const acceptedChallenges = by.css(`${prefix} .header__navigation a:nth-child(2)`)
export const discussions = by.css(`${prefix} .header__navigation a:nth-child(3)`)
export const emails = by.css(`${prefix} .header__navigation a:nth-child(4)`)
export const myVips = by.css(`${prefix} .header__navigation a:nth-child(5)`)
export const myAssociations = by.css(`${prefix} .header__navigation a:nth-child(6)`)

export const userNameDisplay = by.css(`${prefix} .header__user-info`)
