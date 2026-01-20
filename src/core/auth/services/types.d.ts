export interface IAuthService {
  login: (credentials: { email: string; password: string }) => Promise<any>;
  register: (credentials: { email: string; password: string }) => Promise<any>;
  logout: () => Promise<any>;
}
