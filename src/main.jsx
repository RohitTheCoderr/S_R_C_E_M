import React, { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import IntroPag from './pages/home/HomePage.jsx'; // Adjusted import path
import BBA from './components/corces/BBA.jsx';
import BBAdm from './components/corces/BBA-DM.jsx';
import BCA from './components/corces/BCA.jsx';
import MBA from './components/corces/MBA.jsx';
import MCA from './components/corces/MCA.jsx';
import BVOC from './components/corces/B.VOC.jsx';
import Mechanical from './components/corces/B.Tech/Mechanical.jsx';
import Comp from './components/corces/B.Tech/Comp.jsx';
import Electronics from './components/corces/B.Tech/Electronics.jsx';
import CivilEngg from './components/corces/B.Tech/Civil.jsx';
import Civil from './components/corces/M.tech/Civil.jsx';
import MechanicalEngg from './components/corces/M.tech/Mechanical.jsx';
import CompEngg from './components/corces/M.tech/Comp.jsx';
import ElectronicsEngg from './components/corces/M.tech/Electronics.jsx';
import Founder from './components/about/Founder.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <IntroPag /> },
      { path: '/founder', element: <Founder /> },
      { path: '/mechanical', element: <Mechanical /> },
      { path: '/comp', element: <Comp /> },
      { path: '/electronics', element: <Electronics /> },
      { path: '/civilengg', element: <CivilEngg /> },
      { path: '/mechanical-engg', element: <MechanicalEngg /> },
      { path: '/comp-engg', element: <CompEngg /> },
      { path: '/electronics-engg', element: <ElectronicsEngg /> },
      { path: '/civil', element: <Civil /> },
      { path: '/bba', element: <BBA /> },
      { path: '/bbadm', element: <BBAdm /> },
      { path: '/bca', element: <BCA /> },
      { path: '/bvoc', element: <BVOC /> },
      { path: '/mba', element: <MBA /> },
      { path: '/mca', element: <MCA /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

