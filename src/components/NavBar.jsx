import React from 'react';
import CartWidget from './CartWidget';
import {
  Menu,
  MenuButton,
  Box,
  IconButton,
  Select,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Divider,
  Center,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import './Styles/NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className='navbar'>
      <Menu>
        <MenuButton
          color='#fdcb00'
          borderColor='#fdcb00'
          size='lg'
          as={IconButton}
          aria-label='Options'
          icon={<HamburgerIcon fontSize='2xl' />}
          variant='outline'
          onClick={onOpen}
        />
        <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
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
                _hover={{ background: '#fdcb00' }}
              >
                Inicio
              </Box>
              </Link>
              <Divider />
              <Center>
                <p style={{ fontSize: '1.125rem', textAlign: 'center' }} >
                  Categorías
                </p>
              </Center>
              <Center>
                <Select placeholder='Todas las categorías'  _hover={{ background: '#fdcb00' }} mt={4}>
                  <option value='option1'>Option 1</option>
                  <option value='option2'>Option 2</option>
                  <option value='option3'>Option 3</option>
                </Select>
              </Center>
              <Divider mt={4} />
              <Link to={"./carrito"}>
              <Box
                as="button"
                fontSize='lg'
                textAlign="center"
                width="100%"
                py={2}
                mb={4}
                onClick={onClose}
                _hover={{ background: '#fdcb00' }}
              >
                Carrito
              </Box>
              </Link>
              <Divider mt={4}/>
              <Box
                as="button"
                fontSize='lg'
                textAlign="center"
                width="100%"
                py={2}
                onClick={onClose}
                _hover={{ background: '#fdcb00' }}
              >
                Contacto
              </Box>
              <Divider mt={4}/>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Menu>
      <Link to={"/"}>
      <img src={"./img/amarrilloLogoTipo.png"} alt="Logo de la Tienda" className="logo-tienda" />
      </Link>
      <Link to={"./carrito"}>
      <div className="cart-widget">
        <CartWidget />
        <p>(3)</p>
      </div>
      </Link>
    </div>
  );
};

export default NavBar;