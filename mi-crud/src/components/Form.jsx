import React, { useState, useEffect } from "react";

// Formulario para agregar o editar un alumno
function Form({ addOrUpdateItem, itemToEdit }) {
  // Guardamos lo que el usuario escribe
  const [nombre, setNombre] = useState('');
  const [asignatura, setAsignatura] = useState('');
  const [promedio, setPromedio] = useState('');

  // Si estamos editando, rellenamos los campos con los datos del alumno
  useEffect(() => {
    if (itemToEdit) {
      setNombre(itemToEdit.nombre);
      setAsignatura(itemToEdit.asignatura);
      setPromedio(itemToEdit.promedio);
    } else {
      // Si no, los dejamos vacíos
      setNombre('');
      setAsignatura('');
      setPromedio('');
    }
  }, [itemToEdit]);

  // Esta función se llama cuando se envía el formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue

    // Solo sigue si los campos no están vacíos
    if (nombre.trim() && asignatura.trim() && promedio.trim()) {
      // Llamamos a la función del padre para agregar o actualizar
      addOrUpdateItem({ nombre, asignatura, promedio });

      // Limpiamos los campos
      setNombre('');
      setAsignatura('');
      setPromedio('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="inputs_block">
      <div className="left">
        <label>Nombre Alumno</label><br />
        <input
          type="text"
          placeholder="Nombre del alumno"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        /><br />

        <label>Asignatura</label><br />
        <input
          type="text"
          placeholder="Asignatura"
          value={asignatura}
          onChange={(e) => setAsignatura(e.target.value)}
          required
        /><br />

        <label>Promedio</label><br />
        <input
          type="number"
          placeholder="Promedio (1.0 - 7.0)"
          step="0.1"
          min="1"
          max="7"
          value={promedio}
          onChange={(e) => setPromedio(e.target.value)}
          required
        /><br />
        <button type="submit">
          {itemToEdit ? "Actualizar" : "Agregar"}
        </button>
      </div>
    </form>
  );
}

export default Form;
