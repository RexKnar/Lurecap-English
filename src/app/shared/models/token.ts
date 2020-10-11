
export class LoginRequest {
  username:string;
  password:string;

}
export class LoginResponse {
  access_token: string;
  role: number;
  userName: number;
  isAuthorize: boolean;
}

export class ForgotPassword {
}
export class ResetPassword {
  oldPassword: string;
  newPassword: string;
}
