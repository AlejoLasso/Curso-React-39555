import React from "react";
import { Item } from "./Item";

export const ItemList = ({ mangas }) => {
  return (
    <div className="items-list">
      {mangas?.map((manga) => {
        return <Item
        key={manga.id}
        id={manga.id}
        name={manga.nombre}
        precio={manga.precio}
        category={manga.category}
        imagen={manga.imagen}
        descripcion={manga.descripcion}/>;
      })}
    </div>
  );
};