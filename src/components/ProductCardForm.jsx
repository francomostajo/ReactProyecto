import React from 'react';
import {
  Button,
  useDisclosure,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogBody,
  AlertDialogFooter,
  VStack,
  Stack,
  Heading,
  Text as CardText,
  Button as CardButton,
  Card,
  Image,
  Text
} from '@chakra-ui/react';
import { useShoppingCart } from './Context/ShoppingCartContext';

const ProductCardForm = ({ product, calcularPrecioTotalItem }) => {
  const { addToCart, removeFromCart, removeAllItem } = useShoppingCart();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleRemoveFromCart = () => {
    onOpen();
  };

  const handleAddToCart = () => {
    addToCart({ id: product.id, quantity: 1 });
  };

  const confirmRemoveFromCart = () => {
    removeAllItem(product.id);
    onClose();
  };

  return (
    <>
      <AlertDialog isOpen={isOpen} onClose={onClose}>
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader>Eliminar Producto</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            ¿Está seguro de que desea eliminar este producto del carrito?
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button colorScheme="red" onClick={confirmRemoveFromCart}>
              Eliminar
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        align='center'
        minW={{ base: '60%'}}
        width={{ base: '60%'}} 
      >
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '200px' }}
          src={product.img}
          alt={product.nombre}
        />

        <VStack p="6" align="center" spacing="1">
          <Heading fontSize="xl">{product.nombre}</Heading>
          <CardText fontSize="md">
            Cantidad: {product.quantity} - Precio Unitario: ${product.precio} - Precio Total: ${calcularPrecioTotalItem(product)}
          </CardText>
          <Stack direction="row">
            <Button backgroundColor='#fdcb00' size='xs' onClick={() => removeFromCart(product.id)}>
              -
            </Button>
            <Text>{product.quantity}</Text>
            <Button backgroundColor='#fdcb00' size='xs' onClick={handleAddToCart}>
              +
            </Button>
          </Stack>

          <Stack mt="2" align="center">
            <CardButton
              backgroundColor='#e74c3c'
              color='white'
              size='xs'
              onClick={handleRemoveFromCart}
            >
              Eliminar del carrito
            </CardButton>
          </Stack>
        </VStack>
      </Card>
    </>
  );
};

export default ProductCardForm;