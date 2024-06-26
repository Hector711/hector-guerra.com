import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import '@/i18n/i18n.js';
// Supports weights 100-900
import '@fontsource-variable/onest';
// Supports weights 400-900
import '@fontsource-variable/gabarito';
import '@fontsource/cinzel-decorative';
import '@pixelpay/fonts/dist/gilroy.css';
// CSS
import '@/css/reset/reset.css';
import '@/css/init.css';
import '@/css/elements.css';
import '@/css/comp-hero.css';
import '@/css/comp-space.css';
import '@/css/comp-navbar.css';
import '@/css/comp-projects.css';
import '@/css/comp-footer.css';
import '@/css/comp-language.css';
import '@/css/themes/light-theme.css';
import '@/css/themes/dark-theme.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<h2 id='suspense'>LOADING...</h2>}>
      <App />
    </Suspense>
  </React.StrictMode>,
);
