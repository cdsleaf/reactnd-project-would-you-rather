import { SET_AUTHED_USER } from '../actions/auth'

export default function auth (state = {}, action) {
  switch (action.type) {
    case SET_AUTHED_USER :
      return {
          ...state,
          authedUser: action.id,
          isAuthenticated: true,
      }
    default :
      return {
        isAuthenticated: false,
      }
  }
}