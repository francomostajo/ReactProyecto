import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore } from "firebase/firestore"

const repaso = () => {
  /* ITEM DETAIL CONTEINER*/
      const { id }= useParams()
      const [product, setProducts] = useState([])
      useEffect(()=>{
          const db= getFirestore()
          const oneItem =doc(db,"zapatos", `${id}`)
          getDoc(oneItem).then((snapshot)=>{
            if(snapshot.exists()){
              const doc= snapshot.data()
              setProducts(doc)
            }
          })
      },[])


return(
  <div>
    Producto: {product.nombre}
    precio: {product.precio}
  </div>
)
  /* ITEM LIST CONTEINER*/
/*     const [products, setProducts] = useState([])
    useEffect(() =>{
      const db= getFirestore()
      const itemsCollection= collection (db, "colgantes")

      getDocs(itemsCollection).then((snapshot)=>{
        const docs= snapshot.docs.map((doc)=>doc.data())
        console.log(docs)
        setProducts(docs)
      })

    }, [])
  
  return (
    <div>
      {
        products.map((p)=>(
          <>
          
          </>
        ))
      }
    </div>
  ) */
}

export default repaso