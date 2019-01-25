import { 
  SET_AUTHED_USER,
  RESET_AUTH,
 } from '../actions/auth'

export default function auth (state = {isAuthenticated: false}, action) {
  switch (action.type) {
    case SET_AUTHED_USER :
      return {
          ...state,
          authedUser: action.id,
          isAuthenticated: true,
      }
    case RESET_AUTH :
      return {
        ...state,
        authedUser: '',
        isAuthenticated: false,
      }
    default :
      return state;
  }
}