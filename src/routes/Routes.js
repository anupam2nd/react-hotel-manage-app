import React from "react";
import RootLayout from "../layouts/RootLayout";
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
