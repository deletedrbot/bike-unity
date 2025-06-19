import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  XMarkIcon,
  ArrowUpTrayIcon,
  TagIcon,
} from '@heroicons/react/24/outline';
import { GalleryCreateInput } from '../services/gallery.service';

interface GalleryManagerProps {
  isOpen: boolean;
  onClose: () => void;
  onUpload: (data: GalleryCreateInput[]) => Promise<void>;
  onBulkUpload: (files: File[]) => Promise<void>;
}

const GalleryManager: React.FC<GalleryManagerProps> = ({ isOpen, onClose, onUpload, onBulkUpload }) => {
  const [images, setImages] = useState<Array<{
    file: File;
    preview: string;
    title: string;
    description: string;
    tags: string[];
  }>>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFilesSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setIsUploading(true);
      const newFiles = Array.from(files);
      
      // Preview images
      const readers = newFiles.map(file => {
        return new Promise<{ file: File; preview: string }>((resolve) => {
          const reader = new FileReader();
          reader.onload = (e) => resolve({
            file,
            preview: e.target?.result as string
          });
          reader.readAsDataURL(file);
        });
      });

      Promise.all(readers).then(results => {
        setImages(prev => [
          ...prev,
          ...results.map(({ file, preview }) => ({
            file,
            preview,
            title: file.name.split('.')[0],
            description: '',
            tags: []
          }))
        ]);
        setIsUploading(false);
      });
    }
  };

  const handleInputChange = (index: number, field: string, value: string) => {
    setImages(prev => prev.map((img, i) => 
      i === index ? { ...img, [field]: field === 'tags' ? value.split(',').map(tag => tag.trim()) : value } : img
    ));
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (images.length === 0) return;

      // If all images have no metadata, use bulk upload
      const hasMetadata = images.some(img => img.title || img.description || img.tags.length > 0);
      
      if (!hasMetadata) {
        await onBulkUpload(images.map(img => img.file));
      } else {
        const uploads: GalleryCreateInput[] = images.map(img => ({
          imageFile: img.file,
          title: img.title,
          description: img.description,
          tags: img.tags,
          author: 'Admin', // TODO: Get from auth context
        }));
        await onUpload(uploads);
      }
      
      onClose();
    } catch (error) {
      console.error('Error uploading images:', error);
      // TODO: Add error handling
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">
            Загрузка изображений
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Content */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Upload Area */}
          <div
            onClick={() => fileInputRef.current?.click()}
            className={`border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-primary-500 transition-colors ${
              isUploading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <ArrowUpTrayIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">
              {isUploading ? 'Загрузка...' : 'Нажмите для выбора изображений'}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              PNG, JPG до 5MB
            </p>
          </div>
          
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={handleFilesSelect}
            className="hidden"
            disabled={isUploading}
          />

          {/* Images Preview */}
          {images.length > 0 && (
            <div className="space-y-6">
              {images.map((image, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex gap-4">
                    <div className="w-32 h-32 flex-shrink-0">
                      <img
                        src={image.preview}
                        alt={image.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-grow space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Название
                        </label>
                        <input
                          type="text"
                          value={image.title}
                          onChange={(e) => handleInputChange(index, 'title', e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Название изображения"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Описание
                        </label>
                        <textarea
                          value={image.description}
                          onChange={(e) => handleInputChange(index, 'description', e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Описание изображения"
                          rows={2}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Теги
                        </label>
                        <div className="relative">
                          <TagIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <input
                            type="text"
                            value={image.tags.join(', ')}
                            onChange={(e) => handleInputChange(index, 'tags', e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="тег1, тег2, тег3"
                          />
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <XMarkIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Actions */}
          <div className="flex justify-end gap-4 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              disabled={isSubmitting}
            >
              Отмена
            </button>
            <button
              type="submit"
              className={`btn-primary px-6 py-3 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
              disabled={isSubmitting || images.length === 0}
            >
              {isSubmitting ? 'Загрузка...' : 'Загрузить'}
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default GalleryManager; 