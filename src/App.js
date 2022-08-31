import "./App.css";
import {Routes,Route} from "react-router-dom";
import Addcontact from "./components/addInfo/addcontact";
import Home from "./components/Home/Home";
import EditContact from "./components/EditContact";
import NavBar from "./components/NavBar";

export default function App() {

  

  return (
    <>
   
   <NavBar/>
    <Routes>
      <Route path={'/'} element={<Home/>}/>
      <Route path={'/create'} element={<Addcontact/>}/>
      <Route path={'/edit/:id'} element={<EditContact/>}/>

      
    </Routes>
   
  </>
    
  );
}
