// Importa React (necesario para JSX)
import React from "react";
// Importa el componente Item que se usará para renderizar cada elemento
import Item from "./Item";

// Componente List que recibe props mediante destructuring
function List({ items, deleteItem, editItem }) {
  // Retorna una lista no ordenada (<ul>)
  return (
    <ul>
      {/* Mapea el array de items para renderizar cada uno */}
      {items.map((item) => (
        <Item
          key={item.id}           // Key única requerida por React para listas
          item={item}             // Pasa el objeto item completo
          deleteItem={deleteItem} // Función para eliminar items (pasada desde App)
          editItem={editItem}     // Función para editar items (pasada desde App)
        />
      ))}
    </ul>
  );
}

export default List;