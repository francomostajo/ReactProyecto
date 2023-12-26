import { useState } from 'react';
import { Button, useToast } from '@chakra-ui/react';

const ItemCount = () => {
  const [contador, setContador] = useState(0);
  const toast = useToast();

  const mostrarMensajeCarrito = () => {
    const toastProductosAlCarrito = new Promise((resolve) => {
      setTimeout(() => resolve(100), 1000);
    });

    toast.promise(toastProductosAlCarrito, {
      success: {
        title: 'Productos agregados con éxito',
        description: `Contamos con ${contador} unidades, así que apúrate para finalizar la compra.`,
      },
      error: {
        title: 'No se pudo realizar la compra',
        description: `No contamos con suficiente stock de ${contador} unidades.`,
      },
      loading: {
        title: `Agregando ${contador} unidades al carrito`,
        description: 'Espere unos segundos, mientras verificamos stock.',
      },
    });
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