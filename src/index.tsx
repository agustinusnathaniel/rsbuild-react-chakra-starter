import ReactDOM from 'react-dom/client';

// fonts
import '@fontsource-variable/plus-jakarta-sans';

import { StrictMode } from 'react';
import { App } from './app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
