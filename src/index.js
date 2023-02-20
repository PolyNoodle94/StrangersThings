import React from "react";
import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { Main, Posts } from "./components";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Main />}>
        <Route index element={<Posts />}></Route>
        {/* <Route path="login" element={<Login />}></Route>
        <Route path="profile" element={<Profile />}></Route> */}
      </Route>
    </>
  )
);

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);

root.render(<RouterProvider router={router} />);
