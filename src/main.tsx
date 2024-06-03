import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/Root.tsx";
import MemorableDates from "./routes/MemorableDates.tsx";
import Presidents from "./routes/Presidents.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/history-and-modernity",
    element: <Root />
  },
  {
    path: "/memorable-dates",
    element: <MemorableDates />
  },
  {
    path: "/presidents",
    element: <Presidents />
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
