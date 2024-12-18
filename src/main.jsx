import { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import HomePage from '@src/pages/home/HomePage.jsx';
import BBA from './components/corces/BBA.jsx';
import BBAdm from './components/corces/BBA-DM.jsx';
import BCA from './components/corces/BCA.jsx';
import MBA from './components/corces/MBA.jsx';
import MCA from './components/corces/MCA.jsx';
import BVOC from './components/corces/B.VOC.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/BBA', element: <BBA /> },
      { path: '/BBAdm', element: <BBAdm /> },
      { path: '/BCA', element: <BCA /> },
      { path: '/BVOC', element: <BVOC /> },
      { path: '/MBA', element: <MBA /> },
      { path: '/MCA', element: <MCA /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
