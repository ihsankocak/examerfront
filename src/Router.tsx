import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useLoaderData,
} from "react-router-dom";

import Login from "./components/user/Login";
import Home from "./components/user/Home";



let router = createBrowserRouter([
  {
    path: "/",
    Component() {
      return <Login/>
    },
  },
  {
    path: "/home",
    Component() {
      return <Home/>
    }
  },
]);

export  const ExamRouter=()=> {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}