export interface LoginForm {
  email: string,
  password: string
}

export interface TokenResponse {
  token: string,
  username: string,
  role: string
}
