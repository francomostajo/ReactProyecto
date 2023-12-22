import React from 'react'
import ItemList from './ItemList'

const ItemListContainer = ({greeting}) => {

const productos =[{titulo:"Lampara 1",descripcion:"este producto es expectacular",precio:"2000",categoria:"A"},
                  {titulo:"Lampara 2",descripcion:"este producto es expectacular",precio:"3000",categoria:"B"},
                  {titulo:"Lampara 3",descripcion:"este producto es expectacular",precio:"4000",categoria:"C"}
]
const mostrarProductos = new Promise((resolve, reject) => {
  if(productos.length > 0){
    setTimeout(()=>{
      resolve(productos)
    },3000)
  }else{
    reject("No se obtuvieron los productos")
  }
})
mostrarProductos
.then((resultado)=>{
  console.log(resultado)
})
.catch((error) => {
  console.log(error)
})
return (
  <div><ItemList productos={productos} />
  </div>
)
}

export default ItemListContainer

