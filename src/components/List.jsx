import React from "react";
import Item from './Item'; // Importa el componente que representa cada ítem individual

function List({ items, deleteItem, editItem }) {
  return (
    <ul>
      {/* Recorre la lista de ítems y renderiza un componente <Item> por cada uno */}
      {items.map((item) => (
        <Item
          key={item.id}           // Clave única para ayudar a React con el renderizado
          item={item}             // Pasa el ítem completo al componente
          deleteItem={deleteItem} // Función para eliminar ítems
          editItem={editItem}     // Función para editar ítems
        />
      ))}
    </ul>
  );
}

export default List;
