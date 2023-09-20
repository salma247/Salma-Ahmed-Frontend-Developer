import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const fetchCapsules : (limit: number, page: number) => Promise<CapsuleResponse> = async (limit: number = 10, page: number = 1) => {
  const response = await api.post(`/capsules.php` , {
      options: {
        limit,
        page
      }
  });
  return response.data;
}

export const fetchCapsule : (id: string) => Promise<Capsule> = async (id: string) => {
  const response = await api.get(`/capsules.php?id=${id}`);
  return response.data;
}

export const searchCapsules : (state: SearchState, limit: number, page: number) => Promise<CapsuleResponse> = async (state: SearchState, limit: number = 10, page: number = 1) => {
  const response = await api.post(`/search.php` , {
      options: {
        limit,
        page
      },
      ...state
  });
  const req = await api.interceptors.request.use(
    request => {
      console.log('Starting Request', request)
      return request
    }
  );
  return response.data;
}

export const login : (username: string, password: string) => Promise<any> = async (username: string, password: string) => {
  const response = await api.post(`/login.php` , {
      username,
      password
  });
  return response.data;
}

axios.interceptors.response.use(
  response => response,
  error => {
    return Promise.reject(error);
  }
);