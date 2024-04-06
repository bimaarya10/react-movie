import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PopularMovies from "./Popular.jsx";
import ErrorPage from "./ErrorPage.jsx";
import TopMovie from "./TopMovie.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PopularMovies />,
    errorElement : <ErrorPage/>
  },
  {
    path: "/search",
    element: <App />,
  },
  {
    path : '/top-movie',
    element : <TopMovie/>
  }
]);





ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
