import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const db = getFirestore();

        // Lista de categorías a considerar
        const categories = ['colgantes', 'mesa', 'pared'];

        // Obtener todos los productos
        const allProducts = [];
        for (const category of categories) {
          const itemsCollection = collection(db, category);
          const snapshot = await getDocs(itemsCollection);
          const productosFirebase = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
          allProducts.push(...productosFirebase);
          
        }
        console.log('All Products:', allProducts);
        
        const filteredProducts = categoryId
        ? allProducts.filter((prod) => prod.categoria === categoryId)
        : allProducts;

      setProductos(filteredProducts);
    } catch (error) {
      console.error('Error fetching data from Firebase:', error);
    }
    
  };

    obtenerProductos();
  }, [categoryId]);

  return <ItemList productos={productos} />;
};

export default ItemListContainer;

