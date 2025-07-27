import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './Layouts/MainLayout.jsx';
import Home from './Components/Home.jsx';
import AddCoffee from './Components/AddCoffee.jsx';
import UpdateCoffee from './Components/UpdateCoffee.jsx';
import CoffeeDetails from './Components/CoffeeDetails.jsx';
import SignIn from './Components/SignIn.jsx';
import Signup from './Components/Signup.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
import Users from './Components/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => fetch('coffee-store-server-rho-six.vercel.app/coffees'),
        Component: Home
      },
      {
        path: 'coffee/:id',
        Component: CoffeeDetails
      },
      {
        path: '/addCoffee',
        loader: () => fetch('coffee-store-server-rho-six.vercel.app/coffees'),
        Component: AddCoffee
      },
      {
        path: '/updateCoffee/:id',
        loader: ({ params }) => fetch(`coffee-store-server-rho-six.vercel.app/coffees/${params.id}`),
        Component: UpdateCoffee
      },
      {
        path: '/signin',
        Component: SignIn
      },
      {
        path: '/signup',
        Component: Signup
      },
      {
        path: 'users',
        loader: () => fetch('coffee-store-server-rho-six.vercel.app/users'),
        Component: Users
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
