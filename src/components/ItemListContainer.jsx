
import { Center, Heading } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import Data from "../data.json"
import ItemList from "./ItemList";


const ItemListContainer = () => {
  const { category } = useParams();

  const catFilter = Data.filter((manga) => manga.category === category);
  return (
    <div>
      <Center >
        <Heading >
         Mangas filtrados
        </Heading>
      </Center>
      {category ? <ItemList mangas={catFilter} /> : <ItemList mangas={Data} />}
    </div>
  );

};

export default ItemListContainer;
