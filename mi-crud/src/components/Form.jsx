// Importaciones de React y hooks necesarios
import React, { useState, useEffect } from "react";

// Componente Form que recibe props mediante destructuring
function Form({ addOrUpdateItem, itemToEdit }) {
  // Estado para controlar el valor del input
  const [inputValue, setInputValue] = useState('');

  // Efecto que sincroniza el input cuando hay un item para editar
  useEffect(() => {
    if (itemToEdit) {
      // Si hay un item para editar, carga su valor en el input
      setInputValue(itemToEdit.value);
    } else {
      // Si no hay item para editar, limpia el input
      setInputValue('');
    }
  }, [itemToEdit]); // Se ejecuta cuando itemToEdit cambia

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto

    // Solo procede si el input no está vacío (eliminando espacios en blanco)
    if (inputValue.trim()) {
      addOrUpdateItem(inputValue); // Llama a la función padre
      setInputValue(''); // Limpia el input después de enviar
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input controlado por React */}
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)}
      />
      {/* Botón que cambia de texto según el modo (edición/agregar) */}
      <button type="submit">
        {itemToEdit ? 'Actualizar' : 'Agregar'}
      </button>
    </form>
  );
}

export default Form;