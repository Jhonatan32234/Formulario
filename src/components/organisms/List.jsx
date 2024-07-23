/*import React from "react";

const ListaProducto = ({ lista }) => {
  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul>
        {lista ? (
          lista.print().map((producto, index) => (
            <li key={index}>
              <strong>Nombre:</strong> {producto.nombre},{" "}
              <strong>Cantidad:</strong> {producto.cantidad},{" "}
              <strong>Precio:</strong> {producto.precio},{" "}
              <strong>Tipo:</strong> {producto.tipo}
            </li>
          ))
        ) : (
          <li>No hay productos en la lista</li>
        )}
      </ul>
    </div>
  );
};*/


import '../organisms/List.css'
function ListaProducto({lista}) {
  console.log(lista.head)
  return (
  <div id="lista">
    <h1>Productos</h1>
    {lista.head ? (
      <Nodos node={lista.head}></Nodos>
      ):(
      <p>No hay Productos</p>
    )}
  </div>
  );
}

function Nodos( {node} ) {
  console.log(node)
  if (!node) return null;
  return (
    
  <div>
    <div id="datos_producto">
    <p>Nombre: {node.data.nombre}</p>
    <p>Cantidad: {node.data.cantidad}</p>
    <p>Precio: {node.data.precio}</p>
    <p>Tipo: {node.data.tipo}</p>
    </div>
    {node.next && <Nodos node={node.next} />} 
     
    </div>
  );
  
}


export default ListaProducto;
