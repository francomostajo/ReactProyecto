import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import Item from './Item';
import LoaderComponents from './LoaderComponents';

const ItemList = ({ productos }) => {
  return (
    <Grid templateColumns='repeat(4, 1fr)' gap={10}>
      {productos ? (
        productos.map((producto) => (
          <GridItem key={producto.id} w='100%' h='100%' paddingTop='8rem' paddingLeft='5rem' paddingBottom='5rem' paddingRight='5rem'>
            <Item
              id={producto.id}
              titulo={producto.nombre}
              descripcion={producto.descripcion}
              precio={producto.precio}
              img={producto.img}
            />
          </GridItem>
        ))
      ) : (
        <LoaderComponents />
      )}
    </Grid>
  );
};

export default ItemList;