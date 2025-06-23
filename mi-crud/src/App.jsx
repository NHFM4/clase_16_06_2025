// Importaciones de React y hooks necesarios
import React, {useState, useEffect} from "react";
// Componentes personalizados
import Form from "./components/Form";  // Para el formulario de añadir/editar
import List from "./components/List";  // Para mostrar la lista de items
// Estilos CSS
import "./App.css";

// Componente principal de la aplicación
function App(){
  // Estado para almacenar la lista de items
  const [items, setItems] = useState([]);
  // Estado para guardar el item que se está editando (null cuando no hay edición)
  const [itemToEdit, setItemToEdit] = useState(null);

  // Efecto que se ejecuta solo al montar el componente (dependencias vacías [])
  // Carga los items guardados en localStorage al iniciar la aplicación
  useEffect(() => {
    // Obtiene los items del localStorage o un array vacío si no hay nada guardado
    const storedItems = JSON.parse(localStorage.getItem("items")) || [];
    setItems(storedItems);  // Actualiza el estado con los items cargados
  }, []);

  // Efecto que se ejecuta cada vez que cambia el estado 'items'
  // Guarda automáticamente los items en localStorage cuando cambian
  useEffect(() => {
    // Convierte el array de items a string y lo guarda en localStorage
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  // Función para añadir o actualizar un item
  const addOrUpdateItem = (value) => {
    if (itemToEdit) {
      // Modo edición: actualiza el item existente
      setItems(items.map(item => 
        item.id === itemToEdit.id ? {...item, value} : item
      ));
      setItemToEdit(null);  // Limpia el item en edición
    } else {
      // Modo añadir: crea un nuevo item con ID único (timestamp actual)
      setItems([
        ...items,
        { id: Date.now(), value }
      ]);
    }
  };

  // Función para eliminar un item por su ID
  const deleteItem = (id) => {
    // Filtra los items, manteniendo solo los que no coinciden con el ID
    setItems(items.filter(item => item.id !== id));
  };

  // Función para iniciar la edición de un item
  const editItem = (item) => {
    setItemToEdit(item);  // Establece el item a editar
  };

  // Renderizado del componente
  return (
    <div className="App">
      <h1>CRUD con LocalStorage</h1>
      {/* Componente Form - recibe la función para añadir/actualizar y el item a editar */}
      <Form addOrUpdateItem={addOrUpdateItem} itemToEdit={itemToEdit} />
      {/* Componente List - muestra los items y recibe funciones para eliminar/editar */}
      <List items={items} deleteItem={deleteItem} editItem={editItem} />
    </div>
  );
}

export default App;