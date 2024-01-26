import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar"; 
import ItemListContainer from "./components/ItemListContainer"; 
import './components/Styles/styleGlobal.jsx'; 
import ItemDetailContainer from "./components/ItemDetailContainer";
import Contacto from './components/Contacto';
import Form from './components/Form.jsx';
import LoaderComponents from './components/LoaderComponents';
import { ShoppingCartProvider } from './components/Context/ShoppingCartContext.jsx'; // Importa el proveedor del contexto

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setIsLoading(false);
    };

    fetchData();
  }, []); 
  return (
    <BrowserRouter>
      <ShoppingCartProvider>
        <NavBar />
        <div style={{ marginTop: '0px', padding: '0x', marginBottom: '0px' }}>
          {isLoading ? (
            <LoaderComponents />
          ) : (
            // Renderizar el contenido principal cuando isLoading sea false
            <Routes>
              <Route exact path='/' element={<ItemListContainer />}/>
              <Route exact path='/contacto' element={<Contacto />}/>
              <Route exact path='/carrito' element={<Form />}/>
              <Route exact path='/producto/:id' element={<ItemDetailContainer />}/>
              <Route exact path='/categoria/:categoryId' element={<ItemListContainer />} />
            </Routes>
          )}
        </div>
      </ShoppingCartProvider>
    </BrowserRouter>
  );
}

export default App;