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

const ItemDetail = ({ mangas }) => {
  const { id } = useParams();

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
