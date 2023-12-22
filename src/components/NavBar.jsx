import React from 'react';
import CartWidget from './CartWidget';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Select } from '@chakra-ui/react';
import { HamburgerIcon, AddIcon, ExternalLinkIcon, RepeatIcon, EditIcon } from '@chakra-ui/icons';
import './Styles/NavBar.css';

const NavBar = () => {
  return (
  <div className='navbar'>
    <Menu>
  <MenuButton 
    color='#fdcb00'
    borderColor='#fdcb00' 
    size='lg'
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon fontSize='2xl'/> }
    variant='outline'
  />
  <MenuList color={'black'} bg={'#fdcb00'}>
  
    <Select placeholder='Categorias'>
  <option value='option1'>Option 1</option>
  <option value='option2'>Option 2</option>
  <option value='option3'>Option 3</option>
  </Select>
    
    <MenuItem icon={<ExternalLinkIcon />} command='⌘N'>
      New Window
    </MenuItem>
    <MenuItem icon={<RepeatIcon />} command='⌘⇧N'>
      Open Closed Tab
    </MenuItem>
    <MenuItem icon={<EditIcon />} command='⌘O'>
      Open File...
    </MenuItem>
  </MenuList>
</Menu>
<img src={"./img/amarrilloLogoTipo.png"} alt="Logo de la Tienda" className="logo-tienda" />
      <div className="cart-widget">
      <CartWidget/>
      <p>(3)</p>
      </div>
</div>
  )
}

export default NavBar
