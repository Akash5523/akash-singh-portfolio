import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/css/styles.css';
import logger from './logger';

const rootElement = document.getElementById('root');

if (!rootElement) {
  logger.error('Root element not found. Application cannot render.');
} else {
  logger.info('Root element found. Rendering application...');
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}