import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Layout/Root";
import Home from "./pages/Home";
import ListedBooks from "./pages/ListedBooks";
import Pages from "./pages/Pages";
import BookDetails from "./Components/BookDetails";
import ErrorMessage from "./Components/ErrorMessage";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorMessage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("./bookList.json"),
      },
      {
        path: "/:id",
        element: <BookDetails />,
        loader: () => fetch("./bookList.json"),
      },
      {
        path: "/list",
        element: <ListedBooks />,
      },
      {
        path: "/pages",
        element: <Pages />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster position="top-right" reverseOrder={false} />
  </React.StrictMode>
);
