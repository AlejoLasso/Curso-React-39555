import { Center, Heading } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useState, useEffect } from "react";


const ItemListContainer = () => {
  const [mangas, setMangas] = useState([]);
  const { category } = useParams();


  useEffect(() => {
    const db = getFirestore();
    const mangasCollection = collection(db, "mercaderia");
    getDocs(mangasCollection).then((querySnapshot) => {
      const mangas = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setMangas(mangas);
    });
  }, []);




  const catFilter = mangas.filter((manga) => manga.category === category);
  return (
    <div>
      <Center >
        <Heading >
         Mangas filtrados
        </Heading>
      </Center>
      {category ? <ItemList mangas={catFilter} /> : <ItemList mangas={mangas} />}
    </div>
  );

};

export default ItemListContainer;
