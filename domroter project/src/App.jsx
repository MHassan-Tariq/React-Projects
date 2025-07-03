import React from "react";
import Navbar from "./component/Navbar";
import Contact from "./component/Contact";
import About from "./component/About";
import Home from "./component/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (<><Navbar /><Home /></>),
    },
    
    {
      path: "/about",
      element: (
        <>
          <Navbar />
          <About />
        </>
      ),
    },
    {
      path: "/contact",
      element: (
        <>
          <Navbar />
          <Contact />
        </>
      ),
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
