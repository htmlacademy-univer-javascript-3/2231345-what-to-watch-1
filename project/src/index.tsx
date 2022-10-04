import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      name='The Grand Budapest Hotel'
      releaseYear={2014}
      genre='Drama'
    />
  </React.StrictMode>,
);
