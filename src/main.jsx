import { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import BBA from './components/corces/BBA.jsx';
import BBAdm from './components/corces/BBA-DM.jsx';
import BCA from './components/corces/BCA.jsx';
import MBA from './components/corces/MBA.jsx';
import MCA from './components/corces/MCA.jsx';
import BVOC from './components/corces/B.VOC.jsx'
import Mechanical from './components/corces/B.Tech/Mechanical.jsx';
import Comp from './components/corces/B.Tech/Comp.jsx';
import Electronics from './components/corces/B.Tech/Electronics.jsx';
import CivilEngg from './components/corces/B.Tech/civil.jsx';
import Civil from './components/corces/M.tech/civil.jsx';
import MechanicalEngg from './components/corces/M.tech/Mechanical.jsx';
import CompEngg from './components/corces/M.tech/Comp.jsx';
import ElectronicsEngg from './components/corces/M.tech/Electronics.jsx';
import Events from './components/life here/events.jsx';
import Founder from './components/about/founder.jsx';
import Agrements from './components/training&placement/agrements.jsx';
import Corporate from './components/training&placement/corporate.jsx';
import HomePage from './pages/home/HomePage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/events', element:  <Events /> },
      { path:'/founder', element:<Founder/>},
      { path: '/Mechanical', element: <Mechanical /> },
      { path: '/Comp', element: <Comp /> },
      { path: '/Electronics', element: <Electronics /> },
      { path: '/CivilEngg', element: <CivilEngg /> },
      { path: '/Mmechanical', element: <MechanicalEngg /> },
      { path: '/Mcomp', element: <CompEngg /> },
      { path: '/Melectronics', element: <ElectronicsEngg /> },
      { path: '/Mcivil', element: <Civil  /> },
      { path: '/BBA', element: <BBA /> },
      { path: '/BBAdm', element: <BBAdm /> },
      { path: '/BCA', element: <BCA /> },
      { path: '/BVOC', element: <BVOC /> },
      { path: '/MBA', element: <MBA /> },
      { path: '/MCA', element: <MCA /> },
      { path:"/agrement", element:<Agrements/>},
      { path:"/corporate" , element:<Corporate/>},
   
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
