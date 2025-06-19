import api from './api';

export interface RoutePoint {
  lat: number;
  lng: number;
  elevation?: number;
}

export interface BikeRoute {
  id: number;
  title: string;
  description: string;
  distance: number;
  duration: number;
  difficulty: 'Начинающий' | 'Средний' | 'Продвинутый';
  type: 'Городской' | 'Горный' | 'Шоссейный';
  points: RoutePoint[];
  images: string[];
  tags: string[];
  author: string;
  createdAt: string;
  updatedAt: string;
  featured?: boolean;
}

export interface RouteCreateInput extends Omit<BikeRoute, 'id' | 'createdAt' | 'updatedAt'> {
  imageFiles?: File[];
  gpxFile?: File;
}

const RoutesService = {
  async getAll(): Promise<BikeRoute[]> {
    const { data } = await api.get<BikeRoute[]>('/routes');
    return data;
  },

  async getById(id: number): Promise<BikeRoute> {
    const { data } = await api.get<BikeRoute>(`/routes/${id}`);
    return data;
  },

  async create(routeData: RouteCreateInput): Promise<BikeRoute> {
    const formData = new FormData();
    
    // Handle basic fields
    Object.entries(routeData).forEach(([key, value]) => {
      if (key === 'imageFiles' && Array.isArray(value)) {
        value.forEach((file) => {
          if (file instanceof File) {
            formData.append(`images`, file);
          }
        });
      } else if (key === 'gpxFile' && value instanceof File) {
        formData.append('gpx', value);
      } else if (key === 'points' || key === 'tags') {
        formData.append(key, JSON.stringify(value));
      } else if (value !== undefined && value !== null) {
        formData.append(key, String(value));
      }
    });

    const { data } = await api.post<BikeRoute>('/routes', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return data;
  },

  async update(id: number, routeData: Partial<RouteCreateInput>): Promise<BikeRoute> {
    const formData = new FormData();
    
    Object.entries(routeData).forEach(([key, value]) => {
      if (key === 'imageFiles' && Array.isArray(value)) {
        value.forEach((file) => {
          if (file instanceof File) {
            formData.append(`images`, file);
          }
        });
      } else if (key === 'gpxFile' && value instanceof File) {
        formData.append('gpx', value);
      } else if (key === 'points' || key === 'tags') {
        formData.append(key, JSON.stringify(value));
      } else if (value !== undefined && value !== null) {
        formData.append(key, String(value));
      }
    });

    const { data } = await api.put<BikeRoute>(`/routes/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return data;
  },

  async delete(id: number): Promise<void> {
    await api.delete(`/routes/${id}`);
  },

  async uploadGpx(file: File): Promise<RoutePoint[]> {
    const formData = new FormData();
    formData.append('gpx', file);

    const { data } = await api.post<{ points: RoutePoint[] }>('/routes/parse-gpx', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return data.points;
  }
};

export default RoutesService; 