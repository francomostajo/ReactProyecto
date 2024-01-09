import React from 'react';
import { Button, useToast } from '@chakra-ui/react';
import { useShoppingCart } from './Context/ShoppingCartContext';

const ItemCount = ({ product }) => {
  const { addToCart } = useShoppingCart();
  const [contador, setContador] = React.useState(0);
  const toast = useToast();

  const mostrarMensajeCarrito = () => {
    if (contador > 0) {
      addToCart({ ...product, quantity: contador });

      toast({
        title: 'Productos agregados con éxito',
        description: `Contamos con ${contador} unidades, así que apúrate para finalizar la compra.`,
        status: 'success',
        duration: 3000,
        isClosable: true,
      });

      setContador(0); // Mueve esta línea después de mostrar el toast
    } else {
      toast({
        title: 'Error',
        description: 'La cantidad no puede ser cero',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const sumar = () => {
    if (contador < 10) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
    <div>
      <Button backgroundColor='#fdcb00' size='xs' onClick={restar}>
        -
      </Button>
      <Button
        backgroundColor='#0f0f0fdc'
        color={'white'}
        onClick={mostrarMensajeCarrito}
      >
        Agregar al carrito {contador} unidades
      </Button>
      <Button backgroundColor='#fdcb00' size='xs' onClick={sumar}>
        +
      </Button>
    </div>
  );
};

export default ItemCount;