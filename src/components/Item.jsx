import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  Center,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Item = ({ id, name, precio, category, imagen,}) => {
  return (
    <div>
      <div key={id}>
        <Center p="1rem">
          <Card className="card-main">
            <CardBody>
              <Image borderRadius="lg" src={imagen} />
              <Stack mt="6" spacing="3">
                <Heading size="md">{name}</Heading>
                <Text>
                  Categoria: {category}
                </Text>
                <Text>
                  Precio: ${precio}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter className="card-footer">
              <Center className="btn-center">
                <Button variant="solid" colorScheme="blue">
                  <Link to={`/item/${id}`}>Descripcion</Link>
                </Button>
              </Center>
            </CardFooter>
          </Card>
        </Center>
      </div>
    </div>
  );
};

export default Item;
