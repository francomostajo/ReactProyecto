import React, { useState, useRef } from 'react';
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
} from '@chakra-ui/react';

const Form = () => {
  const initialFormData = {
    nombre: '',
    direccion: '',
    correo: '',
    numero: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [showOrderSummary, setShowOrderSummary] = useState(false);
  const [orderNumber, setOrderNumber] = useState(null);
  const [purchaseId, setPurchaseId] = useState(null);
  const [error, setError] = useState(null); // Agregada variable de estado para manejar errores
  const formRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Lógica para procesar el formulario, enviar datos, etc.
      console.log('Datos del formulario:', formData);

      // Simular una operación asíncrona (puedes reemplazarlo con tu lógica real)
      await new Promise((resolve, reject) => {
        // Aquí puedes verificar condiciones y lanzar un error si es necesario
        // Por ejemplo, podrías lanzar un error si algún campo está vacío
        if (!formData.nombre || !formData.direccion || !formData.correo || !formData.numero) {
          reject(new Error('Todos los campos son obligatorios.'));
        }

        // Si todo está bien, resuelve la promesa
        resolve();
      });

      // Generar un número ficticio de pedido (puedes reemplazarlo con lógica real)
      const generatedOrderNumber = Math.floor(Math.random() * 1000) + 1;
      setOrderNumber(generatedOrderNumber);

      // Mostrar el resumen del pedido
      setShowOrderSummary(true);
      setError(null); // Limpiar el mensaje de error en caso de éxito
    } catch (error) {
      // Capturar el error y mostrar la alerta
      setError(error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleOrderSummaryClose = () => {
    // Cerrar el resumen del pedido
    setShowOrderSummary(false);

    // Resetear el formulario después de cerrar el resumen
    setFormData(initialFormData);
    formRef.current.reset();

    // Actualizar el número de pedido en el mensaje de agradecimiento
    setPurchaseId(orderNumber);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} ref={formRef}>
        <VStack spacing={10} align="stretch">
          <FormControl>
            <FormLabel>Nombre y Apellido</FormLabel>
            <Input
              type="text"
              name="nombre"
              placeholder="Ingrese su nombre y apellido"
              value={formData.nombre}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Dirección</FormLabel>
            <Input
              type="text"
              name="direccion"
              placeholder="Ingrese su dirección"
              value={formData.direccion}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Número</FormLabel>
            <Input
              type="number"
              name="numero"
              placeholder="Ingrese su numero"
              value={formData.numero}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Correo Electrónico</FormLabel>
            <Input
              type="email"
              name="correo"
              placeholder="Ingrese su correo electrónico"
              value={formData.correo}
              onChange={handleChange}
            />
          </FormControl>
          <Button type="submit" colorScheme="blue">
            Finalizar Compra
          </Button>
        </VStack>
      </form>

      {/* Mostrar la alerta en caso de error */}
      {error && (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {/* Resumen del Pedido */}
      <AlertDialog isOpen={showOrderSummary} onClose={handleOrderSummaryClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Resumen del Pedido
            </AlertDialogHeader>
            <AlertDialogBody>
              {/* Mostrar los datos del cliente */}
              <p>Nombre: {formData.nombre}</p>
              <p>Dirección: {formData.direccion}</p>
              <p>Número: {formData.numero}</p>
              <p>Correo Electrónico: {formData.correo}</p>
              {/* Mostrar el mensaje del pedido */}
              <p>Su número de pedido es: {orderNumber}</p>
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button onClick={handleOrderSummaryClose} colorScheme="blue">
                OK
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
      <Text>
        {`Gracias por tu compra, tu número de pedido es: ${purchaseId}`}
      </Text>
    </div>
  );
};

export default Form;