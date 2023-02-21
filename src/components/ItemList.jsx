import React from "react";
import Item from "./Item";

const ItemList = ({ mangas }) => {;
  return (
    <>
      {mangas?.map((manga) => (
        <Item
          key={manga.id}
          id={manga.id}
          name={manga.nombre}
          precio={manga.precio}
          category={manga.category}
          imagen={manga.imagen}
          descripcion={manga.descripcion}
        />
      ))}
    </>
  );
};

export default ItemList;
