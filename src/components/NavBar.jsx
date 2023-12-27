import React from 'react';
import CartWidget from './CartWidget';
import {
  Box,
  Button,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Divider,
  Center,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { HamburgerIcon, ChevronDownIcon  } from '@chakra-ui/icons';
import { Link, useNavigate } from 'react-router-dom';
import './Styles/NavBar.css';

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const categories = [
    { id: 1, name: 'Lámparas de Techo', link: '/categoria/colgantes' },
    { id: 2, name: 'Lámparas de Pared', link: '/categoria/pared' },
    { id: 3, name: 'Lámparas de Mesa', link: '/categoria/mesa' },
  ];

  const handleCategoryChange = (selectedCategory) => {
    navigate(selectedCategory);
    onClose();
  };

  return (
    <div className='navbar'>
      <IconButton
        color='#fdcb00'
        borderColor='#fdcb00'
        size='lg'
        aria-label='Options'
        icon={<HamburgerIcon fontSize='2xl' />} 
        variant='outline'
        onClick={onOpen}
      />
      <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg='#0f0f0fdc' color='#fff' borderRadius='5px'>
          <DrawerHeader borderBottomWidth='2px'>Menú</DrawerHeader>
          <DrawerBody>
            <Link to={"/"}>
              <Box
                as="button"
                fontSize='lg'
                textAlign="center"
                width="100%"
                py={2}
                mb={4}
                onClick={onClose}
                _hover={{ background: '#fdcb00', color:'black'}}
              >
                Inicio
              </Box>
            </Link>
            <Divider />
            <Center>
              <p style={{ fontSize: '1.125rem', textAlign: 'center' }}>
                Categorías
              </p>
            </Center>
            <Center>
              <Menu>
              <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            mt={4}
            bg='#fdcb00' // Color de fondo
            color='#000' // Color de texto
            borderRadius='5px' // Radio del borde
          >
                  Todas las categorías
                </MenuButton>
                <MenuList bg='#0f0f0fdc;' >
                  {categories.map((category) => (
                                  <MenuItem
                                  key={category.id}
                                  onClick={() => handleCategoryChange(category.link)}
                                  bg='#0f0f0fdc;' // Color de fondo de cada opción del menú
                                  color='white' // Color de texto de cada opción del menú
                                  _hover={{ background: '#fdcb00', color:'black'}}
                                >
                      {category.name}
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
            </Center>
            <Divider mt={4} />
            <Link to={"/carrito"}>
              <Box
                as="button"
                fontSize='lg'
                textAlign="center"
                width="100%"
                py={2}
                mb={4}
                onClick={onClose}
                _hover={{ background: '#fdcb00', color:'black'}}
              >
                Carrito
              </Box>
            </Link>
            <Divider mt={4} />
            <Box
              as="button"
              fontSize='lg'
              textAlign="center"
              width="100%"
              py={2}
              onClick={onClose}
              _hover={{ background: '#fdcb00', color:'black'}}
            >
              Contacto
            </Box>
            <Divider mt={4} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Link to={"/"}>
        <img src={"./img/amarrilloLogoTipo.png"} alt="Logo de la Tienda" className="logo-tienda" />
      </Link>
      <Link to={"/carrito"}>
        <div className="cart-widget">
          <CartWidget />
          <p>(3)</p>
        </div>
      </Link>
    </div>
  );
};

export default NavBar;