import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import LoaderComponents from './LoaderComponents';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const db = getFirestore();
        const categories = ['colgantes', 'mesa', 'pared'];
        const allProducts = [];

        for (const category of categories) {
          const itemsCollection = collection(db, category);
          const snapshot = await getDocs(itemsCollection);
          const productosFirebase = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
          allProducts.push(...productosFirebase);
        }

        const filteredProducts = categoryId
          ? allProducts.filter((prod) => prod.categoria === categoryId)
          : allProducts;

        setProductos(filteredProducts);
        setLoading(false);
      } catch (error) {
        console.error('Error en la carga de los productos', error);
        setLoading(false);
      }
    };

    obtenerProductos();
  }, [categoryId]);

  return (
    <div>
      {loading ? (
        <LoaderComponents />
      ) : (
        <ItemList productos={productos} />
      )}
    </div>
  );
};

export default ItemListContainer;

