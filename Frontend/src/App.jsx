import React from "react";
import "./App.css";
import { Home } from "./pages/home";
import { RegistrationForm } from "./pages/registration";
import { Login } from "./pages/login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./components/Layout/MainLayout";
import About from "./pages/about";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
      ],
    },

    { path: "/registration", element: <RegistrationForm /> },
    { path: "/login", element: <Login /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
