import {
  Box,
  Button,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import CardWidget from "./CardWidget";

const NavBar = () => {
  return (
    <>
      <Box as="button" p="5" w="300px" h="50" bg="black">
        <Heading as="h3" size="lg">
          <Link to={"/"}>Hellboys Games</Link>
        </Heading>
      </Box>
      <Box>
        <Menu>
          <MenuButton as={Button}>Categorias</MenuButton>
          <MenuList className="menu-list">
            <Link to={`/category/${"Ivrea"}`}>
              <MenuItem>Ivrea</MenuItem>
            </Link>
            <Link to={`/category/${"Panini"}`}>
              <MenuItem>Panini</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Box>
      <Box>
      <Link to={"/cart"}><CardWidget></CardWidget>
        
        </Link>
      </Box>
    </>
  );
};

export default NavBar;
