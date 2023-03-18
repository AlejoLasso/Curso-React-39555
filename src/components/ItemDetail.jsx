import {
  Center,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  CardFooter,
  Divider,
  Alert,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { CartContext } from "../contexts/ShoppingCartContext";
import { Link } from "react-router-dom";

export const ItemDetail = ({ mangas }) => {
  const { id } = useParams();

  const [producto, setProducto] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const mercaderia = doc(db, "mercaderia", `${id}`);

    getDoc(mercaderia).then((snapshot) => {
      if (snapshot.exists()) {
        setProducto(snapshot.data());
      } else {
        console.log("No such document!");
      }
    });
  }, []);


 const agregarItem = ({item}) => {
 const {addItem} = useContext(CartContext) }

 
  const mangaFilter = mangas.filter((manga) => manga.id == id);

  return (
    <>
      {mangaFilter.map((manga) => (
        <div key={manga.id}>
          <Center p="1rem">
            <Card className="card-main">
              <CardBody>
                <Image borderRadius="lg" src={manga.imagen} />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{manga.name}</Heading>
                  <Text>Descripcion: {manga.descripcion}</Text>
                  <Text>Categoria: {manga.category}</Text>
                  <Text>Precio: $ {manga.precio}</Text>
                  <Text>Stock: {manga.stock}</Text>
                  <Link onClick={() => addItem(item.id)}>
                  <Button>Agregar</Button>
                  </Link>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter className="card-footer"></CardFooter>
            </Card>
          </Center>
        </div>
      ))}
    </>
  );
};

export default ItemDetail;
