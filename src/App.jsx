import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar"; 
import ItemListContainer from "./components/ItemListContainer"; 
import './components/Styles/styleGlobal.jsx'; 
import ItemDetailContainer from "./components/ItemDetailContainer";
import Contacto from './components/Contacto';
import Trolley from './components/Trolley';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <div style={{ marginTop: '20px', padding: '20px', marginBottom: '20px' }}>
        <Routes>
          <Route exact path='/' element={<ItemListContainer />}/>
          <Route exact path='/contacto' element={<Contacto />}/>
          <Route exact path='/carrito' element={<Trolley />}/>
          <Route exact path='/producto/:id' element={<ItemDetailContainer />}/>
          <Route exact path='/categoria/:categoriaId' element={<ItemListContainer />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
