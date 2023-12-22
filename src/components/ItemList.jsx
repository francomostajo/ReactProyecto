import React from 'react'

const ItemList = ({ productos }) => {
  return (
    <div>
        {
            productos.map((p)=> {
                return(<div>
<h1>{p.titulo}</h1>
<p>{p.descripcion}</p>
<p>${p.precio}</p>
                </div>)
            })
        }
    </div>
  )
}

export default ItemList