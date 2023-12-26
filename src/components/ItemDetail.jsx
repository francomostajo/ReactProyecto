import React from 'react'
import { Card, CardBody, Image, Stack, Heading, Text, Divider, ButtonGroup, Box } from '@chakra-ui/react';
import ItemCount from './ItemCount';

const ItemDetail = ({ titulo, descripcion, precio, categoria, id }) => {
    return (
      <Box
        maxW='sm'
        w='full'
        borderWidth='1px'
        borderRadius='lg'
        overflow='hidden'
        boxShadow='lg' // Cambié el color y la opacidad aquí
      >
        <Image
          src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
          alt='Green double couch with wooden legs'
          objectFit='cover'
          h='200px'
          w='full'
        />
        <Box p='6'>
          <Stack spacing='3'>
            <Heading size='md'>{titulo}</Heading>
            <Text>{descripcion}</Text>
            <Text color='blue.600' fontSize='2xl'>
              ${precio}
            </Text>
          </Stack>
        </Box>
        <Divider />
        <Box p='6'>
          <ButtonGroup spacing='2'>
            <ItemCount />
          </ButtonGroup>
        </Box>
      </Box>
    );
  };

export default ItemDetail