import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer"
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./components/Inicio";
import Cart from "./components/Cart";


function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route exacth path="/" element={<Inicio />}/>
        <Route exacth path="/catalogue" element={<ItemListContainer />}/>
        
        <Route exacth path="/category/:category" element={<ItemListContainer/>}/>
        <Route exacth path="/item/:id" element={<ItemDetailContainer/>}/>

        <Route exacth path="/cart" element={<Cart></Cart>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
