import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App, { loader as rootLoader } from "./App";
import DetailPage, { loader as countryLoader } from "./pages/detailsPage";
import reportWebVitals from "./reportWebVitals";
import ErrorPage from "./pages/errorPage";
import ThemeProvider from "./context/themeContext";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/homePage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        path: "details/:detailId",
        element: <DetailPage />,
        errorElement: <ErrorPage />,
        loader: countryLoader,

      },
      {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />,
        loader: rootLoader,
      },
    ]
  },

]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
