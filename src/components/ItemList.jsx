import React from 'react'
import Item from './Item'

const ItemList = ({ productos }) => {
  return (
    <div>
        {
            productos.map((p)=> {
                return(<div>
                <Item
                titulo={p.titulo}
                descripcion={p.descripcion}
                precio={p.precio}
                categoria={p.precio} />
                </div>)
            })
        }
    </div>
  )
}

export default ItemList