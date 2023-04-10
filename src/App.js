import { Route, Routes } from "react-router-dom";
import "./App.css";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Read from "./components/Read";
import Update from "./components/Update";
import Home from "./components/Home";


function App() {


  return (
        <div className="w-screen h-screen bg">
             <Navbar/>

              <Routes>
                <Route path='/' element={<Home/>} />
                <Route path="/form" element={<Form/>} />
                 <Route path="/read" element={<Read/>} />
                 <Route path="/edit/:id" element={<Update/>} />
              </Routes>
         

        </div>
  );
}

export default App;
