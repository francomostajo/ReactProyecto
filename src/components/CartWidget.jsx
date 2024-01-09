import React, { useState, useEffect } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Button, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter, useDisclosure } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useShoppingCart } from './Context/ShoppingCartContext'; // Importa el contexto del carrito

const CartWidget = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isHovered, setIsHovered] = useState(false);
  const { cart, cantidadTotal, cantidadPorProducto, precioTotal, calcularPrecioTotalItem } = useShoppingCart(); // Obtén el estado del carrito desde el contexto

  const handleMouseEnter = () => {
    setIsHovered(true);
    onOpen();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onClose();
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <AiOutlineShoppingCart size={40} />
      <Drawer
        isOpen={isOpen && isHovered}
        placement='right'
        onClose={onClose}
        size='sm'
      >
        <DrawerOverlay />
        <DrawerContent bg='#0f0f0fdc' color='#fff' borderRadius='5px'>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='2px'>Tu Carrito</DrawerHeader>
          <DrawerBody>
            {cart.length === 0 ? (
              <p>El carrito está vacío</p>
            ) : (
              <ul>
                {cart.map((item) => (
                  <li key={item.id}>
                    {item.titulo} - Cantidad: {item.quantity} - Precio Unitario: ${item.precio} - Precio Total: ${calcularPrecioTotalItem(item)}
                  </li>
                ))}
                <hr />
                <li>Cantidad total en el carrito: {cantidadTotal}</li>
                <li>Precio total de todos los productos: ${precioTotal}</li>
              </ul>
            )}
          </DrawerBody>
          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose} color='#fdcb00'>
              Seguir comprando
            </Button>
            <Link to='/carrito'>
              <Button colorScheme='blue' onClick={onClose}>
                Finalizar Compra
              </Button>
            </Link>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default CartWidget;