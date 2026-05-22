import type { AxiosRequestConfig, AxiosResponse } from 'axios';

declare module 'axios' {
  export interface AxiosRequestConfig {
    skipAuth?: boolean;
  }
}

export interface IHttpClient {
  get: <T>(url: string, config?: AxiosRequestConfig) => Promise<AxiosResponse<T>>;
  post: <T>(url: string, data?: any, config?: AxiosRequestConfig) => Promise<AxiosResponse<T>>;
  put: <T>(url: string, data?: any, config?: AxiosRequestConfig) => Promise<AxiosResponse<T>>;
  patch: <T>(url: string, data?: any, config?: AxiosRequestConfig) => Promise<AxiosResponse<T>>;
  delete: <T>(url: string, config?: AxiosRequestConfig) => Promise<AxiosResponse<T>>;
}
