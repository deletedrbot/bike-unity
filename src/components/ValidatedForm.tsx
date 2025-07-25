import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  email: yup.string().email('Некорректный email').required('Email обязателен'),
  password: yup.string().min(6, 'Минимум 6 символов').required('Пароль обязателен'),
});

type FormData = yup.InferType<typeof schema>;

export const ValidatedForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-xs mx-auto">
      <div>
        <input {...register('email')} placeholder="Email" className="input input-bordered w-full" />
        {errors.email && <div className="text-red-500 text-sm">{errors.email.message}</div>}
      </div>
      <div>
        <input {...register('password')} type="password" placeholder="Пароль" className="input input-bordered w-full" />
        {errors.password && <div className="text-red-500 text-sm">{errors.password.message}</div>}
      </div>
      <button type="submit" className="btn btn-primary w-full">Войти</button>
    </form>
  );
}; 