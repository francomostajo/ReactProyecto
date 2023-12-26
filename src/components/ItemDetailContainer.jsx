import React from 'react'
import ItemDetail from './ItemDetail'
const ItemDetailContainer = () => {
    

const productos =[{ id: 1, titulo:"Lampara 1",descripcion:"este producto es expectacular",precio:"2000",categoria:"A"},
{ id: 2, titulo:"Lampara 2",descripcion:"este producto es expectacular",precio:"3000",categoria:"A"},
{ id: 3, titulo:"Lampara 3",descripcion:"este producto es expectacular",precio:"3000",categoria:"A"},
{ id: 4, titulo:"Lampara 4",descripcion:"este producto es expectacular",precio:"3000",categoria:"B"},
{ id: 5, titulo:"Lampara 5",descripcion:"este producto es expectacular",precio:"3000",categoria:"B"},
{ id: 6, titulo:"Lampara 6",descripcion:"este producto es expectacular",precio:"3000",categoria:"B"},
{ id: 7, titulo:"Lampara 7",descripcion:"este producto es expectacular",precio:"3000",categoria:"C"},
{ id: 8, titulo:"Lampara 8",descripcion:"este producto es expectacular",precio:"3000",categoria:"C"},
{ id: 9, titulo:"Lampara 9",descripcion:"este producto es expectacular",precio:"4000",categoria:"C"},
{ id: 10, titulo:"Lampara 10",descripcion:"este producto es expectacular",precio:"3000",categoria:"A"}
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
return (<div>
    {
        productos.map ((p)=>{
        return(
            <ItemDetail 
            titulo={p.titulo}
            descripcion={p.descripcion}
            precio={p.precio}
            categoria={p.categoria}/>
            )
        })
    }
</div>
)
}

export default ItemDetailContainer