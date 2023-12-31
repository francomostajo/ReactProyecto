import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar"; 
import ItemListContainer from "./components/ItemListContainer"; 
import './components/Styles/styleGlobal.jsx'; 
import ItemDetailContainer from "./components/ItemDetailContainer";
import Contacto from './components/Contacto';
import Trolley from './components/Trolley';
import LoaderComponents from './components/LoaderComponents';
import { ShoppingCartProvider } from './components/Context/ShoppingCartContext.jsx'; // Importa el proveedor del contexto

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoading(false); // Una vez que la carga está completa, establece isLoading en false
    };

    fetchData();
  }, []); // El efecto se ejecutará solo una vez al montar el componente

  return (
    <BrowserRouter>
      <ShoppingCartProvider> {/* Envuelve tu aplicación con el proveedor del contexto */}
        <NavBar />
        <div style={{ marginTop: '20px', padding: '20px', marginBottom: '20px' }}>
          {isLoading ? (
            <LoaderComponents />
          ) : (
            // Renderizar el contenido principal cuando isLoading sea false
            <Routes>
              <Route exact path='/' element={<ItemListContainer />}/>
              <Route exact path='/contacto' element={<Contacto />}/>
              <Route exact path='/carrito' element={<Trolley />}/>
              <Route exact path='/producto/:id' element={<ItemDetailContainer />}/>
              <Route exact path='/categoria/:categoriaId' element={<ItemListContainer />}/>
            </Routes>
          )}
        </div>
      </ShoppingCartProvider>
    </BrowserRouter>
  );
}

export default App;