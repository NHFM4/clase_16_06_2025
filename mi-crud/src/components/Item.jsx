// Importación básica de React (necesaria para JSX)
import React from "react";

// Componente Item que recibe props mediante destructuring
function Item({ item, deleteItem, editItem }) {
  // Retorna un elemento de lista (<li>) con:
  return (
    <li>
      {/* Muestra el valor/texto del item */}
      {item.value}
      
      {/* Botón para editar - ejecuta editItem pasando el item completo */}
      <button onClick={() => editItem(item)}>
        Editar
      </button>
      
      {/* Botón para eliminar - ejecuta deleteItem pasando solo el ID */}
      <button onClick={() => deleteItem(item.id)}>
        Eliminar
      </button>
    </li>
  );
}

export default Item;