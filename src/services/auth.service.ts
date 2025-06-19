import api from './api';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: {
    id: number;
    email: string;
    name: string;
    role: string;
  };
}

const AuthService = {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    const { data } = await api.post<AuthResponse>('/auth/login', credentials);
    localStorage.setItem('token', data.token);
    return data;
  },

  async logout(): Promise<void> {
    localStorage.removeItem('token');
    window.location.href = '/login';
  },

  async getCurrentUser(): Promise<AuthResponse['user'] | null> {
    try {
      const { data } = await api.get<AuthResponse['user']>('/auth/me');
      return data;
    } catch {
      return null;
    }
  },

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
};

export default AuthService; 