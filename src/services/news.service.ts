import api from './api';

export interface NewsItem {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  date: string;
  category: 'События' | 'Новости' | 'Объявления' | 'Отчеты';
  image: string;
  views: number;
  tags: string[];
  featured?: boolean;
  type: 'news' | 'event';
  location?: string;
  participants?: number;
  difficulty?: string;
}

export interface NewsCreateInput extends Omit<NewsItem, 'id' | 'views'> {
  imageFile?: File;
}

const NewsService = {
  async getAll(): Promise<NewsItem[]> {
    const { data } = await api.get<NewsItem[]>('/news');
    return data;
  },

  async getById(id: number): Promise<NewsItem> {
    const { data } = await api.get<NewsItem>(`/news/${id}`);
    return data;
  },

  async create(newsData: NewsCreateInput): Promise<NewsItem> {
    const formData = new FormData();
    Object.entries(newsData).forEach(([key, value]) => {
      if (key === 'imageFile' && value instanceof File) {
        formData.append('image', value);
      } else if (key === 'tags' && Array.isArray(value)) {
        formData.append('tags', JSON.stringify(value));
      } else if (value !== undefined && value !== null) {
        formData.append(key, String(value));
      }
    });

    const { data } = await api.post<NewsItem>('/news', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return data;
  },

  async update(id: number, newsData: Partial<NewsCreateInput>): Promise<NewsItem> {
    const formData = new FormData();
    Object.entries(newsData).forEach(([key, value]) => {
      if (key === 'imageFile' && value instanceof File) {
        formData.append('image', value);
      } else if (key === 'tags' && Array.isArray(value)) {
        formData.append('tags', JSON.stringify(value));
      } else if (value !== undefined && value !== null) {
        formData.append(key, String(value));
      }
    });

    const { data } = await api.put<NewsItem>(`/news/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return data;
  },

  async delete(id: number): Promise<void> {
    await api.delete(`/news/${id}`);
  },

  async uploadImage(file: File): Promise<string> {
    const formData = new FormData();
    formData.append('image', file);

    const { data } = await api.post<{ url: string }>('/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return data.url;
  }
};

export default NewsService; 