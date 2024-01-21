import React from 'react';
import { Card, CardBody, Image, Stack, Heading, Text, Divider, ButtonGroup,Button, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
const Item = ({ titulo, descripcion, precio, categoria, id, img }) => {
  return (
    <Box
      maxW='sm'
      w='full'
      borderWidth='1px'
      borderRadius='lg'
      overflow='hidden'
      boxShadow='lg'
      textAlign='center'
    >
      <Image
        src={img}
        alt='Green double couch with wooden legs'
        objectFit='cover'
        h='full'
        w='full'
      />
      <Box p='6' bg='white'>
        <Stack spacing='3'>
          <Heading size='md'>{titulo}</Heading>
        </Stack>
      </Box>
      <Divider />
      <Box p='6' bg='white'>
        <ButtonGroup spacing='2'>
        <Button bg='#fdcb00' borderColor='#fdcb00' _hover={{ background: '#0f0f0fdc', color:'white'}}>
          <Link to={`/producto/${id}`}>
            Ver Detalles
          </Link>
        </Button>
{console.log('ID desde Item:', id)}
        </ButtonGroup>
      </Box>
    </Box>
  );
};

export default Item;