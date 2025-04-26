import {Route, Routes
} from "react-router";
import MainLayout from "./components/layout/MainLayout";
import { Component } from "react";
import Home from "./components/pages/Home";
import FetchOld from "./components/pages/FetchOld";
import FetxhRQ from "./components/pages/FetxhRQ";
import { QueryClientProvider } from "@tanstack/react-query";

function App() {
 

  return (
    <>
        <QueryClientProvider>

      <Routes>
         <Route element={<MainLayout />}>
         <Route path="/" element={<Home />} />
         <Route path="/trad" element={<FetchOld />} />
         <Route path="/rq" element={<FetxhRQ />} />
       </Route>
      </Routes> 
          </QueryClientProvider>
      
    </>
  )
}

export default App
