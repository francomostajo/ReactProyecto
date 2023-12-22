import React from 'react'
import { Button } from '@chakra-ui/react'
const ItemCount = () => {
  return (
    <div>
        <Button backgroundColor='#fdcb00'  size='xs'>
            -
        </Button>
        <Button backgroundColor= '#0f0f0fdc' color={'white'}>
            Agregar al carrito
        </Button>
        <Button backgroundColor='#fdcb00' size='xs'>
            +
        </Button>
    </div>
  )
}

export default ItemCount