import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Users from './components/Pages/Users';
import Detail from './components/Component/Detail/Detail';
import ErrorBoundary from './components/Component/Error/ErrorBoundary';
import Contact from './components/Pages/Contact';


const router = createBrowserRouter([
  {
    path:'/',
    element: <Home />,
    errorElement: <ErrorBoundary />,
    children: [
  {
    path: '/about', // ✅ relative path
    element: <About />
  },
  {
   path:'/users',
   loader: ()=> fetch('https://restcountries.com/v3.1/all').then(res => res.json()),
   element: <Users />
  },
  {
    path:'/users/:code',
    loader: ({params})=>fetch(`https://restcountries.com/v3.1/alpha/${params.code}`).then(res => res.json()).then(data => data[0]),
    element: <Detail />,
  }
  ,{
    path:'/contact',
    element: <Contact />
  }
]

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />    
  </StrictMode>,
)

