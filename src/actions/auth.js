export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const RESET_AUTH = 'RESET_AUTH' 

export function setAuthedUser (id, name) {
  return {
    type: SET_AUTHED_USER,
    id,
  }
}

export function resetAuth () {
  return {
    type: RESET_AUTH,
  }
}