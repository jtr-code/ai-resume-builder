export interface ILoginForm {
  email: string;
  password: string;
}

export interface IRegisterForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IForgotPwdForm {
  email: string;
}

export interface IResetPwdForm {
  newPassword: string;
}
