
import React, { useState, useEffect } from 'react'; 
import Form from './components/Form'; 
import List from './components/List'; 
import './App.css'; 
//función principal de la aplicación que gestiona la evaluación de alumnos
function App() {

  const [items, setItems] = useState([]);

  const [itemToEdit, setItemToEdit] = useState(null);
  //se ejecuta al cargar la aplicación para recuperar datos del localStorage
  useEffect(() => {
    s
    const storedItems = JSON.parse(localStorage.getItem('items')) || [];
    setItems(storedItems); // Actualiza el estado con los datos recuperados
  }, []); 
 
  useEffect(() => {
   
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]); 

  const addOrUpdateItem = (newItem) => {
    if (itemToEdit) {
      //si hay un item en edición, actualiza ese item específico manteniendo los demás
      setItems(items.map(item =>
        item.id === itemToEdit.id ? { ...item, ...newItem } : item 
      ));
      setItemToEdit(null); //limpia el estado de edición
    } else {
    
      setItems([...items, { id: Date.now(), ...newItem }]); 
    }
  };
  //función para eliminar un alumno de la lista por su ID
  const deleteItem = (id) => {
    //filtra la lista manteniendo solo los items que NO tienen el ID especificado
    setItems(items.filter(item => item.id !== id));
  };
  //funcion para preparar un alumno para edición
  const editItem = (item) => {
    //establece el item seleccionado como el que se va a editar
    setItemToEdit(item);
  };

  return (
    <div className="App"> {}
      <h1>Evaluación de Alumnos</h1> {/* titulo de la aplicación */}
      {}
      <Form addOrUpdateItem={addOrUpdateItem} itemToEdit={itemToEdit} />
      {}
      <List items={items} deleteItem={deleteItem} editItem={editItem} />
    </div>
  );
}

export default App;