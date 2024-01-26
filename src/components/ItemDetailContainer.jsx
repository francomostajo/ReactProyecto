import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import LoaderComponents from './LoaderComponents';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const db = getFirestore();
        const collections = ['colgantes', 'mesa', 'pared'];
  
        // Iterar sobre las colecciones hasta encontrar el producto
        for (const collectionName of collections) {
          const productRef = doc(db, collectionName, id);
          const productSnapshot = await getDoc(productRef);
  
          if (productSnapshot.exists()) {
            const productData = { ...productSnapshot.data(), id: productSnapshot.id };
            setProduct(productData);
            setLoading(false);
            break; 
          }
        }
      } catch (error) {
        console.error('Error al obtener el producto:', error);
        setLoading(false); 
      }
    };
  
    fetchProduct();
  }, [id]);

  return (
    <div>
      {loading ? (
        <LoaderComponents />
      ) : (
        <ItemDetail producto={product} />
      )}
    </div>
  );
};

export default ItemDetailContainer;