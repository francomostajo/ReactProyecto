import React, { useState, useEffect } from 'react';
import { useShoppingCart } from './Context/ShoppingCartContext';
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Text,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Grid, 
  GridItem,
  // ... (otros imports de Chakra UI)
} from '@chakra-ui/react';
import ProductCardForm from './ProductCardForm';

const Form = () => {
  const { cart, cantidadTotal, precioTotal, calcularPrecioTotalItem, clearCart } = useShoppingCart();
  const [formData, setFormData] = useState({
    nombre: '',
    direccion: '',
    correo: '',
    numero: '',
  });
  const [orderId, setOrderId] = useState(null);
  const [error, setError] = useState(null);
  const [showOrderSummary, setShowOrderSummary] = useState(false);
  const [tempTotalAmount, setTempTotalAmount] = useState(0);
  const [tempTotalPrice, setTempTotalPrice] = useState(0);
  const db = getFirestore();
  
  useEffect(() => {
    if (orderId !== null) {
      setShowOrderSummary(true);
    }
  }, [orderId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Validar que al menos haya un producto en el carrito
      if (cart.length === 0) {
        throw new Error('El carrito está vacío. Agregue al menos un producto antes de finalizar la compra.');
      }

      // Validar que todos los campos obligatorios estén llenos
      if (!formData.nombre || !formData.direccion || !formData.correo || !formData.numero) {
        throw new Error('Todos los campos son obligatorios.');
      }

      // Lógica para enviar datos a Firebase
      const ordersCollection = collection(db, 'orders');

      // Crear un documento con la información del carrito y los detalles del cliente
      const order = {
        cliente: {
          nombre: formData.nombre,
          direccion: formData.direccion,
          correo: formData.correo,
          numero: formData.numero,
        },
        carrito: cart,
        cantidadTotal: cantidadTotal,
        precioTotal: precioTotal,
      };

      // Enviar datos a Firebase
      const docRef = await addDoc(ordersCollection, order);

      // Establecer el ID de la orden para mostrar al usuario
      setOrderId(docRef.id);

      // Guardar temporalmente la cantidad y precio totales antes de limpiar el carrito
      setTempTotalAmount(cantidadTotal);
      setTempTotalPrice(precioTotal);

      // Limpiar el carrito después de completar la orden
      clearCart();

      // Mostrar el resumen del pedido
      setError(null);
    } catch (error) {
      // Capturar el error y mostrar la alerta
      setError(error.message);
    }
  };

  // Restablecer temporalmente la cantidad y precio totales al cerrar el resumen del pedido
  const handleOrderSummaryClose = () => {
    setShowOrderSummary(false);
    setTempTotalAmount(0);
    setTempTotalPrice(0);
    setOrderId(null);
    setFormData({
      nombre: '',
      direccion: '',
      correo: '',
      numero: '',
    });
  };

  return (
    <>
      <Grid templateColumns='repeat(2, 1fr)' gap={4}>
        <GridItem colSpan={1}>
          <VStack align='stretch' spacing={4}>
            {/* Iterar sobre el carrito y mostrar ProductCard */}
            {cart.map((item) => (
              <ProductCardForm key={item.id} product={item} calcularPrecioTotalItem={calcularPrecioTotalItem} />
            ))}
          </VStack>
        </GridItem>
        <GridItem colSpan={1}>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel>Nombre y Apellido</FormLabel>
              <Input type="text" name="nombre" placeholder="Ingrese su nombre y apellido" onChange={handleChange} value={formData.nombre} />
            </FormControl>
            <FormControl>
              <FormLabel>Dirección</FormLabel>
              <Input type="text" name="direccion" placeholder="Ingrese su dirección" onChange={handleChange} value={formData.direccion} />
            </FormControl>
            <FormControl>
              <FormLabel>Número</FormLabel>
              <Input type="number" name="numero" placeholder="Ingrese su número" onChange={handleChange} value={formData.numero} />
            </FormControl>
            <FormControl>
              <FormLabel>Correo Electrónico</FormLabel>
              <Input type="email" name="correo" placeholder="Ingrese su correo electrónico" onChange={handleChange} value={formData.correo} />
            </FormControl>
            <Button type="submit" colorScheme="blue">
              Finalizar Compra
            </Button>
          </form>
        </GridItem>
      </Grid>

      {/* Mostrar la alerta en caso de error */}
      {error && (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {/* Resumen del Pedido */}
      <AlertDialog isOpen={showOrderSummary} onClose={handleOrderSummaryClose} size="lg">
        <AlertDialogOverlay />
        <AlertDialogContent bg="#0f0f0fdc" color="#fff" borderRadius="5px">
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Resumen del Pedido
          </AlertDialogHeader>
          <AlertDialogBody>
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  {item.nombre} - Cantidad: {item.quantity} - Precio Unitario: ${item.precio} - Precio Total: ${calcularPrecioTotalItem(item)}
                </li>
              ))}
              <hr />
              <li>Cantidad total en el carrito: {tempTotalAmount}</li>
              <li>Precio total de todos los productos: ${tempTotalPrice}</li>
              <li>Nombre: {formData.nombre}</li>
              <li>Dirección: {formData.direccion}</li>
              <li>Número: {formData.numero}</li>
              <li>Correo Electrónico: {formData.correo}</li>
              {/* Mostrar el mensaje del pedido */}
              <p>Su número de pedido es: {orderId}</p>
            </ul>
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button onClick={handleOrderSummaryClose} colorScheme="blue">
              OK
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default Form;
