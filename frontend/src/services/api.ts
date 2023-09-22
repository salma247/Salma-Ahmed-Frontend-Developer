import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

export const fetchCapsules: (limit: number, page: number) => Promise<CapsuleResponse> = async (limit: number = 10, page: number = 1) => {
  const response = await api.post(`/capsules`, {
    options: {
      limit,
      page
    }
  });
  return response.data;
}

export const fetchCapsule: (id: string) => Promise<Capsule> = async (id: string) => {
  const response = await api.get(`/capsules?id=${id}`);
  return response.data;
}

export const searchCapsules: (type: string, status: string, serial: string, limit: number, page: number) => Promise<CapsuleResponse> = async (type: string, status: string, serial: string, limit: number = 10, page: number = 1) => {
  const response = await api.post(`/search`, {
    options: {
      limit,
      page
    },
    status,
    serial,
    type
  });

  return response.data;
}

export const login: (username: string, password: string) => Promise<LoginResponse> = async (username: string, password: string) => {
  const response = await api.post(`/login`, {
    username,
    password
  });

  localStorage.setItem('token', response.data.token);
  return response.data;
}

export const logout: () => void = () => {
  localStorage.removeItem('token');
}

axios.interceptors.response.use(
  response => response,
  error => {
    return Promise.reject(error);
  }
);