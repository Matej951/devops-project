import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Create root element for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render app in strict mode for better development experience
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Add error boundary for production
window.addEventListener('error', (event) => {
  // Log error to your error tracking service here if needed
  console.error('Global error:', event.error);
});

// Add unhandled promise rejection handler
window.addEventListener('unhandledrejection', (event) => {
  // Log rejected promises to your error tracking service here if needed
  console.error('Unhandled promise rejection:', event.reason);
});

// Add hot module replacement support for development
if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    root.render(
      <React.StrictMode>
        <NextApp />
      </React.StrictMode>
    );
  });
}