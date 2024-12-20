import { StrictMode } from 'react'
import { createBrowserRouter,RouterProvider }  from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import HomePage from "@src/pages/home/HomePage.jsx"
import Agrements from './components/training&placement/agrements.jsx'
import Corporate from './components/training&placement/corporate.jsx'


const router = createBrowserRouter([
  {
  path:"/",
  element:<App/>,
  children: [
    {
      path:"/", /* default Child of app */
      element:<HomePage/>
    },
    {
      path:"/agrement",
      element:<Agrements/>
    },
    {
     path:"/corporate" ,
     element:<Corporate/>
    }

  ]
}
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
