import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { ErrorBoundary } from './components/ErrorBoundary';
import { GlobalProvider } from './contexts/GlobalContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <GlobalProvider>
        <BrowserRouter basename={import.meta.env.BASE_URL as string}>
          <App />
        </BrowserRouter>
      </GlobalProvider>
    </ErrorBoundary>
  </React.StrictMode>
); 