import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./components/Root/Root.jsx";
import Home from "./components/Home/Home.jsx";
import ListedBooks from "./components/ListedBooks/ListedBooks.jsx";
import PagesToRead from "./components/PagesToRead/PagesToRead.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import Detailes from "./components/Details/Detailes.jsx";
import WhyReadBooks from "./components/WhyReadBooks/WhyReadBooks.jsx";
import BuyBook from "./components/BuyBook.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/listed",
        element: <ListedBooks></ListedBooks>,
       
      },
      {
        path: "/pages",
        element: <PagesToRead></PagesToRead>,
        loader: () => fetch("/Books.json"),
      },
      {
        path: "/book/:bookId",
        element: <Detailes></Detailes>,
        loader: () => fetch("/Books.json"),
      },
      {
        path: "/WhyReadBooks",
        element: <WhyReadBooks></WhyReadBooks>
      },
      {
        path: "/BuyBook",
        element: <BuyBook></BuyBook>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
