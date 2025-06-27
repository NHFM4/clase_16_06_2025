import { useState, useEffect } from "react";
import moon from './assets/moon.gif';
import Form from "./components/Form";
import List from "./components/List";
import "./App.css";

// Componente principal de la app
function App() {

  // Guarda los alumnos (cada uno tiene nombre, asignatura, promedio y estado)
  const [items, setItems] = useState([]);

  // Esto guarda el alumno que se está editando (si hay alguno)
  const [itemToEdit, setItemToEdit] = useState(null);

  // Cuando se carga la página, busca si ya hay datos en el localStorage
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("items")) || [];
    setItems(storedItems);
  }, []);

  // Cada vez que cambian los alumnos, los guarda en localStorage
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  // Esta función devuelve un estado según el promedio del alumno
  const getEstado = (promedio) => {
    if (promedio >= 1 && promedio <= 3.9) return "Deficiente";
    if (promedio >= 4.0 && promedio <= 5.5) return "Con mejora";
    if (promedio >= 5.6 && promedio <= 6.4) return "Buen trabajo";
    if (promedio >= 6.5 && promedio <= 7.0) return "Destacado";
    return "Promedio inválido";
  };

  // Esta función agrega o actualiza un alumno
  const addOrUpdateItem = ({ nombre, asignatura, promedio }) => {
    const estado = getEstado(parseFloat(promedio)); // Sacamos el estado

    if (itemToEdit) {
      // Si estamos editando, actualizamos el alumno
      setItems(items.map(item =>
        item.id === itemToEdit.id
          ? { ...item, nombre, asignatura, promedio, estado }
          : item
      ));
      setItemToEdit(null); // Quitamos el modo edición
    } else {
      // Si no, agregamos un nuevo alumno
      setItems([
        ...items,
        {
          id: Date.now(), // Le damos un ID único
          nombre,
          asignatura,
          promedio,
          estado
        }
      ]);
    }
  };

  // Elimina un alumno por su ID
  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  // Activa el modo edición para un alumno
  const editItem = (item) => {
    setItemToEdit(item);
  };

  // Lo que se muestra en pantalla
  return (
    <div className="App center">
      <img src={moon} alt="moon" />
      <h1>Evaluación de Alumnos</h1>
      <Form addOrUpdateItem={addOrUpdateItem} itemToEdit={itemToEdit} />
      <List items={items} deleteItem={deleteItem} editItem={editItem} />
    </div>
  );
}

export default App;
