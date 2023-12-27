import React from 'react'
import { Card, CardBody, Image, Stack, Heading, Text, Divider, ButtonGroup, Box, Img, Center } from '@chakra-ui/react';
import ItemCount from './ItemCount';


const ItemDetail = ({ producto }) => {

    return (
      <Box
        maxW='sm'
        w='full'
        borderWidth='1px'
        borderRadius='lg'
        overflow='hidden'
        boxShadow='lg'
        textAlign='center' // Cambié el color y la opacidad aquí
      >
        <Image
          src={producto.img}
          alt='Green double couch with wooden legs'
          objectFit='cover'
          h='full'
          w='full'
        />
        <Box p='6' bg='white'>
          <Stack spacing='3'>
            <Heading size='md'>{producto.titulo}</Heading>
            <Text>{producto.descripcion}</Text>
            <Text color='#fdcb00' fontSize='4xl' fontWeight='bold' textShadow='1px 1px 3px rgba(0, 0, 0, 0.8)'>
              ${producto.precio}
            </Text>
          </Stack>
        </Box>
        <Divider />
        <Box p='6'bg='white'>
          <ButtonGroup spacing='2'>
            <ItemCount />
          </ButtonGroup>
        </Box>
      </Box>
    );
  };

export default ItemDetail