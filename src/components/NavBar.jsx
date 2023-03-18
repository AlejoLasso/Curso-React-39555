import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/ShoppingCartContext";
import {
  Box,
  Button,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import CardWidget from "./CardWidget";

export const Navbar = () => {
  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const navStyles = {
    color: "#fff",
    listStyle: "none",
    textDecoration: "none",
  };

  return (
    <nav>
      <Box bg="black">
        <Heading>
          <Link to={"/"}>Hellboys Games</Link>
        </Heading>
      </Box>
      <Box>
        <Menu>
          <MenuButton as={Button}>Categorias</MenuButton>
          <MenuList className="items-list">
            <Link to={`/category/${"Ivrea"}`}>
              <MenuItem>Ivrea</MenuItem>
            </Link>
            <Link to={`/category/${"Panini"}`}>
              <MenuItem>Panini</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Box>
      <ul className="nav-list">
        <Link to={"/shoppingCart"} style={navStyles}><CardWidget></CardWidget>
          <li>
            Items en el carrito: <span className="cart-count">{quantity}</span>
          </li>
        </Link>
      </ul>
    </nav>
  );
};