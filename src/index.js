import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Pages/Home';
import Login from './Pages/Login';
import Booking from './Pages/Booking';
import Register from './Pages/Register';
import ManageRoom from './Pages/ManageRoom';
import About from './Pages/About';
import AdminHome from './Pages/AdminHome';
import Profile from './Pages/Profile';
import MyBooking from './Pages/MyBooking';

const routerVariables = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/booking/:id",
        element: <Booking></Booking>,
      },
      {
        path: "/booking",
        element: <Booking></Booking>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/manageroom",
        element: <ManageRoom></ManageRoom>,
      },
      {
        path: "/adminhome",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/mybooking",
        element: <MyBooking></MyBooking>,
      },
      {
        path: "*",
        element: <h1>Page not found Please Check your url</h1>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={routerVariables}></RouterProvider>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
