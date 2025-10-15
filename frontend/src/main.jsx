import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from './pages/Home.jsx';
import { MainProvider } from './context/MyContext.jsx';
import Account from './pages/Account.jsx';
import Login from './components/account/Login.jsx';
import Register from './components/account/Register.jsx';
import Collections from './pages/Collections.jsx';
import Products from './pages/Products.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/account',
        element: <Account />,
        children: [
          {
            path: "login",
            element: <Login />
          },
          {
            path: "register",
            element: <Register />
          }
        ]
      },
      {
        path: '/collections',
        element: <Collections />
      },
      {
        path: '/products',
        element: <Products />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainProvider>
      <RouterProvider router={router}></RouterProvider>
    </MainProvider>
  </StrictMode>,
)
