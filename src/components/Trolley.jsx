import React from 'react';
import { Button, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter, useDisclosure, List, ListItem, Text } from '@chakra-ui/react';
import { useShoppingCart } from './Context/ShoppingCartContext';

const Trolley = () => {
  console.log('Trolley component is rendering');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { cart } = useShoppingCart();

  console.log('Cart:', cart);

  const agruparProductosPorId = (productos) => {
    const groupedProducts = [];

    productos.forEach((item) => {
      const existingItem = groupedProducts.find((groupedItem) => groupedItem.id === item.id);

      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        groupedProducts.push({ ...item });
      }
    });

    return groupedProducts;
  };

  return (
    <>
      <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Shopping Cart</DrawerHeader>

          <DrawerBody>
            {cart.length === 0 ? (
              <Text>Your cart is empty</Text>
            ) : (
              <List spacing={2}>
                {agruparProductosPorId(cart).map((groupedItem) => (
                  <ListItem key={groupedItem.id}>
                    <Text>
                      {groupedItem.title} - ${groupedItem.price} - Quantity: {groupedItem.quantity}
                    </Text>
                  </ListItem>
                ))}
              </List>
            )}
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Close
            </Button>
            {/* Puedes agregar botones adicionales o lógica relacionada con el carrito aquí */}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Trolley;