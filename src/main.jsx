import { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import IntroPag from '@src/pages/home/HomePage.jsx';
import Founder from './components/about/Founder.jsx';
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
import Civil from './components/about/Civil.jsx';
import Computer from './components/about/Computer.jsx';
import Chemistry from './components/about/Chemistry.jsx';
import Bmlt from './components/about/Bmlt.jsx';
import Mandatory from './components/about/Mandatory.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
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
      { path: '/Civil', element: <Civil /> },
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
