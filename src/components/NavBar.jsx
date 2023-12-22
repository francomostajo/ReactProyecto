import React, { useState } from 'react';
import './Styles/NavBar.css';
import CartWidget from './CartWidget';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="icon-container">
        <div className={`icon nav-icon-6 ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {isOpen && (
          <div className={`item-list-container ${isOpen ? 'active' : ''}`}>
            <div className={`bg-div ${isOpen ? 'active' : ''}`}></div>
            <ul>
              <li>Inicio</li>
              <li>Productos</li>
              <li>Contacto</li>
            </ul>
          </div>
        )}
      </div>
      <img src={"./img/amarrilloLogoTipo.png"} alt="Logo de la Tienda" className="logo-tienda" />
      <div className="cart-widget">
      <CartWidget/>
      <p>(3)</p>
      </div>
    </div>
  );
};

export default NavBar;
