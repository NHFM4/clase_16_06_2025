import React from "react";

// Muestra los datos de un solo alumno
function Item({ item, deleteItem, editItem }) {
  return (
    <li>
      {/* Mostramos los datos del alumno */}
      <div className="inline">

        <div className="alumno">
          <strong>Alumno:</strong> {item.nombre} <br />
          <strong>Asignatura:</strong> {item.asignatura} <br />
          <strong>Promedio:</strong> {item.promedio} <br />
          <strong>Estado:</strong> {item.estado}
        </div>

        {/* Botones para editar o eliminar */}
        <div className="derecha">
          <button onClick={() => editItem(item)}>Editar</button>
          <button onClick={() => deleteItem(item.id)}>Eliminar</button>
        </div>

      </div>
    </li>
  );
}

export default Item;
