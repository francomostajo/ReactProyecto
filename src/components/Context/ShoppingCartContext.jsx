import React, { createContext, useContext, useState, useEffect } from 'react';

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cantidadTotal, setCantidadTotal] = useState(0);
  const [cantidadPorProducto, setCantidadPorProducto] = useState({});
  const [precioTotal, setPrecioTotal] = useState(0);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const calcularPrecioTotalItem = (item) => {
    return item && item.quantity ? item.quantity * item.precio : 0;
  };

  useEffect(() => {
    let nuevaCantidadTotal = 0;
    let nuevaCantidadPorProducto = {};
    let nuevoPrecioTotal = 0;

    cart.forEach((item) => {
      nuevaCantidadTotal += item.quantity;

      if (item.id in nuevaCantidadPorProducto) {
        nuevaCantidadPorProducto[item.id] += item.quantity;
      } else {
        nuevaCantidadPorProducto[item.id] = item.quantity;
      }

      nuevoPrecioTotal += calcularPrecioTotalItem(item);
    });

    setCantidadTotal(nuevaCantidadTotal);
    setCantidadPorProducto(nuevaCantidadPorProducto);
    setPrecioTotal(nuevoPrecioTotal);
  }, [cart]);

  return (
    <ShoppingCartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, cantidadTotal, cantidadPorProducto, precioTotal, calcularPrecioTotalItem }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

const useShoppingCart = () => {
  const context = useContext(ShoppingCartContext);
  if (!context) {
    throw new Error('useShoppingCart debe usarse dentro de un ShoppingCartProvider');
  }
  return context;
};

export { ShoppingCartProvider, useShoppingCart };