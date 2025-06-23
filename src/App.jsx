import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import List from './components/List';
import './App.css';

function App() {
  // Estado que guarda la lista de ítems
  const [items, setItems] = useState([]);

  // Estado que guarda el ítem que se va a editar
  const [itemToEdit, setItemToEdit] = useState(null);

  // Cargar ítems desde localStorage al iniciar la app
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items')) || [];
    setItems(storedItems);
  }, []);

  // Guardar ítems en localStorage cada vez que cambian
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  // Agrega un nuevo ítem o actualiza uno existente
  const addOrUpdateItem = (value) => {
    if (itemToEdit) {
      // Si hay un ítem para editar, lo actualiza
      setItems(items.map(item => item.id === itemToEdit.id ? { ...item, value } : item));
      setItemToEdit(null); // Limpia el estado de edición
    } else {
      // Si no hay edición, agrega uno nuevo con ID único
      setItems([...items, { id: Date.now(), value }]);
    }
  };

  // Elimina un ítem por su ID
  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  // Selecciona un ítem para editar
  const editItem = (item) => {
    setItemToEdit(item);
  };

  return (
    <div className="App">
      <h1>CRUD con LocalStorage</h1>

      {/* Componente de formulario para agregar/editar */}
      <Form
        addOrUpdateItem={addOrUpdateItem}
        itemToEdit={itemToEdit}
      />

      {/* Lista de ítems con opciones para editar y eliminar */}
      <List
        items={items}
        deleteItem={deleteItem}
        editItem={editItem}
      />
    </div>
  );
}

export default App;

