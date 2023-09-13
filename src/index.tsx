import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FilteringProvider from './contexts/filteringContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <FilteringProvider>
      <App />
    </FilteringProvider>
  </React.StrictMode>,
);
