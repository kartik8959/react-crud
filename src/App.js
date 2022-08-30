import { useEffect, useState } from "react";
import "./App.css";
import {Routes,Route,Navigate} from "react-router-dom";
import Addcontact from "./components/addInfo/addcontact";
import Home from "./components/Home/Home";

export default function App() {

  

  return (
    <>
   
  
    <Routes>
      <Route path={'/'} element={<Home/>}/>
      <Route path={'/create'} element={<Addcontact/>}/>

      
    </Routes>
   
  </>
    
  );
}
