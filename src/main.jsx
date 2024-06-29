import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import ErrorPage from './error-page';
import Home from './Pages/Home';
import AuthProvider from './Pages/Provider/AuthProvider';
import Register from './Pages/Authentication/Register';
import Login from './Components/Login';
import Assignment from './Components/Assignment';
import CreatAssignment from './Components/Privet Route/CreatAssignment';
import PendingAssignment from './Components/Privet Route/PendingAssignment';
import MySubmitted from './Components/Privet Route/MySubmitted';
import ViewDetails from './Components/ViewDetails';
import UpdateAssignment from './Components/UpdateAssignment';
import SubmitAssignment from './Components/SubmitAssignment';
import PrivetRoute from './Components/PrivetRoute';
import GiveMark from './Components/GiveMark';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element:<Home></Home>,
        loader: ()=> fetch('data.json')   
      },
      {
        path: '/register',
        element:<Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/assignment',
        element:<Assignment></Assignment>,
        loader: ()=> fetch(`${import.meta.env.VITE_API_URL}/data`)
      },
      {
        path: '/create_assignment',
        element: <PrivetRoute>
          <CreatAssignment></CreatAssignment>
        </PrivetRoute>
      },
      {
        path: '/pending_assignment',
        element:<PrivetRoute>
           <PendingAssignment></PendingAssignment>
        </PrivetRoute>
      },
      {
        path: '/submitted',
        element: 
       <PrivetRoute>
        <MySubmitted></MySubmitted>
       </PrivetRoute>
        
      },
      {
        path: '/data/:id',
        element: <PrivetRoute>
          <ViewDetails></ViewDetails>
        </PrivetRoute>,
        loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/data/${params.id}`)
      },
      {
        path: '/updateAssignment/:id',
        element: <PrivetRoute>
          <UpdateAssignment></UpdateAssignment>
        </PrivetRoute>,
        loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/data/${params.id}`)
      },
      {
        path: '/submit/:id',
        element: <SubmitAssignment></SubmitAssignment>,
        loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/data/${params.id}`)
      },
      {
        path: '/submitAssign',
        element: <PrivetRoute>
          <MySubmitted></MySubmitted>
        </PrivetRoute>
      },
      {
        path: '/giveMark/:id',
        element: <GiveMark></GiveMark>,
        loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/data/${params.id}`)
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
