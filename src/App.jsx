import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./components/Inicio";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext";
import { Navbar } from "./components/NavBar";
import { ShoppingCart } from "./components/Cart";
import SendOrder from "./components/SendOrder";


function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Navbar></Navbar>

        <Routes>
          <Route exacth path="/" element={<Inicio />} />
          <Route exacth path="/catalogue" element={<ItemListContainer />} />

          <Route
            exacth
            path="/category/:category"
            element={<ItemListContainer />}
          />
          <Route exacth path="/item/:id" element={<ItemDetailContainer />} />

          <Route exacth path="/shoppingCart" element={<ShoppingCart></ShoppingCart>} />
          <Route exacth path="/sendOrder" element={<SendOrder></SendOrder>} />
        </Routes>
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;
