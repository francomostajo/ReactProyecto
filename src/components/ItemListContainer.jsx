import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
  const { categoriaId } = useParams();
  const [productos, setProductos] = useState([]);
  const pedirDatos = () => {
    return new Promise((resolve) => {
      const productos =[{ id: 1, titulo:"Colgante Led Toronto",descripcion:"este producto es expectacular",precio:"2000",categoria:"colgantes",img:"https://http2.mlstatic.com/D_Q_NP_982664-MLA73161121488_122023-B.jpg"},
                  { id: 2, titulo:"Colgante Led Trevor",descripcion:"este producto es expectacular",precio:"3000",categoria:"colgantes", img:"https://http2.mlstatic.com/D_Q_NP_836699-MLA72447009312_102023-B.jpg"},
                  { id: 3, titulo:"Lámpara Colgante Sofía Loren",descripcion:"este producto es expectacular",precio:"3000",categoria:"colgantes", img:"https://http2.mlstatic.com/D_Q_NP_971954-MLA54960289642_042023-B.jpg"},
                  { id: 4, titulo:"Aplique 2 Luces Oro",descripcion:"este producto es expectacular",precio:"3000",categoria:"pared", img:"https://http2.mlstatic.com/D_Q_NP_758990-MLA71429556422_092023-B.jpg"},
                  { id: 5, titulo:"Aplique De Pared Vintage Dorado",descripcion:"este producto es expectacular",precio:"3000",categoria:"pared", img:"https://http2.mlstatic.com/D_Q_NP_994487-MLA52449765758_112022-B.jpg"},
                  { id: 6, titulo:"Aplique 2 Luces Lyon Renny",descripcion:"este producto es expectacular",precio:"3000",categoria:"pared", img:"https://http2.mlstatic.com/D_Q_NP_742136-MLA54491185321_032023-B.jpg"},
                  { id: 7, titulo:"Lampara Velador Gloria Copen",descripcion:"este producto es expectacular",precio:"3000",categoria:"mesa", img:"https://http2.mlstatic.com/D_Q_NP_817519-MLA71672961784_092023-B.jpg"},
                  { id: 8, titulo:"Lampara De Mesa Velador Hongo",descripcion:"este producto es expectacular",precio:"3000",categoria:"mesa", img:"https://http2.mlstatic.com/D_Q_NP_665193-MLA72734267570_112023-B.jpg"},
                  { id: 9, titulo:"Lampara De Mesa Atomo",descripcion:"este producto es expectacular",precio:"4000",categoria:"mesa", img:"https://http2.mlstatic.com/D_Q_NP_761064-MLA71657079717_092023-B.jpg"},
                  { id: 10, titulo:"Colgante Araña Explosión",descripcion:"este producto es expectacular",precio:"3000",categoria:"colgantes", img:"https://http2.mlstatic.com/D_Q_NP_870826-MLA53255702403_012023-B.jpg"}
]
      setTimeout(() => {
        resolve(productos);
      }, 500);
    });
  };

  useEffect(() => {
    pedirDatos().then((res) => {
      if (categoriaId) {
        setProductos(res.filter((prod) => prod.categoria === categoriaId));
      } else {
        setProductos(res);
      }
    });
  }, [categoriaId]);

  return <ItemList productos={productos} />;
};

export default ItemListContainer;



