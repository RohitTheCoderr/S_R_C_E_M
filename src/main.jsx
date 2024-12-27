import React from 'react';
import { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from "react-dom/client"
import App from './App.jsx';
import './index.css';
import HomePage from './pages/home/HomePage.jsx';
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
import PCivil from './components/corces/Polytechnic/CIVIL PD.jsx';
import PMechanical from './components/corces/Polytechnic/Mechanical PD.jsx';
import Ece from './components/corces/Polytechnic/ECE PD.jsx';
import Dmlt from './components/corces/Polytechnic/DMLT PD.jsx';
import Cse from './components/corces/Polytechnic/CSE PD.jsx';
import Ragging from './components/admission/Ragging.jsx';
import Procedure from './components/admission/Procedure.jsx';
import Events from './components/life here/events.jsx';
import Commite from './components/admission/Commite.jsx';
import Discipline from './components/admission/Discipline.jsx';
import Agrements from './components/training&placement/agrements.jsx';
import Corporate from './components/training&placement/corporate.jsx';
import Srcem from './components/life here/Srcm.jsx';
import Sports from './components/life here/Sports.jsx';
import Welfair from './components/life here/welfair.jsx';
import IntroPag from './pages/home/homepageAbout.jsx';
import Mission from './components/about/Mission.jsx';
import Principal from './components/about/Principal.jsx';
import Smart from './components/about/Smart.jsx';
import Hostel from './components/about/Hostel.jsx';
import Auditorium from './components/about/Auditorium.jsx';
import Library from './components/about/Library.jsx';
import Transport from './components/about/Transport.jsx';
import Medical from './components/about/Medical.jsx';
import Physics from './components/about/Physics.jsx';
import Mechanics from './components/about/Mechanics.jsx';
import Electrical from './components/about/Electrical.jsx';
import Civil_Lab from './components/about/Civil_Lab.jsx';
import Computer from './components/about/Computer.jsx';
import Chemistry from './components/about/Chemistry.jsx';
import Bmlt from './components/about/Bmlt.jsx';
import Mandatory from './components/about/Mandatory.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/events', element:  <Events /> },
      {path: '/sports', element:<Sports />},
      {path: 'events', element:<Events />},
      {path: 'srcem',element:<Srcem />},
      {path: 'welfair',element:<Welfair />},
      { path: '/Mechanical', element: <Mechanical /> },
      { path: '/Comp', element: <Comp /> },
      { path: '/Electronics', element: <Electronics /> },
      { path: '/CivilEngg', element: <CivilEngg /> },
      { path: '/Mmechanical', element: <MechanicalEngg /> },
      { path: '/Mcomp', element: <CompEngg /> },
      { path: '/Melectronics', element: <ElectronicsEngg /> },
      { path: '/Mcivil', element: <Civil /> },
      { path: '/PCivil', element: <PCivil /> },
      { path: '/PCse', element: <Cse /> },
      { path: '/PDmlt', element: <Dmlt /> },
      { path: '/PEce', element: <Ece /> },
      { path: '/PMechanical', element: <PMechanical /> },
      { path: '/BBA', element: <BBA /> },
      { path: '/BBAdm', element: <BBAdm /> },
      { path: '/BCA', element: <BCA /> },
      { path: '/BVOC', element: <BVOC /> },
      { path: '/MBA', element: <MBA /> },
      { path: '/MCA', element: <MCA /> },
      { path: '/Commite', element: <Commite/>},
      { path: '/Discipline', element: <Discipline/>},
      {path: '/Ragging', element: <Ragging/>},
      {path:'/Procedure', element:<Procedure/>},
      { path:"/agrement", element:<Agrements/>},
      { path:"/corporate" , element:<Corporate/>},
      { path:"/srcem" , element:<Srcem/>},
      { path:"/sports" , element:<Sports/>},
      { path:"/welfair" , element:<Welfair/>},
      { path: '/', element: <IntroPag /> },
      { path:'/Founder', element:<Founder/>},
      { path: '/Principal', element: <Principal /> },
      { path: '/Smart', element: <Smart /> },
      { path: '/Hostel', element: <Hostel /> },
      { path: '/Auditorium', element: <Auditorium /> },
      { path: '/Library', element: <Library/>},
      {path: '/Transport', element:<Transport/> },
      { path: '/Medical', element: <Medical /> },
      { path: '/Physics', element: <Physics  /> },
      { path: '/Mechanics', element: <Mechanics/> },
      { path: '/Electrical', element: <Electrical/> },
      { path: '/Computer', element: <Computer /> },
      { path: '/Civil_Lab', element: <Civil_Lab /> },
      { path: '/Chemistry', element: <Chemistry /> },
      { path: '/Bmlt', element: <Bmlt/>},
      { path: '/Mandatory', element: <Mandatory /> },
      { path: '/Mission', element: <Mission /> },
      
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

