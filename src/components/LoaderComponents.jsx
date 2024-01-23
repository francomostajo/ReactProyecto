import { Skeleton } from '@chakra-ui/react'
import React from 'react'

const LoaderComponents = () => {
  return (
    <div>
        <Skeleton startColor='pink.500' endColor='orange.500' height='20px' />
    </div>
  )
}

export default LoaderComponents