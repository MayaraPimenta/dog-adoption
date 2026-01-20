import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import type { IHttpClient } from '@/core/api/types';
import axios from 'axios';

export class HttpClient implements IHttpClient {
  private api: AxiosInstance;

  constructor(config?: AxiosRequestConfig) {
    this.api = axios.create({
      baseURL: config?.baseURL || import.meta.env.VITE_API_URL,
      timeout: config?.timeout || 10000,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        ...config?.headers,
      },
    });

    this.registerInterceptors();
  }

  private registerInterceptors(): void {
    // Request Interceptor
    this.api.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        if (config.skipAuth) {
          return config;
        }

        // TODO: Criar token provider
        const token = localStorage.getItem('token');

        if (token && config.headers) {
          config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );

    // Response Interceptor
    this.api.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      (error) => {
        if (error.response) {
          console.error(`HTTP Error: ${error.response.status}`, error.response.data);
          // Futuramente adicionar:
          // if (error.response.status === 401) { ... }
        }
        return Promise.reject(error);
      },
    );
  }

  public get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.api.get<T>(url, config);
  }

  public post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.api.post<T>(url, data, config);
  }

  public put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.api.put<T>(url, data, config);
  }

  public patch<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.api.patch<T>(url, data, config);
  }

  public delete<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.api.delete<T>(url, config);
  }
}

export const httpClient = new HttpClient();
