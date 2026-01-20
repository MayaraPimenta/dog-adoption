import axios from 'axios';
import { beforeEach, describe, expect, it, vi } from 'vitest';

// 3. Importação do HttpClient DEPOIS do mock
import { HttpClient } from './httpClient';

// 1. Definição do Mock Instance (precisa estar acessível para o vi.mock)
// Mas o vi.mock é hoisted, então variáveis fora dele não são vistas dentro se não forem importadas.
// A solução correta é usar vi.hoisted para variáveis que precisam ser usadas dentro do mock factory.

const mocks = vi.hoisted(() => ({
  axiosInstance: {
    get: vi.fn(),
    post: vi.fn(),
    put: vi.fn(),
    patch: vi.fn(),
    delete: vi.fn(),
    interceptors: {
      request: { use: vi.fn() },
      response: { use: vi.fn() },
    },
  },
}));

// 2. Mock do axios
vi.mock('axios', () => {
  return {
    default: {
      create: vi.fn(() => mocks.axiosInstance),
    },
  };
});

describe('httpClient', () => {
  let client: HttpClient;
  const mockedAxios = axios as unknown as { create: ReturnType<typeof vi.fn> };

  beforeEach(() => {
    vi.clearAllMocks();
    // Reiniciar o retorno padrão caso tenha sido alterado
    mockedAxios.create.mockReturnValue(mocks.axiosInstance);
    client = new HttpClient({ baseURL: 'https://api.example.com' });
  });

  it('should create an axios instance with correct config', () => {
    expect(axios.create).toHaveBeenCalledWith(expect.objectContaining({
      baseURL: 'https://api.example.com',
      headers: expect.objectContaining({
        'Content-Type': 'application/json',
      }),
    }));
  });

  it('should call axios.get correctly', async () => {
    const mockResponse = { data: { id: 1, name: 'Test' }, status: 200 };
    (mocks.axiosInstance.get as any).mockResolvedValue(mockResponse);

    const response = await client.get('/test');

    expect(mocks.axiosInstance.get).toHaveBeenCalledWith('/test', undefined);
    expect(response).toEqual(mockResponse);
  });

  it('should call axios.post correctly', async () => {
    const mockData = { name: 'New Item' };
    const mockResponse = { data: { id: 2, ...mockData }, status: 201 };
    (mocks.axiosInstance.post as any).mockResolvedValue(mockResponse);

    const response = await client.post('/items', mockData);

    expect(mocks.axiosInstance.post).toHaveBeenCalledWith('/items', mockData, undefined);
    expect(response).toEqual(mockResponse);
  });

  it('should call axios.put correctly', async () => {
    const mockData = { name: 'Updated Item' };
    const mockResponse = { data: mockData, status: 200 };
    (mocks.axiosInstance.put as any).mockResolvedValue(mockResponse);

    const response = await client.put('/items/1', mockData);

    expect(mocks.axiosInstance.put).toHaveBeenCalledWith('/items/1', mockData, undefined);
    expect(response).toEqual(mockResponse);
  });

  it('should call axios.delete correctly', async () => {
    const mockResponse = { data: null, status: 204 };
    (mocks.axiosInstance.delete as any).mockResolvedValue(mockResponse);

    const response = await client.delete('/items/1');

    expect(mocks.axiosInstance.delete).toHaveBeenCalledWith('/items/1', undefined);
    expect(response).toEqual(mockResponse);
  });

  it('should handle request errors', async () => {
    const error = new Error('Network Error');
    (mocks.axiosInstance.get as any).mockRejectedValue(error);

    await expect(client.get('/error')).rejects.toThrow('Network Error');
  });
});
