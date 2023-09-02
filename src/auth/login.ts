const AUTH_TOKEN_NAME = 'barbecue-manager-token'

export const getAuthToken = () => {
  return sessionStorage.getItem(AUTH_TOKEN_NAME)
}

export const setAuthToken = (token: string) => {
  sessionStorage.setItem(AUTH_TOKEN_NAME, token)
}

export const clearAuthToken = () => {
  sessionStorage.removeItem(AUTH_TOKEN_NAME)
}
