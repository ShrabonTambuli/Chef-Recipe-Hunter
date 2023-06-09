import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Components/Home/Home.jsx';
import LogIn from './Components/LogIn/LogIn.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Registration from './Components/Registration/Registration.jsx';
import Blog from './Components/Blog/Blog.jsx';
import RecipeDetails from './Components/RecipeDetails/RecipeDetails.jsx';
import AuthProviders from './providers/AuthProviders.jsx';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('https://assignment-10-server-shrabontambuli.vercel.app/chefs')
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/recipeDetails/:id",
        element: <PrivateRoute><RecipeDetails /></PrivateRoute>,
        loader: ({params}) => fetch(`https://assignment-10-server-shrabontambuli.vercel.app/chefs/${params.id}`)
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </AuthProviders>
  </React.StrictMode>,
)
