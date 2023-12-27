import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import Item from './Item';

const ItemList = ({ productos }) => {
  return (
    <Grid templateColumns='repeat(4, 1fr)' gap={10}>
      {productos.map((producto) => (
        <GridItem key={producto.id} w='100%' h='100%' paddingTop='8rem' paddingLeft='5rem' paddingBottom='5rem' paddingRight='5rem'> {/* Ajusta el valor de marginBottom según tus necesidades */}
          <Item
            id={producto.id}
            titulo={producto.titulo}
            descripcion={producto.descripcion}
            precio={producto.precio}
            categoria={producto.categoria}
            img={producto.img}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

export default ItemList;