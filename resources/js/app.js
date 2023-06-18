import './bootstrap';
import '../css/app.css';
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import reportWebVitals from './reportWebVitals';
import ReactGA from 'react-ga4';

createInertiaApp({
  progress: {
    showSpinner: true
  },
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
    return pages[`./Pages/${name}.jsx`]
  },
  setup({ el, App, props }) {
    const container = document.getElementById('app');
        const root = createRoot(container, el);
        root.render(React.createElement(App, props));
  },
})

const SendAnalytics = () => {
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname,
  });
}

if (process.env.NODE_ENV === 'production') {
  ReactGA.initialize('G-31N7RXFEBL');
  reportWebVitals(SendAnalytics)
}