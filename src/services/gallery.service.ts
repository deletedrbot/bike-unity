import api from './api';

export interface GalleryImage {
  id: number;
  url: string;
  thumbnail: string;
  title: string;
  description?: string;
  tags: string[];
  author: string;
  createdAt: string;
  event?: string;
  route?: string;
}

export interface GalleryCreateInput extends Omit<GalleryImage, 'id' | 'url' | 'thumbnail' | 'createdAt'> {
  imageFile: File;
}

const GalleryService = {
  async getAll(): Promise<GalleryImage[]> {
    const { data } = await api.get<GalleryImage[]>('/gallery');
    return data;
  },

  async getById(id: number): Promise<GalleryImage> {
    const { data } = await api.get<GalleryImage>(`/gallery/${id}`);
    return data;
  },

  async create(imageData: GalleryCreateInput): Promise<GalleryImage> {
    const formData = new FormData();
    
    Object.entries(imageData).forEach(([key, value]) => {
      if (key === 'imageFile' && value instanceof File) {
        formData.append('image', value);
      } else if (key === 'tags' && Array.isArray(value)) {
        formData.append('tags', JSON.stringify(value));
      } else if (value !== undefined && value !== null) {
        formData.append(key, String(value));
      }
    });

    const { data } = await api.post<GalleryImage>('/gallery', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return data;
  },

  async update(id: number, imageData: Partial<GalleryCreateInput>): Promise<GalleryImage> {
    const formData = new FormData();
    
    Object.entries(imageData).forEach(([key, value]) => {
      if (key === 'imageFile' && value instanceof File) {
        formData.append('image', value);
      } else if (key === 'tags' && Array.isArray(value)) {
        formData.append('tags', JSON.stringify(value));
      } else if (value !== undefined && value !== null) {
        formData.append(key, String(value));
      }
    });

    const { data } = await api.put<GalleryImage>(`/gallery/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return data;
  },

  async delete(id: number): Promise<void> {
    await api.delete(`/gallery/${id}`);
  },

  async uploadBulk(files: File[]): Promise<GalleryImage[]> {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append('images', file);
    });

    const { data } = await api.post<GalleryImage[]>('/gallery/bulk', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return data;
  }
};

export default GalleryService; 