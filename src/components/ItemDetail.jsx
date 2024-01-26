import React from 'react';
import { Box, ButtonGroup, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react';
import ItemCount from './ItemCount';

const ItemDetail = ({ producto }) => {
  return (
    <Box maxW='sm' w='full' borderWidth='1px' borderRadius='lg' overflow='hidden' boxShadow='lg' textAlign='center'>
      <Image src={producto.img} alt={producto.titulo} objectFit='cover' h='full' w='full'/>
      <Box p='6' bg='white'>
        <Stack spacing='3'>
          <Heading size='md'>{producto.nombre}</Heading>
          <Text>{producto.descripcion}</Text>
          <Text color='#fdcb00' fontSize='4xl' fontWeight='bold' textShadow='1px 1px 3px rgba(0, 0, 0, 0.8)'>
            ${producto.precio}
          </Text>
        </Stack>
      </Box>
      <Divider />
      <Box p='6' bg='white'>
        <ButtonGroup spacing='2'>
          <ItemCount product={producto} />
        </ButtonGroup>
      </Box>
    </Box>
  );
};

export default ItemDetail;