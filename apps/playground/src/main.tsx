import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import tokens so CSS variables are available globally
import '@lyfeguard/tokens/dist/css/tokens.css';
// Import playground-specific styles
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
