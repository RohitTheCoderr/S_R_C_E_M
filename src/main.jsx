import { StrictMode } from 'react'
import { createBrowserRouter,RouterProvider }  from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import HomePage from "@src/pages/home/HomePage.jsx"


const router = createBrowserRouter([
  {
  path:"/",
  element:<App/>,
  children: [
    {
      path:"/", /* default Child of app */
      element:<HomePage/>
    }
  ]
}
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
