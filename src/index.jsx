import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import { App } from './components/App';
import { HomePage } from './pages/HomePage';
import { ReservationPage } from './components/ReservationPage/ReservationPage';
import './global.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [{
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/reservation/:id',
      element: <ReservationPage />,
    }
  ]
  },
  
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />
);
