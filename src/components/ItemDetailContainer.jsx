import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [data, setData] = useState([]);
  useEffect(() => {
    const db = getFirestore();
    const mangasColecction = collection(db, "mercaderia");
    getDocs(mangasColecction).then((querySnapshot) => {
      const mangas = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(mangas);
    });
  }, []);
    return <ItemDetail mangas={data} />;
};

export default ItemDetailContainer;