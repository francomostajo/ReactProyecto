import React, { useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Button, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter, useDisclosure } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    onOpen();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onClose();
  };

  const handleFinalizarCompra = () => {
    // Realizar acciones necesarias antes de finalizar la compra
    // ...

    // Cerrar el Drawer
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
            <p>Contenido del carrito...</p>
          </DrawerBody>
          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose} color='#fdcb00'>
              Seguir comprando
            </Button>
            <Link to='/carrito'>
              <Button colorScheme='blue' onClick={handleFinalizarCompra}>
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