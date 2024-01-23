import React, { useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
  VStack,
  Stack,
  Text,
  Button as ChakraButton,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useShoppingCart } from './Context/ShoppingCartContext';



const CartWidget = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isHovered, setIsHovered] = useState(false);
  const { cart, cantidadTotal, cantidadPorProducto, precioTotal, calcularPrecioTotalItem, addToCart, removeFromCart  } = useShoppingCart();

  const handleMouseEnter = () => {
    setIsHovered(true);
    onOpen();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onClose();
  };

  const handleAddToCart = (productId) => {
    addToCart({ id: productId, quantity: 1 });
    localStorage.setItem('cart', JSON.stringify(cart));
  };
  
  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
    localStorage.setItem('cart', JSON.stringify(cart));
  };
  
  const handleClearCart = () => {
    clearCart();
    localStorage.setItem('cart', JSON.stringify(cart));
  };
  
  const handleRemoveAllItem = (productId) => {
    removeAllItem(productId);
    localStorage.setItem('cart', JSON.stringify(cart));
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
                  <Text>El carrito está vacío</Text>
                ) : (
                  <VStack spacing={4} align="start">
                    {cart.map((item) => (
                      <Stack key={item.id} spacing={1}>
                        <Text fontSize="lg">{item.nombre}</Text>
                        <Text fontSize="md">
                          Cantidad: {item.quantity} - Precio Unitario: ${item.precio} - Precio Total: ${calcularPrecioTotalItem(item)}
                        </Text>
                        <Stack direction="row">
                          <Button backgroundColor='#fdcb00' size='xs' onClick={() => handleRemoveFromCart(item.id)}>
                            -
                          </Button>
                          <Text>{item.quantity}</Text>
                          <Button backgroundColor='#fdcb00' size='xs' onClick={() => handleAddToCart(item.id)}>
                            +
                          </Button>
                        </Stack>
                      </Stack>
                    ))}
                    <hr />
                    {cart.length > 0 && (
                      <>
                        <Text>Cantidad total en el carrito: {cantidadTotal}</Text>
                        <Text>Precio total de todos los productos: ${precioTotal}</Text>
                      </>
                    )}
                  </VStack>
                )}
              </DrawerBody>
            <DrawerFooter>
            <Link to={"/"}>
              <Button variant='outline' mr={3} onClick={onClose} color='#fdcb00'>
                Seguir comprando
              </Button>
            </Link>
            <Link to='/carrito'>
              <ChakraButton colorScheme='blue' onClick={onClose}>
                Finalizar Compra
              </ChakraButton>
            </Link>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default CartWidget;

