import { StrictMode } from 'react' 
import { createRoot } from 'react-dom/client' 
import './index.css' 
import { createBrowserRouter, RouterProvider } from 'react-router-dom' 
import Layout from './Layout.jsx' 
import Home from './components/home/home.jsx' 
import About from './components/about/about.jsx' 
import Contact from './components/contact/contact.jsx' 
 
const router = createBrowserRouter( 
  [ 
    { 
      path: '/', 
      element: <Layout />, 
      children: [ 
        { 
          path: '', 
          element: <Home /> 
        }, 
        { 
          path: 'about', 
          element: <About /> 
        }, 
        { 
          path: 'contact', 
          element: <Contact /> 
        } 
      ] 
    } 
  ], 
  { 
    basename: '/Demo-website' 
  } 
) 
 
createRoot(document.getElementById('root')).render( 
  <StrictMode> 
    <RouterProvider router={router} /> 
  </StrictMode> 
) 