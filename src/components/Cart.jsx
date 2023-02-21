import { Box, Button, FormControl, FormLabel, Input, FormHelperText } from '@chakra-ui/react'
import React from 'react'




const Cart = () => {
  return (
    <Box>
    <FormControl isRequired>
  <FormLabel>Ingrese su nombre</FormLabel>
  <Input placeholder='Ingrese su nombre' />
</FormControl>
<FormControl>
  <FormLabel>Introduzca su mail</FormLabel>
  <Input type='email' />
  <FormHelperText>Nunca compartiremos su informacion</FormHelperText>
</FormControl>
    <Button>
        click para terminar su compra
    </Button>
    </Box>
  )
}

export default Cart