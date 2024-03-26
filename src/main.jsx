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
import Contact from "./Components/Contact";
import About from "./Components/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorMessage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          const res = await fetch("https://raw.githubusercontent.com/sadekcric/data-json/main/bookList.json");
          const data = await res.json();
          return data;
        },
      },
      {
        path: "/:id",
        element: <BookDetails />,
        loader: async () => {
          const res = await fetch("https://raw.githubusercontent.com/sadekcric/data-json/main/bookList.json");
          const data = await res.json();
          return data;
        },
      },
      {
        path: "/list",
        element: <ListedBooks />,
      },
      {
        path: "/pages",
        element: <Pages />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
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
