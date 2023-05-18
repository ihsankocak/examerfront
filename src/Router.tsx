import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useLoaderData,
} from "react-router-dom";
import { Question } from "./components/Question";



let router = createBrowserRouter([
  {
    path: "/",
    Component() {
      return <Question/>
    },
  },
]);

export  const ExamRouter=()=> {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}