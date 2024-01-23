import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, addDoc, getFirestore } from "firebase/firestore"
import { EmailIcon } from '@chakra-ui/icons';

const repaso = () => {

  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [orderId, setOrderID] = useState("")
  const db = getFirestore()

  const handleSubmit=(e)=>{
    e.preventDefault()
    addDoc(ordersCollection, order).then(({id})=>
    setOrderId(id))
    }
    const order = {
      nombre,
      email
    }
    const  ordersCollection = collection(db, "orden")
      console.log("enviado")

  nombre
  email
  orderId
  return (
    <div>
      <form action="" n Submit={handleSubmit}>
        <input type="text" placeholder='Nombre' onChange={(e)=> setNombre(e.target.value)} value={nombre}/>
        <input type="email" placeholder='Correo'onChange={(e)=> setEmail(e.target.value)} value={email} />
        <button type='submit'>Enviar </button>
      </form>
      <p>{orderId}</p>
    </div>
  )
  /* ITEM DETAIL CONTEINER
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