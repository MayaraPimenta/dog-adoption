import type { IHttpClient } from '@/core/api/types';
import type { IAuthService } from '@/core/auth/services/types.d';
import { httpClient } from '@/core/api/httpClient';

export class AuthService implements IAuthService {
  constructor(private readonly http: IHttpClient = httpClient) {}

  public async login(credentials: { email: string; password: string }) {
    return this.http.post('/auth/login', credentials, { skipAuth: true });
  }

  public async register(credentials: { email: string; password: string }) {
    return this.http.post('/auth/register', credentials, { skipAuth: true });
  }

  public async logout() {
    return this.http.post('/auth/logout', {});
  }
}
